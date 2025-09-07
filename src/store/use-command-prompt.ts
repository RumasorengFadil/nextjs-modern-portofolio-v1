import { create } from "zustand";

type CommandPromptState = {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggleOpen: () => void;
};
export const useCommandPrompt = create<CommandPromptState>((set) => ({
  open: false,
  setOpen: (open: boolean) => set({ open }),
  toggleOpen: () =>
    set((state) => ({
      open: !state.open,
    })),
}));
