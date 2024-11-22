import Analytics, { CAEvtID, CAEvtName } from "../../../Update/Analytics";
import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { checkCanCreateAlliance } from "../Alliance/AllianceCommonInterface";
import { Native2JsInterface } from "../Common/Native2JsInterface";
import LoginData from "../Login/LoginData";
import Waiting from "./Waiting";
import Role from "../Common/Role";
import { CaiHongData } from "../../sdk/rainbow/CaiHongData";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";

declare let window: Window & {
    wx: any;
    game_version: string;
    svr_version: string;
    kick_off: any;
    canvas: any;
}

export interface WechatUserInfo {
    nickName: string;
    avatarUrl: string;
}

export default class SdkManager {
    private _onAdClosed: (isEnded: boolean) => void;
    protected _isReviewMLWY: boolean | undefined = undefined
    protected _menuShareRid: string | undefined;
    private _weChatName: string;
    private _inviteRoomId = 0; /* 应朋友邀请而开启的游戏的时候，记录的房间号 */
    protected static _instance: SdkManager = null;


    /*  */
    public static get Instance() {
        if (!SdkManager._instance) {
            SdkManager._instance = new SdkManager();
        }
        return SdkManager._instance;
    }

    /*  */
    public resetInviteRoomID() {
        this._inviteRoomId = 0;
    }

    /*  */
    public setInviteRoomID(roomID: number) {
        //console.log("zhibo+ setInviteRoomID() ==> roomid: "+ roomID );
        this._inviteRoomId = roomID;
    }

    /*  */
    public getInviteRoomID(): number {
        return this._inviteRoomId;
    }

    /*  */
    public Init() {
        this.initWxUpdateManager();
        // this.initAuthorize();
        this.initShare();
        this.initOnError()

        Net.listenProtocol(proto.Ptl.KickOff, buff => {
            window.kick_off = true;
            Net.Disconnect()
        }, this)
    }

    /*  */
    public getChannelType(): number {
        if (cc.sys.platform == cc.sys.WECHAT_GAME && window.wx) {
            return tab.ChannelType.ChannelType_WechatGame;
        }
        // if(cc.sys.isNative){ /* Native */
        //     return tab.ChannelType.ChannelType_Tencent_youxuan;
        // }
        return tab.ChannelType.ChannelType_None;
    }

    /* 获取微信启动参数 */
    public getWXLaunchOptionsSync() {
        /* zhibo+S@20230516 看启动参数 */
        let options = wx.getLaunchOptionsSync(); /* 真机上获取微信小游戏的冷启动参数,感觉这个API有问题，有的时候取的还是好几次之前的数据 */
        console.log("zhibo+ (冷启动参数 wx.getLaunchOptionsSync) ==> ", JSON.stringify(options));
        /* 在PC上的模拟 ====> S */
        /* 模拟启动参数用 */
        // let options = {}; 
        // options.query = {};
        // options.query.room_id = 123456;
        /* 在PC上的模拟 <==== E */
        if (options && options.query && options.query.room_id) {
            if (options && options.query) {
                console.log("zhibo+ (冷启动参数) ==> ", JSON.stringify(options));
                let roomID = Number(options.query.room_id) /* 解析进入房间后的房间号 */
                console.log("zhibo+ (冷启动参数) ==> 1 roomID: ", JSON.stringify(roomID));
                if (!isNaN(roomID) && "number" == typeof roomID && 0 != roomID) { /* 有可能是个NaN */
                    let oldRoomID = SdkManager.Instance.getInviteRoomID();
                    console.log("zhibo+ (冷启动参数) ==> 2 oldRoomID: " + oldRoomID);
                    if (roomID != oldRoomID) { /* wx.getLaunchOptionsSync 防止多次调用 */
                        console.log("zhibo+ (冷启动参数) ==> 3 setRoomID: " + roomID);
                        SdkManager.Instance.setInviteRoomID(roomID)
                    }
                }
            }
        }

        /* 真机上获取微信小游戏的热启动参数 */
        console.log("zhibo+ wx.onShow(拿热启动参数)");
        window.wx.onShow((res) => {
            let options = res
            console.log("zhibo+ (拿热启动参数 wx.onShow) ==> ", JSON.stringify(options));
            if (options && options.query) {
                //console.log("zhibo+ (热启动参数) ==> ", JSON.stringify(options));
                let roomID = Number(options.query.room_id) /* 解析进入房间后的房间号 */
                console.log("zhibo+ (热启动参数) ==> 1 roomID: " + roomID);
                if (!isNaN(roomID) && "number" == typeof roomID && 0 != roomID) { /* 有可能是个NaN */
                    let oldRoomID = SdkManager.Instance.getInviteRoomID()
                    console.log("zhibo+ (热启动参数) ==> 2 oldRoomID: " + oldRoomID);
                    if (roomID != oldRoomID) { /* wx.onShow 这个接口在真机上有问题，它被调用了多次(真机上看,至少两次) 防止多次调用 */
                        console.log("zhibo+ (热启动参数) ==> 3 setRoomID: " + roomID);
                        SdkManager.Instance.setInviteRoomID(roomID)
                        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_HotStartup);
                    }
                }
            }
        })
    }

    /* 通用登录接口 */
    public Login(callbak: (result: boolean, uid: string, token: string) => void): void {
        console.log("SdkManager Start Login...")
        switch (this.getChannelType()) {
            case tab.ChannelType.ChannelType_WechatGame:
                window.wx.login({
                    success(res) {
                        SdkManager.Instance.getWXLaunchOptionsSync();
                        if (res.code) {
                            console.log('login succeed:' + res.code)
                            callbak(true, res.code, "wechat")
                        } else {
                            console.log('login failed:' + res.errMsg)
                            callbak(false, "", "")
                        }
                    }
                })
                break;
            default:
                break;
        }
    }

    /*  */
    public Pay(rechargeID: number, orderID: string, roleUID: string,
        roleName: string, roleLv: number, svrID: string, svrName: string,
        callback: Function) {

        console.log("SdkManager Start Pay...")
        let rechargeTbl = tab.Data.RechargeTableByID.getValue(rechargeID)
        if (!rechargeTbl) {
            //找不到商品
            console.error(`cannot find rechargeID:${rechargeID}`)
            return;
        }

        switch (this.getChannelType()) {
            case tab.ChannelType.ChannelType_WechatGame:
                SdkManager.openXiaoKeFu(rechargeTbl, orderID, roleUID, svrID)
                // if (this.isWeGameIOS()){
                //     SdkManager.gotokefupay(rechargeID, orderID)
                // }else{
                // }
                break;
            default:
                break
        }
    }

    /*  */
    public isWechat() {
        if (!window.wx) {
            return false
        }
        return this.getChannelType() == tab.ChannelType.ChannelType_WechatGame
    }

    public isWeGameIOS() {
        if (this.isWechat()) {
            return window.wx.getSystemInfoSync().platform == "ios"
        }
        return false
    }

    /*  */
    public isSDK() {
        return this.getChannelType() != tab.ChannelType.ChannelType_None;
    }

    // private checkWechatAuth(scope:string):Promise<boolean> {
    //     let checkPromise = new Promise<boolean>(resolve=>{
    //         window.wx.getSetting({
    //             success(res) {
    //                 if (!res.authSetting[scope]) {
    //                     console.log("start wx.authorize")
    //                     window.wx.authorize({
    //                         scope: scope,
    //                         success () {
    //                             // console.log(`wx.authorize succeed~ scope:${scope}`)
    //                             resolve(true)
    //                         },
    //                         fail () {
    //                             console.log(`wx.authorize fail! scope:${scope}`)
    //                             resolve(false)
    //                         }
    //                     })
    //                 } else {
    //                     resolve(true)
    //                 }
    //             },
    //             fail () {
    //                 console.log("wx.getSetting fail")
    //                 resolve(false)
    //             }
    //         })
    //     })
    //     let timeoutPromise = new Promise<boolean>((resolve, reject) => {
    //         setTimeout(resolve, 5000, false);
    //     });
    //     return Promise.race([checkPromise, timeoutPromise])
    // }

    /*  */
    public async getWechatName(): Promise<WechatUserInfo> {
        if (!this.isWechat()) {
            return { nickName: "", avatarUrl: "" }
        }
        let self = this;
        let infoPromise = new Promise<WechatUserInfo>(resolve => {
            window.wx.getUserInfo({
                success(res) {
                    console.log(`get userinfo: name=${res.userInfo.nickName}, avatar=${res.userInfo.avatarUrl}`);
                    self._weChatName = res.userInfo.nickName;
                    resolve({ nickName: res.userInfo.nickName, avatarUrl: res.userInfo.avatarUrl })
                },
                fail(res) {
                    console.log("get userinfo failed!", res)
                    resolve({ nickName: "", avatarUrl: "" })
                }
            })
        })
        let timeoutPromise = new Promise<WechatUserInfo>((resolve, reject) => {
            // console.log("get userinfo timeout!")
            setTimeout(resolve, 5000, { nickName: "", avatarUrl: "" });
        });
        return Promise.race([infoPromise, timeoutPromise])
    }

    // private initAuthorize() {
    //     if(window.wx) {
    //         let sysInfo = window.wx.getSystemInfoSync();
    //         //获取微信界面大小
    //         let width = sysInfo.screenWidth;
    //         let height = sysInfo.screenHeight;
    //         window.wx.getSetting({
    //             success (res) {
    //                 console.log(res.authSetting);
    //                 if (res.authSetting["scope.userInfo"]) {
    //                     console.log("用户已授权");
    //                 }else {
    //                     console.log("用户未授权");
    //                     let button = window.wx.createUserInfoButton({
    //                         type: 'text',
    //                         text: '',
    //                         style: {
    //                             left: 0,
    //                             top: 0,
    //                             width: width,
    //                             height: height,
    //                             backgroundColor: '#00000000',//最后两位为透明度
    //                             color: '#ffffff',
    //                             fontSize: 20,
    //                             textAlign: "center",
    //                             lineHeight: height,
    //                         }
    //                     });
    //                     button.onTap((res) => {
    //                         if (res.userInfo) {
    //                             console.log("用户授权:", res);
    //                             button.destroy();
    //                         }else {
    //                             console.log("用户拒绝授权:", res);
    //                         }
    //                     });
    //                 }
    //             }
    //         })
    //     }
    // }

    /*  */
    private initShare() {
        if (window.wx) {
            try {
                window.wx.showShareMenu({
                    withShareTicket: true,
                    menus: ['shareAppMessage', 'shareTimeline']
                })
                window.wx.onShareAppMessage(() => {
                    // let url = 'https://newcytest1.gameserver.iplay11g.com/wegame/fenxiang_tupian1.png'
                    let url = 'https://mmocgame.qpic.cn/wechatgame/J28ibD2dEicGm1Z673m63V6868RVgIRz1iaiauedQpJFKXPZicZ9DCMXyibpuYzpe9j092/0'
                    if (this._menuShareRid !== undefined) {
                        return {
                            title: '',
                            imageUrl: url,
                            query: `sharedrid=${this._menuShareRid}`
                        }
                    } else {
                        return {
                            title: '',
                            imageUrl: url
                        }
                    }
                })
                if (window.wx.onShareTimeline) {
                    window.wx.onShareTimeline(() => {
                        // let url = 'https://newcytest1.gameserver.iplay11g.com/wegame/fenxiang_tupian1.png'
                        let url = 'https://mmocgame.qpic.cn/wechatgame/J28ibD2dEicGm1Z673m63V6868RVgIRz1iaiauedQpJFKXPZicZ9DCMXyibpuYzpe9j092/0'
                        if (this._menuShareRid !== undefined) {
                            return {
                                title: '',
                                imageUrl: url,
                                query: `sharedrid=${this._menuShareRid}`
                            }
                        } else {
                            return {
                                title: '',
                                imageUrl: url
                            }
                        }
                    })
                }
            } catch (error) {
                console.error(error);
            }
        }
    }

    /*  */
    public setMenuShareRid(roleID: string) {
        this._menuShareRid = roleID;
    }

    /*  */
    private initWxUpdateManager() {
        if (window.wx && window.wx.getUpdateManager) {
            let updateManager = window.wx.getUpdateManager()
            if (updateManager) {
                updateManager.onCheckForUpdate(res => {
                    console.log(`onCheckForUpdate: ${JSON.stringify(res)}`)
                })

                updateManager.onUpdateReady(function () {
                    console.log(`onUpdateReady ~~~~~`)
                    window.wx.showModal({
                        title: '更新提示',
                        content: '新版本已经下载完毕，小程序即将重启',
                        showCancel: false,
                        complete: function () {
                            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启\
                            console.log("applyUpdate ~~~~")
                            updateManager.applyUpdate()
                        }
                    })
                })

                updateManager.onUpdateFailed(function () {
                    // 新的版本下载失败
                    console.log(`onUpdateFail !!!!`)
                })
            }
        }
    }

    /*  */
    InitAd(roleID: string, roleName: string, roleLv: number, svrID: string, svrName: string, creatTime: number) {
        switch (this.getChannelType()) {

        }
    }

    /*  */
    ShowAd(roleID: string, roleName: string, roleLv: number, svrID: string, svrName: string, creatTime: number,
        showCallback: (err: Error) => void, closeCallback: (isEnded: boolean) => void) {
        switch (this.getChannelType()) {
            default:
                showCallback && showCallback(new Error("ad not supported"));
                break;
        }
    }

    /*  */
    GetWechatgameTable(): tab.WechatgameTable | undefined {
        if (cc.sys.platform == cc.sys.WECHAT_GAME && window.wx) {
            if (window.wx.getAccountInfoSync) {
                try {
                    let accountInfo = window.wx.getAccountInfoSync();
                    if (accountInfo && accountInfo.miniProgram) {
                        // console.log(`wechat appId=${accountInfo.miniProgram.appId}`)
                        return tab.Data.WechatgameTableByAppID.getValue(accountInfo.miniProgram.appId)
                    }
                } catch (error) {
                    console.error(error);
                }
            }
            Analytics.Instance.EventFailed(CAEvtID.EventTracking, CAEvtName.WechatAccountInfo, "no wx.getAccountInfoSync")
        }
        return undefined;
    }

    /*  */
    GetPid(): string {
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            return "442";
        } else if (cc.sys.os == cc.sys.OS_IOS) {
            return "484";
        } else {
            console.log(`os:${cc.sys.os}`)
            return "442";
        }
    }

    /*  */
    GetGid(): string {
        let tbl = this.GetWechatgameTable()
        if (tbl) {
            return tbl.GID;
        }
        return "";
    }

    /*  */
    IsShowPay(): boolean {
        if (this.isLocalVerHigher()) {
            //本地版本号 > 服务器版本号,不显示充值
            return false;
        }
        return true;
    }

    /*  */
    protected isLocalVerHigher() {
        return (this.compareVersion(window.game_version, window.svr_version) > 0)
    }

    /*  */
    IsReview(): boolean {
        // if (cc.sys.platform == cc.sys.WECHAT_GAME && window.wx) {
        //     try {
        //         let accountInfo = window.wx.getAccountInfoSync();
        //         if (accountInfo && accountInfo.miniProgram) {
        //             console.log(`wechat envVersion=${accountInfo.miniProgram.envVersion}`)
        //             switch (accountInfo.miniProgram.envVersion) {
        //                 case "develop":
        //                     return true;
        //                 case "trial":
        //                     return true;
        //                 case "release":
        //                     return false;
        //             }
        //         }
        //     } catch (error) {
        //         console.error(error)
        //     }
        // }
        if (this.compareVersion(window.game_version, window.svr_version) > 0) {
            //本地版本号 > 服务器版本号，进提审服
            return true;
        }
        return false;
    }

    //返回魅灵物语是否为提审版本，非魅灵物语返回false
    IsReviewMLWY() {
        if (this._isReviewMLWY !== undefined) {
            return this._isReviewMLWY;
        }

        if (cc.sys.platform === cc.sys.WECHAT_GAME && window.wx) {
            let accountInfo = window.wx.getAccountInfoSync();
            if (accountInfo.miniProgram.appId == "wx44ba47f7bde32021") {
                //魅灵物语
                if (this.IsReview()) {
                    this._isReviewMLWY = this.isLocalVerHigher()
                    return this._isReviewMLWY;
                }
            }
        }

        this._isReviewMLWY = false;
        return this._isReviewMLWY
    }

    /* 是否是魅灵物语
     */
    IsMLWY() {
        // if(CC_PREVIEW){
        //     return false;
        // }

        // if(cc.sys.platform === cc.sys.WECHAT_GAME && window.wx) {
        //     let accountInfo = window.wx.getAccountInfoSync();
        //     return accountInfo.miniProgram.appId == "wx44ba47f7bde32021";
        // }

        return false;
    }

    //是否为萌学园战纪
    IsMXYZJ() {
        // if(CC_PREVIEW){
        //     return false;
        // }

        // if(cc.sys.platform === cc.sys.WECHAT_GAME && window.wx) {
        //     let accountInfo = window.wx.getAccountInfoSync();
        //     return accountInfo.miniProgram.appId == "wx8a9d09983a9a777a";
        // }

        return false;
    }

    /*  */
    protected isWechatNeedUpdate(): boolean {
        if (cc.sys.platform == cc.sys.WECHAT_GAME && window.wx) {
            let accountInfo = window.wx.getAccountInfoSync();
            if (accountInfo && accountInfo.miniProgram) {
                console.log(`isWechatNeedUpdate online_ver=${accountInfo.miniProgram.version}, local=${window.game_version}`)
                if (this.compareVersion(accountInfo.miniProgram.version, window.game_version) > 0) {
                    //微信线上版本号 > 本地版本号
                    return true;
                }
            }
        }
        return false;
    }

    /*  */
    public CheckClientUpdate() {
        //不好用，暂时注释掉
        // if(cc.sys.platform == cc.sys.WECHAT_GAME) {
        //     if(this.isWechatNeedUpdate()) {
        //         window.wx.showModal({
        //             title: '更新提示',
        //             content: '检测到版本更新，请重新进入小程序',
        //             showCancel: false,
        //             complete: function () {
        //                 window.wx.exitMiniProgram({})
        //             }
        //         })
        //     }
        // }
    }

    /*  */
    private compareVersion(version1: string, version2: string): number {
        // console.log(`compareVersion ${version1}, ${version2}`)
        if (version1 === undefined || version2 === undefined) {
            return 0
        }

        let arr1 = version1.split(".")
        let arr2 = version2.split(".")
        let minLen = Math.min(arr1.length, arr2.length)

        for (let i = 0; i < minLen; ++i) {
            let ver1 = parseInt(arr1[i])
            let ver2 = parseInt(arr2[i])
            if (Number.isNaN(ver1) || Number.isNaN(ver2)) {
                return 0
            } else if (ver1 > ver2) {
                return 1;
            } else if (ver1 < ver2) {
                return -1;
            }
        }

        if (arr1.length > arr2.length) {
            for (let i = minLen; i < arr1.length; ++i) {
                let ver = parseInt(arr1[i])
                if (ver !== 0) {
                    return 1
                }
            }
        } else if (arr1.length < arr2.length) {
            for (let i = minLen; i < arr2.length; ++i) {
                let ver = parseInt(arr2[i])
                if (ver !== 0) {
                    return -1
                }
            }
        }
        return 0;
    }

    /* 分享给好友 */
    ShareToFriend(callback: Function,
        roleID: string,
        roleName: string,
        roleLv: number,
        creatTime: number,
        imageUrl: string,
        title: string = "",
        desc: string = "",
        jumpURL: string = "",
        bMoments: boolean = false,
        queryString: string = "") {
        switch (this.getChannelType()) {
            case tab.ChannelType.ChannelType_WechatGame: /* 小游戏 */
                window.wx.shareAppMessage({
                    title: title,
                    imageUrl: imageUrl,
                    query: queryString
                })
                break;

            case tab.ChannelType.ChannelType_Tencent_youxuan:
                Native2JsInterface.getInstance().wxShare(imageUrl, title, desc, jumpURL, bMoments, callback);
                break;

            case tab.ChannelType.ChannelType_None:
                cc.log("获取渠道类型失败，请检查运行环境");
                break;
        }
    }

    // ShareCanvas(roleID:string, roleName:string, roleLv:number, creatTime:number,
    //      x: number = 0,y: number = 0,width: number = 640,height: number = 1136,destWidth?: number,destHeight?: number) {
    //     if(cc.sys.platform == cc.sys.WECHAT_GAME && window.wx) {
    //         try {
    //             window.canvas.toTempFilePath({
    //                 x: x,
    //                 y: y,
    //                 width: width,
    //                 height: height,
    //                 destWidth: destWidth === undefined ? width : destWidth,
    //                 destHeight: destHeight === undefined ? height : destHeight,
    //                 success: (res) => {
    //                     switch(this.getChannelType()) {
    //                     default:
    //                         window.wx.shareAppMessage({
    //                             imageUrl: res.tempFilePath
    //                         })
    //                         break;
    //                     }
    //                 }
    //             });
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    // }

    /**
     * 清空小程序缓存并重启游戏
     */
    CleanCache() {
        if (cc.sys.platform == cc.sys.WECHAT_GAME && window.wx) {
            window.wx.clearStorageSync();
            window.wx.showModal({
                title: '提示',
                content: '清理缓存成功，请重新进入小程序',
                showCancel: false,
                complete: function () {
                    window.wx.exitMiniProgram({})
                }
            })
        }
    }

    /* 上报赛季积分和此积分时间戳给微信 */
    ReportedScore2WeChat(val: number, timestamp: number, roleName: string, key: string) {
        if (cc.sys.platform == cc.sys.WECHAT_GAME && window.wx) {
            console.log("$$$$$$$$$$$ ReportedScore2WeChat: ", val, ", ", key);
            let value = `${val};${timestamp};${this._weChatName};${roleName}`;
            window.wx.setUserCloudStorage({
                KVDataList: [{
                    key: key,
                    value: value
                }],

                success: res => {
                    console.log('[ReportedScore2WeChat]', 'success: ', res);
                },

                fail: res => {
                    console.log('[ReportedScore2WeChat]', 'fail: ', res);
                }
            });
        }
    }

    /* 向子域发送获取微信好友排行榜消息 */
    PostSubContextMsg(key: string = "getFriendRank") {
        if (cc.sys.platform == cc.sys.WECHAT_GAME && window.wx) {
            console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$ PostSubContextMsg: ", key);

            setTimeout(() => {
                window.wx.getOpenDataContext().postMessage({
                    event: key,
                });
            }, 1000);
        }
    }

    /*  */
    CreateAuthorizeBtn(left: number, top: number, width: number, height: number) {
        let btnAuthorize = window.wx.createUserInfoButton({
            type: 'text',
            text: '',
            style: {
                left: left,
                top: top,
                width: width,
                height: height,
                lineHeight: 0,
                backgroundColor: '',
                color: '#ffffff',
                textAlign: 'center',
                fontSize: 26,
                borderRadius: 4
            }
        })

        btnAuthorize.onTap((info) => {
            console.log("onTap uinfo: ", info);
            if (info.userInfo) {
                console.log("wxLogin auth success");
                //wx.showToast({ title: "授权成功" });  
            } else {
                console.log("wxLogin auth fail");
                //wx.showToast({ title: "授权失败" });
            }
            btnAuthorize.destroy();
        });
    }

    // 获取子域context.
    PostMsg(msg: any): any {
        if (cc.sys.platform == cc.sys.WECHAT_GAME && window.wx) {
            console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$ PostSubContextMsg");
            setTimeout(() => {
                window.wx.getOpenDataContext().postMessage(msg);
            }, 1000);
        }
    }

    /*  */
    public static getShareCanvas() {
        const canvas = window.wx.getOpenDataContext().canvas;
        //console.log("$$$$ getShareCanvas   ", canvas);
        return canvas;
    }

    public static openXiaoKeFu(payTD: tab.RechargeTable, orderID: string, roleUID: string, svcGroup: string) {
        let body = {
            uid: roleUID,
            svc_group: svcGroup,
        }
        let bodyJson = JSON.stringify(body)
        let totalFee = payTD.Price * 100 // 单位：分
        let timeNow = new Date().getTime()
        this.openCustomerServiceConversation(payTD.GoodsDesc, {
            params: "&state=" + orderID + "||" + bodyJson + "||" + totalFee + "||" + timeNow,
        })
    }

    public static openCustomerServiceConversation(title: string, sessionObj: {}, img?: string) {
        if (cc.sys.platform != cc.sys.WECHAT_GAME || window.wx == null) { return }
        let sessionFrom = JSON.stringify(sessionObj)
        console.log("打开客服", sessionFrom)
        // let img_url = img || "https://newcytest1.gameserver.iplay11g.com/wegame/fenxiang_tupian1.png"
        let img_url = img || 'https://mmocgame.qpic.cn/wechatgame/J28ibD2dEicGm1Z673m63V6868RVgIRz1iaiauedQpJFKXPZicZ9DCMXyibpuYzpe9j092/0'
        window.wx.openCustomerServiceConversation({
            sessionFrom: sessionFrom,
            showMessageCard: true,
            sendMessageTitle: title,
            sendMessageImg: img_url,
            success: function () {
                console.log('kefu:成功');
            },
            fail: function (res) {
                console.log('kefu:失败', res);
            }
        });
    }


    initOnError() {
        if (cc.sys.platform != cc.sys.WECHAT_GAME || window.wx == null) { return }
        wx.onError((res: any) => {
            if (res && res.message) {
                CaiHongData.error_event(res.message)
            }
        })
    }

    clubBtn:any
    /*  */
    createGameClubButton(node:cc.Node,clickBack:any) {
        if (cc.sys.platform != cc.sys.WECHAT_GAME || window.wx == null) { return }
        if (this.clubBtn){
            this.clubButtonVisible(true)
            return
        }
        let worldp = this.getLoc(node)
        let scale = window.wx.getSystemInfoSync().screenWidth / cc.view.getVisibleSize().width;
        this.clubBtn = window.wx.createGameClubButton({
            type: 'text',
            text: '游戏圈',
            style: {
                left: worldp.x,
                top: worldp.y,
                width: node.width*scale,
                height: node.height*scale,
                // backgroundColor: '#00000088',//最后两位为透明度
                backgroundColor: '#00000000',
                fontSize: 22,
                color: '#ffffff',
                textAlign: "center",
                lineHeight: node.height*scale,
            }
        })
        this.clubBtn.onTap((info) => {
            this.clubButtonVisible(false)
            clickBack && clickBack()
        });

        this.clubButtonVisible(true)
    }

    clubButtonVisible(visible:boolean){
        if (this.clubBtn){
            if (visible){
                this.clubBtn.show()
            }else{
                this.clubBtn.hide()
            }
        }
    }

    /**
     *cocos节点转换微信小游戏坐标系转换
    */
     getLoc(node: cc.Node) {
        if (node && node.parent) {
            let p = node.parent.convertToWorldSpaceAR(node.position);
            let scale = window.wx.getSystemInfoSync().screenWidth / cc.view.getVisibleSize().width;
            let x = (p.x - node.width / 2) * scale;
            let y = (cc.view.getVisibleSize().height - (cc.view.getVisibleSize().height-cc.view.getDesignResolutionSize().height)/2 - p.y - node.height / 2) * scale;
            return cc.v2(x, y);
        }
    }
}
