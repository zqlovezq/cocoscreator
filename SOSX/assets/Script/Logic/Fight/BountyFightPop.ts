import { tab } from "../../Table/table_gen";
import CommonHelp from "../Common/CommonHelp";
import { FightLoader } from "../Fight/FightLoader";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BountyFightPop extends PopLayer {

    @property(cc.Node)
    close_btn:cc.Node = null; /*  */

    @property(cc.Button)
    quick_start_btn:cc.Button = null; /*  */
    @property(cc.Label)
    cost:cc.Label = null;

    onLoad() {
        this.close_btn.on("click", ()=>{this.setVisible(false);}, this);
        this.quick_start_btn.node.on("click", this.onQuickStart, this);
        this.cost.string = String(tab.Data.GetKeyValue_ConfigTable().BountyGameCost)
    }
    /*  */
    onQuickStart(event:cc.Event.EventTouch){
        
        FightLoader.Instance.MatchBountyPvP();
    }
    onHelpClick() {
        CommonHelp.show("BountyHelp")
    }
}
