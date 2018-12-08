//connect front to socket.io
var socket = io.connect('http://localhost:2019');

//Query DOM
var message = document.getElementById("message");
var handle  = document.getElementById("handle");
var output  = document.getElementById("output");
var btn    = document.getElementById("send");

//Emit events
btn.addEventListener('click', function(){
    socket.emit('chat', data = {
        handle: handle.value,
        message: message.value
    })
    console.log(message);
    message.value = "";
})

//Listen for events
socket.on('chat', function(data){
    console.log(data.message)
    output.innerHTML += `<p><strong>${data.handle} : </strong>${data.message}</p>`
})
