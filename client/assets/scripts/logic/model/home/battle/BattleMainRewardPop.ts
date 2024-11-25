import { _decorator, Component, instantiate, Label, Node, Prefab, tween, Vec3 } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { tab } from '../../../../Table/table_gen';
import { BattleMainRewardItem } from './BattleMainRewardItem';
const { ccclass, property } = _decorator;
@ccclass('BattleMainRewardPop')
export class BattleMainRewardPop extends ViewPop {
    @property(Prefab)
    pfb_reward_item: Prefab = null;
    @property(Node)
    node_content: Node = null;
    @property(Label)
    lbl_chapter_stage: Label = null;
    private _rewardTabData: tab.ChapterFristRewardTable = null;
    private _curStageId: number = 0;
    private _selfData:any = null;
    register(): void {
  
    }
    onShow(): void {
        this.node_content.destroyAllChildren();
        /* 当前进行个关卡 */
        this._curStageId = this.openData.Id;
        this._selfData = this.openData.ins;
        const _chapterData = tab.getData().MainChapterTableById.getValue(this.openData.chapterId);
        let idx = 0;
        for (let i = 0; i < _chapterData.StageIds.length; i++) {
            if (_chapterData.StageIds[i] == this._curStageId) {
                idx = i + 1;
                break;
            }
        }
        this.lbl_chapter_stage.string = this.openData.chapterId + "-" + idx;
        this._rewardTabData = tab.getData().ChapterFristRewardTableById.getValue(this._curStageId);
        for (let i = 0; i < this._rewardTabData.Time.length; i++) {
            this.createItem(i)
        }
    }
    onDestroy(): void {
        super.onDestroy();
    }
    createItem(index: number) {
        let item = this.node_content.children[index];
        if (!item) {
            item = instantiate(this.pfb_reward_item);
            item.parent = this.node_content;
        }
        const itemTs = item.getComponent(BattleMainRewardItem);
        itemTs.initData(index, this.openData.Id);
        item.setPosition(new Vec3(750,-70-150*index,0))
        tween(item).delay(0.2*index).to(0.2,{position:new Vec3(0,-70-150*index,0)}).start();
    }
}


