/*
 * @Descripttion: 联盟主界面
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { kNegativeOneNumber, kNoneString } from "../Common/CommonInterface";
import RedDotManager, { IMessageResult, RedDotType } from "../Common/ReddotManager";
import Role from "../Common/Role";
import FightEmojiSelector from "../Fight/FightEmojiSelector";
import FriendPagePfb from "../Friend/FriendPagePfb";
import MainScene from "../Main/MainScene";
import { ShowTips } from "../Utils/GameUtils";
import { AllianTopToggleType, checkRedDotOfApplyList, checkStringIsValid, ChildPageType, FightFromWhichLayer, setRoleAllianceData } from "./AllianceCommonInterface";
import AllianceDataCacheManager from "./AllianceDataCacheManager";
import CreateAlliancePfb from "./CreateAlliancePfb";
import HaveAlliancePagePfb from "./HaveAlliancePagePfb";
import NoneAlliancePagePfb from "./NoneAlliancePagePfb";
import SearchAlliancePfb from "./SearchAlliancePfb";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AllianceLayer extends cc.Component {

    @property(cc.Node)
    node_top_toggle: cc.Node = null;

    @property(cc.Toggle)
    toggle_alliance: cc.Toggle = null;

    @property(cc.Toggle)
    toggle_create_search: cc.Toggle = null;

    @property(cc.Toggle)
    toggle_friend: cc.Toggle = null;

    @property(cc.Label)
    lbl_create_title_dark: cc.Label = null;

    @property(cc.Label)
    lbl_create_title_light: cc.Label = null;

    @property(cc.Node)
    node_create_alliance_pfb: cc.Node = null;

    @property(cc.Node)
    node_search_alliance_pfb: cc.Node = null;

    @property(cc.Node)
    node_none_alliance_pfb: cc.Node = null;

    @property(cc.Node)
    node_have_alliance_pfb: cc.Node = null;

    @property(cc.Node)
    spr_reddot: cc.Node = null;

    @property(FriendPagePfb)
    node_friend_pfb: FriendPagePfb = null;

    @property(cc.Node)
    spr_friend_reddot: cc.Node = null;

    private _bBeQueryAllianceInfo: boolean            = true;  //是否查询过了
    private _self_alliance_uuid: string               = kNoneString;
    private _self_alliance_info: proto.IAllianceInfo  = null;
    private _current_toggle_type: AllianTopToggleType = kNegativeOneNumber;//AllianTopToggleType.ToggleType_Alliance;
    
    onLoad(){
        this.toggle_alliance.node.on("toggle", this.onSelectAlliancePage,            this);
        this.toggle_create_search.node.on("toggle", this.onSelectCreateOrSearchPage, this);
        this.toggle_friend.node.on("toggle", this.onSelectFriendPage,                this);
        this.spr_reddot.active        = false;
        this.spr_friend_reddot.active = false;
        
        this.resetAllNodeNotVisible();

        //监听创建联盟消息
        Net.listenProtocol(proto.Ptl.CreateAllianceRsp, (buffer, ptl) =>{
            let msg = proto.Msg_CreateAllianceRsp.decode(buffer);
            cc.log("CreateAllianceRsp(监听创建联盟消息) : msg " + JSON.stringify(msg))
            if (msg){
                if (msg.result === proto.Msg_CreateAllianceRsp.ErrorCode.Succeed){
                    this.setSelfAllianceInfo(msg.allianceInfo);
                    Role.Instance.RoleData.allianceData.PostRank = tab.AlliancePositionType.AlliancePositionType_Leader;
                    setRoleAllianceData(msg.allianceInfo.baseInfo);
                    this.refreshCreateOrSearchTitle(checkStringIsValid(this._self_alliance_uuid));
                    this.onSelectAlliancePage(null, true);
                    this.switchToggle(AllianTopToggleType.ToggleType_Alliance);
                    Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateMainPageAllianceName);
                    return;
                }
                proto.Msg_CreateAllianceRsp.ErrorCode.HaveAlliance === msg.result           && ShowTips("AlreadyHaveAlliance");
                proto.Msg_CreateAllianceRsp.ErrorCode.MoneyNotEnough === msg.result         && ShowTips("OnlyGoldNotEnough");
                proto.Msg_CreateAllianceRsp.ErrorCode.AllianceInfoIncomplete === msg.result && ShowTips("HaveSensitiveWord");
                proto.Msg_CreateAllianceRsp.ErrorCode.SensitiveWordError === msg.result     && ShowTips("HaveSensitiveWord")
            }
        }, this);

        //监听加入联盟消息
        Net.listenProtocol(proto.Ptl.JoinAllianceRsp, (buffer, ptl) =>{
            let msg = proto.Msg_JoinAllianceRsp.decode(buffer);
            cc.log("JoinAllianceRsp(监听加入联盟消息) : msg " + JSON.stringify(msg))
            if (msg){
                if(proto.Msg_JoinAllianceRsp.ErrorCode.Succeed === msg.result){
                    this.setSelfAllianceInfo(msg.allianceInfo);
                    this.refreshCreateOrSearchTitle(checkStringIsValid(this._self_alliance_uuid));
                    this._current_toggle_type = kNegativeOneNumber;
                    this.onSelectAlliancePage(null, true);
                    return;
                }
                
                proto.Msg_JoinAllianceRsp.ErrorCode.HaveAlliance === msg.result         && ShowTips("AlreadyHaveAlliance");
                proto.Msg_JoinAllianceRsp.ErrorCode.MemberFull === msg.result           && ShowTips("AllianceMemberAlreadyFull");
                proto.Msg_JoinAllianceRsp.ErrorCode.SeasonScoreNotEnough === msg.result && ShowTips("SeasonScoreNotEnough");
            }
        }, this);

        //监听联盟查询信息
        Net.listenProtocol(proto.Ptl.QueryAllianceInfoRsp, (buffer, ptl) =>{
            if(this._bBeQueryAllianceInfo || !checkStringIsValid(Role.Instance.RoleData.allianceData.allianceID)){
                return;
            }
            
            let msg = proto.Msg_QueryAllianceInfoRsp.decode(buffer);
            cc.log("QueryAllianceInfoRsp(监听联盟查询信息) : msg " + JSON.stringify(msg))
            if (msg){
                if (msg.result === proto.CommonErrorCode.Succeed){
                    this.setSelfAllianceInfo(msg.allianceInfo);
                    this._bBeQueryAllianceInfo = true;
                }
                
                if(this.checkIsFriendPage()){
                    return;
                }
                this.refreshAllianceAreaState(true);
            }
        }, this);

        //监听联盟申请处理消息
        Net.listenProtocol(proto.Ptl.DealAllianceJoinRsp, (buffer, ptl)=>{
            let msg = proto.Msg_DealAllianceJoinRsp.decode(buffer);
            cc.log("DealAllianceJoinRsp(监听联盟申请处理消息) : msg " + JSON.stringify(msg))
            if(msg && msg.result === proto.Msg_DealAllianceJoinRsp.ErrorCode.Succeed){
                //同意申请加入，刷新成员数量和申请列表数量
                this._self_alliance_info.applyInfo  = msg.applyInfo;
                this._self_alliance_info.memberInfo = msg.memberInfo;
                checkRedDotOfApplyList(msg.applyInfo.length);
            }
        }, this);
        
        //监听退出联盟消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyExitAllianceInfo, (param: any) =>{
            this.clearSelfAllianceData();
        }, this);

        //监听打开联盟界面消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyOpenAlliance, (param: any)=>{
            this.initData();
        }, this);

        //监听联盟被踢消息
        Net.listenProtocol(proto.Ptl.PushAllianceExpelMember, (buffer, ptl)=>{
            let msg = proto.Msg_PushAllianceExpelMember.decode(buffer);
            cc.log("PushAllianceExpelMember(监听联盟被踢消息) : msg " + JSON.stringify(msg))
            if(msg){
                this.clearSelfAllianceData();
            }
        }, this);

        //监听联盟小红点更新
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateAllianceBtnReddot, (param: any)=>{
            this.checkAllianceRedTip();
        }, this);

        //监听联盟支援小红点更新
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateAllianceSupportReddot, (param: any)=>{
            this.checkAllianceRedTip();
        }, this);
        
        //监听新好友申请
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NewFriendApply, (param: any)=>{
            let retData = (param as IMessageResult);
            let bFightInvitation = MainScene.current_friend_fight_invitation != null;
            this.spr_friend_reddot.active = (retData ? retData.bVisible : false) || bFightInvitation;
        }, this);

        //监听新的好友战斗邀请消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyNewFriendFightInvitation, (param)=>{
            this.spr_friend_reddot.active = MainScene.current_friend_fight_invitation != null;
        }, this);

        //监听好友战斗邀请取消推送消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyCleanFriendFightInvitation, (param: any)=>{
            this.spr_friend_reddot.active = RedDotManager.getInstance().GetRedDotVisible(RedDotType.NewFriendApply);;
        }, this);
        
        //检测新好友申请
        RedDotManager.getInstance().CheckRedDot(RedDotType.NewFriendApply);
    }

    onDestroy(){
        AllianceDataCacheManager.getInstance().destroyAllData();
    }

    public initData(){
        this._self_alliance_uuid = Role.Instance.RoleData.allianceData.allianceID;
        let bValidAllianceUUID = checkStringIsValid(this._self_alliance_uuid);
        
        this.refreshCreateOrSearchTitle(bValidAllianceUUID);
        this.clearFriendPage();
        this.clearAlliancePage();
        this.clearCreateOrSearchPage();
        this.switchToggle(AllianTopToggleType.ToggleType_Alliance);
        //自身联盟uuid合法就查询联盟信息，否则就打开无联盟页面
        bValidAllianceUUID ? 
            this.requestAllianceInfo() : 
            (!this.checkIsFriendPage() && this.setNoneHaveAlliancePage(bValidAllianceUUID));
    }

    /* 检测是否在好友界面
     */
    private checkIsFriendPage(){
        if(FightFromWhichLayer.getInstance().ChildPageState === ChildPageType.FriendPage){
            this.onSelectFriendPage(this.toggle_friend);
            this.toggle_friend.isChecked = true;
            return true;
        }
        return false;
    }

    /* 重置所有节点不可见
     */
    private resetAllNodeNotVisible(){
        let bValidAllianceUUID = checkStringIsValid(Role.Instance.RoleData.allianceData.allianceID);
        this.node_create_alliance_pfb.active = false;
        this.node_search_alliance_pfb.active = false;
        this.node_none_alliance_pfb.active   = !bValidAllianceUUID;
        this.node_have_alliance_pfb.active   = bValidAllianceUUID
        this.node_friend_pfb.node.active     = false;
    }
    
    /* 请求查询联盟信息
     */
    private requestAllianceInfo(){
        this._bBeQueryAllianceInfo = false;
        let msg        = new proto.Msg_QueryAllianceInfoReq();
        msg.allianceID = this._self_alliance_uuid;
        Net.Send(proto.Ptl.QueryAllianceInfoReq, msg);
    }

    /* 设置自身联盟信息
     * @param allianceInfo   联盟信息
     */
    private setSelfAllianceInfo(allianceInfo: proto.IAllianceInfo){
        this._self_alliance_uuid = allianceInfo.baseInfo.allianceID;
        this._self_alliance_info = allianceInfo;
    }

    /* 刷新联盟区域状态
     */
    private refreshAllianceAreaState(bNewInfo: boolean = false){
        //切换到联盟页面
        this._current_toggle_type != AllianTopToggleType.ToggleType_Alliance &&
            this.switchToggle(AllianTopToggleType.ToggleType_Alliance);

        let bValidAllianceUUID = checkStringIsValid(this._self_alliance_uuid);
        this.setNoneHaveAlliancePage(bValidAllianceUUID);
        this.setHaveAlliancePage(bValidAllianceUUID, bNewInfo);
    }

    /* 刷新创建或者搜索页签的标题
     * @param bValidAllianceUUID 联盟ID是否合法
     */
    private refreshCreateOrSearchTitle(bValidAllianceUUID: boolean){
        let visibleText = bValidAllianceUUID ?
            tab.Data.GetKeyValue_ConfigTable().SearchText :
            tab.Data.GetKeyValue_ConfigTable().CreateText;
        this.lbl_create_title_dark.string  = visibleText;
        this.lbl_create_title_light.string = visibleText;
    }

    /* 刷新创建或者搜索区域状态
     */
    private refreshCreateOrSearchAreaState(){
        let bValidAllianceUUID = checkStringIsValid(this._self_alliance_uuid);
        this.refreshCreateOrSearchTitle(bValidAllianceUUID);
        this.setCreateAlliancePage(bValidAllianceUUID);
        this.setSearchAlliancePage(bValidAllianceUUID);
    }

    /* 设置无联盟页面
     * @param bValidAllianceUUID  联盟UUID是否是合法的
     */
    private setNoneHaveAlliancePage(bValidAllianceUUID: boolean){
        if(bValidAllianceUUID){
            this.node_none_alliance_pfb.active && this.node_none_alliance_pfb.getComponent(NoneAlliancePagePfb).destroyPageData();
            this.node_none_alliance_pfb.active = !bValidAllianceUUID;
        } else {
            this.node_none_alliance_pfb.active = !bValidAllianceUUID;
            this.node_none_alliance_pfb.getComponent(NoneAlliancePagePfb).initData();
        }
    }

    /* 设置有联盟页面
     * @param bValidAllianceUUID  联盟UUID是否是合法的
     */
    private setHaveAlliancePage(bValidAllianceUUID: boolean, bNewInfo: boolean){
        if(bValidAllianceUUID){
            this.node_have_alliance_pfb.active = bValidAllianceUUID;
            this.node_have_alliance_pfb.getComponent(HaveAlliancePagePfb).initData(this._self_alliance_info, bNewInfo);
        } else {
            this.node_have_alliance_pfb.active && this.node_have_alliance_pfb.getComponent(HaveAlliancePagePfb).destroyPageData();
            this.node_have_alliance_pfb.active = bValidAllianceUUID;
        }
    }

    /* 设置创建联盟页面
     * @param bValidAllianceUUID  联盟UUID是否是合法的
     */
    private setCreateAlliancePage(bValidAllianceUUID: boolean){
        this.node_create_alliance_pfb.active = !bValidAllianceUUID;
        !bValidAllianceUUID && this.node_create_alliance_pfb.getComponent(CreateAlliancePfb).showPage();   
    }

    /* 设置搜索联盟页面
     * @param bValidAllianceUUID  联盟UUID是否是合法的
     */
    private setSearchAlliancePage(bValidAllianceUUID: boolean){
        if(bValidAllianceUUID){
            this.node_search_alliance_pfb.active = bValidAllianceUUID;
            this.node_search_alliance_pfb.getComponent(SearchAlliancePfb).initData();
        } else {
            this.node_search_alliance_pfb.active && this.node_search_alliance_pfb.getComponent(SearchAlliancePfb).destroyPageData();
            this.node_search_alliance_pfb.active = bValidAllianceUUID;
        }
    }

    /* 切换toggle
     * @param toggleType 
     */
    private switchToggle(toggleType: AllianTopToggleType){
        this.toggle_alliance.isChecked      = (toggleType === AllianTopToggleType.ToggleType_Alliance);
        this.toggle_create_search.isChecked = (toggleType === AllianTopToggleType.ToggleType_CreateOrSearchAlliance);
        this.toggle_friend.isChecked        = (toggleType === AllianTopToggleType.ToggleType_Friend);
        this._current_toggle_type           = toggleType;
    }

    /* 清空之前所选页面的数据
     */
    private clearPreSelectPage(type: AllianTopToggleType){
        this.clearAlliancePage(); 
        this.clearCreateOrSearchPage();
        this.clearFriendPage();
        this._current_toggle_type = type;
    }

    /* 清空创建或者搜索页面
     */
    private clearCreateOrSearchPage(){
        this.node_have_alliance_pfb.active && this.node_have_alliance_pfb.getComponent(HaveAlliancePagePfb).destroyPageData();
        this.node_none_alliance_pfb.active && this.node_none_alliance_pfb.getComponent(NoneAlliancePagePfb).destroyPageData();
        this.node_have_alliance_pfb.active = false;
        this.node_none_alliance_pfb.active = false;
    }

    /* 清空联盟页面
     */
    private clearAlliancePage(){
        this.node_search_alliance_pfb.active && this.node_search_alliance_pfb.getComponent(SearchAlliancePfb).destroyPageData();
        this.node_search_alliance_pfb.active = false;
        this.node_create_alliance_pfb.active = false;
    }

    /* 清空好友界面
     */
    private clearFriendPage(){
        this.node_friend_pfb.node.active && this.node_friend_pfb.destroyPageData();
        this.node_friend_pfb.node.active = false;
    }

    /* 清空联盟数据
     */
    private clearSelfAllianceData(){
        this._self_alliance_info = null;
        this._self_alliance_uuid = kNoneString;
        this.refreshCreateOrSearchTitle(checkStringIsValid(this._self_alliance_uuid));
        this._current_toggle_type = kNegativeOneNumber;
        this.onSelectAlliancePage(null);
        this.switchToggle(AllianTopToggleType.ToggleType_Alliance);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateMainPageAllianceName);
    }

    private onSelectAlliancePage(node: cc.Toggle, bNewInfo: boolean = false){
        if(this._current_toggle_type === AllianTopToggleType.ToggleType_Alliance){
            return;
        }
        
        this.clearPreSelectPage(AllianTopToggleType.ToggleType_Alliance);
        this.refreshAllianceAreaState(bNewInfo);
    }

    private onSelectCreateOrSearchPage(node: cc.Toggle){
        if(this._current_toggle_type === AllianTopToggleType.ToggleType_CreateOrSearchAlliance){
            return;
        }

        this.clearPreSelectPage(AllianTopToggleType.ToggleType_CreateOrSearchAlliance);
        this.refreshCreateOrSearchAreaState();
    }

    private onSelectFriendPage(node: cc.Toggle){
        if(this._current_toggle_type === AllianTopToggleType.ToggleType_Friend){
            return;
        }

        this.clearPreSelectPage(AllianTopToggleType.ToggleType_Friend);
        this.node_friend_pfb.node.active = true;
        this.node_friend_pfb.initData();
    }

    /* 检测联盟红点
     */
    private checkAllianceRedTip(){
        let bHaveSupport       = RedDotManager.getInstance().GetRedDotVisible(RedDotType.AllianceSupport);
        let bHaveApply         = RedDotManager.getInstance().GetRedDotVisible(RedDotType.AllianceApplyInfo);
        this.spr_reddot.active = bHaveApply || bHaveSupport;
    }
}
