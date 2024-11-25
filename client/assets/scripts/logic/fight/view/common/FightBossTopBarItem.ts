import { _decorator, Button, Color, Component, Label, Node, Prefab, ProgressBar, Sprite, SpriteFrame, Animation } from "cc";

import { FightAttrData } from "../../data/FightAttrData";
import { Monster } from "../../base/obj/role/monster/Monster";
import { LangMgr } from "../../../mgr/LangMgr";
import { FightBossBarItem } from "./FightBossBarItem";
import { tab } from "../../../../Table/table_gen";
import { FightMacro } from "../../define/FightDefine";
import { EventMgr } from "../../../mgr/EventMgr";
import { WorldBossControll } from "../../stage/WorldBossControll";
import { FightEvent } from "../../define/FightEvent";
import { FightData } from "../../data/FightData";

const { ccclass, property } = _decorator;
/** 战斗世界BOSS进度条，等级， 血条*/
@ccclass('FightBossTopBarItem')
export class FightBossTopBarItem extends FightBossBarItem {
    @property(Label)
    damageLab: Label = null

    @property(Animation)
    anim: Animation = null
    isFirst: boolean = true
    protected onLoad(): void {
        EventMgr.onFight(FightEvent.World_Boss_LvUp, this.onLvUp, this)
        this.anim.node.active = this.hpCount.node.active = FightData.ins.isWorlBoss()
    }

    protected onDestroy(): void {
        EventMgr.unTarget(this)
    }

    onLvUp() {
        this.anim.play()
        this.changeColor()
    }

    setAttrData(data: FightAttrData) {
        super.setAttrData(data)
        this.updateHp()
        this.changeColor()
    }

    protected update(dt: number): void {
        if (this.lastHp != WorldBossControll.ins.totalTackDamage) {
            this.updateHp()
        }
    }

    updateHp() {
        this.lastHp = WorldBossControll.ins.totalTackDamage
        this.damageLab.string = FightMacro.damageStr(this.lastHp)
        this.hpBar2.progress = WorldBossControll.ins.damagePercent()
    }

    changeColor() {
        this.hpCount.string = "x" + WorldBossControll.ins.nowLv
        let nowBarCount = WorldBossControll.ins.nowLv % this.barSfs.length
        this.hpBar1.barSprite.spriteFrame = this.barSfs[(this.isFirst ? (nowBarCount - 1) : this.barSfs.length - 1) % this.barSfs.length]
        this.hpBar1.progress = 1
        this.hpBar2.barSprite.spriteFrame = this.barSfs[nowBarCount]
        this.isFirst = false
    }
}