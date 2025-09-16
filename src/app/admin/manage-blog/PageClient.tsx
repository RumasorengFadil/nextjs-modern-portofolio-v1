"use client"

import { SiteHeader } from "@/components/site-header"
import Head from "next/head"
import { PlusCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { AxiosResponse } from "axios"
import axiosClient from "@/lib/axiosClient"
import { Pagination } from "@/typedata/pagination/pagination"
import { Blog } from "@/typedata/blog/blog"
import BlogTable from "@/components/organism/BlogTableV1"
import ButtonLink from "@/components/molecule/ButtonLink"

export default function PageClient({ }) {
    const [pagination, setPagination] = useState<Pagination<Blog> | null>(null);
    const params = useSearchParams();

    useEffect(() => {
        axiosClient(`api/blogs?paginate=5${params ? `${params.toString()}` : ""}`).then(res => {
            setPagination(res.data.data);
            console.log(res.data.data);
        });
    }, [params]);

    return <>
        {/* Header */}
        <Head>Manage Blog</Head>

        <SiteHeader title="Manage Blog" />

        {/* Content */}
        <ButtonLink
            href={"/admin/manage-blog/create"}
            icon={PlusCircle}
            title="Create Blog"
        />

        {!pagination ? (<div>Loading...</div>) :
            <BlogTable
                onDelete={(res) => {
                    const axRes = res as AxiosResponse;
                    setPagination(axRes.data.pagination);
                }}
                pagination={pagination}
                searchDefValue={params.get("search")}
            />
        }
    </>
}



