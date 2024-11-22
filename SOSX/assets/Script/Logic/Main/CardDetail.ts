/**
 * 
*/

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { CardAttrType, CardDisplayType, CARDFROM, CardNodeState, CardStrengthOrSynthesisObject, isValidObj, k255, kNegativeOneNumber, kNoneString, kOneNumber, kPlusSignString, kTenNumber, kTwoNumber, kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import CardAttrItem from "../DeckLayer/CardAttrItem";
import JumpShop from "../DeckLayer/JumpShop";
import GuideController from "../Guide/GuideController";
import ShopMain from "../shop/ShopMain";
import { CreateSpine, CreateSpineFromPool, destroyChessSpineStar, handleRichText, LoadResAsync, setChessEffect, setChessSpineStar, setGray, setGrayCustom, showPopLayerV2, ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import { PlaySound } from "../Utils/Sound";
import MainScene from "./MainScene";

const { ccclass, property } = cc._decorator;

/* 
* 按钮点击限制节流
* @param lockTime 阻塞时间
* @param callBackFun 节流回调 多次点击的时候给一个回调函数提示用户不要多次点击 
**/
function ButtonLock(lockTime: number = 0.3, callBackFun?: Function): any {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        let oldFun: Function = descriptor.value;
        let isLock: boolean = false;
        descriptor.value = function (...args: any[]) {
            if (isLock) {
                callBackFun?.()
                return
            }
            isLock = true;

            setTimeout(() => {
                isLock = false
            }, lockTime * 1000);
            oldFun.apply(this, args);
        }
        return descriptor
    }
}

//升级按钮状态
enum UplvBtnState {
    CAN_UP_LEVEL = 1,  //能升级
    GOLD_NOT_ENOUGH,  //金币不足
    PIECE_NOT_ENOUGH, //碎片不足
    MAX_LEVEL,        //满级了
}
interface CardDetailFrom {
    from: CARDFROM,
    count?: number,
    cost?: number,
    index?: number
}
@ccclass
export default class CardDetail extends PopLayer {
    @property(cc.Sprite)
    spr_bg: cc.Sprite = null;

    @property(cc.Label)
    lbl_card_name: cc.Label = null;

    @property(cc.Button)
    btn_uplv: cc.Button = null;

    @property(cc.Button)
    btn_use: cc.Button = null;
    @property(cc.Button)
    btn_buy: cc.Button = null;

    @property(cc.Button)
    btn_back: cc.Button = null;

    @property(cc.Sprite)
    spr_quailty_frame: cc.Sprite = null;

    @property(cc.Sprite)
    spr_portrait_quality: cc.Sprite = null;

    @property(cc.Node)
    node_attr_node: cc.Node = null;

    @property(cc.ProgressBar)
    prog_bar_uplv: cc.ProgressBar = null;

    @property(cc.Sprite)
    spr_uplv_arrow: cc.Sprite = null;

    @property(cc.Sprite)
    spr_not_up_arrow: cc.Sprite = null;

    @property(cc.Label)
    lbl_attr_value: cc.Label = null;

    @property(cc.Prefab)
    pfb_bak_attr_item: cc.Prefab = null;

    @property(cc.Sprite)
    spr_btn_uplv_bg: cc.Sprite = null;

    @property(cc.Sprite)
    spr_gold_icon: cc.Sprite = null;

    @property(cc.Label)
    lbl_cost_gold: cc.Label = null; /*  */

    @property(cc.Node)
    node_bottom_btn_layout: cc.Node = null; /*  */

    @property(cc.Node)
    node_uplv_spine: cc.Node = null; /*  */

    @property(cc.Node)
    node_card_info_layout: cc.Node = null; /*  */

    @property(cc.Sprite)
    spr_bar_full: cc.Sprite = null; /*  */

    @property(cc.Sprite)
    spr_attr_bg: cc.Sprite = null; /*  */

    @property(cc.Node)
    node_synthesis_strength: cc.Node = null; /*  */

    @property(cc.Button)
    btn_strength: cc.Button = null; /*  */

    @property(cc.Button)
    btn_synthesis: cc.Button = null; /*  */

    @property(cc.Label)
    lbl_card_quality: cc.Label = null;

    @property(cc.Label)
    lbl_attr_title: cc.Label = null;

    @property(cc.Sprite)
    spr_synthesis_lv: cc.Sprite = null;

    @property(cc.Label)
    lbl_uplv_tip: cc.Label = null;

    @property(cc.Label)
    lbl_uplv_tip_gray: cc.Label = null;

    @property(cc.Label)
    lbl_card_level: cc.Label = null;

    @property(cc.RichText)
    rich_txt_description: cc.RichText = null;

    @property(cc.RichText)
    rich_txt_next_description: cc.RichText = null;

    @property(cc.Sprite)
    spr_portrait_bg: cc.Sprite = null;

    @property(cc.Node)
    node_card_attr_bar_1: cc.Node = null;

    @property(cc.Node)
    node_card_attr_bar_2: cc.Node = null;

    @property(cc.Node)
    node_card_attr_bar_3: cc.Node = null;

    @property(cc.Node)
    node_card_attr_bar_4: cc.Node = null;

    @property(cc.Node)
    node_attr_info: cc.Node = null;

    @property(cc.Node)
    node_reward_spine: cc.Node = null;

    @property(cc.Node)
    node_end_mark: cc.Node = null;
    @property(cc.Label)
    level_up_label: cc.Label = null;

    @property(cc.Node)
    node_next: cc.Node = null;

    @property(cc.Sprite)
    chess_bg: cc.Sprite = null;
    @property(sp.Skeleton)
    effect_spine: sp.Skeleton = null;
    @property(cc.Sprite)
    effect_frame: cc.Sprite = null;

    @property(cc.Label)
    lbl_critical_damage: cc.Label = null;
    @property(cc.Label)
    chess_num: cc.Label = null;
    @property(cc.Label)
    chess_gold: cc.Label = null;
    @property(cc.Node)
    chess_cost:cc.Node = null;
    @property(cc.Node)
    chess_free:cc.Node = null;

    protected _card_uuid: string = kNoneString; //卡牌UUID
    private _card_static_id: number;                //卡牌静态id
    private _uplv_btn_state: UplvBtnState;         //升级按钮的状态
    private _card_level: number;                 //卡牌等级
    private _card_state: CardNodeState;         //卡牌当前所处的状态
    private _display_type: CardDisplayType;    //显示类型
    private _current_star_uplv: number = kZeroNumber;         //当前强化升星等级
    private _current_synthesis_lv: number = kOneNumber;         //当前合成等级
    private _card_strength_maxlv: number = 0;                 //卡牌升星强化最大等级
    private _card_synthesis_maxlv: number = 0;                //卡牌合成最大等级
    private _card_attr_bar_list: CardAttrItem[] = [];             //卡牌属性条列表
    private _card_extra_level: number = kZeroNumber;    //高级卡牌附加等级数值
    private _card_old_level: number = kZeroNumber;   //卡牌旧等级
    private _card_exp_arr: number[] = [];           //卡牌每一个等级所提供的账号经验加成值
    private _role_old_level: number = kZeroNumber; //角色旧等级
    private _original_bottom_layout_x: number;
    private _sp_uplv_skeleton: sp.Skeleton = null;
    private _bCanPlayUpLvAni: boolean = true;
    private levelUp: boolean = false;
    private fromData: CardDetailFrom = null;
    private _bCanClickBtn: boolean = true;
    onLoad() {
        if (GuideController.Instance.isGuiding()) {
            Net.pushLoaclMessage(LOCAL_MESSAGE.GUIDE_MAIN, 6);
        }
        this.initEvent(); /*  */
        this.intCardAttrList(); /*  */
        this.initConstVar(); /*  */
        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateCardStrengthLv, (param: any) => {
            if (typeof (param as CardStrengthOrSynthesisObject) !== "undefined") {
                this.showNextRichText(this.levelUp || this._current_synthesis_lv > 1);
            }
        }, this);

        //监听卡牌合成等级改变信息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateCardSynthesisLv, (param: any) => {
            if (typeof (param as CardStrengthOrSynthesisObject) !== "undefined") {
                this.showNextRichText(this.levelUp || this._current_synthesis_lv > 1);
            }
        }, this);

        //升级卡牌协议回调监听
        Net.listenProtocol(proto.Ptl.CardLevelUpRsp, (buffer, ptl) => {
            let msg = proto.Msg_CardLevelUpRsp.decode(buffer);
            cc.log("CardLevelUpRsp (卡牌升级) msg: " + JSON.stringify(msg))
            switch (msg.result) {
                case proto.Msg_CardLevelUpRsp.ErrorCode.Succeed:
                    this._card_uuid = msg.cardUuid;
                    this._display_type = CardDisplayType.CARD_DISPLAY_TYPE_LEVELUP;
                    this.node_bottom_btn_layout.setPosition(kZeroNumber, this.node_bottom_btn_layout.getPosition().y);
                    // this.hideAllElementsExcludeSpine();
                    break;

                case proto.Msg_CardLevelUpRsp.ErrorCode.NotEnoughMoney:
                    ShowTips("GoldNotEnough");
                    break;

                case proto.Msg_CardLevelUpRsp.ErrorCode.NotEnoughPiece:
                    ShowTips("PieceNotEnough");
                    break;

                case proto.Msg_CardLevelUpRsp.ErrorCode.MaxLevel:
                    ShowTips("ReachMaxLevel");
                    break;

                case proto.Msg_CardLevelUpRsp.ErrorCode.OperatorFailed:
                    ShowTips("InvalidOperator");
                    break;
            }
        }, this);

        //监听卡牌信息更新
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateItemData, (param: any) => {
            if (CardDisplayType.CARD_DISPLAY_TYPE_LEVELUP != this._display_type || !this._bCanPlayUpLvAni) { return; }
            this._bCanPlayUpLvAni = false;
            /* 卡牌等级提升 */
            this.resetCardData();
            /* 卡牌等级提升 */
            this.refreshUplvInfo(true);
            this.refreshUplvBtn();
            this.refreshCurLvAndNextLv();
            this.statAttrValuePromoteBar();
            this.changeAllAttrDisplayType(this._display_type);
            this.playAttrBarEffectOrder(kZeroNumber);//刷新属性数据
            this.onExitUpLv();
            /* 判断当前是否可以继续升级 */
            this.showNextRichText(this.levelUp);
        }, this);

        //监听跳转信息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_JumpShop, (param: any) => {
            this.setVisible(false);
        }, this);

        //监听设置看板娘
        Net.listenProtocol(proto.Ptl.ChangeIndexCardRsp, async (buffer, ptl) => {
            let msg = proto.Msg_ChangeIndexCardRsp.decode(buffer)
            cc.log("ChangeIndexCardRsp (更换看板娘) msg: " + JSON.stringify(msg))
        }, this);

        //监听卡牌升级动画播放完成消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyCardUpLvAniOver, (param: any) => {
            this._bCanPlayUpLvAni = true;
        }, this);

        Net.listenProtocol(proto.Ptl.BuyShopGoodsRsp, (buffer, ptl) => {
            let msg = proto.Msg_BuyShopGoodsRsp.decode(buffer)
            cc.log("BuyShopGoodsRsp (购买商店商品) msg: " + JSON.stringify(msg))
            if (msg != null) {
                this.onExitGoback();
            }
        }, this)
    }

    start() {

    }

    onDestroy() {
        super.onDestroy()
        this._card_attr_bar_list = [];
        this._card_exp_arr = [];
    }

    /* 初始化各种事件 */
    private initEvent() {
        this.btn_use.node.on("click", this.onClickUseCard, this);
        this.btn_back.node.on("click", this.onClickClose, this);
        this.btn_uplv.node.on("click", this.onClickUpLv, this);
        this.btn_strength.node.on("click", this.onClickStrength, this);
        this.btn_synthesis.node.on("click", this.onClickSynthesis, this);
        this.btn_buy.node.on("click", this.onCLickBuy, this);
    }

    /* 初始化属性条列表 */
    private intCardAttrList() {
        this._card_attr_bar_list.push(this.node_card_attr_bar_1.getComponent(CardAttrItem));
        this._card_attr_bar_list.push(this.node_card_attr_bar_2.getComponent(CardAttrItem));
        this._card_attr_bar_list.push(this.node_card_attr_bar_3.getComponent(CardAttrItem));
        this._card_attr_bar_list.push(this.node_card_attr_bar_4.getComponent(CardAttrItem));

        for (let attr of this._card_attr_bar_list) {
            attr.node.active = false;
        }
    }
    /* 初始化固定变量 */
    private initConstVar() {
        // this._card_strength_maxlv = tab.Data.GetKeyValue_ConfigTable().CardStrenghtMaxLv;
        this._card_synthesis_maxlv = tab.Data.GetKeyValue_ConfigTable().CardSynthesisMaxLv;
        this._original_bottom_layout_x = this.node_bottom_btn_layout.position.x;
    }


    /*  */
    async setCardData(staticId: number,
        state: CardNodeState = CardNodeState.CARD_NODE_STATE_UNOWN,
        fromData?: CardDetailFrom) {
        this._bCanClickBtn = true;
        this._card_static_id = staticId;
        this._card_state = state;
        this._display_type = CardDisplayType.CARD_DISPLAY_TYPE_ATTR;

        // 通过static获取当前棋子是否拥有
        let item = Role.Instance.RoleItemAtrr.getItemByStaticID(staticId);
        if (isValidObj(item)) {
            this._card_uuid = item.id;
        }
        this.initWithStaticId();

        this.createAttrBar();
        this.refreshPage();

        if (fromData) {
            this.fromData = fromData;
            this.switchDetail(fromData);
        }
    }
    private switchDetail(fromData: CardDetailFrom) {
        switch (fromData.from) {
            case CARDFROM.SHOP:
                this.btn_uplv.node.active = false;
                this.btn_use.node.active = false;
                this.btn_buy.node.active = true;
                this.prog_bar_uplv.node.active = false;
                this.chess_num.node.parent.active = true;
                this.btn_strength.node.active = false;
                this.node_next.active = false;
                this.chess_num.string = "x" + fromData.count;
                this.chess_gold.string = String(fromData.cost);
                this.chess_cost.active = fromData.cost>0;
                this.chess_free.active = fromData.cost===0;
                this.levelUp = false;
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateCardStrengthLv,
                    { levelUp: false, curLv: this._card_level });
                break
            case CARDFROM.RECOMMEND:
                this.btn_uplv.node.active = false;
                this.btn_use.node.active = false;
                this.btn_buy.node.active = false;
                break
        }
    }
    /* 调整底部按钮的位置使其居中 */
    private adjustBottomBtnPos() {
        if (CardNodeState.CARD_NODE_STATE_IN_TEAM === this._card_state ||
            CardNodeState.CARD_NODE_STATE_UNOWN === this._card_state ||
            CardNodeState.CARD_NODE_STATE_LOCKED === this._card_state) {
            this.node_bottom_btn_layout.setPosition(kZeroNumber, this.node_bottom_btn_layout.getPosition().y);
            return;
        }

        if (!this.btn_uplv.node.active) {
            this.node_bottom_btn_layout.setPosition(kZeroNumber, this.node_bottom_btn_layout.getPosition().y);
            return;
        }

        if (CardNodeState.CARD_NODE_STATE_OWN === this._card_state && UplvBtnState.MAX_LEVEL === this._uplv_btn_state) {
            this.node_bottom_btn_layout.setPosition(kZeroNumber, this.node_bottom_btn_layout.getPosition().y);
            return;
        }

        this.node_bottom_btn_layout.setPosition(this._original_bottom_layout_x, this.node_bottom_btn_layout.getPosition().y);
    }

    /*  */
    public initWithStaticId() {
        this.resetCardData();
        this._card_old_level = this._card_level;
        this._role_old_level = Role.Instance.RoleData.level;
    }

    /*  */
    public setCardUUID(uuid: string | number) {
        if (typeof uuid == "string") {
            this._card_uuid = uuid;
        }
    }

    /* 创建属性条 */
    createAttrBar() {
        let cardTab = tab.Data.CardTableByID.getValue(this._card_static_id);
        if (isValidObj(cardTab)) {
            let idx = kOneNumber;
            for (let i = idx; i <= 4; i++) {
                /* 创建4个属性词条 */
                let cell = this._card_attr_bar_list[idx - kOneNumber];
                if (isValidObj(cell)) {
                    cell.node.active = true;
                    cell.setCardAttrData(i,
                        CardDisplayType.CARD_DISPLAY_TYPE_ATTR,
                        this._card_state,
                        this._card_static_id,
                        this._card_level,
                        kOneNumber,
                        idx++);
                }
            }
        }//end of isValidObj(cardTab)
    }

    /* 重置卡牌数据【等级， id，数量】*/
    private resetCardData() {
        let item = Role.Instance.RoleItemAtrr.getItemByUUID(this._card_uuid);
        let bValidObj = isValidObj(item);
        this._card_level = bValidObj ? item.level : 1; //为拥有默认显示1级属性
        if (bValidObj) {
            this.updateCriticalDamage(item)
        }
    }

    /* 刷新整体界面 */
    private refreshPage() {
        let itemTab: tab.ItemTable = tab.Data.ItemTableByID.getValue(this._card_static_id);
        if (!isValidObj(itemTab)) {
            return;
        }

        let cardTab: tab.CardTable = tab.Data.CardTableByID.getValue(this._card_static_id);
        if (!isValidObj(cardTab)) {
            return;
        }

        this.showNextRichText(false);
        let cardUpLevelTab = tab.Data.CardUpLevelTableByQuality.getValue(itemTab.Quality);
        this._card_extra_level = isValidObj(cardUpLevelTab) ? cardUpLevelTab.ExtraAddLv : kZeroNumber;
        this._card_level > kZeroNumber && (this.lbl_card_level.string = `${this._card_level + this._card_extra_level}`);
        this.setCardNameAndQuality(itemTab.Name, itemTab.Quality, cardTab.AttrTypeDes, itemTab.Icon);
        this.refreshUplvInfo(false);
        this.refreshUplvBtn();
        this.node_synthesis_strength.active = true;
        this.adjustBottomBtnPos();
    }

    /* 处理一下文本中的特殊文本 */
    showNextRichText(showNext: boolean) {
        this.node_next.active = showNext;
        if (this.levelUp) {
            handleRichText(this._card_static_id, this._card_level, 1, this.rich_txt_description);
            handleRichText(this._card_static_id, this._card_level + 1, this._current_synthesis_lv, this.rich_txt_next_description);
        } else {
            handleRichText(this._card_static_id, this._card_level, 1, this.rich_txt_description);
            handleRichText(this._card_static_id, this._card_level, this._current_synthesis_lv, this.rich_txt_next_description);
        }
    }

    /* 刷新升级页面信息 */
    private refreshUplvInfo(bUplvInfo: boolean = false) {
        let itemTab: tab.ItemTable = tab.Data.ItemTableByID.getValue(this._card_static_id);
        if (!isValidObj(itemTab)) {
            return;
        }

        this.setCardUpLvData(itemTab.Quality, bUplvInfo);
        this.setRewardInfo();
    }

    /* 调整当进度条不可见时  卡牌信息上移 */
    private adjustCardAttrInfoPos() {
        let moveY = this.prog_bar_uplv.node.position.y + this.prog_bar_uplv.node.getContentSize().height;
        this.node_attr_info.setPosition(this.node_attr_info.position.x, moveY);
    }

    /* 设置卡牌升级数据
     * @param cardQuality 卡牌品质
     */
    private setCardUpLvData(cardQuality: number, bUplvInfo: boolean = false) {
        let upLvTab = tab.Data.CardUpLevelTableByQuality.getValue(cardQuality);
        if (isValidObj(upLvTab)) {
            let cardInfo = Role.Instance.RoleItemAtrr.getItemByStaticID(this._card_static_id);
            if (!isValidObj(cardInfo) ||
                this._card_state == CardNodeState.CARD_NODE_STATE_UNOWN) {
                this._uplv_btn_state = UplvBtnState.PIECE_NOT_ENOUGH;
                this.prog_bar_uplv.node.active = false;
                this.adjustCardAttrInfoPos();
                this.setUplvArrowAndBarFullVisible(false, false);
                this.setUseBtnDisplay(false);
                return;
            }

            this.setUseBtnDisplay(true);
            let ownCount = isValidObj(cardInfo) ? cardInfo.count : kOneNumber;
            ownCount = ownCount > kZeroNumber ? (ownCount - kOneNumber) : ownCount; //拥有数量必须减掉自身【先前的设计缺陷】
            let cardLv = isValidObj(cardInfo) ? cardInfo.level : kZeroNumber;
            let tempArr = upLvTab.Count;
            let idx = kZeroNumber;
            while ((idx = tempArr.indexOf(kZeroNumber, kOneNumber)) > kNegativeOneNumber) {
                if (idx > kNegativeOneNumber) {
                    tempArr.splice(idx, kOneNumber);
                }
            }

            this._card_exp_arr = upLvTab.ExpCount;
            idx = kZeroNumber;
            while ((idx = this._card_exp_arr.indexOf(kZeroNumber, kOneNumber)) > kNegativeOneNumber) {
                if (idx > kNegativeOneNumber) {
                    this._card_exp_arr.splice(idx, kOneNumber);
                }
            }

            let costGold = kZeroNumber;
            let molecule = ownCount;
            let denominator = kOneNumber;
            let bReachMaxLv = cardInfo.level >= tempArr.length;

            if (bReachMaxLv) {
                costGold = upLvTab.GoldCount[cardLv - kOneNumber];
                molecule = cardInfo.count - kOneNumber;
                denominator = tempArr[tempArr.length - kOneNumber];
            } else {
                costGold = upLvTab.GoldCount[cardLv];
                denominator = tempArr[cardLv];
                this.lbl_cost_gold.node.color = (Role.Instance.Gold >= costGold) ? cc.Color.WHITE : cc.Color.RED;
            }
            this.setUpLvInfo(bReachMaxLv, costGold, molecule, denominator);
        }
    }

    /* 设置升级相关信息 */
    private setUpLvInfo(bReachMaxLv: boolean, costGold: number, molecule: number, denominator: number) {
        this.lbl_cost_gold.string = `${costGold}`;
        this._uplv_btn_state = bReachMaxLv ?
            UplvBtnState.MAX_LEVEL :
            ((molecule < denominator) ?
                UplvBtnState.PIECE_NOT_ENOUGH :
                ((Role.Instance.Gold < costGold) ?
                    UplvBtnState.GOLD_NOT_ENOUGH :
                    UplvBtnState.CAN_UP_LEVEL));
        this.setProgressExpValue(molecule, denominator);
        this.setProgressBarValue(bReachMaxLv ? kOneNumber : molecule, bReachMaxLv ? kOneNumber : denominator);
        this.setUplvArrowAndBarFullVisible(bReachMaxLv ? true : molecule >= denominator, bReachMaxLv ? true : false);
        this.setUplevelPrograssbarVisible(bReachMaxLv); /* 设置进度条 */
    }

    /* 设置升级进度条是否可见 */
    private setUplevelPrograssbarVisible(bReachMaxLevel: boolean) {
        /* 未获得，或者满级的时候，不显示prograssbar */
        let c1 = bReachMaxLevel; /* 达到最高级 */
        let c2 = (this._card_state === CardNodeState.CARD_NODE_STATE_UNOWN);  /* 尚未获得 */
        if (c1 || c2) {
            this.prog_bar_uplv.node.active = false;
        } else {
            this.prog_bar_uplv.node.active = true;
        }
    }

    /* 设置升级箭头和进度bar可见性
     * @param bVisible 
     * @param bMaxLv  是否满级
     */
    private setUplvArrowAndBarFullVisible(bVisible: boolean, bMaxLv: boolean) {
        this.spr_uplv_arrow.node.active = bVisible && !bMaxLv;
        this.spr_not_up_arrow.node.active = !bVisible && !bMaxLv;
        this.spr_bar_full.node.active = bVisible;
        if (bVisible && !bMaxLv) {
            /* 棋子可升级的时候（钱和卡都满足），默认显示为“升级预览状态”，同时隐藏升级预览按钮 */
            this.levelUp = true;
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateCardStrengthLv,
                { levelUp: true, curLv: this._card_level + 1 });
            this.btn_strength.node.active = false;
        } else {
            this.levelUp = false;
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateCardStrengthLv,
                { levelUp: false, curLv: this._card_level });
            let a = !(this._card_state === CardNodeState.CARD_NODE_STATE_UNOWN); /* 拥有 */
            let b = !bMaxLv; /* 卡片没到最大级 */
            this.btn_strength.node.active = a && b; /* 玩家拥有卡片并且不可以升级的时候=显示，玩家拥有卡片并且可以升级的时候=不显示 如果玩家拥有了但是达到最大级了=不显示，玩家没有拥有=不显示 */
        }
    }

    /* 设置进度条进度 */
    private setProgressBarValue(ownCount: number, totalCount: number) {
        this.prog_bar_uplv.progress = ownCount / totalCount;
    }

    /* 设置进度条数值 */
    private setProgressExpValue(ownCount: number, needCount: number) {
        this.lbl_attr_value.string = `${ownCount}/${needCount}`;
    }

    /* 刷新升级按钮状态 */
    private refreshUplvBtn() {
        if (CardNodeState.CARD_NODE_STATE_UNOWN == this._card_state) {
            this.btn_uplv.node.active = false;
            this.btn_uplv.interactable = false;
            return;
        }

        if (CardDisplayType.CARD_DISPLAY_TYPE_LEVELUP == this._display_type) {
            this.btn_uplv.node.active = (UplvBtnState.CAN_UP_LEVEL == this._uplv_btn_state);
            this.btn_uplv.interactable = (UplvBtnState.CAN_UP_LEVEL == this._uplv_btn_state);
            return;
        }

        switch (this._uplv_btn_state) {
            case UplvBtnState.CAN_UP_LEVEL:
            case UplvBtnState.GOLD_NOT_ENOUGH:
            case UplvBtnState.PIECE_NOT_ENOUGH:
                this.btn_uplv.node.active = true;
                this.btn_uplv.interactable = true;
                break;

            case UplvBtnState.MAX_LEVEL:
                //case UplvBtnState.PIECE_NOT_ENOUGH:
                this.btn_uplv.node.active = false;
                this.btn_uplv.interactable = false;
                break;
        }

        //UplvBtnState.GOLD_NOT_ENOUGH == this._uplv_btn_state ||
        if (UplvBtnState.MAX_LEVEL == this._uplv_btn_state ||
            UplvBtnState.PIECE_NOT_ENOUGH == this._uplv_btn_state) {
            //升级按钮着色器置灰
            //.length > kOneNumber){
            setGrayCustom(this.spr_btn_uplv_bg, true);
            setGray(this.spr_gold_icon, true);
            //}
        } else {
            //if(this._spr_btn_mat_arr.length > kOneNumber){
            setGrayCustom(this.spr_btn_uplv_bg, false);
            setGray(this.spr_gold_icon, false);
            //}
        }

        this.lbl_uplv_tip.node.active = this._uplv_btn_state == UplvBtnState.CAN_UP_LEVEL;
        this.lbl_uplv_tip_gray.node.active = this._uplv_btn_state != UplvBtnState.CAN_UP_LEVEL;
    }

    /* 刷新升级文本 */
    private refreshCurLvAndNextLv() {
        let levelVal = this._card_level + this._card_extra_level;
        this.lbl_card_level.string = `${levelVal}`;
    }

    /* 设置升级奖励信息 */
    private setRewardInfo() {
        if (this._card_level >= this._card_exp_arr.length ||
            this._card_state == CardNodeState.CARD_NODE_STATE_UNOWN) {
            return;
        }
    }

    /* 刷新卡牌升级奖励数据 */
    private refreshCardUplvRewardData() {
        if (this._card_old_level == this._card_level) {
            return;
        }
        let accumulateExpVal = kZeroNumber;
        for (let idx = this._card_old_level; idx < this._card_exp_arr.length; idx++) {
            if (idx >= this._card_level) {
                break;
            }
            accumulateExpVal += this._card_exp_arr[idx];
        }

        this.setRewardInfo();
        this._card_old_level = this._card_level;
        PlaySound("levelUp")
        // this.playUplvRewardInfoAnim(accumulateExpVal);
        this.node_reward_spine.active = true
        let skel = this.node_reward_spine.getComponent(sp.Skeleton)
        skel.setAnimation(0, "idle", false);
        skel.setCompleteListener(() => {
            skel.setCompleteListener(null);
            this.node_reward_spine.active = false;
            this._bCanClickBtn = true;
            // self.updateRoleLevelState();
            this.refreshPage();
        });
    }
    /* 检测能不能升级，不能升级给与提示 */
    private clickUplvTips(): boolean {
        (UplvBtnState.PIECE_NOT_ENOUGH == this._uplv_btn_state) && ShowTips("CardPieceNotEnough");
        (UplvBtnState.GOLD_NOT_ENOUGH == this._uplv_btn_state) && this.doGoldNotEnoughEvent();
        (UplvBtnState.MAX_LEVEL == this._uplv_btn_state) && ShowTips("ReachMaxLevel");
        return (UplvBtnState.CAN_UP_LEVEL != this._uplv_btn_state);
    }

    /* 处理金币不足事件 */
    private doGoldNotEnoughEvent() {
        showPopLayerV2("prefab/JumpShop", JumpShop);
    }

    /* 设置卡牌的名称和品质 */
    private setCardNameAndQuality(cardName: string, cardQuality: number, cardDes: string, icon: string) {
        let qualityTab = tab.Data.QualityTableByQuality.getValue(cardQuality);
        if (!isValidObj(qualityTab)) {
            return;
        }

        this.lbl_card_quality.string = qualityTab.QualityDescrible;
        this.lbl_card_name.string = cardName;
        this.lbl_attr_title.string = cardDes;

        this.setLabelColor(this.lbl_card_name, qualityTab.ColorRGB);
        //this.setLabelColor(this.lbl_card_quality, qualityTab.ColorRGB); //改为显示UI上的颜色

        this.setSprIcon(qualityTab.QualityFrame, this.spr_quailty_frame);
        this.setSprIcon(qualityTab.QualityBG, this.spr_portrait_bg);
        this.setSprIcon(icon, this.spr_portrait_quality);
        /* 设置底座 */
        this.setSprIcon(qualityTab.CardQualityEffectBg, this.chess_bg);
        let effectId = qualityTab.CardQualityEffectLighting;
        if (effectId) {
            setChessEffect(effectId, this.effect_spine, this.effect_frame)
            setChessSpineStar({ spineId: qualityTab.CardQualityEffectStar, parentNode: this.spr_portrait_quality.node })
        } else {
            this.effect_spine.node.active = false;
            this.effect_frame.node.active = false;
            destroyChessSpineStar(this.spr_portrait_quality.node)
        }


    }

    /* 设置图标 */
    private async setSprIcon(icon: string, sprNode: cc.Sprite) {
        let sf = await LoadResAsync(icon, cc.SpriteFrame);
        if (sf) {
            if (sprNode) {
                sprNode.spriteFrame = sf;
            }
        }
    }

    /* 设置文本颜色 */
    private setLabelColor(lblNode: cc.Label, paramColors: string) {
        lblNode.node.color = new cc.Color().fromHEX(paramColors);
    }

    /* 显示正常页面元素
     */
    private showNormalElements() {
        this.btn_back.node.active = true;
        this.spr_attr_bg.node.active = true;
        this.node_card_info_layout.active = true;
        this.node_synthesis_strength.active = true;
        this._display_type = CardDisplayType.CARD_DISPLAY_TYPE_ATTR;
        this.setUseBtnDisplay(true);
        this.changeAllAttrDisplayType(this._display_type);
        this.resumeAllAttrBarVisible();
        this.refreshUplvBtn();
        this.resetStrengthAndSynthesisBtn();
    }

    /* 设置使用按钮可见性
     */
    private setUseBtnDisplay(bDisplay: boolean) {
        if (CardNodeState.CARD_NODE_STATE_OWN != this._card_state) {
            this.btn_use.node.active = false;
            return;
        }

        if (CardDisplayType.CARD_DISPLAY_TYPE_LEVELUP == this._display_type) { return; }

        this.btn_use.node.active = bDisplay;
    }

    /* 切换强化升星按钮状态
     */
    private switchStarUplvBtnState() {
        this._current_star_uplv += kOneNumber;
        // this._current_star_uplv = (this._current_star_uplv > this._card_strength_maxlv) ?
        //     kZeroNumber : this._current_star_uplv;
        let iconData: tab.CardStrengthLvTable = tab.Data.CardStrengthLvTableByLevel.getValue(this._current_star_uplv);
        if (!isValidObj(iconData)) {
            return;
        }
        // this.setSprIcon(iconData.IconPath, this.spr_star_lv);
    }

    /* 切换合成按钮状态
     */
    private switchSynthesisBtnState() {
        this._current_synthesis_lv += kOneNumber;
        this._current_synthesis_lv = (this._current_synthesis_lv > this._card_synthesis_maxlv) ? kOneNumber : this._current_synthesis_lv;
        let iconData: tab.CardStrengthLvTable = tab.Data.CardSynthesisLvTableByLevel.getValue(this._current_synthesis_lv);
        if (!isValidObj(iconData)) {
            return;
        }

        this.setSprIcon(iconData.IconPath, this.spr_synthesis_lv);
    }
    /* 统计属性值有提升的属性条 */
    private statAttrValuePromoteBar() {
        let cardItem = Role.Instance.RoleItemAtrr.getItemByUUID(this._card_uuid);
        let curLv = !isValidObj(cardItem) ? kZeroNumber : cardItem.level;
        for (let attr of this._card_attr_bar_list) {
            attr.statAttrValuePromoteBar(curLv);
        }
    }

    /* 改变所有属性条显示类型
     * @param displayType    显示类型
     */
    private changeAllAttrDisplayType(displayType: CardDisplayType) {
        for (let attrBar of this._card_attr_bar_list) {
            attrBar.changeAttrDisplayType(displayType);
        }
    }

    /* 依次播放属性条特效
     * @param idx 属性条数值下标
     */
    private playAttrBarEffectOrder(idx: number) {
        if (idx >= this._card_attr_bar_list.length) {
            this.btn_back.node.active = true;
            this.node_bottom_btn_layout.active = true;
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyCardUpLvAniOver);
            return;
        }

        this._card_attr_bar_list[idx].refreshAttrData();
        let self = this;
        this.scheduleOnce(() => {
            self.playAttrBarEffectOrder(++idx);
        }, kOneNumber / kTenNumber);
    }

    /* 恢复所有属性条的可见性 */
    private resumeAllAttrBarVisible() {
        for (let attrBar of this._card_attr_bar_list) {
            attrBar.resumeNodeVisible();
        }
    }

    /* 重置合成和升星按钮 */
    private resetStrengthAndSynthesisBtn() {
        if (this._current_star_uplv != kZeroNumber) {
            this._current_star_uplv = kNegativeOneNumber;
            this.switchStarUplvBtnState();
        }

        if (this._current_synthesis_lv != kOneNumber) {
            this._current_synthesis_lv = kZeroNumber;
            this.switchSynthesisBtnState();
        }

        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_ResetCardState, null);
    }
    /*************************************************************************所有按钮点击事件区域 *********************************************************************/

    /* 使用按钮事件 */
    public onClickUseCard() {
        if (this._card_uuid.length > kZeroNumber) {
            if (GuideController.Instance.isGuiding()) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.GUIDE_MAIN, 7);
            }
            MainScene.Instance.selectCard(this._card_uuid);
            this.setVisible(false);
        }
    }
    
    /* 升级按钮事件 */
    @ButtonLock(1, () => { console.log("点击次数过快") })
    public onCLickBuy() {
        /* 只有金币没有钻石 */
        if (Role.Instance.Gold < this.fromData.cost) {
            //只有购买 卡牌和 金币才能进入该界面
            ShowTips("OnlyGoldNotEnough")
            return;
        }

        ShopMain.sBuyType = 0

        let param = new proto.Msg_BuyShopGoodsReq() /* 购买货物 */
        param.index = this.fromData.index;
        param.buyType = proto.ShopGoodsType.Special;
        Net.Send(proto.Ptl.BuyShopGoodsReq, param)
    }

    /* 设置立绘事件 TODO: 这个应该是没有了 */
    public onClickUseLiHui() {
        let msg = new proto.Msg_ChangeIndexCardReq();
        msg.indexCardId = this._card_static_id;
        Net.Send(proto.Ptl.ChangeIndexCardReq, msg);
    }

    /* 关闭按钮事件 */
    public onClickClose() {
        if (this._display_type === CardDisplayType.CARD_DISPLAY_TYPE_ATTR) {
            this.setVisible(false);
            return;
        }

        this.onExitUpLv();
    }

    /* 隐藏所有元素除立绘外事件 */
    public onClickHideUI() {
        this.node_attr_node.active = !this.node_attr_node.active;
        this.node_bottom_btn_layout.active = !this.node_bottom_btn_layout.active;
        this.node_synthesis_strength.active = !this.node_synthesis_strength.active;
        if (this._card_state != CardNodeState.CARD_NODE_STATE_IN_TEAM) {
            this.btn_use.node.active = !this.btn_use.node.active
        } else {
            this.btn_use.node.active = false;
        }
    }

    /* 升级按钮事件 */
    @ButtonLock(1, () => { console.log("点击次数过快") })
    public onClickUpLv() {

        if (this.clickUplvTips()) {
            return;
        }
        this._bCanClickBtn = false;
        let msg = new proto.Msg_CardLevelUpReq();
        msg.cardUuid = this._card_uuid;
        Net.Send(proto.Ptl.CardLevelUpReq, msg);
    }

    /* 退出升级页面 */
    private onExitUpLv() {
        if (CardNodeState.CARD_NODE_STATE_UNOWN == this._card_state) {
            this.setVisible(false);
            return;
        }

        this.adjustBottomBtnPos();
        this.showNormalElements();
        //this.node_uplv_spine.removeAllChildren(true);
        this.node_uplv_spine.opacity = kZeroNumber;
        this.refreshCardUplvRewardData();
    }

    private onExitGoback() {
        this.setVisible(false)
    }

    /* 强化升星 */
    private onClickStrength() {
        if (this._bCanClickBtn) {
            if (!this.levelUp) {
                this.levelUp = true;
                this.level_up_label.string = "已升级"
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateCardStrengthLv, { levelUp: true, curLv: this._card_level + 1 });
            } else {
                this.levelUp = false;
                this.level_up_label.string = "升级"
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateCardStrengthLv, { levelUp: false, curLv: this._card_level });
            }
        }
    }

    /* 合成 */
    private onClickSynthesis() {
        if (this._bCanClickBtn) {
            this.switchSynthesisBtnState();
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateCardSynthesisLv,
                { displayState: CardDisplayType.CARD_DISPLAY_TYPE_SYNTHESIS, curLv: this._current_synthesis_lv });
        }
    }

    /* 升级提升星级 */
    private updateCriticalDamage(item: proto.IItemData) {
        let damageAdd = 0;
        let itemTabData: tab.ItemTable = tab.Data.ItemTableByID.getValue(item.staticId)
        if (itemTabData != null) {
            let qualityTable: tab.QualityTable = tab.Data.QualityTableByQuality.getValue(itemTabData.Quality);
            if (qualityTable != null) {
                damageAdd = qualityTable.CriticalDamageMul
            }
        }
        this.lbl_critical_damage.string = (damageAdd * 100).toFixed()
    }
}
