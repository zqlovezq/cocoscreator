import { _decorator, Component, Layers, Node, Prefab, Size, Sprite, UITransform, Vec2, Vec3, view } from "cc";
import { tab } from "../../../Table/table_gen";
import { RoguePop } from "../view/rogue/RoguePop";
import { DropControl } from "./DropControl";
import { Avatar } from "../animation/Avatar";
import { Func } from "../../utils/Func";
import { MathAngle } from "../../../framework/collision/Maths";
import { ViewSize } from "../../define/ViewDefine";

const { ccclass, property } = _decorator;

const halfSize = new Size();
const tempPos = new Vec3(0, 0, 0)
/** 掉落 */
@ccclass('DropItem')
export class DropItem extends Component {

    static create() {
        let nn = new Node("dropNode")
        nn.layer = Layers.Enum.DEFAULT
        return nn.addComponent(DropItem)
    }
    protected onLoad(): void {
        let uiTrans = this.node.addComponent(UITransform)
        uiTrans.width = uiTrans.height = 80
    }

    dropId: number
    dropTab: tab.VirtualItem
    avatar: Avatar = null;
    setDropItemId(dropItemId) {
        this.getHalfSize()
        this.dropId = dropItemId
        this.dropTab = tab.getData().VirtualItemByVirtualItemId.getValue(dropItemId)

        let nn = new Node("dropNode")
        nn.layer = Layers.Enum.DEFAULT
        this.node.addChild(nn)

        if (this.dropTab.VirtualAnimationId) {
            this.avatar = Avatar.create()
            nn.addChild(this.avatar.node)
            this.avatar.setAnimationId(this.dropTab.VirtualAnimationId)
        }


        // let spr = nn.addComponent(Sprite)
        // spr.sizeMode = Sprite.SizeMode.RAW
        // spr.setTexture(this.dropTab.VirtualItemIcon)
        // spr.node.scale = new Vec3(0.8, 0.8, 0.8)

        this.checkAddTouch()
    }

    remove() {
        if (this.avatar) {
            this.avatar.recycle();
        }
        this.avatar = null;

        this.node.destroy()

        //做Avatar回收
    }

    checkAddTouch() {
        if (this.isRogueDrop()) {
            this.node.on(Node.EventType.TOUCH_START, () => {
                console.log("点击了")
                RoguePop.create()
            })
        }
    }

    isRogueDrop() {
        return DropControl.isRogueDrop(this.dropId)
    }

    setPos(position: Vec3) {
        if (position == null) {
            position = new Vec3()
            position.x = Func.random(0, halfSize.width - 100)
            position.y = Func.random(-halfSize.height, halfSize.height)
        } else {
            if (position.x < 0) {
                position.x = Func.random(0, halfSize.width - 100)
            }
        }

        if (this.isRogueDrop()) {
            this.checkPos(position)
        } else {
            this.node.position = position
        }

    }

    checkPos(position: Vec3) {

        let dropTrans = this.node.getComponent(UITransform)
        let isRandom = false
        if (position.x == 0 && position.y == 0) {
            let angle = Func.random(0, 360)
            MathAngle.angleToDirection(angle, position)
            position.multiplyScalar(Func.random(-300, 300))
            isRandom = true
        }

        if (!isRandom) {
            let pos2 = new Vec2()
            pos2.x = position.x
            pos2.y = position.y
            for (let index = 0; index < 4; index++) {
                if (this.checkOverlap(this.node, pos2)) {
                    break
                }
                pos2.x = position.x
                pos2.y = position.y
                if (index == 0) {
                    pos2.x += dropTrans.width
                } else if (index == 1) {
                    pos2.x -= dropTrans.width
                } else if (index == 2) {
                    pos2.y += dropTrans.height
                } else if (index == 3) {
                    pos2.y -= dropTrans.height
                }
            }
            position.x = pos2.x
            position.y = pos2.y
        }


        if (position.x > halfSize.width) {
            position.x = halfSize.width - dropTrans.width / 2
        } else if (position.x < -halfSize.width) {
            position.x = -halfSize.width + dropTrans.width / 2
        }

        if (position.y > halfSize.height) {
            position.y = halfSize.height - dropTrans.height / 2
        } else if (position.y < -halfSize.height) {
            position.y = -halfSize.height + dropTrans.height / 2
        }

        this.node.position = position;
    }
    checkOverlap(newNode: Node, pos: Vec2): boolean {
        for (const nn of this.node.parent.children) {
            if (nn == newNode) {
                continue;
            }
            if (nn.getComponent(UITransform).getBoundingBox().contains(pos)) {
                return false
            }
        }
        return true;
    }

    getHalfSize() {
        if (halfSize.width == 0) {
            halfSize.width = ViewSize.frameSize.width * 0.5
            halfSize.height = ViewSize.frameSize.height / 9 * 5 * 0.5
        }

    }

}