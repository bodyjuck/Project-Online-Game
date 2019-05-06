var port = process.env.PORT || 3000;
var io = require('socket.io')(port);

//var playerNum;

var RandomNum = Math.floor(Math.random() * 100);

console.log("server started on port " + port);

console.log(RandomNum);

io.on("connection",function(socket){

    console.log("client connect");
    socket.emit('open');

    socket.on("Check",function(data){
        
        //playerNum = data.mynum;

        //console.log(playerNum);

        //data = data.mynum;
        //delete data.mynum;
        
        if(data.mynum == RandomNum)
        {
            //socket.emit('get',"Win");
            //console.log("Win");
        }
        else if(data.mynum < RandomNum)
        {
            //socket.emit('get',"Less");
            //console.log("Less");
        }
        else if(data.mynum > RandomNum)
        {
            //socket.emit('get',"Most");
            //console.log("Most");
        }

        socket.emit('getValue',data.mynum);
    });
});