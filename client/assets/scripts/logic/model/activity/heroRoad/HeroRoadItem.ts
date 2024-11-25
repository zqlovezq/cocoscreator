import { _decorator, Color, Component, Label, Node, ProgressBar, RichText } from 'cc';
import { tab } from '../../../../Table/table_gen';
import { LangMgr } from '../../../mgr/LangMgr';
import { ItemInfo } from '../../item/ItemInfo';
import { ItemPoolMgr } from '../../item/ItemPoolMgr';
import { ActivityControl } from '../ActivityControl';
const { ccclass, property } = _decorator;

/**
 * 
 * HeroRoadItem
 * zhudingchao
 * Mon Jun 24 2024 15:56:24 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/activity/heroRoad/HeroRoadItem.ts
 *
 */

@ccclass('HeroRoadItem')
export class HeroRoadItem extends Component {
    @property(RichText)
    titleRichText: RichText = null;
    @property(Node)
    faGuangNode: Node = null;
    @property(Node)
    rewardNode: Node = null;
    @property(Node)
    rewardBtnNode: Node = null;
    @property(Node)
    lockNode: Node = null;
    @property(Node)
    gotNode: Node = null;
    @property(ProgressBar)
    proBar: ProgressBar = null;
    @property(Label)
    currLab: Label = null;
    @property(Label)
    totalLab: Label = null;
    private state: number = 0;
    public table: tab.HeroCollectionTable;


    initView(table: tab.HeroCollectionTable, state: number, progress: number) {
        this.table = table;
        let key=String(tab.HeroCollectionType[table.Type]);
        this.titleRichText.string = LangMgr.getCombineString(key, [table.Params]);
        this.updateView(state, progress);
        let itemInfo = new ItemInfo();
        itemInfo.initItemData(table.ItemId, table.ItemCount);
        ItemPoolMgr.ins.createRewadItem(itemInfo, this.rewardNode);

    }
    updateView(state: number, progress: number) {
        this.state = state;
        this.faGuangNode.active = state == 1;
        this.rewardBtnNode.active = state == 1;
        this.lockNode.active = state != 2;
        this.gotNode.active = state == 2;
        if(progress>this.table.Params){
            progress=this.table.Params;
        }

        if (this.lockNode.active) {
            this.proBar.progress = progress / this.table.Params;
            this.currLab.string = progress + "";
            this.totalLab.string = "/" + this.table.Params;
            let cStr = ""
            if (progress < this.table.Params) {
                cStr = tab.getData().GetKeyValue_ConfigTable().InterfaceTxtRed;
            } else {
                cStr = "ffffff"
            }
            this.currLab.color = new Color().fromHEX(cStr);
        }

    }
    onClickItem() {
        if (this.state == 1) {
            ActivityControl.ins.requestGetHeroCollectionReward(this.table.Id);
        }
    }


 

}