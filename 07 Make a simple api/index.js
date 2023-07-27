/*
😄 Make a simple API
- Make a server
- Create header and API body
- Create an API with static data
- Put data in another file
*/

const http = require('http');
const students = require('./data');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'application\json'})
    res.write(JSON.stringify(students))
    res.end()
}).listen(5000)