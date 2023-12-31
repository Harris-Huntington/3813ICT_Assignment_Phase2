module.exports = {
    listen: function(app, PORT){
        app.listen(PORT, ()=>{
            let d = new Date();
            let h = d.getHours();
            let m = d.getMinutes();
            console.log("Server listening on port " + PORT + " at " + h + ":" + m);
        });
    }
}

// Abstracted code to set server to listening on specified port