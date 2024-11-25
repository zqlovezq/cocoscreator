System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "client_protocol", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, log, AbsControl, EventMgr, proto, Net, FengyunRankData, RedMgr, RedDotType, _dec, _class, _class2, _crd, ccclass, property, FengyunRankControl;

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

  function _reportPossibleCrUseOfFengyunRankData(extras) {
    _reporterNs.report("FengyunRankData", "./FengyunRankData", _context.meta, extras);
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
      log = _cc.log;
    }, function (_unresolved_2) {
      AbsControl = _unresolved_2.AbsControl;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_4) {
      Net = _unresolved_4.Net;
    }, function (_unresolved_5) {
      FengyunRankData = _unresolved_5.FengyunRankData;
    }, function (_unresolved_6) {
      RedMgr = _unresolved_6.RedMgr;
    }, function (_unresolved_7) {
      RedDotType = _unresolved_7.RedDotType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f75b5TTZPtAMIs2z/pJ87i1", "FengyunRankControl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'log', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * FengyunRankControl
       * zhudingchao
       * Wed Jul 17 2024 19:58:00 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/fengyunRanking/FengyunRankControl.ts
       *
       */

      _export("FengyunRankControl", FengyunRankControl = (_dec = ccclass('FengyunRankControl'), _dec(_class = (_class2 = class FengyunRankControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        static get ins() {
          if (null == this._instance) {
            this._instance = new FengyunRankControl();
          }

          return this._instance;
        }

        purge() {}

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetHonorRollMapRsp, this.on_s2c_GetHonorRollMapRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveHonorRollTasksRewardsRsp, this.on_s2c_ReceiveHonorRollTasksRewardsRsp, this);
        }

        request() {}

        reqGetHonorRollMap() {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetHonorRollMapReq();
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetHonorRollMapReq, msg);
        }

        reqReceiveHonorRollTasksRewards(activityId, taskIds) {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_ReceiveHonorRollTasksRewardsReq();
          msg.activityId = activityId;
          msg.taskIds = taskIds;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveHonorRollTasksRewardsReq, msg);
        }

        on_s2c_GetHonorRollMapRsp(msg) {
          (_crd && FengyunRankData === void 0 ? (_reportPossibleCrUseOfFengyunRankData({
            error: Error()
          }), FengyunRankData) : FengyunRankData).ins.initMapData(msg);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Feng_Yun_Rank);
          log("收到荣耀消息==", msg);
        }

        on_s2c_ReceiveHonorRollTasksRewardsRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            // ActivityData.ins.vipMsg.boughtVipGifts.push(msg.vipLevel);
            var info = (_crd && FengyunRankData === void 0 ? (_reportPossibleCrUseOfFengyunRankData({
              error: Error()
            }), FengyunRankData) : FengyunRankData).ins.getHonorRollInfoByActId(msg.activityId);

            var _loop = function _loop(key) {
              var task = info.tasks.find(a => a.id == msg.taskIds[key]);

              if (task) {
                task.isReceived = true;
              }
            };

            for (var key in msg.taskIds) {
              _loop(key);
            }

            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Feng_Yun_Rank);
          }
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=063592ab751594246ab25fa39811db02c110c77f.js.map