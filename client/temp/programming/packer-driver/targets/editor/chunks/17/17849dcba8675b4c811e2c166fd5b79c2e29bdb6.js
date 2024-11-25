System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "client_protocol", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, ViewPop, ItemInfo, tab, AssociationData, ItemPoolMgr, AssociationControl, proto, EventMgr, RoleData, ShowItemNotEnoughTips, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, AssociationSkillResetPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationData(extras) {
    _reporterNs.report("AssociationData", "./AssociationData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationControl(extras) {
    _reporterNs.report("AssociationControl", "./AssociationControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowItemNotEnoughTips(extras) {
    _reporterNs.report("ShowItemNotEnoughTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      ItemInfo = _unresolved_3.ItemInfo;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      AssociationData = _unresolved_5.AssociationData;
    }, function (_unresolved_6) {
      ItemPoolMgr = _unresolved_6.ItemPoolMgr;
    }, function (_unresolved_7) {
      AssociationControl = _unresolved_7.AssociationControl;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_8) {
      EventMgr = _unresolved_8.EventMgr;
    }, function (_unresolved_9) {
      RoleData = _unresolved_9.RoleData;
    }, function (_unresolved_10) {
      ShowItemNotEnoughTips = _unresolved_10.ShowItemNotEnoughTips;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "af8864BHE1LB7e/FGsrUQHI", "AssociationSkillResetPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AssociationSkillResetPop", AssociationSkillResetPop = (_dec = ccclass('AssociationSkillResetPop'), _dec2 = property(Node), _dec3 = property(Label), _dec(_class = (_class2 = class AssociationSkillResetPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "node_content", _descriptor, this);

          _initializerDefineProperty(this, "lbl_diamond_cost", _descriptor2, this);

          this.curClass = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Assassin;
        }

        onShow() {
          this.curClass = this.openData;
          this.node_content.destroyAllChildren();
          this.lbl_diamond_cost.string = String((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().GuildAttrResetCost);
          const materialMap = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getResetSkillMaterial(this.curClass);
          materialMap.forEach((value, key) => {
            const award = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
              error: Error()
            }), ItemInfo) : ItemInfo)();
            award.itemId = key;
            award.num = value;
            (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.createItem(award, this.node_content);
          });
        }

        onDestroy() {
          super.onDestroy();
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ResetGuildSkillRsp, this.on_s2c_ResetGuildSkillRsp, this);
        }

        unRegister() {
          super.unRegister();
        }
        /* 重置技能 */


        resetGuildSkill() {
          if ((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.diamond < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().GuildAttrResetCost) {
            (_crd && ShowItemNotEnoughTips === void 0 ? (_reportPossibleCrUseOfShowItemNotEnoughTips({
              error: Error()
            }), ShowItemNotEnoughTips) : ShowItemNotEnoughTips)(1);
            return;
          }

          (_crd && AssociationControl === void 0 ? (_reportPossibleCrUseOfAssociationControl({
            error: Error()
          }), AssociationControl) : AssociationControl).ins.reqResetGuildSkill(this.curClass);
        }

        on_s2c_ResetGuildSkillRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          this.onClose();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_content", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbl_diamond_cost", [_dec3], {
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
//# sourceMappingURL=17849dcba8675b4c811e2c166fd5b79c2e29bdb6.js.map