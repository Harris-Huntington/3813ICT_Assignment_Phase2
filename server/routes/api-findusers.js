module.exports = function(db,app) {
    app.get('/api/findusers',function(req,res){
        const collection = db.collection('Users');
        collection.find({}).toArray(function(err,data){
            res.send(data);
        })
    })
}

// using to test functionality