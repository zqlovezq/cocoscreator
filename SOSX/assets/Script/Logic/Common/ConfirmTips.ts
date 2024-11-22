
import { tab } from "../../Table/table_gen";
import { LoadResAsync, showPopLayerV2 } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ConfirmTips extends PopLayer {

    @property(cc.Label)
    lblTips: cc.Label = null;

    protected _confirmFunc:Function = null;
    protected _cancelFunc:Function = null;

    static async show(tipsKey:string, confirmFunc?:Function, cancelFunc?:Function, notFromTipsTable?:boolean) {
        let tips = await showPopLayerV2("prefab/ConfirmTips", ConfirmTips)
        if(tips) {
            tips.setData(tipsKey, confirmFunc, cancelFunc, notFromTipsTable)
        }
    }

    static async showPassportLvBuy(confirmFunc?:Function, cancelFunc?:Function) {
        let tips = await showPopLayerV2("prefab/Passport/PassportLvBuyTips", ConfirmTips)
        if(tips) {
            tips.lblTips.string = `${tab.Data.GetKeyValue_ConfigTable().BossBoxUnlockLvCost}`
            tips.setFunc( confirmFunc, cancelFunc)
        }
    }

    setFunc(confirmFunc?:Function, cancelFunc?:Function){
        this._confirmFunc = confirmFunc;
        this._cancelFunc = cancelFunc;
    }

    setData(tipsKey:string, confirmFunc?:Function, cancelFunc?:Function, notFromTipsTable?:boolean) {
        this._confirmFunc = confirmFunc;
        this._cancelFunc = cancelFunc;
        if(!notFromTipsTable)
        {
            let tipsData = tab.Data.TipsTableByKey.getValue(tipsKey)
            if(tipsData) {
                this.lblTips.string = tipsData.Value;
            }
        }
        else
        {
            this.lblTips.string = tipsKey
        }
    }

    onClickCancel() {
        if(this._cancelFunc) {
            this._cancelFunc();
        }
        this.hide()
    }

    onClickConfirm() {
        if(this._confirmFunc) {
            this._confirmFunc();
        }
        this.hide()
    }
}
