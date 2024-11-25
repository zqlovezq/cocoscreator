System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, log, Node, LangMgr, LoginData, CommonTipsPop, CommonTipsPopCloseType, Net, LoginControl, ChannelMgr, RoleData, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, ServerChooseItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginData(extras) {
    _reporterNs.report("LoginData", "../login/LoginData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTipsPop(extras) {
    _reporterNs.report("CommonTipsPop", "./CommonTipsPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTipsPopCloseType(extras) {
    _reporterNs.report("CommonTipsPopCloseType", "./CommonTipsPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginControl(extras) {
    _reporterNs.report("LoginControl", "../login/LoginControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannelMgr(extras) {
    _reporterNs.report("ChannelMgr", "../../../channel/ChannelMgr", _context.meta, extras);
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
      Label = _cc.Label;
      log = _cc.log;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      LangMgr = _unresolved_2.LangMgr;
    }, function (_unresolved_3) {
      LoginData = _unresolved_3.LoginData;
    }, function (_unresolved_4) {
      CommonTipsPop = _unresolved_4.CommonTipsPop;
      CommonTipsPopCloseType = _unresolved_4.CommonTipsPopCloseType;
    }, function (_unresolved_5) {
      Net = _unresolved_5.Net;
    }, function (_unresolved_6) {
      LoginControl = _unresolved_6.LoginControl;
    }, function (_unresolved_7) {
      ChannelMgr = _unresolved_7.ChannelMgr;
    }, function (_unresolved_8) {
      RoleData = _unresolved_8.RoleData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2c0ber3lyRIs7jYJpJyTHYz", "ServerChooseItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'log', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * ServerChooseItem
       * zhudingchao
       * Wed Aug 07 2024 15:22:19 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/common/ServerChooseItem.ts
       *
       */

      _export("ServerChooseItem", ServerChooseItem = (_dec = ccclass('ServerChooseItem'), _dec2 = property([Node]), _dec3 = property(Label), _dec4 = property(Label), _dec(_class = (_class2 = class ServerChooseItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "stateNodes", _descriptor, this);

          _initializerDefineProperty(this, "levelLab", _descriptor2, this);

          _initializerDefineProperty(this, "nameLab", _descriptor3, this);

          this.serverData = null;
        }

        initData(serverData) {
          this.serverData = serverData;
          this.nameLab.string = serverData["name"] || (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("ui_chat_1", [1]);

          if (serverData["role_level"]) {
            this.levelLab.node.active = true;
            this.levelLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_heroresonancepop_3", [serverData["role_level"]]);
          } else {
            this.levelLab.node.active = false;
          }

          for (let key in this.stateNodes) {
            this.stateNodes[key].active = false;
          }

          this.stateNodes[serverData["status"]].active = true;
        }

        onTcouhItem() {
          if ((_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
            error: Error()
          }), LoginData) : LoginData).ins.default_area != this.serverData["id"]) {
            log("切换选服========");
            (_crd && CommonTipsPop === void 0 ? (_reportPossibleCrUseOfCommonTipsPop({
              error: Error()
            }), CommonTipsPop) : CommonTipsPop).create((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_server_1"), closeType => {
              if (closeType == (_crd && CommonTipsPopCloseType === void 0 ? (_reportPossibleCrUseOfCommonTipsPopCloseType({
                error: Error()
              }), CommonTipsPopCloseType) : CommonTipsPopCloseType).confirm) {
                (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
                  error: Error()
                }), LoginData) : LoginData).ins.default_area = this.serverData["id"];
                (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
                  error: Error()
                }), LoginData) : LoginData).ins.default_area_name = this.serverData["name"];
                (_crd && LoginControl === void 0 ? (_reportPossibleCrUseOfLoginControl({
                  error: Error()
                }), LoginControl) : LoginControl).ins.isChangeServer = true;
                (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
                  error: Error()
                }), ChannelMgr) : ChannelMgr).roleLogoutServer((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                  error: Error()
                }), RoleData) : RoleData).ins.sdkRole());
                (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
                  error: Error()
                }), Net) : Net).Disconnect(); // SceneMgr.ins.loadScene(ScenesName.login)
                // console.log("ok")
                // MailControl.ins.requestDeleteMails(ids);
              } else {
                console.log("cancel");
              }
            });
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "stateNodes", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "levelLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec4], {
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
//# sourceMappingURL=05c3afa2db546536d891ddba661d6e9a795fc70e.js.map