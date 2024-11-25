System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _class, _crd, ccclass, property, SkillTriggerData;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "690796AGRxMqKvIuADSsZG7", "SkillTriggerData", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 技能触发器 
      */

      _export("SkillTriggerData", SkillTriggerData = (_dec = ccclass('SkillTriggerData'), _dec(_class = class SkillTriggerData {
        constructor() {
          this.triggerMap = new Map();
        }

        clear() {
          this.triggerMap.clear();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5ebf5f00785cc422a95281b82d7f4a355213bc4b.js.map