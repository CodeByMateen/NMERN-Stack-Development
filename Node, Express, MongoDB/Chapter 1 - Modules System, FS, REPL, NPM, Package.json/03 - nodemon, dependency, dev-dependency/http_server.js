const http = require('http')

const server = http.createServer((req, res)=>{
    console.log("Hello")
    res.end("<h1>Hello</h1>")
})

server.listen(8080)