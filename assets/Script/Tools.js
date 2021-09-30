cc.Tools = {
    /**
     * @param {*} event 数数打点的事件名称
     * @param {*} pro 数数打点的关联属性
    */
    dot(event, pro) {
        if (cc.sys.isNative) {
            cc.log("注册打点" + event);
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "dot", "(Ljava/lang/String;)V", event, pro);
        }
    },

    /**
     * 看视频回调
     */
    adCallBack(ecpm) {
        cc.log("观看视频回调");
        // 获取广告ad之前先用epcr
        // 看视频得体力
        this.getUserEcpm(ecpm).then(()=>{
            cc.log("获取ecpm之后才调用");
            if (cc.zm.userInfo.power<=0) {
                let sendData = {
                    ad: cc.zm.ad
                }
                cc.Tools.sendRequest("pit.v1.PitSvc/GrowPower", "POST", sendData).then((res) => {
                    cc.log("获取体力奖励")
                    cc.zm.userInfo.power = res.data.value;
                    if(cc.zm.videoAd.enterGame){
                        cc.director.loadScene('Game');
                    }
                });
            }
            // 看视频得红包
            if (cc.zm.videoAd.redPack) {
                cc.Tools.sendRequest("pit.v1.PitSvc/PassAd", "POST", cc.zm.ad.redPack).then((res) => {
                    cc.log("获取红包奖励", res);
                    let sendData = {};
                    cc.Tools.sendRequest("pit.v1.PitSvc/UserInfo", "GET", sendData).then((res) => {
                        cc.zm.userInfo = res.data;
                        // 如果体力大于0 进入下一关
                        if (cc.zm.userInfo.power > 0) {
                            cc.Tools.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then((res) => {
                                cc.zm.LevelInfo = res.data;
                                cc.zm.videoAd.redPack = null;
                                // console.log("关卡信息=", cc.zm.LevelInfo);
                                if (cc.zm.LevelInfo.stage < 30) {
                                    cc.director.loadScene('Game');
                                } else {
                                    // 直接返回主界面
                                    cc.director.loadScene('Index');
                                }
                            });
                        } else {
                            // 小于0 弹出看视频获得体力的接口
                            cc.director.loadScene('Index');
                        }
                    })
                });
            }
            if(cc.zm.videoAd.clickSign){
                cc.zm.videoAd.clickSign = false;
            }
            if(cc.zm.videoAd.clickTable){
                cc.zm.videoAd.clickTable = false;
            }
        })
    },
    // 显示激励视频
    showJiliAd() {
        cc.log("点击显示激励视频")
        if (cc.sys.isNative) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showAd", "()V");
        }
    },
    // 显示banner
    showBanner() {
        if (cc.sys.isNative) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showBanner", "()V");
        }
    },
    // 隐藏banner
    hideBanner() {
        if (cc.sys.isNative) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideBanner", "()V");
        }
    },
    // 显示插屏广告
    showTableScreen() {
        if (cc.sys.isNative) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showTableScreen", "()V");
        }
    },
    // 隐藏插屏广告
    hideTableScreen() {
        if (cc.sys.isNative) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideTableScreen", "()V");
        }
    },
    // 微信登陆
    wxLogin() {
        cc.log("wxLogin");
        if (cc.sys.isNative) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "weixin_login", "(Ljava/lang/String;)V", "weixin_login");
        }
    },
    /**
    * 接收native微信授权的code
    * @param errCode 
    */
    wxLoginResult(errCode) {
        cc.log("wxLoginResultcode=" + errCode)
        cc.wxLoginResultcode = errCode;
    },
    /**
     * 看广告之后刷新一下ecpm
     */
     getUserEcpm(ecpm) {
         if(!cc.zm){
             return;
         }
         cc.log("调用ecpm=",ecpm);
         return new Promise(function (resolve, reject){
            let sendData = {
                "ecpm": ecpm,
                "ts": new Date().getTime()//时间戳
            };
            let data = cc.Tools.createSignData(sendData);
            cc.Tools.sendRequest("pit.v1.PitSvc/Rc", "POST", data).then((res) => {
                cc.log("Ecpm成功", res.data);
                cc.zm.ad = res.data.ad;
                resolve();
            }).catch((res)=>{
                cc.log("Ecpm失败", res);
                reject(res);
            })
         })
    },
    /**
     * 
     * @param {*} data 需要签名数据
     * @returns 
     */
    createSignData: function (data) {
        var sortList = [];
        for (var key in data) {
            if (data.hasOwnProperty(key) && key != "sign") {
                var value = data[key];
                var item = {};
                item.key = key;
                item.value = value;
                sortList.push(key);
            }
        }
        sortList.sort();
        var strToJiaMi = "";
        sortList.forEach(function (key) {
            strToJiaMi += "&" + key + "=" + data[key];
        }, this);
        strToJiaMi = "token=" + cc.zm.userInfo.sc1 + strToJiaMi;
        // var noJiaMi = strToJiaMi;
        // console.log("未加密前=", strToJiaMi)
        var hex_md5 = require("MD5")
        strToJiaMi = hex_md5(strToJiaMi);
        data.sign = strToJiaMi;
        // console.log("加密后=", strToJiaMi)
        return data;

    },
    // 适配屏幕
    screenAdapter() {
        let canvas = cc.find("Canvas").getComponent(cc.Canvas);
        let winSize = cc.view.getVisibleSize();

        if (winSize.height / winSize.width <= 720 / 1280) {
            canvas.fitHeight = true;
            canvas.fitWidth = false;
        }
        else {
            canvas.fitHeight = false;
            canvas.fitWidth = true;
        }
    },
    /**
     * 
     * @param {*} n node节点
     * @param {*} str  显示的tips内容
     */
    showTips(n,str) {
        let tips = n.getChildByName("Tips");
        tips.getComponent(cc.Label).string =str;
        tips.stopAllActions();
        tips.y = 145;
        cc.tween(tips).to(0.1, { opacity: 255 }).to(1, { y: 300 }).delay(0.5).to(0.1, { opacity: 0 }).start()
    },
    /**
     * 
     * @param {*} url 请求接口的url----pit.v1.PitSvc/UserInfo
     * @param {*} type 请求接口的类型 只能是GET--POST
     * @param {*} data 请求接口所需要的数据
     * @returns 
     */
    sendRequest: function (url, type,data) {
        return new Promise(function (resolve, reject) {
            let xhr = new XMLHttpRequest();
            let requestURL = "https://pit.api.jiankangzhuan.com/" + url;
            xhr.open(type, requestURL, true);
            if (cc.sys.isNative) {
                cc.log("isNative");
                xhr.setRequestHeader("Accept-Encodeing", "gzip,deflate");
            }
            if(cc.wxToken){
                xhr.setRequestHeader("Authorization", cc.wxToken);
            }
            xhr.setRequestHeader("Content-Type", "application/json");
            cc.log("requestURL=", requestURL);
            cc.log("data=", JSON.stringify(data));
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status == 200) {
                    cc.log("http res:" + xhr.response);
                    // 统一处理
                    let _response = JSON.parse(xhr.response);
                    if(_response.code===0){
                        resolve(_response)
                    }else{
                        console.log(_response.message);
                        reject(_response.message);
                    }
                }
            }
            xhr.onerror = function () {
                reject(new Error(xhr.statusText))
            }
            xhr.send(JSON.stringify(data));
        })
    }
}