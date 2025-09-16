import { Card, CardContent } from "@/components/ui/card"
import { Blog } from "@/typedata/blog/blog"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"



export default function BlogNavigation({ prevBlog, nextBlog }: {prevBlog:Blog, nextBlog:Blog}) {
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-12">
      {prevBlog && (
        <Card>
          <CardContent className="p-4">
            <Link href={`/explore/${prevBlog.slug}`} className="flex items-center gap-3 text-sm font-medium hover:underline">
              <ArrowLeft className="w-4 h-4" />
              {prevBlog.title}
            </Link>
          </CardContent>
        </Card>
      )}

      {nextBlog && (
        <Card>
          <CardContent className="p-4 text-right">
            <Link href={`/explore/${nextBlog.slug}`} className="flex items-center gap-3 justify-end text-sm font-medium hover:underline">
              {nextBlog.title}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
