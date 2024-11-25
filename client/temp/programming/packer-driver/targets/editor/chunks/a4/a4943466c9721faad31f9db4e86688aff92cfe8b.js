System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, tab, ItemInfo, ItemPoolMgr, LangMgr, GameplayControl, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, ClimbingTowerRewardItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameplayControl(extras) {
    _reporterNs.report("GameplayControl", "../GameplayControl", _context.meta, extras);
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
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      ItemInfo = _unresolved_3.ItemInfo;
    }, function (_unresolved_4) {
      ItemPoolMgr = _unresolved_4.ItemPoolMgr;
    }, function (_unresolved_5) {
      LangMgr = _unresolved_5.LangMgr;
    }, function (_unresolved_6) {
      GameplayControl = _unresolved_6.GameplayControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5541ab9v0hHG5UIyaMP2W0/", "ClimbingTowerRewardItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * ClimbingTowerRewardItem
       * zhudingchao
       * Fri Jul 12 2024 17:18:55 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/jianghu/climbingTower/ClimbingTowerRewardItem.ts
       *
       */

      _export("ClimbingTowerRewardItem", ClimbingTowerRewardItem = (_dec = ccclass('ClimbingTowerRewardItem'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = class ClimbingTowerRewardItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "titleLab", _descriptor, this);

          _initializerDefineProperty(this, "rewardNode", _descriptor2, this);

          _initializerDefineProperty(this, "getBtnNode", _descriptor3, this);

          _initializerDefineProperty(this, "notBtnNode", _descriptor4, this);

          _initializerDefineProperty(this, "gotNode", _descriptor5, this);

          this.state = void 0;
          this.table = void 0;
        }

        initView(table, state) {
          this.table = table;

          for (let key in table.ClearRewardItemIds) {
            if (table.ClearRewardItemIds[key]) {
              let info = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
                error: Error()
              }), ItemInfo) : ItemInfo)();
              info.initItemData(table.ClearRewardItemIds[key], table.ClearRewardItemNum[key]);
              (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                error: Error()
              }), ItemPoolMgr) : ItemPoolMgr).ins.createRewadItem(info, this.rewardNode);
            }
          } // let pveTab = tab.getData().PveStageTableByStageId.getValue(table.StageId);
          // if (pveTab) {
          //     this.titleLab.string = LangMgr.getLab(pveTab.StageName);
          // }


          let pveTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ClimbTowerTableByStageId.getValue(table.StageId);

          if (pveTab) {
            this.titleLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_climbingtower_10", [pveTab.Floor]);
          }

          this.updateView(state);
        }

        updateView(state) {
          this.state = state;
          this.getBtnNode.active = state == 1;
          this.notBtnNode.active = state == 0;
          this.gotNode.active = state == 2;
        }

        onClickGetBtn() {
          if (this.state == 1) {
            (_crd && GameplayControl === void 0 ? (_reportPossibleCrUseOfGameplayControl({
              error: Error()
            }), GameplayControl) : GameplayControl).ins.requestReceiveClimbTowerClearStageRewardsReq(this.table.StageId);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "titleLab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rewardNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "getBtnNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "notBtnNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "gotNode", [_dec6], {
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
//# sourceMappingURL=a4943466c9721faad31f9db4e86688aff92cfe8b.js.map