/* 
 * 一元购活动主界面
 */

import { proto } from "../../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../../Protocol/LocalMessage";
import { Net } from "../../../Protocol/Net";
import { tab } from "../../../Table/table_gen";
import { kOneNumber, kZeroNumber, sendPayStartMsg } from "../../Common/CommonInterface";
import { getServerUtcTime, popRewardLayer_Vec_Recycle, setTimeTXT, ShowTips } from "../../Utils/GameUtils";
import PopLayer from "../../Utils/PopLayer";
import OneYuanToBuyRewardItem from "./OneYuanToBuyRewardItem";

const {ccclass, property} = cc._decorator;
const OneYuanRechargeID = 4002;

@ccclass
export default class OneYuanToBuy extends PopLayer {

    @property(cc.Node)
    node_cutdown_time: cc.Node = null;

    @property(cc.Label)
    lbl_cutdown_time: cc.Label = null;

    @property(cc.Node)
    node_reward_1: cc.Node = null;

    @property(cc.Node)
    node_reward_2: cc.Node = null;

    @property(cc.Node)
    node_reward_3: cc.Node = null;

    @property(cc.Node)
    node_reward_4: cc.Node = null;

    @property(cc.Button)
    btn_buy: cc.Button = null;

    @property(cc.Sprite)
    spr_already_receive: cc.Sprite = null;

    private _overTimes: number = null;
    private _bBuy: boolean;
    private _reward_list: OneYuanToBuyRewardItem[] = [];

    onLoad () {
        this._initRewardNodeList();
        this._initEvent();

        //监听一元购RMB充值消息
        Net.listenProtocol(proto.Ptl.ActivityRechargeRsp, (buffer:Uint8Array, ptl:number)=>{
            let msg = proto.Msg_ActivityRechargeRsp.decode(buffer)
            cc.log("ActivityRechargeRsp(监听一元购RMB充值消息) msg: " + JSON.stringify(msg))
            if(msg != null){
                //充值档位是一元购才处理
                if(msg.RechargeId == OneYuanRechargeID){
                    if(msg.result == proto.Msg_ActivityRechargeRsp.ErrorCode.Succeed){
                        //this.onClickReceive();
                        return;
                    }
                    //活动已经结束了，通知关闭入口
                    proto.Msg_ActivityRechargeRsp.ErrorCode.ActivityOver === msg.result && 
                        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedOneYuan2Buy);
                }
            }
        }, this);

        //监听一元购活动领取奖励消息
        Net.listenProtocol(proto.Ptl.ReceiveOneYuanRewardRsp, buffer=>{
            let msg = proto.Msg_ReceiveOneYuanRewardRsp.decode(buffer);
            cc.log("ReceiveOneYuanRewardRsp(一元购活动领取奖励消息) : msg " + JSON.stringify(msg))
            if(msg && proto.Msg_ReceiveOneYuanRewardRsp.ErrorCode.Succeed === msg.result) {
                this._bBuy = true;
                this.setRewardState();
                popRewardLayer_Vec_Recycle(msg.rewardList);
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedOneYuan2Buy);
                return;
            }

            //活动已结束
            if(proto.Msg_ReceiveOneYuanRewardRsp.ErrorCode.ActivityOver === msg.result){
                ShowTips("ActivityOver");
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedOneYuan2Buy);
                return;
            }
            proto.Msg_ReceiveOneYuanRewardRsp.ErrorCode.AlreadyReceived === msg.result && ShowTips("MailRewardReceived");
        },this);
    }

    start () {

    }

    onDestroy(){
        this.unschedule(this.refreshOverTimes);
        this._reward_list = [];
    }

    /* 初始化奖励节点列表
     */
    private _initRewardNodeList(){
        this._reward_list.push(this.node_reward_1.getComponent(OneYuanToBuyRewardItem));
        this._reward_list.push(this.node_reward_2.getComponent(OneYuanToBuyRewardItem));
        this._reward_list.push(this.node_reward_3.getComponent(OneYuanToBuyRewardItem));
        this._reward_list.push(this.node_reward_4.getComponent(OneYuanToBuyRewardItem));
        for(let rewardNode of this._reward_list){
            rewardNode.node.active = false;
        }
    }

    /* 初始化各类事件
     */
    private _initEvent(){
        this.btn_buy.node.on("click", this.onClickBuy, this);
        this.node.on(cc.Node.EventType.TOUCH_START, ()=>{
            this.checkClosedBoxTips();
        },  this);
    }

    /* 初始化数据
     * @param bBuy       有没有买过
     * @param overTimes  结束时间
     * @param rewardList 奖励列表
     */
    public initData(bBuy:       boolean, 
                    overTimes:  number, 
                    rewardList: proto.IRewardSimpleInfo[]){
        this._overTimes = overTimes;
        this._bBuy      = bBuy;
        this.setRewardState();
        this.setOverTimes();
        this.setRewardList(rewardList);
    }

    /* 设置结束时间
     */
    private setOverTimes(){
        this.refreshOverTimes(kZeroNumber);
        this.schedule(this.refreshOverTimes, kOneNumber);
    }

    /* 刷新结束时间
     */
    private refreshOverTimes(dt: number){
        let leftTime = this._overTimes - getServerUtcTime();
        if(leftTime < kZeroNumber){
            this.lbl_cutdown_time.string = tab.Data.TipsTableByKey.getValue("ActivityOver").Value;
            this.unschedule(this.refreshOverTimes);
            return;
        }

        setTimeTXT(this.lbl_cutdown_time, leftTime);
    }

    /* 设置奖励状态
     */
    private setRewardState(){
        this.btn_buy.node.active             = !this._bBuy;
        this.spr_already_receive.node.active = this._bBuy;
    }

    /* 设置奖励列表
     */
    private setRewardList(rewardList: proto.IRewardSimpleInfo[]){
        let rewardNodeListLen = this._reward_list.length;
        for(let idx = kZeroNumber; idx < rewardList.length; idx++){
            if(idx < rewardNodeListLen){
                this._reward_list[idx].node.active = true;
                this._reward_list[idx].initData(rewardList[idx]);
            }
        }
    }

    /* 购买一元购
     */
    private onClickBuy(){
        sendPayStartMsg(OneYuanRechargeID);
    }

    /* 领取奖励
     */
    private onClickReceive(){
        let param = new proto.Msg_ReceiveOneYuanRewardReq()
        Net.Send(proto.Ptl.ReceiveOneYuanRewardReq, param);
    }

    /* 检测关闭宝箱提示框
     */
     private checkClosedBoxTips(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips);
    }
}
