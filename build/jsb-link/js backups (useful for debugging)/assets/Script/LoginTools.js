cc.wxLogin = {
wxLogin() {
console.log("wxLogin");
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "weixin_login", "(Ljava/lang/String;)V", "weixin_login");
},
wxLoginResult(o) {
cc.wxLoginInfo = {};
cc.log("wxLoginResultcode=" + o);
cc.wxLoginInfo.wxLoginResultcode = o;
}
};