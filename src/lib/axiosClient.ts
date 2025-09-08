"use client";
import axios, { AxiosError, AxiosRequestHeaders, AxiosResponse } from "axios";
import { showToasts } from "./showToasts";
import { useTopLoader } from "nextjs-toploader";
import { useAuthStore } from "@/store/use-auth-store";
import { CustomAxiosRequestConfig } from "@/typedata/axios/customAxiosRequestConfig";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // simpan di .env
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000, // 10 detik
  withCredentials: true,
});

// Interceptor request (misalnya untuk token)
axiosClient.interceptors.request.use(async (config) => {
  useTopLoader().start();

  const auth = useAuthStore.getState().auth;

  if (auth?.access_token) {
    config.headers.Authorization = `Bearer ${auth?.access_token}`;
  }
  return config;
});

// Interceptor response (misalnya handle error global)
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    useTopLoader().done();

    if (response.data.message) {
      showToasts([response.data.message], { type: "success" });
    }

    return Promise.resolve(response);
  },
  async function (error: AxiosError) {
    useTopLoader().done();
    const originalRequest = error.config as CustomAxiosRequestConfig;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/refresh`,
          null,
          {
            withCredentials: true,
          }
        );
        originalRequest.headers = originalRequest.headers || {};
        (
          originalRequest.headers as AxiosRequestHeaders
        ).Authorization = `Bearer ${res.data.data.access_token}`;

        return axiosClient(originalRequest);
      } catch (err: unknown) {
        console.log(err);
      }
    }

    if (error.response?.status === 422) {
      showToasts((error.response as AxiosResponse).data.errors, {
        type: "error",
      });
    }

    if (error.code === "ECONNABORTED") {
      showToasts("⏱️ Request timeout. Please try again.", {
        type: "error",
      });
    }

    console.log(error);
    return Promise.reject(error);
  }
);

export default axiosClient;
