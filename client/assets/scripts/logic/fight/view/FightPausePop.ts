import { _decorator, Component, EventTouch, instantiate, Label, Node, Prefab, Toggle, UITransform } from 'cc';
import { tab } from '../../../Table/table_gen';
import { ViewPop } from '../../../framework/base/ViewPop';
import { ShowTips, UIMgr } from '../../mgr/UIMgr';
import { FightData } from '../data/FightData';
import { DropControl } from '../drop/DropControl';
import { FightRoleTeam } from './common/FightRoleTeam';
import { FightWeaponTeam } from './common/FightWeaponTeam';
import { RogueBaseItem } from './rogue/RogueBaseItem';
import { RogueSelect, RogueControl } from './rogue/RogueControl';
import { RogueInfo } from './rogue/RogueInfo';
import { FightRootControl } from '../FightRootControl';
import { ViewName } from '../../define/ViewDefine';
import { Func } from '../../utils/Func';
import { CommonTipsPop } from '../../model/common/CommonTipsPop';
import { LangMgr } from '../../mgr/LangMgr';
import { LocalEvent } from '../../define/LocalEvent';
import { EventMgr } from '../../mgr/EventMgr';
import { SettingsManager } from '../../model/role/SettingsManager';
import { OpenFunctionMgr } from '../../../Common/component/OpenFunctionMgr';

const { ccclass, property } = _decorator;

/** 战斗暂停界面 */
@ccclass('FightPausePop')
export class FightPausePop extends ViewPop {


    static async create() {
        if (FightData.ins.pause){
            return
        }
        FightData.ins.pause = true
        await UIMgr.ins.show({ viewName: "FightPausePop" })
    }

    static hide() {
        FightData.ins.pause = false
        UIMgr.ins.hideView("FightPausePop")
    }

    @property(FightRoleTeam)
    fightTeam: FightRoleTeam = null
    @property(FightWeaponTeam)
    fightWeapon: FightWeaponTeam = null
    @property(Toggle)
    autoToggle: Toggle = null;
    @property(Toggle)
    autoSelectToggle: Toggle = null;

    register(): void {
        // audoDropCollect
    }

    onShow(): void {
        this.fightTeam.refresh(true);
        this.fightWeapon.refresh(true);
        this.autoToggle.isChecked = DropControl.ins.audoDropCollect
        this.autoSelectToggle.isChecked = SettingsManager.ins.getSetting("isAutoSelectRogue");
    }
    /**
     * 是否自动拾取
     * @returns 
     */
    getIsAuto() {
        return this.autoToggle.isChecked;
    }
    onClickAuto() {
        DropControl.ins.setAudoDropCollect(this.autoToggle.isChecked)
    }
    onClickAutoEvent(){
        const isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_AutoSelectRogue);
        if(!isOpen){
            ShowTips(LangMgr.getLab("ui_fight_22"));
        }
    }
    onClickAutoSelect(){
        const isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_AutoSelectRogue);
        if(isOpen){
            SettingsManager.ins.setSetting("isAutoSelectRogue", this.autoSelectToggle.isChecked);
        }else{
            this.autoSelectToggle.isChecked = false;
        }
    }
    onClose(): void {
        FightPausePop.hide()
    }

    onExitFight() {
        // 弹窗窗口
        CommonTipsPop.create(LangMgr.getLab("Tips_fight_1"), ((val) => {
            if (val) {
                this.onClose()
                EventMgr.emitLocal(LocalEvent.quitFight)
            }
        }))
    }
    /**点击武器图鉴 */
    onClickWeaponTuJian() {
        UIMgr.ins.show({ viewName: ViewName.WeaponPop })
    }
    /**点击伤害统计 */
    onClickDamageStat(event: EventTouch) {
        UIMgr.ins.show({ viewName: ViewName.FightDamageRankPop, data: { event: event } })

    }
}