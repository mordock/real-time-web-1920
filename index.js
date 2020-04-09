var express = require('express');
var socket = require('socket.io');

var app = express();
var server = app.listen(4000, function(){
    console.log('listening to port 4000');
});

const illegalWordList = ['fuck', 'shit', 'motherfucker', 'twat', 'shitbag', 'wanker', 'cunt', 'bollocks', 'dickhead'];

app.use(express.static('public'));

var io = socket(server);

io.on('connection', function(socket){
    console.log('made socket connection');
    
    socket.on('new user', function(username){
        io.sockets.emit('new user', username);  
    });

    socket.on('chat', function(data){
        let checkedData = CheckProfanity(data);
        io.sockets.emit('chat', checkedData);
        io.sockets.emit('server');
    });

    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });
});

function CheckProfanity(data){
    let words = data.split(' ');
    console.log(words);

    for(let i = 0; i < words.length; i++){
        if(illegalWordList.includes(words[i])){
            words[i] = '****';
        }
    }

    words = words.toString();
    console.log(words);
    words = words.replace(/,/g, ' ');
    console.log(words);

    return words;
}