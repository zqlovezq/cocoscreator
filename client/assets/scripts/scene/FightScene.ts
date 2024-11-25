import { _decorator, Component, director, instantiate, Node, Prefab, ResolutionPolicy, SpriteFrame, Texture2D, view } from 'cc';
import { SceneBase } from './SceneBase';
import { FightRootControl } from '../logic/fight/FightRootControl';
import { FightRootView } from '../logic/fight/FightRootView';
import { UIMgr } from '../logic/mgr/UIMgr';
import { PlaySound } from '../logic/utils/Sound';
import { FightUIView } from '../logic/fight/FightUIView';
import { LocalEvent, NetStateEvent } from '../logic/define/LocalEvent';
import { EventMgr } from '../logic/mgr/EventMgr';
import Fixed from '../framework/collision/Fixed';
import { SoundUrl } from '../Common/script/EnumTypeMgr';
import { FightData } from '../logic/fight/data/FightData';
import { Global } from '../Global';
import { RoleData } from '../logic/model/role/RoleData';
import { ResMgr } from '../logic/mgr/ResMgr';
import { PvpUIView } from '../logic/fight/pvp/PvpUIView';
import { PvpControl } from '../logic/fight/pvp/PvpControl';
const { ccclass, property } = _decorator;

@ccclass('FightScene')
export class FightScene extends SceneBase {
    @property(FightRootView)
    rootView: FightRootView = null

    @property(Prefab)
    pvpUI: Prefab = null
    private checkGuide = true;
    protected onLoad(): void {
        console.log("初始化FightScene")
        FightRootControl.ins.init()
        if (FightData.ins.isPvp){
            this.defaultPfb = this.pvpUI
        }
        super.onLoad()
        this.showDefaultPfb();

        FightRootControl.ins.setRoot(this.rootView)
        if(FightData.ins.isPvp){
            FightRootControl.ins.setPvpUIView(this.defaultView.getComponent(PvpUIView))
        }else{
            FightRootControl.ins.setUIView(this.defaultView.getComponent(FightUIView))
        }
        PlaySound(SoundUrl.BattleBGM);
    }
    resize(canvasNames: string[]){
        canvasNames.push("FightRootView")
        super.resize(canvasNames)
    }
    idx: number = 0
    protected start(): void {
        if (Global.isDebug){
            UIMgr.ins.show({ viewName: "FightTestView", parent: this.defaultView, zIndex: -1 })
        }
        
        /* 新手引导wzq */
        if (this.checkGuide&&(FightData.ins.stageId===101||FightData.ins.stageId===1)&&!RoleData.ins.IsGuideFinished()) {
            EventMgr.emitLocal(LocalEvent.CheckGuide)
            this.checkGuide = false;
        }

        this.schedule((dt: number) => {
            FightRootControl.ins.update(dt)
            this.idx += 1
            // console.log(this.idx, Fixed.toFixed(dt * 1000))
        })
        this.schedule(() => {
            // console.log("====================")
            this.idx = 0
        }, 1)
    }

    register(): void {
        EventMgr.onNetState(NetStateEvent.CLOSE, this.onNetClose, this)
        EventMgr.onLocal(LocalEvent.LoginProcessComplete, this.on_local_LoginProcessComplete, this)
        EventMgr.onLocal(LocalEvent.quitFight, this.onQuitFight, this)
    }

    protected lateUpdate(dt: number): void {
        FightRootControl.ins.lateUpdate(dt)
    }
    onNetClose() {
        FightData.ins.pause = true
    }

    on_local_LoginProcessComplete() {
        FightData.ins.pause = false
        if (FightData.ins.isDestory){
            FightRootControl.ins.enterMain()
        }
    }

    onQuitFight() {
        FightRootControl.ins.onQuitFight()
    }
}

