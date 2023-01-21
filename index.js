const express = require('express');
const app = express();
const http = require('http').createServer(app);
app.use(express.static(__dirname+"/public"));

app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
});

http.listen(3000,(err)=>{
    if(err) console.log(err);
    console.log("app is running...");
});

const io = require('socket.io')(http);

io.on('connection',(socket)=>{
    socket.on('send',(data)=>{
        console.log(data);
        socket.broadcast.emit('recive',data)
    });

    socket.on('join', name=>{
        socket.broadcast.emit('joined', name);
    })
});
