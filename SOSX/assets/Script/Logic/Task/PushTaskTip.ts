/*
 *  
 */

import { proto } from "../../Protocol/client_protocol";
import { CaiHongData, RATaskState } from "../../sdk/rainbow/CaiHongData";
import { tab } from "../../Table/table_gen";
import { isValidObj } from "../Common/CommonInterface";

const {ccclass, property} = cc._decorator;

export enum TaskType{
    NORMAL_TASK_TYPE  = 0,
    GROUT_TASK_TYPE   = 1,
    RAINBOW_TASK_TYPE = 2,
};

@ccclass
export default class PushTaskTip extends cc.Component {
 
    @property(cc.Node)
    aninode: cc.Node = null

    @property(cc.Label)
    taskname: cc.Label = null;

    @property(cc.Label)
    taskdes: cc.Label = null;

    @property(cc.ProgressBar)
    taskprogress: cc.ProgressBar = null

    @property(cc.Label)
    progresstxt: cc.Label = null

    @property(cc.Button)
    closebtn: cc.Button = null

    @property(cc.Sprite)
    spr_task_icon: cc.Sprite = null;

    @property(cc.Sprite)
    spr_rainbow_flag: cc.Sprite = null;

    @property(cc.Sprite)
    spr_grout_task_icon: cc.Sprite = null;

    callback:Function = null

    setView(info:proto.ITaskData, taskType: TaskType = TaskType.NORMAL_TASK_TYPE) {
        this.spr_task_icon.node.active       = taskType === TaskType.NORMAL_TASK_TYPE;
        this.spr_rainbow_flag.node.active    = taskType === TaskType.RAINBOW_TASK_TYPE;
        this.spr_grout_task_icon.node.active = taskType === TaskType.GROUT_TASK_TYPE;

        switch(taskType){
            case TaskType.NORMAL_TASK_TYPE: /*  */
                this.setNormalTaskData(info);
                break;

            case TaskType.RAINBOW_TASK_TYPE: /*  */
                this.setRainbowTaskData(info);
                break;

            case TaskType.GROUT_TASK_TYPE: /*  */
                this.setGroutTaskData(info);
                break;
        }

        this.playdown();
    }

    /* 设置普通任务数据 */
    private setNormalTaskData(taskData : proto.ITaskData){
        let taskCfg:tab.TaskTable = tab.Data.TaskTableByTaskId.getValue(taskData.taskId)
        if(isValidObj(taskCfg)){
            //彩虹-完成任务
            if (Math.min(taskData.score, taskCfg.Param) >= taskCfg.Param){
                let taskConf: tab.TaskTable = tab.Data.TaskTableByTaskId.getValue(taskData.taskId)
                CaiHongData.task_flow(taskData.taskId.toString(), taskConf.Describe,RATaskState.complete.toString())
            }

            this.setDetailTaskInfo(taskCfg.Title, 
                                    taskCfg.Describe, 
                                    Math.min(taskData.score, taskCfg.Param), 
                                    taskCfg.Param);
            this.setTaskRewardIcon(taskCfg, this.spr_task_icon); //zhibo+@20230424 <TODO: 这里应该有一个显示ICON的图标>
        }
    }

    private setTaskRewardIcon(taskcfg:tab.TaskTable, spr : cc.Sprite){
        let itemid      = 0
        let itemcnt     = 0
        let boxId       = 0
        let boxGroupId  = 0
        //let taskcfg : tab.TaskTable = tab.Data.TaskTableByTaskId .getValue(taskId)
        if(taskcfg){
            itemid      = taskcfg.TaskRewardType == tab.RewardType.RewardType_ItemType     ? taskcfg.TaskRewardId : 0 /* 道具 */
            boxGroupId  = taskcfg.TaskRewardType == tab.RewardType.RewardType_BoxGroupType ? taskcfg.TaskRewardId : 0 /* 宝箱组 */
            boxId       = taskcfg.TaskRewardType == tab.RewardType.RewardType_BoxType      ? taskcfg.TaskRewardId : 0 /* 宝箱 */
            itemcnt     = taskcfg.TaskRewardCount
            //this.addnumber.string ="+" +  taskcfg.Score
        } else {
            return;
        }

        if(itemid > 0){ /* 道具 */
            let itemcfg : tab.ItemTable = tab.Data.ItemTableByID.getValue(itemid)
            if(itemcfg){
                //this.awardItemId = itemid
                spr.setTexture(itemcfg.Icon)
                //spr.node.setPosition(new cc.Vec2(0,0))
                spr.node.scale = 1
            }
        } else if(boxGroupId > 0) { /* 宝箱组 */
            // this.boxgroundId = boxGroupId
            let boxinfo = getBoxIDAndCfg(boxGroupId)
            if(boxinfo.boxCfg){
                spr.setTexture(boxinfo.boxCfg.ItemIcon)
                //spr.node.setPosition(new cc.Vec2(3,0))
                spr.node.scale = 0.3
            }
        } else if(boxId >0) { /* 宝箱 */
            // this.boxId = boxId;
            let boxinfo = tab.Data.BoxTableByBoxID.getValue(boxId)//getBoxIDAndCfg(boxId)
            if(boxinfo){
                spr.setTexture(boxinfo.ItemIcon)
                //spr.node.setPosition(new cc.Vec2(0,0))
                spr.node.scale = 1
            }
        } else { /* 其它 */
            cc.error("TODO: 道具还没有处理")
        }
    }

    private setRainbowTaskData(taskData:proto.ITaskData){
        let taskDataTab = tab.Data.RainbowTaskTableByID.getValue(taskData.taskId);
        if(isValidObj(taskDataTab)){
            this.setDetailTaskInfo(taskDataTab.Title, 
                                    taskDataTab.Desc, 
                                    Math.min(taskData.score, taskDataTab.FinishCondition), 
                                    taskDataTab.FinishCondition);
        }
    }

    private setGroutTaskData(taskData: proto.ITaskData){
        let taskDataTab = tab.Data.GroutTaskTableByID.getValue(taskData.taskId);
        if(isValidObj(taskDataTab)){
            this.setDetailTaskInfo(taskDataTab.Title, 
                                    taskDataTab.Desc, 
                                    Math.min(taskData.score, taskDataTab.FinishCondition), 
                                    taskDataTab.FinishCondition);
        }
    }

    /* 设置具体的任务信息
     * @param name             任务名称
     * @param desc             任务描述
     * @param progressVal      当前任务进度
     * @param finishCondition  任务完成所需进度
     */
    private setDetailTaskInfo(name: string, desc: string, progressVal: number, finishCondition: number){
        this.taskdes.string        = desc;
        this.taskname.string       = name;
        this.taskprogress.progress = progressVal / finishCondition;
        this.progresstxt.string    = `${progressVal}/${finishCondition}`;
    }
    
    playdown(){
        let ani = this.aninode.getComponent(cc.Animation)
        if(ani){
            ani.play()
            ani.on("finished", this.onPlayend, this)
        }
    }

    setCallback(callback) {
        this.callback = callback
    }

    onPlayend(){
        if(this.callback){
            this.callback()
        }
    }

    onLoad () {
        this.closebtn.node.on("click", this.onclose, this)
    }

    onclose(){
        let ani = this.aninode.getComponent(cc.Animation)
        if(ani){
            let curstate = ani.getAnimationState("pushtasktips")
            if(curstate.time < 4){
                ani.setCurrentTime(4)
            }
        }
    }
}
