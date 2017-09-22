/**
 * Created by wzq on 2017/9/7.
 */
/**
 * Created by wzq on 2017/9/7.
 */
//布尔值
var isDone = false;
//数字
var decLiteral = 6;
var hexLiteral = 0xf00d; //十六进制
var binaryLiteral = 10; //二进制
var octalLiteral = 484; //八进制
//字符串
var myName = "Gene";
//数组 第一种
// let list:number[] = [1,2,3];
//数组 第二种
var list = [1, 2, 3];
//枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
//as语法
var someValue = "this is a string";
// let strLength:number = (someValue as string).length;
var strLength = someValue.length;
/**
 * let和const是JavaScript里相对较新的变量声明方式。
 * 像我们之前提到过的， let在很多方面与var是相似的，
 * 但是可以帮助大家避免在JavaScript里常见一些问题。
 * const是对let的一个增强，它能阻止对一个变量再次赋值。
 */
function theCityThatAlwaysSleeps() {
    var getCity;
    if (true) {
        var city_1 = "Seattle";
        getCity = function () {
            return city_1;
        };
    }
    return getCity();
}
console.log(theCityThatAlwaysSleeps());
//const 声明 被赋值后不能在改变
var numLivesForCat = 9;
/**
 * 在TS里，接口的作用就是为了这些类型命名为你的代码或第三方定义契约
 */
/**
 * 使用对象池
 * 在运行时进行节点的创建（cc.instantiate）和销毁(node.destroy)操作时非常耗费性能的，
 * 因此我们在比较复杂的场景中，通常只有在场景初始化逻辑（onload）中才会进行节点的创建，
 * 在切换场景时才会进行节点的销毁，如果制作大量敌人或子弹需要反复生成和被消灭的动作类游戏
 * 我们要如何在游戏进行过程中随时创建和销毁节点呢？这里我们就需要对象池的帮助了
 *
 * 对象池的概念
 * 对象池就是一组可回收的节点对象，我们通过创建cc.NodePool的实例来初始化一种节点的对象池。通常当我们
 * 有多个prefab需要实例化时，应该为每个prefab创建一个cc.NodePool实例。当我们需要创建节点时，像对象池申请一个
 * 节点，如果对象池里有空闲的可用节点，就用把讲点返回给用户，用户通过node.addChild将这个新节点加入到
 * 场景节点树中。
 * 当我们需要销毁节点时，调用对象池实例的put(node)方法，传入需要销毁的节点实例，对象池会自动完成
 * 把节点从场景节点树中移除的操作，然后返回给对象池。这样就实现了少数节点的循环利用。
 * 假如玩家在一贯中要杀死100个敌人，但同时出现的敌人不超过5人，那我们就只需要生成5个节点大小的对象池，
 * 然后循环使用就可以了
 */
/**
 * 状态机：
 * 三个特征：
 * 状态总数（state）是有限的。
 * 任一时刻，只处于一种状态之中。
 * 某种条件下，慧聪一种状态转变到另一种状态
 */
//# sourceMappingURL=ts教程0.js.map