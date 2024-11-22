/**
 *  数据上报
 */

export enum CAEvtID {
    EventTracking = "evt_tracking",
}

export enum CAEvtName {
    LoadFirstRes = "load_first_res",
    LoginSuccess = "login_wechat",
    ClickEnter = "click_enter_game",
    LoadTable = "load_table",
    Connect = "connect",
    LoadRes = "load_res",
    EnterGame = "enter_game",
    Guide = "guide",
    GuideStep = "guide_step",
    PvpParticipation = "pvp_participation",
    PveParticipation = "pve_participation",
    ClickBossBox = "click_boss_box",
    ClickSeasonWindow = "click_season_window",
    ClickActivity = "click_activity",
    ClickRequestSupport = "click_request_support",
    ClickFriendlyMatch = "click_friendly_match",
    ClickInfiniteInvitation = "click_infinite_invitation",
    ClickRankingList = "click_ranking_list",
    ClickShop = "click_shop",
    ClickRecommend = "click_recommend",
    ClickFreeGoods = "click_free_goods",
    ClickShareFirst = "share_first",
    RechargeDiamond = "recharge_diam",
    RechargeGold = "recharge_gold",
    RechargeBox = "recharge_box",
    JumpToBossBox = "JumpToBossBox",
    LoadLoginScene = "load_login",
    WechatAccountInfo = "wechat_account_info",
    AdShow = "ad_show",
    AdEnd = "ad_end",
    FightSelfCardInfoPage = "fight_self_card_info_page",
}

const ANDROID_PACKAGE_NAME = "org.cocos2dx.javascript/AppActivity";

declare let window: Window & {
    wx:any;
}

export default class Analytics {
    protected _enable:boolean = true;

    constructor() {
        // if(!CC_PREVIEW && cocosAnalytics) {
        //     this._enable = true
        // } else {
        //     this._enable = false
        // }
        this._enable = false
    }

    protected static _instance:Analytics;
    public static get Instance() {
        if(!Analytics._instance) {
            Analytics._instance = new Analytics;
        }
        return Analytics._instance;
    }


    public Init(info: {
            appID: string,// 游戏ID
            version: string, // 游戏/应用版本号
            storeID: string,// 分发渠道
            engine: string,// 游戏引擎
    }) {
        if(!this._enable) {
            return;
        }

        let MXYZZ = true;
        if(cc.sys.platform == cc.sys.WECHAT_GAME && window.wx && window.wx.getAccountInfoSync) {
            try {
                let accountInfo = window.wx.getAccountInfoSync();
                if(accountInfo && accountInfo.miniProgram) {
                    console.log(`wechat appId=${accountInfo.miniProgram.appId}`)
                    if(accountInfo.miniProgram.appId == "wx8a9d09983a9a777a") {
                        //萌学园战纪
                        MXYZZ = true;
                    } else if(accountInfo.miniProgram.appId == "wx44ba47f7bde32021") {
                        //魅灵物语
                        MXYZZ = false
                    }
                }
            } catch (error) {
                console.error(error);
            }
        }

        if(info.storeID.length === 0) {
            if(cc.sys.os === cc.sys.OS_ANDROID) {
                if(cc.sys.platform === cc.sys.WECHAT_GAME) {
                    if( MXYZZ) {
                        info.storeID = '160519'; //Android - 37games
                    } else {
                        info.storeID = '160186'; //Android - 微信官网
                    }
                } else {
                    info.storeID = '0'; //Android - 官网
                }
            } else if(cc.sys.os === cc.sys.OS_IOS) {
                if(cc.sys.platform === cc.sys.WECHAT_GAME) {
                    if( MXYZZ) {
                        info.storeID = '160520'; //iOS-37games
                    } else {
                        info.storeID = '111267'; //iOS-微信官网
                    }
                } else {
                    info.storeID = '500026'; //iOS-AppStore
                }
            } else {
                info.storeID = 'unkown'
                if(cc.sys.platform === cc.sys.WECHAT_GAME) {
                    if( MXYZZ) {
                        info.storeID = '160519'; //Android - 37games
                    } else {
                        info.storeID = '160186'; //Android - 微信官网
                    }
                }
            }
        }

        try {
            // cocosAnalytics.enableDebug(true)
            cocosAnalytics.init(info);
        } catch (error) {
            console.error(error)
        }
    }

    public LoginSuccess(info: {
        userID: string, 
        age: number, // 年龄
        sex: number, // 性别：1为男，2为女，其它表示未知
        channel: string, // 获客渠道，指获取该客户的广告渠道信息
    }) {
        if(!this._enable) {
            return;
        }

        try {
            if(!cc.sys.isNative){
                cocosAnalytics.CAAccount.loginSuccess(info)
            }else{
                if(cc.sys.os == cc.sys.OS_ANDROID){
                    jsb.reflection.callStaticMethod(ANDROID_PACKAGE_NAME, 
                        "AnalyticsLoginSuccess", 
                        "(IILjava/lang/String;Ljava/lang/String;)V", info.age, info.sex, info.userID, info.channel);
                }else if(cc.sys.os == cc.sys.OS_IOS){

                }
            }
        } catch (error) {
            console.error(error)
        }  
    }

    public LoginFailed(info: {
        reason: string,
    }) {
        if(!this._enable) {
            return;
        }
        try {
            if(!cc.sys.isNative){
                cocosAnalytics.CAAccount.loginFailed(info);
            }else{
                if(cc.sys.os == cc.sys.OS_ANDROID){
                    jsb.reflection.callStaticMethod(ANDROID_PACKAGE_NAME, 
                        "AnalyticsLoginFailed", 
                        "(Ljava/lang/String;)V", info.reason);
                }else if(cc.sys.os == cc.sys.OS_IOS){

                }
            }
        } catch (error) {
            console.error(error)
        }
    }

    public LoginStart(info: {
        channel: string // 获客渠道，指获取该客户的广告渠道信息   
    }) {
        if(!this._enable) {
            return;
        }
        try {
            if(!cc.sys.isNative){
                cocosAnalytics.CAAccount.loginStart(info);
            }else{
                if(cc.sys.os == cc.sys.OS_ANDROID){
                    jsb.reflection.callStaticMethod(ANDROID_PACKAGE_NAME, 
                        "AnalyticsLoginStart", 
                        "(Ljava/lang/String;)V", info.channel);
                }else if(cc.sys.os == cc.sys.OS_IOS){

                }
            }
            
        } catch (error) {
            console.error(error)
        }
    }

    public EventStart(eventID:string, eventData:any){
        if(!this._enable) {
            return;
        }
        try {
            let data = eventData;
            if(typeof eventData === "string") {
                data = { name:eventData,};
            }

            if(!cc.sys.isNative){
                cocosAnalytics.CACustomEvent.onStarted(eventID, data);
            }else{
                if(cc.sys.os == cc.sys.OS_ANDROID){
                    let paramVal = JSON.stringify(data);
                    jsb.reflection.callStaticMethod(ANDROID_PACKAGE_NAME, 
                        "AnalyticsEventStarted", 
                        "(Ljava/lang/String;Ljava/lang/String;)V", eventID, paramVal);
                }else if(cc.sys.os == cc.sys.OS_IOS){
                    
                }
            }
            
        } catch (error) {
            console.error(error)
        }
    }

    public EventSuccess(eventID:string, eventData:any){
        if(!this._enable) {
            return;
        }
        try {
            let data = eventData;
            if(typeof eventData === "string") {
                data = { name:eventData,};
            }
            cc.log(`EventSuccess: id=${eventID}, data=${JSON.stringify(data)}`);
            if(!cc.sys.isNative){
                cocosAnalytics.CACustomEvent.onSuccess(eventID, data);
            }else{
                if(cc.sys.os == cc.sys.OS_ANDROID){
                    let paramVal = JSON.stringify(data);
                    jsb.reflection.callStaticMethod(ANDROID_PACKAGE_NAME, 
                        "AnalyticsEventSuccess", 
                        "(Ljava/lang/String;Ljava/lang/String;)V", eventID, paramVal);
                }else if(cc.sys.os == cc.sys.OS_IOS){
                    
                }
            }
            
        } catch (error) {
            console.error(error)
        }
    }

    public EventFailed(eventID:string, eventData:any, reason: string){
        if(!this._enable) {
            return;
        }
        try {
            let data = eventData;
            if(typeof eventData === "string") {
                data = { name:eventData,};
            }

            if(!cc.sys.isNative){
                cocosAnalytics.CACustomEvent.onFailed(eventID, data, reason);
            }else{
                if(cc.sys.os == cc.sys.OS_ANDROID){
                    let paramVal = JSON.stringify(data);
                    jsb.reflection.callStaticMethod(ANDROID_PACKAGE_NAME, 
                        "AnalyticsEventFailed", 
                        "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", eventID, paramVal, reason);
                }else if(cc.sys.os == cc.sys.OS_IOS){
                    
                }
            }
        } catch (error) {
            console.error(error)
        }
    }

    public EventCancelled(eventID:string, eventData:any){
        if(!this._enable) {
            return;
        }
        try {
            let data = eventData;
            if(typeof eventData === "string") {
                data = { name:eventData,};
            }
            if(!cc.sys.isNative){
                cocosAnalytics.CACustomEvent.onCancelled(eventID, data);
            }else{
                if(cc.sys.os == cc.sys.OS_ANDROID){
                    let paramVal = JSON.stringify(data);
                    jsb.reflection.callStaticMethod(ANDROID_PACKAGE_NAME, 
                        "AnalyticsEventCancel", 
                        "(Ljava/lang/String;Ljava/lang/String;)V", eventID, paramVal);
                }else if(cc.sys.os == cc.sys.OS_IOS){
                    
                }
            }
            
        } catch (error) {
            console.error(error)
        }
    }
}