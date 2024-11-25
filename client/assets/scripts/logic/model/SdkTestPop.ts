import { _decorator, Animation, AnimationClip, Color, director, game, Game, Graphics, instantiate, js, Label, Layers, Material, Node, Prefab, Rect, resources, sp, Sprite, SpriteAtlas, SpriteFrame, sys, Texture2D, v3 } from 'cc';
import { ViewPop } from '../../framework/base/ViewPop';
import { SceneMgr, ScenesName } from '../mgr/SceneMgr';
import { UIMgr } from '../mgr/UIMgr';
import { proto } from 'client_protocol';
import { MathAngle } from '../../framework/collision/Maths';
import { ViewName } from '../define/ViewDefine';
import { LoadResAsync, ResMgr } from '../mgr/ResMgr';
import { tab } from '../../Table/table_gen';
import { Field } from 'protobufjs';
import Fixed from '../../framework/collision/Fixed';
import { CommonTipsPop, CommonTipsPopCloseType } from './common/CommonTipsPop';
import { FPSAvatar } from '../fight/animation/FPSAvatar';
import { Loading } from './Loading';
import { Random } from '../fight/util/Random';
import { Bridge } from '../../framework/Bridge';
import { ChannelMgr } from '../../channel/ChannelMgr';
import { Func } from '../utils/Func';
import { AdMgr } from './AdMgr';
import { LoginControl } from './login/LoginControl';
import { Global } from '../../Global';
import { P8PostEventName } from '../../channel/ChannelDefine';
const { ccclass, property } = _decorator;

@ccclass('SdkTestPop')
export class SdkTestPop extends ViewPop {

    register(): void {
    }


    onLoginClick() {
        ChannelMgr.login({}, (params: any) => {
            console.log("sdkLoginClick")
            if (params.code == 0) {
                // LoginControl.ins.sdkLogin()
            } else {
                console.log("登录失败")
            }
        })
    }

    onAdInitClick() {
        ChannelMgr.initRewardedAd({}, (retData: any) => {
            if (retData) {
                retData.code = Func.checkInt(retData.code)
            }
        })
    }
    onAdShowClick() {
        AdMgr.ins.playVideoAd(tab.AdType.AdType_MainChapterReward, () => {
            console.log("播放成功")
        })
    }

    getRoleInfo() {
        let t_obj: any = {}

        t_obj.diamond = 100
        t_obj.gold = 100

        t_obj.roleID = "test_sdk_roleId"
        t_obj.roleName = "test_sdk_roleName"
        t_obj.roleLevel = 1
        t_obj.vipLevel = 1
        t_obj.serverID = 1
        t_obj.serverName = "test_sdk_1服"
        t_obj.createRoleTime = Math.round(Date.now() / 1000) ;
        t_obj.levelUpTime = Math.round(Date.now() / 1000);
        t_obj.partyName = "无"
        return t_obj
    }

    onCreateRoleClick() {
        ChannelMgr.createRole(this.getRoleInfo())
    }
    onIntoServerClick() {
        ChannelMgr.intoServer(this.getRoleInfo())
    }
    onUpLvClick() {
        ChannelMgr.roleLevelUp(this.getRoleInfo())
    }
    onLogoutServer(){
        ChannelMgr.roleLogoutServer(this.getRoleInfo())
    }
    onRoleCompleteTutorial(){
        ChannelMgr.roleCompleteTutorial(this.getRoleInfo())
    }
    onAccountCenterClick() {
        ChannelMgr.accountCenter(this.getRoleInfo())
    }

    onExitGame() {
        ChannelMgr.exitGame(true, "");
    }
    onLogOut() {
        ChannelMgr.logout("", () => {

            console.log("重启游戏代码")
            game.restart()
        });
    }

    onPay() {
        //SDK支付
        let t_obj: any = this.getRoleInfo()


        let orderId = "sdasdas"
        t_obj.onLineTime = "1"

        t_obj.objJson = orderId
        t_obj.orderId = orderId

        t_obj.gameOrderIdTst = Global.isDebug ? 1 : 0//@"0"是正式环境订单  @"1" 是测试环境订单

        let rechangeTab = tab.getData().RechargeTableById.getValue(1)

        t_obj.productld = rechangeTab[ChannelMgr.channelTab.ProductType]//    "com.cjxd2.0.99"
        t_obj.ptPrice = ChannelMgr.getSdkRechargePrice(rechangeTab)
        t_obj.rmb = ChannelMgr.getSdkRechargePrice(rechangeTab)
        t_obj.productDesc = rechangeTab.Desc
        t_obj.extraInfo = { svc_group: "test" } //@"0.01"
        t_obj.goodNum = 1;
        t_obj.ratio=10;
        t_obj.buyTitle=rechangeTab.Desc;
        t_obj.buyName=rechangeTab.Desc;
        t_obj.productDesc=rechangeTab.Desc;
        ChannelMgr.pay(t_obj)
    }

    onOpenUrl(){
        ChannelMgr.openURL("https://www.facebook.com/cjxd.re.tw/")
    }
    onShare(){
        console.log("js调用分享")
        let t_obj:any = {}
        t_obj.roleID = "roleid_test"
        t_obj.serverID = "7" //sdk需要是逻辑服id
        t_obj.url = ""

        ChannelMgr.share(t_obj, (retData) => {
           console.log("################ share " + JSON.stringify(retData));
            if (retData.code == 0) {
                // this.testLoopTask();
            }
        });
    }
    onComment(){
        console.log("js调用商店评分")
        ChannelMgr.comment("{}", (retData) => {
            // console.log("##################### comment ret" + JSON.stringify(retData));
            console.log("商店评分============"+retData)
            if (retData.code == 0) {
                // MeControl.getInstance().setClintData(TypeClientData.REPUTATION, 1);
                // SceneViewReputation.getInstance().hideScene();
                // console.log("商店评分============回调")
            }
        });
    }
    onPostEvent(){
        ChannelMgr.postEvent(P8PostEventName.test)
    }

    onKefu(){
        ChannelMgr.openCustomService()
    }

    openActionWebView(){
        ChannelMgr.openActionWebView("https://www.facebook.com/cjxd.re.tw/")
    }

    onShopInfo(){
        ChannelMgr.getShopInfo()
    }
}


