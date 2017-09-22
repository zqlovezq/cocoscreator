/**
 * Created by wzq on 2017/3/1.
 */
// var bots = {};
// for(var i=0;i<10;i++){
//     bots["bot"+i] = new Wechat();
//     bots["bot"+i].on('error',err=>{
//         console.log('error',err);
//     })
//     bots["bot"+i].on('uuid',uuid=>{
//         let result = qrCode.saveQrCodeTo(('http'),i)
//     })
// }
// var d = new Date, count = 0, f, timer;
// timer = setInterval(f = function (){
//     if(new Date - d > 1000)
//         clearInterval(timer), console.log("count",count);
//     count++;
// }, 0);
//
// var d = new Date, count = 0;
// while(true) {
//     if(new Date - d > 1000) {
//         console.log(count);
//         break;
//     }
//     count++;
// }
// var d = new Date;
// setTimeout(function(){
//     console.log("show me after 1s, but you konw:" + (new Date - d));
// }, 1000);
// while(1) if(new Date - d > 2000) break;
// var d = new Date;
// setTimeout(function(){
//     console.log("请在1秒之后执行我"+(new Date -d));
// },1000);
// setInterval(function(){
//     console.log("1秒钟之后每次都执行我"+(new Date-d));
// },1000);
// while (true){
//     if(new Date-d>=4000) break;
// }
/*
function fruits(){};
fruits.prototype = {
    color:"red",
    say:function () {
        console.log("My color is "+this.color);
    }
};
var apple = new fruits();
apple.say();
banana = {
    color:"yellow"
};
apple.say.call(banana);//My color is yellow
apple.say.apply(banana);//My color is yellow*/
// var array1 = [12,"foo",{name:"Joe"},-2458];
// var array2 = ["Doe",555,100];
// Array.prototype.push.apply(array1,array2);
// console.log(array1);
// console.log(Math.max(5, 458 , 120 , -215 ));
/*
function log(){
    var args = Array.prototype.slice.call(arguments);
    console.log(args);
    console.log.call(console, arguments[0]);
};
log("hello world");*/
/*var foo = {
 name:"张青",
 age:21
 };
 var foo1 = {
 name:"自权",
 age:22
 }
 function log(profession) {
 console.log(this.name,this.age,profession);
 }
 var l = log.bind(foo).bind(foo1,"教授");
 l();*/

var obj = {
    step1:function(){
        console.log('a');
        return this;
    },
    step2:function(){
        console.log('b');
        return this;
    },
    step3:function(){
        console.log('c');
        return this;
    },
    step4:function(){
        console.log('d');
        return this;
    }
}

console.log('-----\n');
obj.step1().step2().step3().step4();
console.log('-----\n');
obj.step4().step3().step2().step1();
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



























