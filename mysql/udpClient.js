/**
 * Created by wzq on 2017/5/5.
 */
/**
 * 客户端udp就更简单了，一下几步就可以了：
 * 1.导入dgram模块
 * 2.创建socket
 * 3.发送消息
 */
var dgram = require('dgram');

var clientSocket = dgram.createSocket('udp4');

var messages = [
    'Hello, Echo Server.',
    'Are you OK?',
    'I am happy.',
    'A little panda found a pumpkin.'
];

var index = 0;

function sendMsg(){//send to server
    var msg = messages[index];
    index = index + 1;
    if(index == messages.length){
        index = 0;
    }
    clientSocket.send(msg, 0, msg.length, 7, "localhost");
}

//start a timer to send message to echoServer
setInterval(sendMsg, 1000);

clientSocket.on('message', function(msg, rinfo){
    console.log('recv %s(%d) from server\n', msg, msg.length);
});

clientSocket.on('error', function(err){
    console.log('error, msg - %s, stack - %s\n', err.message, err.stack);
});

clientSocket.bind(54321);