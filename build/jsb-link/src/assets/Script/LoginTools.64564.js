cc.wxLogin = {
    /**
     * 调取native微信授权
    */
     wxLogin() {
        console.log("wxLogin");
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "weixin_login", "(Ljava/lang/String;)V","weixin_login");
    },

    /**
     * 接收native微信授权的code
     * @param errCode 
     */
   wxLoginResult(errCode) {
        cc.log("wxLoginResultcode=" + errCode)
        cc.wxLoginResultcode = errCode;
    }
}