/*
 * @Descripttion: 联盟加入或者退出消息管理
 */

import { proto } from "../../Protocol/client_protocol";
import { kZeroNumber } from "../Common/CommonInterface";

const {ccclass, property} = cc._decorator;

export interface AllianceJoinMsgData{
    allianceIconIdx: number;
    allianceName: string;
    msgType: proto.PushJoinOrExpelType;
}

@ccclass
export default class AllianceJoinMsgManager {
    private static _instance: AllianceJoinMsgManager = null;
    private _msgList: AllianceJoinMsgData[]          = []; //消息列表
    
    public static getInstance(): AllianceJoinMsgManager {
        if (!AllianceJoinMsgManager._instance){
            AllianceJoinMsgManager._instance = new AllianceJoinMsgManager();
        }
        return AllianceJoinMsgManager._instance;
    }

    /* 存储消息
     * @param iconIdx    联盟图标表索引
     * @param name       联盟名称
     * @param msgType    消息类型
     */
    public saveMsg(iconIdx: number, name: string, msgType: proto.PushJoinOrExpelType){
        this._msgList.push({allianceIconIdx: iconIdx, allianceName: name, msgType: msgType});
    }

    /* 取得消息
     */
    public getMsg(){
        if(this._msgList.length > kZeroNumber){
            return this._msgList.shift();
        }

        return null;
    }

    public Destroy(){
        this._msgList = [];
    }
}
