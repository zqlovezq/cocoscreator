/**********************************************************
路由模块
**********************************************************/

var url = require('url');
var querystring = require('querystring');
var response = require('./response.js');

module.exports = function(req, res, data) {
	//得到一个回应对象
	var rp = response();
	rp._response = res;
	rp._pathname = url.parse(req.url).pathname;
	rp._params = getParams(req, data);

	//判断指令是否正确
	try {
		var cmd = require('./cmds' + rp._pathname);
	} catch (err) {
		// console.log(err.stack);
		rp.err = 'PATHNAME_INVALID'; //无效请求
		rp.end();
	}
	//如果无错执行指令
	if (!rp.err) {
		console.log(req.url); //打印请求
		cmd(req, rp, rp._params); //执行指令
	}
};

//解析参数
function getParams(req, data) {
	var params = url.parse(req.url).query;
	if (params) {
		params += (data ? '&' : '') + data;
	} else {
		params = data;
	}
	return querystring.parse(params);
}