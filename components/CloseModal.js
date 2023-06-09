"use client";

import Link from "next/link";
import { useEntryModalState } from "../hooks/useEntryModalState";

export function CloseModal(props) {
  const { urlEntryModal } = useEntryModalState();

  return <Link href={urlEntryModal || "/"}>{props.children}</Link>;
}
