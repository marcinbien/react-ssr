import express from "express";
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import { App } from "../../client/src/App";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const { message, counter } = req.query;

  const data = {
    message: message || null,
    counter: parseInt(counter as string) || null,
  };

  console.log("request data:", JSON.stringify(data));

  const app = ReactDOMServer.renderToString(<App {...data} />);
  console.log(app);
  const html = `
        <html lang="en">
        <head>
            <title>SSR</title>
            <script src="app.js" async defer></script>
            <script>window.__DATA__ = ${JSON.stringify(data)}</script>
        </head>
        <body>
            <div id="root">${app}</div>
        </body>
        </html>
    `;
  res.send(html);
});

app.use(express.static("./dist"));

app.listen(PORT);
console.log(`🚀 Server listening on http://localhost:${PORT}`);
