// types/newsApi.ts
export interface Source {
  uri: string;
  dataType: string;
  title: string;
}

export interface NewsArticle {
  uri: string;
  lang: string;
  isDuplicate: boolean;
  date: string;
  time: string;
  dateTime: string;
  dateTimePub: string;
  dataType: string;
  sim: number;
  url: string;
  title: string;
  body: string;
  source: Source;
  authors: string[];
  image: string;
  eventUri: string | null;
  sentiment: number;
  wgt: number;
  relevance: number;
}
