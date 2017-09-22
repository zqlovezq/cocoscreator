/**
 * Created by wzq on 2017/3/27.
 */
var redisAddress = 'redis://10.31.63.11:9006?db=3';
var db = {};
var redis = require("redis");
var client = redis.createClient({url:redisAddress});
client.on("error",function(err){
    console.log("Error :",err);
});
client.on('connect',runSample);
function runSample() {
    // Set a value
    // client.set("trigger:show:item_expire_1166", "Hello World", function (err, reply) {
    //     // console.log(reply.toString());
    // });
    // Get a value

    client.ZRANGE("trigger:show:item_expire_2060",0, -1,"withscores", function (err, reply) {
        console.log(reply);
    });
    client.zcard("trigger:show:item_expire_2060", function (err, reply) {
        console.log(reply);
    });
}
/**
 * 添加string类型的数据
 * @param key 键
 * @param value 值
 * @param expire(过期时间，单位秒，可为空，为空表示不过期)
 * @param callback(err,result)
 */
// db.set = function(key,value,expire,callback){
//     client.set(key,value,function(err,result){
//         if(err){
//             console.log(err);
//             callback(err,null);
//             return;
//         }
//         if(!isNaN(expire)&&expire>0){
//             client.expire(key,parseInt(expire));
//         }
//         callback(null,result);
//     })
// };
/**
 * 查询string类型的数据
 * @param key 键
 * @param callBack(err,result)
 */
// db.get = function(key, callback){
//
//     client.get(key, function(err,result){
//
//         if (err) {
//             console.log(err);
//             callback(err,null)
//             return;
//         }
//
//         callback(null,result);
//     });
// }
//
// module.exports = db;