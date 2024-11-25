import { _decorator, Component, EventTouch, Label, Node, ProgressBar } from 'cc';
import { tab } from '../../../../Table/table_gen';
import { GameUtil, handleNumerText } from '../../../utils/GameUtil';
import { ItemInfo } from '../../item/ItemInfo';
import { ViewName } from '../../../define/ViewDefine';
import { UIMgr } from '../../../mgr/UIMgr';
import { GameplayControl } from '../GameplayControl';
const { ccclass, property } = _decorator;

/**
 * 
 * EveryDayChallengeBoxItem
 * zhudingchao
 * Wed Jul 10 2024 15:07:38 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/jianghu/everyDayChallenge/EveryDayChallengeBoxItem.ts
 *
 */

@ccclass('EveryDayChallengeBoxItem')
export class EveryDayChallengeBoxItem extends Component {
    @property(ProgressBar)
    scoreBar: ProgressBar = null;
    @property(Node)
    boxNode: Node = null;
    @property(Node)
    openBoxNode: Node = null;
    @property(Label)
    boxScoreLab: Label = null;
    @property(Node)
    cangetNode:Node=null;
    private lastScore: number;
    private totalScore:number;
    private dropId:number;
    private isCanReceive:boolean=false;
    private rewards:Array<ItemInfo>;

    initView(lastScore: number,totalScore:number, currScore: number,dropId:number,isReceive:boolean) {
        this.rewards=null;
        this.lastScore = lastScore;
        this.totalScore=totalScore;
        this.dropId=dropId;
        this.updateView(currScore,isReceive);
        // this.scoreBar.progress=progress;
        this.boxScoreLab.string = handleNumerText(totalScore);
    }
    updateView( currScore: number,isReceive:boolean) {
        this.openBoxNode.active = isReceive;
        this.boxNode.active = !isReceive;
        this.isCanReceive=false;
        if (isReceive) {
            this.scoreBar.progress = 1;
            this.cangetNode.active=false;
        } else {
            if (currScore <= this.lastScore) {
                this.scoreBar.progress = 0
                this.cangetNode.active=false;
                this.isCanReceive=false;
            } else if(currScore>=this.totalScore){
                this.scoreBar.progress = 1
                this.cangetNode.active=true;
                this.isCanReceive=true;
            } else {
                let progress = (currScore - this.lastScore) / (this.totalScore - this.lastScore);
                this.scoreBar.progress = progress;
                this.cangetNode.active=false;
                this.isCanReceive=false;
            }
        }
      
    }

    onClickItem(event:EventTouch) {
        if(!this.isCanReceive){
            if(!this.rewards){
                this.rewards=GameUtil.getRewardsByDropId(this.dropId);
            }
            UIMgr.ins.show({viewName:ViewName.CommonBoxTipsPop,data:{"worldPos":event.target.worldPosition,"rewadInfos": this.rewards}})
        }else{
            GameplayControl.ins.requestDailyChallengeReward();
        }
        // let rewads=[];
        // for(let key in this.table.ItemId){
        //     let itemInfo=new ItemInfo();
        //     itemInfo.initItemData(this.table.ItemId[key],this.table.ItemNum[key]);
        //     rewads.push(itemInfo);
        // }
      //  UIMgr.ins.show({viewName:ViewName.CommonBoxTipsPop,data:{"worldPos":this.node.worldPosition,"rewadInfos":rewads,"isDown":true}})
    }
}