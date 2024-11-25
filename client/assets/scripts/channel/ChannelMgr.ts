import { EventKeyboard, Input, KeyCode, input, sys } from "cc";
import { Bridge } from "../framework/Bridge";
import { TypeLanguage } from "../logic/define/TypeLanguage";
import { BaseChannel } from "./BaseChannel";
import { DevChannel } from "./dev/DevChannel";
import { Global } from "../Global";
import Http from "../logic/net/Http";
import { CommonTipsPop, CommonTipsPopCloseType } from "../logic/model/common/CommonTipsPop";
import { tab } from "../Table/table_gen";
import { Func } from "../logic/utils/Func";
import { P8Channel } from "./p8/P8Channel";
import Waiting, { WaitingTag } from "../Common/script/Waiting";
import { LoginData } from "../logic/model/login/LoginData";
import { RoleData } from "../logic/model/role/RoleData";
import { LangMgr } from "../logic/mgr/LangMgr";
import { P8PostEventName } from "./ChannelDefine";
import { PREVIEW } from "cc/env";
import { JP37Channel } from "./jp37/JP37Channel";


class ChannelManager {
    private static _instance: ChannelManager;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new ChannelManager();
        }
        return this._instance;
    }

    private channel: BaseChannel = null;
    private channelType: tab.ChannelType;
    public channelTab: tab.ChannelTable
    init() {
        Bridge.init()
        let type = this.getChannelType();
        console.log("channelType", type)
        this.channelType = type;
        Global.channelType = this.channelType
        switch (type) {
            case tab.ChannelType.ChannelType_None:
                this.channel = new DevChannel();
                break;
            case tab.ChannelType.ChannelType_PlayTW:
                this.channel = new P8Channel();
                break
            case tab.ChannelType.ChannelType_G37JP:
                this.channel = new JP37Channel()
                break
            default:
                console.error(["########## 未定义的channelType", type].join(' '));
                break;
        }
        if (this.channel) {
            this.channel.init();
        }
        this.channelTab = tab.getData().ChannelTableByChannelType.getValue(this.channelType)
        if (this.channelTab == null) {
            console.error("未找到渠道配置-------", this.channelType)
            return
        }
        this.setGloble()
        this.channel.basePhpUrl = Global.isRelease ? this.channelTab.BaseUrl : this.channelTab.BaseUrlTest
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    }
    onKeyDown(event: EventKeyboard){
        if (event.keyCode === KeyCode.BACKSPACE) {
            CommonTipsPop.create("Tips_exit_1",(_type:CommonTipsPopCloseType)=>{
                if(_type == CommonTipsPopCloseType.confirm){
                    this.exitGame(true)
                }
            })
        }
    }

    setGloble() {
        Global.APP_TYPE = this.getAppType()

        Global.platform = Bridge.getPlatform()
        Global.APP_VERSION = this.getAppVersionName()
        Global.HOT_UPDATE_PATH = Global.isRelease ? this.channelTab.HotUpdateUrl : this.channelTab.HotUpdateUrlTest
    }

    /** 返回默认语言 */
    getDefaultLanguage(): number {
        return this.channelTab.BaseLanguage
    }

    /** 返回语言列表 */
    getLanguageList(): number[] {
        return this.channelTab.LanguageList
    }

    /** 获取默认服务器id */
    getDefaultServerId() {
        return Global.isRelease ? this.channelTab.DefultID : this.channelTab.TestSeverID
    }


    /**
     * 是否开发模式
     * @returns 
     */
    get isDevChannel() {
        return this.channelType == tab.ChannelType.ChannelType_None;
    }

    get isP8(){
        return this.channelType == tab.ChannelType.ChannelType_PlayTW;
    }

    /** 是否为日本37 */
    get isJp37() {
        return this.channelType == tab.ChannelType.ChannelType_G37JP;
    }

    getChannel(){
        return this.channel
    }

    enterGameStart(){
        
    }


    login(params: any, callback: Function) {
        if (this.channel) {
            params = params || ""
            this.channel.login(JSON.stringify(params), (obj: any) => {
                this.getShopInfo()
                callback && callback(obj)
            });
        }
    }

    pay(params: any) {
        if (this.channel) {
            Waiting.Show(WaitingTag.PAY, 0)
            params = params || ""
            this.channel.pay(JSON.stringify(params), (obj: any) => {
                Waiting.Hide(WaitingTag.PAY)
            });
        }
    }

    getToken() {
        return this.channel.loginToken
    }

    getUid() {
        return this.channel.loginUid
    }

    isLogin() {
        if (this.channel) {
            return this.channel.isLogin();
        } else {
            return false;
        }
    }

    getSdkLoginData() {
        return this.channel.sdkLoginData
    }

    logout(params: any, callback: Function) {
        if (this.channel) {
            this.channel.logout(params, callback);

        }
    }

    /**
    * 获得包类型， 0测试、1正式
    */
    public getAppType() {
        let code = Global.APP_TYPE
        if (Bridge.isIos) {
            code = Bridge.call("getAppType");
        } else if (Bridge.isAndroid) {
            code = Bridge.call("getAppType", "()I");
        }
        return Func.checkInt(code)
    }

    /**
    * 获取渠道类型
    */
    getChannelType() {
        if (Bridge.isIos) {
            return Bridge.call("getChannelType");
        } else if (Bridge.isAndroid) {
            return Bridge.call("getChannelType", "()I");
        }
        return tab.ChannelType.ChannelType_None;
    }

    /**
    * 获得app版本号  1.0.0
    */
    public getAppVersionName() {
        let code
        if (Bridge.isIos) {
            code = Bridge.call("getAppVersionName");
        } else if (Bridge.isAndroid) {
            code = Bridge.call("getAppVersionName", "()Ljava/lang/String;");
        }

        let v = Global.APP_VERSION;
        if (code == undefined || code == "") {
            console.log('getJsbVersionName ret = undefined');
        }
        else {
            v = code;
        }
        return v;
    }
    /**
   * 获得app版本号  1
   */
    public getAppVersionCode() {
        let code
        if (Bridge.isIos) {
            code = Bridge.call("getAppVersionCode");
        } else if (Bridge.isAndroid) {
            code = Bridge.call("getAppVersionCode", "()Ljava/lang/String;");
        }

        let v = 1;
        if (code == undefined || code == "") {
            console.log('getJsbVersionCode ret = undefined');
        }
        else {
            v = Number(code);
        }
        return v;
    }


    /**
     * 是否sdk初始化成功
     */
    public isSdkInitOk() {
        let type = 0
        if (Bridge.isIos) {
            type = Bridge.call("getInitSdkOk");
        } else if (Bridge.isAndroid) {
            type = Bridge.call("getInitSdkOk", "()I");
        }
        return type;
    }

    /**
     * 切换语言
     * @param params 
     */
    changeLanguage(params: any) {
        if (this.channel) {
            this.channel.changeLanguage(params);
        }
    }

    /**
    * 获得线上远程版本配置并初始化游戏设置
    * @param callback 完成回调函数
    */
    public initOnLineVersion(callback: Function) {
        if (PREVIEW) {
            Global.IS_REVIEW = false
            Global.ONLINE_VERSION = "1.0.0"
            Global.ONLINE_RES_VERSION = "1.0.0"
            callback && callback()
            return
        }


        let doGet = () => {
            let addr = this.channel.getBasePhpUrl() + "check-is-review"
            let reqParam = `ch=${this.channelType}&ver=${Global.APP_VERSION}&platform=${Global.platform}`


            Http.request({
                host: addr,
                method: "GET",
                reqParam: reqParam,
                cb: (responseJson) => {
                    console.log(responseJson)
                    if (responseJson) {
                        Global.IS_REVIEW = responseJson.is_review
                        Global.ONLINE_VERSION = responseJson.package_version || "1.0.0"
                        Global.ONLINE_RES_VERSION = responseJson.version || "1.0.0"
                        Global.print()
                        if (Func.compareVersion(Global.APP_VERSION, Global.ONLINE_VERSION) < 0) {//线上版本大于本地版本， 需要更新，跳转商店
                            CommonTipsPop.create(LangMgr.getLab("Tips_connection_2"), () => {
                                this.jumpStore()
                            })
                            return
                        }
                        callback && callback()
                    } else {
                        CommonTipsPop.create(LangMgr.getLab("Tips_connection_1"), () => {
                            doGet()
                        })
                    }
                }
            })
        }
        doGet()
    }

    jumpStore() {
        let jumpUrl = ""
        if (Bridge.isIos) {
            jumpUrl = this.channelTab.IosStoreUrl;

        } else if (Bridge.isAndroid) {
            jumpUrl = this.channelTab.AndroidStoreUrl;
        }
        this.openURL(jumpUrl);
    }


    /**
     * 跳转到浏览器
     * @param url 地址
     */
    openURL(url: string) {
        if (Bridge.isIos) {
            Bridge.call("openURL:", null, url);
        }
        else if (Bridge.isAndroid) {
            Bridge.call("openURL", "(Ljava/lang/String;)V", url);
        }else{
            console.log("pc打开链接",url)
        }
    }

    openActionWebView(url: string) {
        if (this.channel) {
            this.channel.openActionWebView(url);
        }
    }

    /**
     * 
     * @param isSdk 是否调用sdk接口
     * @param param sdk传参 {title:标题,message:内容,btnOkTxt:确认按钮文本,btnCancelTxt:取消按钮文本}
     */
    exitGame(isSdk: boolean = false, param = null) {
        if (isSdk) {
            if (this.channel) {
                this.channel.exit(param);
            }
        } else {
            if (this.channel) {
                this.channel.exitApp(param);
            }
        }
    }


    intoServer(params: any) {
        if (this.channel) {
            this.channel.intoServer(JSON.stringify(params));
        }
    }

    createRole(params: any) {
        if (this.channel) {
            this.channel.createRole(JSON.stringify(params));
        }
    }

    roleLevelUp(params: any) {
        if (this.channel) {
            this.channel.roleLevelUp(JSON.stringify(params));
        }
    }
    roleLogoutServer(params: any) {
        if (this.channel) {
            this.channel.roleLogoutServer(JSON.stringify(params));
        }
    }
    roleCompleteTutorial(params: any) {
        if (this.channel) {
            this.channel.roleCompleteTutorial(JSON.stringify(params));
        }
    }

    accountUpgrade(): void {
        if (this.channel) {
            this.channel.accountUpgrade();
        }
    }

    accountCenter(params: any): void {
        if (this.channel) {
            this.channel.accountCenter(JSON.stringify(params));
        }
    }

    initRewardedAd(params: any, callback: Function) {
        if (this.channel) {
            this.channel.initRewardedAd(JSON.stringify(params), (retData: any) => {
                callback && callback(retData)
            });
        }
    }

    showRewardedAd(): void {
        if (this.channel) {
            this.channel.showRewardedAd();
        }
    }

    /**
     * 返回sdk计费点价格，比如港澳台版本需要转成美元
     * @param p_data 
     * @returns 
     */
    getSdkRechargePrice(p_data: tab.RechargeTable) {
        if (this.channel) {
            return this.channel.getSdkRechargePrice(p_data);
        }
        return p_data.PriceDollar / 100;
    }
    getRechargeCurrency() {
        if (this.channel) {
            return this.channel.getRechargeCurrency();
        }
        return ""
    }

    getSdkRechargeShowPrice(p_data: tab.RechargeTable) {
        if(this.isJp37){
            let str = this.channel.getSdkRechargeShowPrice(p_data)
            if (str != null && str != ""){
                return str
            }
        }
        let price = this.getSdkRechargePrice(p_data);
        let currency = this.getRechargeCurrency();
        return LangMgr.getCombineString(currency, [price])
    }
    /**
     * 平台事件打点
     * @param eventName 
     * @param params 
     */
    postEvent(eventName: P8PostEventName, params: any = null) {
        console.log("数据埋点===" + eventName, "===params==", params)
        let obj: Object = new Object();
        obj["eventName"] = eventName;
        if (params) {
            obj["data"] = params;
        }
        if (this.channel) {
            this.channel.postEvent(obj)
        }
    }
    comment(params: any, callback: Function): void {
        if (this.channel) {
            this.channel.comment(params, callback);
        }
    }
    share(params: any, callback: Function): void {
        if (this.channel) {
            this.channel.share(params, callback);
        }
    }

    gameHotfixStart(){
        if (this.channel) {
            this.channel.gameHotfixStart();
        }
    }
    gameHotfixSuccess(){
        if (this.channel) {
            this.channel.gameHotfixSuccess();
        }
    }
    openCustomService(){
        if (this.channel) {
            this.channel.openCustomService();
        }
    }
    gameServerPage(){
        if (this.channel) {
            this.channel.gameServerPage();
        }
    }

    getShopInfo(){
        if (this.channel) {
            let list = []
            tab.getData().RechargeTable.forEach((v) => {
                let id = v[this.channelTab.ProductType]
                if (id && id != ""){
                    if (list.indexOf(id) == -1){
                        list.push(id)
                    }
                }
            })
            this.channel.getShopInfo(JSON.stringify(list));
        }
    }

    
}

export const ChannelMgr = ChannelManager.ins