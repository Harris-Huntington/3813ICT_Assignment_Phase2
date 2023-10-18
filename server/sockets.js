module.exports = {

    connect: function(io, PORT){
        
        var rooms = ["room1", "room2"];
        var socketRoom = [];
        var socketRoomNum = []

        const chat = io.of("/chat"); // Set alias

        // setting up connection
        chat.on("connection",(socket) => {
            
            // Event to send message back to clients
            socket.on('message',(message) => {
                for(i=0; socketRoom.length; i++) {
                    if (socketRoom[i][0] == socket.id) {
                        chat.to(socketRoom[i][1].emit('message', message))
                    }
                }
            })
        })
    }
}