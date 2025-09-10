import axiosClient from "@/lib/axiosClient";
import { useRouter } from "nextjs-toploader/app";

/**
 * Custom hook untuk menangani proses logout user.
 */
export function useLogout() {
  const router = useRouter();

  const handleLogout = async (e?: React.MouseEvent<HTMLDivElement>) => {
    e?.preventDefault();

    try {
      const res = await axiosClient.post("/api/logout", null, {
        withCredentials: true,
      });

      if (res.status === 200) {
        router.push("/"); // Redirect ke halaman utama
      } else {
        console.error("Logout gagal, status:", res.status);
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat logout:", error);
    }
  };

  return handleLogout;
}
