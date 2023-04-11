import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { nanoid } from "@reduxjs/toolkit";
const apiKey = import.meta.env.VITE_API_KEY;
export const newsAPI = createApi({
  reducerPath: "newsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://news-proxy.netlify.app/api" }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => `top-headlines?country=us&pageSize=10&apiKey=${apiKey}`,
      transformResponse: (response) => {
        const articles = response.articles;

        const articlesWithIds = articles.map((article) => ({
          ...article,
          id: nanoid(),
          publishedAt: new Date(article.publishedAt)
            .toLocaleDateString("en-US", {
              month: "2-digit",
              day: "2-digit",
              year: "2-digit",
            })
            .replace(/\//g, "-"),
        }));
        return articlesWithIds;
      },
    }),
    getPublisher: builder.query({
      query: () => `top-headlines/sources?country=us&apiKey=${apiKey}`,
      transformResponse: (response) => {
        const publishers = response.sources;
        const publishersWithIds = publishers.map((publisher) => ({
          ...publisher,
          uniqueId: nanoid(),
        }));
        return publishersWithIds;
      },
    }),
    getArticles: builder.query({
      query: (id) => `everything?sources=${id}&apiKey=${apiKey}`,
      transformResponse: (response) => response.articles,
    }),
    searchArticle: builder.query({
      query: (keyword) => `everything?q=${keyword}&apiKey=${apiKey}`,
      transformResponse: (response) => response.articles,
    }),
  }),
});
export const {
  useGetNewsQuery,
  useGetPublisherQuery,
  useGetArticlesQuery,
  useSearchArticleQuery,
} = newsAPI;
