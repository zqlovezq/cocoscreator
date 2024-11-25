System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "client_protocol", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Mask, Node, UITransform, Vec3, view, AbsControl, tab, EventMgr, FightEvent, FightMacro, FightRootControl, FightState, PvpObjType, proto, FightData, Func, PvpObjFactory, BuffUI, DamageData, DamageLab, PvpDrawLine, PvpMoveCircle, FightMsgControl, ViewName, UIMgr, PvpLineData, PvpControl, _crd, ccclass, property, tempPos, owner, ownerBullet, maxDelayTime;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIClear(extras) {
    _reporterNs.report("IClear", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../define/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMacro(extras) {
    _reporterNs.report("FightMacro", "../define/FightDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIFightUpdate(extras) {
    _reporterNs.report("IFightUpdate", "../define/FightDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightRootControl(extras) {
    _reporterNs.report("FightRootControl", "../FightRootControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightState(extras) {
    _reporterNs.report("FightState", "../FightRootControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPvpObj(extras) {
    _reporterNs.report("PvpObj", "./obj/PvpObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPvpObjType(extras) {
    _reporterNs.report("PvpObjType", "./obj/PvpObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPvpRole(extras) {
    _reporterNs.report("PvpRole", "./obj/PvpRole", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPvpObjFactory(extras) {
    _reporterNs.report("PvpObjFactory", "./obj/PvpObjFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffUI(extras) {
    _reporterNs.report("BuffUI", "../base/buff/BuffUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPvpBullet(extras) {
    _reporterNs.report("PvpBullet", "./obj/PvpBullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageData(extras) {
    _reporterNs.report("DamageData", "../base/damage/DamageData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageLab(extras) {
    _reporterNs.report("DamageLab", "../base/damage/DamageLab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPvpDrawLine(extras) {
    _reporterNs.report("PvpDrawLine", "./PvpDrawLine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPvpMoveCircle(extras) {
    _reporterNs.report("PvpMoveCircle", "./move/PvpMove", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMsgControl(extras) {
    _reporterNs.report("FightMsgControl", "../FightMsgControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  _export("PvpControl", void 0);

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
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
    }, function (_unresolved_5) {
      FightEvent = _unresolved_5.FightEvent;
    }, function (_unresolved_6) {
      FightMacro = _unresolved_6.FightMacro;
    }, function (_unresolved_7) {
      FightRootControl = _unresolved_7.FightRootControl;
      FightState = _unresolved_7.FightState;
    }, function (_unresolved_8) {
      PvpObjType = _unresolved_8.PvpObjType;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_9) {
      FightData = _unresolved_9.FightData;
    }, function (_unresolved_10) {
      Func = _unresolved_10.Func;
    }, function (_unresolved_11) {
      PvpObjFactory = _unresolved_11.PvpObjFactory;
    }, function (_unresolved_12) {
      BuffUI = _unresolved_12.BuffUI;
    }, function (_unresolved_13) {
      DamageData = _unresolved_13.DamageData;
    }, function (_unresolved_14) {
      DamageLab = _unresolved_14.DamageLab;
    }, function (_unresolved_15) {
      PvpDrawLine = _unresolved_15.PvpDrawLine;
    }, function (_unresolved_16) {
      PvpMoveCircle = _unresolved_16.PvpMoveCircle;
    }, function (_unresolved_17) {
      FightMsgControl = _unresolved_17.FightMsgControl;
    }, function (_unresolved_18) {
      ViewName = _unresolved_18.ViewName;
    }, function (_unresolved_19) {
      UIMgr = _unresolved_19.UIMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f550dXJlP9Jfb3fnvw1M/r6", "PvpControl", undefined);

      __checkObsolete__(['_decorator', 'ccenum', 'Mask', 'Node', 'UITransform', 'v3', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);
      tempPos = new Vec3();
      owner = {
        abs: null,
        target: null
      };
      ownerBullet = {
        abs: null
      };
      maxDelayTime = 2000;
      PvpLineData = class PvpLineData {
        constructor(timestamp, points) {
          this.timestamp = 0;
          this.points = [];
          this.timestamp = timestamp;
          this.points = [];
          this.points.push(points);
        }

      };
      /** PVP控制器 */

      _export("PvpControl", PvpControl = class PvpControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        constructor() {
          super(...arguments);
          this.allAbsObj = new Map();

          /** 根据唯一id记录 */
          this.absAllMap = new Map();
          this.delayTime = 0;
          this.time = 0;
          this.executeEvIndex = 0;
          this.fightFlow = [];
          this.dataPause = true;
          this.pvpLine = new (_crd && PvpDrawLine === void 0 ? (_reportPossibleCrUseOfPvpDrawLine({
            error: Error()
          }), PvpDrawLine) : PvpDrawLine)();
          this.lineList = [];
          this.lineListIdx = 0;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new PvpControl();
          }

          return this._instance;
        }

        purge() {
          this.dataPause = true;
          this.time = 0;
          this.delayTime = 0;
          this.executeEvIndex = 0;
          this.fightFlow.length = 0;
          this.allAbsObj.set((_crd && PvpObjType === void 0 ? (_reportPossibleCrUseOfPvpObjType({
            error: Error()
          }), PvpObjType) : PvpObjType).role, []);
          this.allAbsObj.set((_crd && PvpObjType === void 0 ? (_reportPossibleCrUseOfPvpObjType({
            error: Error()
          }), PvpObjType) : PvpObjType).bullet, []);
        }

        init() {
          this.purge();

          if (!(_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.isPvp) {
            return;
          }

          this.register();
          this.fightFlow = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.fightPvp.fightFlow; // 整理线条消息

          var lineMap = new Map();

          for (var i = 0; i < this.fightFlow.length; ++i) {
            var flow = this.fightFlow[i];

            if (flow.ev == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).FightEvent.FEDrawLine) {
              var data = lineMap.get(flow.timestamp);

              if (data == null) {
                data = new PvpLineData(flow.timestamp, flow.drawLine.points);
                lineMap.set(flow.timestamp, data);
                this.lineList.push(data);
              } else {
                data.points.push(flow.drawLine.points);
              }
            }
          }

          this.lineList.sort(function (a, b) {
            return a.timestamp - b.timestamp;
          });
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Pvp_recycle, this.Pvp_recycle, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Pause, this.onPause, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Time_Scale, this.onTime_Scale, this);
        }

        start() {
          this.pvpLine.setParent((_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.getRootView().drawLine);
          (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.setState((_crd && FightState === void 0 ? (_reportPossibleCrUseOfFightState({
            error: Error()
          }), FightState) : FightState).ing);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Pvp_start);
          this.dataPause = (_crd && FightMsgControl === void 0 ? (_reportPossibleCrUseOfFightMsgControl({
            error: Error()
          }), FightMsgControl) : FightMsgControl).ins.isTest;
        }

        iFightUpdate(dt) {
          if (this.dataPause) {
            return;
          }

          this.delayTime += dt;

          if (this.delayTime < maxDelayTime) {
            return;
          }

          this.time += dt;
          this.allAbsObj.forEach((v, k) => {
            var len = v.length;

            for (var index = 0; index < len; index++) {
              var v1 = v[index];
              v1 && v1.updateFrame(dt);
            }
          });

          if (this.lineListIdx < this.lineList.length) {
            var data = this.lineList[this.lineListIdx];

            if (data.timestamp <= this.time) {
              this.pvpLine.recycle();

              for (var p of data.points) {
                this.pvpLine.show(p);
              }

              ++this.lineListIdx;
            }
          }

          var totalLen = this.fightFlow.length;

          if (this.executeEvIndex < totalLen) {
            for (var index = this.executeEvIndex; index < totalLen; index++) {
              var v = this.fightFlow[index];

              if (this.time < v.timestamp) {
                break;
              }

              this.executeEv(v);
              this.executeEvIndex += 1;
            }
          }
        }

        onNextFrame() {
          this.dataPause = false;
          this.iFightUpdate(16);
          this.dataPause = true;
        }

        onNextStep() {
          var totalLen = this.fightFlow.length;

          if (this.executeEvIndex < totalLen) {
            for (var index = this.executeEvIndex; index < totalLen; index++) {
              var v = this.fightFlow[index];
              this.executeEv(v);
              this.executeEvIndex += 1;
              break;
            }
          }
        } //-----------------obj相关---------------


        Pvp_recycle(abs) {
          this.removeObj(abs);
          (_crd && PvpObjFactory === void 0 ? (_reportPossibleCrUseOfPvpObjFactory({
            error: Error()
          }), PvpObjFactory) : PvpObjFactory).put(abs);
        }

        onPause(pause) {
          this.allAbsObj.forEach((list, k) => {
            var len = list.length;

            for (var index = 0; index < len; index++) {
              var v = list[index];

              if (v && v.avatar) {
                v.avatar.updatePause(pause);
              }
            }
          });
        }

        onTime_Scale() {
          this.allAbsObj.forEach((list, k) => {
            var len = list.length;

            for (var index = 0; index < len; index++) {
              var v = list[index];

              if (v && v.avatar) {
                v.avatar.updateTimeScale();
              }
            }
          });
        }

        addObj(abs) {
          var objList = this.getObjList(abs.objType);
          objList.push(abs);
          this.absAllMap.set(abs.objId, abs);
        }

        removeObj(abs) {
          var objList = this.getObjList(abs.objType);
          var len = objList.length;
          this.absAllMap.delete(abs.objId);

          for (var index = 0; index < len; index++) {
            var v = objList[index];

            if (v == abs) {
              objList.splice(index, 1);
              return true;
            }
          }

          return false;
        }

        getObjList(objType) {
          return this.allAbsObj.get(objType);
        }

        getObjById(objId) {
          return this.absAllMap.get(objId);
        }

        getRoleById(objId) {
          return this.getObjById(objId);
        }

        getBulletById(objId) {
          return this.getObjById(objId);
        }

        getHerosByGroup(group) {
          var list = this.allAbsObj.get((_crd && PvpObjType === void 0 ? (_reportPossibleCrUseOfPvpObjType({
            error: Error()
          }), PvpObjType) : PvpObjType).role);
          var newList = [];

          for (var index = 0; index < list.length; index++) {
            var v = list[index];

            if (v.group == group) {
              newList.push(v);
            }
          }

          return newList;
        }

        recycleAll() {
          this.allAbsObj.forEach((v, k) => {
            var len = v.length;

            for (var index = len - 1; index >= 0; index--) {
              var v1 = v[index];
              !v1.isRecycle && v1.recycle();
            }
          });
          this.absAllMap.clear();
          this.pvpLine.destory();
        } //------------执行相关----------------


        executeEv(fl) {
          if ((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightEvent[fl.ev] != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightEvent[(_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightEvent.FEDrawLine]) {
            console.log((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).FightEvent[fl.ev], fl);
          }

          if (this[(_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightEvent[fl.ev]]) {
            this[(_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).FightEvent[fl.ev]](fl[fl.Event]);
          }
        }

        FECreateHero(createHero) {
          var fightInfo = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.getPvpFightInfoByGroup(createHero.group);
          var hero = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).forBy(fightInfo.fightInfo.heroData, "id", createHero.serial);

          if (hero == null) {
            console.log("创建英雄-未找到英雄id,");
            return;
          }

          owner.abs = (_crd && PvpObjFactory === void 0 ? (_reportPossibleCrUseOfPvpObjFactory({
            error: Error()
          }), PvpObjFactory) : PvpObjFactory).getRole((_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.getRootView().objects);
          owner.abs.objId = hero.id;
          owner.abs.setGroup(createHero.group);
          owner.abs.setHero(hero);
          owner.abs.barItem = (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.getUIView().createBarItem(null);
          owner.abs.barItem.setAttrData(owner.abs.attrData);
          owner.abs.barItem.isActive = true;
          owner.abs.init();
          tempPos.x = createHero.x;
          tempPos.y = createHero.y;
          tempPos.z = 0;
          (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).serverPostion(tempPos);
          owner.abs.setPosition(tempPos);
          this.addObj(owner.abs);
        }

        FEUpdateHP(updateHP) {
          owner.abs = this.getRoleById(updateHP.serial);

          if (owner.abs) {
            owner.abs.attrData.setData(updateHP);
            owner.abs.updateHP();
          }
        }

        FECreateBullet(createBullet) {
          var configTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BulletTableById.getValue(createBullet.bulletId);

          if (!configTab || createBullet.walkAnimId == 0) {
            console.log("子弹配置为null or walkAnimId为0");
            return;
          }

          var bulletParent = (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.getBulletNode((_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).isEffectShowBelow(createBullet.walkAnimId));

          if (configTab.CommonShow == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).CommonShow.CommonShow_LaunchMask) {
            var maskNode = new Node("BulletLaunchMask");
            var uiComp = maskNode.addComponent(UITransform);
            uiComp.anchorX = 0;
            uiComp.height = view.getVisibleSize().height;
            uiComp.width = view.getVisibleSize().width;
            maskNode.addComponent(Mask);
            maskNode.parent = bulletParent;
            bulletParent = maskNode;

            if (createBullet.group == 1) {
              maskNode.angle = 180;
            }
          }

          ownerBullet.abs = (_crd && PvpObjFactory === void 0 ? (_reportPossibleCrUseOfPvpObjFactory({
            error: Error()
          }), PvpObjFactory) : PvpObjFactory).getBullet(bulletParent);
          ownerBullet.abs.objId = createBullet.serial;
          ownerBullet.abs.setFl(createBullet);
          ownerBullet.abs.init();
          this.addObj(ownerBullet.abs);
          ownerBullet.abs.run();
        }

        FERemoveObject(removeObject) {
          owner.abs = this.getRoleById(removeObject.serial);

          if (owner.abs) {
            owner.abs.recycle();
          }
        }

        FEAddBuffer(addBuffer) {
          owner.abs = this.getRoleById(addBuffer.owner);

          if (owner.abs) {
            owner.abs.buffs.push(addBuffer);
            this.addBuffEffect(owner.abs, addBuffer.bufferId);
          }
        }

        FEUpdateBuffer(updateBuffer) {
          owner.abs = this.getRoleById(updateBuffer.owner);

          if (owner.abs) {
            var buff = owner.abs.getBuffByIndex(updateBuffer.index);

            if (buff) {
              if (updateBuffer.layer == 0) {
                (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                  error: Error()
                }), Func) : Func).removeBy(owner.abs.buffs, "index", updateBuffer.index);
                this.removeBuffEffect(owner.abs, buff.bufferId);
              } else {
                buff.layer = updateBuffer.layer;
              }
            }
          }
        }

        addBuffEffect(abs, buffId) {
          var buff = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BuffTableById.getValue(buffId);

          if (buff && buff.VFXID) {
            var buffUI = abs.getBuffUI(buffId);

            if (buffUI == null) {
              buffUI = (_crd && BuffUI === void 0 ? (_reportPossibleCrUseOfBuffUI({
                error: Error()
              }), BuffUI) : BuffUI).get();

              if ((_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
                error: Error()
              }), FightMacro) : FightMacro).isEffectShowBelow(buff.VFXID)) {
                (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
                  error: Error()
                }), FightRootControl) : FightRootControl).ins.getRootView().roleDown.addChild(buffUI.node);
              } else {
                abs.node.addChild(buffUI.node);
              }

              buffUI.setPvpBuff(buffId, abs);
              abs.addBuffUI(buffUI);
            }

            buffUI.addCount();
          }
        }

        removeBuffEffect(abs, buffId) {
          var buff = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BuffTableById.getValue(buffId);

          if (buff && buff.VFXID) {
            var buffUI = abs.getBuffUI(buffId);

            if (buffUI) {
              buffUI.subCount();

              for (var index = 0; index < abs.buffUis.length; index++) {
                var v = abs.buffUis[index];

                if (v.buffId == buffUI.buffId) {
                  if (v.totalCount <= 0) {
                    v.recycle();
                    abs.buffUis.splice(index, 1);
                    break;
                  }
                }
              }
            }
          }
        }

        FEUseSkill(useSkill) {
          owner.abs = this.getRoleById(useSkill.attacker);

          if (owner.abs) {
            owner.abs.playSkill(useSkill.actionId);
            owner.abs.avatar.setOtherSpeedScale(Math.max(useSkill.attackSpeed, -9000));
          }
        }

        FEObjectDead(objectDead) {
          owner.abs = this.getRoleById(objectDead.hp.serial);

          if (owner.abs) {
            owner.abs.onDead();
            this.FEUpdateHP(objectDead.hp);
          }
        }

        FEObjectRevive(objectRevive) {
          owner.abs = this.getRoleById(objectRevive.hp.serial);

          if (owner.abs) {
            owner.abs.onRevive();
            this.FEUpdateHP(objectRevive.hp);
          }
        }

        FEDamage(damage) {
          // console.log("FEDamage", damage)
          owner.abs = this.getRoleById(damage.target);

          if (owner.abs) {
            owner.abs.onDamage(damage);
            var dd = (_crd && DamageData === void 0 ? (_reportPossibleCrUseOfDamageData({
              error: Error()
            }), DamageData) : DamageData).get();
            dd.isCritical = damage.isFatalAtk;
            dd.isCriticalPoint = damage.isCritical;
            dd.isTear = damage.isDivulse;
            dd.damage = damage.damage + damage.shieldDamage;
            dd.pos.x = owner.abs.getPosition().x + owner.abs.center.x;
            dd.pos.y = owner.abs.getPosition().y + owner.abs.center.y;
            (_crd && DamageLab === void 0 ? (_reportPossibleCrUseOfDamageLab({
              error: Error()
            }), DamageLab) : DamageLab).showDamageNum(dd); //命中特效

            owner.target = this.getRoleById(damage.target);
            ownerBullet.abs = this.getBulletById(damage.bulletSerial);

            if (owner.target && ownerBullet.abs) {
              if (ownerBullet.abs.fl.hitEffect.length) {
                (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                  error: Error()
                }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
                  error: Error()
                }), FightEvent) : FightEvent).Hit_Effect_Add, ownerBullet.abs.fl.hitEffect, ownerBullet.abs.startPos, owner.target.getHitPos());
              }
            }
          }
        }

        FEBufferHeal(heal) {
          owner.abs = this.getRoleById(heal.serial);

          if (owner.abs) {
            owner.abs.onHeal(heal);
            var buf = owner.abs.getBuffByIndex(heal.bufferIndex);

            if (buf) {
              var dd = (_crd && DamageData === void 0 ? (_reportPossibleCrUseOfDamageData({
                error: Error()
              }), DamageData) : DamageData).get();
              dd.isHeal = true;
              dd.damage = heal.healHp;
              dd.pos.x = owner.abs.getPosition().x + owner.abs.center.x;
              dd.pos.y = owner.abs.getPosition().y + owner.abs.center.y;
              (_crd && DamageLab === void 0 ? (_reportPossibleCrUseOfDamageLab({
                error: Error()
              }), DamageLab) : DamageLab).showDamageNum(dd);
            }
          }
        }

        FEStartRest(startRest) {
          owner.abs = this.getRoleById(startRest.serial);

          if (owner.abs) {
            owner.abs.onSkillCD(startRest.restTime);
          }
        }

        FEEndRest(endRest) {
          owner.abs = this.getRoleById(endRest.serial);

          if (owner.abs) {
            owner.abs.skillCdEnd();
          }
        }

        FEMoveTo(moveTo) {
          ownerBullet.abs = this.getBulletById(moveTo.serial);

          if (ownerBullet.abs) {
            tempPos.x = moveTo.x;
            tempPos.y = moveTo.y;
            tempPos.z = 0;
            (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
              error: Error()
            }), FightMacro) : FightMacro).serverPostion(tempPos);
            ownerBullet.abs.setStartPos(tempPos);
            tempPos.x = moveTo.dx;
            tempPos.y = moveTo.dy;
            ownerBullet.abs.speed = moveTo.speed;
            ownerBullet.abs.setVelocity(tempPos);
          }
        }

        FEMoveLineCircle(moveLineCircle) {
          ownerBullet.abs = this.getBulletById(moveLineCircle.serial);

          if (ownerBullet.abs) {
            tempPos.x = moveLineCircle.x;
            tempPos.y = moveLineCircle.y;
            tempPos.z = 0;
            (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
              error: Error()
            }), FightMacro) : FightMacro).serverPostion(tempPos);
            ownerBullet.abs.setStartPos(tempPos);
            tempPos.x = moveLineCircle.dx;
            tempPos.y = moveLineCircle.dy;
            ownerBullet.abs.speed = moveLineCircle.speed;
            ownerBullet.abs.setVelocity(tempPos);

            if (!(ownerBullet.abs.move instanceof (_crd && PvpMoveCircle === void 0 ? (_reportPossibleCrUseOfPvpMoveCircle({
              error: Error()
            }), PvpMoveCircle) : PvpMoveCircle))) {
              return;
            }

            ownerBullet.abs.move.init();
            ownerBullet.abs.move.addAngle = moveLineCircle.angle;
          }
        }

        FEEndFight(endFight) {
          (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.setState((_crd && FightState === void 0 ? (_reportPossibleCrUseOfFightState({
            error: Error()
          }), FightState) : FightState).end);

          if (endFight.result == 0) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).FightWinPop,
              data: (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                error: Error()
              }), FightData) : FightData).ins.fincaBattleFightRsp.rewards
            });
          } else if (endFight.result) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).FightLosePop,
              data: (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                error: Error()
              }), FightData) : FightData).ins.fincaBattleFightRsp.rewards
            });
          } // CommonTipsPop.create(LangMgr.getLab("战斗结束," + endFight.result), () => {
          //     FightRootControl.ins.pvpEnd()
          // })

        }

        FEUpdateHoldTime(updateHoldTime) {
          owner.abs = this.getRoleById(updateHoldTime.serial);

          if (owner.abs) {
            owner.abs.showHoldTime(updateHoldTime.holdTime);
          }
        } // FESetBulletSpeed(setBulletSpeed: proto.FightFlowSetBulletSpeed) {
        //     let bullet = this.getBulletById(setBulletSpeed.serial)
        //     if (bullet) {
        //         bullet.speed = setBulletSpeed.speed
        //         bullet.setVelocityAngle(bullet.getVoAngle())
        //     }
        // }
        // FEDrawLine(drawLine: proto.FightFlowDrawLine){
        //     console.log(drawLine)
        //     this.pvpLine.show(drawLine.points)
        // }


      });

      PvpControl._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9a8ddadc8524a9a58ffe8fc671006c08e7b5a5d3.js.map