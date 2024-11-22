/*
 * @Descripttion: 钻石购买二次确认框
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { sendPayStartMsg } from "../Common/CommonInterface";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RechargeConfirmPop extends PopLayer {

    @property(cc.Label)
    lbl_item_name: cc.Label = null;

    @property(cc.Label)
    lbl_buy_title: cc.Label = null;

    @property(cc.Label)
    lbl_original_count: cc.Label = null;

    @property(cc.Label)
    lbl_tip_add: cc.Label = null;

    @property(cc.Label)
    lbl_donated_count: cc.Label = null;

    @property(cc.Label)
    lbl_donate_tip: cc.Label = null;

    @property(cc.Button)
    btn_closed: cc.Button = null;

    @property(cc.Button)
    btn_buy: cc.Button = null;

    @property(cc.Label)
    lbl_cost: cc.Label = null;

    @property(cc.Button)
    btn_cancel: cc.Button = null;

    private _goods_idx: number;
    private _recharge_id: number;

    /*  */
    onLoad () {
        this.btn_closed.node.on("click", ()=>{this.setVisible(false);}, this);
        this.btn_cancel.node.on("click", ()=>{this.setVisible(false);}, this);
        this.btn_buy.node.on("click",    this.onClickBuy,               this);
    }

    /*  */
    public initData(idx: number, bFirstRecharge: boolean, price: number, goodsCount: number, itemName: string, rechargeID: number){
        this._goods_idx                    = idx;
        this._recharge_id                  = rechargeID;
        this.lbl_tip_add.node.active       = bFirstRecharge;
        this.lbl_donate_tip.node.active    = bFirstRecharge;
        this.lbl_donated_count.node.active = bFirstRecharge;
        this.lbl_item_name.string          = itemName;
        this.lbl_original_count.string     = `${goodsCount}`;
        this.lbl_donated_count.string      = `${goodsCount}`;
        this.lbl_cost.string               = `${price}`;
        this.lbl_buy_title.string          = bFirstRecharge ? 
                                                tab.Data.GetKeyValue_ConfigTable().FirstRechargeTip : 
                                                tab.Data.GetKeyValue_ConfigTable().NormalRechargeTip;
    }

    /*  */
    private onClickBuy(){
        sendPayStartMsg(this._recharge_id);
        this.setVisible(false);
    }
}
