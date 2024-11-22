/*
 * @Descripttion: 联盟人事任命消息条预制件
 */

import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import { isValidObj, kNoneString, kZeroNumber } from "../Common/CommonInterface";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import { getAlliancePositionDes } from "./AllianceCommonInterface";

const {ccclass, property} = cc._decorator;

@ccclass
export default class AlliancePersonelChangeMsgBarPfb extends InfiniteCell {

    @property(cc.Sprite)
    spr_green_bar: cc.Sprite = null;

    @property(cc.Sprite)
    spr_yellow_bar: cc.Sprite = null;

    @property(cc.Sprite)
    spr_red_bar: cc.Sprite = null;

    @property(cc.Label)
    lbl_msg: cc.Label = null;

    @property(cc.Label)
    lbl_left: cc.Label = null;

    @property(cc.Label)
    lbl_right: cc.Label = null;

    private _msg_type: number = kZeroNumber;
    private _operator_name: string;   //操控者名称
    private _beOperator_name: string; //被操控者名称
    private _alliance_position_number: number;

    onLoad () {

    }

    start () {

    }

    public UpdateContent(celldata){
        if(!celldata){return;}

        //被驱逐的处理
        if(celldata.msgType === proto.GlobalMessageType.AllianceExpelMsg){
            this.setExpelMsg(celldata.content, celldata.msgType, celldata.msgSenderName);
            return;
        }

        //创建联盟的处理
        if(celldata.msgType === proto.GlobalMessageType.CreateAllianceMsg){
            this.setCreateAllianceMsg(celldata.msgSenderName, celldata.msgType);
            return;
        }
        
        //非人事任命的处理
        if(celldata.msgType !== proto.GlobalMessageType.AllianceSetPostRankMsg){
            this._msg_type = celldata.msgType;
            this.initData(celldata);
            return;
        }

        let msgObj: proto.AllianceSetPostRankStruct = null;
        try {
            msgObj = JSON.parse(celldata.content);
        } catch (error) {
            if(!cc.sys.isNative){throw new Error("联盟人事任命聊天JSON数据格式错误");}
        }
        
        if(!msgObj){
            if(!cc.sys.isNative){throw new Error("解析联盟人事任命JSON数据错误");}
            return;
        }

        this.setAlliancePersonelMsg(msgObj, celldata.msgType, celldata.msgSenderName);
    }
    
    /* 获取当前节点高度
     */
    public GetCellSize(){
        return this.node.getContentSize().height;
    }
    
    private initData(msg: proto.IAllianceMsgData){
        this._operator_name = msg.msgSenderName;
        let visibleStr = this.getMsgVisibleString();
        this.setMsgContent(visibleStr);
    }

    /* 设置联盟人事任命消息
     * @param msg          联盟人事任命消息
     * @param msgType      消息类型
     * @param operatorName 操作者名称
     */
    private setAlliancePersonelMsg(msg: proto.AllianceSetPostRankStruct, msgType: number, operatorName: string){
        this._operator_name            = operatorName;
        this._beOperator_name          = msg.roleName;
        this._alliance_position_number = msg.postRank;
        this._msg_type                 = msgType;
        let visibleStr = this.getMsgVisibleString();
        this.setMsgContent(visibleStr);
    }

    /* 设置被驱逐消息
     * @param beOperatorName     被操控者名称
     * @param msgType            消息类型
     * @param operatorName       操控者名称
     */
    private setExpelMsg(beOperatorName: string, msgType: number, operatorName: string){
        this._operator_name   = operatorName;
        this._beOperator_name = beOperatorName;
        this._msg_type        = msgType;
        let visibleStr        = this.getMsgVisibleString();
        this.setMsgContent(visibleStr);
    }
    
    /* 设置创建联盟消息
     * @param operatorName 
     * @param msgType 
     */
    private setCreateAllianceMsg(operatorName: string, msgType: number){
        this._operator_name   = operatorName;
        this._msg_type        = msgType;
        let visibleStr        = this.getMsgVisibleString();
        this.setMsgContent(visibleStr);
    }

    /* 设置联盟消息颜色条
     */
    private setWhichColorBarVisible(){
        let color = cc.Color.WHITE;
        switch(this._msg_type){
            case proto.GlobalMessageType.JoinAllianceMsg:
                color = this.spr_green_bar.node.color;
                break;

            case proto.GlobalMessageType.ExitAllianceMsg:
            case proto.GlobalMessageType.AllianceExpelMsg:
                color = this.spr_red_bar.node.color;
                break;

            case proto.GlobalMessageType.AllianceSetPostRankMsg:
                color = this.spr_yellow_bar.node.color;
                break;
        }

        this.lbl_msg.node.color   = color;
        this.lbl_left.node.color  = color;
        this.lbl_right.node.color = color;

        this.spr_red_bar.node.active    = false;
        this.spr_green_bar.node.active  = false;
        this.spr_yellow_bar.node.active = false;
    }

    /* 设置联盟消息文本
     * @param content  消息文本
     */
    private setMsgContent(content: string){
        this.lbl_msg.string = content;
        this.setWhichColorBarVisible();
    }

    /*  */
    private getMsgVisibleString(){
        let personelStringTab = tab.Data.AllianceInnerMsgTableByMsgType.getValue(this._msg_type);
        if(!isValidObj(personelStringTab)){
            if(!cc.sys.isNative){throw new Error("人事任命消息类型有误！");}
            return kNoneString;
        }
        let visibleStr = kNoneString;
        proto.GlobalMessageType.JoinAllianceMsg  === this._msg_type && (visibleStr = `${this._operator_name}${personelStringTab.DecText}`);
        proto.GlobalMessageType.ExitAllianceMsg  === this._msg_type && (visibleStr = `${this._operator_name}${personelStringTab.DecText}`);
        proto.GlobalMessageType.AllianceExpelMsg === this._msg_type && (visibleStr = `${this._beOperator_name}${personelStringTab.DecText}`);
        proto.GlobalMessageType.CreateAllianceMsg === this._msg_type && (visibleStr = `${this._operator_name}${personelStringTab.DecText}`);
        if(proto.GlobalMessageType.AllianceSetPostRankMsg === this._msg_type){
            let middleDesStr = tab.Data.GetKeyValue_ConfigTable().ControlChineseString;
            let formatDesStr = personelStringTab.DecText;
            let positionStr = getAlliancePositionDes(this._alliance_position_number);
            proto.GlobalMessageType.AllianceSetPostRankMsg === this._msg_type && (visibleStr = `${this._operator_name}${middleDesStr}${this._beOperator_name}${formatDesStr}${positionStr}`);
        }

        return visibleStr;
    }
}
