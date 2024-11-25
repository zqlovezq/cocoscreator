System.register(["__unresolved_0", "cc", "client_protocol", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, proto, tab, HeroTeamControl, ItemData, HeroData, StaticBaseAttr, HeroInfo, _crd, ccclass, property;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroTeamControl(extras) {
    _reporterNs.report("HeroTeamControl", "./HeroTeamControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "./HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStaticBaseAttr(extras) {
    _reporterNs.report("StaticBaseAttr", "./StaticBaseAttr", _context.meta, extras);
  }

  _export("HeroInfo", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      HeroTeamControl = _unresolved_3.HeroTeamControl;
    }, function (_unresolved_4) {
      ItemData = _unresolved_4.ItemData;
    }, function (_unresolved_5) {
      HeroData = _unresolved_5.HeroData;
    }, function (_unresolved_6) {
      StaticBaseAttr = _unresolved_6.StaticBaseAttr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "80148GQPqhJzY0uztiyCsa3", "HeroInfo", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 英雄数据 */

      _export("HeroInfo", HeroInfo = class HeroInfo extends (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto).Hero {
        constructor() {
          super();
          this._AttrMap = new Map();
          this._extrarMap = new Map();
          this._stepsMap = new Map();
          //阶段属性
          this._MaterialItemMap = new Map();
          this._MaterialHeroMap = new Map();
          // private _MaterialStepMap: Map<tab.HeroStarUpType, number[]> = new Map();
          this._HeroSkillMap = new Map();
          this._itemTable = void 0;
          this._heroTable = void 0;
          this._heroStarUpTable = void 0;
          this._heroBaseAttrTable = void 0;
          this._heroClassTable = void 0;
          this._heroAptitudeTable = void 0;
          this._herosMaterialMap = new Map();
        }

        merge(hero) {
          for (var key in hero) {
            this[key] = hero[key];
          }

          this._AttrMap = (_crd && StaticBaseAttr === void 0 ? (_reportPossibleCrUseOfStaticBaseAttr({
            error: Error()
          }), StaticBaseAttr) : StaticBaseAttr).getAttrByHeroId(this.id, this._AttrMap);
        }
        /**
         * 创建默认数据
         * @param itemId 
         */


        createDefaultData(itemId, star) {
          this.itemId = itemId;
          this.id = 0;
          this.star = star ? star : this.heroTable.DefaultStar;
          this.level = 0;
        }
        /* 获取英雄属性 */


        get AttrMap() {
          return this._AttrMap;
        }
        /* 刷新英雄基础属性 */


        refreshBaseAttrMap() {
          this._AttrMap = (_crd && StaticBaseAttr === void 0 ? (_reportPossibleCrUseOfStaticBaseAttr({
            error: Error()
          }), StaticBaseAttr) : StaticBaseAttr).getAttrByHeroId(this.id, this._AttrMap);
        }
        /**
         * 道具数据
        */


        get itemTable() {
          if (!this._itemTable) {
            this._itemTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(this.itemId);
          }

          return this._itemTable;
        }
        /**
         * 英雄数据
        */


        get heroTable() {
          if (!this._heroTable) {
            this._heroTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroTableById.getValue(this.itemId);
          }

          return this._heroTable;
        }
        /**
         * 英雄升星数据
        */


        get heroStarUpTable() {
          if (!this._heroStarUpTable) {
            for (var i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroStarUpTable.length; i++) {
              var starTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().HeroStarUpTable[i];

              if (starTab.HeroStar === this.star && this.itemId === starTab.HeroId) {
                return (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).getData().HeroStarUpTableById.getValue(starTab.Id);
              }
            }
          }

          return this._heroStarUpTable;
        }
        /** 
         * 英雄基础数据  
        */


        get heroAttrTable() {
          if (!this._heroBaseAttrTable) {
            this._heroBaseAttrTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroAttrTableById.getValue(this.heroTable.BaseHeroAttrId);
          }

          return this._heroBaseAttrTable;
        }
        /** 
         * 英雄职业数据 
        */


        get heroClassTable() {
          if (!this._heroClassTable) {
            this._heroClassTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroClassTableByHeroClass.getValue(this.heroTable.Class);
          }

          return this._heroClassTable;
        }
        /** 
        * 英雄品质数据 
        */


        get heroAptitudeTable() {
          if (!this._heroAptitudeTable) {
            this._heroAptitudeTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroAptitudeTableByHeroAptitude.getValue(this.heroTable.Aptitude);
          }

          return this._heroAptitudeTable;
        }
        /**
         * 获取当前英雄的等级
        */


        getHeroLevel() {
          var level = 1;
          /* 英雄是否上阵 返回队伍等级 */

          var TeamSlot = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.heroInTeam(this.id);

          if (TeamSlot) {
            level = TeamSlot.level;
          } else {
            /* 返回共鸣等级---队伍中最小的等级 */
            level = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
              error: Error()
            }), HeroTeamControl) : HeroTeamControl).ins.getMinTeamLevel();
          }

          return level;
        }
        /**
        * 获取当前英雄的基础属性
        */


        getAttrByType(type) {
          /* 遍历基础属性 */
          return this.AttrMap.get(type);
        }
        /*  */

        /**
        * 获取当前英雄的totoal属性
        */


        getAttrTotoalByType(type) {
          /* 遍历基础属性 */
          var baseAttr = Number(this.AttrMap.has(type) ? this.AttrMap.get(type) : 0);
          /* 装备属性 */
          // let equipAttrMap = EquipData.ins.getEquipContainerDataByHeroClass(type).totalAttrMap;
          // baseAttr += equipAttrMap.has(type) ? equipAttrMap.get(type) : 0

          var extraSelfAttr = this.getExtraAttrMap();
          var extraAllAttr = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getExtraAttr();

          if ((_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.heroInTeam(this.id)) {
            /* 等级共鸣属性 */
            var resonanceLevel = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
              error: Error()
            }), HeroTeamControl) : HeroTeamControl).ins.getResonanceAttrByType(type, true);
            /* 星级共鸣属性 */

            var resonanceStar = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
              error: Error()
            }), HeroTeamControl) : HeroTeamControl).ins.getResonanceAttrByType(type, false);
            baseAttr += resonanceLevel ? resonanceLevel : 0;
            baseAttr += resonanceStar ? resonanceStar : 0;
            baseAttr += extraAllAttr.has(type) ? extraAllAttr.get(type) : 0;
            baseAttr += extraSelfAttr.has(type) ? extraSelfAttr.get(type) : 0;

            if (type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AttrType.AttrType_Attack) {
              // 攻击百分比
              var selfPer1 = extraSelfAttr.has((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_DamagePer1) ? extraSelfAttr.get((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_DamagePer1) : 0;
              var selfPer2 = extraSelfAttr.has((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_DamagePer2) ? extraSelfAttr.get((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_DamagePer2) : 0;
              var selfPer3 = extraSelfAttr.has((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_DamagePer3) ? extraSelfAttr.get((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_DamagePer3) : 0;
              var allPer1 = extraAllAttr.has((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_DamagePer1) ? extraAllAttr.get((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_DamagePer1) : 0;
              var allfPer2 = extraAllAttr.has((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_DamagePer2) ? extraAllAttr.get((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_DamagePer2) : 0;
              var allfPer3 = extraAllAttr.has((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_DamagePer3) ? extraAllAttr.get((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_DamagePer3) : 0;
              var per = selfPer1 + selfPer2 + selfPer3 + allPer1 + allfPer2 + allfPer3;
              baseAttr = baseAttr = Math.floor((1 + per / 10000) * baseAttr);
            } else if (type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AttrType.AttrType_Hp) {
              // 生命百分比
              var _selfPer = extraSelfAttr.has((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_HpPer) ? extraSelfAttr.get((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_HpPer) : 0;

              var _allPer = extraAllAttr.has((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_HpPer) ? extraAllAttr.get((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_HpPer) : 0;

              var _per = _selfPer + _allPer;

              baseAttr = baseAttr = Math.floor((1 + _per / 10000) * baseAttr);
            } else if (type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AttrType.AttrType_Defence) {
              // 生命百分比
              // 攻击百分比
              var _selfPer2 = extraSelfAttr.has((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_DefencePer1) ? extraSelfAttr.get((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_DefencePer1) : 0;

              var _selfPer3 = extraSelfAttr.has((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_DefencePer2) ? extraSelfAttr.get((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_DefencePer2) : 0;

              var _selfPer4 = extraSelfAttr.has((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_DefencePer3) ? extraSelfAttr.get((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_DefencePer3) : 0;

              var _allPer2 = extraAllAttr.has((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_DefencePer1) ? extraAllAttr.get((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_DefencePer1) : 0;

              var _allfPer = extraAllAttr.has((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_DefencePer2) ? extraAllAttr.get((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_DamagePer2) : 0;

              var _allfPer2 = extraAllAttr.has((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_DefencePer3) ? extraAllAttr.get((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_DefencePer3) : 0;

              var _per2 = _selfPer2 + _selfPer3 + _selfPer4 + _allPer2 + _allfPer + _allfPer2;

              baseAttr = Math.floor((1 + _per2 / 10000) * baseAttr);
            } else {
              baseAttr += extraAllAttr.has(type) ? extraAllAttr.get(type) : 0;
              baseAttr += extraSelfAttr.has(type) ? extraSelfAttr.get(type) : 0;
            }
          } else {
            return baseAttr;
          }

          return baseAttr;
        }

        getExtraAttrMap() {
          this._extrarMap.clear();

          var _heroStarUpTable = this.heroStarUpTable;

          if (_heroStarUpTable.ExtraAttrTarget.length > 0) {
            for (var i = 0; i < _heroStarUpTable.ExtraAttrTarget.length; i++) {
              var type = _heroStarUpTable.ExtraAttrTarget[i];
              var value = _heroStarUpTable.ExtraAttrList[i];

              var _attrTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().HeroAttrTableById.getValue(value);

              if (type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).ExtraAttrTarget.ExtraAttrTarget_Mine) {
                for (var k = 0; k < _attrTab.HeroAttrType.length; k++) {
                  var _type = _attrTab.HeroAttrType[k];
                  var _value = _attrTab.HeroAttrValue[k];

                  if (_type) {
                    if (this._extrarMap.has(_type)) {
                      var mapValue = this._extrarMap.get(_type);

                      if (mapValue) {
                        this._extrarMap.set(_type, mapValue + _value);
                      }
                    } else {
                      this._extrarMap.set(_type, _value);
                    }
                  }
                }
              }
            }
          }

          return this._extrarMap;
        }
        /* 当前英雄传入任意level 获取到达需要的材料 */


        getMaterialByLevel(starLevel, endLevel) {
          this._MaterialItemMap.clear();

          if (endLevel === 1) {
            return {
              map: this._MaterialItemMap,
              resonanceLimit: false,
              maxLevelLimit: false
            };
          }

          var maxLevel = this.heroStarUpTable.MaxLevel;
          var minLevel = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getMinTeamLevel();
          var _resonanceLimit = false;
          var _maxLevelLimit = false;

          for (var i = starLevel; i < endLevel; i++) {
            /* 需要的资源 */
            var levelUpData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroLevelUpTableByLevel.getValue(i);

            if (minLevel < levelUpData.MinTeamLevel) {
              /* 升级表里 有最小队伍等级限制时 不达标 返回材料 */
              _resonanceLimit = true;
              break;
            }

            if (i >= maxLevel) {
              /* 升级表里 有最大等级限制 */
              _maxLevelLimit = true;
              break;
            }
            /* 消耗材料组 */


            for (var k = 0; k < levelUpData.MaterialIds.length; k++) {
              var MaterialId = levelUpData.MaterialIds[k];
              var MaterialCount = levelUpData.MaterialNum[k];

              if (this._MaterialItemMap.get(MaterialId)) {
                this._MaterialItemMap.set(MaterialId, this._MaterialItemMap.get(MaterialId) + MaterialCount);
              } else {
                this._MaterialItemMap.set(MaterialId, MaterialCount);
              }
            }
          }

          return {
            map: this._MaterialItemMap,
            resonanceLimit: _resonanceLimit,
            maxLevelLimit: _maxLevelLimit
          };
        }
        /* 当前英雄传入任意星级获取需要的材料 */


        getMaterialByStar() {
          var star = this.star;

          this._MaterialHeroMap.clear();

          var defaultTab;

          for (var i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroStarUpTable.length; i++) {
            var _starTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroStarUpTable[i];

            if (_starTab.HeroStar === this.heroTable.DefaultStar && this.itemId === _starTab.HeroId) {
              defaultTab = _starTab;
              break;
            }
          }

          var id = defaultTab.Id;

          for (var j = defaultTab.HeroStar; j < star; j++) {
            var starTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroStarUpTableById.getValue(id + (j - defaultTab.HeroStar));
            this.setDataInMaterialHeroMap(starTab, defaultTab);
          }

          if (this.finshedStarSteps.length > 0) {
            for (var k = 0; k < this.finshedStarSteps.length; k++) {
              var stepId = this.finshedStarSteps[k];

              var _starTab2 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().HeroStarStepTableById.getValue(stepId);

              this.setDataInMaterialHeroMap(_starTab2, defaultTab);
            }
          }

          return this._MaterialHeroMap;
        }
        /* 将重置数据放入map中 */


        setDataInMaterialHeroMap(starTab, defaultTab) {
          for (var i = 0; i < starTab.HeroStarUpType.length; i++) {
            var type = starTab.HeroStarUpType[i];
            var star = starTab.CostHeroStar[i];
            var costCount = starTab.CostHeroNum[i]; // 同名

            var keyId = 0;

            if (type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroStarUpType.HeroStarUpType_SameNameHero) {
              /* 根据itemId+star生成starUpId */
              keyId = star - defaultTab.HeroStar + defaultTab.Id;
            } else if (type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroStarUpType.HeroStarUpType_SameClassHero) {
              keyId = this.getHeroCommonCost(star, this.heroTable.Class);
            } else {
              keyId = this.getHeroCommonCost(star, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).HeroClass.HeroClass_Any);
            }

            if (this._MaterialHeroMap.has(keyId)) {
              this._MaterialHeroMap.set(keyId, this._MaterialHeroMap.get(keyId) + costCount);
            } else {
              this._MaterialHeroMap.set(keyId, costCount);
            }
          }
        }

        getHeroCommonCost(star, heroClass) {
          for (var i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroCommonCostTable.length; i++) {
            var costData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroCommonCostTable[i];

            if (costData.HeroStar === star && costData.HeroClass == heroClass) {
              return costData.Id;
            }
          }
        }

        getHerosCommonCost(star, heroClass, type) {
          var arr = [];

          if (type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroStarUpType.HeroStarUpType_SameClassHero) {
            for (var i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroCommonCostTable.length; i++) {
              var costData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().HeroCommonCostTable[i];

              if (costData.HeroStar === star && (costData.HeroClass == heroClass || costData.HeroClass === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).HeroClass.HeroClass_Any)) {
                arr.push(costData.Id);
              }
            }
          } else if (type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroStarUpType.HeroStarUpType_AnyHero) {
            for (var _i = 0; _i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroCommonCostTable.length; _i++) {
              var _costData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().HeroCommonCostTable[_i];

              if (_costData.HeroStar === star) {
                arr.push(_costData.Id);
              }
            }
          }

          return arr;
        }
        /* 检查heroId连升N级 */


        checkLevelUp1() {
          /* 升级需要经验+金币 */

          /* 先获取当前hero等级 */
          var level = this.getHeroLevel();
          var minLevel = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getMinTeamLevel();
          var startLevel = level;
          /* 检查所有的条件 */
          // let MaterialMap: Map<number, number> = new Map();
          // let minLevel = HeroTeamControl.ins.getMinTeamLevel();

          /* 获取当前heroid最高等级 */

          var maxLevel = this.heroStarUpTable.MaxLevel;
          var MaterialNoEnough = false;

          for (var i = level; i < maxLevel; i++) {
            var materialMap = this.getMaterialByLevel(startLevel, i + 1).map;
            var levelUpData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroLevelUpTableByLevel.getValue(i);

            if (minLevel < levelUpData.MinTeamLevel) {
              /* 升级表里 有最小队伍等级限制时 不达标 返回材料 */
              level = i;
              break;
            }

            if (materialMap.get(1002)) {
              level = i;
              break;
            }

            materialMap.forEach((value, key) => {
              var totalMaterialCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
                error: Error()
              }), ItemData) : ItemData).ins.getCount(key);

              if (totalMaterialCount < value) {
                MaterialNoEnough = true;
              }
            });

            if (MaterialNoEnough) {
              level = i;
              break;
            } else {
              level = i + 1;
            }
          }

          return level;
        }

        checkLevelUp() {
          // step1 英雄等级是否相同
          var minTeamLevel = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getMinTeamLevel();
          var maxTeamLevel = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getMaxTeamLevel();
          var startLevel = -1;
          var endLevel = -1;
          var level = this.getHeroLevel();
          var levelUpData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroLevelUpTableByLevel.getValue(maxTeamLevel);

          if (minTeamLevel === maxTeamLevel) {
            startLevel = minTeamLevel;
            endLevel = (Math.floor(startLevel / 10) + 1) * 10;
            return this.checkLevelEnd(startLevel, endLevel);
          } else {
            //要升级英雄等级是否达到队友最低等级需求
            if (level < levelUpData.MinTeamLevel) {
              // 否 升级至【队友最低等级】
              startLevel = level;
              endLevel = levelUpData.MinTeamLevel;
              return this.checkLevelEnd(startLevel, endLevel);
            } else {
              // 是
              // 要升级英雄等级是否为最高等级
              if (level === maxTeamLevel) {
                // 是 英雄升至10的整数倍数
                startLevel = level;
                endLevel = (Math.floor(startLevel / 10) + 1) * 10;
                return this.checkLevelEnd(startLevel, endLevel);
              } else {
                // 否 英雄升级至5的整数倍数
                startLevel = level;
                endLevel = (Math.floor(startLevel / 5) + 1) * 5;
                return this.checkLevelEnd(startLevel, endLevel);
              }
            }
          }
        }

        checkLevelEnd(startLevel, endLevel) {
          var MaterialNoEnough = false; // 队友最低等级约束

          var teammateLevel = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getMinTeamLevel(this);
          var minLevelMax = this.getMaxLevelByTeammate(teammateLevel);

          if (minLevelMax < endLevel) {
            endLevel = minLevelMax;
          } // 星级约束


          var starLevelMax = this.heroStarUpTable.MaxLevel;

          if (starLevelMax < endLevel) {
            endLevel = starLevelMax;
          } // 材料约束


          for (var i = startLevel; i < endLevel; i++) {
            var materialMap = this.getMaterialByLevel(startLevel, i + 1).map;
            materialMap.forEach((value, key) => {
              var totalMaterialCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
                error: Error()
              }), ItemData) : ItemData).ins.getCount(key);

              if (totalMaterialCount < value) {
                MaterialNoEnough = true;
              }
            });

            if (MaterialNoEnough) {
              return i;
            }
          }

          return endLevel;
        }
        /* 通过队友的最低等级获取当前可以升级的最大值 */


        getMaxLevelByTeammate(level) {
          for (var i = level; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroLevelUpTable.length; i++) {
            var upTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroLevelUpTable[i];
            var minLevel = upTab.MinTeamLevel;

            if (minLevel > level) {
              return upTab.Level;
            }
          }
        }
        /* 当前阶段完成的step数量 */


        getFinishStep() {
          var count = 0;
          var starTab = this.heroStarUpTable;
          var steps = starTab.NeedStarSteps; // 所有玩家完成的阶段ids数组this.finshedStarSteps

          for (var i = 0; i < steps.length; i++) {
            var id = steps[i];

            if (this.finshedStarSteps.indexOf(id) > -1) {
              count++;
            }
          }

          return count;
        }
        /* 检查hero升星材料是否够 HeroStarUpType*/


        checkStarUpMaterialEnough(stepId) {
          var _this = this;

          /* 升星消耗的都是英雄 */
          // 先获取当前的StarUpTable
          var starTab = stepId ? (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroStarStepTableById.getValue(stepId) : this.heroStarUpTable;
          var MaterialEnough = true;

          if (starTab.HeroStarUpType.length === 0 && this.heroStarUpTable.NeedStarSteps.length === 0) {
            return false;
          }

          var filterMap = new Map();
          var totalCount = 0;

          var _loop = function _loop() {
            var costType = starTab.HeroStarUpType[i];
            var costCount = starTab.CostHeroNum[i];
            totalCount += costCount;

            var heros = _this.getHerosByType(costType, stepId, filterMap);

            if (heros.map.size < costCount) {
              MaterialEnough = false;
              return 1; // break
            } else {
              var count = 0;
              heros.map.forEach((value, key) => {
                count++;

                if (count <= costCount) {
                  filterMap.set(key, value);
                }
              });
            }
          };

          for (var i = 0; i < starTab.HeroStarUpType.length; i++) {
            if (_loop()) break;
          }
          /* 如果当前是进阶阶段 */


          if (this.heroStarUpTable.NeedStarSteps.length > 0 && this.getFinishStep() < 4) {
            // 判断进阶的每个部分是否材料够 够的话返回
            if (!stepId) {
              for (var _i2 = 0; _i2 < this.heroStarUpTable.NeedStarSteps.length; _i2++) {
                var _stepId = this.heroStarUpTable.NeedStarSteps[_i2];

                var _stepIdMaterialEnough = this.checkIsFullByStepId(_stepId, totalCount, MaterialEnough, filterMap);

                MaterialEnough = MaterialEnough && _stepIdMaterialEnough;
              }
            } else {
              MaterialEnough = this.checkIsFullByStepId(stepId, totalCount, MaterialEnough, filterMap);
            }
          } else {
            /* 升星需要材料 */
            if (starTab.CostItemId.length > 0) {
              for (var _i3 = 0; _i3 < starTab.CostItemId.length; _i3++) {
                var itemId = starTab.CostItemId[_i3];
                var itemCount = starTab.CostItemNum[_i3];

                var _totalCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
                  error: Error()
                }), ItemData) : ItemData).ins.getCount(itemId);

                if (_totalCount < itemCount) {
                  MaterialEnough = false;
                  break;
                }
              }
            }
          }

          return MaterialEnough;
        }
        /* 通过stepId返回材料是否满足 */


        checkIsFullByStepId(stepId, totalCount, MaterialEnough, filterMap) {
          var _this2 = this;

          if (this.finshedStarSteps.indexOf(stepId) > -1) {
            return true;
          }

          var starTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroStarStepTableById.getValue(stepId); // 当前阶段消耗类型

          var _loop2 = function _loop2() {
            var costType = starTab.HeroStarUpType[i];
            var costCount = starTab.CostHeroNum[i];
            totalCount += costCount;

            var stepHeros = _this2.getHerosByType(costType, stepId);

            if (stepHeros.map.size < costCount) {
              return {
                v: false
              };
            } else {
              var count = 0;
              stepHeros.map.forEach((value, key) => {
                count++;

                if (count <= costCount) {
                  filterMap.set(key, value);
                }
              });
            }
          },
              _ret;

          for (var i = 0; i < starTab.HeroStarUpType.length; i++) {
            _ret = _loop2();
            if (_ret) return _ret.v;
          } // 阶段消耗道具


          var itemEnough = true;

          for (var _i4 = 0; _i4 < starTab.CostItemId.length; _i4++) {
            var haveCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
              error: Error()
            }), ItemData) : ItemData).ins.getCount(starTab.CostItemId[_i4]);
            var needCount = starTab.CostItemNum[_i4];

            if (haveCount < needCount) {
              itemEnough = false;
            }
          }

          return MaterialEnough && itemEnough;
        }

        getHerosByType(type, stepId, filterMap) {
          var map = new Map();
          var starTab = stepId ? (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroStarStepTableById.getValue(stepId) : this.heroStarUpTable;
          var needCount = 0;
          var needStar = 0;

          for (var i = 0; i < starTab.HeroStarUpType.length; i++) {
            var _type = starTab.HeroStarUpType[i];
            var _count = starTab.CostHeroNum[i];
            var _star = starTab.CostHeroStar[i]; // 同名

            if (type === _type) {
              needCount = _count;
              needStar = _star;
              break;
            }
          }

          var heros = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getHeros();
          var id = Number(this.id);

          for (var _i5 = 0; _i5 < heros.length; _i5++) {
            var info = heros[_i5]; // 是否是升级id

            var infoId = Number(info.id);
            var isSelf = infoId === id; // 是否在队伍中

            var isTeam = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
              error: Error()
            }), HeroTeamControl) : HeroTeamControl).ins.heroInTeam(infoId);
            var isStar = info.star === needStar;

            if (isStar && !isSelf && !isTeam) {
              // 同名
              if (filterMap && filterMap.get(infoId) && filterMap.get(infoId).type !== type) {
                continue;
              }

              if (type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).HeroStarUpType.HeroStarUpType_SameNameHero) {
                if (info.itemId == this.itemId) {
                  map.set(infoId, info);
                }
              } else if (type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).HeroStarUpType.HeroStarUpType_SameClassHero) {
                if (info.heroTable.Class == this.heroTable.Class) {
                  map.set(infoId, info);
                }
              } else {
                map.set(infoId, info);
              }
            }
          }

          if (type !== (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroStarUpType.HeroStarUpType_SameNameHero) {
            var heroClass = type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroStarUpType.HeroStarUpType_AnyHero ? (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroClass.HeroClass_Any : this.heroTable.Class;
            var TamagonIds = this.getHerosCommonCost(needStar, heroClass, type);

            if (TamagonIds) {
              for (var _i6 = 0; _i6 < TamagonIds.length; _i6++) {
                var TamagonId = TamagonIds[_i6];
                var itemCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
                  error: Error()
                }), ItemData) : ItemData).ins.getCount(TamagonId);

                for (var t = 0; t < itemCount; t++) {
                  var value = t + 1;
                  map.set(TamagonId + value, value);
                }
              }
            }
          }

          return {
            map: map,
            needCount: needCount,
            star: needStar
          };
        }
        /* 获取当前hero的所有技能map */


        getHeroSkillMap() {
          if (this._HeroSkillMap.size > 0) {
            return this._HeroSkillMap;
          }

          for (var i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroStarUpTable.length; i++) {
            var starTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroStarUpTable[i];

            if (this.itemId === starTab.HeroId) {
              for (var j = 0; j < starTab.DescType.length; j++) {
                var DescType = starTab.DescType[j];
                var data = this._HeroSkillMap.get(DescType) ? this._HeroSkillMap.get(DescType) : [];
                data.push(starTab);

                this._HeroSkillMap.set(DescType, data);
              }
            }
          }

          return this._HeroSkillMap;
        }
        /* 传入任意星级获取当前的HeroStarUpTable信息 */


        getHeroStarUpTableByStar(star) {
          for (var i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroStarUpTable.length; i++) {
            var starTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroStarUpTable[i];

            if (this.itemId === starTab.HeroId && star === starTab.HeroStar) {
              return starTab;
            }
          }

          return this.heroStarUpTable;
        }

        setHerosMaterialMap(stepId) {
          this._herosMaterialMap.clear();

          var sameName = this.getHerosByType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroStarUpType.HeroStarUpType_SameNameHero, stepId);
          var count = 0;
          sameName.map.forEach((value, key) => {
            count++;

            if (count <= sameName.needCount) {
              this._herosMaterialMap.set(key, {
                needCount: sameName.needCount,
                type: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).HeroStarUpType.HeroStarUpType_SameNameHero
              });
            }
          });
          return this._herosMaterialMap;
        }
        /* 选择材料的数量 */


        getHerosMaterialMapCount(type) {
          var count = 0;

          this._herosMaterialMap.forEach((value, key) => {
            if (value.type === type) {
              count++;
            }
          });

          return count;
        }
        /* 添加|删除选择的材料 */


        setHerosMaterialById(isSelect, heroId, type, itemId) {
          if (this._herosMaterialMap.get(heroId) && this._herosMaterialMap.get(heroId).type !== type) {
            return;
          }

          var sameClass = this.getHerosByType(type);

          if (isSelect) {
            var obj = {
              needCount: sameClass.needCount,
              type: type
            };

            if (itemId) {
              obj.itemId = itemId;
            }

            this._herosMaterialMap.set(heroId, obj);
          } else {
            this._herosMaterialMap.delete(heroId);
          }
        }

        getHerosMaterialById(heroId) {
          var obj = null;

          if (this._herosMaterialMap.get(heroId)) {
            obj = this._herosMaterialMap.get(heroId);
          }

          return obj;
        }

        getHerosMaterialMap() {
          return this._herosMaterialMap;
        }
        /* 通过材料类型获取需要的数据 */


        getStepMaterialData(stepTab, type) {
          var useType = stepTab.HeroStarUpType;

          for (var i = 0; i < useType.length; i++) {
            var _type = useType[i];
            var _num = stepTab.CostHeroNum[i];
            var _star = stepTab.CostHeroStar[i];

            if (_type === type) {
              return {
                num: _num,
                star: _star
              };
            }
          }
        }

        initHeroItemId(heroId) {
          this.id = 0;
          this.itemId = heroId;
          ;
          this.star = this.heroTable.DefaultStar;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=57d6f07e46c0c61842d7ac0d66598b4677af8ddb.js.map