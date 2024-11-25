import { _decorator, Component, director, EditBox, EventTouch, game, js, Label, Layers, Node, profiler, Size, Sprite, SpriteFrame, Toggle, Tween, tween, UIOpacity, UITransform, v2, v3, Vec3, view } from 'cc';
import { FightRootControl, FightState } from './FightRootControl';
import { PlayerControl } from './base/obj/role/role/PlayerControl';
import { AbsObjType } from './base/obj/AbsObj';
import { FrameControl } from './base/frame/FrameControl';
import { Func } from '../utils/Func';
import { tab } from '../../Table/table_gen';
import { BuffControl } from './base/buff/BuffControl';
import { DropControl } from './drop/DropControl';
import { Random } from './util/Random';
import { FightTestAttr } from './view/test/FightTestAttr';
import { BuffTab } from './power/powerTab/BuffTab';
import { SkillTab } from './power/powerTab/SkillTab';
import { SkillControl } from './base/skill/SkillControl';
import { DamageData, DamageSource } from './base/damage/DamageData';
import { AbsRole } from './base/obj/role/AbsRole';
import { FightMsgControl } from './FightMsgControl';
import { DamageLab } from './base/damage/DamageLab';
import { ViewName } from '../define/ViewDefine';
import { UIMgr } from '../mgr/UIMgr';
import { FightRenderSort } from './define/FightRenderSort';
import { FightDamageRankItem } from './view/damage/FightDamageRankItem';
import { FightData } from './data/FightData';
import { Net } from '../net/Net';
import { ShakeAction } from '../../framework/action/ShakeAction';
import { proto } from 'client_protocol';
import { PvpTest } from './pvp/PvpTest';
import { PvpControl } from './pvp/PvpControl';
import { PvpObjType } from './pvp/obj/PvpObj';
const { ccclass, property } = _decorator;

@ccclass('FightTestView')
export class FightTestView extends Component {
    @property(Node)
    testNode: Node = null

    @property(Toggle)
    testToggle: Toggle = null

    @property(Toggle)
    boundToggle: Toggle = null

    @property(Toggle)
    timeToggle: Toggle = null

    @property(Toggle)
    monsterAttackToggle: Toggle = null

    @property(Toggle)
    monsterMove: Toggle = null

    @property(Toggle)
    monsterToggle: Toggle = null

    @property(Toggle)
    DamageToggle: Toggle = null

    @property(Label)
    monsterNum: Label = null

    @property(EditBox)
    skillId: EditBox = null

    @property(EditBox)
    skillGroupId: EditBox = null

    @property(EditBox)
    monsterCount: EditBox = null

    @property(EditBox)
    buffId: EditBox = null

    @property(EditBox)
    useSkillId: EditBox = null

    @property(EditBox)
    monsterId: EditBox = null

    protected onLoad(): void {
        // super.onLoad()

        this.skillId.string = Func.getItem("test_bulletid") || "";
        this.skillGroupId.string = Func.getItem("test_skillgroupid") || "";
        this.buffId.string = Func.getItem("test_buffId") || "";
        this.useSkillId.string = Func.getItem("test_useSkillId") || "";
        this.monsterId.string = Func.getItem("test_monsterId") || "";

        this.monsterCount.string = Func.getItem("test_monsterCount") || "";

        this.onmonsterToggle()
        this.boundToggleToggle()
        this.onTimeToggle()
        this.onSkillEdit()
        this.onSkillGroupEdit()
        this.ontestToggle()
        this.onDamageToggle()

        this.schedule(() => {
            this.updateCount()
        }, 0.1)
        this.pvpInit()


    }
    protected start(): void {
        FightRootControl.ins.isTime = this.timeToggle.isChecked = (!FightMsgControl.ins.isTest)
    }

    register(): void {

    }

    onMonsterAttackToggle() {
        this.scheduleOnce(() => {
            FightRootControl.ins.monsterAttack = this.monsterAttackToggle.isChecked
        })
    }

    onmonsterMove() {
        this.scheduleOnce(() => {
            FightRootControl.ins.monsterMove = this.monsterMove.isChecked
        })
    }

    onDamageToggle() {
        this.scheduleOnce(() => {
            FightRootControl.ins.damageToggle = this.DamageToggle.isChecked
        })
    }



    onTimeToggle() {
        this.scheduleOnce(() => {
            FightRootControl.ins.isTime = this.timeToggle.isChecked
        })
    }

    onClickShowBullet() {
    }

    onClickBorder() {
        this.boundToggleToggle()
    }
    updateCount() {
        if (FightData.ins.isPvp) {
            this.monsterNum.string = js.formatStr("怪：%s 子弹:%s 渲染:%s", PvpControl.ins.getObjList(PvpObjType.role).length, PvpControl.ins.getObjList(PvpObjType.bullet).length, FightRootControl.ins.getCount())
        } else {
            this.monsterNum.string = js.formatStr("怪：%s 子弹:%s 渲染:%s", FrameControl.ins.getObjList(AbsObjType.enemy).length, FrameControl.ins.getObjList(AbsObjType.bullet).length, FightRootControl.ins.getCount())
        }

    }


    protected lateUpdate(dt: number): void {

    }

    onmonsterToggle() {
        this.scheduleOnce(() => {
            FightRootControl.ins.isTestChuguai = this.monsterToggle.isChecked

            var str = this.monsterCount.string.replace(/(^\s*)|(\s*$)/g, "")
            let count = Func.checkInt(str)
            FightRootControl.ins.max = count
            Func.setItem("test_monsterCount", str)
        })
    }

    boundToggleToggle() {
        this.scheduleOnce(() => {
            FightRootControl.ins.isBound = this.boundToggle.isChecked
            FrameControl.ins.updateAllBound()
        })
    }

    onSkillEdit() {
        var str = this.skillId.string.replace(/(^\s*)|(\s*$)/g, "")
        let id = Func.checkInt(str)
        FightRootControl.ins.testBulletId = id
        Func.setItem("test_bulletid", str)
    }

    onSkillGroupEdit() {
        var str = this.skillGroupId.string.replace(/(^\s*)|(\s*$)/g, "")
        let id = Func.checkInt(str)
        FightRootControl.ins.testSkillGroupId = id
        Func.setItem("test_skillgroupid", str)
        if (PlayerControl.ins.getLeader() && id > 0) {
            PlayerControl.ins.getLeader().info.resetTestGroupId(id)
        }
    }


    onAddHero() {
        DropControl.ins.addDropItem(1)
    }
    onAddYuMao() {
        DropControl.ins.addDropItem(2)
        // PlayerControl.ins.getLeader().onDead()
    }


    onExitFight() {
        FightRootControl.ins.exitFight()
    }


    addBuff(e: EventTouch, cusData: string) {
        let leader = PlayerControl.ins.getLeader() as AbsRole
        if (leader == null || (leader && leader.isDead)) {
            return
        }

        var str = this.buffId.string.replace(/(^\s*)|(\s*$)/g, "")


        let buff: number = Func.checkInt(str)

        if (!tab.getData().BuffTableById.getValue(buff)) {
            return
        }
        Func.setItem("test_buffId", str)
        if (cusData == "2") {
            let list = FrameControl.ins.getObjList(AbsObjType.enemy)
            let enemy = list[0] as AbsRole

            let buffTab = leader.info.skillPowers.createTypeAnyId(tab.PowerType.PowerType_BuffTable, buff) as BuffTab
            BuffControl.ins.addBuff(buffTab, leader.objId, enemy)
        } else if (cusData == "3") {
            let list = PlayerControl.ins.getRoles()
            for (let index = 0; index < list.length; index++) {
                const v = list[index];
                if (v.isActive && !v.isDead && !v.info.isLeader) {
                    leader = v
                    let buffTab = leader.info.skillPowers.createTypeAnyId(tab.PowerType.PowerType_BuffTable, buff) as BuffTab
                    BuffControl.ins.addBuff(buffTab, leader.objId, leader)
                }
            }
            return
        }
        if (leader == null) {
            return
        }
        let buffTab = leader.info.skillPowers.createTypeAnyId(tab.PowerType.PowerType_BuffTable, buff) as BuffTab
        BuffControl.ins.addBuff(buffTab, leader.objId, leader)
    }


    onWinClick() {
        console.log("一键胜利")
        FightRootControl.ins.setState(FightState.end, true)
        // 
        // let dd = DamageData.get()
        // dd.damage = 1000000000

        // PlayerControl.ins.getLeader().info.onHitDamage(dd)
    }
    onPicClick() {
        UIMgr.ins.show({ viewName: ViewName.DynamicAtlas })
    }

    onLookAttr() {
        FightTestAttr.create()
        // let damageData = DamageData.get()
        // damageData.source = DamageSource.bullet
        // damageData.damage = 5000000
        // let leader = PlayerControl.ins.getLeader()
        // if (leader == null || (leader && leader.isDead)) {
        //     return
        // }
        // leader.info.onHitDamage(damageData)
        // DamageLab.addShowDamageNum(damageData, leader)

    }



    ontestToggle() {
        this.scheduleOnce(() => {
            this.testNode.active = this.testToggle.isChecked
        })
    }

    onUseSkill() {
        let leader = PlayerControl.ins.getLeader()
        if (leader == null || (leader && leader.isDead)) {
            return
        }

        var str = this.useSkillId.string.replace(/(^\s*)|(\s*$)/g, "")


        let buff: number = Func.checkInt(str)

        if (!tab.getData().SkillTableById.getValue(buff)) {
            return
        }
        Func.setItem("test_useSkillId", str)
        let skillTab = leader.info.skillPowers.createTypeAnyId(tab.PowerType.PowerType_SkillTable, buff) as SkillTab
        SkillControl.ins.addSkill(skillTab, leader)
        if (!skillTab.isPassiveSkill()) {
            SkillControl.ins.useSkillAndBullet(skillTab, leader)
        }
    }


    onAddMonster() {
        let leader = PlayerControl.ins.getLeader()
        if (leader == null || (leader && leader.isDead)) {
            return
        }

        var str = this.monsterId.string.replace(/(^\s*)|(\s*$)/g, "")


        let buff: number = Func.checkInt(str)

        if (!tab.getData().MonsterTableById.getValue(buff)) {
            return
        }
        Func.setItem("test_monsterId", str)
        FightRootControl.ins.createEnemy(buff)

    }

    onInvincibleClick() {
        let list = PlayerControl.ins.roles
        for (let index = 0; index < list.length; index++) {
            const v = list[index];
            v.info.attrData.addAttr(tab.AttrType.AttrType_Invincible, 2)
        }
    }


    onPause() {
        FightData.ins.pause = !FightData.ins.pause
    }


    onSort() {
        FightRenderSort.sort(FightRootControl.ins.getRootView().objects, FightRootControl.ins.getRootView().bullets)
    }
    onSort1() {
        FightRenderSort.ySort(FightRootControl.ins.getRootView().objects)
    }

    onshake() {
        this.shakeAc.runActions(FightRootControl.ins.getRootView().rootNode, [{ delay: 0, duration: 0.4 }])
    }
    shakeAc = new ShakeAction()


    onFps() {
        if (profiler.isShowingStats()) {
            profiler.hideStats()
        } else {
            profiler.showStats()
        }
    }



    @property(Toggle)
    pvpToggle: Toggle = null
    @property(EditBox)
    pvpBulletBox: EditBox = null

    pvpInit() {
        this.pvpToggle.isChecked = FightData.ins.isPvp
        this.pvpBulletBox.string = Func.getItem("test_pvp_bulletId") || "";
    }

    onClickCreateHero() {
        PvpTest.createHero(0)
    }

    onPvpUseSkill() {
        PvpTest.useSkill()
    }

    onPvpAddBuff() {
        PvpTest.addBuff()
    }
    onPvpUpdateBuff() {
        PvpTest.updateBuff()
    }
    onPvpSkillCD() {
        PvpTest.skillCD()
    }

    onPvpSkillCDEnd() {
        PvpTest.skillCDEnd()
    }

    onPvpDead() {
        PvpTest.onDead()
    }

    onPvpRevive() {
        PvpTest.onRevive()
    }


    onPvpBullet() {
        var str = this.pvpBulletBox.string.replace(/(^\s*)|(\s*$)/g, "")
        let id = Func.checkInt(str)
        Func.setItem("test_pvp_bulletId", str)
        let bulletTab = tab.getData().BulletTableById.getValue(id)
        if (bulletTab) {
            PvpTest.createBullet(id, bulletTab.WalkAnimationId)
        } else {
            console.log("子弹不存在", id)
        }
    }

    onPvpRemoveObj() {
        PvpTest.removeObj(PvpTest.bulletIndex)
    }

    onPvpPause() {
        PvpControl.ins.dataPause = !PvpControl.ins.dataPause
    }

    onPvpNext() {
        PvpControl.ins.onNextFrame()
    }

    onPvpNextStep() {
        // PvpControl.ins.onNextStep()
        PvpControl.ins.pvpLine.recycle()
    }


    onPvpDrawLine() {
        PvpTest.drawLine()
    }

    onCopy() {
        let dd = JSON.parse(JSON.stringify(FightData.ins.fightInfo))
        dd.bufferList = [700000, 900001]
        Func.copyText(JSON.stringify(dd))
    }
}
