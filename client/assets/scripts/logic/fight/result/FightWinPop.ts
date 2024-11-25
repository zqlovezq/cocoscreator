import { _decorator, Component, EventTouch, Label, Node } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { proto } from 'client_protocol';
import { ItemInfo } from '../../model/item/ItemInfo';
import { ItemPoolMgr } from '../../model/item/ItemPoolMgr';
import { CommonItem } from '../../model/item/CommonItem';
import { FightRootControl } from '../FightRootControl';
import { tab } from '../../../Table/table_gen';
import { BattleMainDataControl } from '../../model/home/battle/BattleMainDataControl';
import { LangMgr } from '../../mgr/LangMgr';
import { DamageStatisticsData } from '../base/damage/DamageStatisticsData';
import { AdMgr } from '../../model/AdMgr';
import { Net } from '../../net/Net';
import { EventMgr } from '../../mgr/EventMgr';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { RoleData } from '../../model/role/RoleData';
import { GameplayViewDataMgr } from '../../model/jianghu/GameplayViewDataMgr';
import { OpenFunctionMgr } from '../../../Common/component/OpenFunctionMgr';
import { FightData } from '../data/FightData';
import { FincaFightData } from '../../model/fincaFight/FincaFightData';
const { ccclass, property } = _decorator;

@ccclass('FightWinPop')
export class FightWinPop extends ViewPop {
    @property(Node)
    node_content: Node = null;
    @property(Label)
    lbl_name: Label = null;
    @property(Label)
    lbl_skill_count: Label = null;
    @property(Node)
    node_double: Node = null;
    @property(Label)
    lbl_ad_times: Label = null;
    @property(Node)
    damage_Node: Node = null

    @property(Label)
    fincaFight_result: Label = null;


    private awards: proto.Item[] = [];
    protected onLoad(): void {
        super.onLoad()
        if (FightData.ins.isPvp) {
            RoleData.ins.curClearStageId = 60001;
            this.lbl_skill_count.node.parent.active = false
            this.node_double.active = false
            this.damage_Node.active = false
        }
    }
    register(): void {
        EventMgr.onMsg(proto.Ptl.ReceiveMainStageDoubleRewardsRsp, this.on_s2c_ReceiveMainStageDoubleRewardsRsp, this);
    }
    on_s2c_ReceiveMainStageDoubleRewardsRsp(msg: proto.Msg_ReceiveMainStageDoubleRewardsRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        // 领取双倍奖励
        UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards });
    }
    unRegister(): void {
        super.unRegister()
    }
    onShow(): void {
        // 创建奖励
        this.awards = this.openData;
        for (let i = 0; i < this.awards.length; i++) {
            const award: proto.Item = this.awards[i];
            this.createCommonItem(award);
        }
        // 设置关卡名称
        const pveTab = tab.getData().PveStageTableByStageId.getValue(FightData.ins.stageId);

        if (pveTab.StageType === tab.PveStageType.PveStageType_FeedStage || pveTab.StageType === tab.PveStageType.PveStageType_GoldStage) {
            GameplayViewDataMgr.ins.addExportInfo(pveTab.StageType, RoleData.ins.curClearStageId);
        }

        // this.lbl_name.string = LangMgr.getLab(chapterData.Name);
        this.lbl_name.string = LangMgr.getLab(pveTab.StageName);
        // 击杀怪物数量
        this.lbl_skill_count.string = String(DamageStatisticsData.ins.totalKill);
        // 设置广告次数
        const adTimes = AdMgr.ins.getAdCountByType(tab.AdType.AdType_MainChapterReward);
        const maxTimes = AdMgr.ins.getAdCountMaxByType(tab.AdType.AdType_MainChapterReward);
        const isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_WinResultDoubleReward)
        this.node_double.active = (maxTimes > adTimes) && isOpen && pveTab.StageType != tab.PveStageType.PveStageType_PVPBattle;

        if (pveTab.StageType !== tab.PveStageType.PveStageType_MainChapter) {
            this.node_double.active = false;
        }
        this.lbl_ad_times.string = "(" + (maxTimes - adTimes) + "/" + maxTimes + ")"

        if (pveTab.StageType == tab.PveStageType.PveStageType_PVPBattle) {
            this.fincaFight_result.node.active = true
            this.fincaFight_result.string = LangMgr.getCombineString("ui_fincafight_13", [ FincaFightData.ins.getChangeScoreStr(FightData.ins.fincaBattleFightRsp.newScore)])
        }
    }
    protected onDestroy(): void {
        super.onDestroy()
    }
    createCommonItem(data: proto.Item) {
        const info = new ItemInfo();
        info.itemId = data.itemId;
        info.num = data.num;
        const itemItem = ItemPoolMgr.ins.createItem(info, this.node_content);
        const itemTs = itemItem.getComponent(CommonItem);
        itemTs.setTouchCallBack(() => {

        })
    }
    // 点击确定返回主页
    clickGoHomeBtn() {
        if (FightData.ins.isPvp) {
            FightRootControl.ins.pvpEnd()
            return
        }
        FightRootControl.ins.enterMain();
    }
    // 点击领取广告奖励
    clickAd() {
        this.node_double.active = false;
        AdMgr.ins.playVideoAd(tab.AdType.AdType_MainChapterReward, () => {
            let msg = new proto.Msg_ReceiveMainStageDoubleRewardsReq();
            Net.Send(proto.Ptl.ReceiveMainStageDoubleRewardsReq, msg);
        })

    }
    // 点击战斗伤害详情
    clickDamageDetail(event: EventTouch) {
        UIMgr.ins.show({ viewName: ViewName.FightDamageRankPop, data: { event: event } })
    }
}


