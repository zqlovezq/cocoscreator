/*
 * @Descripttion: 自己发起的联盟支援聊天模块预制件
 */

import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { getAllianceTimeFormat, getSupportScoreUpper, getTheSecondDayDiffOfUTC, ISupportHelpMsg } from "../Alliance/AllianceCommonInterface";
import AllianceSupportModel from "../Alliance/AllianceSupportModel";
import {kNoneString } from "../Common/CommonInterface";
import Role from "../Common/Role";
import { getCutDownTimesString } from "../Common/SeasonRankCommonFunc";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import AllianceSupportChat from "./ChatDetailModel/AllianceSupportChat";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ChatSelfSupportPfb extends InfiniteCell {

    @property(cc.Node)
    node_support_model: cc.Node = null;

    @property(cc.Node)
    node_expand_tip: cc.Node = null;

    @property(cc.Label)
    lbl_score: cc.Label = null;

    @property(cc.Label)
    lbl_reset_time: cc.Label = null;

    private _applicant_id: string = kNoneString;
    private _bExpand: boolean = false;

    onLoad () {
        //监听支援框架提示本地消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClickSupportHelpBtn, (param: any)=>{
            let msgData = (param as ISupportHelpMsg);
            if(!msgData.bSelfModel){
                this.checkCloseHelpFrame();
                return;
            }
            
            //是请求人的消息才可响应
            if(msgData.applicantID === this._applicant_id){
                this.playEffect(msgData.bExpand);
            } else {
                this.checkCloseHelpFrame();
            }
        }, this);

        //监听支援分数刷新
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateSupportScore, (param: any)=>{
            //let msgData = (param as ISupportHelpMsg);
            //if(!msgData.bSelfModel){return;}
            //if(msgData.applicantID === this._applicant_id){
                this.setSupportScore();
            //}
        }, this);

        //监听关闭支援帮助信息框消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyCloseSupportHelpFrame, (param: any)=>{
            this.checkCloseHelpFrame();
        }, this);

        //监听缩回支援信息动画结束事件消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_ChatModelShrinkSupportInfoEnd, (param: any)=>{
            //this.node_expand_tip.active = false;
        }, this);
    }

    start () {

    }

    public UpdateContent(celldata){
        if(!celldata){return;}
        let supportMsgObj: AllianceSupportChat = null;
        try {
            supportMsgObj = JSON.parse(celldata.content);
        } catch (error) {
            if(!cc.sys.isNative){throw new Error("联盟支援JSON数据格式错误");}
        }
        
        if(!supportMsgObj){
            if(!cc.sys.isNative){throw new Error("解析联盟支援JSON数据错误");}
            return;
        }
        this.initData(supportMsgObj);
    }
    
    /* 获取当前节点高度
     */
    public GetCellSize(){
        return this.node.height;
    }

    public initData(data: AllianceSupportChat){
        this._applicant_id = data.ApplicantID;

        this.setSupportScore();
        this.setSupportResetTime();
        //设置支援模块数据
        this.node_support_model.getComponent(AllianceSupportModel).initData(data, this.dataIndex);
    }

    /* 设置支援分数
     */
    private setSupportScore(){
        let todayScore        = Role.Instance.RoleData.donateData.todayDonateScore;
        let scoreUpperLimit   = getSupportScoreUpper();
        this.lbl_score.string = `${todayScore}/${scoreUpperLimit}`;
    }

    /* 设置支援CD时间
     */
    private setSupportResetTime(){
        let diffTime               = getTheSecondDayDiffOfUTC();
        this.lbl_reset_time.string = getCutDownTimesString(diffTime);
    }

    /* 播放展开或者缩放动画
     */
    private playEffect(bExpand: boolean){
        bExpand && (this.node_expand_tip.active = bExpand);
        this._bExpand = bExpand;
        if(!this.node_expand_tip.active){return;}
        let aniNode = this.node_expand_tip.getComponent(cc.Animation);
        if(aniNode){
           aniNode.play(bExpand ? "expand_support_tip" : "shrink_support_tip");
           if(!bExpand){
               this.scheduleOnce(()=>{this.node_expand_tip.active = false;
                this.node_support_model.getComponent(AllianceSupportModel).setExpandState(false);
            }, 0.5);
               
           }
        }
    }

    /* 检测关闭帮助信息框
     */
    private checkCloseHelpFrame(){
        this._bExpand && this.playEffect(false);
    }
}
