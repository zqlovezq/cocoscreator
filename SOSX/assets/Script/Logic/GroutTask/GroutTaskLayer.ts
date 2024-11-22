/*
 * @Descripttion: 格古特任务主界面
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { isValidObj, kNoneString, kOneNumber, kTwoNumber, kZeroNumber } from "../Common/CommonInterface";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import InfiniteList from "../InfiniteList/InfiniteList";
import { flyResources, popRewardLayer_Ex, ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import GroutTaskInfo from "./GroutTaskInfo";
import GroutTaskRewardNode from "./GroutTaskRewardNode";
import ManagerGroutTaskInfo from "./ManagerGroutTaskInfo";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GroutTaskLayer extends PopLayer {

    @property(cc.Node)
    node_top: cc.Node = null;
    
    @property(cc.Button)
    btn_help: cc.Button = null;

   
    @property(cc.Node)
    node_help_info: cc.Node = null;

    @property(cc.Label)
    lbl_help_info: cc.Label = null;

    @property(GroutTaskRewardNode)
    node_step_reward_1: GroutTaskRewardNode = null;

    @property(GroutTaskRewardNode)
    node_step_reward_2: GroutTaskRewardNode = null;

    @property(GroutTaskRewardNode)
    node_step_reward_3: GroutTaskRewardNode = null;

    @property(GroutTaskRewardNode)
    node_step_reward_4: GroutTaskRewardNode = null;

    @property(GroutTaskRewardNode)
    node_step_reward_5: GroutTaskRewardNode = null;

    @property(cc.Label)
    lbl_step: cc.Label = null;

    @property(cc.Label)
    lbl_progress: cc.Label = null;

    //@property(cc.Sprite)
    //spr_step_cursor: cc.Sprite = null;

    @property(InfiniteList)
    list_view: InfiniteList = null;

    @property(cc.Label)
    lbl_talk_tip: cc.Label = null;

    @property({type:cc.Prefab, displayName: "格古特任务信息条预制件"})
    pfb_task_info_bar: cc.Prefab = null;

    @property({displayName: "格古特任务信息条高度"})
    task_info_bar_height: number = kZeroNumber;

    private _task_list: proto.GroutTaskData[]        = [];
    private _step_reward_list: GroutTaskRewardNode[] = [];
    private _bReceivedList: boolean[]                = []; //所有阶段奖励是否领取了
    private _next_open_task_idx: number = kZeroNumber;
    
    /*  */
    onLoad () {
        this.initTableView();
        this.initEvent();
        this.initStepRewardList();

        //监听"获取格古特任务列表"列表
        Net.listenProtocol(proto.Ptl.GroutTaskListRsp, buffer=>{
            let msg = proto.Msg_GroutTaskListRsp.decode(buffer);
            cc.log("GroutTaskListRsp (获取格古特任务列表) msg: " + JSON.stringify(msg));
            if(msg) {
                this._task_list     = msg.taskDataList;
                this._bReceivedList = msg.bReceivedList;
                this.checkCurrentOpenTaskIdx();
                ManagerGroutTaskInfo.getInstance().setTotalTaskCount(this._task_list.length);
                this.groupTaskStepReward();
                this.refreshPage();
            }
        },this);

        //监听"领取格古特任务阶段总奖励"消息
        Net.listenProtocol(proto.Ptl.ReceiveGroutTaskStepRewardRsp, buffer=>{
            let msg = proto.Msg_ReceiveGroutTaskStepRewardRsp.decode(buffer);
            cc.log("ReceiveGroutTaskStepRewardRsp (领取格古特任务阶段总奖励) msg: " + JSON.stringify(msg));
            if(msg && proto.Msg_ReceiveGroutTaskStepRewardRsp.ErrorCode.Succeed === msg.result) {
                this._bReceivedList[msg.taskStep - kOneNumber] = true;
                //ManagerGroutTaskInfo.getInstance().incrementStep();
                this._step_reward_list[msg.taskStep - kOneNumber].changeRewardState(proto.TaskState.HaveReward);

                let self = this;
                popRewardLayer_Ex(msg.reward, ()=>{
                    //是道具类型，并且是金币或者钻石，需要播放资源飞翔动画
                    if(tab.RewardType.RewardType_ItemType === msg.reward[kZeroNumber].rewardType){
                        flyResources(self._step_reward_list[msg.taskStep - kOneNumber].node, msg.reward[kZeroNumber].rewardId);
                    }

                    //防止服务器没有推送，导致入口没关
                    if(msg.taskStep == self._step_reward_list.length){
                        ManagerGroutTaskInfo.getInstance().saveTaskData(null, msg.taskStep, false, true);
                    }else{
                        self.requestTaskList();
                    }
                });
                return;
            }

            proto.Msg_ReceiveGroutTaskStepRewardRsp.ErrorCode.AlreadyReceived  === msg.result && ShowTips("MailRewardReceived");
            proto.Msg_ReceiveGroutTaskStepRewardRsp.ErrorCode.UnFinishTaskStep === msg.result && ShowTips("NotFinishGroutStepTask");
        },this);

        //监听"领取格古特任务奖励"消息
        Net.listenProtocol(proto.Ptl.ReceiveGroutTaskRewardRsp, buffer=>{
            let msg = proto.Msg_ReceiveGroutTaskRewardRsp.decode(buffer);
            cc.log("ReceiveGroutTaskRewardRsp (领取格古特任务奖励) msg: " + JSON.stringify(msg));
            if(msg && proto.Msg_ReceiveGroutTaskRewardRsp.ErrorCode.Succeed === msg.result) {
                this.changeTaskState(msg.taskUUID, proto.TaskState.HaveReward);
                return;
            }

            proto.Msg_ReceiveGroutTaskRewardRsp.ErrorCode.AlreadyReceived  === msg.result && ShowTips("");
            proto.Msg_ReceiveGroutTaskRewardRsp.ErrorCode.TaskInExistence  === msg.result && ShowTips("");
            proto.Msg_ReceiveGroutTaskRewardRsp.ErrorCode.TaskUnOpen       === msg.result && ShowTips("");

        },this);

        //监听通知开启下一个格古特任务消息
        /*Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyOpenNextGroutTask, (param: any)=>{
            let idx = (param as number);
            if(idx >= this._task_list.length){return;}

            ManagerGroutTaskInfo.getInstance().changeRunningTaskData(this._task_list[idx].taskData);
        }, this);*/

        //监听通知更新正在运行的任务
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyUpdateRunningGroutTask, (param: any)=>{
            if(!ManagerGroutTaskInfo.getInstance().getRunningTaskData()){
                return;
            }
            
            for(let data of this._task_list){
                if(data.taskData.UUId === ManagerGroutTaskInfo.getInstance().getRunningTaskData().UUId){
                    data.taskData.score = ManagerGroutTaskInfo.getInstance().getRunningTaskData().score;
                    data.taskData.state = ManagerGroutTaskInfo.getInstance().getRunningTaskData().state;
                }
            }
        }, this);
    }

    start () {
        this.requestTaskList();
        this.randomGeneratorTalk();
        for(let node of this._step_reward_list){
            node.setNodeStepVisible(true);
        }
    }

    onDestroy(){
        this._step_reward_list = [];
        this._task_list        = [];
        this._bReceivedList    = [];
    }

    /* 初始化TableView
     */
    private initTableView(){
        this.list_view.Init({
            getCellNumber:    this.getCellNumber.bind(this),
            getCellSize:      this.getCellSize.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView:      this.getCellView.bind(this),
            getCellData:      this.getCellData.bind(this),
        });

        this.list_view.node.on("scroll-began", ()=>{
            this.closedHelpAndRewardTipsFrame();
        },  this);

        this.list_view.node.on(cc.Node.EventType.TOUCH_START, ()=>{
            this.closedHelpAndRewardTipsFrame();
        },  this);
    }

    /* 初始化各种事件
     */
    private initEvent(){
        this.node.on(cc.Node.EventType.TOUCH_START, ()=>{
            this.closedHelpAndRewardTipsFrame();
        },  this);

        this.btn_help.node.on("click",   this.onClickHelp,              this);
        this.setCloseCallBack(()=>{this.closedHelpAndRewardTipsFrame()})
    }

    /* 初始化阶段奖励列表
     */
    private initStepRewardList(){
        this._step_reward_list.push(this.node_step_reward_1);
        this._step_reward_list.push(this.node_step_reward_2);
        this._step_reward_list.push(this.node_step_reward_3);
        this._step_reward_list.push(this.node_step_reward_4);
        this._step_reward_list.push(this.node_step_reward_5);
    }

    /* 请求任务列表
     */
    private requestTaskList(){
        let param = new proto.Msg_GroutTaskListReq();
        param.taskStep = ManagerGroutTaskInfo.getInstance().getTaskStep();
        Net.Send(proto.Ptl.GroutTaskListReq, param);
    }
    
    /* 刷新界面
     */
    private refreshPage(){
        this.setCurrentTaskStep();
        this.setCurrentTaskProgress();
        this.loadTaskInfo();
    }

    /* 检测当前开启的任务下标
     */
    private checkCurrentOpenTaskIdx(){
        //验证当前开启的任务的下标
        let taskListLen = this._task_list.length;
        for(let idx = kZeroNumber; idx < taskListLen; idx++){
            if(this._task_list[idx].taskData.state == proto.TaskState.UnOpen){
                let finalIdx = (idx == kZeroNumber) ? idx : idx - kOneNumber;
                ManagerGroutTaskInfo.getInstance().saveOpenTaskIdx(finalIdx);
                return;
            }
        }

        ManagerGroutTaskInfo.getInstance().saveOpenTaskIdx(taskListLen - kOneNumber);
    }

    /* 加载任务信息
     */
    private loadTaskInfo(){
        this.list_view.Reload(true);
        this.scheduleOnce(()=>{
            this.setListViewScrollWhere();
        }, 0.3);
    }

    /* 计算下Listview滚到何处
     */
     private setListViewScrollWhere(){
        let idx = ManagerGroutTaskInfo.getInstance().getOpenTaskIdx();
        this.list_view.ScrollToCell(idx);
    }

    /* 自动滚动到指定位置
     * @param idx  当前任务下标
     */
     private autoScrollToCell(){
        ManagerGroutTaskInfo.getInstance().saveOpenTaskIdx(this._next_open_task_idx);
        this.setListViewScrollWhere();
        this.list_view.Refresh();
    }
    
    /* 组织任务阶段奖励信息
     */
    private groupTaskStepReward(){
        let stepRewardList: proto.IRewardSimpleInfo[] = [];
        for(let data of tab.Data.GroutStepTable){
            stepRewardList.push({rewardType: data.RewardType, rewardId: data.RewardID, rewardCount: data.RewardCount});
        }

        for(let idx = kZeroNumber, len = this._step_reward_list.length; idx < len; idx++){
            let bEqualStep = ManagerGroutTaskInfo.getInstance().getTaskStep() == (idx + kOneNumber);
            let bOverStep = ManagerGroutTaskInfo.getInstance().getTaskStep() > (idx + kOneNumber);
            let state = bOverStep ? 
                        proto.TaskState.HaveReward : 
                        (bEqualStep ? proto.TaskState.Open : proto.TaskState.UnOpen);
            if(proto.TaskState.Open === state && this.checkStepRewardCanReceive()){
                state = this._bReceivedList[idx] ? proto.TaskState.HaveReward : proto.TaskState.Reward; 
            }
            this._step_reward_list[idx].initData(kNoneString, stepRewardList[idx], state, idx + kOneNumber, true);
        }
    }

    /* 检测阶段奖励是否可领取
     */
    private checkStepRewardCanReceive(){
        let taskLen = this._task_list.length;
        let data = this._task_list[taskLen - kOneNumber];
        if(data.taskData.state === proto.TaskState.HaveReward){
            return true;
        }

        return false;
    }
    
    /* 设置当前任务阶段
     */
    private setCurrentTaskStep(){
        this.lbl_step.string = `${ManagerGroutTaskInfo.getInstance().getTaskStep()}`;
        this.setStepCursor();
    }

    /* 设置当前阶段的任务进度
     */
    private setCurrentTaskProgress(){
        let alreadyCount = kZeroNumber;
        let totalCount   = this._task_list.length;
        let taskDataTab: tab.GroutTaskTable = null;
        for(let data of this._task_list){
            taskDataTab = tab.Data.GroutTaskTableByID.getValue(data.taskData.taskId);
            if(isValidObj(taskDataTab)){
                (data.taskData.score >= taskDataTab.FinishCondition) && (alreadyCount++);
            }
        }

        this.lbl_progress.string = `${alreadyCount}/${totalCount}`;
    }

    /* 改变任务状态
     */
    private changeTaskState(uuid:string, state: proto.TaskState){
        for(let idx = kZeroNumber, len = this._task_list.length; idx < len; idx++){
            if(this._task_list[idx].taskData.UUId === uuid){
                this._task_list[idx].taskData.state = state;
                this._next_open_task_idx = idx + kOneNumber;
                this._next_open_task_idx = this._next_open_task_idx >= len ? (len - kOneNumber) : this._next_open_task_idx;
                proto.TaskState.UnOpen === this._task_list[this._next_open_task_idx].taskData.state && 
                    (this._task_list[this._next_open_task_idx].taskData.state = proto.TaskState.Open);
                (idx == len - kOneNumber) && this.refreshStepRewardState();
                this.autoScrollToCell();
                return;
            }
        }
    }

    /* 刷新阶段奖励状态
     */
    private refreshStepRewardState(){
        let idx = ManagerGroutTaskInfo.getInstance().getTaskStep() - kOneNumber;
        let bCanReceiveStepReward = this.checkStepRewardCanReceive();
        bCanReceiveStepReward && this._step_reward_list[idx].changeRewardState(proto.TaskState.Reward);
    }

    /* 设置游标箭头
     */
    private setStepCursor(){
        /*let step = ManagerGroutTaskInfo.getInstance().getTaskStep();
        let nodeReward = this._step_reward_list[step - kOneNumber];
        if(nodeReward){
            let nodeRewardWorldPos = nodeReward.node.convertToWorldSpaceAR(cc.Vec3.ZERO);
            //let sprCursorWorldPos = this.spr_step_cursor.node.convertToWorldSpaceAR(cc.Vec3.ZERO);
            let nodeRewardSizeW = nodeReward.node.getContentSize().width;
            let sprCursorSizeW = this.spr_step_cursor.node.getContentSize().width;
            let x = nodeRewardWorldPos.x + (nodeRewardSizeW - sprCursorSizeW) / kTwoNumber;
            let y = this.spr_step_cursor.node.getPosition().y;
            this.spr_step_cursor.node.setPosition(x, y);
        }*/
    }

    /* 随机生成说话
     */
     private randomGeneratorTalk(){
        let index =  Math.floor(Math.random() * tab.Data.GroutHeroTalkTable.length)
        let talkTab = tab.Data.GroutHeroTalkTableByID.getValue(index)
        if(isValidObj(talkTab)){
            this.lbl_talk_tip.string = talkTab.TalkTip;
        }
    }
    
    /* 关闭帮助提示框和奖励物品提示框
     */
    private closedHelpAndRewardTipsFrame(){
        this.playHelpAnimation(false);
        this.checkClosedBoxTips();
    }

    /* 检测关闭宝箱提示框
     */
    private checkClosedBoxTips(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips);
    }
    
    /* 播放帮助动画
     */
    private playHelpAnimation(bPlay: boolean){
        if(this.node_help_info.opacity == 255){
            this.node_help_info.opacity = kZeroNumber;
            return;
        }
        
        let animNode = this.node_help_info.getComponent(cc.Animation);
        if(animNode){
            bPlay  && animNode.play("expand_rainbow_help");
            !bPlay && (this.node_help_info.opacity = kZeroNumber);
        }
    }

    /* 点击帮助按钮事件
     */
    private onClickHelp(){
        this.playHelpAnimation(true);
    }

    /* 获取单元格真正的下标
     * @param idx  单元格下标
     */
     private getRightCellIndex(idx: number){
        return this.getCellNumber() - kOneNumber - idx;
    }
    
    /* 获取单元格数量
     */
    private getCellNumber(){
        return this._task_list.length;
    }

    /** 
     * Description: 获取单元格高度
     * @param idx   单元格下标
     */
    private getCellSize(idx: number){
        return this.task_info_bar_height;
    }

    /* 获取单元格定义
     * @param idx  单元格下标
     */
    private getCellIdentifer(idx: number): string{
        return "GroutTask";
    }

    /* 获取单元格数据
     * @param idx 单元格下标
     */
    private getCellData(idx: number){
        //idx = this.getRightCellIndex(idx);
        if(idx >= this._task_list.length){
            return null;
        }

        return this._task_list[idx];
    }
    
    /* 获取单元格真正下标
     * @param idx  单元格下标
     */
    private getCellView(idx: number): InfiniteCell{
        if(idx < kZeroNumber || idx >= this._task_list.length){
            return null;
        }

        let cell = cc.instantiate(this.pfb_task_info_bar).getComponent(GroutTaskInfo);
        return cell;
    }
}
