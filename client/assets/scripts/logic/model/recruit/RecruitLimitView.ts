import { _decorator, Component, instantiate, Label, Node, Prefab, RichText, ScrollView, Sprite, Vec2 } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { ActivityData } from '../activity/ActivityData';
import { ActivityOpenInfo } from '../activity/ActivityOpenInfo';
import { createAnimation, setTextTime } from '../../utils/GameUtil';
import { RoleData } from '../role/RoleData';
import { tab } from '../../../Table/table_gen';
import { TaskData } from '../task/TaskData';
import { TaskInfo } from '../task/TaskInfo';
import { RecruitLimitItem } from './RecruitLimitItem';
import { ItemData } from '../item/ItemData';
import { HeroDataControl } from '../hero/herobag/HeroDataControl';
import { ShowItemNotEnoughTips, ShowTips, UIMgr } from '../../mgr/UIMgr';
import { LangMgr } from '../../mgr/LangMgr';
import { proto } from 'client_protocol';
import { Net } from '../../net/Net';
import { EventMgr } from '../../mgr/EventMgr';
import { ViewName } from '../../define/ViewDefine';
import { HeroData } from '../hero/HeroData';
import { RecruitType } from '../../../Common/script/EnumTypeMgr';
import { RecruitLimitToggleItem } from './RecruitLimitToggleItem';
const { ccclass, property } = _decorator;

@ccclass('RecruitLimitView')
export class RecruitLimitView extends ViewPop {
    @property(Node)
    node_spine: Node = null;
    @property(Label)
    lbl_time: Label = null;
    @property(Prefab)
    pfb_item: Prefab = null;
    @property(Node)
    node_content: Node = null;
    @property(ScrollView)
    scroll_view: ScrollView = null;
    @property(Label)
    lbl_progress_gacha: Label = null;
    @property(Sprite)
    sp_recruit_item_1: Sprite = null;
    @property(Sprite)
    sp_recruit_item_10: Sprite = null;
    @property(RichText)
    lbl_tips: RichText = null;
    @property(RichText)
    lbl_tips1: RichText = null;

    @property(Prefab)
    pfb_toggle_item: Prefab = null;
    @property(Node)
    node_toggle_content: Node = null;

    private actInfos: ActivityOpenInfo[] = [];
    private curInfo: ActivityOpenInfo = null;
    private countDown: number = 0;
    private actTab: tab.GachaUpTable = null;
    private _isGacha: boolean = false;
    private _curGachaCount: number = 0;
    public _recruitHerosMap: Map<number, number> = new Map();
    public curIndex: number = 0;
    onShow(): void {
        this.setRecruitMap();
        this.actInfos = ActivityData.ins.getAllUpData();
        this.switchView(0)
        this.createToggle();
    }
    switchView(actIndex: number) {
        this.curIndex = actIndex;
        this.curInfo = this.actInfos[actIndex];
        this.countDown = Number(this.curInfo.endTime) - RoleData.ins.getServerUtcTime();
        this.timeUpdate();
        this.unschedule(this.timeUpdate);
        this.schedule(this.timeUpdate, 1);

        this.actTab = tab.getData().GachaUpTableById.getValue(this.curInfo.activityTable.Param1);
        createAnimation(this.node_spine, this.actTab.AnimationId);
        this.createTaskList();

        const gachaTab: tab.GachaTable = tab.getData().GachaTableById.getValue(this.actTab.GachaIds[0]);
        const itemId = gachaTab.ItemId;
        const itemTab: tab.ItemTable = tab.getData().ItemTableById.getValue(itemId);
        this.sp_recruit_item_1.setTexture(itemTab.Icon);
        this.sp_recruit_item_10.setTexture(itemTab.Icon);

        const heroId = Number(String(this.actTab.AnimationId).slice(0, 4));
        const heroItemTab = tab.getData().ItemTableById.getValue(heroId);
        this.lbl_tips1.string = LangMgr.getCombineString("ui_recruit_9", [LangMgr.getLab(heroItemTab.Name)]);
        this.refreshTips();
    }
    /* 初始化map */
    setRecruitMap() {
        this._recruitHerosMap.clear();
        const heros = HeroData.ins.getHeros();
        for (let i = 0; i < heros.length; i++) {
            const heroInfo = heros[i];
            const heroTab = heroInfo.heroTable;
            if (heroTab.Aptitude == tab.HeroAptitude.HeroAptitude_SR) {
                if (this._recruitHerosMap.has(heroTab.Id)) {
                    this._recruitHerosMap.set(heroTab.Id, this._recruitHerosMap.get(heroTab.Id) + 1)
                } else {
                    this._recruitHerosMap.set(heroTab.Id, 1);
                }
            }
        }
    }
    protected onDestroy(): void {
        super.onDestroy();
    }
    register(): void {
        EventMgr.onMsg(proto.Ptl.GachaRsp, this.on_s2c_GachaRsp, this);
        EventMgr.onMsg(proto.Ptl.ReceiveActivityGachaUpTasksRewardsRsp, this.on_s2c_ReceiveActivityGachaUpTasksRewardsRsp, this)
    }
    unRegister(): void {
        super.unRegister();
    }
    timeUpdate() {
        this.countDown--;
        if (this.countDown <= 0) {
            this.unschedule(this.timeUpdate);
            this.onClose();
        } else {
            this.lbl_time.string = setTextTime(this.countDown);
        }
    }
    // 创建任务列表
    createTaskList() {
        this.node_content.destroyAllChildren();
        const taskIds = this.actTab.TaskIds;
        for (let i = taskIds.length - 1; i >= 0; i--) {
            const item = instantiate(this.pfb_item);
            this.node_content.addChild(item);
            item.name = String(taskIds[i]);
            const itemTs = item.getComponent(RecruitLimitItem);
            itemTs.initData(this.curInfo.TabId, taskIds[i]);
            const taskInfo = TaskData.ins.getGachaUpTaskInfo(taskIds[i]);

            if(!this._curGachaCount&&i===taskIds.length-1&&taskInfo.progress>=taskInfo.taskTable.FinishParam1){
                this._curGachaCount = taskInfo.progress;
            }

            if (!this._curGachaCount && taskInfo.progress < taskInfo.taskTable.FinishParam1) {
                this._curGachaCount = taskInfo.progress;
            }
        }
        this.lbl_progress_gacha.string = String(this._curGachaCount);
        if (this._curGachaCount === 0) {
            this.scroll_view.scrollToTop();
        } else {
            const progress = ActivityData.ins.getAllUpGotTaskProgress(this.curInfo.TabId)
            this.scroll_view.scrollTo(new Vec2(0, progress), 0.3);
        }
    }
    // 刷新tips
    refreshTips() {
        const gachaTab: tab.GachaTable = tab.getData().GachaTableById.getValue(this.actTab.GachaIds[0]);
        let totalCount = gachaTab.ShowCount;
        for (let i = 0; i < RoleData.ins.drop.data.length; i++) {
            const data = RoleData.ins.drop.data[i];
            if (data.id == "up_100") {
                totalCount = totalCount - data.sum;
                break;
            }
        }
        this.lbl_tips.string = LangMgr.getCombineString("ui_recruit_10", [totalCount]);
    }
    /* 十连抽 */
    private gachaTen() {
        // 点击抽卡播放xuanzhuan结束后弹出抽卡展示界面
        if (this._isGacha) {
            return
        }
        this.sendGacha(this.actTab.GachaIds[1]);
    }

    /* 单抽 */
    private gachaOnce() {
        if (this._isGacha) {
            return
        }
        this.sendGacha(this.actTab.GachaIds[0]);
    }
    sendGacha(id: number) {
        const self = this;
        const gachaTab = tab.getData().GachaTableById.getValue(id);
        const count = gachaTab.ItemCount;
        const itemId = gachaTab.ItemId;
        const itemCount = ItemData.ins.getCount(itemId);
        if (HeroDataControl.ins.getHeroBagFull(gachaTab.ItemCount)) {
            ShowTips(LangMgr.getLab("Tips_herobag_1"))
            return
        }
        if (itemCount < count) {
            ShowItemNotEnoughTips(itemId);
            return;
        }
        let msg = new proto.Msg_GachaReq();
        msg.id = id;
        msg.fromAdv = false;
        Net.Send(proto.Ptl.GachaReq, msg);
    }

    on_s2c_GachaRsp(msg: proto.Msg_GachaRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        if (msg.id % 100 === 1) {
            this._curGachaCount += 1;
        } else {
            this._curGachaCount += 10;
        }
        this.refreshTaskProgress();
        this.showGachaView(msg.rewards, msg.id);
        this.createTaskList();
        this.refreshTips();
    }
    // 刷新任务数据
    refreshTaskProgress() {
        const taskIds = this.actTab.TaskIds;
        for (let i = 0; i < taskIds.length; i++) {
            const taskInfo = TaskData.ins.getGachaUpTaskInfo(taskIds[i]);
            taskInfo.progress = this._curGachaCount;
        }
    }
    showGachaView(_rewards: proto.IItem[], _id: number) {
        UIMgr.ins.show({
            viewName: ViewName.RecruitGetPop, data: {
                rewards: _rewards,
                id: _id,
                type: RecruitType.GaChaUp,
                map: this._recruitHerosMap
            }
        });
    }
    createToggle() {
        this.node_toggle_content.destroyAllChildren();
        if(this.actInfos.length>1){
            for (let i = 0; i < this.actInfos.length; i++) {
                const _key = this.actInfos[i];
                let item = null;
                let itemTs: RecruitLimitToggleItem = null;
                item = instantiate(this.pfb_toggle_item);
                item.parent = this.node_toggle_content;
                item.name = String(_key);
                itemTs = item.getComponent(RecruitLimitToggleItem);
                itemTs.setData(i, this);
            }
        }
    }
    onClickGacha() {
        UIMgr.ins.jumpLayer(tab.Module.Module_RecruitView);
    }
    on_s2c_ReceiveActivityGachaUpTasksRewardsRsp(msg: proto.Msg_ReceiveActivityGachaUpTasksRewardsRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            for (let i = 0; i < msg.taskIds.length; i++) {
                const item = this.node_content.getChildByName(String(msg.taskIds[i]));
                const itemTs = item.getComponent(RecruitLimitItem);
                itemTs.gotAward();
                const progress = ActivityData.ins.getAllUpGotTaskProgress(msg.activityId)
                this.scroll_view.scrollTo(new Vec2(0, progress), 0.3);
            }
        }
    }
    onClickLimitProbability(){
        UIMgr.ins.show({ viewName: ViewName.RecruitLimitProbabilityPop1000})
    }
}


