var port = process.env.PORT || 3000;
var io = require('socket.io')(port);

var playerNum;

var RandomNum = Math.floor(Math.random() * 100);

console.log("server started on port " + port);

console.log(RandomNum);

io.on("connection",function(socket){

    console.log("client connect");
    socket.emit('open');

    socket.on("Check",function(data){
        
        playerNum = data.mynum;

        console.log(playerNum);
        /*
        if(num.GetNum == RandomNum)
        {
            socket.emit('get',"Win");
        }
        else if(num.GetNum < RandomNum)
        {
            socket.emit('get',"Less");
        }
        else if(num.GetNum > RandomNum)
        {
            socket.emit('get',"Most");
        }*/
    });
});