const http = require('http');
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data.json');

http.createServer((req, res) => {
    if(req.url === "/"){
        res.writeHead(200, {'Content-Type': 'Text/Html'})
        res.write("<h1>Welcome to Home Page</h1>")
        res.end()
    }
    else if(req.url === "/about"){
        res.writeHead(200, {'Content-Type': 'Text/Html'})
        res.write("<h1>Welcome to About Page</h1>")
        res.end()
    }else if(req.url === "/data"){
        fs.readFile(dataPath, 'utf-8', (err, data)=>{
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'Text/Json'})
            res.write(data)
            res.end()
        })
    }else{
        res.writeHead(404, {"CONTENT-TYPE": "TEXT/HTML"});
        res.write("Error 404 ! Page Not Found");
        res.end();
    }
})

.listen(5000, ()=>{
    console.log("Listen at Port 5000");
})