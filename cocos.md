# cocos学习
``` javascript
// 获取showFPS节点
    cc.find("PROFILER-NODE")
    // 屏蔽多点触摸
    cc.macro.ENABLE_MULTI_TOUCH = false;
    // 查看浏览器内存
    window.performance
    new cc.Color().fromHEX("#B5DBFF")
```
# TS学习

``` javascript
// 如果方法没有返回值
    function run():void(){};
    
    never类型：是其他类型（包括null和undefined）的子类型，代表从不会出现的值
    这意味着声明never的变量只能被never类型所赋值
    let err:never;
    err = (()=>{
        throw new Error();
    })();

    定义参数的方法 
    加？可传可不传
    function getInfo(name:string,age?:number):string{
        return '${name} --- ${age}';
    }
    console.log(getInfo("zs",20))
    三点运算符 接受行参传过来的值
    sum(1,2,3,4,5)
    function sum (...result:number[]):number{

    }
    // ts中定义类
    class Person{
        name:stirng;
        constructor(n:string){//构造函数 实例化的时候触发的方法
            this.name = n;
        }
        run():void{
            console.log(this.name);
        }
    }
    let p = new Person("张三");
    p.run();
// ts中实现继承 extends super
    class Web extends Person{
        constructor (name:string){
            super(name);
        }
    }
    /*
     * public:公有  在类里面，子类，类外面都可以访问
     * protected：保护类型 在类里面，子类里面可以访问，在类外部没法访问
     * private：私有  在类里面可以访问，子类，类外部都没法访问
     */
```

# JS学习

``` javascript
    // 对象的属性
    数据属性---访问器属性
    数据属性 4个特征
    configurable:可以通过delete删除属性
    enumerable:可以for-in循环
    writable:可以修改
    value:数据值

    访问器属性
    configurable:可以通过delete删除属性
    enmuerable:通过for-in循环
    get:在读取属性时调用的函数；默认undefined
    set：在写入属性时调用的函数;默认undefined

    // 原型链+对象冒充继承
    function Person(name,age){
        this.name = name;
        this.age = age;
        this.run = function(){
            console.log(this.name+"在运动");
        }
    }
    // 静态函数
    Person.test = function(){

    }
    Person.prototype.sex = "男";
    Person.prototype.work = function(){
        console.log(this.name+"在工作")
    }
    function Web(name,age){
        Person.call(this,name,age); //单独对象冒充的缺点 没办法继承原型链上的方法跟参数
    }
    Web.prototype = new Person();
    Web.prototype = Person.prototype;
    var w = new Web("赵四",20) //单纯的原型链 实例化子类的时候没发给父类传参

     touchBoxStart(e) {
        AudioManager().playClick();
        if (this.touch_id !== null) {
            e.stopPropagation();
            return;
        }
        if (!this.canClick) {
            return;
        }
        if (this.question.guide) {
            let guide = this.wrap.getChildByName("guide");
            guide.active = false;
            this.question.guide = false;
        }
        this.touch_id = e.getID();
        let target = e.target;
        target.zIndex = 1;
        let pos = this.node.convertToNodeSpaceAR(e.getLocation());
        this.offset = cc.v2(pos.x - target.x, pos.y - target.y);
        target.x = pos.x - this.offset.x;
        target.y = pos.y - this.offset.y;
    }
    touchBoxMove(e) {
        if (this.touch_id !== e.getID()) {
            e.stopPropagation();
            return;
        }
        let target = e.target;
        let pos = this.node.convertToNodeSpaceAR(e.getLocation());
        target.setPosition(pos.x - this.offset.x, pos.y - this.offset.y);
        this.showBoard(target);
    }
    touchBoxCancel(e) {
        if (this.touch_id !== e.getID()) {
            e.stopPropagation();
            return;
        }
        if (!e.simulate) {
            this.touch_id = null;
        }
        // e.target.setPosition(e.target.starPos);
    }
    touchBoxEnd(e) {
        if (this.touch_id !== e.getID()) {
            e.stopPropagation();
            return;
        }
        if (!e.simulate) {
            this.touch_id = null;
        }
        let target = e.getCurrentTarget();
        let pos = this.node.convertToNodeSpaceAR(e.getLocation());
        target.setPosition(pos.x - this.offset.x, pos.y - this.offset.y);
        let _pos = target.getPosition(cc.v2());
        this.boxInBoard(_pos, target);
        target.zIndex = 0;
        this.showConfirm();
    }
    // 算法题 1
    var arr = [1,[2,[3,[4,[5]]]]];
    var _arr = [];
    function split (param) {
        if(param instanceof Array){
            console.log(param);
         param.forEach((element)=>{
                if(element instanceof Array){
                    split(element)
             }else{
                    _arr.push(element);
            }
        })
    }
}
console.log(split(arr));
console.log(_arr);
// 算法题2
let string = "abc   bac";
let len = string.length;
let obj = {};
let s = "";
for(let j=0;j<len;j++){
    let _index = len-j-1;
    let val = string[j];
    if(val===" "){
        _index = j;
    }
    let _obj = {}
    obj[_index] = _obj;
    _obj.val = val;
    _obj.index = _index;
}
console.log(obj);
// });
for(let i=0;i<len;i++){
    let __obj = obj[i];
    s+=__obj.val;
}
console.log(s);
// 二分查找
    let _arr = [1,2,3,5,8,9,11,15,17,20,31,45];
        let search  = function (arr,val,_low,_height) {
            if(_low>_height){
                return -1;
            }
            let low = _low;
            let height = _height;
            let mid = Math.floor((low+height)/2);
            console.log("low",low);
            console.log("height",height);
            if(_arr[mid]<val){
                low = mid+1;
                return search(arr,val,low,height)
            }else if(_arr[mid]>val){
                height = mid-1;
                return search(arr,val,low,height)
            }else {
                return mid;
            }

        };
        let result = search(_arr,11,0,_arr.length-1);
        console.log(result);

    // UDP跟TCP的区别
    // 原型 原型链
    // promise
    // js数据类型
    // NaN undefined null 区别
    // 单词反转
    // 字符串反转 空格不反转
    // get post的区别
    // 性能优化 分针优化 资源管理技术 用的时候+1 ondestroy的时候手动减一
    // 图片改成etc2效果费城明显
资源优化
内存优化 数据结构 
框架结构 
基本语法 
基本算法 图形学基础 网络基础 语法规范
    // js ts语言基础
        装饰器
        垃圾回收
        原型链
        事件循环 event loop
        promise await
        call bind applay的区别
        ‘==’ ‘===’ Object.is的区别
        ==先进行类型转换在比较
        +0 === -0 //true
        NaN === NaN // false
        Object.is(+0, -0) // false
        Object.is(NaN, NaN) // true

    // cocos coreator使用相关
        事件：事件冒泡原理
        热更新逻辑原理、使用、注意事项和问题
        资源释放相关：资源是否能随预制体或者场景一起被释放
        Sprite  Size Mode区别：CUSTOM TRIMMED RAW
        cocos的几种适配规则
    // 基础数据结构和算法（2-1）
        链表：判断循环链表、链表入口、链表长度
        二叉树遍历
        连通图概念和应用
    // 优化相关
        cpu
            对象创建销毁优化，对象池
            主循环中处理业务逻辑
            具体业务相关
                碰撞、查找
                长滚动列表优化
                tiledmap优化（object层处理、切割、缓存）
                骨骼动画优化点（骨骼数量、深度、网格、纹理）
        gpu：drawcall优化（合图、相邻节点、材质、混合模式、字体、mask）
        内存：纹理合图优化、纹理尺寸限制、合理加载和释放，纹理压缩格式、alpha通道剔除

// eventloop 微任务 宏任务
        判断类型有哪些方法
// eventloop
整个是调用栈
    var p = new Promise(resolve=>{
        console.log(4); //执行第一步
        resolve(5)
    })
    function func1(){
        console.log(1);
    }
    function func2(){
        setTimeout(()=>{
            console.log(2); //压入消息队列 调用栈清空时执行
        });
        func1();
        console.log(3);
        p.then(resolved=>{
            console.log(resolved); //压入微任务 等调用栈清空立即执行 在setTimeout之前
        })
        .then(()=>{
            console.log(6)//压入微任务
        })
    }
    func2();//执行第二步


        // socket：
// 
// 如果是由客户端间歇性的发起，并且偶尔发生延迟是可以容忍的，那么使用http/https
// 如果客户端和服务器端都可以独立发包，但是偶尔发生延迟可以容忍（许多mmo类都游戏），那么使用tcp长连接吧
// 如果客户端和服务器都可以独立发包，而且无法容忍延迟（大多数都多人动作类游戏，一些mmo类游戏），那么使用udp吧 

// 使用TCP或UDP通讯时，广泛使用套接字（Scoket）的API SOCKET本质是编程接口（API），对TCP/IP的封装
// TCP、UDP、HTTP是网络协议中的一种。TCP和UDP属于传输层协议。HTTP属于应用层协议。

//  node.js框架 express->koa2->egg

// 面试需求熟悉webgl 了解渲染原理 物理引擎 粒子系统 动画系统
// 熟悉tcp/ip websocket http等协议

// js 面试等题
// function fn(){
//     console.log(this.name)
// }
// var obj = {
//     name:'obj',
//     fn:fn
// }
// fn();//输出 undefined
// obj.fn();//输出 obj
// var fn2=obj.fn;fn2()//输出 undefined 
// 总结：谁调用这个函数 谁就是函数的this

// 关于prop
// var fullName='三脚兔'
// var obj = {
//     funllName:'方块猴',
//     prop:{
//         fullName:"圆圆鼠",
//         getFullName:function(){
//             return this.fullName;
//         }
//     }
// }
// console.log(obj.prop.getFullName()); //圆圆鼠
// var getFullName = obj.prop.getFullName;
// console.log(getFullName()); //三脚兔

// 关于处理字符串

//实现stack的先进后出的功能 push往后插
var arr = new Array();
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
// 此时arr =  [1, 2, 3, 4]
arr.pop() 
// 此时arr = [1, 2, 3]
// 达到先进后出的效果， 1最早进来，最后出去

// 先进先出队列效果  unshift往前插
var arr = new Array();
arr.unshift(1);
arr.unshift(2);
arr.unshift(3);
arr.unshift(4);
// 此时数组arr= [4, 3, 2, 1]
arr.pop() //把最后一位移出来
//此时arr = [4, 3, 2]，达到先进来的数据为1，先出去为1











// cocos面试
// 1:摄像机坐标转化过程及原理
// ------------------------------------------
// 2:tcp/ip协议：三次握手，短链接/长链接
// ------------------------------------------
// 3:http/https 协议get和post区别
// get从服务器获取资源，post向服务器发送数据
// get传输数据是通过URL请求，以field（字段）= value的形式，置于URL后，并用"?"连接，多个请求数据间用"&"连接，如http://127.0.0.1/Test/login.action?name=admin&password=admin，这个过程用户是可见的；
// post传输数据通过Http的post机制，将字段与对应值封存在请求实体中发送给服务器，这个过程对用户是不可见的；
// get传输的数据量小，但是效率高 post可以传输大量数据
// get是不安全的，post较get安全性高
// get方式只能支持ascii字符，中文会乱码 post支持标准字符集，可以传递中文字符
// --------------------------------------------
// 4:a*算法
// 5:socket如何检测是否断开
// 6:图形学opengl渲染原理
// 7:二分法代码补全
function getIndex(arr,num){
    var len = arr.length,
        start=0,
        end=len-1;
        while(start<=end){
            var mid = Math.floor((start+end)/2);
            if(num==arr[mid]){
                return mid;
            }else if(num>arr[mid]){
                start=mid+1
            }else {
                end=mid-1
            }
        }
        return false;
}
// 8:常用排序算法的时间复杂度
// ------------------------------------------------
// 9:内存管理机制
// 引用计数  内存池
// 动态创建一个对象，给对象一个引用数值 value=0
// 对象被引用时，+1 value++
// 对象取消被引用时 -1 value--
// value==0 说明这个对象没有被引用，就delete
// ----------------------------------------------
// 10:跨版本热更

// 11:websocket跟socketio的区别








// 浏览器工作原理
// 浏览器是多线程都，js是单线程都，js在浏览器中，它可以是多线程的
// 浏览器，在内核控制下相互配合以保持同步，它至少有三个常驻线程
// javascript引擎线程 gui渲染线程 浏览器事件触发线程
/**
 * 1：javascript引擎是基于事件驱动单线程执行；
 * 2：渲染线程负责渲染浏览器界面，但是gui渲染线程与js引擎是互斥的
 * 当js引擎执行时gui线程会被挂起，gui的更新也会被保存在一个队列中
 * 等js引擎空闲时才有机会被执行。这就是js阻塞页面加载
 * 3:事件触发线程，当一个事件被触发时该线程会把事件添加道任务队列，等待
 * js引擎的处理
 * 
 * 1-用户在地址栏输入域名，dns（域名解析系统）根据输入的域名查找对应ip
 * 然后向该ip发起请求
 * 2-浏览器获得并解析服务器的返回内容
 * 3-浏览器加载html文件及文件内包含的外部引用文件及图片，多媒体等资源
 * 
 * 你做过性能优化吗？做过哪些性能优化
 * 1:减少http请求次数和大小 所有的css样式合并成一个
 * 2:减少js的大小 对代码进行压缩
 * 资源合并压缩 图片懒加载 音视频走流文件（m3u8）
 * 
 * 批量渲染机制
 * 
 * 
 * 
 * 1、为什么要做性能优化
 * 【用户】：游戏唤醒快、运行持久稳定、不卡顿
 * 【平台】：平台会对开发者上传对游戏包体对大小有限制
 * 2、影响性能对因素有哪些？
 * 游戏是如何运行对？微信、抖音小游戏，本质是h5小游戏
 * 连接服务器从服务器下载游戏包体到手机、（尽量优化包体体积大小）
 * 加载到手机内存、渲染到设备几面（资源游戏、代码优化）
 * 3、性能优化从哪些方面着手
 * 【加载优化】要加载到资源有哪些，如何优化包体
 *      资源：图片、声音、动画、字体等
 *      图片：压缩图片（cocos最大图片是2048*2048）尽量使用九宫格、没用的图片删掉
 *      动画：尽量不要使用帧动画、使用骨骼动画
 *      字体：尽量不要使用自带字库，用特效文字，位图字，矢量字
 *      预制体：从文件中读取数据，反序列化数据，还原得到的prefab
 *      节点树，预处理，实例化 （优化策略：优化单词创建性能、优化多次创建性能）
 *      代码：引擎代码（大头）、用户代码
 *      cocos2d-js-min.js 压缩的引擎模块js文件
 * 【渲染优化】
 *      drawcall--降低--超过100将会出现卡顿
 *      mesh、纹理相同、shader相同、参数相同、drawcall合批
 *      Sprite、Sprite、Label、Sprite、Sprite 会打乱合批
 *      合并渲染批次、降低drawcall，提升渲染性能
 *      使用图集打包工具、TextruePacker，Mask、会打乱渲染、圆角的处理、美工
 *      复用节点，减少节点的数量、enable、disable的开销。分页（更换节点的内容）
 * 【内存优化】
 *      静态资源--res ：游戏场景中直接或间接使用的所有资源
 *      动态资源resoureces：统一使用cc.loader进行资源的加载及管理的
 *      loadRes 是异步的
 *      getRes  是同步的
 * 【代码优化】
 *      控制游戏帧率
 *      不要在循环体中捕获异常，
 *      全局变量尽量慎重使用，
 *      优化节点树
 *      尽量在代码中避免死循环
 *      for(var i=0;i<arr.length;i++){
 *          
 *      }
 *      for(var i=0,len=arr.length;i<len;i++){
 *          
 *      }
 *      场景当中不要挂载过多的预制体prefab，适当的将一些prefab变成动态加载
 * 4、性能优化应注意什么
 *      费效比：成本
 */


 /**
  * 
  * Dom的回流与重绘 dom------document object model（文档对象模型）
  * 
  * 重绘：repaint
  * 元素的样式的改变（但是宽高、大小、位置不变）
  * 如outline，visiblity，color，background-color等
  * 回流：reflow
  * 元素等大小或者位置发生了变化（当页面布局和几何信息发生变化当时候），触发了重新布局，
  * 导致渲染树重新计算布局和渲染
  *     如添加或删除可见当dom元素；元素当位置发生改变，元素当尺寸发生变化，内容发生变化（
  *     比如文本变化或图片被另一个不同尺寸当图片所替代）；页面一开始渲染当时候（这个无法避免）；
  *     因为回流是根据视口当大小来计算元素当位置和大小当，所以浏览器当窗口尺寸变化也会引发回流
  * 注意：回流一定会触发重绘，而重绘不一定会回流
 */


 /**
  * 详细https：
  * 传输层安全性协议（Transport Layer security，缩写TSL）
  * 其前身是安全套接层（secure Socket Layer）
  * HTTP:HyperText Transfer Protocol,(超文本传输协议)
  * HTML:HyperText Markup language (超文本标记语言) 超文本--可以链接到另一个文档或文本
  * HTTP是一种通信协议，它允许HTML文档从web服务器传送到客户端到浏览器
  * TCP：transmission control protocal 传输控制协议
  * 有6种标示：SYN：（synchronous建立联机） 同步
  *          ACK：（acknowledgement确认） 确认
  *          PSH：（push传送）
  *          FIN：（finish结束）
  *          RST：（reset重置）
  *          URG：（urgent紧急）
  *          Sequence number：（顺序号码）
  *          ACknowledge numnber：（确认号码）
  * 
  * 第一次握手：主机A发送位码为syn=1，随机产生seq number=123456的数据包到服务器，主机B由SYN知道，A要求建立联机
  * 第二次握手：主机B收到请求后要求确认联机信息，向A发送 ack number=（主机A到seq+1），syn=1，ack=1，随机产生seq=7654321到包
  * 第三次握手：主机A收到后检查ack number是够正确，即第一次发送到seq number+1，以及位码ack是否为1，若正确，主机A会在发送
  * ack numer=（主机B到seq+1），ack=1，主机B收到确认seq值与ack=1则链接建立连接成功
  * 
  * 因为网络传输有延迟，客户端发送请求到服务器端要求建立连接，如果服务器端直接返回到话可能会产生丢包到情况导致
  * 客户端接受不到数据，客户端会因为超时就关闭了，可能就去发送新到请求了，然后服务器并不知道丢包导致客户端没有
  * 接收数据，服务端端口就一直开着，造成了额外到开销，所以需要三次握手确认这个过程 为了信息传输到可靠性
  * 
  * 四次挥手
  * 1:TCP客户端发送一个FIN报文，用来关闭客户到服务器到数据传送
  * 2:服务器收到这个FIN报文，它发挥一个ACK报文，确认需要为收到到seq+1，和SYN一样，一个FIN报文将占用一个序号。
  * 3:服务器关闭客户端到连接，发送一个FIN给客户端
  * 4:客户端发挥ACK报文确认，并将确认序号设置为收到序号加1
  * 
  * 跨域
  * 什么是跨域：
  *     浏览器到通源策略限制了跨域请求资源
  * 2 jsnp跨域 <script src="http://baidu.com"></script>标签请求不跨域
  * 3 跨域到限制（预请求）
  *     默认到跨域允许到方法只有 get post head 其他到方法不允许
  *     ‘Access-Control-Allow-Methods’:'POST,PUt,DELETE',//设置通过请求到方法
  *     默认允许Content-type以下3个，其他预请求验证通过才能发送
  *     text/plain 
  *     multipart/form-data  
  *     application/x-www.form-urlencoded
  *     
  *     请求头限制、自定义到请求头是不允许，预请求验证通过才能发送
  *     'Access-Control-Allow-Headers':"X-Test-Cors"//设置通过自定义到请求头
  *     'Access-Control-Max-Age':'1000'//Methods和Headers到结果可以被缓存多久
  *     
 */

 /**
  * promise
  * 异步编程当一种解决方案，比传统当解决方案---回调函数和事件---更合理
  * 有三个状态：
  * 1、pending [待定] 初始状态
  * 2、resolve【实现】操作成功
  * 3、rejected【拒绝】操作失败
  * var promise = new Promise(传一个函数);
  * var promise = new Promise(function(resolve,reject){
  *     if(操作成功){
  *         resolve(value);    
  *     }else{
  *         reject(error);
  *      }
  * })
  * promise.then(()={
  *     返回成功当数据
  * }).catch(err=>{
  *     返回失败当数据
  * })
 */
 一段代码看 async promise await
 function one(){
     return "one"
 }
 function two(){
     return new Promise ((resolve,reject)=>{
         setTimeout(()=>{
             resolve("two");
         },1000)
     })
 }
 function three(){
     return "three"
 }
 async function run(){
     console.log(one());
     console.log(await two());
     console.log(three());
 }
 /**
  * javascript
  * 1，call和apply当区别是什么，哪个性能更好一些？改变this指向
  *     3个以内差不多 3个以上call当性能更好一些
  *     fn.call(obj,10,20,30)
  *     fn.apply(obj,[10,20,30])
 */

/**
 * 函数高级：
 * 原型与原型链
 * 执行上下文与执行上下文栈
 * 作用域与作用域链
 * 闭包
*/
/** 对象的诞生解决了什么问题 把描述同一件事物的属性和特征进行分组分类 
 * 避免了全局变量的互相污染，冲突
 * 单例设计模式（singleton pattern）
 * 1.表现形式
 * var obj ={
 *      xxx:xxx,
 * };
 * 在单例设计模型中，obj不仅仅是对象名，它被称为‘命名空间’ [NameSpace]
 * 把描述事务的属性存放到命名空间中，多个命名空间是独立分开到，互不冲突
 * 2.作用
 * 把描述同一件事物的属性和特征进行分组归类（存储在同一个堆内存中）
 * 因此避免了全局变量之间的冲突和污染
 * var person1 ={name:"123"} 
 * var person2 ={name:"321"} 
 * 3.单例设计模式命名的由来
 * 每一个命名空间都是JS中Object这个内置基类的实例，
 * 而实例之间是相互独立互不干扰的，所以我们称它为“单例：单独的实例”
 * ----------------------------------------------------
 * 高级单例模式 面试的时候用到的 返回的是一个对象
 *      1.在给命名空间赋值的时候，不是直接赋值一个对象，而是先执行
 * 匿名函数，形成一个私有作用域AA（不销毁的栈内存），在AA中创建一个堆内存
 * 把堆内存地址赋值给命名空间
 *      2.这种模式的好处：我们完全可以在AA中创造很多内容（变量OR函数），
 * 哪些需要供外面调取使用的，我们暴露到返回到对象中（模块化实现到一种思想）
 * var nameSpace = (function(){
 *  var n=12;
 *  function fn(){
 *      //...
 *  }
 *  return {
 *      fn:fn
 *   }
 * })()
*/
// ----------------------------------------------------------
/**
 * 数据类型：
 * 基本数据类型（值类型）
 *      Number  String Boolean null undefined
 * 引用数据类型（）
 *      Object ：{普通对象} [数组对象] /^$/(正则) new Date() Math 
 *      function
 * ES6中新增
 *      Symbol 创建唯一值
 * //typeof 检测数据类型
 * undefined boolean string number object function
 * console.log(typeof NaN);=>"number"字符串number
 * console.log(typeof [])=>object
 * NaN----not a number 不是一个数字，但是属于number数字类型
 * NaN==NaN也是不相等到，它和谁都不相等，所以检测是否为有效数字需要
 * 用isNaN
 * isNaN(0)=false isNaN('A')=true isNaN("10")=false
 * 
 * 对象都属性名一定不能是引用类型之，默认会把引用类型值转换成为字符
 * let a={x:100},b={x:200}
 * let obj={};
 * obj[a]="自权" obj[b]="张青" a.toString='[Object Object]'
 *                            b.toString='Objcet Object'
 * console.log(obj[a],obj[b]) //张青 张青
 * console.log(obj[a]==obj[b]) //true
 * 作业=》整理数组相关的方法 整理对象相关的方法 整理String相关的方法
*/
// ---------------------------------------------------
/**
 * 堆栈内存
 * 
 * 浏览器创建代码的话它怎么做的=>专业名词
 * 编辑器（把代码解析成浏览器看的懂的结构）
 *      词法解析
 *      AST抽象语法树
 *      构建出浏览器能够执行的代码
 * 引擎（V8 webkit内核引擎）
 *      变量提升
 *      作用域 作用域链 /闭包
 *      变量对象
 *      堆栈内存
 *      GO/VO/AO/EC/ESCStack
 *  。。。。。。
 * GO；（Global Object）=>全局对象
 * ESCtack：（Execution Context Stack）执行环境栈 栈内存（执行代码 存储基本类型值）
 * EC：（Execultion Context）执行环境（执行上下文）
 * 。VO：varibale Object 变量对象
 * 。AO：Activation Object（活动对象）（函数的叫做AO，理解为VO的一个分支）
 * Scope：作用域。创建的函数的时候就赋予的
 * Scope Chain：作用域链
 * 
 * 
 * a=12 变量赋值的三步操作
 * 创建变量 声明 declare
 * 创建值：基本值直接在栈中创建和存储即可---
 * ---由于引用值是复杂的结构（对象 数组），所以特殊处理->开辟一个存储对象中键值对
 * （存储函数中代码的字符串）的内存空间  ‘堆内存’
 * ----所有堆内存都有一个可被后续查找的16进制地址
 * -----后续关联赋值的时候，是把堆内存地址给予变量操作的
 * 让变量和值关联起来（赋值）定义 defined
 * a=null(空对象 指针 如果0要在栈内存中开空间) 
 * 
 * function fn(y){y[0]=100} fn(x); x=[12,13]
 * 初始化内置的实参集合 arguments=(0:AAAFFF000)
 * 创建一个形参变量y=AAAFFF000
 * 1:初始化实参集合
 * 2:创建形参变量并且赋值
 * 3:代码执行
 * 实参跟形参非严格模式下，会建立映射机制，严格模式下不会，
 * 而且ES6箭头函数中没有arguments实参集合
 * 
 * x=x||20&&30||40  逻辑或 逻辑与
*/
/**
 * 缓存的好处：
 * 1:加快页面的打开速度
 * 2:降低服务器压力
 * 3:减少网络损耗
 * chrome浏览器的默认硬盘缓存的位置（可自己修改）
 * C:\Users\Administrator\AppData\Local\Google\Chrome\User Data\Default\Cache
 * 
 * 浏览器 Network Size：from diskcacche（来自硬盘的缓存 位置👆--一般手动清除）
 *                     from memorycache(来自浏览器的内存缓存--关闭页签的时候清掉)
 * 
 * CDN（Content Delivery Network）内容分发网络
 * 客户端直接从源站点获取数据，当服务器访问量大时会影响访问速度，进而影响用户体验，
 * 且无法保证客户端与原站点间当距离足够短，适合传输数据。CDN解决当正是如何将数据
 * 快速可靠当从原站点传递到客户端，通过CDN对数据对分发，用户可以从一个距离较近对服务器
 * 获取数据，而不是源站点，从而达到快速访问，且减少原站点负载压力对目的
*/

/**
 * cocoscreator的组建生命周期
 * onLoad
 * start
 * update
 * lateUpdate
 * onDestroy
 * onEnable
 * onDisable
*/
<!-- .so的文件夹 app->intermediates->transforms->stripDebugSymbol->debug->0->lib -->
    <!-- 穿山甲sdk接入 -->
    正常打包之后的GradleVersion 4.10.3 PluginVersion 3.2.0
  jsb桥接
  import org.cocos2dx.lib.Cocos2dxJavascriptJavaBridge;

  <!-- cache .gradle -->
  /User/wangziquan/.gradle

  <!-- debug keystore -->
  keytool -list -v -keystore debug.keystore
  生成单个渠道包: ./gradlew clean assembleReleaseChannels -PchannelList=meituan
生成多个渠道包:  ./gradlew clean assembleReleaseChannels -PchannelList=kuaishou,toutiao

keytool -exportcert -alias key0 -keypass 123456 -keystore ./jkzaaaa.jks -storepass 123456 | md5sum

keytool -list -rfc -keystore jkzaaaa.jks -storepass 123456

jarsigner -verbose -keystore /Users/wangziquan/Desktop/sign/jkzaaaa.jks -signedjar /Users/wangziquan/Desktop/sign/tap_signed.apk Users/wangziquan/Desktop/sign/tap_unsign.apk key0

/Applications/CocosCreator/Creator/2.4.5/CocosCreator.app/Contents/MacOS/CocosCreator --path /Users/wangziquan/desk/Gromore --build "platform=android;debug=true"

芝麻消消乐appid：5232177
芝麻消消乐-开屏广告位id：887613026
开屏兜底id：887613023
芝麻消消乐-信息流广告位id：947025011
芝麻消消乐-banner广告位id：947025020
芝麻消消乐-激励视频广告位id：947025026
芝麻消消乐-插屏广告位id：947025031

```
## 7 种原始类型，使用 typeof 运算符检查:
 - **undefined**：typeof instance === "undefined"
 - **Boolean**：typeof instance === "boolean"
 - **Number**：typeof instance === "number"
 - **String**：typeof instance === "string
 - **BigInt**：typeof instance === "bigint"
 - **Symbol** ：typeof instance === "symbol"
 - **null**：typeof instance === "object"。

> **注意：** typeof 操作符的唯一目的就是检查数据类型，如果我们希望检查任何从 Object 派生出来的结构类型，使用 typeof 是不起作用的，因为总是会得到 "object"。检查 Object 种类的合适方式是使用 instanceof 关键字。但即使这样也存在误差。


## **Map**和**WeakMap** 把一个值和对象关联起来的时候
> **===**和**Object** 区别总结 ----那你应该避免使用Object.is，使用===来代替
 - +0===-0（true） Object.is(+0,-0)=false; 
 - NaN===NaN(false)  Object.is(NaN,NaN)=true;
 ## 浮点数精度问题(我们不能直接浮点数进行运算)
 ```
    console.log(0.1+0.2)=0.30000000000000004
    console.log(0.07*100)=7.000000000000001
    i++:后置自增：先表达式返回原值 后面变量再自加1
    ++i:前置自增：先自加，后运算
 ```
 ## 开发时大多使用后置递减/增
```javascript
  /*
    * 把数字按照下图规律去排列，设1的坐标是（0，0），x方向为右为正，y方向向下为正。
    * 例如：2的坐标是（1，0），3的坐标是（1，1），7的坐标为（-1，-1）
    * 请实现函数：
    * 输入是任意坐标（x，y），输出所对应的数字。
    * 21 22.。。
    * 20  7  8  9 10
    * 19  6  1  2 11
    * 18  5  4  3 12
    * 17 16 15 14 13
    */
    getKey(x, y) {
        let obj = {

        }
        let key = x + "+" + y;
        let dir = [[1, 0], [0, 1], [-1, 0], [0, -1]];
        let index = 0;
        // 通过xy的坐标可以获取到整个范围的大小
        let val = (Math.abs(x) * 2 + 1)>(Math.abs(y) * 2 + 1)?(Math.abs(x) * 2 + 1):(Math.abs(y) * 2 + 1)
        let total = Math.pow(val,2);
        let period = 0;
        let _period = 0;
        let start = [0, 0];
        let _start = [0, 0];
        while (index < total) {
            if (index === 0) {
                let _key = "0+0";
                let val = 1;
                obj[_key] = val;
                index++;
            } else {
                let _dir = dir[[period]];
                _start = [start[0] + _dir[0], start[1] + _dir[1]];
                let _key = _start[0] + "+" + _start[1];
                if (!obj[_key]) {
                    start = _start;
                    obj[_key] = index + 1;
                    period++;
                    _period = period
                    if (period === 4) {
                        period = 0;
                    }
                    index++;
                } else {
                    _start = start;
                    period = _period - 1
                }
            }
        }
        console.log(obj);
        return obj[key];
    }

        /**
     * 题目一
     * 定义A：删除字符串A的任意个字符，得到的字符串B称为A的字串
     * 定义B：英文字典的排序方式，称为字典序，例如：abc<abca<abd<ac
     * 定义C：将字符串A的所有字串按照字典序排列，排最后的子串称为A的最大字串
     * 例如：jiangzemin的最大字串是zn
     * 请实现函数：
     * 输入是一个字符串A，输出A的最大字串
    */
    function maxChild(A){
    //先选出最大的字母
    let max = "a";
    let index = 0;
    let str = "";
    while(index<A.length){
        let max = "a";
        for(let i = index;i<A.length;i++){
            let _max = (""+max).charCodeAt();
            let _new = (""+A[i]).charCodeAt();
            if(_new>_max){
                max = A[i];
            }
        }
        for(let i=index;i<A.length;i++){
            if(A[i]===max){
                index = i+1;
                str+=max;
            }
        }

    };
    return str;
}
console.log("newArr=",maxChild("jiangzemizn"));

hasOwnProperty是javascript种唯一一个处理属性并且不会遍历原型链的方法。另一种是Object.keys();
```
