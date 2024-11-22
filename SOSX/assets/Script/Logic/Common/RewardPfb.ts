/*
 * @Descripttion: 奖励模块PFB
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import DrawBox from "../Activity/Draw/DrawBox";
import { getQualityIconPath } from "../Activity/SevenSignIn/ManagerSevenSignInData";
import CardDetail from "../Main/CardDetail";
import Func from "../Utils/Func";
import { destroyChessSpineStar, getItemIconURL, LoadResAsync, setChessEffect, setChessSpineStar, showPopLayerV2, ShowTips } from "../Utils/GameUtils";
import boxtips from "./boxtips";
import { CardNodeState, isValidObj, k255, kOneNumber, kZeroNumber, SetItemNameColor } from "./CommonInterface";
import ItemTips from "./ItemTips";
import Role from "./Role";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RewardPfb extends cc.Component {

    @property(cc.Sprite)
    spr_reward_bg: cc.Sprite = null;

    @property(cc.Sprite)
    spr_reward_icon: cc.Sprite = null;

    @property(cc.Sprite)
    spr_reward_frame: cc.Sprite = null;

    @property(cc.Label)
    lbl_reward_count: cc.Label = null;

    @property(cc.Label)
    lbl_reward_name: cc.Label = null;

    @property({ displayName: "宝箱图标缩放系数" })
    box_icon_scale: number = kZeroNumber;

    @property(cc.Node)
    select_img: cc.Node = null;
    @property(cc.Sprite)
    chess_bg: cc.Sprite = null;
    @property(sp.Skeleton)
    effect_spine: sp.Skeleton = null;
    @property(cc.Sprite)
    effect_frame: cc.Sprite = null;

    @property(cc.Sprite) spr_up_arrow = null

    @property(cc.Node)
    transformedNode: cc.Node = null

    @property(cc.Prefab)
    TransformedPfb: cc.Prefab = null

    private _reward_type: tab.RewardType;
    private _reward_id: number;
    private _reward_count: number;
    private canClick: boolean = true;
    private needRecord: boolean = false;

    /*  */
    public setCanClick(isCan: boolean) {
        this.canClick = isCan;
        this.needRecord = true;
    }

    /* 设置节点的选择状态 */
    public setRewardSelect(isSelect: boolean) {
        this.select_img.active = isSelect;
    }

    /*  */
    public setRewardInfo(rewardID: number, rewardType: tab.RewardType, rewardCount: number, bVisibleName: boolean) {
        this._reward_id = rewardID;
        this._reward_type = rewardType;
        this._reward_count = rewardCount;

        let iconObj = getItemIconURL(rewardID, rewardType, this.box_icon_scale);
        if (iconObj) {
            this.lbl_reward_name.node.active = bVisibleName;
            bVisibleName && this.setRewardName(iconObj.name);
            this.setSpriteFrame(this.spr_reward_icon, iconObj.icon, iconObj.scale);
            this.setItemFrame(getQualityIconPath(rewardID, rewardType, false));
            this.setItemBG(getQualityIconPath(rewardID, rewardType, true));

        }

        bVisibleName && this.setRewardNameColor(rewardID, rewardType);
        this.setRewardCount(rewardCount);

        let itemData: tab.ItemTable = tab.Data.ItemTableByID.getValue(rewardID);
        let qualityTab = tab.Data.QualityTableByQuality.getValue(itemData.Quality);
        this.chess_bg.setTexture(qualityTab.CardQualityEffectBg);
        this.lbl_reward_name.node.color = new cc.Color().fromHEX(qualityTab.ColorRGB);
        let effectId = qualityTab.CardQualityEffectLighting;
        if (effectId) {
            setChessEffect(effectId, this.effect_spine, this.effect_frame)
            setChessSpineStar( { spineId:qualityTab.CardQualityEffectStar,parentNode:this.spr_reward_icon.node})
        } else {
            this.effect_spine.node.active = false;
            this.effect_frame.node.active = false;
            destroyChessSpineStar(this.spr_reward_icon.node)
        }

        this.spr_up_arrow.node.active = Func.checkCardCanUp(rewardID)
    }

    /* 设置道具背景图
     */
    private async setItemBG(icon: string) {
        this.setSpriteFrame(this.spr_reward_bg, icon);
    }

    /* 设置道具品质框
     */
    private setItemFrame(icon: string) {
        this.setSpriteFrame(this.spr_reward_frame, icon);
    }

    /* 设置图标纹理
     */
    private async setSpriteFrame(sprNode: cc.Sprite, icon: string, scale: number = 1) {
        if (!isValidObj(icon)) {
            return;
        }

        let sf = await LoadResAsync(icon, cc.SpriteFrame);
        if (sf) {
            if (sprNode) {
                sprNode.spriteFrame = sf;
                sprNode.node.scale = scale;
            }
        }
    }

    /* 设置奖励数量
     */
    private setRewardCount(count: number) {
        // if (count <= kOneNumber) {
        //     this.lbl_reward_count.node.opacity = kZeroNumber;
        //     return;
        // }

        this.lbl_reward_count.node.opacity = k255;
        this.lbl_reward_count.string = `${tab.Data.GetKeyValue_ConfigTable().MultiFlag}${count}`;
    }

    /* 设置奖励名称
     */
    private setRewardName(name: string) {
        this.lbl_reward_name.string = name;
    }

    /* 设置奖励名称颜色
     */
    private setRewardNameColor(rewardID: number, rewardType: tab.RewardType) {
        if (tab.RewardType.RewardType_ItemType === rewardType) {
            SetItemNameColor(this.lbl_reward_name, rewardID);
        }
    }

    /* 检测关掉boxTips
     */
    private checkClosedBoxTips() {
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips);
    }

    /* 检测道具提示
     */
    private checkItemTips() {
        let cardTab = tab.Data.CardTableByID.getValue(this._reward_id);
        if (isValidObj(cardTab)) {
            showPopLayerV2("prefab/CardDetail", CardDetail, false).then(nodeDetail => {
                nodeDetail.setCardData(this._reward_id, CardNodeState.CARD_NODE_STATE_UNOWN);
            });
            return;
        }
        let itemTabData = tab.Data.ItemTableByID.getValue(this._reward_id);
        ItemTips.show(this.spr_reward_icon.node, itemTabData.ID, itemTabData.Desc);
    }

    /*  */
    public onClick() {
        if (!this.canClick && this.needRecord) {
            ShowTips("只可以选择已拥有的棋子");
            return
        }
        if (this.needRecord) {
            this.setParentAllNotSelect();
            this.setRewardSelect(true);
            DrawBox.setCurSelectCard(this._reward_id, this._reward_count);
        }
        this.checkClosedBoxTips();
        switch (this._reward_type) {
            case tab.RewardType.RewardType_BoxGroupType:
                boxtips.showTips(this._reward_id, this.node);
                break;
            case tab.RewardType.RewardType_BoxType:
                boxtips.showTips(kZeroNumber, this.node, this._reward_id);
                break;
            case tab.RewardType.RewardType_ItemType:
                this.checkItemTips();
                break;
            default:
                this.checkClosedBoxTips();
                break;
        }
    }

    /*  */
    public setParentAllNotSelect() {
        let parent = this.node.parent;
        for (let i = 0; i < parent.children.length; i++) {
            let cell = parent.children[i];
            let ts = cell.getComponent(RewardPfb);
            ts.setRewardSelect(false);
        }
    }


    
    transformedRewards: proto.IRewardSimpleInfo[]
    setTransformedRewards(list: proto.IRewardSimpleInfo[]) {
        this.transformedRewards = list
    }

    async checkTransformReward() {
        if (this.transformedRewards && this.transformedRewards.length > 0 && this.transformedNode) {
            this.transformedNode.destroyAllChildren()
            //处理转换--
            for (let index = 0; index < this.transformedRewards.length - 1; index++) {
                const v = this.transformedRewards[index];
                var newnode = cc.instantiate(this.TransformedPfb)
                this.transformedNode.addChild(newnode)
                newnode.getChildByName("lab").getComponent(cc.Label).string = "x" + v.rewardCount
                let iconObj = getItemIconURL(v.rewardId, v.rewardType, 0.5);
                if (iconObj) {
                    let spr = newnode.getChildByName("spr").getComponent(cc.Sprite)
                    spr.setTexture(iconObj.icon)
                }
            }
            this.setRewardCount(this.transformedRewards[this.transformedRewards.length - 1].rewardCount)
        }
    }
}
