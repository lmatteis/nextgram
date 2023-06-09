"use client";

import { usePathname } from "next/navigation";

export function ConditionalModal(props) {
  const pathname = usePathname();
  const shouldShowModal = pathname.includes("/article/");

  return shouldShowModal && props.children;
}
