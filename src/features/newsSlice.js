import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const newsAPI = createApi({
  reducerPath: "newsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://newsapi.org/v2/" }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () =>
        "top-headlines?country=us&pageSize=10&apiKey=9bfc1e38aaee4c038fc09a79c0ea1394",
      transformResponse: (response) => response.articles,
    }),
    getPublisher: builder.query({
      query: () =>
        "top-headlines/sources?apiKey=9bfc1e38aaee4c038fc09a79c0ea1394",
      transformResponse: (response) => response.sources,
    }),
  }),
});
export const { useGetNewsQuery, useGetPublisherQuery } = newsAPI;
