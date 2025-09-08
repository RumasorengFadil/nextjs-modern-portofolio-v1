"use client"
import axiosClient from "@/lib/axiosClient";
import { useRouter } from "nextjs-toploader/app";


const Logout = () => {
    const router = useRouter();

    axiosClient.post("/api/logout", null, { baseURL: process.env.NEXT_PUBLIC_BASE_URL, withCredentials: true })
        .then(res => {
            if (res.status !== 200) return;

            router.push("/")
        })
};
export default Logout;
