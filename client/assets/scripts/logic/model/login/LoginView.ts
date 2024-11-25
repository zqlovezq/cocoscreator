import { _decorator, Button, EditBox, instantiate, Label, Layers, Node, Size, Sprite, SpriteAtlas, SpriteFrame, sys, Tween, tween, UITransform, Vec3, view } from 'cc';
import { ViewScreen } from '../../../framework/base/ViewScreen';
import { UIMgr } from '../../mgr/UIMgr';
import { Func } from '../../utils/Func';
import { ResMgr } from '../../mgr/ResMgr';
import { EventMgr } from '../../mgr/EventMgr';
import { LocalEvent } from '../../define/LocalEvent';
import { PREVIEW } from 'cc/env';
import { LoginControl } from './LoginControl';
import { LoginData } from './LoginData';
import { Reconnect } from '../Reconnect';
import { SceneMgr, ScenesName } from '../../mgr/SceneMgr';
import { proto } from 'client_protocol';
import { tab } from '../../../Table/table_gen';
import { ViewName } from '../../define/ViewDefine';
import { ItemPoolMgr } from '../item/ItemPoolMgr';
import { FightMsgControl } from '../../fight/FightMsgControl';
import Sound from '../../utils/Sound';
import { ChannelMgr } from '../../../channel/ChannelMgr';
import { Global } from '../../../Global';
import { GuideController } from '../../guide/GuideController';
import { RoleData } from '../role/RoleData';
import { Net } from '../../net/Net';
import { AdMgr } from '../AdMgr';
import { LoginServerChooseItem } from './LoginServerChooseItem';
import { RoleControl } from '../role/RoleControl';
import SensitiveWordsManager from '../../utils/SensitiveWordsManager';
const { ccclass, property } = _decorator;

@ccclass('LoginView')
export class LoginView extends ViewScreen {
    @property(Sprite)
    spr: Sprite = null

    @property(Node)
    previewNode: Node = null

    @property(Button)
    sdkLoginBtn: Button = null
    @property(Button)
    testSdkBtn: Button = null

    @property(EditBox)
    ebAccount: EditBox = null;

    @property(EditBox)
    ebPassword: EditBox = null;

    @property(Button)
    enterBtn: Button = null;

    @property(Node)
    serverList: Node = null;

    @property(Label)
    serverName: Label = null;
    @property(Node)
    serverContent: Node = null;
    @property(Node)
    serverItem: Node = null;

    @property(LoginServerChooseItem)
    serverChooseItem: LoginServerChooseItem = null

    @property(Node)
    testLayout:Node = null

    private currSelectId = 0;

    protected onLoad(): void {
        super.onLoad()
        this.testLayout.active = PREVIEW
        this.ebPassword.string = "111"
        this.ebAccount.string = Func.getItem("custom_account") || "";
        this.currSelectId = Number(Func.getItem("custom_server_id"));

        if (!this.currSelectId) {
            this.currSelectId = PREVIEW ? 2 : ChannelMgr.getDefaultServerId();
        }
        LoginData.ins.setServerId(this.currSelectId)

        this.previewNode.active = PREVIEW || ChannelMgr.isDevChannel

        this.testSdkBtn.node.active = Global.isDebug
        if (!LoginControl.ins.isChangeServer) {
            this.checkSdkOk()
        }

    }

    protected start(): void {
        this.showArea()
        if (!LoginControl.ins.isChangeServer) {
            this.initTestServerList();
            this.updateServerName();
            RoleControl.ins.updateNoticeRed();
            SensitiveWordsManager.ins.Init()
        } else {
            LoginControl.ins.isChangeServer = false;
            LoginControl.ins.connect();
        }

    }
    register(): void {
        EventMgr.onLocal(LocalEvent.LocalEvent_Begin, this.LocalEvent_Begin, this)
        EventMgr.onLocal(LocalEvent.LoginProcessComplete, this.on_local_LoginProcessComplete, this)
        EventMgr.onLocal(LocalEvent.ServerMaintain, this.on_local_ServerMaintain, this)
    }

    LocalEvent_Begin(arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any) {
        console.log("收到事件----", arg1, arg2, arg3, arg4, arg5)
    }

    onClickLogin() {
        if (this.ebAccount.string.length == 0) {
            console.log("账号不能为空")
            return
        }
        Func.setItem("custom_account", this.ebAccount.string)
        Func.setItem("custom_server_id", this.currSelectId)
        LoginData.ins.setServerId(this.currSelectId)
        LoginControl.ins.login(this.ebAccount.string, this.ebPassword.string, "")

    }

    on_local_LoginProcessComplete() {
        if (
            RoleData.ins.IsGuideFinished() || 
            Number(RoleData.ins.clientData.guideTrunk) >= 100) {
            this.enterMainScene()
        } else {
            // 开始战斗新手战斗
            let msg = new proto.Msg_StartStageReq();
            msg.stageId = 1;
            Net.Send(proto.Ptl.StartStageReq, msg)
        }
    }
    showArea() {
        this.serverChooseItem.node.active = false
        let str = Func.getItem("lastLoginArea")
        if (str) {
            try {
                let dd = JSON.parse(str)
                if (dd && dd.area) {
                    this.serverChooseItem.node.active = true
                    let data: any = {}
                    data.id = dd.area
                    data.name = dd.name
                    data.status = 3
                    data.role_level = 0
                    this.serverChooseItem.initData(data)
                }
            } catch (e) {

            }
        }

    }

    on_local_ServerMaintain() {
        if (this.serverChooseItem.node.active) {
            this.serverChooseItem.serverData.status = 1
            this.serverChooseItem.initData(this.serverChooseItem.serverData)
        }
    }
    enterMainScene() {
        SceneMgr.ins.loadScene(ScenesName.main)
    }

    onClickTest() {
        // UIMgr.ins.show({ viewName: ViewName.DynamicAtlas })
        UIMgr.ins.show({ viewName: ViewName.AzheGmPop })
        //UIMgr.ins.show({ viewName: ViewName.BagPop })
    }

    onClickFight() {
        FightMsgControl.ins.testFight()
    }

    onClickWorldboss() {
        FightMsgControl.ins.testFight(tab.getData().GetKeyValue_ConfigTable().WorldBossStageId)
    }

    onClickPvp(){
        FightMsgControl.ins.testFightPvp()
    }
    onClickPvpMsg(){
        FightMsgControl.ins.testFightPvpMsg()
    }

    onClickServer() {
        this.serverList.active = true;
    }

    initTestServerList() {

        let datas = tab.getData().ServerlistTable;
        for (let key in datas) {
            let item = instantiate(this.serverItem);
            item.active = true;
            item["Id"] = datas[key].ID;
            item["Name"] = datas[key].Name;
            item.getChildByName("nameLab").getComponent(Label).string = datas[key].Name;
            item.on(Node.EventType.TOUCH_END, this.onClickServerItem, this);
            this.serverContent.addChild(item);
        }
    }
    updateServerName() {
        this.serverName.string = LoginData.ins.getServerlistTable().Name;
    }
    onClickServerItem(event) {
        let target = event.target;
        this.currSelectId = target.Id;
        this.serverList.active = false;
        // this.serverName.string=target.Name;
        this.currSelectId = target.Id;
        LoginData.ins.setServerId(this.currSelectId)
        this.updateServerName();
        // console.log("FFFFF")
    }

    sdkLoginClick() {
        if (ChannelMgr.isDevChannel) {
            return
        }
        ChannelMgr.login({}, (params: any) => {
            console.log("sdkLoginClick")
            if (params.code == 0) {
                LoginControl.ins.sdkLogin()
            } else {
                console.log("登录失败")
            }
        })
    }

    onShowAd() {
        // AdMgr.ins.playVideoAd(tab.AdType.AdType_MainChapterReward, () => {
        //     console.log("播放成功")
        // })
        UIMgr.ins.show({ viewName: ViewName.SdkTestPop })
    }

    checkSdkOk() {
        this.sdkLoginBtn.node.active = Global.isDebug //!this.previewNode.active
        if (ChannelMgr.isDevChannel) {
            AdMgr.ins.initSdk()
            return
        }
        let sdkOk = ChannelMgr.isSdkInitOk()
        console.log("initSdkOk", sdkOk)
        if (sdkOk == 1) {
            this.sdkLoginBtn.node.active = true
            AdMgr.ins.initSdk()
            this.sdkLoginClick()
            return
        }
        this.scheduleOnce(() => {
            this.checkSdkOk()
        }, 1)
    }


}

