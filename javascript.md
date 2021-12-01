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
 - Q1:基于var声明点时候，for和while性能差不多「不确定循环次数的情况下使用while」
 - Q2:基于let声明点时候，for循环性能更好「原理：没有创造全局不释放的变量」
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

## AJAX的意义在于局部刷新