import { _decorator, Component, Label, Node, ProgressBar } from 'cc';
import { ComponentBase } from '../../../framework/base/ComponentBase';
import { TaskData } from './TaskData';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { ItemInfo } from '../item/ItemInfo';
import { TaskControl } from './TaskControl';
import { TASKDAILY } from '../../../Common/script/EnumTypeMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * TaskBoxItem
 * zhudingchao
 * Tue Jun 04 2024 14:52:36 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/task/TaskBoxItem.ts
 *
 */

@ccclass('TaskBoxItem')
export class TaskBoxItem extends ComponentBase {
    @property(ProgressBar)
    proBar: ProgressBar = null;
    @property(Node)
    normalNode:Node=null;
    @property(Node)
    cangetNode:Node=null;
    @property(Node)
    gotNode:Node=null;
    @property(Label)
    numLab:Label=null;
    @property(Node)
    boxBtnNode:Node=null;
    private index:number;
    private isCanReceived:boolean=false;
    private type:number;
    register(){

    }
    initView(type:number,index:number,progress:number,totalNum:number,){
        this.index=index;
        this.type=type;
        this.proBar.progress=progress;
        this.numLab.string=totalNum+"";
    
        if(progress>=1){
            this.normalNode.active=false;
            let isReceived = false
            if(this.type===TASKDAILY.DAILY){
                isReceived = TaskData.ins.getIsGetDailyActiveReward(index);
            }else if(this.type===TASKDAILY.WEEK){
                isReceived = TaskData.ins.getIsGetWeekActiveReward(index)
            }else if(this.type===TASKDAILY.GUILD){
                isReceived = TaskData.ins.getIsGetGuildActiveReward(index);
            }
            this.gotNode.active=isReceived;
            this.cangetNode.active=!isReceived;
            this.isCanReceived=!isReceived;
        }else{
            this.normalNode.active=true;
            this.gotNode.active=false;
            this.cangetNode.active=false;
            this.isCanReceived=false;
        }


    }
    onClickItem() {
        if(this.isCanReceived){
            if(this.type==TASKDAILY.DAILY){
                TaskControl.ins.requestReceiveDailyActivityTaskReward([this.index]);
            }else if(this.type==TASKDAILY.WEEK){
                TaskControl.ins.requestReceiveWeeklyActivityTaskReward([this.index]);
            }else if(this.type===TASKDAILY.GUILD){
                TaskControl.ins.requestReceiveGuildActivityTaskReward([this.index]);
            }

        }else{
            let rewads=[];
            if(this.type==TASKDAILY.DAILY){
                rewads=TaskData.ins.getDailyActiveReward(this.index);
            }else if(this.type==TASKDAILY.WEEK){
                rewads=TaskData.ins.getWeekActiveReward(this.index);
            }else if(this.type==TASKDAILY.GUILD){
                rewads=TaskData.ins.getGuildActiveReward(this.index);
            }
          
            UIMgr.ins.show({viewName:ViewName.CommonBoxTipsPop,data:{"worldPos":this.boxBtnNode.worldPosition,"rewadInfos":rewads}})
        }
       
    }
}