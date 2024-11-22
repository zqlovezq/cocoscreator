/*
 * @Descripttion: 能量双倍活动弹出提示
 */

import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class DoubleEnergyTipsPop extends cc.Component {

    onLoad () {
    }

    start () {
        //this.scheduleOnce(this.scheClosed, tab.Data.GetKeyValue_ConfigTable().DoubleEnergyScheduleCloseTime);
    }

    onEnable(){
        this.scheduleOnce(this.scheClosed, tab.Data.GetKeyValue_ConfigTable().DoubleEnergyScheduleCloseTime);
    }
    
    onDestroy(){
        this.unschedule(this.scheClosed);
    }

    private scheClosed(){
        this.node.active = false;
    }
}
