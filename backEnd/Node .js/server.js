const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method)


    //set header
    // res.setHeader('Content-Type', 'text/html')
    // res.write(`<p>  Hello  server this side  </p>`)
    // res.end();

    let path = './views/'
    switch (req.url) {
        case '/':
            path += 'serverDemo.html'
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200;
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location','/about');
            res.end();
            break;
        default:
            path += '404.html'
            res.statusCode = 404;
            break;
    }



    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        else {
            // res.write(data);
            res.end(data);
        }
    })

});

// let host = '127.0.0.1';
let host = 'localhost'

server.listen(3001, host, () => {
    console.log('Listening for requests on port 3001')
})