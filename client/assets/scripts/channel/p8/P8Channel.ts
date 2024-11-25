import { JsonAsset, game, sys } from "cc";
import { TypeLanguage } from "../../logic/define/TypeLanguage";
import { BaseChannel } from "../BaseChannel";
import { tab } from "../../Table/table_gen";
import { Bridge } from "../../framework/Bridge";

export class P8Channel extends BaseChannel {
    channelType: tab.ChannelType = tab.ChannelType.ChannelType_PlayTW;
    basePhpUrl = "" //表里填写的

    private _isLoginSuc = false;//是否登录  
    init(): void {

    }

    login(params: any, callback: Function): void {
        // this._isLoginSuc = true;
        if (Bridge.isIos) {
            Bridge.callWithBack((param: string) => {
                console.log("ios login:", param, typeof (param))
                this.sdkLoginData = JSON.parse(param)
                this.loginUid = this.sdkLoginData.uid
                this.loginToken = this.sdkLoginData.sessionid
                callback({ code: 0 });
            }, "login:", null, params)
        } else if (Bridge.isAndroid) {
            Bridge.callWithBack((param: string) => {
                console.log("android login:", param)
                this.sdkLoginData = JSON.parse(param)
                this.loginUid = this.sdkLoginData.uid
                this.loginToken = this.sdkLoginData.sessionId
                callback({ code: this.sdkLoginData.code });
            }, "login", "(Ljava/lang/String;)V", params)
        }

    }
    isLogin() {
        return this._isLoginSuc;
    }
    logout(params: any, callback: Function): void {
        if (Bridge.isIos) {
            Bridge.callWithBack((param: string) => {
                console.log("ios logout:", param, typeof (param))
                this.sdkLoginData = null;
                var obj = JSON.parse(param)
                if (Number(obj.code) == 0) {
                    callback(obj);
                }
            }, "logout:", null, params)
        } else if (Bridge.isAndroid) {
            Bridge.callWithBack((param: string) => {
                this.sdkLoginData = null;
                var obj = JSON.parse(param)
                callback(obj);
            }, "logout", "(Ljava/lang/String;)V", params)
        }
    }
    exit(): void {
        if (Bridge.isIos) {
        } else if (Bridge.isAndroid) {
            console.log("########## P8Channel exitGame android");
            Bridge.callWithBack(null, "exitGame", "()V")
        }
    }
    exitApp(param: any) {
        game.end()
    }
    pay(params: any, callback: Function): void {
        if (Bridge.isIos) {
            Bridge.callWithBack((param: string) => {
                console.log("ios pay:", param, typeof (param))
                callback();
            }, "pay:", null, params)
        } else if (Bridge.isAndroid) {

            Bridge.callWithBack((param: string) => {
                console.log("android pay:", param)
                callback();
            }, "pay", "(Ljava/lang/String;)V", params)
        }
    }
    /**
     * 获得php服务器地址
     * @returns 
     */
    getBasePhpUrl(): string {
        return this.basePhpUrl;
    }
    loginServer(callback: Function) {

    }
    intoServer(params: any): void {
        if (Bridge.isIos) {
            console.log("########## P8Channel intoServer ios", params);
            //iOS注意函数签名，注意与Android的不同
            Bridge.callWithBack(function (retData) {
                console.log("########## P8Channel intoServer ret ios", retData);
                var obj = JSON.parse(retData)
            }, "intoServer:", null, params);
        }
        else if (Bridge.isAndroid) {
            console.log("########## P8Channel intoServer android  " + params);
            Bridge.callWithBack(function (retData) {
                console.log("########## P8Channel intoServer ret android", retData);
                var obj = JSON.parse(retData)
            }, "intoServer", "(Ljava/lang/String;)V", params);
        }
    }
    createRole(params: any): void {
        if (Bridge.isIos) {
            console.log("########## P8Channel createRole ios", params);
            //iOS注意函数签名，注意与Android的不同
            Bridge.callWithBack(function (retData) {
                console.log("########## P8Channel createRole ret ios", retData);
                var obj = JSON.parse(retData)
            }, "createRole:", null, params);
        }
        else if (Bridge.isAndroid) {
            console.log("########## P8Channel createRole android " + params);
            Bridge.callWithBack(function (retData) {
                console.log("########## P8Channel createRole ret android", retData);
                var obj = JSON.parse(retData)
            }, "createRole", "(Ljava/lang/String;)V", params);
        }
    }
    roleLevelUp(params: any): void {
        if (Bridge.isIos) {
            console.log("########## P8Channel roleLevelUp ios", params);
            //iOS注意函数签名，注意与Android的不同
            Bridge.callWithBack(function (retData) {
                console.log("########## P8Channel roleLevelUp ret ios", retData);
                var obj = JSON.parse(retData)
            }, "roleLevelUp:", null, params);
        }
        else if (Bridge.isAndroid) {
            console.log("########## P8Channel roleLevelUp android " + params);
            Bridge.callWithBack(function (retData) {
                console.log("########## P8Channel roleLevelUp ret android ", retData);
                var obj = JSON.parse(retData)
            }, "roleLevelUp", "(Ljava/lang/String;)V", params);
        }
    }
    accountUpgrade(): void {
        if (Bridge.isIos) {
            console.log("########## P8Channel accountUpgrade ios");
            //iOS注意函数签名，注意与Android的不同
            Bridge.callWithBack(function (retData) {
                console.log("########## P8Channel accountUpgrade ret ios");
            }, "accountUpgrade");
        }
        else if (Bridge.isAndroid) {
            console.log("########## P8Channel accountUpgrade android");
            Bridge.callWithBack(function (retData) {
                console.log("########## P8Channel accountUpgrade ret android");
            }, "accountUpgrade");
        }
    }
    accountCenter(params: any): void {
        if (Bridge.isIos) {
            console.log("########## P8Channel accountCenter ios", params);
            //iOS注意函数签名，注意与Android的不同
            Bridge.callWithBack(function (retData) {
                console.log("########## P8Channel accountCenter ret ios", retData);
                var obj = JSON.parse(retData)
            }, "accountCenter:", null, params);
        }
        else if (Bridge.isAndroid) {
            //p8安卓没有用户中心
            // console.log("########## P8Channel accountCenter android");
            // Bridge.callWithBack(function (retData) {
            //     console.log("########## P8Channel accountCenter ret android", retData);
            //     var obj = JSON.parse(retData)
            // }, "accountCenter", "(Ljava/lang/String;)V", params);
        }
    }
    initRewardedAd(params: any, callback: Function): void {
        if (Bridge.isIos) {
            console.log("########## P8Channel initRewardedAd ios", params);
            //iOS注意函数签名，注意与Android的不同
            Bridge.callWithBack(function (retData) {
                console.log("########## P8Channel initRewardedAd ret ios", retData);
                var obj = JSON.parse(retData)
                callback(obj);
            }, "initRewardedAd:", null, params);
        }
        else if (Bridge.isAndroid) {
            console.log("########## P8Channel initRewardedAd android");
            Bridge.callWithBack(function (retData) {
                console.log("########## P8Channel initRewardedAd ret android", retData);
                var obj = JSON.parse(retData)
                callback(obj);
            }, "initRewardedAd", "(Ljava/lang/String;)V", params);
        }
    }
    showRewardedAd(): void {
        if (Bridge.isIos) {
            console.log("########## P8Channel showRewardedAd ios");
            //iOS注意函数签名，注意与Android的不同
            Bridge.call("showRewardedAd");
        }
        else if (Bridge.isAndroid) {
            console.log("########## P8Channel initRewardedAd android");
            Bridge.call("showRewardedAd");
        }
    }
    comment(params: any, callback: Function): void {
        var self = this;
        if (Bridge.isIos) {
            console.log("########## P8Channel comment ios");
            //iOS注意函数签名，注意与Android的不同
            Bridge.callWithBack(function (retData) {
                console.log("########## P8Channel comment ret ios");
                self.sdkLoginData = null;
                var obj = JSON.parse(retData)
                callback(obj);
            }, "comment:", null,JSON.stringify(params));
        }
        else if (Bridge.isAndroid) {
            console.log("########## P8Channel comment android");
            // Bridge.call("comment", JSON.stringify(params));
            Bridge.callWithBack(null, "comment", "(Ljava/lang/String;)V", JSON.stringify(params));
            callback({code:0});
            //因为playe800 安卓没有评价没有成功回调 只要调起sdk评分方法就算成功
          
        }
    }
    share(params: any, callback: Function): void {
        var self = this;
        if (Bridge.isIos) {
            params.url="https://www.mcjdhjj.com/chick/shareFB/game_share_fb.jpg";
            params.des = "超雞小隊，全軍出雞，所向披靡！";
            console.log("########## P8Channel share ios");
            //iOS注意函数签名，注意与Android的不同
            Bridge.callWithBack(function (retData) {
                console.log("########## P8Channel share ret ios");
                self.sdkLoginData = null;
                var obj = JSON.parse(retData)
                callback(obj);
            }, "share:", null,JSON.stringify(params));
        }
        else if (Bridge.isAndroid) {
            params.url="https://www.mcjdhjj.com/chick/shareFB/game_share_fb.jpg"
            console.log("########## P8Channel share android");
            Bridge.callWithBack(function (retData) {
                console.log("########## P8Channel share ret android");
                self.sdkLoginData = null;
                var obj = JSON.parse(retData)
                callback(obj);
            }, "share",  "(Ljava/lang/String;)V",JSON.stringify(params));
        }
    }
    community(): void {

    }

    getVersionPhpUrl() {
        return this.basePhpUrl + "version_play800.php";
    }

    getRandomNameFile(): string {
        return "radom_name_en.xml";
    }

    getSdkRechargePrice(p_data: tab.RechargeTable) {
        return p_data.PriceDollar / 100;
    }
    getRechargeCurrency() {
        return "ui_commondesc_73";
    }

    postEvent(params: any) {
        console.log("上报打点事件===" + JSON.stringify(params));
        if (Bridge.isIos) {
            console.log("########## P8Channel postEvent ios", params);
            //iOS注意函数签名，注意与Android的不同
            Bridge.call("postEvent:", null, JSON.stringify(params));
        }
        else if (Bridge.isAndroid) {
            console.log("########## P8Channel postEvent android " + params);
            Bridge.call("postEvent", "(Ljava/lang/String;)V", JSON.stringify(params));
        }
    }
}