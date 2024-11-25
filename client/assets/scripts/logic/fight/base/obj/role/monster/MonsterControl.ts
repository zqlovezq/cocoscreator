import { _decorator, CCInteger, Color, Component, instantiate, Label, Node, Prefab, Quat, Rect, Size, sp, Sprite, tween, UITransform, Vec2, Vec3, view } from 'cc';
import { AbsControl } from '../../../../../../framework/base/IAbs';
import { LevelPhaseTime } from '../../../../table/Leveljson';
import { AbsObjFactory } from '../../AbsObjFactory';
import { AbsObjType } from '../../AbsObj';
import { MonsterInfo } from './MonsterInfo';
import { FightRootControl } from '../../../../FightRootControl';
import { Monster } from './Monster';
import { Func } from '../../../../../utils/Func';
import { tab } from '../../../../../../Table/table_gen';
import { Random } from '../../../../util/Random';
import { FrameControl } from '../../../frame/FrameControl';
import { PlayerControl } from '../role/PlayerControl';
import { FightMacro } from '../../../../define/FightDefine';
import { EventMgr } from '../../../../../mgr/EventMgr';
import { FightEvent } from '../../../../define/FightEvent';
import { GuideController } from '../../../../../guide/GuideController';
import { LocalEvent } from '../../../../../define/LocalEvent';
import { AbsStateType } from '../../state/AbsState';
import { ViewSize } from '../../../../../define/ViewDefine';


const { ccclass, property } = _decorator;

const tempPos = new Vec3(0, 0, 0);
@ccclass('MonsterControl')
export class MonsterControl extends AbsControl {
    private static _instance: MonsterControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new MonsterControl();
            this._instance.init();
        }
        return this._instance;
    }

    init(): void {
        this.register()
    }

    register(): void {
        EventMgr.onFight(FightEvent.Fight_Start, this.onFightStart, this)
    }

    onFightStart() {

    }

    addMonsterByLevelPhaseTime(data: LevelPhaseTime) {
        if (PlayerControl.ins.getLeader() == null) {
            return
        }

        let monsterInfo = AbsObjFactory.getData(AbsObjType.enemy) as MonsterInfo
        monsterInfo.setConfigId(data.monsterId)
        monsterInfo.speed = data.spe
        monsterInfo.setAttrList([
            { type: tab.AttrType.AttrType_Attack, value: data.attack },
            { type: tab.AttrType.AttrType_Hp, value: data.hp },
            { type: tab.AttrType.AttrType_Defence, value: data.def },
            { type: tab.AttrType.AttrType_ResistCriticalPoint, value: data.resistcritical },
            { type: tab.AttrType.AttrType_DamageReduceCoefficientFix, value: data.damrefix },
        ])
        monsterInfo.exp = data.exp
        monsterInfo.drop = data.drop
        monsterInfo.init()

        if (data.isRand) {
            let rand = Random.getRandomInt(0, data.position.length)
            this.randomPos(data, rand, tempPos)
        } else {
            this.randomPos(data, 0, tempPos)
        }

        this.addMonster(monsterInfo, tempPos)
    }

    randomPos(data: LevelPhaseTime, randPos: number, out: Vec3) {
        let pos = data.position[randPos]
        let blockTab = tab.getData().MapBlockById.getValue(pos)
        if (blockTab) {
            if (data.isRand) {
                out.x = Random.getRandomInt(blockTab.CoordinateX - blockTab.Long * 0.5, blockTab.CoordinateX + blockTab.Long * 0.5)
                out.y = Random.getRandomInt(blockTab.CoordinateY - blockTab.High * 0.5, blockTab.CoordinateY + blockTab.High * 0.5)
            } else {
                out.x = blockTab.CoordinateX
                out.y = blockTab.CoordinateY
            }
        } else {
            out.x = out.y = out.z = 0;
        }
        out.z = 0
    }

    /** 召唤 */
    summon(noumenon: Monster, argument: number[]) {
        for (let index = 0; index < argument.length; index++) {
            const v = argument[index];
            let conf = tab.getData().SkillSummonTableBySummonId.getValue(v)

            let monsterInfo = AbsObjFactory.getData(AbsObjType.enemy) as MonsterInfo
            monsterInfo.setConfigId(conf.Summon[0])

            monsterInfo.setAttrList([
                { type: tab.AttrType.AttrType_Attack, value: noumenon.info.attrData.getAttr(tab.AttrType.AttrType_TotalAttack) / FightMacro.PERCENT * conf.Summon[1] },
                { type: tab.AttrType.AttrType_Hp, value: noumenon.info.attrData.getAttr(tab.AttrType.AttrType_Hp) / FightMacro.PERCENT * conf.Summon[2] },
                { type: tab.AttrType.AttrType_Defence, value: noumenon.info.attrData.getAttr(tab.AttrType.AttrType_Defence) / FightMacro.PERCENT * conf.Summon[3] },
                { type: tab.AttrType.AttrType_ResistCriticalPoint, value: noumenon.info.attrData.getAttr(tab.AttrType.AttrType_ResistCriticalPoint) / FightMacro.PERCENT * conf.Summon[4] },
                { type: tab.AttrType.AttrType_DamageReduceCoefficientFix, value: noumenon.info.attrData.getAttr(tab.AttrType.AttrType_DamageReduceCoefficientFix) / FightMacro.PERCENT * conf.Summon[5] },
            ])
            monsterInfo.speed = noumenon.speed / FightMacro.PERCENT * conf.Summon[6]
            monsterInfo.exp = 0
            monsterInfo.drop = 0
            monsterInfo.init()

            tempPos.x = noumenon.getPosition().x + conf.Summon[7]
            tempPos.y = noumenon.getPosition().y + conf.Summon[8]
            this.addMonster(monsterInfo, tempPos)
        }
    }

    onReplaceMonsterAnimation(monster: Monster, monsterId: number) {
        let conf = tab.getData().MonsterTableById.getValue(monsterId)
        monster.setStateAllAnimdId(conf)
    }

    addMonster(info: MonsterInfo, initPos: Vec3) {
        let enemy: Monster = AbsObjFactory.getMonster(info, FightRootControl.ins.getRootView().objects);

        if (initPos.x > ViewSize.halfSize.width) {
            initPos.x = ViewSize.halfSize.width
        }
        if (initPos.y > ViewSize.halfSize.height) {
            initPos.y = ViewSize.halfSize.height
        } else if (initPos.x < 0 && Math.abs(initPos.y) > ViewSize.halfSize.height) {
            initPos.y = - ViewSize.halfSize.height
        }

        enemy.setPosition(initPos);
        enemy.info.useAllPassiveSkill()
        EventMgr.emitFight(FightEvent.checkAbsRoleGainBuff, enemy)

        enemy.changeState(AbsStateType.RoleBorn)
        if (enemy.info.isBoss) {
            EventMgr.emitFight(FightEvent.Boss_Enter, enemy)
        }
        // 发送怪物出现的事件
        if(GuideController.ins.isInFightGuiding()){
            setTimeout(()=>{
                EventMgr.emitLocal(LocalEvent.ShowMonster);
            },500)
        }
    }

}

