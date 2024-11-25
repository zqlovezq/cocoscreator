
import { _decorator, Component, Label, sp, Node, Prefab, Sprite, Vec3, Toggle, log, instantiate,Animation, Color} from 'cc';
import { proto } from 'client_protocol';
import { HeroInfo } from '../HeroInfo';
import { Net } from '../../../net/Net';
import { tab } from '../../../../Table/table_gen';
import { HeroData } from '../HeroData';
import { ItemPoolMgr } from '../../item/ItemPoolMgr';
import { HeroItem } from '../../item/HeroItem';
import { LangMgr } from '../../../mgr/LangMgr';
import { HeroTeamControl } from '../HeroTeamControl';
import { EquipData } from '../../equip/EquipData';
import { EquipInfo } from '../../equip/EquipInfo';
import { HeroDataControl } from './HeroDataControl';
import { EventMgr } from '../../../mgr/EventMgr';
import { LocalEvent } from '../../../define/LocalEvent';
import { UIMgr } from '../../../mgr/UIMgr';
import { ViewName } from '../../../define/ViewDefine';
import { HeroSkillItem } from './HeroSkillItem';
import { HeroStar } from '../HeroStar';
import { createAnimation, GameUtil } from '../../../utils/GameUtil';
import { HERO_DETAIL_VIEW_TYPE } from '../../../../Common/script/EnumTypeMgr';
import { RedMgr } from '../../../mgr/RedMgr';
import { RedDotType } from '../../../red/RedDotType';
const { ccclass, property } = _decorator;

@ccclass('HeroBagPainting')
export class HeroBagPainting extends Component {
    @property(Label)
    lbl_hero_name: Label = null;
    @property(Label)
    lbl_speciality: Label = null;
    @property(Label)
    lbl_cur_level: Label = null;
    @property(Label)
    lbl_max_level: Label = null;

    @property(sp.Skeleton)
    ske_hero: sp.Skeleton = null;

    @property([Node])
    node_team_arr: Node[] = [];

    @property(Prefab)
    pfb_hero_item: Prefab = null;
    @property(Prefab)
    pfb_skill_item: Prefab = null;

    @property(Sprite)
    sp_vocation: Sprite = null;//职业
    @property(Sprite)
    sp_quality: Sprite = null;//品质

    @property(Node)
    node_bag: Node = null;
    @property(Node)
    node_skill: Node = null;
    @property(Node)
    node_tip: Node = null;
    @property(Node)
    equipmentNode: Node = null;
    @property(Node)
    bagNode: Node = null;
    @property(Node)
    node_exchange: Node = null;
    @property(Node)
    node_quality1_img: Node = null;

    @property(Sprite)
    sp_quality2_img: Sprite = null;
    @property(Sprite)
    sp_quality1_img: Sprite = null;

    @property(Node)
    equipSlotNodes: Node = null;

    @property([Node])
    equipSlotItems: Node[] = [];
    @property(Node)
    node_star: Node = null;
    @property(Node)
    node_deploy_btn:Node = null;
    @property(Node)
    node_inteam_icon:Node = null;

    @property(Label)
    lbl_fight:Label = null;

    @property(Animation)
    anim_level_up:Animation = null;
    @property(Node)
    quality_node:Node=null;
    @property(Node)
    node_red_replace:Node = null;

    private _heroInfo: HeroInfo = null;
    private teamSlots: proto.ITeamSlot[] = [];
    private _itemId: number = 0;
    private changeHeroCallBack: Function;
    private clickEquipSlotCallBack: Function;
    private currEquipType: number;
    private equipComItems: Array<Node>;
    public currWearEquipDatas: Array<EquipInfo>;
    private _view_type: HERO_DETAIL_VIEW_TYPE = HERO_DETAIL_VIEW_TYPE.DETAIL;

    onLoad() {
        EventMgr.onMsg(proto.Ptl.UpdateHeroPowerScore, this.on_s2c_Msg_UpdateHeroPowerScore, this);
    }
    on_s2c_Msg_UpdateHeroPowerScore(msg:proto.Msg_UpdateHeroPowerScore){
        this.lbl_fight.string = GameUtil.convertNumber(this._heroInfo.powerScore)
    }
    setExchangeBtn(isShow: boolean) {
        this.node_exchange.active = isShow;
    }
    setViewType(view_type: HERO_DETAIL_VIEW_TYPE) {
        this._view_type = view_type;
    }
    initData() {
        this.node_quality1_img.active = true;
        this.node_exchange.active = false;
        this._heroInfo = HeroData.ins.getById(HeroDataControl.ins.heroId);
        this._itemId = this._heroInfo.itemId
        this.teamSlots = HeroTeamControl.ins.getTeam();
        this.showBaseInfo();
        createAnimation(this.ske_hero.node,this._heroInfo.heroTable.Idle);
        this.showTeamHeros();
        this.node_star.getComponent(HeroStar).showStar(this._heroInfo.star);
        let star = this._heroInfo.star;
        let itemQualityTab = HeroDataControl.ins.getItemQualityTableByStar(star);
        this.sp_quality2_img.setTexture(itemQualityTab.HeroBagGrowthQuality);
        this.sp_quality1_img.setTexture(itemQualityTab.HeroBagLevelQuality);
        let isInTeam = Boolean(HeroTeamControl.ins.heroInTeam(this._heroInfo.id));
        this.node_deploy_btn.active = !isInTeam;
        this.node_inteam_icon.active =isInTeam;
        this.lbl_fight.string = GameUtil.convertNumber(this._heroInfo.powerScore)

        this.node_red_replace.active = RedMgr.ins.isRed(RedDotType.HeroReplace, String(HeroDataControl.ins.heroId))
    }
    initBook() {
        this.node_exchange.active = false;
        this._itemId = HeroDataControl.ins.bookId;
        let heroTab = tab.getData().HeroTableById.getValue(this._itemId);
        this._heroInfo = new HeroInfo();
        this._heroInfo.itemId = this._itemId;
        this._heroInfo.id = 0;
        this._heroInfo.star = heroTab.DefaultStar;
        this.node_bag.active = false;
        this.node_skill.active = true;
        this.node_quality1_img.active = false;
        this.node_star.getComponent(HeroStar).showStar(this._heroInfo.star);
        createAnimation(this.ske_hero.node,heroTab.Idle);
        this.showBaseInfo();

        let star = this._heroInfo.star;
        let itemQualityTab = HeroDataControl.ins.getItemQualityTableByStar(star);
        this.sp_quality2_img.setTexture(itemQualityTab.HeroBagGrowthQuality)

        let layout = this.node_skill.getChildByName("skill_layout");
        layout.removeAllChildren();
        /* 获取英雄技能列表 */
        let skillMap = this._heroInfo.getHeroSkillMap();
        for (let i = 1; i <= 3; i++) {
            let iconUrl = heroTab["SkillIcon" + i];
            if (iconUrl) {
                let skillData: tab.HeroStarUpTable[] = skillMap.get(i);
                if (skillData) {
                    let skill_item = instantiate(this.pfb_skill_item);
                    let ts = skill_item.getComponent(HeroSkillItem);
                    ts.initData(i, this._heroInfo);
                    skill_item.parent = layout;
                }
            }
        }

    }
    initEquipView(heroClass: number, equipType: number, updateHeroCallBack: Function, clickSlotCallBack: Function) {
        this.bagNode.active = false;
        this.equipmentNode.active = true;
        this.teamSlots = HeroTeamControl.ins.getTeam();
        this._view_type = HERO_DETAIL_VIEW_TYPE.EQUIP;
        this.quality_node.active=false;
        let slot = this.teamSlots.find(a => a.heroClass == heroClass);
        if (slot && slot.heroId) {
            this._heroInfo = HeroData.ins.getById(slot.heroId);
            this._itemId = this._heroInfo.itemId;
            this.showBaseInfo();
            createAnimation(this.ske_hero.node,this._heroInfo.heroTable.Idle);
            this.setSelectEquipSlot(equipType);
            this.changeHeroCallBack = updateHeroCallBack;
            this.clickEquipSlotCallBack = clickSlotCallBack;
            this.updateEquipSlot();
            this.node_star.getComponent(HeroStar).showStar(this._heroInfo.star);
        } else {
            log("数据错误")
        }

    }
    upateEquipByHeroChang() {
        this._heroInfo = HeroData.ins.getById(HeroDataControl.ins.heroId);
        this._itemId = this._heroInfo.itemId
        this.teamSlots = HeroTeamControl.ins.getTeam();
        this.showBaseInfo();
        createAnimation(this.ske_hero.node,this._heroInfo.heroTable.Idle);
        this.updateEquipSlot();
        if (this.changeHeroCallBack) {
            this.changeHeroCallBack(this._heroInfo.heroTable.Class);
        }
        if (this.clickEquipSlotCallBack) {
            this.clickEquipSlotCallBack(Number(this.currEquipType));
        }
    }
    /* 上阵英雄 */
    setHeroTeamSlot() {
        let msg = new proto.Msg_SetTeamSlotReq();
        msg.heroId = this._heroInfo.id;
        Net.Send(proto.Ptl.SetTeamSlotReq, msg);
    }
    /* 显示上阵小鸡 */
    showTeamHeros() {
        this.node_bag.active = true;
        this.node_skill.active = false;
        // this.equipmentNode.active = false;
        for (let i = 0; i < this.node_team_arr.length; i++) {
            let node = this.node_team_arr[i];
            let data = this.teamSlots[i];
            let item = null;
            if (data.heroId) {
                let heroInfo = HeroData.ins.getById(data.heroId);
                if (heroInfo === null) {
                    continue;
                }
                if (node.children[0]) {
                    item = node.children[0];
                } else {
                    item = ItemPoolMgr.ins.createHeroItem(heroInfo,node);
                    // item.parent = node;
                }
                let ts = item.getComponent(HeroItem)
                ts.UpdateContent(heroInfo);
                ts.setTouchCallBack(()=>{
                    console.log(`cocos 点击${heroInfo.itemId}`)
                })
                if (Number(heroInfo.id)===HeroDataControl.ins.heroId) {
                    node.parent.getComponent(Toggle).isChecked = true;
                }
            }
        }
    }
    /* 点击team toggle */
    clickTeamToggle(event: TouchEvent, idx: string) {
        let index = Number(idx);
        HeroDataControl.ins.refreshBagData(Number(this.teamSlots[index - 1].heroId));
        EventMgr.emitLocal(LocalEvent.Hero_Change, true);
    }
    /* 获取基本信息 */
    showBaseInfo() {
        let itemId = this._itemId;
        let itemTab = tab.getData().ItemTableById.getValue(itemId);
        let heroTab = tab.getData().HeroTableById.getValue(itemId);
        let heroClassTab = tab.getData().HeroClassTableByHeroClass.getValue(heroTab.Class)
        let heroAptitudeTab = tab.getData().HeroAptitudeTableByHeroAptitude.getValue(heroTab.Aptitude);

        this.sp_vocation.setTexture(heroClassTab.Icon);
        this.sp_quality.setTexture(heroAptitudeTab.Icon);
        //this.sp_quality.node.setScale(new Vec3(0.5, 0.5, 0))
        /* 英雄名称 */
        this.lbl_hero_name.string = LangMgr.getLab(itemTab.Name);
        /* 职业描述 */
        this.lbl_speciality.string = LangMgr.getLab(heroTab.Speciality);
        /* 职业等级 */
        // let classLevel = HeroTeamControl.ins.getClassTeamData(heroTab.Class).level;
        let curLevel = this._heroInfo.getHeroLevel()

        /* 当前英雄最大等级 */
        let maxLevel = this._heroInfo.heroStarUpTable.MaxLevel;
        this.node_tip.active = curLevel > maxLevel;
        this.lbl_max_level.string = String(maxLevel<curLevel?curLevel:maxLevel);
        if(maxLevel<curLevel){
            curLevel = maxLevel;
            this.lbl_cur_level.color = new Color().fromHEX(tab.getData().GetKeyValue_ConfigTable().InterfaceTxtRed);
        }else{
            this.lbl_cur_level.color = new Color().fromHEX("#FFFFFF");
        }

        this.lbl_cur_level.string = String(curLevel);
    }
    /* 重置队伍栏位星级 */
    // resetStarLevel() {
    //     let msg = new proto.Msg_ResetHeroStarReq();
    //     msg.heroId = this._heroInfo.id;
    //     Net.Send(proto.Ptl.ResetHeroStarReq, msg);
    // }
    setSelectEquipSlot(type: number) {
        if (this.equipSlotNodes.children[type - 1]) {
            this.equipSlotNodes.children[type - 1].getComponent(Toggle).isChecked = true;
        }
        this.currEquipType = type;
    }
    onClickEquipSlot(evet, type) {
        if (this.currEquipType != type) {
            if (this.clickEquipSlotCallBack) {
                this.clickEquipSlotCallBack(Number(type),);
            }
            this.currEquipType = type;
        } else {
            if (this.currWearEquipDatas[type]) {
                UIMgr.ins.show({ viewName: ViewName.EquipmentDetailPop, data: this.currWearEquipDatas[type] })
            }
        }


    }
    onClickChangeHeroLeft() {
        HeroDataControl.ins.LastHero(true);
        EventMgr.emitLocal(LocalEvent.Hero_Change, true);
        if (this._view_type === HERO_DETAIL_VIEW_TYPE.EQUIP) {
            this.upateEquipByHeroChang();
        }
    }
    onClickChangeHeroRight() {
        HeroDataControl.ins.NextHero(true);
        EventMgr.emitLocal(LocalEvent.Hero_Change, true);
        if (this._view_type === HERO_DETAIL_VIEW_TYPE.EQUIP) {
            this.upateEquipByHeroChang();
        }
    }

    updateEquipSlot() {
        if (this.equipComItems) {
            for (let key in this.equipComItems) {
                ItemPoolMgr.ins.putEquipItem(this.equipComItems[key]);
            }
        }
        this.equipComItems = [];
        let equals = EquipData.ins.getWearEquipInfosByHeroClass(this._heroInfo.heroTable.Class);
        for (let key in equals) {
            if (equals[key]) {
                let node = ItemPoolMgr.ins.createEquipItem(equals[key], this.equipSlotItems[Number(key) - 1],false);
                this.equipComItems.push(node);
            }
        }
        this.currWearEquipDatas = equals;
    }

    getWearEquipByType(type: number) {
        if (this.currWearEquipDatas) {
            return this.currWearEquipDatas[type]
        }
        return null;
    }
    /* 点击重置 */
    clickShowHeroResetPop() {
        UIMgr.ins.show({ viewName: ViewName.HeroResetPop })
    }
    protected onDisable(): void {
        this.node_star.getComponent(HeroStar).onDisable();
        if (this.equipComItems) {
            for (let key in this.equipComItems) {
                ItemPoolMgr.ins.putEquipItem(this.equipComItems[key]);
            }
        }
    }
    /* 显示升级动画 */
    showLevelAnim(){
        this.anim_level_up.play();
    }
}


