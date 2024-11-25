System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, tab, TestAttr, _crd;

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "./Table/table_gen", _context.meta, extras);
  }

  _export("TestAttr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "898dfEGJkxI7Inq02lo9Omg", "TestAttr", undefined);

      _export("TestAttr", TestAttr = class TestAttr {});

      //攻击者属性
      TestAttr.attack = [{
        type: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
          error: Error()
        }), tab) : tab).AttrType.AttrType_Attack,
        value: 100
      }, {
        type: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
          error: Error()
        }), tab) : tab).AttrType.AttrType_Hp,
        value: 1000
      }, {
        type: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
          error: Error()
        }), tab) : tab).AttrType.AttrType_BreakDefenceFixed,
        value: 768
      }, {
        type: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
          error: Error()
        }), tab) : tab).AttrType.AttrType_BreakDefencePer,
        value: 1200
      }, {
        type: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
          error: Error()
        }), tab) : tab).AttrType.AttrType_Defence,
        value: 100
      }, {
        type: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
          error: Error()
        }), tab) : tab).AttrType.AttrType_TearCoe,
        value: 2000
      }, {
        type: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
          error: Error()
        }), tab) : tab).AttrType.AttrType_TearDeep,
        value: 1500
      }, {
        type: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
          error: Error()
        }), tab) : tab).AttrType.AttrType_HealDeep,
        value: 1000
      }, {
        type: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
          error: Error()
        }), tab) : tab).AttrType.AttrType_AttackTear,
        value: 1100
      }, {
        type: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
          error: Error()
        }), tab) : tab).AttrType.AttrType_RogueLevel,
        value: 6
      }];
      TestAttr.defanse = [{
        type: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
          error: Error()
        }), tab) : tab).AttrType.AttrType_Attack,
        value: 30
      }, {
        type: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
          error: Error()
        }), tab) : tab).AttrType.AttrType_Hp,
        value: 50000000
      }, {
        type: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
          error: Error()
        }), tab) : tab).AttrType.AttrType_Block,
        value: 0
      }, {
        type: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
          error: Error()
        }), tab) : tab).AttrType.AttrType_Defence,
        value: 0
      }];

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6afa554adcc40821f4ea99737a52c79cd2513f6f.js.map