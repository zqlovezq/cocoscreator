System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsControl, Func, _dec, _class, _class2, _crd, ccclass, property, SettingsManager;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../utils/Func", _context.meta, extras);
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
      Func = _unresolved_3.Func;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f6eddWxNPdCR5wlwO+eaPez", "SettingsManager", undefined);
      /*
       * @Date: 2024-07-15 09:49:54
       * @LastEditors: wzq
       * @program:设置界面开关控制管理
       * @LastEditTime: 2024-10-31 09:43:16
       */


      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SettingsManager", SettingsManager = (_dec = ccclass('SettingsManager'), _dec(_class = (_class2 = class SettingsManager extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        constructor() {
          super(...arguments);
          this.settings = {
            bgm_flag: true,
            se_flag: true,
            shock_flag: true,
            damage_flag: true,
            isAutoCollect: false,
            isAutoSelectRogue: false,
            needCheckAssociation: false
          };
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new SettingsManager();
          }

          return this._instance;
        }

        static getInstance() {
          return SettingsManager._instance;
        }

        setSetting(key, value) {
          this.settings[key] = value;
          (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).setItem(key, JSON.stringify(value));
        }

        getSetting(key) {
          return this.settings[key];
        }

        loadSettings() {
          for (var _key in this.settings) {
            if (_key == "isAutoCollect") {
              this.setSetting("isAutoCollect", true);
            } // else if(key==="isAutoSelectRogue"){
            //     this.setSetting("isAutoSelectRogue",OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_AutoSelectRogue))
            // }
            else {
              var value = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                error: Error()
              }), Func) : Func).getItem(_key);

              if (value !== null) {
                this.settings[_key] = JSON.parse(value);
              }
            }
          }
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=431b87b570c95c1e883b1de4f8dc2b588eaa9a0b.js.map