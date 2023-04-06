import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { newsAPI } from "./features/newsSlice";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider api={newsAPI}>
        <App />
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);
