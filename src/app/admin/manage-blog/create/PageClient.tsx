"use client"

import { SiteHeader } from "@/components/site-header"
import Head from "next/head"

export default function PageClient({ }) {

    return <>
        {/* Header */}
        <Head>Create Blog</Head>

        <SiteHeader title="Create Blog" />

        <h1>Create Blog</h1>
    </>
}



