"use client"

import * as React from "react"
import {
  ArrowRight,
  Calculator,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { useCommandPrompt } from "@/store/use-command-prompt"
import { useRouter } from "nextjs-toploader/app"

export function CommandPrompt() {
  const { open, setOpen } = useCommandPrompt();
  const router = useRouter();
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(!open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [open, setOpen])

  const handleSelect = (uri:string) => {
    router.push(uri);
    setOpen(!open);
  }
  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            <CommandItem onSelect={()=> handleSelect("/")}>
              <ArrowRight />
              <span>Home</span>
            </CommandItem>
            <CommandItem onSelect={() => handleSelect("/explore")}>
              <ArrowRight />
              <span>Explore</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={() => handleSelect("#experiences")}>
              <ArrowRight />
              <span>Experiences</span>
            </CommandItem>
             <CommandItem onSelect={() => handleSelect("#projects")}>
              <ArrowRight />
              <span>Projects</span>
            </CommandItem>
            <CommandItem onSelect={() => handleSelect("#about")}>
              <ArrowRight />
              <span>About</span>
            </CommandItem>
            <CommandItem onSelect={() => handleSelect("#tech")}>
              <ArrowRight />
              <span>Tech</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
