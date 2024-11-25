import { Node, _decorator, js, macro, sys } from "cc";
import { AbsControl } from "../../../../framework/base/IAbs";
import { AbsRole } from "../obj/role/AbsRole";
import { Buff } from "./Buff";
import { SkillTab } from "../../power/powerTab/SkillTab";
import { Bullet } from "../obj/bullet/Bullet";
import { SearchEnemy } from "../ai/SearchEnemy";
import { Random } from "../../util/Random";
import { tab } from "../../../../Table/table_gen";
import { BuffUI } from "./BuffUI";
import { FightRootControl } from "../../FightRootControl";
import { DamageCalculation } from "../damage/DamageCalculation";
import { BuffTab } from "../../power/powerTab/BuffTab";
import { AbsOwner } from "../obj/AbsOwner";
import { PlayerControl } from "../obj/role/role/PlayerControl";
import { EventMgr } from "../../../mgr/EventMgr";
import { FightEvent } from "../../define/FightEvent";
import { DamageData, DamageSource } from "../damage/DamageData";
import { AbsRoleInfo } from "../obj/role/AbsRoleInfo";
import { Role } from "../obj/role/role/Role";
import { DamageLab } from "../damage/DamageLab";
import { DamageStatisticsData } from "../damage/DamageStatisticsData";
import { FightMacro } from "../../define/FightDefine";
import { FrameControl } from "../frame/FrameControl";
import { AbsObjType } from "../obj/AbsObj";
import { RevoltCheatControl } from "../../cheat/RevoltCheatControl";

const { ccclass, property } = _decorator;


export class BuffControl extends AbsControl {

    private static _instance: BuffControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new BuffControl();
        }
        return this._instance;
    }

    poolUis: Map<number, BuffUI[]> = new Map<number, BuffUI[]>()

    register(): void {
        EventMgr.onFight(FightEvent.Injured, this.onInjured, this)
    }

    soleId: number = 0
    init(): void {
        this.register()
        this.poolUis.clear()
    }

    /** 自增组id */
    addSelfSoleId() {
        this.soleId++
        return this.soleId
    }

    checkSkillAddBuff(skill: SkillTab, attack: AbsRole, enemys: AbsRole[]) {
        if (skill.isHasBuff()) {
            let buffTab: BuffTab
            let buffChance: number = 0
            let isSuccess = false
            for (let index = 0; index < skill.AddBuff.length; index++) {
                buffTab = skill.addBuffTabs[index]
                buffChance = skill.AddBuffChance[index] || 0
                isSuccess = this.checkChanceAddBuff(buffTab, buffChance)
                if (isSuccess) {
                    enemys.forEach((enemy) => {
                        this.addBuff(buffTab, attack.objId, enemy)
                    })
                }
            }
        }
    }

    checkBulletAddBuff(bullet: Bullet, owner: AbsOwner, defanseAbs: AbsRole) {
        if (bullet.info.isHasAddBuff()) {
            let buffTab: BuffTab
            let buffChance: number = 0
            let isSuccess = false
            for (let index = 0; index < bullet.info.configTab.AddBuff.length; index++) {
                buffTab = bullet.info.configTab.addBuffTabs[index]
                buffChance = bullet.info.configTab.AddBuffChance[index] || 0
                isSuccess = this.checkChanceAddBuff(buffTab, buffChance)
                if (isSuccess) {
                    this.addBuff(buffTab, owner.objId, defanseAbs)
                }
            }
        }
    }

    /** 检测概率是否成功 */
    checkChanceAddBuff(buffTab: BuffTab, chance: number) {
        //增加概率
        return Random.isSuccess(chance)
    }

    addBuff(buffTab: BuffTab, addObjId: number, absRole: AbsRole) {
        if (buffTab == null || buffTab.Id == null || FightRootControl.ins.isExitIng) {
            return
        }

        if (FrameControl.ins.getObjById(addObjId)  == null){
            console.log("buff来源已死亡")//怪物策划（李奇硕，buff来源死亡，buff不生效）
            return
        }

        if (buffTab.BuffType == tab.BuffType.BuffType_Loss) {// 减益  判定负面buff免疫
            if (absRole.info.isNegativeBuffImmunity()) {
                console.log("负面buff免疫")
                return
            }
        }


        let buff: Buff
        if (buffTab.Rule == tab.Rule.Rule_SingleCount) {//独立计数， 特殊处理
            let total = 0
            if (buffTab.BuffGroup) {
                total = absRole.info.getBuffGroupTotalCount(buffTab.BuffGroup)
            } else {
                total = absRole.info.getBuffIdTotalCount(buffTab.Id)
            }
            if (buffTab.Number && total >= buffTab.Number) {
                console.log("buff独立计数已满足")
                return
            }
        } else {
            //判断是否是组buff
            if (buffTab.BuffGroup) {
                buff = absRole.info.getBuffByGroup(buffTab.BuffGroup)
            } else {
                buff = absRole.info.getBuff(buffTab.Id, addObjId)
            }
        }

        if (buff == null) {
            //添加buff
            buff = Buff.get()
            buff.setBuffTab(buffTab)

            buff.soleId = this.addSelfSoleId()
            buff.addObjId(addObjId)
            buff.init()
            absRole.info.addBuff(buff)
            RevoltCheatControl.ins.addBuff(absRole,buff)

            this.buffToTrigger(buff)

        } else {
            if (buff.isCanRule()) {
                // console.log(absRole.getBodyId(), "叠加buff", buffTab.Id)
                buff.addRuleNumber(false)
                buff.disposeRule()
                RevoltCheatControl.ins.addBuff(absRole,buff)

                this.buffToTrigger(buff)
            } else if (buff.isClearByType(tab.ClearType.ClearType_StackFull)) {
                absRole.info.removeBuffId(buff.buffId)
                // console.log(absRole.getBodyId(), "buff不可叠加", buffTab.Id)
            }
        }
        if (buff && buff.isValid() && buff.configTab && buff.configTab.isBuffGroup(tab.BuffGroup.BuffGroup_RolesBuffLayerNum)) {
            this.onRolesBuffLayerNum(buff)
        }
    }



    buffToTrigger(buff: Buff) {
        if (buff && buff.isValid()) {
            let addRole = FrameControl.ins.getObjById(buff.addOwner.objId) as AbsRole
            let ownerRole = FrameControl.ins.getObjById(buff.owner.objId) as AbsRole
            if (addRole && ownerRole) {
                addRole.info.onSkillTrigger(tab.Triggertype.Triggertype_AddBuff, { otherAbsInfo: ownerRole.info, buff: buff })
            }

        }
    }


    removeBuffs(buffIds: number[], absRole: AbsRole) {
        for (let index = 0; index < buffIds.length; index++) {
            const v = buffIds[index];
            absRole.info.removeBuffId(v)
        }
    }

    removeBuffType(buffType: tab.BuffType, absRole: AbsRole) {
        absRole.info.removeBuffId(buffType)
    }

    addBuffEffectUI(buff: Buff, absRole: AbsRole) {
        if (buff.configTab.VFXID) {

            //一人身上多个施法者产生同一个buffId, 只显示一个特效，做显示数量
            let buffUi = this.getBuffUI(absRole, buff.buffId)
            if (buffUi == null) {
                buffUi = BuffUI.get()
                if (FightMacro.isEffectShowBelow(buff.configTab.VFXID)) {
                    FightRootControl.ins.getRootView().roleDown.addChild(buffUi.node)
                } else {
                    if (absRole && absRole.isRole()){
                        absRole.node.addChild(buffUi.node)
                    }else{
                        FightRootControl.ins.getRootView().roleUp.addChild(buffUi.node)
                    }
                    
                }

                buffUi.setBuff(buff.buffId, absRole)
                this.pushBuffUI(absRole, buffUi)
            }
            buffUi.addCount()
        }
        if (buff.configTab.isBuffGroup(tab.BuffGroup.BuffGroup_TransferDamage)) {
            this.showTransferDamageUI()
        }
    }
    removeBuffEffectUI(buff: Buff, absRole: AbsRole) {
        RevoltCheatControl.ins.removeBuff(absRole,buff)
        if (buff.configTab.VFXID) {
            let list = this.getBuffUIsById(absRole)
            for (let index = 0; index < list.length; index++) {
                const v = list[index];
                if (v.buffId == buff.buffId) {
                    v.totalCount -= 1
                    if (v.totalCount <= 0) {
                        v.recycle()
                        list.splice(index, 1)
                        break
                    }
                }
            }
        }
        if (buff.configTab.isBuffGroup(tab.BuffGroup.BuffGroup_TransferDamage)) {
            this.showTransferDamageUI()
        }
    }

    showTransferDamageUI() {
        let tdList = this.getTransferDamageGroup()
        if (tdList.length > 0) {
        }
        EventMgr.emitFight(FightEvent.buff_link, tdList)
    }

    getTransferDamageGroup(): Role[] {
        let roles = PlayerControl.ins.getRoles()

        let tdList = []
        for (let index = 0; index < roles.length; index++) {
            const v = roles[index];
            if (v.isActive && !v.isDead && v.info.findBuffByBuffGroup(tab.BuffGroup.BuffGroup_TransferDamage)) {
                tdList.push(v)
            }
        }
        return tdList
    }

    onRolesBuffLayerNum(buff: Buff) {
        let absRole = buff.owner.abs

        if (absRole.isRole()) {
            let maxNum = this.getBuffNumByObjType(absRole.objType, buff.configTab.BuffGroup)
            if (maxNum > 0) {
                let allRole = FrameControl.ins.getObjList(absRole.objType) as Role[]
                let tempBuff: Buff
                for (let index = 0; index < allRole.length; index++) {
                    const tmpRole = allRole[index];
                    tempBuff = tmpRole.info.getBuffByGroup(buff.configTab.BuffGroup)
                    if (tempBuff == null) {
                        this.addBuff(buff.configTab, buff.addOwner.objId, tmpRole)
                        tempBuff = tmpRole.info.getBuffByGroup(buff.configTab.BuffGroup)
                    }
                    //buff已添加，做层级
                    if (tempBuff && maxNum > tempBuff.ruleNumber) {
                        let diff = maxNum - tempBuff.ruleNumber
                        for (let j = 0; j < diff; j++) {
                            tempBuff.addRuleNumber(false)
                            tempBuff.disposeRule()
                        }
                    }
                }
                // for (let index = 0; index < allRole.length; index++) {
                //     const absRole = allRole[index];
                //     tempBuff = absRole.info.getBuffByGroup(buff.configTab.BuffGroup)
                //     console.log("每一人曾数：",tempBuff.ruleNumber)
                // }
            }
            // console.log("buff最大层数-----", maxNum)
        }
    }

    getBuffNumByObjTypeAndBuffId(objType: AbsObjType, buffId: number) {
        let buffTab = tab.getData().BuffTableById.getValue(buffId)
        if (buffTab) {
            return this.getBuffNumByObjType(objType, buffTab.BuffGroup)
        }
        return 0
    }

    getBuffNumByObjType(objType: AbsObjType, buffGroup: tab.BuffGroup) {
        let allRole = FrameControl.ins.getObjList(objType) as AbsRole[]
        let num = 0
        //先获取到当前最大层数
        let buff: Buff
        allRole.forEach(e => {
            buff = e.info.getBuffByGroup(buffGroup)
            if (buff && buff.ruleNumber > num) {
                num = buff.ruleNumber
            }
        })
        return num
    }

    pushBuffUI(abs: AbsRole, buffUI: BuffUI) {
        this.getBuffUIsById(abs).push(buffUI)
    }
    getBuffUIsById(abs: AbsRole) {
        let list = this.poolUis.get(abs.getBodyId())
        if (list == null) {
            list = []
            this.poolUis.set(abs.getBodyId(), list)
        }
        return list
    }

    getBuffUI(abs: AbsRole, buffId: number) {
        let list = this.getBuffUIsById(abs)
        for (let index = 0; index < list.length; index++) {
            let ui = list[index]
            if (ui.buffId == buffId) {
                return ui
            }
        }
        return null
    }

    /** buff触发效果 */
    onTriggerEffect(buff: Buff) {
        let ownerAbs = buff.owner.abs
        if (ownerAbs == null || (ownerAbs && (ownerAbs.isDead || !ownerAbs.isActive || ownerAbs.info == null))) {
            return
        }
        
        if (buff.configTab == null || buff.configTab.effectTabs == null) {
            console.log("buff触发效果", buff)
            return
        }
        let len = buff.configTab.addBuffTabs.length
        if (len) {
            for (let index = 0; index < buff.configTab.addBuffTabs.length; index++) {
                if (buff.configTab == null) {
                    break
                }
                const v = buff.configTab.addBuffTabs[index];
                if (buff.buffId == v.Id) {
                    console.log("buff触发添加buff死循环------", v)
                    return
                }
                // console.log("buff触发添加buff", v)
                this.addBuff(v, buff.configTab.addBuffObjType == 1 ? buff.addOwner.objId : buff.owner.objId, buff.owner.abs)
            }
        }
        // console.log("buff触发效果", buff.configTab.effectTabs)
        len = buff.configTab.effectTabs.length
        for (let index = 0; index < len; index++) {
            if (buff.configTab == null) {
                break
            }
            const eff = buff.configTab.effectTabs[index];
            switch (eff.EffectType) {
                case tab.AttrType.AttrType_AttackHeal:
                    DamageCalculation.buff_AttackHeal(buff, index, eff)
                    break
                case tab.AttrType.AttrType_BigHpHeal:
                    DamageCalculation.buff_BigHpHeal(buff, index, eff)
                    break
                case tab.AttrType.AttrType_BigHpLoss:
                    DamageCalculation.buff_BigHpSubHeal(buff, index, eff)
                    break
                case tab.AttrType.AttrType_NowHpHeal:
                    DamageCalculation.buff_NowHpSubHeal(buff, index, eff)
                    break
                case tab.AttrType.AttrType_TearEffect:
                    DamageCalculation.buff_TearEffect(buff, index, eff)
                    break
                case tab.AttrType.AttrType_AttackShield:
                    DamageCalculation.buff_AttackShield(buff, index, eff)
                    break
                case tab.AttrType.AttrType_BigHpShield:
                    DamageCalculation.buff_BigHpShield(buff, index, eff)
                    break
            }
        }
    }


    onInjured(data: DamageData, absRoleInfo: AbsRoleInfo) {
        if (data.isTransferDamage) {
            return
        }
        //身上有链伤buff
        if (absRoleInfo.abs && absRoleInfo.abs.isRole()) {
            if (absRoleInfo.findBuffByBuffGroup(tab.BuffGroup.BuffGroup_TransferDamage)) {
                let tdList = this.getTransferDamageGroup()
                if (tdList.length > 1) {
                    for (let index = 0; index < tdList.length; index++) {
                        const v = tdList[index];
                        if (absRoleInfo.abs != v && v.isActive && !v.isDead) {
                            let copyData = DamageData.copy(data)
                            copyData.source = DamageSource.buff
                            copyData.isTransferDamage = true
                            DamageStatisticsData.ins.addBuffTransferDamage(v, copyData)
                            v.info.onHitDamage(copyData)
                            DamageLab.addShowDamageNum(copyData, v)
                        }
                    }
                }
            }
        }
    }
}