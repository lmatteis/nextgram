import Link from "next/link";

export default function Page(props) {
  return (
    <div className="h-[200px] bg-red-600 overflow-auto">
      <Link href={`/topic/foo/article/11`}>Article 11</Link>
      <br />
      <Link href={`/topic/foo/article/12`}>Article 12</Link>
      <br />
      <Link href={`/topic/foo/article/13`}>Article 13</Link>
      <br />
      <Link href={`/topic/foo/article/14`}>Article 14</Link>
      <br />
      <Link href={`/topic/foo`}>Topic Foo</Link>
      <br />
    </div>
  );
}
