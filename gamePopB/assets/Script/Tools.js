var Pubkey = `-----BEGIN RSA Public Key-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA6xCn65TInQGUCfo6A7IQ
Wu5oW1AFqYIRnLlzXMo8DB3ZC5grYf7095NWpFFERnhmCxJySj5NAV9XEubPD/za
ZKkgV2kKM9zbrivOOVVVn1oA5WXvctply81DGsECzNwwDvOTiehlXHxAA+NPCguQ
TcviR6W5oYH1f9ymjQy9aeKv2OvZhXm/1RzexXnlh1XzdCJtTBROaST7jI20ifKb
XG/GRgdJrRdb1yghcNnqYtAVUWZKKx9hBI1hpMoE+9q2xMpcZmMGiu8w/nZTVzd7
M3N56HWWu3nvYpW9KH6xTpmqKlqCemwx8E3ZEdalGp5djkRPKLJPKZ8swMNDgwu2
ZQIDAQAB
-----END RSA Public Key-----`
cc.Tools = {
    /**
     * @param {*} event 数数打点的事件名称
     * @param {*} pro 数数打点的关联属性
    */
    dot(event, pro) {
        if (cc.sys.isNative) {
            if (pro) {
                jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "dot", "(Ljava/lang/String;Ljava/lang/String;)V", event, JSON.stringify(pro));
            } else {
                jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "dot", "(Ljava/lang/String;)V", event);
            }
        }
    },
    getDevice(pram, data) {
        cc.Tools.DeviceInfo = JSON.parse(data);
    },
    setAdTimes() {
        if (cc.sys.isNative) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getAdTimes", "()V");
        }
    },
    getPermission() {
        if (cc.sys.isNative) {
            console.log("cocos----getPermission");
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getPermission", "()V");
        }
    },
    getAdTimes(data) {
        cc.Tools.adTimes = Number(data);
    },
    /**
     * 获取当前的存钱罐的钱数
    */
    getFreeze() {
        if (cc.sys.isNative) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "setFreeze", "(Ljava/lang/String;Ljava/lang/String;)V", cc.Tools.userInfo.calendar_msg, cc.Tools.userInfo.calendar_timestamp);
        }
    },
    setDistinctId() {
        // console.log("cocos-----distinct_id=".cc.Tools.userInfo.distinct_id);
        if (cc.sys.isNative) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "setDistinctId", "(Ljava/lang/String;)V", cc.Tools.userInfo.distinct_id);
        }
    },
    setUserId() {
        // console.log("cocos-----user_id=".cc.Tools.userInfo.user_id);
        if (cc.sys.isNative) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "setUsertId", "(Ljava/lang/String;)V", cc.Tools.userInfo.user_id + "");
        }
    },
    setLevel() {
        // console.log("cocos-----level=",cc.Tools.userInfo.level);
        if (cc.sys.isNative) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getLevel", "(Ljava/lang/String;)V", cc.Tools.userInfo.level + "");
        }
    },
    //数数打点
    shuShuDot() {
        // console.log("cocos-----shuShu");
        if (cc.sys.isNative) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "startShuShu", "()V");
        }
    },
    adCallBack(pram) {
        let _pram = pram.split(",");
        let ecpm = _pram[0];
        let type = _pram[1];
        let sendData = {};
        this.getUserEcpm(ecpm, type).then((ad) => {
            // 点我领红包
            sendData = {
                "ad_id": ad,
                "ts": new Date().getTime(),//时间戳
                "type": parseInt(type),
                "action": "AdAward"
            };
            console.log("AdAward=", JSON.stringify(sendData));
            switch (type) {
                case "1":
                case "2":
                case "7":
                case "8":
                case "10":
                case "12":
                    cc.Tools.sendRequest("PipeAction", "POST", sendData).then((res) => {
                        this.emitEvent("getTicket", { ticket: res.amount, add: res.add_amount, type: 1, videoType: parseInt(type) });
                    })
                    break;
                case "3":
                    // 看视频转盘
                    this.emitEvent("getTable", ad);
                    break;
                case "4":
                    // 升级红包
                    cc.Tools.sendRequest("PipeAction", "POST", sendData).then((res) => {
                        this.emitEvent("getTicket", { ticket: res.amount, add: res.add_amount, type: 2, videoType: parseInt(type) });
                    })
                    break;
                case "5":
                    // 解冻红包
                    this.emitEvent("freeze", ad);
                    break;
                case "6":
                    // 存钱罐
                    this.emitEvent("saveCash", ad);
                    break;
                case "9":
                    //消除红包
                    cc.Tools.sendRequest("PipeAction", "POST", sendData).then((res) => {
                        this.emitEvent("getTicket", { ticket: res.amount, add: res.add_amount, type: 1, videoType: parseInt(type) });
                    })
                    break;
                case "11":
                    //提现视频
                    cc.Tools.sendRequest("PipeAction", "POST", sendData).then((res) => {
                        this.emitEvent("getTicket", { ticket: res.amount, add: res.add_amount, type: 1, videoType: parseInt(type) });
                    })
                    break;
                default:
                    break;
            }
        })
    },
    emitEvent(event, arg) {
        cc.Tools.Event.emit(event, arg);
    },
    // 显示激励视频
    showJiliAd(type) {
        if (cc.sys.isNative) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showAd", "(Ljava/lang/String;)V", "" + type);
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
    //显示信息流广告
    showFeedScreen(from) {
        if (cc.sys.isNative) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showFeedScreen", "()V");
        }
    },
    //隐藏信息流广告
    hideFeedScreen() {
        if (cc.sys.isNative) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideFeedScreen", "()V");
        }
    },
    wxShare(type) {
        if (cc.sys.isNative) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "weixin_share", "(I)V", type);
        }
    },
    // 微信登陆
    wxLogin() {
        if (cc.sys.isNative) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "weixin_login", "(Ljava/lang/String;)V", "weix1in_login");
        }
    },
    /**
    * 接收native微信授权的code
    * @param errCode 
    */
    wxLoginResult(errCode) {
        cc.Tools.emitEvent("getCode", errCode);
    },
    /**
     * 看广告之后刷新一下ecpm
     */
    getUserEcpm(ecpm, type) {
        // 获取ecpm之后像服务器发的是ecpm/100
        let serverEcpm = parseInt(ecpm / 100);
        return new Promise(function (resolve, reject) {
            let sendData = {
                "ecpm": serverEcpm,
                "ts": new Date().getTime(),//时间戳
                "type": parseInt(type)
            };
            let data = cc.Tools.createSignData(sendData);
            data.action = "Ecpm"
            cc.Tools.sendRequest("PipeAction", "POST", data).then((res) => {
                cc.Tools.reminderMsg = res.msg;
                resolve(res.ad_id);
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
        strToJiaMi = "token=" + cc.Tools.userInfo.sc1 + strToJiaMi;
        var hex_md5 = require("MD5")
        strToJiaMi = hex_md5(strToJiaMi);
        data.sign = strToJiaMi;
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
    showTips(n, str) {
        return new Promise(function (resolve, reject) {
            let tips = n.getChildByName("Tips");
            if (!tips) {
                reject();
            }
            let icon = tips.getChildByName("icon");
            let lbl = tips.getChildByName("lbl").getChildByName("text");
            if (str) {
                icon.active = false;
                lbl.parent.active = true;
                lbl.getComponent(cc.RichText).string = str;
            } else {
                icon.active = true;
                lbl.parent.active = false;
            }
            tips.stopAllActions();
            tips.zIndex = 9999;
            tips.y = 145;
            tips.opacity = 255;
            cc.tween(tips).to(1, { y: 300 }).delay(0.5).to(0.1, { opacity: 0 }).call(() => {
                resolve();
            }).start()
        })
    },
    /**
     * 接口加密
    */
    encryptData(data) {
        let encrypt = new JSEncrypt();
        encrypt.setPublicKey('-----BEGIN RSA Public Key-----' + Pubkey + '-----END RSA Public Key-----');
        let str = JSON.stringify(data);
        let encrypted = encrypt.encrypt(str);
        let backData = [];
        for (let i = 0; i < encrypted.length; i += 1000) {
            backData.push(encrypted.slice(i, i + 1000));
        }
        let obj = {

        }
        obj.data = backData
        return obj;
    },
    decryptData(encryptedData) {
        let parseData = "";
        for (let i = 0; i < encryptedData.length; i++) {
            let decrypt = new JSEncrypt();
            decrypt.setPrivateKey('-----BEGIN RSA Public Key-----' + Pubkey + '-----END RSA Public Key-----')
            let uncrypted = decrypt.decrypt(encryptedData[i]);
            parseData += uncrypted;
        }
        console.log('cocos----解密后数据:%o', parseData);
        return JSON.parse(parseData)
    },
    /**
     * 
     * @param {*} url 请求接口的url----pit.v1.PitSvc/UserInfo
     * @param {*} type 请求接口的类型 只能是GET--POST
     * @param {*} data 请求接口所需要的数据
     * @returns 
     */
    sendRequest: function (url, type, data) {
        return new Promise(function (resolve, reject) {
            let xhr = new XMLHttpRequest();
            let requestURL = "https://api.jiankangzhuan.com/api.Hbxxl/" + url;
            xhr.open(type, requestURL, true);
            if (cc.sys.isNative) {
                xhr.setRequestHeader("Accept-Encodeing", "gzip,deflate");
            }
            let wxToken = cc.sys.localStorage.getItem("token");
            if (wxToken) {
                xhr.setRequestHeader("Authorization", wxToken);
            }
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status == 200) {
                    // 统一处理
                    let _response = JSON.parse(xhr.response);
                    // 判断接口是否是加密接口
                    if (url.indexOf("Action") !== -1) {
                        if (_response.code === 0) {
                            //解密
                            resolve(cc.Tools.decryptData(_response.data.data))
                        } else {
                            reject(_response.message);
                        }
                    } else {
                        if (_response.code === 0) {
                            resolve(_response)
                        } else {
                            reject(_response.message);
                        }
                    }
                }
            }
            xhr.onerror = function () {
                reject(new Error(xhr.statusText))
            }
            if (url.indexOf("Action") !== -1) {
                xhr.send(JSON.stringify(cc.Tools.encryptData(data)));
            } else {
                xhr.send(JSON.stringify(data));
            }
        })
    },
    /**
     * 按钮呼吸动画
     * @param btn:cc.Node
     */
    breatheAnim(btn) {
        btn.stopAllActions();
        let action = cc.sequence(cc.scaleTo(0.5, 0.9), cc.scaleTo(0.5, 1))
        cc.tween(btn)
            .repeatForever(action)
            .start()
    },
    /**
     * 旋转动画
     * @param btn:cc.Node
     */
    rotateAnim(btn) {
        btn.stopAllActions();
        btn.angle = 0;
        let action = cc.sequence(cc.rotateBy(2, 360), cc.callFunc(() => {
            btn.angle = 0;
        }))
        cc.tween(btn)
            .repeatForever(action)
            .start()
    },
    /**
     * 停止节点动画
     */
    stopAnim(btn) {
        btn.stopAllActions();
    },
    /**
     * 
     * @param {动画节点} btn 
     */
    popAnim(btn) {
        btn.stopAllActions();
        let pos = btn.getPosition(cc.v2());
        let action1 = cc.moveTo(1, pos.x, pos.y + 10);
        let action2 = cc.moveTo(1, pos.x, 0);
        let action3 = cc.moveTo(1, pos.x, pos.y - 10);
        let action4 = cc.moveTo(1, pos.x, 0);
        let ac = [];
        ac.push(action1, action2, action3, action4);
        let action = cc.sequence(ac)
        cc.tween(btn)
            .repeatForever(action)
            .start()
    },
    /**
     * 按钮置灰
     */
    setButtonGary(btn) {
        let btnCom = btn.getComponent(cc.Button);
        btnCom.enableAutoGrayEffect = true;
        btnCom.interactable = false;
    },
    /**
     * 在一个范围内随机
     */
    createRandom(n, m) {
        ++m;
        let a = m - n;
        let num = Math.random() * a + n;
        return parseInt(num);
    }
}
cc.Tools.userInfo = {};
// cc.Tools.DeviceInfo = {};