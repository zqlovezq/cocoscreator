/*
 *  邮件具体内容弹框
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { checkStringIsValid } from "../Alliance/AllianceCommonInterface";
import { isValidObj, kZeroNumber } from "../Common/CommonInterface";
import { getItemIconURL, LoadResAsync, setGray } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import SimpleItem from "../NewPlayerGiftBag/SimpleItem";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MailBoxContentPopLayer extends PopLayer {

    @property(cc.Label)
    lbl_title: cc.Label = null;

    @property(cc.Label)
    lbl_sender_name: cc.Label = null;

    @property(cc.Label)
    lbl_content: cc.Label = null;

    @property(cc.Button)
    btn_closed: cc.Button = null;

    // @property(cc.Button)
    // btn_receive_reward: cc.Button = null;

    // @property(cc.Sprite)
    // spr_item_bg: cc.Sprite = null;

    // @property(cc.Sprite)
    // spr_item_frame: cc.Sprite = null;

    // @property(cc.Sprite)
    // spr_item: cc.Sprite = null;

    // @property(cc.Label)
    // lbl_reward_count: cc.Label = null;

    // @property(cc.Sprite)
    // spr_red_dot: cc.Sprite = null;

    @property(cc.Node)
    attachment_node: cc.Node = null; /* 附件 */

    private _mail_id: string;
    private _mail_state: proto.MailState;
    private _mailRewardInfo: proto.IMailInfoData; /* 邮件的各种信息 */

    onLoad () {
        this.btn_closed.node.on("click", ()=>{this.setVisible(false);}, this);
        // this.btn_receive_reward.node.active && (this.btn_receive_reward.node.on("click", ()=>{
        //     if(proto.MailState.MailState_AlreadyReceive === this._mail_state){
        //         return;
        //     }
        //     let msg    = new proto.Msg_ReceiveMailRewardReq();
        //     msg.mailID = this._mail_id;
        //     Net.Send(proto.Ptl.ReceiveMailRewardReq, msg);
        //     this.setVisible(false);
        //     return;
        // }, this));
    }

    start () {

    }
    
    hideNotifyLocalMsg(){
        //Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyRefreshMailList);
    }

    public initData(data: proto.IMailInfoData){
        this._mail_id    = data.mailID;
        this._mail_state = data.mailState;
        this._mailRewardInfo = data;
        
        // this.btn_receive_reward && (this.btn_receive_reward.node.active = isValidObj(data.reward));
        this.setMailTitle(data.mailTitle);
        this.setMailContent(data.mailContent);
        this.setSenderName(data.senderName);
        this.setReceiveBtnVisible(isValidObj(data.reward) && 
                                    data.reward.rewardId > kZeroNumber && 
                                    data.reward.rewardCount > kZeroNumber);
        // this.spr_red_dot && this.setRewardRedDot(this.btn_receive_reward.node.active && isValidObj(data.reward) && proto.MailState.MailState_UnReceive === data.mailState);
        // this.btn_receive_reward.node.active && this.setReward(data.reward);
        // this.btn_receive_reward.node.active && this.setRewardCount(data.reward.rewardCount);
        let bHaveReward = isValidObj(data.reward);
        this.setAttachmentVisible(bHaveReward); /* zhibo+@20230425 for <显示是否有附件> */
        if(bHaveReward){
            //this.setAttachmentInfo(data.reward.rewardId, data.reward.rewardCount, data.reward.rewardType){
            this.setReward(data.reward)
        }
    }

    // public setAttachmentInfo(itemId: number, count: number, itemType: number){
    //     cc.log("itemId  : "+ itemId)
    //     cc.log("count   : "+ count)
    //     cc.log("itemType: "+ itemType)
    //     if()
    // }

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
        this.lbl_content.string = content;
    }
    
    /* 设置发送人名称
     */
    private setSenderName(name: string){
        this.lbl_sender_name.string = name;
    }
    
    /* 设置奖励领取按钮的可见性
     */
    private setReceiveBtnVisible(bVisible: boolean){
        //this.btn_receive_reward.node.active = bVisible;
    }

    /* 设置奖励
     * @param rewardInfo  奖励物品
     */
    private async setReward(rewardInfo: proto.IRewardSimpleInfo){
        let com = this.attachment_node.getComponent(SimpleItem)
        if(isValidObj(com)){
            let self = this
            com.setClickCallback(()=>{
                cc.log(self._mailRewardInfo);
                // let param8 = new proto.Msg_ReceiveHeroLoadTaskStepRewardReq()
                // param8.scoreID = cfg.ScoreID
                // Net.Send(proto.Ptl.ReceiveHeroLoadTaskStepRewardReq, param8)
                    if(proto.MailState.MailState_AlreadyReceive === this._mail_state){
                        return;
                    }
                    let msg    = new proto.Msg_ReceiveMailRewardReq();
                    msg.mailID = this._mail_id;
                    Net.Send(proto.Ptl.ReceiveMailRewardReq, msg);
                    this.setVisible(false);
            })
            com.setView(rewardInfo)
        }
        // let iconObj = getItemIconURL(rewardInfo.rewardId, rewardInfo.rewardType);
        // if(!checkStringIsValid(iconObj.icon)){
        //     return;
        // }

        //this.spr_item.node.scale = iconObj.scale;
        // let sf = await LoadResAsync(iconObj.icon, cc.SpriteFrame);
        // if(sf) {
        //     if( this.spr_item){
        //         this.spr_item.spriteFrame = sf;
        //     }
        // }

        // let itemTabData: tab.ItemTable = tab.Data.ItemTableByID.getValue(rewardInfo.rewardId);
        // if (!isValidObj(itemTabData)){
        //     return;
        // }

        // let qualityTab = tab.Data.QualityTableByQuality.getValue(itemTabData.Quality);
        // if(isValidObj(qualityTab)){
            // let sf = await LoadResAsync(qualityTab.QualityFrame, cc.SpriteFrame);
            // if(sf) {
            //     if(this.spr_item_frame){
            //         this.spr_item_frame.spriteFrame = sf;
            //     }
            // }

            // sf = await LoadResAsync(qualityTab.QualityBG, cc.SpriteFrame);
            // if(sf){
            //     if(this.spr_item_bg){
            //         this.spr_item_bg.spriteFrame = sf;
            //     }
            // }
        // }
    }

    /* 设置奖励数量
     */
    private setRewardCount(cnt: number){
        //this.lbl_reward_count.string = `${tab.Data.GetKeyValue_ConfigTable().MultiFlag}${cnt}`;
    }

    /* 设置奖励小红点可见性
     */
    private setRewardRedDot(bVisible: boolean){
        // this.spr_red_dot.node.active = bVisible;
        // setGray(this.spr_item,       !bVisible);
        // setGray(this.spr_item_bg,    !bVisible);
        // setGray(this.spr_item_frame, !bVisible);
    }
}
