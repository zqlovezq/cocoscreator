/*
 * @Descripttion: 解锁彩虹任务左边奖励弹框
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { getTimeDiffString } from "../Alliance/AllianceCommonInterface";
import { kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import { getServerUtcTime, ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RainbowTaskLevelUpPop extends PopLayer {

    @property(cc.Label)
    lbl_over_left_time: cc.Label = null;

    @property(cc.Button)
    btn_closed: cc.Button = null;

    @property(cc.Button)
    btn_cancel: cc.Button = null;

    @property(cc.Button)
    btn_buy: cc.Button = null;

    @property(cc.Label)
    lbl_cost_diamond: cc.Label = null;

    private _over_left_time: number = kZeroNumber;

    onLoad () {
        this.btn_closed.node.on("click", ()=>{this.setVisible(false);}, this);
        this.btn_cancel.node.on("click", ()=>{this.setVisible(false);}, this);
        this.btn_buy.node.on("click",    this.onClickBuy,               this);
    }

    public initData(leftTime: number){
        this._over_left_time = leftTime;

        this.setCostDiamond();
        this.setOverLeftTime();
    }

    /* 设置任务结束时间
     */
    private setOverLeftTime(){
        this.unschedule(this.refreshOverLeftTime);
        this.schedule(this.refreshOverLeftTime);
    }

    /* 刷新任务结束时间
     */
    private refreshOverLeftTime(){
        let diff = this._over_left_time - getServerUtcTime();
        this.lbl_over_left_time.string = getTimeDiffString(diff);
    }
    
    /* 设置需要耗费的钻石
     */
    private setCostDiamond(){
        let cnt = tab.Data.GetKeyValue_ConfigTable().UpLvRainbowTaskCostDiamond;
        this.lbl_cost_diamond.string = `${cnt}`;
    }

    /* 
     */
    private onClickBuy(){
        if(Role.Instance.RoleData.diamond < tab.Data.GetKeyValue_ConfigTable().ImmFinishRainbowTaskCostDiamond){
            ShowTips("DiamondNotEnough");
            return;
        }
        let param = new proto.Msg_UpLvRainbowReq();
        Net.Send(proto.Ptl.UpLvRainbowReq, param);
    }
}
