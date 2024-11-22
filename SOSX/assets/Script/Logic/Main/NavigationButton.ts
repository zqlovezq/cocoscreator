/**
 * 
 */

import Analytics, { CAEvtID, CAEvtName } from "../../../Update/Analytics";
import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { DefaultEnterPageType, FightFromWhichLayer } from "../Alliance/AllianceCommonInterface";
import ManagerNewBattleMap from "../BattleMapStore/ManagerNewBattleMap";
import { kNoneString, kOneNumber } from "../Common/CommonInterface";
import ManagerNewCardRedDot from "../Common/ManagerNewCardRedDot";
import RedDotManager, { IMessageResult, RedDotType } from "../Common/ReddotManager";
import Role from "../Common/Role";
import ManagerNewEmotionRedDot from "../EmotionStore/ManagerNewEmotionRedDot";
import GuideController from "../Guide/GuideController";
import { setTextWithAction, ShowTips } from "../Utils/GameUtils";
import { NodeLayerName } from "./MainScene";

const {ccclass, property} = cc._decorator;

/* 
* 按钮点击限制节流
* @param lockTime 阻塞时间
* @param callBackFun 节流回调 多次点击的时候给一个回调函数提示用户不要多次点击 
**/
function ButtonLock(lockTime: number = 0.3, callBackFun?: Function): any {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        let oldFun: Function = descriptor.value;
        let isLock: boolean = false;
        descriptor.value = function (...args: any[]) {
            if (isLock) {
                callBackFun?.()
                return
            }
            isLock = true;

            setTimeout(() => {
                isLock = false
            }, lockTime * 1000);
            oldFun.apply(this, args);
        }
        return descriptor
    }
}

@ccclass
export default class NavigationButton extends cc.Component {

    @property(cc.Toggle)
    toggleShop: cc.Toggle = null;

    @property(cc.Toggle)
    toggleDeck: cc.Toggle = null;

    @property(cc.Toggle)
    toggleBattle: cc.Toggle = null;

    @property(cc.Toggle)
    toggleActivity: cc.Toggle = null;

    @property(cc.Toggle)
    toggleAlliance: cc.Toggle = null;

    @property(cc.Button)
    btn_shop_func: cc.Button = null;

    @property(cc.Node)
    spr_alliance_reddot: cc.Node = null;

    @property(cc.Sprite)
    spr_deck_reddot: cc.Sprite = null;

    @property(cc.Sprite)
    spr_shop_reddot: cc.Sprite = null;

    @property(cc.Node)
    node_fight_invitation: cc.Node = null;

    @property(cc.Sprite)
    spr_alliance_fight_invitation: cc.Sprite = null;

    @property(cc.Label)
    lbl_title: cc.Label = null;

    @property({displayName:"社交按钮", type:cc.Sprite})
    s_sj:cc.Sprite = null;

    @property(cc.Sprite)
    challengeIcon: cc.Sprite = null

    @property(cc.Node)
    challengenode: cc.Node = null

    protected shopCallback:Function = null;
    protected deckCallback:Function = null;
    protected battleCallback:Function = null;
    protected allianceCallback:Function = null;
    protected chanllengeCallback:Function = null;

    protected curindex:NodeLayerName;
    protected toggleDict:tab.Dictionary<NodeLayerName, cc.Toggle>;
    protected toggleShopReddotDict:tab.Dictionary<string, boolean> = new tab.Dictionary<string, boolean>();

    setShopCallback(cb:Function) {
        this.shopCallback = cb;
    }

    setDeckCallback(cb:Function) {
        this.deckCallback = cb;
    }

    setBattleCallback(cb:Function) {
        this.battleCallback = cb;
    }

    setAllianceCallback(cb:Function) {
        this.allianceCallback = cb;
    }

    setChanllengeCallback(cb:Function) {
        this.chanllengeCallback = cb; 
    }
    
    /*  */
    protected showSheJiaoIcon(show:boolean){
        this.s_sj.node.active = show;
    }

    /*  */
    onLoad () {
        this.node_fight_invitation.active    = false;
        this.spr_deck_reddot.node.active     = false;
        this.spr_shop_reddot.node.active =  false
        this.spr_alliance_reddot.active = false;
        this.curindex = NodeLayerName.BattleLayer;
        this.toggleDict = new tab.Dictionary<NodeLayerName, cc.Toggle>();
        this.toggleDict.setValue(NodeLayerName.ShopLayer, this.toggleShop)
        this.toggleDict.setValue(NodeLayerName.DeckLayer, this.toggleDeck)
        this.toggleDict.setValue(NodeLayerName.BattleLayer, this.toggleBattle)
        this.toggleDict.setValue(NodeLayerName.ChallengLayer, this.toggleActivity)
        this.toggleDict.setValue(NodeLayerName.Alliance, this.toggleAlliance)

        //监听跳转信息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_JumpShop, (param: any)=>{
            this.onClickShopForJump();
            this.toggleShop.isChecked = true;
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_AutoScrollAssignPos, param);
        }, this);

        //监听联盟小红点更新
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateAllianceBtnReddot, (param: any)=>{
            let bHaveSupport    = RedDotManager.getInstance().GetRedDotVisible(RedDotType.AllianceSupport);
            let bHaveApply      = RedDotManager.getInstance().GetRedDotVisible(RedDotType.AllianceApplyInfo);
            let bHaveNewInnerMsg = RedDotManager.getInstance().GetRedDotVisible(RedDotType.NewAllianceInnerMsg);
            this.refreshAllianceReddot(bHaveSupport || bHaveApply || bHaveNewInnerMsg);
        }, this);

        //监听联盟中有可请求支援消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateAllianceSupportReddot, (param: any)=>{
            let retData = (param as IMessageResult);
            let bHaveApply      = RedDotManager.getInstance().GetRedDotVisible(RedDotType.AllianceApplyInfo);
            let bHaveNewInnerMsg = RedDotManager.getInstance().GetRedDotVisible(RedDotType.NewAllianceInnerMsg);
            let bVisible = (retData && retData.bVisible) || bHaveApply || bHaveNewInnerMsg;
            this.refreshAllianceReddot(bVisible);
        }, this);

        //监听新好友申请
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NewFriendApply, (param: any)=>{
            let retData          = (param as IMessageResult);
            let bHaveSupport     = RedDotManager.getInstance().GetRedDotVisible(RedDotType.AllianceSupport);
            let bHaveApply       = RedDotManager.getInstance().GetRedDotVisible(RedDotType.AllianceApplyInfo);
            let bHaveNewInnerMsg = RedDotManager.getInstance().GetRedDotVisible(RedDotType.NewAllianceInnerMsg);
            let bVisible         = (retData && retData.bVisible) || bHaveApply || bHaveNewInnerMsg || bHaveSupport;
            this.refreshAllianceReddot(bVisible);
        }, this);

        //监听新卡牌
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NewCard, (param: any)=>{
            let retData           = (param as IMessageResult);
            let bLeftTalent       = ManagerNewCardRedDot.getInstance().findHasLeftTalent();
            let bHaveNewEmotion   = ManagerNewEmotionRedDot.getInstance().findHasNewEmotion();
            let bHaveNewBattleMap = ManagerNewBattleMap.getInstance().findHasNewMap();
            this.spr_deck_reddot.node.active = bHaveNewBattleMap || bHaveNewEmotion || bLeftTalent || (retData ? retData.bVisible : false);
        }, this);

        //监听天赋点
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NewTalent, (param:any)=>{
            let bShow             = param as boolean;
            let bHaveNewCard      = ManagerNewCardRedDot.getInstance().findHasNewCard();
            let bHaveNewEmotion   = ManagerNewEmotionRedDot.getInstance().findHasNewEmotion();
            let bHaveNewBattleMap = ManagerNewBattleMap.getInstance().findHasNewMap();
            this.spr_deck_reddot.node.active = bHaveNewBattleMap || bHaveNewEmotion || bHaveNewCard || bShow;
        }, this);

        //监听新表情
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NewEmotion, (param: any)=>{
            let retData           = (param as IMessageResult);
            let bLeftTalent       = ManagerNewCardRedDot.getInstance().findHasLeftTalent();
            let bHaveNewCard      = ManagerNewCardRedDot.getInstance().findHasNewCard();
            let bHaveNewBattleMap = ManagerNewBattleMap.getInstance().findHasNewMap();
            this.spr_deck_reddot.node.active = bHaveNewBattleMap || bHaveNewCard || bLeftTalent || (retData ? retData.bVisible : false);
        }, this);

        //监听新战场地图
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NewBattleMap, (param: any)=>{
            let retData         = (param as IMessageResult);
            let bLeftTalent     = ManagerNewCardRedDot.getInstance().findHasLeftTalent();
            let bHaveNewCard    = ManagerNewCardRedDot.getInstance().findHasNewCard();
            let bHaveNewEmotion = ManagerNewEmotionRedDot.getInstance().findHasNewEmotion();
            this.spr_deck_reddot.node.active = bHaveNewEmotion || bHaveNewCard || bLeftTalent || (retData ? retData.bVisible : false);
        }, this);

        //监听战斗邀请消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyNewFightInvitation, (param: any)=>{
            let retData = (param as IMessageResult);
            if(!retData){
                return;
            }
            let fightType = retData.extraParam;
            let tileStr   = kNoneString;
            retData.bVisible && (tileStr   = (fightType === proto.FightType.AlliancePvE || 
                                                fightType === proto.FightType.FriendPve || 
                                                fightType === proto.FightType.WorldChannelPvE) ? 
                            tab.Data.GetKeyValue_ConfigTable().InfiniteDefenseTip : 
                            tab.Data.GetKeyValue_ConfigTable().FriendMatchTip);
            retData.bVisible && (this.lbl_title.string = tileStr);
            this.refreshNewFightInvitation(retData.bVisible);
        }, this);

        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_SetChallengeIcon, (param)=>{
            let cfg:tab.ChallengeTable = tab.Data.ChallengeTableByID.getValue(Role.Instance.challengeData.challengeData.challengeId)
            if(cfg) {
                this.challengenode.active = true
                this.challengeIcon.setTexture(cfg.ChalIcon)
            } else {
                this.challengenode.active = false
            }
        }, this);

        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_SetShopReddotVisible, (param)=>{
            this.toggleShopReddotDict.setValue(param.name, param.bshow)
            let bshow:boolean = false
            this.toggleShopReddotDict.forEach((key, value)=>{
                bshow = bshow || value
            })
            this.spr_shop_reddot.node.active = bshow
        }, this)
        this.btn_shop_func.node.active = Role.Instance.RoleGrade < kOneNumber;
        //检测新好友申请
        RedDotManager.getInstance().CheckRedDot(RedDotType.NewFriendApply);
    }

    /*  */
    onClickShopForJump(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyCloseCopyDeck);
        FightFromWhichLayer.getInstance().DefaultEnterPageState = DefaultEnterPageType.FightType;
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_ResumeDeckLayerDefault, null);
        if(Role.Instance.RoleGrade < kOneNumber){
            ShowTips("OpenConditionOfRankLv");
            this.toggleDict.getValue(this.curindex).check()
            return;
        }

        //上报打点数据
        //Analytics.Instance.EventSuccess(CAEvtID.EventTracking, CAEvtName.ClickShop); /* zhibo-@20230410 for <删除打点> */
        if(this.shopCallback) {
            this.shopCallback();
        }
        this.showSheJiaoIcon(true);
        this.curindex = NodeLayerName.ShopLayer
    }
    @ButtonLock(0.3, () => { console.log("点击次数过快") })
    onClickShop() {
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyCloseCopyDeck);
        FightFromWhichLayer.getInstance().DefaultEnterPageState = DefaultEnterPageType.FightType;
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_ResumeDeckLayerDefault, null);
        if(Role.Instance.RoleGrade < kOneNumber){
            ShowTips("OpenConditionOfRankLv");
            this.toggleDict.getValue(this.curindex).check()
            return;
        }

        /* zhibo-@20230421 for <滚动的时候会直接调用到这里，导致设置商店的位置的 LocalMsg_AutoScrollDailyGiftNode 通知不起作用 > */
        //Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_AutoScrollGiftOrEvilNode, null)

        //上报打点数据
        //Analytics.Instance.EventSuccess(CAEvtID.EventTracking, CAEvtName.ClickShop); /* zhibo-@20230410 for <删除打点> */
        if(this.shopCallback) {
            this.shopCallback();
        }
        this.showSheJiaoIcon(true);

        this.curindex = NodeLayerName.ShopLayer;
        this.checkShopToggleIsCheck();
    }
    @ButtonLock(0.3, () => { console.log("点击次数过快") })
    onClickDeck() {
        FightFromWhichLayer.getInstance().DefaultEnterPageState = DefaultEnterPageType.FightType;
        if(this.deckCallback) {
            this.deckCallback();
        }
        this.showSheJiaoIcon(true);

        this.curindex = NodeLayerName.DeckLayer
        this.checkShopToggleIsCheck();
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_ResetDeckLayer);
        if (GuideController.Instance.isGuiding()) {
            Net.pushLoaclMessage(LOCAL_MESSAGE.GUIDE_MAIN, 5)
        }
    }
    @ButtonLock(0.3, () => { console.log("点击次数过快") })
    onClickBattle(bRefresh: boolean = true) {
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyCloseCopyDeck);
        FightFromWhichLayer.getInstance().DefaultEnterPageState = DefaultEnterPageType.FightType;
        if(this.battleCallback) {
            this.battleCallback();
        }
        this.curindex = NodeLayerName.BattleLayer

        this.showSheJiaoIcon(true);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_ResumeDeckLayerDefault, null);
        bRefresh && this.refreshSeasonInfo();
        this.checkShopToggleIsCheck();
        if (GuideController.Instance.isGuiding()) {
            Net.pushLoaclMessage(LOCAL_MESSAGE.GUIDE_MAIN, 9)
        }
    }
    @ButtonLock(0.3, () => { console.log("点击次数过快") })
    onClickAlliance() {
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyCloseCopyDeck);
        FightFromWhichLayer.getInstance().DefaultEnterPageState = DefaultEnterPageType.SocialType;
        if(Role.Instance.RoleGrade < kOneNumber){
            ShowTips("OpenConditionOfRankLv");
            this.toggleDict.getValue(this.curindex).check()
            return;
        }

        if(this.curindex === NodeLayerName.Alliance){
            return;
        }
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_ResumeDeckLayerDefault, null);
        //ShowTips("FunctionClosedTip");
        //this.toggleDict.getValue(this.curindex).check()
        if(this.allianceCallback) {
            this.allianceCallback();
        }
        this.curindex = NodeLayerName.Alliance;
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyOpenAlliance);
        this.checkShopToggleIsCheck();
    }

    @ButtonLock(0.3, () => { console.log("点击次数过快") })
    onClickActivity() {
        FightFromWhichLayer.getInstance().DefaultEnterPageState = DefaultEnterPageType.ChallengeType;
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyCloseCopyDeck);
        if(this.curindex === NodeLayerName.ChallengLayer){
            return;
        }
        this.curindex = NodeLayerName.ChallengLayer
        //上报打点数据
        //Analytics.Instance.EventSuccess(CAEvtID.EventTracking, CAEvtName.ClickActivity); /* zhibo-@20230410 for <删除打点> */
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_ResumeDeckLayerDefault, null);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_SelecetNavigationBtn, this.curindex);

        // ShowTips("FunctionClosedTip");
        this.toggleDict.getValue(this.curindex).check()
        if(this.chanllengeCallback){
            this.chanllengeCallback()
        }
        this.checkShopToggleIsCheck();
    }

    checkDeck() {
        this.curindex = NodeLayerName.DeckLayer
        if(this.toggleDeck.isChecked){
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_RefreshRecommendLayer);
            return
        }
        this.toggleDeck.check();
        this.onClickDeck();
    }

    checkBattle() {
        this.curindex = NodeLayerName.BattleLayer
        if(this.toggleBattle.isChecked){
            return
        }
        this.toggleBattle.check();
        this.onClickBattle();
    }

    checkAlliance(){
        if(this.toggleAlliance.isChecked){
            return
        }
        this.toggleAlliance.check();
        this.onClickAlliance();
        this.curindex = NodeLayerName.Alliance
    }

    checkShop(){
        this.curindex = NodeLayerName.ShopLayer
        if(this.toggleShop.isChecked){
            return
        }
        this.toggleShop.check()
        this.onClickShop()
    }

    checkChallenge(){
        this.curindex = NodeLayerName.ChallengLayer
        if(this.toggleActivity.isChecked){
            return
        }
        this.toggleActivity.check()
        this.onClickActivity()
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_SelecetNavigationBtn, this.curindex);
    }

    refreshSeasonInfo(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_RereshSeasonInfo, null);
    }

    /* 刷新联盟小红点可见性
     * @param bVisible  是否可见
     */
    refreshAllianceReddot(bVisible: boolean){
        this.spr_alliance_reddot.active = bVisible;
    }

    /* 刷新联盟中新战斗邀请
     * @param bPlay 是否播放动画
     */
    private refreshNewFightInvitation(bPlay: boolean){
        this.node_fight_invitation.active = bPlay;
        if(bPlay){
            let aniNode = this.spr_alliance_fight_invitation.getComponent(cc.Animation);
            if(aniNode){
                aniNode.play("timeboxbubblebreath01");
            }
        }
    }

    /* 检测当前是不是在联盟界面
     */
    public checkCurrentIsAlliancePage(){
        return this.toggleAlliance.isChecked;
    }

    /**
     * 取得卡库节点
     */
    public getDeckToggleNode(){
        return this.toggleDeck.node;
    }

    private checkShopToggleIsCheck(){
       Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_SetPlayEmotionTimer, this.toggleShop.isChecked);
    }
}
