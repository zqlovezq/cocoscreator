/*
 * 
 */
import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { isValidObj, kNoneString, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import WriteAllianceMailPopLayer from "../MailBox/WriteAllianceMailPopLayer";
import { setGray, showPopLayerV2, ShowTips } from "../Utils/GameUtils";
import { checkStringIsValid, RecordCurrentAllianceID, setAllianceBadge } from "./AllianceCommonInterface";
import ExitAllianceConfirmPopLayer from "./ExitAllianceConfirmPopLayer";
import JoinAllianceTipPfb from "./JoinAllianceTipPfb";
import ManagerAllianceJoinMsgPopLayer from "./ManagerAllianceJoinMsgPopLayer";
import ManagerAlliancePopLayer from "./ManagerAlliancePopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class AllianceDetailTop extends InfiniteCell {
    @property(cc.Sprite)
    spr_alliance_icon: cc.Sprite = null;

    @property(cc.Label)
    lbl_alliance_name: cc.Label = null;

    @property(cc.Label)
    lbl_alliance_intro: cc.Label = null;

    @property(cc.Label)
    lbl_alliance_score: cc.Label = null;

    @property(cc.Label)
    lbl_support_count: cc.Label = null;

    @property(cc.Label)
    lbl_join_type: cc.Label = null;

    @property(cc.Label)
    lbl_join_min_score: cc.Label = null;

    @property(cc.Label)
    lbl_member_count: cc.Label = null;

    @property(cc.Button)
    btn_closed: cc.Button = null;

    @property(cc.Button)
    btn_set: cc.Button = null;

    @property(cc.Button)
    btn_mail: cc.Button = null;

    @property(cc.Button)
    btn_apply: cc.Button = null;

    @property(cc.Button)
    btn_join: cc.Button = null;

    @property(cc.Button)
    btn_exit: cc.Button = null;

    @property(cc.Node)
    spr_apply_reddot: cc.Node = null;

    @property(cc.Label)
    lbl_join_title: cc.Label = null;

    @property(cc.Label)
    lbl_wait_join_title: cc.Label = null;

    @property(cc.Sprite)
    spr_btn_apply_bg: cc.Sprite = null;


    private _alliance_uuid: string;
    private _apply_alliance_uuid: string; //曾经申请加入的联盟uuid
    private _self_alliance_uuid: string;
    private _alliance_name: string;
    private _alliance_intro: string;
    private _bRepeatJoinAlliance: boolean = false;
    private _alliance_icon_idx: number    = kZeroNumber;
    private _join_type_index: number      = kZeroNumber;
    private _join_min_score: number       = kZeroNumber;
    private _alliance_position: number    = kZeroNumber;
    private _alliance_members_list: proto.IAllianceMemberInfo[] = []; //当前联盟成员信息列表
    private _alliance_apply_list: proto.IAllianceApplyInfo[]    = []; //当前联盟申请加入列表


    onLoad () {
        this.btn_mail.node.active      = false;
        this.btn_exit.node.active      = false;
        this.btn_join.node.active      = false;
        this.btn_set.node.active       = false;
        this.btn_apply.node.active     = false;
        this.lbl_alliance_intro.string = kNoneString;
        this.btn_join.node.on("click",  this.onClickJoin,               this);
        this.btn_mail.node.on("click",  this.onClickMail,               this);
        this.btn_apply.node.on("click", this.onClickApply,              this);
        this.btn_exit.node.on("click",  this.onClickExit,               this);
        this.btn_set.node.on("click",   this.onClickSet,                this);


        //监听联盟修改消息
      Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateAllianceBaseInfo, (param: any)=>{
            let allianceBaseInfo = (param as proto.IAllianceBaseInfo);
            this.setAllianceBaseInfo(allianceBaseInfo);
        }, this);
        
        //监听联盟查询信息
        Net.listenProtocol(proto.Ptl.QueryAllianceInfoRsp, (buffer, ptl)=>{
            let msg = proto.Msg_QueryAllianceInfoRsp.decode(buffer);
            cc.log("QueryAllianceInfoRsp(监听联盟查询信息) : msg " + JSON.stringify(msg))
            if(msg){
                if(msg.result === proto.CommonErrorCode.Succeed){
                    this.refreshAllianceInfo(msg.allianceInfo);
                }else{
                    ShowTips("AllianceInfoError");
                }
            }
        }, this);

        //监听联盟修改消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateAllianceBaseInfo, (param: any)=>{
            let allianceBaseInfo = (param as proto.IAllianceBaseInfo);
            this.setAllianceBaseInfo(allianceBaseInfo);
        }, this);

        //监听加入联盟消息
        Net.listenProtocol(proto.Ptl.JoinAllianceRsp, (buffer, ptl) =>{
            let msg = proto.Msg_JoinAllianceRsp.decode(buffer);
            cc.log("JoinAllianceRsp(监听加入联盟消息) : msg " + JSON.stringify(msg))
            if (msg){
                if(proto.Msg_JoinAllianceRsp.ErrorCode.Succeed === msg.result){
                    this.setApplyUUID();
                    this.checkApplyJoined();
                    this.checkAfterApplyIsClosed();
                }
            }
        }, this);

        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_DisposeAfterRequestJoinAlliance, (param: any)=>{
           this.checkIsChangeJoinBtnState();
        },  this);

    }

    /* 检测申请后要不要关闭该界面
     */
    private checkAfterApplyIsClosed(){
        //不是 确认后加入类型 就关闭该界面
        (this._join_type_index !== kOneNumber) &&  Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_CloseAllianceDetailLayer, null)
    }

    /* 设置联盟基础信息数据
     * @param baseInfo 联盟基础信息
     */
    private setAllianceBaseInfo(baseInfo: proto.IAllianceBaseInfo){
        this._alliance_uuid      = baseInfo.allianceID;
        this._alliance_icon_idx  = baseInfo.icon;
        this._join_type_index    = baseInfo.joinType;
        this._join_min_score     = baseInfo.joinMinScore;
        this._alliance_name      = baseInfo.name;
        this._alliance_intro     = baseInfo.instruction;

        RecordCurrentAllianceID.getInstance().saveCurrentAllianceID(baseInfo.allianceID);
        this.showAllianceBaseInfo();
        this.refreshAllBtnState();
        this.refreshApplyReddot();
    }

    /* 显示联盟基础信息
     */
     private showAllianceBaseInfo(){
        this.setAllianceIcon();
        this.setAllianceJoinType();
        this.setAllianceJoinMinSeasonScore();
        this.setAllianceName();
        this.setAllianceIntroduce();
    }

    /** 
     * Description: 刷新所有按钮状态
     */
     private refreshAllBtnState(){
        this.setSetBtnVisible();
        this.setMailBtnVisible();
        this.setApplyBtnVisible();
        this.setExitBtnVisible();
        this.setJoinBtnVisible();
    }

    /* 检测自身联盟信息
     */
    private checkSelfAllianceInfo(){
        this._self_alliance_uuid    = Role.Instance.RoleData.allianceData.allianceID;
        this._alliance_position     = Role.Instance.RoleData.allianceData.PostRank;
        this._apply_alliance_uuid   = Role.Instance.RoleData.allianceData.applyingAllianceID;
        this.checkApplyJoined();
    }

    /** 
     * Description: 刷新查询的联盟信息
     * @param allianceInfo   联盟信息
     */
    private refreshAllianceInfo(allianceInfo: proto.IAllianceInfo){
        this._alliance_members_list = allianceInfo.memberInfo;
        this._alliance_apply_list   = allianceInfo.applyInfo;

        this.setAllianceBaseInfo(allianceInfo.baseInfo);
        this.setAllianceMembers(allianceInfo.memberInfo.length);
        this.setAllianceSeasonScore(allianceInfo.score);
        this.setAllianceSupportCount(allianceInfo.totalSupport);
         Net.pushLoaclMessage(LOCAL_MESSAGE.AllianceDetailUpdateMembers, null)
    }

    /* 点击加入按钮事件
     */
    private onClickJoin(){
        if(this._bRepeatJoinAlliance){
            let self = this;
            showPopLayerV2("prefab/JoinAllianceTipPfb", JoinAllianceTipPfb).then(layer =>{
                layer.initData(self._alliance_name, self._alliance_uuid);
            });
            return;
        }

        if(this.lbl_join_title.node.active){
            let msg        = new proto.Msg_JoinAllianceReq();
            msg.allianceID = this._alliance_uuid;
            Net.Send(proto.Ptl.JoinAllianceReq, msg);
            this.checkIsChangeJoinBtnState();
        }else{
           ShowTips("AlreadySendJoinAlliance");
        }
    }

    /* 点击邮件按钮事件
     */
      private onClickMail(){
        showPopLayerV2("prefab/WriteAllianceMailPopLayer", WriteAllianceMailPopLayer).then(layer =>{
        });
    }

    /** 
     * Description: 检测申请后要不要改变加入按钮状态
     */
    private checkIsChangeJoinBtnState(){
        if(this._join_type_index === kOneNumber){
            this.setApplyUUID();
            this.checkApplyJoined();
        }
    }
 
    /* 设置申请uuid
     */
    private setApplyUUID(){
        Role.Instance.RoleData.allianceData.applyingAllianceID = this._alliance_uuid;
        this._apply_alliance_uuid                              = this._alliance_uuid;
    }

    /* 点击申请按钮事件
     */
    private onClickApply(){
        if(this._alliance_apply_list.length == kZeroNumber){
            ShowTips("NoHaveApplyInfo");
            return;
        }
        
        let self = this;
        showPopLayerV2("prefab/ManagerAllianceJoinMsgPopLayer", ManagerAllianceJoinMsgPopLayer).then(layer =>{
            layer.initData(self._alliance_apply_list);
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_CloseAllianceDetailLayer, null)
        });
    }

    /* 点击退出按钮事件
     */
    private onClickExit(){
        showPopLayerV2("prefab/ExitAllianceConfirmPopLayer", ExitAllianceConfirmPopLayer).then(layer =>{
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_CloseAllianceDetailLayer, null)

        });
    }

    /* 点击管理按钮事件
     */
    private onClickSet(){
        let self = this;
        showPopLayerV2("prefab/ManagerAlliancePopLayer", ManagerAlliancePopLayer).then(layer =>{
            layer.setData(  self._alliance_uuid,
                            self._alliance_icon_idx, 
                            self._join_type_index, 
                            self._join_min_score, 
                            self._alliance_name, 
                            self._alliance_intro);
        });
    }

    /* 检测曾经有无申请加入过该联盟
     */
    private checkApplyJoined(){
        let bApplyUUIDValid = checkStringIsValid(this._apply_alliance_uuid);
        let bSameUUID       = this._apply_alliance_uuid === this._alliance_uuid;
        this._bRepeatJoinAlliance            = bApplyUUIDValid && !bSameUUID && this._join_type_index != kOneNumber; //合法的uuid并且和现在要申请的联盟uuid不相同 并且当前联盟加入类型不是确认后加入
        this.lbl_join_title.node.active      = !bSameUUID;
        this.lbl_wait_join_title.node.active = !this.lbl_join_title.node.active;
    }


    /** 
     * Description: 退出按钮的可见性
     */
    private setExitBtnVisible(){
        this.btn_exit.node.active = checkStringIsValid(this._self_alliance_uuid) && 
                                    this.checkInCurrentAlliance();
    }

    /** 
     * Description: 加入按钮的可见性
     */
    private setJoinBtnVisible(){
        this.btn_join.node.active = !checkStringIsValid(this._self_alliance_uuid) && 
                                    !this.checkInCurrentAlliance();
    }

    /* 设置联盟图标
     */
     private setAllianceIcon(){
        setAllianceBadge(this.spr_alliance_icon, this._alliance_icon_idx);
    }

    /* 设置联盟名称
     */
    private setAllianceName(){
        this.lbl_alliance_name.string = this._alliance_name;
    }

    /* 设置联盟介绍
     */
    private setAllianceIntroduce(){
        this.lbl_alliance_intro.string = this._alliance_intro;
    }

    /* 设置联盟赛季积分
     * @param score   联盟赛季积分
     */
    private setAllianceSeasonScore(score: number){
        this.lbl_alliance_score.string = `${score}`;
    }

    /* 设置联盟支援数量
     * @param cnt  支援数量
     */
    private setAllianceSupportCount(cnt: number){
        this.lbl_support_count.string = `${cnt}`;
    }

    /* 设置联盟加入类型文本
     */
    private setAllianceJoinType(){
        let joinTypeTab = tab.Data.AllianceJoinConditonTableByID.getValue(this._join_type_index);
        if(isValidObj(joinTypeTab)){
            this.lbl_join_type.string = joinTypeTab.JoinConditionDes;
        }
    }

    /* 设置联盟加入最小赛季积分
     */
    private setAllianceJoinMinSeasonScore(){
        this.lbl_join_min_score.string = `${this._join_min_score}`;
    }

    /* 设置联盟成员数量
     * @param ownCnt   已经拥有的成员
     */
    private setAllianceMembers(ownCnt: number){
        let maxCapacityCount         = tab.Data.GetKeyValue_ConfigTable().AllianceMaxMemberCount;
        this.lbl_member_count.string = `${ownCnt}/${maxCapacityCount}`;
    }

    /* 设置按钮的可见性
     */
    private setSetBtnVisible(){
        //uuid合法 且 在这个联盟中 且 是首领或者副首领
        this.btn_set.node.active = checkStringIsValid(this._self_alliance_uuid) && 
                                   this.checkInCurrentAlliance() && 
                                   this.checkIsLeaderOrDeputyLeader();
    }

    /* 邮件按钮的可见性
     */
    private setMailBtnVisible(){
        this.btn_mail.node.active = false;
    }

    /* 申请按钮的可见性
     */
    private setApplyBtnVisible(){
        //自身联盟uuid合法 且 在这个联盟中 且 职位是首领或者副首领 且 联盟加入类型是表中 【确认后加入】==> 申请按钮才可见
        let bJoinTypeIsConfirm     = this._join_type_index == kOneNumber;
        let bHaveApplyInfo         = this._alliance_apply_list.length > kZeroNumber;
        this.btn_apply.node.active = checkStringIsValid(this._self_alliance_uuid) && 
                                     this.checkInCurrentAlliance() && 
                                     this.checkIsLeaderOrDeputyLeader() && 
                                     bJoinTypeIsConfirm;
        //申请列表是空的 申请按钮就变灰                             
        this.btn_apply.node.active && setGray(this.spr_btn_apply_bg, !bHaveApplyInfo);
    }

    /* 刷新申请按钮上的小红点
     */
    private refreshApplyReddot(){
        if(!this.btn_apply.node.active){
            return;
        }
        
        this.spr_apply_reddot.active = this._alliance_apply_list.length > kZeroNumber && 
                                            checkStringIsValid(this._self_alliance_uuid) && 
                                            this.checkInCurrentAlliance() &&
                                            this.checkIsLeaderOrDeputyLeader();
    }

    /* 检测当前自己在不在这个联盟中
     */
    private checkInCurrentAlliance(){
        return this._alliance_uuid === this._self_alliance_uuid;
    }
    
    /* 检测是不是联盟首领或者副首领
     */
    private checkIsLeaderOrDeputyLeader(): boolean{
        return (this._alliance_position === tab.AlliancePositionType.AlliancePositionType_Leader) || 
               (this._alliance_position === tab.AlliancePositionType.AlliancePositionType_DeputyLeader);
    }

    /* 
     */
    UpdateContent(allianceInfo: proto.IAllianceInfo){
        if(!allianceInfo){
            return
        }

        this.checkSelfAllianceInfo();
        this.setAllianceBaseInfo(allianceInfo.baseInfo)
        this.setAllianceMembers(allianceInfo.memberInfo.length);
        this.setAllianceSeasonScore(allianceInfo.score);
        this.setAllianceSupportCount(allianceInfo.totalSupport);
    }

}