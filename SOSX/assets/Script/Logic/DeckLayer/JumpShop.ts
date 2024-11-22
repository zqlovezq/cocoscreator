/*
 * @Descripttion: 
 */

import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { ShopItemType } from "../Common/CommonInterface";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class JumpShop extends PopLayer {

    @property(cc.Button)
    btn_jump: cc.Button = null;

    @property(cc.Sprite)
    spr_bg: cc.Sprite = null;
    
    @property(cc.Button)
    btn_closed: cc.Button = null;

    @property(cc.Label)
    lbl_gold_tip: cc.Label = null;

    @property(cc.Label)
    lbl_diamond_tip: cc.Label = null;
    
    onLoad () {
        this.lbl_diamond_tip.node.active = false;
        this.btn_closed.node.on("click", ()=>{this.setVisible(false);}, this);
        this.btn_jump.node.on("click",   this.onClickJumpShop,          this);
    }

    start () {}

    public initData(bNeedDiamond: boolean){
        this.lbl_diamond_tip.node.active = bNeedDiamond;
        this.lbl_gold_tip.node.active    = !bNeedDiamond;
    }

    private onClickJumpShop(){
        let jumpType = this.lbl_gold_tip.node.active ? ShopItemType.ShopItemType_GoldCoin : ShopItemType.ShopItemType_Diamond;
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_JumpShop, {shopItem: jumpType, bPlayEffect: true});
        this.setVisible(false);
    }
}
