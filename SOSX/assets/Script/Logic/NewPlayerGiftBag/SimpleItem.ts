/**
 *  
 */

import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import { getQualityIconPath } from "../Activity/SevenSignIn/ManagerSevenSignInData";
import { kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import EmojiPlayer from "../Common/EmojiPlayer";
import { ICardInfo } from "../PullCard/PullCardResult1";
import Func from "../Utils/Func";
import { getItemIconURL, showItemTips, getCfgValueById, ShowTips, CreateSpineFromPool, LoadResAsync, setChessEffect, CreateSpine, setChessSpineStar, destroyChessSpineStar, getBoxIDAndCfg } from "../Utils/GameUtils";
import Sound from "../Utils/Sound";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SimpleItem extends cc.Component {

    @property(cc.Sprite)
    ItemsBG: cc.Sprite = null

    @property(cc.Sprite)
    ItemsIcon: cc.Sprite = null

    @property(cc.Sprite)
    ItemsFrame: cc.Sprite = null

    @property(cc.Sprite)
    ItemsFrameGold: cc.Sprite = null

    @property(cc.Label)
    ItemsCn: cc.Label = null

    @property(cc.Label)
    ItemName: cc.Label = null

    @property(cc.Node)
    LockNode: cc.Node = null

    @property(cc.Node)
    CanReceiveNode: cc.Node = null

    @property(cc.Node)
    AleadyGet: cc.Node = null

    @property(cc.Sprite)
    spr_new: cc.Sprite = null;

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

    @property
    IconScale: number = 0

    private _award = null;
    private _callbac: Function = null
    private _isShowUp: boolean
    private _selectCallbac: Function = null
    private _emojiNode:cc.Node = null

    onLoad() {
        if (this.spr_new) {
            this.spr_new.node.active = false
        }
        this._emojiNode = new cc.Node()
        this._emojiNode.position = this.ItemsIcon.node.position
        this._emojiNode.setContentSize(cc.size(150,70))
        this.ItemsIcon.node.parent.addChild(this._emojiNode)
    }

    setClickCallback(arg0: () => void) {
        this._callbac = arg0
    }

    setClickSelectCallback(arg0: () => void) {
        this._selectCallbac = arg0
    }

    setLockVisible(bshow: boolean) {
        this.LockNode.active = bshow
    }

    setCanReceiveVisible(bshow: boolean) {
        this.CanReceiveNode.active = bshow
    }

    setAleadyGetVisible(bshow: boolean) {
        this.AleadyGet.active = bshow
    }

    setNameVisible(arg0: boolean) {
        this.ItemName.node.active = arg0
    }

    setSelectVisible(bshow: boolean){
        let nn = this.node.getChildByName("select_node")
        if (nn){
            nn.active = bshow
        }
    }

    setExGrowFund(canreceive: boolean = false, aleadyget: boolean = false, block: boolean = false, showname: boolean = false) {
        this.LockNode.active = block
        this.CanReceiveNode.active = canreceive
        this.AleadyGet.active = aleadyget
        this.ItemName.node.active = showname
    }

    setNewFlagVisible(bvisible: boolean) {
        if (this.spr_new) {
            this.spr_new.node.active = bvisible
        }
    }

    /*  */
    setView_ex(cardInfo: ICardInfo, isShowUp?: boolean) {
        this._isShowUp = isShowUp
        let reward = new proto.RewardSimpleInfo;
        reward.rewardCount = cardInfo.count
        reward.rewardId = cardInfo.id
        reward.rewardType = cardInfo.cardType //tab.RewardType.RewardType_ItemType /* 不知道谁乱写的 */
        this.setView(reward)

        if (this.spr_new) {
            this.spr_new.node.active = cardInfo.isNew
        }
         this.setTransformedRewards(reward.transformedRewards)
        // this.setTransformedRewards([{rewardType:tab.RewardType.RewardType_ItemType,rewardId:1,rewardCount:11},{rewardType:reward.rewardType,rewardId: reward.rewardId,rewardCount:0}])
    }

    /*  */
    setView(award: proto.IRewardSimpleInfo, boxNormalFram: boolean = false) {
        if (!award) {
            return
        }

        this._award = award

        this.ItemsBG.node.active = true
        let iconObj = getItemIconURL(award.rewardId, award.rewardType);
        if (iconObj) {
            if (iconObj.icon) {
                this.ItemsIcon.setTexture(iconObj.icon)
            } else {

            }
        } else {
            cc.log("zhibo+@20230413 TODO: 调查下这是为什么" + JSON.stringify(award))
            return;
        }

        if (this.IconScale != 0) {
            this.ItemsIcon.node.scale = this.IconScale
        } else {
            this.ItemsIcon.node.scale = iconObj.scale
        }

        if (this.ItemsFrameGold) {
            this.ItemsFrameGold.node.active = false
        }
        this.ItemsIcon.node.active = true
        this.ItemsFrame.node.active = true
        this._emojiNode.active = false
       
        if (tab.RewardType.RewardType_BoxType === award.rewardType ||
            tab.RewardType.RewardType_BoxGroupType === award.rewardType) {
            
            let boxTab:tab.BoxTable
            let quality
            if (tab.RewardType.RewardType_BoxType === award.rewardType){
                boxTab = tab.Data.BoxTableByBoxID.getValue(award.rewardId);
            }else{
                boxTab = getBoxIDAndCfg(award.rewardId).boxCfg
            }
            if (boxTab){
                quality = boxTab.Quality
            }

            let qualityTab = tab.Data.QualityTableByQuality.getValue(quality);
            // if (boxNormalFram) {
            //     qualityTab = tab.Data.QualityTableByQuality.getValue(tab.ItemQuality.ItemQuality_White)
            // }
            this.ItemsBG.setTexture(qualityTab.QualityBG);
            this.ItemsFrame.setTexture(qualityTab.QualityFrame);
            this.ItemName.node.color = new cc.Color().fromHEX(qualityTab.ColorRGB);

            this.chess_bg.setTexture(qualityTab.CardQualityEffectBg)
            let effectId = qualityTab.CardQualityEffectLighting;
            if (effectId) {
                setChessEffect(effectId, this.effect_spine, this.effect_frame)
                setChessSpineStar({spineId: qualityTab.CardQualityEffectStar,parentNode: this.ItemsIcon.node})
            } else {
                this.effect_spine.node.active = false;
                this.effect_frame.node.active = false;
                destroyChessSpineStar(this.ItemsIcon.node)
            }

        } else if (tab.RewardType.RewardType_SelectCardBySelf === award.rewardType) {
            if (this.ItemsFrameGold) {
                this.ItemsFrameGold.node.active = true
                this.ItemsFrame.node.active = false
            } else {
                this.ItemsFrame.node.active = true
            }
            let qualityTab = tab.Data.QualityTableByQuality.getValue(tab.ItemQuality.ItemQuality_White);
            this.ItemsBG.setTexture(qualityTab.QualityBG)
            this.chess_bg.setTexture(qualityTab.CardQualityEffectBg)
            let effectId = qualityTab.CardQualityEffectLighting;
            if (effectId) {
                setChessEffect(effectId, this.effect_spine, this.effect_frame)
                setChessSpineStar({spineId: qualityTab.CardQualityEffectStar,parentNode: this.ItemsIcon.node})
            } else {
                this.effect_spine.node.active = false;
                this.effect_frame.node.active = false;
                destroyChessSpineStar(this.ItemsIcon.node)
            }
        } else if (tab.RewardType.RewardType_Emotion == award.rewardType) {
            if (this.ItemsFrameGold) {
                this.ItemsFrameGold.node.active = true
                this.ItemsFrame.node.active = false
            } else {
                this.ItemsFrame.node.active = true
            }
            let emojiData = tab.Data.EmojiTableByID.getValue(award.rewardId);
            
            let qualityTab = tab.Data.QualityTableByQuality.getValue(emojiData.Quality);
            this.ItemsBG.setTexture(qualityTab.QualityBG)
            this.chess_bg.setTexture(qualityTab.CardQualityEffectBg)

            this.effect_spine.node.active = false;
            this.effect_frame.node.active = true;

            this.ItemsIcon.node.active = false
            // this.ItemsIcon.spriteFrame = null
            this._emojiNode.active = true

            let effectId = qualityTab.CardQualityEffectLighting;
            if (effectId) {
                setChessEffect(effectId, this.effect_spine, this.effect_frame)
                setChessSpineStar({spineId: qualityTab.CardQualityEffectStar,parentNode: this.ItemsIcon.node})
            } else {
                this.effect_spine.node.active = false;
                this.effect_frame.node.active = false;
                destroyChessSpineStar(this.ItemsIcon.node)
            }
           
            CreateSpine(emojiData.SpineID).then(spine => {
                if (!cc.isValid(this.node)) {
                    return
                }
                spine.node.scale = kOneNumber;
                this._emojiNode.addChild(spine.node);
                spine.setAnimation(kZeroNumber, "idle", true);
            })
        } else {
            let itemcfg = getCfgValueById(award.rewardId) //tab.Data.ItemTableByID.getValue(award.rewardId) /* zhibo M@20230406 for <> */
            if (itemcfg) {
                let qualityTab = tab.Data.QualityTableByQuality.getValue(itemcfg.Quality || 0)
                this.ItemName.node.color = new cc.Color().fromHEX(qualityTab.ColorRGB);
                this.chess_bg.setTexture(qualityTab.CardQualityEffectBg)
                let effectId = qualityTab.CardQualityEffectLighting;
                if (effectId) {
                    setChessEffect(effectId, this.effect_spine, this.effect_frame)
                    setChessSpineStar({spineId: qualityTab.CardQualityEffectStar,parentNode: this.ItemsIcon.node})
                } else {
                    destroyChessSpineStar(this.ItemsIcon.node)
                    this.effect_spine.node.active = false;
                    this.effect_frame.node.active = false;
                }
                
            } else {
                cc.error("get itemCfg faired for rewardId: ", award.rewardId)
            }
            this.ItemsBG.setTexture(getQualityIconPath(award.rewardId, award.rewardType, true));
            this.ItemsFrame.setTexture(getQualityIconPath(award.rewardId, award.rewardType, false));
        }

        this.ItemsCn.string = tab.Data.GetKeyValue_ConfigTable().MultiFlag + award.rewardCount.toString();
        this.ItemsCn.node.active = true;

        if (!iconObj || !iconObj.name) {
            cc.error("config error (have no name) ==> award.rewardId: " + award.rewardId)
        }
        this.ItemName.string = iconObj.name;

        if (this._isShowUp && Func.isCard(award.rewardId)) {
            this.spr_up_arrow.node.active = Func.checkCardCanUp(award.rewardId)
        }

        this.ItemsIcon.node.parent.off(cc.Node.EventType.TOUCH_END)
        this.ItemsIcon.node.parent.on(cc.Node.EventType.TOUCH_END, () => { this.onClickReceiveReward() }, this)
    }

    /*  */
    public onClickReceiveReward() {
        if (this._callbac) {
            this._callbac()
            return
        }
        // Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips);
        // Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips)

        //if()
        showItemTips(this._award, this.node)
    }

    /*  */
    public onClickSelect() {
        if (this._selectCallbac) {
            this._selectCallbac()
            return
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
                newnode.getChildByName("lab").getComponent(cc.Label).string = tab.Data.GetKeyValue_ConfigTable().MultiFlag + v.rewardCount
                let iconObj = getItemIconURL(v.rewardId, v.rewardType, 0.5);
                if (iconObj) {
                    let spr = newnode.getChildByName("spr").getComponent(cc.Sprite)
                    spr.setTexture(iconObj.icon)
                }
            }

            this.ItemsCn.string = tab.Data.GetKeyValue_ConfigTable().MultiFlag + this.transformedRewards[this.transformedRewards.length - 1].rewardCount.toString();
        }
    }
}
