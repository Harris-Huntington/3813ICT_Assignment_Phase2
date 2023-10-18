module.exports = function(db,app,ObjectID) {
    // Route to be able to delete a single user
    app.post('/api/deleteuser', function(req,res){
        if (!req.body) {
            return res.sendStatus(400);
        }
        userID = req.body.userid;
        // Create a new monogy objectID from the passed in _id
        var objectid = new ObjectID(userID);
        const collection = db.collection('Users');
        // Delete a single user  based on its unique ID
        collection.deleteOne({_id: objectid},(err,docs)=>{
            // Get a new listing of all items in the database and return to client
            collection.find({}).toArray((err, data)=>{
                res.send(data);
            })
        })
    })
}