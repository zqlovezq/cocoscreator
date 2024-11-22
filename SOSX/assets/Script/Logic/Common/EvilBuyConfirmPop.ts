/*
 * @Descripttion: 购买通行证二次确认框
 */

import { tab } from "../../Table/table_gen";
import PopLayer from "../Utils/PopLayer";
import { isValidObj, kZeroNumber, sendPayStartMsg } from "./CommonInterface";

const {ccclass, property} = cc._decorator;

@ccclass
export default class EvilBuyConfirmPop extends PopLayer {

    @property(cc.Button)
    btn_closed: cc.Button = null;

    @property(cc.Button)
    btn_buy: cc.Button = null;

    @property(cc.Label)
    lbl_rmb: cc.Label = null;

    @property(cc.Button)
    btn_cancel: cc.Button = null;

    private _recharge_id: number = kZeroNumber;

    onLoad () {
        this.btn_closed.node.on("click", ()=>{this.setVisible(false);}, this);
        this.btn_cancel.node.on("click", ()=>{this.setVisible(false);}, this);
        this.btn_buy.node.on("click",    this.onClickBuy,               this);
    }

    public initData(rechargeID: number){
        this._recharge_id = rechargeID;
        this.setRMB();
    }

    private setRMB(){
        let tabData = tab.Data.RechargeTableByID.getValue(this._recharge_id);
        if(isValidObj(tabData)){
            this.lbl_rmb.string = `${tabData.Price}`;
        }
    }

    private onClickBuy(){
        sendPayStartMsg(this._recharge_id);
        this.setVisible(false);
    }
}
