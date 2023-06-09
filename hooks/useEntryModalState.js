import { useAtom } from "jotai";
import { urlEntryModalAtom } from "../store/modal";

export const useEntryModalState = () => {
  const [urlEntryModal, setUrlEntryModal] = useAtom(urlEntryModalAtom);

  return { urlEntryModal, setUrlEntryModal };
};
