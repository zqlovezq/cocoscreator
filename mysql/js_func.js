/**
 * 字符串与进制之间的转换
 */
//将汉字转成16进制
toUnicode = function(data){
    if(data =='') return '请输入汉字';
    var str = '';
    for(var i =0;i<data.length;i++){
        str+="\\u"+parseInt(data[i].charCodeAt(0),10).toString(16);
    }
    return str.replace(/\\u/g,'');
};
//将16进制转换成汉字
toHanzi = function(data) {
    if(data=='') return '请输入十六进制unicode';
    data = data.split("//u");
    var str = ""
    for(var i=0;i<data.length;i++){
        str+=String.fromCharCode(parseInt(data[i],16).toString(10));
    }
    return str;
};
//十六进制字符串转字节数组
function Str2Bytes(str) {
    var pos = 0;
    var len = str.length;
    if(len %2 != 0) {
        return null;
    }
    len /= 2;
    var hexA = new Array();
    for(var i=0; i<len; i++) {
        var s = str.substr(pos, 2);
        var v = parseInt(s, 16);
        hexA.push(v);
        pos += 2;
    }
    return hexA;
}
//字符串转成byte数组
function stringToByte(str) {
    var bytes = new Array();
    var len, c;
    len = str.length;
    for(var i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if(c >= 0x010000 && c <= 0x10FFFF) {
            bytes.push(((c >> 18) & 0x07) | 0xF0);
            bytes.push(((c >> 12) & 0x3F) | 0x80);
            bytes.push(((c >> 6) & 0x3F) | 0x80);
            bytes.push((c & 0x3F) | 0x80);
        } else if(c >= 0x000800 && c <= 0x00FFFF) {
            bytes.push(((c >> 12) & 0x0F) | 0xE0);
            bytes.push(((c >> 6) & 0x3F) | 0x80);
            bytes.push((c & 0x3F) | 0x80);
        } else if(c >= 0x000080 && c <= 0x0007FF) {
            bytes.push(((c >> 6) & 0x1F) | 0xC0);
            bytes.push((c & 0x3F) | 0x80);
        } else {
            bytes.push(c & 0xFF);
        }
    }
    return bytes;
}
//byte数组转成字符串
function byteToString(arr) {
    if(typeof arr === 'string') {
        return arr;
    }
    var str = '',
        _arr = arr;
    for(var i = 0; i < _arr.length; i++) {
        var one = _arr[i].toString(2),
            v = one.match(/^1+?(?=0)/);
        if(v && one.length == 8) {
            var bytesLength = v[0].length;
            var store = _arr[i].toString(2).slice(7 - bytesLength);
            for(var st = 1; st < bytesLength; st++) {
                store += _arr[st + i].toString(2).slice(2);
            }
            str += String.fromCharCode(parseInt(store, 2));
            i += bytesLength - 1;
        } else {
            str += String.fromCharCode(_arr[i]);
        }
    }
    return str;
};
function remove(arr, val) {
    var index = arr.indexOf(val);
    if (index > -1) {
        arr.splice(index, 1);
        return index;
    }
    return index;
}
/**
 * 二分法查找
 * 适合有序的数组
 * 查找之后将一个数字插入到这个数组中：如果插入的这个数字在数组中则return 如果不在找到跟他相邻的两个值插入
 */

function binarySearch(arr,val){
    var low = 0,high = arr.length-1,mid = 0;
    while(low<=high){
        mid = Math.floor((low+high)/2);
        if(arr[mid]==val){
            return mid;
        }else if(arr[mid]>val){
            high = mid-1;
        }else{
            low = mid+1;
        }
    }
    return -1;
}
function insertBinarySearch(arr,val){
    var low = 0,high = arr.length-1,mid=0;
    for(var i=0;i<high;i++){
        if(arr[i]==val){
            return console.log("你插入的这个值已经存在在数组中");
        }
    }
    while(low<=high){
        mid = Math.floor( (low + high) / 2);
        if(arr[mid]>val){
            high = mid-1;
        }else{
            low = mid+1;
        }
    }
    console.log(low,high);
    arr.splice(low, 0, val);
    return arr;
};
/**********************************************************
 截图类(cutImage)

 引用示例
 var cutImg = require('cutImage').create({
	url: 'http://www/image1.png',
	offset: [0, 0]
}, {
	url: 'http://www/image2.png',
	offset: [10, 10]
});

 cutImg.get(); //取得整图
 cutImg.cut(x, y, w, h); //取得指定区域图块
 **********************************************************/

//生成一个cutImage实例
exports.create = function (){
    return new cutImage(arguments);
};


//定义截图类
function cutImage(imgUrls) {
    this._cvs = zyGame.doc.createElement('canvas'); //创建画布
    this._ctx = cvs.getContext('2d'); //取得2d上下文对象
    this._imgs = []; //图源对象数组
    this._imgUrls = imgUrls; //贴图数据
    this._loaded = 0; //图源加载完成数量

    //开始加载图源
    this._loadImg();
};

/*************************内部方法****************************/
//加载图源
cutImage.prototype._loadImg = function() {
    for (var i in this._imgUrls) {
        this._imgs[i] = new Image();
        this._imgs[i].onload = function() {
            this._imgLoaded();
        }.bind(this);
        this._imgs[i].src = this._imgUrls[i].url;
    }
};

//图源加载回调
cutImage.prototype._imgLoaded = function() {
    this._loaded++;
    if (this._loaded >= this._imgUrls.length) { //全部加载完成
        this._drawImg();
    }
};

//贴图
cutImage.prototype._drawImg = function() {
    this._cvs.width = this._imgs[0].width;
    this._cvs.height = this._imgs[0].height;
    for (var i in this._imgs) {
        var offset = this._imgUrls[i].offset
        this._ctx.drawImage(this._imgs[i], offset[0], offset[1]);
    }
};


/*************************外部方法****************************/
//截取
cutImage.prototype.cut = function(x, y, w, h) {
    var cvs = zyGame.doc.createElement('canvas');
    var ctx = cvs.getContext('2d');
    cvs.width = w;
    cvs.height = h;
    var imgData = this._ctx.getImageData(x, y, w, h);
    ctx.putImageData(imgData, 0, 0);
    return cvs.toDataURL();
};

//取得全图
cutImage.prototype.get = function() {
    return this._cvs.toDataURL();
};

/**
 *  觉醒吧MT架构
 * 文件夹
 * frameworks：（框架）用的是cocos2d-html5的引擎 里面有cocos2d还有extensions（扩展:ccui,cocostudio editbox,spine）还有external（外部的）包括~~~socketio box2d chipmunk
 * lib:图书馆 所有第三方的插件
 * src:所有代码
 * static：excel文件转化的js文件
 * res:资源
 *
 * 认真的看一遍所有的lib的代码 敲一遍 甚至多遍
 */
/**
 *关于js的注释：
 * 注释在代码编写过程中的重要性，写代码超过半年的就能深深的体会到。没有注释的代码都不是好代码。
 * 为了别人学习，同时为了自己以后对代码的‘升级’，
* 普通注释 //
 * 如果某段代码有功能未实现，或者有待完善，必须添加“TODO”标记，“TODO”前后应留一个空格
 * 文档注释：
 * 文档注释将会以预定格式出现在API文档中。它以“/**”开头，以"*\"结束，期间的每一行均已“*”开头
 * 而且注释内容与“*”间留一个空格
 * 文档注释必须包含一个或多个注释标签
 * @module。声明模块
 * @class。声明类 @class必须搭配@constructor或者@static使用分别标记非静态类与静态类
 * 类说明
 * @class NodeList
 * @constructor
 * @param {ArrayLike<Element>} nodes初始化
 *
 *@method。声明函数或类方法
 * @method 方法名
 * @for 所属类名
 * @param{参数类型} 参数名 参数说明
 * @return{返回值类型} 返回值说明
 * 没有指定@for时，表示此函数为全局或模块顶层函数。当函数为静态函数时，必须添加@static;
 * 当函数有参数时，必须使用@param；当函数有返回值时，必须使用@return
 */

/**
 * 说一下为什么要克隆如果一个对象没有克隆的话
 * a = {k1:1,k2:2,k3:3} b=a ;b;k2 = 4;这样a.k2也就是4
 * 克隆的目的是改变b而保持a不变
 * 在可以使用jQuery的情况下，jQuery自带的extend方法可以用来实现对象的复制
 * a = {k1:1,k2:2,k3:3}; b = {};$.entend(b,a);
 * 自定义clone()方法来实现对象的复制
 */
Object.prototype.clone = function(){
    var copy = (this instanceof Array)?[]:{};
    for(attr in this){
        if(!obj.hasOwnProperty(attr)) continue;
        copy[attr] = (typeof  this[attr]=="object")?obj[attr].clone():obj[attr];
    }
    return copy;
};
/**
 *  任务队列
 *  js单线程就意味着，所有任务需要排队，前一个任务结束才会执行后后一个任务，如果前一个任务耗时很长，
 *  后一个任务就不得不一直等着。多线程可以将任务放到不同的线程中处理。CPU的调度单位是线程，它会在不同的线程之间切换
 *  任务是隶属于线程的。如果一个线程中，任务排队是因为计算量大，CPU忙不过来，倒也算了。但是很多时候CPU处理一个线程
 *  时是闲着的，因为IO设备很慢(比如AJAX操作从网络读取数据)，不得不等结果出来，任务才能往下执行
 *  这时主线程完全可以不管IO设备，挂起来处于等待中的任务，先运行排在后面的任务。等到IO设备返回了结果，再回头，把
 *  挂起来的任务继续执行下去。
 *  于是，所有任务可以分成两种，一种是同步任务，另一种是异步任务。同步任务：在主线程上排队执行的任务，只有前一个
 *  任务执行完毕，才能执行后一个任务；异步任务指的是，不进入主线程、而进入“任务队列”的任务，只有“任务队列”
 *  通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行
 *  在一个单线程中（比如一个页面加载过程中的js处理），会包含许多任务。在任务很多的情况下，想要不被阻塞，采用的
 *  方案是异步任务+事件轮询。多线程是将任务分到不同的线程中去，各个线程内部采用的是同步任务
 *
 *  “任务队列”是事件队列（也可以理解成消息队列），表示相关的异步任务进入了“执行栈”了。主线程读取“任务队列”，
 *  这个过程是循环不断的。
 *  “任务队列”中的事件除了IO设备的事件以外，还包括一些用户产生的事件（比如鼠标点击，页面滚动等等）。只要指定过
 *  回调函数，这些事件发生时就会进入“任务队列”，等待主线程开始执行异步任务，就是执行对应的回调函数
 *  主线程运行的时候，产生堆（heap）和栈（stack）。只要栈中的代码执行完毕，主线程就会去读取“任务队列”，
 *  一次执行那些时间所对应的回调函数。
 *  任务队列中的任务，是“回调函数”指定的，然后通过事件触发添加进去的，是一种异步任务。而在页面初始化时，主线程
 *  执行的任务是同步任务
 *  需要注意的是setTimeout（）只是将事件插入了“任务队列”，必须等到当前代码（执行栈）执行完，主线程才会去执行它
 *  指定的回调函数。要是当前代码耗时很长，有可能要等很久，所以并没有办法保证，回调函数一定一定会在setTimeout（）
 *  指定的时间执行。
 *
 *  Node.js除了setTimeout和setInterval这两个方法，Node.js还提供了另外两个与“任务队列”有关的方法：
 *  process.nextTick和setImmediate，它们可以帮助我们加深对“任务队列”的理解
 *  process.nextTick方法可以在当前“执行栈”的尾部，下一次EventLoop（主线程读取“任务队列”）之前
 *  触发回调函数。也就是说，它指定的任务总发生在所有一般任务之前。
 *  setImmediate方法则是在当前“任务队列”的尾部添加事件
 */
/**
 *一个互斥锁的几个元素
 * 锁与解锁
 * 等待队列
 * 执行方法
 * 定义锁的名称
 * var lock = 'scrollTop()';
 * //使用锁
 * $.indream.async.lock(lock,function(){
 * var scrollTop = $(window).scrollTop();
 * var timer;
 * var fullTime = 100;
 * for(timer = 0;timer<fullTime;timer+=10){
 *      setTimeout('$(window).scrollTop('+(scrollTop*(fullTime-timer)/fullTime)+');',timer);
 * }
 * //释放锁
 *      setTimeout('$.indream.async.releaseLock("'+lock+'");',fullTime);
 * })
 */

/**
 * JavaScript异步编程原理
 * 众所周知，JavaScript的执行环境是单线程的，所谓的单线程就是一次只能完成一个任务，其任务的调度方式就是排队。
 * 这就和火车站洗手间门口的等待一样，前面的那个人没有搞定，你就只能站在后面排队等着。在时间队列中加一个演示，这样的问题便可以得到缓解
 * 告诉后面排队的人一个准确的时间，这样后面的人就可以利用这段时间去干点别的事情，而不是所有的人都排在队列后抱怨，我写了
 * 一段程序来解决这个问题：
 * var Q = {
 *      a:[],//保存队列信息
 *      q:function(d){ //添加到队列queue
 *          if(!/function|number/.test(typeof d)) return;   //添加到队列如果不是函数或者数字则不处理
 *          Q.a.push(d);
 *      },
 *      d:function(){
 *          var s = Q.a.shift();
 *          if(!s) return;//如果已经到了队列尽头则返回
 *          if(typeof s==="function"){ //如果是函数，直接执行，然后继续 dequeue
 *              s(),Q.d();
 *              return;
 *          }
 *          setTimeout(function(){//如果是数字，该数字作为延迟时间，延迟dequeue
 *              Q.d();
 *          },s);
 *      }
 *  }
 *  1：setTimeout函数的弊端
 *  延时处理当然少不了setTimeout这个神器，很多人对setTimeout函数的理解就是：延时为n的话，函数就会在n毫秒之后执行。事实
 *  上并非如此，这里存在三个问题，一个是setTimeout函数的及时性问题，
 *  setTimeout 是存在一定时间间隔的，并不是设定n毫秒执行，
 *  1：缺点他就是n毫秒执行，可能会有一点时间的延迟（2ms左右）
 *  2：缺点
 *  var d = new Date;
        setTimeout(function(){
         console.log("show me after 1s, but you know:" + (new Date - d));
            }, 1000);
        while(1) if(new Date - d > 2000) break;
 *  我们期望console在1s之后出结果，可事实上他却在2010ms之后运行，这就是javascript单线程给我们带来的烦恼
 *  while循环阻塞了setTimeout函数的执行
 *  3：缺点
 *  try.catch捕捉不到他的错误
 *  try{
 *      setTimeout(function(){
 *          throw new Error("我不希望这个错误出现")
 *      },1000);
 *  }catch(e){
 *  console.log(e.message);
 *  }
 *  可以说setTimeout是异步编程不可缺少的角色，但是它本身就存在这么多的问题，这就要求我们用更加恰当的方式去规避
 *  2：什么样的函数为异步的
 *  异步的概念和非阻塞是息息相关的，我们通过ajax请求数据的时候，一般采用的是异步的方式
 *  3：常见的异步模型
 *  1）step1(function(res1){     //高阶函数（泛函数）缺点 解耦程度特别低，如果送入的参数太多会显得很乱！这是最常见的一种方式，
 *      step2(function(res2){       //将函数作为参数送入，然后回调
 *          step3(function(res3){
 *              //...
 *          })；
 *      })；
 *  })；
 *  2）事件监听 //JS和浏览器提供的原生方法基本都是基于事件触发机制的，耦合度很低，不过事件不能得到流程控制
 *  E.on('evt',g);
 *  function f(){
 *      setTimeout(function(){
 *          E.trigger("evt"); //trigger触发器
 *      })
 *  }
 *  3）发布/订阅（Pub/Sub）
 *  E.subscribe("evt",g);
 *  function f(){
 *      setTimeout(function(){
 *          //f的任务代码
 *          E。public("evt");
 *      },1000);
 *  }
 *
 *  throw new Error的作用范围就是阻断一个script标签内的程序运行，但是不会影响下面的script
 *  windows全局对象上有一个便利的函数，window.error，我们可以利用他捕捉到所有的错误，并作出对应的处理
 *  window.onerror = function(msg,url,line){
 *      console.log(msg,url,line);
 *      return true;    //必须返回true，否则Error还是会触发阻塞程序
 *  }
 *  setTimeout(function(){
 *      throw new Error("error");
 *  },50);
 *  利用window提供的onerror函数可以很方便的处理错误并作出及时的反应，如果出现了不可知的错误，可以把信息post到后台，
 *  不过这样的处理存在一个问题，所有的错误我们都给屏蔽了，但有些错误本应该阻断所有程序的运行的。比如我们通过ajax获取数据中除了错误
 *  程序误认为已经拿到了数据，本应该停下工作报出这个致命的错误，但是这个错误被window.onerror给截获了，从而进行了错误的处理。
 *  window.onerror算是一种特别暴力的容错手段，try.catch也是如此，他们的底层的实现就是利用C/C++中的goto语句的实现，一旦发现错误
 *  不管目前的堆栈有多深，不管代码运行到何处，直接跑到顶层或者try.catch捕获的那一层，
 *
 *  JavaScript多线程技术介绍
 *     异步编程和非阻塞这个概念密切相关，而javascript中的Worker对象可以创建一个独立线程来处理数据，很自然的处理了阻塞问题。
 *     我们可以把繁重的计算任务交给Worker去倒腾，等他处理完了再把数据Post过来
 *  Worker是一个工具，我可以在Worker中使用setTimeout，setInterval等函数，也可以拿到navigator的相关信息，
 *  最重要的是他可以创建ajax对象和WebSocket对象，也就是说他可以直接向服务器请求数据，不过他不能访问DOM的信息
 *  更不能直接处理DOM，这个其实很好理解，主线程和Worker是两个独立的线程，如果两者都可以修改DOM，那岂不是得设置一个麻烦的互斥变量？！
 *  还有值得注意的点是，在Worker中我们可以使用importScript函数直接加载脚本，不过这个函数时同步的，也就是说他会冻结Worker线程，知道Script
 *  加载完毕。
 *  importScript("a.js","b.js","c.js"); 他可以添加多个参数，加载的顺序就是参数的顺序
 *  一般会用Worker做那些事情呢？
 *  1：数据的计算和加密 如计算斐波拉切函数的值
 *  2：音视频留的编码解码工作 等等
 *  SharedWorker ，这是web通信
 *
 *  websocket最伟大之处在于服务器和客户端可以在给定的时间范围内的任意时刻，互相推送信息。webSocket并不限于Ajax（XHR）
 *  方式通信，因为Ajax技术需要客户端发起请求，而wobsocket服务器和客户端可以彼此相互推送信息；XHR受到域的限制，
 *  websocket允许跨域通信
 *
 *
 * apply
 * call
 * bind
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
var Q = {
    // 保存队列信息
    a: [],
    // 添加到队列 queue
    q: function(d){
        // 添加到队列如果不是函数或者数字则不处理
        if(!/function|number/.test(typeof d)) return;

        Q.a.push(d);
        // 返回对自身的引用
        return Q;
    },
    // 执行队列 dequeue
    d: function(){
        var s = Q.a.shift();
        // 如果已经到了队列尽头则返回
        if(!s) return;

        // 如果是函数，直接执行，然后继续 dequeue
        if(typeof s === "function") {
            s(), Q.d();
            return;
        }

        // 如果是数字，该数字作为延迟时间，延迟 dequeue
        setTimeout(function(){
            Q.d();
        }, s);
    }
};

function record(s){
    var div = document.createElement("div");
    div.innerHTML = s;
    console.log(s);
    document.body.appendChild(div);
}
Q
    .q(function(){
        record("0 <i style='color:blue'>3s 之后搞定，0 把 1 叫进来</i>");
    })
    .q(3000)
    .q(function(){
        record("1 <i style='color:blue'>2s 之后搞定，1 把 2 叫进来</i>");
    })
    .q(2000)
    .q(function(){
        record("2 <span style='color:red'>后面没人了，OK，厕所关门~</span>");
    })
    .d();
/**
 * apply call bind
 *  详细解析 区别
 *  在javascript中，call和apply都是为了改变某个函数运行时的上下文（context）而存在的，换句话说，就是为了改变函数
 *  内部this的指向。
 *  javascript的一大特点是，函数存在【定义时上下文】和【运行时上下文】以及【上下文是可以改变的】这样的概念
 */
function fruits(){};
fruits.prototype = {
    color:"red",
    say:function () {
        console.log("My color is "+this.color);
    }
};
var apple = new fruits();
apple.say();//My color is red,
banana = {
    color:"yellow"
};
apple.say.call(banana);//My color is yellow
apple.say.apply(banana);//My color is yellow
//所以，可以看出call和apply是为了改变this而出现的，当一个object没有某个方法，但是其他的有，我们可以借助call或者apply用其他对象的方法来操作
/**
 * 对于apply、call二者而言，作用完全一样，只是接受参数的方式不太一样
 */
//例如：
var func = function(arg1,arg2){

};
//可以用如下方式来调用
func.call(this,arg1,arg2);
func.apply(this,[arg1,arg2]);
//其中this是你想指定的上下文，他可以是任何一个javascript对象（javascript中一切皆对象），
//call需要把参数按顺序传递进去，而apply则是把参数放在数组里
//javascript中，某个函数的参数数量是不固定的，因此要说适用条件的话，当你的参数是明确知道数量时用call
//而不确定的时候用，然后参数push进数组传递进去。当参数数量不确定时，函数内部也可以通过arguments这个数组来遍历所有的参数
//例子：1、数组之间追加
var array1 = [12,"foo",{name:"Joe"},-2458];
var array2 = ["Doe",555,100];
Array.prototype.push.apply(array1,array2);//array1:[ 12, 'foo', { name: 'Joe' }, -2458, 'Doe', 555, 100 ]
//例子：2、获取数组中的最大值和最小值
var numbers = [5,458,120,-215];
var maxInNumbers = Math.max.apply(Math,numbers),//458
    maxInNumbers = Math.max.call(Math,5, 458 , 120 , -215); //458
// numbers本身没有max方法，但是Math有，我们就可以借助call或者apply使用其方法
//例子：3、验证是否是数组（前提是toString（）方法没有被重写过）
function isArray (obj){
    return Object.prototype.toString.call(obj) === '[object Array];'
}
//例子：4、类（伪）数组使用数组方法
var domNodes = Array.prototype.slice.call(document.getElementsByTagName("*"));
//javascript 中存在一种名为伪数组的对象结构。比较特别的是arguments对象，还有像调用getElementByTagName，document。childNodes之类的，
//它们返回NodeList对象就属于伪数组。不能应用Array下的push，pop等方法。
//但是我们能通过Array.prototype.slice.call转换为真正的数组的带有length属性的对象，这样domNodes就可以应用Array下的所有的方法了。

/**
 * 深入理解运用apply call
 *
 * 定义一个log方法，让它可以代理console.log方法，
 */
//常见的解决方法是：
function log(msg){
    console.log(msg);
};
log(1);//1
log(1,2);//1
//上面的方法可以解决最基本的需求，但是当传入参数的个数是不确定的时候，上面的方法就失效了，这个时候就可以考虑考虑使用apply或者call
//注意这里传入多少个参数是不确定的，所以使用apply是最好的
function log() {
    console.log.apply(console,arguments);
}
/**
 * bind bind()方法与apply和call很相似，也是可以改变函数体内的this的指向。
 * MDN的解释是：bind()方法会创建一个新函数，称为绑定函数，当调用这个绑定函数时，绑定函数会以创建它时传入bind()方法的第一个参数作为this，
 * 传入bind()方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数。
 */
var foo = {
    name:"张青",
    age:21
};
function log() {
    console.log(this.name,this.age);
}
log.bind(foo);
/**
 * 三个输出的都是81，但是注意看使用bind()方法，他后面多了对括号
 * 也就是说，区别是，当你希望改变上下文环境之后并非立即执行，而是回调执行的时候，使用bind()方法。
 * 而apply/call则会立即执行函数
 *
 * 再总结一下：
 * apply、call、bind三者都是用来改变函数的this对象的指向的；
 * apply、call、bind三者第一个参数都是this要指向的对象，也就是想指向的上下文；
 * apply、call、bind三者都可以利用后续参数传参
 * bind是返回对应函数，便于稍后调用；apply‘call则是立即调用
 */
var obj = {
    x:81
};
var foo = {
    getX : function(){
    return this.x;
    }
}
console.log(foo.getX.bind(obj)());//81
console.log(foo.getX.call(obj));//81
console.log(foo.getX.apply([obj]));//81

/**
 * javascript的数据类型分为六种，分别为null,undefined,boolean,string,number.object.
 *  object是引用类型，其他的物种都是基本类型或者原始类型。我们可以用typeof方法打印来某个是属于哪个类型的
 *  不同类型的变量比较要先转类型，叫做类型转换，类型转换也叫隐式转换。隐式转换通常发生在运算符加减乘除.
 *  1.字符串加数字，数字就会转成字符串
 *  2.数字减字符串，字符串转成数字。如果字符串不是纯数字就会转成NaN。两个字符串相减也先转成数字
 *  NaN是一个特殊值，说明某些算数运算的结果不是数字
 *  typeof返回的是字符串，有六种:'number'、"string"、"boolean"、"object"、"function"、"undefined"
 *  因为很多方法来表示一个非数字，所以一个非数字不会等于另一个为NaN的非数字
 */
// typeof '11' //string
// typeof(11) //number
// '11'<4 //false
/**
 * 基本的数据类型有5个：null,undefined,boolean,number,string,
 * typeof null;   //"object"
 * typeof undefined;  //"undefined"
 * typeof 1;  //"number"
 * typeof false  //"boolean"
 * typeof "1"  //"string"
 * 为了便于操作基本类型值：ECMAScript还提供了三个特殊的引用类型：Boolean,Number和String
 * 我们知道基本类型值不是对象，因此从逻辑上讲，它们不应该有方法（但是它们确实有方法）。其实，为了让
 * 我们实现这种直观的操作，后台已经自动完成了一系列的处理。
 * var s1 = "some text"; var s2 = s1.substring(2)；
 * （1）创建String类型的一个实例。（2）在实例上调用这个指定方法。（3）销毁这个实例
 * var s1 = new String("some text"); var s2 = s1.substring(2);s1 = null;
 * 经过此番处理，基本的字符串值就变得跟对象一样了。而且上面三个步骤也使用与Boolean和Number类型对应的布尔值和数字值
 *
 * 引用类型与基本类型的主要区别就是对象的生命周期。使用new操作符创建的引用类型的实例，在执行流离开当前作用域
 * 之前都一直保存在内存中。而自动创建的基本类型的对象，只存在于这一行代码的执行期（瞬间），然后立即销毁。这就
 * 意味着我们不能在运行时为属性添加属性和方法。
 * 引用数据类型，也可以说就是对象了
 * undefined == null true
 *
 */
// //必须文件头添加"javascript严格模式"
//     'use strict'
    let hello = 'hello world.';
    console.log(hello);
//Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
//这些新特性必须运行在严格模式下面

/**
 * let与var有三个区别
 */
//使用未声明的变量，表现不同:
//1:var变量会在函数预编译的时候会被声明而let不会
(function() {
    console.log(varTest); //输出undefined(注意要注释掉下面一行才能运行)
    console.log(letTest); //直接报错：ReferenceError: letTest is not defined
    var varTest = 'test var OK.';
    let letTest = 'test let OK.';
}());
//重复声明同一个变量时，表现不同：
// 'use strict';
(function() {
    var varTest = 'test var OK.';
    let letTest = 'test let OK.';

    var varTest = 'varTest changed.';
    let letTest = 'letTest changed.'; //直接报错：SyntaxError: Identifier 'letTest' has already been declared

    console.log(varTest); //输出varTest changed.(注意要注释掉上面letTest变量的重复声明才能运行)
    console.log(letTest);
}());
//变量作用范围，表现不同
// 'use strict';
(function(){
    var varTest = "test var OK,";
    let letTest = "test let OK,";
    {
        var vatTest = "varTest changed,";
        let letTest = 'letTest changed,';
    }
    console.log(varTest);//输出"varTest changed."内部"{}"中声明的varTest变量覆盖外部的letTest声明
    console.log(letTest);//输出"test let OK" 内部"{}"中声明的letTest和外部的letTest不是同一个变量
})

/**
 * 在面向对象程序设计中，function,methods以及class constructor往往是三件不同的事情，由不同的语法来实现。
 * 但在javascript中，这三个概念都由function来实现，通过三种不同的模式
 * function：：：函数
 *
 * arguments.callee
 * Javascript的垃圾回收机制
 */
//1：最简单的使用模式就是function调用
function hello(username){
    return "hello,"+username;
}
hello("青");
//2：方法的调用
//而methods这一概念在javas中的表现就是，一个对象的属性是一个function，同样的是函数，将其赋值给一个对象的成员以后，
//就不一样了。将函数赋值给对象的成员后，那么这个就不在称为函数，而应该叫做方法。
var obj = {
    hello:function () {
        return "hello,"+this.username;
    },
    username:"青"
};
obj.hello();

//真正的行为是，调用本身才会决定this会绑定到哪个对象，即：obj1.hello()会将this绑定到obj1,。记住一句话，谁调用，this就指向谁
//正因为this绑定的这种规则，在下面的用法也是可行的
function hello() {
    return "hello, " + this.username;
}

var obj1 = {
    hello: hello,
    username: "Gordon Gekko"
};
obj1.hello(); // "hello, Gordon Gekko"

var obj2 = {
    hello: hello,
    username: "Biff Tannen"
};
obj2.hello(); // "hello, Biff Tannen"
//但是，在一个普通的函数中，如上面的hello函数，使用this关键字是不太好的方式，当它被直接调用的时候，this的指向就成了全局对象。也就是window对象。
//所以在ES5标准中，如果使用strict mode，那么this就会被设置为undefined。为了是让潜在的错误更快的暴露出来，避免误操作和难以找到的bug
//3：构造函数的调用
//function的第三种使用模式就是将它作为constructor；
var Person = function(){
    this.name = "小苹果"
};
var p = new Person();
//构造器中的return
//在构造函数中return的意义发生了变化，首先如果在构造函数中，如果返回的是一个对象，那么就保留愿意，如果返回的是非对象，比如数字、
//布尔和字符串，那么就返回this，如果没有return语句，那么也返回this
//返回一个对象的return
var ctr = function(){
    this.name = "青";
    return {
        name:"权"
    };
};
//创建对象
var p = new ctr();
console.log(p.name);

/**
 * 这种即时离开函数作用域的情况下仍然能够通过引用调用内部函数的事实，意味着只要存在调用内部函数的可能，
 * Javascript就需要保留被引用的函数。而且javascript运行时需要跟踪引用这个内部函数的所有变量，知道最后一个变量废弃
 * javascript的垃圾收集器才能释放相应的内存空间
 *
 *  javascript中，万物皆对象！但对象也是有区别的。分为普通对象({}这种)和函数对象（new （）），Object,Function是JS自带的函数对象
 *  凡是通过new Function()创建的对象都是函数对象，其他的都是普通对象
 *  在javascript中，每当定义一个对象（函数）时候，对象中都会包含一些预定义的属性。其中函数对象的一个属性就是原型对象prototype
 *  普通对象没有prototype，但是有__proto__属性。
 *
 *  for...in 循环会把某个类型的原型（prototype）中方法与属性给遍历出来，所以这可能会导致代码中出现意外的错误。为了避免这个问题，
 *  我们可以使用对象的hasOwnProperty()方法来避免这个问题，如果对象的属性或方法是非继承的，那么hasOwnProperty()方法返回true
 *
 *
 *  计算机最小的度量单位是字节byte 简写B
 *  1B = 8b（1Byte=8bit，1字节=8位） 1KB = 1024B 1MB = 1024KB 1GB = 1024MB 1TB = 1024GB
 *  请求报文格式如下
 *  请求行
 *  通用信息头
 *  请求头
 *  实体头
 *  （空行）
 *  报文主体
 *
 *  1、请求行：方法字段+URL+Http协议版本   GET http://127.0.0.1/getData?type=info
 *
 *  prototype:
 *  example：
 *  function User(name,password){
 *      this.name = name;
 *      this.password = password
 *      this.toString = function(){return "user name"+this.name}
 *      this.checkPassword = function(password){return this.password==password}
 *  }
 *  当创建多个User实例的时候，就存在问题了；不仅是name和password属性在每个实例上都存在，
 *  toString和checkPassword方法在每个实例上都有拷贝一份，
 *  User.prototype = []  var user = new User() user.prototype[.toString ,.checkPassword,.name,.password]
 *  但是当toString和checkPassword被定义在prototype上时就会变成
 *  User.prototype = [.toString,.checkPassword] user.prototype[.name,password]
 *  那么将方法放在prototype对象上就节省了很多内存
 *
 *  socket.io和websocket
 *  在HTML5之前，因为http协议是无状态的，要实现浏览器和服务器的实时通讯，如果不适用flash、applet等浏览器插件的话，
 *  就需要定期轮询服务器来获取信息。这造成了一定的延迟和大量的网络通讯。随着HTML5的出现，这一情况有望彻底改观，它就是
 *  websocket。理论上，socket能干的事websocket都能完成
 *
 *  websocket的工作机制
 *  
 */

/**
 * 手机web开发 viewport
 * 参数：
 * width:宽度设置的是viewport宽度，可以设置device-width特殊值
 * initial-scale:初始缩放比，大于0的数字
 * maximum-scale:最大缩放比，大于0的数字
 * minimum-scale：最小缩放比，大于0的数字
 * user-scalable:用户是否可以缩放,yes或no（1或0）
 * 
 * pc页面在手机缩放原因
 * 1：iphone4默认的 viewport 980px,user-scalable = yes
 * 2:那么initial-scale在320px的浏览器上就是320/980 0.33333
 *
 * 用meta标签把viewport的宽度设为device-width，同事用initial-scale = 1,user-scalable = 0就构建了一个标注的移动web页面
 */

/**
 * vue.js
 *
 *  v-bind属性被称为指令。指令带有前缀v-，以表示他们是Vue提供的特殊属性。可能你已经猜到了，
 *  他们会在渲染的DOM上应用特殊的响应式行为。
 *  v-model指令，它可以轻松实现表单输入和应用状态之间的双向绑定
 */
var EventUtil = {
    addHandler:function(element,type,handler){
        //todo
    },
    getEvent:function(event){
        return event?event:window.event;
    },
    getTarget:function(event){
        return event.target||event.srcElement;
    },
    preventDefault:function(event){
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue = false;
        }
    },
    removeHandler:function(element,type,handler){
    //    todo
    },
    stopPropagation:function(){
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble=true;
        }
    }
}
















