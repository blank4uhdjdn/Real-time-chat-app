
const {Server}=require('socket.io')
const http=require('http')
const express = require('express')


const app=express();
const server=http.createServer(app);
const io= new Server(server,{
    cors:{
        origin:["http://localhost:3000"],
        methods:["GET","POST"], 

    }

    
});

const getReceiverSocketId=(receiverId)=>{
    return userSocketaMap[receiverId];
}

const userSocketaMap={} //{userid:socketid}

io.on('connection',(socket)=>{
    console.log('User conected',socket.id)


    const userId=socket.handshake.query.userId
    if(userId!="undefined"){
        userSocketaMap[userId]=socket.id
        //io.emit send event to all connected clients 
        io.emit("getOnlineUsers",Object.keys(userSocketaMap))
    }

    socket.on("disconnect",()=>{ 
        console.log("User disconnected",socket.id)
        delete userSocketaMap[userId]
        io.emit("getOnlineUsers",Object.keys(userSocketaMap))

    })
})



 module.exports= {app,io,server,getReceiverSocketId};
