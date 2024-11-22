/**
 *  "棋盒"UI
*/

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import charactor_four from "../Common/charactor_four";
import Role from "../Common/Role";
import { getCardSortTypeTxt, sortCardUUIDVec, sortCardStaticIDVec, isValidObj, kOneNumber, kZeroNumber, CardNodeState, kNegativeOneNumber, sortDevilCard, ITransCardInfo, kNoneString, kSevenNumber } from "../Common/CommonInterface";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import SmallPortrait from "../Common/SmallPortrait";
import { AmendmentEventLocation, getLocationInResolution, showPopLayer, showPopLayerV2, ShowTips } from "../Utils/GameUtils";
import DevilHeadPanel from "../Common/DevilHeadPanel";
import Waiting from "../Utils/Waiting";
import { WaitingTag } from "../Utils/WaitingTag";
import { IMessageResult } from "../Common/ReddotManager";
import RecommendDeckLayer from "./RecommendDeckLayer";
import MainScene from "../Main/MainScene";
import ConfirmTips from "../Common/ConfirmTips";
import { FightLoader } from "../Fight/FightLoader";
import CopyTeamSelect from "../Common/CopyTeamSelect";
import LoginData from "../Login/LoginData";
import Analytics, { CAEvtID, CAEvtName } from "../../../Update/Analytics";
import EmotionStoreLayer from "../EmotionStore/EmotionStoreLayer";
import ManagerNewEmotionRedDot from "../EmotionStore/ManagerNewEmotionRedDot";
import ManagerNewBattleMap from "../BattleMapStore/ManagerNewBattleMap";
import BattleMapStore from "../BattleMapStore/BattleMapStore";
import { DefaultEnterPageType, FightFromWhichLayer } from "../Alliance/AllianceCommonInterface";
import GuideController from "../Guide/GuideController";
import ConfirmShareCards from "../Chat/ConfirmShareCards";
import ManagerLocalChatMsg from "../Chat/ManagerLocalChatMsg";

export enum TeamIndex {
    TEAM_INDEX_ONE = 0,
    TEAM_INDEX_TWO,
    TEAM_INDEX_THREE,
    TEAM_INDEX_FOUR,
    TEAM_INDEX_FIVE
};

export enum ToggleType {
    ToggleType_Card = 0,
    ToggleType_Recommend = 1,
    ToggleType_Emotion = 2,
    ToggleType_FightSkin = 3,
}

const kCardGroup: number = 4;

const { ccclass, property } = cc._decorator;

@ccclass
export default class DeckLayer extends cc.Component {

    @property(cc.Node)
    layout_own_area: cc.Node = null;

    @property(cc.Node)
    layout_unown_area: cc.Node = null;

    @property(cc.Label)
    lbl_own_card_num: cc.Label = null;

    @property(cc.Label)
    lbl_unown_card_num: cc.Label = null;

    @property(cc.Prefab)
    pfb_card_group: cc.Prefab = null;

    @property(cc.Node)
    node_use: cc.Node = null;

    // @property(cc.Node)
    // trainingBtn: cc.Node = null

    @property(cc.Node)
    scroll_view: cc.Node = null;

    @property(cc.Prefab)
    pfb_select_card: cc.Prefab = null;

    @property(cc.Toggle)
    toggle_team_1: cc.Toggle = null;

    @property(cc.Toggle)
    toggle_team_2: cc.Toggle = null;

    @property(cc.Toggle)
    toggle_team_3: cc.Toggle = null;

    @property(cc.Toggle)
    toggle_team_4: cc.Toggle = null;

    @property(cc.Toggle)
    toggle_team_5: cc.Toggle = null;

    @property(cc.Node)
    node_own: cc.Node = null;

    @property(cc.Node)
    node_unown: cc.Node = null;

    @property(cc.Button)
    btn_sort: cc.Button = null;

    @property(cc.Label)
    lbl_sort_title: cc.Label = null;

    @property(cc.Node)
    node_portrait_area: cc.Node = null;

    @property(cc.Node)
    node_temp: cc.Node = null;

    // @property(cc.Button)
    // btn_training_hall: cc.Button = null;

    @property(cc.Button)
    btn_copy_card: cc.Button = null;

    @property(cc.Toggle)
    toggle_hero_card: cc.Toggle = null;

    @property(cc.Toggle)
    toggle_recommend: cc.Toggle = null;

    @property(cc.Toggle)
    toggle_emotion: cc.Toggle = null;

    @property(cc.Sprite)
    spr_select_arrow_up: cc.Sprite = null;

    @property(cc.Sprite)
    spr_select_arrow_down: cc.Sprite = null;

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

    @property(cc.Node)
    spr_new_card: cc.Node = null;

    @property(cc.Node)
    node_team: cc.Node = null;

    @property(RecommendDeckLayer)
    node_recommend_layer: RecommendDeckLayer = null;

    @property(cc.Node)
    node_recommend_reddot: cc.Node = null;

    @property(EmotionStoreLayer)
    node_emotion_layer: EmotionStoreLayer = null;

    @property(cc.Node)
    node_emotion_red_dot: cc.Node = null;

    @property(cc.Label)
    lbl_critical_damage_add: cc.Label = null;

    private _moveCardNode: cc.Node = null;
    private _teamMembersArry: SmallPortrait[] = [];
    private _teamIndex: number = kZeroNumber;
    private _bTouch: boolean = false;
    private _card_sort_type: number = tab.SortType.SortType_CardLevelIncrease;
    private _own_card_vec: string[] = [];
    private _unown_card_vec: number[] = [];
    private _total_can_used_cards: number = kZeroNumber;
    private _bInit: boolean = false;
    private _devil_card_vec: number[] = [];
    private _devil_card_node_map: tab.Dictionary<number, charactor_four>;
    private _own_card_node_map: tab.Dictionary<number, charactor_four>;
    private _toggle_type: ToggleType;// = ToggleType.ToggleType_Card;

    public static decklayerTeamIndex: number = -kNegativeOneNumber;
    private _touchTimes: number = kZeroNumber;
    private _select_card_uuid: string;
    private _bSelectCardIsDevil: boolean = false;
    private _touchCardPos: cc.Vec2;
    private _bCanWatchTime: boolean = true;
    private _bTouchCardArea: boolean = false;
    private _bCallbackEndedEvent: boolean = false;
    private _bInMoving: boolean = false;
    private _bVisibleRecommendRedDot: boolean = true;

    /*  */
    onLoad() {
        this._own_card_node_map = new tab.Dictionary<number, charactor_four>();
        this._devil_card_node_map = new tab.Dictionary<number, charactor_four>();
        this.spr_new_card.active = false;
        this.node_recommend_layer.node.active = false;
        this.node_emotion_layer.node.active = false;
        this.node_emotion_red_dot.active = false;

        this.showCardPage(false);
        this._card_sort_type = tab.SortType.SortType_CardQualityDecrease;

        this._teamMembersArry.push(this.node_card_1.getComponent(SmallPortrait));
        this._teamMembersArry.push(this.node_card_2.getComponent(SmallPortrait));
        this._teamMembersArry.push(this.node_card_3.getComponent(SmallPortrait));
        this._teamMembersArry.push(this.node_card_4.getComponent(SmallPortrait));
        this._teamMembersArry.push(this.node_card_5.getComponent(SmallPortrait));

        this.toggle_team_1.node.on("toggle", this.onSelectTeam1Click, this);
        this.toggle_team_2.node.on("toggle", this.onSelectTeam2Click, this);
        this.toggle_team_3.node.on("toggle", this.onSelectTeam3Click, this);
        this.toggle_team_4.node.on("toggle", this.onSelectTeam4Click, this);
        this.toggle_team_5.node.on("toggle", this.onSelectTeam5Click, this);

        this.toggle_hero_card.node.on("toggle", this.onHeroCard, this);
        this.toggle_recommend.node.on("toggle", this.onRecommendToggle, this);
        this.toggle_emotion.node.on("toggle", this.onEmotion, this);

        this.btn_sort.node.on("click", this.onSortClick, this);
        this.btn_copy_card.node.on("click", this.onClickCopyTeam, this);

        this.scroll_view.on("scroll-began", () => {
            this._bCanWatchTime = false;
            this._touchTimes = kZeroNumber;
            this.unschedule(this.listenWatchTime);
        }, this);

        this.scroll_view.on("scrolling", () => {
            this._bCanWatchTime = false;
            this._touchTimes = kZeroNumber;
        }, this);

        this.scroll_view.on("scroll-ended", () => {
            this._bCanWatchTime = true;
        }, this);

        //注册触摸事件 onTouchBegan 
        let bCapture = Role.Instance.IsPassGuideBranch(10004);   //执行新手引导期间，不能捕获，否则会打断引导end事件                                                                                                   
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this, bCapture);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancelled, this);

        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_Reconnect, (param) => {

            this.initTeam(this._teamIndex);
            this.updateCriticalDamage();

        }, this);

        //监听卡牌信息更新
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateItemData, (param: any) => {
            this.initTeam(this._teamIndex);
            this.updateCriticalDamage();
        }, this);

        //监听新卡牌
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NewCard, (param: any) => {
            let retData = (param as IMessageResult);
            this.spr_new_card.active = retData ? retData.bVisible : false;
        }, this);

        //监听新表情
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NewEmotion, (param: any) => {
            let retData = (param as IMessageResult);
            this.node_emotion_red_dot.active = retData ? retData.bVisible : false;
        }, this);

        //监听恢复卡库默认页面消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_ResumeDeckLayerDefault, (param: any) => {
            if (Role.Instance.IsGuideFinished() && !GuideController.Instance.isGuiding()) {
                this.resetWatchTime();
                this.cleanTouchInfo();
            }
        }, this);

        //监听通知选中的卡牌UUID消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifySelectCardUUID, (param: any) => {
            if (!Role.Instance.IsGuideFinished() || !this.node.active || !this.node.activeInHierarchy) { return; }

            let retData = (param as ITransCardInfo);
            this._select_card_uuid = retData ? retData.uuid : kNoneString;
            this._bSelectCardIsDevil = retData && retData.bDevilCard;
            this._bTouchCardArea = true;
        }, this);

        //监听通知清除秒表消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyCleanWatchTime, (param: any) => {
            if (!Role.Instance.IsGuideFinished() || !this.node.active || !this.node.activeInHierarchy) { return; }
            this.resetWatchTime();
        }, this);

        //监听通知卡牌超过移动区域消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyOverMoveArea, (param: any) => {
            if (!Role.Instance.IsGuideFinished() || !this.node.active || !this.node.activeInHierarchy) { return; }
            this.cleanTouchInfo();
            this.resetWatchTime();
        }, this);

        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_ResetDeckLayer, (param: any) => {
            if (this._toggle_type !== ToggleType.ToggleType_Card) {
                this.toggle_hero_card.isChecked = true;
                this.onHeroCard(this.toggle_hero_card);
            }
        }, this);

        //监听分享卡组消息
        Net.listenProtocol(proto.Ptl.ChatSendShareCardsRsp, (buffer, ptl) => {
            let msg = proto.Msg_ChatSendShareCardsRsp.decode(buffer);
            cc.log("ChatSendShareCardsRsp (发送卡组分享聊天消息) msg: " + JSON.stringify(msg));
            if (msg && msg.result === proto.Msg_ChatSendShareCardsRsp.ErrorCode.Succeed) {
                ShowTips("ChatShareCardSuccessTip");
                proto.ChatChannelType.WorldChannel == msg.channel && (ManagerLocalChatMsg.ChatCD = msg.cd);
                return;
            }

            proto.Msg_ChatSendShareCardsRsp.ErrorCode.CD === msg.result && ShowTips("ChatCD");
        }, this);

        this.initMoveCardNode(); //初始化拖动的卡牌节点
        this.checkNewEmotion(); //检查下有无新表情
    }

    /*  */
    onEnable() {
        this.initData();
    }

    /*  */
    start() {
        //this.initData();
        if (Role.Instance.RoleGrade < kOneNumber) {
            // this.trainingBtn.active = false
        }
        this._moveCardNode && this.node.addChild(this._moveCardNode);
        this._moveCardNode && (this._moveCardNode.on("position-changed", () => {
            this._bInMoving = true;
        }, this));

        this.checkRecommendRedDot();
    }

    /*  */
    onDestroy() {
        this._teamMembersArry = [];
        this._own_card_vec = [];
        this._unown_card_vec = [];
        this.clearCardGroups(this._own_card_node_map);
        this.clearCardGroups(this._devil_card_node_map);
    }

    /* 清除卡组map */
    private clearCardGroups(cardGroupsMap: tab.Dictionary<number, charactor_four>) {
        if (cardGroupsMap !== undefined) {
            for (let elem of cardGroupsMap.values()) {
                if (elem && elem.node) {
                    elem.node.removeFromParent();
                    elem.node.destroy();
                }
            }
            cardGroupsMap.clear();
        }
    }

    /* 初始化拖动的卡牌头像 */
    private initMoveCardNode() {
        this._moveCardNode = cc.instantiate(this.pfb_select_card);
        if (this._moveCardNode) {

            this._moveCardNode.active = false;
        }
    }

    /*  */
    public initData() {
        if (this._bInit) {
            return;
        }

        this._teamIndex = Role.Instance.DeckIndex;
        this.initTeam(this._teamIndex);
        this._bInit = true;
        this.onHeroCard(this.toggle_hero_card);
        this.updateCriticalDamage();
    }

    /*  */
    public refreshUITeam() {
        //监听切换阵容编号
        Net.unlistenProtocol(proto.Ptl.ChangeTeamIndexRsp);
        Net.listenProtocol(proto.Ptl.ChangeTeamIndexRsp, (buffer, ptl) => {
            Waiting.Hide(WaitingTag.ChangeTeamIndex)
            let msg = proto.Msg_ChangeTeamIndexRsp.decode(buffer);
            cc.log("ChangeTeamIndexRsp (切换阵容) msg: " + JSON.stringify(msg));
            switch (msg.result) {
                case proto.Msg_ChangeTeamIndexRsp.ErrorCode.Succeed:
                    Role.Instance.DeckIndex = this._teamIndex;
                    break;

                case proto.Msg_ChangeTeamIndexRsp.ErrorCode.TeamIndexError:

                    break;
            }
        }, this);
        this._teamIndex = Role.Instance.DeckIndex;
        this.initTeam(this._teamIndex);
        this.switchTeamIndex();
    }

    /* 切换阵容标签按钮 */
    private switchTeamIndex() {
        this.toggle_team_1.isChecked = (TeamIndex.TEAM_INDEX_ONE === this._teamIndex);
        this.toggle_team_2.isChecked = (TeamIndex.TEAM_INDEX_TWO === this._teamIndex);
        this.toggle_team_3.isChecked = (TeamIndex.TEAM_INDEX_THREE === this._teamIndex);
        this.toggle_team_4.isChecked = (TeamIndex.TEAM_INDEX_FOUR === this._teamIndex);
        this.toggle_team_5.isChecked = (TeamIndex.TEAM_INDEX_FIVE === this._teamIndex);
    }

    /* 设置已拥有和未拥有卡牌数量文本 */
    private setAllCardCount() {
        let team: proto.IDeckData = Role.Instance.RoleData.decks[this._teamIndex];
        let membersCount = team.deckItems.length;
        let ownCardCount = this._own_card_vec.length + membersCount;
        /*if(isValidObj(Role.Instance.RoleItemAtrr.getItemByType(tab.ItemType.ItemType_Tower))){
            ownCardCount = Role.Instance.RoleItemAtrr.getItemByType(tab.ItemType.ItemType_Tower).length;
        }*/
        this._total_can_used_cards = this._unown_card_vec.length + ownCardCount;
        this.lbl_own_card_num.string = `${ownCardCount}/${this._total_can_used_cards}`;

        let unownCount = this._total_can_used_cards - ownCardCount;
        unownCount = unownCount > kZeroNumber ? unownCount : kZeroNumber;
        this.lbl_unown_card_num.string = `${this._total_can_used_cards - ownCardCount}/${this._total_can_used_cards}`;
        //魔王数量标签
        //   this.lbl_devil_card_num.string = `${this._own_devil_card_count}/${this._record_devil_total_count}`
    }

    /*  */
    private clearCardAndDevilData(bResetUnown: boolean) {
        this._own_card_vec = [];
        this._devil_card_vec = [];
        if (bResetUnown) { this._unown_card_vec = []; }
    }

    /* 记录已拥有的卡牌数据和未拥有的卡牌数据 */
    private recordCardData(bResetUnown: boolean = true) {
        //取得当前阵容卡组数据
        let curTeamData: proto.IDeckData = Role.Instance.RoleData.decks[this._teamIndex];
        let curTeamArrs = curTeamData.deckItems;
        if (curTeamArrs && curTeamArrs.length > kZeroNumber) {
            this.clearCardAndDevilData(bResetUnown);
        }

        //遍历物品表，组织拥有卡牌、未拥有卡牌、拥有的魔王和未拥有的魔王
        for (let cardTabData of tab.Data.CardTableByID.values()) {
            // //是特殊卡牌【变成不能攻击的树桩等等】不作为正常卡牌显示在卡库中需要pass
            // if (cardTabData.Type == tab.CardType.CardType_Special) {
            //     continue;
            // }
            let itemData = tab.Data.ItemTableByID.getValue(cardTabData.ID);
            if(itemData.Type===tab.ItemType.ItemType_Transform){
                continue;
            }
            //根据物品ID从玩家自身物品库中取数据
            let ownItemData = Role.Instance.RoleItemAtrr.getItemByStaticID(cardTabData.ID);
            //是正常的英雄卡牌
            if (ownItemData && curTeamArrs && curTeamArrs.length > kZeroNumber) {
                //在阵容中就pass
                if (curTeamArrs.indexOf(ownItemData.id) != kNegativeOneNumber) {
                    continue;
                }
            }

            //未拥有该物品
            if (!isValidObj(ownItemData)) {
                bResetUnown && this._unown_card_vec.push(cardTabData.ID);
            } else {
                let cardTabData: tab.CardTable = tab.Data.CardTableByID.getValue(ownItemData.staticId);
                if (!isValidObj(cardTabData)) {
                    return;
                }
                this._own_card_vec.push(ownItemData.id);
            }
        }

        this.setAllCardCount(); /*  */
    }

    /* 刷新界面已拥有卡牌布局 */
    private refreshOwnLayoutCardData() {
        this.refreshOwnCardOrDevilCard(this._own_card_vec, false);
    }

    /* 刷新拥有卡牌或者魔王卡牌 */
    private refreshOwnCardOrDevilCard(cardIDArr: string[] | number[], bDevilCard: boolean) {
        let tempCardIDArr = [];
        let idx = kZeroNumber;
        for (let data of cardIDArr) {
            tempCardIDArr.push(data);
            if (kCardGroup == tempCardIDArr.length) {
                bDevilCard ? this.loadDevilCardData(tempCardIDArr, idx) : this.loadOwnCardData(tempCardIDArr, idx);
                tempCardIDArr = [];
                idx++;
            }
        }

        //检测剩余部分
        tempCardIDArr.length > kZeroNumber &&
            (bDevilCard ? this.loadDevilCardData(tempCardIDArr, idx) : this.loadOwnCardData(tempCardIDArr, idx));
    }

    /* 刷新界面未拥有卡牌布局 */
    private refreshUnOwnLayoutCardData() {
        let unownCardStaticIdArrs: number[] = [];
        for (let elem of this.layout_unown_area.getComponentsInChildren(charactor_four)) {
            elem.node.removeFromParent();
            elem.node.destroy();
        }

        for (let data of this._unown_card_vec) {
            unownCardStaticIdArrs.push(data);
            if (kCardGroup == unownCardStaticIdArrs.length) { //每4个一组
                this.loadUnOwnCardData(unownCardStaticIdArrs);
                unownCardStaticIdArrs = []; //清除上一组数据
            }
        }
        //检测剩余部分
        unownCardStaticIdArrs.length > kZeroNumber && this.loadUnOwnCardData(unownCardStaticIdArrs);
    }

    /* 初始化阵容成员数据 */
    private initTeamMembers() {
        let team: proto.IDeckData = Role.Instance.RoleData.decks[this._teamIndex];
        let membersCount = team.deckItems.length;
        for (let i = kZeroNumber; i < this._teamMembersArry.length; ++i) {
            if (i < membersCount) {
                this._teamMembersArry[i].node.active = true;
                this._teamMembersArry[i].initData(team.deckItems[i],false,
                    CardNodeState.CARD_NODE_STATE_IN_TEAM);
            }
        }
    }

    /* 设置当前阵容下标 */
    private setTeamIdx(index: number): boolean {
        if (index >= Role.Instance.RoleData.decks.length) {
            return false;
        }

        this._teamIndex = index;
        return true;
    }

    /*  */
    protected initTeam(index: number) {
        if (!this.setTeamIdx(index)) {
            return;
        }

        this.initTeamMembers();
        this.recordCardData();

        //分别排序下吧
        sortCardUUIDVec(this._own_card_vec, this._card_sort_type);
        sortCardStaticIDVec(this._unown_card_vec);
        //sortDevilCard(this._devil_card_vec, this._card_sort_type);
        this.separateDevilVec();

        //刷新
        this.refreshOwnLayoutCardData();
        this.refreshUnOwnLayoutCardData();
    }

    /*  */
    public refreshTeam() {
        this.initTeamMembers();
        this.recordCardData(false);
        sortCardUUIDVec(this._own_card_vec, this._card_sort_type);
        //sortDevilCard(this._devil_card_vec, this._card_sort_type);
        this.separateDevilVec();
        this.refreshOwnLayoutCardData();
    }

    /* 拆分魔王卡牌按持有和未持有分别排序 */
    private separateDevilVec() {
        let holdDevilVec = [];
        let unHoldDevilVec = [];

        for (let id of this._devil_card_vec) {
            let devilData = Role.Instance.RoleItemAtrr.getItemByStaticID(id);
            if (isValidObj(devilData)) {
                holdDevilVec.push(id);
            } else {
                unHoldDevilVec.push(id);
            }
        }

        this._devil_card_vec = [];
        sortDevilCard(holdDevilVec, this._card_sort_type);
        //sortDevilCard(unHoldDevilVec, this._card_sort_type);
        this._devil_card_vec = this._devil_card_vec.concat(holdDevilVec);
        this._devil_card_vec = this._devil_card_vec.concat(unHoldDevilVec);
    }

    /* 加载已经获得的卡牌数据 */
    private loadOwnCardData(cardIDArr: string[], idx: number) {
        if (cardIDArr.length > kZeroNumber) {
            let cardGroup = this._own_card_node_map.getValue(idx);
            if (!cardGroup) {
                cardGroup = cc.instantiate(this.pfb_card_group).getComponent(charactor_four);
                this._own_card_node_map.setValue(idx, cardGroup);
                this.layout_own_area.addChild(cardGroup.node);
            }
            cardGroup.initData(cardIDArr, CardNodeState.CARD_NODE_STATE_OWN);
            cardGroup.node_card_1.name = "ChangeTeamGuideSrc"; //改名字用于新手引导
        }
    }

    /* 加载魔王数据 */
    private loadDevilCardData(devilCardIDArr: number[], idx: number) {
        if (devilCardIDArr.length > kZeroNumber) {
            let cardGroup = this._devil_card_node_map.getValue(idx);
            if (!cardGroup) {
                cardGroup = cc.instantiate(this.pfb_card_group).getComponent(charactor_four);
                this._devil_card_node_map.setValue(idx, cardGroup);
                /* 20230313 背包系统删除 wzq S*/
                // this.layout_devil_area.addChild(cardGroup.node);
                /* 20230313 背包系统删除 wzq E*/
            }

            cardGroup.initDevilData(devilCardIDArr);
            cardGroup.node_card_1.name = "ChangeTeamGuideSrcDevil"; //改名字用于新手引导
        }
    }

    /* 加载未获得卡牌数据 */
    private loadUnOwnCardData(cardArr: number[]) {
        if (cardArr.length > 0) {
            //this.scheduleOnce(()=>{
            let cardGroup = cc.instantiate(this.pfb_card_group).getComponent(charactor_four);
            cardGroup.initData(cardArr, CardNodeState.CARD_NODE_STATE_UNOWN);
            this.layout_unown_area.addChild(cardGroup.node);
            // }, 0.01);
        }
    }

    /*  */
    public onSelectCard(uuid: string) {
        let card = Role.Instance.RoleItemAtrr.getItemByUUID(uuid);
        if (!isValidObj(card)) {
            return;
        }

        this.node_use.active = true;
        this.scroll_view.active = false;
        if (this._moveCardNode) {

            this._moveCardNode.opacity = 255;
        }
        this._bTouch = true;
        this._bCanWatchTime = false;
        this.checkIsDevilCard(card.staticId);
        this.exchangeCardPreLogic(uuid, this.node_temp.getPosition());
    }

    /* 检测选中的卡牌是不是魔王 */
    private checkIsDevilCard(cardID: number) {
        // let cardTabData: tab.CardTable = tab.Data.CardTableByID.getValue(cardID);
        // if (!isValidObj(cardTabData)) {
        //     return;
        // }
        // this._bSelectCardIsDevil = cardTabData.Type === tab.CardType.CardType_Lord;
        return false;
    }

    /* 拖动选择的卡牌 */
    private dragSelectCard(uuid: string) {
        let card = Role.Instance.RoleItemAtrr.getItemByUUID(uuid);
        if (!isValidObj(card)) {
            return;
        }

        if (this._moveCardNode)
            this._moveCardNode.opacity = 128;

        this.exchangeCardPreLogic(uuid, this._touchCardPos);
    }

    /* 交换卡牌前置处理逻辑 */
    private exchangeCardPreLogic(uuid: string, pos: cc.Vec2) {
        if (!this._bSelectCardIsDevil) {
            for (let i = 0; i < this._teamMembersArry.length; i++) {
                this._teamMembersArry[i].playExchangeAni();
            }
        } else {
            /* 20230313 背包系统删除 wzq S*/
            // this.node_devil_info_panel.getComponent(DevilHeadPanel).playExchangeAni(true);
            /* 20230313 背包系统删除 wzq E*/
        }
        if (this._moveCardNode) {

            this._moveCardNode.getComponent(SmallPortrait).initData(uuid, false,null);
            this._moveCardNode.setPosition(pos);
            this._moveCardNode.active = true;
        }
        this.setAllTeamToggleState(false);
    }

    /*  */
    protected exchangeTeamMember(uuidUp: string, uuidDown: string) {
        if (GuideController.Instance.isGuiding()) {
            Net.pushLoaclMessage(LOCAL_MESSAGE.GUIDE_MAIN, 8);
        }
        let team = Role.Instance.RoleData.decks[this._teamIndex].deckItems;
        let indexUp = team.indexOf(uuidUp);
        let indexDown = team.indexOf(uuidDown);

        // 交换
        if (indexUp > kNegativeOneNumber) {
            let msg = new proto.Msg_ChangeDecksReq();
            msg.deckIndex = this._teamIndex;
            msg.cardIndex = indexUp;
            msg.cardUuid = uuidDown;
            Net.Send(proto.Ptl.ChangeDecksReq, msg);
        }

        if (indexDown > kNegativeOneNumber) {
            let msg = new proto.Msg_ChangeDecksReq();
            msg.deckIndex = this._teamIndex;
            msg.cardIndex = indexDown;
            msg.cardUuid = uuidUp;
            Net.Send(proto.Ptl.ChangeDecksReq, msg);
        }
    }

    /*  */
    protected cleanTouchInfo(): void {
        this._bTouch = false;
        this.node_use.active = false;
        this._toggle_type == ToggleType.ToggleType_Card && (this.scroll_view.active = true);

        isValidObj(this._moveCardNode) && (this._moveCardNode.active = false);

        if (!this._bSelectCardIsDevil) {
            for (let i = kZeroNumber; i < this._teamMembersArry.length; i++) {
                this._teamMembersArry[i].playExchangeAni(false);
            }
        } else {
            /* 20230313 背包系统删除 wzq S*/
            // this.node_devil_info_panel.getComponent(DevilHeadPanel).playExchangeAni(false);
            /* 20230313 背包系统删除 wzq E*/
        }
        this.setAllTeamToggleState(true);
    }

    /*  */
    protected async onTouchBegan(event: cc.Event.EventTouch) {
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyCloseCopyDeck);
        if (tab.Data.GetKeyValue_ConfigTable().IsOpenDragExChangeCard == kZeroNumber) {
            return;
        }
        this._bCallbackEndedEvent = false;
        this._touchCardPos = this.node.convertToNodeSpaceAR(AmendmentEventLocation( event.getLocation()));
        this._bTouchCardArea && this.startWatchTime();
    }

    /*  */
    protected onTouchMoved(event: cc.Event.EventTouch) {
        if (!this._bTouch || !this.getDragExchangeCardState()) {
            return;
        }
        this._bInMoving = true;
        this._touchCardPos = this.node.convertToNodeSpaceAR(AmendmentEventLocation( event.getLocation()));
        this._moveCardNode && this._moveCardNode.setPosition(this.node.convertToNodeSpaceAR(AmendmentEventLocation( event.getLocation())));
    }

    /*  */
    protected onTouchEnded(event: cc.Event.EventTouch) {
        //Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyCloseCopyDeck);
        if (!this._bTouch) {
            return;
        }

        if (this.getDragExchangeCardState() || (this._moveCardNode && this._moveCardNode.active)) {
            event.stopPropagation();
        }

        this._bCallbackEndedEvent = true;
        this._bSelectCardIsDevil ? this.confirmExchangeDevil(event) : this.confirmExchangeCard(event);
    }

    /*  */
    protected onTouchCancelled(event: cc.Event.EventTouch) {
        if (!this._bTouch || !this.getDragExchangeCardState()) {
            return;
        }
        this._bInMoving = false;
        this._bSelectCardIsDevil ? this.confirmExchangeDevil(event, true) : this.confirmExchangeCard(event, true);
    }

    /* 检测有没有系统触摸结束事件调用 */
    private checkFinishEndedEvent() {
        if (!this._bCallbackEndedEvent && !this._bInMoving) {
            this.cleanTouchInfo();
            this.resetWatchTime();
        }
    }

    /* 确认能不能交换普通卡牌 */
    private confirmExchangeCard(event: cc.Event.EventTouch, bCancelTouch: boolean = false) {
        let bCanExchange = false;
        for (let v of this._teamMembersArry) {
            if (v.node.getBoundingBoxToWorld().contains(getLocationInResolution(event.getLocation()))) {
                if (this._moveCardNode) {
                    this.exchangeTeamMember(this._moveCardNode.getComponent(SmallPortrait).getUUID(), v.getUUID());
                    bCanExchange = true;
                }
                break;
            }
        }

        this.finalConfirmExchange(bCanExchange, bCancelTouch);
    }
    /* 确认能不能交换魔王 */
    private confirmExchangeDevil(event: cc.Event.EventTouch, bCancelTouch: boolean = false) {
        let bCanExchange = false;
        // if (this.node_devil_info_panel.getBoundingBoxToWorld().contains(event.getLocation())) {
        //     let msg = new proto.Msg_SetLordReq();
        //     msg.deckIndex = Role.Instance.DeckIndex;
        //     msg.cardUUID = this._select_card_uuid;
        //     Net.Send(proto.Ptl.SetLordReq, msg);
        //     bCanExchange = true;
        // }

        this.finalConfirmExchange(bCanExchange, bCancelTouch);
    }

    /* 最终确认能不能交换 */
    private finalConfirmExchange(bCanExchange: boolean, bCancelTouch: boolean) {
        if (!bCanExchange && bCancelTouch) {
            this.schedule(this.checkFinishEndedEvent, 0.2);
            return;
        }
        this.cleanTouchInfo();
        this.resetWatchTime();
    }

    /*  */
    public selectTeam(teamindex: number) {
        switch (teamindex) {
            case 0:
                this.toggle_team_1.check()
                this.onSelectTeam1Click(null)
                break;
            case 1:
                this.toggle_team_2.check()
                this.onSelectTeam2Click(null)
                break;
            case 2:
                this.toggle_team_3.check()
                this.onSelectTeam3Click(null)
                break;
            case 3:
                this.toggle_team_4.check()
                this.onSelectTeam4Click(null)

                break;
            case 4:
                this.toggle_team_5.check()
                this.onSelectTeam5Click(null)
                break;
            default:
                break;
        }
    }

    /* toggle点击事件 */
    private onSelectTeam1Click(node: cc.Toggle) {
        this.setTeamIdx(Number(TeamIndex.TEAM_INDEX_ONE));
        this.refreshCurrentTeamIdx();
    }

    /*  */
    private onSelectTeam2Click(node: cc.Toggle) {
        this.setTeamIdx(Number(TeamIndex.TEAM_INDEX_TWO));
        this.refreshCurrentTeamIdx();
    }

    /*  */
    private onSelectTeam3Click(node: cc.Toggle) {
        this.setTeamIdx(Number(TeamIndex.TEAM_INDEX_THREE));
        this.refreshCurrentTeamIdx();
    }

    /*  */
    private onSelectTeam4Click(node: cc.Toggle) {
        this.setTeamIdx(Number(TeamIndex.TEAM_INDEX_FOUR));
        this.refreshCurrentTeamIdx();
    }

    /*  */
    private onSelectTeam5Click(node: cc.Toggle) {
        this.setTeamIdx(Number(TeamIndex.TEAM_INDEX_FIVE));
        this.refreshCurrentTeamIdx();
    }

    //训练场
    onTrainingTeam() {
        ConfirmTips.show("GameTrainingTips", () => {
            //开始训练场的战斗
            FightLoader.Instance.MatchTraining()
            FightFromWhichLayer.getInstance().DefaultEnterPageState = DefaultEnterPageType.HeroType
        })
    }

    /* 是否显示卡库界面 */
    private showCardPage(bVisible: boolean) {
        this.node_team.active = bVisible;
        this.scroll_view.active = bVisible;
    }

    /* 清空推荐阵容页面 */
    private cleanRecommendDeck() {
        this.node_recommend_layer.destroyPage();
        this.node_recommend_layer.node.active = false;
    }

    /* 清空表情页面 */
    private cleanEmotionLayer() {
        //TODO:
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_ResetEmotionState);
        this.node_emotion_layer.node.active = false;
    }

    /*  */
    private switchToggle(type: ToggleType) {
        this._toggle_type == ToggleType.ToggleType_Card && this.showCardPage(false);
        this._toggle_type == ToggleType.ToggleType_Recommend && this.cleanRecommendDeck();
        this._toggle_type == ToggleType.ToggleType_Emotion && this.cleanEmotionLayer();
        this._toggle_type = type;
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyCloseCopyDeck);
    }

    /*  */
    private onHeroCard(node: cc.Toggle) {
        if (this._toggle_type == ToggleType.ToggleType_Card) {
            return;
        }

        this.switchToggle(ToggleType.ToggleType_Card);
        this.showCardPage(true);
        this.switchTeamIndex();
    }

    /*  */
    private onRecommendToggle(node: cc.Toggle) {
        if (this._toggle_type == ToggleType.ToggleType_Recommend) {
            return;
        }
        //上报打点数据
        //Analytics.Instance.EventSuccess(CAEvtID.EventTracking, CAEvtName.ClickRecommend);/* zhibo-@20230410 for <删除打点> */
        this.saveRecommendRedDot();
        this.switchToggle(ToggleType.ToggleType_Recommend);
        this.node_recommend_layer.node.active = true;
        this.node_recommend_layer.initData();
    }

    /*  */
    private onEmotion(node: cc.Toggle) {
        if (this._toggle_type == ToggleType.ToggleType_Emotion) {
            return;
        }

        this.switchToggle(ToggleType.ToggleType_Emotion);
        this.node_emotion_layer.node.active = true;
        this.node_emotion_layer.initData();
    }

    /* 刷新当前阵容编号 */
    private refreshCurrentTeamIdx() {
        this.refreshTeam();
        this.changeTeamIndexMsg();
    }

    /* 设置所有阵容按钮状态 */
    private setAllTeamToggleState(bEnable: boolean) {
        this.toggle_team_1.interactable = bEnable;
        this.toggle_team_1.enableAutoGrayEffect = !bEnable;

        this.toggle_team_2.interactable = bEnable;
        this.toggle_team_2.enableAutoGrayEffect = !bEnable;

        this.toggle_team_3.interactable = bEnable;
        this.toggle_team_3.enableAutoGrayEffect = !bEnable;

        this.toggle_team_4.interactable = bEnable;
        this.toggle_team_4.enableAutoGrayEffect = !bEnable;

        this.toggle_team_5.interactable = bEnable;
        this.toggle_team_5.enableAutoGrayEffect = !bEnable;

        this.refreshCardNodeState(!bEnable ? CardNodeState.CARD_NODE_STATE_READY_CHANGE : CardNodeState.CARD_NODE_STATE_IN_TEAM);
    }

    /* 卡牌排序按钮点击事件 */
    private onSortClick(btn: cc.Button) {
        this._card_sort_type += kOneNumber;
        this._card_sort_type = (this._card_sort_type >= Number(tab.SortType.SortType_AthleticsLevelDecrease)) ?
            tab.SortType.SortType_CardLevelIncrease : this._card_sort_type;
        this.refreshSortLabelText();
        sortCardUUIDVec(this._own_card_vec, this._card_sort_type);
        //sortDevilCard(this._devil_card_vec, this._card_sort_type);
        this.separateDevilVec();
        this.refreshOwnLayoutCardData();
        // this.refreshDevilLayoutData();
    }

    /* 刷新排序类型文本 */
    private refreshSortLabelText() {
        this.lbl_sort_title.string = getCardSortTypeTxt(this._card_sort_type);
        this.setSortArrowForward();
    }

    /* 设置排序箭头的朝向 */
    private setSortArrowForward() {
        switch (this._card_sort_type) {
            case tab.SortType.SortType_CardLevelIncrease:
            case tab.SortType.SortType_CardQualityIncrease:
            case tab.SortType.SortType_AthleticsLevelIncrease:
                this.spr_select_arrow_down.node.active = false;
                this.spr_select_arrow_up.node.active = true;
                break;

            case tab.SortType.SortType_CardLevelDecrease:
            case tab.SortType.SortType_CardQualityDecrease:
            case tab.SortType.SortType_AthleticsLevelDecrease:
                this.spr_select_arrow_down.node.active = true;
                this.spr_select_arrow_up.node.active = false;
                break;
        }
    }

    /* 刷新当前阵容中所有卡牌节点状态 */
    private refreshCardNodeState(state: CardNodeState) {
        let teamData = Role.Instance.RoleData.decks[this._teamIndex];
        let teamMembers = isValidObj(teamData) ? teamData.deckItems.length : kZeroNumber;
        for (let i = 0; i < this._teamMembersArry.length; ++i) {
            if (i < teamMembers) {
                this._teamMembersArry[i].setCardNodeState(state);
            }
        }
    }

    /* 切换阵容协议 */
    private changeTeamIndexMsg() {
        let msg = new proto.Msg_ChangeTeamIndexReq();
        msg.deckIndex = this._teamIndex;
        Net.Send(proto.Ptl.ChangeTeamIndexReq, msg);
        Waiting.Show(WaitingTag.ChangeTeamIndex)
    }

    /* 开启秒表计时 */
    private startWatchTime() {
        if (!Role.Instance.IsGuideFinished() || !this._bCanWatchTime || this.getDragExchangeCardState()) {
            return;
        }
        this.schedule(this.listenWatchTime, 0.01);
    }

    /* 监听秒表计时 */
    private listenWatchTime(dt: number) {
        this._bCanWatchTime && (this._touchTimes += dt);
        this.getDragExchangeCardState() && this._bCanWatchTime && this.stopWatchTime();
    }

    /* 停止秒表计时 */
    private stopWatchTime() {
        this._bTouch = true;
        this.unschedule(this.listenWatchTime);
        MainScene.Instance.setPageViewScroll(false);
        this.dragSelectCard(this._select_card_uuid);
    }

    /* 重置秒表计时 */
    private resetWatchTime() {
        this._touchTimes = kZeroNumber;
        this._bCanWatchTime = true;
        this._bTouchCardArea = false;
        this.unschedule(this.listenWatchTime);
        this.unschedule(this.checkFinishEndedEvent);
        MainScene.Instance.setPageViewScroll(true);
    }

    /* 是否处于拖动切换卡牌状态中 */
    public getDragExchangeCardState() {
        return this._touchTimes > tab.Data.GetKeyValue_ConfigTable().DragExChangeCardIntervalTime;
    }

    /* 获取要复制的阵容数据 */
    private getCurrentCopyTeamData() {
        let retData: proto.IFightCardData[] = [];
        let curLordUUID = Role.Instance.RoleData.decks[this._teamIndex].lord;
        let lordData = Role.Instance.RoleItemAtrr.getItemByUUID(curLordUUID);
        if (isValidObj(lordData)) {
            retData.push({ staticId: lordData.staticId, level: lordData.level });
        }

        let curTeams = Role.Instance.RoleData.decks[this._teamIndex].deckItems;
        for (let cardUUID of curTeams) {
            let cardData = Role.Instance.RoleItemAtrr.getItemByUUID(cardUUID);
            if (isValidObj(cardData)) {
                retData.push({ staticId: cardData.staticId, level: cardData.level });
            }
        }

        //第一个是魔王，后面都是卡组
        return retData;
    }

    /* 检测推荐阵容红点可见性 */
    private checkRecommendRedDot() {
        let isHas = cc.sys.localStorage.getItem("recommend_team" + LoginData.Instance.uid.toString());
        this._bVisibleRecommendRedDot = isHas == null ? true : false;
        this.node_recommend_reddot.active = this._bVisibleRecommendRedDot;
    }

    /* 保存推荐阵容红点 */
    private saveRecommendRedDot() {
        if (!this._bVisibleRecommendRedDot) {
            return;
        }
        cc.sys.localStorage.setItem("recommend_team" + LoginData.Instance.uid.toString(), "recommend_team");
        this.node_recommend_reddot.active = false;
    }

    /*  */
    private onClickCopyTeam() {
        let msgData = this.getCurrentCopyTeamData();
        //设置回调函数
        let cb = (deckIndex: number) => {
            let param = new proto.Msg_CopyDeckReq();
            param.DeckData = msgData.slice(kOneNumber, msgData.length);
            param.lordData = msgData[kZeroNumber];
            param.deckIndex = deckIndex;
            param.talent = Role.Instance.RoleData.decks[this._teamIndex].talent;
            Net.Send(proto.Ptl.CopyDeckReq, param);
        }

        CopyTeamSelect.show(this.btn_copy_card.node, cb);
    }

    /* 检查下有无新表情 */
    private checkNewEmotion() {
        for (let id of Role.Instance.RoleData.emotions) {
            let bHaveNewEmotion = ManagerNewEmotionRedDot.getInstance().checkIsNewEmotion(id);
            if (bHaveNewEmotion) {
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NewEmotion, { bVisible: bHaveNewEmotion, extraParam: null });
                return;
            }
        }
    }

    /* 点击分享卡组 */
    public onClickShareCard() {
        showPopLayerV2("prefab/ConfirmShareCards", ConfirmShareCards).then(layer => {
            layer.initData(this._teamIndex);
        });
    }

    // 更新暴击率
    private updateCriticalDamage() {
        // 基础暴击率
        let damageAdd = Math.floor(tab.Data.GetKeyValue_ConfigTable().CriticalDamage*1000)
        // 获得全部卡牌
        let cardList = Role.Instance.RoleItemAtrr.getItemByType(tab.ItemType.ItemType_Tower)
        if (cardList != null) {
            for (let i = 0; i < cardList.length; ++i) {
                // 拿到卡牌配置
                let itemTabData: tab.ItemTable = tab.Data.ItemTableByID.getValue(cardList[i].staticId)
                if (itemTabData == null){ continue }
                // 拿到卡牌对应品质配置
                let qualityTable: tab.QualityTable = tab.Data.QualityTableByQuality.getValue(itemTabData.Quality)
                if (qualityTable == null) { continue }
                // 计算暴击率加成
                damageAdd += Math.floor(qualityTable.CriticalDamageAdd*1000) + Math.floor(qualityTable.CriticalDamageMul*1000) * (cardList[i].level-1)
            }
        }

        this.lbl_critical_damage_add.string = damageAdd/10+""
    }
}
