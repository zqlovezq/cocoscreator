System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, ProgressBar, FightMacro, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, FightBarItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfFightAttrData(extras) {
    _reporterNs.report("FightAttrData", "../../data/FightAttrData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMacro(extras) {
    _reporterNs.report("FightMacro", "../../define/FightDefine", _context.meta, extras);
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
      ProgressBar = _cc.ProgressBar;
    }, function (_unresolved_2) {
      FightMacro = _unresolved_2.FightMacro;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "553925syOFAiYVp0nUyysM/", "FightBarItem", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Color', 'Component', 'Label', 'Node', 'Prefab', 'ProgressBar', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 战斗角色进度条， 血条、护盾、技能cd */

      _export("FightBarItem", FightBarItem = (_dec = ccclass('FightBarItem'), _dec2 = property(Node), _dec3 = property(ProgressBar), _dec4 = property(ProgressBar), _dec5 = property(ProgressBar), _dec6 = property(ProgressBar), _dec(_class = (_class2 = class FightBarItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "hpBg", _descriptor, this);

          _initializerDefineProperty(this, "hpBar", _descriptor2, this);

          _initializerDefineProperty(this, "hpBar1", _descriptor3, this);

          _initializerDefineProperty(this, "shieldBar", _descriptor4, this);

          _initializerDefineProperty(this, "skillCdBar", _descriptor5, this);

          this._isActive = false;
          this.attrData = void 0;
        }

        get isActive() {
          return this._isActive;
        }

        set isActive(bo) {
          this._isActive = bo;
          this.node.active = bo;
          this.changeSkillCd(1);
          this.changeHp();
        }

        setAttrData(data) {
          this.attrData = data;
        }

        changeHp() {
          this.hpBar1.progress = this.hpBar.progress = this.attrData.hpPercent / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT;
          this.shieldBar.progress = this.attrData.shield / this.attrData.maxShield;
          this.checkHpShow();
        }

        checkHpShow() {
          this.hpBg.active = this.shieldBar.node.active = this.hpBar.node.active = this.hpBar1.node.active = false;

          if (this.attrData.shield > 0) {
            this.hpBg.active = this.shieldBar.node.active = true;
            this.hpRedOrGreen();
          } else {
            if (this.attrData.hpPercent < (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
              error: Error()
            }), FightMacro) : FightMacro).PERCENT) {
              this.hpBg.active = true;
              this.hpRedOrGreen();
            }
          }
        }

        hpRedOrGreen() {
          this.hpBar.node.active = this.attrData.hpPercent >= 5000;
          this.hpBar1.node.active = !this.hpBar.node.active;
        }

        changeSkillCd(pro) {
          pro = Math.min(pro, 1);
          this.skillCdBar.progress = pro;
          this.skillCdBar.node.active = pro != 1;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "hpBg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "hpBar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "hpBar1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "shieldBar", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "skillCdBar", [_dec6], {
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
//# sourceMappingURL=258882eed15e8514afec4be353c22bbe973c47d5.js.map