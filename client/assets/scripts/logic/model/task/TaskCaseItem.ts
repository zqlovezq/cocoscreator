import { _decorator, Component, Label, Node, ProgressBar } from 'cc';
import { ComponentBase } from '../../../framework/base/ComponentBase';
import { TaskInfo } from './TaskInfo';
import { LangMgr } from '../../mgr/LangMgr';
import { tab } from '../../../Table/table_gen';
import { CommonItem } from '../item/CommonItem';
import { ItemPoolMgr } from '../item/ItemPoolMgr';
import { ItemInfo } from '../item/ItemInfo';
import { TaskData } from './TaskData';
import { TaskControl } from './TaskControl';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
const { ccclass, property } = _decorator;

/**
 * 
 * TaskCaseItem
 * zhudingchao
 * Tue Jun 04 2024 15:02:32 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/task/TaskCaseItem.ts
 *
 */

@ccclass('TaskCaseItem')
export class TaskCaseItem extends ComponentBase {
    @property(Node)
    reachBtnNode:Node=null;
    @property(Node)
    gotoBtnNode:Node=null;
    @property(Label)
    describeLab:Label=null;
    @property(Node)
    itemNode:Node=null;
    @property(ProgressBar)
    proBar:ProgressBar=null;
    @property(Label)
    proLab:Label=null;
    @property(Node)
    notReachNode:Node=null;
    @property(Node)
    gotNode:Node=null;
    private taskInfo:TaskInfo;
    private comItem:CommonItem;

    register(){

    }
    initData(info:TaskInfo){
        this.taskInfo=info;
        this.initView();
       
    }
    initView(){
        this.describeLab.string=LangMgr.getLab(this.taskInfo.taskTable.Describe);
        let total=this.taskInfo.taskTable.FinishParam1;
        let currNum=this.taskInfo.progress>total?total:this.taskInfo.progress;
        this.proBar.progress=currNum/total;
        this.proLab.string=currNum+"/"+total;
        if(this.taskInfo.isReceived){
            this.gotNode.active=true;
            this.notReachNode.active=false;
            this.reachBtnNode.active=false;
            this.gotoBtnNode.active=false;
        }else if(this.taskInfo.isCanReceived){
            this.gotNode.active=false;
            this.notReachNode.active=false;
            this.reachBtnNode.active=true;
            this.gotoBtnNode.active=false;
        }else{
            this.gotNode.active=false;
            this.reachBtnNode.active=false;
            if(this.taskInfo.taskTable.JumpUI){
                this.gotoBtnNode.active=true;
                this.notReachNode.active=false;
            }else{
                this.gotoBtnNode.active=false;
                this.notReachNode.active=true;
            }
        }
        let item=new ItemInfo();
        item.initItemData(this.taskInfo.taskTable.RewardItemIds[0],this.taskInfo.taskTable.RewardItemNum[0])
        if(!this.comItem){
            let node=ItemPoolMgr.ins.createItem(item,this.itemNode);
            this.comItem=node.getComponent(CommonItem);
        }else{
            this.comItem.initData(item);
        }

    }
    onClickGotoBtn(){
        if(this.taskInfo.taskTable.JumpUI){
            let tabId = 0;
            let deepArgs = [];
            if(this.taskInfo.taskTable.JumpParam.length===1){
                tabId = this.taskInfo.taskTable.JumpParam[0];
            }else{
                deepArgs = this.taskInfo.taskTable.JumpParam;
            }
            const moduleTab = tab.getData().ModuleTableByModuleType.getValue(this.taskInfo.taskTable.JumpUI)
            UIMgr.ins.jumpLayer(this.taskInfo.taskTable.JumpUI,tabId,(()=>{
                if(this.taskInfo.taskTable.TaskType==tab.TaskType.TaskType_GuildDailyTask){
                    UIMgr.ins.hideView(ViewName.AssociationTaskPop);
                    // UIMgr.ins.hideView(ViewName.AssociationView);
                }else{
                    UIMgr.ins.hideView(ViewName.TaskView);
                }
            }),moduleTab.OpenFunctionId[0],deepArgs);
        }
      
    }
    onClickRaechBtn(){
        if(this.taskInfo.isCanReceived){
            if(this.taskInfo.taskTable.TaskType==tab.TaskType.TaskType_DailyTask){
                TaskControl.ins.requestReceiveDailyTaskReward([this.taskInfo.id]);
            }else if(this.taskInfo.taskTable.TaskType==tab.TaskType.TaskType_WeeklyTask){
                TaskControl.ins.requestReceiveWeeklyTaskReward([this.taskInfo.id]);
            }else if(this.taskInfo.taskTable.TaskType==tab.TaskType.TaskType_AchievementTask){
                TaskControl.ins.requestReceiveAchievementTaskReward([this.taskInfo.id]);
            }else if(this.taskInfo.taskTable.TaskType==tab.TaskType.TaskType_GuildDailyTask){
                TaskControl.ins.requestReceiveGuildDailyTaskReward([this.taskInfo.id]);
            }   
        }

    }

}