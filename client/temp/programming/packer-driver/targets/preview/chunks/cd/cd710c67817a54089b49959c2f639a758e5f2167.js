System.register(["__unresolved_0", "cc", "client_protocol", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24", "__unresolved_25", "__unresolved_26", "__unresolved_27", "__unresolved_28", "__unresolved_29", "__unresolved_30", "__unresolved_31", "__unresolved_32"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, instantiate, Label, Node, Prefab, Sprite, Toggle, proto, HeroDataControl, HeroBagPainting, ViewPop, HeroInfo, tab, HeroData, ShowItemNotEnoughTips, ShowTips, UIMgr, ViewName, Net, EventMgr, HeroTeamControl, HeroAttrItem, HeroStar, HeroMaterialItem, LocalEvent, HeroDetailEquipItem, ItemData, HeroSkillItem, LangMgr, Func, HeroItem, RedMgr, RedDotType, HERO_DETAIL_VIEW_TYPE, HeroAttrMgr, OpenFunctionMgr, GameUtil, RoleData, HeroRed, stepBranchGuide, EquipData, GuideController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _crd, ccclass, property, HeroDetailView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "./HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroBagPainting(extras) {
    _reporterNs.report("HeroBagPainting", "./HeroBagPainting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../HeroInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmaterialHeros(extras) {
    _reporterNs.report("materialHeros", "../HeroInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "../HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowItemNotEnoughTips(extras) {
    _reporterNs.report("ShowItemNotEnoughTips", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroTeamControl(extras) {
    _reporterNs.report("HeroTeamControl", "../HeroTeamControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroAttrItem(extras) {
    _reporterNs.report("HeroAttrItem", "./HeroAttrItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroStar(extras) {
    _reporterNs.report("HeroStar", "../HeroStar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroMaterialItem(extras) {
    _reporterNs.report("HeroMaterialItem", "./HeroMaterialItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDetailEquipItem(extras) {
    _reporterNs.report("HeroDetailEquipItem", "./HeroDetailEquipItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroSkillItem(extras) {
    _reporterNs.report("HeroSkillItem", "./HeroSkillItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroItem(extras) {
    _reporterNs.report("HeroItem", "../../item/HeroItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHERO_DETAIL_VIEW_TYPE(extras) {
    _reporterNs.report("HERO_DETAIL_VIEW_TYPE", "../../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroAttr(extras) {
    _reporterNs.report("HeroAttr", "../../../../Common/script/HeroAttrMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroAttrMgr(extras) {
    _reporterNs.report("HeroAttrMgr", "../../../../Common/script/HeroAttrMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenFunctionMgr(extras) {
    _reporterNs.report("OpenFunctionMgr", "../../../../Common/component/OpenFunctionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroRed(extras) {
    _reporterNs.report("HeroRed", "./HeroRed", _context.meta, extras);
  }

  function _reportPossibleCrUseOfstepBranchGuide(extras) {
    _reporterNs.report("stepBranchGuide", "../../../guide/GuideTask", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipData(extras) {
    _reporterNs.report("EquipData", "../../equip/EquipData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuideController(extras) {
    _reporterNs.report("GuideController", "../../../guide/GuideController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Sprite = _cc.Sprite;
      Toggle = _cc.Toggle;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_2) {
      HeroDataControl = _unresolved_2.HeroDataControl;
    }, function (_unresolved_3) {
      HeroBagPainting = _unresolved_3.HeroBagPainting;
    }, function (_unresolved_4) {
      ViewPop = _unresolved_4.ViewPop;
    }, function (_unresolved_5) {
      HeroInfo = _unresolved_5.HeroInfo;
    }, function (_unresolved_6) {
      tab = _unresolved_6.tab;
    }, function (_unresolved_7) {
      HeroData = _unresolved_7.HeroData;
    }, function (_unresolved_8) {
      ShowItemNotEnoughTips = _unresolved_8.ShowItemNotEnoughTips;
      ShowTips = _unresolved_8.ShowTips;
      UIMgr = _unresolved_8.UIMgr;
    }, function (_unresolved_9) {
      ViewName = _unresolved_9.ViewName;
    }, function (_unresolved_10) {
      Net = _unresolved_10.Net;
    }, function (_unresolved_11) {
      EventMgr = _unresolved_11.EventMgr;
    }, function (_unresolved_12) {
      HeroTeamControl = _unresolved_12.HeroTeamControl;
    }, function (_unresolved_13) {
      HeroAttrItem = _unresolved_13.HeroAttrItem;
    }, function (_unresolved_14) {
      HeroStar = _unresolved_14.HeroStar;
    }, function (_unresolved_15) {
      HeroMaterialItem = _unresolved_15.HeroMaterialItem;
    }, function (_unresolved_16) {
      LocalEvent = _unresolved_16.LocalEvent;
    }, function (_unresolved_17) {
      HeroDetailEquipItem = _unresolved_17.HeroDetailEquipItem;
    }, function (_unresolved_18) {
      ItemData = _unresolved_18.ItemData;
    }, function (_unresolved_19) {
      HeroSkillItem = _unresolved_19.HeroSkillItem;
    }, function (_unresolved_20) {
      LangMgr = _unresolved_20.LangMgr;
    }, function (_unresolved_21) {
      Func = _unresolved_21.Func;
    }, function (_unresolved_22) {
      HeroItem = _unresolved_22.HeroItem;
    }, function (_unresolved_23) {
      RedMgr = _unresolved_23.RedMgr;
    }, function (_unresolved_24) {
      RedDotType = _unresolved_24.RedDotType;
    }, function (_unresolved_25) {
      HERO_DETAIL_VIEW_TYPE = _unresolved_25.HERO_DETAIL_VIEW_TYPE;
    }, function (_unresolved_26) {
      HeroAttrMgr = _unresolved_26.HeroAttrMgr;
    }, function (_unresolved_27) {
      OpenFunctionMgr = _unresolved_27.OpenFunctionMgr;
    }, function (_unresolved_28) {
      GameUtil = _unresolved_28.GameUtil;
    }, function (_unresolved_29) {
      RoleData = _unresolved_29.RoleData;
    }, function (_unresolved_30) {
      HeroRed = _unresolved_30.HeroRed;
    }, function (_unresolved_31) {
      stepBranchGuide = _unresolved_31.stepBranchGuide;
    }, function (_unresolved_32) {
      EquipData = _unresolved_32.EquipData;
    }, function (_unresolved_33) {
      GuideController = _unresolved_33.GuideController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fbfa1oTODlGrYna2DjAjt2m", "HeroDetailView", undefined);

      __checkObsolete__(['_decorator', 'Color', 'EventTouch', 'instantiate', 'Label', 'Node', 'Prefab', 'Sprite', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroDetailView", HeroDetailView = (_dec = ccclass('HeroDetailView'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(Prefab), _dec26 = property(Prefab), _dec27 = property(Prefab), _dec28 = property(Prefab), _dec29 = property(Label), _dec30 = property(Label), _dec31 = property(Label), _dec32 = property(Label), _dec33 = property(Label), _dec34 = property(Label), _dec35 = property(Label), _dec36 = property(Label), _dec37 = property(_crd && HeroSkillItem === void 0 ? (_reportPossibleCrUseOfHeroSkillItem({
        error: Error()
      }), HeroSkillItem) : HeroSkillItem), _dec38 = property(_crd && HeroSkillItem === void 0 ? (_reportPossibleCrUseOfHeroSkillItem({
        error: Error()
      }), HeroSkillItem) : HeroSkillItem), _dec39 = property(_crd && HeroDetailEquipItem === void 0 ? (_reportPossibleCrUseOfHeroDetailEquipItem({
        error: Error()
      }), HeroDetailEquipItem) : HeroDetailEquipItem), _dec40 = property(Node), _dec41 = property(Node), _dec(_class = (_class2 = class HeroDetailView extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "node_hero_painting", _descriptor, this);

          _initializerDefineProperty(this, "node_hero_detail", _descriptor2, this);

          _initializerDefineProperty(this, "node_hero_risingstar", _descriptor3, this);

          _initializerDefineProperty(this, "node_hero_equip", _descriptor4, this);

          _initializerDefineProperty(this, "node_hero_skin", _descriptor5, this);

          _initializerDefineProperty(this, "node_ascend", _descriptor6, this);

          _initializerDefineProperty(this, "node_level_up", _descriptor7, this);

          _initializerDefineProperty(this, "node_attribute_layout", _descriptor8, this);

          _initializerDefineProperty(this, "node_now_star", _descriptor9, this);

          _initializerDefineProperty(this, "node_next_star", _descriptor10, this);

          _initializerDefineProperty(this, "node_stuff_star_layout", _descriptor11, this);

          _initializerDefineProperty(this, "node_stuff_level_layout", _descriptor12, this);

          _initializerDefineProperty(this, "node_stuff_level_layout_img", _descriptor13, this);

          _initializerDefineProperty(this, "node_skill_layout", _descriptor14, this);

          _initializerDefineProperty(this, "node_up_star_item", _descriptor15, this);

          _initializerDefineProperty(this, "node_star_toggle", _descriptor16, this);

          _initializerDefineProperty(this, "node_step_star_up", _descriptor17, this);

          _initializerDefineProperty(this, "node_max_level_txt", _descriptor18, this);

          _initializerDefineProperty(this, "node_star_up_red", _descriptor19, this);

          _initializerDefineProperty(this, "node_level_up_red", _descriptor20, this);

          _initializerDefineProperty(this, "btn_level_up_red", _descriptor21, this);

          _initializerDefineProperty(this, "node_equip_red", _descriptor22, this);

          _initializerDefineProperty(this, "node_func_toggle", _descriptor23, this);

          _initializerDefineProperty(this, "pfb_hero_painting", _descriptor24, this);

          _initializerDefineProperty(this, "pfb_hero_attr", _descriptor25, this);

          _initializerDefineProperty(this, "pfb_hero_material", _descriptor26, this);

          _initializerDefineProperty(this, "pfb_skill_item", _descriptor27, this);

          _initializerDefineProperty(this, "lbl_ascend", _descriptor28, this);

          _initializerDefineProperty(this, "lbl_now_star_max", _descriptor29, this);

          _initializerDefineProperty(this, "lbl_next_star_max", _descriptor30, this);

          _initializerDefineProperty(this, "lbl_skill_desc", _descriptor31, this);

          _initializerDefineProperty(this, "lbl_skill_name", _descriptor32, this);

          _initializerDefineProperty(this, "lbl_describe", _descriptor33, this);

          _initializerDefineProperty(this, "lbl_skill_desc1", _descriptor34, this);

          _initializerDefineProperty(this, "lbl_skill_name1", _descriptor35, this);

          _initializerDefineProperty(this, "hero_skill_item", _descriptor36, this);

          _initializerDefineProperty(this, "hero_skill_item1", _descriptor37, this);

          _initializerDefineProperty(this, "equipItem", _descriptor38, this);

          _initializerDefineProperty(this, "node_not_in_team_tips", _descriptor39, this);

          _initializerDefineProperty(this, "node_red_strength", _descriptor40, this);

          this._heroInfo = null;
          this._teamSlots = [];
          this._itemTable = void 0;
          this._heroTable = void 0;
          this._heroStarUpTable = void 0;
          this._heroAttrTable = void 0;
          this._defaultView = (_crd && HERO_DETAIL_VIEW_TYPE === void 0 ? (_reportPossibleCrUseOfHERO_DETAIL_VIEW_TYPE({
            error: Error()
          }), HERO_DETAIL_VIEW_TYPE) : HERO_DETAIL_VIEW_TYPE).DETAIL;
          this.herosMaterialMap = new Map();
          this._heroAllAttr = null;
        }

        /* 注册事件 */
        register() {
          /* 英雄升级 */
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpTeamSlotLevelRsp, this.on_s2c_UpTeamSlotLevelRsp, this);
          /* 英雄升星 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpHeroStarRsp, this.on_s2c_UpHeroStarRsp, this);
          /* 英雄进阶 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.FinishHeroStarStepRsp, this.on_s2c_FinishHeroStarStepRsp, this);
          /* 重置英雄星级 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ResetHeroStarRsp, this.on_s2c_ResetHeroStarRsp, this);
          /* 重置队伍栏位等级 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ResetTeamSlotLevelRsp, this.on_s2c_ResetTeamSlotLevelRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).Hero_Change, this.initData, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).Hero_Material_Select, this.refeshMaterial, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ChangeEquipRsp, this.on_s2c_ChangeEquipRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).Equip_Chang, this.onEquipChang, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.SetTeamSlotRsp, this.on_s2c_SetTeamSlotRsp, this);
          /* 一键升级刷新红点 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.EnhanceEquipRsp, this.on_s2c_EnhanceEquipRsp, this);
        }

        on_s2c_UpTeamSlotLevelRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.refreshTeam((_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.heroId, msg.newLevel);
          /* 显示升级动画 */

          var curLevel = this._heroInfo.getHeroLevel();

          var caleLevel = this._heroInfo.checkLevelUp();

          if (caleLevel - curLevel > 1) {
            this.node_ascend.active = true;
            this.node_ascend.getChildByName("ascend_label").getComponent(Label).string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_hero_60", [caleLevel]);
          } else {
            this.node_ascend.active = false;
          }

          this._heroAllAttr = (_crd && HeroAttrMgr === void 0 ? (_reportPossibleCrUseOfHeroAttrMgr({
            error: Error()
          }), HeroAttrMgr) : HeroAttrMgr).getHeroInfoAttr(this._heroInfo.id);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroupLevel);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroResonanceLevel);
          this.showHeroAttr();
          this.showHeroPainting(true);
        }
        /* 提升英雄星级 */


        on_s2c_UpHeroStarRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          this.initData();
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Combine_Grow);
        }
        /* 进阶英雄 */


        on_s2c_FinishHeroStarStepRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          var heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getById(msg.heroId);
          heroInfo.finshedStarSteps.push(msg.stepId);
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.hideView((_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
            error: Error()
          }), ViewName) : ViewName).HeroStarSpecialPop);
          this.initData();
        }
        /* 重置英雄星级 */


        on_s2c_ResetHeroStarRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          this.initData();
        }
        /* 重置队伍栏位等级 */


        on_s2c_ResetTeamSlotLevelRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          this.initData();
        }
        /* 上阵英雄 */


        on_s2c_SetTeamSlotRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          this.initData();
        }

        onShow() {
          this.initData();
        }
        /* 初始化 */


        initData() {
          this._heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getById((_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.heroId);
          this._itemTable = this._heroInfo.itemTable;
          this._heroTable = this._heroInfo.heroTable;
          this._heroStarUpTable = this._heroInfo.heroStarUpTable;
          this._heroAttrTable = this._heroInfo.heroAttrTable;
          this.herosMaterialMap = this._heroInfo.setHerosMaterialMap();
          this._heroAllAttr = (_crd && HeroAttrMgr === void 0 ? (_reportPossibleCrUseOfHeroAttrMgr({
            error: Error()
          }), HeroAttrMgr) : HeroAttrMgr).getHeroInfoAttr(this._heroInfo.id);
          this.node_ascend.active = false;
          this.showHeroPainting();
          this.node_star_toggle.active = this._heroStarUpTable.HeroStarUpType.length > 0 || this._heroStarUpTable.NeedStarSteps.length > 0;
          /* 显示是否有红点 */

          this.node_star_up_red.active = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroupStar, String(this._heroInfo.id));
          this.node_level_up_red.active = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroupLevel, String(this._heroInfo.id));
          this.btn_level_up_red.active = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroupLevel, String(this._heroInfo.id));
          this.node_equip_red.active = (_crd && HeroRed === void 0 ? (_reportPossibleCrUseOfHeroRed({
            error: Error()
          }), HeroRed) : HeroRed).ins.checkWearEquip(this._heroInfo) || (_crd && HeroRed === void 0 ? (_reportPossibleCrUseOfHeroRed({
            error: Error()
          }), HeroRed) : HeroRed).ins.checkWearJade(this._heroInfo);
          this.node_red_strength.active = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Equip_Strengthen, String(this._heroInfo.heroTable.Class));

          if (this._heroStarUpTable.HeroStarUpType.length === 0 && this._heroStarUpTable.NeedStarSteps.length === 0 && this._defaultView === (_crd && HERO_DETAIL_VIEW_TYPE === void 0 ? (_reportPossibleCrUseOfHERO_DETAIL_VIEW_TYPE({
            error: Error()
          }), HERO_DETAIL_VIEW_TYPE) : HERO_DETAIL_VIEW_TYPE).RISINGSTAR) {
            this._defaultView = (_crd && HERO_DETAIL_VIEW_TYPE === void 0 ? (_reportPossibleCrUseOfHERO_DETAIL_VIEW_TYPE({
              error: Error()
            }), HERO_DETAIL_VIEW_TYPE) : HERO_DETAIL_VIEW_TYPE).DETAIL;
          }

          if (this.openData) {
            this._defaultView = this.openData;
          }

          this.clickChangeView(null, String(this._defaultView));
          this.node_func_toggle.getChildByName("Toggle" + this._defaultView).getComponent(Toggle).isChecked = true;
        }

        onDestroy() {
          super.onDestroy();
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).HeroBagView
          });
        }
        /* 显示属性 */


        showHeroAttr() {
          this.node_hero_detail.active = this._defaultView === (_crd && HERO_DETAIL_VIEW_TYPE === void 0 ? (_reportPossibleCrUseOfHERO_DETAIL_VIEW_TYPE({
            error: Error()
          }), HERO_DETAIL_VIEW_TYPE) : HERO_DETAIL_VIEW_TYPE).DETAIL;
          var attr = [(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_Attack, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_Hp, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_Defence]; // 显示时需要显示三项属性加成计算后的结果

          var attrTotal = [(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_TotalAttack, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_TotalHp, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_TotalDefence];

          for (var i = 0; i < attr.length; i++) {
            var _this$_heroAllAttr$ge;

            var node = this.node_attribute_layout.children[i];

            if (!node) {
              node = instantiate(this.pfb_hero_attr);
              node.parent = this.node_attribute_layout;
            }

            var ts = node.getComponent(_crd && HeroAttrItem === void 0 ? (_reportPossibleCrUseOfHeroAttrItem({
              error: Error()
            }), HeroAttrItem) : HeroAttrItem);
            var value = (_this$_heroAllAttr$ge = this._heroAllAttr.getAttr(attrTotal[i])) != null ? _this$_heroAllAttr$ge : this._heroAllAttr.getAttr(attr[i]); // const value = this._heroAllAttr.attr[Number(attrTotal[i])]?this._heroAllAttr.attr[Number(attrTotal[i])]:0

            ts.initView(attr[i], value);
          }

          var heroTab = this._heroInfo.heroTable;
          this.node_skill_layout.destroyAllChildren();

          var skillMap = this._heroInfo.getHeroSkillMap();

          for (var _i = 1; _i <= 3; _i++) {
            var iconUrl = heroTab["SkillIcon" + _i];

            if (iconUrl) {
              var skillData = skillMap.get(_i);

              if (skillData) {
                var skill_item = instantiate(this.pfb_skill_item);

                var _ts = skill_item.getComponent(_crd && HeroSkillItem === void 0 ? (_reportPossibleCrUseOfHeroSkillItem({
                  error: Error()
                }), HeroSkillItem) : HeroSkillItem);

                _ts.initData(_i, this._heroInfo);

                skill_item.parent = this.node_skill_layout;
              }
            }
          }

          this.node_max_level_txt.active = false; // 判断hero是否在队伍中 没有则不显示升级按钮+材料

          var isInTeam = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.heroInTeam(this._heroInfo.id);
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
          this.node_star_up_red.active = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroupStar, String(this._heroInfo.id));
          this.btn_level_up_red.active = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroupLevel, String(this._heroInfo.id));
        }
        /* 显示全部属性 */


        showAllHeroAttr() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).HeroAttrPop,
            data: {
              "attrMap": this._heroAllAttr.attr
            }
          });
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
          this.node_level_up_red.active = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroupLevel, String(this._heroInfo.id));
          this.node_hero_risingstar.active = this._defaultView === (_crd && HERO_DETAIL_VIEW_TYPE === void 0 ? (_reportPossibleCrUseOfHERO_DETAIL_VIEW_TYPE({
            error: Error()
          }), HERO_DETAIL_VIEW_TYPE) : HERO_DETAIL_VIEW_TYPE).RISINGSTAR;
          this.node_now_star.getComponent(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
            error: Error()
          }), HeroStar) : HeroStar).showStar(this._heroInfo.star);
          /* 等级上限 */

          var curStarUpTab = this._heroInfo.heroStarUpTable;

          var nextStarUpTab = this._heroInfo.getHeroStarUpTableByStar(this._heroInfo.star + 1);

          this.lbl_now_star_max.string = String(curStarUpTab.MaxLevel);

          if (nextStarUpTab) {
            this.lbl_next_star_max.string = String(nextStarUpTab.MaxLevel);
            var itemList = [this.hero_skill_item, this.hero_skill_item1];
            var skillDescList = [this.lbl_skill_desc, this.lbl_skill_desc1];
            var skillNameList = [this.lbl_skill_name, this.lbl_skill_name1];

            for (var index = 0; index < itemList.length; index++) {
              var v = itemList[index];
              v.node.parent.active = false;
              skillDescList[index].string = "";
              skillNameList[index].string = "";
            }

            var nextStarHeroInfo = new (_crd && HeroInfo === void 0 ? (_reportPossibleCrUseOfHeroInfo({
              error: Error()
            }), HeroInfo) : HeroInfo)();
            nextStarHeroInfo.star = this._heroInfo.star + 1;
            nextStarHeroInfo.itemId = this._heroInfo.itemId;

            for (var _index = 0; _index < nextStarUpTab.DescType.length; _index++) {
              var element = nextStarUpTab.DescType[_index];
              var item = itemList[_index];
              item.node.parent.active = true;
              item.initData(element, nextStarHeroInfo);
              var descLab = skillDescList[_index];
              var nameLab = skillNameList[_index];
              descLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab(nextStarUpTab.StarDesc[_index]);
              nameLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab(nextStarUpTab.StarName[_index]);
            }

            this.node_next_star.getComponent(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
              error: Error()
            }), HeroStar) : HeroStar).showStar(nextStarHeroInfo.star);
          }

          this.showStarUpMaterial();
        }
        /* 显示装备 */


        showHeroEquip() {
          this.node_hero_equip.active = this._defaultView === (_crd && HERO_DETAIL_VIEW_TYPE === void 0 ? (_reportPossibleCrUseOfHERO_DETAIL_VIEW_TYPE({
            error: Error()
          }), HERO_DETAIL_VIEW_TYPE) : HERO_DETAIL_VIEW_TYPE).EQUIP;

          if (this.node_hero_equip.active) {
            var isTeam = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
              error: Error()
            }), HeroTeamControl) : HeroTeamControl).ins.heroInTeam(this._heroInfo.id) !== null;
            this.equipItem.initView(this._heroInfo.heroTable.Class, isTeam);
          }
        }
        /* 显示时装 */


        showHeroSkin() {
          this.node_hero_skin.active = this._defaultView === (_crd && HERO_DETAIL_VIEW_TYPE === void 0 ? (_reportPossibleCrUseOfHERO_DETAIL_VIEW_TYPE({
            error: Error()
          }), HERO_DETAIL_VIEW_TYPE) : HERO_DETAIL_VIEW_TYPE).SKIN;
        }

        showHeroPainting(upLevel) {
          /* 加载资源 */
          var paintingNode = null;

          if (this.node_hero_painting.children.length === 0) {
            paintingNode = instantiate(this.pfb_hero_painting);
            paintingNode.parent = this.node_hero_painting;
          } else {
            paintingNode = this.node_hero_painting.children[0];
          }

          var ts = paintingNode.getComponent(_crd && HeroBagPainting === void 0 ? (_reportPossibleCrUseOfHeroBagPainting({
            error: Error()
          }), HeroBagPainting) : HeroBagPainting);
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
          var curLevel = this._heroInfo.getHeroLevel();

          var caleLevel = this._heroInfo.checkLevelUp();

          if (caleLevel === curLevel) {
            // 判断材料
            var materialMap = this._heroInfo.getMaterialByLevel(curLevel, curLevel + 1).map;

            var MaterialNoEnough = false;
            var isGold = false;
            var notEnoughtItemId = 0;
            materialMap.forEach((value, key) => {
              var totalMaterialCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
                error: Error()
              }), ItemData) : ItemData).ins.getCount(key);

              if (totalMaterialCount < value) {
                MaterialNoEnough = true;

                if (key === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).CurrencyType.CurrencyType_Gold) {
                  isGold = true;
                } else {
                  notEnoughtItemId = key;
                }
              }
            });

            if (MaterialNoEnough) {
              if (isGold) {
                (_crd && ShowItemNotEnoughTips === void 0 ? (_reportPossibleCrUseOfShowItemNotEnoughTips({
                  error: Error()
                }), ShowItemNotEnoughTips) : ShowItemNotEnoughTips)((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).CurrencyType.CurrencyType_Gold);
                (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                  error: Error()
                }), UIMgr) : UIMgr).ins.show({
                  viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                    error: Error()
                  }), ViewName) : ViewName).ResourceBuyPop,
                  data: {
                    "itemId": (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                      error: Error()
                    }), tab) : tab).CurrencyType.CurrencyType_Gold
                  }
                });
              } else {
                (_crd && ShowItemNotEnoughTips === void 0 ? (_reportPossibleCrUseOfShowItemNotEnoughTips({
                  error: Error()
                }), ShowItemNotEnoughTips) : ShowItemNotEnoughTips)(notEnoughtItemId);
              }

              return;
            }
          }

          var heroClass = this._heroTable.Class;
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_UpTeamSlotLevelReq();
          msg.heroClass = heroClass;
          msg.level = 1;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpTeamSlotLevelReq, msg);
        }
        /* 点击连升几级 */


        clickMoreLevelUp() {
          this.node_ascend.active = false;

          var curLevel = this._heroInfo.getHeroLevel();

          var caleLevel = this._heroInfo.checkLevelUp();

          var heroClass = this._heroTable.Class;
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_UpTeamSlotLevelReq();
          msg.heroClass = heroClass;
          msg.level = caleLevel - curLevel;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpTeamSlotLevelReq, msg);
        }
        /* 点击切换 */


        clickChangeView(event, type) {
          // 如果当前的功能未开启
          if (Number(type) === (_crd && HERO_DETAIL_VIEW_TYPE === void 0 ? (_reportPossibleCrUseOfHERO_DETAIL_VIEW_TYPE({
            error: Error()
          }), HERO_DETAIL_VIEW_TYPE) : HERO_DETAIL_VIEW_TYPE).EQUIP) {
            var isOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
              error: Error()
            }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_Equipment);

            if (!isOpen) {
              (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
                error: Error()
              }), OpenFunctionMgr) : OpenFunctionMgr).ins.showFunctionTips((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).OpenFunctionName.OpenFunctionName_Equipment);
              this.node_func_toggle.getChildByName("Toggle" + this._defaultView).getComponent(Toggle).isChecked = true;
              return;
            }
          }

          this.node_hero_risingstar.active = false;
          this.node_hero_detail.active = false;
          this.node_hero_skin.active = false;
          this.node_hero_equip.active = false;
          this._defaultView = Number(type);
          var paintingNode = this.node_hero_painting.children[0];

          if (paintingNode) {
            var ts = paintingNode.getComponent(_crd && HeroBagPainting === void 0 ? (_reportPossibleCrUseOfHeroBagPainting({
              error: Error()
            }), HeroBagPainting) : HeroBagPainting);
            ts.setViewType(this._defaultView);
          } // this.showView();


          switch (this._defaultView) {
            case (_crd && HERO_DETAIL_VIEW_TYPE === void 0 ? (_reportPossibleCrUseOfHERO_DETAIL_VIEW_TYPE({
              error: Error()
            }), HERO_DETAIL_VIEW_TYPE) : HERO_DETAIL_VIEW_TYPE).DETAIL:
              this.showHeroAttr();
              break;

            case (_crd && HERO_DETAIL_VIEW_TYPE === void 0 ? (_reportPossibleCrUseOfHERO_DETAIL_VIEW_TYPE({
              error: Error()
            }), HERO_DETAIL_VIEW_TYPE) : HERO_DETAIL_VIEW_TYPE).RISINGSTAR:
              this.showHeroUpStar();
              break;

            case (_crd && HERO_DETAIL_VIEW_TYPE === void 0 ? (_reportPossibleCrUseOfHERO_DETAIL_VIEW_TYPE({
              error: Error()
            }), HERO_DETAIL_VIEW_TYPE) : HERO_DETAIL_VIEW_TYPE).EQUIP:
              this.showHeroEquip();
              break;

            case (_crd && HERO_DETAIL_VIEW_TYPE === void 0 ? (_reportPossibleCrUseOfHERO_DETAIL_VIEW_TYPE({
              error: Error()
            }), HERO_DETAIL_VIEW_TYPE) : HERO_DETAIL_VIEW_TYPE).SKIN:
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
          var MaterialEnough = this._heroInfo.checkStarUpMaterialEnough();

          if (!MaterialEnough) {
            console.log("cocos 材料不足");
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_materialshortage"));
            return;
          }

          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_UpHeroStarReq();

          var map = this._heroInfo.getHerosMaterialMap();

          var starTab = this._heroInfo.heroStarUpTable;
          var upStarCosts = [];

          for (var i = 0; i < starTab.HeroStarUpType.length; i++) {
            var _type = starTab.HeroStarUpType[i];
            var _count = starTab.CostHeroNum[i];

            if (this._heroInfo.getHerosMaterialMapCount(_type) < _count) {
              console.log("cocos type=" + _type + " \u9700\u8981\u7684\u6570\u91CF\u4E3A" + _count + " \u5F53\u524D\u7684\u6570\u91CF\u4E3A" + this._heroInfo.getHerosMaterialMapCount(_type));
              (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
                error: Error()
              }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab("Tips_materialshortage"));
              return;
            }

            var obj = {
              costType: _type,
              costHeroIds: [],
              costItems: []
            };
            upStarCosts.push(obj);
          }

          var itemCount = 0;
          map.forEach((value, key) => {
            var heroCost = null;

            for (var _i2 = 0; _i2 < upStarCosts.length; _i2++) {
              if (value.type === upStarCosts[_i2].costType) {
                heroCost = upStarCosts[_i2];
              }
            }

            var costHeroIds = heroCost.costHeroIds;
            var costItems = heroCost.costItems;

            if (value.itemId) {
              itemCount++;
              costItems[0] = {
                itemId: value.itemId,
                num: itemCount
              };
            } else {
              costHeroIds.push(key);
            }
          });
          msg.heroId = this._heroInfo.id;
          msg.upStarCosts = upStarCosts;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpHeroStarReq, msg);
        }
        /* 显示升星所需要的材料 */


        showStarUpMaterial() {
          var starTab = this._heroInfo.heroStarUpTable;

          if (!starTab) {
            return;
          } // this.node_stuff_star_layout.destroyAllChildren();


          for (var i = 0; i < 2; i++) {
            if (this.node_stuff_star_layout.children[i]) {
              this.node_stuff_star_layout.children[i].active = false;
            }
          }
          /* 升星满足阶段 */


          var starUpSteps = starTab.NeedStarSteps; // console.log(`cocos starUpSteps length=${starUpSteps.length}---完成步数=${this._heroInfo.getFinishStep()}`)

          if (starUpSteps.length > 0 && this._heroInfo.getFinishStep() < 4) {
            this.node_up_star_item.active = false;
            this.node_up_star_item.parent.getChildByName("starup_btn").active = false;
            this.node_stuff_star_layout.active = false;
            this.node_step_star_up.active = true;
            var heroItem = this.node_step_star_up.getChildByName("HeroItem");
            var itemTs = heroItem.getComponent(_crd && HeroItem === void 0 ? (_reportPossibleCrUseOfHeroItem({
              error: Error()
            }), HeroItem) : HeroItem);
            itemTs.UpdateContent(this._heroInfo);
            itemTs.setSelect(false);
            itemTs.setTouchCallBack(() => {});
            /* 设置状态 */

            for (var _i3 = 0; _i3 < 4; _i3++) {
              var stage = this.node_step_star_up.getChildByName("stage" + (_i3 + 1) + "_btn");
              var stage_stepId = starUpSteps[_i3];
              var stage_sp = stage.getComponent(Sprite);
              stage_sp.grayscale = Boolean(this._heroInfo.finshedStarSteps.indexOf(stage_stepId) === -1);
              var redDot = stage.getChildByName("redDot");
              redDot.active = this._heroInfo.checkStarUpMaterialEnough(stage_stepId) && stage_sp.grayscale;
            }
          } else {
            this.node_up_star_item.parent.getChildByName("starup_btn").active = true;
            this.node_stuff_star_layout.active = true;
            this.node_step_star_up.active = false;

            for (var _i4 = 0; _i4 < starTab.HeroStarUpType.length; _i4++) {
              var type = starTab.HeroStarUpType[_i4];
              var item = null;

              if (this.node_stuff_star_layout.getChildByName("item" + type)) {
                item = this.node_stuff_star_layout.getChildByName("item" + type);
              } else {
                item = instantiate(this.pfb_hero_material);
                item.name = "item" + type;
                item.parent = this.node_stuff_star_layout;
              }

              (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                error: Error()
              }), Func) : Func).cocosNodeZIndex(item, type);
              item.active = true;
              var heroClass = this._heroInfo.heroClassTable.HeroClass;

              if (type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).HeroStarUpType.HeroStarUpType_AnyHero) {
                heroClass = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).HeroClass.HeroClass_Any;
              }

              item.getComponent(_crd && HeroMaterialItem === void 0 ? (_reportPossibleCrUseOfHeroMaterialItem({
                error: Error()
              }), HeroMaterialItem) : HeroMaterialItem).setMaterial(type, heroClass);
            }

            var itemIds = starTab.CostItemId;
            var counts = starTab.CostItemNum;
            this.node_up_star_item.active = itemIds.length > 0;

            for (var k = 0; k < itemIds.length; k++) {
              var _ItemData = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
                error: Error()
              }), ItemData) : ItemData).ins.getByItemId(itemIds[k]);

              var itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().ItemTableById.getValue(itemIds[k]);
              var sp = this.node_up_star_item.children[0].getChildByName("JinBi").getComponent(Sprite);
              var lbl = this.node_up_star_item.children[0].getChildByName("skill_txt").getComponent(Label);

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
          var level = this._heroInfo.getHeroLevel();

          var material = this._heroInfo.getMaterialByLevel(level, level + 1);

          for (var i = 0; i < this.node_stuff_level_layout.children.length; i++) {
            var item = this.node_stuff_level_layout.children[i];
            item.active = false;
          }

          var index = 0;
          var map = material.map;

          if (map.size === 0) {
            this.node_ascend.active = false;
            this.node_level_up.active = false;
            this.node_stuff_level_layout_img.active = false;
            /* 因为共鸣等级无法升级 */

            if (material.resonanceLimit) {
              var _level = this._heroInfo.getHeroLevel();

              var levelUpData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().HeroLevelUpTableByLevel.getValue(_level);
              this.node_stuff_level_layout.active = false;
              this.lbl_describe.node.active = true;
              this.lbl_describe.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getCombineString("ui_hero_2", [5, levelUpData.MinTeamLevel]);
            } else if (material.maxLevelLimit) {
              this.node_max_level_txt.active = true;
              this.lbl_describe.node.active = false;
            }
          } else {
            this.node_level_up.active = true;
            this.node_stuff_level_layout.active = true;
            this.lbl_describe.node.active = false;
            this.node_stuff_level_layout_img.active = true;
          }

          map.forEach((value, key) => {
            var item = this.node_stuff_level_layout.children[index];
            item.active = true; // let itemTab = ItemData.ins.getByItemId(key);

            var _ItemData = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
              error: Error()
            }), ItemData) : ItemData).ins.getByItemId(key);

            var itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(key);
            var sp = item.getChildByName("JinBi").getComponent(Sprite);
            var lbl = item.getChildByName("skill_txt").getComponent(Label);

            if (_ItemData && _ItemData.num) {
              // lbl.string = value + "/" + _ItemData.num;
              lbl.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
                error: Error()
              }), GameUtil) : GameUtil).convertNumber(_ItemData.num) + " / " + (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
                error: Error()
              }), GameUtil) : GameUtil).convertNumber(value, true);
            } else {
              // lbl.string = value + "/" + 0;
              lbl.string = 0 + " / " + value;
            }

            if (_ItemData && _ItemData.num && Number(_ItemData.num) >= value) {
              lbl.color = new Color().fromHEX("#FFFFFF");
            } else {
              lbl.color = new Color().fromHEX((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().GetKeyValue_ConfigTable().InterfaceTxtRed);
            }

            sp.setTexture(itemTab.Icon);
            index++;
          });
        }

        clickStarUpStep(event, type) {
          /* 获取当前的stepId数组 */
          var starTab = this._heroInfo.heroStarUpTable;
          var starUpSteps = starTab.NeedStarSteps;
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).HeroStarSpecialPop,
            data: {
              stepId: starUpSteps[Number(type)]
            }
          });
        }

        on_s2c_EnhanceEquipRsp(msg) {
          if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Equip_Strengthen);
            this.node_red_strength.active = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Equip_Strengthen, String(this._heroInfo.heroTable.Class));
          }
        }
        /**
        * 替换装备成功
        * @param msg 
        */


        on_s2c_ChangeEquipRsp(msg) {
          if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            this.refreshEquipRed();

            if (this.node_hero_equip.active) {
              var isTeam = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
                error: Error()
              }), HeroTeamControl) : HeroTeamControl).ins.heroInTeam(this._heroInfo.id) !== null;
              this.equipItem.initView(this._heroInfo.heroTable.Class, isTeam);
            }

            this._heroAllAttr = (_crd && HeroAttrMgr === void 0 ? (_reportPossibleCrUseOfHeroAttrMgr({
              error: Error()
            }), HeroAttrMgr) : HeroAttrMgr).getHeroInfoAttr(this._heroInfo.id);
            this.showHeroAttr();
          }
        }

        onEquipChang(heroClass, euqipId) {
          this.refreshEquipRed();

          if (this.node_hero_equip.active) {
            var isTeam = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
              error: Error()
            }), HeroTeamControl) : HeroTeamControl).ins.heroInTeam(this._heroInfo.id) !== null;

            if (this._heroInfo.heroTable.Class == heroClass) {
              this.equipItem.initView(this._heroInfo.heroTable.Class, isTeam);
            }
          }

          this._heroAllAttr = (_crd && HeroAttrMgr === void 0 ? (_reportPossibleCrUseOfHeroAttrMgr({
            error: Error()
          }), HeroAttrMgr) : HeroAttrMgr).getHeroInfoAttr(this._heroInfo.id);
          this.showHeroAttr();
        } // 刷新红点


        refreshEquipRed() {
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Wear_Equip);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Wear_Jade);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Equip_Strengthen);
          this.node_equip_red.active = (_crd && HeroRed === void 0 ? (_reportPossibleCrUseOfHeroRed({
            error: Error()
          }), HeroRed) : HeroRed).ins.checkWearEquip(this._heroInfo) || (_crd && HeroRed === void 0 ? (_reportPossibleCrUseOfHeroRed({
            error: Error()
          }), HeroRed) : HeroRed).ins.checkWearJade(this._heroInfo);
          this.node_red_strength.active = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Equip_Strengthen, String(this._heroInfo.heroTable.Class));
        }

        onDisable() {
          this.node_now_star.getComponent(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
            error: Error()
          }), HeroStar) : HeroStar).onDisable();
          this.node_next_star.getComponent(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
            error: Error()
          }), HeroStar) : HeroStar).onDisable();
        } // 检查是否有装备引导


        checkEquipGuide() {
          //条件 1：没有引导过、2：装备开启条件达成、3：有可一键装备的装备
          if (!(_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
            error: Error()
          }), GuideController) : GuideController).ins.isGuiding() && !(_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.getView("EquipmentView")) {
            var isEquipGuide = Boolean((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.clientData.equipGuildOver);
            var isOpenEquip = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
              error: Error()
            }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_Equipment);
            var isNewEquip = (_crd && HeroRed === void 0 ? (_reportPossibleCrUseOfHeroRed({
              error: Error()
            }), HeroRed) : HeroRed).ins.getNewEquip(this._heroInfo.heroClassTable.HeroClass);
            var isInTeam = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
              error: Error()
            }), HeroTeamControl) : HeroTeamControl).ins.heroInTeam(this._heroInfo.id);

            if (!isEquipGuide && isOpenEquip && isNewEquip && Boolean(isInTeam)) {
              if (this._defaultView === (_crd && HERO_DETAIL_VIEW_TYPE === void 0 ? (_reportPossibleCrUseOfHERO_DETAIL_VIEW_TYPE({
                error: Error()
              }), HERO_DETAIL_VIEW_TYPE) : HERO_DETAIL_VIEW_TYPE).EQUIP) {
                (_crd && stepBranchGuide === void 0 ? (_reportPossibleCrUseOfstepBranchGuide({
                  error: Error()
                }), stepBranchGuide) : stepBranchGuide)(504);
              } else {
                (_crd && stepBranchGuide === void 0 ? (_reportPossibleCrUseOfstepBranchGuide({
                  error: Error()
                }), stepBranchGuide) : stepBranchGuide)(503);
              }
            }
          }
        } // 检查是否有羽毛引导


        checkJadeGuide() {
          if (!(_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
            error: Error()
          }), GuideController) : GuideController).ins.isGuiding()) {
            var isJadeGuide = Boolean((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.clientData.jadeGuildOver);
            var isOpenJade = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
              error: Error()
            }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_Jade);
            var list = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
              error: Error()
            }), EquipData) : EquipData).ins.getJadeEquipInfos();
            var isWear = false;

            for (var key in list) {
              var jadeInfo = list[key];

              if (jadeInfo.isWear) {
                isWear = true;
              }
            }

            if (!isJadeGuide && isOpenJade && !isWear && list.length > 0) {
              if (this._defaultView === (_crd && HERO_DETAIL_VIEW_TYPE === void 0 ? (_reportPossibleCrUseOfHERO_DETAIL_VIEW_TYPE({
                error: Error()
              }), HERO_DETAIL_VIEW_TYPE) : HERO_DETAIL_VIEW_TYPE).EQUIP) {
                (_crd && stepBranchGuide === void 0 ? (_reportPossibleCrUseOfstepBranchGuide({
                  error: Error()
                }), stepBranchGuide) : stepBranchGuide)(506);
              } else {
                (_crd && stepBranchGuide === void 0 ? (_reportPossibleCrUseOfstepBranchGuide({
                  error: Error()
                }), stepBranchGuide) : stepBranchGuide)(505);
              }
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_hero_painting", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_hero_detail", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_hero_risingstar", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_hero_equip", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_hero_skin", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_ascend", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_level_up", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_attribute_layout", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "node_now_star", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "node_next_star", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "node_stuff_star_layout", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "node_stuff_level_layout", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "node_stuff_level_layout_img", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "node_skill_layout", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "node_up_star_item", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "node_star_toggle", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "node_step_star_up", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "node_max_level_txt", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "node_star_up_red", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "node_level_up_red", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "btn_level_up_red", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "node_equip_red", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "node_func_toggle", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "pfb_hero_painting", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "pfb_hero_attr", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "pfb_hero_material", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "pfb_skill_item", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "lbl_ascend", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "lbl_now_star_max", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "lbl_next_star_max", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "lbl_skill_desc", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "lbl_skill_name", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "lbl_describe", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "lbl_skill_desc1", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "lbl_skill_name1", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "hero_skill_item", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "hero_skill_item1", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "equipItem", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "node_not_in_team_tips", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "node_red_strength", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cd710c67817a54089b49959c2f639a758e5f2167.js.map