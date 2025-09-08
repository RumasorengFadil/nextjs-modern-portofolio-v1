"use client"

import Head from "next/head"
import { FormEventHandler, useEffect } from "react";
import { ResetPassForm } from "@/typedata/auth/resetPassForm";
import { useSearchParams } from "next/navigation";
import { useRouter } from "nextjs-toploader/app";
import { useForm } from "@/hooks/use-form";
import ResetPasswordForm from "@/components/organism/ResetPasswordFormV1";

export default function PageClient({ }) {
    const params = useSearchParams();
    const router = useRouter();
    const token = params.get("token");
    const email = params.get("email");

    const { data, setData, submit, loading } = useForm<ResetPassForm>({
        token: "",
        email: "",
        password: '',
        password_confirmation: '',
    })

    useEffect(() => {
        setData("token", token ?? "");
    }, [token, setData]);

    useEffect(() => {
        setData("email", email ?? "");
    }, [email, setData]);

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        submit("post", "api/reset-password", {
            onSuccess: (res) => {
               console.log(res);
               router.replace("/auth/login");
            }
        });
    };

    return <>
        {/* Header */}
        <Head>Manage Blog</Head>

        {/* Content */}
        <ResetPasswordForm
            form={data}
            loading={loading}
            setData={setData}
            onSubmit={handleSubmit}
        />
    </>
}



