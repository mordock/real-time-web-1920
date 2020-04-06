var socket = io.connect('http://localhost:4000');

var message = document.getElementById('message'),
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output'),
      feedback = document.getElementById('feedback');

btn.addEventListener('click', function(){
    socket.emit('chat', {
        Message: message.value,
        Handle: handle.value
    });
});

message.addEventListener('keypress', function(){
    socket.emit('typing', handle.value);
});

socket.on('chat', function(data){
    output.innerHTML += '<p><strong>' + data.Handle + ': <strong>' + data.Message + '</p>';
    feedback.innerHTML = "";
});

socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>' + data  + ' is typing a message</em></p>';
});