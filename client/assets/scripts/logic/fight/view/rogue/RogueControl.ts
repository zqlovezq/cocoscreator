import { _decorator, CCInteger, Color, Component, find, FogInfo, instantiate, js, Label, Node, Prefab, Quat, Rect, sp, Sprite, tween, UITransform, Vec2, Vec3, view } from 'cc';
import { AbsControl } from '../../../../framework/base/IAbs';
import { EventMgr } from '../../../mgr/EventMgr';
import { tab } from '../../../../Table/table_gen';
import { PlayerControl } from '../../base/obj/role/role/PlayerControl';
import { FightEvent } from '../../define/FightEvent';
import { Func } from '../../../utils/Func';
import { RogueInfo } from './RogueInfo';
import { DropControl } from '../../drop/DropControl';
import { Random } from '../../util/Random';
import { SkillControl } from '../../base/skill/SkillControl';
import { RareBookData } from '../../../model/rareBook/RareBookData';
import { FightData } from '../../data/FightData';
import { IFightUpdate } from '../../define/FightDefine';
import { FightGainBuffControl } from '../../gainBuff/FightGainBuffControl';
import { Role } from '../../base/obj/role/role/Role';
import { RoleData } from '../../../model/role/RoleData';
import { GuideController } from '../../../guide/GuideController';
import { guideTask } from '../../../guide/GuideTask';
import { RevoltCheatControl } from '../../cheat/RevoltCheatControl';

const { ccclass, property } = _decorator;
const SKILL_COUNT = 3
const tempPos = new Vec3(0, 0, 0);
const tmpList = new Array<RogueInfo>();
const findList = new Array<RogueInfo>();
const selWeapons = new Array<RogueInfo>();
export enum RogueType {
    /** 选队长 */
    leader = 0,
    /** 选英雄 */
    hero = 1,
    /** 选武器（秘籍） */
    weapon = 2
}
export interface RogueSelect {
    type: RogueType,
    list: RogueInfo[] //rogueId
}

/** 肉鸽 */
@ccclass('RogueControl')
export class RogueControl extends AbsControl implements IFightUpdate {

    private static _instance: RogueControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new RogueControl();
        }
        return this._instance;
    }

    /** 生效池 */
    validList: RogueInfo[] = []

    /** 选中列表 (6个格子内的替换逻辑)*/
    selectList: RogueInfo[] = []

    /** 选中列表（所有） */
    selectAllList: RogueInfo[] = []

    /**刷新肉鸽次数 */
    refreshRogueTime: number = 0;

    /** 是否存在英雄升级  */
    IsHaveHeroLevelUp: boolean = true


    defaultRogueInfo: RogueInfo = null //所有肉鸽选完后， 默认放到池子内一个

    init(): void {
        this.register()
        this.validList.length = 0
        this.selectList.length = 0
        this.selectAllList.length = 0
        this.validList.length = 0
        tmpList.length = 0
        this.refreshRogueTime = 0
        selWeapons.length = 0
        this.IsHaveHeroLevelUp = true
        this.defaultRogueInfo = null
    }

    addRogueId(rogueInfo: RogueInfo) {
        this.addSelect(rogueInfo)
        EventMgr.emitFight(FightEvent.Fight_Drop_Remove_First)
        if (rogueInfo.isHeroLevel) { //英雄直接升级
            this.rogueHeroLevel(rogueInfo)
        }
        this.getSelectWeapon(true)
        this.removeHeroLevel(rogueInfo)
    }

    /** 移除英雄升级 */
    removeHeroLevel(rogueInfo: RogueInfo) {
        if (this.IsHaveHeroLevelUp) {
            return
        }
        if (rogueInfo.heroItemId) {
            for (let index = this.validList.length - 1; index >= 0; index--) {
                const v = this.validList[index];
                if (v.heroItemId == rogueInfo.heroItemId) {
                    this.validList.splice(index, 1)
                }
            }
        }
    }

    addSelect(rogueInfo: RogueInfo) {
        rogueInfo.addCount()
        if (rogueInfo.isRemove()) {
            this.removeInfo(rogueInfo)
        }
        let isChange: boolean = false
        if (rogueInfo.rogueTab.Condition) {
            for (let index = 0; index < this.selectList.length; index++) {
                let v = this.selectList[index];
                if (v.Id == rogueInfo.rogueTab.Condition) {
                    this.selectList[index] = rogueInfo
                    isChange = true
                }
            }
        }
        if (!isChange && !rogueInfo.ifFullId()) {
            this.selectList.push(rogueInfo)
        }
        this.selectAllList.push(rogueInfo)
        this.addRogueAttr(rogueInfo)
    }


    onCheckHeroUp(role: Role) {
        let upLv = role.info.attrData.getAttr(tab.AttrType.AttrType_RogueLevel)
        if (upLv) {
            let tempInfo: RogueInfo
            for (let index = 0; index < this.selectList.length; index++) {
                const v = this.selectAllList[index];
                if (v.heroItemId == role.info.configId) {
                    tempInfo = v
                    break
                }
            }
            if (tempInfo) {
                tempInfo.isHeroLevel = true
                tempInfo.level = tempInfo.level + upLv
                role.info.attrData.clearAttrByType(tab.AttrType.AttrType_RogueLevel)
            }
        }
    }

    //英雄直接升级
    rogueHeroLevel(rogueInfo: RogueInfo) {
        let role = PlayerControl.ins.getRole(rogueInfo.heroItemId)
        rogueInfo.level = Math.min(rogueInfo.level, tab.getData().RogueTableById.getValue(role.info.heroStarTab.RogueId[1]).Level)
        let addAttrs = []
        for (let index = 0; index < this.validList.length; index++) {
            const v = this.validList[index];
            if (v.heroItemId == rogueInfo.heroItemId) {
                if (rogueInfo.level >= v.rogueTab.Level) {
                    addAttrs.push(v)
                }
            }
        }

        for (let index = 0; index < addAttrs.length; index++) {
            const v = addAttrs[index];
            this.addSelect(v)
        }
    }

    //赠送肉鸽
    onGiveRogue(id: number) {
        let addAttr = []
        let func = (rogueId: number) => {
            let rogueInfo = this.getRogueInfo(rogueId)
            if (rogueInfo == null) {
                rogueInfo = new RogueInfo(rogueId)
                rogueInfo.setParentPowers(FightData.ins.skillPowers)
            }
            addAttr.push(rogueInfo)
            if (rogueInfo.rogueTab.Condition) {
                func(rogueInfo.rogueTab.Condition)
            }
        }
        //把所有前置条件都添加到列表
        func(id)
        // console.log("give", addAttr)
        addAttr.sort((a, b) => {
            return a.Id - b.Id
        })
        addAttr.forEach(v => {
            this.addSelect(v)
        })
        this.getSelectWeapon(true)
    }

    register(): void {
        EventMgr.onFight(FightEvent.Fight_Start, this.onFight_Start, this)
        EventMgr.onFight(FightEvent.Fight_Start_Complete, this.onFight_Start_Complete, this)
        EventMgr.onFight(FightEvent.giveRogue, this.onGiveRogue, this)
        EventMgr.onFight(FightEvent.checkHeroUp, this.onCheckHeroUp, this)

    }


    /** 获取已选择的武器 */
    getSelectWeapon(reset?: boolean) {
        if (reset) {
            selWeapons.length = 0
            for (let index = 0; index < this.selectList.length; index++) {
                let v = this.selectList[index];
                if (v.heroItemId == 0) {
                    selWeapons.push(v)
                }
            }
        }
        return selWeapons
    }

    getRogueIdsByGroupId(groupId: number) {
        let conf = tab.getData().RogueGroupTableById.getValue(groupId)
        if (conf == null) {
            this.IsHaveHeroLevelUp = true
            return []
        }
        this.IsHaveHeroLevelUp = conf.IsHaveHeroLevelUp
        let list = []
        for (let index = 0; index < conf.RogueGroup.length; index++) {
            let begin = conf.RogueGroup[index] || 0
            let end = conf.RogueGroup[index + 1] || 0
            for (let j = begin; j <= end; j++) {
                list.push(j)
            }
            index++
        }
        return list
    }

    onFight_Start() {
        // let defuatBegin = tab.getData().GetKeyValue_ConfigTable().globalRogueId[0]
        // let defuatEnd = tab.getData().GetKeyValue_ConfigTable().globalRogueId[1]

        let ids = this.getRogueIdsByGroupId(FightData.ins.stageTab.RougeGroupId)
        console.log("ids", ids)

        this.defaultRogueInfo = new RogueInfo(tab.getData().GetKeyValue_ConfigTable().RogueFullBackupOption)
        this.defaultRogueInfo.setParentPowers(FightData.ins.skillPowers)
        // let defuatBegin = 1
        // let defuatEnd = 11

        for (let index = 0; index < ids.length; index++) {
            let id = ids[index]
            let info = new RogueInfo(id)
            info.setParentPowers(FightData.ins.skillPowers)
            if (info.rogueTab.ActivationCondition) {
                //秘籍穿戴
                if (info.rogueTab.ActivationCondition == tab.RogueActivationCondition.RogueActivationCondition_WearBook) {
                    if (RareBookData.ins.isWearByItemId(info.rogueTab.BookId) || FightGainBuffControl.ins.hasTypeAndCorrespondingId(tab.EffectTarget.EffectTarget_Book, info.rogueTab.BookId)) {
                        this.validList.push(info)
                        console.log("秘籍条件达成")
                    } else {
                        // console.log("秘籍未穿戴", info.Id)
                    }
                }
            } else {
                this.validList.push(info)
            }
        }

        let heros = PlayerControl.ins.getAllHeros()
        for (let i = 0; i < heros.length; i++) {
            let heroId = heros[i].itemId
            let heroStarTab = Func.forBy2(tab.getData().HeroStarUpTable, "HeroId", heroId, "HeroStar", heros[i].star) as tab.HeroStarUpTable
            let rogueIds = heroStarTab.RogueId

            for (let index = rogueIds[0]; index <= rogueIds[1]; index++) {
                let info = new RogueInfo(index)
                info.setParentPowers(FightData.ins.skillPowers)
                info.heroItemId = heroId
                this.validList.push(info)
            }
        }
    }

    onFight_Start_Complete() {
        //处理进场送rogueid

    }

    getList(isSelfRefresh: boolean = false): RogueSelect {
        let dropId = DropControl.ins.getFirstDrop()
        let dropItemTab = tab.getData().VirtualItemByVirtualItemId.getValue(dropId)

        if (dropItemTab.VirtualItemType == tab.VirtualItemType.VirtualItemType_Eggs) {
            return this.getHeros()
        }
        return this.getWeapens(isSelfRefresh)
    }

    private getHeros() {
        tmpList.length = 0
        let selt: RogueSelect = { type: RogueType.leader, list: tmpList }

        let heroList = PlayerControl.ins.getNoCreateHeros()
        selt.type = heroList.length == 5 ? RogueType.leader : RogueType.hero

        for (let i = 0; i < heroList.length; i++) {
            let hero = heroList[i]
            let heroStarTab = Func.forBy2(tab.getData().HeroStarUpTable, "HeroId", hero.itemId, "HeroStar", hero.star) as tab.HeroStarUpTable
            tmpList.push(this.getRogueInfo(heroStarTab.RogueId[0]))
        }
        return selt
    }

    private getWeapens(isSelfRefresh: boolean = false) {
        let selt: RogueSelect = { type: RogueType.weapon, list: tmpList }

        if (!isSelfRefresh) {
            tmpList.length = 0
        }

        findList.length = 0
        let addFindList = (v: RogueInfo) => {

            if (GuideController.ins.isInFightGuiding() && FightData.ins.stageId === 101 && GuideController.ins.node.active) {
                if (GuideController.ins.dropCount >= 6 && GuideController.ins.dropCount <= 11) {
                    const deleteArr = [112, 142];
                    if (deleteArr.indexOf(v.Id) > -1) {
                        return;
                    }
                }
            }

            if (tmpList && tmpList.length > 0) {
                let index = tmpList.indexOf(v);
                if (index < 0) {
                    findList.push(v)
                }
            } else {
                findList.push(v)
            }

        }

        for (let index = 0; index < this.validList.length; index++) {
            const v = this.validList[index];
            if (v.rogueTab.Sort != tab.VirtualItemType.VirtualItemType_Feathers) {
                continue
            }
            if (this.isUnlockRogue(v.rogueTab.Condition)) {
                if (v.rogueTab.Mutex) {
                    if (!this.hasMutex()) {
                        addFindList(v)
                    }
                } else {
                    addFindList(v)
                }
            }
        }
        this.print(this.validList, "剩余id")
        this.print(this.selectList, "拥有id")
        this.print(findList, "查找id")
        if (findList.length > SKILL_COUNT) {
            tmpList.length = 0;
            let randomIndexes = this.getRandomIndexes(findList.length, SKILL_COUNT)
            for (let index = 0; index < randomIndexes.length; index++) {
                let v = findList[randomIndexes[index]];
                tmpList.push(v)
            }
        } else if (findList.length == SKILL_COUNT) {
            tmpList.length = 0;
            for (let key in findList) {
                tmpList.push(findList[key]);
            }
        } else {
            let list: Array<RogueInfo> = [];
            for (let key in findList) {
                list.push(findList[key]);
            }
            let randomIndexes = this.getRandomIndexes(tmpList.length, SKILL_COUNT - findList.length)
            for (let index = 0; index < randomIndexes.length; index++) {
                let v = tmpList[randomIndexes[index]];
                list.push(v)
            }
            tmpList.length = 0;
            for (let key in list) {
                tmpList.push(list[key]);
            }
        }
        if (GuideController.ins.isInFightGuiding() && GuideController.ins.node.active && FightData.ins.stageId === 101) {
            if (GuideController.ins.dropCount < 6) {
                tmpList.splice(0, tmpList.length);
                const ids = guideTask.JadeDrops[GuideController.ins.dropCount];
                for (let i = 0; i < ids.length; i++) {
                    if (this.getRogueInfo(ids[i])) {
                        tmpList.push(this.getRogueInfo(ids[i]));
                    }
                }
            }
            GuideController.ins.dropCount++;
        }

        this.print(tmpList, "随机到的id")
        if (tmpList.length == 0) {
            tmpList.push(this.defaultRogueInfo)
        }
        return selt
    }


    /** 是否已经拥有互斥 */
    hasMutex() {
        for (let index = 0; index < this.selectList.length; index++) {
            const v = this.selectList[index];
            if (v.rogueTab.Mutex) {
                return true
            }
        }
        return false
    }

    /** 是否解锁 */
    isUnlockRogue(id: number) {
        if (id == 0) {
            if (this.getSelectWeapon().length >= tab.getData().GetKeyValue_ConfigTable().weaponLimit) {
                return false
            }
            return true
        }
        return Func.forBy(this.selectList, "Id", id) != null
    }

    getRogueInfo(id: number): RogueInfo {
        return Func.forBy(this.validList, "Id", id)
    }

    removeInfo(rogueInfo: RogueInfo) {
        Func.removeBy(this.validList, "Id", rogueInfo.Id)
    }

    /** 给定长度， 随机获取n个 */
    getRandomIndexes(total: number, findNum: number): number[] {
        const indexes: number[] = [];
        if (total <= findNum) {
            for (let index = 0; index < total; index++) {
                indexes.push(index)
            }
            return indexes
        }

        while (indexes.length < findNum) {
            const randomIndex = Random.getRandomInt(0, total);
            if (indexes.indexOf(randomIndex) == -1) {
                indexes.push(randomIndex);
            }
        }
        return indexes;
    }

    print(list: RogueInfo[], str: string) {
        let s = ""
        let s2 = ""
        for (let index = 0; index < list.length; index++) {
            const v = list[index];
            if (v.heroItemId) {
                s += v.Id + ","
            } else {
                s2 += js.formatStr("id:%s,剩余次数:%s", v.Id, v.rogueTab.Backlimit - v.backCount) + ","
            }
        }
        console.log(str + "英雄:" + s, "武器:" + s2)
    }

    /** 检测掉落类型已满 */
    checkFull(dropId: number) {
        let result = false
        if (DropControl.isRogueEggs(dropId)) {
            let eggsLen = DropControl.ins.getLenByType(tab.VirtualItemType.VirtualItemType_Eggs)
            let heroLen = PlayerControl.ins.getAllHeros().length - PlayerControl.ins.getNoCreateHeros().length
            result = heroLen + eggsLen >= PlayerControl.ins.getAllHeros().length
            if (result) {
                console.error("场上英雄+蛋， 已满足" + PlayerControl.ins.getAllHeros().length + "个")
            }
        } else {

        }
        return result
    }

    /** 增加肉鸽属性 */
    addRogueAttr(rogueInfo: RogueInfo) {
        console.log("添加肉鸽属性", rogueInfo.Id)
        if (rogueInfo.heroItemId) {
            EventMgr.emitFight(FightEvent.Role_Active, rogueInfo)
        }
        SkillControl.ins.rogueUseSkillTarget(rogueInfo)
        RevoltCheatControl.ins.addRogue(rogueInfo.Id)
    }

    addRefreshRogueTime() {
        this.refreshRogueTime += 1;
    }
    getRefreshRogueTotalTime() {
        let num = tab.getData().GetKeyValue_ConfigTable().FightRogueRefreshCount;
        num += PlayerControl.ins.getGlobleAttr(tab.AttrType.AttrType_RefreshCount);
        num += RoleData.ins.getPrivilegeValue(tab.VipBonus.VipBonus_RefreshCount);
        return num;
    }

    iFightUpdate(dt: number): void {

    }

    /** 获取所有已选择id */
    getSelectAllIdList() {
        let list = []
        for (let index = 0; index < this.selectAllList.length; index++) {
            const v = this.selectAllList[index];
            list.push(v.Id)
        }
        return list
    }
    getNowSelectIdList() {
        let list = []
        for (let index = 0; index < this.selectList.length; index++) {
            const v = this.selectList[index];
            if (v.heroItemId == 0){
                list.push(v.Id)
            }
        }
        return list
    }
}

