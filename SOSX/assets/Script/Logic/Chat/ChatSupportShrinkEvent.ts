/*
 * @Descripttion: 聊天模块 支援信息缩回动画关键帧事件
 */

import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ChatSupportShrinkEvent extends cc.Component {

    start () {}

    disposeShrinkEvent(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_ChatModelShrinkSupportInfoEnd);
    }
}
