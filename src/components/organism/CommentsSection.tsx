// resources/js/Components/CommentSection.tsx
import React, { FormEventHandler } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { CommentBlogForm } from "@/typedata/blog/commentBlogForm"
import { Blog } from "@/typedata/blog/blog"
import ButtonWithLoading from "./ButtonWithLoadingV1"

export default function CommentsSection({
  blog,
  form,
  loading = false,
  setData,
  onSubmit
}: {
  blog: Blog,
  form: CommentBlogForm,
  loading?:boolean
  onSubmit: FormEventHandler,
  setData: <K extends keyof CommentBlogForm> (key: K, value: CommentBlogForm[K]) => void
}) {
  const { comments } = blog;
  return (
    <div className="space-y-6 mt-12">
      <h3 className="text-lg font-semibold">💬 Komentar</h3>

      {/* Komentar Form */}
      <Card>
        <CardContent className="p-4 space-y-3">
          <form onSubmit={onSubmit} className="space-y-3">
            <Input
              type="text"
              placeholder="Nama kamu"
              value={form.name}
              onChange={(e) => setData("name", e.target.value)}
            />
            <Textarea
              placeholder="Tulis komentarmu..."
              value={form.content}
              onChange={(e) => setData("content", e.target.value)}
            />
            <ButtonWithLoading
              isLoading={loading}
              disabled={loading}
              type="submit"
              className="w-full"
            >
              Kirim Komentar
            </ButtonWithLoading>
          </form>
        </CardContent>
      </Card>

      {/* List Komentar */}
      <div className="space-y-4">
        {comments?.length === 0 && (
          <p className="text-sm text-muted-foreground">Belum ada komentar.</p>
        )}

        {comments?.map((comment) => (
          <Card key={comment.id}>
            <CardContent className="p-4">
              <div className="text-sm font-semibold">{comment.name}</div>
              <div className="text-sm text-muted-foreground">
                {new Date(comment.created_at).toLocaleString("id-ID", {
                  dateStyle: "short",
                  timeStyle: "short",
                })}
              </div>
              <p className="mt-2 text-sm">{comment.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
