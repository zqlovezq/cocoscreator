/**
 * Created by wzq on 2017/5/11.
 */
module.exports = function (){
  return new Test();
};
function Test() {
    this._name = "test";
    this._age = 18;
};
Test.prototype.setName = function(name){
    this._name = name;
};
Test.prototype.setAge = function(age){
    this._age = age;
}