import { _decorator, BlockInputEvents, Button, Color, Component, director, instantiate, Layers, Node, Prefab, ResolutionPolicy, Sprite, tween, UITransform, Vec3, view } from 'cc';
import { UIMgr } from '../../logic/mgr/UIMgr';
import { IEvent } from './IAbs';
import { Func } from '../../logic/utils/Func';
import { EventMgr } from '../../logic/mgr/EventMgr';
import { ComponentBase } from './ComponentBase';
const { ccclass, property } = _decorator;


@ccclass('ViewBase')
export class ViewBase extends ComponentBase implements IEvent {
    @property({ displayName: '防止输入穿透到下层节点' })
    isBlockInput: boolean = true

    @property({ displayName: '是否点击空白处关闭' })
    closeWhenClickEmpty: boolean = true

    @property({ displayName: '是否播放弹出动画' })
    showAction: boolean = true

    @property({ type: 0, displayName: '是否有黑背景' })
    showGray: boolean = true;
    grayNode: Node

    public openData: any
    protected onLoad(): void {
        super.onLoad()
        if (this.isBlockInput) {
            this.registerBlockInput()
        }
    }

    protected onDestroy(): void {
        super.onDestroy()
        UIMgr.ins.releaseView(this.node.name)
    }

    /**
     * 初始方法
     * @param obj 
     */
    onShow() {

    }

    protected close() {
        let nodeName = this.node.name

        UIMgr.ins.hideView(nodeName)
    }

    /**
     * 设置界面打开数据
     * @param obj 
     */
    setOpenData(obj: any) {
        this.openData = obj
        if (obj) {
            this.rewriteData()
        }
    }
    rewriteData() {
        // throw new Error("Method not implemented.");
    }

    registerBlockInput() {

        let blockInputNode = new Node("BlockInputNode")
        blockInputNode.layer = Layers.Enum.UI_2D
        let uitrans = blockInputNode.addComponent(UITransform)
        blockInputNode.addComponent(BlockInputEvents)
        uitrans.setContentSize(view.getDesignResolutionSize())
        this.node.addChild(blockInputNode)
        Func.cocosNodeZIndex(blockInputNode, -3)
    }



    loadShow(): void {
        this.loadAction(() => {
            this.loadGrayMask()
        })
    }
    loadAction(call: Function) {
        if (this.showAction) {
            tween(this.node)
                .to(0.12, { scale: new Vec3(1.1, 1.1, 1.1) })
                .to(0.06, { scale: new Vec3(1, 1, 1) })
                .call(() => {
                    call()
                })
                .start()
        } else {
            call()
        }
    }

    loadGrayMask() {
        this.grayNode = new Node("GrayNode")
        this.grayNode.layer = Layers.Enum.UI_2D
        let uitrans = this.grayNode.addComponent(UITransform)
        uitrans.setContentSize(view.getVisibleSize())

        this.node.addChild(this.grayNode)
        Func.cocosNodeZIndex(this.grayNode, -2)
        if (this.showGray) {
            let spr = this.grayNode.addComponent(Sprite)
            spr.sizeMode = Sprite.SizeMode.CUSTOM
            spr.setTexture("textrue/bg_1")
            spr.color = new Color(0, 0, 0, 150)
        }
        if (this.closeWhenClickEmpty) {
            this.scheduleOnce(() => {
                this.grayNode.once(Node.EventType.TOUCH_END, () => {
                    this.onClose()
                }, this)
            }, 0.05)
        }
    }

    onClose() {
        if (this.showAction) {
            this.grayNode ? this.grayNode.active = false : false
            tween(this.node)
                .to(0.06, { scale: new Vec3(1.1, 1.1, 1.1) })
                .to(0.03, { scale: new Vec3(0.5, 0.5, 0.5) })
                .call(() => {
                    this.close()
                })
                .start()
        } else {
            this.close()
        }
        // this.close()
    }
}

