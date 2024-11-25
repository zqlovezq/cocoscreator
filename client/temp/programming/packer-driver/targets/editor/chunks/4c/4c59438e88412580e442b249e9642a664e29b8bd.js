System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, error, Vec3, AbsControl, EventMgr, FightEvent, tab, Func, PlayerControl, RogueControl, RoguePop, FightData, FightMacro, getRandomInt, SettingsManager, WaveTimeControl, Random, _dec, _class, _class2, _crd, ccclass, property, tempPos, DropControl;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../define/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonster(extras) {
    _reporterNs.report("Monster", "../base/obj/role/monster/Monster", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerControl(extras) {
    _reporterNs.report("PlayerControl", "../base/obj/role/role/PlayerControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRogueControl(extras) {
    _reporterNs.report("RogueControl", "../view/rogue/RogueControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoguePop(extras) {
    _reporterNs.report("RoguePop", "../view/rogue/RoguePop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMacro(extras) {
    _reporterNs.report("FightMacro", "../define/FightDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIFightUpdate(extras) {
    _reporterNs.report("IFightUpdate", "../define/FightDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetRandomInt(extras) {
    _reporterNs.report("getRandomInt", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSettingsManager(extras) {
    _reporterNs.report("SettingsManager", "../../model/role/SettingsManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaveTimeControl(extras) {
    _reporterNs.report("WaveTimeControl", "../wave/WaveTimeControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRandom(extras) {
    _reporterNs.report("Random", "../util/Random", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      error = _cc.error;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      AbsControl = _unresolved_2.AbsControl;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }, function (_unresolved_4) {
      FightEvent = _unresolved_4.FightEvent;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }, function (_unresolved_6) {
      Func = _unresolved_6.Func;
    }, function (_unresolved_7) {
      PlayerControl = _unresolved_7.PlayerControl;
    }, function (_unresolved_8) {
      RogueControl = _unresolved_8.RogueControl;
    }, function (_unresolved_9) {
      RoguePop = _unresolved_9.RoguePop;
    }, function (_unresolved_10) {
      FightData = _unresolved_10.FightData;
    }, function (_unresolved_11) {
      FightMacro = _unresolved_11.FightMacro;
    }, function (_unresolved_12) {
      getRandomInt = _unresolved_12.getRandomInt;
    }, function (_unresolved_13) {
      SettingsManager = _unresolved_13.SettingsManager;
    }, function (_unresolved_14) {
      WaveTimeControl = _unresolved_14.WaveTimeControl;
    }, function (_unresolved_15) {
      Random = _unresolved_15.Random;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1bf17VBS+tP/7tuDhcruwCU", "DropControl", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'Color', 'Component', 'error', 'instantiate', 'Label', 'Node', 'Prefab', 'Quat', 'Rect', 'sp', 'Sprite', 'tween', 'UITransform', 'Vec2', 'Vec3', 'view']);

      // import { getRandomInt } from '../../utils/GameUtil';
      ({
        ccclass,
        property
      } = _decorator);
      tempPos = new Vec3(0, 0, 0);

      /** 掉落 */
      _export("DropControl", DropControl = (_dec = ccclass('DropControl'), _dec(_class = (_class2 = class DropControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        constructor(...args) {
          super(...args);
          this.rogueDrops = [];
          this.feather = 0;
          this.otherDrops = new Map();
          this.exp = 0;
          this.expLv = 0;
          this.eggDropGroups = null;

          /** 时间掉落，  false为经验掉落 */
          this.isTimeDrop = false;
          this.timeExp = 0;
          this.isStart = false;

          /** 自动掉落拾取 */
          this.audoDropCollect = false;

          /**额外掉落时间节点数组 */
          this.extraDropTimes = [];
          this.extraDropTimeExp = 0;

          /**是否有额外掉落 */
          this.isExtraDrop = false;

          /**时间掉落时间节点数组 */
          this.timerDropTimes = void 0;
          this.timerDropIds = void 0;
          this.itemDrops = [];
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new DropControl();
          }

          return this._instance;
        }

        init() {
          this.register();
          this.rogueDrops.length = 0;
          this.feather = 0;
          this.otherDrops.clear();
          this.exp = 0;
          this.expLv = 0;
          this.isStart = false;
          this.isTimeDrop = false;
          this.timeExp = 0;
          this.extraDropTimeExp = 0;
          this.itemDrops.length = 0;
          this.setAudoDropCollect((_crd && SettingsManager === void 0 ? (_reportPossibleCrUseOfSettingsManager({
            error: Error()
          }), SettingsManager) : SettingsManager).ins.getSetting("isAutoCollect"));
        }

        setAudoDropCollect(isBool) {
          this.audoDropCollect = isBool;
          (_crd && SettingsManager === void 0 ? (_reportPossibleCrUseOfSettingsManager({
            error: Error()
          }), SettingsManager) : SettingsManager).ins.setSetting("isAutoCollect", isBool); // Func.setItem("isAutoCollect", isBool ? 1 : 0)
          // console.log(isBool, "xxxxxx", Func.getItem("isAutoCollect"))
        }

        getFirstDrop() {
          return this.rogueDrops[0];
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
          }), FightEvent) : FightEvent).Fight_Monster_Dead, this.onFight_Monster_Dead, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Fight_Drop_Remove_First, this.onFight_Drop_Remove_First, this);
        }

        onFight_Start() {
          console.log("Fight_Start-------");
          this.isTimeDrop = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.isDropByType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).EggDropType.EggDropType_TimeDrop);
          this.eggDropGroups = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).getValuesByKey((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().FeatherEggDrop, "EggDropGroup", (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.stageTab.EggDropGroup);
          (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.stageTab.MonsterDieDrop;

          for (let index = 0; index < (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.stageTab.MonsterDieDrop.length; index += 2) {
            const v = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.stageTab.MonsterDieDrop[index];
            let item = {
              animId: (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                error: Error()
              }), FightData) : FightData).ins.stageTab.MonsterDieDrop[index],
              probability: (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                error: Error()
              }), FightData) : FightData).ins.stageTab.MonsterDieDrop[index + 1]
            };

            if (this.itemDrops.length > 0) {
              item.probability = this.itemDrops[this.itemDrops.length - 1].probability + item.probability;
            }

            this.itemDrops.push(item);
          }

          this.addDrop((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.levelJson.drop);

          if (this.isTimeDrop) {
            this.initTimerDropData();
          }
        }

        onFight_Start_Complete() {
          this.isStart = true;
          this.fightInitialDrop();
          this.initExtraDropData();
          (_crd && RoguePop === void 0 ? (_reportPossibleCrUseOfRoguePop({
            error: Error()
          }), RoguePop) : RoguePop).create();
        }

        onFight_Monster_Dead(abs) {
          if (this.isTimeDrop) {
            return;
          }

          if (abs && abs.info) {
            if (abs.info.exp) {
              this.addExp(abs.info.exp);
              this.checkExpUp(abs.getHitPos());
            }

            if (abs.info.drop) {
              this.addDrop([abs.info.drop], abs.getHitPos());
            }

            let pro = (_crd && Random === void 0 ? (_reportPossibleCrUseOfRandom({
              error: Error()
            }), Random) : Random).getInt10000();

            for (let index = 0; index < this.itemDrops.length; index++) {
              const itemDrop = this.itemDrops[index];

              if (pro <= itemDrop.probability) {
                (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                  error: Error()
                }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
                  error: Error()
                }), FightEvent) : FightEvent).Fight_Drop_Item_Anim, itemDrop.animId, abs.getHitPos());
                break;
              }
            }
          }
        }

        onFight_Drop_Remove_First() {
          this.rogueDrops.shift();
        }
        /** 增加掉落 */


        addDrop(dropIds, position) {
          for (let i = 0; i < dropIds.length; i++) {
            const dropId = dropIds[i];
            let dropTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().PveStageDropTableByDropId.getValue(dropId);

            for (let j = 0; j < dropTab.DropItemCount.length; j++) {
              let dropItem = dropTab.DropItem[j];
              const count = dropTab.DropItemCount[j];

              for (let k = 0; k < count; k++) {
                this.addDropItem(dropItem, position);
              }
            }
          }
        }

        addDropItem(dropItemId, position) {
          if (DropControl.isRogueDrop(dropItemId)) {
            if ((_crd && RogueControl === void 0 ? (_reportPossibleCrUseOfRogueControl({
              error: Error()
            }), RogueControl) : RogueControl).ins.checkFull(dropItemId)) {
              return;
            }

            if (DropControl.isRogueEggs(dropItemId)) {
              //蛋放前面，先选英雄
              this.rogueDrops.unshift(dropItemId);
            } else {
              this.rogueDrops.push(dropItemId);
              this.feather += 1;
            }
          } else {
            if (this.otherDrops.has(dropItemId) == null) {
              this.otherDrops.set(dropItemId, 0);
            }

            this.otherDrops.set(dropItemId, this.otherDrops.get(dropItemId) + 1);
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Fight_Drop_Item, dropItemId, position);

          if (this.isStart && this.audoDropCollect) {// RoguePop.create()
          }
        }

        getLenByType(_type) {
          let eggsLen = 0;

          for (let index = 0; index < this.rogueDrops.length; index++) {
            const v = this.rogueDrops[index];
            let bo = DropControl.isRogueEggs(v);

            if (_type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).VirtualItemType.VirtualItemType_Eggs) {
              if (bo) {
                eggsLen += 1;
              }
            } else {
              if (!bo) {
                eggsLen += 1;
              }
            }
          }

          return eggsLen;
        }

        checkEggsFull() {
          let heroLen = 5 - (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.getNoCreateHeros().length;
          let eggsLen = 0;

          for (let index = 0; index < this.rogueDrops.length; index++) {
            const v = this.rogueDrops[index];

            if (DropControl.isRogueEggs(v)) {
              eggsLen += 1;
            }
          }

          return heroLen + eggsLen >= 5;
        }

        addExp(_exp) {
          this.exp += _exp;
          console.log("exp:", this.exp, _exp);
        }
        /** 时间增加 */


        addTime(dt) {
          this.timeExp += dt;

          if (this.timeExp >= (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).SECOND) {
            this.timeExp -= (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
              error: Error()
            }), FightMacro) : FightMacro).SECOND;
            this.addExp(1);
            this.checkTimeExpUp();
          }
        }
        /** 检测时间掉落 */


        checkExpUp(position) {
          for (let index = this.expLv; index < this.eggDropGroups.length; index++) {
            const v = this.eggDropGroups[index];

            if (this.exp >= v.EggDropExp) {
              this.expLv = v.EggDropLevel;
              this.addDrop([v.EggDropContent], position);
            }
          }
        }
        /** 时间经验掉落 */


        checkTimeExpUp() {
          if (this.timerDropTimes && this.timerDropTimes.length > 0) {
            if (this.exp >= this.timerDropTimes[0]) {
              this.addDrop([this.timerDropIds[0]]);
              this.timerDropTimes.shift();
              this.timerDropIds.shift();
            }
          }
        } //时间刷新


        iFightUpdate(dt) {
          this.isTimeDrop && this.addTime(dt);
          this.isExtraDrop && this.addExtraDropTime(dt);
        }
        /** 战场初始掉落（不包含关卡） */


        fightInitialDrop() {
          if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.isWorldAndGuildBoss()) {
            return;
          }

          let num = (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.getGlobleAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_InitialScroll);
          let dropIds = [];
          let id = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().InitialDropFeather;

          for (let i = 0; i < num; i++) {
            dropIds.push(id);
          }

          if (dropIds.length > 0) {
            this.addDrop(dropIds);
          }
        }

        static isRogueDrop(dropItemId) {
          let dropTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().VirtualItemByVirtualItemId.getValue(dropItemId);

          if (dropTab.VirtualItemType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).VirtualItemType.VirtualItemType_Eggs || dropTab.VirtualItemType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).VirtualItemType.VirtualItemType_Feathers) {
            return true;
          }

          return false;
        }

        static isRogueEggs(dropItemId) {
          let dropTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().VirtualItemByVirtualItemId.getValue(dropItemId);
          return dropTab.VirtualItemType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).VirtualItemType.VirtualItemType_Eggs;
        }

        static isRogueType(dropItemId, _type) {}
        /** 时间增加 */


        addExtraDropTime(dt) {
          this.extraDropTimeExp += dt;

          if (this.extraDropTimeExp >= (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).SECOND) {
            this.extraDropTimeExp -= (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
              error: Error()
            }), FightMacro) : FightMacro).SECOND;
            this.checkExtraDrop();
          }
        }
        /** 检测额外掉落 */


        checkExtraDrop() {
          if (this.extraDropTimes.length > 0) {
            if ((_crd && WaveTimeControl === void 0 ? (_reportPossibleCrUseOfWaveTimeControl({
              error: Error()
            }), WaveTimeControl) : WaveTimeControl).ins.nowTotalTime >= this.extraDropTimes[0]) {
              this.addDrop([(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().GetKeyValue_ConfigTable().AddDropFeather]);
              this.extraDropTimes.splice(0, 1);
              this.isExtraDrop = this.extraDropTimes.length > 0;
              error("额外掉落羽毛====", (_crd && WaveTimeControl === void 0 ? (_reportPossibleCrUseOfWaveTimeControl({
                error: Error()
              }), WaveTimeControl) : WaveTimeControl).ins.nowTotalTime);
            }
          }
        }
        /**
         * 初始化额外掉落数据
         */


        initExtraDropData() {
          this.extraDropTimes = [];
          this.isExtraDrop = false;

          if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.isWorldAndGuildBoss()) {
            return;
          } // if(this.p)


          let count = (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.getGlobleAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_AddScroll);

          if (count > 0) {
            let table = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().PveAddFeatherDropTableByCount.getValue(count);

            if (table) {
              for (let i = 0; i < table.Times.length; i += 2) {
                let min = table.Times[i];
                let max = table.Times[i + 1];
                let r = (_crd && getRandomInt === void 0 ? (_reportPossibleCrUseOfgetRandomInt({
                  error: Error()
                }), getRandomInt) : getRandomInt)(min, max);
                this.extraDropTimes.push(r);
              }

              error("额外掉落羽毛随机时间====", this.extraDropTimes);
              this.isExtraDrop = this.extraDropTimes.length > 0;
            } else {
              error("额外掉落配表错误 数量", count);
            }
          }
        }
        /**初始化时间掉落数据 */


        initTimerDropData() {
          console.error('初始化时间掉落数据', this.timeExp, this.exp);
          this.timerDropTimes = [];
          this.timerDropIds = [];
          let table = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().PveTimeDropTableByStageId.getValue((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.stageId);

          if (table) {
            this.timerDropTimes = [].concat(table.DropTime);
            this.timerDropIds = [].concat(table.DropCount);
          }
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4c59438e88412580e442b249e9642a664e29b8bd.js.map