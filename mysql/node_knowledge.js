/**
 * Created by wzq on 2017/3/17.
 */
/**
 * 你不知道的javascript
 */
/**
 * 1:严格模式
 */
/*
    为何创立严格模式
    。消除javascript语法的一些不合理、不严谨之处，减少一些怪异行为；
    。消除代码运行的一些不安全之处，保证代码运行的安全
    。提高编译器效率，增加运行速度
    。为未来新版本的javascript做好铺垫
 */
/**
 * 进入严格模式的标志
 * “use strict”
 * 老版本的浏览器会把他当做一行普通字符串，加以忽略
 *
 * 将“use strict”放在脚本文件的第一行，则整个脚本都将以“严格模式”运行。如果这行语句不在第一行，
 * 则无效，整个脚本以“正常模式”运行。如果不同模式的代码文件合并成一个文件，这一点需要特别注意。
 * <script>
 *     "use strict"
 *     console.log("这是严格模式")
 *     </script>
 *     <script>
 *         console.log("正常模式")
 *         </script>
 *  在正常模式中，如果一个变量没有声明就赋值，默认是全局变量。严格模式禁止这种方法，全局变量必须显示声明
 *
 *  JS中声明全局变量主要分为显式声明或者隐式声明
 *  声明方式一：使用var(关键词)+变量名(标识符)的方式在function外部声明，即为全局变量，否则在function声明的是局部变量
 *  声明方式二：没有使用var，直接给变量名（标识符）赋值，这样会隐式的声明了全局变量。即使该语句是在一个function内，
 *  当该function被执行后变成了全局变量
 *  function f(){
    a = 33;
    console.log(a);
    }
    f();
    console.log(a);
 *  声明方式三：window全局对象
 *
 *  静态绑定：在编译阶段所执行的函数就已经被确定的，而动态绑定是在程序执行时才决定使用使用哪个函数
 *
 *  javascript是一种描述性脚本语言，它不同于java或者C#等编辑性语言，它不需要警醒编译成中间语言，而是由浏览器
 *  警醒动态的解析与执行。→转向studyJs有例子
 *  可得到代码中 代码块一中运行报错，但不影响代码块二的执行，这就是代码块间的独立性，而代码块二中能调用到代码一
 *  中的变量，则是块间共享性
 *  
 */
//将"use strict"放在函数体的第一行，则整个函数以“严格模式”进行
function strict(){
    "use strict";
    return "这是严格模式"
}
function notStrict(){
    return "这是正常模式"
}
//脚本文件的变通写法
//因为上一种调用不利于文件合并，所以更好的做法是将整个脚本文件放在一个立即执行的匿名函数中
(function(){
    "use strict";
})();


// function Fn() {//声明式函数
//
// }
// var Fn = function(){//赋值式函数
//
// }
//声明式函数与赋值式函数的区别在于：在JS的预编译期，声明式函数将会先被提取出来，然后才按顺兴执行js代码
Fn();
Fn1();
function Fn(){
    console.log("我是不是先执行")
};
var Fn1 = function(){
    console.log("我是不是不执行")
};
/**
 * JS的解析过程分为两个阶段：预编译期与执行期
 * 预编译期JS会对本代码块中的所有声明的变量和函数进行处理（类似与C语言的编译），
 * 但需要注意的是此时处理函数的只是声明式函数，而且变量也只是进行了声明但未初始化以及赋值
 *
 *  Node.js能做什么？
 *  Javascript 是由客户端而产生，Node.js为网络而生
 *  具有复杂逻辑的网站 基于社交网络的大Web的应用
 *  Web Socket服务器 TCP/UDP套接字应用程序
 *  命令行工具 交互式终端程序
 *  
 *  Express是整个Node.js之中最为常用的一个框架（开发包）
 *  项目结构：
 *  node_modules：存放所有的项目依赖库
 *  package.json：项目依赖配置及开发者信息
 *  app.js：程序启动文件；
 *  public：静态文件（css、js、img）;
 *  route:路由文件（MVC中的C，controller（管理员））；
 *  views：页面文件（ejs模板）；
 *
 *  现在有个小小的问题，如果要想运行Node.js，则现在只能够使用“node app.js”，而这样的运行方式，如果app.js
 *  文件修改之后往往需要重新启动才可以加载新的内容，这对于开发是非常不方便的，为此，可以使用一个supervisor（监督人）
 *  它可以动态的加载修改之后的开发程序
 *  supervisor app.js 以后项目之中，每一次文件的改变，那么都可以及时的监听到，，同时也可以及时加载新的代码文件，对于开发
 *  是非常方便，但是有一点不方便；每一次修改的时候如果代码有错，后台会一直报错
 *
 *  同步：synchronization
 *  异步：asynchronous
 *  1：同步时I/O或阻塞式I/O
 *  线程在执行中如果遇到磁盘读写或网络通信，通常要耗费较长时间。这时操作系统会剥夺这个线程的CPU，
 *  使其暂停执行，同时将资源让给其他的工作线程，这种线程调度方式称为阻塞，当I/O操作完毕时，操作系统将
 *  这个线程的阻塞状态解除，回复其对CPU的控制权，令其继续执行
 *  2：异步式I/O或非阻塞式I/O
 *  针对所有I/O操作不采用阻塞策略，当线程遇到I/O操作时，不会以阻塞的方式等待I/O操作的完成或者数据的返回
 *  而只是将IO请求发送给操作系统，继续执行下一条语句，当操作系统完成I/O操作时，以时间的形式通知执行IO操作的线程
 *  为了处理异步IO，线程有事件循环，不断的检查有没有未处理的事件，依次予以处理。
 *  3：非阻塞与阻塞模式区别
 *  非阻塞模式下，一个线程永远在执行计算操作，这个线程所使用的CPU核心利用率永远是100%，IO以事件的方式通知。
 *  阻塞模式下，多线程往往能提高系统吞吐量，因为一个线程阻塞还有其他线程在工作，多线程可以让CPU资源
 *  不被阻塞的线程浪费
 *
 *  模块
 *  1.创建及加载模块
 *  Node.js提供了exports和require两个对象，其中exports是模块公开的借口，require用于从外部获取一个模块的借口，
 *  require不会重复加载模块，也就是说无论调用多少次require，获取的模块都是同一个
 *  process:
 *  它用于描述当前Node.js进程状态的对象。提供了一个与操作系统的简单借口，通常写本地命令行程序的时候会用到它。
 *  1.process.argv
 */
//Node.js最新技术栈之Promise
/**
 * js流程
 * 
 */

/**
 *  Express与nodejs创建服务器的两种方法
 *
 *  1：这个是原生式的创建一个web服务器的方式，但是有缺陷。如果我们想要将我们的静态页面
 *  与服务器同域下的时候很不方便
 */
var http = require("http");
var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/plain'});
    res.write('hello world!');
    res.end();
}).listen(80);

/**
 * Express创建Web服务器
 *
 */
var express = require("express");
var app = express();
var server = app.listen(8080,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("方位地址为http://%s:%s",host,port);
});
app.get("/",function(req,res){
    res.sendFile(__dirname);
});







/**
 * promise:
 * 是一个包含了兼容promise规范then方法的对象或函数
 * 我们可以这样理解，每一个promise只要返回的可以then的都可以。就像上面举例返回的this一样，
 * 只要每一个都返回this，它就可以无限的链式下去
 * 这里的this约定为每一个对象或函数返回的都是兼容promise规范then方法。
 *
 * thenable 是一个包含了then方法的对象或函数。
 * value 是任何Javascript值。 (包括 undefined, thenable, promise等).
 * exception 是由throw表达式抛出来的值。
 * reason 是一个用于描述Promise被拒绝原因的值
 *
 *
 * Promise 状态（允许）
 * 一个Promise必须处在其中之一的状态：pending（即将发生），fulfilled（实现的）或rejected（被拒的）
 * 。如果是pending状态，则promise：可以转换到fulfilled或rejected状态。
 * 。如果fulfilled状态，则promise；。不能转换成任何其他形态。必须有一个值，且这个值不能改变
 * 。如果是rejected状态，则promise可以：。不能转换成任何其它状态。必须有一个原因，且这个值不能被改变
 *
 * then方法：
 * 一个Promise必须提供一个then方法来获取其值或原因。Promise的then方法接受两个参数：
 * promise.then(onFulfilled,onRejected);
 * 1:onFulfilled和onRejected都不是参数则忽略
 * 2：onFulfilled是一个函数  它必须在promise fulfilled后调用，且promise的value为其第一个参数。
 * 3.如果onRejected是一个函数，它必须在promise rejected后调用，且promise的reason为其第一个参数
 * 4.then必须返回一个promise
 * resolve 方法可接受的参数有两种：一个普通的值/对象或者一个Promise对象。如果是普通的值/对象，则直接把结果传递到下一个对象；
 * 如果是一个Promise对象，则必须先等待这个子任务序列完成。
 */
// step1().then(step2).then(step3).then(step4).catch(function(err){});
var Promise = function(){

};
var isPromise = function(value){
    return value instanceof Promise;
};
var defer = function(){
    var pending = [],
        value;
    var promise = new Promise();
    promise.then = function(callback){
        if(pending){
            pending.push(callback);
        }else{
            callback(value);
        }
    };
    return {
        resolve:function(_value){
            if(pending){
                value = _value;
                for(var i = 0,ii=pending.length;i<ii;i++){
                    var callback = pending[i];
                    callback(value);
                }
                pending = undefined;
            }
        },
        promise:promise
    };
};



(function() {
    'use strict';

    // 用于异步执行 onFulfilled/onRejected
    // `setImmediate` or `function(fn) { setTimeout(fn, 0) }` in browser
    // `process.nextTick` in node
    var asyncCall = process.nextTick;

    // 2.3
    // Promise解析过程 是以一个promise和一个值做为参数的抽象过程，
    // 可表示为
    // [[Resolve]](promise, x)
    function resolve(promise, x) {
        // 2.3.1
        // 如果promise 和 x 指向相同的值,
        // 使用 TypeError做为原因将promise拒绝
        if (promise === x) {
            return promise.reject(new TypeError('The promise and its value refer to the same object'));
        }
        // 2.3.3
        // 如果x是一个对象或一个函数
        if (x && (typeof x === 'function' || typeof x === 'object')) {
            // 2.3.3.3
            // 如果 resolvePromise 和 rejectPromise 都被调用了，
            // 或者被调用了多次，则只第一次有效，后面的忽略
            // // 我们用 called 作为标识防止被多次调用
            var called = false,
                then;

            try {
                // 2.3.3.1
                // 将 then 赋为 x.then
                then = x.then;

                if (typeof then === 'function') {
                    // 2.3.3.3
                    // 如果 then 是一个函数，
                    // 以x为this调用then函数，
                    // 且第一个参数是resolvePromise，
                    // 第二个参数是rejectPromise
                    then.call(x, function(y) {
                        // 2.3.3.3.1
                        // 当 resolvePromise 被以 y为参数调用,
                        // 执行 [[Resolve]](promise, y)
                        if (!called) {
                            called = true;
                            resolve(promise, y);
                        }
                    }, function(r) {
                        // 2.3.3.3.2
                        // 当 rejectPromise 被以 r 为参数调用,
                        // 则以r为原因将promise拒绝。
                        if (!called) {
                            called = true;
                            promise.reject(r);
                        }
                    });
                }else {
                    // 2.3.3.4
                    // 如果 then不是一个函数，则 以x为值fulfill promise
                    promise.fulfill(x);
                }
            }catch (e) {
                // 2.3.3.2
                // 如果在取x.then值时抛出了异常，
                // 则以这个异常做为原因将promise拒绝
                if (!called) {
                    called = true;
                    promise.reject(e);
                }
            }
        }else {
            // 2.3.4
            // 如果 x 不是对象也不是函数，
            // 则以x为值 fulfill promise
            promise.fulfill(x);
        }
    }

    function Taxi() {
        // 0 pending, 1 fulfilled, 2 rejected
        var _state = 0,
            _value,
            _onFulfills = [],
            _onRejects = [];
        this.done = function(onFulfilled, onRejected) {

            if (_state === 0) {
                // 如果还在pending,先把处理函数存起来
                _onFulfills.push(onFulfilled);
                _onRejects.push(onRejected);
            }else {
                // 否则,异步执行
                asyncCall(function() {
                    if (_state === 1) {
                        if (typeof onFulfilled === 'function') {
                            onFulfilled(_value);
                        }
                    }else if (typeof onRejected === 'function') {
                        onRejected(_value);
                    }
                });
            }
        };

        /**
         * 用于this.fulfill和this.reject内部调用的函数
         * @param  {number} state 0->pending, 1->fulfill, 2->reject
         * @param  {dynamic} value result 或 reason
         */
        function _complete(state, value){
            // 只能 fulfill或reject一次, 后面的忽略
            if (!_state) {
                _state = state;
                _value = value;
                // 根据 state 获取需要处理的函数数组
                // 异步执行
                asyncCall(function() {
                    var handlers = state == 1 ? _onFulfills : _onRejects;
                    handlers.forEach(function(fn) {
                        if (typeof fn === 'function') {
                            fn(value);
                        }
                    });
                    // 执行完之后,解除数组引用
                    _onFulfills = null;
                    _onRejects = null;
                });
            }
        }
        this.fulfill = function(value) {
            _complete(1, value);
        };
        this.reject = function(value) {
            _complete(2, value);
        };
    }

    Taxi.prototype = {
        constructor: Taxi,
        catch: function(onRejected) {
            this.then(null, onRejected);
        },
        then: function(onFulfilled, onRejected) {
            // 2.2.7
            // then 必须返回一个promise
            // 所以我们new一个,等下用于返回
            var taxi = new Taxi();

            // this指向当前promise
            // 2.2.2
            // 如果onFulfilled是一个函数:
            // 它必须在promise fulfilled后调用， 且promise的value为其第一个参数。
            // 2.2.3
            // 如果onRejected是一个函数,
            // 它必须在promise rejected后调用， 且promise的reason为其第一个参数。
            this.done(function(x) {
                if (typeof onFulfilled === 'function') {
                    try {
                        // 2.2.7.1
                        // 如果onFulfilled 或 onRejected 返回了值x,
                        // 则执行Promise 解析流程[[Resolve]](promise2, x).
                        resolve(taxi, onFulfilled(x));
                    }catch (e) {
                        // 2.2.7.2
                        // 如果onFulfilled 或 onRejected抛出了异常e,
                        // 则promise2应当以e为reason被拒绝
                        taxi.reject(e);
                    }
                }else {
                    // 2.2.7.3
                    // 如果 onFulfilled 不是一个函数且promise1已经fulfilled，
                    // 则promise2必须以promise1的值fulfilled.
                    taxi.fulfill(x);
                }
            }, function(x) {

                if (typeof onRejected === 'function') {
                    try {
                        // 2.2.7.1
                        // 如果onFulfilled 或 onRejected 返回了值x,
                        // 则执行Promise 解析流程[[Resolve]](promise2, x).
                        resolve(taxi, onRejected(x));
                    }catch (e) {
                        // 2.2.7.2
                        // 如果onFulfilled 或 onRejected抛出了异常e,
                        // 则promise2应当以e为reason被拒绝
                        taxi.reject(e);
                    }
                }else {
                    // 2.2.7.4
                    // 如果 OnReject 不是一个函数且promise1已经rejected,
                    // 则promise2必须以相同的reason被拒绝.
                    taxi.reject(x);
                }
            });
            return taxi;
        }
    };
    module.exports = Taxi;
}());
setTimeout(function() {
    console.log(1)
}, 0);
new Promise(function executor(resolve) {
    console.log(2);
    for( var i=0 ; i<10000 ; i++ ) {
        i == 9999 && resolve();
    }
    console.log(3);
}).then(function() {
    console.log(4);
});
console.log(5);
// 23541
/**
 *
 * 
 * 内存释放
 * 引用类型是在没有引用之后，通过v8的GC自动回收，值类型如果处于闭包的情况下，要等闭包没有引用才会被GC
 * 回收，非闭包的情况下等待V8的新生代（new space）切换的时候回收
 *
 */
/**
 * node功能1 打通rpc借口
 * 什么是prc借口：？
 * RPC（Remote Procedure Call Protocol）---远程过程调用协议
 * 它是一种通过网络从远程计算机程序上请求服务：
 *
 */
/**
 * 在node.js中，很多对象都会发出时间。比如，fs.readStream打开文件时会发生一个时间。
 * 所有发出事件的对象都是events.EventEmitter的实例，可以通过require("events");获得event模块。
 *  函数可以添加给对象，对象发出时间时，对应函数就会被执行。这些函数被称作监听器（listeners）。
 *  在监听器函数中，this引用的（监听器函数）添加到的EventEmitter对象
 *  Class：events.EventEmitter
 *  通过require('event').EventEmitter得到EventEmitter类。
 *  EventEmitter对象遇到错误时，通常会触发error事件。error事件在Node.js中是一种特殊
 *  情况，如果没有监听器，那么默认会打印出栈跟踪器并退出程序。
 *
 *  添加监听器
 *  为事件绑定事件处理程序，可以使用emitter.addListener(event,listener)和emitter.on(event,listener)
 *  它们的作用是完全一样的。传入的参数是事件(event)和处理函数（listener）。
 *
 *
 */
var md5 = function(data) {
    // var str = data.toString("binary");
    var crypto = require("crypto");
    var result = crypto.createHash("md5WithRSAEncryption").update(data).digest("hex");
    result = result.substr(0,8);
    return result;
}


/**
 *
 */






































