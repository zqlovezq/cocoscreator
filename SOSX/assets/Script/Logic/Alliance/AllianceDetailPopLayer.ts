/*
 * @Descripttion: 联盟详情弹框
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { isValidObj, kNegativeOneNumber, kNoneString, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import InfiniteList from "../InfiniteList/InfiniteList";
import WriteAllianceMailPopLayer from "../MailBox/WriteAllianceMailPopLayer";
import { setGray, showPopLayerV2, ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import { checkStringIsValid, RecordCurrentAllianceID, SaveBeforeChangePosition, setAllianceBadge, sortAllianceMembers } from "./AllianceCommonInterface";
import AllianceDetailTop from "./AllianceDetailTop";
import AllianceMemberInfoBarPfb from "./AllianceMemberInfoBarPfb";
import ExitAllianceConfirmPopLayer from "./ExitAllianceConfirmPopLayer";
import JoinAllianceTipPfb from "./JoinAllianceTipPfb";
import ManagerAllianceJoinMsgPopLayer from "./ManagerAllianceJoinMsgPopLayer";
import ManagerAlliancePopLayer from "./ManagerAlliancePopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class AllianceDetailPopLayer extends PopLayer {

   

    /*@property({type: cc.Node})
    list_view: cc.Node = null;*/
    @property(InfiniteList)
    list_view: InfiniteList = null;
    
    @property(cc.Prefab)
    pfb_alliance_member: cc.Prefab = null;

    @property(cc.Prefab)
    pfb_alliance_top:cc.Prefab = null

    @property({ displayName: "联盟topnode高度" })
    alliance_top_height: number = kZeroNumber;
    

    @property({ displayName: "联盟成员bar高度" })
    alliance_member_height: number = kZeroNumber;

    private member_list_view: InfiniteList = null;
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
    allianceInfo: proto.IAllianceInfo;

    onLoad () {
        //this.member_list_view = this.list_view.getComponent(InfiniteList);
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

        //监听关闭联盟详情界面消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyCloseAllianceDetailPage, (param: any)=>{
            this.setVisible(false);
        }, this);

        
        //监听关闭联盟详情界面消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_CloseAllianceDetailLayer, (param: any)=>{
            this.setVisible(false);
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

        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_DisposeAfterRequestJoinAlliance, (param: any)=>{
           this.checkIsChangeJoinBtnState();
        },  this);

        //监听联盟人事任命消息
        Net.listenProtocol(proto.Ptl.AllianceSetPostRankRsp, (buffer, ptl)=>{
            let msg = proto.Msg_AllianceSetPostRankRsp.decode(buffer);
            cc.log("AllianceSetPostRankRsp(监听联盟人事任命消息) : msg " + JSON.stringify(msg))
            if(msg){
                if(proto.Msg_AllianceSetPostRankRsp.ErrorCode.Succeed === msg.result){
                    return;
                }

                proto.Msg_AllianceSetPostRankRsp.ErrorCode.PermissionDenied === msg.result && ShowTips("PermissionDeniedAppoint");
                proto.Msg_AllianceSetPostRankRsp.ErrorCode.Inexistence === msg.result      && ShowTips("InexistenceAllianceMember");
            }
        }, this);

        //监听踢人消息
        Net.listenProtocol(proto.Ptl.ExpelMemberRsp, (buffer, ptl)=>{
            let msg = proto.Msg_ExpelMemberRsp.decode(buffer);
            cc.log("ExpelMemberRsp(监听踢人消息) : msg " + JSON.stringify(msg))
            if(msg){
                if(proto.Msg_ExpelMemberRsp.ErrorCode.Succeed === msg.result){
                    ShowTips("ExpelSuccess");
                    let idx = this._alliance_members_list.findIndex(tmpObj=>tmpObj.roleID === msg.memberUUID);
                    if(idx != kNegativeOneNumber){
                        this._alliance_members_list.splice(idx, kOneNumber);
                    }
                    this.list_view.Reload(true);
                    return;
                }

                proto.Msg_ExpelMemberRsp.ErrorCode.Inexistence === msg.result      && ShowTips("InexistenceAllianceMember");
                proto.Msg_ExpelMemberRsp.ErrorCode.PermissionDenied === msg.result && ShowTips("PermissionDeniedExpelPerson");
            }
        }, this);

        //初始化scrollView接口
       this.list_view.Init({
            getCellNumber:    this.getCellCount.bind(this),
            getCellSize:      this.getCellHeight.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView:      this.getCellView.bind(this),
            getCellData:      this.getCellData.bind(this),
        });
    }

    start () {
        //记录下自己的职位
        SaveBeforeChangePosition.getInstance().OldPosition = Role.Instance.RoleData.allianceData.PostRank;
    }

    onDestroy(){
        this._alliance_members_list = [];
        this._alliance_apply_list   = [];
    }

    public initData(uuid: string){
        this._alliance_uuid = uuid;
        RecordCurrentAllianceID.getInstance().saveCurrentAllianceID(uuid);
        this.checkSelfAllianceInfo();
        this.requestAllianceDetailInfo();
    }

    /* 查询联盟详情信息
     */
    private requestAllianceDetailInfo(){
        let msg        = new proto.Msg_QueryAllianceInfoReq();
        msg.allianceID = this._alliance_uuid;
        Net.Send(proto.Ptl.QueryAllianceInfoReq, msg);
    }
    
    
    /* 检测自身联盟信息
     */
    private checkSelfAllianceInfo(){
        this._self_alliance_uuid    = Role.Instance.RoleData.allianceData.allianceID;
        this._alliance_position     = Role.Instance.RoleData.allianceData.PostRank;
        this._apply_alliance_uuid   = Role.Instance.RoleData.allianceData.applyingAllianceID;
        this.checkApplyJoined();
    }
    
    /* 检测曾经有无申请加入过该联盟
     */
    private checkApplyJoined(){
        let bApplyUUIDValid = checkStringIsValid(this._apply_alliance_uuid);
        let bSameUUID       = this._apply_alliance_uuid === this._alliance_uuid;
        this._bRepeatJoinAlliance            = bApplyUUIDValid && !bSameUUID && this._join_type_index != kOneNumber; //合法的uuid并且和现在要申请的联盟uuid不相同 并且当前联盟加入类型不是确认后加入
    }

    /* 刷新查询的联盟信息
     * @param allianceInfo   联盟信息
     */
    private refreshAllianceInfo(allianceInfo: proto.IAllianceInfo){
        this.allianceInfo = allianceInfo
        this._alliance_members_list = allianceInfo.memberInfo;
        this._alliance_apply_list   = allianceInfo.applyInfo;
        this.setAllianceBaseInfo(allianceInfo.baseInfo);
        this.refreshAllianceMembers();
    }

    /* 设置联盟基础信息数据
     * @param baseInfo 联盟基础信息
     */
    private setAllianceBaseInfo(baseInfo: proto.IAllianceBaseInfo){
        this._alliance_uuid      = baseInfo.allianceID;
        RecordCurrentAllianceID.getInstance().saveCurrentAllianceID(baseInfo.allianceID);
    }
    
        
    /* 刷新联盟成员列表
     */
    private refreshAllianceMembers(){
        //if(this._alliance_members_list.length < kOneNumber){return;}
        sortAllianceMembers(this._alliance_members_list);
        this.list_view.Reload(true);
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

    /* 检测申请后要不要关闭该界面
     */
    private checkAfterApplyIsClosed(){
        //不是 确认后加入类型 就关闭该界面
        (this._join_type_index !== kOneNumber) && this.setVisible(false);
    }
    
    /* 检测申请后要不要改变加入按钮状态
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

    /** 
     * Description: 获取单元格数量
     */
    private getCellCount(){
        return this._alliance_members_list.length + 1;
    }

    /** 
     * Description: 获取单元格高度
     * @param idx   单元格下标
     */
    private getCellHeight(idx: number){
        if(idx == 0){
            return this.alliance_top_height;
        }
        return this.alliance_member_height;
    }

    /* 获取单元格定义
     * @param idx  单元格下标
     */
    private getCellIdentifer(idx: number): string{
        if(idx == 0){
            return "allianceTop"
        }
        return "allianceDetailCell";
    }

    /* 获取单元格真正下标
     * @param idx 单元格下标
     */
    private getCellData(idx: number){
        if(idx == 0){
            return this.allianceInfo
        }
        return this._alliance_members_list[idx-1];
    }
    
    /* 获取单元格真正下标
     * @param idx  单元格下标
     */
    private getCellView(idx: number, identifier:string): InfiniteCell{
        if(idx < kZeroNumber || idx > this._alliance_members_list.length){
            return null;
        }
        if(identifier == "allianceTop"){
            let top = cc.instantiate(this.pfb_alliance_top).getComponent(AllianceDetailTop)
            return top
        }
        let cell = cc.instantiate(this.pfb_alliance_member).getComponent(AllianceMemberInfoBarPfb);
        return cell;
    }
}
