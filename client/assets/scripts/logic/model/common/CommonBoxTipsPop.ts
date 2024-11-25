import { _decorator, Component, Node, UITransform, Vec3, view } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { ItemInfo } from '../item/ItemInfo';
import { ItemPoolMgr } from '../item/ItemPoolMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * CommonBoxTipsPop
 * zhudingchao
 * Wed Jun 05 2024 15:13:30 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/common/CommonBoxTipsPop.ts
 *
 */

@ccclass('CommonBoxTipsPop')
export class CommonBoxTipsPop extends ViewPop {
    @property(Node)
    tipsNode: Node = null;
    register(): void {

    }
    onShow(): void {
        if (this.openData && this.openData["rewadInfos"]) {
            if (this.openData["worldPos"]) {
                this.tipsNode.worldPosition = this.openData["worldPos"];
            }
            let sY=this.openData["isDown"]?-1:1;
            let rewadInfos: Array<ItemInfo> = this.openData["rewadInfos"];
            let w = rewadInfos.length * 120 * 0.6 + 45 + this.tipsNode.worldPosition.x;
            let sx = 1;
            if (w > view.getVisibleSize().width) {
                sx = -1;
            }
            for (let key in rewadInfos) {
                let item = ItemPoolMgr.ins.createItem(rewadInfos[key],this.tipsNode);
                item.setScale(0.6*sx, 0.6*sY);
                item.setPosition(0, -56);
            }
            this.tipsNode.setScale(sx,sY);

            // this.scheduleOnce(() => {
            //     let y = this.tipsNode.worldPosition.x + this.tipsNode.getComponent(UITransform).contentSize.width - 30;
            //     if (y > view.getVisibleSize().width) {
            //         this.tipsNode.scale = new Vec3(-1, 1, 1);
            //         let nodes = this.tipsNode.children;
            //         for (let key in nodes) {
            //             nodes[key].scale = new Vec3(-0.6, 0.6, 1);
            //         }
            //     }

            // })
        }


    }
}