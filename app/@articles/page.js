import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[200px] bg-green-600 overflow-auto">
      List of topics: <br />
      <Link href="/topic/topic-a">Topic A</Link> <br />
      <Link href="/topic/topic-b">Topic B</Link> <br />
      <Link href="/topic/topic-c">Topic c</Link> <br />
      <Link href="/topic/topic-d">Topic d</Link> <br />
      <Link href="/topic/topic-e">Topic e</Link> <br />
      <Link href="/topic/topic-f">Topic f</Link> <br />
      <Link href="/topic/topic-g">Topic g</Link> <br />
      <Link href="/topic/topic-h">Topic h</Link> <br />
      <Link href="/topic/topic-i">Topic i</Link> <br />
      <Link href="/topic/topic-l">Topic l</Link> <br />
      <Link href="/topic/topic-m">Topic m</Link> <br />
      <Link href="/topic/topic-n">Topic n</Link> <br />
      <Link href="/topic/topic-o">Topic o</Link> <br />
      <Link href="/topic/topic-p">Topic p</Link> <br />
      List of articles: <br />
      <Link href="/article/1">Article 1</Link> <br />
      <Link href="/article/2">Article 2</Link> <br />
    </div>
  );
}
