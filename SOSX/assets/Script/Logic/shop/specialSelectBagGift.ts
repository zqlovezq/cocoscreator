
import Analytics, { CAEvtID, CAEvtName } from "../../../Update/Analytics";
import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { isValidObj, kNegativeOneNumber, kOneNumber, kZeroNumber, sendPayStartMsg } from "../Common/CommonInterface";
import Role from "../Common/Role";
import SimpleItem from "../NewPlayerGiftBag/SimpleItem";
import { getBoxIDAndCfg, getItemIconURL, LoadResAsync, popRewardLayer_Ex, ShowTips, ShowTipsOfCustomString } from "../Utils/GameUtils";

const kSpecialGoldNumber = 500;

const { ccclass, property } = cc._decorator;

@ccclass
export default class specialSelectBagGift extends cc.Component {

    @property(cc.Node)
    priceNode: cc.Node = null

    @property(cc.Label)
    limitTimes: cc.Label = null

    @property(cc.Node)
    aleadyBuy: cc.Node = null

    @property(cc.Label)
    price_num: cc.Label = null

    @property(cc.Node)
    simpleItemNode: cc.Node = null

    @property(cc.Label)
    cardNameLable: cc.Label = null

    @property(cc.Label)
    cardQualityLable: cc.Label = null

    @property(cc.Sprite)
    card_bg: cc.Sprite = null;
    @property(cc.Button)
    buy_btn:cc.Button = null;
    private static_id: number = 0;      //静态id
    public lefttimes: number = 0;
    public clickcallback: Function = null;

    pickinfo: proto.IPickedGiftBagInfo = null;

    onLoad() {
        this.buy_btn.node.on("click", this.onclick, this);

        Net.listenProtocol(proto.Ptl.BuyPickedGiftBagRsp, (buffer, ptl) => {
            let msg = proto.Msg_BuyPickedGiftBagRsp.decode(buffer)
            cc.log("BuyPickedGiftBagRsp (购买精选礼包) msg: " + JSON.stringify(msg));
            if (msg && msg.giftBagID == this.pickinfo.GiftID) {
                if (msg.result == proto.Msg_BuyPickedGiftBagRsp.ErrorCode.Succeed) {
                    popRewardLayer_Ex(msg.Rewards)
                    this.pickinfo.BuyedTimes++
                    this.setCostInfo()
                } else if (msg.result == proto.Msg_BuyPickedGiftBagRsp.ErrorCode.GiftNotExist) {
                    ShowTipsOfCustomString("礼包不存在")
                } else if (msg.result == proto.Msg_BuyPickedGiftBagRsp.ErrorCode.GiftBuyTimesNotEnough) {
                    ShowTipsOfCustomString("购买次数不足")
                } else {

                }
            }
        }, this)
    }

    /*  */
    public initCard(pickinfo: proto.IPickedGiftBagInfo, func: Function = null) {
        this.pickinfo = pickinfo;
        this.clickcallback = func;
        this.refreshCard();
        this.setCostInfo()
    }

    /*  */
    setCostInfo() {
        this.limitTimes.string = `${this.pickinfo.MaxBuyTimes - this.pickinfo.BuyedTimes}/${this.pickinfo.MaxBuyTimes}`
        this.priceNode.active = this.pickinfo.BuyedTimes < this.pickinfo.MaxBuyTimes
        this.aleadyBuy.active = this.pickinfo.BuyedTimes >= this.pickinfo.MaxBuyTimes
        this.price_num.string = this.pickinfo.Price.toString()
        // let cfg = tab.Data.PickedGiftBagTableByID.getValue(this.pickinfo.GiftID)
        // if(cfg) {
        // }
    }

    /*  */
    async refreshCard() {
        let card: proto.IRewardSimpleInfo = this.pickinfo.Reward[0]
        let simpleitem: SimpleItem = this.simpleItemNode.getComponent(SimpleItem)
        if (simpleitem) {
            simpleitem.setView(card)
            simpleitem.setNameVisible(false)
            let cardInfo: proto.IItemData = Role.Instance.RoleItemAtrr.getItemByStaticID(card.rewardId);

            if (tab.Data.CardTableByID.getValue(card.rewardId)) {
                simpleitem.setNewFlagVisible(cardInfo == undefined || cardInfo.count <= 0)
            }
        }
        let itemcfg: tab.ItemTable = tab.Data.ItemTableByID.getValue(card.rewardId)
        if (itemcfg) {
            this.cardNameLable.string = itemcfg.Name
            let qualityTab = tab.Data.QualityTableByQuality.getValue(itemcfg.Quality);
            if (qualityTab) {
                this.cardNameLable.node.color = new cc.Color().fromHEX(qualityTab.ColorRGB);
                this.cardQualityLable.string = qualityTab.QualityDescrible;
                this.cardQualityLable.node.color = new cc.Color().fromHEX(qualityTab.ColorRGB);
            }
        }
        if (tab.Data.CardTableByID.getValue(card.rewardId)) {
            if(itemcfg){
                let qualityTab = tab.Data.QualityTableByQuality.getValue(itemcfg.Quality);
                let textureUrl = qualityTab.QualityFile;
                this.card_bg.setTexture(textureUrl);
            }
        }
    }

    // async setCardBgAndIcon(award){
    //     let cardTabData: tab.ItemTable = tab.Data.ItemTableByID.getValue(award.rewardId);
    //     if (!isValidObj(cardTabData)){
    //         return;
    //     }
    //     let iconObj = getItemIconURL(award.rewardId, award.rewardType);
    //     this.spr_portrait.setTexture(iconObj.icon)
    //     let qualityTab = tab.Data.QualityTableByQuality.getValue(cardTabData.Quality);
    //     if(isValidObj(qualityTab)){
    //         this.spr_card_bg.setTexture(qualityTab.QualityBG);
    //         this.spr_card_quaity.setTexture(qualityTab.QualityFrame);
    //     }
    // }

    /*  */
    onclick(btn) {
        if (this.pickinfo.BuyedTimes >= this.pickinfo.MaxBuyTimes) {
            return
        }
        // let param = new proto.Msg_BuyPickedGiftBagReq;
        // param.giftBagID = this.pickinfo.GiftID
        // Net.Send(proto.Ptl.BuyPickedGiftBagReq, param)
        let cfg = tab.Data.PickedGiftBagTableByID.getValue(this.pickinfo.GiftID)
        if (cfg) {
            //Analytics.Instance.EventStart(CAEvtID.EventTracking, CAEvtName.PickedGiftBagADRefresh); /* zhibo-@20230410 for <删除打点> */
            sendPayStartMsg(cfg.RechargeID);
        }
    }
}
