 /**
 *  特惠礼包主界面
 */

import { proto } from "../../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../../Protocol/LocalMessage";
import { Net } from "../../../Protocol/Net";
import { tab } from "../../../Table/table_gen";
import { IEveryDayDiscountsGiftBagData, isValidObj, kOneNumber, kZeroNumber, sendPayStartMsg } from "../../Common/CommonInterface";
import { getServerUtcTime, popRewardLayer_Vec_Recycle, setTimeTXT, ShowTips } from "../../Utils/GameUtils";
import PopLayer from "../../Utils/PopLayer";
import DiscountsGiftBagRewardItem from "./DiscountsGiftBagRewardItem";

const {ccclass, property} = cc._decorator;

@ccclass
export default class DiscountsGiftBag extends PopLayer {

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

    @property(cc.Label)
    lbl_price: cc.Label = null;

    @property(cc.Label)
    lbl_discounts_num: cc.Label = null;

    @property(cc.Sprite)
    spr_already_receive: cc.Sprite = null;

    private _discountsGiftBagData: IEveryDayDiscountsGiftBagData = null;
    private _reward_list: DiscountsGiftBagRewardItem[] = [];

    onLoad () {
        this._initRewardNodeList();
        this._initEvent();

        //监听特惠礼包RMB充值消息
        Net.listenProtocol(proto.Ptl.ActivityRechargeRsp, (buffer:Uint8Array, ptl:number)=>{
            let msg = proto.Msg_ActivityRechargeRsp.decode(buffer)
            cc.log("ActivityRechargeRsp(成长基金购买成功) msg: " + JSON.stringify(msg))
            if(msg != null){
                //充值类型是特惠礼包才处理
                if(this.checkRechargeType(msg.RechargeId)){
                    if(msg.result == proto.Msg_ActivityRechargeRsp.ErrorCode.Succeed){
                        return;
                    }
    
                    //活动已经结束了，通知关闭入口
                    proto.Msg_ActivityRechargeRsp.ErrorCode.ActivityOver === msg.result && 
                        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedDiscountsGiftBag);
                }
            }
            
        }, this);

        //监听特惠礼包活动领取奖励消息
        Net.listenProtocol(proto.Ptl.ReceiveDiscountsGiftBagRewardRsp, buffer=>{
            let msg = proto.Msg_ReceiveDiscountsGiftBagRewardRsp.decode(buffer);
            cc.log("ReceiveDiscountsGiftBagRewardRsp(特惠礼包活动领取奖励消息) : msg " + JSON.stringify(msg))
            if(msg && proto.Msg_ReceiveDiscountsGiftBagRewardRsp.ErrorCode.Succeed === msg.result) {
                this._discountsGiftBagData.bBought = true;
                this.setRewardState();
                popRewardLayer_Vec_Recycle(msg.rewardList);
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedDiscountsGiftBag);
                return;
            }

            //活动已结束
            if(proto.Msg_ReceiveDiscountsGiftBagRewardRsp.ErrorCode.ActivityOver === msg.result){
                ShowTips("ActivityOver");
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedDiscountsGiftBag);
                return;
            }
            
            proto.Msg_ReceiveDiscountsGiftBagRewardRsp.ErrorCode.AlreadyReceived === msg.result && ShowTips("MailRewardReceived");
        }, this);

        //监听刷新界面数据消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyRefreshEveryDayDiscountsGiftBag, (param: any)=>{
            if(this.node.active && this.node.activeInHierarchy){
                let dataObj = (param as IEveryDayDiscountsGiftBagData);
                dataObj && this.initData(dataObj);
            }
        }, this);
    }

    start () {

    }

    onDestroy(){
        this.unschedule(this.refreshOverTimes);
        this._reward_list = [];
    }

    /* 初始化奖励节点列表 */
     private _initRewardNodeList(){
        this._reward_list.push(this.node_reward_1.getComponent(DiscountsGiftBagRewardItem));
        this._reward_list.push(this.node_reward_2.getComponent(DiscountsGiftBagRewardItem));
        this._reward_list.push(this.node_reward_3.getComponent(DiscountsGiftBagRewardItem));
        this._reward_list.push(this.node_reward_4.getComponent(DiscountsGiftBagRewardItem));
        for(let rewardNode of this._reward_list){
            rewardNode.node.active = false;
        }
    }

    /* 初始化各类事件 */
    private _initEvent(){
        this.btn_buy.node.on("click", this.onClickBuy, this);
        this.node.on(cc.Node.EventType.TOUCH_START, ()=>{
            this.checkClosedBoxTips();
        },  this);
    }
    
    /* 初始化数据 */
    public initData(data: IEveryDayDiscountsGiftBagData){    
        this._discountsGiftBagData = data;
        this.setDiscountsNum();
        this.setRewardState();
        this.setOverTimes();
        this.setPrice();
        this.setRewardList();
    }

    /* 设置折扣力度 */
    private setDiscountsNum(){
        this.lbl_discounts_num.string = `${this._discountsGiftBagData.discountsNum}%`;
    }

    /* 设置结束时间 */
    private setOverTimes(){
        this.refreshOverTimes(kZeroNumber);
        this.schedule(this.refreshOverTimes, kOneNumber);
    }

    /* 刷新结束时间 */
    private refreshOverTimes(dt: number){
        let leftTime = this._discountsGiftBagData.overTimes - getServerUtcTime();
        if(leftTime < kZeroNumber){
            this.lbl_cutdown_time.string = tab.Data.TipsTableByKey.getValue("ActivityOver").Value;
            this.unschedule(this.refreshOverTimes);
            return;
        }

        setTimeTXT(this.lbl_cutdown_time, leftTime);
    }

    /* 设置奖励状态 */
    private setRewardState(){
        this.btn_buy.node.active             = !this._discountsGiftBagData.bBought;
        this.spr_already_receive.node.active = this._discountsGiftBagData.bBought;
    }

    /* 设置奖励列表 */
    private setRewardList(){
        let rewardList = this._discountsGiftBagData.rewardList;
        if(!rewardList || kZeroNumber == rewardList.length){
            cc.error("每日特惠礼包奖励数据为空！");
            return;
        }

        let rewardNodeListLen = rewardList.length;
        for(let idx = kZeroNumber; idx < rewardList.length; idx++){
            if(idx < rewardNodeListLen){
                this._reward_list[idx].node.active = true;
                this._reward_list[idx].initData(rewardList[idx]);
            }
        }
    }

    /* 设置价格 */
    private setPrice(){
        let tabData = tab.Data.RechargeTableByID.getValue(this._discountsGiftBagData.rechargeID);
        if(isValidObj(tabData)){
            this.lbl_price.string = `${tabData.Price}`;
        }
    }

    /* 检测充值类型是否是特惠礼包 */
    private checkRechargeType(rechargeID: number){
        let tabData = tab.Data.RechargeTableByID.getValue(rechargeID);
        if(isValidObj(tabData)){
            return tab.RechargeGoodsType.RechargeGoodsType_DiscountGiftBag == tabData.GoodsType;
        }

        return false;
    }

    /* 购买特惠礼包 */
    private onClickBuy(){
        sendPayStartMsg(this._discountsGiftBagData.rechargeID);
    }

    /* 领取奖励 */
    private onClickReceive(){
        let param = new proto.Msg_ReceiveOneYuanRewardReq()
        Net.Send(proto.Ptl.ReceiveOneYuanRewardReq, param);
    }

    /* 检测关闭宝箱提示框 */
     private checkClosedBoxTips(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips);
    }
}
