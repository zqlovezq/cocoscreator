/*
 * @Descripttion: 联盟数据缓存管理模块
 */

import { proto } from "../../Protocol/client_protocol";
import AllianceSupportChat from "../Chat/ChatDetailModel/AllianceSupportChat";
import ManagerLocalChatMsg from "../Chat/ManagerLocalChatMsg";
import {kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import { sortAlliance } from "./AllianceCommonInterface";
import ManagerAllianceInnerMsg from "./ManagerAllianceInnerMsg";

export default class AllianceDataCacheManager{
    private _allianceinfo_list: proto.IAllianceSimpleInfo[]    = []; //联盟信息列表

    private static _instance: AllianceDataCacheManager = null;
    public static getInstance(): AllianceDataCacheManager {
        if (!AllianceDataCacheManager._instance){
            AllianceDataCacheManager._instance = new AllianceDataCacheManager();
            //AllianceDataCacheManager._instance.loadLocalMsgList();
        }
        return AllianceDataCacheManager._instance;
    }

    public setAllianceInfoList(allianceList: proto.IAllianceSimpleInfo[]){
        this._allianceinfo_list = allianceList;   
        sortAlliance(this._allianceinfo_list);
    }

    public getAllianceInfo(idx: number){
        if(idx < kZeroNumber || idx >= this._allianceinfo_list.length){
            if(!cc.sys.isNative){throw new Error("联盟数据索引越界");}
            return null;
        }

        return this._allianceinfo_list[idx];
    }

    public getAllianceInfoListLength(){
        return this._allianceinfo_list.length;
    }
    
    public destroyAllianceInfoList(){
        this._allianceinfo_list = [];
    }
    
/********************************************************联盟支援****************************************************************************************** */
    /* 替换同一申请人新的支援请求信息
     */
    public replaceAllianceSupportInfo(info: proto.IAllianceCardRequestInfo){
        let msgCache = ManagerAllianceInnerMsg.getInstance().getLocalMsgCache();
        if(!msgCache || msgCache.length < kOneNumber){
            return false;
        }
        
        let idx = kZeroNumber;
        for(let data of msgCache){
            if(data.msgType === proto.GlobalMessageType.MemberRequestSupportMsg){
                let supportInfo = this.parseSupportMsg(data);
                if(supportInfo.ApplicantID === info.roleID){
                    msgCache.splice(idx, kOneNumber);
                    this.wrapSupportInfo(info, data.msgSenderName);
                    return true;
                }
            }
            idx++;
        }
        
        return false;
    }

    /* 解析联盟消息
     */
    private parseSupportMsg(msg: proto.IAllianceMsgData){
        let supportMsgObj: AllianceSupportChat = null;
        try {
            supportMsgObj = JSON.parse(msg.content);
        } catch (error) {
            if(!cc.sys.isNative){throw new Error("联盟支援JSON数据格式错误");}
        }
        
        if(!supportMsgObj){
            if(!cc.sys.isNative){throw new Error("解析联盟支援JSON数据错误");}
        }

        return supportMsgObj;
    }

    /* 包装联盟支援信息
     */
    private wrapSupportInfo(info: proto.IAllianceCardRequestInfo, roleName: string){
        if(info.curNumber >= info.maxNumber){
            return;
        }
        
        let supportInfo   = new AllianceSupportChat(info.roleID, 
                                                    roleName, 
                                                    info.cardID, 
                                                    info.curNumber, 
                                                    info.maxNumber, 
                                                    info.requestTime, 
                                                    info.donateInfo);
        let msgInfo           = new proto.AllianceMsgData();
        msgInfo.msgSenderName = roleName;
        msgInfo.content       = JSON.stringify(supportInfo);
        msgInfo.msgType       = proto.GlobalMessageType.MemberRequestSupportMsg;
        msgInfo.utcTime       = supportInfo.RequestTimestamp;
        msgInfo.senderUUID    = info.roleID;
        ManagerAllianceInnerMsg.getInstance().pushChatMsg(msgInfo);
    }

    public destroyAllData(){
        this._allianceinfo_list = [];
    }
}