import { _decorator, Component, instantiate, Label, Node, Prefab, ProgressBar } from 'cc';
import { ViewScreen } from '../../../framework/base/ViewScreen';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
import { GameUtil, setTextTime } from '../../utils/GameUtil';
import { FengyunRankingStageItem } from './FengyunRankingStageItem';
import { proto } from 'client_protocol';
import { ItemPoolMgr } from '../item/ItemPoolMgr';
import { PlayerHeadItem } from '../common/PlayerHeadItem';
import { SimpleRoleInfo } from '../friends/SimpleRoleInfo';
import { FengyunRankData } from './FengyunRankData';
import { TaskInfo } from '../task/TaskInfo';
import { UIMgr } from '../../mgr/UIMgr';
import { FengyunRankControl } from './FengyunRankControl';
import { ItemInfo } from '../item/ItemInfo';
import { EventMgr } from '../../mgr/EventMgr';
import { ViewName } from '../../define/ViewDefine';
import { RoleData } from '../role/RoleData';
import { RedMgr } from '../../mgr/RedMgr';
import { RedDotType } from '../../red/RedDotType';
const { ccclass, property } = _decorator;

/**
 * 
 * FengyunRankingView
 * zhudingchao
 * Wed Jul 17 2024 15:28:28 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/fengyunRanking/FengyunRankingView.ts
 *
 */

@ccclass('FengyunRankingView')
export class FengyunRankingView extends ViewScreen {
    @property(Label)
    titleLab: Label = null;
    @property(Label)
    tiemNumLab: Label = null;
    @property([Node])
    rankNodes: Node[] = [];
    @property(Node)
    myRewaedNode: Node = null;
    @property(Label)
    myRankLab: Label = null;

    @property(Node)
    rankRewardNode: Node = null;
    @property(Prefab)
    rankRewardItemPrefab: Prefab = null;

    @property(Label)
    taskDecLab: Label = null;
    @property(Node)
    taskRewardNode: Node = null;
    @property(ProgressBar)
    taskBar: ProgressBar = null;
    @property(Label)
    taskNumLab: Label = null;
    @property([Node])
    taskBgNodes: Node[] = [];
    @property(Node)
    red_node:Node = null;

    private rewardTab: tab.RankRewardTable;
    private rankMsg: proto.Msg_GetRankRsp;
    private taskIds: Array<number>;
    private currTaskInfo: TaskInfo;
    private isAccount:boolean;
    private lastEndTimer:number;
    register(): void {
        EventMgr.onMsg(proto.Ptl.ReceiveHonorRollTasksRewardsRsp, this.on_s2c_ReceiveHonorRollTasksRewardsRsp, this)
    }
    onShow(): void {
        if (this.openData["rankMsg"] && this.openData["id"]) {
            let id = this.openData["id"];
            this.rankMsg = this.openData["rankMsg"];
            let table = tab.getData().ActivityRankTableById.getValue(id);
            this.titleLab.string = LangMgr.getLab(table.WordKey);
            this.rewardTab = tab.getData().RankRewardTableById.getValue(table.RankId);
            this.taskIds = table.TaskIds;
            this.lastEndTimer=this.rankMsg.settleTime-RoleData.ins.getServerUtcTime();
            if(this.lastEndTimer<0){
                this.isAccount=true;
                //this.tiemNumLab.string="已结算"
                this.tiemNumLab.string = LangMgr.getLab("ui_commondesc_116")
            }else{
                this.isAccount=false;
                this.tiemNumLab.string= setTextTime(this.lastEndTimer);
                this.schedule(this.lastTimerCallBack,1)
              
            }
            this.initReward();
            this.initRank();
            this.initTaskInfo();
            this.refreshRed();
        }
    }
    lastTimerCallBack=()=>{
        this.lastEndTimer--;
        if(this.lastEndTimer>=0){
           this.tiemNumLab.string= setTextTime(this.lastEndTimer);
        }else{
            //this.tiemNumLab.string="已结算"
            this.tiemNumLab.string = LangMgr.getLab("ui_commondesc_116")
            this.isAccount=false;
            this.unschedule(this.lastTimerCallBack);
            this.initTaskInfo();
        }
    }
    initRank() {
        if (this.rankMsg.ranking>=0) {
            this.myRankLab.string = "" + (this.rankMsg.ranking+1);
        } else {
            this.myRankLab.string = LangMgr.getLab("ui_rank_1");
        }
        let list = this.rankMsg.rankList;
        for(let i=0;i<3;i++){
            if(list[i]){
                this.setRankInfo(i, list[i])
            }
            else{
                this.setRankInfo(i, null)
            }
        }
    }
    setRankInfo(index: number, msg: proto.ISimpleRank) {
        let node = this.rankNodes[index];
        if(msg===null){
            node.active = false;
            return;
        }
        let headItem = node.getChildByName("PlayerHeadItem");
        let nameLab = node.getChildByName("name_txt").getComponent(Label);
        let infoLab = node.getChildByName("info_txt").getComponent(Label);
        let not = node.getChildByName("nobody_txt");
        if (msg) {
            // let herad=new 
            let sinfo = new SimpleRoleInfo(msg.simple);
            headItem.getComponent(PlayerHeadItem).initHeadInfo({ roleInfo: sinfo });
            not.active = false;
            nameLab.string = msg.simple.name;
            let table = tab.getData().QuestLogTableByLevel.getValue(sinfo.reputation);
            if (table) {
                infoLab.string = LangMgr.getLab(table.Name);
            } else {
                infoLab.string = "";
            }

        } else {
            not.active = true;
            nameLab.node.active = false;
            headItem.active = false;
            infoLab.node.active = false;
        }

    }
    initReward() {
        let ranks = this.rewardTab.Ranking;
        let myRewards = [];
        for (let key in ranks) {
            if (ranks[key] != "") {
                let strs = ranks[key].split(";");
                let rewards = GameUtil.getRewardsByDropId(this.rewardTab.DropId[key]);
                let item = instantiate(this.rankRewardItemPrefab);
                item.parent = this.rankRewardNode;
                let min = Number(strs[0]);
                let max = Number(strs[1]);
                item.getComponent(FengyunRankingStageItem).initView(min, max, rewards);
                if (this.rankMsg.ranking > -1) {
                    if (this.rankMsg.ranking + 1 <= min && this.rankMsg.ranking + 1 <= max) {
                        myRewards = rewards;
                    }
                }
            }

        }
        this.myRewaedNode.removeAllChildren();
        for (let key in myRewards) {
            ItemPoolMgr.ins.createRewadItem(myRewards[key], this.myRewaedNode);
        }
    }
    initTaskInfo() {
        let isAccount = this.isAccount;
        let msg = FengyunRankData.ins.getHonorRollInfoByActId(101);
        let currTask = null;
        for (let key in this.taskIds) {
            let task = msg.tasks.find(a => a.id == this.taskIds[key]);
            if (task) {
                if (!task.isReceived&&!currTask) {
                    currTask = task;
                }
            }
        }
        for (let key in this.taskBgNodes) {
            this.taskBgNodes[key].active = false;
        }
        if (!currTask) {
            currTask = msg.tasks.find(a => a.id == this.taskIds[this.taskIds.length - 1]);
        }
        if (currTask) {
            let taskInfo = new TaskInfo(currTask);
            if (isAccount) {
                this.taskBgNodes[3].active = true;
            } else {
                if (taskInfo.isReceived) {
                    this.taskBgNodes[2].active = true;
                } else if (taskInfo.isCanReceived) {
                    this.taskBgNodes[0].active = true;
                } else {
                    this.taskBgNodes[1].active = true;
                }
            }
            this.taskDecLab.node.parent.active = true;
            this.taskDecLab.string = LangMgr.getLab(taskInfo.taskTable.Describe);
            if (taskInfo.progress >= taskInfo.taskTable.FinishParam1) {
                this.taskBar.progress = 1;
                this.taskNumLab.string = taskInfo.progress + "/" + taskInfo.progress
            } else {
                this.taskBar.progress = taskInfo.progress / taskInfo.taskTable.FinishParam1;
                this.taskNumLab.string = taskInfo.progress + "/" + taskInfo.taskTable.FinishParam1;
            }
            this.currTaskInfo = taskInfo;
            this.taskRewardNode.removeAllChildren();
            for (let key in this.currTaskInfo.taskTable.RewardItemIds) {
                let info = new ItemInfo();
                info.initItemData(this.currTaskInfo.taskTable.RewardItemIds[key], this.currTaskInfo.taskTable.RewardItemNum[key]);
                ItemPoolMgr.ins.createRewadItem(info, this.taskRewardNode);
            }
        }else{
            this.taskDecLab.node.parent.active = false;
        }
    }
    onClickReceived() {
        if (this.currTaskInfo && this.currTaskInfo.isCanReceived) {
            FengyunRankControl.ins.reqReceiveHonorRollTasksRewards(101, [this.currTaskInfo.id]);
        }

    }
    onClickGoto() {
        if (this.currTaskInfo && this.currTaskInfo.taskTable.JumpUI) {
            UIMgr.ins.jumpLayer(this.currTaskInfo.taskTable.JumpUI,this.currTaskInfo.taskTable.JumpParam[0]);
        }
    }

    on_s2c_ReceiveHonorRollTasksRewardsRsp(msg: proto.Msg_ReceiveHonorRollTasksRewardsRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            if(msg.rewards&&msg.rewards.length>0){
                UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
            }
            this.initTaskInfo();
            this.refreshRed();
        }

    }
    refreshRed(){
        this.red_node.active = RedMgr.ins.isRed(RedDotType.Feng_Yun_Rank, String(101),String(this.currTaskInfo.id));
    }
}