System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, HeroInfo, Func, HeroDataControl, HeroData, _crd, ccclass, property;

  function _reportPossibleCrUseOfIClear(extras) {
    _reporterNs.report("IClear", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "./HeroInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLong(extras) {
    _reporterNs.report("Long", "protobufjs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "./herobag/HeroDataControl", _context.meta, extras);
  }

  _export("HeroData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      HeroInfo = _unresolved_2.HeroInfo;
    }, function (_unresolved_3) {
      Func = _unresolved_3.Func;
    }, function (_unresolved_4) {
      HeroDataControl = _unresolved_4.HeroDataControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2ab09bFMwFHQY+LwpE3Rvde", "HeroData", undefined);

      __checkObsolete__(['Node', 'Prefab', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 英雄数据 */

      _export("HeroData", HeroData = class HeroData {
        constructor() {
          this.heros = [];
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new HeroData();
          }

          return this._instance;
        }

        purge() {
          this.heros.length = 0;
        }

        getHeros() {
          return this.heros;
        }

        adds(list) {
          for (let index = 0; index < list.length; index++) {
            const v = list[index];
            let heroinfo = this.getById(v.id);

            if (heroinfo == null) {
              heroinfo = new (_crd && HeroInfo === void 0 ? (_reportPossibleCrUseOfHeroInfo({
                error: Error()
              }), HeroInfo) : HeroInfo)();
              this.heros.push(heroinfo);
            }

            this.merge(heroinfo, v);
          }

          if (this.heros.length > 0) {
            (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
              error: Error()
            }), HeroDataControl) : HeroDataControl).ins.initBagHeros();
          }
        }

        merge(heroInfo, hero) {
          heroInfo.merge(hero);
        }

        removes(ids) {
          for (let i = 0; i < ids.length; i++) {
            this.remove(ids[i]);
          }
        }

        getById(id) {
          if (id == 0) {
            return null;
          }

          id = Number(id);
          return (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).forBy(this.heros, "id", id);
        }

        getByItemId(itemId) {
          return (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).forBy(this.heros, "itemId", itemId);
        }

        remove(id) {
          const removeId = Number(id);
          (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).removeBy(this.heros, "id", removeId);
          (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.initBagHeros();
        }

      });

      HeroData._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=636da128acc68380ada0a225077012bb601771e1.js.map