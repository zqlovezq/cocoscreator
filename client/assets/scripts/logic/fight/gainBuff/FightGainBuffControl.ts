import { _decorator } from "cc";
import { AbsControl, IClear } from "../../../framework/base/IAbs";
import { tab } from "../../../Table/table_gen";
// import { RogueControl } from "../view/rogue/RogueControl";
import { EventMgr } from "../../mgr/EventMgr";
import { FightEvent } from "../define/FightEvent";
import { Role } from "../base/obj/role/role/Role";
import { RogueControl } from "../view/rogue/RogueControl";
import { AbsRole } from "../base/obj/role/AbsRole";
import { Monster } from "../base/obj/role/monster/Monster";
import { SkillControl } from "../base/skill/SkillControl";
import { SkillTab } from "../power/powerTab/SkillTab";

const { ccclass, property } = _decorator;

/** 战场增益buff */
export class FightGainBuffControl extends AbsControl implements IClear {
    private static _instance: FightGainBuffControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new FightGainBuffControl();
        }
        return this._instance;
    }

    gainMap: Map<tab.EffectTarget, tab.PveStageBuffTable[]> = new Map();
    purge(): void {
        this.gainMap.clear()
    }

    init() {
        this.purge()
    }

    initRegister() {
        this.register()
    }

    register() {
        EventMgr.onFight(FightEvent.Fight_Start_Complete, this.onFight_Start_Complete, this)
        EventMgr.onFight(FightEvent.Select_leader, this.onSelect_leader, this)
        EventMgr.onFight(FightEvent.checkAbsRoleGainBuff, this.oncheckAbsRoleGainBuff, this)
    }

    onFight_Start_Complete() {
        //处理进场送rogueid
        let gainList = this.getListByType(tab.EffectTarget.EffectTarget_Rogue)
        for (let i = 0; i < gainList.length; i++) {
            let conf = gainList[i]
            for (let index = 0; index < conf.CorrespondingId.length; index++) {
                EventMgr.emitFight(FightEvent.giveRogue, conf.CorrespondingId[index])
            }
        }
    }
    onSelect_leader(leaderRole: Role) {
        let list = this.getListByType(tab.EffectTarget.EffectTarget_Hero)
        if (list.length > 0) {
            for (let index = 0; index < list.length; index++) {
                const v = list[index];
                if (v.Own == tab.OwnClass.OwnClass_TeamLeader) {
                    this.gainAbsRole(leaderRole, v)
                }
            }
        }
        EventMgr.emitFight(FightEvent.checkHeroUp, leaderRole)
    }

    oncheckAbsRoleGainBuff(absRole: AbsRole) {
        if (absRole.isRole()) {
            this.inRole(absRole as Role)
        } else if (absRole.isMonster()) {
            this.inMonster(absRole as Monster)
        }
    }

    addIds(ids: number[]) {
        ids.forEach(id => {
            this.addId(id)
        })

    }

    addId(id: number) {
        let conf = tab.getData().PveStageBuffTableById.getValue(id)
        if (conf) {
            let list = this.getListByType(conf.EffectTarget)
            list.push(conf)
        }
    }

    hasType(type: tab.EffectTarget) {
        return this.gainMap.has(type);
    }

    getListByType(type: tab.EffectTarget) {
        if (!this.hasType(type)) {
            this.gainMap.set(type, [])
        }
        return this.gainMap.get(type);
    }

    /** 是否有指定类型的对应id */
    hasTypeAndCorrespondingId(type: tab.EffectTarget, id: number) {
        let list = this.getListByType(type)
        for (let index = 0; index < list.length; index++) {
            const v = list[index];
            for (let j = 0; j < v.CorrespondingId.length; j++) {
                const vid = v.CorrespondingId[j];
                if (vid == id) {
                    return true
                }
            }
        }
        return false
    }


    // /**
    //  * 
    //  * @param role 角色
    //  */
    inRole(role: Role) {
        let list = this.getListByType(tab.EffectTarget.EffectTarget_Hero)
        if (list.length > 0) {
            for (let index = 0; index < list.length; index++) {
                const v = list[index];
                if (v.Own == tab.OwnClass.OwnClass_TeamLeader) { //队长在选择完英雄后，事件内处理
                    continue;
                }
                let heroClass: tab.HeroClass = this.ownClassToHeroClass(v.Own)
                if (v.Own == tab.OwnClass.OwnClass_All) {
                    this.gainAbsRole(role, v)
                } else if (role.info.isHeroClass(heroClass)) {
                    this.gainAbsRole(role, v)
                }
            }
        }
    }

    inMonster(monster: Monster) {
        let list = this.getListByType(tab.EffectTarget.EffectTarget_Monster)
        if (list.length > 0) {
            for (let index = 0; index < list.length; index++) {
                const v = list[index];
                if (v.Own == tab.OwnClass.OwnClass_All) {
                    this.gainAbsRole(monster, v)
                }
            }
        }
    }

    gainAbsRole(absRole: AbsRole, conf: tab.PveStageBuffTable) {
        // console.log("增益", absRole, conf)
        for (let index = 0; index < conf.CorrespondingId.length; index++) {
            const v = conf.CorrespondingId[index];
            let skillTab = absRole.info.skillPowers.createTypeAnyId(tab.PowerType.PowerType_SkillTable, v) as SkillTab
            EventMgr.emitFight(FightEvent.addSkill, skillTab, absRole)
        }
    }


    ownClassToHeroClass(own: tab.OwnClass) {
        switch (own) {
            case tab.OwnClass.OwnClass_All:
                return tab.HeroClass.HeroClass_Any
            case tab.OwnClass.OwnClass_Assassin:
                return tab.HeroClass.HeroClass_Assassin
            case tab.OwnClass.OwnClass_Archer:
                return tab.HeroClass.HeroClass_Archer
            case tab.OwnClass.OwnClass_Priest:
                return tab.HeroClass.HeroClass_Priest
            case tab.OwnClass.OwnClass_Caster:
                return tab.HeroClass.HeroClass_Caster
            case tab.OwnClass.OwnClass_Warrior:
                return tab.HeroClass.HeroClass_Warrior
        }
        return tab.HeroClass.HeroClass_Max
    }

}