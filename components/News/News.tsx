"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { newsApi } from "@/public/dummyData/newsApi";
import NewsContainer from "./NewsContainer";
import { NewsArticle } from "@/types/newsApi";
function News() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [newsFetchedError, setNewsFetchedError] = useState();

  //   const financeArticleEndpoint = process.env
  //     .NEXT_PUBLIC_FETCH_FINANCE_ARTICLES_ENDPOINT as string;
  //   const newsApiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY as string;
  useEffect(() => {
    async function fetchNewsArticles() {
      setNews(newsApi);
      //   try {
      //     const response = await axios.post(financeArticleEndpoint, {
      //       query: {
      //         $query: {
      //           $and: [
      //             { conceptUri: "http://en.wikipedia.org/wiki/Stock_market" },
      //             { conceptUri: "http://en.wikipedia.org/wiki/Finance" },
      //             { conceptUri: "http://en.wikipedia.org/wiki/United_States" },
      //             {
      //               dateStart: "2024-07-20",
      //               dateEnd: "2024-07-27",
      //               lang: "eng",
      //             },
      //           ],
      //         },
      //         $filter: {
      //           startSourceRankPercentile: 0,
      //           endSourceRankPercentile: 30,
      //         },
      //       },
      //       resultType: "articles",
      //       articlesSortBy: "date",
      //       includeArticleImage: true,
      //       apiKey: newsApiKey,
      //     });
      //     console.log(response.data);
      //     setNews(response.data.articles.results);
      //   } catch (error: any) {
      //     console.error("Error fetching news:", error);
      //     setNewsFetchedError(error);
      //   }
    }

    fetchNewsArticles();
  }, []);

  return (
    <div className="p-8 bg-black">
      <h1 className="text-8xl">The Stock Market Times</h1>

      <div className="news-articles flex flex-wrap justify-between align-middle">
        {news.map((newsArticle: NewsArticle, index: number) => (
          <NewsContainer key={index} newsArticle={newsArticle} />
        ))}
      </div>
    </div>
  );
}

export default News;
