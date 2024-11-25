import { _decorator, Component, instantiate, Label, Node, Prefab } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { RareBookData } from './RareBookData';
import { LangMgr } from '../../mgr/LangMgr';
import { RareBookItem } from './RareBookItem';
import { tab } from '../../../Table/table_gen';
import { RareBookGroupAttributeITitleItem } from './RareBookGroupAttributeITitleItem';
const { ccclass, property } = _decorator;

/**
 * 
 * RareBookGroupPop
 * zhudingchao
 * Mon May 27 2024 19:23:28 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/rareBook/RareBookGroupPop.ts
 *
 */

@ccclass('RareBookGroupPop')
export class RareBookGroupPop extends ViewPop {
    @property(Label)
    nameLab: Label = null;
    @property(Node)
    rarebookLayout: Node = null;
    @property(Node)
    attrNode: Node = null;
    @property(Prefab)
    rareBookItemPrefab: Prefab = null;
    @property(Prefab)
    titleItemPrefab: Prefab = null;

    private currItemId: number;

    register(): void {

    }
    onShow(): void {
        this.currItemId = this.openData["itemId"];
        if (this.currItemId) {
            this.initView();
        }
    }
    initView() {
        let stab = RareBookData.ins.getSerieTableByBookId(this.currItemId);
        if (stab) {
            let newgroupTabs = [];
            let groupTabs = tab.getData().BookSeriesTable;
            for (let key in groupTabs) {
                if (groupTabs[key].GroupId == stab.GroupId) {
                    newgroupTabs.push(groupTabs[key]);
                }
            }
            this.nameLab.string = LangMgr.getLab(stab.Name);
            let bookInfos = [];

            let starMap: Map<number, number> = new Map();
            for (let key in stab.BookId) {
                let info = RareBookData.ins.getBookInfoByItemId(stab.BookId[key]);
                bookInfos.push(info);
                let item = instantiate(this.rareBookItemPrefab);
                item.parent = this.rarebookLayout;
                let com = item.getComponent(RareBookItem);
                com.initData(info, false);
                if (info.isLock) {
                    for (let k2 in newgroupTabs) {
                        let starlevel = newgroupTabs[k2].Level;
                        if (info.level >= starlevel) {
                            if (starMap.has(starlevel)) {
                                starMap.set(starlevel, starMap.get(starlevel) + 1)
                            } else {
                                starMap.set(starlevel, 1)
                            }
                        }
                        // if(starMap.has(gr))
                    }
                }

            }
      
            // this. groupTabs: tab.BookGroupTable[]
            let total = bookInfos.length;

            for (let key in newgroupTabs) {
                let level = groupTabs[key].Level;
                let num = starMap.has(level) ? starMap.get(level) : 0;
                let item = instantiate(this.titleItemPrefab);
                item.parent = this.attrNode;
                let com = item.getComponent(RareBookGroupAttributeITitleItem);
                com.initData(newgroupTabs[key], num, total);
            }
        }
    }
}