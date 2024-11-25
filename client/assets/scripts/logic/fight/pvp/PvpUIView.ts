
import { _decorator, director, EditBox, EventTouch, Font, game, instantiate, js, Label, Layers, Layout, Node, Prefab, ProgressBar, Size, Sprite, SpriteFrame, Toggle, Tween, tween, UIOpacity, UITransform, v2, v3, Vec3, view } from 'cc';
import { ViewScreen } from '../../../framework/base/ViewScreen';
import { FightRootControl, FightState } from '../FightRootControl';
import { setTextTime_3 } from '../../utils/GameUtil';
import { PvpControl } from './PvpControl';
import { FightBarItem } from '../view/common/FightBarItem';
import { FightMacro } from '../define/FightDefine';
import { Func } from '../../utils/Func';
import { OpenFunctionMgr } from '../../../Common/component/OpenFunctionMgr';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
import { ShowTips } from '../../mgr/UIMgr';
import { FightMsgControl } from '../FightMsgControl';
import { FightData } from '../data/FightData';
import { CommonTipsPop, CommonTipsPopCloseType } from '../../model/common/CommonTipsPop';
import { LocalEvent } from '../../define/LocalEvent';
import { EventMgr } from '../../mgr/EventMgr';
import { FightEvent } from '../define/FightEvent';
import { FightWeaponTeam } from '../view/common/FightWeaponTeam';

const { ccclass, property } = _decorator;



@ccclass('PvpUIView')
export class PvpUIView extends ViewScreen {

    @property(Label)
    time_lab: Label = null
    @property(Node)
    barNode: Node = null
    @property(Prefab)
    barItemPfb: Prefab = null

    @property(Node)
    speedNodeParent: Node = null
    speedIdx: number = 1


    @property(FightWeaponTeam)
    attackWeapon: FightWeaponTeam = null

    @property(FightWeaponTeam)
    defanseWeapon: FightWeaponTeam = null

    bookIndex: number = 0
    protected onLoad(): void {
        super.onLoad()
        this.schedule(() => {
            this.updateTime()
        }, 1)
        this.attackWeapon.node.active = this.defanseWeapon.node.active = false
        this.defanseWeapon.team_layout.getComponent(Layout).horizontalDirection = Layout.HorizontalDirection.RIGHT_TO_LEFT
    }

    onShow(): void {

    }

    register(): void {
        EventMgr.onFight(FightEvent.Pvp_start, this.Pvp_start, this)
    }
    Pvp_start() {
        let idx = Func.checkInt(Func.getItem("FightSpeedIdx"))
        idx = Math.max(idx, 1)
        this.setSpeedIdx(idx)

        let list = [this.attackWeapon, this.defanseWeapon]
        for (let index = 0; index < list.length; index++) {
            const v = list[index];
            let info = FightData.ins.getPvpFightInfoByGroup(index)
            if (info){
                v.node.active = true
                v.setBooks(info.books, info.questLevel)
            }else{
                v.node.active = false
            }
            
        }


        this.schedule(() => {
            this.checkBookActive()
        }, 1)
        this.checkBookActive()
    }

    checkBookActive() {
        for (let index = this.bookIndex; index < tab.getData().GetKeyValue_ConfigTable().PvPRogueTick.length; index++) {
            const time = tab.getData().GetKeyValue_ConfigTable().PvPRogueTick[index];
            if (PvpControl.ins.time >= time) {
                this.attackWeapon.activeBookIndex(index)
                this.defanseWeapon.activeBookIndex(index)
                this.bookIndex = index + 1
                break;
            }
        }
    }

    updateTime() {
        if (FightRootControl.ins.isFight()) {
            this.time_lab.string = setTextTime_3(FightData.ins.stageTab.Time   -Math.floor(PvpControl.ins.time / 1000))
        }
    }

    createBarItem() {
        let barItem = instantiate(this.barItemPfb)
        this.barNode.addChild(barItem)
        return barItem.getComponent(FightBarItem)
    }



    onSpeedClick(event: EventTouch, data: any) {
        let idx = Func.checkInt(data);
        if (this.checkSpeedOpen(idx + 1, true)) {
            idx = idx + 1
            this.setSpeedIdx(idx)
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


    onPauseClick() {
        FightData.ins.pause = true
        CommonTipsPop.create(LangMgr.getLab("是否退出战斗？"), (btnType: CommonTipsPopCloseType) => {
            FightData.ins.pause = false
            if (btnType == CommonTipsPopCloseType.confirm) {
                // EventMgr.emitLocal(LocalEvent.quitFight)
                FightRootControl.ins.setState(FightState.end)
                FightRootControl.ins.pvpEnd()
            }
        })
    }
}

