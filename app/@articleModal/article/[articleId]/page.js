import Link from "next/link";

export default function ArticleModal(props) {
  return (
    <>
      @articleModal: Article: {props.params.articleId}
      <br />
      <Link href={`/article/3`}>Go to article 3</Link>
      <br />
      <Link href={`/article/4`}>Go to article 4</Link>
      <br />
      <Link href={`/`}>Click here to close (/)</Link>
    </>
  );
}
