const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const data = fs.readFileSync("data.json", "utf-8");

const server = http.createServer((req, res) => {
  console.log("Server Created");

  /* Creating End Points Example */
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;
    case "/api":
      res.setHeader("Content-Type", "application/json");
      res.end(data);
      break;
    default:
      res.writeHead(302, {
        Location: "http://salehriaz.com/404Page/404.html"
      });
      res.end();
      break;
  }

  // res.setHeader("Content-Type", "application/json");
  // res.setHeader("Content-Type", "text/html");
  // res.end(index);
});
server.listen(8080);
