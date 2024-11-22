
import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { popRewardLayer_Ex, ShowTipsOfCustomString } from "../Utils/GameUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HeroLoadManager {

    private static instance:HeroLoadManager = null;
    private constructor(){}
    public static getInstance( ){
        if(this.instance == null){
            this.instance = new HeroLoadManager();
            this.instance.listenProtocolEvent()
        }
        return this.instance;
    }

    private _data:proto.Msg_HeroLoadTaskListRsp = null

    set data(info:proto.Msg_HeroLoadTaskListRsp){
        this._data = info
    }

    get data():proto.Msg_HeroLoadTaskListRsp{
        return this._data
    }

    private listenProtocolEvent(){  
        //"领取英雄之路任务奖励"
        Net.listenProtocol(proto.Ptl.ReceiveHeroLoadTaskRewardRsp, (buffer:Uint8Array, ptl:number)=>{
            let msg = proto.Msg_ReceiveHeroLoadTaskRewardRsp.decode(buffer)
            cc.log("ReceiveHeroLoadTaskRewardRsp (领取英雄之路任务奖励) msg: " + JSON.stringify(msg));
            if(msg != null){
                if(msg.result == proto.Msg_ReceiveHeroLoadTaskRewardRsp.ErrorCode.Succeed){
                    this._data.endUTC = msg.endUTC
                    this._data.score  = msg.HLScore
                    
                    let cfg = tab.Data.HeroLoadTaskTableByID.getValue(msg.taskCells.taskID)
                    if(cfg){
                        let list = this._data.tasks
                        if(list){
                            for(let i=0; i < list.length; i++){
                                if(list[i].taskID == msg.taskCells.taskID){
                                    list[i] = msg.taskCells
                                    break
                                }
                            }
                        }
                    }
                    Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyHeroLoadReddot)
                    Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_HeroLoadGetAward, msg)
                } else if(msg.result == proto.Msg_ReceiveHeroLoadTaskRewardRsp.ErrorCode.TaskInExistence) {
                    ShowTipsOfCustomString("任务不存在")
                } else if(msg.result == proto.Msg_ReceiveHeroLoadTaskRewardRsp.ErrorCode.TaskUnOpen) {
                    ShowTipsOfCustomString("任务未开启")
                } else if(msg.result == proto.Msg_ReceiveHeroLoadTaskRewardRsp.ErrorCode.AlreadyReceived) {
                    ShowTipsOfCustomString("奖励已领取")
                } else {
                    ShowTipsOfCustomString("错误码" + msg.result)
                }
            }
        }, this)

        /* 领取英雄之路任务阶段总奖励 */
        Net.listenProtocol(proto.Ptl.ReceiveHeroLoadTaskStepRewardRsp, (buffer:Uint8Array, ptl:number)=>{
            let msg = proto.Msg_ReceiveHeroLoadTaskStepRewardRsp.decode(buffer)
            cc.log("ReceiveHeroLoadTaskStepRewardRsp (领取英雄之路任务阶段总奖励) msg: " + JSON.stringify(msg));
            if(msg != null) {
                if(msg.result == proto.Msg_ReceiveHeroLoadTaskStepRewardRsp.ErrorCode.Succeed) {
                    popRewardLayer_Ex(msg.reward)
                    this._data.alreadyGetIDList.push(msg.scoreID)
                    this._data.endUTC = msg.endUTC

                    Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyHeroLoadReddot)
                    Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_HeroLoadGetScoreAward, msg)
                } else if(msg.result == proto.Msg_ReceiveHeroLoadTaskStepRewardRsp.ErrorCode.UnFinishTaskStep) {
                    ShowTipsOfCustomString("阶段任务未完成，不能领取")
                } else if(msg.result == proto.Msg_ReceiveHeroLoadTaskStepRewardRsp.ErrorCode.AlreadyReceived) {
                    ShowTipsOfCustomString("奖励已领取")
                } else {
                    ShowTipsOfCustomString("错误码" + msg.result)
                }
            }
        }, this)

        //任务推送
        Net.listenProtocol(proto.Ptl.PushHeroLoadTaskUpate, (buffer:Uint8Array, ptl:number)=>{
            let msg = proto.Msg_PushHeroLoadTaskUpate.decode(buffer)
            cc.log("HeroLoadManager.ts : PushHeroLoadTaskUpate(任务推送) msg: " + JSON.stringify(msg))
            if(msg != null) {
                for(let task of msg.tasks) {
                    let cfg = tab.Data.HeroLoadTaskTableByID.getValue(task.taskID)
                    if(cfg && cfg.BelongToDay <= HeroLoadManager.getInstance()._data.tasks.length){
                        let list = HeroLoadManager.getInstance()._data.tasks
                        if(list){
                            for(let i=0; i < list.length; i++){
                                if(list[i].taskID == task.taskID){
                                    list[i] = task
                                    break
                                }
                            }
                        }                        
                    }
                }
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyHeroLoadReddot)
            }
        }, this)

        //跨天
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NewDay, (param)=>{
            let param8 = new proto.Msg_HeroLoadTaskListReq()
            Net.Send(proto.Ptl.HeroLoadTaskListReq, param8)
        }, this);
    }

    //小红点的数量
    getBRedOrNot():boolean{
        let bred:boolean = false
        for(let task of this._data.tasks){
            if(task.state == proto.HLTaskType.Award){
                bred = true
                break
            }
        }

        if(bred === false){
            let cfgs = tab.Data.HeroLoadTaskScoreTable
            for(let i = 0; cfgs && i < cfgs.length; i++){
                let ele = cfgs[i]
                if(this._data.score >= cfgs[i].ScoreID && this._data.alreadyGetIDList.includes(cfgs[i].ScoreID)== false){
                    bred = true
                    break
                }
            }
        }
        return bred
    }

    /*  */
    getDayRed():number[]{
        let vecred:number[] = []
        let index = 0
        for(let task of this._data.tasks){
            if(task.state == proto.HLTaskType.Award){
                let cfg = tab.Data.HeroLoadTaskTableByID.getValue(task.taskID)
                vecred.push(cfg.BelongToDay)  
            }
        }
        return vecred
    }
}
