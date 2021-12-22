var Pubkey = `-----BEGIN 公钥-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAk+89V7vpOj1rG6bTAKYM
56qmFLwNCBVDJ3MltVVtxVUUByqc5b6u909MmmrLBqS//PWC6zc3wZzU1+ayh8xb
UAEZuA3EjlPHIaFIVIz04RaW10+1xnby/RQE23tDqsv9a2jv/axjE/27b62nzvCW
eItu1kNQ3MGdcuqKjke+LKhQ7nWPRCOd/ffVqSuRvG0YfUEkOz/6UpsPr6vrI331
hWRB4DlYy8qFUmDsyvvExe4NjZWblXCqkEXRRAhi2SQRCl3teGuIHtDUxCskRIDi
aMD+Qt2Yp+Vvbz6hUiqIWSIH1BoHJer/JOq2/O6X3cmuppU4AdVNgy8Bq236iXvr
MQIDAQAB
-----END 公钥-----`
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
    /**
     * 获取当前的存钱罐的钱数
    */
    getFreeze() {
        if (cc.sys.isNative) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "setFreeze", "(Ljava/lang/String;Ljava/lang/String;)V", cc.Tools.userInfo.calendar_msg, cc.Tools.userInfo.calendar_timestamp);
        }
    },
    setDistinctId() {
        if (cc.sys.isNative) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "setDistinctId", "(Ljava/lang/String;)V", cc.Tools.userInfo.distinct_id);
        }
    },
    setUserId() {
        if (cc.sys.isNative) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "setUsertId", "(Ljava/lang/String;)V", cc.Tools.userInfo.user_id + "");
        }
    },
    setLevel() {
        if (cc.sys.isNative) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getLevel", "(Ljava/lang/String;)V", cc.Tools.userInfo.level);
        }
    },
    //数数打点
    shuShuDot() {
        if (cc.sys.isNative) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "startShuShu", "()V");
        }
    },
    /**
     * 看视频回调
     *  //type 1点我领红包 2悬浮红包 3转盘红包 4升级红包 5解冻红包 6存钱罐 7点我领红包(进度不是100%状态) 8超级红包 9连续消除 10雪人红包 11其他不重要的通用接口
     */
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
                "action":"AdAward"
            };
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
                case "20":
                    //插屏
                    break;
                case "21":
                    //全屏
                    break;
                case "22":
                    //信息流
                    break;
                case "23":
                    //banner
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
        // 单价
        let priceEcpm = Number(ecpm / (10 * 10000));
        return new Promise(function (resolve, reject) {
            if (type === "20") {
                // 插屏
                cc.Tools.dot("ad_flow", { ecpm: serverEcpm, ad_price: priceEcpm });
                resolve();
            } else if (type === "21") {
                // 开屏
                // cc.Tools.dot("ad_open_screen", { ecpm: serverEcpm, ad_price: priceEcpm });
                resolve();
            } else if (type === "22") {
                // 信息流
                cc.Tools.dot("ad_nativie", { ecpm: serverEcpm, ad_price: priceEcpm });
                resolve();
            } else if (type === "23") {
                // 信息流
                cc.Tools.dot("ad_banner", { ecpm: serverEcpm, ad_price: priceEcpm });
                resolve();
            } else {
                let sendData = {
                    "ecpm": serverEcpm,
                    "ts": new Date().getTime(),//时间戳
                    "type": parseInt(type),
                    "action":"Ecpm"
                };
                let data = cc.Tools.createSignData(sendData);
                // // 刷新用户ecpm
                // cc.Tools.sendRequest("Ecpm", "POST", data).then((res) => {
                //     resolve(res.data.ad_id);
                // })
                cc.Tools.sendRequest("PipeAction", "POST", data).then((res) => {
                    resolve(res.ad_id);
                })
            }
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
        encrypt.setPublicKey('-----BEGIN 公钥-----' + Pubkey + '-----END 公钥-----');
        // encrypt.setPublicKey('-----BEGIN 私钥-----' + prikey + '-----END 私钥-----');
        let str = JSON.stringify(data);
        let encrypted = encrypt.encrypt(str);
        console.log('加密前数据:%o', str);
        console.log('加密后数据:%o', encrypted);
        let backData = [];
        for(let i=0;i<encrypted.length;i+=1000){
            backData.push(encrypted.slice(i,i+1000));
        }
        console.log("backData=",backData);
        let obj = {

        }
        obj.data = backData
        return obj;
    },
    decryptData(encryptedData) {
        //使用私钥解密
        console.log("encryptedData=",encryptedData);
        // 解密之后的
        let parseData = "";
        for(let i=0;i<encryptedData.length;i++){
            let decrypt = new JSEncrypt();
            // decrypt.setPrivateKey('-----BEGIN 私钥-----' + prikey + '-----END 私钥-----');
            decrypt.setPrivateKey('-----BEGIN 公钥-----' + Pubkey + '-----END 公钥-----')
            let uncrypted = decrypt.decrypt(encryptedData[i]);
            console.log("uncrypted==",uncrypted);
            parseData+=uncrypted;
        }
        console.log('解密后数据:%o', parseData);
        return encryptedData
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
            // let requestURL = "http://192.168.3.10:8805/api.Hbxxl/"+url;        
            // Ecpm CashOut
            // type.toUpperCase()转换成大写
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
                    if(url.indexOf("Action")){
                        if (_response.code === 0) {
                            //解密
                            resolve(cc.Tools.decryptData(_response.data.data))
                        } else {
                            reject(_response.message);
                        }
                    }else{
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
            if(url.indexOf("Action")){
                // this.encryptData(data)
                xhr.send(JSON.stringify(cc.Tools.encryptData(data)));
            }else{
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