System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "client_protocol", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsControl, EventMgr, proto, Net, FriendData, RedMgr, RedDotType, _dec, _class, _class2, _crd, ccclass, property, FriendControl;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFriendData(extras) {
    _reporterNs.report("FriendData", "./FriendData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AbsControl = _unresolved_2.AbsControl;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_4) {
      Net = _unresolved_4.Net;
    }, function (_unresolved_5) {
      FriendData = _unresolved_5.FriendData;
    }, function (_unresolved_6) {
      RedMgr = _unresolved_6.RedMgr;
    }, function (_unresolved_7) {
      RedDotType = _unresolved_7.RedDotType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1b3fca8dptHKISJtK+Rt5QE", "FriendControl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'log', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * FriendControl
       * zhudingchao
       * Fri Jun 07 2024 11:11:38 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/friends/FriendControl.ts
       *
       */

      _export("FriendControl", FriendControl = (_dec = ccclass('FriendControl'), _dec(_class = (_class2 = class FriendControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        constructor() {
          super(...arguments);
          this.currType = void 0;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new FriendControl();
          }

          return this._instance;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetFriendSimpleRoleRsp, this.on_s2c_GetFriendSimpleRoleRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.AddFriendPush, this.on_s2c_AddFriendPush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.RemoveFriendPush, this.on_s2c_RemoveFriendPush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpdateFriendOnlineTime, this.on_s2c_UpdateFriendOnlineTime, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpdatFriendPowerScore, this.on_s2c_UpdatFriendPowerScore, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.AddBlacklistRsp, this.on_s2c_Msg_AddBlacklistRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.RemoveBlacklistRsp, this.on_s2c_RemoveBlacklistRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.AddFriendRsp, this.on_s2c_AddFriendRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ConfirmFriendRsp, this.on_s2c_ConfirmFriendRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.RemoveFriendRsp, this.on_s2c_RemoveFriendRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.RemoveFriendApplyRsp, this.on_s2c_RemoveFriendApplyRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.RecommendFriendRsp, this.on_s2c_RecommendFriendRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.FindFriendRsp, this.on_s2c_FindFriendRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.RecvGiftRsp, this.on_s2c_RecvGiftRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GivingGiftRsp, this.on_s2c_GivingGiftRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.SyncGiftList, this.on_s2c_SyncGiftList, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GiftPush, this.on_s2c_GiftPush, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).FriendApply, this.red_FriendApply, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).FriendValueReceive, this.red_FriendValueReceive, this);
        }

        request() {
          this.requestGetFriendSimpleRole((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FriendListType.FriendList); // this.requestGetFriendSimpleRole(proto.FriendListType.ApplyList);
        }

        requestGetFriendSimpleRole(type) {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetFriendSimpleRoleReq();
          msg.type = type;
          this.currType = type;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetFriendSimpleRoleReq, msg);
        }

        requestRecommendFriend() {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_RecommendFriendReq();
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.RecommendFriendReq, msg);
        }

        requestAddFriend(roleId) {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_AddFriendReq();
          msg.roleId = roleId;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.AddFriendReq, msg);
        }

        requestConfirmFriend(roleIds) {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_ConfirmFriendReq();
          msg.roleId = roleIds;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ConfirmFriendReq, msg);
        }

        requestRemoveFriend(roleId) {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_RemoveFriendReq();
          msg.roleId = roleId;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.RemoveFriendReq, msg);
        }

        requestRemoveFriendApply(roleIds) {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_RemoveFriendApplyReq();
          msg.roleId = roleIds;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.RemoveFriendApplyReq, msg);
        }

        requestAddBlacklist(roleId) {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_AddBlacklistReq();
          msg.roleId = roleId;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.AddBlacklistReq, msg);
        }

        requestRemoveBlacklist(roleId) {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_RemoveBlacklistReq();
          msg.roleId = roleId;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.RemoveBlacklistReq, msg);
        }

        requestFindFriend(name) {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_FindFriendReq();
          msg.name = name;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.FindFriendReq, msg);
        }

        requestRecvGift(roleIds) {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_RecvGiftReq();
          msg.roleId = roleIds;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.RecvGiftReq, msg);
        }

        requestGivingGift(roleIds) {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GivingGiftReq();
          msg.roleId = roleIds;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GivingGiftReq, msg);
        }

        on_s2c_GetFriendSimpleRoleRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            (_crd && FriendData === void 0 ? (_reportPossibleCrUseOfFriendData({
              error: Error()
            }), FriendData) : FriendData).ins.initFrendData(msg);

            if (msg.type == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).FriendListType.FriendList) {
              if (!(_crd && FriendData === void 0 ? (_reportPossibleCrUseOfFriendData({
                error: Error()
              }), FriendData) : FriendData).ins.isInitApply) {
                this.requestGetFriendSimpleRole((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).FriendListType.ApplyList);
              }
            }
          } else if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.TryAgainLater) {
            if (this.currType == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).FriendListType.FriendList) {
              setTimeout(() => {
                this.requestGetFriendSimpleRole((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).FriendListType.FriendList);
              }, 1000);
            } else if (this.currType == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).FriendListType.ApplyList) {
              setTimeout(() => {
                this.requestGetFriendSimpleRole((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).FriendListType.ApplyList);
              }, 1000);
            }
          }
        }

        on_s2c_AddFriendPush(msg) {
          (_crd && FriendData === void 0 ? (_reportPossibleCrUseOfFriendData({
            error: Error()
          }), FriendData) : FriendData).ins.addFriendInfo(msg);
        }

        on_s2c_RemoveFriendPush(msg) {
          (_crd && FriendData === void 0 ? (_reportPossibleCrUseOfFriendData({
            error: Error()
          }), FriendData) : FriendData).ins.removeFiendInfo(msg);
        }

        on_s2c_UpdateFriendOnlineTime(msg) {
          (_crd && FriendData === void 0 ? (_reportPossibleCrUseOfFriendData({
            error: Error()
          }), FriendData) : FriendData).ins.updateFriendOnlineTime(msg);
        }

        on_s2c_UpdatFriendPowerScore(msg) {
          (_crd && FriendData === void 0 ? (_reportPossibleCrUseOfFriendData({
            error: Error()
          }), FriendData) : FriendData).ins.updatFriendPowerScore(msg);
        }

        on_s2c_Msg_AddBlacklistRsp(msg) {}

        on_s2c_RemoveBlacklistRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {}
        }

        on_s2c_AddFriendRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {}
        }

        on_s2c_ConfirmFriendRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {}
        }

        on_s2c_RemoveFriendApplyRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {}
        }

        on_s2c_RemoveFriendRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {}
        }

        on_s2c_RecommendFriendRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            (_crd && FriendData === void 0 ? (_reportPossibleCrUseOfFriendData({
              error: Error()
            }), FriendData) : FriendData).ins.initRecommendFriendData(msg.list);
          }
        }

        on_s2c_FindFriendRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {}
        }
        /**
         * 同步礼物数据
         * @param msg 
         */


        on_s2c_SyncGiftList(msg) {
          (_crd && FriendData === void 0 ? (_reportPossibleCrUseOfFriendData({
            error: Error()
          }), FriendData) : FriendData).ins.giftListMsg = msg;

          if (msg.giftList[0]) {
            (_crd && FriendData === void 0 ? (_reportPossibleCrUseOfFriendData({
              error: Error()
            }), FriendData) : FriendData).ins.giftPush(msg.giftList[0]);
          }

          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).FriendValueReceive);
        }
        /**
         * 同步送礼数据
         * @param msg 
         */


        on_s2c_GiftPush(msg) {
          (_crd && FriendData === void 0 ? (_reportPossibleCrUseOfFriendData({
            error: Error()
          }), FriendData) : FriendData).ins.giftPush(msg.roleId);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).FriendValueReceive);
        }
        /**
        * 收取礼物返回
        * @param msg 
        */


        on_s2c_RecvGiftRsp(msg) {
          (_crd && FriendData === void 0 ? (_reportPossibleCrUseOfFriendData({
            error: Error()
          }), FriendData) : FriendData).ins.receiveGiftSucc(msg.result);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).FriendValueReceive);
        }
        /**
        * 赠与礼物返回
        * @param msg 
        */


        on_s2c_GivingGiftRsp(msg) {
          (_crd && FriendData === void 0 ? (_reportPossibleCrUseOfFriendData({
            error: Error()
          }), FriendData) : FriendData).ins.givingGiftSucc(msg.roleId);
        }

        red_FriendApply() {
          var list = (_crd && FriendData === void 0 ? (_reportPossibleCrUseOfFriendData({
            error: Error()
          }), FriendData) : FriendData).ins.getApplyInfos();
          return list && list.length > 0;
        }

        red_FriendValueReceive() {
          return (_crd && FriendData === void 0 ? (_reportPossibleCrUseOfFriendData({
            error: Error()
          }), FriendData) : FriendData).ins.getNotReceiveGiftNum() > 0;
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2116f9591fdf90ba2e3c3a7c26048fb5079b1321.js.map