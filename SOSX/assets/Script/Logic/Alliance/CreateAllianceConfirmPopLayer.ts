/*
 * @Descripttion: 创建联盟确认框
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { kNoneString, kZeroNumber } from "../Common/CommonInterface";
import { ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import SensitiveWordsManager from "../Utils/SensitiveWordsManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CreateAllianceConfirmPopLayer extends PopLayer {

    @property(cc.Button)
    btn_closed: cc.Button = null;

    @property(cc.Button)
    btn_cancel: cc.Button = null;

    @property(cc.Button)
    btn_create: cc.Button = null;

    @property(cc.Label)
    lbl_cost_gold: cc.Label = null;

    private _alliance_name: string          = kNoneString;
    private _alliance_intro: string         = kNoneString;
    private _alliance_icon_idx: number      = kZeroNumber;
    private _alliance_join_type_idx: number = kZeroNumber;
    private _alliance_min_score: number     = kZeroNumber;

    onLoad () {
        this.btn_create.node.on("click", this.onClickConfirm,           this);
        this.btn_cancel.node.on("click", ()=>{this.setVisible(false);}, this);
        this.btn_closed.node.on("click", ()=>{this.setVisible(false);}, this);

        //监听创建联盟消息
        Net.listenProtocol(proto.Ptl.CreateAllianceRsp, (buffer, ptl)=>{
            let msg = proto.Msg_CreateAllianceRsp.decode(buffer);
            cc.log("CreateAllianceRsp(监听创建联盟消息) : msg " + JSON.stringify(msg))
            if(msg){
                proto.Msg_CreateAllianceRsp.ErrorCode.Succeed === msg.result                && ShowTips("CreateAllianceSuccess");
                proto.Msg_CreateAllianceRsp.ErrorCode.Succeed === msg.result                && this.setVisible(false);
                
                /*proto.Msg_CreateAllianceRsp.ErrorCode.HaveAlliance === msg.result           && ShowTips("AlreadyHaveAlliance");
                proto.Msg_CreateAllianceRsp.ErrorCode.MoneyNotEnough === msg.result         && ShowTips("OnlyGoldNotEnough");
                proto.Msg_CreateAllianceRsp.ErrorCode.AllianceInfoIncomplete === msg.result && ShowTips("AllianceInfoIncomplete");*/
            }
        }, this);
    }

    start () {
        this.setCostGold();
    }

    /**
     * @param iconIdx        联盟图标表中索引
     * @param allianceName   联盟名称
     * @param allianceIntro  联盟介绍
     * @param joinTypeIdx    加入联盟的类型表中索引
     * @param minScoreIdx    加入联盟最小赛季积分表中索引
     */
    public setData( iconIdx:       number, 
                    allianceName:  string, 
                    allianceIntro: string, 
                    joinTypeIdx:   number, 
                    minScoreIdx:   number){
        this._alliance_icon_idx      = iconIdx;
        this._alliance_name          = allianceName;
        this._alliance_intro         = allianceIntro;
        this._alliance_join_type_idx = joinTypeIdx;
        this._alliance_min_score     = tab.Data.AllianceJoinMinScoreTable[minScoreIdx].MinSeasonScore;;
    }
    
    private setCostGold(){
        this.lbl_cost_gold.string = `${tab.Data.GetKeyValue_ConfigTable().CreateAllianceCostGold}`;
    }
    
    private onClickConfirm(){
        if(!SensitiveWordsManager.Instance.check(this._alliance_name) ||
            !SensitiveWordsManager.Instance.check(this._alliance_intro)) {
            //有敏感词
            ShowTips("HaveSensitiveWord")
            return
        }
        let msg          = new proto.Msg_CreateAllianceReq();
        msg.name         = this._alliance_name;
        msg.Icon         = this._alliance_icon_idx;
        msg.Instruction  = this._alliance_intro;
        msg.JoinType     = this._alliance_join_type_idx;
        msg.JoinMinScore = this._alliance_min_score;
        Net.Send(proto.Ptl.CreateAllianceReq, msg);
    }
}
