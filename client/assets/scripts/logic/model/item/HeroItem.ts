import { _decorator, Color, Component, Label, log, Node, ProgressBar, Sprite } from 'cc';
import { tab } from '../../../Table/table_gen';
import { HeroInfo } from '../hero/HeroInfo';
import { HeroStar } from '../hero/HeroStar';
import { HeroData } from '../hero/HeroData';
import { HeroDataControl } from '../hero/herobag/HeroDataControl';
import { HeroTeamControl } from '../hero/HeroTeamControl';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { RoleData } from '../role/RoleData';
const { ccclass, property } = _decorator;

@ccclass('HeroItem')
export class HeroItem extends Component {
    @property(Sprite)
    qualityImg: Sprite = null;
    @property(Sprite)
    iconImg: Sprite = null;
    @property(Sprite)
    sp_sign: Sprite = null;//品质 优良精卓
    @property(Sprite)
    sp_vocation: Sprite = null;//职业
    @property(Sprite)
    sp_quality: Sprite = null;//品质

    @property(Node)
    starNode: Node = null;
    @property(Node)
    node_select: Node = null;

    @property(Label)
    numLab: Label = null;

    @property(Node)
    notNode: Node = null;
    @property(Node)
    itemNode: Node = null;

    @property(Sprite)
    sp_quality_bg: Sprite = null;//品质框
    @property(Sprite)
    sp_quality_star_bg: Sprite = null;//装备星级职业底

    @property(Label)
    heronumLab: Label = null;

    @property(Node)
    node_piece: Node = null;
    @property(Node)
    node_common: Node = null;
    @property(Node)
    node_auto_disband:Node = null;

    private data: HeroInfo;
    public heroInfo: HeroInfo;
    private touchCallBack: Function;
    private isSelect: boolean;
    setLevel(lv: number) {
        this.numLab.string = String(lv);
        this.numLab.node.active = lv !== 0;
    }
    setSelect(select: boolean) {
        this.isSelect = select;
        this.node_select.active = select;
    }
    setHeroProbablity() {
        this.node_select.active = false;
        this.iconImg.grayscale = false;
        this.sp_sign.node.active = true;
        this.starNode.active = true;
        this.numLab.node.active = false;
        //this.numLab.string = "x1";
    }
    getSelect() {
        return this.isSelect;
    }
    /* 是否显示SRR品质 */
    setHeroActive(srr: boolean) {
        this.sp_sign.node.active = srr;
        // this.starNode.active = star;
        // this.numLab.node.active = !star;
    }
    UpdateContent(data: HeroInfo) {
        this.data = data;
        this.initView();
    }
    initView() {
        if (this.data) {
            this.node_piece.active = false;
            this.node_common.active = true;
            this.notNode.active = false;
            this.itemNode.active = true;
            this.heronumLab.node.active = false;
            this.starNode.active = true;
            this.numLab.node.active = true;

            this.heroInfo = this.data
            const data: HeroInfo = this.data

            const itemTab = this.data.itemTable;
            const itemQualityTab = HeroDataControl.ins.getItemQualityTableByStar(this.heroInfo.star);
            const heroClassTab = data.heroClassTable;
            const heroAptitudeTab = data.heroAptitudeTable;


            // setTexture
            this.qualityImg.setTexture("textrue/quality/qualityBg_" + itemTab.Quality);
            this.iconImg.setTexture(itemTab.Icon);
            this.sp_vocation.setTexture(heroClassTab.Icon);
            this.sp_sign.setTexture(heroAptitudeTab.Icon);
            this.sp_quality_bg.setTexture(itemQualityTab.QualityFrame);
            this.sp_quality_star_bg.setTexture(itemQualityTab.HeroStarBg);
            // if (!itemData) {
            //     this.iconImg.grayscale = true;
            // } else {
            //     this.iconImg.grayscale = false;
            // }
            // Label
            let level = 0;
            if (this.data.level) {
                level = this.data.level;
            } else {
                level = data.getHeroLevel();
                let maxLevel = data.heroStarUpTable.MaxLevel;
                if (maxLevel < data.getHeroLevel()) {
                    level = maxLevel;
                }
            }
            this.numLab.string = level ? String(level) : "";

            // 星级
            this.starNode.getComponent(HeroStar).showStar(this.heroInfo.star);
            this.setSelect(false);

        } else {
            this.notNode.active = true;
            this.itemNode.active = false;
        }

        this.addTouchEvent();

    }
    setGrayScale() {
        const map = HeroDataControl.ins.getBookReceivedIds();
        const itemData = map.get(this.data.itemId);
        if (!itemData) {
            this.iconImg.grayscale = true;
        } else {
            this.iconImg.grayscale = false;
        }
    }
    setTouchCallBack(callBack: Function) {
        this.touchCallBack = callBack;

    }
    private addTouchEvent() {
        this.node.on(Node.EventType.TOUCH_END, this.onTouchItem, this)
    }
    public showHeroNum(num: number) {
        this.heronumLab.node.active = true;
        this.heronumLab.string ="x" + num + "";
    }
    private onTouchItem() {
        if (this.touchCallBack) {
            this.touchCallBack();
        } else {
            log("点击了item");
            let itemTab = this.data.itemTable;
            if (itemTab.Type !== tab.ItemType.ItemType_Equip) {
                HeroDataControl.ins.refreshBookData(itemTab.Id);
                UIMgr.ins.show({ viewName: ViewName.HeroBagView, data: { viewType: 2 }, zIndex: 300 })
            }
        }
    }
    protected onDisable(): void {
        // this.node.targetOff(this);
        // ItemPoolMgr.ins.putHeroItem(this.node);
        this.starNode.getComponent(HeroStar).onDisable();
    }

    protected onDestroy(): void {
        this.node.targetOff(this);
    }
    setPiece(num: number) {
        this.node_piece.active = true;
        this.node_common.active = false;
        this.node_piece.getChildByName("piece_bar").active = false;
        this.showHeroNum(num);
        this.setLevel(0)
    }
    setAutoDisband(isN:boolean){
        this.node_auto_disband.active = RoleData.ins.autoDisband&&isN;
    }
    setHeroStar(star:number){
        this.starNode.getComponent(HeroStar).showStar(star);
    }
}


