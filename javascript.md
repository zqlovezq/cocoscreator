# javascript
``` javascript
     /**
     * instance_of
     */
    funciton instance_of(example,classFunc){
        let classFuncPrototype = classFunc.prototype,
            proto = Object.getPrototypeOf(example);//example.__proto__
        while(true){
            if(proto===null){
                //Objcet.prototype.__proto__=>null
                return false;
            }
            if(proto === classFuncPrototype){
                return true;
            }
            proto = Object.getPrototyoeOf(proto)
        }
    }
     /**
     * toType
     */
    var class2type = {};
    var toString = class2type.toString;//Objcet.prototype.toString
    //设定数据类型的映射表
    ["Number","String","Boolean","Symbol","Objcet","Array","RegExp","Date","Function","Error"].forEach(name=>{
        class2type[`[object ${name}]`] = name.toLowerCase();
    })
    function toType(obj){
        if(obj==null){
            return obj+""
        }
        return typeof obj==="objcet"||typeof obj === "function"?
            class2type[toString.call(obj)]||"object":typeof obj
    }
     /**
     * forEach
     */
    Array.prototype.forEach=function forEach(callback,context){
        //this ->arr
        let self = this,
            i=0,
            len=self.length;
        context = context==null?window:context;
        for(;i<len;i++>){
            typeof callback!=="function"?callback.call(context,self[i],i):null;
        }
    };
    /**
     * for of
     */
    arr = [10,20,30];
    arr[Symbol.iterator] = function(){
        let self = this,
            index = 0;
        return {
            next(){
                if(index>self.length-1){
                    return{
                        done:true,
                        value:undefined
                    };
                }
                return {
                    done:false,
                    value:self[index++]
                }
            }
        }
    }
    for(const val of arr){
        console.log(val);
    }
     /**
     * call
     * 原理：就是利用“点”定THIS机制，context.xxx=self "obj.xxx=func"=>obj.xxx();
     */
    Function.prototype.call = function call(context,...params){
        let self = this,
            key = Symbol('KEY'),
            result;
        context == null?context = window:null;
        /^(object|function)$/i.test(typeof context)?context = Object(context):null;
        context[key] = self;
        result = context[key](...params);
        delete context[key];
        return result;
    }
    /**
     * bind
     */
    Function.prototype.bind = function bind(context,...params){
        let self = this;
        return function proxy(...args){
            self.apply(context,params.concat(args));
        }
    }
     /**
     * 封装AJAX
     */
    const qs = require('qs');
    export default function ajax(option={}){
        option =  Object.assign({
            url:'',
            method:'post',
            data:null,
            success:null
        },option);
        option.data = qs.stringify(option.data);//x-www-form-urlencoded
        let isGET = /^(GET|DELETE|HEAD|OPTIONS)$/i.test(option.method);
        if(isGET&&option.data){
            option.url+=`${option.url.includes('?')?'&':'?'}${option.data}`
            option.data = null;
        }
        let xhr = new XMLHttpRequest;
        xhr.open("post","http://127.0.0.1:8888/user/list");
        xhr.onreadystatechange = function(){
            if(/^2\d{2}$/.test(xhr.status)&&xhr.readyState===4){
                // console.log(xhr.responseText)
                typeof option.success === "function"?option.success(JSON.parse(xhr.responseText)):null;
            }
        }
        xhr.send(option.data);
    }
    /**
     * 用户输入一个字符串，验证是否符合URL网址的格式
     */
    let reg = /^(?:(http|https|ftp):\/\/)?((?:[\w-]+\.)+[a-z0-9]+)((?:\/[^/]*)+)?(\?[^#]+)?(#.+)?$/i
    console.log(reg.exec(str));
    /**
     * 实现图片的懒加载
     */
    let $imgBox = $('.imgBox'),
        $img = $imgBox.children("img"),
        $window = $(window)
    $window.on('load scroll',function(){
        if($img.attr("isLoad")==="true"){
            // =>之前加载过则不会重新加载
            return;
        }
        let $A = $imgBox.outerHeight()+$imgBox.offset().top,
            $B = $window.outerHeight()+$window.scrollTop();
        if($A<=$B){
            $img.attr('src',$img.attr('data-img'));
            $img.on("load",function(){
                //=>加载成功
                // $img.css("display","block");
                $img.stop().fadeIn();
            });
            $img.attr('isLoad',true);//=>ATTR存储的自定义属性值都是字符串
        }
    })
```
### 稀疏数组和稠密数组
## 数据类型检测
 - ***typeof*** ---返回的结果是字符串
 ``` javascript
    直接在计算机底层基于数据类型的值（二进制）进行检测
    typeof NaN => "number"
    typeof function(){} => "function"
    typeof null => "objcet"
    typeof [] => "objcet"
 ```
 > 对象在计算机里面存值都是以000开始的二进制存储 null也是，所以检测出来的结果是对象
 typeof ***普通对象/数组对象/正则对象/日期对象***都是“object”
 - ***instanceof*** ----检测当前实例是否属于这个类的(不能检测基本类型)
``` javascript
    let arr = [];
    console.log(arr instanceof Array);=>true
    console.log(arr instanceof RegExp);=>false
    console.log(arr instanceof Objcet);=>true

    console.log(1 instanceof Number);=>false 
    function Fn(){

    }
    Fn.prototype = Objcet.create(Array.prototype);
    let f = new Fn;
    console.log(f,f instanceof Array); true
```
>instanceof底层机制：只要当前类出现在实例的原型链上，结果都是true。由于我们可以肆意的修改原型的指向，所以检测出来的结果是不准的
 - ***constructor***
``` javascript
     let arr = [];
    console.log(arr.constructor===Array);=>true
    console.log(arr.constructor===RegExp);=>false
    console.log(arr.constructor===Objcet);=>false
    let n=1;
    console.log(n.constructor===Number);=>true 
``` 
>用起来看似比instanceof还好用一些（基本类型支持的）constructor可以随便改，所以也不准
 - ***Objcet.prototype.toString.call([value])***
>标准检测***数据类型***的方法：Objcet.prototype.toString不是转换成字符串，而是返回当前实例所属的信息。标准检测的办法“[object Number/String/Boolean/Null/Undefined/Symbol/Objcet/Array/RegExp/Date/Function]”
```javascript
    let obj = {}
    obj.toString();=>"[objcet Objcet]"
```

# js中的三类循环对比性能分析
## for循环及forEach底层原理
 - for循环是自己控制循环过程
 - Q1:基于var声明的时候，for和while性能差不多「不确定循环次数的情况下使用while」
 - Q2:基于let声明的时候，for循环性能更好「原理：没有创造全局不释放的变量」
 - Q3:重写for-each
## for in循环的bug及解决方案 
- ***性能很差***：迭代当前对象中所有可枚举的属性的「私有属性大部分是可枚举的，公有属性{出现在所有属性类的原型上}也有部分是可枚举的」。查找机制上一定会搞到原型链上去
 - Q1:迭代所有可枚举属性「私有&公有」，按照原型链一级级查找很耗性能
 - Q2:问题很多：不能迭代Symbol属性、迭代顺序会以数字属性优先、公有可枚举点「一般是自定义属性」也会进行迭代
## for of 循环的底层机制
+ Symbol.iterator实现了迭代器规范<数组/部分类数组/Set/Map...「对象没有实现」>
- Q1:迭代器iterator规范「具备next方法，每次执行返回一个对象，具备value/done属性」
- Q2:让对象具备可迭代性并且使用for of循环
```javascript
    let arr = new Array(999999).fill(0);
    console.time('FOR~~~');
    for(var i=0;i<arr.length;i++){}
    console.timeEnd("FOR~~~");

    console.time('WHILE~~');
    var i=0;
    while(i< arr.length){
        i++;
    }
    console.timeEnd('WHILE~~');
```
## 谈谈你对this的了解及应用场景
- this的五种情况分析。this执行主体，谁把它执行的「和在哪创建&哪执行都没有必然的关系」
- Q1:函数执行，看方法前面是否有“点”，没有“点”，this是window「严格模式下是undefined」，有“点”，“点”前面是谁this就是谁
- Q2:给当前元素的某个事件行为绑定方法，当事件行为处罚，方法中的this是当前元素本身「排除attachEvent」
- Q3:构造函数体中的this是当前类的实例
- Q4:箭头函数中没有执行主体，所用到的this都是其所处上下文中的this
- Q5:可以给予Function.prototype上的call/apply/bind去改变this指向

### AJAX的意义在于局部刷新
### 聊聊你对跨域的理解
 - 服务器分离：web服务器、数据服务器、图片服务器
 - 云信息共享：第三方API接口
 - 有助于分离开发：开发跨域、部署同源
+ 修改本地HOST
+ JSONP（js脚本不存在跨域的问题）get请求不能实现post
+ CORS（cookie）---跨域资源共享
```javascript
    //服务器
    res.header("Access-Control-Allow-Origin",ALLOW_ORIGIN);//允许一个源 或者所有的源 不能携带cookie了
    res.header("Access-Control-Allow-Credentials",CREDENTIALS);
    res.header("Access-Control-Allow-Header",HEADERS);
    res.header("Access-Control-Allow-Methods",METHODS);

    //用代理
    const path = require("path");
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    module.exports = {
        mode:"produciton",
        entry:"./src/main.js",
        output:{
            filename:'main.[hash].min.js',
            path:path.resolve(__dirname,'build')
        },
        devServer:{
            port:'3000',
            compress:true,
            open:true,
            hot:true,
            proxy:{
                '/':{
                    target:'http://127.0.0.1:3000',
                    changeOrign:true
                }
            }
        },
        plugins:[
            new HtmlWebpackPlugin({
                template:'./public/index.html',
                filename:'index.html'
            })
        ]
    }
```
+ Proxy（代理 原理 服务器跟服务器之间不存在跨域）
## splice 会造成数组塌陷问题
### 数组扁平化处理
***flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。***
> var arr = [1,2,3,[4,5,[6,7,[8]]]]  arr.flat(Infinity)
***map() 方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。***
>var arr = [1,2,3,[4,5,[6,7,[8]]]] arr = arr.toString().split(",").map(item=>parseFloat(item));
### Array.from() 方法对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例

# JS中8大高频设计模式
## 为什么用设计模式---->设计模式就是一种思想 用来规范编程的代码的 代码更整洁 清晰 维护 扩展等等
### 单利设计模式---->基于单独的实例，来管理某一个模块中的内容，实现模块之间的独立划分「但是也可以相互调用」
### 命令模式---->按照一定到顺序一次执行对象的方法，从而实现整个板块功能的开发
> 第一步---创建值  第二步---创建变量  第三步----关联在一起
***回调函数中的this一般都是window***
## 贪婪模式--->尽可能多的匹配所搜索的字符串
## 非贪婪模式-->尽可能少的匹配所搜索的字符串

# 三大经典排序算法
 - 冒泡排序
 > 让数组的当前项和后一项进行比较，如果当前项比后一项大，则两项交换位置（让大的靠后）即可
 ```javascript
    let ary = [12,8,24,16,1];
    function bubble(ary){
        for(let i=0;i<ary.length-1;i++){
            for(let j=0;j<ary.length-1-i;j++){
                if(ary[j]>ary[j+1]){
                    let temp = ary[j];
                    ary[j] = ary[j+1];
                    ary[j+1] = temp;
                }
            }
        }
        return ary;
    }
 ```
 - 插入排序
 ```javascript
    let ary = [12, 8, 24, 16, 1];
        function insert(ary) {
            let handle = [];
            handle.push(ary[0]);
            for (let i = 1; i < ary.length; i++) {
                let A = ary[i];
                for (let j = handle.length-1; j>=0; j--) {
                    let B = handle[j];
                    if(A>B){
                        handle.splice(j+1,0,A);
                        break;
                    }
                    if(j===0){
                        handle.unshift(A)
                    }
                }
            }
            return handle;
        }
 ```
 - 快速排序
```javascript
    function quick(ary){
        if(ary.length<=1){
            return ary
        }
        let middleIndex = kMath.floor(ary.length/2);
        let middleValue = ary.splice(middleIndex,1)[0];
        let aryLeft = [],
            aryRight = [];
            for(let i=0;i<ary.length;i++){
                let item = ary[i];
                item<middleValue?aryLeft.push(item):aryRight.push(item);
            }
        return quick(aryLeft).concat(middleValue,quick(aryRight));
    }

    cc.Tools.ad.config.sort(function(a,b){
        if(a.num>b.num){
            return 1;
        }
        if(a.num<b.num){
            return -1;
        }
        return 0;
    })
```
>选择排序 归并排序 希尔排序 堆排序 计数排序 桶排序 基数排序
***二叉树 三叉树 红黑树 V8引擎 装饰器***
> executeInEditMode----已编辑模式运行---@executeInEditMode(true)


# 热更新
```javascript
    //构建时请不要勾选 MD5 Cache，否则会导致热更新无效。
    //并且应该确保在工程目录的 packages 文件夹里导入 hot-update 编辑器插件（范例工程里已经导入了该插件）
    Version Generator 来生成 Manifest 文件
    > node version_generator.js -v 1.0.0 -u http://your-server-address/tutorial-hot-update/remote-assets/ -s native/package/ -d assets/
    -v 指定 Manifest 文件的主版本号。
    -u 指定服务器远程包的地址，这个地址需要和最初发布版本中 Manifest 文件的远程包地址一致，否则无法检测到更新。
    -s 本地原生打包版本的目录相对路径。
    -d 保存 Manifest 文件的地址。

    //各个文件夹
    local---文件夹中包含该项目的本机上的配置信息，包括编辑器面板布局、窗口大小、位置等信息。开发者不需要关心这里的内容。
    library---是将 assets 中的资源导入后生成的，在这里文件的结构和资源的格式将被处理成最终游戏发布时需要的形式。
    当 library 丢失或损坏的时候，只要删除整个 library 文件夹再打开项目，就会重新生成资源库。
    temp--是临时文件夹，用于缓存一些 Cocos Creator 在本地的临时文件。这个文件夹可以在关闭 Cocos Creator 后手动删除，开发者不需要关心这里面的内容。
```
