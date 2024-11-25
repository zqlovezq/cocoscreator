import { _decorator, CCInteger, Color, Component, Input, instantiate, Label, Node, Prefab, Quat, Rect, sp, Sprite, tween, UITransform, v3, Vec2, Vec3, view } from 'cc';
import { AbsControl } from '../../../../../../framework/base/IAbs';
import { AbsObjFactory } from '../../AbsObjFactory';
import { Role } from './Role';
import { RoleInfo } from './RoleInfo';
import { FightRootControl } from '../../../../FightRootControl';
import { HeroInfo } from '../../../../../model/hero/HeroInfo';
import { HeroFightInfo } from '../../../../data/HeroFightInfo';
import { EventMgr } from '../../../../../mgr/EventMgr';
import { FightEvent } from '../../../../define/FightEvent';
import { FightMsgControl } from '../../../../FightMsgControl';
import { RogueInfo } from '../../../../view/rogue/RogueInfo';
import { RogueControl } from '../../../../view/rogue/RogueControl';
import { FightData } from '../../../../data/FightData';
import { AbsStateType } from '../../state/AbsState';
import { SkillTab } from '../../../../power/powerTab/SkillTab';
import { tab } from '../../../../../../Table/table_gen';
import { Monster } from '../monster/Monster';
import { SkillControl } from '../../../skill/SkillControl';
import { FightMacro } from '../../../../define/FightDefine';
import { Buff } from '../../../buff/Buff';

const { ccclass, property } = _decorator;
const tempPos = new Vec3(0, 0, 0);
const clickWorldPos = new Vec3(0, 0, 0);
const clickNodePos = new Vec3(0, 0, 0);
var isWorldChange: boolean = false
@ccclass('PlayerControl')
export class PlayerControl extends AbsControl {
    private static _instance: PlayerControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new PlayerControl();
        }
        return this._instance;
    }

    roleDataInfos: HeroFightInfo[] = []
    private intoIndex: number = 0
    roles: Role[] = []
    roleIds: number[] = []
    private leaderRole: Role = null
    /** 是否为自动 */
    isAuto: boolean = false
    /** 是否点击种 */
    _isClicking: boolean

    init(): void {
        this.register()
        this.isAuto = false
        this.roles.length = 0
        this.roleDataInfos.length = 0
        this.leaderRole = null
        this.intoIndex = 0
        this._isClicking = false
        this.roleIds.length = 0
        console.warn("销毁")
    }

    getHeroById(id: number): HeroFightInfo {
        for (let index = 0; index < this.roleDataInfos.length; index++) {
            const v = this.roleDataInfos[index];
            if (v.itemId == id) {
                return v
            }
        }
    }

    getAllHeros() {
        return this.roleDataInfos
    }

    getRoles() {
        return this.roles
    }

    getIntoHeros() {
        let list = []
        for (let index = 0; index < this.roleDataInfos.length; index++) {
            const v = this.roleDataInfos[index];
            if (v.level > 0) {
                list.push(v)
            }
        }
        list.sort((a, b) => {
            return a.intoIndex - b.intoIndex
        })
        return list
    }

    getHeros() {
        let list = []
        for (let index = 0; index < this.roleDataInfos.length; index++) {
            const v = this.roleDataInfos[index];
            list.push(v)
        }
        console.log(list)
        list.sort((a, b) => {
            if (a.intoIndex != 0 && b.intoIndex != 0) {
                return a.intoIndex - b.intoIndex
            }

            return a.intoIndex > 0 ? -1 : 1
        })


        return list
    }

    register(): void {
        EventMgr.onFight(FightEvent.Fight_Start, this.onFight_Start, this)
        EventMgr.onFight(FightEvent.Fight_Start_Complete, this.onFight_Start_Complete, this)

        EventMgr.onFight(FightEvent.Role_Active, this.onRole_Active, this)
        EventMgr.onFight(FightEvent.Warning, this.onWarning, this)
        EventMgr.onFight(FightEvent.Fight_Monster_Dead, this.onFight_Monster_Dead, this)
        EventMgr.onFight(FightEvent.ReviveByItemid, this.onReviveByItemid, this)

    }

    onFight_Start() {
        console.log("Fight_Start-------")

        for (let index = 0; index < FightData.ins.fightInfo.heroData.length; index++) {
            const v = FightData.ins.fightInfo.heroData[index];
            let info = new HeroFightInfo()
            info.setServerData(v)
            this.roleDataInfos.push(info)
            this.initRole(info)
        }
    }
    /** 战场技能加到角色身上 */
    fightSkillsToRole() {
        let skills = FightData.ins.skills
        for (let index = 0; index < skills.length; index++) {
            this.roles.forEach(e => {
                e.info.addTakeSkill(skills[index])
            })
        }

        let len = this.roles.length
        for (let i = 0; i < len - 1; i++) {
            for (let j = i + 1; j < len; j++) {
                this.skillMutualExclusion(this.roles[i].info, this.roles[j].info)
            }
        }
    }

    skillMutualExclusion(nowRole: RoleInfo, beRole: RoleInfo) {
        for (let index = nowRole.takeSkills.length - 1; index >= 0; index--) {
            if (beRole.mutualExclusionBySkill(nowRole.takeSkills[index]) == 1) {
                console.log("aToB,技能互斥，检测者小， 删除")
                nowRole.takeSkills.splice(index, 1)
            }
        }
    }

    onFight_Start_Complete() {
        console.log("onFight_Start_Complete-------")
        //全局技能加入到角色技能中
        this.fightSkillsToRole()
        this.roles.forEach(e => {
            e.info.initTriggerMap()
        })
        for (let index = 0; index < this.roles.length; index++) {
            const role = this.roles[index];
            EventMgr.emitFight(FightEvent.checkAbsRoleGainBuff, role)
        }
    }

    onRole_Active(rogueInfo: RogueInfo) {
        if (rogueInfo.heroItemId) {
            let hero = this.getHeroById(rogueInfo.heroItemId)
            let lastLv = hero.level
            hero.level = rogueInfo.rogueTab.Level
            if (lastLv == 0) {
                this.intoIndex += 1
                hero.intoIndex = this.intoIndex
                this.roleActive(hero)
                this.roleIds.push(hero.id)
            }
            let role = this.getRole(rogueInfo.heroItemId)
            role.info.onLevelUp(lastLv, hero.level)
        }
    }


    onWarning(warningType: number) {
        this.roles.forEach(e => {
            if (e.isActive) {
                e.info.onSkillTrigger(tab.Triggertype.Triggertype_warning, { warningType: warningType })
            }
        })
    }

    onFight_Monster_Dead(absRole: Monster) {
        if (absRole.info && absRole.info.isBoss) {
            this.roles.forEach(e => {
                if (e.isActive) {
                    e.info.onSkillTrigger(tab.Triggertype.Triggertype_BossDied)
                }
            })
        }
    }

    onReviveByItemid(itemId: number) {
        let role = this.getRole(itemId)
        if (role) {
            role.onRevive()
            EventMgr.emitFight(FightEvent.Fight_Initiative_Revive, role)
        }
    }

    getNoCreateHeros(): HeroFightInfo[] {
        let noCreateHeros = []
        for (let i = 0; i < this.roleDataInfos.length; i++) {
            if (this.roleDataInfos[i].level == 0) {
                noCreateHeros.push(this.roleDataInfos[i])
            }
        }
        return noCreateHeros
    }

    setAudo(bo: boolean) {
        this.isAuto = bo
        if (this.getLeader() == null) {
            return
        }
        this.getLeader().info.setAudo(bo)
    }

    getNextPosIndex(roleInfo: RoleInfo) {
        if (roleInfo.isHeroClassWarrior()) {
            return 5 //展示固定5
        } else {
            let total = 0
            for (let i = 0; i < this.roles.length; i++) {
                if (this.roles[i].isActive && !this.roles[i].info.isHeroClassWarrior()) {
                    total++
                }
            }
            return total + 1
        }
    }

    isHeroClassSame(roleInfo) {
        for (let i = 0; i < this.roles.length; i++) {
            if (this.roles[i].info.configTab.Class == roleInfo.configTab.Class) {
                return true
            }
        }
        return false
    }

    initRole(heroInfo: HeroFightInfo) {
        let roleInfo = new RoleInfo()
        roleInfo.setHeroInfo(heroInfo)
        if (this.isHeroClassSame(roleInfo)) {
            console.error("createRole 已有相同职业", roleInfo.configId)
            return
        }
        roleInfo.init()

        let role = AbsObjFactory.getRole(roleInfo)

        this.addRole(role)
        return role
    }

    getRoleActiveLen() {
        let total = 0
        for (let index = 0; index < this.roles.length; index++) {
            const role = this.roles[index];
            if (role.isActive) {
                total++
            }
        }
        return total
    }

    roleActive(heroInfo: HeroFightInfo) {
        let role = this.getRole(heroInfo.itemId)
        let roleInfo = role.info
        if (this.getRoleActiveLen() == 0) {
            roleInfo.isLeader = true
            roleInfo.setAudo(this.isAuto)
        } else {
            roleInfo.setAudo(true)
        }
        roleInfo.posIndex = this.getNextPosIndex(roleInfo)


        role.roleHead = FightRootControl.ins.getUIView().createRoleHead(roleInfo)
        role.barItem = FightRootControl.ins.getUIView().createBarItem(roleInfo)
        role.barItem.setAttrData(roleInfo.attrData)
        role.setPosition(FightRootControl.ins.getRootView().getRolePosByIndex(roleInfo.posIndex))
        role.avatar.updatePause(false)
        role.isActive = true

        if (roleInfo.posIndex == FightMacro.RolePosType.five) {//添加战士额外技能
            let skill = roleInfo.skillPowers.createTypeAnyId(tab.PowerType.PowerType_SkillTable, tab.getData().GetKeyValue_ConfigTable().FrontSkill) as SkillTab
            roleInfo.addTakeSkill(skill, true)
        }
        if (roleInfo.isLeader) {
            this.leaderRole = roleInfo.abs
            role.avatarShadow.avatar.getSprite().setTexture("textrue/fight/shadow_captain")
            //添加队长额外技能
            let skill = roleInfo.skillPowers.createTypeAnyId(tab.PowerType.PowerType_SkillTable, tab.getData().GetKeyValue_ConfigTable().CaptainSkill) as SkillTab
            roleInfo.addTakeSkill(skill, true)
            EventMgr.emitFight(FightEvent.Select_leader, this.leaderRole)
        }
        role.changeState(AbsStateType.RoleBorn)
        EventMgr.emitFight(FightEvent.Sort_AbsRole)
        return role
    }

    getRole(heroId: number) {
        for (let index = 0; index < this.roles.length; index++) {
            const v = this.roles[index];
            if (v.info.heroFightInfo.itemId == heroId) {
                return v
            }
        }
    }

    addRole(role: Role) {
        this.roles.push(role)

    }

    /** 获取额外属性   初始卷轴、额外卷轴、刷新次数*/
    getGlobleAttr(attrType: tab.AttrType) {
        return this.getTotalValueByAttrType(attrType)
    }

    getTotalValueByAttrType(attr: tab.AttrType) {
        let value = 0
        PlayerControl.ins.roles.forEach((role) => {
            value += role.info.attrData.getAttr(attr)
        })
        return value
    }


    getMaxBuffNumByBuffGroup(buffGroup: tab.BuffGroup) {
        let num = 0

        let buff: Buff
        this.roles.forEach(e => {
            buff = e.info.getBuffByGroup(buffGroup)
            if (buff && buff.ruleNumber > num) {
                num = buff.ruleNumber
            }
        })
        return num
    }

    //-------------------队长相关----------------
    getLeader() {
        return this.leaderRole
    }

    /** 队长位置 */
    getPosition() {
        return this.leaderRole.getPosition()
    }

    getWorldPosition() {
        return this.leaderRole.body.getPosition()
    }

    setClickWorldPos(x: number, y: number) {
        if (this.getLeader() == null) {
            return
        }
        this.isClicking(true)
        clickWorldPos.x = x
        clickWorldPos.y = y
        isWorldChange = true
        PlayerControl.ins.getLeader().sendClickSkill(clickWorldPos)
    }

    isClicking(click: boolean) {
        this._isClicking = click
    }
    getClicking() {
        return this._isClicking
    }

    getClickNodePos() {
        if (isWorldChange) {
            isWorldChange = false
            let nn = FightRootControl.ins.getObjectsNode()
            nn.getComponent(UITransform).convertToNodeSpaceAR(clickWorldPos, clickNodePos)
        }
        return clickNodePos
    }

    destroy() {
        this.init()
    }
}

