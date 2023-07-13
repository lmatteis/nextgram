import "./global.css";
import GithubCorner from "../components/github-corner";
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
        <GithubCorner />
        <div>
          <Link href="/">Home</Link>
        </div>
        {props.children}
        <div>
          Sidebar:
          {props.langSlot}
        </div>
      </body>
    </html>
  );
}
