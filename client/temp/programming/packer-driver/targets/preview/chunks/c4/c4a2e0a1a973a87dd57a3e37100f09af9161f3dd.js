System.register(["__unresolved_0", "cc", "client_protocol"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, proto, _dec, _class, _crd, ccclass, property, SimpleRoleInfo;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "09a337FHnhEr7fQrwpm9ZGM", "SimpleRoleInfo", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * SimpleRoleInfo
       * zhudingchao
       * Fri Jun 07 2024 14:30:20 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/friends/FriendInfo.ts
       *
       */

      _export("SimpleRoleInfo", SimpleRoleInfo = (_dec = ccclass('FriendInfo'), _dec(_class = class SimpleRoleInfo extends (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto).SimpleRole {
        constructor() {
          super(...arguments);
          this._isSendAddFrined = false;
          this._type = -1;
          this._isGiveGift = false;
          this._receiveGiftState = 0;
        }

        merge(item) {
          for (var key in item) {
            this[key] = item[key];
          }
        }
        /**
         * 是否发送添加好友申请
         * 本地缓存记录
         */


        get isSendAddFrined() {
          return this._isSendAddFrined;
        }

        set isSendAddFrined(b) {
          this._isSendAddFrined = b;
        }

        set type(t) {
          this._type = t;
        }

        get type() {
          return this._type;
        }
        /**
        * 是否赠与了礼物
        */


        get isGiveGift() {
          return this._isGiveGift;
        }

        set isGiveGift(b) {
          this._isGiveGift = b;
        }
        /**收取礼物状态 0表示未收到 1表示收到未领取 2表示已领取 */


        get receiveGiftState() {
          return this._receiveGiftState;
        }

        set receiveGiftState(n) {
          this._receiveGiftState = n;
        }
        /**
         * 是否好友
         */


        get isMyFriend() {
          return this.type == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.FriendList;
        }
        /**
         * 是否在申请列表里
         */


        get isApplyList() {
          return this.type == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.ApplyList;
        }
        /**
         * 是否在黑名单里
         */


        get isBlackList() {
          return this.type == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.BlackList;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c4a2e0a1a973a87dd57a3e37100f09af9161f3dd.js.map