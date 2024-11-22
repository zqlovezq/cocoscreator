import { tab } from "../../Table/table_gen";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SeriesDiscountItem extends cc.Component {
    @property(cc.Node)
    left: cc.Node = null;
    @property(cc.Node)
    right: cc.Node = null;
    @property(cc.Label)
    descLbl: cc.Label = null;
    @property(cc.Label)
    worthLbl: cc.Label = null;
    @property(cc.Label)
    costLbl: cc.Label = null;
    @property(cc.Label)
    goldLbl: cc.Label = null;
    @property(cc.Label)
    diamondLbl: cc.Label = null;
    @property([cc.Label])
    cardLbls: cc.Label[] = [];
    @property(cc.Node)
    gotLayer: cc.Node = null;
    @property(cc.Node)
    cantgotLayer: cc.Node = null;
    @property(cc.Node)
    buyBtn:cc.Node = null;
    setData(curIndex: number, slidIndex: number) {
        let data = tab.Data.ContinuousGiftTable;
        let max = data.length - 1;
        this.gotLayer.active = false;
        this.cantgotLayer.active = false
        this.buyBtn.active = true;
        if(curIndex>max){
            this.gotLayer.active = true
        }
        if(slidIndex>max){
            slidIndex = max;
        }
        if (curIndex === slidIndex) {
            // 当前购买界面
        } else if (curIndex < slidIndex) {
            // 下一级购买界面
            this.cantgotLayer.active = true
        } else {
            // 上一级购买界面
            this.gotLayer.active = true;
            this.buyBtn.active = false;
        }
        this.right.active = slidIndex !== max;
        this.left.active = slidIndex !== 0;
        this.descLbl.node.parent.active = slidIndex !== max;
        this.descLbl.string = data[slidIndex].NextTexts;
        this.worthLbl.string = data[slidIndex].DiscountTexts;
        let rechargeID = data[slidIndex].RechargeID
        let rechargeInfo = tab.Data.RechargeTableByID.getValue(rechargeID);
        if (rechargeInfo) {
            this.costLbl.string = rechargeInfo.Price + "元"
        } else {
            this.costLbl.string = data[slidIndex].DiscountTexts;
        }
        let boxData: tab.BoxTable = tab.Data.BoxTableByBoxID.getValue(data[slidIndex].BoxID);
        this.goldLbl.node.parent.active = boxData.GoldCount > 0;
        this.goldLbl.string = String(boxData.GoldCount);
        this.diamondLbl.node.parent.active = boxData.MinDiamond > 0;
        this.diamondLbl.string = String(boxData.MinDiamond);
        // 处理卡牌数量
        for (let i = 0; i < this.cardLbls.length; i++) {
            let cardlbl = this.cardLbls[i];
            let count = boxData.CardCount[i];
            cardlbl.string = String(count);
        }
    }

}
