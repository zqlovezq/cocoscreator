import { _decorator, instantiate, Prefab, Node } from 'cc';
import { HeroBagItem } from './HeroBagItem';
import InfiniteCell from '../../../../Common/InfiniteList/InfiniteCell';
import { HeroDataControl } from './HeroDataControl';
import { EventMgr } from '../../../mgr/EventMgr';
import { LocalEvent } from '../../../define/LocalEvent';
import { HeroData } from '../HeroData';
import { HeroInfo } from '../HeroInfo';
import { tab } from '../../../../Table/table_gen';
const { ccclass, property } = _decorator;

@ccclass('HeroBagLayoutCell')
export class HeroBagLayoutCell extends InfiniteCell {
    @property(Prefab)
    pfb_cell_item: Prefab = null;
    @property(Node)
    node_content: Node = null;
    UpdateContent(data: any) {
        this.node_content.removeAllChildren();
        for (let i = 0; i < data.length; i++) {
            let node = instantiate(this.pfb_cell_item);
            node.parent = this.node_content;
            let itemTs = node.getComponent(HeroBagItem);
            let id = data[i];
            let heroInfo = null;
            if (!HeroDataControl.ins.bookId) {
                heroInfo = HeroData.ins.getById(id);
            }else{
                heroInfo = new HeroInfo();
                let itemId = id
                let heroTab = tab.getData().HeroTableById.getValue(itemId)
                heroInfo.itemId = itemId
                heroInfo.id = 0;
                heroInfo.star = heroTab.DefaultStar;
            }
            itemTs.UpdateContent(heroInfo);
            itemTs.setTouchCallBack(() => {
                if (!HeroDataControl.ins.bookId) {
                    if(HeroDataControl.ins.heroId!==id){
                        HeroDataControl.ins.refreshBagData(id);
                        EventMgr.emitLocal(LocalEvent.Hero_Change,false);
                    }
                }else{
                    if(HeroDataControl.ins.bookId!==id){
                        HeroDataControl.ins.refreshBookData(id);
                        EventMgr.emitLocal(LocalEvent.Hero_Change,false);
                    }
                }
            })
        }
    }
    updateBookCell(itemId:number){
        let node = this.node_content.getChildByName(String(itemId));
        let itemTs = node.getComponent(HeroBagItem);
        let heroInfo = new HeroInfo();
        let heroTab = tab.getData().HeroTableById.getValue(itemId)
        heroInfo.itemId = itemId
        heroInfo.id = 0;
        heroInfo.star = heroTab.DefaultStar;
        itemTs.UpdateContent(heroInfo);
    }
}


