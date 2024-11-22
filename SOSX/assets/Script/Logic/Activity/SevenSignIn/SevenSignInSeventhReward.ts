/**
 *  第7天奖励模块
 */

import { proto } from "../../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../../Protocol/LocalMessage";
import { Net } from "../../../Protocol/Net";
import { tab } from "../../../Table/table_gen";
import {isValidObj, k255, kOneNumber, kSevenNumber, kZeroNumber } from "../../Common/CommonInterface";
import ItemTip from "../../Common/ItemTips";
import { checkIconPathIsValid } from "../../Common/SeasonRankCommonFunc";
import { getItemIconURL, LoadResAsync, showItemTips, ShowTips } from "../../Utils/GameUtils";
import { getQualityIconPath, ManagerSevenSignInData } from "./ManagerSevenSignInData";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SevenSignInSeventhReward extends cc.Component {

    @property(cc.Sprite)
    spr_item_bg: cc.Sprite = null;

    @property(cc.Sprite)
    spr_item_icon: cc.Sprite = null;

    @property(cc.Sprite)
    spr_frame: cc.Sprite = null;

    @property(cc.Label)
    lbl_item_count: cc.Label = null;

    @property(cc.Label)
    lbl_item_name: cc.Label = null;

    @property(cc.Sprite)
    spr_can_receive_bg: cc.Sprite = null;

    @property(cc.Sprite)
    spr_already_received_flag: cc.Sprite = null;
    
    private _day: number = kSevenNumber;
    private _info_data: proto.ISevenDaySignInData;
    private _item_desc: string;

    onLoad () {
        Net.listenProtocol(proto.Ptl.ReceiveSevenDaySignInRewardRsp, (buffer, ptl)=>{
            let msg = proto.Msg_ReceiveSevenDaySignInRewardRsp.decode(buffer);
            cc.log("ReceiveSevenDaySignInRewardRsp(领取七日登录某天奖励) : msg " + JSON.stringify(msg))
            if (msg && proto.Msg_ReceiveSevenDaySignInRewardRsp.ErrorCode.Succeed == msg.result && msg.day == this._day){  
                this._info_data.bReceived = true; //领取过了
                this.refreshPage();         
                return;
            }
        }, this);
    }

    start () {

    }

    public initData(day: number, info: proto.ISevenDaySignInData){
        this._day       = day;
        this._info_data = info;

        let iconObj = getItemIconURL(info.rewardInfo.rewardId, info.rewardInfo.rewardType);
        this._item_desc = iconObj.desc;
        this.setItemIcon(iconObj.icon, iconObj.scale);
        this.setItemCount(info.rewardInfo.rewardCount);
        this.setItemName(iconObj.name);
        this.setBgState();
        this.setItemBG(getQualityIconPath(info.rewardInfo.rewardId, info.rewardInfo.rewardType, true));
        this.setItemFrame(getQualityIconPath(info.rewardInfo.rewardId, info.rewardInfo.rewardType, false));
    }

    private refreshPage(){
        this.setBgState();
    }

    /* 设置背景状态
     */
    private setBgState(){
        let bOpen = ManagerSevenSignInData.getInstance().getCurrLoginDay() >= this._day;
        this.spr_can_receive_bg.node.opacity        = (bOpen && !this._info_data.bReceived) ? k255 : kZeroNumber;
        this.spr_already_received_flag.node.opacity = this._info_data.bReceived ? k255 : kZeroNumber;
    }

    /* 设置物品ICON
     */
     private async setItemIcon(icon: string, scale: number){
        if(!checkIconPathIsValid(icon)){return;}

        let sf = await LoadResAsync(icon, cc.SpriteFrame)
        if(sf) {
            this.spr_item_icon.spriteFrame = sf;
            this.spr_item_icon.node.scale = scale;
        }
    }

    /* 设置物品背景图
     */
     private async setItemBG(icon: string){
        if(!isValidObj(icon)){return;}
        let sf = await LoadResAsync(icon, cc.SpriteFrame);
        if(sf) {
            if(this.spr_item_bg){
                this.spr_item_bg.spriteFrame = sf;
            }
        }
    }

    /* 设置物品品质框
     */
    private async setItemFrame(icon: string){
        if(!isValidObj(icon)){return;}
        let sf = await LoadResAsync(icon, cc.SpriteFrame);
        if(sf) {
            if(this.spr_frame){
                this.spr_frame.spriteFrame = sf;
            }
        }
    }
    
    /* 设置物品数量
     */
    private setItemCount(count: number){
        if(count <= kOneNumber){
            this.lbl_item_count.node.opacity = kZeroNumber;
            return;
        }
        
        this.lbl_item_count.string = `${tab.Data.GetKeyValue_ConfigTable().MultiFlag}${count}`;
    }

    /* 设置物品名称
     */
    private setItemName(name: string){
        this.lbl_item_name.string = name;
    }

    public onClickDay(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips);
        if(ManagerSevenSignInData.getInstance().getCurrLoginDay() < this._day){
            ShowTips("TodayCannotReceiveReward");
            return;
        }

        if(this._info_data.bReceived){
            ShowTips("AleadyGet");
            return;
        }

        this.onClickReceiveReward();
    }

    public onClickReceiveReward(){
        if(!this._info_data.bReceived && ManagerSevenSignInData.getInstance().getCurrLoginDay() >= this._day){
            this.requestReceiveReward();
            return;
        }

        //ItemTip.show(this.spr_item_icon.node, this._item_desc);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips);
        
        //showItemTips(this._info_data.rewardInfo, this.spr_item_icon.node, true);
        showItemTips(this._info_data.rewardInfo, this.spr_item_icon.node);
    }

    private requestReceiveReward(){
        let param = new proto.Msg_ReceiveSevenDaySignInRewardReq();
        param.day = this._day;
        Net.Send(proto.Ptl.ReceiveSevenDaySignInRewardReq, param);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips);
    }
}
