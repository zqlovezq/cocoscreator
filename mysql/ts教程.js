/**
 * Created by wzq on 2017/9/7.
 */
//布尔值
// let isDone:boolean = false;
// //数字
// let decLiteral:number = 6;
// let hexLiteral: number = 0xf00d;    //十六进制
// let binaryLiteral: number = 0b1010; //二进制
// let octalLiteral: number = 0o744;   //八进制
// //字符串
// let name:string = "Gene";
// //数组 第一种
// // let list:number[] = [1,2,3];
// //数组 第二种
// let list:Array<number> = [1,2,3];
// //枚举
// // enum Color {Red,Green,Blue};
// // let c:Color = Color.Green;
// 定义一个动物类
function Animal (name) {
    // 属性
    this.name = name || 'Animal';
    // 实例方法
    this.sleep = function(){
        console.log(this.name + '正在睡觉！');
        return "返回字符串"
    }
}
// 原型方法
Animal.prototype.eat = function(food) {
    console.log(this.name + '正在吃：' + food);
};
function Cat(name){
    Animal.call(this);
    this.name = name || 'Tom';
}
(function(){
    // 创建一个没有实例方法的类
    var Super = function(){};
    Super.prototype = Animal.prototype;
    //将实例作为子类的原型
    Cat.prototype = new Super();
})();

// Test Code
var cat = new Cat();
console.log(cat);
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); //true