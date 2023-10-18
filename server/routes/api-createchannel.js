module.exports = function(db,app) {
    // route to manage creating channel
    app.post('/api/createchannel',function(req,res) {
        if (!req.body) {
            return res.sendStatus(400);
        }
        channel = req.body;
        const collection = db.collection('Channels')
        collection.find({'id':channel.id}).count((err,count)=>{
            if (count === 0) {
                // if there are no duplicates
                collection.insertOne(user,(err,dbres)=>{
                    if (err) throw err;
                    let num = dbres.insertedCount;
                    // send back to client number of items inserted with no error message 
                    res.send({'num':num,err:null})
                })
            } else {
                // On error, send back error message
                res.send({num:0,err:"duplicate channel"})
            }
        })
    })
}