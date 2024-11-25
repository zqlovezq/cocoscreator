import { _decorator, Component, Label, Node } from 'cc';
import { tab } from '../../../../Table/table_gen';
import { ItemInfo } from '../../item/ItemInfo';
import { ItemPoolMgr } from '../../item/ItemPoolMgr';
import { LangMgr } from '../../../mgr/LangMgr';
import { GameplayControl } from '../GameplayControl';
const { ccclass, property } = _decorator;

/**
 * 
 * ClimbingTowerRewardItem
 * zhudingchao
 * Fri Jul 12 2024 17:18:55 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/jianghu/climbingTower/ClimbingTowerRewardItem.ts
 *
 */

@ccclass('ClimbingTowerRewardItem')
export class ClimbingTowerRewardItem extends Component {
    @property(Label)
    titleLab: Label = null;
    @property(Node)
    rewardNode: Node = null;
    @property(Node)
    getBtnNode: Node = null;
    @property(Node)
    notBtnNode: Node = null;
    @property(Node)
    gotNode: Node = null;
    state:number;
    table:tab.PveClearStageTable;
    initView(table: tab.PveClearStageTable, state: number) {
        this.table=table;
        for (let key in table.ClearRewardItemIds) {
            if(table.ClearRewardItemIds[key]){
                let info = new ItemInfo();
                info.initItemData(table.ClearRewardItemIds[key], table.ClearRewardItemNum[key]);
                ItemPoolMgr.ins.createRewadItem(info, this.rewardNode);
            }
         

        }
        // let pveTab = tab.getData().PveStageTableByStageId.getValue(table.StageId);
        // if (pveTab) {
        //     this.titleLab.string = LangMgr.getLab(pveTab.StageName);
        // }
        let pveTab = tab.getData().ClimbTowerTableByStageId.getValue(table.StageId);
        if(pveTab){
            this.titleLab.string = LangMgr.getCombineString("ui_climbingtower_10", [pveTab.Floor]);
        }
        this.updateView(state);
      

    }
    updateView(state:number){
        this.state=state;
        this.getBtnNode.active=state==1;
        this.notBtnNode.active=state==0;
        this.gotNode.active=state==2;
    }
    onClickGetBtn(){
        if(this.state==1){
            GameplayControl.ins.requestReceiveClimbTowerClearStageRewardsReq(this.table.StageId)
        }
    }

}