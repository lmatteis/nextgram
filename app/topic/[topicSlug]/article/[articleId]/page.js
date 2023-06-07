import Link from "next/link";

export default function Page(props) {
  return (
    <>
      Article: {props.params.articleId} <br />
    </>
  );
}
