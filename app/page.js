import Link from "next/link";
import swagPhotos from "../photos";
import Image from "next/image";

export default function Home() {
  const photos = swagPhotos;

  return (
    <main className="container mx-auto">
      <Link href="/article/foo">Article Foo</Link>
      <br />
      <Link href="/article/bar">Article bar</Link>
      <br />
      <Link href="/article/baz">Article baz</Link>
    </main>
  );
}
