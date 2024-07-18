"use client";

import axios from "axios";
import { useEffect } from "react";
import { toast, ToastContent } from "react-toastify";
const financeArticleEndpoint = process.env
  .NEXT_PUBLIC_NEWS_API_LATEST_FINANCE_ARTICLE_ENDPOINT as string;

async function getFinanceNewsArticles() {
  try {
    const response = await axios.get(financeArticleEndpoint);
    const responseData = response.data;
    console.log(responseData);
    // return responseData
  } catch (error: ToastContent | any) {
    toast.error(error);
  }
}

function News() {
  useEffect(() => {
    getFinanceNewsArticles();

    return () => {};
  }, []);

  return <div>News</div>;
}

export default News;
