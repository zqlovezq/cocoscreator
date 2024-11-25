System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, RichText, ShowTips, LangMgr, TRIALLAYER, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, TrialToggleBtn;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfRookieTaskPop(extras) {
    _reporterNs.report("RookieTaskPop", "./RookieTaskPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTRIALLAYER(extras) {
    _reporterNs.report("TRIALLAYER", "../../../../Common/script/EnumTypeMgr", _context.meta, extras);
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
      Node = _cc.Node;
      RichText = _cc.RichText;
    }, function (_unresolved_2) {
      ShowTips = _unresolved_2.ShowTips;
    }, function (_unresolved_3) {
      LangMgr = _unresolved_3.LangMgr;
    }, function (_unresolved_4) {
      TRIALLAYER = _unresolved_4.TRIALLAYER;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d5cb0uLSAdOjKmw8GWsg1xy", "TrialToggleBtn", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'RichText']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TrialToggleBtn", TrialToggleBtn = (_dec = ccclass('TrialToggleBtn'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class TrialToggleBtn extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "node_lock", _descriptor, this);

          _initializerDefineProperty(this, "node_red", _descriptor2, this);

          this.mainView = null;
          this.layer_view = (_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).NONE;
          this.select = false;
          this.isLock = false;
          this.node_toggle = null;
        }

        onLoad() {
          this.node.on(Node.EventType.TOUCH_END, this.clickBtn, this);
        }

        initToggle(mainView, isSelect, isLock, index) {
          this.mainView = mainView;
          this.layer_view = this.mainView.getLayerType();
          var rookieNode = this.node.getChildByName("rookie_node");
          var eliteNode = this.node.getChildByName("elite_node");
          rookieNode.active = false;
          eliteNode.active = false;
          this.node_toggle = this.layer_view === (_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ROOKIE ? rookieNode : eliteNode;
          this.setSelect(isSelect);
          this.isLock = isLock;
          this.node_lock.active = isLock;

          if (this.layer_view === (_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ROOKIE) {
            rookieNode.active = true;
            var text1 = rookieNode.getChildByName("richtext").getComponent(RichText);
            var text2 = rookieNode.getChildByName("Checkmark").getChildByName("select_richtext").getComponent(RichText);
            text1.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString('ui_trial_1', [index]);
            text2.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString('ui_trial_3', [index]);
          } else {
            eliteNode.active = true;

            var _text = eliteNode.getChildByName("richtext").getComponent(RichText);

            var _text2 = eliteNode.getChildByName("Checkmark").getChildByName("select_richtext").getComponent(RichText);

            _text.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString('ui_trial_2', [index]);
            _text2.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString('ui_trial_3', [index]);
          }
        }

        setSelect(isSelect) {
          this.select = isSelect;
          this.node_toggle.getChildByName("Checkmark").active = isSelect;
        }

        clickBtn() {
          if (this.select) {
            return;
          } else {
            if (this.isLock) {
              (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
                error: Error()
              }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab("ui_commondesc_85"));
              return;
            } else {
              // 切换天数
              this.mainView.clickSwitchDay(this, Number(this.node.name));
              this.setSelect(true);
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_lock", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_red", [_dec3], {
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
//# sourceMappingURL=f2f11c670bd15842b1669f54edc86d4e97fc9ea0.js.map