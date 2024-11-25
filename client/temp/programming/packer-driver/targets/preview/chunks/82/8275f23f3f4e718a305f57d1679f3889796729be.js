System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Vec3, PvpObj, PvpObjType, PvpAttrData, tab, ShadowEffect, EventMgr, FightEvent, Func, CDTime, _dec, _class, _crd, ccclass, property, tempPos, tempPos2, PvpRole;

  function _reportPossibleCrUseOfPvpObj(extras) {
    _reporterNs.report("PvpObj", "./PvpObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPvpObjType(extras) {
    _reporterNs.report("PvpObjType", "./PvpObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPvpAttrData(extras) {
    _reporterNs.report("PvpAttrData", "../PvpAttrData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShadowEffect(extras) {
    _reporterNs.report("ShadowEffect", "../../base/effect/ShadowEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../../define/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightBarItem(extras) {
    _reporterNs.report("FightBarItem", "../../view/common/FightBarItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffUI(extras) {
    _reporterNs.report("BuffUI", "../../base/buff/BuffUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCDTime(extras) {
    _reporterNs.report("CDTime", "../../base/cd/CDTime", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHoldTimeEffectUI(extras) {
    _reporterNs.report("HoldTimeEffectUI", "../../base/effect/HoldTimeEffectUI", _context.meta, extras);
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
      PvpObj = _unresolved_2.PvpObj;
      PvpObjType = _unresolved_2.PvpObjType;
    }, function (_unresolved_3) {
      PvpAttrData = _unresolved_3.PvpAttrData;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      ShadowEffect = _unresolved_5.ShadowEffect;
    }, function (_unresolved_6) {
      EventMgr = _unresolved_6.EventMgr;
    }, function (_unresolved_7) {
      FightEvent = _unresolved_7.FightEvent;
    }, function (_unresolved_8) {
      Func = _unresolved_8.Func;
    }, function (_unresolved_9) {
      CDTime = _unresolved_9.CDTime;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "656d8M3M7VNmbX41AVj2x9G", "PvpRole", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      tempPos = new Vec3();
      tempPos2 = new Vec3();

      _export("PvpRole", PvpRole = (_dec = ccclass('PvpRole'), _dec(_class = class PvpRole extends (_crd && PvpObj === void 0 ? (_reportPossibleCrUseOfPvpObj({
        error: Error()
      }), PvpObj) : PvpObj) {
        constructor() {
          super(...arguments);
          this.objType = (_crd && PvpObjType === void 0 ? (_reportPossibleCrUseOfPvpObjType({
            error: Error()
          }), PvpObjType) : PvpObjType).role;
          //阵营
          this.group = 0;
          this.attrData = new (_crd && PvpAttrData === void 0 ? (_reportPossibleCrUseOfPvpAttrData({
            error: Error()
          }), PvpAttrData) : PvpAttrData)();
          this.hero = void 0;
          this._animationId = 0;
          this.configTab = void 0;
          this.avatarShadow = void 0;
          this.barItem = void 0;
          this.isActive = true;
          this.skillCdTime = new (_crd && CDTime === void 0 ? (_reportPossibleCrUseOfCDTime({
            error: Error()
          }), CDTime) : CDTime)();
          //调息时间
          this.holdEffect = void 0;
          //--------------buff相关--------
          this.buffs = [];
          this.buffUis = [];
        }

        reset() {
          if (this.holdEffect) {
            this.holdEffect.remove();
            this.holdEffect = null;
          }

          this.avatarShadow.recycle();
          this.avatarShadow = null;
          this.barItem.node.destroy();
          this.barItem = null;
          super.reset();
        }

        setGroup(group) {
          this.group = group;
          tempPos.x = group == 0 ? 1 : -1;
          tempPos.y = tempPos.z = 1;
          this.node.scale = tempPos;
        }

        setHero(hero) {
          this.hero = hero;
          this.attrData = new (_crd && PvpAttrData === void 0 ? (_reportPossibleCrUseOfPvpAttrData({
            error: Error()
          }), PvpAttrData) : PvpAttrData)();
          this.attrData.init();
          this.configTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroTableById.getValue(hero.itemId);
          this.initShadow(this.configTab.Shadow);
          this.setBounds(this.configTab.Bounds);
        }

        init() {
          super.init();
          this.skillCdTime.kill();
          this.playAnim(this.configTab.Born, this.playIlde.bind(this));
        }

        initShadow(animId) {
          this.avatarShadow = (_crd && ShadowEffect === void 0 ? (_reportPossibleCrUseOfShadowEffect({
            error: Error()
          }), ShadowEffect) : ShadowEffect).create();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Effect_Add_To_Layer, "shadow", this.avatarShadow.node);
          this.avatarShadow.run(animId);
        }

        setPosition(position) {
          super.setPosition(position);

          if (this.avatarShadow) {
            this.avatarShadow.node.setPosition(position);
          }

          tempPos.set(this.node.position);
          tempPos.y += 125;
          this.barItem.node.position = tempPos;
        }

        updateFrame(dt) {
          super.updateFrame(dt);
          this.skillCdTime.updateFrame(dt);

          if (this.skillCdTime.isValid()) {
            this.barItem.changeSkillCd(this.skillCdTime.getProgress());
          }

          if (this.holdEffect) {
            this.holdEffect.updateFramePvp(dt);
          }
        } //--------------属性相关--------


        onDamage(damage) {
          this.attrData.hp = Math.max(0, this.attrData.hp - damage.damage);
          this.attrData.shield = Math.max(0, this.attrData.shield - damage.shieldDamage);
          this.updateHP();
        }

        onHeal(heal) {
          this.attrData.hp = Math.min(this.attrData.maxHp, this.attrData.hp + heal.healHp);
          this.updateHP();
        }

        updateHP() {
          this.barItem.changeHp();
        } //状态相关

        /** 射击位置 */


        getShotPos() {
          return this.getAvatarSpineBonePos("root/point_attack");
        }
        /** 命中位置 */


        getHitPos() {
          return this.getAvatarSpineBonePos("root/point_beattack");
        }

        getAvatarSpineBonePos(boneName) {
          var bone = this.avatar.getSpineBonePos(boneName);

          if (bone) {
            tempPos.x = bone.x * this.avatar.spine.node.scale.x * this.getScale().x + this.avatar.spine.node.position.x;
            tempPos.y = bone.y * this.avatar.spine.node.scale.y * this.getScale().y + this.avatar.spine.node.position.y;
            tempPos.x += this.getPosition().x;
            tempPos.y += this.getPosition().y;
            tempPos.z += this.getPosition().z;
            return tempPos;
          }

          return this.getPosition();
        }

        onDead() {
          this.isDead = true;
          this.barItem.isActive = false;
          this.avatarShadow.node.active = false;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).add_DeadEffect, this);
          this.playDead();
        }
        /** 复活 */


        onRevive() {
          this.skillCdTime.kill();
          this.isDead = false;
          this.avatarShadow.node.active = true;
          this.barItem.isActive = true;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).remove_DeadEffect, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Hit_Effect_Add, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().Resurrectioneffect, this);
          this.playRevive();
        }

        onSkillCD(cdTime) {
          this.skillCdTime.reset();
          this.skillCdTime.setLiftTime(cdTime, () => {
            this.skillCdEnd();
          });
          this.playSkillCD();
        }

        skillCdEnd() {
          this.skillCdTime.kill();
          this.barItem.changeSkillCd(1);
          this.playIlde();
        } //--------------动画相关--------


        playIlde() {
          if (this.isDead) {
            return;
          }

          this.playAnim(this.configTab.Idle);
        }

        playSkill(animId) {
          if (this.isDead) {
            return;
          }

          this.resetHoldTime();
          this.playAnim(animId, () => {
            this.playIlde();
          });
        }

        playSkillCD() {
          if (this.isDead) {
            return;
          }

          this.playAnim(this.configTab.Idle2 || this.configTab.Idle);
        }

        playDead() {
          this.playAnim(this.configTab.Dead || this.configTab.Idle);
        }

        playRevive() {
          this.playAnim(this.configTab.Revive || this.configTab.Idle, () => {
            this.playIlde();
          });
        }

        showHoldTime(holdTime) {
          if (this.holdEffect == null) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
              error: Error()
            }), FightEvent) : FightEvent).Create_HoldTime_Effect, this);
          }

          this.holdEffect.holdMinTime = holdTime;
          this.holdEffect.resetTimePvp();
        }

        resetHoldTime() {
          if (this.holdEffect) {
            this.holdEffect.resetTimePvp();
          }
        }

        getBuffByIndex(index) {
          return (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).forBy(this.buffs, "index", index);
        }

        addBuffUI(buffUi) {
          this.buffUis.push(buffUi);
        }

        getBuffUI(buffId) {
          return (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).forBy(this.buffUis, "buffId", buffId);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8275f23f3f4e718a305f57d1679f3889796729be.js.map