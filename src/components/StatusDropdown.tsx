import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export function StatusDropdown({
  value,
  onChange,
}: {
  value: string
  onChange: (value: "draft" | "publish") => void
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1 text-sm capitalize"
        >
          {value}
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-28">
        <DropdownMenuItem
          onClick={() => onChange("draft")}
          className={value === "draft" ? "font-semibold" : ""}
        >
          Draft
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onChange("publish")}
          className={value === "publish" ? "font-semibold" : ""}
        >
          Publish
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
