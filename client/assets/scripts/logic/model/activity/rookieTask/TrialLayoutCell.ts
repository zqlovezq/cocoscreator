import { _decorator, instantiate, Prefab, Node, Vec3, Layout } from 'cc';
import InfiniteCell from '../../../../Common/InfiniteList/InfiniteCell';
import { RookieShopItem } from './RookieShopItem';
const { ccclass, property } = _decorator;

@ccclass('TrialLayoutCell')
export class TrialLayoutCell extends InfiniteCell {
    @property(Prefab)
    pfb_trial_item: Prefab = null;
    @property(Node)
    node_content: Node = null;
    UpdateContent(listData: any) {
        this.node_content.removeAllChildren();
        for (let i = 0; i < listData.data.length; i++) {
            let node = instantiate(this.pfb_trial_item);
            node.parent = this.node_content;
            let itemTs = node.getComponent(RookieShopItem);
            itemTs.initData(listData.data[i],listData.id);
        }
    }
}


