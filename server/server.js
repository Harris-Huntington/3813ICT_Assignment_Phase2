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
const formidable = require('formidable');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectId;
const sockets = require('./sockets.js');
const server = require('./listen.js');
const io = require('socket.io')(http,{
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST"],
    }
})

const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

require('./routes/api-uploadimg.js')(app,formidable);

sockets.connect(io, PORT);

server.listen(http, PORT);

const url = 'mongodb://localhost:27017';
MongoClient.connect(url, {}, function(err, client) {
    if (err) {
        console.error("Failed to connect to MongoDB:", err);
        process.exit(1); // Exit the application on a MongoDB connection error
    }

    const dbName = '3813_Assignment2';
    const db = client.db(dbName);

    require('./routes/api-createchannel.js')(db, app)
    require('./routes/api-creategroup.js')(db, app);
    require('./routes/api-createusers.js')(db, app);
    require('./routes/api-deletegroup.js')(db, app);
    require('./routes/api-deleteuser.js')(db, app);
    require('./routes/api-findusers.js')(db, app);
    require('./routes/api-getgroups.js')(db, app);
    require('./routes/api-login.js')(db, app);
    require('./routes/api-setgrouptouser.js')(db, app);

    // Should start running here but won't because mongoDB is playing up
    // http.listen(3000, () => { 
    //     console.log("Server is running on port 3000");
    // });
});

// Add a global error handler for unhandled exceptions
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // option to handle unhandled rejections here.
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    // option to handle uncaught exceptions here.
});

