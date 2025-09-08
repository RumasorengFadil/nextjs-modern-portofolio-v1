"use client"

import Head from "next/head"
import { useForm } from "@/hooks/useForm";
import { FormEventHandler, useEffect } from "react";
import ResetPasswordForm from "@/design-system/organisms/ResetPasswordForm";
import { ResetPassForm } from "@/typdata/resetPassForm";
import { useSearchParams } from "next/navigation";
import { useRouter } from "nextjs-toploader/app";

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



