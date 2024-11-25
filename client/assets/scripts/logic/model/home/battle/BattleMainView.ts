import { _decorator, EventTouch, instantiate, Label, Layers, Node, NodeEventType, Prefab, ProgressBar, ScrollView, Size, Sprite, SpriteFrame, Tween, tween, UITransform, Vec2, Vec3, view } from 'cc';
import { ViewScreen } from '../../../../framework/base/ViewScreen';
import { ViewName } from '../../../define/ViewDefine';
import { ShowTips, UIMgr } from '../../../mgr/UIMgr';
import { Net } from '../../../net/Net';
import InfiniteList from '../../../../Common/InfiniteList/InfiniteList';
import { BattleMainItem } from './BattleMainItem';
import { EventMgr } from '../../../mgr/EventMgr';
import { LocalEvent } from '../../../define/LocalEvent';
import { tab } from '../../../../Table/table_gen';
import { proto } from 'client_protocol';
import { BattleMainDataControl } from './BattleMainDataControl';
import { RedMgr } from '../../../mgr/RedMgr';
import { RedDotType } from '../../../red/RedDotType';
import { ItemData } from '../../item/ItemData';
import { LangMgr } from '../../../mgr/LangMgr';
import { CommonItem } from '../../item/CommonItem';
import { ItemInfo } from '../../item/ItemInfo';
import { setTextTime_3 } from '../../../utils/GameUtil';
import { RoleData } from '../../role/RoleData';
import { stepBranchGuide } from '../../../guide/GuideTask';
import { GuideController } from '../../../guide/GuideController';
import { DisableGuideController } from '../../../guide/GuideCommand';
import { PowerDifficultyTag } from '../PowerDifficultyTag';
import { TRIALLAYER } from '../../../../Common/script/EnumTypeMgr';
import { BattleMainEliteData } from './BattleMainEliteData';
import { BattleMainEliteControl } from './BattleMainEliteControl';
const { ccclass, property } = _decorator;

@ccclass('BattleMainView')
export class BattleMainView extends ViewScreen {
    @property(Prefab)
    pfb_level_item: Prefab = null;

    @property(InfiniteList)
    list_levels: InfiniteList = null;

    @property(Node)
    node_battle_btn: Node = null;
    @property(Node)
    node_tip: Node = null;
    @property(Label)
    lbl_desc: Label = null;

    @property([CommonItem])
    award_items: CommonItem[] = [];
    @property(ProgressBar)
    award_bar: ProgressBar = null;
    @property(Label)
    lbl_reward: Label = null;
    @property(Node)
    node_ordinary: Node = null;
    @property(Node)
    node_elite: Node = null;
    @property(Node)
    node_reward_show: Node = null;
    @property(Node)
    node_reward_elite: Node = null;
    @property(Node)
    node_complete: Node = null;
    @property(Label)
    lbl_elite_count: Label = null;

    @property(Node)
    node_bg_elite: Node = null;
    @property(Node)
    node_bg_ordinary: Node = null;
    @property(Node)
    node_power:Node = null;

    private _scrollView: ScrollView = null;
    private _clickIdx: number = 0;
    private _starClickIdx: number = 0;
    private _bTouch: boolean = false;
    private _showGuildFinger: boolean = false;
    private _viewLayer: TRIALLAYER = TRIALLAYER.NONE;
    private _selfData: any = null;
    register(): void {
        EventMgr.onLocal(LocalEvent.Level_Item_Select, this.levelSelect, this);
        EventMgr.onMsg(proto.Ptl.ReceiveMainFirstRewardRsp, this.on_s2c_ReceiveMainFirstRewardRsp, this);
        EventMgr.onMsg(proto.Ptl.GetMainStageInfoRsp, this.on_s2c_GetMainStageInfoRsp, this);
        EventMgr.onMsg(proto.Ptl.GetMainStageCleardRecordsRsp, this.on_s2c_GetMainStageCleardRecordsRsp, this);
        EventMgr.onMsg(proto.Ptl.ReceiveEliteClearStageRewardsRsp, this.on_s2c_ReceiveEliteClearStageRewardsRsp, this);
    }

    on_s2c_GetMainStageInfoRsp(msg: proto.Msg_GetMainStageInfoRsp) {
        this.list_levels.Refresh();
        this.levelSelect([this._selfData.getChapterId() - 1]);
        RedMgr.refreshEvent(RedDotType.StageFirstReward);
    }
    /* 领取首通奖励 */
    on_s2c_ReceiveMainFirstRewardRsp(msg: proto.Msg_ReceiveMainFirstRewardRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        if (msg.rewards) {
            // 刷新列表状态
            var self = this;
            self._selfData.addReceiveFirstRewardId(msg.stageId, msg.indexes);
            UIMgr.ins.hideView(ViewName.BattleMainRewardPop);
            self.setBattleReward();
            UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
            RedMgr.refreshEvent(RedDotType.StageFirstReward);
            RedMgr.refreshEvent(RedDotType.ChapterAward);
        }
    }
    /* 领取精英首通奖励 */
    on_s2c_ReceiveEliteClearStageRewardsRsp(msg: proto.Msg_ReceiveEliteClearStageRewardsRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        if (msg.rewards) {
            this._selfData.addReceiveFirstRewardId(msg.stageId);
            this.setEliteBattleReward();
        }
    }
    protected onDestroy(): void {
        super.onDestroy();
        if (GuideController.ins.node.active && this._showGuildFinger) {
            DisableGuideController();
        }
        EventMgr.emitLocal(LocalEvent.hidePop);
    }
    onEnterBattle() {
        console.log("进入战斗")
        Net.Disconnect()
    }
    switchView(e: EventTouch, type: string) {
        if (Number(type) === this._viewLayer) {
            return;
        }
        this._viewLayer = Number(type);
        this.node_elite.active = this._viewLayer === TRIALLAYER.ROOKIE;
        this.node_ordinary.active = this._viewLayer === TRIALLAYER.ELITE;
        this.node_bg_elite.active = this._viewLayer === TRIALLAYER.ELITE;
        this.node_bg_ordinary.active = this._viewLayer === TRIALLAYER.ROOKIE;
        if (this._viewLayer === TRIALLAYER.ROOKIE) {
            this._selfData = BattleMainDataControl.ins;
        } else {
            this._selfData = BattleMainEliteData.ins;
        }
        this.node_power.active = this._viewLayer === TRIALLAYER.ROOKIE
        console.log("cocos 当前章节为=", this._selfData.getChapterId());
        this.setView();
    }
    onShow(): void {
        this._viewLayer = this.openData ? this.openData : TRIALLAYER.ROOKIE;
        this._selfData = this._viewLayer === TRIALLAYER.ROOKIE ? BattleMainDataControl.ins : BattleMainEliteData.ins;
        console.log("cocos 当前章节为=", this._selfData.getChapterId());
        this.node_power.active = this._viewLayer === TRIALLAYER.ROOKIE
        this.node_elite.active = this._viewLayer === TRIALLAYER.ROOKIE && this._selfData.getChapterId() >= 2;
        this.node_ordinary.active = this._viewLayer === TRIALLAYER.ELITE;
        this.node_bg_elite.active = this._viewLayer === TRIALLAYER.ELITE;
        this.node_bg_ordinary.active = this._viewLayer === TRIALLAYER.ROOKIE;
        this._showGuildFinger = false;
        this.list_levels.getContent().getComponent(UITransform).setAnchorPoint(0, 0.5);
        this._scrollView = this.list_levels.getComponent(ScrollView);
        this.setView();
        this.list_levels.node.on("scrolling", this.onScrolling, this);
        this.list_levels.node.on("scroll-ended", this.onScrollEnd, this);
        this._scrollView.node.on(NodeEventType.TOUCH_START, this._onTouchStar, this, true);
        this._scrollView.node.on(NodeEventType.TOUCH_END, this._onTouchEnded, this, true);
        this._scrollView.node.on(NodeEventType.TOUCH_CANCEL, this._onTouchCancel, this);
    }
    setView() {
        this.list_levels.Init({
            getCellNumber: this.getCellCount.bind(this),
            getCellSize: this.getCellWidth.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView: this.getCellView.bind(this),
            getCellData: this.GetCellData.bind(this),
        });
        this.list_levels.Reload(true, true);
        this.list_levels.scrollToOffset(new Vec2(0, 5), 1, true);
        let islock = this._selfData.getStageIsLock(this._selfData.getChapterId());
        if (islock) {
            this.levelSelect([this._selfData.getChapterId() - 2]);
        } else {
            this.levelSelect([this._selfData.getChapterId() - 1]);
        }
        if (this._viewLayer === TRIALLAYER.ROOKIE) {
            this.setBattleReward();
            const countData = BattleMainEliteData.ins.getChapterCount();
            this.lbl_elite_count.string = countData.curCount + "/" + countData.maxCount;
        } else {
            this.setEliteBattleReward();
        }
    }
    private onScrollEnd() {
        if (this._bTouch) {
            this._bTouch = false;
            this.levelSelect([this._clickIdx]);
        }
    }
    _onTouchCancel(e: EventTouch) {
        this._onTouchEnded(e);
    }
    _onTouchStar(e: EventTouch) {
        this._bTouch = true;
        this._starClickIdx = this._clickIdx;
    }
    _onTouchEnded(e: EventTouch) {
        let item = e.target.parent;
        this._bTouch = false;
        this._scrollView.stopAutoScroll();
        if (this._starClickIdx === this._clickIdx && !isNaN(item.name)) {
            let dataIndex = item.getComponent(BattleMainItem).dataIndex;
            this.levelSelect([dataIndex]);
        } else {
            this.levelSelect([this._clickIdx]);
        }
    }
    getCellCount() {
        return tab.getData().MainChapterTable.length;
    }
    getCellWidth() {
        return 300;
    }
    getCellIdentifer() {
        return "BattleMainItem";
    }
    getCellView() {
        return instantiate(this.pfb_level_item).getComponent(BattleMainItem);
    }
    GetCellData(idx: number) {
        return { index: idx, ins: this._selfData }
    }
    onScrolling() {
        const offset = this.list_levels.getScrollOffset();
        if (offset.x > 0) {
            this._clickIdx = 0;
            this._bTouch = false;
            this.levelSelect([this._clickIdx]);
        } else {
            this.updateItemScale();
        }
    }
    updateItemScale() {
        const scrollViewMidX = this.list_levels.node.getComponent(UITransform).width / 2;
        let itemChildren = this.list_levels.getContent().children;
        let markScale = 0;
        let dataIndex = 0;
        itemChildren.forEach(item => {
            const worldPos = item.parent.getComponent(UITransform).convertToWorldSpaceAR(item.position);
            const viewPos = this.list_levels.node.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
            const distanceToCenter = Math.abs(viewPos.x - scrollViewMidX);
            const scale = Math.max(0.6, 0.6 + 0.6 * (1 - distanceToCenter / scrollViewMidX));
            item.getChildByName("info_node").setScale(scale, scale);
            let itemTs = item.getComponent(BattleMainItem)
            if (markScale < scale) {
                markScale = scale;
                dataIndex = itemTs.dataIndex;
            }
        })
        this._clickIdx = dataIndex;
    }
    levelSelect(data) {
        this._clickIdx = data[0]
        const content = this.list_levels.getContent();
        let pos = this.list_levels.GetScrollPosOfCell(this._clickIdx);
        const scrollViewMidX = this.list_levels.node.getComponent(UITransform).width / 2;
        const contentX = content.getPosition().x;
        const dis = pos.x + contentX
        let moveX = contentX - (dis - scrollViewMidX);
        // const time = (dis / 2000) > 0.1 ? 0.1 : (dis / 2000);
        this._scrollView.scrollToOffset(new Vec2(Math.abs(moveX), 0), 0.1);
        let islock = this._selfData.getStageIsLock(this._clickIdx + 1);
        this.node_tip.active = islock;
        this.node_battle_btn.active = !islock;
        this.lbl_desc.node.parent.active = !islock;

        if (RoleData.ins.clientData.failTimes === "true") {
            RoleData.ins.setClientData("failTimes", "false")
            stepBranchGuide(501);
        }
        let battleShow = false;
        if (this._viewLayer === TRIALLAYER.ELITE && this.node_battle_btn.active) {
            this.node_battle_btn.active = false;
            battleShow = true
        } else {
            this.node_complete.active = false;
        }
        // 是否显示文本
        this.lbl_desc.string = LangMgr.getLab(tab.getData().MainChapterTableById.getValue(this._clickIdx + 1).Introduction);
        this.scheduleOnce(() => {
            let itemChildren = content.children;
            itemChildren.forEach(item => {
                const itemTs = item.getComponent(BattleMainItem);
                itemTs.setSelect(itemTs.dataIndex === this._clickIdx)
            })
            const item = content.getChildByName(String(this._clickIdx))
            if (item) {
                const stageId = item.getComponent(BattleMainItem).ClickStage;
                this.node_battle_btn.getComponent(PowerDifficultyTag) && this.node_battle_btn.getComponent(PowerDifficultyTag).setStageId(stageId)
                if (this._viewLayer === TRIALLAYER.ELITE) {
                    // 判断精英副本是否通关
                    const ids = this._selfData.getStageClearIds();
                    if (ids.indexOf(stageId) > -1) {
                        this.node_battle_btn.active = false;
                        this.node_complete.active = true;
                    } else {
                        this.node_complete.active = false;
                        this.node_battle_btn.active = battleShow;
                    }
                }
            }
        }, 0.1);
    }
    /* 点击显示通关奖励 */
    clickShowClearAward() {
        const content = this.list_levels.getContent();
        const item = content.getChildByName(String(this._clickIdx))
        const stageId = item.getComponent(BattleMainItem).ClickStage;
        if (this._selfData.getReceiveStageId()) {
            /* 有可领取的奖励 */
            let _stageId = this._selfData.getReceiveStageId();
            let _chapterId = this._selfData.getChapterId(_stageId);
            UIMgr.ins.show({ viewName: ViewName.BattleMainRewardPop, data: { chapterId: _chapterId, Id: _stageId, ins: this._selfData } })
        } else {
            UIMgr.ins.show({ viewName: ViewName.BattleMainRewardPop, data: { chapterId: this._clickIdx + 1, Id: stageId, ins: this._selfData } })
        }
    }
    /* 点击通关 */
    clickBattleBtn() {
        /* 如果体力不足 前端拦截 */
        const powerData = ItemData.ins.getByItemId(tab.CurrencyType.CurrencyType_Stamina);
        const powerCont = powerData.num;
        if (this._viewLayer===TRIALLAYER.ROOKIE&&powerCont < 5) {
            // 体力不足返回
            let str = LangMgr.getCombineString("Tips_itemshortage", [LangMgr.getLab(powerData.itemTable.Name)]);
            ShowTips(str);
            UIMgr.ins.show({ viewName: ViewName.ResourceBuyPop, data: { "itemId": tab.CurrencyType.CurrencyType_Stamina } })
            return
        }
        if (GuideController.ins.node.active && this._showGuildFinger) {
            DisableGuideController();
        }
        const content = this.list_levels.getContent();
        const item = content.getChildByName(String(this._clickIdx))
        const stageId = item.getComponent(BattleMainItem).ClickStage;
        let msg = new proto.Msg_StartStageReq();
        msg.stageId = stageId;

        if(msg.stageId===103){
            GuideController.ins.registerGuildeSelectLeader();
        }

        Net.Send(proto.Ptl.StartStageReq, msg)
    }
    setEliteBattleReward() {
        const stageId = this._selfData.getReceiveStageId();
        const receiveAwards = this._selfData.getReceiveFirstRewardIds();
        const clearIds = this._selfData.getStageClearIds();
        const rewardTabData = tab.getData().PveClearStageTableByStageId.getValue(stageId);
        const rewardIds = rewardTabData.ClearRewardItemIds;
        const rewardNums = rewardTabData.ClearRewardItemNum;
        const canReceive = receiveAwards.indexOf(stageId) === -1 && clearIds.indexOf(stageId) > -1;
        this.node_reward_show.active = false;
        this.node_reward_elite.active = true;
        for (let i = 0; i < this.award_items.length; i++) {
            const com = this.award_items[i];
            com.setTouchCallBack(null);
            if (rewardIds[i]) {
                com.node.parent.active = true;
                com.node.parent.getChildByName("canget_node").active = canReceive;
                const item_data = new ItemInfo();
                item_data.itemId = rewardIds[i];
                item_data.num = rewardNums[i];
                com.initData(item_data, true, false);
                if (canReceive) {
                    com.setTouchCallBack(() => {
                        BattleMainEliteControl.ins.reqReceiveEliteClearStageRewards(stageId);
                    })
                }
            } else {
                com.node.parent.active = false;
            }
        }
    }
    /* 设置通关奖励界面 */
    setBattleReward() {
        this.node_reward_show.active = true;
        this.node_reward_elite.active = false;
        const stageId = this._selfData.getReceiveStageId();
        if (stageId) {
            this.setAwards(stageId, true);
        } else {
            this.setAwards(this._selfData.getCurFightStageId(), false);
        }
        if (this._selfData.getReceiveFirstRewardIds().length === 0 && this._selfData.getStageClearIds().length >= 3) {
            this._showGuildFinger = true;
            stepBranchGuide(507);
        }
    }
    setAwards(stageId: number, canReceive: boolean) {
        const rewardTabData = tab.getData().ChapterFristRewardTableById.getValue(stageId);
        const ids = this._selfData.getReceiveFirstRewardIds();
        let idx = 0;
        if (ids.length > 0) {
            const lastIdx = ids[ids.length - 1].index;
            idx = lastIdx < 2 ? lastIdx + 1 : 0;
        } else {
            idx = 0;
        }
        this.award_bar.progress = idx / 2;
        const rewardIds = rewardTabData["RewardItemIds" + (idx + 1)];
        const rewardNums = rewardTabData["RewardItemNum" + (idx + 1)];
        this.setProgressDot(stageId, idx, true);
        this.lbl_reward.string = setTextTime_3(rewardTabData.Time[idx]) + LangMgr.getLab("ui_commondesc_57");
        for (let i = 0; i < this.award_items.length; i++) {
            const com = this.award_items[i];
            com.setTouchCallBack(null);
            if (rewardIds[i]) {
                com.node.parent.active = true;
                com.node.parent.getChildByName("canget_node").active = canReceive;
                const item_data = new ItemInfo();
                item_data.itemId = rewardIds[i];
                item_data.num = rewardNums[i];
                com.initData(item_data, true, false);
                if (canReceive) {
                    const indexes = this._selfData.getAllIndex(stageId);
                    com.setTouchCallBack(() => {
                        let msg = new proto.Msg_ReceiveMainFirstRewardReq();
                        msg.indexes = [indexes[0]];
                        msg.stageId = stageId;
                        Net.Send(proto.Ptl.ReceiveMainFirstRewardReq, msg)
                    })
                } else {
                    com.setTouchCallBack(() => {
                        UIMgr.ins.show({ viewName: ViewName.BattleMainRewardPop, data: { chapterId: this._clickIdx + 1, Id: stageId } })
                    })
                }
            } else {
                com.node.parent.active = false;
            }
        }
    }
    setProgressDot(stageId: number, idx: number, isActive: boolean) {
        const progressNode = this.award_bar.node.parent;
        for (let i = 1; i <= 3; i++) {
            const dot = progressNode.getChildByName("dot_" + i);
            const isGot = this._selfData.getReceiveFirstRewardById(stageId, (i - 1));
            dot.active = Boolean(isGot) || (isActive && idx === (i - 1));
        }
    }

    onRecordClick() {
        const content = this.list_levels.getContent();
        const item = content.getChildByName(String(this._clickIdx))
        const stageId = item.getComponent(BattleMainItem).ClickStage;

        console.log(stageId)
        let msg = new proto.Msg_GetMainStageCleardRecordsReq();
        msg.stageId = stageId;
        Net.Send(proto.Ptl.GetMainStageCleardRecordsReq, msg)
    }

    on_s2c_GetMainStageCleardRecordsRsp(msg: proto.Msg_GetMainStageCleardRecordsRsp) {
        if (msg.error.code != proto.CommonErrorCode.Succeed) {
            return
        }
        UIMgr.ins.show({ viewName: ViewName.BattleMainRecordPop, data: msg })
    }
}
