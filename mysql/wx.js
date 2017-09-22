/**
 * Created by wzq on 2017/7/5.
 */
/**
 * <block>模块
 *  block只作为列表渲染用，自身不显示在页面中，不起布局作用
 */
// var person = {};
// person.name="hero";
// person.getName=function () {
//     console.log(this.name);
//     return this.name
// };
// person.setName=function (_name) {
//     this.name=_name;
// };
// person.prototype.show=function () {
//     console.log("show");
// }
// module.exports=person;
var switchType=function (str) {
    var s = str.slice(0,1);
    if(s){
        if(typeof s==="string"){
            console.log(s.charCodeAt(0));
            if(s.charCodeAt(0)>96){//小写
                return {type:"b",temp:s}
            }
            if(s.charCodeAt(0)<90){//大写
                return {type:"r",temp:s}
            }
        }
    }
};
switchType('a0')
