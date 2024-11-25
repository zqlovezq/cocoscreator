import { _decorator, Component, instantiate, Label, Node, Prefab, UITransform, Vec2 } from 'cc';
import InfiniteList from '../../../../Common/InfiniteList/InfiniteList';
import { tab } from '../../../../Table/table_gen';
import { HeroDataControl } from './HeroDataControl';
import { HeroBagLayoutCell } from './HeroBagLayoutCell';
import { HeroBookLayoutQuality } from './HeroBookLayoutQuality';
import { EventMgr } from '../../../mgr/EventMgr';
import { LocalEvent } from '../../../define/LocalEvent';
const { ccclass, property } = _decorator;

@ccclass('HeroBookView')
export class HeroBookView extends Component {
    @property(InfiniteList)
    list_all_heros: InfiniteList = null;
    @property(Prefab)
    pfb_hero_item: Prefab = null;
    @property(Prefab)
    pfb_hero_quality: Prefab = null;
    @property(Label)
    lbl_cur_count:Label = null;
    @property(Label)
    lbl_totle_count:Label = null;
    private _lineHeroCount = 3;
    private _list = []
    private _type:tab.HeroClass = tab.HeroClass.HeroClass_Max
    private _bookIndex = 0;
    onLoad(): void {
        
    }
    showAllHeros(type:tab.HeroClass,isInit:boolean){
        this._bookIndex = 0;
        this._type = type;
        this._list = this.groupHeroList(type);
        this.getBookIndex();
        this.lbl_cur_count.string = String(HeroDataControl.ins.getBookActiveHeroCount());
        this.lbl_totle_count.string = String(tab.getData().HeroTable.length);
        if(isInit){
            this.list_all_heros.Init({
                getCellNumber: this.getCellCount.bind(this),
                getCellSize: this.getCellHeight.bind(this),
                getCellIdentifer: this.getCellIdentifer.bind(this),
                getCellView: this.getCellView.bind(this),
                getCellData: this.GetCellData.bind(this),
            });
            this.list_all_heros.Reload(true);
            if(this._bookIndex>=1){
                const pos = this.list_all_heros.GetScrollPosOfCell(this._bookIndex);
                const maxY = this.list_all_heros.getContent().getComponent(UITransform).height-435;
                let max_y = pos.y>maxY?maxY:pos.y;
                this.list_all_heros.setContentPos(max_y,0, max_y);
            }
        }else{
            this.list_all_heros.Refresh();
        }
    }
    getBookIndex(){
        for(let i=0;i<this._list.length;i++){
            let list = this._list[i];
            if(list.length>0){
                for(let k=0;k<list.length;k++){
                    if(list[k]===HeroDataControl.ins.bookId){
                        this._bookIndex = i;
                        return;
                    }
                }
            }
        }
    }
    getCellCount() {
        return this._list.length
    }
    getCellHeight(idx: number) {
        let data = this._list[idx];
        if(data.length){
            return 185;
        }else{
            return 40;
        }
    }
    getCellIdentifer(idx:number) {
        let data = this._list[idx];
        if(data.length){
            return "HeroBagLayoutCell";
        }else{
            return "HeroBookLayoutQuality"
        }
    }
    getCellView(idx: number, identifer: string) {
        let cell = null;
        switch (identifer) {
            case "HeroBagLayoutCell":
                cell = instantiate(this.pfb_hero_item).getComponent(HeroBagLayoutCell);
                break;
            case "HeroBookLayoutQuality":
                cell = instantiate(this.pfb_hero_quality).getComponent(HeroBookLayoutQuality);
                break;
            default:
                break;
        }
        return cell;
    }
    GetCellData(idx: number) {
        return  this._list[idx];
    }

    /* 将英雄数据分组 */
    groupHeroList(type:tab.HeroClass) {
        const result = [];
        let bookList = HeroDataControl.ins.getBookHeroListByVocation(type,false);
        /* 将heroList 按照品质分类 */
        let bookHeroList = [[]];
        let quality:tab.HeroAptitude = tab.HeroAptitude.HeroAptitude_SSR;
        let idx = 0;
        for(let i = 0; i < bookList.length;i++){
            let itemId = bookList[i];
            let heroTab = tab.getData().HeroTableById.getValue(itemId);
            if(heroTab.Aptitude!==quality){
                quality = heroTab.Aptitude;
                idx+=1;
                bookHeroList[idx] = [];
            }
            bookHeroList[idx].push(bookList[i]);
        }
        for(let k=0;k<bookHeroList.length;k++){
            let _itemId = bookHeroList[k][0];
            let _heroTab = tab.getData().HeroTableById.getValue(_itemId);
            let _quality:tab.HeroAptitude = _heroTab.Aptitude;
            result.push(_quality)
            for (let j = 0; j < bookHeroList[k].length; j += this._lineHeroCount) {
                result.push(bookHeroList[k].slice(j, j + this._lineHeroCount));
            }
        }
        return result;
    }
    /* 刷新列表中的元素 */
    refreshBookByItemId(itemId:number){
        let bookList = this.groupHeroList(this._type);
        let index = 0;
        for(let i = 0;i<bookList.length;i++){
            let data = bookList[i];
            if(data.length===0){
                continue;
            }  
            for(let j=0;j<data.length;j++){
                let _itemId = data[j];
                if(_itemId===itemId){
                    index = i
                }
            }
        }
        let layout = this.list_all_heros.findCellOfIdx(index);
        let ts:HeroBagLayoutCell = layout.getComponent(HeroBagLayoutCell);
        ts.updateBookCell(itemId);
        this.lbl_cur_count.string = String(HeroDataControl.ins.getBookActiveHeroCount());
        HeroDataControl.ins.refreshBookData(itemId);
        EventMgr.emitLocal(LocalEvent.Hero_Change,false);
    }
}


