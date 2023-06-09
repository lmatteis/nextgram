"use client";

import { usePathname } from "next/navigation";
import { urlEntryModalAtom } from "../store/modal";
import { useAtom } from "jotai";
import { useEffect } from "react";

export const useUrlEntryModal = () => {
  const pathname = usePathname();

  const [urlEntryModal, setUrlEntryModal] = useAtom(urlEntryModalAtom);

  const isInModal = pathname.includes("/article/");

  useEffect(() => {
    if (isInModal) return;

    setUrlEntryModal(pathname);
  }, [pathname]);

  return { isInModal, urlEntryModal };
};
