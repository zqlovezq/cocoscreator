
import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { getQualityIconPath } from "../Activity/SevenSignIn/ManagerSevenSignInData";
import { kZeroNumber, sendPayStartMsg } from "../Common/CommonInterface";
import { getFormatString, getItemIconURL,  showItemTips, ShowTips } from "../Utils/GameUtils";
import SimpleItem from "./SimpleItem";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewPlayerBagGiftRewardInfo extends cc.Component {

    @property(cc.Node)
    buyNode: cc.Node = null

    @property(cc.Label)
    price: cc.Label = null;

    @property(cc.Label)
    oriPrice:cc.Label = null

    @property(cc.Node)
    aleadyBuy: cc.Node = null

    @property([cc.Node])
    itemNode:cc.Node[] = []

    private _awards = [];

    private _ID = 0;
    private _recharge_id: number = kZeroNumber;

    onLoad () {
        //物品tips
        //卡牌详情
    }

    setView(gift:proto.INewPlayerGiftBag){
        if(!gift){
            return
        }

        this._ID = gift.id
        let award = gift.rewards
        this._awards = award
        for(let i = 0; i < award.length && i < this.itemNode.length; i++){
            let com = this.itemNode[i].getComponent(SimpleItem)
            if(com){
                com.setView(award[i])
            }
        }

        this.aleadyBuy.active = gift.buyTimes >= gift.maxBuyTimes
        this.buyNode.active = !this.aleadyBuy.active

        //展示的图片使用最后一个奖励
        let cfg = tab.Data.NewPlayerGiftBagTableByID.getValue(gift.id)
        if(cfg){
            this.oriPrice.string = cfg.OriPrice
            this._recharge_id = cfg.RechargeID;
            let rcfg = tab.Data.RechargeTableByID.getValue(cfg.RechargeID)
            if(rcfg){
                this.price.string = rcfg.Price.toString() + tab.Data.TipsTableByKey.getValue("RMB").Value
            }
        }
    }

    onClickItem(){
        if(this.aleadyBuy.active){
            ShowTips("SellOut")
            return
        }
        sendPayStartMsg(this._recharge_id);
    }

    start () {}
}
