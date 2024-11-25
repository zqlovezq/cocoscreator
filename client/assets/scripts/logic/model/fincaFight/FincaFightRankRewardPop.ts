import { _decorator, Component, EventTouch, instantiate, Label, Node, Prefab } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { GameUtil } from '../../utils/GameUtil';
import { FincaFightRankRewardItem } from './FincaFightRankRewardItem';
import { FincaFightData } from './FincaFightData';
import { LangMgr } from '../../mgr/LangMgr';
const { ccclass, property } = _decorator;

@ccclass('FincaFightRankRewardPop')
export class FincaFightRankRewardPop extends ViewPop {
    @property(Prefab)
    pfb_item: Prefab = null;
    @property(Node)
    contentNode: Node = null;
    @property(Label)
    lbl_my_rank:Label = null;
    private view_type: number = 0;
    onShow(): void {
        this.view_type = 1;
        this.showRoleRank();
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
        this.showRoleRank();
    }
    showRoleRank() {
        const rankStr =FincaFightData.ins.FincaRanking > -1 ? FincaFightData.ins.FincaRanking : LangMgr.getLab("ui_rank_1");
        this.lbl_my_rank.string = rankStr;
        this.contentNode.destroyAllChildren();
        const rewardsInfo = FincaFightData.ins.getRewards(this.view_type,false);
        for (let key in rewardsInfo.Rankings) {
            let str = rewardsInfo.Rankings[key].split(";");
            if (Number(str[0]) && Number(str[1])) {
                let item = instantiate(this.pfb_item);
                item.parent = this.contentNode;
                let rewards = GameUtil.getRewardsByDropId(rewardsInfo.DropId[key]);
                item.getComponent(FincaFightRankRewardItem).initView(Number(str[0]), Number(str[1]), rewards);
            }
        }
    }
}


