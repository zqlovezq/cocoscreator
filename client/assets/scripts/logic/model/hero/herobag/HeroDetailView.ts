import { _decorator, Color, EventTouch, instantiate, Label, Node, Prefab, Sprite, Toggle } from 'cc';
import { proto } from 'client_protocol';
import { HeroDataControl } from './HeroDataControl';
import { HeroBagPainting } from './HeroBagPainting';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { HeroInfo, materialHeros } from '../HeroInfo';
import { tab } from '../../../../Table/table_gen';
import { HeroData } from '../HeroData';
import { ShowItemNotEnoughTips, ShowTips, UIMgr } from '../../../mgr/UIMgr';
import { ViewName } from '../../../define/ViewDefine';
import { Net } from '../../../net/Net';
import { EventMgr } from '../../../mgr/EventMgr';
import { HeroTeamControl } from '../HeroTeamControl';
import { HeroAttrItem } from './HeroAttrItem';
import { HeroStar } from '../HeroStar';
import { HeroMaterialItem } from './HeroMaterialItem';
import { LocalEvent } from '../../../define/LocalEvent';
import { HeroDetailEquipItem } from './HeroDetailEquipItem';
import { ItemData } from '../../item/ItemData';
import { HeroSkillItem } from './HeroSkillItem';
import { LangMgr } from '../../../mgr/LangMgr';
import { Func } from '../../../utils/Func';
import { HeroItem } from '../../item/HeroItem';
import { RedMgr } from '../../../mgr/RedMgr';
import { RedDotType } from '../../../red/RedDotType';
import { HERO_DETAIL_VIEW_TYPE } from '../../../../Common/script/EnumTypeMgr';
import { HeroAttr, HeroAttrMgr } from '../../../../Common/script/HeroAttrMgr';
import { OpenFunctionMgr } from '../../../../Common/component/OpenFunctionMgr';
import { GameUtil } from '../../../utils/GameUtil';
import { RoleData } from '../../role/RoleData';
import { HeroRed } from './HeroRed';
import { stepBranchGuide } from '../../../guide/GuideTask';
import { EquipData } from '../../equip/EquipData';
import { GuideController } from '../../../guide/GuideController';

const { ccclass, property } = _decorator;
@ccclass('HeroDetailView')
export class HeroDetailView extends ViewPop {
    @property(Node)
    node_hero_painting: Node = null;
    @property(Node)
    node_hero_detail: Node = null;
    @property(Node)
    node_hero_risingstar: Node = null;
    @property(Node)
    node_hero_equip: Node = null;
    @property(Node)
    node_hero_skin: Node = null;
    @property(Node)
    node_ascend: Node = null;
    @property(Node)
    node_level_up: Node = null;
    @property(Node)
    node_attribute_layout: Node = null;
    @property(Node)
    node_now_star: Node = null;
    @property(Node)
    node_next_star: Node = null;
    @property(Node)
    node_stuff_star_layout: Node = null;
    @property(Node)
    node_stuff_level_layout: Node = null;
    @property(Node)
    node_stuff_level_layout_img: Node = null;
    @property(Node)
    node_skill_layout: Node = null;
    @property(Node)
    node_up_star_item: Node = null;
    @property(Node)
    node_star_toggle: Node = null;
    @property(Node)
    node_step_star_up: Node = null;
    @property(Node)
    node_max_level_txt: Node = null;
    @property(Node)
    node_star_up_red: Node = null;
    @property(Node)
    node_level_up_red: Node = null;
    @property(Node)
    btn_level_up_red: Node = null;
    @property(Node)
    node_equip_red: Node = null;
    @property(Node)
    node_func_toggle: Node = null;

    @property(Prefab)
    pfb_hero_painting: Prefab = null;
    @property(Prefab)
    pfb_hero_attr: Prefab = null;
    @property(Prefab)
    pfb_hero_material: Prefab = null;
    @property(Prefab)
    pfb_skill_item: Prefab = null;

    @property(Label)
    lbl_ascend: Label = null;
    @property(Label)
    lbl_now_star_max: Label = null;
    @property(Label)
    lbl_next_star_max: Label = null;
    @property(Label)
    lbl_skill_desc: Label = null;
    @property(Label)
    lbl_skill_name: Label = null;
    @property(Label)
    lbl_describe: Label = null;

    @property(Label)
    lbl_skill_desc1: Label = null;
    @property(Label)
    lbl_skill_name1: Label = null;

    @property(HeroSkillItem)
    hero_skill_item: HeroSkillItem = null;
    @property(HeroSkillItem)
    hero_skill_item1: HeroSkillItem = null;

    @property(HeroDetailEquipItem)
    equipItem: HeroDetailEquipItem = null;
    @property(Node)
    node_not_in_team_tips: Node = null;
    @property(Node)
    node_red_strength: Node = null;

    private _heroInfo: HeroInfo = null;
    private _teamSlots: proto.ITeamSlot[] = [];
    private _itemTable: tab.ItemTable;
    private _heroTable: tab.HeroTable;
    private _heroStarUpTable: tab.HeroStarUpTable;
    private _heroAttrTable: tab.HeroAttrTable;
    private _defaultView: HERO_DETAIL_VIEW_TYPE = HERO_DETAIL_VIEW_TYPE.DETAIL;
    public herosMaterialMap: Map<number, materialHeros> = new Map();
    private _heroAllAttr: HeroAttr = null
    /* 注册事件 */
    register(): void {
        /* 英雄升级 */
        EventMgr.onMsg(proto.Ptl.UpTeamSlotLevelRsp, this.on_s2c_UpTeamSlotLevelRsp, this);
        /* 英雄升星 */
        EventMgr.onMsg(proto.Ptl.UpHeroStarRsp, this.on_s2c_UpHeroStarRsp, this);
        /* 英雄进阶 */
        EventMgr.onMsg(proto.Ptl.FinishHeroStarStepRsp, this.on_s2c_FinishHeroStarStepRsp, this);
        /* 重置英雄星级 */
        EventMgr.onMsg(proto.Ptl.ResetHeroStarRsp, this.on_s2c_ResetHeroStarRsp, this);
        /* 重置队伍栏位等级 */
        EventMgr.onMsg(proto.Ptl.ResetTeamSlotLevelRsp, this.on_s2c_ResetTeamSlotLevelRsp, this);
        EventMgr.onLocal(LocalEvent.Hero_Change, this.initData, this);
        EventMgr.onLocal(LocalEvent.Hero_Material_Select, this.refeshMaterial, this);
        EventMgr.onMsg(proto.Ptl.ChangeEquipRsp, this.on_s2c_ChangeEquipRsp, this);
        EventMgr.onLocal(LocalEvent.Equip_Chang, this.onEquipChang, this);
        EventMgr.onMsg(proto.Ptl.SetTeamSlotRsp, this.on_s2c_SetTeamSlotRsp, this);
        /* 一键升级刷新红点 */
        EventMgr.onMsg(proto.Ptl.EnhanceEquipRsp, this.on_s2c_EnhanceEquipRsp, this);
    }

    on_s2c_UpTeamSlotLevelRsp(msg: proto.Msg_UpTeamSlotLevelRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        HeroTeamControl.ins.refreshTeam(HeroDataControl.ins.heroId, msg.newLevel);
        /* 显示升级动画 */
        let curLevel = this._heroInfo.getHeroLevel();
        let caleLevel = this._heroInfo.checkLevelUp();
        if (caleLevel - curLevel > 1) {
            this.node_ascend.active = true;
            this.node_ascend.getChildByName("ascend_label").getComponent(Label).string = LangMgr.getCombineString("ui_hero_60", [caleLevel]);
        } else {
            this.node_ascend.active = false
        }
        this._heroAllAttr = HeroAttrMgr.getHeroInfoAttr(this._heroInfo.id);
        RedMgr.refreshEvent(RedDotType.HeroupLevel);
        RedMgr.refreshEvent(RedDotType.HeroResonanceLevel);
        this.showHeroAttr();
        this.showHeroPainting(true);
    }
    /* 提升英雄星级 */
    on_s2c_UpHeroStarRsp(msg: proto.Msg_UpHeroStarRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        this.initData();
        RedMgr.refreshEvent(RedDotType.Combine_Grow);
    }
    /* 进阶英雄 */
    on_s2c_FinishHeroStarStepRsp(msg: proto.Msg_FinishHeroStarStepRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        let heroInfo = HeroData.ins.getById(msg.heroId);
        heroInfo.finshedStarSteps.push(msg.stepId);
        UIMgr.ins.hideView(ViewName.HeroStarSpecialPop);
        this.initData();
    }
    /* 重置英雄星级 */
    on_s2c_ResetHeroStarRsp(msg: proto.Msg_ResetHeroStarRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        this.initData();
    }
    /* 重置队伍栏位等级 */
    on_s2c_ResetTeamSlotLevelRsp(msg: proto.Msg_ResetTeamSlotLevelRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        this.initData();
    }
    /* 上阵英雄 */
    on_s2c_SetTeamSlotRsp(msg: proto.Msg_SetTeamSlotRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        this.initData();
    }
    onShow() {
        this.initData();
    }
    /* 初始化 */
    initData() {
        this._heroInfo = HeroData.ins.getById(HeroDataControl.ins.heroId);
        this._itemTable = this._heroInfo.itemTable;
        this._heroTable = this._heroInfo.heroTable;
        this._heroStarUpTable = this._heroInfo.heroStarUpTable;
        this._heroAttrTable = this._heroInfo.heroAttrTable;
        this.herosMaterialMap = this._heroInfo.setHerosMaterialMap();
        this._heroAllAttr = HeroAttrMgr.getHeroInfoAttr(this._heroInfo.id);
        this.node_ascend.active = false;
        this.showHeroPainting();
        this.node_star_toggle.active = this._heroStarUpTable.HeroStarUpType.length > 0 || this._heroStarUpTable.NeedStarSteps.length > 0;
        /* 显示是否有红点 */
        this.node_star_up_red.active = RedMgr.ins.isRed(RedDotType.HeroupStar, String(this._heroInfo.id));
        this.node_level_up_red.active = RedMgr.ins.isRed(RedDotType.HeroupLevel, String(this._heroInfo.id));
        this.btn_level_up_red.active = RedMgr.ins.isRed(RedDotType.HeroupLevel, String(this._heroInfo.id));
        this.node_equip_red.active = HeroRed.ins.checkWearEquip(this._heroInfo) || HeroRed.ins.checkWearJade(this._heroInfo);
        this.node_red_strength.active = RedMgr.ins.isRed(RedDotType.Equip_Strengthen, String(this._heroInfo.heroTable.Class))

        if (this._heroStarUpTable.HeroStarUpType.length === 0 && this._heroStarUpTable.NeedStarSteps.length === 0 && this._defaultView === HERO_DETAIL_VIEW_TYPE.RISINGSTAR) {
            this._defaultView = HERO_DETAIL_VIEW_TYPE.DETAIL;
        }
        if (this.openData) {
            this._defaultView = this.openData;
        }
        this.clickChangeView(null, String(this._defaultView));
        this.node_func_toggle.getChildByName("Toggle" + this._defaultView).getComponent(Toggle).isChecked = true;
    }
    onDestroy() {
        super.onDestroy();
        UIMgr.ins.show({ viewName: ViewName.HeroBagView })
    }
    /* 显示属性 */
    showHeroAttr() {
        this.node_hero_detail.active = this._defaultView === HERO_DETAIL_VIEW_TYPE.DETAIL
        let attr = [tab.AttrType.AttrType_Attack, tab.AttrType.AttrType_Hp, tab.AttrType.AttrType_Defence]
        // 显示时需要显示三项属性加成计算后的结果
        let attrTotal = [tab.AttrType.AttrType_TotalAttack, tab.AttrType.AttrType_TotalHp, tab.AttrType.AttrType_TotalDefence]
        for (let i = 0; i < attr.length; i++) {
            let node = this.node_attribute_layout.children[i];
            if (!node) {
                node = instantiate(this.pfb_hero_attr);
                node.parent = this.node_attribute_layout;
            }
            let ts: HeroAttrItem = node.getComponent(HeroAttrItem);
            const value = this._heroAllAttr.getAttr(attrTotal[i]) ?? this._heroAllAttr.getAttr(attr[i]);
            // const value = this._heroAllAttr.attr[Number(attrTotal[i])]?this._heroAllAttr.attr[Number(attrTotal[i])]:0
            ts.initView(attr[i], value)
        }
        let heroTab = this._heroInfo.heroTable;
        this.node_skill_layout.destroyAllChildren();

        let skillMap = this._heroInfo.getHeroSkillMap();
        for (let i = 1; i <= 3; i++) {
            let iconUrl = heroTab["SkillIcon" + i];
            if (iconUrl) {
                let skillData: tab.HeroStarUpTable[] = skillMap.get(i);
                if (skillData) {
                    let skill_item = instantiate(this.pfb_skill_item);
                    let ts = skill_item.getComponent(HeroSkillItem);
                    ts.initData(i, this._heroInfo);
                    skill_item.parent = this.node_skill_layout;
                }
            }
        }
        this.node_max_level_txt.active = false;
        // 判断hero是否在队伍中 没有则不显示升级按钮+材料
        const isInTeam = HeroTeamControl.ins.heroInTeam(this._heroInfo.id);
        this.node_not_in_team_tips.active = false;
        if (isInTeam) {
            this.showLevelUpMaterial();
        } else {
            this.node_not_in_team_tips.active = true;
            this.node_stuff_level_layout.active = false;
            this.node_level_up.active = false;
            this.node_stuff_level_layout_img.active = false;
        }
        this.node_level_up_red.active = false;
        this.node_star_up_red.active = RedMgr.ins.isRed(RedDotType.HeroupStar, String(this._heroInfo.id));
        this.btn_level_up_red.active = RedMgr.ins.isRed(RedDotType.HeroupLevel, String(this._heroInfo.id));
    }
    /* 显示全部属性 */
    showAllHeroAttr() {
        UIMgr.ins.show({ viewName: ViewName.HeroAttrPop, data: { "attrMap": this._heroAllAttr.attr } })
    }
    refeshMaterial(data) {
        if (data) {
            this._heroInfo.setHerosMaterialById(data[0], data[1], data[2], data[3] ? data[3] : null);
        }
        this.showStarUpMaterial();
    }
    /* 显示升星 */
    showHeroUpStar() {
        this.node_star_up_red.active = false;
        this.node_level_up_red.active = RedMgr.ins.isRed(RedDotType.HeroupLevel, String(this._heroInfo.id));
        this.node_hero_risingstar.active = this._defaultView === HERO_DETAIL_VIEW_TYPE.RISINGSTAR;
        this.node_now_star.getComponent(HeroStar).showStar(this._heroInfo.star);
        /* 等级上限 */
        let curStarUpTab = this._heroInfo.heroStarUpTable;
        let nextStarUpTab = this._heroInfo.getHeroStarUpTableByStar(this._heroInfo.star + 1);
        this.lbl_now_star_max.string = String(curStarUpTab.MaxLevel);
        if (nextStarUpTab) {
            this.lbl_next_star_max.string = String(nextStarUpTab.MaxLevel);
            let itemList = [this.hero_skill_item, this.hero_skill_item1]
            let skillDescList = [this.lbl_skill_desc, this.lbl_skill_desc1]
            let skillNameList = [this.lbl_skill_name, this.lbl_skill_name1]
            for (let index = 0; index < itemList.length; index++) {
                const v = itemList[index];
                v.node.parent.active = false
                skillDescList[index].string = ""
                skillNameList[index].string = ""
            }

            let nextStarHeroInfo = new HeroInfo();
            nextStarHeroInfo.star = this._heroInfo.star + 1;
            nextStarHeroInfo.itemId = this._heroInfo.itemId;
            for (let index = 0; index < nextStarUpTab.DescType.length; index++) {
                const element = nextStarUpTab.DescType[index];
                let item = itemList[index]
                item.node.parent.active = true
                item.initData(element, nextStarHeroInfo);

                let descLab = skillDescList[index]
                let nameLab = skillNameList[index]

                descLab.string = LangMgr.getLab(nextStarUpTab.StarDesc[index]);
                nameLab.string = LangMgr.getLab(nextStarUpTab.StarName[index]);
            }

            this.node_next_star.getComponent(HeroStar).showStar(nextStarHeroInfo.star);


        }
        this.showStarUpMaterial();
    }
    /* 显示装备 */
    showHeroEquip() {
        this.node_hero_equip.active = this._defaultView === HERO_DETAIL_VIEW_TYPE.EQUIP
        if (this.node_hero_equip.active) {
            let isTeam = HeroTeamControl.ins.heroInTeam(this._heroInfo.id) !== null;
            this.equipItem.initView(this._heroInfo.heroTable.Class, isTeam)
        }
    }
    /* 显示时装 */
    showHeroSkin() {
        this.node_hero_skin.active = this._defaultView === HERO_DETAIL_VIEW_TYPE.SKIN
    }
    showHeroPainting(upLevel?: boolean) {
        /* 加载资源 */
        let paintingNode = null;
        if (this.node_hero_painting.children.length === 0) {
            paintingNode = instantiate(this.pfb_hero_painting);
            paintingNode.parent = this.node_hero_painting;
        } else {
            paintingNode = this.node_hero_painting.children[0];
        }
        let ts: HeroBagPainting = paintingNode.getComponent(HeroBagPainting);
        ts.initData();
        ts.setExchangeBtn(true);
        ts.setViewType(this._defaultView);
        if (upLevel) {
            ts.showLevelAnim();
        }
    }
    /* 点击升级英雄 */
    clickOneLevelUp() {
        /* 先判断是否可以连升N级 如果有显示连升N级按钮 */
        let curLevel = this._heroInfo.getHeroLevel();
        let caleLevel = this._heroInfo.checkLevelUp();
        if (caleLevel === curLevel) {
            // 判断材料
            let materialMap = this._heroInfo.getMaterialByLevel(curLevel, curLevel + 1).map;
            let MaterialNoEnough = false;
            let isGold = false;
            let notEnoughtItemId = 0;
            materialMap.forEach((value, key) => {
                let totalMaterialCount = ItemData.ins.getCount(key);
                if (totalMaterialCount < value) {
                    MaterialNoEnough = true;
                    if (key === tab.CurrencyType.CurrencyType_Gold) {
                        isGold = true;
                    }else{
                        notEnoughtItemId = key;
                    }
                }
            })
            if (MaterialNoEnough) {
                if (isGold) {
                    ShowItemNotEnoughTips(tab.CurrencyType.CurrencyType_Gold);
                    UIMgr.ins.show({ viewName: ViewName.ResourceBuyPop, data: { "itemId": tab.CurrencyType.CurrencyType_Gold } })
                } else {
                    ShowItemNotEnoughTips(notEnoughtItemId);
                }
                return;
            }
        }
        let heroClass = this._heroTable.Class;
        let msg = new proto.Msg_UpTeamSlotLevelReq();
        msg.heroClass = heroClass;
        msg.level = 1
        Net.Send(proto.Ptl.UpTeamSlotLevelReq, msg);
    }
    /* 点击连升几级 */
    clickMoreLevelUp() {
        this.node_ascend.active = false
        let curLevel = this._heroInfo.getHeroLevel();
        let caleLevel = this._heroInfo.checkLevelUp();
        let heroClass = this._heroTable.Class;
        let msg = new proto.Msg_UpTeamSlotLevelReq();
        msg.heroClass = heroClass;
        msg.level = caleLevel - curLevel
        Net.Send(proto.Ptl.UpTeamSlotLevelReq, msg);
    }
    /* 点击切换 */
    clickChangeView(event: EventTouch, type: string) {
        // 如果当前的功能未开启
        if (Number(type) === HERO_DETAIL_VIEW_TYPE.EQUIP) {
            const isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_Equipment);
            if (!isOpen) {
                OpenFunctionMgr.ins.showFunctionTips(tab.OpenFunctionName.OpenFunctionName_Equipment);
                this.node_func_toggle.getChildByName("Toggle" + this._defaultView).getComponent(Toggle).isChecked = true;
                return;
            }
        }
        this.node_hero_risingstar.active = false;
        this.node_hero_detail.active = false;
        this.node_hero_skin.active = false;
        this.node_hero_equip.active = false;
        this._defaultView = Number(type);
        const paintingNode = this.node_hero_painting.children[0];
        if (paintingNode) {
            let ts: HeroBagPainting = paintingNode.getComponent(HeroBagPainting);
            ts.setViewType(this._defaultView);
        }
        // this.showView();
        switch (this._defaultView) {
            case HERO_DETAIL_VIEW_TYPE.DETAIL:
                this.showHeroAttr();
                break;
            case HERO_DETAIL_VIEW_TYPE.RISINGSTAR:
                this.showHeroUpStar();
                break
            case HERO_DETAIL_VIEW_TYPE.EQUIP:
                this.showHeroEquip();
                break;
            case HERO_DETAIL_VIEW_TYPE.SKIN:
                this.showHeroSkin();
                break;
            default:
                break;
        }
        this.checkEquipGuide();
        this.checkJadeGuide();
    }
    /* 点击英雄升星 */
    clickHeroStarUp() {
        let MaterialEnough = this._heroInfo.checkStarUpMaterialEnough();
        if (!MaterialEnough) {
            console.log("cocos 材料不足")
            ShowTips(LangMgr.getLab("Tips_materialshortage"));
            return;
        }
        let msg = new proto.Msg_UpHeroStarReq()
        const map = this._heroInfo.getHerosMaterialMap();
        let starTab = this._heroInfo.heroStarUpTable;
        let upStarCosts: proto.IUpHeroStarCost[] = []
        for (let i = 0; i < starTab.HeroStarUpType.length; i++) {
            let _type: tab.HeroStarUpType = starTab.HeroStarUpType[i];
            let _count: number = starTab.CostHeroNum[i];
            if (this._heroInfo.getHerosMaterialMapCount(_type) < _count) {
                console.log(`cocos type=${_type} 需要的数量为${_count} 当前的数量为${this._heroInfo.getHerosMaterialMapCount(_type)}`)
                ShowTips(LangMgr.getLab("Tips_materialshortage"));
                return
            }
            let obj: proto.IUpHeroStarCost = {
                costType: _type,
                costHeroIds: [],
                costItems: []
            }
            upStarCosts.push(obj);
        }
        let itemCount = 0;
        map.forEach((value, key) => {
            let heroCost: proto.IUpHeroStarCost = null;
            for (let i = 0; i < upStarCosts.length; i++) {
                if (value.type === upStarCosts[i].costType) {
                    heroCost = upStarCosts[i]
                }
            }
            let costHeroIds = heroCost.costHeroIds;
            let costItems = heroCost.costItems;
            if (value.itemId) {
                itemCount++
                costItems[0] = {
                    itemId: value.itemId,
                    num: itemCount
                }
            } else {
                costHeroIds.push(key);
            }
        })
        msg.heroId = this._heroInfo.id;
        msg.upStarCosts = upStarCosts;
        Net.Send(proto.Ptl.UpHeroStarReq, msg)
    }

    /* 显示升星所需要的材料 */
    showStarUpMaterial() {
        let starTab = this._heroInfo.heroStarUpTable;
        if (!starTab) {
            return;
        }
        // this.node_stuff_star_layout.destroyAllChildren();
        for (let i = 0; i < 2; i++) {
            if (this.node_stuff_star_layout.children[i]) {
                this.node_stuff_star_layout.children[i].active = false;
            }
        }

        /* 升星满足阶段 */
        let starUpSteps = starTab.NeedStarSteps;
        // console.log(`cocos starUpSteps length=${starUpSteps.length}---完成步数=${this._heroInfo.getFinishStep()}`)
        if (starUpSteps.length > 0 && this._heroInfo.getFinishStep() < 4) {
            this.node_up_star_item.active = false;
            this.node_up_star_item.parent.getChildByName("starup_btn").active = false;
            this.node_stuff_star_layout.active = false;
            this.node_step_star_up.active = true;
            let heroItem = this.node_step_star_up.getChildByName("HeroItem");
            let itemTs: HeroItem = heroItem.getComponent(HeroItem);
            itemTs.UpdateContent(this._heroInfo);
            itemTs.setSelect(false);
            itemTs.setTouchCallBack(() => {

            })
            /* 设置状态 */
            for (let i = 0; i < 4; i++) {
                let stage = this.node_step_star_up.getChildByName("stage" + (i + 1) + "_btn");
                let stage_stepId = starUpSteps[i];
                let stage_sp = stage.getComponent(Sprite);
                stage_sp.grayscale = Boolean(this._heroInfo.finshedStarSteps.indexOf(stage_stepId) === -1);
                let redDot = stage.getChildByName("redDot");
                redDot.active = this._heroInfo.checkStarUpMaterialEnough(stage_stepId) && stage_sp.grayscale;
            }
        } else {
            this.node_up_star_item.parent.getChildByName("starup_btn").active = true;
            this.node_stuff_star_layout.active = true;
            this.node_step_star_up.active = false;
            for (let i = 0; i < starTab.HeroStarUpType.length; i++) {
                let type: tab.HeroStarUpType = starTab.HeroStarUpType[i];
                let item = null;
                if (this.node_stuff_star_layout.getChildByName("item" + type)) {
                    item = this.node_stuff_star_layout.getChildByName("item" + type)
                } else {
                    item = instantiate(this.pfb_hero_material);
                    item.name = "item" + type;
                    item.parent = this.node_stuff_star_layout;
                }
                Func.cocosNodeZIndex(item, type);
                item.active = true;
                let heroClass = this._heroInfo.heroClassTable.HeroClass;
                if (type == tab.HeroStarUpType.HeroStarUpType_AnyHero) {
                    heroClass = tab.HeroClass.HeroClass_Any
                }
                item.getComponent(HeroMaterialItem).setMaterial(type, heroClass);
            }
            let itemIds = starTab.CostItemId;
            let counts = starTab.CostItemNum;
            this.node_up_star_item.active = itemIds.length > 0;
            for (let k = 0; k < itemIds.length; k++) {
                let _ItemData = ItemData.ins.getByItemId(itemIds[k]);
                let itemTab = tab.getData().ItemTableById.getValue(itemIds[k]);
                let sp = this.node_up_star_item.children[0].getChildByName("JinBi").getComponent(Sprite);
                let lbl = this.node_up_star_item.children[0].getChildByName("skill_txt").getComponent(Label);
                if (_ItemData && _ItemData.num) {
                    //lbl.string = counts[k] + " / " + _ItemData.num;
                    lbl.string = _ItemData.num + " / " + counts[k];
                } else {
                    //lbl.string = counts[k] + " / " + 0;
                    lbl.string = 0 + " / " + counts[k];
                }
                sp.setTexture(itemTab.Icon);
            }
        }
    }
    /* 显示升级所需要的材料 */
    showLevelUpMaterial() {
        let level = this._heroInfo.getHeroLevel();
        let material = this._heroInfo.getMaterialByLevel(level, level + 1);
        for (let i = 0; i < this.node_stuff_level_layout.children.length; i++) {
            let item = this.node_stuff_level_layout.children[i];
            item.active = false;
        }
        let index = 0;
        let map = material.map
        if (map.size === 0) {
            this.node_ascend.active = false;
            this.node_level_up.active = false;
            this.node_stuff_level_layout_img.active = false;
            /* 因为共鸣等级无法升级 */
            if (material.resonanceLimit) {
                let level = this._heroInfo.getHeroLevel();
                let levelUpData: tab.HeroLevelUpTable = tab.getData().HeroLevelUpTableByLevel.getValue(level);
                this.node_stuff_level_layout.active = false;
                this.lbl_describe.node.active = true
                this.lbl_describe.string = LangMgr.getCombineString("ui_hero_2", [5, levelUpData.MinTeamLevel]);
            } else if (material.maxLevelLimit) {
                this.node_max_level_txt.active = true;
                this.lbl_describe.node.active = false;
            }
        } else {
            this.node_level_up.active = true;
            this.node_stuff_level_layout.active = true;
            this.lbl_describe.node.active = false
            this.node_stuff_level_layout_img.active = true;
        }

        map.forEach((value, key) => {
            let item = this.node_stuff_level_layout.children[index];
            item.active = true;
            // let itemTab = ItemData.ins.getByItemId(key);

            let _ItemData = ItemData.ins.getByItemId(key);
            let itemTab = tab.getData().ItemTableById.getValue(key);

            let sp = item.getChildByName("JinBi").getComponent(Sprite);
            let lbl = item.getChildByName("skill_txt").getComponent(Label);
            if (_ItemData && _ItemData.num) {
                // lbl.string = value + "/" + _ItemData.num;
                lbl.string = GameUtil.convertNumber(_ItemData.num) + " / " + GameUtil.convertNumber(value, true);
            } else {
                // lbl.string = value + "/" + 0;
                lbl.string = 0 + " / " + value;
            }

            if (_ItemData && _ItemData.num && Number(_ItemData.num) >= value) {
                lbl.color = new Color().fromHEX("#FFFFFF");
            } else {
                lbl.color = new Color().fromHEX(tab.getData().GetKeyValue_ConfigTable().InterfaceTxtRed);
            }

            sp.setTexture(itemTab.Icon);
            index++;
        })
    }
    clickStarUpStep(event: EventTouch, type: string) {
        /* 获取当前的stepId数组 */
        let starTab = this._heroInfo.heroStarUpTable;
        let starUpSteps = starTab.NeedStarSteps;
        UIMgr.ins.show({
            viewName: ViewName.HeroStarSpecialPop, data: {
                stepId: starUpSteps[Number(type)]
            }
        })
    }
    on_s2c_EnhanceEquipRsp(msg: proto.Msg_EnhanceEquipRsp) {
        if (msg.error.code == proto.CommonErrorCode.Succeed) {
            RedMgr.refreshEvent(RedDotType.Equip_Strengthen);
            this.node_red_strength.active = RedMgr.ins.isRed(RedDotType.Equip_Strengthen, String(this._heroInfo.heroTable.Class))
        }
    }
    /**
   * 替换装备成功
   * @param msg 
   */
    on_s2c_ChangeEquipRsp(msg: proto.Msg_ChangeEquipRsp) {
        if (msg.error.code == proto.CommonErrorCode.Succeed) {
            this.refreshEquipRed();
            if (this.node_hero_equip.active) {
                let isTeam = HeroTeamControl.ins.heroInTeam(this._heroInfo.id) !== null;
                this.equipItem.initView(this._heroInfo.heroTable.Class, isTeam)
            }
            this._heroAllAttr = HeroAttrMgr.getHeroInfoAttr(this._heroInfo.id);
            this.showHeroAttr();
        }
    }
    onEquipChang(heroClass: number, euqipId: number) {
        this.refreshEquipRed();
        if (this.node_hero_equip.active) {
            let isTeam = HeroTeamControl.ins.heroInTeam(this._heroInfo.id) !== null;
            if (this._heroInfo.heroTable.Class == heroClass) {
                this.equipItem.initView(this._heroInfo.heroTable.Class, isTeam)
            }
        }
        this._heroAllAttr = HeroAttrMgr.getHeroInfoAttr(this._heroInfo.id);
        this.showHeroAttr();
    }
    // 刷新红点
    refreshEquipRed() {
        RedMgr.refreshEvent(RedDotType.Wear_Equip);
        RedMgr.refreshEvent(RedDotType.Wear_Jade);
        RedMgr.refreshEvent(RedDotType.Equip_Strengthen);
        this.node_equip_red.active = HeroRed.ins.checkWearEquip(this._heroInfo) || HeroRed.ins.checkWearJade(this._heroInfo);
        this.node_red_strength.active = RedMgr.ins.isRed(RedDotType.Equip_Strengthen, String(this._heroInfo.heroTable.Class))
    }
    protected onDisable(): void {
        this.node_now_star.getComponent(HeroStar).onDisable();
        this.node_next_star.getComponent(HeroStar).onDisable();
    }

    // 检查是否有装备引导
    checkEquipGuide() {
        //条件 1：没有引导过、2：装备开启条件达成、3：有可一键装备的装备
        if (!GuideController.ins.isGuiding()&&!UIMgr.ins.getView("EquipmentView")) {
            const isEquipGuide = Boolean(RoleData.ins.clientData.equipGuildOver);
            const isOpenEquip = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_Equipment);
            const isNewEquip = HeroRed.ins.getNewEquip(this._heroInfo.heroClassTable.HeroClass);
            const isInTeam = HeroTeamControl.ins.heroInTeam(this._heroInfo.id);
            if (!isEquipGuide && isOpenEquip && isNewEquip && Boolean(isInTeam)) {
                if (this._defaultView === HERO_DETAIL_VIEW_TYPE.EQUIP) {
                    stepBranchGuide(504);
                } else {
                    stepBranchGuide(503);
                }
            }
        }
    }
    // 检查是否有羽毛引导
    checkJadeGuide() {
        if (!GuideController.ins.isGuiding()) {
            const isJadeGuide = Boolean(RoleData.ins.clientData.jadeGuildOver);
            const isOpenJade = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_Jade);
            let list = EquipData.ins.getJadeEquipInfos();
            let isWear = false;
            for (let key in list) {
                const jadeInfo = list[key];
                if (jadeInfo.isWear) {
                    isWear = true;
                }
            }

            if (!isJadeGuide && isOpenJade && !isWear && list.length > 0) {
                if (this._defaultView === HERO_DETAIL_VIEW_TYPE.EQUIP) {
                    stepBranchGuide(506);
                } else {
                    stepBranchGuide(505);
                }
            }
        }
    }
}


