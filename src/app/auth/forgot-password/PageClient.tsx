"use client"

import Head from "next/head"
import { ForgotPassForm } from "@/design-system/organisms/ForgotPassForm";
import { useForm } from "@/hooks/useForm";
import { ForgotPassForm as ForgotPassFormType } from "@/typdata/forgotPassForm";
import { FormEventHandler, useState } from "react";

export default function PageClient({ }) {
    const { data, setData, submit, loading } = useForm<ForgotPassFormType>({
        email: '',
    })
    const [status, setStatus] = useState<boolean>(false);

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        submit("post", "api/forgot-password", {
            onSuccess: (res) => {
                setStatus(res.data.status);
            }
        });
    };

    return <>
        {/* Header */}
        <Head>Manage Blog</Head>

        {/* Content */}
        <ForgotPassForm
            form={data}
            loading={loading}
            setData={setData}
            onSubmit={handleSubmit}
            status={status}
        />
    </>
}



