import { _decorator, Component, director, instantiate, Node, Prefab, ResolutionPolicy, Scene, view } from 'cc';
import { ViewPop } from '../../framework/base/ViewPop';
import { LoginControl } from './login/LoginControl';
import { UIMgr } from '../mgr/UIMgr';
import { EventMgr } from '../mgr/EventMgr';
import { SceneMgr, ScenesName } from '../mgr/SceneMgr';
import { proto } from 'client_protocol';
import { ViewName } from '../define/ViewDefine';
import { LocalEvent } from '../define/LocalEvent';
const { ccclass, property } = _decorator;

@ccclass('Reconnect')
export class Reconnect extends ViewPop {

    static create() {
        UIMgr.ins.show({ viewName: ViewName.Reconnect })
    }

    static hide() {
        UIMgr.ins.hideView(ViewName.Reconnect)
    }

    @property(Node)
    confirm_node: Node = null
    @property(Node)
    reconnecting_node: Node = null

    register(): void {
        EventMgr.onLocal(LocalEvent.LoginProcessComplete, this.on_local_LoginProcessComplete, this)
    }

    onShow(): void {
        this.reset()
        this.node.active = true
    }

    reset() {
        this.confirm_node.active = true
        this.reconnecting_node.active = false
    }

    onClickOk() {
        console.log("onClickOk")
        LoginControl.ins.connect()

        this.confirm_node.active = false
        this.reconnecting_node.active = true
    }

    onClickCancel() {
        console.log("onClickCancel")
        if (SceneMgr.isFightScene()) {
            // 如果是战斗场景，则直接退出游戏
            EventMgr.emitLocal(LocalEvent.quitFight)
        } else {
            // 如果是其他场景，则直接返回登录场景
            SceneMgr.ins.loadScene(ScenesName.login)
        }
        Reconnect.hide()
    }

    onClose(): void {
        console.warn("隐藏")
        this.node.active = false
    }

    on_local_LoginProcessComplete() {
        if (SceneMgr.isLoginScene() || SceneMgr.isFightScene()) {
            return
        }
        this.enterMain()
    }

    enterMain() {
        let toSceneName = ScenesName.main

        if (SceneMgr.isSceneByName(ScenesName.loading)) {
            SceneMgr.ins.loadScene(toSceneName)
            return
        }
        SceneMgr.ins.loadScene(ScenesName.loading, () => {
            director.preloadScene(toSceneName, () => {
                SceneMgr.ins.loadScene(toSceneName)
            })
        })
    }
}

