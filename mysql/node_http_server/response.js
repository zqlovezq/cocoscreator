/**********************************************************
指令回应模块
**********************************************************/

module.exports = function() {
	return new response();
};

//构造函数
function response() {
	this.ALLOW_CROSS_DOMAIN = true; //允许跨域
	this.err = null; //错误信息
	this.result = {}; //结果对象
	this.iff = null; //分支条件
	this._redirected = false; //重定向过
	this._pathname = null; //请求路径
	this._params = null; //请求参数
	this._response = null; //response对象
	this._cbFunc = null; //当前回调函数
	this._callbacks = []; //回调对象数组
};

//得到执行函数参数
response.prototype._getParams = function(p) {
	this._cbFunc = null;
	var params = [];
	for (var i in p) {
		if (typeof(p[i]) == 'function') {
			this._cbFunc = p[i];
			params.push(this._nextFunc.bind(this)); //参数为回调函数
		} else {
			params.push(this[p[i]]); //参数为值
		}
	}
	return params;
};

//执行函数
response.prototype._callFunc = function() {
	var cb = this._callbacks.shift();
	var type = cb.type;

	if (type == 'if' && !this.iff) {
		this.end();
	} else if (type == 'else' && this.iff) {
		this.end();
	} else {
		var func = cb.func;
		var params = this._getParams(cb.params);

		func(...params);
		if (this._cbFunc == null) {
			this.end();
		}
	}
};

//执行下一个函数
response.prototype._nextFunc = function() {
	this._cbFunc(...arguments);
	this.end();
};

//反回结果
response.prototype._end = function() {
	if (this._redirected) {
		return this._response.end();
	}
	if (this.ALLOW_CROSS_DOMAIN) {
		this._response.setHeader('Access-Control-Allow-Origin', '*');
		this._response.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept');
		this._response.writeHead(200);
	}
	if (this.err) {
		this.result = {
			errMsg: this.err,
			pathname: this._pathname,
			params: this._params
		};
	}
	if (typeof(this.result) != 'string') {
		this.result = JSON.stringify(this.result);
	}
	this._response.end(this.result);
};

//添加监听
response.prototype._addListener = function(type, argus) {
	argus = Array.prototype.slice.call(argus);

	this._callbacks.push({
		type: type, //类型
		func: argus[0], //函数
		params: argus.slice(1) //参数
	});
};

//on监听,无条件执行
response.prototype.on = function() {
	this._addListener('on', arguments);
};

//if监听,当iff为真时执行
response.prototype.if = function() {
	this._addListener('if', arguments);
};

//else监听,当iff为假时执行
response.prototype.else = function() {
	this._addListener('else', arguments);
};


//执行、并返回结果
response.prototype.end = function() {
	if (this._redirected) {
		return this._end();
	}
	if (this.err) {
		return this._end();
	}
	if (this._callbacks.length) {
		this._callFunc();
	} else {
		this._end();
	}
};

//重定向
response.prototype.redirect = function(url) {
	this._response.setHeader('Location', url);
	this._response.writeHead(302);
	this._redirected = true;
};