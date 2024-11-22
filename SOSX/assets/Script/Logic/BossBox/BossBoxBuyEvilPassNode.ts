/*
 * @Descripttion: 战场地图红点管理类
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { checkRechargeInterfaceIsOpen } from "../Common/CommonInterface";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import { showPopLayer } from "../Utils/GameUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BossBoxBuyEvilPassNode extends InfiniteCell {

   @property(cc.Node)
   buyevilpasstxt:cc.Node = null

   @property(cc.Node)
   buyevilpass:cc.Node = null

    onBuy(){
        showPopLayer("prefab/EvilPass")
    }

    UpdateContent(){
        this.buyevilpasstxt.active = checkRechargeInterfaceIsOpen();
        this.buyevilpass.active = checkRechargeInterfaceIsOpen();
       
    }

    GetScoreNode(){
        return null
    }

    start () {

    }
}
