module.exports = function(db,app) {
    app.get('/api/getgroups',function(req,res){
        const collection = db.collection('Groups');
        collection.find({}).toArray(function(err,data){
            res.send(data);
        })
    })
}

// Gets all of the groups