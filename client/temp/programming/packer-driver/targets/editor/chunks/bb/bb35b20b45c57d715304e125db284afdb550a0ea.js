System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "client_protocol", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, instantiate, Node, Prefab, ScrollView, Sprite, UITransform, Vec2, ViewPop, PrestigeControl, EventMgr, proto, PrestigeData, tab, TaskInfo, PrestigeTaskCaseItem, PrestigeBarItem, ShowTips, UIMgr, ViewName, PrestigeAttributeItem, GuideController, LocalEvent, LangMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, PrestigePop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrestigeControl(extras) {
    _reporterNs.report("PrestigeControl", "./PrestigeControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrestigeData(extras) {
    _reporterNs.report("PrestigeData", "./PrestigeData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskInfo(extras) {
    _reporterNs.report("TaskInfo", "../task/TaskInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrestigeTaskCaseItem(extras) {
    _reporterNs.report("PrestigeTaskCaseItem", "./PrestigeTaskCaseItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrestigeBarItem(extras) {
    _reporterNs.report("PrestigeBarItem", "./PrestigeBarItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrestigeAttributeItem(extras) {
    _reporterNs.report("PrestigeAttributeItem", "./PrestigeAttributeItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuideController(extras) {
    _reporterNs.report("GuideController", "../../guide/GuideController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      ScrollView = _cc.ScrollView;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      PrestigeControl = _unresolved_3.PrestigeControl;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_5) {
      PrestigeData = _unresolved_5.PrestigeData;
    }, function (_unresolved_6) {
      tab = _unresolved_6.tab;
    }, function (_unresolved_7) {
      TaskInfo = _unresolved_7.TaskInfo;
    }, function (_unresolved_8) {
      PrestigeTaskCaseItem = _unresolved_8.PrestigeTaskCaseItem;
    }, function (_unresolved_9) {
      PrestigeBarItem = _unresolved_9.PrestigeBarItem;
    }, function (_unresolved_10) {
      ShowTips = _unresolved_10.ShowTips;
      UIMgr = _unresolved_10.UIMgr;
    }, function (_unresolved_11) {
      ViewName = _unresolved_11.ViewName;
    }, function (_unresolved_12) {
      PrestigeAttributeItem = _unresolved_12.PrestigeAttributeItem;
    }, function (_unresolved_13) {
      GuideController = _unresolved_13.GuideController;
    }, function (_unresolved_14) {
      LocalEvent = _unresolved_14.LocalEvent;
    }, function (_unresolved_15) {
      LangMgr = _unresolved_15.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6c77eyZ/wNMpI4ZFscogm37", "PrestigePop", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'instantiate', 'log', 'Node', 'Prefab', 'ScrollView', 'Sprite', 'UITransform', 'v2', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * PrestigePop
       * zhudingchao
       * Thu Jun 06 2024 09:47:06 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/prestige/PrestigePop.ts
       *
       */

      _export("PrestigePop", PrestigePop = (_dec = ccclass('PrestigePop'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(ScrollView), _dec5 = property(Node), _dec6 = property(Button), _dec7 = property(Prefab), _dec8 = property(Prefab), _dec9 = property(Prefab), _dec10 = property(Prefab), _dec11 = property(Node), _dec(_class = (_class2 = class PrestigePop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "attributeNode", _descriptor, this);

          _initializerDefineProperty(this, "rewardNode", _descriptor2, this);

          _initializerDefineProperty(this, "titleScrollView", _descriptor3, this);

          _initializerDefineProperty(this, "taskNode", _descriptor4, this);

          _initializerDefineProperty(this, "lvUpBtn", _descriptor5, this);

          _initializerDefineProperty(this, "titlePrefab", _descriptor6, this);

          _initializerDefineProperty(this, "attrPrefab", _descriptor7, this);

          _initializerDefineProperty(this, "taskPrefab", _descriptor8, this);

          _initializerDefineProperty(this, "rewardPrefab", _descriptor9, this);

          _initializerDefineProperty(this, "redLvUp", _descriptor10, this);

          this.currLevel = 0;
          this.taskItems = void 0;
          this.titleItems = void 0;
          this.attrItems = void 0;
          this.currSelectItem = void 0;
          this.currTable = void 0;
          this.scrollViewW = 0;
          this.isCanUpLevel = false;

          this.onTouchTitleItem = titleItem => {
            if (this.currSelectItem != titleItem) {
              if (this.currSelectItem) {
                this.currSelectItem.setSelectState(false);
              }

              this.currSelectItem = titleItem;
              this.currSelectItem.setSelectState(true); // this.scheduleOnce(()=>{

              this.setScrollPos(); // })

              this.currLevel = titleItem.table.Level;
              this.updateTaskView();
              this.initAttrView();
            }
          };
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetQuestLogsRsp, this.on_s2c_GetQuestLogsRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveQuestLogRewardRsp, this.on_s2c_ReceiveQuestLogRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpQuestLogLevelRsp, this.on_s2c_UpQuestLogLevelRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.TaskChangePush, this.on_s2c_TaskChangePush, this);
          (_crd && PrestigeControl === void 0 ? (_reportPossibleCrUseOfPrestigeControl({
            error: Error()
          }), PrestigeControl) : PrestigeControl).ins.request();
        }

        onShow() {
          if ((_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
            error: Error()
          }), GuideController) : GuideController).ins.isGuiding()) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).ShowPop);
          }
        }

        close() {
          super.close();

          if ((_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
            error: Error()
          }), GuideController) : GuideController).ins.isGuiding()) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).checkMainView);
          }
        }

        initView() {
          // let task=this
          this.currLevel = (_crd && PrestigeData === void 0 ? (_reportPossibleCrUseOfPrestigeData({
            error: Error()
          }), PrestigeData) : PrestigeData).ins.level;
          this.scrollViewW = this.titleScrollView.getComponent(UITransform).contentSize.width / 2;
          this.updateTaskView();
          this.updateTilteView();
          this.currSelectItem = this.titleItems[2 + this.currLevel - 1];
          this.currSelectItem.setSelectState(true);
          this.initAttrView();
          this.scheduleOnce(() => {
            this.setScrollPos();
          });
        }

        initAttrView() {
          if (this.currTable) {
            if (this.attrItems) {
              for (let key in this.attrItems) {
                this.attrItems[key].node.active = false;
              }
            }

            let aTypes = this.currTable.QuestLogAttrType;

            for (let key in aTypes) {
              let type = aTypes[key];

              if (type != 0) {
                let value = this.currTable.QuestLogAttrValue[key];
                let item = this.getAttrItem(Number(key));
                item.node.active = true;
                item.initDate(type, value);
              }
            }
          }
        }

        updateTaskView() {
          this.currTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().QuestLogTableByLevel.getValue(this.currLevel);
          let level = (_crd && PrestigeData === void 0 ? (_reportPossibleCrUseOfPrestigeData({
            error: Error()
          }), PrestigeData) : PrestigeData).ins.level;
          let isCanLevel = true;

          if (this.currTable) {
            for (let key in this.currTable.TaskIds) {
              let info = (_crd && PrestigeData === void 0 ? (_reportPossibleCrUseOfPrestigeData({
                error: Error()
              }), PrestigeData) : PrestigeData).ins.getTaskInfoByTableId(this.currTable.TaskIds[key]);

              if (!info) {
                info = new (_crd && TaskInfo === void 0 ? (_reportPossibleCrUseOfTaskInfo({
                  error: Error()
                }), TaskInfo) : TaskInfo)();
                info.id = 0;
                info.taskTabId = this.currTable.TaskIds[key];
              }

              info.isUnLock = this.currTable.Level <= level;

              if (this.currTable.Level < level) {
                info.isReceived = true;
                info.progress = info.taskTable.FinishParam1;
              }

              let item = this.getTaskItem(Number(key));
              item.initData(info);

              if (this.currTable.Level == level) {
                if (isCanLevel) {
                  isCanLevel = info.isReceived;
                }
              }
            }
          } else {
            isCanLevel = false;
          }

          this.isCanUpLevel = isCanLevel && this.currTable.Level == level;
          this.redLvUp.active = this.isCanUpLevel;
          this.lvUpBtn.node.getComponent(Sprite).grayscale = !this.isCanUpLevel;
          const maxLevel = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().QuestLogTable[(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().QuestLogTable.length - 1].Level;

          if ((_crd && PrestigeData === void 0 ? (_reportPossibleCrUseOfPrestigeData({
            error: Error()
          }), PrestigeData) : PrestigeData).ins.level >= maxLevel) {
            this.lvUpBtn.node.getComponent(Sprite).grayscale = true;
            this.lvUpBtn.interactable = false;
            this.redLvUp.active = false;
          }
        }

        updateTilteView() {
          let tables = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().QuestLogTable;
          let level = (_crd && PrestigeData === void 0 ? (_reportPossibleCrUseOfPrestigeData({
            error: Error()
          }), PrestigeData) : PrestigeData).ins.level;
          let maxLevel = this.currTable.ShowLv;

          for (let i = 0; i < 2; i++) {
            let item = this.getTitleItem(i);
            item.initData(true, 1, null);
          }

          for (let i = 0; i < maxLevel; i++) {
            let item = this.getTitleItem(2 + i);
            let isUnLock = level >= tables[i].Level;
            let valeu = 0;

            if (level > tables[i].Level) {
              valeu = 1;
            } else if (level == tables[i].Level) {
              valeu = 0.5;
            }

            item.initData(isUnLock, valeu, tables[i]);
          }

          for (let i = maxLevel; i < maxLevel + 2; i++) {
            let item = this.getTitleItem(i + 2);
            item.initData(false, 0, null);
          }
        }

        getTaskItem(index) {
          if (!this.taskItems) {
            this.taskItems = [];
          }

          if (!this.taskItems[index]) {
            let node = instantiate(this.taskPrefab);
            node.parent = this.taskNode;
            node.name = "PrestigeTaskCaseItem" + index;
            this.taskItems.push(node.getComponent(_crd && PrestigeTaskCaseItem === void 0 ? (_reportPossibleCrUseOfPrestigeTaskCaseItem({
              error: Error()
            }), PrestigeTaskCaseItem) : PrestigeTaskCaseItem));
          }

          return this.taskItems[index];
        }

        getTitleItem(index) {
          if (!this.titleItems) {
            this.titleItems = [];
          }

          if (!this.titleItems[index]) {
            let node = instantiate(this.titlePrefab);
            node.parent = this.titleScrollView.content;
            this.titleItems.push(node.getComponent(_crd && PrestigeBarItem === void 0 ? (_reportPossibleCrUseOfPrestigeBarItem({
              error: Error()
            }), PrestigeBarItem) : PrestigeBarItem));
            this.titleItems[index].setTouchCallBack(this.onTouchTitleItem);
          }

          return this.titleItems[index];
        }

        getAttrItem(index) {
          if (!this.attrItems) {
            this.attrItems = [];
          }

          if (!this.attrItems[index]) {
            let node = instantiate(this.attrPrefab);
            node.parent = this.attributeNode;
            this.attrItems.push(node.getComponent(_crd && PrestigeAttributeItem === void 0 ? (_reportPossibleCrUseOfPrestigeAttributeItem({
              error: Error()
            }), PrestigeAttributeItem) : PrestigeAttributeItem));
          }

          return this.attrItems[index];
        }

        setScrollPos() {
          let pos = this.currSelectItem.node.getPosition();
          this.titleScrollView.scrollToOffset(new Vec2(pos.x - this.scrollViewW, 0), 0.1);
        }

        on_s2c_GetQuestLogsRsp(msg) {
          this.initView();
        }

        on_s2c_ReceiveQuestLogRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            this.initView();
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

        on_s2c_UpQuestLogLevelRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            this.initView();
          }
        }

        on_s2c_TaskChangePush(msg) {
          this.updateTaskView(); // TaskData.ins.updateTask(msg);
        }

        onClickUpLevel() {
          if (this.isCanUpLevel) {
            (_crd && PrestigeControl === void 0 ? (_reportPossibleCrUseOfPrestigeControl({
              error: Error()
            }), PrestigeControl) : PrestigeControl).ins.requestUpQuestLogLevel();
          } else {
            //ShowTips("未达到晋升条件")
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_prestige_1"));
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "attributeNode", [_dec2], {
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "titleScrollView", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "taskNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lvUpBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "titlePrefab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "attrPrefab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "taskPrefab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "rewardPrefab", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "redLvUp", [_dec11], {
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
//# sourceMappingURL=bb35b20b45c57d715304e125db284afdb550a0ea.js.map