"use client"

import { SiteHeader } from "@/components/site-header"
import Head from "next/head"
import { useEffect, useState } from "react"
import { useAuthStore } from "@/store/use-auth-store"
import { useImagePreview } from "@/hooks/use-image-preview"
import axiosClient from "@/lib/axiosClient"
import { Profile } from "@/typedata/account/profile"
import { Password } from "@/typedata/account/password"
import { FormAccount } from "@/components/organism/FormAccountV1"
import { objectToFormData } from "@/lib/objectToFormData"


export default function PageClient({ }) {
    const { auth } = useAuthStore();
    const [profileForm, setProfileForm] = useState<Profile | Record<string, unknown>>({});
    const [passwordForm, setPasswordForm] = useState<Password | Record<string, unknown>>({});

    useEffect(() => {
        setProfileForm({
            name: auth?.user?.name || "",
            email: auth?.user?.email || "",
            image: null,
            imageUrl: auth?.user?.image_url || "",
        });
    }, [auth]);

    const { handleFileChange, imagePreview } = useImagePreview();

    return <>
        {/* Header */}
        <Head>Settings</Head>

        <SiteHeader title="Settings" />

        {/* Content */}
        <FormAccount
            avatarPreview={imagePreview}
            profileForm={profileForm}
            passwordForm={passwordForm}
            handleProfileChange={(key: string, value: string) => {
                setProfileForm({ ...profileForm, [key]: value });
            }}
            handlePasswordChange={(key: string, value: string) => {
                setPasswordForm({ ...passwordForm, [key]: value });
            }}
            handleFileChange={(e, key) => {
                handleFileChange(e, (file) => {
                    setProfileForm({ ...profileForm, [key]: file });
                })
            }}
            onUpdateProfile={(profileForm) => {
                const formData = objectToFormData(profileForm);

                formData.append("_method", "PUT");

                axiosClient.post("api/account/update-profile", formData, { headers: { "Content-Type": "multipart/form-data" } });
            }}
            onUpdatePassword={(passwordForm) => {
                axiosClient.put("api/account/update-password", passwordForm).then(() => {
                    setPasswordForm({});
                });
            }}
        />

    </>
}



