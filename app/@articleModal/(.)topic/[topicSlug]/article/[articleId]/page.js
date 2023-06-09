import Link from "next/link";
import { CloseModal } from "../../../../../../components/CloseModal";

export default function ArticleModal(props) {
  return (
    <>
      Modal Intercepted: Topic: {props.params.topicSlug} - Article:{" "}
      {props.params.articleId}
      <br />
      <Link href={`/topic/${props.params.topicSlug}/article/3`}>
        Go to article 3
      </Link>
      <br />
      <Link href={`/topic/foo/article/4`}>Go to article 4, but topic foo</Link>
      <br />
      <CloseModal>Click here to close</CloseModal>
    </>
  );
}
