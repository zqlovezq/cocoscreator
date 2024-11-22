/*
 * @Descripttion: 邮箱主界面
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import ManagerNewBattleMap from "../BattleMapStore/ManagerNewBattleMap";
import { checkRewardIsEmotionOrBattleMap, isValidObj, kNegativeOneNumber, kOneNumber, kTwoNumber, kZeroNumber } from "../Common/CommonInterface";
import RedDotManager, { RedDotType } from "../Common/ReddotManager";
import Role from "../Common/Role";
import ManagerNewEmotionRedDot from "../EmotionStore/ManagerNewEmotionRedDot";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import InfiniteList from "../InfiniteList/InfiniteList";
import {popRewardLayer_Ex, setGray, showPopLayerV2, ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import MailConfirmRemove from "./MailConfirmRemove";
import MailInfoBar from "./MailInfoBar";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MailBoxPopLayer extends PopLayer {

    @property(cc.Label)
    lbl_mail_count: cc.Label = null;

    @property(cc.Button)
    btn_clean: cc.Button = null;

    @property(cc.Sprite)
    spr_clean_btn_bg: cc.Sprite = null;

    @property(InfiniteList)
    list_view: InfiniteList = null;

    @property(cc.Prefab)
    pfb_gm_info_bar: cc.Prefab = null;

    @property(cc.Prefab)
    pfb_alliance_info_bar: cc.Prefab = null;

    @property(cc.Label)
    lbl_none_mail_tip: cc.Label = null;

    @property({displayName: "邮件信息条高度"})
    mail_info_bar_height: number = kZeroNumber;

    private _create_info_bar_map: Map<number, Function> = new Map<number, Function>();
    private _unread_mail_list: proto.IMailInfoData[]          = [];
    private _unreceived_mail_list: proto.IMailInfoData[]      = [];
    private _already_dispose_mail_list: proto.IMailInfoData[] = [];
    private _mail_list: proto.IMailInfoData[]                 = [];

    onLoad () {
        this.initTableView();
        this.initCreateCellMap();
        this.btn_clean.node.on("click", ()=>{
            showPopLayerV2("prefab/MailConfirmRemove", MailConfirmRemove).then(tipLayer =>{
            });
        }, this);

        //监听"获取邮件列表"
        Net.listenProtocol(proto.Ptl.GetMailInfoListRsp, (buffer, ptl)=>{
            let msg = proto.Msg_GetMailInfoListRsp.decode(buffer);
            cc.log("GetMailInfoListRsp (获取邮件列表) msg: " + JSON.stringify(msg));
            if(msg){
                this.groupMailList(msg.mailInfoList);
                this.refreshPage();
            }
            
        }, this);

        //监听领取邮件奖励消息
        Net.listenProtocol(proto.Ptl.ReceiveMailRewardRsp, (buffer, ptl)=>{
            let msg = proto.Msg_ReceiveMailRewardRsp.decode(buffer);
            cc.log("ReceiveMailRewardRsp (领取邮件奖励) msg: " + JSON.stringify(msg));
            if(msg && msg.result === proto.Msg_ReceiveMailRewardRsp.ErrorCode.Succeed){
                popRewardLayer_Ex(msg.reward, ()=>{
                    checkRewardIsEmotionOrBattleMap(msg.reward[kZeroNumber].rewardId, msg.reward[kZeroNumber].rewardType);
                });
                this.updateMailInfoState(msg.mailID, true);
                return;
            }

            proto.Msg_ReceiveMailRewardRsp.ErrorCode.AlreadyReceive === msg.result && ShowTips("MailRewardReceived");
            proto.Msg_ReceiveMailRewardRsp.ErrorCode.PastDue === msg.result        && ShowTips("MailRewardPastDue");
            proto.Msg_ReceiveMailRewardRsp.ErrorCode.Inexistence === msg.result    && ShowTips("MailInexistence");
            
        }, this);

        //监听通知邮件已读消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyMailStateChange, (param: any)=>{
            let mailID = (param as string);
            this.updateMailInfoState(mailID, false);
        }, this);

        //监听删除所有已读【包括已领取的】邮件消息
        Net.listenProtocol(proto.Ptl.RemoveReadMailRsp, (buffer, ptl)=>{
            let msg = proto.Msg_RemoveReadMailRsp.decode(buffer);
            cc.log("RemoveReadMailRsp (删除已读邮件) msg: " + JSON.stringify(msg));
            if(msg){
                if(this._already_dispose_mail_list.length != msg.mailIDList.length){
                    for(let data of msg.mailIDList) {
                        let idx = this._already_dispose_mail_list.findIndex(tmpObj=>tmpObj.mailID === data);
                        if(idx != kNegativeOneNumber){
                            this._already_dispose_mail_list.splice(idx, kOneNumber);
                        }
                    }
                } else {
                    this._already_dispose_mail_list = [];
                }
                this.resetSummaryMailList();
                this.refreshPage();
            }
        }, this);
    }

    onDestroy(){
        this._create_info_bar_map.clear();
        this._unread_mail_list          = [];
        this._unreceived_mail_list      = [];
        this._already_dispose_mail_list = [];
        this._mail_list                 = [];
    }

    public initData(){
        this.requestMailList();
    }
    
    /* 初始化tableView
     */
    private initTableView(){
        //初始化scrollView接口
        this.list_view.Init({
            getCellNumber:    this.getCellCount.bind(this),
            getCellSize:      this.getCellHeight.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView:      this.getCellView.bind(this),
            getCellData:      this.getCellIdx.bind(this),
        });
        //this.list_view.SetCellNodeAnchorX(0.5);
    }

    /* 初始化创建cell的映射
     */
    private initCreateCellMap(){
        this._create_info_bar_map.set(proto.MailType.MailType_GM, ()=>{
            let cell = cc.instantiate(this.pfb_gm_info_bar).getComponent(MailInfoBar);
            return cell;
        });

        this._create_info_bar_map.set(proto.MailType.MailType_Alliance, ()=>{
            let cell = cc.instantiate(this.pfb_alliance_info_bar).getComponent(MailInfoBar);
            return cell;
        });
    }
    
    /* 请求邮件列表
     */
    private requestMailList(){
        let msg = new proto.Msg_GetMailInfoListReq();
        Net.Send(proto.Ptl.GetMailInfoListReq, msg);
    }

    /* 刷新邮件列表
     */
    private refreshPage(){
        this.setCleanBtnState();
        this.setMailCount();
        if(this._mail_list.length == kZeroNumber){
            this.list_view.Reload(true, true);
            return;
        }
        
        this.list_view.Reload(true);
        this.list_view.scrollToTop(0.1);
    }
    
    /* 设置清空已读邮件按钮状态
     */
    private setCleanBtnState(){
        let bEnabled = this._already_dispose_mail_list.length > kZeroNumber;
        this.btn_clean.interactable = bEnabled;
        setGray(this.spr_clean_btn_bg, !bEnabled);
    }

    /* 设置邮件数量
     */
    private setMailCount(){
        this.lbl_mail_count.string = `${this._mail_list.length}/${tab.Data.GetKeyValue_ConfigTable().MaxMailCount}`;
        this.lbl_none_mail_tip.node.active = this._mail_list.length <= kZeroNumber;
    }
    
    /* 组织邮件列表【按未领取 未读 和 已操作过三批处理】
     */
    private groupMailList(maliList: proto.IMailInfoData[]){
        if(!maliList || maliList.length < kOneNumber){
            return;
        }

        this._already_dispose_mail_list = [];
        this._unreceived_mail_list      = [];
        this._unread_mail_list          = [];
        
        for(let data of maliList){
            if(proto.MailState.MailState_AlreadyReceive === data.mailState || proto.MailState.MailState_AlreadyRead === data.mailState){
                this._already_dispose_mail_list.push(data);
                continue;
            }
            
            if(isValidObj(data.reward)){
                if(proto.MailState.MailState_UnReceive === data.mailState){
                    this._unreceived_mail_list.push(data);
                }
            } else {
                this._unread_mail_list.push(data);
            }
        }
        this.setMailSummaryList();
    }

    /* 设置邮件总表
     */
    private setMailSummaryList(){
        this.sortMailList(this._unreceived_mail_list);
        this.sortMailList(this._unread_mail_list);
        this.sortMailList(this._already_dispose_mail_list);
        this.resetSummaryMailList();
    }

    /* 重置邮件总表
     */
    private resetSummaryMailList(){
        this._mail_list = [];
        this._unreceived_mail_list.length > kZeroNumber      && (this._mail_list = this._mail_list.concat(this._unreceived_mail_list));
        this._unread_mail_list.length > kZeroNumber          && (this._mail_list = this._mail_list.concat(this._unread_mail_list));
        this._already_dispose_mail_list.length > kZeroNumber && (this._mail_list = this._mail_list.concat(this._already_dispose_mail_list));
    }
    
    /* 排序邮件列表
     */
    private sortMailList(maiList: proto.IMailInfoData[]){
        if(!maiList || maiList.length < kTwoNumber){
            return;
        }

        maiList.sort((data1: proto.IMailInfoData, data2: proto.IMailInfoData): number=>{
            return data2.mailTimestamp - data1.mailTimestamp;
        });
    }

    /* 更新邮件状态
     */
    private updateMailInfoState(mailID: string, bHaveRewardMail: boolean){
        let mailList = bHaveRewardMail ? this._unreceived_mail_list : this._unread_mail_list;
        let idx      = mailList.findIndex(tmpObj=>tmpObj.mailID === mailID);
        if(idx != kNegativeOneNumber){
            mailList[idx].mailState = bHaveRewardMail ? proto.MailState.MailState_AlreadyReceive : proto.MailState.MailState_AlreadyRead;
            this._already_dispose_mail_list.push(mailList[idx]);
            this.sortMailList(this._already_dispose_mail_list);
            mailList.splice(idx, kOneNumber);
            this.resetSummaryMailList();
            this.list_view.Reload(true);
            this.list_view.scrollToTop(0.1);
        }

        this._unreceived_mail_list.length <= kZeroNumber && 
            this._unread_mail_list.length <= kZeroNumber && 
                RedDotManager.getInstance().UpdateRedDot(RedDotType.NewMail, false);
        this.setCleanBtnState();
    }
    
    /* 获取单元格真正的下标
     * @param idx  单元格下标
     */
     private getRightCellIndex(idx: number){
        return this.getCellCount() - kOneNumber - idx;
    }
    
    /* 获取单元格数量 
     */
    private getCellCount(){
        return this._mail_list.length;
    }

    /* 获取单元格高度
     * @param idx   单元格下标
     */
    private getCellHeight(idx: number){
        return this.mail_info_bar_height;
    }

    /* 获取单元格定义
     * @param idx  单元格下标
     */
    private getCellIdentifer(idx: number): string{
        return `mail_cell:${this._mail_list[idx].type}`;
    }

    /* 获取单元格真正下标
     * @param idx 单元格下标
     */
    private getCellIdx(idx: number){
        //idx = this.getRightCellIndex(idx);
        if(idx >= this._mail_list.length){
            return null;
        }
        return this._mail_list[idx];
    }
    
    /* 获取单元格真正下标
     * @param idx  单元格下标
     */
    private getCellView(idx: number): InfiniteCell{
        if(idx < kZeroNumber || idx >= this._mail_list.length){
            return null;
        }

        return this._create_info_bar_map.get(this._mail_list[idx].type)();
    }
}
