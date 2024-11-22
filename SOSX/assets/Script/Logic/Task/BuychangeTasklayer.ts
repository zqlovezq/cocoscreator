
import { tab } from "../../Table/table_gen";
import Role from "../Common/Role";
import { ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BuychangeTasklayer extends PopLayer {

    @property(cc.Button)
    avdbtn: cc.Button = null

    @property(cc.Label)
    demondcost: cc.Label = null;

    costClickCallback:Function = null
    videoClickCallback:Function = null

    setCostClickCallback(callback:Function){
        this.costClickCallback = callback
    }

    setVideoClickCallback(callback:Function){
        this.videoClickCallback = callback
    }

    onCostClick(){
        if(this.costClickCallback){
            this.costClickCallback()
        }
        this.hide()
    }

    onVideoClick(){
        // ShowTips("FunctionClosedTip")
        // return
        if(this.videoClickCallback){
            this.videoClickCallback()
        }

        this.hide()
    }

    onLoad () {
        this.avdbtn.node.active = Role.Instance.taskData.ADReplaceRefreshTimes > 0
        this.demondcost.string =  String(tab.Data.GetKeyValue_ConfigTable().TaskUpdateCostDiamond)
    }
}
