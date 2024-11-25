import { _decorator, Component, Label, Node } from 'cc';
import { tab } from '../../../../Table/table_gen';
import { LangMgr } from '../../../mgr/LangMgr';
import { ItemPoolMgr } from '../../item/ItemPoolMgr';
import { ItemInfo } from '../../item/ItemInfo';
const { ccclass, property } = _decorator;

/**
 * 
 * ClimbingTowerTowerEveryDayRewardItem
 * zhudingchao
 * Thu Jul 11 2024 19:35:12 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/jianghu/climbingTower/ClimbingTowerTowerEveryDayRewardItem.ts
 *
 */

@ccclass('ClimbingTowerTowerEveryDayRewardItem')
export class ClimbingTowerTowerEveryDayRewardItem extends Component {
    @property(Node)
    lineNode1:Node=null;
    @property(Node)
    lineNode2:Node=null;
    @property(Node)
    noRewardsNode:Node=null;
    @property(Label)
    titleLab1:Label=null;
    @property(Node)
    titleLab2:Label=null;
    @property(Label)
    numLab1:Label=null;
    @property(Label)
    numLab2:Label=null;
    @property(Node)
    rewardNode:Node=null;
    
    initView(id:number,isNext:boolean){
        let table=tab.getData().ClimbTowerTableByStageId.getValue(id);
        this.lineNode1.active=!isNext;
        this.lineNode2.active=isNext;
        this.noRewardsNode.active=table?false:true;
        if(table){
            for(let key in table.DailyReward){
                let info=new ItemInfo();
                info.initItemData(table.DailyReward[key],table.DailyRewardNum[key]);
                ItemPoolMgr.ins.createRewadItem(info,this.rewardNode);
            }
        }
        // let title=""
     
        if(!isNext){
            if(table){
                this.numLab1.string= LangMgr.getCombineString("ui_climbingtower_8", [table.Floor])
               
            }else{
                this.numLab1.string= LangMgr.getCombineString("ui_climbingtower_8", [0])
            }
        }else{
            if(table){
                this.numLab2.string= LangMgr.getCombineString("ui_climbingtower_8", [table.Floor])
               
            }else{
                //this.numLab2.string= "暂未开放";
                this.numLab2.string = LangMgr.getLab("ui_climbingtower_12");
            }
        }
        
    }

}