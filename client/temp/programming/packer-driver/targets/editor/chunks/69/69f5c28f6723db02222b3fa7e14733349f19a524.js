System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, HeroData, tab, RoleData, _dec, _class, _class2, _crd, ccclass, property, HeroTeamControl;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "./HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "./HeroInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
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
      HeroData = _unresolved_2.HeroData;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      RoleData = _unresolved_4.RoleData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "659b3DNVt5Hc6M08nWGr3K2", "HeroTeamControl", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroTeamControl", HeroTeamControl = (_dec = ccclass('HeroTeamControl'), _dec(_class = (_class2 = class HeroTeamControl {
        constructor() {
          this.teamSlots = [];
          this.teamResonanceLevel = 0;
          //共鸣等级
          this.teamResonanceStar = 0;
          //共鸣星级
          this._extraAttrMap = new Map();
          //英雄升星额外属性
          this._paintingAttrMap = new Map();
          //绘卷属性
          this._elixirAttrMap = new Map();
          //丹药属性
          this._elixirCountMap = new Map();
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new HeroTeamControl();
          }

          return this._instance;
        }

        initTeam(teamData, levelResonance, starResonance) {
          for (let i = 0; i < teamData.length; i++) {
            let data = teamData[i];

            if (!data.heroClass) {
              data.heroClass = i + 1;
              data.heroId = 0;
              data.level = 1;
            }

            this.teamSlots[i] = data;
          }

          this.teamResonanceLevel = levelResonance;
          this.teamResonanceStar = starResonance;
          this.initPaintingAttr();
          this.setTeamExtraAttr();
          this.initElixirData();
        }

        getElixirCountById(id) {
          return this._elixirCountMap.get(id) ? this._elixirCountMap.get(id) : 0;
        }

        getElixirAttrByType(type) {
          return this._elixirAttrMap.get(type) ? this._elixirAttrMap.get(type) : 0;
        } // 获取所有丹药属性


        getElixirAttr() {
          return this._elixirAttrMap;
        }

        initElixirData() {
          this._elixirCountMap.clear();

          this._elixirAttrMap.clear();

          for (let i = 0; i < (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.elixir.data.length; i++) {
            const data = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.elixir.data[i];

            if (this._elixirCountMap.has(data.id)) {
              if (data.count > this._elixirCountMap.get(data.id)) {
                this._elixirCountMap.set(data.id, data.count);
              }
            } else {
              this._elixirCountMap.set(data.id, data.count);
            }
          }

          this._elixirCountMap.forEach((value, key) => {
            // 判断当前数量的丹药增加的属性
            const ElixirTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ElixirTableById.getValue(key);

            for (let k = 0; k < ElixirTab.AttrType.length; k++) {
              const attrType = ElixirTab.AttrType[k];

              if (this._elixirAttrMap.has(attrType)) {
                this._elixirAttrMap.set(attrType, this._elixirAttrMap.get(attrType) + value * ElixirTab.AttrValue[k]);
              } else {
                this._elixirAttrMap.set(attrType, value * ElixirTab.AttrValue[k]);
              }
            }
          });
        }
        /* 初始化计算绘卷属性 */


        initPaintingAttr() {
          let paintingData = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.paintings;

          for (let i = 0; i < paintingData.length; i++) {
            const heroId = paintingData[i].heroItemId;
            const star = paintingData[i].star;

            if (star) {
              this.addPaintingAttr(heroId, star);
            }
          }
        } // 添加绘卷属性


        addPaintingAttr(heroId, star, addAttr) {
          const heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroTableById.getValue(heroId); // 资质

          const aptitude = heroTab.Aptitude;
          const attrData = this.getPaintingAttr(aptitude, star);
          const SPAttrTypes = attrData.types;

          if (addAttr) {
            const addAttrTypes = addAttr.types;
            const addAttrValus = addAttr.values;

            for (let j = 0; j < addAttrTypes.length; j++) {
              const type = addAttrTypes[j];

              if (this._paintingAttrMap.has(type)) {
                this._paintingAttrMap.set(type, addAttrValus[j] + this._paintingAttrMap.get(type));
              } else {
                this._paintingAttrMap.set(type, addAttrValus[j]);
              }
            }
          } else {
            for (let j = 0; j < SPAttrTypes.length; j++) {
              const type = SPAttrTypes[j];

              if (this._paintingAttrMap.has(type)) {
                this._paintingAttrMap.set(type, attrData.values[j] + this._paintingAttrMap.get(type));
              } else {
                this._paintingAttrMap.set(type, attrData.values[j]);
              }
            }
          }
        }
        /* 通过资质|star查找绘卷id */


        getPaintingAttr(aptitude, star) {
          let obj = null;

          for (let i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ScrollPaintingTable.length; i++) {
            let paintingData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ScrollPaintingTable[i];

            if (aptitude === paintingData.Aptitude && star === paintingData.HeroStar) {
              obj = {
                types: paintingData.SPAttrTypes,
                values: paintingData.SPAttrValue
              };
              break;
            }
          }

          return obj;
        }

        getPaintingAttrGap(heroId, star) {
          const heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroTableById.getValue(heroId); // 资质

          const aptitude = heroTab.Aptitude;
          const attrLast = HeroTeamControl.ins.getPaintingAttr(aptitude, star - 1);
          const attrNow = HeroTeamControl.ins.getPaintingAttr(aptitude, star);
          const _types = [];
          const _values = [];

          for (let i = 0; i < attrNow.types.length; i++) {
            const type = attrNow.types[i];
            const val1 = attrNow.values[i];

            if (attrLast.types[i]) {
              _types.push(type);

              _values.push(val1 - attrLast.values[i]);
            } else {
              _types.push(type);

              _values.push(val1);
            }
          }

          const obj = {
            types: _types,
            values: _values
          };
          return obj;
        }
        /* 设置共鸣等级 */


        setTeamResonanceLevel(lv) {
          this.teamResonanceLevel = lv;
        }
        /* 设置共鸣星级 */


        setTeamResonanceStar(star) {
          this.teamResonanceStar = star;
        }

        getTeam() {
          return this.teamSlots;
        }

        heroInTeam(id) {
          const _id = Number(id);

          let inTeam = null;

          for (let i = 0; i < this.teamSlots.length; i++) {
            let slot = this.teamSlots[i];

            if (slot.heroId && Number(slot.heroId) === _id) {
              inTeam = slot;
              return inTeam;
            }
          }

          return inTeam;
        }

        getTeamIndexById(id) {
          const _id = Number(id);

          let index = -1;

          for (let i = 0; i < this.teamSlots.length; i++) {
            let teamSlot = this.teamSlots[i];

            if (teamSlot.heroId && Number(teamSlot.heroId) === _id) {
              index = i;
              break;
            }
          }

          return index;
        }

        getHeroByClass(heroClass) {
          for (let i = 0; i < this.teamSlots.length; i++) {
            let teamHeroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
              error: Error()
            }), HeroData) : HeroData).ins.getById(this.teamSlots[i].heroId);

            if (!teamHeroInfo) {
              continue;
            }

            if (teamHeroInfo.heroTable.Class === heroClass) {
              return teamHeroInfo;
            }
          }
        }

        refreshTeam(heroId, newLevel) {
          let info = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getById(heroId);

          if (!info) {
            return;
          }

          let heroClass = info.heroTable.Class;

          for (let i = 0; i < this.teamSlots.length; i++) {
            let teamHeroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
              error: Error()
            }), HeroData) : HeroData).ins.getById(this.teamSlots[i].heroId);

            if (!teamHeroInfo) {
              this.teamSlots[i].heroId = 0;
              this.teamSlots[i].level = 1;
              this.teamSlots[i].heroClass = heroClass;
            } else {
              if (teamHeroInfo.heroTable.Class === heroClass) {
                this.teamSlots[i].heroId = Number(heroId);

                if (newLevel) {
                  this.teamSlots[i].level = newLevel;
                  (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
                    error: Error()
                  }), HeroData) : HeroData).ins.getById(heroId).refreshBaseAttrMap();
                }
              }
            }
          }
          /* 刷新队伍的同时 刷新全体属性 */


          this.setTeamExtraAttr();
        }
        /* 队伍的共鸣等级 */


        getMinTeamLevel(heroInfo) {
          let level = 999;

          for (let i = 0; i < this.teamSlots.length; i++) {
            let slot = this.teamSlots[i];
            let isSelf = false;

            if (heroInfo) {
              isSelf = slot.heroClass === heroInfo.heroClassTable.HeroClass;
            }

            if (slot.level < level && !isSelf) {
              level = slot.level;
            }
          }

          return level;
        }
        /* 队伍的最大等级 */


        getMaxTeamLevel() {
          let level = -1;

          for (let i = 0; i < this.teamSlots.length; i++) {
            let slot = this.teamSlots[i];

            if (slot.level > level) {
              level = slot.level;
            }
          }

          return level;
        }
        /* 队伍的共鸣星级 */


        getMinTeamStar() {
          let star = 999;

          for (let i = 0; i < this.teamSlots.length; i++) {
            let slot = this.teamSlots[i];
            let heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
              error: Error()
            }), HeroData) : HeroData).ins.getById(slot.heroId);

            if (heroInfo && heroInfo.star < star) {
              star = heroInfo.star;
            }
          }

          return star;
        }
        /* 获取职业等级 */


        getClassTeamData(heroClass) {
          for (let i = 0; i < this.teamSlots.length; i++) {
            let slot = this.teamSlots[i];

            if (slot.heroClass === heroClass) {
              return slot;
            }
          }
        }
        /* 队伍共鸣等级tab*/


        getResonanceLevelTab(next) {
          let id = next ? this.teamResonanceLevel + 1 : this.teamResonanceLevel;
          return (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroLevelResonanceTableById.getValue(id);
        }
        /* 队伍共鸣星级tab */


        getResonanceStarTab(next) {
          let id = next ? this.teamResonanceStar + 1 : this.teamResonanceStar;
          return (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroStarResonanceTableById.getValue(id);
        }
        /* 团队固定属性S */

        /* 共鸣属性 */


        getResonanceAttrByType(type, isLevel) {
          let attr = isLevel ? this.getResonanceLevelTab() : this.getResonanceStarTab();

          for (let i = 0; i < attr.AttrTypes.length; i++) {
            let _type = attr.AttrTypes[i];

            if (_type == type) {
              return attr.AttrValue[i];
            }
          }
        }
        /* 绘卷增加的全体固定属性 */


        getPaintingAttrByType(type) {
          return this._paintingAttrMap.get(type);
        }
        /* 获得绘卷增加的固定属性 */


        getPaintingAttrMap() {
          return this._paintingAttrMap;
        }
        /* 团队固定属性E */

        /* 英雄升星额外属性中增加的全体属性 */


        getExtraAttr() {
          return this._extraAttrMap;
        }

        setTeamExtraAttr() {
          this._extraAttrMap.clear();

          for (let i = 0; i < this.teamSlots.length; i++) {
            let heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
              error: Error()
            }), HeroData) : HeroData).ins.getById(this.teamSlots[i].heroId);

            if (!heroInfo) {
              continue;
            }

            let _heroStarUpTable = heroInfo.heroStarUpTable;

            if (_heroStarUpTable.ExtraAttrTarget.length > 0) {
              for (let i = 0; i < _heroStarUpTable.ExtraAttrTarget.length; i++) {
                let type = _heroStarUpTable.ExtraAttrTarget[i];
                let value = _heroStarUpTable.ExtraAttrList[i];

                let _attrTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).getData().HeroAttrTableById.getValue(value);

                if (type) {
                  if (type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                    error: Error()
                  }), tab) : tab).ExtraAttrTarget.ExtraAttrTarget_All) {
                    for (let k = 0; k < _attrTab.HeroAttrType.length; k++) {
                      let _type = _attrTab.HeroAttrType[k];
                      let _value = _attrTab.HeroAttrValue[k];

                      if (this._extraAttrMap.has(_type)) {
                        let mapValue = this._extraAttrMap.get(_type);

                        if (mapValue) {
                          this._extraAttrMap.set(_type, mapValue + _value);
                        }
                      } else {
                        this._extraAttrMap.set(_type, _value);
                      }
                    }
                  }
                }
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
//# sourceMappingURL=69f5c28f6723db02222b3fa7e14733349f19a524.js.map