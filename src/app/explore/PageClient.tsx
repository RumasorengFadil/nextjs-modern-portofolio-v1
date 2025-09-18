"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Route } from "next"
import { useForm } from "@/hooks/use-form";
import { BlogExploreData } from "@/typedata/blog/blogExploreData";
import { SubscribeForm } from "@/typedata/explore/subscribeForm";
import BlogExplore from "@/components/organism/BlogExploreV1";

export default function PageClient({ data }: { data: BlogExploreData }) {
    const [blogs, setBlogs] = useState<BlogExploreData>(data);
    const router = useRouter();
    const { submit, loading } = useForm({});

    const handleSearch = (e: React.FormEvent, searchKey: string) => {
        e.preventDefault();

        const url = new URL(window.location.href);

        url.searchParams.set("search", searchKey ?? "");

        url.searchParams.delete("page");

        const params = url.searchParams.toString();

        router.push(`${url.pathname}${params ? `?${params}` : ""}` as Route, { scroll: false });

        submit('get', `api/explore${params ? `?${params}` : ""}`, {
            onSuccess: (res => {
                setBlogs(res.data.data);
            })
        });
    }
    const handleTag = (e: React.FormEvent, tagSlug: string) => {
        e.preventDefault();

        const url = new URL(window.location.href);

        url.searchParams.set("tag", tagSlug);

        const params = url.searchParams.toString();

        router.push(`${url.pathname}?${params}` as Route, { scroll: false });

        submit('get', `api/explore${params ? `?${params}` : ""}`, {
            onSuccess: (res => {
                setBlogs(res.data.data);
            })
        });
    }
    const handleCategory = (e: React.FormEvent, catSlug: string) => {
        e.preventDefault();

        const url = new URL(window.location.href);

        url.searchParams.set("category", catSlug);

        const params = url.searchParams.toString();

        router.push(`${url.pathname}?${params}` as Route, { scroll: false });

        submit('get', `api/explore${params ? `?${params}` : ""}`, {
            onSuccess: (res => {
                setBlogs(res.data.data);
            })
        });
    }
    const handleOnLoadMore = (e: React.FormEvent, nextPageUrl: string) => {
        e.preventDefault();
        
        const url = new URL(nextPageUrl);

        const params = url.searchParams.toString();

        router.push(`${url.pathname.replace("/api","")}?${params}` as Route, { scroll: false });

        submit('get', nextPageUrl, {
            onSuccess: (res => {
                setBlogs(res.data.data);
            })
        });
    }
    const handleSubscribe = (e: React.FormEvent, subscribeForm?: SubscribeForm) => {
        e.preventDefault();

        submit("post", "api/newsletter/store", {},{}, subscribeForm);
    }
    return <>
        {/* Content */}
        {!blogs ? (<div>Loading...</div>) :
            <BlogExplore
                blogs={blogs}
                loading={loading}
                onSearch={handleSearch}
                onTagClick={handleTag}
                onCatClick={handleCategory}
                onLoadMore={handleOnLoadMore}
                onSubscribe={handleSubscribe}
            />
        }
    </>
}



