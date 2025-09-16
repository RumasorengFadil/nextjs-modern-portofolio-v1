import * as React from "react"
import { X } from "lucide-react"
import { Badge } from "../ui/badge"

interface TagInputInlineProps {
    tags: string[]
    setTags: (tags: string[]) => void
    placeholder?: string,
    className?: string
}

export const TagInputInline: React.FC<TagInputInlineProps> = ({
    tags,
    setTags,
    placeholder = "+ Add Tag",
    className,
}) => {
    const [inputValue, setInputValue] = React.useState("")

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && inputValue.trim() !== "") {
            e.preventDefault()
            if (!tags.includes(inputValue.trim())) {
                setTags([...tags, inputValue.trim()])
            }
            setInputValue("")
        } else if (e.key === "Backspace" && inputValue === "" && tags.length > 0) {
            // Optional: hapus tag terakhir kalau backspace ditekan saat kosong
            setTags(tags.slice(0, -1))
        }
    }

    const removeTag = (index: number) => {
        console.log("hai");
        setTags(tags.filter((_, i) => i !== index))
    }

    return (
        <div className={className}
        >
            <div className="flex items-center flex-wrap gap-2 focus-within:bg-tag p-2 rounded-md">
                {tags.map((tag, index) => (
                    <div
                        key={index}
                        className="flex items-center p-1 gap-1 bg-muted hover:opacity-90 border text-xs font-bold rounded-md"
                    >
                        {tag}
                        <X
                            className="w-3 h-3 cursor-pointer"
                            onClick={() => removeTag(index)}
                        />
                    </div>
                ))}
                <input
                    className="flex-1 bg-transparent border-none outline-none text-sm focus:outline-none focus:ring-0"
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                />

            </div>
        </div>
    )
}
