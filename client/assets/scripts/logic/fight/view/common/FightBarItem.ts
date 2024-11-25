import { _decorator, Button, Color, Component, Label, Node, Prefab, ProgressBar, Sprite } from "cc";
import { tab } from "../../../../Table/table_gen";
import { HeroFightInfo } from "../../data/HeroFightInfo";
import { EventMgr } from "../../../mgr/EventMgr";
import { FightEvent } from "../../define/FightEvent";
import { UIMgr } from "../../../mgr/UIMgr";
import { ViewName } from "../../../define/ViewDefine";
import { HeroInfo } from "../../../model/hero/HeroInfo";
import { FightAttrData } from "../../data/FightAttrData";
import { FightMacro } from "../../define/FightDefine";
import { roots } from "protobufjs";

const { ccclass, property } = _decorator;
/** 战斗角色进度条， 血条、护盾、技能cd */
@ccclass('FightBarItem')
export class FightBarItem extends Component {
    @property(Node)
    hpBg: Node = null
    @property(ProgressBar)
    hpBar: ProgressBar = null
    @property(ProgressBar)
    hpBar1: ProgressBar = null
    @property(ProgressBar)
    shieldBar: ProgressBar = null
    @property(ProgressBar)
    skillCdBar: ProgressBar = null

    _isActive: boolean = false

    attrData: FightAttrData
    get isActive() {
        return this._isActive
    }
    set isActive(bo) {
        this._isActive = bo
        this.node.active = bo
        this.changeSkillCd(1)
        this.changeHp()
    }
    
    setAttrData(data: FightAttrData) {
        this.attrData = data
    }

    changeHp() {
        this.hpBar1.progress = this.hpBar.progress = (this.attrData.hpPercent / FightMacro.PERCENT)
        this.shieldBar.progress = this.attrData.shield / this.attrData.maxShield
        this.checkHpShow()
    }

    checkHpShow() {
        this.hpBg.active = this.shieldBar.node.active = this.hpBar.node.active = this.hpBar1.node.active = false
        if (this.attrData.shield > 0) {
            this.hpBg.active = this.shieldBar.node.active = true
            this.hpRedOrGreen()
        } else {
            if (this.attrData.hpPercent < FightMacro.PERCENT) {
                this.hpBg.active = true
                this.hpRedOrGreen()
            }
        }
    }
    hpRedOrGreen() {
        this.hpBar.node.active = this.attrData.hpPercent >= 5000
        this.hpBar1.node.active = !this.hpBar.node.active
    }

    changeSkillCd(pro: number) {
        pro = Math.min(pro, 1)
        this.skillCdBar.progress = pro
        this.skillCdBar.node.active = pro != 1
    }
}