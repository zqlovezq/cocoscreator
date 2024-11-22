
import { tab } from "../../Table/table_gen";
import { setAllianceBadge } from "../Alliance/AllianceCommonInterface";

const {ccclass, property} = cc._decorator;

@ccclass
export default class FightShowPlayer extends cc.Component {

    @property(cc.Label)
    lblPlayerName: cc.Label = null;

    @property(cc.Label)
    lblAllianceName: cc.Label = null;
    
    @property(cc.Sprite)
    spAllianceIcon: cc.Sprite = null;

    setData(playerName:string, allianceName?:string, allianceIcon?:number) {
        this.lblPlayerName.string = playerName;

        if(allianceName && allianceName.length > 0) {
            this.lblAllianceName.string = allianceName
            if(allianceIcon !== undefined) {
                setAllianceBadge(this.spAllianceIcon, allianceIcon);
            }
        } else {
            this.lblAllianceName.string = tab.Data.GetKeyValue_ConfigTable().NotHaveAllianceTip;
        }
    }
}
