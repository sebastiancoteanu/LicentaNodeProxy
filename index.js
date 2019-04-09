var express = require('express');
var request = require('request');
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

var app = express();

app.listen(server_port, server_ip_address, function () {
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