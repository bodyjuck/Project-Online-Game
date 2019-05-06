var port = process.env.PORT || 3000;
var io = require('socket.io')(port);

console.log("server start");

io.on("connection",function(socket){

    console.log("client connect");


});