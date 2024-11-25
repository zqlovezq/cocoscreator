import { _decorator, Button, Component, Label, Node, Sprite } from 'cc';
import { RareBookInfo } from '../rareBook/RareBookInfo';
import { LangMgr } from '../../mgr/LangMgr';
import { tab } from '../../../Table/table_gen';
import { RareBookData } from '../rareBook/RareBookData';
import { OpenFunctionMgr } from '../../../Common/component/OpenFunctionMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * WeaponItem
 * zhudingchao
 * Tue May 28 2024 14:38:31 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/common/WeaponItem.ts
 *
 */

@ccclass('WeaponItem')
export class WeaponItem extends Component {
    @property(Button)
    button: Button = null;
    @property(Sprite)
    qualitybgSpr:Sprite=null;
    @property(Sprite)
    iconSpr:Sprite=null;
    @property(Sprite)
    signSpr:Sprite=null;
    @property(Node)
    nameNode:Node=null;
    @property(Label)
    nameLab:Label=null;
    @property(Node)
    unlockNode:Node=null;
    @property(Node)
    selectNode:Node=null;
    @property(Node)
    redPointNode:Node=null;
    @property(Node)
    nodeNotOpen:Node = null;
    public info:RareBookInfo;
    private touchCallBack:Function;

    initData(info:RareBookInfo,isTouch:boolean=true,isShowName:boolean=true,isShowLock:boolean=false,touchCallBack=null){
        this.info=info;
        if(this.button){
            this.button.enabled=isTouch;
        }
        this.nameNode.active=isShowName;
        this.selectNode.active=false;
        this.nameLab.string = LangMgr.getLab(this.info.itemTable.Name);
        this.iconSpr.setTexture(this.info.itemTable.Icon);
        this.signSpr.node.active = this.info.bookTable.PlaystyleName != "";
        if( this.info.bookTable.PlaystyleName != ""){
            this.signSpr.setTexture(this.info.bookTable.PlaystyleName);
        }
        let atpTab = tab.getData().HeroAptitudeTableByHeroAptitude.getValue(this.info.bookTable.Aptitude);
        this.qualitybgSpr.setTexture(atpTab.BookBgSmall);
        // this.qualitySpr.setTexture(atpTab.Icon);
        // this.qualityBgSpr.setTexture(atpTab.BookBgSmall);
        // this.qualitybgSpr.setTexture("textrue/quality/qualityBg_" + info.itemTable.Quality);
        if(isShowLock){
            this.unlockNode.active=!info.isLock;
        }else{
            this.unlockNode.active=false;
        }
        this.touchCallBack=touchCallBack;
    }
    initBookItemId(bookId:number,isTouch:boolean=true,isShowName:boolean=true,isShowLock:boolean=false,touchCallBack=null){
        let info=RareBookData.ins.getBookInfoByItemId(bookId);
        this.initData(info,isTouch,isShowName,isShowLock,touchCallBack);
    }

    setSelect(b:boolean){
        this.selectNode.active=b;
    }
    onClickItem(){
        if(this.touchCallBack){
            this.touchCallBack(this);
        }
}
    setNotOpen(){
        const isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_RareBook);
        let atpTab = tab.getData().HeroAptitudeTableByHeroAptitude.getValue(this.info.bookTable.Aptitude);
        if(this.button){
            if(!isOpen&&atpTab.HeroAptitude===tab.HeroAptitude.HeroAptitude_SR){
                this.nodeNotOpen.active = true;
                this.button.node.active = false;
            }else{
                this.nodeNotOpen.active = false;
                this.button.node.active = true;
            }
        }
    }
}