"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function useUnsavedChanges() {
  const [unsaved, setUnsaved] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  // ✅ Block refresh/close tab
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (unsaved) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [unsaved]);

  return {
    unsaved,
    setUnsaved,
    showDialog,
    setShowDialog,
  };
}
