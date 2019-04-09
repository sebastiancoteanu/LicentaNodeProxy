const express = require('express');
const request = require('request');
const server_port = process.env.PORT || 8080;;
const heroku_api_key = process.env.IPTOEARTH_API_KEY;
const places_api_key = process.env.PLACES_API_KEY;

var app = express();

app.listen(server_port, function () {
    console.log(`${server_port}`);
    console.log(`${heroku_api_key}`);
    console.log(`${places_api_key}`);
});

// Example route
app.get('/places/:redirectUrl',  (req, res) => {
    const redirectUrl = req.query.redirectUrl;
    res.send("ssss");
    // request(`${redirectUrl}${PLACES_API_KEY}`,  (error, response, body) => {
    //     if(error) {
    //         res.send('An erorr occured')
    //     } else {
    //         res.send(body)
    //     }
    // });
});