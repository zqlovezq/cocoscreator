/*
 * @Descripttion: 管理联盟内部消息类文件
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import AllianceSupportChat, { DonorInfo } from "../Chat/ChatDetailModel/AllianceSupportChat";
import { isValidObj, kNegativeOneNumber, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";

export default class ManagerAllianceInnerMsg {
    private kMaxSaveLocalMsgCount = tab.Data.GetKeyValue_ConfigTable().AllianceInnerMsgSaveNumber;
    private kMaxShowNumber = tab.Data.GetKeyValue_ConfigTable().FullScreenShowChatNumber;

    private _inner_msg_cache: proto.IAllianceMsgData[] = []; /* 聊天消息缓存列表 */
    
    private static _instance: ManagerAllianceInnerMsg   = null;
    public static getInstance(): ManagerAllianceInnerMsg {
        if (!ManagerAllianceInnerMsg._instance){
            ManagerAllianceInnerMsg._instance = new ManagerAllianceInnerMsg();
        }
        return ManagerAllianceInnerMsg._instance;
    }

    public initMsgList(msgList: proto.IAllianceMsgData[]){
        if(!msgList || msgList.length <= kZeroNumber){
            return;
        }

        let newMsgList     = msgList.slice(kZeroNumber);
        let bRepeat        = false;
        let bFilterMsgType = false;
        let bSelf          = false;
        for(let idx = newMsgList.length - kOneNumber; idx >= kZeroNumber; idx--){
            bRepeat = this.checkRepeatMsg(newMsgList[idx]);
            bFilterMsgType = newMsgList[idx].msgType === proto.GlobalMessageType.JoinAllianceMsg || 
                             newMsgList[idx].msgType === proto.GlobalMessageType.ExitAllianceMsg || 
                             
            bFilterMsgType && (bSelf = newMsgList[idx].senderUUID === Role.Instance.RoleData.id);
            if(bRepeat || (bFilterMsgType && bSelf) || this.checkFilterMsgType(newMsgList[idx].msgType)){
                newMsgList.splice(idx, kOneNumber);
            }
        }

        this.copyServerMsgList(newMsgList);
        this.checkSupportFill();
    }

    private checkFilterMsgType(msgType: proto.GlobalMessageType){
        return (msgType == proto.GlobalMessageType.MemberNormalTxtMsg || 
            msgType == proto.GlobalMessageType.MemberEmotionMsg || 
            msgType == proto.GlobalMessageType.MemberFriendlyMatchInviteMsg ||
            msgType == proto.GlobalMessageType.MemberInfiniteDefenseInviteMsg || 
            msgType == proto.GlobalMessageType.AlliancePvpInvitation || 
            msgType == proto.GlobalMessageType.ShareSelfCardGroup);
    }
    
     /**
     
     * Description: 从本地加载聊天信息
     
     */
    public loadLocalMsg(){
        if(!Role.Instance.RoleData.allianceData || 
            !isValidObj(Role.Instance.RoleData.allianceData.allianceID)){
            return;
        }
        
        let key = `${Role.Instance.RoleData.id}_inner_msg_${Role.Instance.RoleData.allianceData.allianceID}`;
        let localMsgData = cc.sys.localStorage.getItem(key);
        if(localMsgData){
            try {
                this._inner_msg_cache = JSON.parse(localMsgData);
                this._removeAllSupportCardMsg(); //这块要剔除支援消息 只是为了考虑到老号 其实也可以不用做检测 
                this.sliceChatMsgList();
            } catch (error) {
                if(!cc.sys.isNative){throw new Error("本地聊天数据解析有误");}
            }
        }
    }

    /**
     
     * Description: 截取数组只留50个
     
     */
    private sliceChatMsgList(){
        let msgLen = this._inner_msg_cache.length
        if(msgLen > this.kMaxSaveLocalMsgCount){
            let startIdx = msgLen - this.kMaxSaveLocalMsgCount;
            this._inner_msg_cache = this._inner_msg_cache.slice(startIdx, msgLen);
        }
    }

    /**
     
     * Description: 存储聊天信息到本地
     
     */
    private saveMsg2Local(){
        if(!Role.Instance.RoleData.allianceData || 
            !isValidObj(Role.Instance.RoleData.allianceData.allianceID)){
            return;
        }
        
        this.sliceChatMsgList();
        this._removeAllSupportCardMsg();
        let key = `${Role.Instance.RoleData.id}_inner_msg_${Role.Instance.RoleData.allianceData.allianceID}`;
        let data = JSON.stringify(this._inner_msg_cache);
        cc.sys.localStorage.setItem(key, data);
    }

    /**
     
     * Description: 剔除所有联盟卡牌支援消息【只用于 将数据保存在本地时 做剔除操作】
     
     */
    private _removeAllSupportCardMsg(){
        let msgLen = this._inner_msg_cache.length;
        for(let idx = msgLen - kOneNumber; idx >= kZeroNumber; idx--){
            if(this._inner_msg_cache[idx].msgType === proto.GlobalMessageType.MemberRequestSupportMsg){
                this._inner_msg_cache.splice(idx, kOneNumber);
            }
        }
    }

    /**
     
     * Description: 获取本地聊天信息的缓存列表
     
     */
    public getLocalMsgCache(){
        return this._inner_msg_cache;
    }

    /**
     
     * Description: 复制服务器给的消息数据
     
     */
    public copyServerMsgList(msgList: proto.IAllianceMsgData[]){
        if(!msgList || msgList.length <= kZeroNumber){return;}

        let curMsgLen = this._inner_msg_cache.length;
        let newMsgLen = msgList.length;
        if(newMsgLen + curMsgLen >= this.kMaxShowNumber){
            for(let msgData of msgList){
                this.pushChatMsg(msgData, false);
            }
        }else{
            this._inner_msg_cache = this._inner_msg_cache.concat(msgList); 
        }
    }

    /**
     
     * Description: 添加新聊天消息
     
     */
    public pushChatMsg(msg: proto.IAllianceMsgData, bCheckRepeat: boolean = true){
        if(bCheckRepeat){
            let bRepeat = this.checkRepeatMsg(msg);
            if(bRepeat){return;}
        }
        
        this._inner_msg_cache.push(msg);
        this.adjustChatMsgNum();
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyUpdateAllianceViewList, true);
    }

    /**
     
     * Description: 调整聊天信息数量
     
     */
    private adjustChatMsgNum(){
        if(this._inner_msg_cache.length >= this.kMaxShowNumber){
            this._inner_msg_cache.shift(); /* 删除数组中第一个元素 */
        }
    }

    /**
     
     * Description: 销毁缓存
     
     */
    public destroy(){
        this.saveMsg2Local();
    }

    /**
     
     * Description: 检测有无重复的聊天信息
     
     */
    public checkRepeatMsg(msg: proto.IAllianceMsgData){
        if(proto.GlobalMessageType.MemberRequestSupportMsg === msg.msgType){
            let idx = this._inner_msg_cache.findIndex(tmpObj=>tmpObj.senderUUID === msg.senderUUID && tmpObj.msgType === msg.msgType);
            if(idx != kNegativeOneNumber){
                this._inner_msg_cache[idx] = msg;
            }

            return idx != kNegativeOneNumber;
        }
        
        let idx = this._inner_msg_cache.findIndex(tmpObj=>tmpObj.senderUUID === msg.senderUUID && tmpObj.utcTime === msg.utcTime);
        if(idx != kNegativeOneNumber){
            this._inner_msg_cache[idx] = msg;
        }
        return idx != kNegativeOneNumber;
    }

    /**
     
     * Description: 获取聊天消息
     
     * @param idx  消息索引
     */
    public getChatMsg(idx: number){
        if(idx < kZeroNumber || idx >= this._inner_msg_cache.length){
            return null;
        }

        return this._inner_msg_cache[idx];
    }

    /**
     
     * Description: 清空缓存数据
     
     */
    public cleanCacheData(){
        this._inner_msg_cache = [];
        this.saveMsg2Local();//被踢出联盟 和 主动退出联盟 还是清空聊天列表 并 IO写吧 防止非正常退出游戏导致之前的联盟聊天记录还在本地
    }

    /**
     
     * Description: 检测支援进度是否已满，已满的就去掉
     
     */
     public checkSupportFill(){
        for(let idx = this._inner_msg_cache.length - kOneNumber; idx > kZeroNumber; idx--){
            if(this._inner_msg_cache[idx].msgType === proto.GlobalMessageType.MemberRequestSupportMsg){
                let supportMsg = this.parseSupportMsg(this._inner_msg_cache[idx]);
                if(supportMsg && supportMsg.CurrentGainCount >= supportMsg.RequestSupportUpperLimit){
                    this._inner_msg_cache.splice(idx, kOneNumber);
                }
            }
        }
    }
    
    /**
     
     * Description: 维护联盟捐卡数据
     
     * @param idx 
     * @param gainCount 
     * @returns 
     */
     public maintainSupportCardInfo(idx: number, gainCount: number, donorInfoList: DonorInfo[]){
        let data = this._inner_msg_cache[idx];
        if(isValidObj(data) && 
            (null !== data.msgType && undefined !== data.msgType) && 
            data.msgType == proto.GlobalMessageType.MemberRequestSupportMsg){
            let supportMsgObj: AllianceSupportChat = null;
            try {
                supportMsgObj = JSON.parse(data.content);
            } catch (error) {
                if(!cc.sys.isNative){throw new Error("联盟支援JSON数据格式错误");}
            }
            
            if(!supportMsgObj){
                if(!cc.sys.isNative){throw new Error("解析联盟支援JSON数据错误");}
                return;
            }

            supportMsgObj.CurrentGainCount = gainCount;
            supportMsgObj.DonorInfoList    = donorInfoList;
            let msgInfo           = new proto.AllianceMsgData();
            msgInfo.msgSenderName = supportMsgObj.ApplicantName;
            msgInfo.content       = JSON.stringify(supportMsgObj);
            msgInfo.msgType       = proto.GlobalMessageType.MemberRequestSupportMsg;
            msgInfo.utcTime       = supportMsgObj.RequestTimestamp;
            msgInfo.senderUUID    = supportMsgObj.ApplicantID;
            this._inner_msg_cache[idx] = msgInfo;
        }
    }

    public parseSupportMsg(msg: proto.IAllianceMsgData){
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
}
