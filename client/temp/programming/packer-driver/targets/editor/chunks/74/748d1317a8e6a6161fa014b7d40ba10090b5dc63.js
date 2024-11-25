System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, tab, BuffTab, BulletTab, EffectTab, SkillGroupTab, SkillTab, SkillTriggerTab, _dec, _class, _crd, ccclass, property, PowerTabFactory;

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffTab(extras) {
    _reporterNs.report("BuffTab", "./powerTab/BuffTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletTab(extras) {
    _reporterNs.report("BulletTab", "./powerTab/BulletTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectTab(extras) {
    _reporterNs.report("EffectTab", "./powerTab/EffectTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillGroupTab(extras) {
    _reporterNs.report("SkillGroupTab", "./powerTab/SkillGroupTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillTab(extras) {
    _reporterNs.report("SkillTab", "./powerTab/SkillTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillTriggerTab(extras) {
    _reporterNs.report("SkillTriggerTab", "./powerTab/SkillTriggerTab", _context.meta, extras);
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
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      BuffTab = _unresolved_3.BuffTab;
    }, function (_unresolved_4) {
      BulletTab = _unresolved_4.BulletTab;
    }, function (_unresolved_5) {
      EffectTab = _unresolved_5.EffectTab;
    }, function (_unresolved_6) {
      SkillGroupTab = _unresolved_6.SkillGroupTab;
    }, function (_unresolved_7) {
      SkillTab = _unresolved_7.SkillTab;
    }, function (_unresolved_8) {
      SkillTriggerTab = _unresolved_8.SkillTriggerTab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9a394Xa5hdBcKACsmm7DBF+", "PowerTabFactory", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**技能增强配置 */

      _export("PowerTabFactory", PowerTabFactory = (_dec = ccclass('PowerTabFactory'), _dec(_class = class PowerTabFactory {
        static createType(type) {
          switch (type) {
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_SkillGroupTable:
              return new (_crd && SkillGroupTab === void 0 ? (_reportPossibleCrUseOfSkillGroupTab({
                error: Error()
              }), SkillGroupTab) : SkillGroupTab)();

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_SkillTable:
              return new (_crd && SkillTab === void 0 ? (_reportPossibleCrUseOfSkillTab({
                error: Error()
              }), SkillTab) : SkillTab)();

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_BuffTable:
              return new (_crd && BuffTab === void 0 ? (_reportPossibleCrUseOfBuffTab({
                error: Error()
              }), BuffTab) : BuffTab)();

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_EffectTable:
              return new (_crd && EffectTab === void 0 ? (_reportPossibleCrUseOfEffectTab({
                error: Error()
              }), EffectTab) : EffectTab)();

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_BulletTable:
              return new (_crd && BulletTab === void 0 ? (_reportPossibleCrUseOfBulletTab({
                error: Error()
              }), BulletTab) : BulletTab)();

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_TriggerTable:
              return new (_crd && SkillTriggerTab === void 0 ? (_reportPossibleCrUseOfSkillTriggerTab({
                error: Error()
              }), SkillTriggerTab) : SkillTriggerTab)();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=748d1317a8e6a6161fa014b7d40ba10090b5dc63.js.map