import { _decorator, CCFloat, CCInteger, Component, instantiate, Label, Node, Prefab, UITransform } from 'cc';
import { tab } from '../../../../Table/table_gen';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { DropControl } from '../../drop/DropControl';
import { RogueBaseItem } from '../rogue/RogueBaseItem';
import { RogueSelect, RogueControl } from '../rogue/RogueControl';
import { RogueInfo } from '../rogue/RogueInfo';
import { RoguePop } from '../rogue/RoguePop';
import { FightRoleTeam } from './FightRoleTeam';
import { FightWeaponTeam } from './FightWeaponTeam';
import { LevelPhaseTime } from '../../table/Leveljson';
import { LoadTable } from '../../../../Table/table';

const { ccclass, property } = _decorator;

/** 警告界面 */
@ccclass('WarningPop')
export class WarningPop extends ViewPop {
    @property(Node)
    boss_node: Node = null
    @property(Node)
    monster_node: Node = null

    @property(CCFloat)
    bossTime: number = 0

    @property(CCFloat)
    monsterTime: number = 0
    register(): void {

    }

    onShow(): void {
        this.playAnim(Number(this.openData))
    }

    playAnim(warning: number) {
        this.boss_node.active = this.monster_node.active = false
        let time = 0
        /** 警告：1.怪潮、2.BOSS */
        if (warning == 1) {//怪
            this.monster_node.active = true
            time = this.monsterTime
        } else {//boss
            this.boss_node.active = true
            time = this.bossTime
        }

        this.unscheduleAllCallbacks()
        this.scheduleOnce(() => {
            this.onClose()
        }, time)
    }

}