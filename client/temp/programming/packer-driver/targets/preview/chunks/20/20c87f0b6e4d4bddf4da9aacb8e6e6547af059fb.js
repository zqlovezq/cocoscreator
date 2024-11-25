System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ServerChooseItem, _dec, _class, _crd, ccclass, property, LoginServerChooseItem;

  function _reportPossibleCrUseOfServerChooseItem(extras) {
    _reporterNs.report("ServerChooseItem", "../common/ServerChooseItem", _context.meta, extras);
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
      ServerChooseItem = _unresolved_2.ServerChooseItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "53e94E6jcZPmruA5inXfVB4", "LoginServerChooseItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'log', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LoginServerChooseItem", LoginServerChooseItem = (_dec = ccclass('LoginServerChooseItem'), _dec(_class = class LoginServerChooseItem extends (_crd && ServerChooseItem === void 0 ? (_reportPossibleCrUseOfServerChooseItem({
        error: Error()
      }), ServerChooseItem) : ServerChooseItem) {
        onTcouhItem() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=20c87f0b6e4d4bddf4da9aacb8e6e6547af059fb.js.map