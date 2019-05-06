var port = process.env.PORT || 3000;
var io = require('socket.io')(port);

var player = [];

console.log("server started on port " + port);

io.on("connection",function(socket){

    console.log("client connect");

    socket.emit('open');
});