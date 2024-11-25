import { _decorator, Component, instantiate, Label, Node, Prefab, Sprite } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { RareBookSmallItem } from './RareBookSmallItem';
import { RareBookInfo } from './RareBookInfo';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
import { RareBookLevelPreviewPopItem } from './RareBookLevelPreviewPopItem';
const { ccclass, property } = _decorator;

/**
 * 
 * RareBookLevelPreviewPop
 * zhudingchao
 * Mon May 27 2024 20:06:27 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/rareBook/RareBookLevelPreviewPop.ts
 *
 */

@ccclass('RareBookLevelPreviewPop')
export class RareBookLevelPreviewPop extends ViewPop {
    @property(RareBookSmallItem)
    bookItem:RareBookSmallItem=null;
    @property(Label)
    nameLab:Label=null;
    @property(Sprite)
    vocationSpr:Sprite=null;
    @property(Node)
    contentNode:Node=null;
    @property(Prefab)
    itemPrefab:Prefab=null;
    private currInfo:RareBookInfo;
    register(): void {

    }
    onShow(): void {
        this.currInfo=this.openData["bookInfo"];
        if(this.currInfo){
            this.initView();
        }
    }
    initView(){
        this.bookItem.initView(this.currInfo,false);
        let heroclass = tab.getData().HeroClassTableByHeroClass.getValue(this.currInfo.bookTable.Class);
        this.vocationSpr.setTexture(heroclass.Icon);
        this.nameLab.string=LangMgr.getLab(this.currInfo.itemTable.Name);
        let allStarTabls:tab.BookStarTable[]=[];
        let tabs=tab.getData().BookStarTable;
        for(let key in tabs){
            if(tabs[key].BookId==this.currInfo.itemId){
                allStarTabls.push(tabs[key]);
            }
        }
        let level=this.currInfo.isLock?this.currInfo.star:0;
        
        for(let key in allStarTabls){
            if(allStarTabls[key].Description&&allStarTabls[key].Description!=""){
                let item=instantiate(this.itemPrefab);
                item.parent=this.contentNode;
                item.getComponent(RareBookLevelPreviewPopItem).initData(allStarTabls[key],allStarTabls[key].Level<=level)
            }
          
        }
        
    }
}