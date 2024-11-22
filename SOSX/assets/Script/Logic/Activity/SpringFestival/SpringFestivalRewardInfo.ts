/*
 *  春节签到奖励模块
 */

import { proto } from "../../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../../Protocol/LocalMessage";
import { Net } from "../../../Protocol/Net";
import { tab } from "../../../Table/table_gen";
import { k255, kOneNumber, kTenNumber, kZeroNumber } from "../../Common/CommonInterface";
import { checkIconPathIsValid } from "../../Common/SeasonRankCommonFunc";
import { getItemIconURL, LoadResAsync, showItemTips, ShowTips } from "../../Utils/GameUtils";
import { getQualityIconPath } from "../SevenSignIn/ManagerSevenSignInData";
import { ManagerSpringFestivalData } from "./ManagerSpringFestivalData";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SpringFestivalRewardInfo extends cc.Component {

    @property(cc.Label)
    lbl_day_number: cc.Label = null;
    
    @property(cc.Label)
    lbl_item_count: cc.Label = null;

    @property(cc.Sprite)
    spr_normal_bg: cc.Sprite = null;

    @property(cc.Sprite)
    spr_frame: cc.Sprite = null;

    @property(cc.Sprite)
    spr_item_bg: cc.Sprite = null;

    @property(cc.Sprite)
    spr_item_icon: cc.Sprite = null;

    @property(cc.Sprite)
    spr_already_received_flag: cc.Sprite = null;

    @property(cc.Sprite)
    spr_can_receive_anim: cc.Sprite = null;

    @property(cc.Sprite)
    spr_select_frame: cc.Sprite = null;

    private _day: number = kOneNumber;
    private _info_data: proto.ISpringFestivalInfoData;
    private _bVisibleCount: boolean = true;

    onLoad () {

        this._info_data = {bReceived: false, bDoubleReward: false, rewardInfo: null};
        //监听刷新选中框
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyRefreshSelectFrame, (param: any)=>{
            let day = (param as number);
            if(day != this._day){
                this.refreshSelectState();
            }
        }, this);

        //监听领取奖励消息
        Net.listenProtocol(proto.Ptl.ReceiveSpringFestivalRewardRsp, (buffer, ptl) =>{
            let msg = proto.Msg_ReceiveSpringFestivalRewardRsp.decode(buffer);
            cc.log("ReceiveSpringFestivalRewardRsp(监听领取奖励消息) : msg " + JSON.stringify(msg))
            if (msg && proto.Msg_ReceiveSpringFestivalRewardRsp.ErrorCode.Succeed == msg.result && msg.day == this._day){  
                this._info_data.bReceived = true; //领取过了
                this.refreshPage();         
                return;
            }
        }, this);

        //监听指定某天选中消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyDefaultSelectDay, (param: any)=>{
            let day = ManagerSpringFestivalData.getInstance().getCurrLoginDay();
            if(day == this._day){
                this.refreshPage();
                this.onClickSelectReward();
            }
        }, this);
    }

    start () {

    }

    public initData(info: proto.ISpringFestivalInfoData, day: number){
        this._day       = day;
        this._info_data = info;
        let iconObj = getItemIconURL(info.rewardInfo.rewardId, info.rewardInfo.rewardType);
        this._bVisibleCount = info.rewardInfo.rewardCount > kOneNumber;

        this.setItemCount(info.rewardInfo.rewardCount);
        this.setDay();
        this.setBgState();
        this.setItemIcon(iconObj.icon, iconObj.scale);
        this.setItemBG(getQualityIconPath(info.rewardInfo.rewardId, info.rewardInfo.rewardType, true, true));
        this.setItemFrame(getQualityIconPath(info.rewardInfo.rewardId, info.rewardInfo.rewardType, false, true));
    }
    
    /* 刷新界面
     */
    private refreshPage(){
        this.setBgState();
    }

    /* 设置物品数量
     */
    private setItemCount(count: number){
        if(count <= kOneNumber){
            return;
        }
        
        this.lbl_item_count.string = `${tab.Data.GetKeyValue_ConfigTable().MultiFlag}${count}`;
    }

    /* 设置天数
     */
    private async setDay(){
        let visibleDay = this._day < kTenNumber ? `${0}${this._day}` : `${this._day}`;
        this.lbl_day_number.string = visibleDay;
    }

    /* 设置背景状态
     */
    private setBgState(){
        let bOpen = ManagerSpringFestivalData.getInstance().getCurrLoginDay() >= this._day;
        this.spr_can_receive_anim.node.active       = bOpen && !this._info_data.bReceived;
        //this.spr_normal_bg.node.opacity             = !this.spr_can_receive_anim.node.active ? k255 : kZeroNumber;
        this.spr_already_received_flag.node.active  = this._info_data.bReceived;
        this.lbl_item_count.node.opacity            = (this._bVisibleCount && (bOpen || !this._info_data.bReceived)) ? k255 : kZeroNumber;
    }

    /* 刷新选中框
     */
    private refreshSelectState(){
        if(k255 == this.spr_select_frame.node.opacity){
            this.spr_select_frame.node.opacity = kZeroNumber;
            this.spr_normal_bg.node.opacity    = k255;
        }
    }

    /* 设置物品背景
     */
    private async setItemBG(icon: string){
        this.setDetailIcon(icon, this.spr_item_bg, kOneNumber);
    }

    /* 设置物品品质框
     */
    private async setItemFrame(icon: string){
        this.setDetailIcon(icon, this.spr_frame, kOneNumber);
    }

    /* 设置物品ICON
     */
    private async setItemIcon(icon: string, scale: number){
        this.setDetailIcon(icon, this.spr_item_icon, scale);
    }

    /* 具体设置icon纹理的接口
     */
    private async setDetailIcon(icon: string, sprNode: cc.Sprite, scale: number){
        if(!checkIconPathIsValid(icon)){return;}

        let sf = await LoadResAsync(icon, cc.SpriteFrame)
        if(sf) {
            sprNode.spriteFrame = sf;
            sprNode.node.scale  = scale;
        }
    }

    /* 道具提示
     */
    public onClickItemTips(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips);
        if(ManagerSpringFestivalData.getInstance().getCurrLoginDay() >= this._day && !this._info_data.bReceived){
            //ShowTips("TodayCannotReceiveReward");
            this.onClickSelectReward();
            return;
        }

        // if(this._info_data.bReceived){
        //    // ShowTips("AleadyGet");
        //     return;
        // }
        
        showItemTips(this._info_data.rewardInfo, this.node, true);
    }

    /* 选择奖励
     */
    public onClickSelectReward(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips);
            
        if(ManagerSpringFestivalData.getInstance().getCurrLoginDay() < this._day){
            ShowTips("TodayCannotReceiveReward");
            return;
        }
        
        this.spr_select_frame.node.opacity = k255;
        this.spr_normal_bg.node.opacity    = kZeroNumber;
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyRefreshSelectFrame, this._day);
    }
}
