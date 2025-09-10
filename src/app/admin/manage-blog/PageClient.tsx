"use client"

import { SiteHeader } from "@/components/site-header"
import Head from "next/head"

export default function PageClient({ }) {

    return <>
        {/* Header */}
        <Head>Manage Blog</Head>

        {/* Site Header */}
        <SiteHeader title="Manage Blog" />

        {/* Content */}
        <h1>Manage Blog</h1>
    </>
}



