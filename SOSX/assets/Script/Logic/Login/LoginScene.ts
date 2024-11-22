import { WechatgameServerId, WechatgameVer } from "../../../Update/wechat_ver";
import { proto } from "../../Protocol/client_protocol";
import { EXTRA_MSG, Net } from "../../Protocol/Net";
import { CaiHongData } from "../../sdk/rainbow/CaiHongData";
import { LoadTable } from "../../Table/table";
import { tab } from "../../Table/table_gen";
import ConfirmTips from "../Common/ConfirmTips";
import MainMessage from "../Common/MainMessage";
import Reconnect from "../Common/Reconnect";
import Role from "../Common/Role";
import { FightLoader } from "../Fight/FightLoader";
import NameCheck from "../NameCheck/NameCheck";
import OffLineTip from "../NameCheck/OffLineTip";
import NoticePopLayer from "../Notices/NoticePopLayer";
import { SetExtremeHighConcurrency, SetHighConcurrency } from "../Utils/Concurrency";
import {isWechat, LoadScene, showPopLayer, showPopLayerV2, showPopLayerV3, ShowTips } from "../Utils/GameUtils";
import ResManager from "../Utils/ResManager";
import SdkManager from "../Utils/SdkManager";
import SensitiveWordsManager from "../Utils/SensitiveWordsManager";
import { PlaySound } from "../Utils/Sound";
import Waiting from "../Utils/Waiting";
import { WaitingTag } from "../Utils/WaitingTag";
import LoginData from "./LoginData";
import PreventIndulge from "./PreventIndulgeNode";
import RightAgeTipPop from "./RightAgeTipPop";
import ServerToggle from "./ServerToggle";

const {ccclass, property} = cc._decorator;

declare let window: Window & {
    login_addr_id:number;
    game_version:string;
    svr_version:string;
    Sentry:any;
    wx:any;
    kick_off:any;
};
const cunstomUser = {
    "wk001": 1,
    "wk002": 1,
    "wk003": 1,
    "wk004": 1,
    "wk005": 1,
    "wk006": 1,
    "wk007": 1,
    "wk008": 1,
    "wk009": 1,
    "wk101": 0,
    "wk102": 0,
    "wk103": 0,
    "wk104": 0,
    "wk105": 0,
    "wk106": 0,
    "wk107": 0,
    "wk108": 0,
    "wk109": 0,
    "jianbing": 0,
}
const RandomCharSet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const ProgressStep1 = 0.45
const ProgressStep2 = 0.8
const ProgressStep3 = 1

@ccclass
export default class LoginScene extends cc.Component {

    @property(cc.ProgressBar)
    progressBar: cc.ProgressBar = null; 

    @property(cc.Label)
    lblPercent: cc.Label = null;

    @property(cc.Label)
    lblLoadingTips: cc.Label = null;

    @property(cc.EditBox)
    ebAccount:cc.EditBox = null;

    @property(cc.Node)
    nodeLogin:cc.Node = null;

    @property(cc.Node)
    nodeLoading:cc.Node = null;

    @property(cc.ToggleContainer)
    serverTglContainer: cc.ToggleContainer = null;
    @property(cc.Prefab)

    prefabServerToggle: cc.Prefab = null;

    @property(cc.Label)
    lblVersion:cc.Label = null;

    @property(cc.Node)
    nodeRestart:cc.Node = null;

    @property(cc.Node)
    nodeCoypRightMLWY:cc.Node = null;

    @property(cc.Node)
    nodeCoypRightMXY:cc.Node = null;

    syncRolePromise:Promise<void> = null;

    protected m_bCheckOK = false;
    protected sdkLoginDone = false;
    protected lastProgress = 0;
    
    private isCreateRole:boolean = false
    onLoad() {
        CaiHongData.init()

        SetExtremeHighConcurrency();
        SdkManager.Instance.Init();
        if(window.game_version !== undefined) {
            this.lblVersion.string = `t.${WechatgameServerId} ver.${window.game_version}`;
        } else {
            this.lblVersion.node.active = false;
        }

        if(cc.sys.platform === cc.sys.WECHAT_GAME) {
            this.nodeRestart.active = true;
        } else {
            this.nodeRestart.active = false;
        }

        if(cc.sys.os == cc.sys.OS_ANDROID) {
            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this );
            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyDown, this );
        }

        this.progressBar.progress = 0;
        this.nodeLogin.active = false;
        this.nodeLoading.active = false;
        this.serverTglContainer.node.parent.active = false;

        let customAccount:string = cc.sys.localStorage.getItem("custom_account")
        if(customAccount) {
            this.ebAccount.string = customAccount;
        }

        cc.resources.preload('prefab/Waiting', cc.Prefab)

        //Analytics.Instance.EventStart(CAEvtID.EventTracking, CAEvtName.LoadTable) /* zhibo-@20230410 for <删除打点> */
        LoadTable().then(()=>{
            // Analytics.Instance.EventSuccess(CAEvtID.EventTracking, CAEvtName.LoadTable) /* zhibo-@20230410 for <删除打点> */
            this.lblLoadingTips.string = tab.Data.GetKeyValue_ConfigTable().LoadingProgress1;
            PlaySound("BGM_Login")

            SensitiveWordsManager.Instance.Init()
            if(SdkManager.Instance.isSDK()) {
                this.nodeLoading.active = true;
                window.login_addr_id = WechatgameServerId
                this.retrySdkLogin()
            } else {
                //Analytics.Instance.EventSuccess(CAEvtID.EventTracking, CAEvtName.LoginSuccess); /* zhibo-@20230410 for <删除打点> */
                this.nodeLogin.active = true;
                if (CC_PREVIEW) {
                    let customSvrID = cc.sys.localStorage.getItem("custom_server_id")
                    if(customSvrID == null) {
                        customSvrID = 1
                    }
                    this.serverTglContainer.node.parent.active = true
                    for(let data of tab.Data.ServerlistTable) {
                        let tglNode = cc.instantiate(this.prefabServerToggle);
                        tglNode.getComponent(ServerToggle).serServerData(data);
                        this.serverTglContainer.node.addChild(tglNode)
    
                        if(data.ID == customSvrID) {
                            tglNode.getComponent(ServerToggle).setChecked()
                        }
                    }
                }else if (cc.sys.isNative){
                    window.login_addr_id = 3
                }
            }
        });

        Net.listenExtraMsg(EXTRA_MSG.EXTRA_MSG_CONNCET, ()=>{
            cc.log('ws connected')
            //Analytics.Instance.EventSuccess(CAEvtID.EventTracking, CAEvtName.Connect) /* zhibo-@20230410 for <删除打点> */
            //发送登录协议
            let msg = new proto.Msg_LoginReq()
            msg.uid = LoginData.Instance.uid
            msg.token = LoginData.Instance.token
            msg.group = LoginData.Instance.loginGroup;
            msg.PlatID = cc.sys.OS_IOS ? 0 : ((cc.sys.os == cc.sys.OS_ANDROID) ? 1 : 2);
            msg.sharedrid = LoginData.Instance.recommendRoleID;
            msg.RainbowDistinctID = CaiHongData.distinct_id
            Net.Send(proto.Ptl.LoginReq, msg)
        }, this)

        Net.listenExtraMsg(EXTRA_MSG.EXTRA_MSG_CLOSE, ()=>{
            cc.log('ws closed')
            if( PreventIndulge.bPreventIndulge == false)
            {
               ShowTips('LoginConnErr')               
            }
            Waiting.Hide(WaitingTag.Login)

            if(SdkManager.Instance.isSDK()) {
                this.retrySdkLogin();
            }
        }, this)

        /* 登录 */
        Net.listenProtocol(proto.Ptl.LoginRsp, (buffer)=>{
            Waiting.Hide(WaitingTag.Login)
            let msg = proto.Msg_LoginRsp.decode(buffer)
            cc.log("LoginRsp (登录) msg: " + JSON.stringify(msg));
            switch(msg.result) {
            case proto.Msg_LoginRsp.ErrorCode.Succeed:
                cc.log("Msg_LoginRsp Succeed")
                /* zhibo-S@20230410 for <删除打点> */
                // Analytics.Instance.LoginSuccess({
                //     userID: LoginData.Instance.uid,
                //     age: 1,             // 年龄
                //     sex: 1,             // 性别：1为男，2为女，其它表示未知
                //     channel: "",        // 获客渠道，指获取该客户的广告渠道信息   
                // })
                /* zhibo-E@20230410 for <删除打点> */


                //获取微信名
                MainMessage.Instance.sendWechatName()

                PreventIndulge.bPreventIndulge = false
                if(msg.isFighting) {
                    //断线重连
                    this.reconnectFight()
                } else {
                    // /* zhibo+S@20230519 模拟启动参数 */
                    // let options = {};
                    // options.query = {};
                    // options.query.room_id = "123456";
                    // if (options && options.query) {
                    //     console.log("zhibo+ 写入SDKManager==> ", options);
                    //     let x = Number(options.query.room_id) /* 解析进入房间后的房间号 */
                    //     SdkManager.Instance.setInviteRoomID(x);
                    //     console.log("zhibo+ typeof x: ", typeof x);
                    //     console.log("zhibo+ x: ", x);
                    // }
                    // /* zhibo+S@20230519 模拟启动参数 */

                    // 进入主界面
                    this.enterMainScene();
                }
                break;
            case proto.Msg_LoginRsp.ErrorCode.Failed:
                cc.log("Msg_LoginRsp Failed")
                /* zhibo-S@20230410 for <删除打点> */
                // Analytics.Instance.LoginFailed({
                //     reason: 'failed' // 失败原因
                // })
                /* zhibo-E@20230410 for <删除打点> */
                
                if(SdkManager.Instance.isSDK()) {
                    this.retrySdkLogin();
                }
                break;
            case proto.Msg_LoginRsp.ErrorCode.NoRole:
                cc.log("Msg_LoginRsp NoRole")
                LoginData.Instance.isCreatRole = true;
                /* zhibo-S@20230410 for <删除打点> */
                // Analytics.Instance.LoginSuccess({
                //     userID: LoginData.Instance.uid,
                //     age: 1,             // 年龄
                //     sex: 1,             // 性别：1为男，2为女，其它表示未知
                //     channel: "",        // 获客渠道，指获取该客户的广告渠道信息   
                // })
                /* zhibo-E@20230410 for <删除打点> */

                LoginData.Instance.nickName = LoginData.Instance.uid;
                this.createRole(LoginData.Instance.nickName);

                // if(SdkManager.Instance.isWechat()) {
                //     //获取微信名
                //     SdkManager.Instance.getWechatName().then(info=>{
                //         if(info.nickName == "") {
                //             LoginData.Instance.nickName = LoginData.Instance.uid.substr(2)
                //         } else {
                //             LoginData.Instance.nickName = info.nickName;
                //         }
                //         LoginData.Instance.wechatNickname = info.nickName;
                //         LoginData.Instance.wechatAvatarUrl = info.avatarUrl;
                        
                //         this.createRole(LoginData.Instance.nickName);
                //     })
                // } else {
                //     LoginData.Instance.nickName = LoginData.Instance.uid;
                //     this.createRole(LoginData.Instance.nickName);
                // }
                
                break;
            case proto.Msg_LoginRsp.ErrorCode.PreventIndulgeTime:
            case proto.Msg_LoginRsp.ErrorCode.PreventIndulgeSpecialTime:
                /* zhibo-S@20230410 for <删除打点> */
                // Analytics.Instance.LoginFailed({
                //     reason: 'PreventIndulge' // 失败原因
                // })
                /* zhibo-E@20230410 for <删除打点> */

                PreventIndulge.bPreventIndulge = true
                showPopLayer("prefab/PreventIndulgeNode")
                break;
            }
        }, this)

        /* 创建角色 */
        Net.listenProtocol(proto.Ptl.CreatRoleRsp, (buffer)=>{
            let msg = proto.Msg_CreatRoleRsp.decode(buffer)
            cc.log("CreatRoleRsp (创建角色) msg: " + JSON.stringify(msg));
            switch(msg.result) {
            case proto.Msg_CreatRoleRsp.ErrorCode.Succeed:
                cc.log("CreatRoleRsp Succeed")
                LoginData.Instance.isCreatRole = true;
                
                this.enterMainScene();

                //获取微信名
                MainMessage.Instance.sendWechatName()
                break;
            case proto.Msg_CreatRoleRsp.ErrorCode.InvalidName:
                cc.log("CreatRoleRsp InvalidName")
                //名字非法，随机一个名字重新创建角色
                this.createRole(this.randomString(8, RandomCharSet))
                break;
            case proto.Msg_CreatRoleRsp.ErrorCode.DuplicatedName:
                cc.log("CreatRoleRsp DuplicatedName")
                //名字重复，在原来名字后面加随机字符串
                this.createRole(LoginData.Instance.nickName + this.randomString(4, RandomCharSet))
                break;
            default:
                Waiting.Hide(WaitingTag.Login)
                if(SdkManager.Instance.isSDK()) {
                    console.warn("55555555555555555")
                    this.retrySdkLogin();
                }
                break;
            }
        }, this)

        //角色同步
        this.syncRolePromise = new Promise(resolve=>{
            Net.listenProtocol(proto.Ptl.SyncRole, buffer=>{
                cc.log('Recv SyncRole ~')
                SdkManager.Instance.CheckClientUpdate()
                let msg = proto.Msg_SyncRole.decode(buffer)
                console.log("SyncRole (角色同步) msg: " + JSON.stringify(msg));
                Role.Purge();
                Role.Instance.init(msg.data);
                /*  TODO: zhibo+@20230522 for <登录数据中如果有房间数据,那么就应该跳到等待别人加入的页面去> */
                // if(0 != msg?.data.RoomID && 0 != msg?.data.RoomCreateTime){
                //     let dbg  = 100;
                // }

                //sentry记录一下账号
                if(!CC_PREVIEW && window.Sentry && window.Sentry.configureScope) {
                    window.Sentry.configureScope((scope) => {
                        scope.setUser({ 
                            rid: Role.Instance.ID,
                            name: Role.Instance.RoleData.name,
                            server_id: this.getServerlistTable().ID
                        });
                    })
                }
                SdkManager.Instance.setMenuShareRid(msg.data.id)
            
                //初始化广告
                SdkManager.Instance.InitAd(msg.data.id, 
                    msg.data.name,
                    msg.data.level,
                    LoginData.Instance.loginGroup,
                    LoginData.Instance.loginName,
                    msg.data.createRoleUTC
                );

                //上报gid
                if(SdkManager.Instance.getChannelType() == tab.ChannelType.ChannelType_WechatGame_37) {
                    let req = new proto.Msg_SetGid()
                    req.gid = SdkManager.Instance.GetGid();
                    req.pid = SdkManager.Instance.GetPid()
                    Net.Send(proto.Ptl.SetGid, req)
                }

                resolve();
            }, this);
        })
    }

    onDestroy() {
        SetHighConcurrency();
    }

    onKeyDown(event) {
        if(event.keyCode == cc.macro.KEY.back)
        {
            ConfirmTips.show("GameExitTips", ()=>{cc.game.end()})            
        }
    }

    start () {
        this.SelectCopyRightNode();
    }

    onLoginBtnClick() {
        if(this.ebAccount.string.length == 0) {
            //todo 账号不能为空
            ShowTips("NeedAccount");
            return
        }
        if(cunstomUser[this.ebAccount.string] === 0||cc.sys.localStorage.getItem("RealName_"+this.ebAccount.string)==="man"){
            /* 成年人 并且实名认证过 直接往下走 */
        }
        if(cunstomUser[this.ebAccount.string] === 1||cc.sys.localStorage.getItem("RealName_"+this.ebAccount.string)==="child"){
            /* 未成年人 */
            showPopLayerV2("prefab/OffLineTip" , OffLineTip, false);
            return;
        }
        /* 判断是否有敏感词 */
        let checkName = SensitiveWordsManager.Instance.check(this.ebAccount.string);
        if(!checkName){
            ShowTips("ChangeNameError1");
            return;
        }
        if(!cc.sys.localStorage.getItem("RealName_"+this.ebAccount.string)){
            showPopLayerV2("prefab/NameCheck" , NameCheck, false).then(layer=>{
                layer.setUserName(this.ebAccount.string)
            })
            return;
        }
        cc.sys.localStorage.setItem("custom_account", this.ebAccount.string)
        if(CC_PREVIEW) {
            cc.sys.localStorage.setItem("custom_server_id", this.getToggledServerID())
        }

        /* zhibo-S@20230410 for <删除打点> */
        // Analytics.Instance.LoginStart({
        //     channel: "",   // 获客渠道，指获取该客户的广告渠道信息   
        // })
        // Analytics.Instance.EventSuccess(CAEvtID.EventTracking, CAEvtName.ClickEnter)
        /* zhibo-E@20230410 for <删除打点> */

        this.login(this.ebAccount.string, "111")
    }

    onSdkLogin() {
        if(this.sdkLoginDone) {
            return;
        }
        /* zhibo-S@20230410 for <删除打点> */
        // Analytics.Instance.LoginStart({
        //     channel: "",   // 获客渠道，指获取该客户的广告渠道信息   
        // })
        /* zhibo-E@20230410 for <删除打点> */

        SdkManager.Instance.Login((result:boolean, uid:string, token:string)=>{
            if(result) {
                this.sdkLoginDone = true;
                // Analytics.Instance.EventSuccess(CAEvtID.EventTracking, CAEvtName.LoginSuccess)/* zhibo-S@20230410 for <删除打点> */
                // Analytics.Instance.EventSuccess(CAEvtID.EventTracking, CAEvtName.ClickEnter)/* zhibo-S@20230410 for <删除打点> */
                this.login(uid, token)
            } else {
                //登录失败,过会重试
                // Analytics.Instance.EventFailed(CAEvtID.EventTracking, CAEvtName.LoginSuccess, "")/* zhibo-S@20230410 for <删除打点> */
                ShowTips('WechatLoginFailed')
            }
        })
    }

    retrySdkLogin(retryInterval = 5.0) {
        this.unscheduleAllCallbacks()
        this.sdkLoginDone = false;
        this.onSdkLogin();
        this.schedule(this.onSdkLogin.bind(this), retryInterval)
    }

    login(uid:string, token:string) {
        if(window.kick_off === true) {
            ShowTips('BannedTemporarily')   
            return
        }

        Waiting.Show(WaitingTag.Login, 0)
        LoginData.Instance.loginServerTab = this.getServerlistTable()
        LoginData.Instance.loginAddress = this.getLoginAddress();
        LoginData.Instance.loginName = this.getLoginName();
        let channel = SdkManager.Instance.getChannelType()
        let request = cc.loader.getXMLHttpRequest()
        let addr = LoginData.Instance.loginAddress
        let svcReviewGroup = this.getServerlistTable().ReviewSvcGroup
        let svcGroup = this.getServerlistTable().SvcGroup
        let reqParam = `uid=${uid}&token=${token}&ch=${channel}&group=${svcGroup}&review_group=${svcReviewGroup}&ver=${WechatgameVer}`;
        
        if(channel === tab.ChannelType.ChannelType_WechatGame_37) {
            reqParam += `&gid=${SdkManager.Instance.GetGid()}&pid=${SdkManager.Instance.GetPid()}`
        }

       
        console.warn("loginscene----login",uid,token,`${addr}?${reqParam}`)
        request.open("GET", `${addr}?${reqParam}`)
        request.onload = ()=>{
            console.log(`http request onload readyState=${request.readyState}, status=${request.status}， txt=${request.responseText}`)
            let responseJson = JSON.parse(request.responseText);
            console.log(`http ret=${responseJson.ret}, msg=${responseJson.msg}`)
            if(responseJson.ret == 0 && responseJson.data) {
                LoginData.Instance.uid = responseJson.data.uid;
                LoginData.Instance.token = responseJson.data.token;
                LoginData.Instance.gatewayAddrs = responseJson.data.gateway_addr


                // window.svr_version = responseJson.version;
                if (responseJson.group == this.getServerlistTable().SvcGroup){
                    window.svr_version = WechatgameVer
                }else{ // if (responseJson.data.group == this.getServerlistTable().ReviewSvcGroup)
                    //审核服
                    responseJson.data.group = this.getServerlistTable().ReviewSvcGroup
                    window.svr_version = "0.0.0"
                }
                
                LoginData.Instance.loginGroup = responseJson.group// this.getLoginGroup(); //获得version之后在判断group
                console.log(`loginGroup=${LoginData.Instance.loginGroup}`)

                CaiHongData.login() /*  */
                if(isWechat()){
                    SdkManager.Instance.getWXLaunchOptionsSync();
                }
                
                if(!LoginData.Instance.gatewayAddrs) {
                    cc.error("no gateway addr")
                    // ShowTips('LoginConnErr')
                    showPopLayerV2("prefab/NoticePopLayer",NoticePopLayer);
                    Waiting.Hide(WaitingTag.Login)
                    this.scheduleOnce(this.login.bind(this, uid, token), 15)
                } else {
                    LoginData.Instance.isLogin = true
                    //Analytics.Instance.EventStart(CAEvtID.EventTracking, CAEvtName.Connect) /* zhibo-@20230410 for <删除打点> */
                    Net.Connect(`${LoginData.Instance.gatewayAddrs[0]}`)
                }
            } else if(responseJson.ret == 3){
                showPopLayerV2("prefab/NoticePopLayer",NoticePopLayer);
                Waiting.Hide(WaitingTag.Login)
                this.scheduleOnce(this.login.bind(this, uid, token), 15)
            } else {
                ShowTips('LoginConnErr')
                Waiting.Hide(WaitingTag.Login)
                this.retrySdkLogin();
            }
        }
        request.onerror = ()=>{
            console.log(`http request onerror`)
            ShowTips('LoginConnErr')
            Waiting.Hide(WaitingTag.Login)

            if(SdkManager.Instance.isSDK()) {
                this.unscheduleAllCallbacks()
                this.scheduleOnce(this.login.bind(this, uid, token), 2.0)
            }
        }
        request.ontimeout = ()=>{
            console.log(`http request ontimeout`)
            ShowTips('LoginConnErr')
            Waiting.Hide(WaitingTag.Login)

            if(SdkManager.Instance.isSDK()) {
                this.unscheduleAllCallbacks()
                this.scheduleOnce(this.login.bind(this, uid, token), 2.0)
            }
        }

        request.timeout = 10000;
        request.send();
    }

    async createRole(nickName:string) {
        this.nodeLogin.active = false;
        this.isCreateRole = true
        //发送创角协议
        let msg = new proto.Msg_CreatRoleReq()
        msg.name = nickName;
        msg.gender = proto.Gender.Male;
        msg.PlatId = cc.sys.os == cc.sys.OS_IOS ? 0 : ((cc.sys.os == cc.sys.OS_ANDROID) ? 1 : 2);
        msg.recommendRoleID = LoginData.Instance.recommendRoleID;
        // msg.wechatNickname = LoginData.Instance.wechatNickname;
        // msg.wechatAvatarUrl = LoginData.Instance.wechatAvatarUrl;
        
        let relayStr = CaiHongData.getRelayStr();
        if (relayStr){
            msg.relayMsg = relayStr
        }
        Net.Send(proto.Ptl.CreatRoleReq, msg);
    }

    /* 进入到Main场景 */
    async enterMainScene() {
        this.nodeLoading.active = true;
        this.nodeLogin.active = false;
        cc.resources.preload('prefab/Reconnet', cc.Prefab)

        cc.log("wait syncRolePromise...")
        await this.syncRolePromise;
        if (this.isCreateRole){
            CaiHongData.role_create()
            this.isCreateRole = false
        }
        CaiHongData.role_login()
        
        let enterPvpRookie = false;
        if(Role.Instance.RoleData.guideTrunk === 200){
            Role.Instance.RoleData.guideTrunk = 300;
        }
        if((Role.Instance.RoleData.guideTrunk == 0)) {
            enterPvpRookie = true;
        }

        let preloadArray = []
        if(enterPvpRookie) {
            preloadArray.push('ChessFightScene')
        } else {
            preloadArray.push('MainScene')
        }

        //Analytics.Instance.EventStart(CAEvtID.EventTracking, CAEvtName.LoadRes) /* zhibo-@20230410 for <删除打点> */
        this.preLoadScenes(preloadArray, progress=>{
            if(enterPvpRookie) {
                this.setProgress(progress * 0.5)
            } else {
                this.setProgress(progress)
            }
        }).then(async ()=>{
            if(enterPvpRookie) {
                //第一场新手引导战斗
                let resMap = FightLoader.Instance.getResMap()
                let fightResNum = FightLoader.Instance.addFightBaseData(resMap)
                fightResNum += FightLoader.Instance.addRookiePvpDeck(resMap)
                await FightLoader.Instance.loadByResMap(resMap, fightResNum, progress=>{
                    this.setProgress(0.5 + progress * 0.5)
                })
                ResManager.mergeResTo("LoadingScene"); //加好的资源别被释放了

                // Analytics.Instance.EventSuccess(CAEvtID.EventTracking, CAEvtName.LoadRes) /* zhibo-@20230410 for <删除打点> */
                // Analytics.Instance.EventSuccess(CAEvtID.EventTracking, CAEvtName.EnterGame) /* zhibo-@20230410 for <删除打点> */
                FightLoader.Instance.StartPvPGuide()
                Reconnect.create()
            } else {
                // Analytics.Instance.EventSuccess(CAEvtID.EventTracking, CAEvtName.LoadRes) /* zhibo-@20230410 for <删除打点> */
                cc.log("Load MainScene")
                LoadScene('MainScene', ()=>{
                    //创建断线重连界面
                    Reconnect.create()
                    //Analytics.Instance.EventSuccess(CAEvtID.EventTracking, CAEvtName.EnterGame) /* zhibo-@20230410 for <删除打点> */
                });
            }
        })
    }

    reconnectFight() {
        cc.log('reconnectFight')
        this.nodeLoading.active = true;
        this.nodeLogin.active = false;

        cc.resources.preload('prefab/Reconnet', cc.Prefab)
        this.preLoadScenes(['MainScene', 'LoadingScene'], progress=>{
            this.setProgress(progress)
        }).then(async ()=>{
            cc.log("wait syncRolePromise...")

            //创建断线重连界面
            Reconnect.create()

            await this.syncRolePromise;
            
            //重连战斗
            FightLoader.Instance.ReconnectPvP().then(result=>{
                if(!result) {
                    //重连失败，进入主界面
                    LoadScene('MainScene')
                }
            })
        })
        
    }

    preLoadScenes(vecScene: string[], cb: Function): Promise<boolean> {
        return new Promise<boolean>(async resolve => {
            let needCount = vecScene.length;
            if (needCount < 1) {
                resolve(false);
            }
            let finishCount = 0;
            let everyPer = 1 / needCount;

            async.eachSeries(vecScene, (sceneName, callback)=>{
                cc.log(`preload scene: ${sceneName}`);
                CaiHongData.resource_load(sceneName,1,1)
                cc.director.preloadScene(sceneName, function (completedCount: number, totalCount: number) { // 场景
                    cb((finishCount + completedCount / totalCount) * everyPer);
                }, (err) => {
                    ++finishCount;
                    if (err){
                        CaiHongData.resource_load(sceneName,1,3,err.message)
                    }else{
                        CaiHongData.resource_load(sceneName,1,2)
                    }
                    callback(err)
                });
            }, error=>{
                if(error) {
                    console.error(`load scene error: ${error}`);
                    resolve(false);
                } else {
                    resolve(true);
                }
            })
        });
    }

    getLoginAddress(): string {
        return this.getServerlistTable().Address;
    }
    getLoginName(): string {
        return this.getServerlistTable().Name;
    }

    getLoginGroup(): string {
        return SdkManager.Instance.IsReview() ? 
            this.getServerlistTable().ReviewSvcGroup : this.getServerlistTable().SvcGroup;
    }
    getServerlistTable():tab.ServerlistTable {
        let data: tab.ServerlistTable;
        let id:number = 1
        if(window.login_addr_id) {
            id = window.login_addr_id
            // if (id == AppType.release){
            //     return WechatServerTab
            // }
        } else if(CC_PREVIEW) {
            id = this.getToggledServerID();
        }

        data = tab.Data.ServerlistTableByID.getValue(id)
        if(!data) {
            throw `cannot find serverlist i=${id}`
        } 
        return data
    }
    getToggledServerID():number {
        let id:number = 1
        for(let child of this.serverTglContainer.node.children) {
            let st = child.getComponent(ServerToggle)
            if(st && st.isChecked()) {
                id = st.getServerID()
                break
            }
        }
        return id
    }

    randomString(length:number, chars:string):string {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }

    public onClickTip(){
        showPopLayerV2("prefab/RightAgeTipPop", RightAgeTipPop).then(layer=>{
        });
    }

    protected setProgress(progress:number) {
        if(progress > this.lastProgress) {
            if(progress < ProgressStep1) {
                let newProgress = progress / ProgressStep1;
                this.progressBar.progress = newProgress;
                this.lblPercent.string = `${Math.floor(newProgress*100)}%`
                this.lblLoadingTips.string = tab.Data.GetKeyValue_ConfigTable().LoadingProgress1;
            } else if(progress < ProgressStep2) {
                if(this.lastProgress < ProgressStep1) {
                    this.lastProgress = ProgressStep1
                    this.progressBar.progress = 1
                    this.lblPercent.string = "100%"
                    return
                }
                let newProgress = (progress - ProgressStep1) / (ProgressStep2 - ProgressStep1);
                this.progressBar.progress = newProgress
                this.lblPercent.string = `${Math.floor(newProgress*100)}%`
                this.lblLoadingTips.string = tab.Data.GetKeyValue_ConfigTable().LoadingProgress2;
            } else {
                if(this.lastProgress < ProgressStep2) {
                    this.lastProgress = ProgressStep2
                    this.progressBar.progress = 1
                    this.lblPercent.string = "100%"
                    return
                }
                let newProgress = (progress - ProgressStep2) / (ProgressStep3 - ProgressStep2);
                this.progressBar.progress = newProgress;
                this.lblPercent.string = `${Math.floor(newProgress*100)}%`
                this.lblLoadingTips.string = tab.Data.GetKeyValue_ConfigTable().LoadingProgress3;
            }
            this.lastProgress = progress;
        }
    }

    protected SelectCopyRightNode()
    {
        this.nodeCoypRightMLWY.active = SdkManager.Instance.IsMLWY()
        this.nodeCoypRightMXY.active = SdkManager.Instance.IsMXYZJ()
    }
}
