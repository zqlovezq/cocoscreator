System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "client_protocol", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, EditBox, Label, Sprite, ViewPop, RoleData, ItemData, proto, Net, tab, ShowItemNotEnoughTips, ShowTips, isChEngNumber, LangMgr, SensitiveWordsManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, RoleInfoChangeNamePop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowItemNotEnoughTips(extras) {
    _reporterNs.report("ShowItemNotEnoughTips", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisChEngNumber(extras) {
    _reporterNs.report("isChEngNumber", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSensitiveWordsManager(extras) {
    _reporterNs.report("SensitiveWordsManager", "../../../utils/SensitiveWordsManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      EditBox = _cc.EditBox;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      RoleData = _unresolved_3.RoleData;
    }, function (_unresolved_4) {
      ItemData = _unresolved_4.ItemData;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_5) {
      Net = _unresolved_5.Net;
    }, function (_unresolved_6) {
      tab = _unresolved_6.tab;
    }, function (_unresolved_7) {
      ShowItemNotEnoughTips = _unresolved_7.ShowItemNotEnoughTips;
      ShowTips = _unresolved_7.ShowTips;
    }, function (_unresolved_8) {
      isChEngNumber = _unresolved_8.isChEngNumber;
    }, function (_unresolved_9) {
      LangMgr = _unresolved_9.LangMgr;
    }, function (_unresolved_10) {
      SensitiveWordsManager = _unresolved_10.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9c787C9N2BNJ7cJ6Hf4mPj8", "RoleInfoChangeNamePop", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'EditBox', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RoleInfoChangeNamePop", RoleInfoChangeNamePop = (_dec = ccclass('RoleInfoChangeNamePop'), _dec2 = property({
        displayName: "输入名字",
        type: EditBox
      }), _dec3 = property(Sprite), _dec4 = property(Button), _dec5 = property(Label), _dec6 = property(Button), _dec7 = property(Button), _dec(_class = (_class2 = class RoleInfoChangeNamePop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "r_name", _descriptor, this);

          _initializerDefineProperty(this, "sp_diamond", _descriptor2, this);

          _initializerDefineProperty(this, "btn_cost", _descriptor3, this);

          _initializerDefineProperty(this, "lbl_cost_diamond", _descriptor4, this);

          _initializerDefineProperty(this, "btn_free", _descriptor5, this);

          _initializerDefineProperty(this, "btn_close", _descriptor6, this);
        }

        onShow() {
          const changeNameConfig = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().ChangeNameCost;
          this.btn_cost.node.active = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.changeNameTimes > 0;
          this.btn_free.node.active = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.changeNameTimes === 0;
          this.btn_cost.node.on("click", () => {
            this.onClickOk();
          }, this);
          this.btn_free.node.on("click", () => {
            this.onClickOk();
          }, this);
          const itemTab = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getByItemId(1).itemTable;
          this.sp_diamond.setTexture(itemTab.Icon);
          this.lbl_cost_diamond.string = String(changeNameConfig[(_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.changeNameTimes >= 2 ? 2 : (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.changeNameTimes]);
        }

        onClickOk() {
          const changeNameConfig = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().ChangeNameCost;
          const needDiamond = changeNameConfig[(_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.changeNameTimes >= 2 ? 2 : (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.changeNameTimes];

          if (this.btn_cost.node.active && (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.diamond < needDiamond) {
            (_crd && ShowItemNotEnoughTips === void 0 ? (_reportPossibleCrUseOfShowItemNotEnoughTips({
              error: Error()
            }), ShowItemNotEnoughTips) : ShowItemNotEnoughTips)(1);
            return;
          }

          if (!(_crd && isChEngNumber === void 0 ? (_reportPossibleCrUseOfisChEngNumber({
            error: Error()
          }), isChEngNumber) : isChEngNumber)(this.r_name.string)) {
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_changename_1"));
            return;
          }

          if (!(_crd && SensitiveWordsManager === void 0 ? (_reportPossibleCrUseOfSensitiveWordsManager({
            error: Error()
          }), SensitiveWordsManager) : SensitiveWordsManager).ins.check(this.r_name.string)) {
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_changename_1"));
            return;
          }

          let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_ChangeRoleNameReq();
          msg.name = this.r_name.string;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ChangeRoleNameReq, msg);
        }

        endedEditBox() {
          this.cutoutNameLen();
        }

        cutoutNameLen() {
          let name = this.r_name.string;
          let bOverLimit = name.length > 7;

          if (bOverLimit) {
            name = name.substr(0, 7);
            this.r_name.string = name;
          }
        }

        deleteSpecialStr() {
          let name = this.r_name.string;
          let idx = name.indexOf("_", 0);

          if (idx != -1) {
            name = name.substring(idx + 0);
          }

          this.r_name.string = name;
        }

        disposeRandomName() {
          this.setSysName();
        }

        setSysName() {
          this.r_name.string = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.name;
          this.cutoutNameLen();
        }

        onDestroy() {
          super.onDestroy();
        }

        register() {}

        unRegister() {
          super.unRegister();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "r_name", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sp_diamond", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btn_cost", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lbl_cost_diamond", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btn_free", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btn_close", [_dec7], {
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
//# sourceMappingURL=04a4e26fef01d117a66fde55648236d3d4abe6e2.js.map