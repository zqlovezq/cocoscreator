System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "client_protocol", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, ViewScreen, FengyunBtnItem, tab, FengyunRankControl, proto, EventMgr, FengyunRankData, RoleData, setTextTime, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, FengyunRankingMainView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewScreen(extras) {
    _reporterNs.report("ViewScreen", "../../../framework/base/ViewScreen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFengyunBtnItem(extras) {
    _reporterNs.report("FengyunBtnItem", "./FengyunBtnItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFengyunRankControl(extras) {
    _reporterNs.report("FengyunRankControl", "./FengyunRankControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFengyunRankData(extras) {
    _reporterNs.report("FengyunRankData", "./FengyunRankData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetTextTime(extras) {
    _reporterNs.report("setTextTime", "../../utils/GameUtil", _context.meta, extras);
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
    }, function (_unresolved_2) {
      ViewScreen = _unresolved_2.ViewScreen;
    }, function (_unresolved_3) {
      FengyunBtnItem = _unresolved_3.FengyunBtnItem;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      FengyunRankControl = _unresolved_5.FengyunRankControl;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_6) {
      EventMgr = _unresolved_6.EventMgr;
    }, function (_unresolved_7) {
      FengyunRankData = _unresolved_7.FengyunRankData;
    }, function (_unresolved_8) {
      RoleData = _unresolved_8.RoleData;
    }, function (_unresolved_9) {
      setTextTime = _unresolved_9.setTextTime;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e9beaDtLWtHaZklh082CxJB", "FengyunRankingMainView", undefined);

      __checkObsolete__(['_decorator', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * FengyunRankingMainView
       * zhudingchao
       * Wed Jul 17 2024 14:40:44 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/fengyunRanking/FengyunRankingMainView.ts
       *
       */

      _export("FengyunRankingMainView", FengyunRankingMainView = (_dec = ccclass('FengyunRankingMainView'), _dec2 = property(Label), _dec3 = property([_crd && FengyunBtnItem === void 0 ? (_reportPossibleCrUseOfFengyunBtnItem({
        error: Error()
      }), FengyunBtnItem) : FengyunBtnItem]), _dec(_class = (_class2 = class FengyunRankingMainView extends (_crd && ViewScreen === void 0 ? (_reportPossibleCrUseOfViewScreen({
        error: Error()
      }), ViewScreen) : ViewScreen) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "timerLab", _descriptor, this);

          _initializerDefineProperty(this, "btnItems", _descriptor2, this);

          this.lastTimer = 0;

          this.lastTimerCallBack = () => {
            this.lastTimer--;

            if (this.lastTimer > 0) {
              this.timerLab.string = (_crd && setTextTime === void 0 ? (_reportPossibleCrUseOfsetTextTime({
                error: Error()
              }), setTextTime) : setTextTime)(this.lastTimer);
            } else {
              this.timerLab.string = "0";
              this.unschedule(this.lastTimerCallBack);
            }
          };
        }

        register() {
          (_crd && FengyunRankControl === void 0 ? (_reportPossibleCrUseOfFengyunRankControl({
            error: Error()
          }), FengyunRankControl) : FengyunRankControl).ins.reqGetHonorRollMap();
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

        onShow() {}

        initView() {
          var tables = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ActivityRankTable;
          var i = 0;

          for (var key in tables) {
            if (tables[key].ActivityId == 101) {
              this.btnItems[i].initView(tables[key]);
              i++;
            }
          }

          var msg = (_crd && FengyunRankData === void 0 ? (_reportPossibleCrUseOfFengyunRankData({
            error: Error()
          }), FengyunRankData) : FengyunRankData).ins.getHonorRollInfoByActId(101);
          this.lastTimer = Number(msg.activityEndTime) - (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.getServerUtcTime();

          if (this.lastTimer > 0) {
            this.schedule(this.lastTimerCallBack, 1);
            this.timerLab.string = (_crd && setTextTime === void 0 ? (_reportPossibleCrUseOfsetTextTime({
              error: Error()
            }), setTextTime) : setTextTime)(this.lastTimer);
          } else {
            this.timerLab.string = "0";
          }
        }

        on_s2c_GetHonorRollMapRsp() {
          this.initView();
        }

        on_s2c_ReceiveHonorRollTasksRewardsRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            this.scheduleOnce(() => {
              for (var i = 0; i < this.btnItems.length; i++) {
                var btnItem = this.btnItems[i];
                btnItem.refreshRed();
              }
            }, 0.1);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "timerLab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnItems", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=288c0857db09a8a7f147e8a7d33773f92c1127c2.js.map