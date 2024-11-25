System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "client_protocol", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Prefab, ViewPop, tab, LangMgr, ResourceBuyItem, EventMgr, proto, UIMgr, ViewName, SettingRedManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, ResourceBuyPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourceBuyItem(extras) {
    _reporterNs.report("ResourceBuyItem", "./ResourceBuyItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSettingRedManager(extras) {
    _reporterNs.report("SettingRedManager", "../role/SettingRedManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      LangMgr = _unresolved_4.LangMgr;
    }, function (_unresolved_5) {
      ResourceBuyItem = _unresolved_5.ResourceBuyItem;
    }, function (_unresolved_6) {
      EventMgr = _unresolved_6.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_7) {
      UIMgr = _unresolved_7.UIMgr;
    }, function (_unresolved_8) {
      ViewName = _unresolved_8.ViewName;
    }, function (_unresolved_9) {
      SettingRedManager = _unresolved_9.SettingRedManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5014c9e4cRIFK/LMrtQhH5C", "ResourceBuyPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * ResourceBuyPop
       * zhudingchao
       * Mon Jun 17 2024 13:52:15 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/common/ResourceBuyPop.ts
       *
       */

      _export("ResourceBuyPop", ResourceBuyPop = (_dec = ccclass('ResourceBuyPop'), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Node), _dec(_class = (_class2 = class ResourceBuyPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "resLayoutNode", _descriptor, this);

          _initializerDefineProperty(this, "resBuyPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "titleLab", _descriptor3, this);

          _initializerDefineProperty(this, "node_energy", _descriptor4, this);

          _initializerDefineProperty(this, "node_common", _descriptor5, this);

          _initializerDefineProperty(this, "lbl_common", _descriptor6, this);

          _initializerDefineProperty(this, "node_common_layout", _descriptor7, this);

          this.itemId = void 0;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.BuyStaminaRsp, this.on_s2c_BuyStaminaRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.BuyGoldRsp, this.on_s2c_BuyGoldRsp, this);
        }

        onShow() {
          if (this.openData && this.openData["itemId"]) {
            this.itemId = this.openData["itemId"];
            this.initView();
          }
        }

        onClose() {
          super.onClose();

          if (this.itemId == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).CurrencyType.CurrencyType_Stamina) {
            if (!(_crd && SettingRedManager === void 0 ? (_reportPossibleCrUseOfSettingRedManager({
              error: Error()
            }), SettingRedManager) : SettingRedManager).ins.getSetting("RedStamina")) {
              (_crd && SettingRedManager === void 0 ? (_reportPossibleCrUseOfSettingRedManager({
                error: Error()
              }), SettingRedManager) : SettingRedManager).ins.setSetting("RedStamina", true);
            }
          } else if (this.itemId === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).CurrencyType.CurrencyType_Gold) {
            if (!(_crd && SettingRedManager === void 0 ? (_reportPossibleCrUseOfSettingRedManager({
              error: Error()
            }), SettingRedManager) : SettingRedManager).ins.getSetting("GoldBuy")) {
              (_crd && SettingRedManager === void 0 ? (_reportPossibleCrUseOfSettingRedManager({
                error: Error()
              }), SettingRedManager) : SettingRedManager).ins.setSetting("GoldBuy", true);
            }
          }
        }

        initView() {
          var itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(this.itemId); //this.titleLab.string="购买"+LangMgr.getLab(itemTab.Name);

          this.titleLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("ui_commondesc_91", [(_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(itemTab.Name)]);
          this.lbl_common.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("ui_commondesc_91", [(_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(itemTab.Name)]);
          this.node_energy.active = this.itemId == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).CurrencyType.CurrencyType_Stamina;
          this.node_common.active = !this.node_energy.active;

          if (this.itemId == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).CurrencyType.CurrencyType_Stamina) {
            this.initStaminaView();
          } else if (this.itemId === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).CurrencyType.CurrencyType_Gold) {
            this.initGoldView();
          }
        }

        initStaminaView() {
          this.resLayoutNode.destroyAllChildren();
          var aDTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BuyStaminaTableByType.getValue((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BuyStaminaType.BuyStaminaType_WatchAdverts);
          var currTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BuyStaminaTableByType.getValue((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BuyStaminaType.BuyStaminaType_UseCurrency);
          var item = instantiate(this.resBuyPrefab);
          item.parent = this.resLayoutNode;
          item.getComponent(_crd && ResourceBuyItem === void 0 ? (_reportPossibleCrUseOfResourceBuyItem({
            error: Error()
          }), ResourceBuyItem) : ResourceBuyItem).initEnergyView(aDTable);
          var item2 = instantiate(this.resBuyPrefab);
          item2.parent = this.resLayoutNode;
          item2.getComponent(_crd && ResourceBuyItem === void 0 ? (_reportPossibleCrUseOfResourceBuyItem({
            error: Error()
          }), ResourceBuyItem) : ResourceBuyItem).initEnergyView(currTable);
        }

        initGoldView() {
          this.node_common_layout.destroyAllChildren();
          (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BuyGoldTable.forEach((value, key) => {
            var item = instantiate(this.resBuyPrefab);
            item.parent = this.node_common_layout;
            item.getComponent(_crd && ResourceBuyItem === void 0 ? (_reportPossibleCrUseOfResourceBuyItem({
              error: Error()
            }), ResourceBuyItem) : ResourceBuyItem).initGoldView(value);
          });
        } // 请求购买体力返回


        on_s2c_BuyStaminaRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).CongratulationPop,
              data: msg.rewards
            });
            this.initStaminaView();
          }
        }

        on_s2c_BuyGoldRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).CongratulationPop,
              data: msg.items
            });
            this.initGoldView();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "resLayoutNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "resBuyPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "titleLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_energy", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_common", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lbl_common", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_common_layout", [_dec8], {
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
//# sourceMappingURL=4592b5cafcd0523540390f2f00f950f20e266fd2.js.map