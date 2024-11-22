/**
 *  开箱返利卡组模块
 */

import { kZeroNumber } from "../../Common/CommonInterface";
import UnpackRebateCard from "./UnpackRebateCard";
import { unpackType } from "./UnpackRebateSelectCardLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UnpackRebateCardGroup extends cc.Component {

    @property(cc.Node)
    node_card_1:cc.Node = null;

    @property(cc.Node)
    node_card_2:cc.Node = null;

    @property(cc.Node)
    node_card_3:cc.Node = null;

    @property(cc.Node)
    node_card_4:cc.Node = null;

    private _card_list: UnpackRebateCard[] = [];

    onLoad(){
    }

    start () {
    }

    onDestroy(){
        this._card_list = [];
    }

    /* 初始化卡组数据 */
    public initData(cardList: number[], bOpenDetail: boolean, ntype:unpackType = unpackType.Rebate){
        this.onFocusInEditor();
        let cardListLen = cardList ? cardList.length : kZeroNumber;
        for(let idx = kZeroNumber; idx < cardListLen; idx++){
            if(idx >= cardList.length){
                this._card_list[idx].node.active = false;
            } else {
                {
                    if(null != this._card_list[idx]){
                        this._card_list[idx].node.active = true;
                        this._card_list[idx].initData(cardList[idx], bOpenDetail, ntype);
                    }
                }
            }
        }
    }

    protected onFocusInEditor(){
        if(this._card_list.length == kZeroNumber){
            this.node_card_1.active = false;
            this.node_card_2.active = false;
            this.node_card_3.active = false;
            this.node_card_4.active = false;
            
            this._card_list.push(this.node_card_1.getComponent(UnpackRebateCard));
            this._card_list.push(this.node_card_2.getComponent(UnpackRebateCard));
            this._card_list.push(this.node_card_3.getComponent(UnpackRebateCard));
            this._card_list.push(this.node_card_4.getComponent(UnpackRebateCard));
        }
    }
}
