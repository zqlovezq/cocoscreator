import { _decorator, instantiate, Prefab, Node, Vec3, Layout } from 'cc';
import InfiniteCell from '../../../Common/InfiniteList/InfiniteCell';
import { MallCommodityItem } from './MallCommodityItem';
import { tab } from '../../../Table/table_gen';
import { DiamondBuyItem } from '../common/DiamondBuyItem';
import { CycleGiftItem } from '../activity/wonderfulActivity/CycleGiftItem';
import { NewHandGiftItem } from '../activity/wonderfulActivity/NewHandGiftItem';
const { ccclass, property } = _decorator;

@ccclass('MallLayoutCell')
export class MallLayoutCell extends InfiniteCell {
    @property(Prefab)
    pfb_cell_item: Prefab = null;
    @property(Prefab)
    pfb_diamond_item:Prefab = null;
    @property(Prefab)
    pfb_gift_item:Prefab = null;
    @property(Prefab)
    pfb_NewPlayerMall_item:Prefab = null;
    @property(Node)
    node_content: Node = null;
    UpdateContent(listData: any) {
        this.node_content.removeAllChildren();
        for (let i = 0; i < listData.data.length; i++) {
            let node = null;
            let itemTs = null;
            const layout = this.node_content.getComponent(Layout);
            const pos = this.node_content.getPosition();
            layout.spacingX = 20;
            if(listData.view===tab.MallTab.MallTab_Tab5){
                node = instantiate(this.pfb_diamond_item);
                node.parent = this.node_content;
                itemTs = node.getComponent(DiamondBuyItem);
                itemTs.initData(listData.data[i]);
                if(listData.viewName){
                    layout.spacingX = 50;
                    this.node_content.setPosition(new Vec3(pos.x+20,pos.y,0))
                }
            }else if(listData.view===tab.MallTab.MallTab_SpecialGiftTab1){
                node = instantiate(this.pfb_gift_item);
                node.parent = this.node_content;
                itemTs = node.getComponent(CycleGiftItem);
                itemTs.initData(listData.data[i],listData.viewName);
                layout.spacingX = 0;
            }else if(listData.view===tab.MallTab.MallTab_NewPlayerMall||listData.view===tab.MallTab.MallTab_NewPlayerMall2){
                node = instantiate(this.pfb_NewPlayerMall_item);
                node.parent = this.node_content;
                itemTs = node.getComponent(NewHandGiftItem);
                itemTs.initData(listData.data[i],listData.viewName);
                layout.spacingX = 0;
            }else{
                node = instantiate(this.pfb_cell_item);
                node.parent = this.node_content;
                itemTs = node.getComponent(MallCommodityItem);
                itemTs.initData(listData.data[i],listData.view,listData.viewName);
            }
        }
    }
}


