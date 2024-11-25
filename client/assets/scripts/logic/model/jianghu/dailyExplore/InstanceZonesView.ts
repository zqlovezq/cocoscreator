import { _decorator, Button, Component, EventTouch, instantiate, Label, Node, Prefab, Sprite, Toggle, UITransform } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { JIANGHU_TYPE } from '../../../../Common/script/EnumTypeMgr';
import { RoleData } from '../../role/RoleData';
import InfiniteList from '../../../../Common/InfiniteList/InfiniteList';
import { InstanceZonesViewItem } from './InstanceZonesViewItem';
import { tab } from '../../../../Table/table_gen';
import { EventMgr } from '../../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { Net } from '../../../net/Net';
import { ShowItemNotEnoughTips, ShowTips, UIMgr } from '../../../mgr/UIMgr';
import { ViewName } from '../../../define/ViewDefine';
import { GameplayViewDataMgr } from '../GameplayViewDataMgr';
import { LangMgr } from '../../../mgr/LangMgr';
import { CommonTipsPop } from '../../common/CommonTipsPop';
import { ItemData } from '../../item/ItemData';
import { RedMgr } from '../../../mgr/RedMgr';
import { RedDotType } from '../../../red/RedDotType';
import { ActivityData } from '../../activity/ActivityData';
import { ConsumptionToPurchase, GameUtil } from '../../../utils/GameUtil';
const { ccclass, property } = _decorator;

@ccclass('InstanceZonesView')
export class InstanceZonesView extends ViewPop {
    @property(Label)
    lbl_power: Label = null;
    @property(InfiniteList)
    list_view: InfiniteList = null;
    @property(Prefab)
    pfb_item: Node = null;
    @property(Node)
    node_gold_bg: Node = null;
    @property(Node)
    node_exp_bg: Node = null;
    @property(Node)
    node_sweep_free: Node = null;
    @property(Node)
    node_sweep_buy: Node = null;
    @property(Node)
    reward_btn_1: Node = null;
    @property(Node)
    reward_btn_2: Node = null;
    @property(Node)
    node_toggle: Node = null;
    @property(Node)
    node_sweep: Node = null;
    @property(Node)
    node_ordinary_sweep: Node = null;
    @property(Label)
    node_sweep_buy_diamond: Label = null;

    private view_type: JIANGHU_TYPE = JIANGHU_TYPE.NONE;
    private _GoldStageData: tab.PveStageTable[] = [];
    private _FeedStageData: tab.PveStageTable[] = [];
    private curExportInfo: proto.IExportStageInfo = null;
    private _sweepInfo: any = null;
    register(): void {
        EventMgr.onMsg(proto.Ptl.StartStageRsp, this.on_s2c_StartStageRsp, this);
        EventMgr.onMsg(proto.Ptl.FinishStageRsp, this.on_s2c_FinishStageRsp, this);
        EventMgr.onMsg(proto.Ptl.SweepExploreStageRsp, this.on_s2c_SweepExploreStageRsp, this)
        EventMgr.onMsg(proto.Ptl.SweepExploreStageOneClickRsp, this.on_s2c_SweepExploreStageOneClickRsp, this)
        EventMgr.onMsg(proto.Ptl.GetExploreStageInfoMapRsp, this.on_s2c_GetExploreStageInfoMapRsp, this);
    }
    unRegister(): void {
        super.unRegister();
    }
    on_s2c_GetExploreStageInfoMapRsp(msg: proto.Msg_GetExploreStageInfoMapRsp) {
        GameplayViewDataMgr.ins.initData(msg.stageInfoMap);
        RedMgr.refreshEvent(RedDotType.ChallengeDailyFreeTimes);
        this.list_view.Refresh();
        this.scrollToIndex();
    }
    // 开始主线关卡
    on_s2c_StartStageRsp(msg: proto.Msg_StartStageRsp) {
        // let finish_msg = new proto.Msg_FinishStageReq();
        // finish_msg.result = proto.Msg_FinishStageReq.Result.Win;
        // finish_msg.aliveSeconds = 540
        // Net.Send(proto.Ptl.FinishStageReq, finish_msg)
    }
    on_s2c_FinishStageRsp(msg: proto.Msg_FinishStageRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        let _msg = new proto.Msg_GetExploreStageInfoMapReq();
        Net.Send(proto.Ptl.GetExploreStageInfoMapReq, _msg);
    }
    on_s2c_SweepExploreStageRsp(msg: proto.Msg_SweepExploreStageRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
        this.curExportInfo.freeSweepTimes = msg.freeSweepTimes;
        this.curExportInfo.notFreeSweepTimes = msg.notFreeSweepTimes;
        this.changeDataByViewType(false);
        this.list_view.Refresh();
        RedMgr.refreshEvent(RedDotType.ChallengeDailyFreeTimes);
    }
    on_s2c_SweepExploreStageOneClickRsp(msg: proto.Msg_SweepExploreStageOneClickRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
        this.curExportInfo.freeSweepTimes = msg.freeSweepTimes;
        this.curExportInfo.notFreeSweepTimes = msg.notFreeSweepTimes;
        this.changeDataByViewType(false);
        this.list_view.Refresh();
        RedMgr.refreshEvent(RedDotType.ChallengeDailyFreeTimes);
    }
    onShow(): void {
        // 默认黄金工厂
        RedMgr.refreshEvent(RedDotType.ChallengeDailyAward);
        if(typeof this.openData==="number"){
            this.openData = [this.openData];
        }
        this.view_type = this.openData ? this.openData[0] : JIANGHU_TYPE.GoldStage;
        this.node_toggle.getChildByName("Toggle" + this.view_type).getComponent(Toggle).isChecked = true;
        this.changeDataByViewType(true);
        this._GoldStageData = GameplayViewDataMgr.ins.getStageTab(JIANGHU_TYPE.GoldStage);
        this._FeedStageData = GameplayViewDataMgr.ins.getStageTab(JIANGHU_TYPE.FeedStage);
        this.lbl_power.string = GameUtil.convertNumber(RoleData.ins.powerScore);
        // const vipLevel = ActivityData.ins.vipMsg.vipLevel;

        // this.node_sweep.active = vipLevel >= 2;
        this.list_view.Init({
            getCellNumber: this.getCellCount.bind(this),
            getCellSize: this.getCellHeight.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView: this.getCellView.bind(this),
            getCellData: this.GetCellData.bind(this),
        });
        this.scrollToIndex();
    }
    // 根据viewtype变化的数据
    changeDataByViewType(type: boolean) {
        if (type) {
            this.curExportInfo = GameplayViewDataMgr.ins.getExportInfo(this.view_type);
            this.node_gold_bg.active = this.view_type === JIANGHU_TYPE.GoldStage;
            this.node_exp_bg.active = !(this.view_type === JIANGHU_TYPE.GoldStage);
            this.reward_btn_1.active = this.view_type === JIANGHU_TYPE.GoldStage;
            this.reward_btn_2.active = this.view_type === JIANGHU_TYPE.FeedStage;
        }
        this._sweepInfo = GameplayViewDataMgr.ins.getSweepInfo(this.view_type);
        GameplayViewDataMgr.ins.setCurFightStageId(this.view_type);
        if (this._sweepInfo.freeTimes > 0) {
            this.node_sweep_free.active = true;
            this.node_sweep_buy.active = false;
            this.node_sweep_free.getChildByName("num_label").getComponent(Label).string = String(this._sweepInfo.freeTimes);
        } else {
            this.node_sweep_free.active = false;
            this.node_sweep_buy.active = true;
            this.node_sweep_buy.getChildByName("num_label").getComponent(Label).string = String(this._sweepInfo.buyTimes);
        }
        const vipLevel = ActivityData.ins.vipMsg.vipLevel;
        if (this.view_type === JIANGHU_TYPE.GoldStage) {
            this.node_ordinary_sweep.active = vipLevel < 2 && this.curExportInfo.clearedStageIds.indexOf(10101) > -1;
        } else {
            this.node_ordinary_sweep.active = vipLevel < 2 && this.curExportInfo.clearedStageIds.indexOf(10201) > -1;
        }
        this.setOrdinaryBtn();
        this.node_sweep.getComponent(Sprite).grayscale = (this._sweepInfo.freeTimes===0&&this._sweepInfo.buyTimes===0)||vipLevel < 2;
        this.node_sweep.getComponent(Button).interactable = !(this._sweepInfo.freeTimes===0&&this._sweepInfo.buyTimes===0)&&vipLevel >= 2;

    }
    scrollToIndex() {
        const index = this.curExportInfo.clearedStageIds.indexOf(GameplayViewDataMgr.ins.getCurSweepStageId(this.view_type));
        const pos = this.list_view.GetScrollPosOfCell(index);
        const maxY = this.list_view.getContent().getComponent(UITransform).height-490;
        let max_y = pos.y>maxY?maxY:pos.y;
        this.list_view.setContentPos(max_y, 0, max_y);
    }
    protected onDestroy(): void {
        super.onDestroy();
    }
    clickChangeView(e: EventTouch, type: string) {
        if (this.view_type === Number(type)) {
            return;
        }
        this.view_type = Number(type);
        this.changeDataByViewType(true);
        this.list_view.Reload(false, true);
        this.scrollToIndex();
    }
    getCellCount() {
        if (this.view_type === JIANGHU_TYPE.GoldStage) {
            return this._GoldStageData.length;
        } else {
            return this._FeedStageData.length;
        }
    }
    getCellHeight(idx: number) {
        return 100;
    }
    getCellIdentifer(idx: number) {
        return "InstanceZonesViewItem"
    }
    getCellView(idx: number, identifer: string) {
        return instantiate(this.pfb_item).getComponent(InstanceZonesViewItem);
    }
    GetCellData(idx: number) {
        if (this.view_type === JIANGHU_TYPE.GoldStage) {
            return { data: this._GoldStageData[idx], type: this.view_type, exportData: this.curExportInfo };
        } else {
            return { data: this._FeedStageData[idx], type: this.view_type, exportData: this.curExportInfo };
        }
    }
    // 点击进入通关奖励界面
    onClickAwardLayer() {
        UIMgr.ins.show({ viewName: ViewName.InstanceRewardPop, data: this.view_type })
    }
    // 一键扫荡
    oneClickSweep() {
        const sweepInfo = this._sweepInfo;
        let needDiamond = 0;
        const curHaveDiamond = ItemData.ins.getCount(1);
        const sendMsg = (() => {
            let msg = new proto.Msg_SweepExploreStageOneClickReq();
            msg.buySweepTimes = sweepInfo.buyTimes > 0;
            msg.stageId = GameplayViewDataMgr.ins.getCurSweepStageId(this.view_type);
            Net.Send(proto.Ptl.SweepExploreStageOneClickReq, msg);
        })
        // 剩余次数 所需要的钻石为
        if (sweepInfo.buyTimes) {
            for (let i = this.curExportInfo.notFreeSweepTimes; i < sweepInfo.maxBuyTimes; i++) {
                const addCount = sweepInfo.diamondData[i]? sweepInfo.diamondData[i]:sweepInfo.diamondData[sweepInfo.diamondData.length-1]
                needDiamond += addCount
            }
            if (this.curExportInfo.clearedStageIds.length > 0) {
                const tipsStr = LangMgr.getCombineString("Tips_instance_2", [sweepInfo.freeTimes, sweepInfo.buyTimes, needDiamond]);
                CommonTipsPop.create(tipsStr, ((val) => {
                    if (val) {
                        if (curHaveDiamond < needDiamond) {
                            ShowItemNotEnoughTips(1);
                        } else {
                            sendMsg();
                        }
                    }
                }))
            }
        } else {
            ShowTips(LangMgr.getLab("Tips_timeshortage"));
        }
    }
    // 关闭界面
    onClikhideView() {
        this.onClose();
        UIMgr.ins.show({ viewName: ViewName.GameplayView })
    }
    // 设置普通扫荡按钮
    setOrdinaryBtn() {
        if (this.node_ordinary_sweep.active) {
            const sweepNode = this.node_ordinary_sweep.getChildByName("sweep_btn");
            const buyNode = this.node_ordinary_sweep.getChildByName("paysweep_btn")
            const lockNode = this.node_ordinary_sweep.getChildByName("lock_node")
            sweepNode.active = this._sweepInfo.freeTimes > 0;
            buyNode.active = this._sweepInfo.freeTimes == 0 && this._sweepInfo.buyTimes > 0;
            lockNode.active = this._sweepInfo.buyTimes === 0;
            if (this.node_sweep_buy.active) {
                this.node_sweep_buy_diamond.string = LangMgr.getCombineString("ui_instance_3", [this._sweepInfo.diamondData[this.curExportInfo.notFreeSweepTimes]]);
            }
        }
    }
    // 扫荡
    onClickSweep() {
        const canSweep = this.setSweepdata();
        if (canSweep) {
            this.sendMsg();
        }
    }
    sendMsg() {
        let msg = new proto.Msg_SweepExploreStageReq();
        msg.stageId = GameplayViewDataMgr.ins.getCurSweepStageId(this.view_type);
        Net.Send(proto.Ptl.SweepExploreStageReq, msg)
    }
    // 如果是扫荡判断当前的数据 返回是否可以扫荡
    setSweepdata(): boolean {
        var self = this;
        const sweepInfo = this._sweepInfo;
        const needDiamond = this._sweepInfo.diamondData[this.curExportInfo.notFreeSweepTimes];
        let canUse = false;
        if (sweepInfo.freeTimes === 0) {
            // 判断付费次数
            if (sweepInfo.buyTimes === 0) {
                ShowTips(LangMgr.getLab('Tips_timeshortage'));
            } else {
                // 弹窗是否花费一定钻石购买次数
                ConsumptionToPurchase(1, needDiamond, "Tips_instance_1", () => {
                    self.sendMsg();
                })
            }
        } else {
            canUse = true;
        }
        return canUse;
    }
}


