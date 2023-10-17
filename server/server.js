// // get dependencies
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();

// // parse requests
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Enable CORS for all HTTP methods
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// })

// const users = require(' ./operations.js');
// app.get('/userFind', users.find);


// // listen on port 3000
// app.listen(3000, () => {
//     console.log("listening on port 3000");
// })

const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');
const MonogoClient = require('mongodb').MonogoClient;
const ObjectID = require('mongodb').ObjectId;

app.use(cors());
app.use(bodyParser.json());
const url = 'mongodb://localhost:27017';
MongoClient.connect(url, {poolSize: 10, useNewUrlParser: true, useUnifiedTopology: true},function(err, client) {
    if (err) {return console.log("errrs ahoy: ", err)}

    const dbName = '3813_Assignment2';
    const db = client.db(dbName);

    require('./routes/api-findusers.js')(db, app);

    app.listen(http, () => {
        console.log("listening on port 3000");
    })
});