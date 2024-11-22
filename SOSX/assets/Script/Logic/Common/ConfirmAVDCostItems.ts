
import { tab } from "../../Table/table_gen";
import PopLayer from "../Utils/PopLayer";
import Role from "./Role";
const {ccclass, property} = cc._decorator;

@ccclass
export default class ConfirmAVDCostItems extends PopLayer {

    @property(cc.Label)
    label: cc.Label = null;

    OK:Function = null
    Cancle:Function = null

    setOKCallback(call:Function){
        this.OK = call
    }

    setCancleCallback(call:Function){
        this.Cancle = call
    }

    onOK(){
        if(this.OK){
            this.OK()
        }
        this.hide()
    }

    onCancle(){
        if(this.Cancle){
            this.Cancle()
        }
        this.hide()
    }

    start () {
        let id = tab.Data.GetKeyValue_ConfigTable().AdvertTicketItemID
        this.label.string = String(Role.Instance.RoleItemAtrr.getItemByStaticID(id).count) + "）"
    }
}
