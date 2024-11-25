import { _decorator, AssetManager, assetManager, Component, director, DynamicAtlasManager, Font, Game, game, macro, Node, profiler, Rect, ResolutionPolicy, setDisplayStats, Size, sys, v2, Vec2, view } from 'cc';
import { DEBUG } from 'cc/env';
import { UpdateView } from './UpdateView';
import { Bridge } from '../framework/Bridge';
import { ChannelMgr } from '../channel/ChannelMgr';
import { LoadTable } from '../Table/table';
import { tab } from '../Table/table_gen';
import { ClientView } from '../logic/mgr/ClientView';
import { GameInit } from '../GameInit';
import { SceneBase } from '../scene/SceneBase';
import { Global } from '../Global';
import { proto } from 'client_protocol';
import { ResMgr } from '../logic/mgr/ResMgr';
import { LangMgr } from '../logic/mgr/LangMgr';
const { ccclass, property } = _decorator;



@ccclass('UpdateScene')
export class UpdateScene extends SceneBase {
    private _am: jsb.AssetsManager
    private _loadDone = false;
    @property(UpdateView)
    updateView: UpdateView = null

    @property(Font)
    font: Font = null

    protected onLoad(): void {
        macro.CLEANUP_IMAGE_CACHE = false;
        DynamicAtlasManager.instance.enabled = true
        GameInit.ins.startGame()
        super.onLoad()
        ResMgr.setFont(this.font)
    }
    start() {
        assetManager.presets['bundle'].maxConcurrency = 1024;
        assetManager.presets['bundle'].maxRequestsPerFrame = 1024;
        if (DEBUG) {
            game.on(Game.EVENT_ENGINE_INITED, () => {
                view.setOrientation(macro.ORIENTATION_LANDSCAPE);
            });
        }


        LoadTable(LangMgr.ins.nowPath).then(() => {
            LangMgr.ins.InitData()
            ChannelMgr.init()

            ClientView.ins.init()
            this.loadGames()
        })
    }

    loadGames() {
        this._loadDone = false
        assetManager.loadBundle("gameRes", (err: Error, bundle: AssetManager.Bundle) => {
            if (err) {
                return;
            }

            this.unscheduleAllCallbacks();
            if (this._loadDone) {
                return;
            }
            this._loadDone = true;
            this.checkUpdate()
        })
    }

    checkUpdate() {
        if (sys.isNative) {//原生平台读取下本地版本
            this.updateView.loadUpdate()
        }

        ChannelMgr.initOnLineVersion(() => {
            if (sys.isNative) {
                this.updateView.setCb(() => {
                    this.enterLogin()
                })
                this.updateView.checkUpdate()
            } else {
                this.enterLogin()
            }
        })

    }

    enterLogin() {
        this.updateView.verLab.node.active = true
        this.updateView.verLab.string = Global.getVersionStr()
        director.loadScene("LoginScene", () => {

        })
        
        // let rect1 = new Rect(20, 65, 90, 140)
        // let rect = new Rect(rect1.x - rect1.width / 2, rect1.y - rect1.height / 2, rect1.width, rect1.height)
        // let worldRect = new Rect(rect1)
        // worldRect.x = 100 + rect.x
        // worldRect.y = 200 + rect.y
        // console.log("位置", v2(100, 200), "\n原始包围盒", rect1, "\n局部坐标", rect, '\n世界坐标', worldRect)

    }
}




