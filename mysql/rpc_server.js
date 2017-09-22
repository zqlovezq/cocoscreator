/**
 * Created by wzq on 2017/4/12.
 */
var http = require("http");
var mysql = require("./db");
var server = http.createServer();
server.on("listening",onListening);
server.on("request",onRequest);
//监听事件
function onListening() {
    var addr = server.address();
    console.log('Server run on', addr.address + ':' + addr.port);
}
//连接事件
function onRequest(req, res) {
    // allowCross(res);
    res.writeHead(200,
        {"Access-Control-Allow-Origin":"*",
            "Content-Type":"text/html charset=UTF-8"
        });
    var data = '';

    req.on('data', function(chunk) {
        data += chunk;
    });
    req.on('end', function() {
        mysql.query("gameaward:pre:treat:msg",function(result){
            res.end(JSON.stringify(result));
        })
    });
}
server.listen(9090,"127.0.0.1");

/*

 var config = {};
 //获取用户等级
 config.userLevel = {
 //外网网址
 requestType:101888, responseType:101889,
 'ValetPropertyQuery.proto':{'ValetPropertyQueryRQ','ValetPropertyQueryRS'},
 host:'10.33.67.94',
 port:"41002"
 };
 //获取用户信息
 config.userInfo = {
 //外网网址
 requestType:100037, responseType:100038,
 'UdbcsRpcDef.proto':{'UserInfoRQ','UserInfoRS'},
 host:'10.33.67.132',
 port:['41424','41422','41423']
 };
 //获取用户物品
 config.userItem = {
 //外网网址
 requestType:102807, responseType:102808,
 'SvrBagOperation.proto':{'SvrAddBagItemRQ','SvrAddBagItemRS'},
 host:'10.33.68.64',
 port:"18002"
 };
 //获取用户背包
 config.userBag = {
 //外网网址
 requestType:102833, responseType:102834,
 'SvrBagOperation.proto':{'SvrAddBagItemRQ','SvrAddBagItemRS'},
 host:'10.33.68.64',
 port:"18002"
 };*/

