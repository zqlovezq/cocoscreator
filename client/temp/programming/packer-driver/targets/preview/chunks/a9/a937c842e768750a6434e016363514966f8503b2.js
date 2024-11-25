System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsControl, tab, _dec, _class, _class2, _crd, ccclass, property, SkillPowerControl;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillTab(extras) {
    _reporterNs.report("SkillTab", "../../power/powerTab/SkillTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsRoleInfo(extras) {
    _reporterNs.report("AbsRoleInfo", "../obj/role/AbsRoleInfo", _context.meta, extras);
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
      AbsControl = _unresolved_2.AbsControl;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7c7d9OagIVFw7zlMRqQRdjr", "SkillPowerControl", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'Color', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'Quat', 'Rect', 'sp', 'Sprite', 'tween', 'UITransform', 'v3', 'Vec2', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SkillPowerControl", SkillPowerControl = (_dec = ccclass('SkillPowerControl'), _dec(_class = (_class2 = class SkillPowerControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        static get ins() {
          if (null == this._instance) {
            this._instance = new SkillPowerControl();
          }

          return this._instance;
        }

        init() {}

        skillPowerBySkill(roleInfo, skill) {
          if (skill.isPower) {
            // console.log("技能已处理增强--", skill.Id, skill.SkillEnhanceIds)
            return;
          }

          if (skill.SkillEnhanceIds.length == 0) {
            return;
          } // console.log("处理技能增强--", roleInfo.configId, skill.Id, skill.SkillEnhanceIds)


          skill.isPower = true;

          for (var index = 0; index < skill.SkillEnhanceIds.length; index++) {
            var skillPower = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().SkillPowerTableById.getValue(skill.SkillEnhanceIds[index]);

            if (skillPower) {
              roleInfo.skillPowers.addPower(skillPower, true);
            } else {
              console.error("技能增强id不存在--", skill.SkillEnhanceIds[index]);
            }
          }
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a937c842e768750a6434e016363514966f8503b2.js.map