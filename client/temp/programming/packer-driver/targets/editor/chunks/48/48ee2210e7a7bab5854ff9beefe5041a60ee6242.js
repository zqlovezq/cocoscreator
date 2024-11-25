System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Layers, Node, v3, EffectUI, FightData, AbsObjInfoAttr, tab, _dec, _class, _crd, ccclass, property, HoldTimeEffectUI;

  function _reportPossibleCrUseOfEffectUI(extras) {
    _reporterNs.report("EffectUI", "./EffectUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRole(extras) {
    _reporterNs.report("Role", "../obj/role/role/Role", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../../data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjInfoAttr(extras) {
    _reporterNs.report("AbsObjInfoAttr", "../obj/AbsObjInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPvpRole(extras) {
    _reporterNs.report("PvpRole", "../../pvp/obj/PvpRole", _context.meta, extras);
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
      Layers = _cc.Layers;
      Node = _cc.Node;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      EffectUI = _unresolved_2.EffectUI;
    }, function (_unresolved_3) {
      FightData = _unresolved_3.FightData;
    }, function (_unresolved_4) {
      AbsObjInfoAttr = _unresolved_4.AbsObjInfoAttr;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "78ca0I5quVL24KDUzJ+pBlf", "HoldTimeEffectUI", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Layers', 'Node', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 蓄力特效 */

      _export("HoldTimeEffectUI", HoldTimeEffectUI = (_dec = ccclass('HoldTimeEffectUI'), _dec(_class = class HoldTimeEffectUI extends Component {
        constructor(...args) {
          super(...args);
          this.abs = void 0;
          this.effectUi = void 0;
          this.checkTime = 500;
          this.holdMinTime = 0;
          this.animationId = 0;
          this.cdTime = 0;
          this.pvpRole = void 0;
        }

        static create() {
          let nn = new Node("HoldTimeEffectUI");
          nn.layer = Layers.Enum.DEFAULT;
          return nn.addComponent(HoldTimeEffectUI);
        }

        setAbs(_abs) {
          this.abs = _abs;
          this.node.position = _abs.getHitPos();
          this.checkMinTime();
          this.abs.holdEffect = this;
        }

        checkMinTime() {
          this.holdMinTime = 0;

          if (this.abs && this.abs.info) {
            this.abs.info.holdTimeTrigger.sort((a, b) => {
              return a.Parameters[0] - b.Parameters[0];
            });
            this.holdMinTime = this.abs.info.holdTimeTrigger[0].getHoldTime(this.abs.info.attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AttrType.AttrType_HoldTimePercent));
          }

          if (this.holdMinTime == 0) {
            this.remove();
          }
        }

        updateFrame(dt) {
          this.cdTime += dt;

          if (this.cdTime > this.checkTime) {
            this.cdTime = 0;
            this.checkMinTime();
          }

          if (this.holdMinTime == 0) {
            return;
          }

          if (this.abs && this.abs.info) {
            this.changeAnimId((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).time - this.abs.info.getObjAttr((_crd && AbsObjInfoAttr === void 0 ? (_reportPossibleCrUseOfAbsObjInfoAttr({
              error: Error()
            }), AbsObjInfoAttr) : AbsObjInfoAttr).holdTime));
          }
        }

        changeAnimId(passTime) {
          if (passTime >= this.holdMinTime) {
            this.run((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().HoldFull);
          } else {
            this.run((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().Holding);
          }
        }

        run(animId) {
          if (this.animationId == animId) {
            return;
          }

          this.recycleEffect();
          this.animationId = animId;
          this.effectUi = (_crd && EffectUI === void 0 ? (_reportPossibleCrUseOfEffectUI({
            error: Error()
          }), EffectUI) : EffectUI).create();
          this.effectUi.node.parent = this.node;
          this.effectUi.node.position = v3();
          this.effectUi.run(animId, () => {
            this.effectUi = null;
            this.animationId = 0;
          });
        }

        recycleEffect() {
          if (this.effectUi) {
            this.effectUi.remove();
          }

          this.effectUi = null;
        }

        remove() {
          this.recycleEffect();
          this.node.destroy();
        }

        setAbsPvp(_abs) {
          this.pvpRole = _abs;
          this.node.position = _abs.getHitPos();
          this.pvpRole.holdEffect = this;
        }

        resetTimePvp() {
          this.cdTime = 0;
          this.changeAnimId(this.cdTime);
        }

        updateFramePvp(dt) {
          this.cdTime += dt;
          this.changeAnimId(this.cdTime);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=48ee2210e7a7bab5854ff9beefe5041a60ee6242.js.map