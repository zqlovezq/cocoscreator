System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, ProgressBar, ComponentBase, TaskData, UIMgr, ViewName, TaskControl, TASKDAILY, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, TaskBoxItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfComponentBase(extras) {
    _reporterNs.report("ComponentBase", "../../../framework/base/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskData(extras) {
    _reporterNs.report("TaskData", "./TaskData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskControl(extras) {
    _reporterNs.report("TaskControl", "./TaskControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTASKDAILY(extras) {
    _reporterNs.report("TASKDAILY", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
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
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
    }, function (_unresolved_2) {
      ComponentBase = _unresolved_2.ComponentBase;
    }, function (_unresolved_3) {
      TaskData = _unresolved_3.TaskData;
    }, function (_unresolved_4) {
      UIMgr = _unresolved_4.UIMgr;
    }, function (_unresolved_5) {
      ViewName = _unresolved_5.ViewName;
    }, function (_unresolved_6) {
      TaskControl = _unresolved_6.TaskControl;
    }, function (_unresolved_7) {
      TASKDAILY = _unresolved_7.TASKDAILY;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fba8c1uPIJF0bBKwi2a9nDf", "TaskBoxItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'ProgressBar']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * TaskBoxItem
       * zhudingchao
       * Tue Jun 04 2024 14:52:36 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/task/TaskBoxItem.ts
       *
       */

      _export("TaskBoxItem", TaskBoxItem = (_dec = ccclass('TaskBoxItem'), _dec2 = property(ProgressBar), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Node), _dec(_class = (_class2 = class TaskBoxItem extends (_crd && ComponentBase === void 0 ? (_reportPossibleCrUseOfComponentBase({
        error: Error()
      }), ComponentBase) : ComponentBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "proBar", _descriptor, this);

          _initializerDefineProperty(this, "normalNode", _descriptor2, this);

          _initializerDefineProperty(this, "cangetNode", _descriptor3, this);

          _initializerDefineProperty(this, "gotNode", _descriptor4, this);

          _initializerDefineProperty(this, "numLab", _descriptor5, this);

          _initializerDefineProperty(this, "boxBtnNode", _descriptor6, this);

          this.index = void 0;
          this.isCanReceived = false;
          this.type = void 0;
        }

        register() {}

        initView(type, index, progress, totalNum) {
          this.index = index;
          this.type = type;
          this.proBar.progress = progress;
          this.numLab.string = totalNum + "";

          if (progress >= 1) {
            this.normalNode.active = false;
            let isReceived = false;

            if (this.type === (_crd && TASKDAILY === void 0 ? (_reportPossibleCrUseOfTASKDAILY({
              error: Error()
            }), TASKDAILY) : TASKDAILY).DAILY) {
              isReceived = (_crd && TaskData === void 0 ? (_reportPossibleCrUseOfTaskData({
                error: Error()
              }), TaskData) : TaskData).ins.getIsGetDailyActiveReward(index);
            } else if (this.type === (_crd && TASKDAILY === void 0 ? (_reportPossibleCrUseOfTASKDAILY({
              error: Error()
            }), TASKDAILY) : TASKDAILY).WEEK) {
              isReceived = (_crd && TaskData === void 0 ? (_reportPossibleCrUseOfTaskData({
                error: Error()
              }), TaskData) : TaskData).ins.getIsGetWeekActiveReward(index);
            } else if (this.type === (_crd && TASKDAILY === void 0 ? (_reportPossibleCrUseOfTASKDAILY({
              error: Error()
            }), TASKDAILY) : TASKDAILY).GUILD) {
              isReceived = (_crd && TaskData === void 0 ? (_reportPossibleCrUseOfTaskData({
                error: Error()
              }), TaskData) : TaskData).ins.getIsGetGuildActiveReward(index);
            }

            this.gotNode.active = isReceived;
            this.cangetNode.active = !isReceived;
            this.isCanReceived = !isReceived;
          } else {
            this.normalNode.active = true;
            this.gotNode.active = false;
            this.cangetNode.active = false;
            this.isCanReceived = false;
          }
        }

        onClickItem() {
          if (this.isCanReceived) {
            if (this.type == (_crd && TASKDAILY === void 0 ? (_reportPossibleCrUseOfTASKDAILY({
              error: Error()
            }), TASKDAILY) : TASKDAILY).DAILY) {
              (_crd && TaskControl === void 0 ? (_reportPossibleCrUseOfTaskControl({
                error: Error()
              }), TaskControl) : TaskControl).ins.requestReceiveDailyActivityTaskReward([this.index]);
            } else if (this.type == (_crd && TASKDAILY === void 0 ? (_reportPossibleCrUseOfTASKDAILY({
              error: Error()
            }), TASKDAILY) : TASKDAILY).WEEK) {
              (_crd && TaskControl === void 0 ? (_reportPossibleCrUseOfTaskControl({
                error: Error()
              }), TaskControl) : TaskControl).ins.requestReceiveWeeklyActivityTaskReward([this.index]);
            } else if (this.type === (_crd && TASKDAILY === void 0 ? (_reportPossibleCrUseOfTASKDAILY({
              error: Error()
            }), TASKDAILY) : TASKDAILY).GUILD) {
              (_crd && TaskControl === void 0 ? (_reportPossibleCrUseOfTaskControl({
                error: Error()
              }), TaskControl) : TaskControl).ins.requestReceiveGuildActivityTaskReward([this.index]);
            }
          } else {
            let rewads = [];

            if (this.type == (_crd && TASKDAILY === void 0 ? (_reportPossibleCrUseOfTASKDAILY({
              error: Error()
            }), TASKDAILY) : TASKDAILY).DAILY) {
              rewads = (_crd && TaskData === void 0 ? (_reportPossibleCrUseOfTaskData({
                error: Error()
              }), TaskData) : TaskData).ins.getDailyActiveReward(this.index);
            } else if (this.type == (_crd && TASKDAILY === void 0 ? (_reportPossibleCrUseOfTASKDAILY({
              error: Error()
            }), TASKDAILY) : TASKDAILY).WEEK) {
              rewads = (_crd && TaskData === void 0 ? (_reportPossibleCrUseOfTaskData({
                error: Error()
              }), TaskData) : TaskData).ins.getWeekActiveReward(this.index);
            } else if (this.type == (_crd && TASKDAILY === void 0 ? (_reportPossibleCrUseOfTASKDAILY({
              error: Error()
            }), TASKDAILY) : TASKDAILY).GUILD) {
              rewads = (_crd && TaskData === void 0 ? (_reportPossibleCrUseOfTaskData({
                error: Error()
              }), TaskData) : TaskData).ins.getGuildActiveReward(this.index);
            }

            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).CommonBoxTipsPop,
              data: {
                "worldPos": this.boxBtnNode.worldPosition,
                "rewadInfos": rewads
              }
            });
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "proBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "normalNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cangetNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gotNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "numLab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "boxBtnNode", [_dec7], {
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
//# sourceMappingURL=b8ccf76dfb455f797517cbbf5b1d6a068980c190.js.map