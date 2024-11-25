import { _decorator, Component, instantiate, Label, Node, Prefab } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { tab } from '../../../../Table/table_gen';
import { ItemInfo } from '../../item/ItemInfo';
import { TopWarRankRewardItem } from './TopWarRankRewardItem';
import { GameUtil } from '../../../utils/GameUtil';
import { GameplayViewDataMgr } from '../GameplayViewDataMgr';
import { LangMgr } from '../../../mgr/LangMgr';
const { ccclass, property } = _decorator;

@ccclass('TopWarRankRewardPop')
export class TopWarRankRewardPop extends ViewPop {
    @property(Node)
    contentNode:Node=null;
    @property(Label)
    myRankLab:Label=null;
    @property(Prefab)
    itemPrefab:Prefab=null;
    register(): void {
        
    }
    onShow(): void {
        let tables=tab.getData().RankRewardTableById.getValue(tab.RankType.RankType_WorldBoss);
        let ranks=tables.Ranking;
        for(let key in ranks){
            let item=instantiate(this.itemPrefab);
            item.parent=this.contentNode;
            let rewards=GameUtil.getRewardsByDropId(tables.DropId[key]);
            // for(let k2 in tables[key].RewardItemIds){
            //     let info=new ItemInfo();
            //     info.initItemData(tables[key].RewardItemIds[k2],tables[key].RewardtemNum[k2]);
            //     rewards.push(info);
            // }
            let str=ranks[key].split(";");
            item.getComponent(TopWarRankRewardItem).initView(Number(str[0]),Number(str[1]),rewards);
        }
        let rank=GameplayViewDataMgr.ins.worldBossMsg.ranking;
        //this.myRankLab.string=rank>-1?(rank+1)+"":"未上榜";
        this.myRankLab.string=rank>-1?(rank+1)+"":LangMgr.getLab("ui_worldboss_5");
    }
}


