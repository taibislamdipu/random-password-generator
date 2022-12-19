import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <App>
        <Helmet prioritizeSeoTags>
          <title>Random Password Generator</title>
          <meta name="description" content="Random Password Generator" />
          <meta
            name="keywords"
            content="random password generator, password generator, random password"
          />

          <meta
            property="og:image"
            content="https://i.ibb.co/DGDVgT5/Password-Generator.png"
          />
          <meta property="og:title" content="Random Password Generator" />
          <meta property="og:description" content="Random Password Generator" />
          <meta property="og:image:width" content="250" />
          <meta property="og:image:height" content="250" />
        </Helmet>
      </App>
    </HelmetProvider>
  </React.StrictMode>
);
