import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
import { PayData } from '../pay/PayData';
import { PayControl } from '../pay/PayControl';
import { ChannelMgr } from '../../../channel/ChannelMgr';
const { ccclass, property } = _decorator;

@ccclass('DiamondBuyItem')
export class DiamondBuyItem extends Component {
    @property(Sprite)
    sp_icon: Sprite = null;
    @property(Label)
    lbl_num: Label = null;
    @property(Label)
    lbl_price: Label = null;
    @property(Label)
    lbl_extra_diamond = null;
    @property(Node)
    node_extra_diamond_node = null;
    @property(Node)
    node_first_recharge:Node = null;
    @property(Label)
    lbl_first_recharge_diamond = null;
    private _tabData: tab.BuyDiamondsTable = null;
    private _rechargeTab: tab.RechargeTable = null;
    initData(tabData: tab.BuyDiamondsTable) {
        // 根据是否买过获取首冲信息
        this.node_extra_diamond_node.active = false;
        this.node_first_recharge.active = false;
        if(PayData.ins.payInfoMsg.buyDiamondsInfo.boughtGoodsIds.indexOf(tabData.GoodsId)>-1){
            this.lbl_extra_diamond.string = String(tabData.Add);
            this.node_extra_diamond_node.active = tabData.Add>0;
        }else{
            this.lbl_first_recharge_diamond.string = String(tabData.FirstAdd);
            this.node_first_recharge.active = true;
        }
        this._tabData = tabData;
        this._rechargeTab = tab.getData().RechargeTableById.getValue(tabData.RechargeId);
        this.lbl_num.string = "x"+tabData.GetItemNum;
        this.lbl_price.string =ChannelMgr.getSdkRechargeShowPrice(this._rechargeTab);// LangMgr.getCombineString("ui_commondesc_73", [this._rechargeTab.Price]);
        this.sp_icon.setTexture(tabData.Icon);
    }
    // 点击购买钻石
    clickBuyDiamond(){
        var self = this;
        PayControl.ins.requestPay(self._tabData.RechargeId,()=>{
            // 刷新这个界面
            if(PayData.ins.payInfoMsg.buyDiamondsInfo.boughtGoodsIds.indexOf(self._tabData.GoodsId)===-1){
                PayData.ins.payInfoMsg.buyDiamondsInfo.boughtGoodsIds.push(self._tabData.GoodsId);
            }
            self.initData(self._tabData)
        })
    }
}
