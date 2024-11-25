System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "client_protocol", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Node, Prefab, ScrollView, Vec2, ViewPop, tab, SignInGiftItem, EventMgr, proto, SignInGiftData, UIMgr, ViewName, RedMgr, RedDotType, LocalEvent, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, SignInGiftPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSignInGiftItem(extras) {
    _reporterNs.report("SignInGiftItem", "./SignInGiftItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSignInGiftData(extras) {
    _reporterNs.report("SignInGiftData", "./SignInGiftData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../../define/LocalEvent", _context.meta, extras);
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
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      ScrollView = _cc.ScrollView;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      SignInGiftItem = _unresolved_4.SignInGiftItem;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_6) {
      SignInGiftData = _unresolved_6.SignInGiftData;
    }, function (_unresolved_7) {
      UIMgr = _unresolved_7.UIMgr;
    }, function (_unresolved_8) {
      ViewName = _unresolved_8.ViewName;
    }, function (_unresolved_9) {
      RedMgr = _unresolved_9.RedMgr;
    }, function (_unresolved_10) {
      RedDotType = _unresolved_10.RedDotType;
    }, function (_unresolved_11) {
      LocalEvent = _unresolved_11.LocalEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cb48baVnytAWZ1aLdQWygvk", "SignInGiftPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab', 'ScrollView', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SignInGiftPop", SignInGiftPop = (_dec = ccclass('SignInGiftPop'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(ScrollView), _dec(_class = (_class2 = class SignInGiftPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pfb_item", _descriptor, this);

          _initializerDefineProperty(this, "node_content", _descriptor2, this);

          _initializerDefineProperty(this, "scroll_view", _descriptor3, this);
        }

        onShow() {
          for (var i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().SignInGiftTable.length; i++) {
            var signTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().SignInGiftTable[i];
            var item = instantiate(this.pfb_item);
            this.node_content.addChild(item);
            item.name = String(signTab.Day);
            var itemTs = item.getComponent(_crd && SignInGiftItem === void 0 ? (_reportPossibleCrUseOfSignInGiftItem({
              error: Error()
            }), SignInGiftItem) : SignInGiftItem);
            itemTs.initData(signTab);
          }

          this.scrollToReward();
        }

        onDestroy() {
          super.onDestroy();
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveSignInGiftRsp, this.on_s2c_ReceiveSignInGiftRsp, this);
        }

        unRegister() {
          super.unRegister();
        }

        on_s2c_ReceiveSignInGiftRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          (_crd && SignInGiftData === void 0 ? (_reportPossibleCrUseOfSignInGiftData({
            error: Error()
          }), SignInGiftData) : SignInGiftData).ins.receiveGift(msg.days);
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).CongratulationPop,
            data: msg.rewards
          });

          for (var i = 0; i < msg.days.length; i++) {
            var day = msg.days[i];
            var item = this.node_content.getChildByName(String(day));
            var itemTs = item.getComponent(_crd && SignInGiftItem === void 0 ? (_reportPossibleCrUseOfSignInGiftItem({
              error: Error()
            }), SignInGiftItem) : SignInGiftItem);
            var signTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().SignInGiftTableByDay.getValue(day);
            itemTs.initData(signTab);
          }

          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).SignGiftRed);
        }

        scrollToReward() {
          var signTab = (_crd && SignInGiftData === void 0 ? (_reportPossibleCrUseOfSignInGiftData({
            error: Error()
          }), SignInGiftData) : SignInGiftData).ins.getNotGetData();

          if (signTab) {
            var maxLen = Math.ceil((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().SignInGiftTable.length / 5);
            var curLen = Math.floor((signTab.Day - 1) / 5);

            if (curLen === maxLen - 1) {
              this.scroll_view.scrollTo(new Vec2(0, 0), 0.2);
            } else {
              this.scroll_view.scrollTo(new Vec2(0, 1 - curLen / maxLen), 0.2);
            }
          }
        }

        onClose() {
          super.onClose();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).LocalMsg_QueueUI_deleteUI);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pfb_item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scroll_view", [_dec4], {
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
//# sourceMappingURL=387d2e301f47400419113f7ec19d8a0edfb5fd86.js.map