/*
 * @Descripttion: 赛季解锁卡牌组
 */

import { tab } from "../../Table/table_gen";
import {kOneNumber, kZeroNumber } from "./CommonInterface";
import CommonItem from "./CommonItem";
import { ItemState } from "./SeasonRankCommonFunc";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SeasonUnlockCardGroup extends cc.Component {
    @property({displayName:"卡牌1", type:cc.Node})
    node_card_1: cc.Node = null;

    @property({displayName:"卡牌2", type:cc.Node})
    node_card_2: cc.Node = null;

    @property({displayName:"卡牌3", type:cc.Node})
    node_card_3: cc.Node = null;

    @property({displayName:"卡牌4", type:cc.Node})
    node_card_4: cc.Node = null;

    private _card_node_list: cc.Node[]  = [];
    
    onLoad () {
        this.node_card_1.active = false;
        this.node_card_2.active = false;
        this.node_card_3.active = false;
        this.node_card_4.active = false;

        this._card_node_list.push(this.node_card_1);
        this._card_node_list.push(this.node_card_2);
        this._card_node_list.push(this.node_card_3);
        this._card_node_list.push(this.node_card_4);
    }

    start () {}

    onDestroy(){
        this._card_node_list = [];
    }

    /** 
     * Description: 初始化解锁卡牌组
     * @param unlockCardList  解锁的卡牌列表
     */
    public initData(unlockCardList: number[]){
        if(null == unlockCardList || kZeroNumber == unlockCardList.length){
            this.node.active = false; 
            return;
        }

        this._card_node_list.forEach((value:cc.Node, index, array)=>{
            value.active = false
        })

        let cardListLen     = unlockCardList.length;
        let cardNodeListLen = this._card_node_list.length;
        for(let idx = kZeroNumber; idx < cardListLen; idx++){
            if(idx < cardNodeListLen){
                this._card_node_list[idx].active = true;
                this._card_node_list[idx].getComponent(CommonItem).initWithStaticId(unlockCardList[idx], 
                                                                                    tab.ItemType.ItemType_Tower, 
                                                                                    kOneNumber, 
                                                                                    ItemState.NONE, 
                                                                                    true);
            }
        }
    }
}
