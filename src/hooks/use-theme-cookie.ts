"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { themeConfig } from "@/config/theme";

/**
 * Hook untuk mengelola tema aplikasi dengan penyimpanan menggunakan cookie.
 * Tema aktif akan disimpan di cookie bernama "theme" agar persisten.
 *
 * Fitur utama:
 * - Mendapatkan tema dari cookie saat pertama kali load (default: "dark")
 * - Menyimpan tema baru ke cookie
 * - Toggle antara "dark" <-> tema sebelumnya (misalnya light/red/blue/etc.)
 * - Update class pada <html> agar bisa dipakai Tailwind (dark mode, dsb.)
 */
export const useThemeCookie = () => {
  // theme aktif
  const [theme, setTheme] = useState<string>("dark");
  // theme sebelumnya (hanya dipakai saat toggle)
  const [prevTheme, setPrevTheme] = useState<string>("light");

  // load data dari cookie saat komponen pertama kali dipasang
  useEffect(() => {
    const savedTheme = Cookies.get(themeConfig.cookieKey);
    const savedPrevTheme = Cookies.get(themeConfig.cookieKeyPrev);
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    }
    if (savedPrevTheme) {
      setPrevTheme(savedPrevTheme);
    }
  }, []);

  /**
   * Toggle tema:
   * - Jika saat ini "dark" → ganti ke prevTheme
   * - Jika saat ini selain "dark" → ganti ke "dark"
   */
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? prevTheme : "dark";

    // update DOM class
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);

    // simpan ke state & cookie
    setPrevTheme(theme);
    setTheme(newTheme);
    Cookies.set(themeConfig.cookieKey, newTheme, { expires: 365 });
    Cookies.set(themeConfig.cookieKeyPrev, theme, { expires: 365 });
  };

  /**
   * Set tema baru secara manual
   * @param newTheme string - nama tema baru (misal: "light", "blue", "green")
   */
  const setNewTheme = (newTheme: string) => {
    // update DOM class
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);

    // simpan ke state & cookie
    setPrevTheme(theme);
    setTheme(newTheme);
    Cookies.set(themeConfig.cookieKey, newTheme, { expires: 365 });
    Cookies.set(themeConfig.cookieKeyPrev, theme, { expires: 365 });
  };

  return { theme, toggleTheme, setNewTheme };
};

