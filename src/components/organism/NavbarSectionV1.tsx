import { Sun } from "lucide-react";
import { Badge } from "../ui/badge";
import React from "react";
import { useCommandPrompt } from "@/store/use-command-prompt";
import { useTheme } from "@/store/use-theme";
import { useThemeCookie } from "@/hooks/use-theme-cookie";

export default function NavbarSection() {
    const { toggleOpen } = useCommandPrompt();

    const { toggleTheme } = useThemeCookie();

    return (
        // <nav className="fixed top-0 left-0 z-50 w-full bg-white/80 backdrop-blur-md">
        <nav className="fixed top-0 left-0 z-50 w-full bg-transparent">
            <div className={`mx-auto flex h-16 items-center justify-end px-4 md:px-8 gap-4 animate-fade-in`}>
                <div onClick={toggleOpen} className="p-2 flex items-center bg-muted rounded-md gap-16 cursor-pointer">
                    <p className="text-sm text-muted-foreground">Search on Page...</p>
                    <Badge variant="default">CtrlK</Badge>
                </div>

                <Sun onClick={toggleTheme} className="transform -scale-x-100 cursor-pointer animate-pulse text-yellow-500 dark:text-foreground" />
            </div>
        </nav>
    )
}
