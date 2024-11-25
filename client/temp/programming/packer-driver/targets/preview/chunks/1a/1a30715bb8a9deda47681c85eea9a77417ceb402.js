System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, Sprite, Toggle, InfiniteCell, EventMgr, LocalEvent, tab, LangMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, BattleMainItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfInfiniteCell(extras) {
    _reporterNs.report("InfiniteCell", "../../../../Common/InfiniteList/InfiniteCell", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      InfiniteCell = _unresolved_2.default;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }, function (_unresolved_4) {
      LocalEvent = _unresolved_4.LocalEvent;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }, function (_unresolved_6) {
      LangMgr = _unresolved_6.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1adf5cnogtHcpfDcDVfN2NQ", "BattleMainItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'Label', 'log', 'Node', 'Sprite', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BattleMainItem", BattleMainItem = (_dec = ccclass('BattleMainItem'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Sprite), _dec6 = property(Sprite), _dec7 = property(Node), _dec8 = property(Sprite), _dec9 = property(Sprite), _dec10 = property(Node), _dec(_class = (_class2 = class BattleMainItem extends (_crd && InfiniteCell === void 0 ? (_reportPossibleCrUseOfInfiniteCell({
        error: Error()
      }), InfiniteCell) : InfiniteCell) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "lbl_name", _descriptor, this);

          _initializerDefineProperty(this, "node_stage", _descriptor2, this);

          _initializerDefineProperty(this, "node_bar", _descriptor3, this);

          _initializerDefineProperty(this, "sp_lock_icon", _descriptor4, this);

          _initializerDefineProperty(this, "sp_icon", _descriptor5, this);

          _initializerDefineProperty(this, "node_active", _descriptor6, this);

          _initializerDefineProperty(this, "sp_select_unLock", _descriptor7, this);

          _initializerDefineProperty(this, "sp_select_lock", _descriptor8, this);

          _initializerDefineProperty(this, "node_info", _descriptor9, this);

          this.ClickStage = 0;
          this._chapterData = null;
          this.touchCallBack = void 0;
          this._selfData = null;
          this.stageIds = [];
        }

        onLoad() {
          this.node.on(Node.EventType.TOUCH_END, this.onTouchItem, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onButtonTouchCancel, this);
          this.node.on(Node.EventType.TOUCH_START, this.onButtonTouchStart, this);
        }

        onButtonTouchStart(event) {
          // 阻止 ScrollView 的触摸事件
          event.propagationStopped = true;
        }

        setTouchCallBack(callBack) {
          this.touchCallBack = callBack;
        }

        onButtonTouchCancel(event) {
          // 阻止 ScrollView 的触摸事件
          event.propagationStopped = true;
        }

        onTouchItem(e) {
          console.log("cocos TOUCH_END this.dataIndex=", this.dataIndex);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).Level_Item_Select, [this.dataIndex]);
        }

        UpdateContent(info) {
          this._selfData = info.ins;
          var data = info.index;
          this.node_stage.parent.active = false;
          this.sp_select_lock.node.active = false;
          this.sp_select_unLock.node.active = false;

          var curFightStageId = this._selfData.getCurFightStageId();

          this._chapterData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().MainChapterTableById.getValue(data + 1);
          this.stageIds = null;

          if (this._selfData.stageInfo) {
            this.stageIds = this._chapterData.StageIds;
          } else {
            this.stageIds = this._chapterData.EliteStageIds;
          }

          this.sp_select_unLock.setTexture(this._chapterData.IconSelect);
          this.sp_select_lock.setTexture(this._chapterData.IconSelect); // 获取当前的章节

          this.ClickStage = this.stageIds[0]; // 章节名称

          this.lbl_name.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(this._chapterData.Name); // 章节图片

          this.sp_lock_icon.setTexture(this._chapterData.Icon);
          this.sp_icon.setTexture(this._chapterData.Icon);

          var islock = this._selfData.getStageIsLock(this._chapterData.Id);

          this.node_active.active = !islock;

          if (!islock) {
            var levelCount = this.stageIds.length;

            for (var i = 0; i < 5; i++) {
              var stageNode = this.node_stage.getChildByName("Toggle" + (i + 1));
              var stageId = this.stageIds[i];
              stageNode.active = i < levelCount;
              stageNode.getComponent(Toggle).isChecked = curFightStageId == stageId;

              if (curFightStageId == stageId) {
                this.ClickStage = curFightStageId;
              }

              if (i >= 1) {
                var bar = this.node_bar.getChildByName("bar_" + (i + 1));
                bar.active = i < levelCount;
                var lockMark = stageNode.getChildByName("lockmark");
                lockMark.active = curFightStageId < stageId;
              }
            }
          }
        }

        clickSwitchStage(event, stage) {
          /* 判断当前是否解锁 如果未解锁返回 */
          var curFightStageId = this._selfData.getCurFightStageId();

          var levelStage = Number(stage);

          if (this.stageIds[levelStage] && curFightStageId < this.stageIds[levelStage]) {
            this.scheduleOnce(() => {
              var idx = this.stageIds.indexOf(this.ClickStage);
              var stageNode = this.node_stage.getChildByName("Toggle" + (idx + 1));
              stageNode.getComponent(Toggle).isChecked = true;
            });
            return;
          }

          this.ClickStage = this.stageIds[levelStage];
        }

        setSelect(isSelect) {
          this.sp_select_lock.node.active = isSelect;
          this.sp_select_unLock.node.active = isSelect;

          var islock = this._selfData.getStageIsLock(this._chapterData.Id);

          if (!islock) {
            this.node_stage.parent.active = isSelect;
            this.node_stage.active = isSelect;
            this.node_bar.active = isSelect;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbl_name", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_stage", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_bar", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sp_lock_icon", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sp_icon", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_active", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "sp_select_unLock", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "sp_select_lock", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "node_info", [_dec10], {
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
//# sourceMappingURL=1a30715bb8a9deda47681c85eea9a77417ceb402.js.map