
import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { getQualityIconPath } from "../Activity/SevenSignIn/ManagerSevenSignInData";
import { kZeroNumber, sendPayStartMsg } from "../Common/CommonInterface";
import { getFormatString, getItemIconURL,  showItemTips, ShowTips } from "../Utils/GameUtils";
import SimpleItem from "./SimpleItem";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewPlayerBagGiftRewardInfo_2 extends cc.Component {

    @property(cc.Node)
    buyNode: cc.Node = null

    @property(cc.Label)
    price: cc.Label = null;
   
    @property(cc.Node)
    aleadyBuy: cc.Node = null

    @property(cc.Node)
    awardsNode:cc.Node = null

    @property(cc.Prefab)
    simpleItemTemplte:cc.Prefab = null

    @property(cc.Node)
    addSpr: cc.Node = null

    private _awards:proto.IRewardSimpleInfo[] = [];

    private _ID = 0;
    private _recharge_id: number = kZeroNumber;
    private _callback:Function = null

    onLoad () {}

    setView(gift:proto.INewPlayerGiftBag){
        if(!gift){
            return
        }
        this._ID = gift.id
        this._awards = gift.rewards

        //整理下重复的奖励
        let mapaward:Map<number,number> = new Map<number, number>()
        let mapaward2:Map<number,number> = new Map<number, number>()

        for(let award of this._awards){
            mapaward.set(award.rewardId, (mapaward.get(award.rewardId) || 0) + award.rewardCount)
            mapaward2.set(award.rewardId, award.rewardType)
        }

         let vecaward:proto.RewardSimpleInfo[] = []
         mapaward.forEach((value, key)=>{
            let info = new proto.RewardSimpleInfo
            info.rewardId = key
            info.rewardCount = value
            info.rewardType = mapaward2.get(key) || 0
            vecaward.push(info)
        })

        this.awardsNode.removeAllChildren()
        for(let i = 0; i < vecaward.length; i++){
            let gift = vecaward[i]
            let cell = cc.instantiate(this.simpleItemTemplte)
            this.awardsNode.addChild(cell)
            let com = cell.getComponent(SimpleItem)
            if(com){
                com.setView(gift)
            }            

            if(vecaward.length == 2 && i < 1) {  //如果是两个奖励的，中间要添加一个加号
                let spr = cc.instantiate(this.addSpr)
                if(spr){
                    spr.active = true
                    this.awardsNode.addChild(spr)
                }
            }
        }

        this.aleadyBuy.active = gift.buyTimes >= gift.maxBuyTimes
        this.buyNode.active = !this.aleadyBuy.active
      
        let cfg = tab.Data.NewPlayerGiftBagTableByID.getValue(gift.id)
        if(cfg){
            this._recharge_id = cfg.RechargeID;
            let rcfg = tab.Data.RechargeTableByID.getValue(cfg.RechargeID)
            if(rcfg){
                this.price.string = rcfg.Price.toString() //+ tab.Data.TipsTableByKey.getValue("RMB").Value
            }
        }
    }

    setView_2(gift:proto.IOverBagGift){
        if(!gift){
            return
        }
        let vecaward:proto.RewardSimpleInfo[] = []
        let overbagCfg = tab.Data.OverBagGiftTableByID.getValue(gift.overBagGiftId)
        if(overbagCfg){
            this._recharge_id = overbagCfg.OBRechargeID
            for(let i = 0; i<overbagCfg.OBAwardID.length; i++){
                let info = new proto.RewardSimpleInfo
                info.rewardId = overbagCfg.OBAwardID[i]
                info.rewardCount = overbagCfg.OBAwardCnt[i]
                info.rewardType = overbagCfg.OBAwardType[i]
                vecaward.push(info) 
            }
        }

        this.awardsNode.removeAllChildren()
        for(let i = 0; i < vecaward.length; i++){
            let gift = vecaward[i]
            let cell = cc.instantiate(this.simpleItemTemplte)
            this.awardsNode.addChild(cell)
            let com = cell.getComponent(SimpleItem)
            if(com){
                com.setView(gift)
            }            

            if(vecaward.length == 2 && i < 1) {  //如果是两个奖励的，中间要添加一个加号
                let spr = cc.instantiate(this.addSpr)
                if(spr){
                    spr.active = true
                    this.awardsNode.addChild(spr)
                }
            }
        }
        this.aleadyBuy.active = false
        this.buyNode.active = true
        let rcfg = tab.Data.RechargeTableByID.getValue(this._recharge_id)
        if(rcfg){
            this.price.string = rcfg.Price.toString() //+ tab.Data.TipsTableByKey.getValue("RMB").Value
        }
    }

    /*  */
    onClickItem(){
        if(this.aleadyBuy.active){
            ShowTips("SellOut")
            return
        }
        sendPayStartMsg(this._recharge_id);
    }

    start () {}
}
