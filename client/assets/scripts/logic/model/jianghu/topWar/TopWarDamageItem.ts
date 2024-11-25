import { _decorator, Component, Label, Node, ProgressBar } from 'cc';
import { tab } from '../../../../Table/table_gen';
import { GameUtil, handleNumerText } from '../../../utils/GameUtil';
import { UIMgr } from '../../../mgr/UIMgr';
import { ViewName } from '../../../define/ViewDefine';
import { ItemInfo } from '../../item/ItemInfo';
const { ccclass, property } = _decorator;

/**
 * 
 * TopWarDamageItem
 * zhudingchao
 * Mon Jul 08 2024 15:36:09 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/jianghu/topWar/TopWarDamageItem.ts
 *
 */

@ccclass('TopWarDamageItem')
export class TopWarDamageItem extends Component {
    @property(ProgressBar)
    scoreBar: ProgressBar = null;
    @property(Node)
    boxNode: Node = null;
    @property(Node)
    openBoxNode: Node = null;
    @property(Label)
    boxScoreLab: Label = null;
    private table: tab.WorldBossRewardTable;
    private lastScore: number;
    initView(table: tab.WorldBossRewardTable, lastScore: number, currScore: number) {
        this.table = table;

        this.lastScore = lastScore;

        this.updateView( currScore);
        // this.scoreBar.progress=progress;
        this.boxScoreLab.string = GameUtil.convertNumber(table.Damage)
    }
    updateView( currScore: number) {
        let isReceive=currScore>=this.table.Damage;
        this.openBoxNode.active = isReceive;
        this.boxNode.active = !isReceive;
        if (isReceive) {
            this.scoreBar.progress = 1;
        } else {
            if (currScore <= this.lastScore) {
                this.scoreBar.progress = 0
            } else {
                let progress = (currScore - this.lastScore) / (this.table.Damage - this.lastScore);
                this.scoreBar.progress = progress;
            }
        }
    }
    onClickItem() {
        let rewads=[];
        for(let key in this.table.ItemId){
            let itemInfo=new ItemInfo();
            itemInfo.initItemData(this.table.ItemId[key],this.table.ItemNum[key]);
            rewads.push(itemInfo);
        }
        UIMgr.ins.show({viewName:ViewName.CommonBoxTipsPop,data:{"worldPos":this.node.worldPosition,"rewadInfos":rewads,"isDown":true}})
    }
}