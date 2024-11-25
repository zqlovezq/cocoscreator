System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, Toggle, EventMgr, LocalEvent, RANKING_TYPE, LangMgr, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, RankToggleItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRANKING_TYPE(extras) {
    _reporterNs.report("RANKING_TYPE", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
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
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.EventMgr;
    }, function (_unresolved_3) {
      LocalEvent = _unresolved_3.LocalEvent;
    }, function (_unresolved_4) {
      RANKING_TYPE = _unresolved_4.RANKING_TYPE;
    }, function (_unresolved_5) {
      LangMgr = _unresolved_5.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cb8b6nqJY1FY4Ovog9DUsSO", "RankToggleItem", undefined);
      /*
       * @Date: 2024-06-13 09:54:30
       * @LastEditors: wzq
       * @LastEditTime: 2024-11-13 10:19:29
       */


      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'Label', 'Node', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RankToggleItem", RankToggleItem = (_dec = ccclass('RankToggleItem'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Node), _dec(_class = (_class2 = class RankToggleItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "node_toggle", _descriptor, this);

          _initializerDefineProperty(this, "lbl_toggle_name", _descriptor2, this);

          _initializerDefineProperty(this, "node_arrow", _descriptor3, this);

          this._toggle_type = (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).NONE;
          this._clickChildType = 0;
        }

        setData(type) {
          this.node.name = String(type);
          this._toggle_type = type; //const nameLblArr = ["闯关榜","等级榜","战力榜"];

          const nameLblArr = [(_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab("ui_rank_4"), (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab("ui_rank_5"), (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab("ui_rank_6"), (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab("ui_rank_8")];

          if (this._toggle_type === (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).HERO) {
            //this.lbl_toggle_name.string = "英雄榜"
            this.lbl_toggle_name.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("ui_rank_3");
          } else if (this._toggle_type === (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).GUILD) {
            this.lbl_toggle_name.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("ui_rank_9");
          } else if (this._toggle_type == (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).Fight) {
            this.lbl_toggle_name.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("ui_rank_10");
          } else {
            this.lbl_toggle_name.string = nameLblArr[type - 6];
          }

          this.node_arrow.active = false;
        }

        onClickCheck(e, type) {
          this.node_arrow.active = false;
          this.node.getComponent(Toggle).isChecked = true;

          if (type) {
            this._toggle_type = Number(type);
          }

          if (this._toggle_type === (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).HERO) {
            this._clickChildType = 0;

            if (this.node_toggle.active) {
              this.node_toggle.active = false;
              this.node_arrow.active = true;
              this.node_arrow.children[0].active = false;
              this.node_arrow.children[1].active = true;
            } else {
              this.node_toggle.active = true;
              this.node_arrow.active = true;
              this.node_arrow.children[0].active = true;
              this.node_arrow.children[1].active = false;
              this.node_toggle.children[0].getComponent(Toggle).isChecked = true;
              this.onCheckChild(null, "1");
            }
          } else {
            const heroItem = this.node.parent.getChildByName(String((_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
              error: Error()
            }), RANKING_TYPE) : RANKING_TYPE).HERO)).getComponent(RankToggleItem);
            heroItem.node_toggle.active = false;
            heroItem.node_arrow.active = true;
            heroItem.node_arrow.children[0].active = false;
            heroItem.node_arrow.children[1].active = true;
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).Rank_Change, Number(this._toggle_type));
          }
        }

        onCheckChild(event, index) {
          if (this._clickChildType !== Number(index)) {
            this._clickChildType = Number(index);
          } else {
            return;
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).Rank_Change, Number(index));
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_toggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbl_toggle_name", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_arrow", [_dec4], {
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
//# sourceMappingURL=514259fccb4cbc832ea59f7f49f1cb74c5b98274.js.map