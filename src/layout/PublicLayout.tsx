"use client"
import NavbarSection from "@/components/organism/NavbarSectionV1";


export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="min-h-screen px-4 md:px-10  flex flex-col relative overflow-hidden bg-gradient-to-tl from-white via-white-100 to-white dark:bg-gradient-to-tl dark:from-black dark:via-zinc-600/20 dark:to-black">
      <NavbarSection />

      {children}
    </div>
  );
}
