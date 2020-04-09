var socket = io.connect('http://localhost:4000');

let socketUserName = '';
let inchat = false;

var message = document.getElementById('message'),
      btn = document.getElementById('send'),
      usernameButton = document.getElementById('formButton'),
      output = document.getElementById('output'),
      feedback = document.getElementById('feedback'),
      chatWindow = document.getElementById('mario-chat'),
      userNameSection = document.getElementById('usernameSection'),
      userNameInput = document.getElementById('usernameInput');

btn.addEventListener('click', function(){
    socket.emit('chat', message.value);
});

message.addEventListener('keypress', function(){
    socket.emit('typing', socketUserName);
});

usernameButton.addEventListener('click', function(){
    socket.emit('new user', userNameInput.value);
    inchat = true;
});

socket.on('chat', function(data){
    output.innerHTML += '<p><strong>' + socketUserName + ': <strong>' + data + '</p>';
    feedback.innerHTML = "";
    message.value = '';
    console.log('bbbb');
});

socket.on('typing', function(username){
    feedback.innerHTML = '<p><em>' + socketUserName  + ' is typing a message</em></p>';
});

//entered user name
socket.on('new user', function(username){
    socketUserName = username;
    if(inchat){
        userNameSection.classList.toggle('hidden');
        chatWindow.classList.toggle('hidden');
        message.value = '';
        userNameInput.value = '';
        inchat = false;
    }
});

socket.on('server', function(){
    output.innerHTML +='<p id="server" ><strong>' + '-server message- ' + socketUserName + ': <strong>' + 'please dont swear in this server!' + '</p>';
});