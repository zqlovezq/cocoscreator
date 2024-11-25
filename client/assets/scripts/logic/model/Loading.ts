import { _decorator, Component, director, instantiate, Label, log, Node, Prefab, ResolutionPolicy, Scene, view } from 'cc';
import { ViewPop } from '../../framework/base/ViewPop';
import { LoginControl } from './login/LoginControl';
import { UIMgr } from '../mgr/UIMgr';
import { EventMgr } from '../mgr/EventMgr';
import { SceneMgr, ScenesName } from '../mgr/SceneMgr';
import { proto } from 'client_protocol';
import { ViewName } from '../define/ViewDefine';
import { LocalEvent } from '../define/LocalEvent';
import { tab } from '../../Table/table_gen';
import { GameUtil, getRandomInt } from '../utils/GameUtil';
import { LangMgr } from '../mgr/LangMgr';
const { ccclass, property } = _decorator;

@ccclass('Loading')
export class Loading extends ViewPop {

    static async create() {
        await UIMgr.ins.show({ viewName: ViewName.Loading })
    }

    static hide() {
        UIMgr.ins.hideView(ViewName.Loading)
        
    }

    static setProgress(p: number) {
        let view = UIMgr.ins.getViewScr(ViewName.Loading) as Loading
        view.progress = p
    }

    @property(Label)
    progressLab: Label = null
    @property(Label)
    tipLab:Label=null;

    register(): void {

    }

    onShow(): void {
        this.progress = 0
        this.node.active = true;
        let time=tab.getData().GetKeyValue_ConfigTable().LoadingTipsTime;
        this.setTips();
        this.schedule(()=>{
            this.setTips();
        },time)
    }

    onClickCancel() {
        Loading.hide()
    }

    onClose(): void {
        this.node.active = false
        this.unscheduleAllCallbacks();
    }

    set progress(p: number) {
        this.progressLab.string = `${(p*100).toFixed(0)}%`
    }

    get progress() {
        return 0
    }
    setTips(){
        let tips=tab.getData().TipsTable;
        let index=getRandomInt(0, tips.length);
        this.tipLab.string=LangMgr.getLab(tips[index].TipsKey)

    }


}

