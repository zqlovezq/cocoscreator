System.register(["__unresolved_0", "cc", "client_protocol", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, proto, FightData, PvpControl, ViewSize, PvpTest, _crd;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPvpControl(extras) {
    _reporterNs.report("PvpControl", "./PvpControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPvpRole(extras) {
    _reporterNs.report("PvpRole", "./obj/PvpRole", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewSize(extras) {
    _reporterNs.report("ViewSize", "../../define/ViewDefine", _context.meta, extras);
  }

  _export("PvpTest", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_2) {
      FightData = _unresolved_2.FightData;
    }, function (_unresolved_3) {
      PvpControl = _unresolved_3.PvpControl;
    }, function (_unresolved_4) {
      ViewSize = _unresolved_4.ViewSize;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ca461kC8npOkr8UXXsx93Y6", "PvpTest", undefined);

      _export("PvpTest", PvpTest = class PvpTest {
        static createHero(group) {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightFlow();
          msg.timestamp = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).time;
          msg.ev = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightEvent.FECreateHero;
          msg.createHero = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightFlowCreateHero();
          msg.createHero.group = group;
          var newList = (_crd && PvpControl === void 0 ? (_reportPossibleCrUseOfPvpControl({
            error: Error()
          }), PvpControl) : PvpControl).ins.getHerosByGroup(group);

          if (newList.length) {
            msg.createHero.serial = newList[newList.length - 1].hero.id + 1;
          } else {
            msg.createHero.serial = group * 5 + 1;
          }

          msg.createHero.x = -216;
          msg.createHero.y = 50;
          var hp = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightFlowUpdateHP();
          hp.serial = msg.createHero.serial;
          hp.maxHp = 100;
          hp.hp = 80;
          hp.sheild = 50;
          (_crd && PvpControl === void 0 ? (_reportPossibleCrUseOfPvpControl({
            error: Error()
          }), PvpControl) : PvpControl).ins.executeEv(msg);
        }

        static createBullet(bulletId, animId) {
          PvpTest.bulletIndex += 1;
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightFlow();
          msg.ev = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightEvent.FECreateBullet;
          msg.createBullet = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightFlowCreateBullet();
          msg.createBullet.bulletId = bulletId;
          msg.createBullet.serial = PvpTest.bulletIndex;
          msg.createBullet.x = (_crd && ViewSize === void 0 ? (_reportPossibleCrUseOfViewSize({
            error: Error()
          }), ViewSize) : ViewSize).halfSize.width;
          msg.createBullet.y = (_crd && ViewSize === void 0 ? (_reportPossibleCrUseOfViewSize({
            error: Error()
          }), ViewSize) : ViewSize).halfSize.height;
          msg.createBullet.walkAnimId = animId;
          (_crd && PvpControl === void 0 ? (_reportPossibleCrUseOfPvpControl({
            error: Error()
          }), PvpControl) : PvpControl).ins.executeEv(msg);
        }

        static useSkill() {
          // 使用技能
          // let msg = new proto.FightFlow()
          // msg.ev = proto.FightEvent.FEUseSkill
          // msg.useSkill = new proto.FightFlowUseSkill()
          // msg.useSkill.skillId = 3201011
          // msg.useSkill.attacker = 4
          // msg.useSkill.actionId = 320107
          // PvpControl.ins.executeEv(msg)
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightFlow();
          msg.ev = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightEvent.FEMoveLineCircle;
          msg.moveLineCircle = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightFlowMoveLineCircle();
          msg.moveLineCircle.serial = PvpTest.bulletIndex;
          msg.moveLineCircle.x = (_crd && ViewSize === void 0 ? (_reportPossibleCrUseOfViewSize({
            error: Error()
          }), ViewSize) : ViewSize).halfSize.width;
          msg.moveLineCircle.y = (_crd && ViewSize === void 0 ? (_reportPossibleCrUseOfViewSize({
            error: Error()
          }), ViewSize) : ViewSize).halfSize.height;
          msg.moveLineCircle.dx = 1;
          msg.moveLineCircle.dy = 0;
          msg.moveLineCircle.angle = 10;
          msg.moveLineCircle.speed = 80;
          (_crd && PvpControl === void 0 ? (_reportPossibleCrUseOfPvpControl({
            error: Error()
          }), PvpControl) : PvpControl).ins.executeEv(msg);
        }

        static addBuff() {
          //25411
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightFlow();
          msg.ev = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightEvent.FEAddBuffer;
          msg.addBuffer = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightFlowAddBuffer();
          msg.addBuffer.adder = 1;
          msg.addBuffer.owner = 1;
          msg.addBuffer.bufferId = 25411;
          msg.addBuffer.index = 1;
          msg.addBuffer.layer = 3;
          (_crd && PvpControl === void 0 ? (_reportPossibleCrUseOfPvpControl({
            error: Error()
          }), PvpControl) : PvpControl).ins.executeEv(msg);
        }

        static updateBuff() {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightFlow();
          msg.ev = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightEvent.FEUpdateBuffer;
          msg.updateBuffer = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightFlowUpdateBuffer();
          msg.updateBuffer.owner = 1;
          msg.updateBuffer.index = 1;
          var abs = (_crd && PvpControl === void 0 ? (_reportPossibleCrUseOfPvpControl({
            error: Error()
          }), PvpControl) : PvpControl).ins.getObjById(msg.updateBuffer.owner);

          if (abs) {
            var buff = abs.getBuffByIndex(msg.updateBuffer.index);

            if (buff) {
              msg.updateBuffer.layer = buff.layer - 1;
            }
          } else {
            msg.updateBuffer.layer = 2;
          }

          (_crd && PvpControl === void 0 ? (_reportPossibleCrUseOfPvpControl({
            error: Error()
          }), PvpControl) : PvpControl).ins.executeEv(msg);
        }

        static skillCD() {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightFlow();
          msg.ev = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightEvent.FEStartRest;
          msg.startRest = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightFlowStartRest();
          msg.startRest.serial = 1;
          msg.startRest.restTime = 2000;
          (_crd && PvpControl === void 0 ? (_reportPossibleCrUseOfPvpControl({
            error: Error()
          }), PvpControl) : PvpControl).ins.executeEv(msg);
        }

        static skillCDEnd() {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightFlow();
          msg.ev = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightEvent.FEEndRest;
          msg.endRest = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightFlowEndRest();
          msg.endRest.serial = 1;
          (_crd && PvpControl === void 0 ? (_reportPossibleCrUseOfPvpControl({
            error: Error()
          }), PvpControl) : PvpControl).ins.executeEv(msg);
        }

        static onDead() {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightFlow();
          msg.ev = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightEvent.FEObjectDead;
          msg.objectDead = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightFlowObjectDead();
          msg.objectDead.hp = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightFlowUpdateHP();
          msg.objectDead.hp.hp = 0;
          msg.objectDead.hp.maxHp = 100;
          msg.objectDead.hp.serial = 1;
          msg.objectDead.hp.sheild = 0;
          (_crd && PvpControl === void 0 ? (_reportPossibleCrUseOfPvpControl({
            error: Error()
          }), PvpControl) : PvpControl).ins.executeEv(msg);
        }

        static onRevive() {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightFlow();
          msg.ev = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightEvent.FEObjectRevive;
          msg.objectRevive = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightFlowObjectRevive();
          msg.objectRevive.hp = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightFlowUpdateHP();
          msg.objectRevive.hp.hp = 100;
          msg.objectRevive.hp.maxHp = 100;
          msg.objectRevive.hp.sheild = 0;
          msg.objectRevive.hp.serial = 1;
          (_crd && PvpControl === void 0 ? (_reportPossibleCrUseOfPvpControl({
            error: Error()
          }), PvpControl) : PvpControl).ins.executeEv(msg);
        }

        static removeObj(objId) {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightFlow();
          msg.ev = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightEvent.FERemoveObject;
          msg.removeObject = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightFlowRemoveObject();
          msg.removeObject.serial = objId;
          (_crd && PvpControl === void 0 ? (_reportPossibleCrUseOfPvpControl({
            error: Error()
          }), PvpControl) : PvpControl).ins.executeEv(msg);
        }

        static drawLine() {
          var list = [];
          list.push([1197, 476, 1067, 476, 1067, 616, 1197, 616, 1197, 476]);
          list.push([250, 353, 140, 353, 140, 493, 250, 493, 250, 353]);
          list.push([1178, 247, 1068, 247, 1068, 387, 1178, 387, 1178, 247]);
          list.push([956, 310, 856, 310, 856, 450, 956, 450, 956, 310]);
          list.push([260, 140, 140, 140, 140, 280, 260, 280, 260, 140]);

          for (var index = 0; index < list.length; index++) {
            var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).FightFlow();
            msg.ev = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).FightEvent.FEDrawLine;
            msg.drawLine = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).FightFlowDrawLine();
            msg.drawLine.serial = 1; // msg.drawLine.points = [
            //     0, 0, 100, 0, 100, 100, 0, 100, 0, 0
            // ]

            msg.drawLine.points = list[index];
            (_crd && PvpControl === void 0 ? (_reportPossibleCrUseOfPvpControl({
              error: Error()
            }), PvpControl) : PvpControl).ins.executeEv(msg);
          }
        }

      });

      PvpTest.bulletIndex = 10000;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2d30a95608d97dd44394ae76aadc0b1ba0b5bb17.js.map