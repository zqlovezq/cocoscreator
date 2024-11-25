System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AbsState, AbsRoleState, AbsBulletState, DefaultState, _crd, AbsStateType;

  function _reportPossibleCrUseOfAbsObj(extras) {
    _reporterNs.report("AbsObj", "../AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "../bullet/Bullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsRole(extras) {
    _reporterNs.report("AbsRole", "../role/AbsRole", _context.meta, extras);
  }

  _export({
    AbsState: void 0,
    AbsRoleState: void 0,
    AbsBulletState: void 0,
    DefaultState: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fab18nCxGxDYKL1sE56O+ld", "AbsState", undefined);

      /** 状态机类型 */
      _export("AbsStateType", AbsStateType = /*#__PURE__*/function (AbsStateType) {
        AbsStateType[AbsStateType["default"] = 0] = "default";
        AbsStateType[AbsStateType["roleIdle"] = 1] = "roleIdle";
        AbsStateType[AbsStateType["roleMove"] = 2] = "roleMove";
        AbsStateType[AbsStateType["roleAttack"] = 3] = "roleAttack";
        AbsStateType[AbsStateType["roleDead"] = 4] = "roleDead";
        AbsStateType[AbsStateType["RoleBorn"] = 5] = "RoleBorn";
        AbsStateType[AbsStateType["RoleRevive"] = 6] = "RoleRevive";
        AbsStateType[AbsStateType["RoleSkillCd"] = 7] = "RoleSkillCd";
        AbsStateType[AbsStateType["RoleNoActive"] = 8] = "RoleNoActive";
        AbsStateType[AbsStateType["RoleBackJump"] = 9] = "RoleBackJump";
        AbsStateType[AbsStateType["RoleVertigo"] = 10] = "RoleVertigo";
        AbsStateType[AbsStateType["bulletBorn"] = 101] = "bulletBorn";
        AbsStateType[AbsStateType["bulletMove"] = 102] = "bulletMove";
        AbsStateType[AbsStateType["bulletBoom"] = 103] = "bulletBoom";
        AbsStateType[AbsStateType["pvpIdle"] = 201] = "pvpIdle";
        AbsStateType[AbsStateType["pvpMove"] = 202] = "pvpMove";
        AbsStateType[AbsStateType["pvpAttack"] = 203] = "pvpAttack";
        AbsStateType[AbsStateType["pvpDead"] = 204] = "pvpDead";
        AbsStateType[AbsStateType["pvpBorn"] = 205] = "pvpBorn";
        AbsStateType[AbsStateType["pvpRevive"] = 206] = "pvpRevive";
        AbsStateType[AbsStateType["pvpSkillCd"] = 207] = "pvpSkillCd";
        AbsStateType[AbsStateType["pvpNoActive"] = 208] = "pvpNoActive";
        AbsStateType[AbsStateType["pvpBackJump"] = 209] = "pvpBackJump";
        AbsStateType[AbsStateType["pvpVertigo"] = 210] = "pvpVertigo";
        return AbsStateType;
      }({}));

      _export("AbsState", AbsState = class AbsState {
        constructor(sType) {
          this.stateType = void 0;
          this.abs = void 0;
          this.stateType = sType;
        }

        setAbs(abs) {
          this.abs = abs;
        }

        getAnimId(_stateType) {
          if (this.abs) {
            return this.abs.stateAnims.get(_stateType || this.stateType) || 0;
          }

          return 0;
        }

        enter() {
          let animId = this.getAnimId();

          if (animId == 0) {
            this.avatarPlayComplete("");
            return false;
          }

          this.abs.animationId = animId;
          return true;
        }

        updateFrame(delteTime) {}

        leave() {}

        avatarPlayComplete(animName) {}

      });

      _export("AbsRoleState", AbsRoleState = class AbsRoleState extends AbsState {
        constructor(...args) {
          super(...args);
          this.abs = void 0;
        }

        avatarPlayComplete(animName) {
          this.abs.changeState(AbsStateType.roleIdle);
        }

      });

      _export("AbsBulletState", AbsBulletState = class AbsBulletState extends AbsState {
        constructor(...args) {
          super(...args);
          this.abs = void 0;
        }

      });

      _export("DefaultState", DefaultState = class DefaultState extends AbsState {
        constructor() {
          super(AbsStateType.default);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=879b4d2cd18904ab98113cd29532e444ae4d59d4.js.map