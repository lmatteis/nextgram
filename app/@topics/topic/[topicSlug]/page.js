import Link from "next/link";

export default function Page(props) {
  return (
    <div className="h-[200px] bg-purple-600 overflow-auto">
      List of articles for topic: {props.params.topicSlug} <br />
      <Link href={`/article/1`}>Article 1</Link>
      <br />
      <Link href={`/article/2`}>Article 2</Link>
      <br />
      <Link href={`/article/3`}>Article 3</Link>
      <br />
      <Link href={`/article/4`}>Article 4</Link>
      <br />
      <Link href={`/article/5`}>Article 5</Link>
      <br />
      <Link href={`/article/6`}>Article 6</Link>
      <br />
      <Link href={`/article/7`}>Article 7</Link>
      <br />
      <Link href={`/article/8`}>Article 8</Link>
      <br />
      <Link href={`/article/9`}>Article 9</Link>
      <br />
      <Link href={`/article/10`}>Article 10</Link>
      <br />
      <Link href={`/article/11`}>Article 11</Link>
      <br />
      <Link href={`/article/12`}>Article 12</Link>
      <br />
      <Link href={`/article/13`}>Article 13</Link>
      <br />
      <Link href={`/article/14`}>Article 14</Link>
      <br />
    </div>
  );
}
