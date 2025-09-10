// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import NProgress from "nprogress"; // npm i nprogress

// export default function RouterEventsProvider({ children }: { children: React.ReactNode }) {
//   const router = useRouter();

//   useEffect(() => {
//     const handleStart = () => NProgress.start();
//     const handleStop = () => NProgress.done();

//     // App Router pakai event `router.events` berbeda
//     // Di Next.js 13+, bisa pakai `router.push` interceptor
//     router.prefetch; // opsional biar prefetch jalan

//     document.addEventListener("next:navigation-start", handleStart);
//     document.addEventListener("next:navigation-end", handleStop);

//     return () => {
//       document.removeEventListener("next:navigation-start", handleStart);
//       document.removeEventListener("next:navigation-end", handleStop);
//     };
//   }, [router]);

//   return <>{children}</>;
// }
