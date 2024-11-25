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
          for (var i = 0; i < teamData.length; i++) {
            var data = teamData[i];

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

          for (var i = 0; i < (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.elixir.data.length; i++) {
            var data = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
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
            var ElixirTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ElixirTableById.getValue(key);

            for (var k = 0; k < ElixirTab.AttrType.length; k++) {
              var attrType = ElixirTab.AttrType[k];

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
          var paintingData = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.paintings;

          for (var i = 0; i < paintingData.length; i++) {
            var heroId = paintingData[i].heroItemId;
            var star = paintingData[i].star;

            if (star) {
              this.addPaintingAttr(heroId, star);
            }
          }
        } // 添加绘卷属性


        addPaintingAttr(heroId, star, addAttr) {
          var heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroTableById.getValue(heroId); // 资质

          var aptitude = heroTab.Aptitude;
          var attrData = this.getPaintingAttr(aptitude, star);
          var SPAttrTypes = attrData.types;

          if (addAttr) {
            var addAttrTypes = addAttr.types;
            var addAttrValus = addAttr.values;

            for (var j = 0; j < addAttrTypes.length; j++) {
              var type = addAttrTypes[j];

              if (this._paintingAttrMap.has(type)) {
                this._paintingAttrMap.set(type, addAttrValus[j] + this._paintingAttrMap.get(type));
              } else {
                this._paintingAttrMap.set(type, addAttrValus[j]);
              }
            }
          } else {
            for (var _j = 0; _j < SPAttrTypes.length; _j++) {
              var _type2 = SPAttrTypes[_j];

              if (this._paintingAttrMap.has(_type2)) {
                this._paintingAttrMap.set(_type2, attrData.values[_j] + this._paintingAttrMap.get(_type2));
              } else {
                this._paintingAttrMap.set(_type2, attrData.values[_j]);
              }
            }
          }
        }
        /* 通过资质|star查找绘卷id */


        getPaintingAttr(aptitude, star) {
          var obj = null;

          for (var i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ScrollPaintingTable.length; i++) {
            var paintingData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
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
          var heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroTableById.getValue(heroId); // 资质

          var aptitude = heroTab.Aptitude;
          var attrLast = HeroTeamControl.ins.getPaintingAttr(aptitude, star - 1);
          var attrNow = HeroTeamControl.ins.getPaintingAttr(aptitude, star);
          var _types = [];
          var _values = [];

          for (var i = 0; i < attrNow.types.length; i++) {
            var type = attrNow.types[i];
            var val1 = attrNow.values[i];

            if (attrLast.types[i]) {
              _types.push(type);

              _values.push(val1 - attrLast.values[i]);
            } else {
              _types.push(type);

              _values.push(val1);
            }
          }

          var obj = {
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
          var _id = Number(id);

          var inTeam = null;

          for (var i = 0; i < this.teamSlots.length; i++) {
            var slot = this.teamSlots[i];

            if (slot.heroId && Number(slot.heroId) === _id) {
              inTeam = slot;
              return inTeam;
            }
          }

          return inTeam;
        }

        getTeamIndexById(id) {
          var _id = Number(id);

          var index = -1;

          for (var i = 0; i < this.teamSlots.length; i++) {
            var teamSlot = this.teamSlots[i];

            if (teamSlot.heroId && Number(teamSlot.heroId) === _id) {
              index = i;
              break;
            }
          }

          return index;
        }

        getHeroByClass(heroClass) {
          for (var i = 0; i < this.teamSlots.length; i++) {
            var teamHeroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
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
          var info = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getById(heroId);

          if (!info) {
            return;
          }

          var heroClass = info.heroTable.Class;

          for (var i = 0; i < this.teamSlots.length; i++) {
            var teamHeroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
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
          var level = 999;

          for (var i = 0; i < this.teamSlots.length; i++) {
            var slot = this.teamSlots[i];
            var isSelf = false;

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
          var level = -1;

          for (var i = 0; i < this.teamSlots.length; i++) {
            var slot = this.teamSlots[i];

            if (slot.level > level) {
              level = slot.level;
            }
          }

          return level;
        }
        /* 队伍的共鸣星级 */


        getMinTeamStar() {
          var star = 999;

          for (var i = 0; i < this.teamSlots.length; i++) {
            var slot = this.teamSlots[i];
            var heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
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
          for (var i = 0; i < this.teamSlots.length; i++) {
            var slot = this.teamSlots[i];

            if (slot.heroClass === heroClass) {
              return slot;
            }
          }
        }
        /* 队伍共鸣等级tab*/


        getResonanceLevelTab(next) {
          var id = next ? this.teamResonanceLevel + 1 : this.teamResonanceLevel;
          return (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroLevelResonanceTableById.getValue(id);
        }
        /* 队伍共鸣星级tab */


        getResonanceStarTab(next) {
          var id = next ? this.teamResonanceStar + 1 : this.teamResonanceStar;
          return (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroStarResonanceTableById.getValue(id);
        }
        /* 团队固定属性S */

        /* 共鸣属性 */


        getResonanceAttrByType(type, isLevel) {
          var attr = isLevel ? this.getResonanceLevelTab() : this.getResonanceStarTab();

          for (var i = 0; i < attr.AttrTypes.length; i++) {
            var _type = attr.AttrTypes[i];

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

          for (var i = 0; i < this.teamSlots.length; i++) {
            var heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
              error: Error()
            }), HeroData) : HeroData).ins.getById(this.teamSlots[i].heroId);

            if (!heroInfo) {
              continue;
            }

            var _heroStarUpTable = heroInfo.heroStarUpTable;

            if (_heroStarUpTable.ExtraAttrTarget.length > 0) {
              for (var _i = 0; _i < _heroStarUpTable.ExtraAttrTarget.length; _i++) {
                var type = _heroStarUpTable.ExtraAttrTarget[_i];
                var value = _heroStarUpTable.ExtraAttrList[_i];

                var _attrTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).getData().HeroAttrTableById.getValue(value);

                if (type) {
                  if (type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                    error: Error()
                  }), tab) : tab).ExtraAttrTarget.ExtraAttrTarget_All) {
                    for (var k = 0; k < _attrTab.HeroAttrType.length; k++) {
                      var _type = _attrTab.HeroAttrType[k];
                      var _value = _attrTab.HeroAttrValue[k];

                      if (this._extraAttrMap.has(_type)) {
                        var mapValue = this._extraAttrMap.get(_type);

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