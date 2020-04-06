var socket = io.connect('http://localhost:4000');

var message = document.getElementById('message'),
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output');

btn.addEventListener('click', function(){
    socket.emit('chat', {
        Message: message.value,
        Handle: handle.value
    });
});

socket.on('chat', function(data){
    output.innerHTML += '<p><strong>' + data.Handle + ': <strong>' + data.Message + '</p>'
})