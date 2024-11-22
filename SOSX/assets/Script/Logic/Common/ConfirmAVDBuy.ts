
import { tab } from "../../Table/table_gen";
import { ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import Role from "./Role";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ConfirmAVDBuy extends PopLayer {

    @property(cc.Label)
    label: cc.Label = null;

    OK:Function = null

    setOKCallback(call:Function){
        this.OK = call
    }

    onOK()
    {
        if(Role.Instance.RoleData.gold < tab.Data.GetKeyValue_ConfigTable().BuyAVDAwardGoldCost)
        {
            ShowTips("OnlyGoldNotEnough")
            this.hide()
            return
        }

        if(this.OK)
        {
            this.OK()
        }

        this.hide()
    }

    start () {
        this.label.string = tab.Data.GetKeyValue_ConfigTable().MultiFlag + tab.Data.GetKeyValue_ConfigTable().BuyAVDAwardGoldCost.toString()
    }

}
