import { useState } from "react"
import { Button } from "@/components/ui/button"
import { UploadCloud } from "lucide-react"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export function CoverImageUpload({
  onChange,
  initialValue,
  className
}: {
  onChange?: (file: File | string) => void
  initialValue?: string,
  className?: string | undefined,
}) {
  const [preview, setPreview] = useState<string | null>(initialValue || null)
  // const [file, setFile] = useState<File | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      // setFile(selectedFile)
      const url = URL.createObjectURL(selectedFile)
      setPreview(url)
      onChange?.(selectedFile)
    }
  }
  return (
    <div className={"bg-muted border rounded-md h-[460px] flex flex-col items-center justify-center text-center space-y-4 " + className}>
      {preview !== null ? (
        <div className="relative h-full w-full">
          <div className="relative w-full h-full">
            <Image
              src={preview}
              alt="Cover"
              className="h-full w-full rounded-md object-cover shadow"
              priority
              fill
              />
          </div>

          <Button
            variant="destructive"
            className="absolute top-2 right-2 text-xs"
            onClick={() => {
              // setFile(null)
              setPreview(null)
              onChange?.("")
            }}
          >
            Remove
          </Button>
        </div>
      ) : (
        <>
          <div className="relative w-max h-max">
            <Image
              src="https://img.icons8.com/ios/100/image--v1.png"
              alt="placeholder"
              className="w-16 h-16 opacity-60"
              fill
              priority
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Add a cover image or video to your article.
          </p>
          <label htmlFor="file-upload">
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
            />
            <Label htmlFor="file-upload" className="flex bg-background p-2 cursor-pointer rounded-sm gap-2">
              <UploadCloud className="w-4 h-4" />
              Upload from computer
            </Label>

          </label>
        </>
      )}
    </div>
  )
}
