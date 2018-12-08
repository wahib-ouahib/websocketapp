const express = require('express');
const socket  = require('socket.io');
const app = express();

port = 2019 || process.env.PORT;

    //listening to port
var server = app.listen(port, ()=>{console.log(`we're live at port ${port}`)});

    //Static files
app.use(express.static('./public'));

    //Socket setup
const io = socket(server);

io.on('connection',function(socket){
    console.log('socket connection established | id:', socket.id);

    //handling chat event
    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
    });

    // Handling typing event
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });
})