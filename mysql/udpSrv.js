/**
 * Created by wzq on 2017/5/5.
 */
/**
 * 作为udp服务器，要想接受来自客户端的消息，在Node.js里，大体有这么几步
 * 1.导入dgram模块
 * 2.创建socket
 * 3.处理message事件
 * 4.绑定端口
 */
var dgram = require('dgram');

var serverSocket = dgram.createSocket('udp4');

serverSocket.on('message', function(msg, rinfo){
    console.log('recv %s(%d bytes) from client %s:%d\n', msg, msg.length, rinfo.address, rinfo.port);

    //echo to client
    serverSocket.send(msg, 0, msg.length, rinfo.port, rinfo.address);
});

//    err - Error object, https://nodejs.org/api/errors.html
serverSocket.on('error', function(err){
    console.log('error, msg - %s, stack - %s\n', err.message, err.stack);
    serverSocket.close();
});

serverSocket.on('listening', function(){
    console.log("echo server is listening on port 7.");
})

serverSocket.bind(7);