System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CDTime, tab, FightMacro, EventMgr, FightEvent, _dec, _class, _crd, ccclass, property, SkillGroupCd;

  function _reportPossibleCrUseOfRoleInfo(extras) {
    _reporterNs.report("RoleInfo", "../obj/role/role/RoleInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillGroupTab(extras) {
    _reporterNs.report("SkillGroupTab", "../../power/powerTab/SkillGroupTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCDTime(extras) {
    _reporterNs.report("CDTime", "../cd/CDTime", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMacro(extras) {
    _reporterNs.report("FightMacro", "../../define/FightDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../../define/FightEvent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      CDTime = _unresolved_2.CDTime;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      FightMacro = _unresolved_4.FightMacro;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }, function (_unresolved_6) {
      FightEvent = _unresolved_6.FightEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fec67RPujhNyJElDYKDa0Ed", "SkillGroupCd", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 技能组CD 
      */

      _export("SkillGroupCd", SkillGroupCd = (_dec = ccclass('SkillGroupCd'), _dec(_class = class SkillGroupCd {
        constructor() {
          this.absInfo = void 0;
          this.skillGroup = void 0;
          this.cd = new (_crd && CDTime === void 0 ? (_reportPossibleCrUseOfCDTime({
            error: Error()
          }), CDTime) : CDTime)();
          this.isCDing = false;
          this.cdCb = void 0;
        }

        setAbsInfo(info) {
          this.absInfo = info;
        }

        inCd(skillGroup, cb) {
          this.skillGroup = skillGroup;
          this.cdCb = cb;
          this.isCDing = true;
          this.cd.reset();
          var breathTime = this.absInfo.normalGroup.BreathTime;
          var breathTimePercent = ((_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT - this.absInfo.attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_BreathTimePercent)) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT;
          var breathPer = ((_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT + this.absInfo.attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_BreathPer)) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT;
          var time = breathTime * breathTimePercent / breathPer;
          this.cd.setLiftTime(Math.floor(time), this.onCdEnd.bind(this));
          this.cd.setSpeed(1);
          this.updateProgress(this.getProgress());
        }

        updateFrame(dt) {
          this.cd.updateFrame(dt);
          this.updateProgress(this.getProgress());
        }

        onCdEnd() {
          this.updateProgress(1);
          this.isCDing = false;
          this.cdCb && this.cdCb();
        }

        getProgress() {
          return this.cd.getProgress();
        }

        updateProgress(per) {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Fight_Skill_Cd_Progress, this.skillGroup.configId, per);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2651ce0e06d993dfad678071fd325dd26cb65cfa.js.map