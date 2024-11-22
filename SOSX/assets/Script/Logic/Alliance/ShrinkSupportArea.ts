/*
 * @Descripttion: 处理支援区域缩回动画结束帧事件
 */

import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ShrinkSupportArea extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    start () {

    }

    /* 处理支援区域缩回动画结束帧事件 */
    dealShrinkEvent(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_ShrinkSupportAreaEnd);
    }
}
