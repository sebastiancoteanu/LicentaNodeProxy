var express = require('express');
var request = require('request');
var port = process.env.PORT || 3000;

var app = express();

app.listen(port, function () {
    console.log(`Example app listening on port !`);
});

const PLACES_API_KEY = "AIzaSyCJP_udpSeKZl2T5OZTo-z7WadAWS_Ckd8";

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