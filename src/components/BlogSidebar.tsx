import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Category } from "@/typedata/blog/category"
import { BlogExploreData } from "@/typedata/blog/blogExploreData"
import { SubscribeForm } from "@/typedata/explore/subscribeForm"
import ButtonWithLoading from "./organism/ButtonWithLoadingV1"

export default function BlogSidebar({
  blogs,
  loading = false,
  onCatClick,
  onSubscibe,
}: {
  blogs: BlogExploreData,
  loading?: boolean,
  onCatClick: (e: React.FormEvent, catSlug: string) => void
  onSubscibe: (e: React.FormEvent, subscribeForm?: SubscribeForm) => void
}) {
  const [subscribeForm, setSubscribeForm] = useState<SubscribeForm>();
  return (
    <div className="space-y-6">
      {/* Populer */}
      <Card>
        <CardContent className="p-4 space-y-3">
          <h3 className="text-base font-semibold">🔥 Artikel Populer</h3>
          <ul className="space-y-2">
            {blogs.mostPopularPosts?.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/explore/${post.slug}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Kategori */}
      <Card>
        <CardContent className="p-4 space-y-3">
          <h3 className="text-base font-semibold">📂 Kategori</h3>
          <div className="flex flex-wrap gap-2">
            {blogs.categories.map((cat: Category) => (
              <div
                onClick={(e) => onCatClick(e, cat.slug !== blogs.catSlug ? cat.slug : "")}
                key={cat.slug}
                className={`text-xs px-3 py-1 border cursor-pointer rounded-full text-muted-foreground hover:bg-muted transition ${blogs.catSlug === cat.slug ? "bg-muted" : ""}`}
              >
                {cat.name}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Newsletter */}
      <Card>
        <CardContent className="p-4 space-y-3">
          <h3 className="text-base font-semibold">📬 Berlangganan</h3>
          <form
            onSubmit={(e) => onSubscibe(e, subscribeForm)}
            className="space-y-2"
          >
            <Input onChange={(e) => setSubscribeForm({ email: e.target.value })} value={subscribeForm?.email ?? ""} type="email" name="email" placeholder="Email kamu" />
            <ButtonWithLoading isLoading={loading} disabled={loading} type="submit" className="w-full cursor-pointer">
              Langganan
            </ButtonWithLoading>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
