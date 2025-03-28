const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const data = fs.readFileSync("data.json", "utf-8");

const rawData = JSON.parse(data);
const products = rawData.products;
const prd = rawData.products[0];

const server = http.createServer((req, res) => {
  /* For Multiple id's dynamic data rendering */

  if (req.url.startsWith("/product")) {
    // console.log(req.url, req.method); //now, it'll display the same as if we put url /product/1

    const id = req.url.split("/")[2];
    const product = products.find((p) => p.id === +id); // prd shortcut to product

    // console.log(product)

    res.setHeader("Content-Type", "text/html");
    let modifiedIndex = index
      .replace("**url**", product.thumbnail)
      .replace("**title**", product.title)
      .replace("**price**", product.price)
      .replace("**rating**", product.rating);
    res.end(modifiedIndex);
    return;
  }
});
server.listen(8080);
