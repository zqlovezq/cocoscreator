System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Font, Label, Layers, Node, Tween, tween, FightRootControl, CocosUtil, ResMgr, FightData, _dec, _class, _class2, _crd, ccclass, property, DamageLab;

  function _reportPossibleCrUseOfFightRootControl(extras) {
    _reporterNs.report("FightRootControl", "../../FightRootControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObj(extras) {
    _reporterNs.report("AbsObj", "../obj/AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCocosUtil(extras) {
    _reporterNs.report("CocosUtil", "../../../utils/CocosUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageData(extras) {
    _reporterNs.report("DamageData", "./DamageData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../../mgr/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../../data/FightData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Font = _cc.Font;
      Label = _cc.Label;
      Layers = _cc.Layers;
      Node = _cc.Node;
      Tween = _cc.Tween;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      FightRootControl = _unresolved_2.FightRootControl;
    }, function (_unresolved_3) {
      CocosUtil = _unresolved_3.CocosUtil;
    }, function (_unresolved_4) {
      ResMgr = _unresolved_4.ResMgr;
    }, function (_unresolved_5) {
      FightData = _unresolved_5.FightData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "602ec0nBvlGg4y6jzXDxGV+", "DamageLab", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'director', 'Font', 'instantiate', 'Label', 'Layers', 'Node', 'Prefab', 'ResolutionPolicy', 'Tween', 'tween', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DamageLab", DamageLab = (_dec = ccclass('DamageLab'), _dec(_class = (_class2 = class DamageLab {
        static get() {
          var lab = this.pools.pop();

          if (!lab) {
            lab = new Node("damageNode").addComponent(Label);
          }

          return lab;
        }

        static put(lab) {
          lab.node.parent = null;
          DamageLab.pools.push(lab);
        }

        static destroy() {
          var child = (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.getDamagesNode().children;
          var len = child.length;

          for (var i = len - 1; i >= 0; i--) {
            var v = child[i];
            Tween.stopAllByTarget(v);
            v.removeFromParent();
            DamageLab.put(v.getComponent(Label));
          }

          for (var index = 0; index < DamageLab.pools.length; index++) {
            var _v = DamageLab.pools[index];

            _v.destroy();
          }

          DamageLab.frameDatas.length = 0;
          DamageLab.pools.length = 0;
        }

        static addShowDamageNum(data, b, frameIndex) {
          if (frameIndex === void 0) {
            frameIndex = 0;
          }

          if (!(_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.isDamage() || data.damage == 0) {
            //不飘伤害，直接回收
            data.recycle();
            return;
          }

          data.pos.x = b.getPosition().x + b.center.x;
          data.pos.y = b.getPosition().y + b.center.y;
          data.frameIndex = frameIndex;

          if (frameIndex > 0) {
            if (frameIndex % 2 == 1) {
              data.pos.x -= frameIndex * 5;
            } else {
              data.pos.x += frameIndex / 2 * 5;
            }

            setTimeout(() => {
              DamageLab.showDamageNum(data);
            }, frameIndex * 200);
          } else {
            DamageLab.showDamageNum(data);
          }
        }

        static showDamageNum(data) {
          var lab = DamageLab.get();
          lab.node.layer = Layers.Enum.DEFAULT;
          lab.string = data.getShowStr();
          lab.fontSize = data.getColor().size || 20;
          lab.font = (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).get(data.getColor().path, Font);
          lab.spacingX = data.getColor().offsetx;
          lab.node.position = data.pos;
          lab.cacheMode = Label.CacheMode.BITMAP;
          (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.getDamagesNode().addChild(lab.node);
          data.recycle();
          tween(lab.node).to(0.09, {
            scale: (_crd && CocosUtil === void 0 ? (_reportPossibleCrUseOfCocosUtil({
              error: Error()
            }), CocosUtil) : CocosUtil).v3(1.75)
          }).to(0.13, {
            scale: (_crd && CocosUtil === void 0 ? (_reportPossibleCrUseOfCocosUtil({
              error: Error()
            }), CocosUtil) : CocosUtil).v3(1)
          }).to(0.13, {
            scale: (_crd && CocosUtil === void 0 ? (_reportPossibleCrUseOfCocosUtil({
              error: Error()
            }), CocosUtil) : CocosUtil).v3(1.5)
          }).to(0.09, {
            scale: (_crd && CocosUtil === void 0 ? (_reportPossibleCrUseOfCocosUtil({
              error: Error()
            }), CocosUtil) : CocosUtil).v3(1)
          }).by(0.13, {
            position: (_crd && CocosUtil === void 0 ? (_reportPossibleCrUseOfCocosUtil({
              error: Error()
            }), CocosUtil) : CocosUtil).v3(0, 50, 0)
          }).call(() => {
            DamageLab.put(lab);
          }).start();
        }

        showCureNum(cureHp, isCritical) {}

      }, _class2.pools = [], _class2.frameDatas = [], _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c3f77a24f5f0476017b13b6392d301d855c4c2b3.js.map