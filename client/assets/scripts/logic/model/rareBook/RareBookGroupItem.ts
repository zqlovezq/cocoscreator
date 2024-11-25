import { _decorator, Component, Gradient, instantiate, Label, Node, Prefab, sp } from 'cc';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
import { RareBookData } from './RareBookData';
import { RareBookItem } from './RareBookItem';
import { RareBookGroupAttributeITitleItem } from './RareBookGroupAttributeITitleItem';
import { RareBookInfo } from './RareBookInfo';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
const { ccclass, property } = _decorator;

/**
 * 
 * RareBookGroupItem
 * zhudingchao
 * Mon May 27 2024 16:34:29 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/rareBook/RareBookGroupItem.ts
 *
 */

@ccclass('RareBookGroupItem')
export class RareBookGroupItem extends Component {
    @property(Node)
    rarebookLayout: Node = null;
    @property(Prefab)
    rareBookItemPrefab: Prefab = null;
    @property(Prefab)
    titleItemPrefab: Prefab = null;
    @property(Node)
    attributeNode: Node = null;
    @property(Label)
    nameLab: Label = null;
    @property(Node)
    redPoint:Node=null;
    @property(sp.Skeleton)
    animSp:sp.Skeleton=null;
    private bookInfos: RareBookInfo[];
    private groupTabs: tab.BookSeriesTable[];
    private rareBookItems: Array<RareBookItem>;
    private attrItems: Array<RareBookGroupAttributeITitleItem>;
    public groupId:number;
    initData( groupTabs: tab.BookSeriesTable[]) {
        let table=groupTabs[0]
        this.groupId=table.GroupId;
        this.nameLab.string = LangMgr.getLab(table.Name);
        let bookInfos = [];
        this.rareBookItems = [];
        this.attrItems = [];
        // let starMap: Map<number, number> = new Map();
        for (let key in table.BookId) {
            let info = RareBookData.ins.getBookInfoByItemId(table.BookId[key]);
            bookInfos.push(info);
            let item = instantiate(this.rareBookItemPrefab);
            item.parent = this.rarebookLayout;
            let com = item.getComponent(RareBookItem);
            com.initData(info,true,this.onTouchItem,false);
            this.rareBookItems.push(com);
          

        }
        this.bookInfos = bookInfos;
        this.groupTabs = groupTabs;
        let total = bookInfos.length;

        for (let key in groupTabs) {
            let info=RareBookData.ins.getSerieInfoById(groupTabs[key].Id)
            let num =info?info.count:0;
            let item = instantiate(this.titleItemPrefab);
            item.parent = this.attributeNode;
            let com = item.getComponent(RareBookGroupAttributeITitleItem);
            com.initData(groupTabs[key], num, total);
            this.attrItems.push(com);
        }
        this.animSp.node.active=false;
        this.redPoint.active=false;
    }
    onTouchItem=(info:RareBookInfo)=>{
        UIMgr.ins.show({ viewName: ViewName.RareBookDetailView,data:{"currInfo":info}})
    }
    updateView(): void {
        for (let key in this.rareBookItems) {
            this.rareBookItems[key].updateView();
        }
        let total = this.rareBookItems.length;
        for (let key in this.groupTabs) {
            let info=RareBookData.ins.getSerieInfoById(this.groupTabs[key].Id)
            let num =info?info.count:0;
            let item = this.attrItems[key]
            item.updateView(num, total);

        }
      
    }

    playAnim(){
        this.animSp.node.active=true;
        // this.redPoint.active=true;
        this.animSp.setAnimation(0,"idle",false);
        this.animSp.setCompleteListener((trackEntry) => {
            if (trackEntry.loop) {
                return
            }
            this.animSp.node.active=false;
            this.redPoint.active=false;
        
        })
        // this.scheduleOnce(()=>{
           
        // },1)
    }

}