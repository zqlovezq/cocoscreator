import { JsonAsset, game, settings, sys } from "cc";
import { TypeLanguage } from "../../logic/define/TypeLanguage";
import { BaseChannel } from "../BaseChannel";
import { tab } from "../../Table/table_gen";
import { Bridge } from "../../framework/Bridge";
import { CommonTipsPop } from "../../logic/model/common/CommonTipsPop";
import { EventMgr } from "../../logic/mgr/EventMgr";
import { proto } from "client_protocol";
import { RoleData } from "../../logic/model/role/RoleData";
import { LangMgr } from "../../logic/mgr/LangMgr";

export class JP37Channel extends BaseChannel {
    channelType: tab.ChannelType = tab.ChannelType.ChannelType_PlayTW;
    basePhpUrl = "" //表里填写的

    public constructor() {
        super()
        EventMgr.onMsg(proto.Ptl.Mobile37PopupsPush, this.on_s2c_Mobile37PopupsPush, this)
        EventMgr.onMsg(proto.Ptl.LoginRsp, this.on_s2c_LoginRsp, this)
    }

    private _isLoginSuc = false;//是否登录  
    popBtns: Map<number, proto.IMobile37PopupInfo> = new Map()
    init(): void {
        this.gameInitSuccess()
        this.gameSplashScreenStart()
        this.registerChangeAccountEvent()
        this.registerLogoutEvent()
        
    }

    registerChangeAccountEvent(){
        Bridge.addEvent("changeAccount",()=>{
            CommonTipsPop.create(LangMgr.getLab("Tips_changeaccount_1"),()=>{
                this.roleLogoutServer(JSON.stringify(RoleData.ins.sdkRole()))
                setTimeout(() => {
                    game.restart()
                }, 500);
            })
        })
    }

    registerLogoutEvent(){
        Bridge.addEvent("logout",()=>{
            CommonTipsPop.create(LangMgr.getLab("Tips_logout_1"),()=>{
                this.roleLogoutServer(JSON.stringify(RoleData.ins.sdkRole()))
                setTimeout(() => {
                    game.restart()
                }, 500);
            })
        })
    }

    gameSplashScreenStart() {
        console.log("########## JP37Channel gameSplashScreenStart");
        if (Bridge.isIos) {
            Bridge.call("gameSplashScreenStart");
        } else if (Bridge.isAndroid) {
            Bridge.call("gameSplashScreenStart", "()V");
        }
    }
    gameServerPage() {
        console.log("########## JP37Channel gameServerPage");
        if (Bridge.isIos) {
            Bridge.call("gameServerPage");
        } else if (Bridge.isAndroid) {
            Bridge.call("gameServerPage", "()V");
        }
    }

    gameInitSuccess() {
        // console.log("########## JP37Channel gameInitSuccess");
        // if (Bridge.isIos) {
        //     Bridge.call("gameInitSuccess");
        // } else if (Bridge.isAndroid) {
        //     Bridge.call("gameInitSuccess", "()V");
        // }
    }

    gameHotfixStart() {
        console.log("########## JP37Channel gameHotfixStart");
        if (Bridge.isIos) {
            Bridge.call("gameHotfixStart");
        } else if (Bridge.isAndroid) {
            Bridge.call("gameHotfixStart", "()V");
        }
    }

    gameHotfixSuccess() {
        console.log("########## JP37Channel gameHotfixSuccess");
        if (Bridge.isIos) {
            Bridge.call("gameHotfixSuccess");
        } else if (Bridge.isAndroid) {
            Bridge.call("gameHotfixSuccess", "()V");
        }
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
        // if (Bridge.isIos) {
        //     Bridge.callWithBack((param: string) => {
        //         console.log("ios logout:", param, typeof (param))
        //         this.sdkLoginData = null;
        //         var obj = JSON.parse(param)
        //         if (Number(obj.code) == 0) {
        //             callback(obj);
        //         }
        //     }, "logout:", null, params)
        // } else if (Bridge.isAndroid) {
        //     Bridge.callWithBack((param: string) => {
        //         this.sdkLoginData = null;
        //         var obj = JSON.parse(param)
        //         callback(obj);
        //     }, "logout", "(Ljava/lang/String;)V", params)
        // }
    }
    exit(): void {
        if (Bridge.isIos) {
        } else if (Bridge.isAndroid) {
            console.log("########## JP37Channel exitGame android");
            Bridge.callWithBack(() => {
                this.exitApp("")
            }, "exitGame", "()V")
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
            console.log("########## JP37Channel intoServer ios", params);
            //iOS注意函数签名，注意与Android的不同
            Bridge.callWithBack(function (retData) {
                console.log("########## JP37Channel intoServer ret ios", retData);
                var obj = JSON.parse(retData)
            }, "intoServer:", null, params);
        }
        else if (Bridge.isAndroid) {
            console.log("########## JP37Channel intoServer android  " + params);
            Bridge.callWithBack(function (retData) {
                console.log("########## JP37Channel intoServer ret android", retData);
                var obj = JSON.parse(retData)
            }, "intoServer", "(Ljava/lang/String;)V", params);
        }
    }
    createRole(params: any): void {
        if (Bridge.isIos) {
            console.log("########## JP37Channel createRole ios", params);
            //iOS注意函数签名，注意与Android的不同
            Bridge.callWithBack(function (retData) {
                console.log("########## JP37Channel createRole ret ios", retData);
                var obj = JSON.parse(retData)
            }, "createRole:", null, params);
        }
        else if (Bridge.isAndroid) {
            console.log("########## JP37Channel createRole android " + params);
            Bridge.callWithBack(function (retData) {
                console.log("########## JP37Channel createRole ret android", retData);
                var obj = JSON.parse(retData)
            }, "createRole", "(Ljava/lang/String;)V", params);
        }
    }
    roleLevelUp(params: any): void {
        if (Bridge.isIos) {
            console.log("########## JP37Channel roleLevelUp ios", params);
            //iOS注意函数签名，注意与Android的不同
            Bridge.callWithBack(function (retData) {
                console.log("########## JP37Channel roleLevelUp ret ios", retData);
                var obj = JSON.parse(retData)
            }, "roleLevelUp:", null, params);
        }
        else if (Bridge.isAndroid) {
            console.log("########## JP37Channel roleLevelUp android " + params);
            Bridge.callWithBack(function (retData) {
                console.log("########## JP37Channel roleLevelUp ret android ", retData);
                var obj = JSON.parse(retData)
            }, "roleLevelUp", "(Ljava/lang/String;)V", params);
        }
    }
    roleLogoutServer(params: any): void {
        if (Bridge.isIos) {
            console.log("########## JP37Channel roleLogoutServer ios", params);
            //iOS注意函数签名，注意与Android的不同
            Bridge.call("roleLogout:", null, params);
        }
        else if (Bridge.isAndroid) {
            console.log("########## JP37Channel roleLogoutServer android " + params);
            Bridge.call("roleLogout", "(Ljava/lang/String;)V", params);
        }
    }

    roleCompleteTutorial(params: any): void {
        if (Bridge.isIos) {
            console.log("########## JP37Channel roleCompleteTutorial ios", params);
            //iOS注意函数签名，注意与Android的不同
            Bridge.call("completeTutorial:", null, params);
        }
        else if (Bridge.isAndroid) {
            console.log("########## JP37Channel roleCompleteTutorial android " + params);
            Bridge.call("completeTutorial", "(Ljava/lang/String;)V", params);
        }
    }

    accountUpgrade(): void {
        if (Bridge.isIos) {
            console.log("########## JP37Channel accountUpgrade ios");
            //iOS注意函数签名，注意与Android的不同
            Bridge.callWithBack(function (retData) {
                console.log("########## JP37Channel accountUpgrade ret ios");
            }, "accountUpgrade");
        }
        else if (Bridge.isAndroid) {
            console.log("########## JP37Channel accountUpgrade android");
            Bridge.callWithBack(function (retData) {
                console.log("########## JP37Channel accountUpgrade ret android");
            }, "accountUpgrade");
        }
    }
    accountCenter(params: any): void {
        if (Bridge.isIos) {
            console.log("########## JP37Channel accountCenter ios", params);
            //iOS注意函数签名，注意与Android的不同
            Bridge.callWithBack(function (retData) {
                console.log("########## JP37Channel accountCenter ret ios", retData);
                var obj = JSON.parse(retData)
            }, "accountCenter:", null, params);
        }
        else if (Bridge.isAndroid) {
            //p8安卓没有用户中心
            console.log("########## JP37Channel accountCenter android");
            Bridge.callWithBack(function (retData) {
                console.log("########## JP37Channel accountCenter ret android", retData);
                var obj = JSON.parse(retData)
            }, "accountCenter", "(Ljava/lang/String;)V", params);
        }
    }
    initRewardedAd(params: any, callback: Function): void {
        if (Bridge.isIos) {
            console.log("########## JP37Channel initRewardedAd ios", params);
            //iOS注意函数签名，注意与Android的不同
            Bridge.callWithBack(function (retData) {
                console.log("########## JP37Channel initRewardedAd ret ios", retData);
                var obj = JSON.parse(retData)
                callback(obj);
            }, "initRewardedAd:", null, params);
        }
        else if (Bridge.isAndroid) {
            console.log("########## JP37Channel initRewardedAd android");
            Bridge.callWithBack(function (retData) {
                console.log("########## JP37Channel initRewardedAd ret android", retData);
                var obj = JSON.parse(retData)
                callback(obj);
            }, "initRewardedAd", "(Ljava/lang/String;)V", params);
        }
    }
    showRewardedAd(): void {
        if (Bridge.isIos) {
            console.log("########## JP37Channel showRewardedAd ios");
            //iOS注意函数签名，注意与Android的不同
            Bridge.call("showRewardedAd");
        }
        else if (Bridge.isAndroid) {
            console.log("########## JP37Channel initRewardedAd android");
            Bridge.call("showRewardedAd");
        }
    }
    comment(params: any, callback: Function): void {
        var self = this;
        if (Bridge.isIos) {
            console.log("########## JP37Channel comment ios");
            //iOS注意函数签名，注意与Android的不同
            Bridge.call("comment:", null, JSON.stringify(params));
            callback({ code: 0 });
        }
        else if (Bridge.isAndroid) {
            console.log("########## JP37Channel comment android");
            // Bridge.call("comment", JSON.stringify(params));
            Bridge.call("comment", "(Ljava/lang/String;)V", JSON.stringify(params));
            callback({ code: 0 });
            //因为playe800 安卓没有评价没有成功回调 只要调起sdk评分方法就算成功

        }
    }
    share(params: any, callback: Function): void {
        var self = this;
        params.shareType = "facebook"
        if (Bridge.isIos) {
            console.log("########## JP37Channel share ios");
            //iOS注意函数签名，注意与Android的不同
            Bridge.callWithBack(function (retData) {
                console.log("########## JP37Channel share ret ios");
                self.sdkLoginData = null;
                var obj = JSON.parse(retData)
                callback(obj);
            }, "share:", null, JSON.stringify(params));
        }
        else if (Bridge.isAndroid) {
            console.log("########## JP37Channel share android");
            Bridge.callWithBack(function (retData) {
                console.log("########## JP37Channel share ret android");
                self.sdkLoginData = null;
                var obj = JSON.parse(retData)
                callback(obj);
            }, "share", "(Ljava/lang/String;)V", JSON.stringify(params));
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
        return p_data.PriceJPY;
    }
    getRechargeCurrency() {
        return "ui_commondesc_73";
    }

    postEvent(params: any) {
        console.log("上报打点事件===" + JSON.stringify(params));
        // if (Bridge.isIos) {
        //     console.log("########## JP37Channel postEvent ios", params);
        //     //iOS注意函数签名，注意与Android的不同
        //     Bridge.call("postEvent:", null, JSON.stringify(params));
        // }
        // else if (Bridge.isAndroid) {
        //     console.log("########## JP37Channel postEvent android " + params);
        //     Bridge.call("postEvent", "(Ljava/lang/String;)V", JSON.stringify(params));
        // }
    }

    openActionWebView(url: string) {
        if (Bridge.isIos) {
            //iOS注意函数签名，注意与Android的不同
            console.log("########## JP37Channel openActionWebView ret ios", url);
            Bridge.call("openActionWebView:", null, url);
        }
        else if (Bridge.isAndroid) {
            console.log("########## JP37Channel openActionWebView android " + url);
            Bridge.call("openActionWebView", "(Ljava/lang/String;)V", url);
        }else {
            console.log("########## JP37Channel openActionWebView pc " + url);
        }
    }

    openCustomService() {
        if (Bridge.isIos) {
            console.log("########## JP37Channel openCustomService ios");
            Bridge.call("openCustomService:", null, "");
        }
        else if (Bridge.isAndroid) {
            console.log("########## JP37Channel openCustomService android");
            Bridge.call("openCustomService", "(Ljava/lang/String;)V", "");
        }
    }

    on_s2c_LoginRsp(){
        this.popBtns.clear()
    }
    on_s2c_Mobile37PopupsPush(msg:proto.Msg_Mobile37PopupsPush){
        for (let index = 0; index < msg.popups.length; index++) {
            const v = msg.popups[index];
            this.popBtns.set(v.type,v)
        }
    }

    //商品
    products:any = null
    getShopInfo(param:string): void {
        if (Bridge.isIos) {
            //iOS注意函数签名，注意与Android的不同
            console.log("########## JP37Channel getShopInfo ret ios", param);
            Bridge.callWithBack((ret)=>{
                console.log("########## JP37Channel getShopInfo ret ios",ret);
                this.products = JSON.parse(ret)
            },"getShopInfo:", null, param);
        }
        else if (Bridge.isAndroid) {
            console.log("########## JP37Channel getShopInfo android " + param);
            Bridge.callWithBack((ret)=>{
                console.log("########## JP37Channel getShopInfo ret android",ret);
                this.products = JSON.parse(ret)
            },"getShopInfo", "(Ljava/lang/String;)V", param);
        }else {
            console.log("########## JP37Channel getShopInfo pc " + param);
        }
    }

    getSdkRechargeShowPrice(p_data: tab.RechargeTable) {
        if (this.products && this.products[p_data.ProductId37JP]){
            let key = "priceStr"
            if(Bridge.isIos){
                key = "price"
            }
            return this.products[p_data.ProductId37JP][key]
        }
    }
}