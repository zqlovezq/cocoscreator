import { _decorator, Component, Label, Node, Sprite, Vec3 } from 'cc';
import InfiniteCell from '../../../../Common/InfiniteList/InfiniteCell';
import { dailyBuyShop } from '../../../utils/GameUtil';
import { tab } from '../../../../Table/table_gen';
import { ItemInfo } from '../../item/ItemInfo';
import { ItemPoolMgr } from '../../item/ItemPoolMgr';
import { PayControl } from '../../pay/PayControl';
import { proto } from 'client_protocol';
import { Net } from '../../../net/Net';
import { MallDataMgr } from '../../shop/MallDataMgr';
import { LangMgr } from '../../../mgr/LangMgr';
import { ChannelMgr } from '../../../../channel/ChannelMgr';
const { ccclass, property } = _decorator;

@ccclass('RookieShopItem')
export class RookieShopItem extends Component {
    @property(Node)
    node_first_item: Node = null;
    @property(Node)
    node_content:Node = null;
    @property(Node)
    node_diamonds:Node = null;
    @property(Node)
    node_free:Node = null;
    @property(Node)
    node_RMB:Node = null;
    @property(Node)
    node_got:Node = null;
    @property(Label)
    lbl_price:Label = null;
    @property(Label)
    lbl_limit:Label = null;
    @property(Label)
    lbl_diamond:Label = null;
    @property(Sprite)
    sp_chaozhi: Sprite = null;
    private _CostItemId:number = 0;
    private _CostItemNum:number = 0;
    // private _GetItemId:number = 0;
    // private _GetItemNum:number = 0;
    private _trialId: number = 0;
    private _mallData:tab.MallItemTabe = null;
    private _rechargeId:number = 0;
    private boughtCount:number = 0;
    initData(data: tab.MallItemTabe,id:number): void {
        this._trialId = id;
        this._mallData = data;
        this.node_content.destroyAllChildren();
        this.node_diamonds.active = false;
        this.node_free.active = false;
        this.node_RMB.active = false;
        this.boughtCount = MallDataMgr.ins.getFixedShopData(this._mallData.MallId).get(this._mallData.Id);
        this.lbl_limit.string = String(this._mallData.LimitCount-this.boughtCount);
        this.node_got.active = this.boughtCount>=this._mallData.LimitCount;

        const awards = this._mallData.GetItemIds;
        const awardNums = this._mallData.GetItemNum;
        const firstAward = awards[0];
        const firstAwardNum = awardNums[0];
        const otherAward = [];
        const otherAwardNums = [];
        for (let i = 1; i < awards.length; i++) {
            otherAward.push(awards[i]);
            otherAwardNums.push(awardNums[i]);
        }
        const firstInfo = new ItemInfo();
        firstInfo.itemId = firstAward;
        firstInfo.num = firstAwardNum;
        ItemPoolMgr.ins.createRewadItem(firstInfo, this.node_first_item);
        if (otherAward.length === 0) {
            this.node_first_item.setPosition(new Vec3(0, -100, 0));
        }
        this.node_content.destroyAllChildren();
        for (let i = 0; i < otherAward.length; i++) {
            const awardInfo = new ItemInfo();
            awardInfo.itemId = otherAward[i];
            awardInfo.num = otherAwardNums[i];
            ItemPoolMgr.ins.createRewadItem(awardInfo, this.node_content);
        }

        if(this._mallData.CostType==tab.MallCostType.MallCostType_CostItem){
            // 钻石购买
            if(this._mallData.CostItemIds[0]){
                this.node_diamonds.active = true;
                this._CostItemId = this._mallData.CostItemIds[0];
                this._CostItemNum = this._mallData.CostItemNum[0];
                this.lbl_diamond.string = String(this._CostItemNum);
            }else{
                this.node_free.active = true;
                this._CostItemId = 0;
                this._CostItemNum = 0;
            }
        }else if(this._mallData.CostType==tab.MallCostType.MallCostType_Recharge){
            // 充值购买
            this.node_RMB.active = true;
            this._rechargeId = this._mallData.RechargeId;
            const rechargeTab = tab.getData().RechargeTableById.getValue(this._rechargeId);
            this.lbl_price.string = ChannelMgr.getSdkRechargeShowPrice(rechargeTab);
        }

        if (this._mallData.IconUrl) {
            this.sp_chaozhi.node.active = true;
            this.sp_chaozhi.setTexture(this._mallData.IconUrl)
        } else {
            this.sp_chaozhi.node.active = false;
        }
    }
    // 购买商品
    clickBuy(){
        if(this.boughtCount >= this._mallData.LimitCount){
            console.log("没有次数了")
            return
        }
        const sendMsg = ()=>{
            let msg = new proto.Msg_BuyFixedShopCommodityReq();
            msg.commodityId = this._mallData.Id;
            msg.num = 1;
            Net.Send(proto.Ptl.BuyFixedShopCommodityReq, msg);
        }
        if(this._CostItemId){
            // 花钻石
            dailyBuyShop(this._CostItemId, this._CostItemNum, -1, "Tips_common_buy", () => {
                sendMsg();
            })
        }else{
            //免费 判断是否有广告次数
            sendMsg();
        }
    }
    clickRMB(){
        var self = this;
        if(this.boughtCount >= this._mallData.LimitCount){
            console.log("没有次数了")
            return
        }
        PayControl.ins.requestPay( this._rechargeId, () => {
            // 刷新界面 数据
            MallDataMgr.ins.getFixedShopData(this._mallData.MallId).set(this._mallData.Id, self.boughtCount + 1);
            this.initData(self._mallData,self._trialId)
        })
    }
}


