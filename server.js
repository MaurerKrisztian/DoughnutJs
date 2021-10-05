const static = require('node-static');
const http = require('http');

const port = 8000;
const file = new (static.Server)(__dirname);

// serve static content
http.createServer(function (req, res) {
    file.serve(req, res);
}).listen(port);

console.log(`server listening on: http://localhost:${port}/`)
