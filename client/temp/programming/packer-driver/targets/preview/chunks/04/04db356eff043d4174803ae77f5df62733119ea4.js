System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, ViewPop, ChannelMgr, LoginData, RoleData, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, CommunityPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannelMgr(extras) {
    _reporterNs.report("ChannelMgr", "../../../channel/ChannelMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginData(extras) {
    _reporterNs.report("LoginData", "../login/LoginData", _context.meta, extras);
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
      Node = _cc.Node;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      ChannelMgr = _unresolved_3.ChannelMgr;
    }, function (_unresolved_4) {
      LoginData = _unresolved_4.LoginData;
    }, function (_unresolved_5) {
      RoleData = _unresolved_5.RoleData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "874cct45CJAJbh5lomKO4/L", "CommunityPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * CommunityPop
       * zhudingchao
       * Thu Aug 15 2024 14:11:25 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/home/CommunityPop.ts
       *
       */

      _export("CommunityPop", CommunityPop = (_dec = ccclass('CommunityPop'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class CommunityPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "shareNode", _descriptor, this);

          _initializerDefineProperty(this, "taskNode", _descriptor2, this);

          this.currType = 1;
        }

        register() {}

        onShow() {}

        onClickToggle(event, type) {
          type = Number(type);

          if (this.currType != type) {
            this.currType = type;
            this.shareNode.active = this.currType == 2;
            this.taskNode.active = this.currType == 1;
          }
        }

        onClickFaceBook() {
          console.log("js调用打开网页");

          if ((_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).channelTab) {
            (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
              error: Error()
            }), ChannelMgr) : ChannelMgr).openURL((_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
              error: Error()
            }), ChannelMgr) : ChannelMgr).channelTab.FaceBookUrl);
          } else {
            (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
              error: Error()
            }), ChannelMgr) : ChannelMgr).openURL("https://www.facebook.com/cjxd.re.tw/");
          }
        }

        onClickDiscord() {}

        onClickShare() {
          console.log("js调用分享");
          var t_obj = {};
          t_obj.roleID = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.id;
          t_obj.serverID = (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
            error: Error()
          }), LoginData) : LoginData).ins.default_area; //sdk需要是逻辑服id

          t_obj.url = "";
          (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).share(t_obj, retData => {
            console.log("################ share " + JSON.stringify(retData));

            if (retData.code == 0) {// this.testLoopTask();
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "shareNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "taskNode", [_dec3], {
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
//# sourceMappingURL=04db356eff043d4174803ae77f5df62733119ea4.js.map