const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const data = fs.readFileSync("data.json", "utf-8");

const rawData = JSON.parse(data);
const products = rawData.products;
const product = rawData.products[0];

const server = http.createServer((req, res) => {
  console.log("Server Created");
  /*BTW This method is not appropriate as we have to declare each product with seprate case */
  /* Creating Dynamic data Loading */
  switch (req.url) {
    case "/product":
      res.setHeader("Content-Type", "text/html");
      //let modifiedIndex=index.replace('**title**', product.title)
      // OR we can replace multiple params by this:
      let modifiedIndex = index
        .replace("**url**", product.thumbnail)
        .replace("**title**", product.title)
        .replace("**price**", product.price)
        .replace("**rating**", product.rating);
      res.end(modifiedIndex);
      break;
    default:
      res.writeHead(302, {
        Location: "http://salehriaz.com/404Page/404.html",
      });
      res.end();
      break;
  }
});
server.listen(8080);
