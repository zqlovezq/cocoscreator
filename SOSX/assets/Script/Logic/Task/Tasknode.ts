/**
 *  任务cell
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { kOneNumber, kZeroNumber, sendAdvertPos, WatchAdvert } from "../Common/CommonInterface";
import Role from "../Common/Role";
import { showPopLayer, showPopLayerV2, ShowTips } from "../Utils/GameUtils";
import BuychangeTasklayer from "./BuychangeTasklayer";
import changeTasklayer from "./changeTasklayer";
import Taskitemshow from "./Taskitemshow";
import UIGameModelFightOther from "../match/UIGameModelFightOther";
import MainScene from "../Main/MainScene";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Tasknode extends cc.Component {

    @property(cc.Node)
    taskitemshow: cc.Node = null

    @property(cc.ProgressBar)
    progress: cc.ProgressBar = null

    @property(cc.Label)
    progresstxt: cc.Label = null

    @property(cc.Label)
    taskname: cc.Label = null

    @property(cc.Label)
    destxt: cc.Label = null

    @property(cc.Button)
    refreshBtn: cc.Button = null

    @property(cc.Button)
    getBtn: cc.Button = null; /* 领取按钮 */

    @property(cc.Button)
    gotoBtn: cc.Button = null; /* 前往按钮 */

    taskInfo:proto.ITaskData = null; //infoTask:proto.ITaskData = null /* 任务信息 */
    
    //刷新任务1
    task_freshbtnclick(){
        let thistemp = this
        if(Role.Instance.taskData && Role.Instance.taskData.taskFreeRefreshTimes > 0){
            showPopLayerV2("prefab/changeTasklayer", changeTasklayer).then((value:changeTasklayer)=>{
                if(value){
                    value.setOkClickCallback(()=>{
                        let param = new proto.Msg_TaskRefreshReq()
                        param.refreshType = proto.TaskRefreshType.TRT_Replace_Diamond
                        param.taskUUId = thistemp.taskInfo.UUId
                        Net.Send(proto.Ptl.TaskRefreshReq, param)
                    })
                }
            })
            return
        }

        showPopLayerV2("prefab/BuychangeTasklayer", BuychangeTasklayer).then((value:BuychangeTasklayer)=>{
            if(value){
                value.setCostClickCallback(()=>{
                    if(Role.Instance.RoleData.diamond < tab.Data.GetKeyValue_ConfigTable().TaskUpdateCostDiamond){
                        showPopLayer("prefab/gotoshoplayer")
                        return
                    }

                    let param = new proto.Msg_TaskRefreshReq()
                    param.refreshType = proto.TaskRefreshType.TRT_Replace_Diamond
                    param.taskUUId = thistemp.taskInfo.UUId
                    Net.Send(proto.Ptl.TaskRefreshReq, param)
                })

                value.setVideoClickCallback(()=>{
                    //sendAdvertPos(tab.AdvertPosType.AdvertPosType_ChangeEveryDayTask)
                    WatchAdvert((error: Error)=>{
                        if(error === undefined){
                            sendAdvertPos(tab.AdvertPosType.AdvertPosType_ChangeEveryDayTask, kZeroNumber);
                        }
                    }, 
                    (bFinish: boolean)=>{
                        if(bFinish){
                            sendAdvertPos(tab.AdvertPosType.AdvertPosType_ChangeEveryDayTask, kOneNumber);
                            let param = new proto.Msg_TaskRefreshReq();
                            param.refreshType = proto.TaskRefreshType.TRT_Replace_AD;
                            param.taskUUId = thistemp.taskInfo.UUId;
                            Net.Send(proto.Ptl.TaskRefreshReq, param);
                        }
                    },tab.AdvertPosType.AdvertPosType_ChangeEveryDayTask);
                })
            }
        })
    }

    /*  */
    setView(info:proto.ITaskData, index:number){
        if(info == null || info == undefined){
            return
        }

        this.taskInfo = info

        let taskcfg:tab.TaskTable = tab.Data.TaskTableByTaskId.getValue(info.taskId)
        if(taskcfg){
            this.taskname.string = taskcfg.Title
            this.destxt.string = taskcfg.Describe
            this.progress.progress = info.score / taskcfg.Param
            this.refreshBtn.node.active = info.score < taskcfg.Param

            let curscore = Math.min(info.score, taskcfg.Param)
            this.progresstxt.string = `${curscore}/${taskcfg.Param}`
        }

        let item:Taskitemshow = this.taskitemshow.getComponent(Taskitemshow)
        if(item){
            item.setTaskView(this.taskInfo)
        }
        
        if(0==this.taskInfo.state){ /* 未完成 */
            this.getBtn.node.active  = false;
            this.gotoBtn.node.active = true; /* 亮出"前往"按键 */
        } else {
            this.getBtn.node.active  = true; /* 亮出"领取"按键 */
            this.gotoBtn.node.active = false;
        }
    }

    /*  */
    onLoad () {
        //每日任务
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_TaskNodeToHide, (param)=>{
            if(this.taskInfo.taskId == param){
                this.node.active = false
            }
        }, this);
    }

    /* 前往 */
    onGoBtnClicked(){
        cc.log("TaskNode.ts : onGoBtnClicked()")
        /* TODO: 任务系统完成后才可能搞这里 */
        let taskcfg : tab.TaskTable = tab.Data.TaskTableByTaskId.getValue(this.taskInfo.taskId) // 根据taskId获取taskCfg 
        if(tab.TaskFinishType.TaskFinishType_ChessKillCount === taskcfg.TaskType){ /* 击杀X个棋子 */
            // showPopLayerV2("prefab/UIGameModelFightOther", UIGameModelFightOther, false).then(nodeFightOther => {
            //     // nodeDetail.setCardData(item.rewardId, CardNodeState.CARD_NODE_STATE_UNOWN, 1);
            // });
            this.jumpToUI("prefab/UIGameModelFightOther", UIGameModelFightOther);
        } else if(tab.TaskFinishType.TaskFinishType_ShopBuyCount === taskcfg.TaskType){ /* 商店购买X次 */
            MainScene.Instance.showShopLayer(); /* 跳到商店去 */
            //Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_AutoScrollDailyGiftNode,null)
            //this.scheduleOnce(()=>{
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_AutoScrollDailyGiftNode,null)
            //}, 0.3)
        } else if(tab.TaskFinishType.TaskFinishType_AddCardCount === taskcfg.TaskType){ /* 获得卡牌数量 */
            MainScene.Instance.showShopLayer(); /* 跳到商店去 */
            //this.scheduleOnce(()=>{
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_AutoScrollDailyGiftNode,null)
            //}, 0.3)
        } else if(tab.TaskFinishType.TaskFinishType_FightCount === taskcfg.TaskType){ /* 进行对战XX次 */
            this.jumpToUI("prefab/UIGameModelFightOther", UIGameModelFightOther);
        } else if(tab.TaskFinishType.TaskFinishType_FightWinCount === taskcfg.TaskType){ /* 击杀X个棋子 */
            this.jumpToUI("prefab/UIGameModelFightOther", UIGameModelFightOther);
        }
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosePopupLayer) /* 关闭Popup */
    }

    /* 跳转到某个页面去 */
    private jumpToUI<T extends cc.Component>(filename: string | cc.Prefab, type: {prototype: T}){
        showPopLayerV2(filename, type, false).then(nodeFightOther => {
            // nodeDetail.setCardData(item.rewardId, CardNodeState.CARD_NODE_STATE_UNOWN, 1);
        });
    }

    /* 领取 */
    onGetBtnClicked(){
        cc.log("TaskNode.ts : onGetBtnClicked()")
        /* zhibo+S@ 20230411 for <> TODO: 这个地方是抄 TaskItemShow.ts 中的 onClick() 里面的东西没有看的太明白，暂时先这么写 */
        if(this.taskInfo &&  this.taskInfo.state == 1){
            let boxGroupID = Role.Instance.taskData.boxGroupId || 0
            let taskboxgroupcfg:tab.TaskBoxGroupTable = tab.Data.TaskBoxGroupTableByBoxGroupId.getValue(boxGroupID)
            if(taskboxgroupcfg &&  Role.Instance.taskData.goalBoxScore >=  taskboxgroupcfg.Score){
                ShowTips("PleaseGetTopBoxes")
                return
            }

            if(this.taskInfo && this.taskInfo.state == 1){
                let param = new proto.Msg_TaskGetRewardReq()
                param.taskUUId = this.taskInfo.UUId
                Net.Send(proto.Ptl.TaskGetRewardReq, param)
            } else if(this.taskInfo && this.taskInfo.state == 1) { /* zhibo+@20230413 for<TODO: 感觉这段有点问题> */
                let param = new proto.Msg_TaskGetRewardReq()
                param.taskUUId = this.taskInfo.UUId
                Net.Send(proto.Ptl.TaskGetRewardReq, param)
            }
        } else {
            ShowTips("NotFinishGroutStepTask");
        }
        /* zhibo+E@ 20230411 for <> TODO: 这个地方是抄TaskItemShow.ts中的onClick() 里面的东西没有看的太明白，暂时先这么写 */
    }
}
