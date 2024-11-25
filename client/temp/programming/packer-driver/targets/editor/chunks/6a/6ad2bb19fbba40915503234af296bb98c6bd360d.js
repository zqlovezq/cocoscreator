System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, MowBulletTargetType, MowBulletType;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4625cA8xZpCjqglfVjFH2xP", "SkillDefine", undefined);

      _export("MowBulletTargetType", MowBulletTargetType = /*#__PURE__*/function (MowBulletTargetType) {
        MowBulletTargetType[MowBulletTargetType["velocity"] = 1] = "velocity";
        MowBulletTargetType[MowBulletTargetType["target"] = 2] = "target";
        return MowBulletTargetType;
      }({}));

      _export("MowBulletType", MowBulletType = /*#__PURE__*/function (MowBulletType) {
        MowBulletType[MowBulletType["BulletTrace_Empty"] = 0] = "BulletTrace_Empty";
        MowBulletType[MowBulletType["Straight"] = 1] = "Straight";
        MowBulletType[MowBulletType["Curve"] = 2] = "Curve";
        MowBulletType[MowBulletType["self"] = 4] = "self";
        MowBulletType[MowBulletType["target"] = 5] = "target";
        return MowBulletType;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6ad2bb19fbba40915503234af296bb98c6bd360d.js.map