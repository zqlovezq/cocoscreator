System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Layers, Node, Vec3, _decorator, PvpRole, PvpBullet, PvpObjType, _dec, _class, _class2, _crd, ccclass, property, PvpObjFactory;

  function _reportPossibleCrUseOfPvpRole(extras) {
    _reporterNs.report("PvpRole", "./PvpRole", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPvpBullet(extras) {
    _reporterNs.report("PvpBullet", "./PvpBullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPvpObj(extras) {
    _reporterNs.report("PvpObj", "./PvpObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPvpObjType(extras) {
    _reporterNs.report("PvpObjType", "./PvpObj", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Layers = _cc.Layers;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      PvpRole = _unresolved_2.PvpRole;
    }, function (_unresolved_3) {
      PvpBullet = _unresolved_3.PvpBullet;
    }, function (_unresolved_4) {
      PvpObjType = _unresolved_4.PvpObjType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ac558eOVnhBer/V1i5czJGF", "PvpObjFactory", undefined);

      __checkObsolete__(['Input', 'Layers', 'Node', 'ObjectCurve', 'PhysicsSystem', 'Prefab', 'Quat', 'TiledUserNodeData', 'Vec3', '_decorator', 'instantiate', 'sp', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);
      /**战斗对象工厂 */

      _export("PvpObjFactory", PvpObjFactory = (_dec = ccclass('PvpObjFactory'), _dec(_class = (_class2 = class PvpObjFactory {
        static init() {
          PvpObjFactory.getObjList((_crd && PvpObjType === void 0 ? (_reportPossibleCrUseOfPvpObjType({
            error: Error()
          }), PvpObjType) : PvpObjType).role);
          PvpObjFactory.getObjList((_crd && PvpObjType === void 0 ? (_reportPossibleCrUseOfPvpObjType({
            error: Error()
          }), PvpObjType) : PvpObjType).bullet);
        }

        static getRole(parent, args) {
          return PvpObjFactory.get((_crd && PvpObjType === void 0 ? (_reportPossibleCrUseOfPvpObjType({
            error: Error()
          }), PvpObjType) : PvpObjType).role, parent, args);
        }

        static getBullet(parent, args) {
          return PvpObjFactory.get((_crd && PvpObjType === void 0 ? (_reportPossibleCrUseOfPvpObjType({
            error: Error()
          }), PvpObjType) : PvpObjType).bullet, parent, args);
        }

        static get(absType, parent, args) {
          let obj;
          obj = PvpObjFactory.getObjList(absType).pop();

          if (obj == null) {
            if (absType === (_crd && PvpObjType === void 0 ? (_reportPossibleCrUseOfPvpObjType({
              error: Error()
            }), PvpObjType) : PvpObjType).role) {
              obj = new Node("Role").addComponent(_crd && PvpRole === void 0 ? (_reportPossibleCrUseOfPvpRole({
                error: Error()
              }), PvpRole) : PvpRole);
            } else if (absType == (_crd && PvpObjType === void 0 ? (_reportPossibleCrUseOfPvpObjType({
              error: Error()
            }), PvpObjType) : PvpObjType).bullet) {
              obj = new Node("bullet").addComponent(_crd && PvpBullet === void 0 ? (_reportPossibleCrUseOfPvpBullet({
                error: Error()
              }), PvpBullet) : PvpBullet);
            }
          }

          obj.node.layer = Layers.Enum.DEFAULT;
          obj.node.active = true;

          if (parent) {
            parent.addChild(obj.node);
          } else {// FightRootControl.ins.getRootView().addNode(obj.node)
          }

          obj.setAngle(0);
          obj.setScale(Vec3.ONE);
          obj.isRecycle = false;
          return obj;
        }

        static getObjList(absType) {
          let absList = PvpObjFactory.pools.get(absType);

          if (absList == null) {
            absList = [];
            PvpObjFactory.pools.set(absType, absList);
          }

          return absList;
        }

        static put(obj) {
          if (obj == null || obj && obj.isRecycle) {
            return;
          }

          obj.isRecycle = true;
          obj.reset();
          obj.node.removeFromParent();
          PvpObjFactory.getObjList(obj.objType).push(obj);
        }
        /** 销毁对象池 */


        static destroy() {
          PvpObjFactory.pools.forEach((value, key) => {
            value.forEach(item => {
              item.node.destroy();
            });
            value.length = 0;
          });
        }

      }, _class2.pools = new Map(), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=78d7099d1425cf97ff7fe01932cbf46e41a71b4a.js.map