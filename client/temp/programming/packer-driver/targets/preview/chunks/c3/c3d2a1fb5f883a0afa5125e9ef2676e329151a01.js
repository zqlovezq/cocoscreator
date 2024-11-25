System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Vec3, tab, Random, FrameControl, AbsObjType, Vector2, _dec, _class, _crd, ccclass, property, tempPos, tempPos1, tempStartPos, tempList, tempAll, SearchEnemy;

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRandom(extras) {
    _reporterNs.report("Random", "../../util/Random", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFrameControl(extras) {
    _reporterNs.report("FrameControl", "../frame/FrameControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjType(extras) {
    _reporterNs.report("AbsObjType", "../obj/AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsRole(extras) {
    _reporterNs.report("AbsRole", "../obj/role/AbsRole", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRole(extras) {
    _reporterNs.report("Role", "../obj/role/role/Role", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVector(extras) {
    _reporterNs.report("Vector2", "../../../../framework/collision/Maths", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      Random = _unresolved_3.Random;
    }, function (_unresolved_4) {
      FrameControl = _unresolved_4.FrameControl;
    }, function (_unresolved_5) {
      AbsObjType = _unresolved_5.AbsObjType;
    }, function (_unresolved_6) {
      Vector2 = _unresolved_6.Vector2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "862cbB83itDQ7QLcfnerDoK", "SearchEnemy", undefined);

      __checkObsolete__(['_decorator', 'absMax', 'CCInteger', 'Color', 'Component', 'convertUtils', 'instantiate', 'Label', 'Node', 'Prefab', 'Quat', 'Rect', 'sp', 'Sprite', 'tween', 'UITransform', 'Vec2', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);
      tempPos = new Vec3(0, 0, 0);
      tempPos1 = new Vec3(0, 0, 0);
      tempStartPos = new Vec3(0, 0, 0);
      tempList = new Array();
      tempAll = [];
      /** 搜索敌人 */

      _export("SearchEnemy", SearchEnemy = (_dec = ccclass('SearchEnemy'), _dec(_class = class SearchEnemy {
        static getAll(objId, ownerObjType, effectUnit) {
          switch (effectUnit) {
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).EffectUnit.EffectUnit_Mine:
              //自己
              if (typeof objId == "number") {
                var _absRole = (_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
                  error: Error()
                }), FrameControl) : FrameControl).ins.getObjById(objId);

                if (_absRole) {
                  return [_absRole];
                }
              }

              return [objId];

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).EffectUnit.EffectUnit_Friend:
              //我方 
              if (ownerObjType == (_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
                error: Error()
              }), AbsObjType) : AbsObjType).role) {
                return (_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
                  error: Error()
                }), FrameControl) : FrameControl).ins.getObjList((_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
                  error: Error()
                }), AbsObjType) : AbsObjType).role);
              } else {
                return (_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
                  error: Error()
                }), FrameControl) : FrameControl).ins.getObjList((_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
                  error: Error()
                }), AbsObjType) : AbsObjType).enemy);
              }

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).EffectUnit.EffectUnit_Enemy:
              //敌方
              if (ownerObjType == (_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
                error: Error()
              }), AbsObjType) : AbsObjType).role) {
                return (_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
                  error: Error()
                }), FrameControl) : FrameControl).ins.getObjList((_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
                  error: Error()
                }), AbsObjType) : AbsObjType).enemy);
              } else {
                return (_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
                  error: Error()
                }), FrameControl) : FrameControl).ins.getObjList((_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
                  error: Error()
                }), AbsObjType) : AbsObjType).role);
              }

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).EffectUnit.EffectUnit_FriendNome:
              //友方， 不包含自身
              tempAll.length = 0;
              var absRole;

              if (typeof objId == "number") {
                absRole = (_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
                  error: Error()
                }), FrameControl) : FrameControl).ins.getObjById(objId);
              } else {
                absRole = objId;
              }

              var list = this.getAll(objId, ownerObjType, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).EffectUnit.EffectUnit_Friend);

              for (var index = 0; index < list.length; index++) {
                var v = list[index];

                if (v != absRole) {
                  tempAll.push(v);
                }
              }

              return tempAll;
          }

          return [];
        }
        /** 是否有目标敌人 */


        static isHasEnemy(absRole, ownerObjType, effectUnit, includeNoActive) {
          var all = this.getAll(absRole, ownerObjType, effectUnit);
          var len = all.length;

          if (len == 0) {
            return false;
          }

          for (var index = 0; index < len; index++) {
            var v = all[index];

            if (!includeNoActive && !v.isActive) {
              //是否包含未激活状态的
              continue;
            }

            if (v.isDead == false && v.trigger) {
              return true;
            }
          }

          return false;
        }
        /**
         * 根据锁敌规则获取敌人
         * @param ownerObjId  归属id
         * @param ownerObjType 归属类型
         * @param startPos  归属开始位置
         * @param effectUnit 锁敌单位（查找单位池）
         * @param _type  锁敌规则
         * @param ignore 过滤
         * @param includeNoActive 是否包含未激活
         * @returns 
         */


        static getBySearchEnemy(ownerObjId, ownerObjType, startPos, effectUnit, _type, ignore, includeNoActive) {
          var all = this.getAll(ownerObjId, ownerObjType, effectUnit);
          tempStartPos.set(startPos);
          var funcName = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).SearchEnemy[_type];

          if (this[funcName]) {
            return this[funcName](ownerObjId, all, tempStartPos, ignore, includeNoActive);
          }

          return null;
        }
        /**
         * 根据技能规则获取敌人
         * @param ownerObjId  归属id
         * @param ownerObjType 归属类型
         * @param startPos  归属开始位置
         * @param effectUnit 锁敌单位（查找单位池）
         * @param _type  锁敌规则
         * @param findCount 查找数量
         * @param includeNoActive 是否包含未激活
         * @returns 
         */


        static skillGetBySearchEnemy(ownerObjId, ownerObjType, startPos, effectUnit, _type, findCount, includeNoActive) {
          findCount = findCount || 1;
          var result = [];

          if (_type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).SearchEnemy.SearchEnemy_All) {
            var all = this.getAll(ownerObjId, ownerObjType, effectUnit);

            for (var index = 0; index < all.length; index++) {
              var v = all[index];

              if (!includeNoActive && !v.isActive) {
                continue;
              }

              if (v.isDead) {
                continue;
              }

              result.push(v);
            }

            return result;
          }
          /** 查找多个， 每循环一次， 过滤下之前的已找到的 */


          var isIds = [];

          for (var _index = 0; _index < findCount; _index++) {
            isIds.length = 0;

            for (var i = 0; i < result.length; i++) {
              var abs = result[i];
              isIds.push(abs.objId);
            }

            var enemy = SearchEnemy.getBySearchEnemy(ownerObjId, ownerObjType, startPos, effectUnit, _type, isIds, includeNoActive);

            if (enemy) {
              result.push(enemy);
            } else {
              break;
            }
          }

          return result;
        }

        static SearchEnemy_None(objId, allRoles, startPos, ignore, includeNoActive) {
          if (allRoles.length > 0) {
            var v;

            for (var index = 0; index < allRoles.length; index++) {
              v = allRoles[index];

              if (!includeNoActive && !v.isActive) {
                //是否包含未激活状态的
                continue;
              }

              if (this.isSame(ignore, v)) {
                continue;
              }

              return v;
            }
          }

          return allRoles[0];
        }
        /** 血量最少 */


        static SearchEnemy_LowBlood(objId, allRoles, startPos, ignore, includeNoActive) {
          var monster = null;
          var len = allRoles.length;
          var tmpHp = 0;
          var minHp = 0;
          var v;

          for (var i = 0; i < len; i++) {
            v = allRoles[i];

            if (!includeNoActive && !v.isActive) {
              //是否包含未激活状态的
              continue;
            }

            if (v.isDead) {
              continue;
            }

            if (this.isSame(ignore, v)) {
              continue;
            }

            tmpHp = v.info.attrData.hpPercent;

            if (null == monster) {
              minHp = tmpHp;
              monster = v;
            } else {
              if (tmpHp < minHp) {
                minHp = tmpHp;
                monster = v;
              }
            }
          }

          return monster;
        }

        static isSame(ignore, abs) {
          if (ignore) {
            for (var index = 0; index < ignore.length; index++) {
              var v = ignore[index];

              if (v == abs.objId) {
                return true;
              }
            }
          }

          return false;
        }
        /** 最近 */


        static SearchEnemy_Near(objId, allRoles, startPos, ignore, includeNoActive) {
          var time = new Date().getTime();
          var monster = null;
          var len = allRoles.length;
          var tmpSqr = 0;
          var minSqr = 0;

          for (var i = 0; i < len; i++) {
            var v = allRoles[i];

            if (!includeNoActive && !v.isActive) {
              //是否包含未激活状态的
              continue;
            }

            if (v.isDead) {
              continue;
            }

            if (this.isSame(ignore, v)) {
              continue;
            }

            tmpSqr = Math.abs((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).squaredDistance(v.getHitPos(), startPos));

            if (null == monster) {
              minSqr = tmpSqr;
              monster = v;
            } else {
              if (tmpSqr < minSqr) {
                minSqr = tmpSqr;
                monster = v;
              }
            }
          }

          return monster;
        }
        /** 后排 */


        static SearchEnemy_Behind(objId, allRoles, startPos, ignore, includeNoActive) {
          tempList.length = 0;

          for (var index = 0; index < allRoles.length; index++) {
            var v = allRoles[index];

            if (!includeNoActive && !v.isActive) {
              //是否包含未激活状态的
              continue;
            }

            if (v.isDead) {
              continue;
            }

            if (this.isSame(ignore, v)) {
              continue;
            }

            if (!v.info.isHeroClassWarrior()) {
              tempList.push(v);
            }
          }

          if (tempList.length) {
            return tempList[(_crd && Random === void 0 ? (_reportPossibleCrUseOfRandom({
              error: Error()
            }), Random) : Random).getRandomInt(0, tempList.length)];
          }

          return SearchEnemy.SearchEnemy_Warrior(objId, allRoles, startPos, ignore, includeNoActive);
        }
        /** 随机 */


        static SearchEnemy_RandomGoal(objId, allRoles, startPos, ignore, includeNoActive) {
          tempList.length = 0;

          for (var index = 0; index < allRoles.length; index++) {
            var v = allRoles[index];

            if (!includeNoActive && !v.isActive) {
              //是否包含未激活状态的
              continue;
            }

            if (v.isDead) {
              continue;
            }

            if (this.isSame(ignore, v)) {
              continue;
            }

            tempList.push(v);
          }

          if (tempList.length) {
            return tempList[(_crd && Random === void 0 ? (_reportPossibleCrUseOfRandom({
              error: Error()
            }), Random) : Random).getRandomInt(0, tempList.length)];
          }

          return null;
        }
        /** 自己 */


        static SearchEnemy_Mine(objId, allRoles, startPos, ignore, includeNoActive) {
          return (_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
            error: Error()
          }), FrameControl) : FrameControl).ins.getObjById(objId);
        }
        /** 寻找职业 */


        static SearchEnemy_HeroClass(objId, allRoles, heroClass, includeNoActive) {
          var len = allRoles.length;
          var v;

          for (var index = 0; index < len; index++) {
            v = allRoles[index];

            if (v.info.isHeroClass(heroClass)) {
              return v;
            }
          }
        }
        /** 刺客  */


        static SearchEnemy_Assassin(objId, allRoles, startPos, ignore, includeNoActive) {
          return SearchEnemy.SearchEnemy_HeroClass(objId, allRoles, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Assassin);
        }
        /** 射手 */


        static SearchEnemy_Archer(objId, allRoles, startPos, ignore, includeNoActive) {
          return SearchEnemy.SearchEnemy_HeroClass(objId, allRoles, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Archer);
        }
        /** 牧师 */


        static SearchEnemy_Priest(objId, allRoles, startPos, ignore, includeNoActive) {
          return SearchEnemy.SearchEnemy_HeroClass(objId, allRoles, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Priest);
        }
        /** 法师 */


        static SearchEnemy_Caster(objId, allRoles, startPos, ignore, includeNoActive) {
          return SearchEnemy.SearchEnemy_HeroClass(objId, allRoles, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Caster);
        }
        /** 战士 */


        static SearchEnemy_Warrior(objId, allRoles, startPos, ignore, includeNoActive) {
          return SearchEnemy.SearchEnemy_HeroClass(objId, allRoles, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Warrior);
        }
        /** 血盾最少 */


        static SearchEnemy_LowBloodShield(objId, allRoles, startPos, ignore, includeNoActive) {
          var monster = null;
          var len = allRoles.length;
          var tmpHp = 0;
          var minHp = 0;
          var v;

          for (var i = 0; i < len; i++) {
            v = allRoles[i];

            if (!includeNoActive && !v.isActive) {
              //是否包含未激活状态的
              continue;
            }

            if (v.isDead) {
              continue;
            }

            if (this.isSame(ignore, v)) {
              continue;
            }

            tmpHp = v.info.attrData.getHpShieldPercent();

            if (null == monster) {
              minHp = tmpHp;
              monster = v;
            } else {
              if (tmpHp < minHp) {
                minHp = tmpHp;
                monster = v;
              }
            }
          }

          return monster;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c3d2a1fb5f883a0afa5125e9ef2676e329151a01.js.map