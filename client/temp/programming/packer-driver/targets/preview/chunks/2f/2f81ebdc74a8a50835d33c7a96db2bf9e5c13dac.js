System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Label, Node, Prefab, LangMgr, ItemPoolMgr, tab, JadeSelectattrItem, EquipData, EquipControl, UIMgr, ViewName, HeroTeamControl, RoleData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _crd, ccclass, property, JadeSelectItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEquipInfo(extras) {
    _reporterNs.report("EquipInfo", "../equip/EquipInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJadeSelectattrItem(extras) {
    _reporterNs.report("JadeSelectattrItem", "./JadeSelectattrItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipData(extras) {
    _reporterNs.report("EquipData", "../equip/EquipData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipControl(extras) {
    _reporterNs.report("EquipControl", "../equip/EquipControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroTeamControl(extras) {
    _reporterNs.report("HeroTeamControl", "../hero/HeroTeamControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      LangMgr = _unresolved_2.LangMgr;
    }, function (_unresolved_3) {
      ItemPoolMgr = _unresolved_3.ItemPoolMgr;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      JadeSelectattrItem = _unresolved_5.JadeSelectattrItem;
    }, function (_unresolved_6) {
      EquipData = _unresolved_6.EquipData;
    }, function (_unresolved_7) {
      EquipControl = _unresolved_7.EquipControl;
    }, function (_unresolved_8) {
      UIMgr = _unresolved_8.UIMgr;
    }, function (_unresolved_9) {
      ViewName = _unresolved_9.ViewName;
    }, function (_unresolved_10) {
      HeroTeamControl = _unresolved_10.HeroTeamControl;
    }, function (_unresolved_11) {
      RoleData = _unresolved_11.RoleData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8e81dkGUChPB4cgr0prMXL1", "JadeSelectItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("JadeSelectItem", JadeSelectItem = (_dec = ccclass('JadeSelectItem'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Prefab), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Label), _dec14 = property(Node), _dec15 = property(Node), _dec(_class = (_class2 = class JadeSelectItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "itemParent", _descriptor, this);

          _initializerDefineProperty(this, "nameLab", _descriptor2, this);

          _initializerDefineProperty(this, "scoreLab", _descriptor3, this);

          _initializerDefineProperty(this, "attrNode", _descriptor4, this);

          _initializerDefineProperty(this, "skillNode", _descriptor5, this);

          _initializerDefineProperty(this, "equipNode", _descriptor6, this);

          _initializerDefineProperty(this, "exchangeNode", _descriptor7, this);

          _initializerDefineProperty(this, "unequipNode", _descriptor8, this);

          _initializerDefineProperty(this, "selectAttrItemPrefab", _descriptor9, this);

          _initializerDefineProperty(this, "belongNode", _descriptor10, this);

          _initializerDefineProperty(this, "heroNode", _descriptor11, this);

          _initializerDefineProperty(this, "heroNameLab", _descriptor12, this);

          _initializerDefineProperty(this, "notNode", _descriptor13, this);

          _initializerDefineProperty(this, "jadeNode", _descriptor14, this);

          this.equipInfo = void 0;
          this.heroClass = void 0;
        }

        start() {}

        initData(equipInfo, heroClass) {
          this.equipInfo = equipInfo;

          if (this.equipInfo) {
            this.jadeNode.active = true;
            this.notNode.active = false;
            this.heroClass = heroClass;
            this.initView();
          } else {
            this.jadeNode.active = false;
            this.notNode.active = true;
          }
        }

        initView() {
          this.nameLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(this.equipInfo.itemTable.Name);
          var item = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
            error: Error()
          }), ItemPoolMgr) : ItemPoolMgr).ins.createItem(this.equipInfo, this.itemParent, false); // item.getComponent(CommonItem).setIsTouchItem(false);

          this.scoreLab.string = this.equipInfo.score + "";
          this.belongNode.active = this.equipInfo.isWear;
          this.initAttrItem();
          this.initSkilItem();

          if (this.equipInfo.heroClass == this.heroClass) {
            this.unequipNode.active = true;
            this.exchangeNode.active = false;
            this.equipNode.active = false;
          } else {
            this.exchangeNode.active = this.equipInfo.isWear;
            this.equipNode.active = !this.equipInfo.isWear;
          }

          if (this.equipInfo.isWear) {
            var info = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
              error: Error()
            }), HeroTeamControl) : HeroTeamControl).ins.getHeroByClass(this.equipInfo.heroClass); //this.heroNameLab.string =LangMgr.getLab(info.itemTable.Name)+"穿戴中";

            this.heroNameLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(info.itemTable.Name) + (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("ui_jade_10");
            var heroItem = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.createHeroItem(info, this.heroNode); // heroItem.parent=this.heroNode;
            // this.heroIcon.setTexture(info.itemTable.Icon);
          }
        }

        initAttrItem() {
          var attrs = this.equipInfo.baseAttr;

          for (var key in attrs) {
            var table = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().EquipAttrTableById.getValue(attrs[key]);
            var item = instantiate(this.selectAttrItemPrefab);
            item.parent = this.attrNode;
            item.getComponent(_crd && JadeSelectattrItem === void 0 ? (_reportPossibleCrUseOfJadeSelectattrItem({
              error: Error()
            }), JadeSelectattrItem) : JadeSelectattrItem).initAttr(table); // item.getChildByName("name_txt").getComponent(Label).string=LangMgr.getLab(tab.AttrType[table.AttrType]);
            // item.getChildByName("now_txt").getComponent(Label).string=table.Base+"";
          }
        }

        initSkilItem() {
          var skills = this.equipInfo.skillList;

          for (var key in skills) {
            var item = instantiate(this.selectAttrItemPrefab);
            item.parent = this.skillNode;
            item.getComponent(_crd && JadeSelectattrItem === void 0 ? (_reportPossibleCrUseOfJadeSelectattrItem({
              error: Error()
            }), JadeSelectattrItem) : JadeSelectattrItem).initSkill(skills[key]); // item.getChildByName("name_txt").getComponent(Label).string=LangMgr.getLab(tab.AttrType[table.AttrType]);
            // item.getChildByName("now_txt").getComponent(Label).string=table.Base+"";
          }
        }

        onClickEquip() {
          var isJadeGuide = Boolean((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.clientData.jadeGuildOver);

          if (!isJadeGuide) {
            (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.setClientData("jadeGuildOver", "true");
          }

          var con = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.getEquipContainerDataByHeroClass(this.heroClass);

          if (con.slotData && con.slotData[this.equipInfo.equipTable.Type] && con.slotData[this.equipInfo.equipTable.Type].equipId > 0) {
            var id = con.slotData[this.equipInfo.equipTable.Type].equipId; // // EquipControl.ins.reqUndressEquip(id, this.equipInfo.heroClass)
            // EquipControl.ins.reqSwitchEquip(id, this.equipInfo.id, this.heroClass, this.equipInfo.heroClass)

            (_crd && EquipControl === void 0 ? (_reportPossibleCrUseOfEquipControl({
              error: Error()
            }), EquipControl) : EquipControl).ins.reqUndressEquip(id, this.heroClass);
          }

          (_crd && EquipControl === void 0 ? (_reportPossibleCrUseOfEquipControl({
            error: Error()
          }), EquipControl) : EquipControl).ins.reqChangEquips(this.heroClass, [this.equipInfo.id]);
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.hideView((_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
            error: Error()
          }), ViewName) : ViewName).JadeSelectPop);
        }

        onClickExchange() {
          var con = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.getEquipContainerDataByHeroClass(this.heroClass);

          if (con.slotData && con.slotData[this.equipInfo.equipTable.Type]) {
            var id = con.slotData[this.equipInfo.equipTable.Type].equipId;
            (_crd && EquipControl === void 0 ? (_reportPossibleCrUseOfEquipControl({
              error: Error()
            }), EquipControl) : EquipControl).ins.reqSwitchEquip(id, this.equipInfo.id, this.heroClass, this.equipInfo.heroClass);
          } else {
            (_crd && EquipControl === void 0 ? (_reportPossibleCrUseOfEquipControl({
              error: Error()
            }), EquipControl) : EquipControl).ins.reqSwitchEquip(0, this.equipInfo.id, this.heroClass, this.equipInfo.heroClass);
          } // EquipControl.ins.reqSwitchEquip(this)
          // EquipControl.ins.reqChangEquips(this.heroClass,[this.equipInfo.id]);


          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.hideView((_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
            error: Error()
          }), ViewName) : ViewName).JadeSelectPop);
        }

        onClickUnEquip() {
          (_crd && EquipControl === void 0 ? (_reportPossibleCrUseOfEquipControl({
            error: Error()
          }), EquipControl) : EquipControl).ins.reqUndressEquip(this.equipInfo.id, this.equipInfo.heroClass);
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.hideView((_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
            error: Error()
          }), ViewName) : ViewName).JadeSelectPop);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemParent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scoreLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "attrNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "skillNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "equipNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "exchangeNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "unequipNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "selectAttrItemPrefab", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "belongNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "heroNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "heroNameLab", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "notNode", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "jadeNode", [_dec15], {
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
//# sourceMappingURL=2f81ebdc74a8a50835d33c7a96db2bf9e5c13dac.js.map