import Link from "next/link";

export default function Page(props) {
  return (
    <>
      List of articles for topic: {props.params.topicSlug} <br />
      <Link href={`/topic/${props.params.topicSlug}/article/1`}>Article 1</Link>
      <br />
      <Link href={`/topic/${props.params.topicSlug}/article/2`}>Article 2</Link>
      <br />
      <Link href={`/topic/${props.params.topicSlug}/article/3`}>Article 3</Link>
      <br />
      <Link href={`/topic/${props.params.topicSlug}/article/4`}>Article 4</Link>
      <br />
      <Link href={`/topic/${props.params.topicSlug}/article/5`}>Article 5</Link>
      <br />
      <Link href={`/topic/${props.params.topicSlug}/article/6`}>Article 6</Link>
      <br />
      <Link href={`/topic/${props.params.topicSlug}/article/7`}>Article 7</Link>
      <br />
      <Link href={`/topic/${props.params.topicSlug}/article/8`}>Article 8</Link>
      <br />
      <Link href={`/topic/${props.params.topicSlug}/article/9`}>Article 9</Link>
      <br />
      <Link href={`/topic/${props.params.topicSlug}/article/10`}>
        Article 10
      </Link>
      <br />
      <Link href={`/topic/${props.params.topicSlug}/article/11`}>
        Article 11
      </Link>
      <br />
      <Link href={`/topic/${props.params.topicSlug}/article/12`}>
        Article 12
      </Link>
      <br />
      <Link href={`/topic/${props.params.topicSlug}/article/13`}>
        Article 13
      </Link>
      <br />
      <Link href={`/topic/${props.params.topicSlug}/article/14`}>
        Article 14
      </Link>
      <br />
      {props.children}
    </>
  );
}
