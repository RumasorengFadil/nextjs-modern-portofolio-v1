import { MessageCircle } from "lucide-react"
import { format } from "date-fns"
import Link from "next/link"
import Image from "next/image"
import { Blog } from "@/typedata/blog/blog"

export default function BlogCard({ post }: { post: Blog }) {
  return (
    <Link
      href={`/explore/${post.slug}`}
      className="group block bg-background rounded-xl border p-5 hover:shadow-md hover:shadow-card-foreground/20 transition"
    >
      <div className="flex flex-col md:flex-row gap-5">
        {post.thumbnail && (
          <div className="relative w-full md:w-48 h-32 object-cover rounded-md">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}${post.thumbnail}`}
              alt={post.title}
              className="object-cover"
              priority
              fill
            />
          </div>

        )}

        <div className="flex-1">
          {/* Title */}
          <h2 className="text-2xl font-bold mb-2 transition">
            {post.title}
          </h2>

          {/* Meta info */}
          <div className="text-sm text-gray-500 flex items-center gap-2 flex-wrap mb-2">
            <span>{post.user?.name}</span>
            <span>· {format(new Date(post.published_at), "dd MMM yyyy")}</span>
            <span className="flex items-center gap-1">
              · <MessageCircle className="w-4 h-4" />
              {post.comments?.length ?? 0}
            </span>
          </div>

          {/* Excerpt */}
          <p className="text-sm text-gray-500 line-clamp-2 mb-2">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags?.map((tag) => (
              <span
                key={tag.tag.name}
                className="text-xs text-gray-500 border px-2 py-0.5 rounded-full"
              >
                #{tag.tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
