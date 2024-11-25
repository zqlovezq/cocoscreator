
import { _decorator, director, EditBox, EventTouch, Font, game, instantiate, js, Label, Layers, Node, Prefab, ProgressBar, Size, Sprite, SpriteFrame, Toggle, Tween, tween, UIOpacity, UITransform, v2, v3, Vec3, view } from 'cc';
import { ViewScreen } from '../../framework/base/ViewScreen';
import { EventMgr } from '../mgr/EventMgr';
import { FightEvent } from './define/FightEvent';
import { RoleInfo } from './base/obj/role/role/RoleInfo';
import { WaveTimeControl } from './wave/WaveTimeControl';
import { FightUITeam } from './view/common/FightUITeam';
import { PlayerControl } from './base/obj/role/role/PlayerControl';
import { Func } from '../utils/Func';
import { FightData } from './data/FightData';
import { ShowTips, UIMgr } from '../mgr/UIMgr';
import { ViewName } from '../define/ViewDefine';
import { FightPausePop } from './view/FightPausePop';
import Fixed from '../../framework/collision/Fixed';
import { FightRootControl } from './FightRootControl';
import { setTextTime_3 } from '../utils/GameUtil';
import { FightBarItem } from './view/common/FightBarItem';
import { tab } from '../../Table/table_gen';
import { FightBossBar } from './view/common/FightBossBar';
import ModuleInJumpComp from '../../Common/component/ModuleInJumpComp';
import { OpenFunctionMgr } from '../../Common/component/OpenFunctionMgr';
import { LangMgr } from '../mgr/LangMgr';
import { GuideController } from '../guide/GuideController';
import { DropControl } from './drop/DropControl';
import { FightMsgControl } from './FightMsgControl';
const { ccclass, property } = _decorator;

const TimeScale = [
    1, 1, 1.3, 1.6
]

@ccclass('FightUIView')
export class FightUIView extends ViewScreen {
    @property(Node)
    skillCd: Node = null

    @property(Node)
    barNode: Node = null
    @property(Prefab)
    barItemPfb: Prefab = null

    @property(FightBossBar)
    bossBar: FightBossBar = null

    @property(FightUITeam)
    team: FightUITeam = null

    @property(Label)
    timeLabel: Label = null;

    @property(Label)
    timePerLabel: Label = null;

    @property(ProgressBar)
    timeBar: ProgressBar = null

    @property(Node)
    audoToggle: Node = null

    @property(Node)
    speedNodeParent: Node = null

    @property([Font])
    fonts: Font[] = []
    @property(Node)
    multiplayRedPoint: Node = null;
    @property(Node)
    autoRedPoint: Node = null;
    @property(Node)
    autoLock: Node = null;
    @property(Node)
    buffBtnNode: Node = null;
    speedIdx: number = 1
    private isCheckedAudo = false;
    private GuideDropTime: number = 0;
    protected onLoad(): void {
        super.onLoad()

        this.timeLabel.string = "00:00"
        this.timePerLabel.string = "0%"
        this.timeBar.progress = 0
        this.schedule(() => {
            this.updateTime()
        }, 1)


        // if (Func.getItem("isCheckedAudo") == null) {//默认开启
        //     Func.setItem("isCheckedAudo", 1);
        // }
        let isCheckedAudo = Number(Func.getItem("isCheckedAudo"));
        let open = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_FightAuto);
        if (isCheckedAudo && isCheckedAudo == 1) {
            if (open) {
                this.isCheckedAudo = true;
            } else {
                this.isCheckedAudo = false;
            }

        } else {
            this.isCheckedAudo = false;
        }
        if (open) {
            let isAudoRed = Number(Func.getItem("isShowAudoRedPoint"));
            if (!isAudoRed) {
                this.autoRedPoint.active = true;
            } else {
                this.autoRedPoint.active = false;
            }
            this.autoLock.active = false;
        } else {
            this.autoRedPoint.active = false;
            this.autoLock.active = true;
        }
        this.setAudoShow();

        this.buffBtnNode.active = false
        if (FightData.ins.fightInfo.bufferList && FightData.ins.fightInfo.bufferList.length > 0) {
            FightData.ins.fightInfo.bufferList.forEach(element => {
                let pveBuffTable = tab.getData().PveStageBuffTableById.getValue(element);
                if (pveBuffTable.ShowIcon != "") {
                    this.buffBtnNode.active = true
                }
            });
        }
        this.buffBtnNode.active = FightData.ins.fightInfo.bufferList && FightData.ins.fightInfo.bufferList.length > 0;

    }
    onShow(): void {
        this.audoToggle.getChildByName("txt").active = !this.isCheckedAudo;
        this.audoToggle.getChildByName("txt2").active = this.isCheckedAudo;
    }

    register(): void {
        EventMgr.onFight(FightEvent.Fight_Skill_Cding, this.on_fight_Fight_Skill_Cding, this)
        EventMgr.onFight(FightEvent.Fight_Start, this.on_Fight_Start, this)

    }
    onFightResLoadComplete() {

    }

    onClickShowBullet() {
    }

    onClickBorder() {
    }
    updateTime() {
        if (FightRootControl.ins.isFight()) {
            let nowTime = WaveTimeControl.ins.nowTotalTime
            let totalTime = WaveTimeControl.ins.totalTime
            if (FightData.ins.isWorldAndGuildBoss()) {
                nowTime = totalTime - nowTime
            }
            this.timeLabel.string = setTextTime_3(nowTime)
            this.timeBar.progress = nowTime / totalTime

            let per = Math.floor(nowTime * 100 / totalTime)
            if (isNaN(per)) {
                per = 0
            }
            this.timePerLabel.string = js.formatStr("%s%", per)

            // if (GuideController.ins.isInFightGuiding() && GuideController.ins.isGuiding()) {
            //     if (nowTime == 51 && GuideController.ins.dropCount === 3 && this.GuideDropTime !== nowTime) {
            //         DropControl.ins.addDrop([1002]);
            //     }
            //     if (nowTime == 52 && GuideController.ins.dropCount === 4 && this.GuideDropTime !== nowTime) {
            //         DropControl.ins.addDrop([1002]);
            //     }
            //     if (nowTime == 53 && GuideController.ins.dropCount === 5 && this.GuideDropTime !== nowTime) {
            //         DropControl.ins.addDrop([1002]);
            //     }
            //     if (this.GuideDropTime !== nowTime) {
            //         this.GuideDropTime = nowTime
            //     }
            // }
        }
    }

    on_fight_Fight_Skill_Cding(uiPos: Vec3) {
        let opa = this.skillCd.getComponent(UIOpacity)
        opa.opacity = 255
        Tween.stopAllByTarget(opa)
        let spacePos = this.skillCd.parent.getComponent(UITransform).convertToNodeSpaceAR(uiPos)
        this.skillCd.active = true
        this.skillCd.setPosition(spacePos)
        tween(opa)
            .to(1, { opacity: 0 })
            .call(() => {
                this.skillCd.active = false
            })
            .start()
    }

    getRoleHead() {

    }

    createRoleHead(roleInfo: RoleInfo) {
        let roleHead = this.team.getFree()
        roleHead.setRoleInfo(roleInfo)
        return roleHead
    }
    createBarItem(roleInfo: RoleInfo) {
        let barItem = instantiate(this.barItemPfb)
        this.barNode.addChild(barItem)
        return barItem.getComponent(FightBarItem)
    }

    onAudoToggle(eventTouch: EventTouch) {
        let open = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_FightAuto) || FightMsgControl.ins.isTest;
        if (open) {
            this.isCheckedAudo = !this.isCheckedAudo;
            this.setAudoShow();
            Func.setItem("isCheckedAudo", this.isCheckedAudo ? 1 : 0);
            if (this.autoRedPoint.active) {
                this.autoRedPoint.active = false;
                Func.setItem("isShowAudoRedPoint", 1);
            }
        } else {
            let openTab = tab.getData().OpenFunctionTableByName.getValue(tab.OpenFunctionName.OpenFunctionName_FightAuto);
            let Level = openTab.BattleLv;
            let tip1 = Math.floor(Level / 100) + "-" + Level % 100;

            ShowTips(LangMgr.getCombineString("ui_fight_18", [tip1]));
            // OpenFunctionMgr.ins.showFunctionTips(tab.OpenFunctionName.OpenFunctionName_FightAuto);
        }


    }
    setAudoShow() {
        this.audoToggle.getChildByName("txt").active = !this.isCheckedAudo;
        this.audoToggle.getChildByName("txt2").active = this.isCheckedAudo;
        PlayerControl.ins.setAudo(this.isCheckedAudo);
    }

    on_Fight_Start() {
        let idx = Func.checkInt(Func.getItem("FightSpeedIdx"))
        idx = Math.max(idx, 1)
        let open = this.checkSpeedOpen(idx);
        this.checkFightSpeedRedPoint();
        if (!open) {
            if (idx == 3) {
                idx = 2;
            } else {
                idx = 1;
            }

        }
        this.setSpeedIdx(idx)
    }
    checkFightSpeedRedPoint() {
        let red = Number(Func.getItem("FightSpeedRedPoint"))
        let open = this.checkSpeedOpen(2+red);
        if (open) {
            if (red<2) {
                this.multiplayRedPoint.active = true;
            } else {
                this.multiplayRedPoint.active = false;
            }
        } else {
            this.multiplayRedPoint.active = false;
        }
    }


    onSpeedClick(event: EventTouch, data: any) {
        let idx = Func.checkInt(data);
        if (this.checkSpeedOpen(idx + 1, true)) {
            idx = idx + 1
            this.setSpeedIdx(idx)
            if (this.multiplayRedPoint.active) {
                this.multiplayRedPoint.active = false;
                Func.setItem("FightSpeedRedPoint", idx-1);

            }
        } else {
            if (idx + 1 >= 3) {
                this.setSpeedIdx(1);
            }
        }


    }

    setSpeedIdx(idx: number) {
        if (idx > 3) {
            idx = 1
        }
        this.speedIdx = idx
        Func.setItem("FightSpeedIdx", idx)

        for (let index = 0; index < this.speedNodeParent.children.length; index++) {
            const element = this.speedNodeParent.children[index];
            element.active = (idx - 1 == index)
        }

        FightData.ins.timeScale = Math.max(Func.checkInt(tab.getData().GetKeyValue_ConfigTable().TimeScale[this.speedIdx - 1]), 0.8)
    }

    onPauseClick() {
        FightPausePop.create()
    }

    onDamageClick(event: EventTouch) {
        UIMgr.ins.show({ viewName: ViewName.FightDamageRankPop, data: { event: event } })
    }
    checkSpeedOpen(index: number, istips: boolean = false) {
        if (FightMsgControl.ins.isTest) {
            return true
        }
        if (index == 1) {
            return true;
        } else if (index == 2) {
            if (OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_FightSpeed2)) {
                return true;
            } else {
                if (istips) {
                    let openTab = tab.getData().OpenFunctionTableByName.getValue(tab.OpenFunctionName.OpenFunctionName_FightSpeed2);
                    let PlayerLv = openTab.PlayerLv;
                    let key = "ui_fight_16"
                    ShowTips(LangMgr.getCombineString(key, [PlayerLv]));
                }
                return false;
            }

        } else if (index == 3) {
            if (OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_FightSpeed3)) {
                return true;
            } else {
                if (istips) {
                    ShowTips(LangMgr.getLab("ui_fight_17"));
                }

                return false;
            }
        } else {
            return true;
        }
    }
    onBuffClick() {
        UIMgr.ins.show({ viewName: ViewName.EveryDayBuffPop })
    }
    showTapTipsTimes() {
        if (this.node.getChildByName("taptips_node").active) {
            return;
        }
        this.node.getChildByName("taptips_node").active = true;
        this.unschedule(this.hideTapTipsTimes)
        this.scheduleOnce(this.hideTapTipsTimes, 3)
    }
    hideTapTipsTimes() {
        this.node.getChildByName("taptips_node").active = false;
    }
}

