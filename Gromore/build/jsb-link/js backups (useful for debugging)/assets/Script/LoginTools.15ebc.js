cc.wxLogin = {
wxLogin() {
console.log("wxLogin");
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "weixin_login", "(Ljava/lang/String;)V", "weixin_login");
},
wxLoginResult(o) {
cc.log("wxLoginResultcode=" + o);
cc.wxLoginResultcode = o;
}
};