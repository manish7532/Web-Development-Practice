const http = require('http')
const fs = require('fs')

const myServer = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') { return res.end() }
    const log = `${Date.now()}:${req.url} New req Received \n`
    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
            case "/":
                res.end("Homepage")
                break;
            case "/about":
                res.end("I am Manish")
                break;
            default:
                res.end("404 Not found");
        }
    })
})


myServer.listen(3001,'localhost',()=>{
    console.log("Listening on port 3001");
})