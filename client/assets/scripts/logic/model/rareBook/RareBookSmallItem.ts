import { _decorator, Button, Component, Label, Node, Sprite } from 'cc';
import { HeroStar } from '../hero/HeroStar';
import { RareBookInfo } from './RareBookInfo';
import { LangMgr } from '../../mgr/LangMgr';
import { tab } from '../../../Table/table_gen';
import { UIMgr } from '../../mgr/UIMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * RareBookSmallItem
 * zhudingchao
 * Fri May 24 2024 16:13:40 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/rareBook/RareBookSmallItem.ts
 *
 */

@ccclass('RareBookSmallItem')
export class RareBookSmallItem extends Component {


    @property(Sprite)
    bookSpr: Sprite = null;
    @property(Sprite)
    qualitySpr: Sprite = null;
    @property(Sprite)
    qualityBgSpr: Sprite = null;
    @property(Sprite)
    qualityframeSpr:Sprite=null;
    @property(Sprite)
    booktypeImg: Sprite = null;
    @property(Sprite)
    vocationTypeSpr: Sprite = null;
    @property(Label)
    levelLv: Label = null;
    @property(HeroStar)
    starItem: HeroStar = null;
    @property(Button)
    button: Button = null;
    private touchCallBack: Function;
    private info: RareBookInfo;


    initView(info: RareBookInfo, isTouch: boolean = false, touchCallBack: Function = null, isPreView: boolean = false) {
        this.info = info;
        this.button.enabled = isTouch;
        this.touchCallBack = touchCallBack;
        // this.bookNameLab.string = LangMgr.getLab(this.info.itemTable.Name);
        this.bookSpr.setTexture(this.info.itemTable.Icon);
        let atpTab = tab.getData().HeroAptitudeTableByHeroAptitude.getValue(this.info.bookTable.Aptitude);
        this.qualitySpr.setTexture(atpTab.Icon);
        this.qualityBgSpr.setTexture(atpTab.BookBgSmall);
        let heroclass = tab.getData().HeroClassTableByHeroClass.getValue(this.info.bookTable.Class);
        this.vocationTypeSpr.setTexture(heroclass.Icon);
      
        let qualitytab=tab.getData().ItemQualityTableByQuality.getValue(this.info.itemTable.Quality);
        this.qualityframeSpr.setTexture(qualitytab.HeroStarBg);
        this.booktypeImg.node.active = this.info.bookTable.PlaystyleName != "";
        if( this.info.bookTable.PlaystyleName != ""){
            this.booktypeImg.setTexture(this.info.bookTable.PlaystyleName);
        }
        // this.bookPlaystyleLab.node.active = this.info.bookTable.PlaystyleName != tab.Playstyle.Playstyle_None;
        // this.bookPlaystyleLab.string = LangMgr.getLab(tab.Playstyle[this.info.bookTable.PlaystyleName]);

        if (!isPreView) {
            this.starItem.showStar(this.info.star);
            if (this.info.level > 0) {
                this.levelLv.node.active = true;
                this.levelLv.string = "+" + this.info.level;
            } else {
                this.levelLv.node.active = false;
            }
        } else {
            this.levelLv.node.active = false;
            this.starItem.node.active = false;
        }



    }
    onClickItem() {
        if (this.touchCallBack) {
            this.touchCallBack(this.info);
        }
    
    }
    protected onDisable(): void {
        this.starItem.onDisable();
    }
}