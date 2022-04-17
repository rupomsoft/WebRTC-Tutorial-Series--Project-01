const express=require('express');
const app=express();
const http=require('http');
const expressServer= http.createServer(app)
const {Server}=require('socket.io');
const io= new Server(expressServer);
const path= require('path');
const port=5000;


app.use(express.static('client-side/build'));

app.get('*',function (req,res) {
    res.sendFile(path.resolve(__dirname,'client-side','build','index.html'))
})


let UserList=[];

io.on('connection',function (socket) {

    //Add New User
    socket.on('CreateNewJoiner',function (user) {
        UserList.push(user);
        io.emit('AnnounceNewJoiner',user['Name']);
        io.emit('UserList',UserList);
        socket.PeerID=user['PeerID']
    })


    // Remove User
    socket.on('disconnect',function (){
        UserList.map((list,i)=>{
            if(socket.PeerID===list['PeerID']){
                UserList.splice(i,1);
                io.emit('AnnounceLeftJoiner',user['Name']);
                io.emit('UserList',UserList);
            }
        })
    })

})






expressServer.listen(port,function () {
    console.log("Server Run @"+port)
})





