System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Layers, Node, Vec3, _decorator, AbsObjType, Bullet, Monster, Role, FightRootControl, RoleInfo, MonsterInfo, BulletInfo, _dec, _class, _class2, _crd, ccclass, property, AbsObjFactory;

  function _reportPossibleCrUseOfAbsObj(extras) {
    _reporterNs.report("AbsObj", "./AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjType(extras) {
    _reporterNs.report("AbsObjType", "./AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "./bullet/Bullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonster(extras) {
    _reporterNs.report("Monster", "./role/monster/Monster", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRole(extras) {
    _reporterNs.report("Role", "./role/role/Role", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightRootControl(extras) {
    _reporterNs.report("FightRootControl", "../../FightRootControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjInfo(extras) {
    _reporterNs.report("AbsObjInfo", "./AbsObjInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleInfo(extras) {
    _reporterNs.report("RoleInfo", "./role/role/RoleInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterInfo(extras) {
    _reporterNs.report("MonsterInfo", "./role/monster/MonsterInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletInfo(extras) {
    _reporterNs.report("BulletInfo", "./bullet/BulletInfo", _context.meta, extras);
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
      AbsObjType = _unresolved_2.AbsObjType;
    }, function (_unresolved_3) {
      Bullet = _unresolved_3.Bullet;
    }, function (_unresolved_4) {
      Monster = _unresolved_4.Monster;
    }, function (_unresolved_5) {
      Role = _unresolved_5.Role;
    }, function (_unresolved_6) {
      FightRootControl = _unresolved_6.FightRootControl;
    }, function (_unresolved_7) {
      RoleInfo = _unresolved_7.RoleInfo;
    }, function (_unresolved_8) {
      MonsterInfo = _unresolved_8.MonsterInfo;
    }, function (_unresolved_9) {
      BulletInfo = _unresolved_9.BulletInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "93b7chG/IBBXbjO7rHn0Rsv", "AbsObjFactory", undefined);

      __checkObsolete__(['Input', 'Layers', 'Node', 'ObjectCurve', 'PhysicsSystem', 'Prefab', 'Quat', 'TiledUserNodeData', 'Vec3', '_decorator', 'instantiate', 'sp', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);
      /**战斗对象工厂 */

      _export("AbsObjFactory", AbsObjFactory = (_dec = ccclass('AbsObjFactory'), _dec(_class = (_class2 = class AbsObjFactory {
        static addSelfId() {
          AbsObjFactory.selfId += 1;
          return AbsObjFactory.selfId;
        }

        static init() {
          AbsObjFactory.selfId = 0;
          AbsObjFactory.getObjList((_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
            error: Error()
          }), AbsObjType) : AbsObjType).role);
          AbsObjFactory.getObjList((_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
            error: Error()
          }), AbsObjType) : AbsObjType).enemy);
          AbsObjFactory.getObjList((_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
            error: Error()
          }), AbsObjType) : AbsObjType).bullet);
        }

        static getRole(objInfo, parent, args) {
          return AbsObjFactory.get((_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
            error: Error()
          }), AbsObjType) : AbsObjType).role, objInfo, parent, args);
        }

        static getMonster(objInfo, parent, args) {
          return AbsObjFactory.get((_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
            error: Error()
          }), AbsObjType) : AbsObjType).enemy, objInfo, parent, args);
        }

        static getBullet(objInfo, parent, args) {
          return AbsObjFactory.get((_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
            error: Error()
          }), AbsObjType) : AbsObjType).bullet, objInfo, parent, args);
        }

        static getObjList(absType) {
          var absList = AbsObjFactory.pools.get(absType);

          if (absList == null) {
            absList = [];
            AbsObjFactory.pools.set(absType, absList);
          }

          if (AbsObjFactory.selfId == 0) {
            console.log("AbsObjFactory.getObjList == 0", absType, absList.length);
          }

          return absList;
        }

        static getObjInfoList(absType) {
          var absList = AbsObjFactory.poolInfos.get(absType);

          if (absList == null) {
            absList = [];
            AbsObjFactory.poolInfos.set(absType, absList);
          }

          return absList;
        }

        static get(absType, objInfo, parent, args) {
          var obj;
          obj = AbsObjFactory.getObjList(absType).pop();

          if (obj == null) {
            if (absType === (_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
              error: Error()
            }), AbsObjType) : AbsObjType).role) {
              obj = new Node("Role").addComponent(_crd && Role === void 0 ? (_reportPossibleCrUseOfRole({
                error: Error()
              }), Role) : Role);
            } else if (absType === (_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
              error: Error()
            }), AbsObjType) : AbsObjType).enemy) {
              obj = new Node("Monster").addComponent(_crd && Monster === void 0 ? (_reportPossibleCrUseOfMonster({
                error: Error()
              }), Monster) : Monster);
            } else if (absType == (_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
              error: Error()
            }), AbsObjType) : AbsObjType).bullet) {
              obj = new Node("bullet").addComponent(_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
                error: Error()
              }), Bullet) : Bullet);
            }
          }

          obj.node.layer = Layers.Enum.DEFAULT;
          obj.node.active = true;

          if (parent) {
            parent.addChild(obj.node);
          } else {
            (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
              error: Error()
            }), FightRootControl) : FightRootControl).ins.getRootView().addNode(obj.node);
          }

          obj.setAngle(0);
          obj.setScale(Vec3.ONE);
          obj.objId = AbsObjFactory.addSelfId();
          obj.isRecycle = false;
          obj.setObjInfo(objInfo);
          obj.initMachine();
          obj.init();
          obj.insert();
          return obj;
        }

        static getData(absType) {
          var objInfo;
          objInfo = AbsObjFactory.getObjInfoList(absType).pop();

          if (objInfo == null) {
            if (absType === (_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
              error: Error()
            }), AbsObjType) : AbsObjType).role) {
              objInfo = new (_crd && RoleInfo === void 0 ? (_reportPossibleCrUseOfRoleInfo({
                error: Error()
              }), RoleInfo) : RoleInfo)();
            } else if (absType === (_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
              error: Error()
            }), AbsObjType) : AbsObjType).enemy) {
              objInfo = new (_crd && MonsterInfo === void 0 ? (_reportPossibleCrUseOfMonsterInfo({
                error: Error()
              }), MonsterInfo) : MonsterInfo)();
            } else if (absType == (_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
              error: Error()
            }), AbsObjType) : AbsObjType).bullet) {
              objInfo = new (_crd && BulletInfo === void 0 ? (_reportPossibleCrUseOfBulletInfo({
                error: Error()
              }), BulletInfo) : BulletInfo)();
            }
          }

          objInfo.isRecycle = false;
          return objInfo;
        }

        static put(obj) {
          if (obj == null || obj && obj.isRecycle) {
            return;
          }

          obj.isRecycle = true;
          obj.reset();
          obj.node.removeFromParent();
          AbsObjFactory.getObjList(obj.objType).push(obj);
        }

        static putData(obj) {
          obj.isRecycle = true;
          obj.reset();
          AbsObjFactory.getObjInfoList(obj.objType).push(obj);
        }
        /** 销毁对象池 */


        static destroy() {
          AbsObjFactory.pools.forEach((value, key) => {
            value.forEach(item => {
              item.node.destroy();
            });
            value.length = 0;
          });
        }

      }, _class2.pools = new Map(), _class2.poolInfos = new Map(), _class2.selfId = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4294c7e69a55d86927370ef19e6b5b5b7944ff6d.js.map