
import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import Role from "../Common/Role";
import { ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BossboxOpenNow extends PopLayer {
 
    @property(cc.Label)
    costlabel: cc.Label = null;

    _ID:number = 0;
    public static ID:number = 0
    
    start () {
        this.costlabel.string = tab.Data.GetKeyValue_ConfigTable().BossBoxUnlockLvCost.toString()
    }

    setAction(ID: number) {
        this._ID = ID
    }

    onClick(){
        if(Role.Instance.RoleData.diamond < tab.Data.GetKeyValue_ConfigTable().BossBoxUnlockLvCost){
            ShowTips("DiamondNotEnough")
            return;
        }
        //发送解锁下一等级的协议
        let param = new proto.Msg_BossBoxUnlockLvReq()
        param.lv = Role.Instance.bossBoxData.level + 1
        Net.Send(proto.Ptl.BossBoxUnlockLvReq, param)
        this.hide()
    }
}
