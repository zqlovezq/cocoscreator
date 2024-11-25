import { Node, _decorator, sys } from "cc";
import { AbsControl, AbsMgr } from "../../../framework/base/IAbs";
import { LoginData } from "./LoginData";
import Http from "../../net/Http";
import { Net } from "../../net/Net";
import { EventMgr } from "../../mgr/EventMgr";
import { LocalEvent, NetStateEvent } from "../../define/LocalEvent";
import { SceneMgr, ScenesName } from "../../mgr/SceneMgr";
import { UIMgr } from "../../mgr/UIMgr";
import { Reconnect } from "../Reconnect";
import { proto } from "client_protocol";
import { tab } from "../../../Table/table_gen";
import { LoginScene } from "../../../scene/LoginScene";
import { RoleData } from "../role/RoleData";
import { RedMgr } from "../../mgr/RedMgr";
import { RedDotType } from "../../red/RedDotType";
import { Global } from "../../../Global";
import { ChannelMgr } from "../../../channel/ChannelMgr";
import Waiting, { WaitingTag } from "../../../Common/script/Waiting";
import { Func } from "../../utils/Func";
import { CommonTipsPop } from "../common/CommonTipsPop";
import { LangMgr } from "../../mgr/LangMgr";


const { ccclass, property } = _decorator;

const RandomCharSet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

export class LoginControl extends AbsControl {

    private static _instance: LoginControl;
    public isChangeServer: boolean = false;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new LoginControl();
        }
        return this._instance;
    }

    init(): void {
        super.init()
    }

    connect() {
        Net.Connect(`${LoginData.ins.gatewayAddrs[0]}`)
    }

    register(): void {

        EventMgr.onNetState(NetStateEvent.CONNCET, this.onNetConnect, this)
        EventMgr.onNetState(NetStateEvent.CLOSE, this.onNetClose, this)

        EventMgr.onMsg(proto.Ptl.LoginRsp, this.on_s2c_LoginRsp, this)
        EventMgr.onMsg(proto.Ptl.CreateRoleRsp, this.on_s2c_CreateRoleRsp, this)
        EventMgr.onMsg(proto.Ptl.Pong, this.on_s2c_Pong, this)

        //-----------------测试红点
        RedMgr.ins.registerCalculateFb(RedDotType.testLogin, this.red_TestLogin, this)
        RedMgr.refreshEvent(RedDotType.testLogin)
    }

    red_TestLogin(stateToChange: any) {
        stateToChange = {}
        stateToChange.login1 = true
        stateToChange.login = {

        }
        return stateToChange
    }

    sdkLogin() {
        this.login(ChannelMgr.getUid(), ChannelMgr.getToken(), JSON.stringify(ChannelMgr.getSdkLoginData()))
    }

    login(uid: string, token: string, params: string = "") {
        Func.setItem("test_message", "")
        LoginData.ins.isCreatRole = false
        let addr = LoginData.ins.serverAddress
        let svcReviewGroup = LoginData.ins.loginServerTab.ReviewSvcGroup
        let svcGroup = LoginData.ins.loginServerTab.SvcGroup
        let channel = Global.channelType
        let password = LoginData.ins.password

        // uid = "120512169";
        // token = "2a4ea55d14cd182099cf7a3952f54024"
        // Global.platform = "ios"
        // channel = 1;
        // svcGroup = "dev";
        // svcReviewGroup = "dev";
        // Global.APP_VERSION = "1.0.0";
        // params = JSON.stringify({"account":"lzhlryt@163.com","uid":"120512169","istemp":"0","nickname":"lzhlryt@163.com","sessiontime":1722592892,"sessionid":"2a4ea55d14cd182099cf7a3952f54024","remind":false,"ismobile":false})
        // password = "111"

        let reqParam = `uid=${uid}&token=${token}&platform=${Global.platform}&ch=${channel}&group=${svcGroup}&review_group=${svcReviewGroup}&ver=${Global.APP_VERSION}&extras=${params}&password=${password}`;

        Waiting.Show(WaitingTag.Login, 0)

        Http.request({
            host: addr,
            method: "GET",
            reqParam: reqParam,
            cb: (responseJson) => {
                console.log(responseJson)
                if (responseJson) {
                    if (responseJson.ret == 0 && responseJson.data) {
                        LoginData.ins.uid = responseJson.data.uid;
                        LoginData.ins.token = responseJson.data.token;
                        LoginData.ins.gatewayAddrs = responseJson.data.gateway_addr
                        LoginData.ins.openId = responseJson.data.openId
                        LoginData.ins.default_area = responseJson.data.default_area
                        LoginData.ins.default_area_name = responseJson.data.default_area_name

                        // if (responseJson.group == LoginData.ins.loginServerTab.SvcGroup) {
                        //     Global.SERVER_VERSION = Global.APP_VERSION
                        // } else {
                        //     //审核服
                        //     responseJson.data.group = LoginData.ins.loginServerTab.ReviewSvcGroup
                        //     Global.SERVER_VERSION = "0.0.0"
                        // }

                        LoginData.ins.loginGroup = responseJson.group
                        console.log(`loginGroup=${LoginData.ins.loginGroup}`)

                        LoginData.ins.isLogin = true
                        Net.Connect(`${LoginData.ins.gatewayAddrs[0]}`)
                        return
                    } else if (responseJson.ret == 6) {//服务器维护中
                        UIMgr.ins.jumpLayer(tab.Module.Module_RoleInfoNoticePop)
                        EventMgr.emitLocal(LocalEvent.ServerMaintain)
                    } else {
                        //CommonTipsPop.create(`链接失败,code:${responseJson.ret}`)
                        CommonTipsPop.create(LangMgr.getCombineString("Tips_connection_3", [responseJson.ret]))
                    }
                }
                Waiting.Hide(WaitingTag.Login)
            }
        })
    }



    createRole(nickName: string) {
        let _prefixArr = [];
        let _suffixArr = [];
        let prefixSuffixTable = tab.getData().RandomNameTable;
        for (let i = 0; i < prefixSuffixTable.length; i++) {
            let data: tab.RandomNameTable = prefixSuffixTable[i];
            _prefixArr.push(data.FirstName);
            _suffixArr.push(data.LastName);
        }
        // 随机一个名字
        let prefixRdm = Math.floor(Math.random() * _prefixArr.length);
        let suffixRdm = Math.floor(Math.random() * _suffixArr.length);
        if (nickName === "") {
            nickName = _prefixArr[prefixRdm] + _suffixArr[suffixRdm]
            LoginData.ins.nickName = nickName;
        }
        //发送创角协议
        let msg = new proto.Msg_CreateRoleReq()
        msg.name = nickName;
        msg.area = LoginData.ins.default_area
        msg.platform = Global.platform

        Net.Send(proto.Ptl.CreateRoleReq, msg);
    }

    randomString(length: number, chars: string): string {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }

    //----------------处理回调---------------------
    pingInterval: any
    onNetConnect() {
        console.log('ws onNetConnect')
        Reconnect.hide()
        let msg = new proto.Msg_LoginReq()
        msg.uid = LoginData.ins.uid
        msg.token = LoginData.ins.token
        msg.group = LoginData.ins.loginGroup;
        msg.area = LoginData.ins.default_area
        Net.Send(proto.Ptl.LoginReq, msg)

        Func.setItem("lastLoginArea", JSON.stringify({ area: LoginData.ins.default_area, name: LoginData.ins.default_area_name }))

        this.addPingInterval()
    }

    addPingInterval() {
        this.clearPingInterval()
        this.pingInterval = setInterval(() => {
            let msg = new proto.Msg_Ping()
            msg.time = new Date().getTime()
            Net.Send(proto.Ptl.Ping, msg)
        }, 30000)
    }

    clearPingInterval() {
        if (this.pingInterval) {
            clearInterval(this.pingInterval)
            this.pingInterval = null
        }
    }

    on_s2c_Pong(msg: proto.Msg_Pong) {
        let param = new proto.Msg_PingDelay()
        param.delay = (new Date().getTime() - msg.time) / 2
        Net.Send(proto.Ptl.PingDelay, param)
    }

    onNetClose() {
        console.log('ws onNetClose')
        this.clearPingInterval()
        Waiting.Hide(WaitingTag.Login)
        if (!this.isChangeServer) {
            if (SceneMgr.isLoginScene()) {
                console.log("登录场景，走重登逻辑")
            } else {
                Reconnect.create()
            }
        } else {
            SceneMgr.ins.loadScene(ScenesName.login);
        }

    }

    on_s2c_LoginRsp(msg: proto.Msg_LoginRsp) {
        Waiting.Hide(WaitingTag.Login)
        if (msg.error == null) {
            // 等待角色信息
            return
        }

        switch (msg.error.code) {
            case proto.CommonErrorCode.NoRole:
                LoginData.ins.isCreatRole = true;
                LoginData.ins.nickName = "";
                this.createRole(LoginData.ins.nickName);
                break
        }
    }

    on_s2c_CreateRoleRsp(msg: proto.Msg_CreateRoleRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            LoginData.ins.isCreatRole = true
            // // 等待角色信息
            // return
        } else if (msg.error.code == proto.CommonErrorCode.RoleNameExist) {
            this.createRole(LoginData.ins.nickName + this.randomString(4, RandomCharSet))

        } else if (msg.error.code == proto.CommonErrorCode.RoleNameInvalid) {
            this.createRole(LoginData.ins.nickName + this.randomString(8, RandomCharSet))
        }
        // switch (msg.result) {
        //     case proto.Msg_CreatRoleRsp.ErrorCode.Succeed:
        //         LoginData.ins.isCreatRole = true;
        //         break;
        //     case proto.Msg_CreatRoleRsp.ErrorCode.InvalidName:
        //         //名字非法，随机一个名字重新创建角色
        //         this.createRole(LoginData.ins.nickName + this.randomString(8, RandomCharSet))
        //         break;
        //     case proto.Msg_CreatRoleRsp.ErrorCode.DuplicatedName:
        //         //名字重复，在原来名字后面加随机字符串
        //         this.createRole(LoginData.ins.nickName + this.randomString(4, RandomCharSet))
        //         break;
        //     default:
        //         // Waiting.Hide(WaitingTag.Login)
        //         // if (SdkManager.Instance.isSDK()) {
        //         //     console.warn("55555555555555555")
        //         //     this.showLoginFail()
        //         // }
        //         break;
        // }
    }

}