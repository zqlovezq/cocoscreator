
/*
 * 七日签到登录
 */

import { proto } from "../../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../../Protocol/LocalMessage";
import { Net } from "../../../Protocol/Net";
import { tab } from "../../../Table/table_gen";
import { kOneNumber,  kZeroNumber } from "../../Common/CommonInterface";
import CommonItem from "../../Common/CommonItem";
import { ItemState } from "../../Common/SeasonRankCommonFunc";
import { popRewardLayer_Ex, showItemTips, ShowTips } from "../../Utils/GameUtils";
import PopLayer from "../../Utils/PopLayer";
import { ManagerSevenSignInData } from "./ManagerSevenSignInData";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SevenSignInMainPage extends PopLayer {

    @property(cc.Node)
    info_node:cc.Node = null;

    @property(cc.Button)
    close_btn:cc.Button = null;

    private clickDay = 0;

    onLoad () {
        this.close_btn.node.on("click", () => { this.setVisible(false); }, this);
        this.node.on(cc.Node.EventType.TOUCH_START, ()=>{
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips);
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips);
        },  this);

        this.setCloseCallBack(()=>{
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips);
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips);
        })
        
        Net.listenProtocol(proto.Ptl.ReceiveSevenDaySignInRewardRsp, (buffer, ptl)=>{
            let msg = proto.Msg_ReceiveSevenDaySignInRewardRsp.decode(buffer);
            cc.log("ReceiveSevenDaySignInRewardRsp(领取七日登录某天奖励的消息) : msg " + JSON.stringify(msg))
            if (msg && proto.Msg_ReceiveSevenDaySignInRewardRsp.ErrorCode.Succeed == msg.result){    
                ManagerSevenSignInData.getInstance().getSevenSignInInfo()[msg.day - kOneNumber].bReceived = true;
                ManagerSevenSignInData.getInstance().setCurrDayReceived(msg.day, false);
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_CheckSevenSignInIsOver);
                popRewardLayer_Ex(msg.rewardList, null);
                
                let infoList = ManagerSevenSignInData.getInstance().getSevenSignInInfo();
                let info:proto.ISevenDaySignInData = infoList[this.clickDay-1];
                info.bReceived = true;
                this.setDayInfo(this.clickDay);
                return;
            }
            proto.Msg_ReceiveSevenDaySignInRewardRsp.ErrorCode.AlreadyReceived    == msg.result && ShowTips("MailRewardReceived");
            proto.Msg_ReceiveSevenDaySignInRewardRsp.ErrorCode.ActivityOver       == msg.result && ShowTips("ActivityOver");
            proto.Msg_ReceiveSevenDaySignInRewardRsp.ErrorCode.UnReachReceiveCond == msg.result && ShowTips("UnReachReceivedCond");
        }, this);
    }

    start () {

    }

    onDestroy(){
        // this.unschedule(this.refreshOverTime);
    }
    
    public initData(){
        this.setEveryDayInfo();
    }

    /* 刷新活动时间
     */
    private refreshOverTime(){
        // this.setOverTime();
    }

    private setEveryDayInfo(){
        let infoList = ManagerSevenSignInData.getInstance().getSevenSignInInfo();
        for(let idx = kZeroNumber, len = infoList.length; idx < len; idx++){
            this.setDayInfo(idx+kOneNumber)
        }
    }
    private setDayInfo(_day:number){
        let infoList = ManagerSevenSignInData.getInstance().getSevenSignInInfo();
        let info:proto.ISevenDaySignInData = infoList[_day-1];
        let day_node = this.info_node.children[_day-1];
        let bOpen = ManagerSevenSignInData.getInstance().getCurrLoginDay() >= _day;
        let item = day_node.getChildByName("item_node").getChildByName("CommonItem").getComponent(CommonItem);
        let itemData = info.rewardInfo;
        let state = ItemState.NONE;

        if(bOpen&&!info.bReceived){
            state = ItemState.CAN_RECEIVE
        }
        if(bOpen&&info.bReceived){
            state = ItemState.ALREADY_RECEIVE
        }
        // 判断是宝箱还是卡牌
        let card_name = day_node.getChildByName("lbl_item_name").getComponent(cc.Label);
        if(itemData.rewardType===tab.RewardType.RewardType_ItemType){
            let tabData = tab.Data.ItemTableByID.getValue(itemData.rewardId);
            card_name.string = tabData.Name;
            let qualityTab = tab.Data.QualityTableByQuality.getValue(tabData.Quality);
            card_name.node.color = new cc.Color().fromHEX(qualityTab.ColorRGB);
        }else if(itemData.rewardType===tab.RewardType.RewardType_BoxType){
            let boxData = tab.Data.BoxTableByBoxID.getValue(itemData.rewardId);
            card_name.string = boxData.BoxName;
            let qualityTab = tab.Data.QualityTableByQuality.getValue(boxData.Quality);
            card_name.node.color = new cc.Color().fromHEX(qualityTab.ColorRGB);
        }
        item.initWithStaticId(itemData.rewardId,itemData.rewardType,itemData.rewardCount,state,true);
        let got_node = day_node.getChildByName("got_node");
            let get_node = day_node.getChildByName("canget_node");
            if(get_node){
                get_node.active = bOpen&&!info.bReceived;
            }
            if(got_node){
                got_node.active = bOpen&&info.bReceived;
            }
    }

    public onClickDay(event, customEventData){
        this.clickDay = Number(customEventData);
        let infoList = ManagerSevenSignInData.getInstance().getSevenSignInInfo();
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips);
        if(ManagerSevenSignInData.getInstance().getCurrLoginDay() < Number(customEventData)){
            // shopboxTipslayer 当前天数小于领取的时候
            showItemTips(infoList[Number(customEventData)-kOneNumber].rewardInfo,event.target);
            return;
        }

        if(infoList[this.clickDay-1].bReceived){
            ShowTips("AleadyGet");
            return;
        }

        this.onClickReceiveReward();
    }

    public onClickReceiveReward(){
        let infoList = ManagerSevenSignInData.getInstance().getSevenSignInInfo();
        if(!infoList[this.clickDay-1].bReceived && ManagerSevenSignInData.getInstance().getCurrLoginDay() >= this.clickDay){
            this.requestReceiveReward();
            return;
        }
        //ItemTip.show(this.spr_item_icon.node, this._item_desc);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips);
        //showItemTips(this._info_data.rewardInfo, this.spr_item_icon.node, true);
        // showItemTips(this._info_data.rewardInfo, this.spr_item_icon.node);
    }

    private requestReceiveReward(){
        let param = new proto.Msg_ReceiveSevenDaySignInRewardReq();
        param.day = this.clickDay;
        Net.Send(proto.Ptl.ReceiveSevenDaySignInRewardReq, param);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips);
    }
}
