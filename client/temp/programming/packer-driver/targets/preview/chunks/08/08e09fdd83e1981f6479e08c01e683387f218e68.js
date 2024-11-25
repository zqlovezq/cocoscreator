System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, error, Node, Sprite, tab, UIMgr, ViewName, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, TopWarBossSkillItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
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
      error = _cc.error;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      UIMgr = _unresolved_3.UIMgr;
    }, function (_unresolved_4) {
      ViewName = _unresolved_4.ViewName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f85bf4Wh59CJLavZsAVkdpx", "topWarBossSkillItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'error', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * TopWarBossSkillItem
       * zhudingchao
       * Tue Jul 09 2024 14:00:36 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/jianghu/topWar/topWarBossSkillItem.ts
       *
       */

      _export("TopWarBossSkillItem", TopWarBossSkillItem = (_dec = ccclass('TopWarBossSkillItem'), _dec2 = property(Node), _dec3 = property(Sprite), _dec(_class = (_class2 = class TopWarBossSkillItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "selectNode", _descriptor, this);

          _initializerDefineProperty(this, "skillIcon", _descriptor2, this);

          this.skillTable = void 0;
        }

        initSkillId(id) {
          this.skillTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().EquipSkillTableById.getValue(id);

          if (this.skillTable) {
            this.initView();
          } else {
            error("EquipSkillTable表找不到id：", id);
          }
        }

        initView() {
          this.skillIcon.setTexture(this.skillTable.SkillIcon);
        }

        onTouchItem() {
          this.selectNode.active = true;

          var callBack = () => {
            this.selectNode.active = false;
          };

          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).JadeSkillDetailPop,
            data: {
              "skillTable": this.skillTable,
              "closeCallBack": callBack
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "selectNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "skillIcon", [_dec3], {
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
//# sourceMappingURL=08e09fdd83e1981f6479e08c01e683387f218e68.js.map