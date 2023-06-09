"use client";

import { usePathname } from "next/navigation";
import { useUrlEntryModal } from "../hooks/useUrlEntryModal";

export function ConditionalModal(props) {
  const { isInModal } = useUrlEntryModal();

  return isInModal && props.children;
}
