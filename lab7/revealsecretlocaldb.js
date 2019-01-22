const express = require('express');
var crypto = require('crypto');
var MongoClient = require('mongodb').MongoClient;
var client = new MongoClient('mongodb://localhost:27017');

const app = express();
const port = 3000;

app.use((req, res, next) => {
    client.connect(function(err){
        const db = client.db('cs572');
        const collection = db.collection('homework7');
        req.collection = collection;
        next();
    });
});


app.get('/secret', function (req, res){
   
    const collection = req.collection;
   
    collection.findOne({}, (err, doc) => {
        const encrypted = doc.message;
        
        const decipher = crypto.createDecipher('aes256', 'asaadsaad');
        const decrypted = decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');
        
        console.log(decrypted);
        res.json(decrypted);

        client.close();
    });
    
});

app.listen(port, () => console.log(`server running on port ${port}`));