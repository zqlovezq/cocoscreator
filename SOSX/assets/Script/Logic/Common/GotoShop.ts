/**
 * 
 */

import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import TaskDetailLayer from "../Task/TaskDetailLayer";
import PopLayer from "../Utils/PopLayer";
import { ShopItemType } from "./CommonInterface";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GotoShop extends PopLayer {

    gotoshopClick() {
        let tasklayer:TaskDetailLayer = cc.director.getScene().getComponentInChildren(TaskDetailLayer)
        if(tasklayer){
            tasklayer.hide()
        }
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_JumpShop, {shopItem: ShopItemType.ShopItemType_Diamond, bPlayEffect: false});
        this.hide()
    }

    start () {}
}
