var socket_io = require('socket.io');
var io = socket_io();
var sockets = {};

sockets.io = io;

io.on('connection', function(socket){
    console.log('A user connected');
});

sockets.sendNotification = function() {
    io.sockets.emit('hello', {msg: 'Hello World!'});
}

module.exports = sockets;