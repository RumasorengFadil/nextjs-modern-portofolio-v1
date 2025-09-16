import { useAuthStore } from "@/store/use-auth-store";
import { CustomAxiosRequestConfig } from "@/typedata/axios/customAxiosRequestConfig";
import axios, { AxiosError, AxiosRequestHeaders } from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const axiosServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // absolute URL dari .env
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

axiosServer.interceptors.request.use(async (config) => {
  const auth = useAuthStore.getState().auth;

  if (auth?.access_token) {
    config.headers.Authorization = `Bearer ${auth?.access_token}`;
  }
  return config;
});

axiosServer.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const cookieStore = cookies();
    const refreshToken = (await cookieStore).get("refresh_token")?.value;

    const originalRequest = error.config as CustomAxiosRequestConfig;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/refresh-no-rotate`,
          null,
          {
            headers: {
              Cookie: `refresh_token=${refreshToken}`,
            },
          }
        );

        originalRequest.headers = originalRequest.headers || {};
        (
          originalRequest.headers as AxiosRequestHeaders
        ).Authorization = `Bearer ${res.data?.data.access_token}`;

        //Retry the request
        return axiosServer(originalRequest);
      } catch (err) {
        console.log(err);
        redirect("/auth/login");
      }
    }

    console.log(error);
    return Promise.reject(error);
  }
);

export default axiosServer;
