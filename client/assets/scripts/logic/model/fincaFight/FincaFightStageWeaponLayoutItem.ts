import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import InfiniteCell from '../../../Common/InfiniteList/InfiniteCell';
import { FincaFightStageWeaponItem } from './FincaFightStageWeaponItem';
import { RareBookInfo } from '../rareBook/RareBookInfo';
const { ccclass, property } = _decorator;

@ccclass('FincaFightStageWeaponLayoutItem')
export class FincaFightStageWeaponLayoutItem extends InfiniteCell {
    @property(Prefab)
    pfb_cell_item: Prefab = null;
    @property(Node)
    node_content: Node = null;
    UpdateContent(data: RareBookInfo[]): void {
        this.node_content.removeAllChildren();
        for (let i = 0; i < data.length; i++) {
            let node = instantiate(this.pfb_cell_item);
            node.parent = this.node_content;
            const itemTs = node.getComponent(FincaFightStageWeaponItem);
            itemTs.initData(data[i]);
        }
    }
}


