System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Node, Prefab, JadeSkillItem, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, JadeRecastItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfJadeSkillItem(extras) {
    _reporterNs.report("JadeSkillItem", "./JadeSkillItem", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      JadeSkillItem = _unresolved_2.JadeSkillItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "67f6bkwTv5KbLekNmqTyoZ7", "JadeRecastItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("JadeRecastItem", JadeRecastItem = (_dec = ccclass('JadeRecastItem'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Prefab), _dec(_class = (_class2 = class JadeRecastItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "nowNode", _descriptor, this);

          _initializerDefineProperty(this, "newNode", _descriptor2, this);

          _initializerDefineProperty(this, "skillNode", _descriptor3, this);

          _initializerDefineProperty(this, "skillItemPrefab", _descriptor4, this);
        }

        start() {}

        initData(skills, isNew) {
          this.nowNode.active = !isNew;
          this.newNode.active = isNew;
          this.skillNode.removeAllChildren();

          for (let key in skills) {
            let item = instantiate(this.skillItemPrefab);
            item.parent = this.skillNode;
            item.getComponent(_crd && JadeSkillItem === void 0 ? (_reportPossibleCrUseOfJadeSkillItem({
              error: Error()
            }), JadeSkillItem) : JadeSkillItem).initSkillId(skills[key]);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nowNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "newNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "skillNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "skillItemPrefab", [_dec5], {
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
//# sourceMappingURL=16ade3f7412478b3b338113d499c71113f180901.js.map