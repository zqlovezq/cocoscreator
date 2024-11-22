/*
 * @Descripttion: 推荐阵容信息条
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { CARDFROM, CardNodeState, isValidObj, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import CopyTeamSelect from "../Common/CopyTeamSelect";
import Role from "../Common/Role";
import SmallPortrait from "../Common/SmallPortrait";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import InfiniteList from "../InfiniteList/InfiniteList";
import PlayerCard from "../PlayerInfo/PlayerCard";
import { LoadResAsync, showPopLayerV2, ShowTips } from "../Utils/GameUtils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RecommendDeckInfoPfb extends InfiniteCell {

    @property(cc.Label)
    lbl_title: cc.Label = null;

    @property(cc.Label)
    lbl_fit_people: cc.Label = null;

    @property(cc.Label)
    lbl_intro: cc.Label = null;

    @property(cc.Node)
    node_card_1: cc.Node = null;

    @property(cc.Node)
    node_card_2: cc.Node = null;

    @property(cc.Node)
    node_card_3: cc.Node = null;

    @property(cc.Node)
    node_card_4: cc.Node = null;

    @property(cc.Node)
    node_card_5: cc.Node = null;
    @property(cc.Button)
    btn_copy: cc.Button = null;
    @property(cc.Sprite)
    details: cc.Sprite = null;
    @property(cc.Button)
    btn_info: cc.Button = null;

    private _card_group_arr: SmallPortrait[] = [];
    private _card_id_arr: number[] = [];
    private _cpy_card_data: proto.IFightCardData[] = [];
    private _bNonHaveCard: boolean = false;
    private _iIdx: number = 0;

    onLoad() {
        this.btn_copy.node.on("click", this.onClickCpyDeck, this);
        this.btn_info.node.on("click", this.showDetails, this);
        this._card_group_arr.push(this.node_card_1.getComponent(SmallPortrait));
        this._card_group_arr.push(this.node_card_2.getComponent(SmallPortrait));
        this._card_group_arr.push(this.node_card_3.getComponent(SmallPortrait));
        this._card_group_arr.push(this.node_card_4.getComponent(SmallPortrait));
        this._card_group_arr.push(this.node_card_5.getComponent(SmallPortrait));
    }

    start() { }

    onDestroy() { }

    UpdateContent(data: any): void {
        if (!data) { return; }
        this.initData(data);
    }

    private initData(idx: number) {
        let tabData: tab.RecommendDeckTable = tab.Data.RecommendDeckTableByID.getValue(idx);
        if (!tabData) {
            if (!cc.sys.isNative) { throw new Error("推荐阵容读取错误---idx: " + idx) };
            return;
        }
        tabData.LordID = tabData.LordID === 1 ? 1 : 0;
        this.details.node.active = tabData.LordID === 1;
        this._iIdx = idx;
        this._card_id_arr = tabData.CardIDList;
        this._cpy_card_data = [];
        this._bNonHaveCard = false;
        this.setDeckTitle(tabData.DeckName);
        this.setFitPeople(tabData.FitPeople);
        this.setDeckIntro(tabData.DeckIntro);
        this.setCardGroup();

        if (this.details.node.active) {
            LoadResAsync(tabData.Img, cc.SpriteFrame).then((sf) => {
                if (sf && this.details &&  this.details.node.isValid){
                    this.details.spriteFrame = sf
                }
            });
        }
    }

    /**     
     * Description: 设置阵容名称
     */
    private setDeckTitle(title: string) {
        this.lbl_title.string = title;
    }

    /* 设置阵容适用人群
     */
    private setFitPeople(desc: string) {
        this.lbl_fit_people.string = desc;
    }

    /* 设置阵容介绍
     */
    private setDeckIntro(intro: string) {
        this.lbl_intro.string = intro;
    }

    /* 设置阵容卡组
     */
    private setCardGroup() {
        let dataLen = this._card_id_arr.length;
        if (dataLen != this._card_group_arr.length) {
            if (!cc.sys.isNative) { throw new Error("推荐阵容卡组数据错误"); }
            return;
        }

        for (let idx = kZeroNumber; idx < dataLen; idx++) {
            // this.setCardState(this._card_id_arr[idx],  this._card_group_arr[idx], false);
            let info = Role.Instance.RoleItemAtrr.getItemByStaticID(this._card_id_arr[idx]);
            let state = 0;
            if (isValidObj(info)) {
                state = CardNodeState.CARD_NODE_STATE_OWN
            } else {
                state = CardNodeState.CARD_NODE_STATE_UNOWN
            }
            this._card_group_arr[idx].setDetailFrom(CARDFROM.RECOMMEND)
            this._card_group_arr[idx].initWithStaticId(this._card_id_arr[idx], false, state);
            this._card_group_arr[idx].hideLevelLabel();

            // 检查是否拥有特定卡牌
            let cardData = Role.Instance.RoleItemAtrr.getItemByStaticID(this._card_id_arr[idx]);
            if (isValidObj(cardData)) {
                this._cpy_card_data.push({ staticId: cardData.staticId, level: cardData.level })
            } else {
                this._bNonHaveCard = true;
            }
        }
    }
    /* 设置推荐阵容中未拥有时的卡牌状态
     */
    private checkHaveCard2ID(cardID: number, bLord: boolean, nodeCard: PlayerCard) {
        let cardData = Role.Instance.RoleItemAtrr.getItemByStaticID(cardID);
        if (!isValidObj(cardData)) {
            nodeCard.initData(cardID, kOneNumber, false, false);
            nodeCard.setRecommendDeckState(false);
            this._bNonHaveCard = true;
            return false;
        }
        this._cpy_card_data.push({ staticId: cardData.staticId, level: cardData.level })
        nodeCard.initData(cardID, cardData.level, false, false);
        nodeCard.setRecommendDeckState(true);
        return true;
    }

    /* 设置卡牌信息状态
     */
    // private setCardState(cardID: number, nodeCard: SmallPortrait, bLord: boolean){
    // nodeCard.setCanTouch(true);
    //     this.checkHaveCard2ID(cardID, bLord, nodeCard);
    // }

    private onClickCpyDeck() {
        if (this._bNonHaveCard) {
            ShowTips("NonCpyCardTip");
            return;
        }

        let self = this;
        //设置回调函数
        let cb = (deckIndex: number) => {
            let param = new proto.Msg_CopyDeckReq();
            param.talent = null;
            param.DeckData = self._cpy_card_data;
            param.lordData = { "staticId": 20001, "level": 1 };
            param.deckIndex = deckIndex;
            Net.Send(proto.Ptl.CopyDeckReq, param);
        }

        CopyTeamSelect.show(this.btn_copy.node, cb);
    }
    private showDetails() {
        let tabData: tab.RecommendDeckTable = tab.Data.RecommendDeckTableByID.getValue(this._iIdx);
        if (tabData.LordID) {
            tabData.LordID = 0;
        } else {
            tabData.LordID = 1;
        }
        console.log(tabData, this)
        this.node.getComponent(cc.Layout).updateLayout();
        let infinitelist = this.node.parent.parent.getComponent(InfiniteList)
        infinitelist.Reload(true, true);
        let offset = infinitelist.GetScrollPosOfCell(this._iIdx - 1);
        offset.y += 100 * this._iIdx;
        infinitelist.scrollToOffset(offset, 0.5)
    }
}
