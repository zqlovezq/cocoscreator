System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, ProgressBar, SpriteFrame, LangMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, HP_PRO, ccclass, property, FightBossBarItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfFightAttrData(extras) {
    _reporterNs.report("FightAttrData", "../../data/FightAttrData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonster(extras) {
    _reporterNs.report("Monster", "../../base/obj/role/monster/Monster", _context.meta, extras);
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
      Component = _cc.Component;
      Label = _cc.Label;
      ProgressBar = _cc.ProgressBar;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      LangMgr = _unresolved_2.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e2594HTJFxMkJUJyywm5mQW", "FightBossBarItem", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Color', 'Component', 'Label', 'Node', 'Prefab', 'ProgressBar', 'Sprite', 'SpriteFrame']);

      HP_PRO = 2000;
      ({
        ccclass,
        property
      } = _decorator);
      /** 战斗Boss进度条， 血条*/

      _export("FightBossBarItem", FightBossBarItem = (_dec = ccclass('FightBossBarItem'), _dec2 = property(ProgressBar), _dec3 = property(ProgressBar), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property([SpriteFrame]), _dec(_class = (_class2 = class FightBossBarItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "hpBar1", _descriptor, this);

          _initializerDefineProperty(this, "hpBar2", _descriptor2, this);

          _initializerDefineProperty(this, "nameLab", _descriptor3, this);

          _initializerDefineProperty(this, "hpCount", _descriptor4, this);

          _initializerDefineProperty(this, "barSfs", _descriptor5, this);

          this._isActive = false;
          this.attrData = void 0;
          this.monster = void 0;
          this.lastHp = 0;
          this.lastCount = 0;
        }

        setBoss(_monster) {
          this.monster = _monster;

          if (this.monster == null) {
            this.node.active = false;
            return;
          }

          this.lastHp = -1;
          this.node.active = true;
          this.setAttrData(this.monster.info.attrData);
          this.nameLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(this.monster.info.configTab.Name);
        }

        dead() {
          if (this.node.active && this.monster.isDead) {
            this.hpBar1.progress = this.hpBar2.progress = 0;
          }
        }

        setAttrData(data) {
          this.attrData = data;
        }

        update(dt) {
          if (this.monster && !this.monster.isDead && this.monster.info) {
            this.changeHp();
          }
        }

        changeHp() {
          if (this.lastHp == 1 || this.lastHp != this.attrData.hpPercent) {
            this.lastHp = this.attrData.hpPercent;
            var count = Math.ceil(this.lastHp / HP_PRO);

            if (count != this.lastCount) {
              this.hpCount.string = "x" + count;
              this.changeColor(count);
            }

            this.lastCount = count;
            this.hpBar2.progress = 1 - (count * HP_PRO - this.lastHp) / HP_PRO;
          }
        }

        changeColor(colorCount) {
          colorCount = colorCount - 1;
          this.hpBar2.barSprite.spriteFrame = this.barSfs[colorCount];

          if (colorCount != 0) {
            this.hpBar1.barSprite.spriteFrame = this.barSfs[colorCount - 1];
            this.hpBar1.progress = 1;
          } else {
            this.hpBar1.progress = 0;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "hpBar1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "hpBar2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "hpCount", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "barSfs", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=74ba00e80da1aee71dcde9d63b9248630bae065c.js.map