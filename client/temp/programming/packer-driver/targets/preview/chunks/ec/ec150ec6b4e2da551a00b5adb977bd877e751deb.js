System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, ProgressBar, ComponentBase, LangMgr, tab, CommonItem, ItemPoolMgr, ItemInfo, TaskControl, UIMgr, ViewName, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, TaskCaseItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfComponentBase(extras) {
    _reporterNs.report("ComponentBase", "../../../framework/base/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskInfo(extras) {
    _reporterNs.report("TaskInfo", "./TaskInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonItem(extras) {
    _reporterNs.report("CommonItem", "../item/CommonItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskControl(extras) {
    _reporterNs.report("TaskControl", "./TaskControl", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
    }, function (_unresolved_2) {
      ComponentBase = _unresolved_2.ComponentBase;
    }, function (_unresolved_3) {
      LangMgr = _unresolved_3.LangMgr;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      CommonItem = _unresolved_5.CommonItem;
    }, function (_unresolved_6) {
      ItemPoolMgr = _unresolved_6.ItemPoolMgr;
    }, function (_unresolved_7) {
      ItemInfo = _unresolved_7.ItemInfo;
    }, function (_unresolved_8) {
      TaskControl = _unresolved_8.TaskControl;
    }, function (_unresolved_9) {
      UIMgr = _unresolved_9.UIMgr;
    }, function (_unresolved_10) {
      ViewName = _unresolved_10.ViewName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "918f7f1PftE9qKwNLsl51Nq", "TaskCaseItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'ProgressBar']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * TaskCaseItem
       * zhudingchao
       * Tue Jun 04 2024 15:02:32 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/task/TaskCaseItem.ts
       *
       */

      _export("TaskCaseItem", TaskCaseItem = (_dec = ccclass('TaskCaseItem'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(ProgressBar), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = (_class2 = class TaskCaseItem extends (_crd && ComponentBase === void 0 ? (_reportPossibleCrUseOfComponentBase({
        error: Error()
      }), ComponentBase) : ComponentBase) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "reachBtnNode", _descriptor, this);

          _initializerDefineProperty(this, "gotoBtnNode", _descriptor2, this);

          _initializerDefineProperty(this, "describeLab", _descriptor3, this);

          _initializerDefineProperty(this, "itemNode", _descriptor4, this);

          _initializerDefineProperty(this, "proBar", _descriptor5, this);

          _initializerDefineProperty(this, "proLab", _descriptor6, this);

          _initializerDefineProperty(this, "notReachNode", _descriptor7, this);

          _initializerDefineProperty(this, "gotNode", _descriptor8, this);

          this.taskInfo = void 0;
          this.comItem = void 0;
        }

        register() {}

        initData(info) {
          this.taskInfo = info;
          this.initView();
        }

        initView() {
          this.describeLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(this.taskInfo.taskTable.Describe);
          var total = this.taskInfo.taskTable.FinishParam1;
          var currNum = this.taskInfo.progress > total ? total : this.taskInfo.progress;
          this.proBar.progress = currNum / total;
          this.proLab.string = currNum + "/" + total;

          if (this.taskInfo.isReceived) {
            this.gotNode.active = true;
            this.notReachNode.active = false;
            this.reachBtnNode.active = false;
            this.gotoBtnNode.active = false;
          } else if (this.taskInfo.isCanReceived) {
            this.gotNode.active = false;
            this.notReachNode.active = false;
            this.reachBtnNode.active = true;
            this.gotoBtnNode.active = false;
          } else {
            this.gotNode.active = false;
            this.reachBtnNode.active = false;

            if (this.taskInfo.taskTable.JumpUI) {
              this.gotoBtnNode.active = true;
              this.notReachNode.active = false;
            } else {
              this.gotoBtnNode.active = false;
              this.notReachNode.active = true;
            }
          }

          var item = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
            error: Error()
          }), ItemInfo) : ItemInfo)();
          item.initItemData(this.taskInfo.taskTable.RewardItemIds[0], this.taskInfo.taskTable.RewardItemNum[0]);

          if (!this.comItem) {
            var node = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.createItem(item, this.itemNode);
            this.comItem = node.getComponent(_crd && CommonItem === void 0 ? (_reportPossibleCrUseOfCommonItem({
              error: Error()
            }), CommonItem) : CommonItem);
          } else {
            this.comItem.initData(item);
          }
        }

        onClickGotoBtn() {
          if (this.taskInfo.taskTable.JumpUI) {
            var tabId = 0;
            var deepArgs = [];

            if (this.taskInfo.taskTable.JumpParam.length === 1) {
              tabId = this.taskInfo.taskTable.JumpParam[0];
            } else {
              deepArgs = this.taskInfo.taskTable.JumpParam;
            }

            var moduleTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ModuleTableByModuleType.getValue(this.taskInfo.taskTable.JumpUI);
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.jumpLayer(this.taskInfo.taskTable.JumpUI, tabId, () => {
              if (this.taskInfo.taskTable.TaskType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).TaskType.TaskType_GuildDailyTask) {
                (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                  error: Error()
                }), UIMgr) : UIMgr).ins.hideView((_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                  error: Error()
                }), ViewName) : ViewName).AssociationTaskPop); // UIMgr.ins.hideView(ViewName.AssociationView);
              } else {
                (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                  error: Error()
                }), UIMgr) : UIMgr).ins.hideView((_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                  error: Error()
                }), ViewName) : ViewName).TaskView);
              }
            }, moduleTab.OpenFunctionId[0], deepArgs);
          }
        }

        onClickRaechBtn() {
          if (this.taskInfo.isCanReceived) {
            if (this.taskInfo.taskTable.TaskType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).TaskType.TaskType_DailyTask) {
              (_crd && TaskControl === void 0 ? (_reportPossibleCrUseOfTaskControl({
                error: Error()
              }), TaskControl) : TaskControl).ins.requestReceiveDailyTaskReward([this.taskInfo.id]);
            } else if (this.taskInfo.taskTable.TaskType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).TaskType.TaskType_WeeklyTask) {
              (_crd && TaskControl === void 0 ? (_reportPossibleCrUseOfTaskControl({
                error: Error()
              }), TaskControl) : TaskControl).ins.requestReceiveWeeklyTaskReward([this.taskInfo.id]);
            } else if (this.taskInfo.taskTable.TaskType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).TaskType.TaskType_AchievementTask) {
              (_crd && TaskControl === void 0 ? (_reportPossibleCrUseOfTaskControl({
                error: Error()
              }), TaskControl) : TaskControl).ins.requestReceiveAchievementTaskReward([this.taskInfo.id]);
            } else if (this.taskInfo.taskTable.TaskType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).TaskType.TaskType_GuildDailyTask) {
              (_crd && TaskControl === void 0 ? (_reportPossibleCrUseOfTaskControl({
                error: Error()
              }), TaskControl) : TaskControl).ins.requestReceiveGuildDailyTaskReward([this.taskInfo.id]);
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "reachBtnNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gotoBtnNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "describeLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "itemNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "proBar", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "proLab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "notReachNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "gotNode", [_dec9], {
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
//# sourceMappingURL=ec150ec6b4e2da551a00b5adb977bd877e751deb.js.map