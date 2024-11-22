/**
 * 
 */

import { LOCAL_MESSAGE } from "../../../Protocol/LocalMessage";
import { Net } from "../../../Protocol/Net";
import { tab } from "../../../Table/table_gen";
import { getServerUtcTime, ShowTips } from "../../Utils/GameUtils";
import ActivityController from "./ActivityController";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ActivityToggle extends cc.Component {

    @property(cc.Node)
    reddotNode: cc.Node = null;

    @property(cc.Sprite)
    actIcon:cc.Sprite = null

    @property(cc.Sprite)
    checkIcon:cc.Sprite = null

    ID:number = 0
    
    callback:Function = null

    setCallback(callb:Function = null){
        this.callback = callb
    }

    onLoad () {
        this.reddotNode.active = false
        this.node.getComponent(cc.Toggle).isChecked = false;
        this.node.on('toggle', this.onClick, this);

        Net.listenLoaclMessage(LOCAL_MESSAGE.Activity_RefreshReddotVisible, (param)=>{
            let id = param as number
            if(this.ID == id){
                this.refreshReddot()
            }

        }, this)
    }

    onClick(){
        //活动结束的判断
        let actinfo = ActivityController.getInstance().getActivityDataByID(this.ID)
        if(actinfo){
            if(actinfo.endTimeUTC > 0 && actinfo.endTimeUTC <= getServerUtcTime()){
                ShowTips("ChallengeActiveEnds")
                return
            }
        }
        if(this.callback){
            this.callback(this.ID)
        }
    }

    setView(activityID:number){
        this.ID = activityID
        let cfg = tab.Data.LimitActivityTableByID.getValue(activityID)
        if(cfg){
            this.actIcon.setTexture(cfg.Icon)
            this.checkIcon.setTexture(cfg.SelectIcon)
        }
        //刷新红点
        this.refreshReddot()
    }

    refreshReddot(){
        this.reddotNode.active = ActivityController.getInstance().getActivityRedTipCount(this.ID) > 0
    }

    public setSelected(){
        this.node.getComponent(cc.Toggle).isChecked = true;
    }
}
