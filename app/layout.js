import "./global.css";
import { ConditionalModal } from "../components/ConditionalModal";
import Link from "next/link";

export const metadata = {
  title: "NextGram",
  description:
    "A sample Next.js app showing dynamic routing with modals as a route.",
  metadataBase: new URL("https://nextgram.vercel.app"),
};

export default function Layout(props) {
  return (
    <html>
      <body>
        <div className="h-[200px] bg-green-600 overflow-auto">
          {props.children}
        </div>
        <ConditionalModal>{props.articleModal}</ConditionalModal>
      </body>
    </html>
  );
}
