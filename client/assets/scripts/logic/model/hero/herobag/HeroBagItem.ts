import { _decorator, Component, Label, log, Node, Sprite, SpriteRenderer, Vec2, Vec3 } from 'cc';
import { proto } from 'client_protocol';
import { HeroDataControl } from './HeroDataControl';
import { HeroInfo } from '../HeroInfo';
import { HeroData } from '../HeroData';
import { HeroTeamControl } from '../HeroTeamControl';
import { tab } from '../../../../Table/table_gen';
import { HeroStar } from '../HeroStar';
import { RedMgr } from '../../../mgr/RedMgr';
import { RedDotType } from '../../../red/RedDotType';
import { ItemData } from '../../item/ItemData';
import { Net } from '../../../net/Net';
import { HeroRed } from './HeroRed';
const { ccclass, property } = _decorator;

@ccclass('HeroBagItem')
export class HeroBagItem extends Component {
    @property(Sprite)
    sp_hero: Sprite = null;//英雄头像
    @property(Sprite)
    sp_vocation: Sprite = null;//职业
    @property(Sprite)
    sp_quality: Sprite = null;//品质
    @property(Sprite)
    sp_quality_bg: Sprite = null;//品质框
    @property(Sprite)
    sp_quality_star_bg: Sprite = null;//装备星级职业底
    @property(Node)
    node_star: Node = null;
    @property(Label)
    lbl_level: Label = null;
    @property(Node)
    node_inTeam: Node = null;
    @property(Node)
    node_select: Node = null;
    @property(Node)
    node_red: Node = null;
    @property(Node)
    node_award_book: Node = null;
    @property(Node)
    num_label: Node = null;
    private touchCallBack: Function;
    private heroInfo: HeroInfo;
    private teamSlots: proto.ITeamSlot[] = [];
    private _itemId: number = 0;
    protected onLoad(): void {
        /* 点击事件 */
        /* 切换立绘 */
        this.node.on(Node.EventType.TOUCH_END, this.onTouchItem, this)
    }
    UpdateContent(data: HeroInfo) {
        this._itemId = data.itemId;
        this.node.name = String(data.itemId)
        let itemTab = tab.getData().ItemTableById.getValue(data.itemId);
        let heroTab = tab.getData().HeroTableById.getValue(data.itemId);
        let heroClassTable = tab.getData().HeroClassTableByHeroClass.getValue(heroTab.Class);
        let heroAptitudeTab = tab.getData().HeroAptitudeTableByHeroAptitude.getValue(heroTab.Aptitude);
        /* 获取品质 */
        let itemQualityTab = null;
        if (data.id) {
            this.node_award_book.active = false;
            this.heroInfo = HeroData.ins.getById(data.id);

            let level = this.heroInfo.getHeroLevel()
            let maxLevel = this.heroInfo.heroStarUpTable.MaxLevel;
            if (maxLevel < this.heroInfo.getHeroLevel()) {
                level = maxLevel;
            }

            this.lbl_level.string = String(level);
            this.node_select.active = Number(this.heroInfo.id) === HeroDataControl.ins.heroId;
            let star = this.heroInfo.star;
            itemQualityTab = HeroDataControl.ins.getItemQualityTableByStar(star);
        } else {
            /* 图签 */
            this.lbl_level.node.active = false;
            itemQualityTab = HeroDataControl.ins.getItemQualityTableByStar(heroTab.DefaultStar);
            this.node_select.active = data.itemId === HeroDataControl.ins.bookId;
            this.node.name = String(data.itemId);
            let awardMap = HeroDataControl.ins.getBookReceivedIds();
            const awardObj = awardMap.get(data.itemId);
            this.node_award_book.active = awardObj && !awardObj.isReceived;
            if (this.node_award_book.active) {
                let awardTab = tab.getData().HeroAlbumTableByHeroAptitude.getValue(heroTab.Aptitude);
                let awardItemTab = tab.getData().ItemTableById.getValue(awardTab.ItemId);
                let count = awardTab.ItemNum;
                this.node_award_book.getChildByName("reward_icon").getComponent(Sprite).setTexture(awardItemTab.Icon);
                this.num_label.getComponent(Label).string = String(count);
            }
        }
        this.sp_quality_bg.setTexture(itemQualityTab.HeroBagQuality);
        this.sp_quality_star_bg.setTexture(itemQualityTab.HeroStarBg)
        this.sp_vocation.setTexture(heroClassTable.Icon);
        this.sp_hero.setTexture(itemTab.Icon);
        this.sp_quality.setTexture(heroAptitudeTab.Icon);
        this.node_star.getComponent(HeroStar).showStar(data.star);
        let itemData = HeroData.ins.getByItemId(data.itemId);

        let _awardMap = HeroDataControl.ins.getBookReceivedIds();
        if ((!itemData && !_awardMap.has(data.itemId)) || this.node_award_book.active) {
            this.sp_hero.grayscale = true;
            this.sp_quality_bg.grayscale = true;
            this.sp_quality_star_bg.grayscale = true
            this.node_inTeam.active = false;
        } else {
            this.sp_hero.grayscale = false;
            this.sp_quality_bg.grayscale = false;
            this.sp_quality_star_bg.grayscale = false
            this.node_inTeam.active = !!HeroTeamControl.ins.heroInTeam(data.id);
        }
        /* 处理红点逻辑 */
        if(data.id&&HeroTeamControl.ins.heroInTeam(data.id)){
            this.node_red.active = RedMgr.ins.isRed(RedDotType.HeroupLevel, String(data.id)) || RedMgr.ins.isRed(RedDotType.HeroupStar, String(data.id)) || HeroRed.ins.checkWearEquip(data);
        }else{
            // 判断是否是可推荐的上阵的英雄
            this.node_red.active = RedMgr.ins.isRed(RedDotType.HeroReplace, String(data.id))
        }
    }
    setRed(show: boolean) {
        this.node_red.active = show;
    }
    setTouchCallBack(callBack: Function) {
        this.touchCallBack = callBack;
    }
    private onTouchItem() {
        if (this.touchCallBack) {
            this.touchCallBack();
        } else {
            log("点击了item");
        }
    }
    protected onDisable(): void {
        this.node_star.getComponent(HeroStar).onDisable();
    }
    protected onDestroy(): void {
        this.node.targetOff(this);
    }
    /* 点击领取奖励 */
    clickGetAward() {
        let msg = new proto.Msg_ReceiveHeroAlbumRewardReq();
        msg.heroItemId = this._itemId;
        Net.Send(proto.Ptl.ReceiveHeroAlbumRewardReq, msg)
    }
}


