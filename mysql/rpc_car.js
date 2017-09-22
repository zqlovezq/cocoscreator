/**
 * Created by wzq on 2017/5/3.
 */
/**
 * Created by wzq on 2017/4/11.
 */
var redis = require("redis");
var jpacks = require('jpacks');
require("./lib/paipai-schema");
var redisAddress = "redis://10.31.63.8:9032?db=9";//key:"gameaward:pre:treat:msg"
//外网10.33.68.45:9000?db=0 key = 'chambar:week:salary:que'
var db = {};
var client;
var date = ""+parseInt(new Date().getTime());
console.log(date);
var date1 = parseInt(date/1000);
console.log(date1);
// |    2110 | 海蓝之星     |
// |    2109 | 精灵之泪     |
// |    2112 | 金甲战神     |
var data = {
    "id":date,
    "user_id":"9008000000088856",
    "game_id":1010,
    "trade_id":date+'10086',
    "award_id":0,
    // "award_list":"2016:100000:0",//金币
    // "award_list":"1004 :100000:0",//经验
    "award_list":"2109:1:86400",
    "status":0,
    "descript":"集市卖出服装收益",
    "update_time":date1,
    "create_time":date1,
    "table_index":255
};

var content= new Buffer(jpacks.pack("ADD_COIN", data));
db.query = function sqlback(key,fn){
    client = redis.createClient({url:redisAddress});
    client.on("error",function(err){
        console.log("Error : ",err);
    });
    client.on('connect',queryData);
    function queryData(){
        client.lpush(key,content,function(err,reply){
            console.log("reply",reply);
            fn(reply);
        });
    }
};
module.exports = db;