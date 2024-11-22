/*
 * @Descripttion: 彩虹任务信息条
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import boxtips from "../Common/boxtips";
import { isValidObj, kNoneString, kOneNumber, kZeroNumber} from "../Common/CommonInterface";
import CommonItem from "../Common/CommonItem";
import { ItemState } from "../Common/SeasonRankCommonFunc";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import { setGray, showPopLayerV2, ShowTips } from "../Utils/GameUtils";
import ManagerRainbowTask, { getRewardItemState, RainbowTaskState } from "./ManagerRainbowTask";
import RainbowTaskImmFinishPop from "./RainbowTaskImmFinishPop";
import RainbowTaskRefreshTask from "./RainbowTaskRefreshTask";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RainbowTaskInfoCell extends InfiniteCell {
    
    @property(cc.Sprite)
    spr_bg: cc.Sprite = null;

    @property(cc.Sprite)
    spr_un_open_bg: cc.Sprite = null;
    
    @property(cc.Sprite)
    spr_star: cc.Sprite = null;

    @property(CommonItem)
    node_left_reward: CommonItem = null;

    @property(CommonItem)
    node_right_reward: CommonItem = null;
    
    @property(cc.Label)
    lbl_level: cc.Label = null;

    @property(cc.Sprite)
    spr_lock_star: cc.Sprite = null;

    @property(cc.RichText)
    rich_txt_description: cc.RichText = null;

    @property(cc.Label)
    lbl_unopen_tip: cc.Label = null;
    
    @property(cc.ProgressBar)
    prog_task: cc.ProgressBar = null;

    @property(cc.Sprite)
    spr_prog_full: cc.Sprite = null;

    @property(cc.Label)
    lbl_prog_value: cc.Label = null;

    @property(cc.Button)
    btn_imm_finish: cc.Button = null;

    @property(cc.Button)
    btn_refresh: cc.Button = null;

    @property(cc.Node)
    node_open_effect: cc.Node = null;

    private _star_level: number            = kZeroNumber;
    private _progress_val: number          = kZeroNumber;
    private _total_progress_val: number    = kZeroNumber;
    private _task_static_id: number        = kZeroNumber;
    private _task_uuid: string             = kNoneString;
    private _task_state: RainbowTaskState;
    private _left_reward_state: proto.TaskState;
    private _right_reward_state: proto.TaskState;
    private _reward_data_list: proto.IRainbowRewardData[] = [];
    private _current_task_data: proto.IRainbowInfoData;
    private _open_task_effect: sp.Skeleton = null;

    /*  */
    onLoad () {
        this.node_open_effect.active = false;
        this.btn_imm_finish.node.on("click", this.onClickImmFinishTask, this);
        this.btn_refresh.node.on("click",    this.onClickRefreshTask,   this);
        this._open_task_effect = this.node_open_effect.getComponent(sp.Skeleton);

        //监听领取彩虹任务奖励消息
        Net.listenProtocol(proto.Ptl.ReceiveRainbowRewardRsp, (buffer, ptl)=>{
           let msg = proto.Msg_ReceiveRainbowRewardRsp.decode(buffer);
           cc.log("ReceiveRainbowRewardRsp (领取彩虹任务奖励) msg: " + JSON.stringify(msg))
           if ( msg && proto.Msg_ReceiveRainbowRewardRsp.ErrorCode.Succeed == msg.result && msg.taskStarLv === this._star_level){ 
                this.disposeReceiveEvent(msg.bLeftReward);  
                //this.disposeScrollNextTaskIdx(); 
           }
        }, this);

        //监听立即完成任务消息
        Net.listenProtocol(proto.Ptl.ImmFinishRainbowTaskRsp, (buffer, ptl)=>{
            let msg = proto.Msg_ImmFinishRainbowTaskRsp.decode(buffer);
            cc.log("ImmFinishRainbowTaskRsp (立即完成已经开启的指定彩虹任务) msg: " + JSON.stringify(msg))
            if ( msg && 
                 proto.Msg_ImmFinishRainbowTaskRsp.ErrorCode.Succeed == msg.result && 
                 msg.taskUUID == this._task_uuid){ 
                    this._progress_val                 = this._total_progress_val; /* 将当前任务进度设置满 */
                    this._task_state                   = RainbowTaskState.AlreadyFinish; /* 将当前任务设置为已完成状态 */
                    this._current_task_data.data.score = this._progress_val; /* 更新下当前任务进度 */
                    this._current_task_data.data.state = proto.TaskState.Open; /* 更新下当前任务状态 */
                    this.refreshTaskProgress(); /* 刷新任务进度 */
                    this.refreshRewardState(); /* 刷新奖励状态 */
                    
                    //通知更新当前任务奖励状态
                    Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyMaintainRainbowReward, 
                        {   leftState:  this._left_reward_state, 
                            rightState: this._right_reward_state, 
                            taskState:  RainbowTaskState.AlreadyFinish, 
                            progVal:    this._progress_val,
                            idx:        this._star_level});

                    //通知更新主界面任务状态
                    Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyRainbowTaskProgress, 
                            {data: this._current_task_data.data, taskStarLv: this.dataIndex});
            }
        }, this);

        //刷新指定彩虹任务
        Net.listenProtocol(proto.Ptl.RefreshRainbowTaskRsp, (buffer, ptl)=>{
            let msg = proto.Msg_RefreshRainbowTaskRsp.decode(buffer);
            cc.log("RefreshRainbowTaskRsp (刷新指定彩虹任务) msg: " + JSON.stringify(msg))
            if (msg && 
                proto.Msg_RefreshRainbowTaskRsp.ErrorCode.Succeed == msg.result && 
                this._star_level == msg.taskStarLv){ 
                this.initData(msg.newTask);
                return;
            }
        }, this);

        //监听开启任务升级消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyOpenUpLvRainbowTask, (param: any)=>{
            this._left_reward_state = (RainbowTaskState.AlreadyFinish !== this._task_state) ? 
                                      proto.TaskState.UnOpen : 
                                      proto.TaskState.Reward;
            let itemState = getRewardItemState(this._left_reward_state, this._task_state);
            this.node_left_reward.setState(itemState);
        }, this);

        //监听播放开启特效消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyPlayOpenTaskEffect, (param: any)=>{
            let idx = (param as number);
            if(idx == this._star_level){
                this.playOpenEffect();
            }
        }, this);
    }

    onDestroy(){
        this._reward_data_list = [];
    }

    UpdateContent(data: any): void{
        if(!data){return;}
        this.initData(data);
    }

    private initData(data: proto.IRainbowInfoData){
        this._current_task_data  = data;
        this._left_reward_state  = ManagerRainbowTask.getInstance().getUpLvTask() ? proto.TaskState.UnOpen : data.leftReward.rewardState;
        this._right_reward_state = data.rightReward.rewardState;
        this._task_static_id     = data.data.taskId;
        this._task_uuid          = data.data.UUId;
        this._progress_val       = data.data.score;
        this._task_state         = (data.data.state == proto.TaskState.UnOpen) ? RainbowTaskState.UnOpen : RainbowTaskState.AlreadyOpen;
        //记录下该任务的奖励数据
        this._reward_data_list   = [];
        this._reward_data_list.push(data.leftReward);
        this._reward_data_list.push(data.rightReward);
        this.findRainbowTaskTable();
        this.showPage();
    }
    
    /* 查找彩虹任务表，组织相关数据
     */
    private findRainbowTaskTable(){
        let taskTabData = tab.Data.RainbowTaskTableByID.getValue(this._task_static_id);
        if(!isValidObj(taskTabData)){
            if(!cc.sys.isNative){throw new Error("彩虹任务不在任务表中!!!!");}
            return;
        }

        this._star_level         = this.dataIndex;
        this._total_progress_val = taskTabData.FinishCondition;
        this.rich_txt_description.string = taskTabData.Desc;
        this.confirmTaskState();
    }

    /* 最终确认任务的状态
     */
    private confirmTaskState(){
        if(RainbowTaskState.AlreadyOpen == this._task_state){
            this._task_state = this._progress_val < this._total_progress_val ? 
                            RainbowTaskState.UnFinish : RainbowTaskState.AlreadyFinish;
        }
    }
    
    /* 显示页面
     */
    private showPage(){
        this.setStarLevel();
        this.setRewardInfo();
        this.refreshTaskProgress();
    }
    
    /* 刷新任务进度
     */
    private refreshTaskProgress(){
        this.setTaskProgress();
        this.refreshTaskState();
    }
    
    /* 刷新奖励状态
     */
    private refreshRewardState(){
        this._left_reward_state  = ManagerRainbowTask.getInstance().getUpLvTask() ? proto.TaskState.UnOpen : proto.TaskState.Reward;
        this._right_reward_state = proto.TaskState.Reward;
        this._current_task_data.leftReward.rewardState  = this._left_reward_state;
        this._current_task_data.rightReward.rewardState = this._right_reward_state;
        
        let itemState = getRewardItemState(this._left_reward_state, this._task_state);
        this.node_left_reward.setState(itemState);
        
        itemState = getRewardItemState(this._right_reward_state, this._task_state);
        this.node_right_reward.setState(itemState);
    }
    
    /* 设置星级
     */
    private setStarLevel(){
        this.lbl_level.string = `${this._star_level}`;
    }

    /* 设置奖励信息
     */
    private setRewardInfo(){
        let leftItemState = getRewardItemState( this._left_reward_state, this._task_state);
        this.node_left_reward.initWithStaticId( this._reward_data_list[kZeroNumber].rewardInfo.rewardId, 
                                                this._reward_data_list[kZeroNumber].rewardInfo.rewardType, 
                                                this._reward_data_list[kZeroNumber].rewardInfo.rewardCount, 
                                                leftItemState);

        let rightItemState = getRewardItemState(this._right_reward_state, this._task_state);
        this.node_right_reward.initWithStaticId(this._reward_data_list[kOneNumber].rewardInfo.rewardId, 
                                                this._reward_data_list[kOneNumber].rewardInfo.rewardType, 
                                                this._reward_data_list[kOneNumber].rewardInfo.rewardCount, 
                                                rightItemState);
                                        
        this.bindRewardClickEvent();
    }

    /* 绑定奖励点击事件
     */
    private bindRewardClickEvent(){
        let self = this;
        this.node_left_reward.setClickCallback(()=>{
            let itemState = getRewardItemState(self._left_reward_state, self._task_state);
            if(ItemState.LOCK == itemState || ItemState.ALREADY_RECEIVE == itemState){
                self.bindClickRewardEvent(true);
                return;
            }

            self.requestReceiveReward(false);
        });

        this.node_right_reward.setClickCallback(()=>{
            let itemState = getRewardItemState(self._right_reward_state, self._task_state);
            if(ItemState.LOCK == itemState || ItemState.ALREADY_RECEIVE == itemState){
                self.bindClickRewardEvent(false);
                return;
            }

            self.requestReceiveReward(true);
        });
    }
    
    /* 设置任务进度
     */
    private setTaskProgress(){
        this._progress_val             = this._progress_val > this._total_progress_val ? this._total_progress_val : this._progress_val;
        this.prog_task.progress        = this._progress_val / this._total_progress_val;
        this.lbl_prog_value.string     = `${this._progress_val}/${this._total_progress_val}`;
        this.spr_prog_full.node.active = this._progress_val == this._total_progress_val;
    }

    /* 刷新任务状态
     */
    private refreshTaskState(){
        this.spr_lock_star.node.active        = RainbowTaskState.UnOpen   == this._task_state;
        this.btn_imm_finish.node.active       = RainbowTaskState.UnFinish == this._task_state;
        this.btn_refresh.node.active          = !(RainbowTaskState.UnOpen == this._task_state || 
                                                    RainbowTaskState.AlreadyFinish == this._task_state);
        this.lbl_unopen_tip.node.active       = RainbowTaskState.UnOpen   == this._task_state;
        this.rich_txt_description.node.active = !this.lbl_unopen_tip.node.active;
        this.prog_task.node.active            = !this.lbl_unopen_tip.node.active;
        this.spr_un_open_bg.node.active       = this.lbl_unopen_tip.node.active;
        this.spr_bg.node.active               = !this.lbl_unopen_tip.node.active;
        //setGray(this.spr_bg, this.spr_lock_star.node.active);
        setGray(this.spr_star, this.spr_lock_star.node.active);
    }

    /* 请求领取任务奖励的消息
     * @param bRight 是否领取的是右边的奖励
     */
    private requestReceiveReward(bRight: boolean){
        let param         = new proto.Msg_ReceiveRainbowRewardReq();
        param.bLeftReward = !bRight;
        param.taskStarLv  = this._star_level;
        Net.Send(proto.Ptl.ReceiveRainbowRewardReq, param);
    }

    /* 处理接收奖励事件
     */
    private disposeReceiveEvent(bReceiveLeft: boolean){
        if(bReceiveLeft){
            this._left_reward_state = proto.TaskState.HaveReward;
            this.node_left_reward.setState(ItemState.ALREADY_RECEIVE);
        }else{
            this._right_reward_state = proto.TaskState.HaveReward;
            this.node_right_reward.setState(ItemState.ALREADY_RECEIVE);
        }

        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyMaintainRainbowReward, 
                {   leftState:  this._left_reward_state, 
                    rightState: this._right_reward_state, 
                    idx:        this._star_level, 
                    progVal:    this._progress_val});
    }

    /* 绑定点击右边奖励的事件
     */
    private bindClickRewardEvent(bLeft: boolean){
        let idx        = bLeft ? kZeroNumber : kOneNumber;
        let nodeReward = bLeft ? this.node_left_reward.node : this.node_right_reward.node;
        let rewardType = this._reward_data_list[idx].rewardInfo.rewardType;
        let rewardID   = this._reward_data_list[idx].rewardInfo.rewardId;
        tab.RewardType.RewardType_BoxGroupType == rewardType && boxtips.showTips(rewardID, nodeReward);
        tab.RewardType.RewardType_BoxType      == rewardType && boxtips.showTips(kZeroNumber, nodeReward, rewardID);
    }

    /* 处理滚动到下一个任务序号
     */
    private disposeScrollNextTaskIdx(){
        if(this._right_reward_state == proto.TaskState.HaveReward){
            let cacheOpenIdx = ManagerRainbowTask.getInstance().getOpenTaskIdx();
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyScrollToIdxOfRainbowTask, 
                    cacheOpenIdx > this._star_level ? cacheOpenIdx - kOneNumber : this._star_level);
        }
    }

    /* 播放开启任务特效
     */
    private playOpenEffect(){
        this.node_open_effect.active = true;
        if(isValidObj(this._open_task_effect)){
            this._open_task_effect.setAnimation(kZeroNumber, "idle", false);
            this._open_task_effect.setCompleteListener(()=>{
                this.node_open_effect.active = false;
                this._open_task_effect.setCompleteListener(null);
            });
        }
    }

    /* 点击立即完成任务事件
     */
    private onClickImmFinishTask(){
        showPopLayerV2("prefab/RainbowTaskImmFinishPop", RainbowTaskImmFinishPop).then(layer =>{
            layer.initData(this._task_uuid, this._star_level);
        });
    }
    
    /* 点击刷新任务事件
     */
    private onClickRefreshTask(){
        this.checkClosedBoxTips();
        if(ManagerRainbowTask.getInstance().getLeftWatchAdCount() <= kZeroNumber){
            ShowTips("TodayRefreshTaskUseUp");
            return;
        }

        showPopLayerV2("prefab/RainbowTaskRefreshTask", RainbowTaskRefreshTask).then(layer =>{
            layer.initData(this._task_uuid, this._star_level);
        });
    }
    
    /*  */
    private checkClosedBoxTips(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips);
    }
}
