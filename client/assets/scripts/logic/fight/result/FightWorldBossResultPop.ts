import { _decorator, Component, Label, Node } from 'cc';
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
import { WorldBossControll } from '../stage/WorldBossControll';
import { FightMacro } from '../define/FightDefine';
const { ccclass, property } = _decorator;

@ccclass('FightWorldBossResultPop')
export class FightWorldBossResultPop extends ViewPop {

    @property(Label)
    damageLab: Label = null;

    register(): void {

    }

    onShow(): void {
        this.damageLab.string = FightMacro.damageStr(WorldBossControll.ins.totalTackDamage)
    }

    // 点击确定返回主页
    clickGoHomeBtn() {
        FightRootControl.ins.enterMain();
    }
    close() {
        if (this.openData && this.openData.cb) {
            this.openData.cb()
        }
        super.close()
    }
}


