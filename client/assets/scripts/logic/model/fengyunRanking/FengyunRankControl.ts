import { _decorator, Component, log, Node } from 'cc';
import { AbsControl } from '../../../framework/base/IAbs';
import { EventMgr } from '../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { Net } from '../../net/Net';
import { FengyunRankData } from './FengyunRankData';
import { RedMgr } from '../../mgr/RedMgr';
import { RedDotType } from '../../red/RedDotType';
const { ccclass, property } = _decorator;

/**
 * 
 * FengyunRankControl
 * zhudingchao
 * Wed Jul 17 2024 19:58:00 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/fengyunRanking/FengyunRankControl.ts
 *
 */

@ccclass('FengyunRankControl')
export class FengyunRankControl extends AbsControl {
    private static _instance: FengyunRankControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new FengyunRankControl();
        }
        return this._instance;
    }
    purge(): void {
    }

    register(): void {
        EventMgr.onMsg(proto.Ptl.GetHonorRollMapRsp, this.on_s2c_GetHonorRollMapRsp, this)
        EventMgr.onMsg(proto.Ptl.ReceiveHonorRollTasksRewardsRsp, this.on_s2c_ReceiveHonorRollTasksRewardsRsp, this)



    }
    request() {

    }
    reqGetHonorRollMap(){
        let msg = new proto.Msg_GetHonorRollMapReq();
        Net.Send(proto.Ptl.GetHonorRollMapReq, msg)
    }
    reqReceiveHonorRollTasksRewards(activityId:number,taskIds:number[]){
        let msg = new proto.Msg_ReceiveHonorRollTasksRewardsReq();
        msg.activityId=activityId;
        msg.taskIds=taskIds;
        Net.Send(proto.Ptl.ReceiveHonorRollTasksRewardsReq, msg)
    }
    on_s2c_GetHonorRollMapRsp(msg: proto.Msg_GetHonorRollMapRsp) {
        FengyunRankData.ins.initMapData(msg);
        RedMgr.refreshEvent(RedDotType.Feng_Yun_Rank);
        log("收到荣耀消息==",msg);
    }

    on_s2c_ReceiveHonorRollTasksRewardsRsp(msg: proto.Msg_ReceiveHonorRollTasksRewardsRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            // ActivityData.ins.vipMsg.boughtVipGifts.push(msg.vipLevel);
            let info=FengyunRankData.ins.getHonorRollInfoByActId(msg.activityId);
            for(let key in msg.taskIds){
                let task=info.tasks.find(a=>a.id==msg.taskIds[key]);
                if(task){
                    task.isReceived=true;
                }
            }
            
            RedMgr.refreshEvent(RedDotType.Feng_Yun_Rank);
        }
    }
}