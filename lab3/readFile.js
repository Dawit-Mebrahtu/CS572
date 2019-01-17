var fs = require('fs');
var http = require('http');
var path = require('path');

// Using readFileSync
http.createServer(function(req, res){
    var content = fs.readFileSync(path.join(__dirname, 'testdata.txt'));
    console.log('Downloading file');
    res.end(content);
}).listen(3000, () => console.log('Listening on port 3000'));


// Using readFile
http.createServer(function(req, res){
    var content = fs.readFile(path.join(__dirname, 'testdata.txt'),  function(err, data){
        console.log('Downloading file');
        res.end(data);
    });
}).listen(3000, () => console.log('Listening on port 3000'));


// // Using streams
http.createServer(function(req, res){
    var content = fs.createReadStream(path.join(__dirname, 'testdata.txt')).pipe(res);
    console.log('Downloading file');
}).listen(3000, () => console.log('Listening on port 3000'));

