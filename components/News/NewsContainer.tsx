import { NewsArticle } from "@/types/newsApi";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { motion } from "framer-motion";

// function NewsContainer(props: any) {
//   const { title, image, body, date }: NewsArticle = props.newsArticle;

//   return (
//     <div className="my-4 max-w-80">
//       <Card className="py-4">
//         <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
//           <p className="text-tiny uppercase font-bold">{title}</p>
//           <small className="text-default-500">{date}</small>
//           <h4 className="font-bold text-large text-ellipsis whitespace-nowrap overflow-hidden">
//             {body}
//           </h4>
//         </CardHeader>
//         <CardBody className="overflow-visible py-2">
//           <Image
//             alt="Card background"
//             className="object-cover rounded-xl"
//             src={image}
//             width={270}
//           />
//         </CardBody>
//       </Card>
//     </div>
//   );
// }

// export default NewsContainer;

function NewsContainer(props: any) {
  const { title, image, body, date }: NewsArticle = props.newsArticle;

  return (
    <motion.div
      className="my-4 max-w-80 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-large uppercase font-bold">{title}</p>
          <small className="text-default-500">{date}</small>
          <h4 className="font-bold text-tiny overflow-hidden overflow-ellipsis whitespace-nowrap mt-2">
            {body}
          </h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={image}
            width={270}
            height={150}
          />
        </CardBody>
      </Card>
    </motion.div>
  );
}

export default NewsContainer;
