import { _decorator, CCInteger, Component, error, Node } from 'cc';
import { tab } from '../../../Table/table_gen';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { HeroDataControl } from '../hero/herobag/HeroDataControl';
import { RareBookData } from '../rareBook/RareBookData';
const { ccclass, property } = _decorator;

/**
 * 
 * ComminJumpByItemId
 * zhudingchao
 * Mon Jul 22 2024 19:35:46 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/common/CommonJumpByItemId.ts
 *
 */

@ccclass('CommonJumpByItemId')
export class CommonJumpByItemId extends Component {
    @property(CCInteger)
    itemId: number = 0;
    protected onLoad(): void {
        this.addTouchEvent();
    }

    private addTouchEvent() {
        this.node.on(Node.EventType.TOUCH_END, this.onTouchItem, this)
    }
    onTouchItem = () => {
        let itemTab = tab.getData().ItemTableById.getValue(this.itemId);
        if (itemTab) {
            if (itemTab.Type == tab.ItemType.ItemType_Hero) {
                HeroDataControl.ins.refreshBookData(itemTab.Id);
                UIMgr.ins.show({ viewName: ViewName.HeroBagView, data: { viewType: 2 }, zIndex: 300 })
            } else if (itemTab.Type == tab.ItemType.ItemType_Piece) {
                UIMgr.ins.show({
                    viewName: ViewName.ItemInfoPop, data: {
                        itemId: this.itemId,
                    }
                })
            }else if(itemTab.Type == tab.ItemType.ItemType_Book){
                let info=RareBookData.ins.getBookInfoByItemId(this.itemId)
                UIMgr.ins.show({ viewName: ViewName.RareBookInfoItemPop, data: { "bookInfo":info } });
            }
          

        } else {
            error("itemId错误-----", this.itemId);
        }
    }
}