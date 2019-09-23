var io = require('socket.io')();
var players = {}

 // Listen for new connections from clients (socket)
io.on('connection', function(socket) {
    console.log('Client connected to socket.io!');
    socket.on('add-circle', function(data){
        io.emit('add-circle', data);
    });
    socket.on('clear-circles', function(){
        io.emit('clear-circles');
    });
    socket.on('register-player', function(initials){
        players[socket.id] = initials;
        io.emit('update-player-list', Object.values(players));
    });
    socket.on('disconnect', function(){
        delete player[socket.id];
        io.emit('update-player-list', Object.values(players));
    });
});
  
  // io represents socket.io on the server - let's export it
module.exports = io;