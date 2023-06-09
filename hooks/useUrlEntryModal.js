"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useEntryModalState } from "./useEntryModalState";

export const useUrlEntryModal = () => {
  const pathname = usePathname();

  const { setUrlEntryModal } = useEntryModalState();

  const isArticle = pathname.includes("/article/");
  const isInModal = isArticle;

  useEffect(() => {
    if (isInModal) return;

    setUrlEntryModal(pathname);
  }, [pathname]);

  return { isInModal };
};
