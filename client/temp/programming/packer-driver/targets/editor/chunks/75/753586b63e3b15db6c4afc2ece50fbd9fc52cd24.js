System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, ProgressBar, TaskData, CommonItem, ItemInfo, ActivityControl, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, RecruitLimitItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfTaskInfo(extras) {
    _reporterNs.report("TaskInfo", "../task/TaskInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskData(extras) {
    _reporterNs.report("TaskData", "../task/TaskData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonItem(extras) {
    _reporterNs.report("CommonItem", "../item/CommonItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityControl(extras) {
    _reporterNs.report("ActivityControl", "../activity/ActivityControl", _context.meta, extras);
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
      TaskData = _unresolved_2.TaskData;
    }, function (_unresolved_3) {
      CommonItem = _unresolved_3.CommonItem;
    }, function (_unresolved_4) {
      ItemInfo = _unresolved_4.ItemInfo;
    }, function (_unresolved_5) {
      ActivityControl = _unresolved_5.ActivityControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "90be1CaGFNCIrzkvmzv5ApX", "RecruitLimitItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'ProgressBar']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RecruitLimitItem", RecruitLimitItem = (_dec = ccclass('RecruitLimitItem'), _dec2 = property(ProgressBar), _dec3 = property(_crd && CommonItem === void 0 ? (_reportPossibleCrUseOfCommonItem({
        error: Error()
      }), CommonItem) : CommonItem), _dec4 = property(Node), _dec5 = property(Label), _dec(_class = (_class2 = class RecruitLimitItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bar_progress", _descriptor, this);

          _initializerDefineProperty(this, "common_item", _descriptor2, this);

          _initializerDefineProperty(this, "node_receive", _descriptor3, this);

          _initializerDefineProperty(this, "lbl_progress", _descriptor4, this);

          this.taskInfo = null;
          this._taskTab = null;
          this._activityId = 0;
        }

        initData(activityId, taskId) {
          this._activityId = activityId;
          this.taskInfo = (_crd && TaskData === void 0 ? (_reportPossibleCrUseOfTaskData({
            error: Error()
          }), TaskData) : TaskData).ins.getGachaUpTaskInfo(taskId);
          this._taskTab = this.taskInfo.taskTable;
          const rewards = this._taskTab.RewardItemIds;
          const nums = this._taskTab.RewardItemNum;
          let finishParam = this._taskTab.FinishParam1;
          const award = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
            error: Error()
          }), ItemInfo) : ItemInfo)();
          award.itemId = rewards[0];
          award.num = nums[0];
          this.common_item.initData(award);

          if (this.taskInfo.isReceived) {
            this.bar_progress.progress = 1;
            this.common_item.setSelectState(true);
          } else {
            const lastTaskInfo = (_crd && TaskData === void 0 ? (_reportPossibleCrUseOfTaskData({
              error: Error()
            }), TaskData) : TaskData).ins.getGachaUpTaskInfo(taskId - 1);

            if (lastTaskInfo) {
              const lastMax = lastTaskInfo.taskTable.FinishParam1;
              this.bar_progress.progress = (this.taskInfo.progress - lastMax) / (finishParam - lastMax);
            } else {
              this.bar_progress.progress = this.taskInfo.progress / finishParam;
            }
          }

          this.node_receive.active = this.taskInfo.isCanReceived;
          this.lbl_progress.string = String(finishParam);
        } // 点击领取任务奖励


        clickGetAward() {
          (_crd && ActivityControl === void 0 ? (_reportPossibleCrUseOfActivityControl({
            error: Error()
          }), ActivityControl) : ActivityControl).ins.requestReceiveActivityGachaUpTasksRewards(this._activityId);
        }

        gotAward() {
          this.node_receive.active = false;
          this.common_item.setSelectState(true);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bar_progress", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "common_item", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_receive", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lbl_progress", [_dec5], {
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
//# sourceMappingURL=753586b63e3b15db6c4afc2ece50fbd9fc52cd24.js.map