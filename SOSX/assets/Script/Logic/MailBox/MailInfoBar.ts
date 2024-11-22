/*
 *  邮件简略信息Item
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { checkStringIsValid, getTimeDiffString, setAllianceBadge } from "../Alliance/AllianceCommonInterface";
import { isValidObj, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import PlayerCard from "../PlayerInfo/PlayerCard";
import { getItemIconURL, getServerUtcTime, LoadResAsync, setGray, showPopLayerV2 } from "../Utils/GameUtils";
import MailBoxContentPopLayer from "./MailBoxContentPopLayer";
import SimpleItem from "../NewPlayerGiftBag/SimpleItem";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MailInfoBar extends InfiniteCell {

    @property(cc.Label)
    lbl_title: cc.Label = null;

    // @property(PlayerCard)
    // node_player_head: PlayerCard = null;

    // @property(cc.Sprite)
    // spr_alliance_icon: cc.Sprite = null;

    @property(cc.Label)
    lbl_sender_name: cc.Label = null;

    @property(cc.Node)
    node_time: cc.Node = null;
    
    @property(cc.Label)
    lbl_cut_down: cc.Label = null;

    @property(cc.Label)
    lbl_content: cc.Label = null;

    // @property(cc.Button)
    // btn_receive_reward: cc.Button = null;

    // @property(cc.Sprite)
    // spr_item_bg: cc.Sprite = null;

    // @property(cc.Sprite)
    // spr_item_frame: cc.Sprite = null;

    // @property(cc.Sprite)
    // spr_item: cc.Sprite = null;

    // @property(cc.Sprite)
    // spr_item_other: cc.Sprite = null;

    // @property(cc.Label)
    // lbl_reward_count: cc.Label = null;

    @property(cc.Node)
    spr_red_dot: cc.Node = null;

    // @property(cc.Node)
    // node_buff: cc.Node = null;

    // @property(cc.Label)
    // lbl_buff_time: cc.Label = null;

    @property(cc.Sprite)
    spr_undo: cc.Sprite = null;
    
    @property(cc.Sprite)
    spr_already_dispose: cc.Sprite = null;

    @property(cc.Sprite)
    spr_already_dispose_bg: cc.Sprite = null;

    // @property(cc.Node)
    // node_non_reward: cc.Node = null;

    @property(cc.Node)
    attachment_node: cc.Node = null; /* 附件+红点 */

    @property(cc.Node)
    attachment: cc.Node = null; /* 附件 */

    private _mail_info: proto.IMailInfoData;
    
    onLoad () {
        // this.node_buff.active = false;
        // this.btn_receive_reward && (this.btn_receive_reward.node.on("click", ()=>{
        //     let msg = new proto.Msg_ReceiveMailRewardReq();
        //     msg.mailID = this._mail_info.mailID;
        //     Net.Send(proto.Ptl.ReceiveMailRewardReq, msg);
        //     return;
        // }, this));
    }

    start () {}

    public UpdateContent(data: any){
        if(!data){return;}
        
        this.initData(data);
    }

    private initData(data: proto.IMailInfoData){
        this._mail_info = data;
        
        this.setMailTitle(data.mailTitle);
        this.setMailContent(data.mailContent);
        this.setHeadIcon(data.iconID, data.type);
        this.setSenderName(data.senderName);
        this.setMailState(data.mailState)
        this.node_time    && this.setRewardTimeVisible(data.mailState === proto.MailState.MailState_UnReceive);
        this.lbl_cut_down && this.setRewardPastDueTime(data.rewardValidTime);

        let bHaveReward = isValidObj(data.reward);
        this.setAttachmentVisible(bHaveReward); /* zhibo+@20230425 for <显示是否有附件> */
        if(bHaveReward){
            this.setReward(data.reward)
        }
        // this.btn_receive_reward && (this.btn_receive_reward.node.active = bHaveReward);
        // this.btn_receive_reward && bHaveReward && this.setReward(data.reward);
        // this.btn_receive_reward && bHaveReward && this.setRewardCount(data.reward);
        // this.node_non_reward    && (this.node_non_reward.active = !bHaveReward);
        this.spr_red_dot        && this.setRewardRedDot(proto.MailState.MailState_UnReceive === data.mailState || 
                                                    proto.MailState.MailState_UnRead === data.mailState);
    }



    /* 设置邮件附件是否可见 */
    private setAttachmentVisible(bVisible : boolean){
        this.attachment_node.active = bVisible;        
    }

    /* 设置邮件标题
     * @param title  标题
     */
    private setMailTitle(title: string){
        this.lbl_title.string = title;
    }

    /* 设置邮件内容
     * @param content   内容
     */
    private setMailContent(content: string){
        if(content.length > 36){
            let visibleStr = content.slice(kZeroNumber, 36);
            visibleStr = visibleStr.concat(".....");
            this.lbl_content.string = visibleStr;
            return;
        }

        this.lbl_content.string = content;
    }

    /* 设置奖励领取时效性时间节点的可见性 */
    private setRewardTimeVisible(bVisible){
        this.node_time.active = bVisible;
    }

    /* 设置头像
     * @param iconId    头像ID
     * @param mailType  邮件类型
     */
    private setHeadIcon(iconId: number, mailType: proto.MailType){
        //TODO:
        proto.MailType.MailType_GM === mailType // && this.node_player_head && this.node_player_head.initData(iconId, kOneNumber, false, true);
        proto.MailType.MailType_Alliance === mailType //&& setAllianceBadge(this.spr_alliance_icon, iconId);
    }

    /* 设置发送人名称
     * @param name   名称
     */
    private setSenderName(name: string){
        this.lbl_sender_name.string = name;
    }

    /* 设置奖励有效期 */
    private setRewardPastDueTime(leftTime: number){
        let diffVal = leftTime - getServerUtcTime();
        if(diffVal <= kZeroNumber){
            this.node_time.active = false;
            return;
        }
        this.lbl_cut_down.string = getTimeDiffString(diffVal);
    }

    /* 设置奖励
     * @param rewardInfo  奖励物品
     */
    private async setReward(rewardInfo: proto.IRewardSimpleInfo){
        // if(!isValidObj(rewardInfo)){
        //     return;
        // }
        // let iconObj = getItemIconURL(rewardInfo.rewardId, rewardInfo.rewardType);
        // if(!checkStringIsValid(iconObj.icon)){return;}
        // let cardTabData = tab.Data.CardTableByID.getValue(rewardInfo.rewardId);
        // let bCardType   = isValidObj(cardTabData) ? true : false;
        // // let sprItem     = bCardType ? this.spr_item : this.spr_item_other;
        // // this.spr_item.node.active       = bCardType;
        // // this.spr_item_other.node.active = !this.spr_item.node.active;
        // //this.spr_item.node.scale = iconObj.scale;
        // let sf = await LoadResAsync(iconObj.icon, cc.SpriteFrame);
        // if(sf) {
        //     // if(sprItem){
        //     //     sprItem.spriteFrame = sf;
        //     //     sprItem.node.scale  = iconObj.scale;
        //     // }
        // }
        // let itemTabData: tab.ItemTable = tab.Data.ItemTableByID.getValue(rewardInfo.rewardId);
        // if (!isValidObj(itemTabData)){
        //     return;
        // }
        // let qualityTab = tab.Data.QualityTableByQuality.getValue(itemTabData.Quality);
        // if(isValidObj(qualityTab)){
        //     let sf = await LoadResAsync(qualityTab.QualityFrame, cc.SpriteFrame);
        //     // if(sf) {
        //     //     // if(this.spr_item_frame){
        //     //     //     this.spr_item_frame.spriteFrame = sf;
        //     //     // }
        //     // }
        //     sf = await LoadResAsync(qualityTab.QualityBG, cc.SpriteFrame);
        //     if(sf){
        //         // if(this.spr_item_bg){
        //         //     this.spr_item_bg.spriteFrame = sf;
        //         // }
        //     }
        // }
        let com = this.attachment.getComponent(SimpleItem)
        if(isValidObj(com)){
            com.setView(rewardInfo)
        }
    }

    /* 设置奖励数量 */
    private setRewardCount(rewardInfo: proto.IRewardSimpleInfo){
        if(!isValidObj(rewardInfo)){
            return;
        }
        
        let bNoneVisibleCnt = (tab.RewardType.RewardType_BoxType == rewardInfo.rewardType) || 
                            (tab.RewardType.RewardType_BoxGroupType == rewardInfo.rewardType) || 
                            (tab.RewardType.RewardType_BagSpeedUp == rewardInfo.rewardType);
        // !bNoneVisibleCnt && (this.lbl_reward_count.string = `${tab.Data.GetKeyValue_ConfigTable().MultiFlag}${rewardInfo.rewardCount}`);
        // this.lbl_reward_count.node.active = !bNoneVisibleCnt;
        this.setBuffTime(rewardInfo);
    }

    /* 设置当奖励是解锁背包加速时的buff时间 */
    private setBuffTime(rewardInfo: proto.IRewardSimpleInfo){
        if(tab.RewardType.RewardType_BagSpeedUp == rewardInfo.rewardType){
            // this.node_buff.active = true;
            let bagSpdTabData = tab.Data.BagSpeedUpTableByID.getValue(rewardInfo.rewardId)
            if(isValidObj(bagSpdTabData)){
                //this.lbl_buff_time.string = Math.floor(bagSpdTabData.BagSpeedUpTime/3600).toString()
            }
        }
    }

    /* 设置奖励小红点可见性 */
    private setRewardRedDot(bVisible: boolean){
        this.spr_red_dot.active = bVisible;
        // this.spr_item.node.active       && setGray(this.spr_item,       !bVisible);
        // this.spr_item_other.node.active && setGray(this.spr_item_other, !bVisible);
        // setGray(this.spr_item_bg,    !bVisible);
        // setGray(this.spr_item_frame, !bVisible);
    }

    /* 设置邮件状态 */
    private setMailState(state: proto.MailState){
        this.spr_undo.node.active               = (proto.MailState.MailState_UnRead == state || 
                                                    proto.MailState.MailState_UnReceive == state);
        this.spr_already_dispose.node.active    = (proto.MailState.MailState_AlreadyRead == state || 
                                                    proto.MailState.MailState_AlreadyReceive == state);

        this.spr_already_dispose_bg.node.active = this.spr_already_dispose.node.active;
    }

    /*  */
    private sendReadMail(){
        if(this._mail_info.mailState === proto.MailState.MailState_UnRead){
            let msg = new proto.Msg_ReadMailReq();
            msg.mailID = this._mail_info.mailID;
            Net.Send(proto.Ptl.ReadMailReq, msg);
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyMailStateChange, this._mail_info.mailID);
        }
    }

    /*  */
    public onClickOpenMail(){
        showPopLayerV2("prefab/MailBoxContentPopLayer", MailBoxContentPopLayer).then(tipLayer =>{
            tipLayer.initData(this._mail_info);
            this.sendReadMail();
        });
    }
}
