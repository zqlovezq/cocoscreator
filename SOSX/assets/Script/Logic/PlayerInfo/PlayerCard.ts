/*
 * @Descripttion: 玩家卡牌
 */

import { tab } from "../../Table/table_gen";
import { CardNodeState,getCardVisibleLevel, isValidObj, kZeroNumber } from "../Common/CommonInterface";
import CardDetail from "../Main/CardDetail";
import { destroyChessSpineStar, LoadResAsync, setChessEffect, setChessSpineStar, setGray, showPopLayerV2 } from "../Utils/GameUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerCard extends cc.Component {
    @property(cc.Sprite)
    spr_bg: cc.Sprite = null;
    
    @property(cc.Sprite)
    spr_portrait: cc.Sprite = null;

    @property(cc.Sprite)
    spr_frame: cc.Sprite = null;

    @property(cc.Node)
    node_card_level: cc.Node = null;

    @property(cc.Label)
    lbl_lv: cc.Label = null;

    @property(cc.Label)
    lbl_lv_fixed_tip: cc.Label = null;

    @property(cc.Label)
    card_name:cc.Label = null;
    @property(cc.Sprite)
    chess_bg: cc.Sprite = null;
    @property(sp.Skeleton)
    effect_spine: sp.Skeleton = null;
    @property(cc.Sprite)
    effect_frame: cc.Sprite = null;

    private _bSelf: boolean         = false;
    private _card_id: number        = kZeroNumber;
    private _card_level: number     = kZeroNumber;
    private _bHeadIcon: boolean     = true;
    private _bCanTouch: boolean     = true;
    private _callback: Function     = null;
    private _bVisibleLevel: boolean = true;

    onLoad () {
        this.spr_portrait && this.spr_portrait.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    start () {

    }

    public initData(cardId: number, cardLv: number, bSelf: boolean = false, bHeadIcon: boolean = false){
        this._card_id    = cardId;
        this._card_level = cardLv;
        this._bSelf      = bSelf;
        this._bHeadIcon  = bHeadIcon;
        this.setCardBgAndIcon();
        this.setCardLevel();
    }

    /* 设置是否可触摸
     */
    public setCanTouch(bCanTouch: boolean){
        this._bCanTouch = bCanTouch;
    }

    /* 设置等级是否可见
     */
    public setVisibleLevel(bVisible: boolean){
        this._bVisibleLevel = bVisible;
    }
    
    /* 设置回调函数
     */
    public setCallback(cb: Function){
        this._callback = cb;
    }

    /* 置灰图标
     * @param bGray  是否置灰
     */
    public setGray(bGray: boolean){
        setGray(this.spr_frame,    bGray);
        setGray(this.spr_portrait, bGray);
        setGray(this.spr_bg,       bGray);
    }

    /* 设置推荐阵容中卡牌状态
     */
    public setRecommendDeckState(bOwer: boolean){
        this.setGray(!bOwer);
        //this.node_card_level && (this.node_card_level.active = !bOwer);
        let cardData = tab.Data.CardTableByID.getValue(this._card_id);
        let bValid = isValidObj(cardData) && cardData.UnlockRankLevel > kZeroNumber;
        if(bValid){
            this.lbl_lv.string = `${tab.Data.GetKeyValue_ConfigTable().RankTextTip}${cardData.UnlockRankLevel}`;
            this.node_card_level.setScale(1.5);
        }

        this.node_card_level  && (this.node_card_level.active = !bOwer && bValid)
        this.lbl_lv_fixed_tip && (this.lbl_lv_fixed_tip.node.active = false);
    }

    /* 设置卡牌图标和品质
     */
    public async setCardBgAndIcon(){
        let itemData: tab.ItemTable = tab.Data.ItemTableByID.getValue(this._card_id);
        if (!isValidObj(itemData)){
            return;
        }

        let sf = await LoadResAsync(itemData.Icon, cc.SpriteFrame);
        if(sf) {
            if(this.spr_portrait){
                this.spr_portrait.spriteFrame = sf;
            }
            
        }

        let qualityTab = tab.Data.QualityTableByQuality.getValue(itemData.Quality);
        if(isValidObj(qualityTab)){
            let sf = await LoadResAsync(qualityTab.QualityFrame, cc.SpriteFrame);
            if(sf) {
                if(this.spr_frame){
                    this.spr_frame.spriteFrame = sf;
                }
            }

            sf = await LoadResAsync(qualityTab.QualityBG, cc.SpriteFrame);
            if(sf){
                if(this.spr_bg){
                    this.spr_bg.spriteFrame = sf;
                }
            }
            this.chess_bg.setTexture(qualityTab.CardQualityEffectBg);
            this.card_name.string = itemData.Name;
            this.card_name.node.color = new cc.Color().fromHEX(qualityTab.ColorRGB);
            let effectId = qualityTab.CardQualityEffectLighting;
            if (effectId) {
                setChessEffect(effectId,this.effect_spine,this.effect_frame);
                setChessSpineStar({spineId: qualityTab.CardQualityEffectStar,parentNode: this.spr_portrait.node})
            }else{
                this.effect_spine.node.active = false;
                this.effect_frame.node.active = false;
                destroyChessSpineStar(this.spr_portrait.node)
            }
        }
    }

    /* 设置卡牌等级
     */
    private setCardLevel(){
        //this._bHeadIcon && this.node_card_level && (this.node_card_level.active = false);
        if(this.node_card_level){
            if(!this._bVisibleLevel){
                this.node_card_level.active = false;
            }else{
                this.node_card_level.active = !this._bHeadIcon;
            }
        }

        if(this.node_card_level && this.node_card_level.active){
            let finalCardLv = getCardVisibleLevel(this._card_level, this._card_id);
            this.lbl_lv.string = `${finalCardLv}`;
        }
    }

    /* 设置卡牌等级
     */
    private onTouchEnd(event){
        if(this._bHeadIcon || !this._bCanTouch){
            return;
        }
        if(this._callback){
            this._callback(); return;
        }

        event.stopPropagation()
        showPopLayerV2("prefab/CardDetail", CardDetail, false).then(nodeDetail=>{
            nodeDetail.setCardData(this._card_id, CardNodeState.CARD_NODE_STATE_UNOWN);
        });
    }
}

