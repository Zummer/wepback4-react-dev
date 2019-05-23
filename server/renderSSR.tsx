import React from 'react';
import { renderToString } from "react-dom/server";
import App from "./App";

function renderSSR() {
    return (
        `
      <!DOCTYPE html>
      <head>
        <title>Universal Reacl</title>
        <link rel="stylesheet" href="/main.css">
        <script src="/bundle.js"></script>
      </head>
      <body>
        <div id="app">${renderToString(<App />)}</div>
      </body>
    </html>
  `
    )

}

export {renderSSR};