
import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import boxtips from "../Common/boxtips";
import { kZeroNumber, sendPayStartMsg } from "../Common/CommonInterface";
import CommonItem from "../Common/CommonItem";
import ConfirmTips from "../Common/ConfirmTips";
import { getFormatString, showItemTips, ShowTips } from "../Utils/GameUtils";
import BoxIcon from "./BoxIcon";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GiftBagCell extends cc.Component {

    @property(cc.Sprite)
    background: cc.Sprite = null

    @property(cc.Label)
    title: cc.Label = null

    @property(cc.Label)
    desc: cc.Label = null

    @property(cc.Sprite)
    specialHeroHead: cc.Sprite = null

    @property(cc.Label)
    worthNumber: cc.Label = null;

    @property(cc.Label)
    oriPrice: cc.Label = null;

    @property(cc.Label)
    price: cc.Label = null;

    @property(cc.Label)
    useTimes: cc.Label = null;

    @property(cc.Node)
    awardNode: cc.Node = null

    @property(cc.Node)
    addSpr: cc.Node = null

    @property(cc.Prefab)
    commonItem: cc.Prefab = null

    @property(cc.Prefab)
    boxIcon: cc.Prefab = null

    //@property({displayName: "该商品充值档位ID"})
    //recharge_id: number = kZeroNumber;

    clickCallback:Function = null
    giftID:number = 0
    ntype:proto.GiftBagType = proto.GiftBagType.DayGift;
    info:proto.IGiftBagCell = null;

    setView(info:proto.IGiftBagCell, ntype:proto.GiftBagType){
        let cfg = tab.Data.GiftBagTableByGiftBagID.getValue(info.GiftID)
        let badd:boolean = false
        if(cfg){
            this.background.setTexture(cfg.BackGround)
            this.title.string = cfg.Title
            this.desc.string = cfg.Desc
            this.worthNumber.string = cfg.WorthNumber
            
            this.useTimes.string = tab.Data.TipsTableByKey.getValue("EXLimitBuyTimes").Value +  `:${info.MaxBuyTimes - info.BuyedTimes}/${info.MaxBuyTimes}`
            
            badd =  cfg.GiftBAwardType == tab.GiftBagAwardType.GiftBagAwardType_GetAllAward

            let rcfg = tab.Data.RechargeTableByID.getValue(cfg.RechargeID)
            if(rcfg){
                this.price.string = rcfg.Price.toString() + tab.Data.TipsTableByKey.getValue("RMB").Value
                this.oriPrice.string = rcfg.RechargeOriPrice.toString() + tab.Data.TipsTableByKey.getValue("RMB").Value
            }
        }

        this.info = info
        this.ntype = ntype        
        
        this.awardNode.removeAllChildren()
        let bset:boolean = false
        let addcn:number = 0

        for(let i = 0; i < info.Reward.length; i++){
            let award = info.Reward[i]
            if(award.rewardType == tab.RewardType.RewardType_ItemType){
                let item:CommonItem = cc.instantiate(this.commonItem).getComponent(CommonItem)
                if(item){
                    item.initWithStaticId(award.rewardId, award.rewardType, award.rewardCount)
                    this.awardNode.addChild(item.node)                
                    item.setClickCallback(()=>{showItemTips(award, item.node)})
                }
            } else {
                let boxicon = cc.instantiate(this.boxIcon).getComponent(BoxIcon)
                if( boxicon) {
                    boxicon.setView(award)
                    this.awardNode.addChild(boxicon.node)
                }
            }

            if(badd &&  addcn < info.Reward.length - 1){
                let spr = cc.instantiate(this.addSpr)
                if(spr){
                    addcn ++;
                    spr.active = true
                    this.awardNode.addChild(spr)
                }
            }
            
            if(bset === false){
                let card = tab.Data.CardTableByID.getValue(award.rewardId)
                if(card){
                    let itemcfg = tab.Data.ItemTableByID.getValue(award.rewardId)
                    if(itemcfg){
                        this.specialHeroHead.setTexture(itemcfg.Icon)
                        bset = true
                    }
                }
            }
        }
    }

    /*  */
    CallBack(){
        if(this.info.BuyedTimes >= this.info.MaxBuyTimes){
            ShowTips("LeftTimesNotEnough")
            return
        }

        let cfg = tab.Data.GiftBagTableByGiftBagID.getValue(this.info.GiftID)
        if(cfg){
            let rechargeTbl = tab.Data.RechargeTableByID.getValue(cfg.RechargeID)
            if(rechargeTbl !== undefined) {
               // let str = getFormatString(tab.Data.TipsTableByKey.getValue("BuyGiftConfirmTxt").Value, rechargeTbl.Price, cfg.Title) //  `确认花费${rechargeTbl.Price}元购买${cfg.Title}吗?`
                //ConfirmTips.show(str, ()=>{
                sendPayStartMsg(rechargeTbl.ID);
            }
        }
    }
}
