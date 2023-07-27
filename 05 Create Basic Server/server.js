// HTTP Module help us to create Server
const http = require('http');

http.createServer((req, res) => {
    res.write("This is simple server");
    res.end();
}).listen(8000);

/**
 * createServer() - Create an HTTP server
 * req - Allows you to access data in a string or JSON object from the client side
 * res - Represents the HTTP response that an node app sends when it gets an HTTP request.
 * res.end() - function is used to end the response process.
 */