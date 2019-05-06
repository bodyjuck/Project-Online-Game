var port = process.env.PORT || 3000;
var io = require('socket.io')(port);

var player = [];

var RandomNum = Math.floor(Math.random() * 100);

console.log("server started on port " + port);

io.on("connection",function(socket){

    console.log("client connect");

    socket.emit('open');

    socket.on("GetNum",function(num){
        
        if(GetNum.num == RandomNum)
        {
            socket.emit('get',"Win");
        }
        else if(GetNum.num < RandomNum)
        {
            socket.emit('get',"Less");
        }
        else if(GetNum.num > RandomNum)
        {
            socket.emit('get',"Most");
        }
    });
});