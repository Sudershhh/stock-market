import { NewsArticle } from "@/types/newsApi";
import { Image, Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { Divider } from "@nextui-org/divider";
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

const formatBodyContent = (body: string): JSX.Element => {
  return (
    <>
      {body.split("\n\n").map((paragraph, index) => (
        <p key={index} className="mb-4 text-gray-700 leading-relaxed">
          {paragraph}
        </p>
      ))}
    </>
  );
};

function NewsContainer(props: { newsArticle: NewsArticle }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { title, image, dateTime, body, source } = props.newsArticle;

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
          <Button size="sm" onPress={onOpen}>
            Read
          </Button>
          <p className="text-gray-300 text-xs text-center">
            {formatDateTime(dateTime)}
          </p>
        </div>
      </div>
      <Modal
        size="5xl"
        isOpen={isOpen}
        onClose={onClose}
        backdrop="blur"
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black">
                {title}
              </ModalHeader>
              <ModalBody className="text-black">
                <div className="flex flex-col gap-4">
                  <Image
                    removeWrapper
                    alt={title}
                    className="object-cover w-3/5 rounded-xl"
                    src={image}
                  />
                  <div className="text-sm text-gray-500">
                    <p>
                      <strong>Source:</strong> {source.title} (
                      <a
                        href={`https://${source.uri}`}
                        target="_blank"
                        className="underline text-blue-500"
                        rel="noopener noreferrer"
                      >
                        {source.uri}
                      </a>
                      )
                    </p>
                    <p>
                      <strong>Published on:</strong> {formatDateTime(dateTime)}
                    </p>
                    <Divider className="my-4" />
                  </div>
                  <div className="text-lg leading-relaxed">
                    {formatBodyContent(body)}
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </motion.div>
  );
}

export default NewsContainer;
