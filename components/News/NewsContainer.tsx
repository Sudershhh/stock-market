import { NewsArticle } from "@/types/newsApi";

function NewsContainer(props: any) {
  const { title }: NewsArticle = props.newsArticle;

  return (
    <div className="">
      <h1>{title}</h1>
    </div>
  );
}

export default NewsContainer;
