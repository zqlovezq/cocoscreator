/*
 * @Descripttion: 引导交互卡牌位置提示
 */

import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GuideExchangeTip extends cc.Component {
    onLoad() {
        Net.listenLoaclMessage(LOCAL_MESSAGE.HideExchangeTips, ()=>{
            this.node.destroy()
        },this)
    }
}
