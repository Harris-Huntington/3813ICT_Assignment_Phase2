// get dependencies
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Enable CORS for all HTTP methods
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})


// listen on port 3000
app.listen(3000, () => {
    console.log("listening on port 3000");
})