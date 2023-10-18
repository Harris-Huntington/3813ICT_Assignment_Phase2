module.exports = function(db,app) {
    app.post('/api/setgrouptouser', function(req, res) {
        if (!req.body) {
            return res.sendStatus(400)
        }
        user = req.body;
        const collection = db.collection("users")
        collection.updateOne({_id:user._id}, {$set: {username:user.username, email:user.email, password:user.password, roles:user.roles, groups:user.groups}}, () => {
            res.send({'ok':user._id})
        })
    })
}