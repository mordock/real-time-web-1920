var express = require('express');
var socket = require('socket.io');

var app = express();

// app.set('port', (process.env.PORT || 3000));

const port = process.env.PORT || 4000;

var server = app.listen(port, function(){
    console.log('listening to port 4000');
});

const illegalWordList = ['fuck', 'shit', 'motherfucker', 'twat', 'shitbag', 'wanker', 'cunt', 'bollocks', 'dickhead'];

let hasSworn = false;

app.use(express.static('public'));

var io = socket(server);

app.get('/', (req, res) => {
    res.render('index.html');
})

io.on('connection', function(socket){
    console.log('made socket connection');
    
    socket.on('new user', function(username){
        io.sockets.emit('new user', username);  
    });

    socket.on('chat', function(data){
        let checkedData = CheckProfanity(data);
        io.sockets.emit('chat', checkedData);
        if(hasSworn){
            io.sockets.emit('server');
            hasSworn = false;
        }
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
            hasSworn = true;
        }
    }

    words = words.toString();
    words = words.replace(/,/g, ' ');

    return words;
}