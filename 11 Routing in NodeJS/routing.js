const http = require('http');


http.createServer((req, res) => {
    if(req.url === "/"){
        res.writeHead(200, {'Content-Type': 'Text/HTML'})
        res.write("<h1>This is Home Page</h1>")
        res.end();
    }else if(req.url === "/about"){
        res.writeHead(200, {'Content-Type': 'Text/HTML'})
        res.write("<h1>This is About Page</h1>")
        res.end();
    }else if(req.url === "/contact"){
        res.writeHead(200, {'Content-Type': 'Text/HTML'})
        res.write("<h1>This is Contact Page</h1>")
        res.end();
    }else{
        res.writeHead(404, {'Content-Type': 'Text/HTML'})
        res.write("<h1>Error 404, Page Not Found!</h1>")
        res.end();
    }
}).listen(5000, ()=>{
    console.log("Listen at port 5000")
})