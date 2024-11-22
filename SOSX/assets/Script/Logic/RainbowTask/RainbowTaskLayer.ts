/*
 * @Descripttion: 任务主界面
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { getTimeDiffString } from "../Alliance/AllianceCommonInterface";
import {kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import JumpShop from "../DeckLayer/JumpShop";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import InfiniteList from "../InfiniteList/InfiniteList";
import { getServerUtcTime, popRewardLayer_Ex, showPopLayerV2, ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import ManagerRainbowTask, {IParamRainbowRewardState, RainbowTaskState } from "./ManagerRainbowTask";
import RainbowPreviewTips from "./RainbowPreviewTips";
import RainbowTaskInfoCell from "./RainbowTaskInfoCell";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RainbowTaskLayer extends PopLayer {
    @property(cc.Node)
    node_top: cc.Node = null;
    
    @property(cc.Button)
    btn_help: cc.Button = null;

    @property(cc.Label)
    lbl_over_left_time: cc.Label = null;

    @property(cc.Button)
    btn_closed: cc.Button = null;

    @property(RainbowPreviewTips)
    node_preview_tips: RainbowPreviewTips = null;

    @property(cc.Sprite)
    spr_theme_bg: cc.Sprite = null;

    @property(cc.Button)
    btn_buy: cc.Button = null;

    @property(cc.Label)
    lbl_diamond_cnt: cc.Label = null;

    @property(cc.Sprite)
    spr_after_buy_flag: cc.Sprite = null;

    @property(cc.Sprite)
    spr_free_icon: cc.Sprite = null;

    @property(cc.Node)
    node_help_info: cc.Node = null;

    @property(cc.Label)
    lbl_help_info: cc.Label = null;

    @property(InfiniteList)
    list_view: InfiniteList = null;

    @property(cc.ScrollView)
    scroll_view: cc.ScrollView = null;
    
    @property({type:cc.Prefab, displayName: "彩虹任务信息条预制件"})
    pfb_task_info_bar: cc.Prefab = null;

    @property({displayName: "彩虹任务信息条高度"})
    task_info_bar_height: number = kZeroNumber;

    private _task_list: proto.IRainbowInfoData [] = [];
    private _bCanSetContentPos: boolean           = false;
    private _next_task_star_lv: number            = kZeroNumber;

    onLoad () {
        this.initTableView();
        this.initEvent();

        //监听滚动到任务列表的最后一项
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyScrollLastRainbowTask, (param: any)=>{
            this.closedHelpAndRewardTipsFrame();
            this.list_view.scrollToBottom(kOneNumber);
        }, this);

        //监听领取彩虹任务奖励消息
        Net.listenProtocol(proto.Ptl.ReceiveRainbowRewardRsp, function (buffer, ptl){
           let msg = proto.Msg_ReceiveRainbowRewardRsp.decode(buffer);
           cc.log("ReceiveRainbowRewardRsp (领取彩虹任务奖励) msg: " + JSON.stringify(msg))
           if (msg && proto.Msg_ReceiveRainbowRewardRsp.ErrorCode.Succeed == msg.result){ 
                let self = this;
                this._next_task_star_lv = msg.taskStarLv + kOneNumber;
                popRewardLayer_Ex(msg.reward, ()=>{
                    self.autoScrollToCell(msg.taskStarLv, msg.bLeftReward);
                });       
           }
        }, this);

        //监听立即完成任务消息
        Net.listenProtocol(proto.Ptl.ImmFinishRainbowTaskRsp, (buffer, ptl)=>{
            let msg = proto.Msg_ImmFinishRainbowTaskRsp.decode(buffer);
            cc.log("ImmFinishRainbowTaskRsp (立即完成已经开启的指定彩虹任务) msg: " + JSON.stringify(msg))
            if (msg && proto.Msg_ImmFinishRainbowTaskRsp.ErrorCode.Succeed == msg.result){ 
                Role.Instance.RoleData.runningRainbowTask = msg.data;
                return;
            }

            proto.Msg_ImmFinishRainbowTaskRsp.ErrorCode.DiamondNotEnough == msg.result && ShowTips("DiamondNotEnough");
            proto.Msg_ImmFinishRainbowTaskRsp.ErrorCode.GoldNotEnough    == msg.result && ShowTips("OnlyGoldNotEnough");
            proto.Msg_ImmFinishRainbowTaskRsp.ErrorCode.TaskInExistence  == msg.result && ShowTips("TaskInExistence");
            proto.Msg_ImmFinishRainbowTaskRsp.ErrorCode.TaskOver         == msg.result && ShowTips("TaskOver");
            proto.Msg_ImmFinishRainbowTaskRsp.ErrorCode.TaskUnOpen       == msg.result && ShowTips("TaskUnOpen");
        }, this);

        //监听"刷新指定彩虹任务"消息
        Net.listenProtocol(proto.Ptl.RefreshRainbowTaskRsp, (buffer, ptl)=>{
            let msg = proto.Msg_RefreshRainbowTaskRsp.decode(buffer);
            cc.log("RefreshRainbowTaskRsp (刷新指定彩虹任务) msg: " + JSON.stringify(msg))
            if (msg && proto.Msg_RefreshRainbowTaskRsp.ErrorCode.Succeed == msg.result){ 
                this._task_list[msg.taskStarLv] = msg.newTask;
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyRefreshRainbowTask, {data: msg.newTask.data, taskStarLv: msg.taskStarLv});
                return;
            }

            proto.Msg_RefreshRainbowTaskRsp.ErrorCode.TaskInExistence == msg.result  && ShowTips("TaskInExistence");
            proto.Msg_RefreshRainbowTaskRsp.ErrorCode.TaskOver        == msg.result  && ShowTips("TaskOver");
            proto.Msg_RefreshRainbowTaskRsp.ErrorCode.TaskUnOpen      == msg.result  && ShowTips("TaskUnOpen");
        }, this);

        //监听"升级彩虹任务"消息
        Net.listenProtocol(proto.Ptl.UpLvRainbowRsp, (buffer, ptl)=>{
            let msg = proto.Msg_UpLvRainbowRsp.decode(buffer);
            cc.log("UpLvRainbowRsp (升级彩虹任务) msg: " + JSON.stringify(msg))
            if (msg && proto.Msg_UpLvRainbowRsp.ErrorCode.Succeed == msg.result){ 
                ManagerRainbowTask.getInstance().saveUpLvTask(false);
                this.setAfterBuyVisible();
                this.disposeAllTaskLeftRewardState();
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyOpenUpLvRainbowTask);
                return;
            }

            proto.Msg_UpLvRainbowRsp.ErrorCode.DiamondNotEnough == msg.result && ShowTips("DiamondNotEnough");
            proto.Msg_UpLvRainbowRsp.ErrorCode.AlreadyUpLv      == msg.result && ShowTips("OnlyGoldNotEnough");
            proto.Msg_UpLvRainbowRsp.ErrorCode.TaskOver         == msg.result && ShowTips("TaskOver");
            proto.Msg_UpLvRainbowRsp.ErrorCode.BanLvUpTime      == msg.result && ShowTips("OverTaskUpLvTip");
        }, this);

        //监听跳转商店消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_JumpShop, (param: any)=>{
            this.setVisible(false);
        }, this);

        //监听维护任务奖励状态消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyMaintainRainbowReward, (param: any)=>{
            let retData = (param as IParamRainbowRewardState);
            if(retData){
                this._task_list[retData.idx].leftReward.rewardState  = retData.leftState;
                this._task_list[retData.idx].rightReward.rewardState = retData.rightState;
                this._task_list[retData.idx].data.score              = retData.progVal;
                retData.taskState == RainbowTaskState.AlreadyFinish && (this._task_list[retData.idx].data.state = proto.TaskState.Open);
            }
        }, this);

        //监听点击任务刷新事件消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyScrollLastRainbowTask, (param: any)=>{
            this.closedHelpAndRewardTipsFrame();
            this.list_view.scrollToBottom(kOneNumber);
        }, this);
    }

    /*  */
    start () {
        this.refreshOverLeftTime();
    }

    /*  */
    onDestroy(){
        this._task_list = [];
        this.unschedule(this.refreshOverLeftTime);
    }
    
    /*  */
    public initData(taskList: proto.IRainbowInfoData[]){
        this._task_list = taskList;
        this.sortTaskList();
        this.showPage();
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
            this._bCanSetContentPos = true;
            this.closedHelpAndRewardTipsFrame();
        },  this);

        this.list_view.node.on("scrolling", ()=>{
           /* let range = this.list_view._getActiveCellIndexRange();
            this.node_preview_tips.node.active = range.y < this._task_list.length - kOneNumber;

            let currOffset = this.list_view.getScrollOffset();
            if(this._bCanSetContentPos && currOffset.y > -80 && currOffset.y < kZeroNumber){
                this.scroll_view.setContentPosition(cc.v2(kZeroNumber, currOffset.y));
            }*/
        }, this);

        this.list_view.node.on("scroll-ended", ()=>{
            this._bCanSetContentPos = false;
        }, this);

        this.scroll_view.cancelInnerEvents = false;
    }

    /* 初始化各种事件
     */
    private initEvent(){
        this.node.on(cc.Node.EventType.TOUCH_START, ()=>{
            this.closedHelpAndRewardTipsFrame();
        },  this);

        this.spr_theme_bg.node.on(cc.Node.EventType.TOUCH_START, ()=>{
            this.closedHelpAndRewardTipsFrame();
        },  this);

        this.btn_buy.node.on("click",    this.onClickBuy,               this);
        this.btn_help.node.on("click",   this.onClickHelp,              this);
        this.btn_closed.node.on("click", ()=>{this.closedHelpAndRewardTipsFrame(); this.setVisible(false);}, this);
    }

    /* 检测关闭宝箱提示框
     */
    private checkClosedBoxTips(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips);
    }

    /* 显示页面
     */
    private showPage(){
        this.setCostDiamondCount();
        this.setAfterBuyVisible();
        this.setLeftTimes();
        this.setBottomRewardPreviewData();
        this.loadTaskInfo();
    }
    
    /* 设置升级耗费的钻石数
     */
    private setCostDiamondCount(){
        let cnt = tab.Data.GetKeyValue_ConfigTable().UpLvRainbowTaskCostDiamond;
        this.lbl_diamond_cnt.string     = `${cnt}`;
        this.lbl_diamond_cnt.node.color = (Role.Instance.RoleData.diamond < cnt) ? cc.Color.RED : cc.Color.WHITE;
    }

    /* 设置购买升级后的标志可见性
     */
    private setAfterBuyVisible(){
        let bCanUpLv = ManagerRainbowTask.getInstance().getUpLvTask();
        this.btn_buy.node.active            = bCanUpLv;
        this.spr_after_buy_flag.node.active = !bCanUpLv;
    }

    /* 设置任务结束倒计时
     */
    private setLeftTimes(){
        this.unschedule(this.refreshOverLeftTime);
        this.schedule(this.refreshOverLeftTime, kOneNumber);
    }

    /* 刷新任务结束倒计时
     */
    private refreshOverLeftTime(){
        let diff = ManagerRainbowTask.getInstance().getTaskOverUTC() - getServerUtcTime();
        this.lbl_over_left_time.string = getTimeDiffString(diff);
    }

    /* 设置底部奖励预览信息
     */
    private setBottomRewardPreviewData(){
        let taskListLen = this._task_list.length;
        if(taskListLen < kOneNumber){
            if(!cc.sys.isNative){throw new Error("彩虹任务表是空的！！");}
            return;
        }
        let starLv = taskListLen - kOneNumber;
        this.node_preview_tips.initData(this._task_list[taskListLen - kOneNumber], starLv);
    }

    /* 加载任务列表
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
        let idx = ManagerRainbowTask.getInstance().getOpenTaskIdx();
        this.list_view.ScrollToCell(idx);
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

    /* 排序任务列表
     */
    private sortTaskList(){
        //验证当前开启的任务的下标
        let taskListLen = this._task_list.length;
        for(let idx = kZeroNumber; idx < taskListLen; idx++){
            if(this._task_list[idx].data.state == proto.TaskState.UnOpen){
                let finalIdx = (idx == kZeroNumber) ? idx : idx - kOneNumber;
                ManagerRainbowTask.getInstance().saveOpenTaskIdx(finalIdx);
                return;
            }
        }
    }

    /* 关闭帮助提示框和奖励物品提示框
     */
    private closedHelpAndRewardTipsFrame(){
        this.playHelpAnimation(false);
        this.checkClosedBoxTips();
    }
    
    /* 自动滚动到指定位置
     * @param idx  当前任务下标
     */
    private autoScrollToCell(idx: number, bLeftReward: boolean){
        if(this._next_task_star_lv < this._task_list.length){
            let oldTaskIdx = ManagerRainbowTask.getInstance().getOpenTaskIdx();
            ManagerRainbowTask.getInstance().saveOpenTaskIdx(this._next_task_star_lv);
            this._task_list[this._next_task_star_lv].data.state = proto.TaskState.Open;
            bLeftReward ? (this._task_list[this._next_task_star_lv].leftReward.rewardState = proto.TaskState.HaveReward) : 
                          (this._task_list[this._next_task_star_lv].rightReward.rewardState = proto.TaskState.HaveReward);

            this.checkAutoScroll(bLeftReward);
            this.checkMaintainRunningTaskData(oldTaskIdx);
            this.checkIsPlayOpenTaskEffect(bLeftReward);
            return;
        }
        
        this.checkAllTaskIsOver(idx);
    }

    /* 检测能不能自动滚动
     */
    private checkAutoScroll(bLeftReward: boolean){
        //领取左边奖励不用滚动
        if(!bLeftReward){
            this.setListViewScrollWhere();
            this.list_view.Refresh();
        }
    }

    /* 检测要不要维护正在运行的任务数据
     */
    private checkMaintainRunningTaskData(oldTaskIdx: number){
        if(oldTaskIdx < this._next_task_star_lv){
            //维护roleData中的彩虹任务数据
            Role.Instance.RoleData.runningRainbowTask = {data: this._task_list[this._next_task_star_lv].data, taskStarLv: this._next_task_star_lv};
            
            //通知更新主界面任务状态
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyRainbowTaskProgress, 
                {data: this._task_list[this._next_task_star_lv].data, taskStarLv: this._next_task_star_lv});
        }
    }

    /* 检测要不要播放任务开启特效
     */
    private checkIsPlayOpenTaskEffect(bLeftReward: boolean){
        //领取的是右边奖励通知播放开启当前任务的特效
        !bLeftReward && Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyPlayOpenTaskEffect, this._next_task_star_lv);
    }
    
    /**     
     * Description: 检测所有的任务是不是都做完了并且奖励都领完了
     */
    private checkAllTaskIsOver(idx: number){
        //检测下当前周期内的彩虹任务是不是都做完了并且奖励都领取了，如果是的话，就关闭主界面小红点
        let bOpenLeftReward = !ManagerRainbowTask.getInstance().getUpLvTask(); //左边奖励未开启，右边奖励全领完 小红点也消失
        let bOver = (!bOpenLeftReward || this._task_list[idx].leftReward.rewardState  == proto.TaskState.HaveReward) && 
                    this._task_list[idx].rightReward.rewardState == proto.TaskState.HaveReward;
        if(bOver){
            ManagerRainbowTask.getInstance().saveRainbowTaskOverState(false);
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_RefreshRainbowRedDot, false);
        }
    }

    /* 处理升级任务后 所有任务的左边奖励状态
     */
    private disposeAllTaskLeftRewardState(){
        for(let task of this._task_list){
            let taskState       = (task.data.state == proto.TaskState.UnOpen) ? RainbowTaskState.UnOpen : RainbowTaskState.AlreadyOpen;
            let leftRewardState = (RainbowTaskState.UnOpen === taskState) ? 
                                      proto.TaskState.UnOpen : 
                                      proto.TaskState.Reward;
            task.leftReward.rewardState = leftRewardState;
        }
    }

    /* 点击购买事件
     */
    private onClickBuy(){
        if(Role.Instance.RoleData.diamond < tab.Data.GetKeyValue_ConfigTable().UpLvRainbowTaskCostDiamond){
            //ShowTips("DiamondNotEnough");
            showPopLayerV2("prefab/JumpShop", JumpShop).then(layer =>{
                layer.initData(true);
            });
            return;
        }

        let param  = new proto.Msg_UpLvRainbowReq();
        Net.Send(proto.Ptl.UpLvRainbowReq, param);
    }

    /* 点击帮助事件
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

    /* 获取单元格高度
     * @param idx   单元格下标
     */
    private getCellSize(idx: number){
        return this.task_info_bar_height;
    }

    /* 获取单元格定义
     * @param idx  单元格下标
     */
    private getCellIdentifer(idx: number): string{
        return "rainbowTask";
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

        let cell = cc.instantiate(this.pfb_task_info_bar).getComponent(RainbowTaskInfoCell);
        return cell;
    }
}
