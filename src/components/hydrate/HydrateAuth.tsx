"use client";

import { useAuthStore } from "@/store/use-auth-store";
import { Auth } from "@/typedata/auth/auth";
import { useEffect } from "react";

export default function HydrateAuth({ auth }: { auth: Auth }) {
  const setAuth = useAuthStore((state) => state.setAuth);

  useEffect(() => {
    setAuth(auth);
  }, [auth, setAuth]);

  return null; // tidak perlu render apa-apa
}
