import { create } from "zustand";
import { persist } from "zustand/middleware";

type CommandPromptState = {
  theme: "light" | "dark" | null;
  setTheme: (theme: "light" | "dark") => void;
  toggleTheme: () => void;
};

export const useTheme = create<CommandPromptState>()(
  persist(
    (set, get) => ({
      theme: null,

      setTheme: (theme) => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
        set({ theme });
      },

      toggleTheme: () => {
        const newTheme = get().theme === "dark" ? "light" : "dark";
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(newTheme);
        set({ theme: newTheme });
      },
    }),
    { name: "theme-storage" }
  )
);
