import { _decorator, Component, Label, Node } from 'cc';
import { ItemInfo } from '../item/ItemInfo';
import { ItemPoolMgr } from '../item/ItemPoolMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * FengyunRankingStageItem
 * zhudingchao
 * Wed Jul 17 2024 15:58:56 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/fengyunRanking/FengyunRankingStageItem.ts
 *
 */

@ccclass('FengyunRankingStageItem')
export class FengyunRankingStageItem extends Component {
    @property([Node])
    rankNodes: Node[] = [];
    @property(Node)
    rewardNode:Node=null;
    @property(Label)
    rankLab:Label=null;
    initView(minRank:number,maxRank:number,rewards:Array<ItemInfo>) {
        if(minRank!=maxRank){
            this.rankNodes[3].active=true;
            this.rankLab.string=minRank+"-"+maxRank;
        }else{
            this.rankNodes[minRank-1].active=true;
        }
        this.rewardNode.removeAllChildren();
        for(let key in rewards){
            ItemPoolMgr.ins.createRewadItem(rewards[key],this.rewardNode);
        }

    }
}