System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, js, Vec3, AbsControl, EventMgr, tab, PlayerControl, FightEvent, Func, RogueInfo, DropControl, Random, SkillControl, RareBookData, FightData, FightGainBuffControl, RoleData, GuideController, guideTask, RevoltCheatControl, _dec, _class, _class2, _crd, ccclass, property, SKILL_COUNT, tempPos, tmpList, findList, selWeapons, RogueType, RogueControl;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerControl(extras) {
    _reporterNs.report("PlayerControl", "../../base/obj/role/role/PlayerControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../../define/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRogueInfo(extras) {
    _reporterNs.report("RogueInfo", "./RogueInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDropControl(extras) {
    _reporterNs.report("DropControl", "../../drop/DropControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRandom(extras) {
    _reporterNs.report("Random", "../../util/Random", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillControl(extras) {
    _reporterNs.report("SkillControl", "../../base/skill/SkillControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookData(extras) {
    _reporterNs.report("RareBookData", "../../../model/rareBook/RareBookData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../../data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIFightUpdate(extras) {
    _reporterNs.report("IFightUpdate", "../../define/FightDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightGainBuffControl(extras) {
    _reporterNs.report("FightGainBuffControl", "../../gainBuff/FightGainBuffControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRole(extras) {
    _reporterNs.report("Role", "../../base/obj/role/role/Role", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../../../model/role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuideController(extras) {
    _reporterNs.report("GuideController", "../../../guide/GuideController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfguideTask(extras) {
    _reporterNs.report("guideTask", "../../../guide/GuideTask", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRevoltCheatControl(extras) {
    _reporterNs.report("RevoltCheatControl", "../../cheat/RevoltCheatControl", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      js = _cc.js;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      AbsControl = _unresolved_2.AbsControl;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      PlayerControl = _unresolved_5.PlayerControl;
    }, function (_unresolved_6) {
      FightEvent = _unresolved_6.FightEvent;
    }, function (_unresolved_7) {
      Func = _unresolved_7.Func;
    }, function (_unresolved_8) {
      RogueInfo = _unresolved_8.RogueInfo;
    }, function (_unresolved_9) {
      DropControl = _unresolved_9.DropControl;
    }, function (_unresolved_10) {
      Random = _unresolved_10.Random;
    }, function (_unresolved_11) {
      SkillControl = _unresolved_11.SkillControl;
    }, function (_unresolved_12) {
      RareBookData = _unresolved_12.RareBookData;
    }, function (_unresolved_13) {
      FightData = _unresolved_13.FightData;
    }, function (_unresolved_14) {
      FightGainBuffControl = _unresolved_14.FightGainBuffControl;
    }, function (_unresolved_15) {
      RoleData = _unresolved_15.RoleData;
    }, function (_unresolved_16) {
      GuideController = _unresolved_16.GuideController;
    }, function (_unresolved_17) {
      guideTask = _unresolved_17.guideTask;
    }, function (_unresolved_18) {
      RevoltCheatControl = _unresolved_18.RevoltCheatControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cc2c1aFvA1D9qW3452ivI2I", "RogueControl", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'Color', 'Component', 'find', 'FogInfo', 'instantiate', 'js', 'Label', 'Node', 'Prefab', 'Quat', 'Rect', 'sp', 'Sprite', 'tween', 'UITransform', 'Vec2', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);
      SKILL_COUNT = 3;
      tempPos = new Vec3(0, 0, 0);
      tmpList = new Array();
      findList = new Array();
      selWeapons = new Array();

      _export("RogueType", RogueType = /*#__PURE__*/function (RogueType) {
        RogueType[RogueType["leader"] = 0] = "leader";
        RogueType[RogueType["hero"] = 1] = "hero";
        RogueType[RogueType["weapon"] = 2] = "weapon";
        return RogueType;
      }({}));

      /** 肉鸽 */
      _export("RogueControl", RogueControl = (_dec = ccclass('RogueControl'), _dec(_class = (_class2 = class RogueControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        constructor() {
          super(...arguments);

          /** 生效池 */
          this.validList = [];

          /** 选中列表 (6个格子内的替换逻辑)*/
          this.selectList = [];

          /** 选中列表（所有） */
          this.selectAllList = [];

          /**刷新肉鸽次数 */
          this.refreshRogueTime = 0;

          /** 是否存在英雄升级  */
          this.IsHaveHeroLevelUp = true;
          this.defaultRogueInfo = null;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new RogueControl();
          }

          return this._instance;
        }

        //所有肉鸽选完后， 默认放到池子内一个
        init() {
          this.register();
          this.validList.length = 0;
          this.selectList.length = 0;
          this.selectAllList.length = 0;
          this.validList.length = 0;
          tmpList.length = 0;
          this.refreshRogueTime = 0;
          selWeapons.length = 0;
          this.IsHaveHeroLevelUp = true;
          this.defaultRogueInfo = null;
        }

        addRogueId(rogueInfo) {
          this.addSelect(rogueInfo);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Fight_Drop_Remove_First);

          if (rogueInfo.isHeroLevel) {
            //英雄直接升级
            this.rogueHeroLevel(rogueInfo);
          }

          this.getSelectWeapon(true);
          this.removeHeroLevel(rogueInfo);
        }
        /** 移除英雄升级 */


        removeHeroLevel(rogueInfo) {
          if (this.IsHaveHeroLevelUp) {
            return;
          }

          if (rogueInfo.heroItemId) {
            for (var index = this.validList.length - 1; index >= 0; index--) {
              var v = this.validList[index];

              if (v.heroItemId == rogueInfo.heroItemId) {
                this.validList.splice(index, 1);
              }
            }
          }
        }

        addSelect(rogueInfo) {
          rogueInfo.addCount();

          if (rogueInfo.isRemove()) {
            this.removeInfo(rogueInfo);
          }

          var isChange = false;

          if (rogueInfo.rogueTab.Condition) {
            for (var index = 0; index < this.selectList.length; index++) {
              var v = this.selectList[index];

              if (v.Id == rogueInfo.rogueTab.Condition) {
                this.selectList[index] = rogueInfo;
                isChange = true;
              }
            }
          }

          if (!isChange && !rogueInfo.ifFullId()) {
            this.selectList.push(rogueInfo);
          }

          this.selectAllList.push(rogueInfo);
          this.addRogueAttr(rogueInfo);
        }

        onCheckHeroUp(role) {
          var upLv = role.info.attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_RogueLevel);

          if (upLv) {
            var tempInfo;

            for (var index = 0; index < this.selectList.length; index++) {
              var v = this.selectAllList[index];

              if (v.heroItemId == role.info.configId) {
                tempInfo = v;
                break;
              }
            }

            if (tempInfo) {
              tempInfo.isHeroLevel = true;
              tempInfo.level = tempInfo.level + upLv;
              role.info.attrData.clearAttrByType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_RogueLevel);
            }
          }
        } //英雄直接升级


        rogueHeroLevel(rogueInfo) {
          var role = (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.getRole(rogueInfo.heroItemId);
          rogueInfo.level = Math.min(rogueInfo.level, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().RogueTableById.getValue(role.info.heroStarTab.RogueId[1]).Level);
          var addAttrs = [];

          for (var index = 0; index < this.validList.length; index++) {
            var v = this.validList[index];

            if (v.heroItemId == rogueInfo.heroItemId) {
              if (rogueInfo.level >= v.rogueTab.Level) {
                addAttrs.push(v);
              }
            }
          }

          for (var _index = 0; _index < addAttrs.length; _index++) {
            var _v = addAttrs[_index];
            this.addSelect(_v);
          }
        } //赠送肉鸽


        onGiveRogue(id) {
          var addAttr = [];

          var func = rogueId => {
            var rogueInfo = this.getRogueInfo(rogueId);

            if (rogueInfo == null) {
              rogueInfo = new (_crd && RogueInfo === void 0 ? (_reportPossibleCrUseOfRogueInfo({
                error: Error()
              }), RogueInfo) : RogueInfo)(rogueId);
              rogueInfo.setParentPowers((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                error: Error()
              }), FightData) : FightData).ins.skillPowers);
            }

            addAttr.push(rogueInfo);

            if (rogueInfo.rogueTab.Condition) {
              func(rogueInfo.rogueTab.Condition);
            }
          }; //把所有前置条件都添加到列表


          func(id); // console.log("give", addAttr)

          addAttr.sort((a, b) => {
            return a.Id - b.Id;
          });
          addAttr.forEach(v => {
            this.addSelect(v);
          });
          this.getSelectWeapon(true);
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Fight_Start, this.onFight_Start, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Fight_Start_Complete, this.onFight_Start_Complete, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).giveRogue, this.onGiveRogue, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).checkHeroUp, this.onCheckHeroUp, this);
        }
        /** 获取已选择的武器 */


        getSelectWeapon(reset) {
          if (reset) {
            selWeapons.length = 0;

            for (var index = 0; index < this.selectList.length; index++) {
              var v = this.selectList[index];

              if (v.heroItemId == 0) {
                selWeapons.push(v);
              }
            }
          }

          return selWeapons;
        }

        getRogueIdsByGroupId(groupId) {
          var conf = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().RogueGroupTableById.getValue(groupId);

          if (conf == null) {
            this.IsHaveHeroLevelUp = true;
            return [];
          }

          this.IsHaveHeroLevelUp = conf.IsHaveHeroLevelUp;
          var list = [];

          for (var index = 0; index < conf.RogueGroup.length; index++) {
            var begin = conf.RogueGroup[index] || 0;
            var end = conf.RogueGroup[index + 1] || 0;

            for (var j = begin; j <= end; j++) {
              list.push(j);
            }

            index++;
          }

          return list;
        }

        onFight_Start() {
          // let defuatBegin = tab.getData().GetKeyValue_ConfigTable().globalRogueId[0]
          // let defuatEnd = tab.getData().GetKeyValue_ConfigTable().globalRogueId[1]
          var ids = this.getRogueIdsByGroupId((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.stageTab.RougeGroupId);
          console.log("ids", ids);
          this.defaultRogueInfo = new (_crd && RogueInfo === void 0 ? (_reportPossibleCrUseOfRogueInfo({
            error: Error()
          }), RogueInfo) : RogueInfo)((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().RogueFullBackupOption);
          this.defaultRogueInfo.setParentPowers((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.skillPowers); // let defuatBegin = 1
          // let defuatEnd = 11

          for (var index = 0; index < ids.length; index++) {
            var id = ids[index];
            var info = new (_crd && RogueInfo === void 0 ? (_reportPossibleCrUseOfRogueInfo({
              error: Error()
            }), RogueInfo) : RogueInfo)(id);
            info.setParentPowers((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.skillPowers);

            if (info.rogueTab.ActivationCondition) {
              //秘籍穿戴
              if (info.rogueTab.ActivationCondition == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).RogueActivationCondition.RogueActivationCondition_WearBook) {
                if ((_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
                  error: Error()
                }), RareBookData) : RareBookData).ins.isWearByItemId(info.rogueTab.BookId) || (_crd && FightGainBuffControl === void 0 ? (_reportPossibleCrUseOfFightGainBuffControl({
                  error: Error()
                }), FightGainBuffControl) : FightGainBuffControl).ins.hasTypeAndCorrespondingId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).EffectTarget.EffectTarget_Book, info.rogueTab.BookId)) {
                  this.validList.push(info);
                  console.log("秘籍条件达成");
                } else {// console.log("秘籍未穿戴", info.Id)
                }
              }
            } else {
              this.validList.push(info);
            }
          }

          var heros = (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.getAllHeros();

          for (var i = 0; i < heros.length; i++) {
            var heroId = heros[i].itemId;
            var heroStarTab = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
              error: Error()
            }), Func) : Func).forBy2((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroStarUpTable, "HeroId", heroId, "HeroStar", heros[i].star);
            var rogueIds = heroStarTab.RogueId;

            for (var _index2 = rogueIds[0]; _index2 <= rogueIds[1]; _index2++) {
              var _info = new (_crd && RogueInfo === void 0 ? (_reportPossibleCrUseOfRogueInfo({
                error: Error()
              }), RogueInfo) : RogueInfo)(_index2);

              _info.setParentPowers((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                error: Error()
              }), FightData) : FightData).ins.skillPowers);

              _info.heroItemId = heroId;
              this.validList.push(_info);
            }
          }
        }

        onFight_Start_Complete() {//处理进场送rogueid
        }

        getList(isSelfRefresh) {
          if (isSelfRefresh === void 0) {
            isSelfRefresh = false;
          }

          var dropId = (_crd && DropControl === void 0 ? (_reportPossibleCrUseOfDropControl({
            error: Error()
          }), DropControl) : DropControl).ins.getFirstDrop();
          var dropItemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().VirtualItemByVirtualItemId.getValue(dropId);

          if (dropItemTab.VirtualItemType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).VirtualItemType.VirtualItemType_Eggs) {
            return this.getHeros();
          }

          return this.getWeapens(isSelfRefresh);
        }

        getHeros() {
          tmpList.length = 0;
          var selt = {
            type: RogueType.leader,
            list: tmpList
          };
          var heroList = (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.getNoCreateHeros();
          selt.type = heroList.length == 5 ? RogueType.leader : RogueType.hero;

          for (var i = 0; i < heroList.length; i++) {
            var hero = heroList[i];
            var heroStarTab = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
              error: Error()
            }), Func) : Func).forBy2((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroStarUpTable, "HeroId", hero.itemId, "HeroStar", hero.star);
            tmpList.push(this.getRogueInfo(heroStarTab.RogueId[0]));
          }

          return selt;
        }

        getWeapens(isSelfRefresh) {
          if (isSelfRefresh === void 0) {
            isSelfRefresh = false;
          }

          var selt = {
            type: RogueType.weapon,
            list: tmpList
          };

          if (!isSelfRefresh) {
            tmpList.length = 0;
          }

          findList.length = 0;

          var addFindList = v => {
            if ((_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
              error: Error()
            }), GuideController) : GuideController).ins.isInFightGuiding() && (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.stageId === 101 && (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
              error: Error()
            }), GuideController) : GuideController).ins.node.active) {
              if ((_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
                error: Error()
              }), GuideController) : GuideController).ins.dropCount >= 6 && (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
                error: Error()
              }), GuideController) : GuideController).ins.dropCount <= 11) {
                var deleteArr = [112, 142];

                if (deleteArr.indexOf(v.Id) > -1) {
                  return;
                }
              }
            }

            if (tmpList && tmpList.length > 0) {
              var index = tmpList.indexOf(v);

              if (index < 0) {
                findList.push(v);
              }
            } else {
              findList.push(v);
            }
          };

          for (var index = 0; index < this.validList.length; index++) {
            var v = this.validList[index];

            if (v.rogueTab.Sort != (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).VirtualItemType.VirtualItemType_Feathers) {
              continue;
            }

            if (this.isUnlockRogue(v.rogueTab.Condition)) {
              if (v.rogueTab.Mutex) {
                if (!this.hasMutex()) {
                  addFindList(v);
                }
              } else {
                addFindList(v);
              }
            }
          }

          this.print(this.validList, "剩余id");
          this.print(this.selectList, "拥有id");
          this.print(findList, "查找id");

          if (findList.length > SKILL_COUNT) {
            tmpList.length = 0;
            var randomIndexes = this.getRandomIndexes(findList.length, SKILL_COUNT);

            for (var _index3 = 0; _index3 < randomIndexes.length; _index3++) {
              var _v2 = findList[randomIndexes[_index3]];
              tmpList.push(_v2);
            }
          } else if (findList.length == SKILL_COUNT) {
            tmpList.length = 0;

            for (var key in findList) {
              tmpList.push(findList[key]);
            }
          } else {
            var list = [];

            for (var _key in findList) {
              list.push(findList[_key]);
            }

            var _randomIndexes = this.getRandomIndexes(tmpList.length, SKILL_COUNT - findList.length);

            for (var _index4 = 0; _index4 < _randomIndexes.length; _index4++) {
              var _v3 = tmpList[_randomIndexes[_index4]];
              list.push(_v3);
            }

            tmpList.length = 0;

            for (var _key2 in list) {
              tmpList.push(list[_key2]);
            }
          }

          if ((_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
            error: Error()
          }), GuideController) : GuideController).ins.isInFightGuiding() && (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
            error: Error()
          }), GuideController) : GuideController).ins.node.active && (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.stageId === 101) {
            if ((_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
              error: Error()
            }), GuideController) : GuideController).ins.dropCount < 6) {
              tmpList.splice(0, tmpList.length);
              var ids = (_crd && guideTask === void 0 ? (_reportPossibleCrUseOfguideTask({
                error: Error()
              }), guideTask) : guideTask).JadeDrops[(_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
                error: Error()
              }), GuideController) : GuideController).ins.dropCount];

              for (var i = 0; i < ids.length; i++) {
                if (this.getRogueInfo(ids[i])) {
                  tmpList.push(this.getRogueInfo(ids[i]));
                }
              }
            }

            (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
              error: Error()
            }), GuideController) : GuideController).ins.dropCount++;
          }

          this.print(tmpList, "随机到的id");

          if (tmpList.length == 0) {
            tmpList.push(this.defaultRogueInfo);
          }

          return selt;
        }
        /** 是否已经拥有互斥 */


        hasMutex() {
          for (var index = 0; index < this.selectList.length; index++) {
            var v = this.selectList[index];

            if (v.rogueTab.Mutex) {
              return true;
            }
          }

          return false;
        }
        /** 是否解锁 */


        isUnlockRogue(id) {
          if (id == 0) {
            if (this.getSelectWeapon().length >= (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().weaponLimit) {
              return false;
            }

            return true;
          }

          return (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).forBy(this.selectList, "Id", id) != null;
        }

        getRogueInfo(id) {
          return (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).forBy(this.validList, "Id", id);
        }

        removeInfo(rogueInfo) {
          (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).removeBy(this.validList, "Id", rogueInfo.Id);
        }
        /** 给定长度， 随机获取n个 */


        getRandomIndexes(total, findNum) {
          var indexes = [];

          if (total <= findNum) {
            for (var index = 0; index < total; index++) {
              indexes.push(index);
            }

            return indexes;
          }

          while (indexes.length < findNum) {
            var randomIndex = (_crd && Random === void 0 ? (_reportPossibleCrUseOfRandom({
              error: Error()
            }), Random) : Random).getRandomInt(0, total);

            if (indexes.indexOf(randomIndex) == -1) {
              indexes.push(randomIndex);
            }
          }

          return indexes;
        }

        print(list, str) {
          var s = "";
          var s2 = "";

          for (var index = 0; index < list.length; index++) {
            var v = list[index];

            if (v.heroItemId) {
              s += v.Id + ",";
            } else {
              s2 += js.formatStr("id:%s,剩余次数:%s", v.Id, v.rogueTab.Backlimit - v.backCount) + ",";
            }
          }

          console.log(str + "英雄:" + s, "武器:" + s2);
        }
        /** 检测掉落类型已满 */


        checkFull(dropId) {
          var result = false;

          if ((_crd && DropControl === void 0 ? (_reportPossibleCrUseOfDropControl({
            error: Error()
          }), DropControl) : DropControl).isRogueEggs(dropId)) {
            var eggsLen = (_crd && DropControl === void 0 ? (_reportPossibleCrUseOfDropControl({
              error: Error()
            }), DropControl) : DropControl).ins.getLenByType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).VirtualItemType.VirtualItemType_Eggs);
            var heroLen = (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
              error: Error()
            }), PlayerControl) : PlayerControl).ins.getAllHeros().length - (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
              error: Error()
            }), PlayerControl) : PlayerControl).ins.getNoCreateHeros().length;
            result = heroLen + eggsLen >= (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
              error: Error()
            }), PlayerControl) : PlayerControl).ins.getAllHeros().length;

            if (result) {
              console.error("场上英雄+蛋， 已满足" + (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
                error: Error()
              }), PlayerControl) : PlayerControl).ins.getAllHeros().length + "个");
            }
          } else {}

          return result;
        }
        /** 增加肉鸽属性 */


        addRogueAttr(rogueInfo) {
          console.log("添加肉鸽属性", rogueInfo.Id);

          if (rogueInfo.heroItemId) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
              error: Error()
            }), FightEvent) : FightEvent).Role_Active, rogueInfo);
          }

          (_crd && SkillControl === void 0 ? (_reportPossibleCrUseOfSkillControl({
            error: Error()
          }), SkillControl) : SkillControl).ins.rogueUseSkillTarget(rogueInfo);
          (_crd && RevoltCheatControl === void 0 ? (_reportPossibleCrUseOfRevoltCheatControl({
            error: Error()
          }), RevoltCheatControl) : RevoltCheatControl).ins.addRogue(rogueInfo.Id);
        }

        addRefreshRogueTime() {
          this.refreshRogueTime += 1;
        }

        getRefreshRogueTotalTime() {
          var num = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().FightRogueRefreshCount;
          num += (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.getGlobleAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_RefreshCount);
          num += (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.getPrivilegeValue((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).VipBonus.VipBonus_RefreshCount);
          return num;
        }

        iFightUpdate(dt) {}
        /** 获取所有已选择id */


        getSelectAllIdList() {
          var list = [];

          for (var index = 0; index < this.selectAllList.length; index++) {
            var v = this.selectAllList[index];
            list.push(v.Id);
          }

          return list;
        }

        getNowSelectIdList() {
          var list = [];

          for (var index = 0; index < this.selectList.length; index++) {
            var v = this.selectList[index];

            if (v.heroItemId == 0) {
              list.push(v.Id);
            }
          }

          return list;
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c38701a80915413cbe814e51bc9dc285b1be333d.js.map