"use client"

import { SiteHeader } from "@/components/site-header"
import TailwindAdvancedEditor from "@/components/tailwind/advanced-editor"
import { useForm } from "@/hooks/use-form"
import { useUnsavedChanges } from "@/hooks/use-unsaved-changes"
import axiosClient from "@/lib/axiosClient"
import { defaultEditorContent } from "@/lib/content"
import { BlogForm } from "@/typedata/blog/blogForm"
import { Category } from "@/typedata/blog/category"
import { AxiosResponse } from "axios"
import Head from "next/head"
import { useRouter } from "nextjs-toploader/app"
import { useEffect, useState } from "react"

export default function PageClient({ }) {
    const router = useRouter();
    const [categories, setCategories] = useState<Category[]>();
    const { unsaved, setUnsaved } = useUnsavedChanges();

    useEffect(() => {
        axiosClient.get("api/blog/create").then(res => setCategories(res.data.data));
    }, [])

    const { submit, setData, data } = useForm<BlogForm>({
        id:"",
        title: "",
        tags: [],
        status: "draft",
        content: "",
        contentJSON: "",
        thumbnail: "",
        categoryId: "",
        image_url: ""
    })

    const handleChange = <K extends keyof BlogForm>(key: K, value: BlogForm[K]) => {
        setUnsaved(true);
        setData(key, value);
    }

    const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        submit("post", "api/blog/store", {
            onSuccess: (res: AxiosResponse) => {
                router.replace(`/admin/manage-blog/edit/${res.data.data.id}`);
                setUnsaved(false);
            }
        }, { headers: { "Content-Type": "multipart/form-data" } });

    }
    return <>
        {/* Header */}
        <Head>Create Blog</Head>

        <SiteHeader title="Create Blog" />

        <TailwindAdvancedEditor
            onChange={handleChange}
            data={data}
            categories={categories}
            onSave={handleSave}
            unsaved={unsaved}
        />
    </>
}



