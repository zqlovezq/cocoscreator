System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsControl, RedMgr, RedDotType, _dec, _class, _class2, _crd, ccclass, property, SettingRedManager;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
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
      RedMgr = _unresolved_3.RedMgr;
    }, function (_unresolved_4) {
      RedDotType = _unresolved_4.RedDotType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d6372LiTkxG5ZWYBfA+IGId", "SettingRedManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SettingRedManager", SettingRedManager = (_dec = ccclass('SettingRedManager'), _dec(_class = (_class2 = class SettingRedManager extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        constructor(...args) {
          super(...args);
          this.settings = {
            RedStamina: false,
            //打开购买体力界面
            GoldBuy: false,
            //打开购买金币界面
            GachaAds: false,
            //打开高抽界面
            TenGacha: false,
            //打开高抽界面
            TenBookGacha: false //打开武器抽界面

          };
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new SettingRedManager();
          }

          return this._instance;
        }

        setSetting(key, value) {
          this.settings[key] = value; // 刷新红点

          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType)[key]);
        }

        getSetting(key) {
          return this.settings[key];
        }

        loadSettings() {
          for (let key in this.settings) {
            this.settings[key] = false;
          }
        }

        resetLoadSetting() {
          for (let key in this.settings) {
            this.setSetting(key, false);
          }
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4c97cdba767c2aacc5473305226bba5499362d08.js.map