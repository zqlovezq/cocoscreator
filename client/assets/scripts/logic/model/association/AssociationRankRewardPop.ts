import { _decorator, Component, EventTouch, instantiate, Label, Node, Prefab, Toggle } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
import { GameUtil } from '../../utils/GameUtil';
import { AssociationData } from './AssociationData';
import { AssociationRankRewardItem } from './AssociationRankRewardItem';
const { ccclass, property } = _decorator;

@ccclass('AssociationRankRewardPop')
export class AssociationRankRewardPop extends ViewPop {
    @property(Node)
    contentNode: Node = null;
    @property(Label)
    myRankLab: Label = null;
    @property(Label)
    myRankGuildLab: Label = null;
    @property(Label)
    myScoreLab: Label = null;
    @property(Prefab)
    itemPrefab: Prefab = null;
    @property(Toggle)
    toggle_16:Toggle = null;
    @property(Toggle)
    toggle_15:Toggle = null;
    @property(Toggle)
    toggle_17:Toggle = null;
    private view_type: number = 0;
    onShow(): void {
        // 个人16 公会15 17伤害奖励
        this.view_type = this.openData ? this.openData : 16;
        this["toggle_"+this.view_type].isChecked = true;
        this.switchView(null, String(this.view_type));
    }
    protected onDestroy(): void {
        super.onDestroy();
    }
    register(): void {

    }
    unRegister(): void {
        super.unRegister();
    }
    switchView(e: EventTouch, type: string) {
        if (e && Number(type) === this.view_type) {
            return
        }
        this.view_type = Number(type);
        if (this.view_type < 17) {
            this.showRoleRank(this.view_type)
        } else {
            this.showScoreDrop();
        }
    }
    showRoleRank(rankId: number) {
        this.contentNode.destroyAllChildren();
        let tables = tab.getData().RankRewardTableById.getValue(rankId);
        let ranks = tables.Ranking;
        for (let key in ranks) {
            let str = ranks[key].split(";");
            if (Number(str[0]) && Number(str[1])) {
                let item = instantiate(this.itemPrefab);
                item.parent = this.contentNode;
                let rewards = GameUtil.getRewardsByDropId(tables.DropId[key]);
                item.getComponent(AssociationRankRewardItem).initView(Number(str[0]), Number(str[1]), rewards);
            }
        }
        let rank = rankId === 16 ? AssociationData.ins.getSelfRoleRankCount() : AssociationData.ins.getSelfGuildRankCount();
        this.myRankLab.node.parent.active = false;
        this.myRankGuildLab.node.parent.active = false;
        this.myScoreLab.node.parent.active = false
        if (rankId === 16) {
            this.myRankLab.node.parent.active = true;
            this.myRankLab.string = rank > 0 ? rank + "" : LangMgr.getLab("ui_worldboss_5");
        } else {
            this.myRankGuildLab.node.parent.active = true;
            this.myRankGuildLab.string = rank > 0 ? rank + "" : LangMgr.getLab("ui_worldboss_5");
        }
    }
    showScoreDrop() {
        this.contentNode.destroyAllChildren();
        this.myRankLab.node.parent.active = false;
        this.myRankGuildLab.node.parent.active = false;
        this.myScoreLab.node.parent.active = true;
        let tables = tab.getData().GuildBossPointTable;

        let lastScore = 0;
        for(let i=0;i<tables.length-1;i++){
            const _tab = tables[i];
            let item = instantiate(this.itemPrefab);
            item.parent = this.contentNode;
            let rewards = GameUtil.getRewardsByDropId(_tab.DropId);

            //计算分数 (10000*10000-3000*10000)/25000+3000
            let score = 0;
            if(i===0){
                score = _tab.Damage;
                lastScore = score;
            }else{
                const lastTab = tables[i-1];
                score = lastScore+(_tab.Damage-lastTab.Damage)*10000/_tab.PointRaito;
                lastScore = score;
            }

            item.getComponent(AssociationRankRewardItem).initView(0, score, rewards);
        }
    }
}


