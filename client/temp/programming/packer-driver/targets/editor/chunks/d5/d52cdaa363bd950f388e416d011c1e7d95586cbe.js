System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "client_protocol", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, Sprite, tab, LangMgr, proto, Net, ShowItemNotEnoughTips, ItemData, RoleData, GameUtil, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, TalentBigTipsPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowItemNotEnoughTips(extras) {
    _reporterNs.report("ShowItemNotEnoughTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../utils/GameUtil", _context.meta, extras);
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
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      LangMgr = _unresolved_3.LangMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_4) {
      Net = _unresolved_4.Net;
    }, function (_unresolved_5) {
      ShowItemNotEnoughTips = _unresolved_5.ShowItemNotEnoughTips;
    }, function (_unresolved_6) {
      ItemData = _unresolved_6.ItemData;
    }, function (_unresolved_7) {
      RoleData = _unresolved_7.RoleData;
    }, function (_unresolved_8) {
      GameUtil = _unresolved_8.GameUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "20542kPtGlCV4am57dBccma", "TalentBigTipsPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TalentBigTipsPop", TalentBigTipsPop = (_dec = ccclass('TalentBigTipsPop'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Sprite), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec(_class = (_class2 = class TalentBigTipsPop extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "lbl_name", _descriptor, this);

          _initializerDefineProperty(this, "lbl_value", _descriptor2, this);

          _initializerDefineProperty(this, "lbl_lock_level", _descriptor3, this);

          _initializerDefineProperty(this, "lbl_gold", _descriptor4, this);

          _initializerDefineProperty(this, "sp_gold", _descriptor5, this);

          _initializerDefineProperty(this, "node_learn", _descriptor6, this);

          _initializerDefineProperty(this, "lock_node", _descriptor7, this);

          _initializerDefineProperty(this, "lock_before_node", _descriptor8, this);

          _initializerDefineProperty(this, "unlock_node", _descriptor9, this);

          this._talentData = null;
        }

        setData(data) {
          this._talentData = data;
          this.node.active = true;
          const equipSkillTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().EquipSkillTableById.getValue(data.AttrValue);
          const ItemData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(data.MaterialIdList[0]);
          this.lbl_name.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(equipSkillTab.SkillName);
          this.lbl_value.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(equipSkillTab.SkillDesc);
          this.lbl_gold.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).convertNumber(data.MaterialCountList[0], true);
          this.sp_gold.setTexture(ItemData.Icon);
          this.node_learn.active = false;
          this.lock_before_node.active = false;
          this.lock_node.active = false;
          this.unlock_node.active = false; // 获取当前的level

          const bigLevel = 10000 + (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.gene.bigGeneLevel;
          const smallLevel = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.gene.smallGeneLevel;

          if (smallLevel >= this._talentData.UnlockArgs) {
            if (this._talentData.Id == bigLevel + 1) {
              this.node_learn.active = true;
            } else if (this._talentData.Id < bigLevel + 1) {
              this.unlock_node.active = true;
            } else {
              this.lock_before_node.active = true;
            }
          } else {
            this.lock_node.active = true;
          }
        }

        clickBtn() {
          const needGeneRes = this._talentData.MaterialCountList[0];
          const haveCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount(this._talentData.MaterialIdList[0]);

          if (haveCount < needGeneRes) {
            (_crd && ShowItemNotEnoughTips === void 0 ? (_reportPossibleCrUseOfShowItemNotEnoughTips({
              error: Error()
            }), ShowItemNotEnoughTips) : ShowItemNotEnoughTips)(this._talentData.MaterialIdList[0]);
            return;
          }

          this.node.active = false;
          let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_UpgradeGeneLevelReq();
          msg.type = this._talentData.Type;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpgradeGeneLevelReq, msg);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbl_name", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbl_value", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbl_lock_level", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lbl_gold", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sp_gold", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_learn", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lock_node", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lock_before_node", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "unlock_node", [_dec10], {
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
//# sourceMappingURL=d52cdaa363bd950f388e416d011c1e7d95586cbe.js.map