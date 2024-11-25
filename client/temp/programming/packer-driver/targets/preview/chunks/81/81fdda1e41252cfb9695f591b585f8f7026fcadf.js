System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, PowerBase, _dec, _class, _crd, ccclass, property, RogueTab;

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPowerBase(extras) {
    _reporterNs.report("PowerBase", "./PowerBase", _context.meta, extras);
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
      PowerBase = _unresolved_2.PowerBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9b570+HU0RAAY1isrdWOUce", "RogueTab", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RogueTab", RogueTab = (_dec = ccclass('RogueTab'), _dec(_class = class RogueTab extends (_crd && PowerBase === void 0 ? (_reportPossibleCrUseOfPowerBase({
        error: Error()
      }), PowerBase) : PowerBase) {
        constructor() {
          super(...arguments);
          this.configTab = void 0;
          //---------------------配置字段-------------------
          this.Id = void 0;
          // ID 
          this.Condition = void 0;
          // 前置条件 
          this.Sort = void 0;
          // 分类 
          this.Own = void 0;
          // 归属 
          this.Level = void 0;
          // 重数 
          this.Stage = void 0;
          // 阶段 
          this.Skill = void 0;
          // 技能id 
          this.SkillGroup = void 0;
          // 技能组id 
          this.Weight = void 0;
          // 权重 
          this.Mutex = void 0;
          // 互斥 
          this.Backlimit = void 0;
          // 放回上限 
          this.BookId = void 0;
          // 对应秘籍ID 
          this.ActivationCondition = void 0;
        }

        // 激活条件 
        //---------------------自有字段-------------------
        setConfigId(id) {
          super.setConfigId(id);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=81fdda1e41252cfb9695f591b585f8f7026fcadf.js.map