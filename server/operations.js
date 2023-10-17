const { MongoClient } = require("mongodb")


const url = 'monogodb://localhost:27017'

exports.find = function(req, res) {
    MongoClient.connect(url, {useNewUrlParser: true}, function(err, client) {
        if (err) throw err;
        let db = client.db("3813_Assignment2");
        db.collection("Users").find({}).toArray().then(function(docs) {
            console.log("Found the following records: ")
            console.log(docs)
            res.send(docs);
        }).catch((err) => {console.log(err);}).finally(() => {client.close();});
    })
}