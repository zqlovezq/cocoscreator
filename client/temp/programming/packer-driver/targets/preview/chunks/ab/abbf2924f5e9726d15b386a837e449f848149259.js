System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "client_protocol", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, ItemInfo, ItemPoolMgr, CommonItem, LangMgr, proto, Net, SignInGiftData, AWARD_STATE, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, SignInGiftItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonItem(extras) {
    _reporterNs.report("CommonItem", "../../item/CommonItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSignInGiftData(extras) {
    _reporterNs.report("SignInGiftData", "./SignInGiftData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAWARD_STATE(extras) {
    _reporterNs.report("AWARD_STATE", "../../../../Common/script/EnumTypeMgr", _context.meta, extras);
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
    }, function (_unresolved_2) {
      ItemInfo = _unresolved_2.ItemInfo;
    }, function (_unresolved_3) {
      ItemPoolMgr = _unresolved_3.ItemPoolMgr;
    }, function (_unresolved_4) {
      CommonItem = _unresolved_4.CommonItem;
    }, function (_unresolved_5) {
      LangMgr = _unresolved_5.LangMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_6) {
      Net = _unresolved_6.Net;
    }, function (_unresolved_7) {
      SignInGiftData = _unresolved_7.SignInGiftData;
    }, function (_unresolved_8) {
      AWARD_STATE = _unresolved_8.AWARD_STATE;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "32adajLreBO5pJOsdFefNm/", "SignInGiftItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SignInGiftItem", SignInGiftItem = (_dec = ccclass('SignInGiftItem'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec(_class = (_class2 = class SignInGiftItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "lbl_day", _descriptor, this);

          //时间
          _initializerDefineProperty(this, "node_got", _descriptor2, this);

          _initializerDefineProperty(this, "node_is_big", _descriptor3, this);

          _initializerDefineProperty(this, "node_get", _descriptor4, this);

          _initializerDefineProperty(this, "node_lock", _descriptor5, this);

          _initializerDefineProperty(this, "node_is_special", _descriptor6, this);

          _initializerDefineProperty(this, "node_reward", _descriptor7, this);

          this.signData = null;
        }

        initData(data) {
          this.signData = data;
          var info = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
            error: Error()
          }), ItemInfo) : ItemInfo)();
          info.itemId = data.ItemId;
          info.num = data.ItemCount;
          var itemItem = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
            error: Error()
          }), ItemPoolMgr) : ItemPoolMgr).ins.createItem(info, this.node_reward);
          var itemTs = itemItem.getComponent(_crd && CommonItem === void 0 ? (_reportPossibleCrUseOfCommonItem({
            error: Error()
          }), CommonItem) : CommonItem);
          var signState = (_crd && SignInGiftData === void 0 ? (_reportPossibleCrUseOfSignInGiftData({
            error: Error()
          }), SignInGiftData) : SignInGiftData).ins.getSignState(data.Day);
          itemTs.setTouchCallBack(null);

          if (signState === (_crd && AWARD_STATE === void 0 ? (_reportPossibleCrUseOfAWARD_STATE({
            error: Error()
          }), AWARD_STATE) : AWARD_STATE).RECEIVE) {
            itemTs.setTouchCallBack(() => {
              this.sendMsg();
            });
          }

          this.lbl_day.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("ui_commondesc_72", [data.Day]);
          this.node_is_special.active = data.IsGrand;
          this.node_is_big.active = data.IsGrand;
          this.node_got.active = signState == (_crd && AWARD_STATE === void 0 ? (_reportPossibleCrUseOfAWARD_STATE({
            error: Error()
          }), AWARD_STATE) : AWARD_STATE).GOT;
          this.node_get.active = signState == (_crd && AWARD_STATE === void 0 ? (_reportPossibleCrUseOfAWARD_STATE({
            error: Error()
          }), AWARD_STATE) : AWARD_STATE).RECEIVE;
          this.node_lock.active = signState == (_crd && AWARD_STATE === void 0 ? (_reportPossibleCrUseOfAWARD_STATE({
            error: Error()
          }), AWARD_STATE) : AWARD_STATE).LOCK;
        }

        sendMsg() {
          var sign_msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_ReceiveSignInGiftReq();
          sign_msg.days = [this.signData.Day];
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveSignInGiftReq, sign_msg);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbl_day", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_got", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_is_big", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_get", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_lock", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_is_special", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_reward", [_dec8], {
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
//# sourceMappingURL=abbf2924f5e9726d15b386a837e449f848149259.js.map