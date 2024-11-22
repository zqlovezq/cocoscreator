/*
 * @Descripttion: 刷新任务弹框
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { kOneNumber, kZeroNumber, sendAdvertPos, WatchAdvert } from "../Common/CommonInterface";
import PopLayer from "../Utils/PopLayer";
import ManagerRainbowTask from "./ManagerRainbowTask";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RainbowTaskRefreshTask extends PopLayer {

    @property(cc.Label)
    lbl_free_tip: cc.Label = null;

    @property(cc.Node)
    node_ad: cc.Node = null;

    @property(cc.Label)
    lbl_left_ad_cnt: cc.Label = null;

    @property(cc.Button)
    btn_closed: cc.Button = null;

    @property(cc.Button)
    btn_cancel: cc.Button = null;

    @property(cc.Button)
    btn_free: cc.Button = null;

    @property(cc.Button)
    btn_ad: cc.Button = null;

    private _bFree: boolean = true;
    private _task_uuid: string;
    private _task_star_lv: number;

    onLoad () {
        this.btn_closed.node.on("click", ()=>{this.setVisible(false);}, this);
        this.btn_cancel.node.on("click", ()=>{this.setVisible(false);}, this);

        this.btn_free.node.on("click", this.onRefreshTask, this);
        this.btn_ad.node.on("click", this.onClickAd,       this);

        //监听"刷新指定彩虹任务"消息
        Net.listenProtocol(proto.Ptl.RefreshRainbowTaskRsp, (buffer, ptl)=>{
            let msg = proto.Msg_RefreshRainbowTaskRsp.decode(buffer);
            cc.log("RefreshRainbowTaskRsp (刷新指定彩虹任务) msg: " + JSON.stringify(msg))
            if (msg && proto.Msg_RefreshRainbowTaskRsp.ErrorCode.Succeed == msg.result){ 
                this.btn_free.node.active && ManagerRainbowTask.getInstance().saveCanFreeRefreshTask(false);
                this.btn_ad.node.active   && ManagerRainbowTask.getInstance().decreaseLeftWatchAdCount();
                return;
            }
        }, this);
    }

    public initData(taskUUID: string, taskStarLv: number){
        this._task_uuid    = taskUUID;
        this._task_star_lv = taskStarLv;
        this._bFree        = ManagerRainbowTask.getInstance().getCanFreeRefreshTask();
        this.setAdLeftCount();
        this.setFreeBtnVisible();
    }
    
    /* 设置剩余看广告次数
     */
    private setAdLeftCount(){
        let leftAdCnt  = ManagerRainbowTask.getInstance().getLeftWatchAdCount();
        let totalAdCnt = tab.Data.GetKeyValue_ConfigTable().UpdateRainbowTaskAdCount;
        this.lbl_left_ad_cnt.string = `${leftAdCnt}/${totalAdCnt}`;
    }

    /* 设置免费按钮的可见性
     */
    private setFreeBtnVisible(){
        this.btn_free.node.active     = this._bFree;
        this.btn_ad.node.active       = !this._bFree;
        this.lbl_free_tip.node.active = this._bFree;
        this.node_ad.active           = !this._bFree;
    }

    /* 点击刷新任务事件
     */
    private onRefreshTask(){
        let param        = new proto.Msg_RefreshRainbowTaskReq();
        param.taskUUID   = this._task_uuid;
        param.taskStarLv = this._task_star_lv;
        Net.Send(proto.Ptl.RefreshRainbowTaskReq, param);
        this.setVisible(false);
    }

    /* 点击看广告事件
     */
    private onClickAd(){
        WatchAdvert((error: Error)=>{
            if(error === undefined){
                sendAdvertPos(tab.AdvertPosType.AdvertPosType_RefreshRainbowTask, kZeroNumber);
            }
        }, 
        (bFinish: boolean)=>{
            if(bFinish){
                this.onRefreshTask();
                sendAdvertPos(tab.AdvertPosType.AdvertPosType_RefreshRainbowTask, kOneNumber);
            }
        },tab.AdvertPosType.AdvertPosType_RefreshRainbowTask);
    }
}
