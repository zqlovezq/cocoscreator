System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, tab, HeroData, _dec, _class, _crd, ccclass, property, StaticBaseAttr;

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "./HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLong(extras) {
    _reporterNs.report("Long", "protobufjs", _context.meta, extras);
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
      HeroData = _unresolved_3.HeroData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1251agK9eJO3r0zB6hDDscV", "StaticBaseAttr", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 静态基础属性 */

      _export("StaticBaseAttr", StaticBaseAttr = (_dec = ccclass('StaticBaseAttr'), _dec(_class = class StaticBaseAttr {
        /** 获取英雄基础属性 */
        static getAttrByHeroId(heroId, outMap) {
          /* 基础属性 */
          outMap = outMap ? outMap : new Map();
          outMap.clear();
          let heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getById(heroId);
          let level = heroInfo.getHeroLevel();
          let heroStarUpTable = null;

          for (let i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroStarUpTable.length; i++) {
            let starTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroStarUpTable[i];

            if (starTab.HeroStar === heroInfo.star && heroInfo.itemId === starTab.HeroId) {
              heroStarUpTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().HeroStarUpTableById.getValue(starTab.Id);
            }
          }

          let _heroLevelUpAttrTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroAttrTableById.getValue(heroStarUpTable.AttrPerLevel); // 先获得初始属性id


          for (let i = 0; i < heroInfo.heroAttrTable.HeroAttrType.length; i++) {
            let type = heroInfo.heroAttrTable.HeroAttrType[i];
            outMap.set(type, heroInfo.heroAttrTable.HeroAttrValue[i]);
          } // 获取升级属性


          for (let i = 0; i < _heroLevelUpAttrTable.HeroAttrType.length; i++) {
            let type = _heroLevelUpAttrTable.HeroAttrType[i];

            if (outMap.get(type)) {
              outMap.set(type, outMap.get(type) + _heroLevelUpAttrTable.HeroAttrValue[i] * (level - 1));
            } else {
              outMap.set(type, _heroLevelUpAttrTable.HeroAttrValue[i] * (level - 1));
            }
          }

          return outMap;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f3a878f17d9a3172a4a3b87187f83629c1a948a0.js.map