System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "client_protocol", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, error, instantiate, Label, log, Node, Prefab, Sprite, Toggle, ResourceItem, ViewScreen, EquipmentViewItem, HeroBagPainting, EquipData, ItemPoolMgr, EventMgr, proto, tab, GameUtil, EquipControl, ItemData, ShowItemNotEnoughTips, ShowTips, UIMgr, ViewName, LangMgr, EquipmentGrowthMaxItem, EquipmentItem, LocalEvent, RedMgr, RedDotType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _crd, ccclass, property, EquipmentView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfResourceItem(extras) {
    _reporterNs.report("ResourceItem", "../common/ResourceItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewScreen(extras) {
    _reporterNs.report("ViewScreen", "../../../framework/base/ViewScreen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipmentViewItem(extras) {
    _reporterNs.report("EquipmentViewItem", "./EquipmentViewItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipInfo(extras) {
    _reporterNs.report("EquipInfo", "./EquipInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroBagPainting(extras) {
    _reporterNs.report("HeroBagPainting", "../hero/herobag/HeroBagPainting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipData(extras) {
    _reporterNs.report("EquipData", "./EquipData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipControl(extras) {
    _reporterNs.report("EquipControl", "./EquipControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowItemNotEnoughTips(extras) {
    _reporterNs.report("ShowItemNotEnoughTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipmentGrowthMaxItem(extras) {
    _reporterNs.report("EquipmentGrowthMaxItem", "./EquipmentGrowthMaxItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipmentItem(extras) {
    _reporterNs.report("EquipmentItem", "../item/EquipmentItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
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
      error = _cc.error;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      log = _cc.log;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Sprite = _cc.Sprite;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      ResourceItem = _unresolved_2.ResourceItem;
    }, function (_unresolved_3) {
      ViewScreen = _unresolved_3.ViewScreen;
    }, function (_unresolved_4) {
      EquipmentViewItem = _unresolved_4.EquipmentViewItem;
    }, function (_unresolved_5) {
      HeroBagPainting = _unresolved_5.HeroBagPainting;
    }, function (_unresolved_6) {
      EquipData = _unresolved_6.EquipData;
    }, function (_unresolved_7) {
      ItemPoolMgr = _unresolved_7.ItemPoolMgr;
    }, function (_unresolved_8) {
      EventMgr = _unresolved_8.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_9) {
      tab = _unresolved_9.tab;
    }, function (_unresolved_10) {
      GameUtil = _unresolved_10.GameUtil;
    }, function (_unresolved_11) {
      EquipControl = _unresolved_11.EquipControl;
    }, function (_unresolved_12) {
      ItemData = _unresolved_12.ItemData;
    }, function (_unresolved_13) {
      ShowItemNotEnoughTips = _unresolved_13.ShowItemNotEnoughTips;
      ShowTips = _unresolved_13.ShowTips;
      UIMgr = _unresolved_13.UIMgr;
    }, function (_unresolved_14) {
      ViewName = _unresolved_14.ViewName;
    }, function (_unresolved_15) {
      LangMgr = _unresolved_15.LangMgr;
    }, function (_unresolved_16) {
      EquipmentGrowthMaxItem = _unresolved_16.EquipmentGrowthMaxItem;
    }, function (_unresolved_17) {
      EquipmentItem = _unresolved_17.EquipmentItem;
    }, function (_unresolved_18) {
      LocalEvent = _unresolved_18.LocalEvent;
    }, function (_unresolved_19) {
      RedMgr = _unresolved_19.RedMgr;
    }, function (_unresolved_20) {
      RedDotType = _unresolved_20.RedDotType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2c00f7gnb5JLKBrI4rFgEaU", "EquipmentView", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'error', 'instantiate', 'Label', 'log', 'Node', 'Prefab', 'profiler', 'Sprite', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EquipmentView", EquipmentView = (_dec = ccclass('EquipmentView'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Sprite), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(_crd && ResourceItem === void 0 ? (_reportPossibleCrUseOfResourceItem({
        error: Error()
      }), ResourceItem) : ResourceItem), _dec10 = property(Sprite), _dec11 = property(Sprite), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(_crd && EquipmentViewItem === void 0 ? (_reportPossibleCrUseOfEquipmentViewItem({
        error: Error()
      }), EquipmentViewItem) : EquipmentViewItem), _dec15 = property(_crd && EquipmentGrowthMaxItem === void 0 ? (_reportPossibleCrUseOfEquipmentGrowthMaxItem({
        error: Error()
      }), EquipmentGrowthMaxItem) : EquipmentGrowthMaxItem), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Label), _dec21 = property(Sprite), _dec22 = property(Label), _dec23 = property(_crd && EquipmentViewItem === void 0 ? (_reportPossibleCrUseOfEquipmentViewItem({
        error: Error()
      }), EquipmentViewItem) : EquipmentViewItem), _dec24 = property(_crd && EquipmentGrowthMaxItem === void 0 ? (_reportPossibleCrUseOfEquipmentGrowthMaxItem({
        error: Error()
      }), EquipmentGrowthMaxItem) : EquipmentGrowthMaxItem), _dec25 = property(Node), _dec26 = property(Node), _dec27 = property(Node), _dec28 = property(Node), _dec29 = property(Node), _dec30 = property(Prefab), _dec31 = property(Node), _dec32 = property(Node), _dec33 = property(Node), _dec34 = property(Node), _dec35 = property(Node), _dec36 = property(Node), _dec(_class = (_class2 = class EquipmentView extends (_crd && ViewScreen === void 0 ? (_reportPossibleCrUseOfViewScreen({
        error: Error()
      }), ViewScreen) : ViewScreen) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bagNode", _descriptor, this);

          _initializerDefineProperty(this, "forgeNode", _descriptor2, this);

          _initializerDefineProperty(this, "strengthNode", _descriptor3, this);

          _initializerDefineProperty(this, "proLab", _descriptor4, this);

          _initializerDefineProperty(this, "proSpr", _descriptor5, this);

          _initializerDefineProperty(this, "noEquipNode", _descriptor6, this);

          _initializerDefineProperty(this, "bagContentNode", _descriptor7, this);

          _initializerDefineProperty(this, "resourceItem", _descriptor8, this);

          _initializerDefineProperty(this, "strengthCostGoldSpr", _descriptor9, this);

          _initializerDefineProperty(this, "strengthCostStoneSpr", _descriptor10, this);

          _initializerDefineProperty(this, "strengthCostGoldLab", _descriptor11, this);

          _initializerDefineProperty(this, "strengthCostStoneLab", _descriptor12, this);

          _initializerDefineProperty(this, "strengthEquipViewItem", _descriptor13, this);

          _initializerDefineProperty(this, "strengthEquipViewItem2", _descriptor14, this);

          _initializerDefineProperty(this, "strengthComItemParent", _descriptor15, this);

          _initializerDefineProperty(this, "notStrengthEquipNode", _descriptor16, this);

          _initializerDefineProperty(this, "strengthEquipNode", _descriptor17, this);

          _initializerDefineProperty(this, "forgeCostItemNode", _descriptor18, this);

          _initializerDefineProperty(this, "forgeCostGoldLab", _descriptor19, this);

          _initializerDefineProperty(this, "forgeCostGoldSpr", _descriptor20, this);

          _initializerDefineProperty(this, "forgeProbabilityLab", _descriptor21, this);

          _initializerDefineProperty(this, "forgeEquipViewItem", _descriptor22, this);

          _initializerDefineProperty(this, "forgeEquipViewItem2", _descriptor23, this);

          _initializerDefineProperty(this, "toggleNode", _descriptor24, this);

          _initializerDefineProperty(this, "forgeComItemParent", _descriptor25, this);

          _initializerDefineProperty(this, "notforgeEquipNode", _descriptor26, this);

          _initializerDefineProperty(this, "forgeEquipNode", _descriptor27, this);

          _initializerDefineProperty(this, "heroNode", _descriptor28, this);

          _initializerDefineProperty(this, "heroPaintingPrefab", _descriptor29, this);

          _initializerDefineProperty(this, "strengthMaxNode", _descriptor30, this);

          _initializerDefineProperty(this, "strengthNormalNode", _descriptor31, this);

          _initializerDefineProperty(this, "forgeMaxNode", _descriptor32, this);

          _initializerDefineProperty(this, "forgeNormalNode", _descriptor33, this);

          _initializerDefineProperty(this, "cantforgeNode", _descriptor34, this);

          _initializerDefineProperty(this, "node_red_strength", _descriptor35, this);

          this.currTag = 1;
          this.currHeroClass = void 0;
          this.currEquipDatas = void 0;
          this.currEquipType = void 0;
          this.bagEquipNodes = void 0;
          this.heroPainting = void 0;
          this.currWearEquipInfo = void 0;
          this.currStrengthItemNode = void 0;
          this.currForgeItemNode = void 0;

          this.clickEquipSlot = type => {
            this.currEquipType = type;

            if (this.currTag == 1) {
              this.initStrengthView();
            } else if (this.currTag == 2) {
              this.initForgeView();
            } else {
              this.updateBagEquipByType();
            }
          };

          this.updateHero = heroClass => {
            this.currHeroClass = heroClass;
            this.updateBagEquipByHeroClass();
          };
        }

        start() {
          this.initView();
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ChangeEquipRsp, this.on_s2c_ChangeEquipRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.EnhanceEquipRsp, this.on_s2c_EnhanceEquipRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.RefineEquipRsp, this.on_s2c_RefineEquipRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).Item_Update, this.itemChange, this);
        }

        initView() {
          this.currEquipType = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).EquipType.EquipType_Gloves;

          if (this.openData) {
            if (this.openData["type"]) {
              this.currTag = this.openData['type']; // this.updateViewState();
            }

            if (this.openData["equipInfo"]) {
              let equip = this.openData["equipInfo"];
              this.currHeroClass = equip.equipTable.Class;
              this.currEquipType = equip.equipTable.Type;
            }

            if (this.openData["heroClass"]) {
              this.currHeroClass = this.openData["heroClass"];
            }

            if (this.openData["equipType"]) {
              this.currEquipType = this.openData["equipType"];
            } //   UIMgr.ins.show({viewName:ViewName.EquipmentView,data:{"type":3,"equipInfo":this.euqipInfo}});

          }

          if (!this.currHeroClass) {
            this.currHeroClass = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroClass.HeroClass_Assassin;
          }

          this.initHeroInfo();
          this.toggleNode.children[this.currTag - 1].getComponent(Toggle).isChecked = true;
          this.updateViewState();
        }

        initHeroInfo() {
          let node = instantiate(this.heroPaintingPrefab);
          node.parent = this.heroNode;
          let com = node.getComponent(_crd && HeroBagPainting === void 0 ? (_reportPossibleCrUseOfHeroBagPainting({
            error: Error()
          }), HeroBagPainting) : HeroBagPainting);
          com.initEquipView(this.currHeroClass, this.currEquipType, this.updateHero, this.clickEquipSlot);
          this.heroPainting = com;
        }

        onClickToggle(event, type) {
          this.currTag = Number(type);
          this.updateViewState();
        }

        updateViewState() {
          if (this.currTag == 1) {
            //强化
            this.bagNode.active = false;
            this.strengthNode.active = true;
            this.forgeNode.active = false;
            this.initStrengthView();
          } else if (this.currTag == 2) {
            //淬炼
            this.bagNode.active = false;
            this.strengthNode.active = false;
            this.forgeNode.active = true;
            this.initForgeView();
          } else if (this.currTag == 3) {
            //背包
            this.bagNode.active = true;
            this.strengthNode.active = false;
            this.forgeNode.active = false;
            this.initBagView();
          }
        }

        initBagView() {
          this.updateBagEquipByHeroClass();
        }

        initForgeView() {
          this.currWearEquipInfo = this.heroPainting.getWearEquipByType(this.currEquipType);

          if (this.currWearEquipInfo) {
            if (this.currWearEquipInfo.equipTable.RefineLimit > 0) {
              if (!this.currForgeItemNode) {
                let node = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                  error: Error()
                }), ItemPoolMgr) : ItemPoolMgr).ins.createEquipItem(this.currWearEquipInfo, this.forgeComItemParent, false);
                this.currForgeItemNode = node.getComponent(_crd && EquipmentItem === void 0 ? (_reportPossibleCrUseOfEquipmentItem({
                  error: Error()
                }), EquipmentItem) : EquipmentItem);
              } else {
                this.currForgeItemNode.initData(this.currWearEquipInfo, false);
              }

              if (this.currWearEquipInfo.isRefineLimit()) {
                this.forgeMaxNode.active = true;
                this.forgeNormalNode.active = false;
                this.forgeEquipViewItem2.initData(this.currWearEquipInfo, 2);
              } else {
                this.forgeMaxNode.active = false;
                this.forgeNormalNode.active = true;
                this.forgeEquipViewItem.initData(this.currWearEquipInfo, 2);
                this.updateForgeCost();
              }

              this.forgeEquipNode.active = true;
              this.notforgeEquipNode.active = false;
              this.cantforgeNode.active = false;
            } else {
              this.forgeEquipNode.active = false;
              this.notforgeEquipNode.active = false;
              this.cantforgeNode.active = true;
            }
          } else {
            this.forgeEquipNode.active = false;
            this.notforgeEquipNode.active = true;
            this.cantforgeNode.active = false;
          }
        }

        initStrengthView() {
          this.node_red_strength.active = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Equip_Strengthen, String(this.currHeroClass));
          this.currWearEquipInfo = this.heroPainting.getWearEquipByType(this.currEquipType);

          if (this.currWearEquipInfo) {
            if (!this.currStrengthItemNode) {
              let node = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                error: Error()
              }), ItemPoolMgr) : ItemPoolMgr).ins.createEquipItem(this.currWearEquipInfo, this.strengthComItemParent, false);
              this.currStrengthItemNode = node.getComponent(_crd && EquipmentItem === void 0 ? (_reportPossibleCrUseOfEquipmentItem({
                error: Error()
              }), EquipmentItem) : EquipmentItem); // node.getComponent(CommonItem).setIsTouchItem(false);
            } else {
              this.currStrengthItemNode.initData(this.currWearEquipInfo);
            }

            this.strengthEquipNode.active = true;
            this.notStrengthEquipNode.active = false;

            if (this.currWearEquipInfo.isEnhanceLimit()) {
              this.strengthMaxNode.active = true;
              this.strengthNormalNode.active = false;
              this.strengthEquipViewItem2.initData(this.currWearEquipInfo, 1);
            } else {
              this.strengthMaxNode.active = false;
              this.strengthNormalNode.active = true;
              this.strengthEquipViewItem.initData(this.currWearEquipInfo, 1);
              this.updateStrengthCost();
            }
          } else {
            this.strengthEquipNode.active = false;
            this.notStrengthEquipNode.active = true;
          }
        }
        /**
         * 刷新强化花费
         */


        updateStrengthCost() {
          let moneys = this.currWearEquipInfo.enhanceUpgradeTable.Moneys;
          let materials = this.currWearEquipInfo.enhanceUpgradeTable.Materials;
          let moneysCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount(moneys[0]);
          let materialCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount(materials[0]);
          this.strengthCostGoldLab.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).convertNumber(moneysCount) + "/" + (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).convertNumber(moneys[1], true);

          if (moneysCount >= moneys[1]) {
            this.strengthCostGoldLab.color = new Color().fromHEX("#ffffff");
          } else {
            this.strengthCostGoldLab.color = new Color().fromHEX((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().InterfaceTxtRed);
          }

          this.strengthCostGoldSpr.setTexture((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(moneys[0]).Icon);
          this.strengthCostStoneLab.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).convertNumber(materialCount) + "/" + (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).convertNumber(materials[1], true);

          if (materialCount >= materials[1]) {
            this.strengthCostStoneLab.color = new Color().fromHEX("#ffffff");
          } else {
            this.strengthCostStoneLab.color = new Color().fromHEX((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().InterfaceTxtRed);
          }

          this.strengthCostStoneSpr.setTexture((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(materials[0]).Icon);
        }

        updateForgeCost() {
          this.forgeCostItemNode.removeAllChildren();
          let moneys = this.currWearEquipInfo.refineUpgradeTable.Moneys;
          let materials = this.currWearEquipInfo.refineUpgradeTable.Materials;

          if (moneys.length > 0) {
            let moneysCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
              error: Error()
            }), ItemData) : ItemData).ins.getCount(moneys[0]);
            this.forgeCostGoldLab.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
              error: Error()
            }), GameUtil) : GameUtil).convertNumber(moneysCount) + "/" + moneys[1];

            if (moneysCount >= moneys[1]) {
              this.forgeCostGoldLab.color = new Color().fromHEX("#ffffff");
            } else {
              this.forgeCostGoldLab.color = new Color().fromHEX((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().GetKeyValue_ConfigTable().InterfaceTxtRed);
            }

            let itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(moneys[0]);

            if (itemTab) {
              this.forgeCostGoldSpr.setTexture(itemTab.Icon);
            } else {
              error("item找不到id", moneys);
            }

            this.forgeCostGoldSpr.node.active = true;
            this.forgeCostGoldLab.node.active = true;
          } else {
            this.forgeCostGoldSpr.node.active = false;
            this.forgeCostGoldLab.node.active = false;
          }

          this.forgeProbabilityLab.string = this.currWearEquipInfo.refineUpgradeTable.Odds / 10000 * 100 + "";
          let rewards = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).convertItemInfosByList(materials);

          for (let key in rewards) {
            (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.createItem(rewards[key], this.forgeCostItemNode);
          }
        }

        updateBagEquipByHeroClass() {
          this.currEquipDatas = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.getEquipBagByHeroClass(this.currHeroClass);
          this.updateBagEquipByType();
          let heroClassTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroClassTableByHeroClass.getValue(this.currHeroClass);
          this.proSpr.setTexture(heroClassTab.Icon);
          this.proLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass[this.currHeroClass]);
        }

        updateBagEquipByType() {
          this.removeBagEquipItem();
          let bagInfos = [];

          for (let key in this.currEquipDatas) {
            if (this.currEquipDatas[key].equipTable.Type == this.currEquipType) {
              bagInfos.push(this.currEquipDatas[key]); // let node = ItemPoolMgr.ins.createEquipItem(this.currEquipDatas[key],this.bagContentNode);
              // this.bagEquipNodes.push(node);
            }
          }

          bagInfos.sort((a, b) => {
            return b.score - a.score;
          });

          for (let key in bagInfos) {
            let node = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.createEquipItem(bagInfos[key], this.bagContentNode);
            this.bagEquipNodes.push(node);
          }

          this.noEquipNode.active = this.bagEquipNodes.length == 0;
        }

        removeBagEquipItem() {
          if (this.bagEquipNodes) {
            for (let key in this.bagEquipNodes) {
              (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                error: Error()
              }), ItemPoolMgr) : ItemPoolMgr).ins.putEquipItem(this.bagEquipNodes[key]);
            }
          }

          this.bagEquipNodes = [];
        }
        /**
         * 点击穿戴装备
         */


        onClickWearEquip() {
          (_crd && EquipControl === void 0 ? (_reportPossibleCrUseOfEquipControl({
            error: Error()
          }), EquipControl) : EquipControl).ins.reqOnekeyEquips(this.currHeroClass);
        }
        /**
         * 点击分解装备
         */


        onClickResolveEquip() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).EquipResolvePop
          });
        }
        /**
         * 点击强化大师
         */


        onClickMaster() {
          // UIMgr.ins.show({viewName:ViewName.EquipFettersPop,data:{"type":2,"level":2}})
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).EquipMasterPop,
            data: {
              "heroClass": this.currHeroClass,
              "type": 2
            }
          });
        }
        /**
         * 点击淬炼按钮
         */


        onClickForgetBtn() {
          if (this.currWearEquipInfo) {
            let items = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
              error: Error()
            }), GameUtil) : GameUtil).convertItemInfosByList(this.currWearEquipInfo.refineUpgradeTable.Moneys);
            items = items.concat((_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
              error: Error()
            }), GameUtil) : GameUtil).convertItemInfosByList(this.currWearEquipInfo.refineUpgradeTable.Materials));

            if ((_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
              error: Error()
            }), ItemData) : ItemData).ins.isItemsEnough(items)) {
              (_crd && EquipControl === void 0 ? (_reportPossibleCrUseOfEquipControl({
                error: Error()
              }), EquipControl) : EquipControl).ins.reqRefineEquips(this.currHeroClass, this.currWearEquipInfo.equipTable.Type);
            } else {
              this.checkGoldMaterial(items);
            }
          }
        }

        checkGoldMaterial(items) {
          let isGold = false;
          let notEnoughtItemId = 0;

          for (let i = 0; i < items.length; i++) {
            let totalMaterialCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
              error: Error()
            }), ItemData) : ItemData).ins.getCount(items[i].itemId);

            if (totalMaterialCount < items[i].num) {
              if (items[i].itemId === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).CurrencyType.CurrencyType_Gold) {
                isGold = true;
              } else {
                notEnoughtItemId = items[i].itemId;
              }
            }
          }

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
        }
        /**
         * 点击强化按钮
         */


        onClickStrengthenBtn() {
          if (this.currWearEquipInfo) {
            this.strengthenOneEquip(this.currWearEquipInfo);
          }
        }

        strengthenOneEquip(currEquip) {
          if (!currEquip.isEnhanceLimit()) {
            let items = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
              error: Error()
            }), GameUtil) : GameUtil).convertItemInfosByList(currEquip.enhanceUpgradeTable.Moneys);
            items = items.concat((_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
              error: Error()
            }), GameUtil) : GameUtil).convertItemInfosByList(currEquip.enhanceUpgradeTable.Materials));

            if ((_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
              error: Error()
            }), ItemData) : ItemData).ins.isItemsEnough(items)) {
              (_crd && EquipControl === void 0 ? (_reportPossibleCrUseOfEquipControl({
                error: Error()
              }), EquipControl) : EquipControl).ins.reqEnhanceEquips(this.currHeroClass, [currEquip.equipTable.Type]);
            } else {
              this.checkGoldMaterial(items);
            }
          } else {
            log("强化超过改装备上线"); //ShowTips("强化以达到上限");

            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("ui_equip_29"));
          }
        }
        /**
         * 点击一键强化按钮
         */


        onClickOnekeyStrengthen() {
          let currEquips = [];
          let list = this.heroPainting.currWearEquipDatas;

          for (let i = 0; i < list.length; i++) {
            if (i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).EquipType.EquipType_Feather) {
              currEquips.push(list[i]);
            }
          }

          let isEqual = true;
          let minLevel = -1;

          for (let key in currEquips) {
            if (currEquips[key] && !currEquips[key].isEnhanceLimit()) {
              if (minLevel < 0) {
                minLevel = currEquips[key].enhanceLv;
              } else if (currEquips[key].enhanceLv < minLevel) {
                minLevel = currEquips[key].enhanceLv;
              }
            }
          }

          if (minLevel >= 0) {
            let types = [];
            let totals = [];

            for (let key in currEquips) {
              let currEquip = currEquips[key];

              if (currEquip && !currEquip.isEnhanceLimit() && currEquip.enhanceLv == minLevel) {
                let items = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
                  error: Error()
                }), GameUtil) : GameUtil).convertItemInfosByList(currEquip.enhanceUpgradeTable.Moneys);
                items = items.concat((_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
                  error: Error()
                }), GameUtil) : GameUtil).convertItemInfosByList(currEquip.enhanceUpgradeTable.Materials));
                totals = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
                  error: Error()
                }), GameUtil) : GameUtil).itemsAddItems(totals, items);

                if ((_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
                  error: Error()
                }), ItemData) : ItemData).ins.isItemsEnough(totals)) {
                  types.push(currEquip.equipTable.Type);
                } else {
                  continue;
                }
              }
            }

            if (types.length > 0) {
              (_crd && EquipControl === void 0 ? (_reportPossibleCrUseOfEquipControl({
                error: Error()
              }), EquipControl) : EquipControl).ins.reqEnhanceEquips(this.currHeroClass, types);
            } else {
              //ShowTips("一键没有可强化的装备")
              (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
                error: Error()
              }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab("ui_equip_30"));
            }
          } else {
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("ui_equip_30"));
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
            this.updateBagEquipByHeroClass();
            this.heroPainting.updateEquipSlot();
          }
        }
        /**
        * 强化装备成功
        * @param msg 
        */


        on_s2c_EnhanceEquipRsp(msg) {
          if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            this.heroPainting.updateEquipSlot();
            this.initStrengthView();
          }
        }

        on_s2c_RefineEquipRsp(msg) {
          if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            this.heroPainting.updateEquipSlot();
            this.initForgeView();
          }
        }

        onDisable() {
          this.removeBagEquipItem();

          if (this.currForgeItemNode) {
            this.currForgeItemNode.putItem();
          }

          if (this.currStrengthItemNode) {
            this.currStrengthItemNode.putItem();
          }

          this.currForgeItemNode = null;
          this.currStrengthItemNode = null;

          for (let node of this.forgeCostItemNode.children) {
            (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.putCommonItem(node);
          }
        }

        itemChange(items) {
          if (this.currTag == 1) {
            let moneys = this.currWearEquipInfo.enhanceUpgradeTable.Moneys;
            let materials = this.currWearEquipInfo.enhanceUpgradeTable.Materials;

            if (items.indexOf(moneys[0]) > -1 || items.indexOf(materials[0]) > -1) {
              this.updateStrengthCost();
            }
          }
        }

        onDestroy() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).unTarget(this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bagNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "forgeNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "strengthNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "proLab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "proSpr", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "noEquipNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bagContentNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "resourceItem", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "strengthCostGoldSpr", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "strengthCostStoneSpr", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "strengthCostGoldLab", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "strengthCostStoneLab", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "strengthEquipViewItem", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "strengthEquipViewItem2", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "strengthComItemParent", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "notStrengthEquipNode", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "strengthEquipNode", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "forgeCostItemNode", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "forgeCostGoldLab", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "forgeCostGoldSpr", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "forgeProbabilityLab", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "forgeEquipViewItem", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "forgeEquipViewItem2", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "toggleNode", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "forgeComItemParent", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "notforgeEquipNode", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "forgeEquipNode", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "heroNode", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "heroPaintingPrefab", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "strengthMaxNode", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "strengthNormalNode", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "forgeMaxNode", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "forgeNormalNode", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "cantforgeNode", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "node_red_strength", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4650419b4fa2b121196792a42a0473a37ebf099e.js.map