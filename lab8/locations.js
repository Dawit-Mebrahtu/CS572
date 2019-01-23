const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017');
const port = 3000;
let db;

const app = express();

app.use((req, res, next) => {
    if(!db){
        client.connect(function(err){
            db = client.db('cs572');
            req.db = db;
            next();
        });
    }
});

app.use(express.json());

app.post('/locations', function (req, res){
   
    req.db.collection('locations').insert({'name': req.body.name, 'category': req.body.category, 'location': req.body.location});
    console.log('insertion successful');

    res.end();
    client.close();
    
});

app.post('/nearme', function (req, res){
    const locations = req.db.collection('locations');

    // Geospatial indexing (2D)
    locations.createIndex({location: '2d'});

    const coordinates = req.body.location;
    const nearme = locations.find({'location': {$near: coordinates}}).limit(3);
    
    nearme.each(function(err, doc){
        console.log(doc);
    });

    res.end();
    client.close();
});

app.listen(port, () => console.log(`server running on port ${port}`));