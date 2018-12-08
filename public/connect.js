//connect front to socket.io
var socket = io.connect('http://localhost:2019');

//Query DOM
var message  = document.getElementById("message");
var handle   = document.getElementById("handle");
var output   = document.getElementById("output");
var btn      = document.getElementById("send");
var feedback = document.getElementById("feedback");

//Emit events
btn.addEventListener('click', function(){
    socket.emit('chat', data = {
        handle: handle.value,
        message: message.value
    })
    console.log(message);
    message.value = "";
})

message.addEventListener('keypress', function(){
    socket.emit('typing', handle.value);
})


//Listen for events
socket.on('chat', function(data){
    feedback.innerHTML = '';
    output.innerHTML += `<p><strong>${data.handle} : </strong>${data.message}</p>`
})

socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});
