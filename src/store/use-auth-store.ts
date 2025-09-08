import { Auth } from "@/typedata/auth/auth";
import { create } from "zustand";

type AuthState = {
  setAuth: (auth: Auth | null) => void;
  auth: Auth | null;
};

export const useAuthStore = create<AuthState>((set) => ({
  auth: null,
  setAuth: (auth: Auth | null) => set({ auth }),
}));

// export store object tanpa hook
export const authStore = useAuthStore;