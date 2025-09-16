// resources/js/Components/SearchInput.tsx
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"



const SearchInput = ({ defaultValue = "", onSearch }:{defaultValue?:string, onSearch: (e:React.FormEvent, key:string) => void }) => {
  const [keyword, setKeyword] = useState(defaultValue)

  return (
    <form onSubmit={(e) => {
      onSearch(e, keyword);
    }} className="flex items-center gap-2">
      <Input
        type="text"
        placeholder="Cari artikel..."
        value={keyword ?? ""}
        onChange={(e) => setKeyword(e.target.value)}
        className="w-full"
      />
      <Button type="submit" variant="outline">
        Cari
      </Button>
    </form>
  )
}

export default SearchInput
