import { NewsArticle } from "@/types/newsApi";
import { Image, Button } from "@nextui-org/react";
import { motion } from "framer-motion";

const formatDateTime = (dateTimeString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const date = new Date(dateTimeString);
  return date.toLocaleDateString("en-US", options);
};

function NewsContainer(props: { newsArticle: NewsArticle }) {
  const { title, image, dateTime } = props.newsArticle;

  return (
    <motion.div
      className="my-4 max-w-sm cursor-pointer rounded-xl w-2/3 p-4 h-auto"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0  object-cover"
        src={image}
      />
      <div className="mt-4">
        <h1 className="text-white text-xl font-semibold">{title}</h1>
        <div className="flex justify-between items-center mt-2">
          <Button size="sm">Read</Button>
          <p className="text-gray-300 text-xs text-center">
            {formatDateTime(dateTime)}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default NewsContainer;
