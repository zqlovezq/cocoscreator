System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "client_protocol", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Node, Prefab, ViewPop, tab, GameplayViewDataMgr, ClimbingTowerRewardItem, EventMgr, proto, UIMgr, ViewName, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, ClimbingTowerRewardPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameplayViewDataMgr(extras) {
    _reporterNs.report("GameplayViewDataMgr", "../GameplayViewDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClimbingTowerRewardItem(extras) {
    _reporterNs.report("ClimbingTowerRewardItem", "./ClimbingTowerRewardItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
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
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      GameplayViewDataMgr = _unresolved_4.GameplayViewDataMgr;
    }, function (_unresolved_5) {
      ClimbingTowerRewardItem = _unresolved_5.ClimbingTowerRewardItem;
    }, function (_unresolved_6) {
      EventMgr = _unresolved_6.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_7) {
      UIMgr = _unresolved_7.UIMgr;
    }, function (_unresolved_8) {
      ViewName = _unresolved_8.ViewName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cdd132jOLpOD6fFSZ4m0ILJ", "ClimbingTowerRewardPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * ClimbingTowerRewardPop
       * zhudingchao
       * Fri Jul 12 2024 17:16:16 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/jianghu/climbingTower/ClimbingTowerRewardPop.ts
       *
       */

      _export("ClimbingTowerRewardPop", ClimbingTowerRewardPop = (_dec = ccclass('ClimbingTowerRewardPop'), _dec2 = property(Node), _dec3 = property(Prefab), _dec(_class = (_class2 = class ClimbingTowerRewardPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "contentNode", _descriptor, this);

          _initializerDefineProperty(this, "itemPrefab", _descriptor2, this);

          this.items = void 0;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveClimbTowerClearStageRewardsRsp, this.on_s2c_ReceiveClimbTowerClearStageRewardsRsp, this);
        }

        onShow() {
          var msg = (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.climbTowerInfoMsg;
          var receives = msg.receivedFirstRewardStageIds;
          var passId = (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.getClimbTowerPassLevelId();
          var tables = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().PveClearStageTable;
          this.items = [];
          var index = 0;

          for (var key in tables) {
            if (tables[key].StageType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PveStageType.PveStageType_ClimbTower) {
              var t = tables[key];
              var state = 0;

              if (passId >= t.StageId) {
                state = receives.indexOf(t.StageId) >= 0 ? 2 : 1;
              }

              if (state != 2) {
                index = Number(key);
                break;
              } // let item = instantiate(this.itemPrefab);
              // item.parent = this.contentNode;
              // let com = item.getComponent(ClimbingTowerRewardItem);
              // com.initView(t, state);
              // this.items.push(com);

            }
          }

          if (index + 5 > tables.length - 1) {
            index = tables.length - 5;
          }

          for (var i = 0; i < 5; i++) {
            var _key = index + i;

            if (tables[_key].StageType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PveStageType.PveStageType_ClimbTower) {
              var _t = tables[_key];
              var _state = 0;

              if (passId >= _t.StageId) {
                _state = receives.indexOf(_t.StageId) >= 0 ? 2 : 1;
              }

              var item = instantiate(this.itemPrefab);
              item.parent = this.contentNode;
              var com = item.getComponent(_crd && ClimbingTowerRewardItem === void 0 ? (_reportPossibleCrUseOfClimbingTowerRewardItem({
                error: Error()
              }), ClimbingTowerRewardItem) : ClimbingTowerRewardItem);
              com.initView(_t, _state);
              this.items.push(com);
            }
          }
        }

        updateView() {
          var msg = (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.climbTowerInfoMsg;
          var receives = msg.receivedFirstRewardStageIds;

          for (var key in this.items) {
            if (this.items[key].state == 1) {
              var state = receives.indexOf(this.items[key].table.StageId) >= 0 ? 2 : 1;
              this.items[key].updateView(state);
            }
          }
        }

        on_s2c_ReceiveClimbTowerClearStageRewardsRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            this.updateView();
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).CongratulationPop,
              data: msg.rewards
            });
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec3], {
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
//# sourceMappingURL=fd4502d5b0d36d5c1ab4dc992371194e6de4ae47.js.map