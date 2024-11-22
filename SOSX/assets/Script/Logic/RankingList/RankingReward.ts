/*
 * @Descripttion: 排行榜奖励item
 */


import CommonItem from "../Common/CommonItem";
import PlayerCard from "../PlayerInfo/PlayerCard";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RankingReward extends cc.Component {
    @property([cc.Node])
    rankIcons:cc.Node[] = []

    @property(cc.Label)
    lbl_rank_lv:cc.Label = null

    @property(cc.Node)
    itemParent:cc.Node = null

    @property(cc.Prefab)
    commonItem:cc.Prefab = null

    onLoad () {
        
    }

    setRanking(startRank:number,endRank:number,RewardIDs:number[],RewardTypes:number[],RewardCounts:number[]){
        if (startRank == endRank){
            this.rankIcons[startRank-1].active = true
        }else{
            this.lbl_rank_lv.string = cc.js.formatStr("%s~%s",startRank,endRank)
        }

        for (let index = 0; index < RewardIDs.length; index++) {
            const element = RewardIDs[index];
            let item = cc.instantiate(this.commonItem)
            this.itemParent.addChild(item)
            let sp = item.getComponent(CommonItem)
            sp.initWithStaticId(RewardIDs[index],RewardTypes[index],RewardCounts[index])
        }
    }

}
