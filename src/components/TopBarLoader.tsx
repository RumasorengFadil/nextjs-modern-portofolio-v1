"use client";

import { useEffect, useState } from "react";

export default function TopBarLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 99) return prev;
        return prev + 0.5;
      });
    }, 10);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] bg-transparent z-50">
      <div
        className="h-[3px] bg-primary transition-all"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
