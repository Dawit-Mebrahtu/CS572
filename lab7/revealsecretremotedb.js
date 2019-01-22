const express = require('express');
const crypto = require('crypto');
const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

var client = new MongoClient(process.env.DB_CONN);

const app = express();
const port = 3000;

app.use((req, res, next) => {
    client.connect((err, client) => {
        assert.equal(null, err);
        const db = client.db('cs572');
        const collection = db.collection('homework7');
     
        req.collection = collection;
        next();
    });
});


app.get('/secret', function (req, res){
   
    const collection = req.collection;
   
    collection.findOne({}, (err, doc) => {
        assert.equal(null, err);
        const encrypted = doc.message;
        console.log(`Encrypted message: ${doc.message}`);
        
        const decipher = crypto.createDecipher('aes256', 'asaadsaad');
        const decrypted = decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');
        
        console.log(`Decrypted message: ${decrypted}`);
        res.json(decrypted);

        client.close();
        console.log('DB connection closed');
    });
    
});

app.listen(port, () => console.log(`server running on port ${port}`));