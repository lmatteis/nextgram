"use client";

import Link from "next/link";
import { useUrlEntryModal } from "../hooks/useUrlEntryModal";

export function CloseModal(props) {
  const { urlEntryModal } = useUrlEntryModal();

  return <Link href={urlEntryModal || "/"}>{props.children}</Link>;
}
