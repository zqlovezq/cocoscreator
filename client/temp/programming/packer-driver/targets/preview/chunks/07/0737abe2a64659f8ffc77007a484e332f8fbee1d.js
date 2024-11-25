System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Mask, Node, UITransform, Vec3, view, AbsControl, FightRootControl, AbsObjFactory, tab, SearchEnemy, ColliderMgr, MathAngle, AbsObjType, Random, EventMgr, FightEvent, AbsOwner, FightMacro, _dec, _class, _class2, _crd, ccclass, property, BulletTargetType, tempPos, tempStartPos, tempTargetPos, bulletBaseTarget, BulletControl;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsRole(extras) {
    _reporterNs.report("AbsRole", "../role/AbsRole", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletInfo(extras) {
    _reporterNs.report("BulletInfo", "./BulletInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightRootControl(extras) {
    _reporterNs.report("FightRootControl", "../../../FightRootControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjFactory(extras) {
    _reporterNs.report("AbsObjFactory", "../AbsObjFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "./Bullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSearchEnemy(extras) {
    _reporterNs.report("SearchEnemy", "../../ai/SearchEnemy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfColliderMgr(extras) {
    _reporterNs.report("ColliderMgr", "../../../../../framework/collision/ColliderMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMathAngle(extras) {
    _reporterNs.report("MathAngle", "../../../../../framework/collision/Maths", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjInfoAttr(extras) {
    _reporterNs.report("AbsObjInfoAttr", "../AbsObjInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjType(extras) {
    _reporterNs.report("AbsObjType", "../AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRandom(extras) {
    _reporterNs.report("Random", "../../../util/Random", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../../../define/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletTab(extras) {
    _reporterNs.report("BulletTab", "../../../power/powerTab/BulletTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsOwner(extras) {
    _reporterNs.report("AbsOwner", "../AbsOwner", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMacro(extras) {
    _reporterNs.report("FightMacro", "../../../define/FightDefine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Mask = _cc.Mask;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      view = _cc.view;
    }, function (_unresolved_2) {
      AbsControl = _unresolved_2.AbsControl;
    }, function (_unresolved_3) {
      FightRootControl = _unresolved_3.FightRootControl;
    }, function (_unresolved_4) {
      AbsObjFactory = _unresolved_4.AbsObjFactory;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }, function (_unresolved_6) {
      SearchEnemy = _unresolved_6.SearchEnemy;
    }, function (_unresolved_7) {
      ColliderMgr = _unresolved_7.ColliderMgr;
    }, function (_unresolved_8) {
      MathAngle = _unresolved_8.MathAngle;
    }, function (_unresolved_9) {
      AbsObjType = _unresolved_9.AbsObjType;
    }, function (_unresolved_10) {
      Random = _unresolved_10.Random;
    }, function (_unresolved_11) {
      EventMgr = _unresolved_11.EventMgr;
    }, function (_unresolved_12) {
      FightEvent = _unresolved_12.FightEvent;
    }, function (_unresolved_13) {
      AbsOwner = _unresolved_13.AbsOwner;
    }, function (_unresolved_14) {
      FightMacro = _unresolved_14.FightMacro;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eb5e7oGjRxIMbWOzMS7uJHW", "BulletControl", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'Color', 'Component', 'instantiate', 'Label', 'Layers', 'Mask', 'Node', 'Prefab', 'Quat', 'Rect', 'sp', 'Sprite', 'tween', 'UITransform', 'v3', 'Vec2', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BulletTargetType", BulletTargetType = /*#__PURE__*/function (BulletTargetType) {
        BulletTargetType[BulletTargetType["default"] = 0] = "default";
        BulletTargetType[BulletTargetType["role"] = 1] = "role";
        BulletTargetType[BulletTargetType["pos"] = 2] = "pos";
        BulletTargetType[BulletTargetType["angle"] = 3] = "angle";
        BulletTargetType[BulletTargetType["owner"] = 4] = "owner";
        return BulletTargetType;
      }({}));

      tempPos = new Vec3(0, 0, 0);
      tempStartPos = new Vec3(0, 0, 0);
      tempTargetPos = new Vec3(0, 0, 0);
      bulletBaseTarget = new Vec3();

      _export("BulletControl", BulletControl = (_dec = ccclass('BulletControl'), _dec(_class = (_class2 = class BulletControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        constructor() {
          super(...arguments);

          /** 组id,同组衰减用 */
          this.groupId = 0;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new BulletControl();
          }

          return this._instance;
        }

        init() {
          this.groupId = 0;
          bulletBaseTarget.x = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().BulletBaseTarget[0];
          bulletBaseTarget.y = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().BulletBaseTarget[1];
        }
        /** 自增组id */


        addSelfGroupId() {
          this.groupId++;
          return this.groupId;
        }
        /** 点击发射子弹 肯定是从自身发出*/


        clickEmitBullet(bulletTab, attack, targetPos, bulletGroupId) {
          if (bulletGroupId === void 0) {
            bulletGroupId = 0;
          }

          if (bulletTab == null) {
            console.warn("没有子弹id");
            return;
          }

          if (bulletTab.EffectUnit == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).EffectUnit.EffectUnit_Enemy) {
            return this.emitBullet(bulletTab, (_crd && AbsOwner === void 0 ? (_reportPossibleCrUseOfAbsOwner({
              error: Error()
            }), AbsOwner) : AbsOwner).get(attack.objId), attack.getShotPos(), null, targetPos, bulletGroupId);
          } //友军、自己走自动逻辑


          return this.audoEmitBullet(bulletTab, attack, bulletGroupId);
        }
        /** 自动发射子弹 */


        audoEmitBullet(bulletTab, attack, bulletGroupId) {
          if (bulletGroupId === void 0) {
            bulletGroupId = 0;
          }

          if (bulletTab == null) {
            console.warn("没有子弹id");
            return;
          }

          if (bulletTab.SearchEnemy == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).SearchEnemy.SearchEnemy_None) {
            return this.emitBullet(bulletTab, (_crd && AbsOwner === void 0 ? (_reportPossibleCrUseOfAbsOwner({
              error: Error()
            }), AbsOwner) : AbsOwner).get(attack.objId), attack.getShotPos(), null, null, bulletGroupId);
          }

          var enemy = (_crd && SearchEnemy === void 0 ? (_reportPossibleCrUseOfSearchEnemy({
            error: Error()
          }), SearchEnemy) : SearchEnemy).getBySearchEnemy(attack.objId, attack.objType, attack.getShotPos(), bulletTab.EnemyUnit, bulletTab.SearchEnemy); // if (enemy == null) {
          //     console.log("子弹找不到目标")
          //     return
          // }

          return BulletControl.ins.emitBullet(bulletTab, (_crd && AbsOwner === void 0 ? (_reportPossibleCrUseOfAbsOwner({
            error: Error()
          }), AbsOwner) : AbsOwner).get(attack.objId), attack.getShotPos(), enemy, null);
        }
        /**
         * 发射子弹
         * @param bulletTab 子弹配置
         * @param owner (归属)发射者
         * @param startPos 开始位置
         * @param targetPos 目标位置， 如果为null，则自动寻找目标
         * @param bulletGroupId 子弹组id
         * @param parentSoleId 父子弹唯一id
         * 
         */


        emitBullet(bulletTab, owner, startPos, targetRole, targetPos, bulletGroupId, parentSoleId, havaDamageObjIds) {
          if (bulletGroupId === void 0) {
            bulletGroupId = 0;
          }

          if (parentSoleId === void 0) {
            parentSoleId = "";
          }

          if (havaDamageObjIds === void 0) {
            havaDamageObjIds = [];
          }

          if (bulletTab == null) {
            console.warn("没有子弹id");
            return;
          }

          tempStartPos.set(startPos);

          if (bulletTab.Fission.length && bulletTab.Fission[0] == 2) {
            if (bulletTab.SearchEnemy == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).SearchEnemy.SearchEnemy_None) {
              if (targetPos == null) {
                targetPos = tempTargetPos;
                targetPos.set(Vec3.ZERO);
              }

              (_crd && MathAngle === void 0 ? (_reportPossibleCrUseOfMathAngle({
                error: Error()
              }), MathAngle) : MathAngle).angleToDirection(bulletTab.Fission[1] / 2, targetPos);
              targetPos.multiplyScalar(100).add(tempStartPos);
            }
          }

          if (targetRole == null && targetPos == null) {
            // console.log("没有找到目标，设置发射角度")
            targetPos = tempTargetPos;
            targetPos.set(bulletBaseTarget);
          }

          var targetType = BulletTargetType.default;

          if (targetRole) {
            targetType = BulletTargetType.role;
            tempPos.set(targetRole.getHitPos());
          } else {
            targetType = BulletTargetType.pos;
            tempPos.set(targetPos);
          }

          if (bulletTab.Fission.length) {
            var tmpGroupId = this.addSelfGroupId();
            var tmpAngle = (_crd && MathAngle === void 0 ? (_reportPossibleCrUseOfMathAngle({
              error: Error()
            }), MathAngle) : MathAngle).posToAngle(tempStartPos, tempPos);
            var list = this.getFissionAngles(tmpAngle, bulletTab.Fission);

            for (var index = 0; index < list.length; index++) {
              var v = list[index];
              this.checkForwardArrow(bulletTab, owner, tempStartPos, BulletTargetType.angle, v, bulletGroupId || tmpGroupId, parentSoleId, havaDamageObjIds);
            }

            return tempPos;
          } else {
            this.checkForwardArrow(bulletTab, owner, tempStartPos, targetType, targetRole || targetPos, bulletGroupId, parentSoleId, havaDamageObjIds);
            return tempPos;
          }
        }

        checkForwardArrow(bulletTab, owner, startPos, targetType, targetObj, bulletGroupId, parentSoleId, havaDamageObjIds) {
          if (bulletGroupId === void 0) {
            bulletGroupId = 0;
          }

          if (parentSoleId === void 0) {
            parentSoleId = "";
          }

          if (havaDamageObjIds === void 0) {
            havaDamageObjIds = [];
          }

          var objAttr = {
            bulletGroupId: bulletGroupId,
            parentSoleId: parentSoleId
          };

          if (bulletTab.ForwardArrow.length) {
            var rate = bulletTab.ForwardArrow[3];

            if ((_crd && Random === void 0 ? (_reportPossibleCrUseOfRandom({
              error: Error()
            }), Random) : Random).isSuccess(rate)) {
              objAttr.isForwardArrow = 1;
              var list = (_crd && MathAngle === void 0 ? (_reportPossibleCrUseOfMathAngle({
                error: Error()
              }), MathAngle) : MathAngle).getForwardDirection(0, bulletTab.ForwardArrow[1], bulletTab.ForwardArrow[2]);

              for (var index = 0; index < list.length; index++) {
                objAttr.forwardArrowOffsetY = list[index];
                this.addBullet(bulletTab, owner, startPos, targetType, targetObj, objAttr, havaDamageObjIds);
              }

              return;
            }
          }

          this.addBullet(bulletTab, owner, startPos, targetType, targetObj, objAttr, havaDamageObjIds);
        }
        /**
         * 添加子弹
         * @param bulletTab 子弹配置
         * @param attack 攻击者
         * @param startPos 开始位置
         * @param targetType 目标类型
         * @param targetObj 目标
         * @param bulletGroudId 子弹组id
         */


        addBullet(bulletTab, owner, startPos, targetType, targetObj, objAttr, havaDamageObjIds) {
          if (havaDamageObjIds === void 0) {
            havaDamageObjIds = [];
          }

          var info = (_crd && AbsObjFactory === void 0 ? (_reportPossibleCrUseOfAbsObjFactory({
            error: Error()
          }), AbsObjFactory) : AbsObjFactory).getData((_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
            error: Error()
          }), AbsObjType) : AbsObjType).bullet);
          info.setConfigTab(bulletTab);
          info.init();
          info.parentSoleId = objAttr.parentSoleId || "";

          for (var key in objAttr) {
            if (typeof objAttr[key] == "number") {
              info.setObjAttr(key, objAttr[key]);
            }
          }

          if (info.configTab == null) {
            console.error("创建子弹错误", info);
            return;
          }

          var bulletParent = (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.getBulletNode((_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).isEffectShowBelow(bulletTab.getValidAnimId()));

          if (info.configTab.isLaunchMask()) {
            var maskNode = new Node("BulletLaunchMask");
            var uiComp = maskNode.addComponent(UITransform);
            uiComp.anchorX = 0;
            uiComp.height = 300;
            uiComp.width = view.getVisibleSize().width;
            maskNode.addComponent(Mask);
            maskNode.parent = bulletParent;
            bulletParent = maskNode;
          }

          var bullet = (_crd && AbsObjFactory === void 0 ? (_reportPossibleCrUseOfAbsObjFactory({
            error: Error()
          }), AbsObjFactory) : AbsObjFactory).getBullet(info, bulletParent);
          bullet.setStartPos(startPos);
          bullet.setAbsOnwer(owner);
          bullet.setTargetType(targetType, targetObj);
          bullet.addhavaDamageObjIds(havaDamageObjIds);

          if (bullet.info.isolnyOneSon()) {
            bullet.info.sonGroupId = this.addSelfGroupId();
          }

          bullet.run();
        }
        /** 弹射 */


        addCatapult(bullet, defanseAbs) {
          var ignores = this.getEnemyFiltrate(bullet, bullet.info.configTab.EnemyFiltrate);
          var enemy = (_crd && SearchEnemy === void 0 ? (_reportPossibleCrUseOfSearchEnemy({
            error: Error()
          }), SearchEnemy) : SearchEnemy).getBySearchEnemy(bullet.owner.objId, bullet.owner.objType, bullet.getTruePosition(), bullet.info.configTab.EnemyUnit, bullet.info.configTab.SearchEnemy, ignores);

          if (enemy == null && bullet.info.configTab.EnemyFiltrate == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).EnemyFiltrate.EnemyFiltrate_NoSelectSame) {
            //找不到目标时， 忽略上一目标后重新查找
            ignores = this.getEnemyFiltrate(bullet, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).EnemyFiltrate.EnemyFiltrate_CanSelectlast);
            enemy = (_crd && SearchEnemy === void 0 ? (_reportPossibleCrUseOfSearchEnemy({
              error: Error()
            }), SearchEnemy) : SearchEnemy).getBySearchEnemy(bullet.owner.objId, bullet.owner.objType, bullet.getTruePosition(), bullet.info.configTab.EnemyUnit, bullet.info.configTab.SearchEnemy, ignores);
          }

          if (enemy) {
            (_crd && ColliderMgr === void 0 ? (_reportPossibleCrUseOfColliderMgr({
              error: Error()
            }), ColliderMgr) : ColliderMgr).inst.removeTrigger(bullet, enemy);
            bullet.setStartPos(bullet.getTruePosition());
            bullet.setTargetType(BulletTargetType.pos, enemy.getHitPos());
            bullet.targetDirection();
          }
        }
        /** 子弹死亡触发 */


        checkDeathTrigger(bullet) {
          if (bullet.isDead || bullet.OutOfScreen) {
            return;
          }

          if (bullet.info.configTab.DeathTrigger.length > 0) {
            for (var index = 0; index < bullet.info.configTab.DeathTrigger.length; index++) {
              var bulletTab = bullet.info.configTab.DeathTriggerTabs[index];
              this.bulletCreateBullet(bullet, bulletTab);
            }
          }
        }
        /** 子弹命中触发 */


        checkHitTrigger(bullet) {
          bullet.addHitCount();

          if (bullet.info.configTab.isHitTriggerBullet()) {
            var check = false;

            if (bullet.info.configTab.HitTrigger[2] == -1) {
              check = true;
            } else if (bullet.info.configTab.HitTrigger[2] == bullet.hitCount) {
              check = true;
            }

            if (!check) {
              return;
            }

            if (!(_crd && Random === void 0 ? (_reportPossibleCrUseOfRandom({
              error: Error()
            }), Random) : Random).isSuccess(bullet.info.configTab.HitChance)) {
              return;
            }

            this.bulletCreateBullet(bullet, bullet.info.configTab.hitTriggerTab);
          } else if (bullet.info.configTab.isHitTriggerSpeed() && bullet.hitCount == 1) {
            bullet.speed += bullet.info.configTab.HitTrigger[1];
            bullet.setVelocityAngle(bullet.voAngle);
          }
        }
        /** 间隔触发 */


        intervalTrigger(bullet) {
          bullet.info.isInitInterval = false;
          this.bulletCreateBullet(bullet, bullet.info.configTab.intervalEffectBulletTab);
        }

        bulletCreateBullet(bullet, bulletTab) {
          var owner = (_crd && AbsOwner === void 0 ? (_reportPossibleCrUseOfAbsOwner({
            error: Error()
          }), AbsOwner) : AbsOwner).get(bullet.owner.objId);

          if (bullet.owner.isLock) {
            owner.setOwner(bullet.owner);
          }

          var parentSoleId = bullet.info.configTab.NoHarm ? bullet.bulletSoleId : "";

          if (parentSoleId != "") {
            if (bullet.endDamegeObj) {
              bullet.endDamegeObj.addParentSoleId(parentSoleId);
            }
          }

          var havaDamageObjIds = [];

          if (bullet.info.configTab.NoHarm) {
            havaDamageObjIds = bullet.havaDamageObjIds;
          }

          var tmpGroupId = bullet.info.sonGroupId;
          var startPos = new Vec3();

          switch (bulletTab.BulletBorn) {
            // case tab.BulletBorn.BulletBorn_Me:
            //     startPos.set(bullet.ownerRole.getHitPos())
            //     break
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).BulletBorn.BulletBorn_She:
              startPos.set(bullet.getTruePosition());
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).BulletBorn.BulletBorn_Inherit:
              startPos.set(bullet.getTruePosition());
              break;
          }

          var SearchEnemy_None = () => {
            //无目标， 就按照父子弹角度发射
            var target = tempTargetPos;
            target.set(Vec3.ZERO);
            target.add(startPos);

            if (bulletTab.Trajectory != (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Trajectory.Trajectory_Trackless) {
              target.add(bullet.velocity);
            }

            BulletControl.ins.emitBullet(bulletTab, owner, startPos, null, target, tmpGroupId, parentSoleId, havaDamageObjIds);
          };

          if (bulletTab.SearchEnemy == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).SearchEnemy.SearchEnemy_None) {
            //无寻敌目标
            SearchEnemy_None();
            return;
          }

          var ignores = this.getEnemyFiltrate(bullet, bullet.info.configTab.EnemyFiltrate);
          var enemy = (_crd && SearchEnemy === void 0 ? (_reportPossibleCrUseOfSearchEnemy({
            error: Error()
          }), SearchEnemy) : SearchEnemy).getBySearchEnemy(owner.objId, bullet.owner.objType, startPos, bulletTab.EnemyUnit, bulletTab.SearchEnemy, ignores);

          if (enemy == null) {
            SearchEnemy_None();
            return;
          }

          BulletControl.ins.emitBullet(bulletTab, owner, startPos, enemy, null, tmpGroupId, parentSoleId, havaDamageObjIds);

          if (enemy && bullet.info.configTab.EnemyFiltrate == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).EnemyFiltrate.EnemyFiltrate_NoSelectSame) {
            //子系不选同目标，把id放在父子弹内
            bullet.havaDamageObjIds.push(enemy.objId);
          }
        }

        getEnemyFiltrate(bullet, enemyFiltrate) {
          switch (enemyFiltrate) {
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).EnemyFiltrate.EnemyFiltrate_CanSelectlast:
              // 可选上一个目标 
              return bullet.havaDamageObjIds.slice(-1);

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).EnemyFiltrate.EnemyFiltrate_Ignorelast:
              // 忽略上一个目标 
              return bullet.havaDamageObjIds.slice(-2);

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).EnemyFiltrate.EnemyFiltrate_NoSelectSame:
              // 忽略已攻击目标 
              return bullet.havaDamageObjIds;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).EnemyFiltrate.EnemyFiltrate_NoSelectSame:
              // 忽略已攻击目标 
              return bullet.havaDamageObjIds;
          }

          return [];
        }
        /** 子弹分裂角度 */


        getFissionAngles(baseAngle, fissions) {
          if (fissions[0] == 1) {
            return (_crd && MathAngle === void 0 ? (_reportPossibleCrUseOfMathAngle({
              error: Error()
            }), MathAngle) : MathAngle).getAverageEmitAnglesAngle(baseAngle, fissions[1], fissions[2]);
          } else if (fissions[0] == 2) {
            return (_crd && MathAngle === void 0 ? (_reportPossibleCrUseOfMathAngle({
              error: Error()
            }), MathAngle) : MathAngle).getAverageEmitAnglesAngle1(baseAngle, fissions[1], fissions[2]);
          } else if (fissions[0] == 3) {
            return (_crd && MathAngle === void 0 ? (_reportPossibleCrUseOfMathAngle({
              error: Error()
            }), MathAngle) : MathAngle).getAverageEmitAnglesAngle2(baseAngle, fissions[1], fissions[2]);
          }

          return [];
        }
        /** 子弹击中特效 */


        checkHitEffect(bullet, defanseAbs) {
          if (bullet.info.configTab.HitEffect.length) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
              error: Error()
            }), FightEvent) : FightEvent).Hit_Effect_Add, bullet.info.configTab.HitEffect, bullet.startPos, defanseAbs.getHitPos());
          }
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0737abe2a64659f8ffc77007a484e332f8fbee1d.js.map