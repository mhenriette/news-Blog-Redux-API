import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { newsAPI } from "./features/newsSlice";
import { BrowserRouter } from "react-router-dom";
import themerReducer from "./features/themeSlice";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    theme: themerReducer,
    newsAPI: newsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([newsAPI.middleware]),
});
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
