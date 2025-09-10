import { useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { useAuthStore } from "@/store/use-auth-store";
import { getTokenExpireTime } from "@/lib/getExpireTime";

export function useSilentRefresh() {
  const { auth, setAuth } = useAuthStore();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isRefreshing = useRef(false);

  // Wrap refreshToken in useCallback so that the reference is stable.
  const refreshToken = useCallback(async () => {
    if (isRefreshing.current) return; // Avoid racing conditions
    isRefreshing.current = true;

    try {
      const res = await axios.post(`/api/refresh`, null, {
        withCredentials: true,
        baseURL: process.env.NEXT_PUBLIC_API_URL,
      });

      if (!res.data?.data) throw new Error("Refresh failed");

      setAuth({
        ...auth,
        ...res.data.data,
      });

      console.log("🔄 Access token refreshed");
    } catch (err) {
      console.error("❌ Token refresh error:", err);
      // If refresh fails, force logout
      setAuth(null);
    } finally {
      isRefreshing.current = false;
    }
  }, [auth, setAuth]);

  // Main effect: set auto-refresh timer before token expires
  useEffect(() => {
    // If you are not logged in, stop refreshing
    if (!auth?.access_token) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      return;
    }

    const expireAt = getTokenExpireTime(auth.access_token);
    const now = Date.now();
    const timeout = Math.max(expireAt - now - 60_000, 0); // Refresh 1 minute before expiration

    console.log(`⏳ Refresh token dalam ${timeout / 1000 / 60} menit`);

    // Pasang timer untuk auto-refresh
    timeoutRef.current = setTimeout(() => {
      if (document.visibilityState === "visible") {
        refreshToken();
      }
    }, timeout);

    // Cleanup timer saat auth berubah
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [auth?.access_token, refreshToken]);

  // Additional effect: if the tab is reopened and the token is about to expire → refresh immediately
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && auth?.access_token) {
        const expireAt = getTokenExpireTime(auth.access_token);
        const now = Date.now();

        // If the token is about to expire, refresh it now.
        if (expireAt - now <= 60_000) {
          refreshToken();
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [auth?.access_token, refreshToken]);

  return { refreshToken };
}
