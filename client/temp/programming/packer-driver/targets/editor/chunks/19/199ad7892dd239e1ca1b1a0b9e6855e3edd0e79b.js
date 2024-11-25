System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "client_protocol", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Prefab, ViewPop, AssociationData, TaskCaseItem, TaskData, tab, TaskBoxItem, TASKDAILY, EventMgr, proto, UIMgr, ViewName, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, AssociationTaskPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationData(extras) {
    _reporterNs.report("AssociationData", "./AssociationData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskCaseItem(extras) {
    _reporterNs.report("TaskCaseItem", "../task/TaskCaseItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskData(extras) {
    _reporterNs.report("TaskData", "../task/TaskData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskBoxItem(extras) {
    _reporterNs.report("TaskBoxItem", "../task/TaskBoxItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTASKDAILY(extras) {
    _reporterNs.report("TASKDAILY", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      AssociationData = _unresolved_3.AssociationData;
    }, function (_unresolved_4) {
      TaskCaseItem = _unresolved_4.TaskCaseItem;
    }, function (_unresolved_5) {
      TaskData = _unresolved_5.TaskData;
    }, function (_unresolved_6) {
      tab = _unresolved_6.tab;
    }, function (_unresolved_7) {
      TaskBoxItem = _unresolved_7.TaskBoxItem;
    }, function (_unresolved_8) {
      TASKDAILY = _unresolved_8.TASKDAILY;
    }, function (_unresolved_9) {
      EventMgr = _unresolved_9.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_10) {
      UIMgr = _unresolved_10.UIMgr;
    }, function (_unresolved_11) {
      ViewName = _unresolved_11.ViewName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e503evEQQtGpZirx/hXGec2", "AssociationTaskPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AssociationTaskPop", AssociationTaskPop = (_dec = ccclass('AssociationTaskPop'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property([_crd && TaskBoxItem === void 0 ? (_reportPossibleCrUseOfTaskBoxItem({
        error: Error()
      }), TaskBoxItem) : TaskBoxItem]), _dec5 = property(Label), _dec(_class = (_class2 = class AssociationTaskPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "pfb_item", _descriptor, this);

          _initializerDefineProperty(this, "node_content", _descriptor2, this);

          _initializerDefineProperty(this, "taskBoxItems", _descriptor3, this);

          _initializerDefineProperty(this, "activeNumLab", _descriptor4, this);
        }

        onShow() {
          this.asyncView();
        }

        onDestroy() {
          super.onDestroy();
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveGuildDailyTasksRewardsRsp, this.on_s2c_ReceiveGuildDailyTasksRewardsRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveGuildTaskChestRewardsRsp, this.on_s2c_ReceiveGuildTaskChestRewardsRsp, this);
        }

        on_s2c_ReceiveGuildTaskChestRewardsRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).CongratulationPop,
              data: msg.rewards
            });
            this.asyncView();
          }
        }

        unRegister() {
          super.unRegister();
        }

        asyncView() {
          // 获取所有的帮会任务
          this.node_content.destroyAllChildren();
          const tasks = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getAllTasksTab();

          for (let i = 0; i < tasks.length; i++) {
            const taskId = tasks[i].Id;
            const taskInfo = (_crd && TaskData === void 0 ? (_reportPossibleCrUseOfTaskData({
              error: Error()
            }), TaskData) : TaskData).ins.getGuildTaskInfo(taskId);
            const item = instantiate(this.pfb_item);
            item.parent = this.node_content;
            let com = item.getComponent(_crd && TaskCaseItem === void 0 ? (_reportPossibleCrUseOfTaskCaseItem({
              error: Error()
            }), TaskCaseItem) : TaskCaseItem);
            com.initData(taskInfo);
          }

          this.updateBoxItem();
        }

        updateBoxItem() {
          let actives = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().GuildDailyTaskRewardNeedCount;
          const dailyActiveNum = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getAssocitionInfo().dailyFinishedTaskNumber;
          this.activeNumLab.string = dailyActiveNum + "";

          for (let i = 0; i < actives.length; i++) {
            let lastValue = 0;
            let pro = 0;

            if (i > 0) {
              lastValue = actives[i - 1];
            }

            if (dailyActiveNum <= lastValue) {
              pro = 0;
            } else if (dailyActiveNum >= actives[i]) {
              pro = 1;
            } else {
              pro = (dailyActiveNum - lastValue) / (actives[i] - lastValue);
            }

            this.taskBoxItems[i].initView((_crd && TASKDAILY === void 0 ? (_reportPossibleCrUseOfTASKDAILY({
              error: Error()
            }), TASKDAILY) : TASKDAILY).GUILD, i, pro, actives[i]);
          }
        }

        on_s2c_ReceiveGuildDailyTasksRewardsRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
              error: Error()
            }), AssociationData) : AssociationData).ins.getAssocitionInfo().dailyFinishedTaskNumber++;
            this.asyncView();
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

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pfb_item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "taskBoxItems", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "activeNumLab", [_dec5], {
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
//# sourceMappingURL=199ad7892dd239e1ca1b1a0b9e6855e3edd0e79b.js.map