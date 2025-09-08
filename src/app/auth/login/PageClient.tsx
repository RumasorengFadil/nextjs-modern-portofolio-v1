"use client"

import Head from "next/head"
import { FormEventHandler } from "react"
import { LoginFormN } from "@/design-system/organisms/LoginFormN"
import { useForm } from "@/hooks/useForm"
import { Credentials } from "@/typdata/credentials"
import { useRouter } from "nextjs-toploader/app"
import { useAuthStore } from "@/store/useAuthStore"

export default function PageClient({ }) {
    const { setAuth } = useAuthStore();

    const router = useRouter();
    const { data, setData, submit, loading, reset } = useForm<Credentials>({
        email: '',
        password: '',
        remember: false,
    });

    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        submit("post", "api/login", {
            onSuccess: (res) => {
                router.replace("/dashboard");
                setAuth(res.data.data);
            },
            onError: () => {
                reset("password");
            }
        }, { withCredentials: true });
    };

    return <>
        {/* Header */}
        <Head>Manage Blog</Head>

        {/* Content */}
        <LoginFormN form={data} onSubmit={onSubmit} loading={loading} setData={setData} />
    </>
}



