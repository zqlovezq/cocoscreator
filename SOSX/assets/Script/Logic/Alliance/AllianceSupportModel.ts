/*
 * @Descripttion: 聊天中联盟支援卡牌模块
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { getCanSupportCardCount, getSupportGainScore, getSupportScoreUpper, getSupportUpperLimitCount } from "../Alliance/AllianceCommonInterface";
import ManagerAllianceInnerMsg from "../Alliance/ManagerAllianceInnerMsg";
import AllianceSupportChat, { DonorInfo } from "../Chat/ChatDetailModel/AllianceSupportChat";
import { isValidObj, kNegativeOneNumber, kNoneString, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import PlayerCard from "../PlayerInfo/PlayerCard";
import { flyGold, flyRoleExp, setGray, ShowTips } from "../Utils/GameUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class AllianceSupportModel extends cc.Component {

    @property(cc.Label)
    lbl_player_name: cc.Label = null;

    @property(cc.Label)
    lbl_support_count_tip: cc.Label = null;

    @property(cc.Label)
    lbl_support_count: cc.Label = null;

    @property(cc.Node)
    node_player_head: cc.Node = null;

    @property(cc.ProgressBar)
    progress_support: cc.ProgressBar = null;

    @property(cc.Label)
    lbl_progress: cc.Label = null;
    
    @property(cc.Button)
    btn_support: cc.Button = null;

    @property(cc.Button)
    btn_help: cc.Button = null;

    @property(cc.Sprite)
    spr_support_bg: cc.Sprite = null;

    private _bSelf: boolean                    = false;
    private _request_card_id: number           = kZeroNumber;
    private _applicant_id: string              = kNoneString;
    private _current_gain_card_count: number   = kZeroNumber;
    private _support_upper_limit_count: number = kZeroNumber;
    private _request_timestamp: number         = kZeroNumber;
    private _applicant_name: string            = kNoneString;
    private _donor_info_list: DonorInfo[]      = [];
    private _bExpand: boolean                  = false;
    private _bOverSupportCntLimit: boolean     = false;  //是否超出支援次数上限
    private _bOverSupportScoreLimit: boolean   = false;  //是否超出当天支援分数上限
    private _bCanSupport: boolean              = true;   
    private _bSupportProgressFull: boolean     = false; //支援进度是否已满
    private _bHaveCard: boolean                = false;
    private _cellIdx: number;

    onLoad () {
        this.btn_support.node.on("click", this.onClickSupport, this);
        this.btn_help.node.on("click",    this.onClickHelp,    this);

        //监听支援消息响应
        Net.listenProtocol(proto.Ptl.AllianceDonateCardRsp, (buffer, ptl)=>{
            let msg = proto.Msg_AllianceDonateCardRsp.decode(buffer);
            cc.log("AllianceDonateCardRsp(监听支援消息响应) : msg " + JSON.stringify(msg))
            if(msg){
                if(msg.result === proto.Msg_AllianceDonateCardRsp.ErrorCode.Succeed){
                    //与申请人uuid是同一个人才更新
                    if(this.node.activeInHierarchy && msg.applicantID === this._applicant_id){
                        //这块需要客户端自己维护相应数据的变更
                        Role.Instance.RoleData.donateData.todayDonateScore += getSupportGainScore(this._request_card_id);
                        this.playEffect(msg.goldCount, msg.expCount);
                        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateSupportScore, 
                                                {bExpand: false, applicantID: msg.applicantID, bSelfModel:this._bSelf});
                    }
                    this.refreshSupportProgress();
                }
                this._bCanSupport = true;
            }
        }, this);

        //监听全局推送的支援消息
        Net.listenProtocol(proto.Ptl.PushSupportInfo, (buffer, ptl)=>{
            let msg = proto.Msg_PushSupportInfo.decode(buffer);
            cc.log("PushSupportInfo(监听全局推送的支援消息) : msg " + JSON.stringify(msg))
            if(msg){
                //与申请人uuid是一个人才更新
                if(msg.applicantID === this._applicant_id){
                    //这块需要客户端自己维护相应数据的变更
                    this._current_gain_card_count = msg.curGainSupportCnt;
                    if(msg.donateID === Role.Instance.RoleData.id){
                        //查找下自己的支援数据,找到了就维护下，找不到就创建
                        let idx = this._donor_info_list.findIndex(tmpObj=>tmpObj.roleID == Role.Instance.RoleData.id);
                        if(idx != kNegativeOneNumber){
                            this._donor_info_list[idx].count++;
                        }else{
                            this._donor_info_list.push({roleID: msg.donateID, count: kOneNumber});
                        }
                    }else{
                        this.updateDonorInfo(msg.donateID);
                    }

                    ManagerAllianceInnerMsg.getInstance().maintainSupportCardInfo(this._cellIdx, msg.curGainSupportCnt, this._donor_info_list);
                    this.refreshSupportProgress();
                }
            }
        }, this);
    }

    onDestroy(){
        this._donor_info_list = [];
    }

    public initData(data: AllianceSupportChat, cellIdx: number){
        this._cellIdx                   = cellIdx;
        this._bSelf                     = data.ApplicantID === Role.Instance.RoleData.id;
        this._applicant_id              = data.ApplicantID;
        this._applicant_name            = data.ApplicantName;
        this._request_card_id           = data.RequestCardID;
        this._current_gain_card_count   = data.CurrentGainCount;
        this._support_upper_limit_count = data.RequestSupportUpperLimit;
        this._request_timestamp         = data.RequestTimestamp;
        this._donor_info_list           = data.DonorInfoList;
        this.refreshPage();
    }

    /* 刷新界面
     */
    private refreshPage(){
        this.checkSelfState();
        this.checkSelfHaveCard();
        this.setPlayerName();
        this.setCardIcon();
        this.refreshSupportProgress();
    }
    
    /* 检测自身状态
     */
    private checkSelfState(){
        this.btn_support.node.active           = !this._bSelf;
        this.lbl_support_count.node.active     = !this._bSelf;
        this.lbl_support_count_tip.node.active = !this._bSelf;
    }

    /* 检测自身有木有这个卡牌
     */
    private checkSelfHaveCard(){
        let cardInfo: proto.IItemData = Role.Instance.RoleItemAtrr.getItemByStaticID(this._request_card_id);
        this._bHaveCard = this._bSelf ? true : isValidObj(cardInfo) && cardInfo.count > kOneNumber;
    }

    /* 设置玩家名称
     */
    private setPlayerName(){
        this.lbl_player_name.string = this._applicant_name;
    }

    /* 设置自己可支援的次数
     */
    private setSelfCanSupportCount(){
        let supportUpperLimit = getSupportUpperLimitCount(this._request_card_id);
        let alreadySupportCnt = getCanSupportCardCount(Role.Instance.RoleData.id, this._donor_info_list);
        this.lbl_support_count.string = `${alreadySupportCnt}/${supportUpperLimit}`;
        this._bOverSupportCntLimit    = alreadySupportCnt >= supportUpperLimit
    }

    /* 设置被支援进度
     */
    private setBeSupportedProgress(){
        this.lbl_progress.string = `${this._current_gain_card_count}/${this._support_upper_limit_count}`;
        let progressVal = this._current_gain_card_count / this._support_upper_limit_count;
        this.progress_support.progress = progressVal > kOneNumber ? kOneNumber : progressVal;
        this._bSupportProgressFull = progressVal == kOneNumber;
        this.checkCanSupport();
    }

    /* 检测可否继续支援
     */
    private checkCanSupport(){
        let nextSupportGainScore     = getSupportGainScore(this._request_card_id) + Role.Instance.RoleData.donateData.todayDonateScore;
        this._bOverSupportScoreLimit = nextSupportGainScore > getSupportScoreUpper();
        let bGray = !this._bHaveCard || this._bOverSupportCntLimit || this._bOverSupportScoreLimit || this._bSupportProgressFull;
        setGray(this.spr_support_bg, bGray);
        this.node_player_head.getComponent(PlayerCard).setGray(bGray);
        
    }
    
    /* 设置卡牌图标
     */
    private setCardIcon(){
        this.node_player_head.getComponent(PlayerCard).initData(this._request_card_id, kOneNumber, this._bSelf, true);
    }

    /* 更新自己的捐献次数
     */
    private updateDonorInfo(targetRoleID: string){
        for(let donor of this._donor_info_list){
            //与目标捐献人uuid一样，方可维护该捐献人的捐献数量
            if(donor.roleID === targetRoleID){
                donor.count++;
                return;
            }
        }
    }

    /* 刷新支援进度
     */
    private refreshSupportProgress(){
        this.checkSelfHaveCard();
        !this._bSelf && this.setSelfCanSupportCount();
        this.setBeSupportedProgress();
    }

    /* 播放支援特效
     * @param goldCnt   金币数
     * @param roleExp   经验数
     */
    private playEffect(goldCnt: number, roleExp: number){
        let pos = this.btn_support.node.convertToWorldSpaceAR(new cc.Vec2(0,0))
        goldCnt > kZeroNumber && flyGold(pos);
        roleExp > kZeroNumber && flyRoleExp(pos);
    }
    
	/* 设置展开状态
     */
    public setExpandState(bExpand: boolean){
        this._bExpand = bExpand;
    }

    /*  */
    private onClickHelp(){
        this._bExpand = !this._bExpand;
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClickSupportHelpBtn, 
                            {   bExpand: this._bExpand, 
                                applicantID: this._applicant_id, 
                                bSelfModel: this._bSelf
                            });
    }

    /*  */
    private onClickSupport(){
        if(!this._bCanSupport){return;}
        
        if(this._bOverSupportCntLimit){
            ShowTips("OverSupportLimit");
            return;
        }

        if(this._bOverSupportScoreLimit){
            ShowTips("OverSupportScoreLimit");
            return;
        }

        let msg    = new proto.Msg_AllianceDonateCardReq();
        msg.cardID = this._request_card_id;
        msg.roleID = this._applicant_id;
        Net.Send(proto.Ptl.AllianceDonateCardReq, msg);
        this._bCanSupport = false;
    }
}
