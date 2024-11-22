/**
 * 
*/
import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import { CARDFROM, CardNodeState, getCardVisibleLevel, isValidObj, kNegativeOneNumber, kNoneString, kOneNumber, kZeroNumber } from "./CommonInterface";
import Role from "./Role";
import { CreateSpine, CreateSpineFromPool, destroyChessSpineStar, LoadResAsync, setChessEffect, setChessSpineStar, setGray, showPopLayerV2, ShowTips } from "../Utils/GameUtils";
import { Net } from "../../Protocol/Net";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import ConfirmAllianceSupportPfb from "../Alliance/ConfirmAllianceSupportPfb";
import ManagerNewCardRedDot from "./ManagerNewCardRedDot";
import CardDetail from "../Main/CardDetail";
import SP_cardNode from "../shop/SP_cardNode";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SmallPortrait extends cc.Component {

    @property(cc.Sprite)
    spr_frame: cc.Sprite = null;

    @property(cc.Sprite)
    spr_portrait: cc.Sprite = null;

    @property(cc.Label)
    lbl_lv: cc.Label = null;

    @property(cc.ProgressBar)
    prog_bar_exp: cc.ProgressBar = null; /* 升级ProgressBar */

    @property(cc.Label)
    lbl_exp: cc.Label = null;

    @property(cc.Sprite)
    spr_up_arrow: cc.Sprite = null;

    @property(cc.Sprite)
    spr_can_receive: cc.Sprite = null;

    @property(cc.Sprite)
    spr_received: cc.Sprite = null;

    @property(cc.Sprite)
    spr_bar_full: cc.Sprite = null;

    @property(cc.Sprite)
    spr_not_up_arrow: cc.Sprite = null;

    @property(cc.Sprite)
    spr_bg: cc.Sprite = null;

    @property(cc.Node)
    spr_new_card: cc.Node = null;

    @property(cc.Sprite)
    spr_lock: cc.Sprite = null;

    @property(cc.Node)
    info_layer: cc.Node = null;

    @property(cc.Sprite)
    chess_bg: cc.Sprite = null;

    @property(sp.Skeleton)
    effect_spine: sp.Skeleton = null;

    @property(cc.Sprite)
    effect_frame: cc.Sprite = null;

    @property(cc.Label)
    card_name: cc.Label = null;

    @property(cc.Node)
    bluechess_bg:cc.Node = null;


    private _card_limitLv           : number = null;
    private _card_uuid              : string = "";  //卡牌UUID
    private _card_state             : CardNodeState;//卡牌当前所处的状态
    private _own_card_piece_count   : number; //拥有的卡牌碎片数量
    private _card_static_id         : number; //卡牌静态id
    private _card_level             : number; //卡牌等级

    private _hideProgressNode   : boolean  = false;
    private _challengeFlag      : boolean  = false
    private _challengeEvilLocked: boolean  = false;
    private _bDevilCard         : boolean  = false;
    protected endCallback       : Function = null; /*  */
    private detailFrom          : CARDFROM = null //弹出详情

    /*  */
    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.showCardDetail, this);

        this.spr_portrait.node.on(cc.Node.EventType.TOUCH_START, this.onTouchCardNode, this);
    }

    /*  */
    start() {
        Net.listenLoaclMessage(LOCAL_MESSAGE.CheckCardLvUp, () => {
            if (this.prog_bar_exp.node.active && this.prog_bar_exp.progress >= 1) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.CanCardLvUp, this.node)
            }
        }, this)
    }

    /*  */
    playExchangeAni(bPlay: boolean = true) {
        let ani = this.node.getComponent(cc.Animation);
        if (ani) {
            bPlay ? ani.play() : ani.stop();
        }

        if (!bPlay) {
            this.node.angle = kZeroNumber;
        }
    }

    /*  */
    public hideProgressNode(bHide: boolean = true) {
        this._hideProgressNode = bHide;
    }

    /*  */
    public setEmptyInfo() {
        this.prog_bar_exp.node.active = false;
        this.lbl_lv.string = kNoneString;
        this.spr_portrait.setTexture("");
    }

    /*  */
    public async initData(uuid: string, showChessBg: boolean,state?: CardNodeState, limitLv?: number) {
        this.changeInfoLayerActive(showChessBg)
        let cardInfo: proto.IItemData = Role.Instance.RoleItemAtrr.getItemByUUID(uuid);
        if (!isValidObj(cardInfo)) {
            return;
        }

        this._card_state = state;
        this._card_uuid = uuid;
        this._card_limitLv = limitLv
        this.resetDataOfUUID(uuid);
    }

    /*  */
    public async resetDataOfUUID(uuid: string) {
        let cardInfo: proto.IItemData = Role.Instance.RoleItemAtrr.getItemByUUID(uuid);
        if (!isValidObj(cardInfo)) {
            return;
        }

        this._card_uuid = uuid;
        this._own_card_piece_count = cardInfo.count;

        this._card_static_id = cardInfo.staticId;
        this._card_level = cardInfo.level;
        let itemTab: tab.ItemTable = tab.Data.ItemTableByID.getValue(cardInfo.staticId);
        if (!isValidObj(itemTab)) {
            return;
        }
        this.card_name.string = itemTab.Name;
        this.refreshPage();
    }

    /*  */
    public async initWithStaticId(id: number, showChessBg: boolean, state?: CardNodeState, level?: number, limitLv?: number) {
        this.changeInfoLayerActive(showChessBg)
        this._card_state = state;
        this._own_card_piece_count = kZeroNumber;
        this._card_level = !isValidObj(level) ? kOneNumber : level;
        isValidObj(limitLv) && (this._card_level = Math.min(this._card_level, limitLv));
        this._card_limitLv = limitLv;
        this.resetDataOfStaticId(id);
    }

    private changeInfoLayerActive(showChessBg:boolean){
        this.info_layer.active = showChessBg;
        this.bluechess_bg.active = !showChessBg;
        if(!showChessBg){
            this.spr_portrait.node.scale = 0.8;
        }

        let starEffect = this.spr_portrait.node.getChildByName("CardQualityEffectStar")
        if (starEffect){
            starEffect.active = showChessBg
        }
    }

    /*  */
    public hideLevelLabel(){
        this.spr_bg.node.active = false;
    }

    /*  */
    public async resetDataOfStaticId(id: number) {
        this._card_static_id = id;
        this._card_uuid = kNoneString;
        // let cardTabData: tab.CardTable = tab.Data.CardTableByID.getValue(this._card_static_id);
        let itemTab: tab.ItemTable = tab.Data.ItemTableByID.getValue(this._card_static_id);
        if (!isValidObj(itemTab)) {
            return;
        }
        this.card_name.string = itemTab.Name;
        this.refreshPage();
    }

    /* 刷新界面 */
    private refreshPage() {
        this.spr_new_card.active = false;
        this.checkIsInTeaming();
        this.setCardBgAndIcon();
        this.setCardLevel();
        this.setCardMaterial();
        this.checkIsNewCard();

        if (this._card_state == CardNodeState.CARD_NODE_STATE_LOCKED) {
            this.setLockSpriteVisible(true);
        }

        if (this._hideProgressNode) {
            this.prog_bar_exp.node.active = false;
            return;
        }

        let cardInfo: proto.IItemData = Role.Instance.RoleItemAtrr.getItemByUUID(this._card_uuid);
        let cardTabData: tab.ItemTable = tab.Data.ItemTableByID.getValue(this._card_static_id);
        if (!isValidObj(cardInfo) && !isValidObj(cardTabData)) {
            return;
        }

        let cardUpLevelTab: tab.CardUpLevelTable = tab.Data.CardUpLevelTableByQuality.getValue(cardTabData.Quality);
        if (isValidObj(cardUpLevelTab)) {
            let tempArr = cardUpLevelTab.Count;
            let idx = kZeroNumber;
            while ((idx = tempArr.indexOf(kZeroNumber, kOneNumber)) > kNegativeOneNumber) {
                if (idx > kNegativeOneNumber) {
                    tempArr.splice(idx, kOneNumber);
                }
            }
            if (isValidObj(cardInfo)/* && cardInfo.level < tempArr.length*/) {
                let bMaxLv = cardInfo.level >= tempArr.length;
                let needUpLvCnt = !bMaxLv ? tempArr[cardInfo.level] : tempArr[tempArr.length - kOneNumber];
                this.setUpLvProgressBar(cardInfo.count, needUpLvCnt, true, bMaxLv);
            } else {
                this.setUpLvProgressBar(kZeroNumber, kZeroNumber, false, false);
            }
        } else {
            this.setUpLvProgressBar(kZeroNumber, kZeroNumber, false, false);
        }
    }

    /* 检测是否是新卡牌 */
    private checkIsNewCard() {
        if (this._card_uuid == kNoneString){
            return
        }
        if (CardNodeState.CARD_NODE_STATE_OWN !== this._card_state) {
            this.checkNewRecommendCard();
            return;
        }
        this.spr_new_card.active = ManagerNewCardRedDot.getInstance().checkIsNewCard(this._card_static_id);
    }

    /* 检测是否是最近要推出的新卡牌 */
    private checkNewRecommendCard() {
        let tabData = tab.Data.NewCardOfStoreTableByID.getValue(this._card_static_id);
        if (isValidObj(tabData)) {
            this.spr_new_card.active = ManagerNewCardRedDot.getInstance().checkIsNewCard(this._card_static_id);
            return;
        }

        this.spr_new_card.active = false;
    }

    /* 设置卡牌的等级 */
    private setCardLevel() {
        if (this._card_state == CardNodeState.CARD_NODE_STATE_UNOWN) {
            this.spr_bg.node.active = false;
            let cardData = tab.Data.CardTableByID.getValue(this._card_static_id);
            if (isValidObj(cardData)) {
                //竞技场等级高于当前解锁等级就不用显示【策划要求】
                if (Role.Instance.RoleGrade >= cardData.UnlockRankLevel) {
                    this.lbl_lv.node.active = false;
                    return;
                }
                this.lbl_lv.node.active = true
                this.lbl_lv.string = `${tab.Data.GetKeyValue_ConfigTable().RankTextTip}${cardData.UnlockRankLevel}`;
            }
            return;
        }

        let visibleCardLv = getCardVisibleLevel(this._card_level, this._card_static_id);
        if (this._card_level > kZeroNumber) {
            if (this._card_limitLv != null && this._card_limitLv != undefined && this._card_limitLv > 0) {
                visibleCardLv = Math.min(this._card_limitLv, visibleCardLv)
            }
            this.lbl_lv.node.active = true
            this.lbl_lv.string = `${visibleCardLv}`;
        }
    }

    /* 设置卡牌升级进度条和提示升级箭头
     * @param ownCount   已经拥有的碎片数
     * @param needCount  升级需要的碎片数
     * @param bShow      是否显示
     * @param bMaxLv     是否满级
     */
    private setUpLvProgressBar(ownCount: number, needCount: number, bShow: boolean, bMaxLv: boolean) {
        ownCount = ownCount > kZeroNumber ? (ownCount - kOneNumber) : ownCount; //必须减掉自身【设计缺陷】
        let bCanUpLv = ownCount >= needCount;
        this.lbl_exp.node.active = bShow;
        this.spr_up_arrow.node.active = bShow && bCanUpLv && !bMaxLv;
        this.prog_bar_exp.node.active = bShow && !bMaxLv;/* zhibo M@20230420 for <已升满的棋子，不显示进度条和进度条上的数字> */
        this.spr_bar_full.node.active = bShow && bCanUpLv;
        this.spr_not_up_arrow.node.active = !bShow && !bCanUpLv;

        if (!bShow) {
            this.playCardUpLvArrowAnim(false);
            return;
        }

        this.lbl_exp.string = `${ownCount}/${needCount}`;
        this.prog_bar_exp.progress = (ownCount / needCount > kOneNumber) ? kOneNumber : ownCount / needCount;
        this.playCardUpLvArrowAnim(bCanUpLv);
    }

    /* 设置卡牌的icon和背景图 */
    async setCardBgAndIcon() {
        let cardTabData: tab.ItemTable = tab.Data.ItemTableByID.getValue(this._card_static_id);
        if (!isValidObj(cardTabData)) {
            return;
        }

        let sf = await LoadResAsync(cardTabData.Icon, cc.SpriteFrame);
        if (sf) {
            if (this.spr_portrait) {
                this.spr_portrait.spriteFrame = sf;
            }
        }

        let qualityTab = tab.Data.QualityTableByQuality.getValue(cardTabData.Quality);
        if (isValidObj(qualityTab)) {
            let sf = await LoadResAsync(qualityTab.QualityFrame, cc.SpriteFrame);
            if (sf) {
                if (this.spr_frame) {
                    this.spr_frame.spriteFrame = sf;
                }
            }

            sf = await LoadResAsync(qualityTab.QualityBG, cc.SpriteFrame);
            if (sf) {
                if (this.spr_bg) {
                    this.spr_bg.spriteFrame = sf;
                }
            }
            sf = await LoadResAsync(qualityTab.CardQualityEffectBg, cc.SpriteFrame);
            if (sf) {
                if (this.chess_bg) {
                    this.chess_bg.spriteFrame = sf;
                }
            }

             /* 创建棋子的背景effect */
            this.card_name?.node?.color = new cc.Color().fromHEX(qualityTab.ColorRGB);
            let effectId = qualityTab.CardQualityEffectLighting;
            if (effectId) {
                setChessEffect(effectId,this.effect_spine,this.effect_frame);
                setChessSpineStar( {spineId: qualityTab.CardQualityEffectStar,parentNode: this.spr_portrait.node,loadComplete:(skel:sp.Skeleton)=>{
                    if (this.node && this.node.isValid){
                        skel.node.active = this.info_layer.active
                    }
                }})
            }else{
                this.effect_spine?.node.active = false;
                this.effect_frame?.node.active = false;
                destroyChessSpineStar(this.spr_portrait.node)
            }
        }
       
    }

    /*  */
    setClickCallback(cb: Function) {
        this.node.on(cc.Node.EventType.TOUCH_END, cb, this);
    }

    /*  */
    public getUUID(): string {
        return this._card_uuid;
    }

    /* 设置卡牌当前材质状态 */
    private setCardMaterial() {
        if (this._card_state == CardNodeState.CARD_NODE_STATE_UNOWN) {
            setGray(this.spr_frame, true);
            setGray(this.spr_portrait, true);
            this.spr_bg.node.active = false; /* zhibo+@20230419 for <策划需求：棋子背包没获得该棋子时（黑白状态），不显示棋子等级的底图> */
            return;
        }
        setGray(this.spr_frame, false);
        setGray(this.spr_portrait, false);
        this.spr_bg.node.active = true;
        setGray(this.spr_bg, false);
    }

    /* 播放卡牌升级的箭头动画
     * @param bPlay 要不要播放
     */
    public playCardUpLvArrowAnim(bPlay: boolean) {
        /*
        if(!this.spr_up_arrow.node.active){
            return;
        }
        
        let animNode = this.spr_up_arrow.getComponent(cc.Animation);
        if(animNode){
            bPlay ? animNode.play("card_arrow_uplv") : animNode.stop("card_arrow_uplv");
        }
        */
    }

    /*  */
    private onTouchCardNode(event: cc.Event.EventTouch) {
        if (CardNodeState.CARD_NODE_STATE_OWN !== this._card_state) {
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyCleanWatchTime);
            return;
        }
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifySelectCardUUID, { uuid: this.getUUID(), bDevilCard: this._bDevilCard });
    }

    public setDetailFrom(from?: CARDFROM){
        this.detailFrom = from
    }

    /* 显示卡牌详情 */
    private showCardDetail() {
        let self = this;
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyCleanWatchTime);

        if (CardNodeState.CARD_NODE_STATE_NONE === this._card_state) {
            return;
        }

        //弹出确认支援框
        if (CardNodeState.CARD_NODE_STATE_SUPPORT === this._card_state) {
            showPopLayerV2("prefab/ConfirmAllianceSupportPfb", ConfirmAllianceSupportPfb).then(nodeDetail => {
                nodeDetail.initData(this._card_uuid);
            });
            return;
        }

        if (CardNodeState.CARD_NODE_STATE_READY_CHANGE == this._card_state ||
            "undefined" == typeof (this._card_state) ||
            null == this._card_state) {
            return;
        }

        let cardTab = tab.Data.CardTableByID.getValue(this._card_static_id);
        let cardItem = Role.Instance.RoleItemAtrr.getItemByUUID(this._card_uuid);
        if (!isValidObj(cardItem) &&
            (!isValidObj(cardTab) || kZeroNumber == cardTab.PortraitSpineID)) {
            showPopLayerV2("prefab/CardDetail", CardDetail, false).then(nodeDetail => {
                nodeDetail.setCardData(self._card_static_id, self._card_state,this.detailFrom?{from:this.detailFrom}:null);
            });
            return;
        }

        let cardId = this._card_uuid.length > kZeroNumber ? this._card_uuid : this._card_static_id;

        if (Role.Instance.IsGuideFinished()) {
            ManagerNewCardRedDot.getInstance().signCardState(this._card_static_id, false);
            this.spr_new_card.active = false;
        }
        showPopLayerV2("prefab/CardDetail", CardDetail, false).then(nodeDetail => {
            nodeDetail.setCardData(self._card_static_id, self._card_state,this.detailFrom?{from:this.detailFrom}:null);
        });
    }

    /* 设置卡牌节点状态 */
    public setCardNodeState(state: CardNodeState) {
        this._card_state = state;
        this.checkIsInTeaming();
    }

    /* 设置小锁是否可见 */
    public setLockSpriteVisible(bShow: boolean) {
        isValidObj(this.spr_lock) && (this.spr_lock.node.active = bShow);
    }

    /* 检测阵容中的卡牌 在阵容上表示已经看过了该卡牌 */
    private checkIsInTeaming() {
        if (CardNodeState.CARD_NODE_STATE_IN_TEAM === this._card_state) {
            ManagerNewCardRedDot.getInstance().signCardState(this._card_static_id, false);
        }
    }
}
