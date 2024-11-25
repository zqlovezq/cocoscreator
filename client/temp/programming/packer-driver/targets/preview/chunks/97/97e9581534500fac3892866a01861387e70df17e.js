System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "client_protocol", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, ProgressBar, tab, RookieTaskMgr, CommonItem, ItemInfo, proto, Net, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, RookieTaskBarItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRookieTaskMgr(extras) {
    _reporterNs.report("RookieTaskMgr", "./RookieTaskMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonItem(extras) {
    _reporterNs.report("CommonItem", "../../item/CommonItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../../net/Net", _context.meta, extras);
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
      ProgressBar = _cc.ProgressBar;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      RookieTaskMgr = _unresolved_3.RookieTaskMgr;
    }, function (_unresolved_4) {
      CommonItem = _unresolved_4.CommonItem;
    }, function (_unresolved_5) {
      ItemInfo = _unresolved_5.ItemInfo;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_6) {
      Net = _unresolved_6.Net;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6b4e0EFsjNDVazUGGekdiuS", "RookieTaskBarItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'ProgressBar']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RookieTaskBarItem", RookieTaskBarItem = (_dec = ccclass('RookieTaskBarItem'), _dec2 = property(_crd && CommonItem === void 0 ? (_reportPossibleCrUseOfCommonItem({
        error: Error()
      }), CommonItem) : CommonItem), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(ProgressBar), _dec(_class = (_class2 = class RookieTaskBarItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "common_item", _descriptor, this);

          _initializerDefineProperty(this, "lbl_score", _descriptor2, this);

          _initializerDefineProperty(this, "node_red", _descriptor3, this);

          _initializerDefineProperty(this, "node_bar", _descriptor4, this);

          this.taskScoreTab = null;
        }

        initData(scoreTab) {
          this.taskScoreTab = scoreTab;
          var newPlayerTaskTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ActivityNewPlayerTaskTableById.getValue(this.taskScoreTab.Id);
          var newPlayertrial = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.getTrialTask(newPlayerTaskTab.Group);
          var socre = newPlayertrial.score;
          var receiveIds = newPlayertrial.receivedScoreIds;
          var isGot = receiveIds.indexOf(this.taskScoreTab.Id) > -1;
          this.lbl_score.string = String(this.taskScoreTab.Score);
          var itemInfo = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
            error: Error()
          }), ItemInfo) : ItemInfo)();
          itemInfo.itemId = this.taskScoreTab.RewardId;
          itemInfo.num = this.taskScoreTab.RewardNum;
          this.common_item.initData(itemInfo);
          this.common_item.setSelectState(isGot);
          this.node_red.active = !isGot && socre >= this.taskScoreTab.Score; // 判断上一阶段的分数

          var lastScoreTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ActivityNewPlayerTaskScoreTableById.getValue(scoreTab.Id - 1);
          var lastScore = lastScoreTab ? lastScoreTab.Score : 0;
          this.node_bar.progress = socre >= this.taskScoreTab.Score ? 1 : (socre - lastScore) / (this.taskScoreTab.Score - lastScore); // 是否是英雄

          this.common_item.setTouchCallBack(null);

          if (!isGot && socre >= this.taskScoreTab.Score) {
            this.common_item.setTouchCallBack(() => {
              // 领取奖励
              var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).Msg_ReceiveNewPlayerTrialScoreRewardsReq();
              msg.scoreId = this.taskScoreTab.Id;
              (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
                error: Error()
              }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).Ptl.ReceiveNewPlayerTrialScoreRewardsReq, msg);
            });
          }
        }

        gotItem() {
          this.common_item.setSelectState(true);
          this.common_item.setTouchCallBack(null);
          this.node_red.active = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "common_item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbl_score", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_red", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_bar", [_dec5], {
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
//# sourceMappingURL=97e9581534500fac3892866a01861387e70df17e.js.map