/**********************************************************
微信服务器  - 用于提供微信API支持
**********************************************************/

var config = require('./config.js');
var route = require('./route.js');
var server = require('http').createServer();


//监听请求
server.on('request', function(req, res) {
	var data = '';

	req.on('data', function(chunk) {
		data += chunk;
	});
	req.on('end', function() {
		route(req, res, data);
	});
});

//开启服务
server.listen(config.HOST.port, config.HOST.ip, function() {
	var addr = server.address();
	console.log('Server run on %s:%s.', addr.address, addr.port);
});



//捕获错误
process.on('uncaughtException', function(err) {
	console.log(err.stack);
});