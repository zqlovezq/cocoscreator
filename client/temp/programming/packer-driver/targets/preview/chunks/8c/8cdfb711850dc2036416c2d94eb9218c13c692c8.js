System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Node, Prefab, ViewPop, JadeSkillItem, tab, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, JadeSkillPreviewPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJadeSkillItem(extras) {
    _reporterNs.report("JadeSkillItem", "./JadeSkillItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
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
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      JadeSkillItem = _unresolved_3.JadeSkillItem;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8ae83kIQcFJcZHtAfKnCqU5", "JadeSkillPreviewPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("JadeSkillPreviewPop", JadeSkillPreviewPop = (_dec = ccclass('JadeSkillPreviewPop'), _dec2 = property(Node), _dec3 = property(Prefab), _dec(_class = (_class2 = class JadeSkillPreviewPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "contentNode", _descriptor, this);

          _initializerDefineProperty(this, "skillItemPrefab", _descriptor2, this);

          this.currTag = 1;
          this.skillItems = void 0;
          this.baseSkills = void 0;
          this.highSkills = void 0;
        }

        register() {}

        start() {
          this.initView();
        }

        initView() {
          this.baseSkills = [];
          this.highSkills = [];
          this.skillItems = [];
          var tables = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().EquipSkillTable;

          for (var value of tables) {
            if (value.Group == "skill_basic") {
              this.baseSkills.push(value);
            } else if (value.Group == "skill_high") {
              this.highSkills.push(value);
            }
          }

          this.initSkillItem();
        }

        initSkillItem() {
          var skills = [];

          if (this.currTag == 1) {
            skills = this.baseSkills;
          } else {
            skills = this.highSkills;
          }

          for (var key in this.skillItems) {
            this.skillItems[key].node.active = false;
          }

          for (var _key in skills) {
            if (!this.skillItems[_key]) {
              var node = instantiate(this.skillItemPrefab);
              node.parent = this.contentNode;
              this.skillItems.push(node.getComponent(_crd && JadeSkillItem === void 0 ? (_reportPossibleCrUseOfJadeSkillItem({
                error: Error()
              }), JadeSkillItem) : JadeSkillItem));
            }

            this.skillItems[_key].node.active = true;

            this.skillItems[_key].initSkill(skills[_key]);
          }
        }

        onClickToggle(event, type) {
          var tag = Number(type);

          if (this.currTag != tag) {
            this.currTag = tag;
            this.initSkillItem();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "skillItemPrefab", [_dec3], {
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
//# sourceMappingURL=8cdfb711850dc2036416c2d94eb9218c13c692c8.js.map