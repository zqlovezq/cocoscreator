/*
 * @Descripttion: 通用物品类
 */

import { tab } from "../../Table/table_gen";
import CardDetail from "../Main/CardDetail";
import { CreateSpine, CreateSpineFromPool, destroyChessSpineStar, getBoxIDAndCfg, getItemIconURL, LoadResAsync, setChessEffect, setChessSpineStar, showPopLayerV2 } from "../Utils/GameUtils";
import { CardNodeState, isValidObj, kOneNumber, kZeroNumber } from "./CommonInterface";
import { checkIconPathIsValid, ItemState } from "./SeasonRankCommonFunc";

const { ccclass, property } = cc._decorator;

export class itemInfo {
    public itemId   : number = 0;
    public itemCount: number = 0;
}

@ccclass
export default class CommonItem extends cc.Component {
    @property(cc.Sprite)
    spr_bg: cc.Sprite = null;

    @property(cc.Sprite)
    spr_frame: cc.Sprite = null;

    @property(cc.Sprite)
    spr_item_icon: cc.Sprite = null;

    @property(cc.Label)
    lbl_item_count: cc.Label = null;

    @property(cc.Sprite)
    spr_already_received: cc.Sprite = null;

    @property(cc.Sprite)
    spr_lock: cc.Sprite = null;

    @property(cc.Sprite)
    spr_can_receive: cc.Sprite = null;

    @property(cc.Sprite)
    spr_new_flag: cc.Sprite = null;

    @property(cc.Node)
    bossboxnode: cc.Node = null

    @property(cc.Node)
    node_can_receive_ex: cc.Node = null

    @property(cc.Sprite)
    goldframe: cc.Sprite = null

    @property(cc.Node)
    bossboxLightNode: cc.Node = null

    @property(cc.Node)
    buffnode: cc.Node = null

    @property(cc.Label)
    bufftime: cc.Label = null;

    @property(cc.Label)
    lbl_item_name: cc.Label = null;

    @property(cc.Sprite)
    chess_bg: cc.Sprite = null;

    @property(sp.Skeleton)
    effect_spine: sp.Skeleton = null;

    @property(cc.Sprite)
    effect_frame: cc.Sprite = null;

    protected item_static_id = kZeroNumber;
    protected item_count = kZeroNumber;
    protected item_type = kZeroNumber;
    protected item_state = kZeroNumber;
    private _callback: Function = null;
    private _bDisplayRightTopFlag: boolean = true;
    private forceQuality: tab.ItemQuality = -1;
    private itemTipsEnable: boolean = false

    onLoad() {
        // this.node_quality_spine.active = false;
        this.bossboxnode && (this.bossboxnode.active = false);
        this.spr_item_icon.node.addComponent(cc.Button);
        this.spr_item_icon.node.getComponent(cc.Button).node.on("click", this.onClickEvent, this);
    }

    /**
     * @param itemId    物品静态id
     * @param itemType  物品类型
     * @param count     物品数量
     * @param state     物品状态
     * @param bUseDefalutClickEvent  是否使用默认点击事件 
     * @param bDefaultAwardFlag  是否使用默认的可领奖标识
     */
    public initWithStaticId(itemId: number,
        itemType: number = kZeroNumber,
        count: number = kOneNumber,
        state: ItemState = ItemState.NONE,
        bUseDefaultClickEvent: boolean = false,
        bDefaultDisplayFlag: boolean = true,
        bDefaultAwardFlag: boolean = true) {

        this.item_static_id = itemId;
        this.item_count = count;
        this.item_type = itemType;
        this.item_state = state;
        this.lbl_item_count.string = `${tab.Data.GetKeyValue_ConfigTable().MultiFlag}${count}`;
        // this.lbl_item_count.node.active = count > kOneNumber;
        this.lbl_item_count.node.active = true;
        this._bDisplayRightTopFlag = bDefaultDisplayFlag;
        bUseDefaultClickEvent && this.setClickCallback(this.defaultClickEvent.bind(this));

        let iconInfoObj = getItemIconURL(this.item_static_id, this.item_type);
        let bValidIcon = isValidObj(iconInfoObj.icon);
        bValidIcon && this.setItemIcon(iconInfoObj.icon, iconInfoObj.scale);
        this.setState(state, bDefaultAwardFlag);
        this.setItemFrameAndBg();

        this.buffnode.active = tab.RewardType.RewardType_BagSpeedUp == this.item_type;
        //如果是buff
        if (tab.RewardType.RewardType_BagSpeedUp == this.item_type) {
            let cfg = tab.Data.BagSpeedUpTableByID.getValue(this.item_static_id);
            isValidObj(cfg) && (this.bufftime.string = Math.floor(cfg.BagSpeedUpTime / 3600).toString());
        }
    }

    /* 设置道具名称 */
    public setItemNameVisible() {
        if (!this.lbl_item_name) {
            return;
        }

        let itemTab: tab.ItemTable = tab.Data.ItemTableByID.getValue(this.item_static_id);
        if (isValidObj(itemTab)) {
            this.lbl_item_name.string = itemTab.Name;
            this.lbl_item_name.node.active = true;
        }
    }

    /* 设置新卡牌标志 */
    public setNewCardFlagDisplay() {
        this.spr_new_flag.node.active = true;
    }

    /* 是否是新卡牌 */
    public getIsNewCard() {
        return this.spr_new_flag.node.active;
    }

    /* 展示卡牌品质节点 */
    public showQualityEffect() {
        // this.node_quality_spine.active = true;
    }

    /* 隐藏数量节点 */
    public hideCount() {
        this.lbl_item_count.node.active = false;
    }

    /* 设定品质框可见性 */
    public setQualityFrameVisible(bshow: boolean) {
        this.spr_frame.node.active = bshow
    }

    /* 设置固定的品质框 */
    public setQualityFrame(quality: tab.ItemQuality) {
        this.forceQuality = quality;
    }

    /**
     * @param bshow 设置首领宝箱的部分可看见
     */
    setBossBoxNode(bShow: boolean) {
        this.bossboxnode && (this.bossboxnode.active = bShow);
    }

    /* 设置特殊的金色方形品质框 */
    setBossBoxGoldFrame(bShow: boolean) {
        this.goldframe && (this.goldframe.node.active = bShow);
    }

    /* 设置特殊的蓝色背景 */
    setBuleBackground(bshow: boolean) {
        // this.bossbox_specialbulebg && (this.bossbox_specialbulebg.node.active = bshow)
    }

    /* 设置首领宝箱的通行证光效可见 */
    setBossBoxPassLight(bShow: boolean) {
        this.bossboxLightNode && (this.bossboxLightNode.active = bShow);
    }

    /* 设置物品icon */
    private async setItemIcon(icon: string, scale: number) {
        if (!checkIconPathIsValid(icon)) { return; }

        let sf = await LoadResAsync(icon, cc.SpriteFrame)
        if (sf) {
            this.spr_item_icon.spriteFrame = sf;
            this.spr_item_icon.node.scale = scale;
        }
    }

    /* 设置物品品质框和品质背景 */
    private async setItemFrameAndBg() {
        switch (this.item_type) {
            case tab.RewardType.RewardType_ItemType:
                this.setItemData();
                break;

            case tab.RewardType.RewardType_BoxType:
                this.setBoxData();

                break;

            case tab.RewardType.RewardType_BoxGroupType:
                this.setBoxData();
                break;

            default:
                this.setItemData();
                break;
        }
    }

    /*  */
    private setItemData() {
        let itemData: tab.ItemTable = tab.Data.ItemTableByID.getValue(this.item_static_id);
        if (!isValidObj(itemData)) {
            return;
        }

        //this.node_quality_spine.active = true;
        let curQuality = itemData.Quality;
        (this.forceQuality >= kZeroNumber) && (curQuality = this.forceQuality);

        let qualityTab = tab.Data.QualityTableByQuality.getValue(curQuality);
        if (isValidObj(qualityTab)) {
            this.setItemFrame(qualityTab.QualityFrame);
            this.setItemBG(qualityTab.QualityBG);
            this.setCardQualityEffect(qualityTab);
        }
    }

    /* 设置卡牌品质spine
     * @param effectBg        品质特效背景图
     * @param effectLighting  品质特效闪光图
     */
    private async setCardQualityEffect(quality: tab.QualityTable) {
        this.playQualityEffectAnim();
        let sf = await LoadResAsync(quality.CardQualityEffectBg, cc.SpriteFrame);
        if (sf) {
            if (this.chess_bg) {
                this.chess_bg.spriteFrame = sf;
            }
        }
        let effectId = quality.CardQualityEffectLighting;
        if (effectId) {
            setChessEffect(effectId,this.effect_spine,this.effect_frame);
            setChessSpineStar( {pos:cc.v2(0,0),spineId:quality.CardQualityEffectStar,parentNode:this.spr_item_icon.node,loadComplete:(skel:sp.Skeleton)=>{
            }})
        } else {
            this.effect_spine.node.active = false;
            this.effect_frame.node.active = false;
            destroyChessSpineStar(this.spr_item_icon.node)
        }
    }

    /* 播放品质特效动画 */
    private playQualityEffectAnim() {
        let anim = this.getComponent(cc.Animation);
        if (anim) {
            anim.play("rotation_light");
        }
    }

    /*  */
    private setBoxData() {
        let itemData: tab.BoxTable = tab.Data.BoxTableByBoxID.getValue(this.item_static_id);
        if (!isValidObj(itemData)) {
            return;
        }
        let curQuality = itemData.Quality;
        let qualityTab = tab.Data.QualityTableByQuality.getValue(curQuality);
        // if(this.forceQuality > kZeroNumber){           
        if (isValidObj(qualityTab)) {
            this.setItemFrame(qualityTab.QualityFrame);
            this.setItemBG(qualityTab.QualityBG);
            this.setCardQualityEffect(qualityTab);
        }
        // }else{
        //     //this.spr_frame.spriteFrame = null;
        // }
    }

    /* 设置物品品质框 */
    private async setItemFrame(icon: string) {
        if (!isValidObj(icon)) { return; }
        let sf = await LoadResAsync(icon, cc.SpriteFrame);
        if (sf) {
            if (this.spr_frame) {
                this.spr_frame.spriteFrame = sf;
            }
        }
    }

    /* 设置物品背景图 */
    private async setItemBG(icon: string) {
        if (!isValidObj(icon)) { return; }
        let sf = await LoadResAsync(icon, cc.SpriteFrame);
        if (sf) {
            if (this.spr_bg) {
                this.spr_bg.spriteFrame = sf;
            }
        }
    }

    /*  */
    public getItemStaticId() {
        return this.item_static_id;
    }

    /*  */
    public getItemCount() {
        return this.item_count;
    }

    /*  */
    public getItemType() {
        return this.item_type;
    }

    /*  */
    public getItemState() {
        return this.item_state;
    }

    /*  */
    public setClickCallback(cb: Function) {
        this._callback = cb;
    }

    /*  */
    public setState(state: ItemState, bDefaultAwardFlag: boolean = true) {
        if (!this._bDisplayRightTopFlag) {
            this.spr_already_received.node.active = false;
            this.spr_can_receive.node.active = false;
            this.node_can_receive_ex && (this.node_can_receive_ex.active = false);
            this.spr_lock.node.active = false;
            return;
        }

        this.spr_already_received.node.active = (ItemState.ALREADY_RECEIVE == state);
        this.spr_can_receive.node.active = (ItemState.CAN_RECEIVE == state && bDefaultAwardFlag);
        this.node_can_receive_ex && (this.node_can_receive_ex.active = (ItemState.CAN_RECEIVE == state && bDefaultAwardFlag == false));
        this.spr_lock.node.active = (ItemState.LOCK == state);
        //this.lbl_item_count.node.active       = (ItemState.NONE != state);
    }

    /* 默认点击事件 */
    private defaultClickEvent() {
        let cardTab = tab.Data.CardTableByID.getValue(this.item_static_id);
        if (!isValidObj(cardTab)) {
            return;
        }

        showPopLayerV2("prefab/CardDetail", CardDetail, false).then(nodeDetail => {
            nodeDetail.setCardData(this.item_static_id, CardNodeState.CARD_NODE_STATE_UNOWN);
        });
    }

    /*  */
    private onClickEvent() {
        if (this._callback) { this._callback(); }
    }

}
