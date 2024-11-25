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
import { FightBossBarItem } from "./FightBossBarItem";
import { ComponentBase } from "../../../../framework/base/ComponentBase";
import { AbsRole } from "../../base/obj/role/AbsRole";
import { Monster } from "../../base/obj/role/monster/Monster";
import { FrameControl } from "../../base/frame/FrameControl";
import { AbsObjType } from "../../base/obj/AbsObj";
import { FightDamageRankItem } from "../damage/FightDamageRankItem";
import { FightData } from "../../data/FightData";

const { ccclass, property } = _decorator;
/** 战斗Boss血条，  单boss、双boss*/
@ccclass('FightBossBar')
export class FightBossBar extends ComponentBase {

    @property(FightBossBarItem)
    singleBar: FightBossBarItem = null

    @property(Node)
    doubleNode: Node = null

    @property([FightBossBarItem])
    doubleBars: FightBossBarItem[] = []

    @property(FightBossBarItem)
    topBar: FightBossBarItem = null


    validBoss: Monster[] = []
    protected onLoad(): void {
        super.onLoad()
        if (FightData.ins.isWorldAndGuildBoss()) {
            this.singleBar.node.active = false
            this.singleBar = this.topBar
        }
        this.updateValidBoss()
    }
    register(): void {
        EventMgr.onFight(FightEvent.Boss_Enter, this.onBoss_Enter, this)
        EventMgr.onFight(FightEvent.Boss_Dead_State, this.onBoss_Dead_State, this)
        EventMgr.onFight(FightEvent.Fight_Monster_Dead, this.onFight_Monster_Dead, this)
    }

    onBoss_Enter(absRole: AbsRole) {
        this.updateValidBoss()
    }

    onBoss_Dead_State() {
        this.singleBar.dead()
        for (let index = 0; index < this.doubleBars.length; index++) {
            const v = this.doubleBars[index];
            v.dead()
        }
    }

    onFight_Monster_Dead(absRole: Monster) {
        if (absRole.info && absRole.info.isBoss) {
            this.updateValidBoss()
        }
    }

    updateValidBoss() {
        this.validBoss.length = 0
        let list: Monster[] = FrameControl.ins.getObjList(AbsObjType.enemy) as Monster[]
        for (let index = 0; index < list.length; index++) {
            const v = list[index];
            if (v.info && v.info.isBoss && !v.isDead) {
                this.validBoss.push(v)
            }
        }

        this.node.active = false
        this.singleBar.setBoss(null)
        for (let index = 0; index < this.doubleBars.length; index++) {
            const v = this.doubleBars[index];
            v.setBoss(null)
        }

        if (this.validBoss.length == 1) {
            this.node.active = true
            this.singleBar.node.active = true
            this.doubleNode.active = false
            this.singleBar.setBoss(this.validBoss[0])
        } else if (this.validBoss.length == 2) {
            this.node.active = true
            this.singleBar.node.active = false
            this.doubleNode.active = true
            for (let index = 0; index < this.doubleBars.length; index++) {
                const v = this.doubleBars[index];
                v.setBoss(this.validBoss[index])
            }
        }
    }
}