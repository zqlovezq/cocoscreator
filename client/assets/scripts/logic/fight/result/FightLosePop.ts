import { _decorator, Component, Label, Node, EventTouch } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { proto } from 'client_protocol';
import { BattleMainDataControl } from '../../model/home/battle/BattleMainDataControl';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
import { DamageStatisticsData } from '../base/damage/DamageStatisticsData';
import { ItemInfo } from '../../model/item/ItemInfo';
import { ItemPoolMgr } from '../../model/item/ItemPoolMgr';
import { CommonItem } from '../../model/item/CommonItem';
import { FightRootControl } from '../FightRootControl';
import { setTextTime_3 } from '../../utils/GameUtil';
import { WaveTimeControl } from '../wave/WaveTimeControl';
import { RoleData } from '../../model/role/RoleData';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { Net } from '../../net/Net';
import { stepBranchGuide } from '../../guide/GuideTask';
import { FightData } from '../data/FightData';
import { PvpControl } from '../pvp/PvpControl';
import { FincaFightData } from '../../model/fincaFight/FincaFightData';
const { ccclass, property } = _decorator;

@ccclass('FightLosePop')
export class FightLosePop extends ViewPop {
    @property(Node)
    node_content: Node = null;
    @property(Label)
    lbl_name: Label = null;
    @property(Label)
    lbl_skill_count: Label = null;
    @property(Label)
    lbl_max_alive_second: Label = null;
    @property(Label)
    lbl_alive_second: Label = null;
    @property(Node)
    damage_Node: Node = null
    @property(Node)
    great_node: Node = null
    @property(Label)
    fincaFight_result: Label = null;

    private awards: proto.Item[] = [];
    protected onLoad(): void {
        super.onLoad()
        if (FightData.ins.isPvp) {
            RoleData.ins.curClearStageId = 60001;
            this.lbl_skill_count.node.parent.active = false
            this.great_node.active = false
            this.damage_Node.active = false
        }
    }

    register(): void {

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
        // this.lbl_name.string = LangMgr.getLab(chapterData.Name);
        const pveTab = tab.getData().PveStageTableByStageId.getValue(FightData.ins.stageId);
        this.lbl_name.string = LangMgr.getLab(pveTab.StageName);
        // 击杀怪物数量
        this.lbl_skill_count.string = String(DamageStatisticsData.ins.totalKill);
        // 最大存活时间
        if (pveTab.StageType === tab.PveStageType.PveStageType_MainChapter) {
            this.lbl_max_alive_second.string = setTextTime_3(BattleMainDataControl.ins.getCurMaxAliveSecond(RoleData.ins.curClearStageId));
        } else {
            this.lbl_max_alive_second.string = setTextTime_3(WaveTimeControl.ins.nowTotalTime);
        }
        // 当前的时间
        this.lbl_alive_second.string = setTextTime_3(WaveTimeControl.ins.nowTotalTime);
        if (pveTab.StageType === tab.PveStageType.PveStageType_PVPBattle) {
            this.lbl_alive_second.string = "" //setTextTime_3(Math.floor(PvpControl.ins.time/1000));
            this.fincaFight_result.node.active = true
            this.fincaFight_result.string = LangMgr.getCombineString("ui_fincafight_13", [FincaFightData.ins.getChangeScoreStr(FightData.ins.fincaBattleFightRsp.newScore)])
        }

        // 如果当前处于新手引导阶段
        if (BattleMainDataControl.ins.getStageClearIds().length === 0 && RoleData.ins.curClearStageId === 101) {
            RoleData.ins.setClientData("guideTrunk", String(200));
            stepBranchGuide(301);
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

    // 点击战斗伤害详情
    clickDamageDetail(event: EventTouch) {
        UIMgr.ins.show({ viewName: ViewName.FightDamageRankPop, data: { event: event } })
    }

}


