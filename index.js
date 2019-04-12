const express = require('express');
const request = require('request');
const proxy = require('express-http-proxy');
const mockData = require('./mockData');

const server_port = process.env.PORT || 8080;
const places_api_key = process.env.PLACES_API_KEY;
const quotaguardstatic_url = process.env.QUOTAGUARDSTATIC_URL;

var options = {
    proxy: quotaguardstatic_url,
};

var app = express();
app.use('/proxy', proxy(quotaguardstatic_url))

app.listen(server_port, function () {
    console.log("Server is running");
});

// test route 
app.get('/places',  (req, res) => {
    const baseUrl = 'https://jsonplaceholder.typicode.com/todos/';
    const { location } = req.query;
    const redirectUrl = `${baseUrl}${location[0]}`;    
    request(redirectUrl, options, (error, response, body) => {
        if(error) {
            res.send('An error occured')
        } else {
            res.send(mockJson);
        }
    });
});

// main route
// app.get('/places',  (req, res) => {
//     const baseUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
//     const location = req.query.location;
//     const radius = 1500;
//     const redirectUrl = `${baseUrl}location=${location}&radius=${radius}&type=restaurant&key=${places_api_key}`;
//     request(redirectUrl, options, (error, response, body) => {
//         if(error) {
//             res.send('An error occured')
//         } else {
//             res.send(body)
//         }
//     });
// });