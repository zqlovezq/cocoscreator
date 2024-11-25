import { _decorator, Component, instantiate, Label, Node, Prefab, Sprite } from 'cc';
import { RareBookItem } from './RareBookItem';
import { RareBookData } from './RareBookData';
import { LangMgr } from '../../mgr/LangMgr';
import { RareBookInfo } from './RareBookInfo';
import { tab } from '../../../Table/table_gen';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
const { ccclass, property } = _decorator;

/**
 * 
 * RareBookEquipNode
 * zhudingchao
 * Tue May 28 2024 19:44:51 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/rareBook/RareBookEquipNode.ts
 *
 */

@ccclass('RareBookEquipNode')
export class RareBookEquipNode extends Component {
    @property([RareBookItem])
    bookItems: Array<RareBookItem> = [];
    @property(Node)
    contentNode: Node = null;
    @property(Sprite)
    baseBookIcon: Sprite = null;
    @property(Sprite)
    baseVocationIcon: Sprite = null;
    @property(Label)
    baseBookName: Label = null;

    private bookItemPrefab: Prefab;
    private currTag: number = 1;
    private canBookItems: Array<RareBookItem> = [];
    private currTargetNode:Node;


    initView(prefb: Prefab = null) {
        if (prefb) {
            this.bookItemPrefab = prefb;
        }
        let canList = RareBookData.ins.getCanBookInfosByHeroClass(this.currTag);
        let slots = RareBookData.ins.getBookSlotsByHeroClass(this.currTag);
        for (let key in slots) {
            let item = this.bookItems[key];
            if (slots[key].bookInfo) {
                item.initData(slots[key].bookInfo, true, this.onTouchItem, false);
            } else {
                if (!slots[key].isLock) {
                    let tips = LangMgr.getCombineString("ui_rarebook_2", [slots[key].bookSlotTable.UnlockArgs])
                    item.initLockView(tips);
                } else {
                    item.initEmptyView();
                }
            }
        }

        for (let key in this.canBookItems) {
            this.canBookItems[key].node.active = false;
        }
        for (let key in canList) {
            let item = this.canBookItems[key];
            if (!item) {
                let node = instantiate(this.bookItemPrefab);
                node.parent = this.contentNode;
                item = node.getComponent(RareBookItem);
                this.canBookItems.push(item);
            }
            item.node.active = true;
            item.initData(canList[key], true, this.onTouchItem, false);
        }
        let baseInfo = RareBookData.ins.getBaseBookInfoByHeroClass(this.currTag);
        this.baseBookName.string = LangMgr.getLab(baseInfo.itemTable.Name);
        this.baseBookIcon.setTexture(baseInfo.itemTable.Icon);
        let heroclass = tab.getData().HeroClassTableByHeroClass.getValue(this.currTag);
        this.baseVocationIcon.setTexture(heroclass.Icon);

    }
    onClickToggle(event, tag) {
        tag = Number(tag);
        if (this.currTag != tag) {
            this.currTag = tag;
            if (this.currTargetNode) {
                this.currTargetNode.getChildByName("redNode").active = true;
            }
            event.target.getChildByName("redNode").active = false;
            this.currTargetNode = event.target;
            this.initView(null);
        }
    }
    onTouchItem = (info: RareBookInfo) => {
        UIMgr.ins.show({viewName:ViewName.RareBookEquipPop,data:{"bookInfo":info}})
    }

}