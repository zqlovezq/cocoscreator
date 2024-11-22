/*
 * @Descripttion: 格鲁特任务信息条
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { isValidObj, k255, kNoneString, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import { flyResources, popRewardLayer_Ex } from "../Utils/GameUtils";
import GroutTaskRewardNode from "./GroutTaskRewardNode";
import ManagerGroutTaskInfo from "./ManagerGroutTaskInfo";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GroutTaskInfo extends InfiniteCell {

    @property(cc.Sprite)
    spr_lock_flag: cc.Sprite = null;

    @property(cc.Sprite)
    spr_arrow_flag: cc.Sprite = null;

    @property(cc.ProgressBar)
    progress_bar: cc.ProgressBar = null;

    @property(cc.Label)
    lbl_lock_tip: cc.Label = null;

    @property(cc.Label)
    lbl_task_desc: cc.Label = null;

    @property(cc.Label)
    lbl_task_title: cc.Label = null;

    @property(cc.Label)
    lbl_progress: cc.Label = null;

    @property(GroutTaskRewardNode)
    node_task_reward: GroutTaskRewardNode = null;

    private _task_uuid: string = kNoneString;
    private _task_static_id: number;
    private _task_state: proto.TaskState;
    private _task_progress: number;
    private _task_reward_info: proto.IRewardSimpleInfo;

    onLoad () {
        //监听"领取格古特任务奖励"消息
        Net.listenProtocol(proto.Ptl.ReceiveGroutTaskRewardRsp, buffer=>{
            let msg = proto.Msg_ReceiveGroutTaskRewardRsp.decode(buffer);
            cc.log("ReceiveGroutTaskRewardRsp (领取格古特任务奖励) msg: " + JSON.stringify(msg));
            if(msg && proto.Msg_ReceiveGroutTaskRewardRsp.ErrorCode.Succeed === msg.result && msg.taskUUID === this._task_uuid) {
                let self = this;
                popRewardLayer_Ex(msg.reward, ()=>{
                    //是道具类型，并且是金币或者钻石，需要播放资源飞翔动画
                    if(tab.RewardType.RewardType_ItemType === msg.reward[kZeroNumber].rewardType){
                        flyResources(self.node, msg.reward[kZeroNumber].rewardId);
                    }
                    Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyOpenNextGroutTask, this.dataIndex + kOneNumber);
                });

                this._task_state = proto.TaskState.HaveReward;
                this.node_task_reward.changeRewardState(proto.TaskState.HaveReward);
                return;
            }
        },this);

        //监听通知开启下一个格古特任务消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyOpenNextGroutTask, (param: any)=>{
            let idx = (param as number);
            if(idx == this.dataIndex){
                this._task_state = proto.TaskState.Open;
                this.setTaskState();
            }
        }, this);
    }

    start () {}

    UpdateContent(data: proto.GroutTaskData){
        this.setArrowVisible();
        this.initData(data);
    }

    private initData(data: proto.GroutTaskData){
        this._task_uuid        = data.taskData.UUId;
        this._task_static_id   = data.taskData.taskId;
        this._task_state       = data.taskData.state;
        this._task_progress    = data.taskData.score;
        this._task_reward_info = data.rewardInfo;
        this.refreshPage();
    }

    /* 刷新界面
     */
    private refreshPage(){
        let taskDataTab = tab.Data.GroutTaskTableByID.getValue(this._task_static_id);
        if(isValidObj(taskDataTab)){
            this.setTaskDesc(taskDataTab.Desc);
            this.setTaskTitle(taskDataTab.Title);
            this.setTaskProgress(taskDataTab.FinishCondition);
        }

        this.setTaskState();
        this.setRewardInfo();
    }

    /* 设置任务描述
     */
    private setTaskDesc(desc: string){
        this.lbl_task_desc.string = desc;
    }

    /* 设置任务标题
     */
    private setTaskTitle(title: string){
        this.lbl_task_title.string = title;
    }

    /* 设置任务进度
     */
    private setTaskProgress(totalProg: number){
        let divVal = this._task_progress / totalProg;
        divVal = divVal > kOneNumber ? kOneNumber : divVal;
        this.progress_bar.progress = divVal;
        this.lbl_progress.string = `${this._task_progress}/${totalProg}`;
    }

    /* 设置任务状态
     */
    private setTaskState(){
        this.spr_lock_flag.node.opacity = (proto.TaskState.UnOpen === this._task_state) ? k255 : kZeroNumber;
        this.lbl_lock_tip.node.opacity  = this.spr_lock_flag.node.opacity;
        this.lbl_task_desc.node.opacity = Math.abs(this.spr_lock_flag.node.opacity - k255);
    }
    
    /* 设置指示箭头的可见性
     */
    private setArrowVisible(){
        let bVisible = this.dataIndex < ManagerGroutTaskInfo.getInstance().getTotalTaskCount() - kOneNumber
        this.spr_arrow_flag.node.opacity = bVisible ? k255 : kZeroNumber;
    }

    /* 设置奖励信息
     */
    private setRewardInfo(){
        this.node_task_reward.initData( this._task_uuid, 
                                        this._task_reward_info, 
                                        this._task_state, 
                                        ManagerGroutTaskInfo.getInstance().getTaskStep(), false);
    }
}
