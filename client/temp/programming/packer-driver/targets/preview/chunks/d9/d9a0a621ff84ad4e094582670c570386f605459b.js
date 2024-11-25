System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, ProgressBar, ComponentBase, CommonItem, LangMgr, ItemInfo, ItemPoolMgr, PrestigeControl, UIMgr, ViewName, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, PrestigeTaskCaseItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfComponentBase(extras) {
    _reporterNs.report("ComponentBase", "../../../framework/base/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskInfo(extras) {
    _reporterNs.report("TaskInfo", "../task/TaskInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonItem(extras) {
    _reporterNs.report("CommonItem", "../item/CommonItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrestigeControl(extras) {
    _reporterNs.report("PrestigeControl", "./PrestigeControl", _context.meta, extras);
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
      CommonItem = _unresolved_3.CommonItem;
    }, function (_unresolved_4) {
      LangMgr = _unresolved_4.LangMgr;
    }, function (_unresolved_5) {
      ItemInfo = _unresolved_5.ItemInfo;
    }, function (_unresolved_6) {
      ItemPoolMgr = _unresolved_6.ItemPoolMgr;
    }, function (_unresolved_7) {
      PrestigeControl = _unresolved_7.PrestigeControl;
    }, function (_unresolved_8) {
      UIMgr = _unresolved_8.UIMgr;
    }, function (_unresolved_9) {
      ViewName = _unresolved_9.ViewName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fdfdb5nt79BUargRX4k1tl4", "PrestigeTaskCaseItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'ProgressBar']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * PrestigeTaskCaseItem
       * zhudingchao
       * Thu Jun 06 2024 10:20:45 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/prestige/PrestigeTaskCaseItem.ts
       *
       */

      _export("PrestigeTaskCaseItem", PrestigeTaskCaseItem = (_dec = ccclass('PrestigeTaskCaseItem'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(ProgressBar), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec(_class = (_class2 = class PrestigeTaskCaseItem extends (_crd && ComponentBase === void 0 ? (_reportPossibleCrUseOfComponentBase({
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

          _initializerDefineProperty(this, "lockNode", _descriptor9, this);

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

          if (!this.taskInfo.isUnLock) {
            this.gotNode.active = false;
            this.notReachNode.active = false;
            this.reachBtnNode.active = false;
            this.gotoBtnNode.active = false;
            this.lockNode.active = true;
          } else if (this.taskInfo.isReceived) {
            this.gotNode.active = true;
            this.notReachNode.active = false;
            this.reachBtnNode.active = false;
            this.gotoBtnNode.active = false;
            this.lockNode.active = false;
          } else if (this.taskInfo.isCanReceived) {
            this.gotNode.active = false;
            this.notReachNode.active = false;
            this.reachBtnNode.active = true;
            this.gotoBtnNode.active = false;
            this.lockNode.active = false;
          } else {
            this.reachBtnNode.active = false;
            this.lockNode.active = false;
            this.gotNode.active = false;

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
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.jumpLayer(this.taskInfo.taskTable.JumpUI, this.taskInfo.taskTable.JumpParam[0]);
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.hideView((_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).PrestigePop);
          }
        }

        onClickRaechBtn() {
          if (this.taskInfo.isCanReceived) {
            (_crd && PrestigeControl === void 0 ? (_reportPossibleCrUseOfPrestigeControl({
              error: Error()
            }), PrestigeControl) : PrestigeControl).ins.requestReceiveQuestLog([this.taskInfo.id]);
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
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lockNode", [_dec10], {
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
//# sourceMappingURL=d9a0a621ff84ad4e094582670c570386f605459b.js.map