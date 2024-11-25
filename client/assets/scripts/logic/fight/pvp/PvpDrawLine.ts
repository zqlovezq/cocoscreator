
import { _decorator, Color, Component, director, EditBox, EventTouch, Font, game, Graphics, instantiate, js, Label, Layers, Node, Prefab, ProgressBar, Size, Sprite, SpriteFrame, Toggle, Tween, tween, UIOpacity, UITransform, v2, v3, Vec3, view } from 'cc';
import { FightRootControl } from '../FightRootControl';
import { util } from 'protobufjs';
const { ccclass, property } = _decorator;



@ccclass('PvpDrawLine')
export class PvpDrawLine {
    pool: Graphics[] = [];
    graphics: Graphics[] = []
    parent: Node = null;

    setParent(parent: Node) {
        this.parent = parent
    }
    create() {
        let grap = this.pool.pop()
        if (grap == null) {
            let nn = new Node("PvpDrawLine");
            nn.layer = Layers.Enum.DEFAULT
            grap = nn.addComponent(Graphics)
            this.parent.addChild(nn)
        }
        grap.clear()
        grap.node.angle = 0
        return grap
    }

    put(grap: Graphics) {
        grap.clear()
        this.pool.push(grap)
    }

    destory() {
        this.recycle()
        this.pool.length = 0
    }

    recycle() {
        for (let index = this.graphics.length - 1; index >= 0; index--) {
            this.put(this.graphics[index])
        }
        this.graphics.length = 0
    }

    show(points: number[]) {
        if (points.length == 0) {
            return
        }
        let grap = this.create()

        grap.strokeColor = Color.RED
        grap.lineWidth = 3
        for (let index = 0; index < points.length; index += 2) {
            if (points.length - 2 == index) {
                break
            }
            grap.moveTo(points[index], points[index + 1])
            grap.lineTo(points[index + 2], points[index + 3])
        }

        // grap.moveTo(0,0)
        // grap.lineTo(0,100)

        // grap.moveTo(0,100)
        // grap.lineTo(100,100)

        // grap.moveTo(100,100)
        // grap.lineTo(100,0)

        // grap.moveTo(100,0)
        // grap.lineTo(0,0)


        grap.stroke()
        this.graphics.push(grap)
    }

}

