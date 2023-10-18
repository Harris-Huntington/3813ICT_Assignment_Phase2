module.exports = function(db,app) {
    app.get('/api/login',function(req,res){
        const collection = db.collection('users');
        collection.find({}).toArray(function(err,data){
            res.send(data);
        })
    })
}

// Gets set of users to be checked against for log in