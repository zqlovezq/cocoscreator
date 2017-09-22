/**
 * Created by wzq on 2017/5/10.
 */
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
    this._callbacks = []; //回调对象数组
};
response.prototype._addListener = function(type, argus) {
    console.log(type);
    console.log(argus);
    // console.log(argus.slice(1));
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
//得到执行函数参数
response.prototype._getParams = function(params) {
    var cp = {
        callback: false,
        params: []
    };
    for (var p of params) {
        if (typeof(p) == 'function') { //参数为回调函数
            cp.callback = true;
            cp.params.push(function() {
                p(arguments);
                this.end();
            }.bind(this));
        } else {
            cp.params.push(this[p] == null ? p : this[p]);
        }
    }
    return cp;
};