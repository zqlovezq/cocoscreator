import { _decorator, Component, Node, view } from "cc";
import { Func } from "../../utils/Func";
import { FrameControl } from "../base/frame/FrameControl";
import { AbsObjType } from "../base/obj/AbsObj";
import { AbsRole } from "../base/obj/role/AbsRole";

const { ccclass, property } = _decorator;

/** 战斗渲染排序 
*/
@ccclass('FightRenderSort')
export class FightRenderSort {

    static sort(objects: Node, bulletNode: Node) {
        if (objects.children.length > 80) {
            this.objectSort(objects)
            Func.NodeSort(objects)
        } else {
            this.ySort(objects)
        }
        this.sortBullet(bulletNode)

    }


    static ySort(objects: Node) {
        /** y轴排序 */
        objects.children.forEach(element => {
            Func.setzIndex(element, view.getVisibleSize().height - element.position.y)
        });
        Func.NodeSort(objects)
    }

    static objectSort(objects: Node) {
        let list = FrameControl.ins.getObjList(AbsObjType.role) as AbsRole[]

        let len = list.length
        let abs: AbsRole
        for (let i = 0; i < len; i++) {
            abs = list[i]
            Func.setzIndex(abs.node, view.getVisibleSize().height - abs.node.position.y)
        }

        list = FrameControl.ins.getObjList(AbsObjType.enemy) as AbsRole[]
        len = list.length
        for (let i = 0; i < len; i++) {
            abs = list[i]
            Func.setzIndex(abs.node, abs.animationId)
        }
        Func.NodeSort(objects)
        // let ids = []
        // for (let index = 0; index < objects.children.length; index++) {
        //     const v = objects.children[index];
        //     ids.push(v["zIndex"])
        // }

        // console.log('objectSort', ids)

    }

    static sortBullet(bulletNode: Node) {
        Func.NodeSort(bulletNode)
    }
}