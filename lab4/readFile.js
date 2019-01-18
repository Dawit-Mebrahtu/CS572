const fs = require('fs');
const path = require('path');

const readFileAsync = function(path){
    fs.readFile(path, 'utf8', function(err, data){
        process.send(data);
    });
}

process.on('message', msg => {
    const filePath = path.join(__dirname, msg);
    readFileAsync(filePath);
});