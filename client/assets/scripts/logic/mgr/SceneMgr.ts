import { Asset, Director, DynamicAtlasManager, JsonAsset, Material, Node, Prefab, Scene, SpriteAtlas, SpriteFrame, director, resources, settings, sp, sys, url } from "cc";
import { AbsMgr } from "../../framework/base/IAbs";
import { LocalEvent } from "../define/LocalEvent";
import { EventMgr } from "./EventMgr";
import { ResMgr, loadByResMap } from "./ResMgr";
import { UIMgr } from "./UIMgr";
import { tab } from "../../Table/table_gen";
import { Loading } from "../model/Loading";
import { ShaderUtil } from "../utils/ShaderUtil";
import { Avatar } from "../fight/animation/Avatar";
import { FightData } from "../fight/data/FightData";
import { ItemControl } from "../model/item/ItemControl";
import { ItemPoolMgr } from "../model/item/ItemPoolMgr";
import { FightMsgControl } from "../fight/FightMsgControl";

export enum ScenesName {
    login = "LoginScene",
    main = "MainScene",
    loading = "LoadingScene",
    fight = "FightScene",
}

/**
 * 场景管理
 */
export class SceneMgr extends AbsMgr {
    private static _instance: SceneMgr;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new SceneMgr();
        }
        return this._instance;
    }

    static getNowSceneName() {
        return director.getScene() && director.getScene().name || SceneMgr.ins.nowName
    }

    static isLoginScene() {
        return SceneMgr.isSceneByName(ScenesName.login)
    }

    static isFightScene() {
        return SceneMgr.isSceneByName(ScenesName.fight)
    }

    static isSceneByName(name: string) {
        return SceneMgr.getNowSceneName() == name
    }


    isLoadingScene: boolean = false

    nowName: string = "LoginScene"

    init(): void {
        director.on(Director.EVENT_BEFORE_SCENE_LAUNCH, () => {
            console.log("运行新场景之前", SceneMgr.getNowSceneName())
            UIMgr.ins.clearViewAndPop()
            DynamicAtlasManager.instance.reset()
        }, this)
        director.on(Director.EVENT_AFTER_SCENE_LAUNCH, () => {
            console.log("运行新场景之后", SceneMgr.getNowSceneName())
        }, this)
    }

    loadScene(sceneName: string, onLaunched?: (error: Error, scene: Scene) => void) {
        if (this.isLoadingScene) {
            return;
        }
        this.isLoadingScene = true;

        director.loadScene(sceneName, err => {
            this.isLoadingScene = false;
            this.nowName = sceneName
            let scene: Scene = null;
            if (!err) {
                scene = director.getScene()
                scene.name = sceneName;
                EventMgr.emitLocal(LocalEvent.SceneLoaded, sceneName);
            }
            console.log("加载场景完成", sceneName)
            if (onLaunched) {
                onLaunched(err, scene);
            }
            ResMgr.log()
        })
    }

    async enterFight() {
        Loading.create()
        console.log("开始加载")
        this.loadScene(ScenesName.loading, () => {
            console.log("enterFight")
            setTimeout(() => {
                ItemPoolMgr.ins.clear()
                Avatar.destory()
                ResMgr.releaseScene(ScenesName.login)
                ResMgr.releaseScene(ScenesName.main)
                setTimeout(() => {
                    sys.garbageCollect()
                    this.loadScene(ScenesName.fight, () => {
                        FightMsgControl.ins.loadRes(()=>{
                             //加载完成
                             console.log("战斗场景加载完成------")
                             EventMgr.emitLocal(LocalEvent.FightResLoadComplete);
                             Loading.hide()
                        })
                    })
                }, 20);
            }, 20);
        })
    }

    async leaveFight(isTest: boolean) {
        Loading.create()
        let toSceneName = isTest ? ScenesName.login : ScenesName.main
        if (SceneMgr.isSceneByName(ScenesName.loading)) {
            SceneMgr.ins.loadScene(toSceneName, () => {
                Loading.hide()
            })
            return
        }

        SceneMgr.ins.loadScene(ScenesName.loading, () => {
            setTimeout(() => {
                ItemPoolMgr.ins.clear()
                ResMgr.releaseScene(ScenesName.fight)
                setTimeout(() => {
                    sys.garbageCollect()
                    director.preloadScene(toSceneName, () => {
                        SceneMgr.ins.loadScene(toSceneName, () => {
                            Loading.hide()
                        })
                    })
                }, 30)
            }, 30)
        })
    }
}