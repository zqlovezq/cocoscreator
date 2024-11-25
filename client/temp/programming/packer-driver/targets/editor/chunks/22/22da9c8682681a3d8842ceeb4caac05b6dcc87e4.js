System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "client_protocol", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, log, Node, ProgressBar, Sprite, Vec3, InfiniteCell, ItemInfo, tab, CommonItem, proto, TaskData, BattlePassDataMgr, LangMgr, Net, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _crd, ccclass, property, BattlePassItemCell;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfInfiniteCell(extras) {
    _reporterNs.report("InfiniteCell", "../../../../Common/InfiniteList/InfiniteCell", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonItem(extras) {
    _reporterNs.report("CommonItem", "../../item/CommonItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskData(extras) {
    _reporterNs.report("TaskData", "../../task/TaskData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattlePassDataMgr(extras) {
    _reporterNs.report("BattlePassDataMgr", "./BattlePassDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
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
      Label = _cc.Label;
      log = _cc.log;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
      Sprite = _cc.Sprite;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      InfiniteCell = _unresolved_2.default;
    }, function (_unresolved_3) {
      ItemInfo = _unresolved_3.ItemInfo;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      CommonItem = _unresolved_5.CommonItem;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_6) {
      TaskData = _unresolved_6.TaskData;
    }, function (_unresolved_7) {
      BattlePassDataMgr = _unresolved_7.BattlePassDataMgr;
    }, function (_unresolved_8) {
      LangMgr = _unresolved_8.LangMgr;
    }, function (_unresolved_9) {
      Net = _unresolved_9.Net;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aec984mXn9Cjo6xHkZIXxX/", "BattlePassItemCell", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'log', 'Node', 'ProgressBar', 'Sprite', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BattlePassItemCell", BattlePassItemCell = (_dec = ccclass('BattlePassItemCell'), _dec2 = property([_crd && CommonItem === void 0 ? (_reportPossibleCrUseOfCommonItem({
        error: Error()
      }), CommonItem) : CommonItem]), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(ProgressBar), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Sprite), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec(_class = (_class2 = class BattlePassItemCell extends (_crd && InfiniteCell === void 0 ? (_reportPossibleCrUseOfInfiniteCell({
        error: Error()
      }), InfiniteCell) : InfiniteCell) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "items", _descriptor, this);

          _initializerDefineProperty(this, "node_mask", _descriptor2, this);

          _initializerDefineProperty(this, "lbl_name", _descriptor3, this);

          _initializerDefineProperty(this, "node_lock", _descriptor4, this);

          _initializerDefineProperty(this, "bar_progress", _descriptor5, this);

          _initializerDefineProperty(this, "node_lock_extra", _descriptor6, this);

          _initializerDefineProperty(this, "node_bg_1", _descriptor7, this);

          _initializerDefineProperty(this, "node_bg_2", _descriptor8, this);

          _initializerDefineProperty(this, "sp_gray", _descriptor9, this);

          _initializerDefineProperty(this, "node_got_1", _descriptor10, this);

          _initializerDefineProperty(this, "node_got_2", _descriptor11, this);

          _initializerDefineProperty(this, "node_got_3", _descriptor12, this);
        }

        UpdateContent(data) {
          const taskId = data.taskId;
          const passBattleId = data.battleId;
          const taskInfo = (_crd && TaskData === void 0 ? (_reportPossibleCrUseOfTaskData({
            error: Error()
          }), TaskData) : TaskData).ins.getBattlePassTaskInfo(taskId);
          const taskTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().TaskTableById.getValue(taskId);
          const battlePass = (_crd && BattlePassDataMgr === void 0 ? (_reportPossibleCrUseOfBattlePassDataMgr({
            error: Error()
          }), BattlePassDataMgr) : BattlePassDataMgr).ins.getBattlePassData(passBattleId);
          const rewards = taskTab.RewardItemIds.concat(taskTab.BattlePassRewardIds);
          const nums = taskTab.RewardItemNum.concat(taskTab.BattlePassRewardNum);
          this.node_bg_1.active = taskId % 2 == 1;
          this.node_bg_2.active = taskId % 2 == 0;
          this.bar_progress.node.active = true;
          this.node_lock.active = !battlePass.isBoughtAdvance;
          let finishParam = taskTab.FinishParam1;

          if (data.notSetY) {
            this.node.setPosition(new Vec3(0, 10, 0));
            this.node_bg_1.active = false;
            this.node_bg_2.active = false;
            this.bar_progress.node.active = false;
          } else {
            const pos = this.node.getPosition();
            this.node.setPosition(new Vec3(pos.x, 0, 0));
            this.node_mask.active = taskInfo.progress < finishParam;
            this.sp_gray.grayscale = taskInfo.progress < finishParam;
          }

          this.lbl_name.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(taskTab.Describe);
          this.bar_progress.progress = taskInfo.progress >= finishParam ? 1 : 0;
          this.node_got_1.active = false;
          this.node_got_2.active = false;
          this.node_got_3.active = false;

          for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            item.node.active = true;
            this.node_lock_extra.active = true;
            const award = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
              error: Error()
            }), ItemInfo) : ItemInfo)();
            award.itemId = rewards[i];
            award.num = nums[i];

            if (!award.itemId) {
              item.node.active = false;
              this.node_lock_extra.active = false;
              return;
            }

            item.initData(award);
            const node_can_get = item.node.parent.getChildByName("canget_node");
            node_can_get.active = false;

            if (i === 0) {
              this.node_got_1.active = taskInfo.isCanReceived;
            } else {
              node_can_get.active = battlePass.isBoughtAdvance && !taskInfo.isAdvanceReceived && taskInfo.progress >= finishParam;
              this["node_got_" + (i + 1)].active = award.itemId && node_can_get.active;
            }

            if (taskInfo.isReceived && i == 0) {
              item.setSelectState(true);
            }

            if (taskInfo.isAdvanceReceived && i !== 0) {
              item.setSelectState(true);
            }

            item.setTouchCallBack(null);

            if (node_can_get.active) {
              item.setTouchCallBack(() => {
                const result = (_crd && BattlePassDataMgr === void 0 ? (_reportPossibleCrUseOfBattlePassDataMgr({
                  error: Error()
                }), BattlePassDataMgr) : BattlePassDataMgr).ins.getAllReceiveTaskId(passBattleId);
                let pass_msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).Msg_ReceiveBattlePassTaskRewardsReq();
                pass_msg.taskIds = result;
                pass_msg.id = passBattleId;
                log("cocos pass_msg =", pass_msg);
                (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
                  error: Error()
                }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).Ptl.ReceiveBattlePassTaskRewardsReq, pass_msg);
              });
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "items", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_mask", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbl_name", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_lock", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bar_progress", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_lock_extra", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_bg_1", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_bg_2", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "sp_gray", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "node_got_1", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "node_got_2", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "node_got_3", [_dec13], {
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
//# sourceMappingURL=22da9c8682681a3d8842ceeb4caac05b6dcc87e4.js.map