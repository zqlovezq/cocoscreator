/*
 * @Descripttion: 私聊数据
 */

import { proto } from "../../../Protocol/client_protocol";

export default class PrivateChatMsg {
    public Key: string; /* 私聊二者uuid组成的唯一key */
    public MsgData: proto.IChatMsgData; /* 私聊具体信息 */

    constructor(key: string, msg: proto.IChatMsgData){
        this.Key = key;
        this.MsgData = msg;
    }
}
