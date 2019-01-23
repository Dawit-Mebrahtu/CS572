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


app.post('/nearme', function (req, res){
   const locations = req.db.collection('locations');
    locations.createIndex({location: '2d'});

    const MUMLONGITUDE = -91.9665342;
    const MUMLATITUDE = 41.017654;
    const CATEGORY = req.body.category;
    //const NAME = req.body.name;

    const nearme = locations.find({category: {$eq: CATEGORY}, location: {$near: [MUMLONGITUDE, MUMLATITUDE]}}).limit(3);
    
    nearme.each(function(err, doc){
        console.log(doc);
    });

    res.end();
    client.close();
    
});

app.listen(port, () => console.log(`server running on port ${port}`));