/**
 * Created by wzq on 2017/5/3.
 */
var redis = require("redis");
var redisAddress = "redis://10.31.63.8:6379?db=7"
var db = {};
var client;
//成功提示弹窗
// var send_msg = {
//     "ext_type":1,
//     "msg":"得到11111红包",
//     "msg_type":6001,
//     "recver_id":'9008000000056382',
//     "sender_id":'9008000000056382',
//     "sub_type":18,
//     "time":1492792888,
//     "type":283
// };
//
var send_msg = {
    "ext_type":1,
    "msg":"得到红包",
    "msg_type":6001,
    "recver_id":'9008000000088856',
    "sender_id":'10000',
    "sub_type":0,
    "time":1492843495,
    "type":0
};
db.query = function sqlback(key,fn){
    client = redis.createClient({url:redisAddress});
    client.on("error",function(err){
        console.log("Error : ",err);
    });
    client.on('connect',queryData);
    function queryData(){
        client.lpush(key,JSON.stringify(send_msg),function(err,reply){
            console.log("reply",reply);
            fn(reply);
        });
    }
};
module.exports = db;