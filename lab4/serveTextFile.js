const http = require('http');
const url = require('url');
const { fork } = require('child_process');
const server = http.createServer();

server.on('request', (req, res) => {
    const child = fork('readFile.js');
    
    const query = url.parse(req.url, true).query;
    const path  = query.url;

    child.send(path);

    res.writeHead(200, { "Content-Type": "text/plain" });
    child.on('message', data => {
        res.write(data);
        res.end();
    });
});

server.listen(4000, () => console.log('Listening on port 4000'));


//test url
//"http://localhost:4000/?url=file.txt"