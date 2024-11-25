import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { RareBookData } from './RareBookData';
import { RareBookInfo } from './RareBookInfo';
import { RareBookRewardPreviewPopItem } from './RareBookRewardPreviewPopItem';
const { ccclass, property } = _decorator;

/**
 * 
 * RareBookRewardPreviewPop
 * zhudingchao
 * Mon May 27 2024 21:00:59 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/rareBook/RareBookRewardPreviewPop.ts
 *
 */

@ccclass('RareBookRewardPreviewPop')
export class RareBookRewardPreviewPop extends ViewPop {
    @property(Node)
    contentNode: Node = null;
    @property(Prefab)
    itemPrefab: Prefab = null;
    register(): void {

    }
    onShow(): void {
        this.initView();
    }
    initView() {
        let alls = RareBookData.ins.getBookInfos();
        let list: Array<Array<RareBookInfo>> = [];
        for (let i: number = 0; i < 3; i++) {
            list.push([]);
        }
        for (let key in alls) {
            let index = alls[key].bookTable.Aptitude - 1;
            list[index].push(alls[key]);
        }
        let len=list.length-1;
        for(let i=len ;i>=0;i--){
            list[i].sort((a,b)=>{
                return a.itemId-b.itemId;
            })
            let item=instantiate(this.itemPrefab);
            item.parent=this.contentNode;
            item.getComponent(RareBookRewardPreviewPopItem).initData(i+1,list[i]);
        }

    }
}