import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const newsAPI = createApi({
  reducerPath: "newsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://news-proxy.netlify.app/api" }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () =>
        "top-headlines?country=us&pageSize=10&apiKey=9bfc1e38aaee4c038fc09a79c0ea1394",
      transformResponse: (response) => response.articles,
    }),
    getPublisher: builder.query({
      query: () =>
        "top-headlines/sources?country=us&apiKey=9bfc1e38aaee4c038fc09a79c0ea1394",
      transformResponse: (response) => response.sources,
    }),
    getArticles: builder.query({
      query: (id) =>
        `everything?sources=${id}&apiKey=9bfc1e38aaee4c038fc09a79c0ea1394`,
      transformResponse: (response) => response.articles,
    }),
    searchArticle: builder.query({
      query: (keyword) =>
        `everything?q=${keyword}&apiKey=9bfc1e38aaee4c038fc09a79c0ea1394`,
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
