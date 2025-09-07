"use client"

import { useTheme } from "@/store/use-theme"
import { useEffect } from "react";

export const HydrateTheme = () => {
    const { setTheme } = useTheme();

    useEffect(() => {
        const theme = (typeof window !== "undefined" &&
            (localStorage.getItem("theme-storage")
                ? JSON.parse(localStorage.getItem("theme-storage")!).state.theme
                : null)) || "dark";

        if (!theme) return;

        setTheme(theme);

    }, [setTheme]);

    return null;
}   