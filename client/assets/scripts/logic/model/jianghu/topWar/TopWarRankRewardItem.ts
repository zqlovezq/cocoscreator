import { _decorator, Component, Label, Node } from 'cc';
import { ItemInfo } from '../../item/ItemInfo';
import { ItemPoolMgr } from '../../item/ItemPoolMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * TopWarRankRewardItem
 * zhudingchao
 * Fri Jul 05 2024 15:22:17 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/jianghu/topWar/TopWarRankRewardItem.ts
 *
 */

@ccclass('TopWarRankRewardItem')
export class TopWarRankRewardItem extends Component {
    @property(Node)
    no1_Node:Node=null;
    @property(Node)
    no2_Node:Node=null;
    @property(Node)
    no3_Node:Node=null;
    @property(Node)
    qiTaiNode:Node=null;
    @property(Node)
    rewardLayout:Node=null;
    @property(Label)
    rankNunLab:Label=null;


    initView(minRank:number,maxRank:number,rewards:Array<ItemInfo>){
        if(minRank==maxRank){
            this.no1_Node.active=minRank==1;
            this.no2_Node.active=minRank==2;
            this.no3_Node.active=minRank==3;
            this.qiTaiNode.active=false;
        }else{
            this.qiTaiNode.active=true;
            this.rankNunLab.string=minRank+"-"+maxRank;
        }
        this.rewardLayout.removeAllChildren();
        for(let key in rewards){
            ItemPoolMgr.ins.createRewadItem(rewards[key],this.rewardLayout);
        }
    }

}