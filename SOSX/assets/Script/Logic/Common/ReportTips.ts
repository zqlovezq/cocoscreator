
import { tab } from "../../Table/table_gen";
import { getServerUtcTime, setTextTime_3 } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import Role from "./Role";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends PopLayer {

    @property(cc.Label)
    cfgtime: cc.Label = null;

    @property(cc.Label)
    timecount: cc.Label = null

    cardCountDown(dt){
        let leftt = Role.Instance.beReportedEndUTC - getServerUtcTime();
        if (leftt <= 0){
            this.unschedule(this.cardCountDown);
            this.hide()
            return;
        }

        if(leftt >= 0){
            setTextTime_3(this.timecount, leftt);
        }
    }

    start () {

        this.cfgtime.string = tab.Data.GetKeyValue_ConfigTable().ForbidPveHour.toString()
        this.cardCountDown(0)
        this.schedule(this.cardCountDown, 1)
    }
}
