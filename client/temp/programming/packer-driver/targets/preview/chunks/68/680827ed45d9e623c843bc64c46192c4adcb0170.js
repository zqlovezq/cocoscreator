System.register(["__unresolved_0", "cc", "client_protocol", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, sp, Node, Prefab, Sprite, Toggle, log, instantiate, Animation, Color, proto, HeroInfo, Net, tab, HeroData, ItemPoolMgr, HeroItem, LangMgr, HeroTeamControl, EquipData, HeroDataControl, EventMgr, LocalEvent, UIMgr, ViewName, HeroSkillItem, HeroStar, createAnimation, GameUtil, HERO_DETAIL_VIEW_TYPE, RedMgr, RedDotType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _crd, ccclass, property, HeroBagPainting;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../HeroInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "../HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroItem(extras) {
    _reporterNs.report("HeroItem", "../../item/HeroItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroTeamControl(extras) {
    _reporterNs.report("HeroTeamControl", "../HeroTeamControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipData(extras) {
    _reporterNs.report("EquipData", "../../equip/EquipData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipInfo(extras) {
    _reporterNs.report("EquipInfo", "../../equip/EquipInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "./HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroSkillItem(extras) {
    _reporterNs.report("HeroSkillItem", "./HeroSkillItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroStar(extras) {
    _reporterNs.report("HeroStar", "../HeroStar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateAnimation(extras) {
    _reporterNs.report("createAnimation", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHERO_DETAIL_VIEW_TYPE(extras) {
    _reporterNs.report("HERO_DETAIL_VIEW_TYPE", "../../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../../red/RedDotType", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      sp = _cc.sp;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Sprite = _cc.Sprite;
      Toggle = _cc.Toggle;
      log = _cc.log;
      instantiate = _cc.instantiate;
      Animation = _cc.Animation;
      Color = _cc.Color;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_2) {
      HeroInfo = _unresolved_2.HeroInfo;
    }, function (_unresolved_3) {
      Net = _unresolved_3.Net;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      HeroData = _unresolved_5.HeroData;
    }, function (_unresolved_6) {
      ItemPoolMgr = _unresolved_6.ItemPoolMgr;
    }, function (_unresolved_7) {
      HeroItem = _unresolved_7.HeroItem;
    }, function (_unresolved_8) {
      LangMgr = _unresolved_8.LangMgr;
    }, function (_unresolved_9) {
      HeroTeamControl = _unresolved_9.HeroTeamControl;
    }, function (_unresolved_10) {
      EquipData = _unresolved_10.EquipData;
    }, function (_unresolved_11) {
      HeroDataControl = _unresolved_11.HeroDataControl;
    }, function (_unresolved_12) {
      EventMgr = _unresolved_12.EventMgr;
    }, function (_unresolved_13) {
      LocalEvent = _unresolved_13.LocalEvent;
    }, function (_unresolved_14) {
      UIMgr = _unresolved_14.UIMgr;
    }, function (_unresolved_15) {
      ViewName = _unresolved_15.ViewName;
    }, function (_unresolved_16) {
      HeroSkillItem = _unresolved_16.HeroSkillItem;
    }, function (_unresolved_17) {
      HeroStar = _unresolved_17.HeroStar;
    }, function (_unresolved_18) {
      createAnimation = _unresolved_18.createAnimation;
      GameUtil = _unresolved_18.GameUtil;
    }, function (_unresolved_19) {
      HERO_DETAIL_VIEW_TYPE = _unresolved_19.HERO_DETAIL_VIEW_TYPE;
    }, function (_unresolved_20) {
      RedMgr = _unresolved_20.RedMgr;
    }, function (_unresolved_21) {
      RedDotType = _unresolved_21.RedDotType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "af6ea+KvitBGroPWfrPk/wY", "HeroBagPainting", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'sp', 'Node', 'Prefab', 'Sprite', 'Vec3', 'Toggle', 'log', 'instantiate', 'Animation', 'Color']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroBagPainting", HeroBagPainting = (_dec = ccclass('HeroBagPainting'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(sp.Skeleton), _dec7 = property([Node]), _dec8 = property(Prefab), _dec9 = property(Prefab), _dec10 = property(Sprite), _dec11 = property(Sprite), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Sprite), _dec20 = property(Sprite), _dec21 = property(Node), _dec22 = property([Node]), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(Node), _dec26 = property(Label), _dec27 = property(Animation), _dec28 = property(Node), _dec29 = property(Node), _dec(_class = (_class2 = class HeroBagPainting extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "lbl_hero_name", _descriptor, this);

          _initializerDefineProperty(this, "lbl_speciality", _descriptor2, this);

          _initializerDefineProperty(this, "lbl_cur_level", _descriptor3, this);

          _initializerDefineProperty(this, "lbl_max_level", _descriptor4, this);

          _initializerDefineProperty(this, "ske_hero", _descriptor5, this);

          _initializerDefineProperty(this, "node_team_arr", _descriptor6, this);

          _initializerDefineProperty(this, "pfb_hero_item", _descriptor7, this);

          _initializerDefineProperty(this, "pfb_skill_item", _descriptor8, this);

          _initializerDefineProperty(this, "sp_vocation", _descriptor9, this);

          //职业
          _initializerDefineProperty(this, "sp_quality", _descriptor10, this);

          //品质
          _initializerDefineProperty(this, "node_bag", _descriptor11, this);

          _initializerDefineProperty(this, "node_skill", _descriptor12, this);

          _initializerDefineProperty(this, "node_tip", _descriptor13, this);

          _initializerDefineProperty(this, "equipmentNode", _descriptor14, this);

          _initializerDefineProperty(this, "bagNode", _descriptor15, this);

          _initializerDefineProperty(this, "node_exchange", _descriptor16, this);

          _initializerDefineProperty(this, "node_quality1_img", _descriptor17, this);

          _initializerDefineProperty(this, "sp_quality2_img", _descriptor18, this);

          _initializerDefineProperty(this, "sp_quality1_img", _descriptor19, this);

          _initializerDefineProperty(this, "equipSlotNodes", _descriptor20, this);

          _initializerDefineProperty(this, "equipSlotItems", _descriptor21, this);

          _initializerDefineProperty(this, "node_star", _descriptor22, this);

          _initializerDefineProperty(this, "node_deploy_btn", _descriptor23, this);

          _initializerDefineProperty(this, "node_inteam_icon", _descriptor24, this);

          _initializerDefineProperty(this, "lbl_fight", _descriptor25, this);

          _initializerDefineProperty(this, "anim_level_up", _descriptor26, this);

          _initializerDefineProperty(this, "quality_node", _descriptor27, this);

          _initializerDefineProperty(this, "node_red_replace", _descriptor28, this);

          this._heroInfo = null;
          this.teamSlots = [];
          this._itemId = 0;
          this.changeHeroCallBack = void 0;
          this.clickEquipSlotCallBack = void 0;
          this.currEquipType = void 0;
          this.equipComItems = void 0;
          this.currWearEquipDatas = void 0;
          this._view_type = (_crd && HERO_DETAIL_VIEW_TYPE === void 0 ? (_reportPossibleCrUseOfHERO_DETAIL_VIEW_TYPE({
            error: Error()
          }), HERO_DETAIL_VIEW_TYPE) : HERO_DETAIL_VIEW_TYPE).DETAIL;
        }

        onLoad() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpdateHeroPowerScore, this.on_s2c_Msg_UpdateHeroPowerScore, this);
        }

        on_s2c_Msg_UpdateHeroPowerScore(msg) {
          this.lbl_fight.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).convertNumber(this._heroInfo.powerScore);
        }

        setExchangeBtn(isShow) {
          this.node_exchange.active = isShow;
        }

        setViewType(view_type) {
          this._view_type = view_type;
        }

        initData() {
          this.node_quality1_img.active = true;
          this.node_exchange.active = false;
          this._heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getById((_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.heroId);
          this._itemId = this._heroInfo.itemId;
          this.teamSlots = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getTeam();
          this.showBaseInfo();
          (_crd && createAnimation === void 0 ? (_reportPossibleCrUseOfcreateAnimation({
            error: Error()
          }), createAnimation) : createAnimation)(this.ske_hero.node, this._heroInfo.heroTable.Idle);
          this.showTeamHeros();
          this.node_star.getComponent(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
            error: Error()
          }), HeroStar) : HeroStar).showStar(this._heroInfo.star);
          var star = this._heroInfo.star;
          var itemQualityTab = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.getItemQualityTableByStar(star);
          this.sp_quality2_img.setTexture(itemQualityTab.HeroBagGrowthQuality);
          this.sp_quality1_img.setTexture(itemQualityTab.HeroBagLevelQuality);
          var isInTeam = Boolean((_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.heroInTeam(this._heroInfo.id));
          this.node_deploy_btn.active = !isInTeam;
          this.node_inteam_icon.active = isInTeam;
          this.lbl_fight.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).convertNumber(this._heroInfo.powerScore);
          this.node_red_replace.active = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroReplace, String((_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.heroId));
        }

        initBook() {
          this.node_exchange.active = false;
          this._itemId = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.bookId;
          var heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroTableById.getValue(this._itemId);
          this._heroInfo = new (_crd && HeroInfo === void 0 ? (_reportPossibleCrUseOfHeroInfo({
            error: Error()
          }), HeroInfo) : HeroInfo)();
          this._heroInfo.itemId = this._itemId;
          this._heroInfo.id = 0;
          this._heroInfo.star = heroTab.DefaultStar;
          this.node_bag.active = false;
          this.node_skill.active = true;
          this.node_quality1_img.active = false;
          this.node_star.getComponent(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
            error: Error()
          }), HeroStar) : HeroStar).showStar(this._heroInfo.star);
          (_crd && createAnimation === void 0 ? (_reportPossibleCrUseOfcreateAnimation({
            error: Error()
          }), createAnimation) : createAnimation)(this.ske_hero.node, heroTab.Idle);
          this.showBaseInfo();
          var star = this._heroInfo.star;
          var itemQualityTab = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.getItemQualityTableByStar(star);
          this.sp_quality2_img.setTexture(itemQualityTab.HeroBagGrowthQuality);
          var layout = this.node_skill.getChildByName("skill_layout");
          layout.removeAllChildren();
          /* 获取英雄技能列表 */

          var skillMap = this._heroInfo.getHeroSkillMap();

          for (var i = 1; i <= 3; i++) {
            var iconUrl = heroTab["SkillIcon" + i];

            if (iconUrl) {
              var skillData = skillMap.get(i);

              if (skillData) {
                var skill_item = instantiate(this.pfb_skill_item);
                var ts = skill_item.getComponent(_crd && HeroSkillItem === void 0 ? (_reportPossibleCrUseOfHeroSkillItem({
                  error: Error()
                }), HeroSkillItem) : HeroSkillItem);
                ts.initData(i, this._heroInfo);
                skill_item.parent = layout;
              }
            }
          }
        }

        initEquipView(heroClass, equipType, updateHeroCallBack, clickSlotCallBack) {
          this.bagNode.active = false;
          this.equipmentNode.active = true;
          this.teamSlots = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getTeam();
          this._view_type = (_crd && HERO_DETAIL_VIEW_TYPE === void 0 ? (_reportPossibleCrUseOfHERO_DETAIL_VIEW_TYPE({
            error: Error()
          }), HERO_DETAIL_VIEW_TYPE) : HERO_DETAIL_VIEW_TYPE).EQUIP;
          this.quality_node.active = false;
          var slot = this.teamSlots.find(a => a.heroClass == heroClass);

          if (slot && slot.heroId) {
            this._heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
              error: Error()
            }), HeroData) : HeroData).ins.getById(slot.heroId);
            this._itemId = this._heroInfo.itemId;
            this.showBaseInfo();
            (_crd && createAnimation === void 0 ? (_reportPossibleCrUseOfcreateAnimation({
              error: Error()
            }), createAnimation) : createAnimation)(this.ske_hero.node, this._heroInfo.heroTable.Idle);
            this.setSelectEquipSlot(equipType);
            this.changeHeroCallBack = updateHeroCallBack;
            this.clickEquipSlotCallBack = clickSlotCallBack;
            this.updateEquipSlot();
            this.node_star.getComponent(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
              error: Error()
            }), HeroStar) : HeroStar).showStar(this._heroInfo.star);
          } else {
            log("数据错误");
          }
        }

        upateEquipByHeroChang() {
          this._heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getById((_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.heroId);
          this._itemId = this._heroInfo.itemId;
          this.teamSlots = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getTeam();
          this.showBaseInfo();
          (_crd && createAnimation === void 0 ? (_reportPossibleCrUseOfcreateAnimation({
            error: Error()
          }), createAnimation) : createAnimation)(this.ske_hero.node, this._heroInfo.heroTable.Idle);
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
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_SetTeamSlotReq();
          msg.heroId = this._heroInfo.id;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.SetTeamSlotReq, msg);
        }
        /* 显示上阵小鸡 */


        showTeamHeros() {
          var _this = this;

          this.node_bag.active = true;
          this.node_skill.active = false; // this.equipmentNode.active = false;

          var _loop = function _loop() {
            var node = _this.node_team_arr[i];
            var data = _this.teamSlots[i];
            var item = null;

            if (data.heroId) {
              var heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
                error: Error()
              }), HeroData) : HeroData).ins.getById(data.heroId);

              if (heroInfo === null) {
                return 1; // continue
              }

              if (node.children[0]) {
                item = node.children[0];
              } else {
                item = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                  error: Error()
                }), ItemPoolMgr) : ItemPoolMgr).ins.createHeroItem(heroInfo, node); // item.parent = node;
              }

              var ts = item.getComponent(_crd && HeroItem === void 0 ? (_reportPossibleCrUseOfHeroItem({
                error: Error()
              }), HeroItem) : HeroItem);
              ts.UpdateContent(heroInfo);
              ts.setTouchCallBack(() => {
                console.log("cocos \u70B9\u51FB" + heroInfo.itemId);
              });

              if (Number(heroInfo.id) === (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
                error: Error()
              }), HeroDataControl) : HeroDataControl).ins.heroId) {
                node.parent.getComponent(Toggle).isChecked = true;
              }
            }
          };

          for (var i = 0; i < this.node_team_arr.length; i++) {
            if (_loop()) continue;
          }
        }
        /* 点击team toggle */


        clickTeamToggle(event, idx) {
          var index = Number(idx);
          (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.refreshBagData(Number(this.teamSlots[index - 1].heroId));
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).Hero_Change, true);
        }
        /* 获取基本信息 */


        showBaseInfo() {
          var itemId = this._itemId;
          var itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(itemId);
          var heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroTableById.getValue(itemId);
          var heroClassTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroClassTableByHeroClass.getValue(heroTab.Class);
          var heroAptitudeTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroAptitudeTableByHeroAptitude.getValue(heroTab.Aptitude);
          this.sp_vocation.setTexture(heroClassTab.Icon);
          this.sp_quality.setTexture(heroAptitudeTab.Icon); //this.sp_quality.node.setScale(new Vec3(0.5, 0.5, 0))

          /* 英雄名称 */

          this.lbl_hero_name.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(itemTab.Name);
          /* 职业描述 */

          this.lbl_speciality.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(heroTab.Speciality);
          /* 职业等级 */
          // let classLevel = HeroTeamControl.ins.getClassTeamData(heroTab.Class).level;

          var curLevel = this._heroInfo.getHeroLevel();
          /* 当前英雄最大等级 */


          var maxLevel = this._heroInfo.heroStarUpTable.MaxLevel;
          this.node_tip.active = curLevel > maxLevel;
          this.lbl_max_level.string = String(maxLevel < curLevel ? curLevel : maxLevel);

          if (maxLevel < curLevel) {
            curLevel = maxLevel;
            this.lbl_cur_level.color = new Color().fromHEX((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().InterfaceTxtRed);
          } else {
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


        setSelectEquipSlot(type) {
          if (this.equipSlotNodes.children[type - 1]) {
            this.equipSlotNodes.children[type - 1].getComponent(Toggle).isChecked = true;
          }

          this.currEquipType = type;
        }

        onClickEquipSlot(evet, type) {
          if (this.currEquipType != type) {
            if (this.clickEquipSlotCallBack) {
              this.clickEquipSlotCallBack(Number(type));
            }

            this.currEquipType = type;
          } else {
            if (this.currWearEquipDatas[type]) {
              (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                error: Error()
              }), UIMgr) : UIMgr).ins.show({
                viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                  error: Error()
                }), ViewName) : ViewName).EquipmentDetailPop,
                data: this.currWearEquipDatas[type]
              });
            }
          }
        }

        onClickChangeHeroLeft() {
          (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.LastHero(true);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).Hero_Change, true);

          if (this._view_type === (_crd && HERO_DETAIL_VIEW_TYPE === void 0 ? (_reportPossibleCrUseOfHERO_DETAIL_VIEW_TYPE({
            error: Error()
          }), HERO_DETAIL_VIEW_TYPE) : HERO_DETAIL_VIEW_TYPE).EQUIP) {
            this.upateEquipByHeroChang();
          }
        }

        onClickChangeHeroRight() {
          (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.NextHero(true);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).Hero_Change, true);

          if (this._view_type === (_crd && HERO_DETAIL_VIEW_TYPE === void 0 ? (_reportPossibleCrUseOfHERO_DETAIL_VIEW_TYPE({
            error: Error()
          }), HERO_DETAIL_VIEW_TYPE) : HERO_DETAIL_VIEW_TYPE).EQUIP) {
            this.upateEquipByHeroChang();
          }
        }

        updateEquipSlot() {
          if (this.equipComItems) {
            for (var key in this.equipComItems) {
              (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                error: Error()
              }), ItemPoolMgr) : ItemPoolMgr).ins.putEquipItem(this.equipComItems[key]);
            }
          }

          this.equipComItems = [];
          var equals = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.getWearEquipInfosByHeroClass(this._heroInfo.heroTable.Class);

          for (var _key in equals) {
            if (equals[_key]) {
              var node = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                error: Error()
              }), ItemPoolMgr) : ItemPoolMgr).ins.createEquipItem(equals[_key], this.equipSlotItems[Number(_key) - 1], false);
              this.equipComItems.push(node);
            }
          }

          this.currWearEquipDatas = equals;
        }

        getWearEquipByType(type) {
          if (this.currWearEquipDatas) {
            return this.currWearEquipDatas[type];
          }

          return null;
        }
        /* 点击重置 */


        clickShowHeroResetPop() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).HeroResetPop
          });
        }

        onDisable() {
          this.node_star.getComponent(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
            error: Error()
          }), HeroStar) : HeroStar).onDisable();

          if (this.equipComItems) {
            for (var key in this.equipComItems) {
              (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                error: Error()
              }), ItemPoolMgr) : ItemPoolMgr).ins.putEquipItem(this.equipComItems[key]);
            }
          }
        }
        /* 显示升级动画 */


        showLevelAnim() {
          this.anim_level_up.play();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbl_hero_name", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbl_speciality", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbl_cur_level", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lbl_max_level", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ske_hero", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_team_arr", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "pfb_hero_item", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "pfb_skill_item", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "sp_vocation", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "sp_quality", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "node_bag", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "node_skill", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "node_tip", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "equipmentNode", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "bagNode", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "node_exchange", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "node_quality1_img", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "sp_quality2_img", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "sp_quality1_img", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "equipSlotNodes", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "equipSlotItems", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "node_star", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "node_deploy_btn", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "node_inteam_icon", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "lbl_fight", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "anim_level_up", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "quality_node", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "node_red_replace", [_dec29], {
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
//# sourceMappingURL=680827ed45d9e623c843bc64c46192c4adcb0170.js.map