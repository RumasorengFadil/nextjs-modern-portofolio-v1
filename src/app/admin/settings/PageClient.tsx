"use client"

import { SiteHeader } from "@/components/site-header"
import Head from "next/head"
import { useEffect, useState } from "react"
import axiosClient from "@/lib/axiosClient"
import { SettingsTabs } from "@/components/organism/SettingsTabsV1"
import { Settings } from "@/typedata/settings/settings"
import { useImagePreview } from "@/hooks/use-image-preview"
import { useThemeCookie } from "@/hooks/use-theme-cookie"


export default function PageClient({ }) {
    const [form, setForm] = useState<Settings>({
        title: "",
        description: "",
        metaTitle: "",
        metaDescription: "",
        commentsEnabled: false,
        theme: "",
        logo: "",
        logoUrl: "",
        ogImage: "",
        ogImageUrl: "",
    });
    const { setNewTheme } = useThemeCookie();
    useEffect(() => {
        axiosClient.get("/api/settings").then(res => {
            setForm({
                ...form,
                title: res.data.data.title || "",
                description: res.data.data.description || "",
                metaTitle: res.data.data.metaTitle || "",
                metaDescription: res.data.data.metaDescription || "",
                commentsEnabled: res.data.data.commentsEnabled || false,
                theme: res.data.data.theme || "",
                logoUrl: res.data.logo || "",
                ogImageUrl: res.data.ogImage || "",
                logo: "",
                ogImage: "",
            });
        });
    }, []);


    const { handleFileChange } = useImagePreview();

    return <>
        {/* Header */}
        <Head>Settings</Head>

        <SiteHeader title="Settings" />

        {/* Content */}
        {!form ? <div>Loading...</div> : <SettingsTabs
            form={form}
            handleChange={(key: string, value: string | boolean) => {
                setForm({ ...form, [key]: value });
            }}
            handleFileChange={(e, key) => {
                handleFileChange(e, (file) => {
                    setForm({ ...form, [key]: file });

                })
            }}
            onSubmit={() => {
                axiosClient.post("/api/settings/store", form, { headers: { "Content-Type": "multipart/form-data" } }).then(res => {
                    setNewTheme(res.data.data.theme.toLowerCase());
                });
            }}

        />}

    </>
}



