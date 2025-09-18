// resources/js/Components/BlogExplore.jsx
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

import { BlogExploreData } from "@/typedata/blog/blogExploreData"
import { SubscribeForm } from "@/typedata/explore/subscribeForm"
import SearchInput from "../SearchInput"
import BlogCard from "../BlockCard"
import BlogSidebar from "../BlogSidebar"

export default function BlogExplore({
    blogs,
    loading = false,
    onSearch,
    onSubscribe,
    onTagClick,
    onCatClick,
    onLoadMore,
}: {
    blogs: BlogExploreData
    loading?: boolean
    onSearch: (e: React.FormEvent, key: string) => void
    onSubscribe: (e: React.FormEvent, subscribeForm?: SubscribeForm) => void
    onTagClick: (e: React.FormEvent, slug: string) => void
    onCatClick: (e: React.FormEvent, catSlug: string) => void
    onLoadMore: (e: React.FormEvent, nextPageUrl: string) => void
}) {
    const { posts, nextPageUrl } = blogs;
    return (
        <div>
            <div className="max-w-3xl mb-6">
                <h1 className="text-3xl font-bold mb-2">🧠 Eksplorasi Blog</h1>
                <p className="text-muted-foreground mb-4">Temukan topik menarik dari Fadil Rumasoreng.</p>

                <SearchInput onSearch={onSearch} defaultValue={blogs.searchKey} />
            </div>

            {/* Tag */}
            <div>
                <h3 className="text-sm font-medium mb-2">{blogs.tags ? "Tag" : ""}</h3>
                <ScrollArea className="whitespace-nowrap max-w-full">
                    <div className="flex gap-2">
                        {blogs.tags?.map((tag) => {
                            return <div key={tag.id}>
                                {Boolean(tag.blogs?.length) &&
                                    <div className={`text-xs px-3 py-1 border  cursor-pointer rounded-full text-muted-foreground hover:bg-muted transition  ${blogs.tagSlug === tag.slug ? "bg-muted" : ""}`} onClick={(e) => onTagClick(e, tag.slug !== blogs.tagSlug ? tag.slug : "")} key={tag.id}>
                                        #{tag.name}
                                    </div>
                                }
                            </div>
                        })}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-6">
                <div className="md:col-span-2 space-y-8">
                    {posts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}

                    {nextPageUrl && (
                        <div className="text-center mt-8">
                            <button
                                onClick={(e) => onLoadMore(e, blogs.nextPageUrl)}
                                disabled={loading}
                                className="text-sm px-6 py-2 border rounded-full text-foreground border-foreground/30 cursor-pointer hover:bg-muted transition"
                            >
                                {loading ? "Memuat..." : "Load More"}
                            </button>
                        </div>
                    )}
                </div>
                <BlogSidebar loading={loading} onSubscibe={onSubscribe} onCatClick={onCatClick} blogs={blogs} />
            </div>
        </div>
    )
}
