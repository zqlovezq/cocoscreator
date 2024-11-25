import { _decorator, CCInteger, Color, Component, error, instantiate, Label, Node, Prefab, Quat, Rect, sp, Sprite, tween, UITransform, Vec2, Vec3, view } from 'cc';
import { AbsControl } from '../../../framework/base/IAbs';
import { EventMgr } from '../../mgr/EventMgr';
import { FightEvent } from '../define/FightEvent';
import { Monster } from '../base/obj/role/monster/Monster';
import { tab } from '../../../Table/table_gen';
import { Func } from '../../utils/Func';
import { PlayerControl } from '../base/obj/role/role/PlayerControl';
import { RogueControl } from '../view/rogue/RogueControl';
import { RoguePop } from '../view/rogue/RoguePop';
import { FightData } from '../data/FightData';
import { FightMacro, IFightUpdate } from '../define/FightDefine';
import { getRandomInt } from '../../utils/GameUtil';
import { SettingsManager } from '../../model/role/SettingsManager';
import { WaveTimeControl } from '../wave/WaveTimeControl';
import { Random } from '../util/Random';
// import { getRandomInt } from '../../utils/GameUtil';




const { ccclass, property } = _decorator;

const tempPos = new Vec3(0, 0, 0);

export interface ItemDrop {
    animId: number, //动画id
    probability: number//概率
}

/** 掉落 */
@ccclass('DropControl')
export class DropControl extends AbsControl implements IFightUpdate {

    private static _instance: DropControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new DropControl();
        }
        return this._instance;
    }

    rogueDrops: number[] = []
    feather: number = 0
    otherDrops: Map<number, number> = new Map()
    exp: number = 0
    expLv: number = 0
    eggDropGroups: tab.FeatherEggDrop[] = null
    /** 时间掉落，  false为经验掉落 */
    isTimeDrop: boolean = false
    timeExp: number = 0

    isStart: boolean = false
    /** 自动掉落拾取 */
    public audoDropCollect: boolean = false

    /**额外掉落时间节点数组 */
    extraDropTimes: number[] = [];
    extraDropTimeExp: number = 0;
    /**是否有额外掉落 */
    isExtraDrop: boolean = false;
    /**时间掉落时间节点数组 */
    timerDropTimes: number[];
    timerDropIds: number[];


    itemDrops: ItemDrop[] = []
    init(): void {
        this.register()
        this.rogueDrops.length = 0
        this.feather = 0
        this.otherDrops.clear()
        this.exp = 0
        this.expLv = 0
        this.isStart = false
        this.isTimeDrop = false
        this.timeExp = 0
        this.extraDropTimeExp = 0
        this.itemDrops.length = 0
        this.setAudoDropCollect(SettingsManager.ins.getSetting("isAutoCollect"))
    }

    setAudoDropCollect(isBool: boolean) {
        this.audoDropCollect = isBool
        SettingsManager.ins.setSetting("isAutoCollect", isBool);
        // Func.setItem("isAutoCollect", isBool ? 1 : 0)
        // console.log(isBool, "xxxxxx", Func.getItem("isAutoCollect"))
    }


    getFirstDrop(): number {
        return this.rogueDrops[0]
    }

    register(): void {
        EventMgr.onFight(FightEvent.Fight_Start, this.onFight_Start, this)
        EventMgr.onFight(FightEvent.Fight_Start_Complete, this.onFight_Start_Complete, this)
        EventMgr.onFight(FightEvent.Fight_Monster_Dead, this.onFight_Monster_Dead, this)
        EventMgr.onFight(FightEvent.Fight_Drop_Remove_First, this.onFight_Drop_Remove_First, this)
    }

    onFight_Start() {
        console.log("Fight_Start-------")
        this.isTimeDrop = FightData.ins.isDropByType(tab.EggDropType.EggDropType_TimeDrop)
        this.eggDropGroups = Func.getValuesByKey(tab.getData().FeatherEggDrop, "EggDropGroup", FightData.ins.stageTab.EggDropGroup)

        FightData.ins.stageTab.MonsterDieDrop
        for (let index = 0; index < FightData.ins.stageTab.MonsterDieDrop.length; index += 2) {
            const v = FightData.ins.stageTab.MonsterDieDrop[index];
            let item: ItemDrop = { animId: FightData.ins.stageTab.MonsterDieDrop[index], probability: FightData.ins.stageTab.MonsterDieDrop[index + 1] }

            if (this.itemDrops.length > 0) {
                item.probability = this.itemDrops[this.itemDrops.length - 1].probability + item.probability
            }
            this.itemDrops.push(item)
        }
        this.addDrop(FightData.ins.levelJson.drop)

        if (this.isTimeDrop) {
            this.initTimerDropData();
        }
    }
    onFight_Start_Complete() {
        this.isStart = true
        this.fightInitialDrop()
        this.initExtraDropData();
        RoguePop.create()
    }

    onFight_Monster_Dead(abs: Monster) {
        if (this.isTimeDrop) {
            return
        }
        if (abs && abs.info) {
            if (abs.info.exp) {
                this.addExp(abs.info.exp)
                this.checkExpUp(abs.getHitPos())
            }
            if (abs.info.drop) {
                this.addDrop([abs.info.drop], abs.getHitPos())
            }
            let pro = Random.getInt10000()
            for (let index = 0; index < this.itemDrops.length; index++) {
                const itemDrop = this.itemDrops[index];
                if (pro <= itemDrop.probability) {
                    EventMgr.emitFight(FightEvent.Fight_Drop_Item_Anim, itemDrop.animId, abs.getHitPos())
                    break
                }
            }
        }
    }

    onFight_Drop_Remove_First() {
        this.rogueDrops.shift()
    }

    /** 增加掉落 */
    addDrop(dropIds: number[], position?: Vec3) {
        for (let i = 0; i < dropIds.length; i++) {
            const dropId = dropIds[i];
            let dropTab = tab.getData().PveStageDropTableByDropId.getValue(dropId)

            for (let j = 0; j < dropTab.DropItemCount.length; j++) {
                let dropItem = dropTab.DropItem[j]
                const count = dropTab.DropItemCount[j];
                for (let k = 0; k < count; k++) {
                    this.addDropItem(dropItem, position)
                }
            }
        }
    }

    addDropItem(dropItemId: number, position?: Vec3) {
        if (DropControl.isRogueDrop(dropItemId)) {
            if (RogueControl.ins.checkFull(dropItemId)) {
                return
            }
            if (DropControl.isRogueEggs(dropItemId)) { //蛋放前面，先选英雄
                this.rogueDrops.unshift(dropItemId)
            } else {
                this.rogueDrops.push(dropItemId)
                this.feather += 1
            }
        } else {
            if (this.otherDrops.has(dropItemId) == null) {
                this.otherDrops.set(dropItemId, 0)
            }
            this.otherDrops.set(dropItemId, this.otherDrops.get(dropItemId) + 1)
        }
        EventMgr.emitFight(FightEvent.Fight_Drop_Item, dropItemId, position)
        if (this.isStart && this.audoDropCollect) {
            // RoguePop.create()
        }
    }

    getLenByType(_type: tab.VirtualItemType) {
        let eggsLen = 0
        for (let index = 0; index < this.rogueDrops.length; index++) {
            const v = this.rogueDrops[index];
            let bo = DropControl.isRogueEggs(v)
            if (_type == tab.VirtualItemType.VirtualItemType_Eggs) {
                if (bo) {
                    eggsLen += 1
                }
            } else {
                if (!bo) {
                    eggsLen += 1
                }
            }
        }
        return eggsLen
    }

    checkEggsFull() {
        let heroLen = 5 - PlayerControl.ins.getNoCreateHeros().length
        let eggsLen = 0
        for (let index = 0; index < this.rogueDrops.length; index++) {
            const v = this.rogueDrops[index];
            if (DropControl.isRogueEggs(v)) {
                eggsLen += 1
            }
        }
        return heroLen + eggsLen >= 5
    }

    addExp(_exp: number) {
        this.exp += _exp
        console.log("exp:",this.exp,_exp)
    }

    /** 时间增加 */
    addTime(dt: number) {
        this.timeExp += dt
        if (this.timeExp >= FightMacro.SECOND) {
            this.timeExp -= FightMacro.SECOND
            this.addExp(1)
            this.checkTimeExpUp()
        }
    }
    /** 检测时间掉落 */
    checkExpUp(position?: Vec3) {
        for (let index = this.expLv; index < this.eggDropGroups.length; index++) {
            const v = this.eggDropGroups[index];
            if (this.exp >= v.EggDropExp) {
                this.expLv = v.EggDropLevel
                this.addDrop([v.EggDropContent], position)
            }
        }

    }
    /** 时间经验掉落 */
    checkTimeExpUp() {
        if (this.timerDropTimes && this.timerDropTimes.length > 0) {
            if (this.exp >= this.timerDropTimes[0]) {
                this.addDrop([this.timerDropIds[0]]);
                this.timerDropTimes.shift();
                this.timerDropIds.shift();
            }
        }
    }

    //时间刷新
    iFightUpdate(dt: number): void {
        this.isTimeDrop && this.addTime(dt)
        this.isExtraDrop && this.addExtraDropTime(dt);
    }

    /** 战场初始掉落（不包含关卡） */
    fightInitialDrop() {
        if (FightData.ins.isWorldAndGuildBoss()) {
            return;
        }
        let num = PlayerControl.ins.getGlobleAttr(tab.AttrType.AttrType_InitialScroll);
        let dropIds = [];
        let id = tab.getData().GetKeyValue_ConfigTable().InitialDropFeather;
        for (let i: number = 0; i < num; i++) {
            dropIds.push(id);
        }
        if (dropIds.length > 0) {
            this.addDrop(dropIds);
        }

    }


    static isRogueDrop(dropItemId: number) {
        let dropTab = tab.getData().VirtualItemByVirtualItemId.getValue(dropItemId)
        if (dropTab.VirtualItemType == tab.VirtualItemType.VirtualItemType_Eggs || dropTab.VirtualItemType == tab.VirtualItemType.VirtualItemType_Feathers) {
            return true
        }
        return false
    }

    static isRogueEggs(dropItemId: number) {
        let dropTab = tab.getData().VirtualItemByVirtualItemId.getValue(dropItemId)
        return dropTab.VirtualItemType == tab.VirtualItemType.VirtualItemType_Eggs
    }

    static isRogueType(dropItemId: number, _type: tab.VirtualItemType) {

    }
    /** 时间增加 */
    addExtraDropTime(dt: number) {
        this.extraDropTimeExp += dt
        if (this.extraDropTimeExp >= FightMacro.SECOND) {
            this.extraDropTimeExp -= FightMacro.SECOND
            this.checkExtraDrop();
        }
    }
    /** 检测额外掉落 */
    checkExtraDrop() {
        if (this.extraDropTimes.length > 0) {
            if (WaveTimeControl.ins.nowTotalTime >= this.extraDropTimes[0]) {
                this.addDrop([tab.getData().GetKeyValue_ConfigTable().AddDropFeather]);
                this.extraDropTimes.splice(0, 1);
                this.isExtraDrop = this.extraDropTimes.length > 0;
                error("额外掉落羽毛====", WaveTimeControl.ins.nowTotalTime)
            }
        }
    }

    /**
     * 初始化额外掉落数据
     */
    initExtraDropData() {
        this.extraDropTimes = [];
        this.isExtraDrop = false;
        if (FightData.ins.isWorldAndGuildBoss()) {
            return;
        }


        // if(this.p)
        let count = PlayerControl.ins.getGlobleAttr(tab.AttrType.AttrType_AddScroll);
        if (count > 0) {
            let table = tab.getData().PveAddFeatherDropTableByCount.getValue(count);
            if (table) {
                for (let i: number = 0; i < table.Times.length; i += 2) {
                    let min = table.Times[i];
                    let max = table.Times[i + 1];
                    let r = getRandomInt(min, max);
                    this.extraDropTimes.push(r);
                }
                error("额外掉落羽毛随机时间====", this.extraDropTimes)
                this.isExtraDrop = this.extraDropTimes.length > 0;
            } else {
                error("额外掉落配表错误 数量", count)
            }
        }

    }

    /**初始化时间掉落数据 */
    initTimerDropData() {
        console.error('初始化时间掉落数据', this.timeExp, this.exp)
        this.timerDropTimes = [];
        this.timerDropIds = [];
        let table = tab.getData().PveTimeDropTableByStageId.getValue(FightData.ins.stageId);
        if (table) {
            this.timerDropTimes = [].concat(table.DropTime);
            this.timerDropIds = [].concat(table.DropCount);
        }
    }

}



