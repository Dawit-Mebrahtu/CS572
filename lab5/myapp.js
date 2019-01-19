const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.enable('case sensitive routing');
//app.set('strict routing', true);
app.enable('strict routing');
app.enable('trust proxy');

app.get('/users', async function (req, res){
    try{
        const dataset = await axios.get('https://randomuser.me/api/?results=10');
        const output = JSON.stringify(dataset.data.results);
        
        res.status(200);
        res.set({
            'content-type': 'application/json',
            'Cache-Control': 'private, max-age=86400',
            'Last-Modified': 'Fri, 18 Jan 2018 23:45:37 GMT'
        });
        res.links({
            next: 'http://localhost:3000/users?page=2',
            last: 'http://localhost:3000/users?page=5'
        })
        console.log(output);
        res.end(output);
    }
    catch(err){
        console.log(err);
    }
});

app.listen(port, () => console.log(`server running on port ${port}`));