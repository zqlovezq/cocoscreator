System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, HeroFightInfo, _crd, ccclass, property;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  _export("HeroFightInfo", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "24b22HnmE1Ad5eK0yIj46pJ", "HeroFightInfo", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 战斗角色数据 */

      _export("HeroFightInfo", HeroFightInfo = class HeroFightInfo {
        constructor() {
          //-----------服务器字段-------------
          this.id = void 0;
          this.itemId = void 0;
          this.star = void 0;
          this.noFightLevel = void 0;
          this.attrList = [];
          this.skillList = [];
          //-----------客户端字段-------------
          this.level = 0;
          //战斗内等级
          this.intoIndex = 0;
        }

        setServerData(dd) {
          this.id = dd.id;
          this.itemId = dd.itemId;
          this.noFightLevel = dd.level;
          this.star = dd.star;
          this.attrList = dd.attrList;
          this.skillList = [].concat(dd.skillList); // let heroTab = tab.getData().HeroTableById.getValue(this.itemId)
          // let heroStarTab: tab.HeroStarUpTable
          // //添加表内的被动技能
          // for (let index = heroTab.DefaultStar; index <= this.star; index++) {
          //     heroStarTab = Func.forBy2(tab.getData().HeroStarUpTable, "HeroId", this.itemId, "HeroStar", index) as tab.HeroStarUpTable
          //     if (heroStarTab) {
          //         for (let j = 0; j < heroStarTab.SkillId.length; j++) {
          //             if (this.skillList.indexOf(heroStarTab.SkillId[j]) == -1) {
          //                 this.skillList.push(heroStarTab.SkillId[j])
          //             }
          //         }
          //     }
          // }

          this.level = 0;
          this.intoIndex = 0;
        }

        isIntoFight() {
          return this.intoIndex > 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c2568f0d05a8c94cfd6a6f3d25884dfbeae892bd.js.map