import { _decorator, Label } from 'cc';
import { ViewScreen } from '../../../framework/base/ViewScreen';
import { FengyunBtnItem } from './FengyunBtnItem';
import { tab } from '../../../Table/table_gen';
import { FengyunRankControl } from './FengyunRankControl';
import { proto } from 'client_protocol';
import { EventMgr } from '../../mgr/EventMgr';
import { FengyunRankData } from './FengyunRankData';
import { RoleData } from '../role/RoleData';
import {  setTextTime } from '../../utils/GameUtil';
const { ccclass, property } = _decorator;

/**
 * 
 * FengyunRankingMainView
 * zhudingchao
 * Wed Jul 17 2024 14:40:44 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/fengyunRanking/FengyunRankingMainView.ts
 *
 */

@ccclass('FengyunRankingMainView')
export class FengyunRankingMainView extends ViewScreen {
    @property(Label)
    timerLab:Label=null;
    @property([FengyunBtnItem])
    btnItems:FengyunBtnItem[]=[];
    private lastTimer:number=0;
    register(): void {
        FengyunRankControl.ins.reqGetHonorRollMap();
        EventMgr.onMsg(proto.Ptl.GetHonorRollMapRsp, this.on_s2c_GetHonorRollMapRsp, this)

        EventMgr.onMsg(proto.Ptl.ReceiveHonorRollTasksRewardsRsp, this.on_s2c_ReceiveHonorRollTasksRewardsRsp, this)

    }
    onShow(): void {
        
    }
    initView(){
        let tables=tab.getData().ActivityRankTable;
        let i:number=0;
        for(let key in tables){
            if(tables[key].ActivityId==101){
                this.btnItems[i].initView(tables[key]);
                i++;
            }
        }
        let msg=FengyunRankData.ins.getHonorRollInfoByActId(101);
        this.lastTimer=Number(msg.activityEndTime)-RoleData.ins.getServerUtcTime()
        if(this.lastTimer>0){
            this.schedule(this.lastTimerCallBack,1);
            this.timerLab.string=  setTextTime(this.lastTimer);
        }else{
             this.timerLab.string="0"
        }
        
    }
    lastTimerCallBack=()=>{
        this.lastTimer--;
        if(this.lastTimer>0){
           this.timerLab.string= setTextTime(this.lastTimer);
        }else{
            this.timerLab.string="0"
            this.unschedule(this.lastTimerCallBack);
        }
    }

    on_s2c_GetHonorRollMapRsp(){
        this.initView();
    }
    on_s2c_ReceiveHonorRollTasksRewardsRsp(msg: proto.Msg_ReceiveHonorRollTasksRewardsRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            this.scheduleOnce(()=>{
                for(let i=0;i<this.btnItems.length;i++){
                    const btnItem = this.btnItems[i];
                    btnItem.refreshRed();
                }
            },0.1)
        }
    }
}