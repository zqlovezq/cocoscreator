import { _decorator, Component, Node } from 'cc';
import { WeaponItem } from '../common/WeaponItem';
import { FincaFightData } from './FincaFightData';
import { FincaFightTeamState } from '../../../Common/script/EnumTypeMgr';
import { ItemPoolMgr } from '../item/ItemPoolMgr';
import { RareBookData } from '../rareBook/RareBookData';
import { ShowTips } from '../../mgr/UIMgr';
import { LangMgr } from '../../mgr/LangMgr';
const { ccclass, property } = _decorator;

@ccclass('FincaFightBookToggle')
export class FincaFightBookToggle extends Component {
    private emptyNode:Node = null;
    private lockNode:Node = null;
    private bookNode:Node = null;
    private selectNode:Node = null;
    private bookItem:WeaponItem = null;
    public curIndex:number = 0;
    setData(index:number){
        let bookId = FincaFightData.ins.bookIds[index];
        this.curIndex = index;
        this.emptyNode = this.node.getChildByName("empty_node");
        this.lockNode = this.node.getChildByName("lock_node");
        this.bookNode = this.node.getChildByName("item");
        this.selectNode = this.node.getChildByName("select_node");
        
        const state = FincaFightData.ins.getBookState(index+1);

        this.emptyNode.active = state===FincaFightTeamState.EMPTY;
        this.lockNode.active = state===FincaFightTeamState.LOCK;
        this.bookNode.active = state===FincaFightTeamState.BOOK;
        let bookInfo = RareBookData.ins.getBookInfoByItemId(bookId);
        if(bookId){
            if(!this.bookItem){
                let bookItemNode = ItemPoolMgr.ins.createBookItem(bookInfo,this.bookNode);
                this.bookItem = bookItemNode.getComponent(WeaponItem);
            }else{
                this.bookItem.initData(bookInfo, false, false);
            }
        }
    }
    setSelectState(isSelect:boolean){
        this.selectNode.active = isSelect;
    }
    refreshItem(heroId:number){
        // let heroInfo = HeroData.ins.getById(heroId);
        // this.heroItem.UpdateContent(heroInfo)
    }
    onClickLockBtn(){
        const level = FincaFightData.ins.getUnLockLevel(this.curIndex+1,false);
        ShowTips(LangMgr.getCombineString("Tips_finca_3",[level]))
    }
}


