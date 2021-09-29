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


expressServer.listen(port,function () {
    console.log("Server Run @"+port)
})





