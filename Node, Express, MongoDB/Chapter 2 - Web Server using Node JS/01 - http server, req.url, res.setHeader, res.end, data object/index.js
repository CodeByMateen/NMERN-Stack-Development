const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Server Created");
  //   res.end("Hello"); // here, the page will be simple text
  //   res.end("<h1>Hello World</h1>"); // now it will act as html page
  res.setHeader("Content-Type", "text/html");
  res.end("Hello, World!"); // here, it's same as above 1st res.end code but due to res.setHeader, It'll be read as html and you can also see this in inspect -> network -> headers section
});
// server.listen(8080);

/*For Data Object*/

const data = { age: 5 }; // json format data

const server2 = http.createServer((req, res) => {
  console.log("Server 2 Created");
  console.log(req.url)
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
});
server2.listen(8080);
