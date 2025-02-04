import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);