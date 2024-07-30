import { NewsArticle } from "@/types/newsApi";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

function NewsContainer(props: any) {
  const { title, image, body, date }: NewsArticle = props.newsArticle;

  return (
    <div className="">
      {/* <div className="news-image-holder">
        <Image
          src={image}
          width={120}
          height={80}
          alt="news article preview image"
          objectFit="cover"
          className="rounded-md w-full"
        />
      </div>
      <div className="topics-holder flex my-4">
        <div>topic</div>
        <div>topic</div>
        <div>topic</div>
      </div>
      <h1 className="text-xl font-bold capitalize">{title}</h1>

      <p className="truncate my-4">{body}</p>

      <div className="news-footer flex self-end">
        <p className="text-gray-400">{date}</p>
      </div> */}
      <Card isFooterBlurred radius="lg" className="border-none">
        <Image
          alt="Woman listing to music"
          className="object-cover"
          height={400}
          src="https://nextui.org/images/hero-card.jpeg"
          width={400}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">{title}</p>
          <Button
            className="text-tiny text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            Read
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default NewsContainer;
