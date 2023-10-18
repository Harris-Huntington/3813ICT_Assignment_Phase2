module.exports = function(db,app) {
    // Route to be able to delete a single user
    app.post('/api/deletegroup', function(req,res){
        if (!req.body) {
            return res.sendStatus(400);
        }
        groupID = req.body;
        const collection = db.collection('Users');
        // Delete a single group based on its unique ID
        collection.deleteOne({_id: groupID},(err,docs)=>{
            // Get a new listing of all items in the database and return to client
            collection.find({}).toArray((err, data)=>{
                res.send(data);
            })
        })
    })
}