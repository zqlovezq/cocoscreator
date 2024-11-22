/*
 *  特惠礼包奖励模块
 */

import { proto } from "../../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../../Protocol/LocalMessage";
import { Net } from "../../../Protocol/Net";
import { tab } from "../../../Table/table_gen";
import boxtips from "../../Common/boxtips";
import { CardNodeState, isValidObj, k255, kOneNumber, kZeroNumber, SetItemNameColor } from "../../Common/CommonInterface";
import ItemTips from "../../Common/ItemTips";
import CardDetail from "../../Main/CardDetail";
import { getItemIconURL, LoadResAsync, showPopLayerV2 } from "../../Utils/GameUtils";
import { getQualityIconPath } from "../SevenSignIn/ManagerSevenSignInData";

const {ccclass, property} = cc._decorator;

@ccclass
export default class DiscountsGiftBagRewardItem extends cc.Component {

    @property(cc.Label)
    lbl_reward_count: cc.Label = null;

    @property(cc.Label)
    lbl_reward_name: cc.Label = null;

    @property(cc.Sprite)
    spr_item_bg: cc.Sprite = null;

    @property(cc.Sprite)
    spr_item_icon: cc.Sprite = null;

    @property(cc.Sprite)
    spr_frame: cc.Sprite = null;

    private _rewardData: proto.IRewardSimpleInfo;

    start () {

    }

    /*  初始化数据 */
    public initData(rewardData: proto.IRewardSimpleInfo){
        this._rewardData = rewardData;

        this.setRewardCount(rewardData.rewardCount);
        let iconObj = getItemIconURL(rewardData.rewardId, rewardData.rewardType, 0.25);
        if(iconObj){
            this.setRewardName(iconObj.name);
            this.setRewardNameColor(rewardData.rewardType, rewardData.rewardId);
            this.spr_item_icon.setTexture(iconObj.icon);
            this.spr_item_icon.node.scale = iconObj.scale
            this.setItemFrame(getQualityIconPath(rewardData.rewardId, rewardData.rewardType, false));
            this.setItemBG(getQualityIconPath(rewardData.rewardId,    rewardData.rewardType, true));
        }
    }

    /* 设置奖励数量
     * @param count 数量
     */
    private setRewardCount(count: number){
        if(count <= kOneNumber){
            this.lbl_reward_count.node.opacity = kZeroNumber;
            return;
        }

        this.lbl_reward_count.node.opacity = k255;
        this.lbl_reward_count.string       = `${tab.Data.GetKeyValue_ConfigTable().MultiFlag}${count}`;
    }

    /* 设置奖励名称
     */
    private setRewardName(name: string){
        this.lbl_reward_name.string = name;
    }

    /* 设置奖励名称颜色
     */
    private setRewardNameColor(rewardType: tab.RewardType, rewardID: number){
        if(tab.RewardType.RewardType_ItemType === rewardType){
            SetItemNameColor(this.lbl_reward_name, rewardID);
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

    /* 检测关掉boxTips
     */
    private checkClosedBoxTips(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips);
    }

    /* 检测道具提示
     */
    private checkItemTips(){
        let cardTab = tab.Data.CardTableByID.getValue(this._rewardData.rewardId);
        if(isValidObj(cardTab)){
            showPopLayerV2("prefab/CardDetail", CardDetail, false).then(nodeDetail=>{
                nodeDetail.setCardData(this._rewardData.rewardId, CardNodeState.CARD_NODE_STATE_UNOWN);
            });

            return;
        }

        let cfg = tab.Data.ItemTableByID.getValue(this._rewardData.rewardId);
        ItemTips.show(this.spr_item_icon.node, cfg.ID,cfg.Desc);
    }

    /* 点击弹出宝箱Tips
     */
     public onClickTips(){
        this.checkClosedBoxTips();
        switch(this._rewardData.rewardType){
            case tab.RewardType.RewardType_BoxGroupType:
                boxtips.showTips(this._rewardData.rewardId, this.node);
                break;

            case tab.RewardType.RewardType_BoxType:
                boxtips.showTips(kZeroNumber, this.node, this._rewardData.rewardId);
                break;

            case tab.RewardType.RewardType_ItemType:
                this.checkItemTips();
                break;

            default:
                this.checkClosedBoxTips();
                break;
        }
    }
}
