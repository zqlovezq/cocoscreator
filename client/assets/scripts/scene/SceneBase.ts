import { _decorator, Camera, Component, director, find, instantiate, Node, Prefab, ResolutionPolicy, UITransform, UITransformComponent, view } from 'cc';
import { UIMgr } from '../logic/mgr/UIMgr';
import { IEvent } from '../framework/base/IAbs';
import { ResMgr } from '../logic/mgr/ResMgr';
import { ViewSize } from '../logic/define/ViewDefine';
const { ccclass, property } = _decorator;


@ccclass('SceneBase')
export class SceneBase extends Component implements IEvent {

    @property(Camera)
    camera2d: Camera = null

    @property(Node)
    rootNode: Node = null

    @property(Prefab)
    defaultPfb: Prefab = null

    defaultView: Node
    protected onLoad(): void {
        UIMgr.ins.setCamera(this.camera2d)
        UIMgr.ins.setRootNode(this.rootNode)
        this.register()
        this.resize(["Canvas"])
    }

    showDefaultPfb(): void {
        if (this.defaultPfb) {
            this.defaultView = instantiate(this.defaultPfb)
            UIMgr.ins.uiNode.addChild(this.defaultView)
            UIMgr.ins.addView(this.defaultView.name, this.defaultView)
        }
    }

    register(): void {
    }
    // protected update(dt: number): void {
    //     console.log("帧率",dt)
    // }

    public resize(canvasNames: string[]) {
        //根据屏幕大小决定适配策略
        //想明白原理，请阅读本文 https://blog.csdn.net/qq_36720848/article/details/89742451
        console.log(view)

        let dr = view.getDesignResolutionSize();
        var s = view.getFrameSize();
        var rw = s.width;
        var rh = s.height;
        var finalW = rw;
        var finalH = rh;

        if ((rw / rh) > (dr.width / dr.height)) {
            //!#zh: 是否优先将设计分辨率高度撑满视图高度。 */
            //cvs.fitHeight = true;

            //如果更长，则用定高
            finalH = dr.height;
            finalW = finalH * rw / rh;
        }
        else {
            /*!#zh: 是否优先将设计分辨率宽度撑满视图宽度。 */
            //cvs.fitWidth = true;
            //如果更短，则用定宽
            finalW = dr.width;
            finalH = rh / rw * finalW;
        }

        view.setDesignResolutionSize(finalW, finalH, ResolutionPolicy.UNKNOWN);
        ViewSize.init()
        for (let index = 0; index < canvasNames.length; index++) {
            const canvasName = canvasNames[index];
            let cancas = find(canvasName)
            if (cancas) {
                let cvs = cancas.getComponent(UITransformComponent);
                if (cvs) {
                    cvs.width = finalW;
                    cvs.height = finalH;
                }
            }
        }
    }
}

