import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import InfiniteCell from '../../../Common/InfiniteList/InfiniteCell';
import { FincaBagItem } from './FincaBagItem';
import { HeroData } from '../hero/HeroData';
const { ccclass, property } = _decorator;

@ccclass('FincaBagLayoutCell')
export class FincaBagLayoutCell extends InfiniteCell {
    @property(Prefab)
    pfb_cell_item: Prefab = null;
    @property(Node)
    node_content: Node = null;
    UpdateContent(data: any) {
        this.node_content.removeAllChildren();
        for (let i = 0; i < data.length; i++) {
            let node = instantiate(this.pfb_cell_item);
            node.parent = this.node_content;
            let itemTs = node.getComponent(FincaBagItem);
            let heroInfo = HeroData.ins.getById(data[i]);
            itemTs.UpdateContent(heroInfo);
        }
    }
}


