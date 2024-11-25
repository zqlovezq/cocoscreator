import { _decorator, Button, Color, Component, Label, Node, Prefab, ProgressBar, Sprite, SpriteFrame } from "cc";

import { FightAttrData } from "../../data/FightAttrData";
import { Monster } from "../../base/obj/role/monster/Monster";
import { LangMgr } from "../../../mgr/LangMgr";

let HP_PRO = 2000

const { ccclass, property } = _decorator;
/** 战斗Boss进度条， 血条*/
@ccclass('FightBossBarItem')
export class FightBossBarItem extends Component {

    @property(ProgressBar)
    hpBar1: ProgressBar = null
    @property(ProgressBar)
    hpBar2: ProgressBar = null

    @property(Label)
    nameLab: Label = null

    @property(Label)
    hpCount: Label = null

    @property([SpriteFrame])
    barSfs: SpriteFrame[] = []


    _isActive: boolean = false

    attrData: FightAttrData

    monster: Monster
    lastHp: number = 0
    lastCount: number = 0
    setBoss(_monster: Monster) {
        this.monster = _monster
        if (this.monster == null) {
            this.node.active = false
            return
        }
        this.lastHp = -1
        this.node.active = true
        this.setAttrData(this.monster.info.attrData)
        this.nameLab.string = LangMgr.getLab(this.monster.info.configTab.Name)
    }

    dead() {
        if (this.node.active && this.monster.isDead) {
            this.hpBar1.progress = this.hpBar2.progress = 0
        }
    }

    setAttrData(data: FightAttrData) {
        this.attrData = data
    }

    protected update(dt: number): void {
        if (this.monster && !this.monster.isDead && this.monster.info) {
            this.changeHp()
        }
    }
    changeHp() {
        if (this.lastHp == 1 || this.lastHp != this.attrData.hpPercent) {
            this.lastHp = this.attrData.hpPercent
            let count = Math.ceil((this.lastHp) / HP_PRO)
            if (count != this.lastCount) {
                this.hpCount.string = ("x" + count)
                this.changeColor(count)
            }
            this.lastCount = count
            this.hpBar2.progress = 1 - (count * HP_PRO - this.lastHp) / HP_PRO
        }
    }
    changeColor(colorCount: number) {
        colorCount = colorCount - 1
        this.hpBar2.barSprite.spriteFrame = this.barSfs[colorCount]
        if (colorCount != 0) {
            this.hpBar1.barSprite.spriteFrame = this.barSfs[colorCount - 1]
            this.hpBar1.progress = 1
        } else {
            this.hpBar1.progress = 0
        }
    }
}