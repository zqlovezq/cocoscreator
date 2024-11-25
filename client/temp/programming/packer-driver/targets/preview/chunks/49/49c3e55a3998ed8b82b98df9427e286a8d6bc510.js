System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, tab, FightMacro, RoleData, HeroData, HeroTeamControl, RareBookData, EquipData, PrestigeData, AssociationData, HeroAttr, HeroAttrMgr, _crd;

  function _reportPossibleCrUseOfLong(extras) {
    _reporterNs.report("Long", "protobufjs", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMacro(extras) {
    _reporterNs.report("FightMacro", "../../logic/fight/define/FightDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../../logic/model/role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "../../logic/model/hero/HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../../logic/model/hero/HeroInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroTeamControl(extras) {
    _reporterNs.report("HeroTeamControl", "../../logic/model/hero/HeroTeamControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookData(extras) {
    _reporterNs.report("RareBookData", "../../logic/model/rareBook/RareBookData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookInfo(extras) {
    _reporterNs.report("RareBookInfo", "../../logic/model/rareBook/RareBookInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipData(extras) {
    _reporterNs.report("EquipData", "../../logic/model/equip/EquipData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipInfo(extras) {
    _reporterNs.report("EquipInfo", "../../logic/model/equip/EquipInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipContainerInfo(extras) {
    _reporterNs.report("EquipContainerInfo", "../../logic/model/equip/EquipContainerInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrestigeData(extras) {
    _reporterNs.report("PrestigeData", "../../logic/model/prestige/PrestigeData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationData(extras) {
    _reporterNs.report("AssociationData", "../../logic/model/association/AssociationData", _context.meta, extras);
  }

  _export({
    HeroAttr: void 0,
    HeroAttrMgr: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      FightMacro = _unresolved_3.FightMacro;
    }, function (_unresolved_4) {
      RoleData = _unresolved_4.RoleData;
    }, function (_unresolved_5) {
      HeroData = _unresolved_5.HeroData;
    }, function (_unresolved_6) {
      HeroTeamControl = _unresolved_6.HeroTeamControl;
    }, function (_unresolved_7) {
      RareBookData = _unresolved_7.RareBookData;
    }, function (_unresolved_8) {
      EquipData = _unresolved_8.EquipData;
    }, function (_unresolved_9) {
      PrestigeData = _unresolved_9.PrestigeData;
    }, function (_unresolved_10) {
      AssociationData = _unresolved_10.AssociationData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "74ef27PUWtFupPTRb3BWJ3E", "HeroAttrMgr", undefined); // 此脚本由后端维护，遇到错误或需要变更需要同时修正后端代码


      _export("HeroAttr", HeroAttr = class HeroAttr {
        constructor() {
          this.powerScore = 0;
          // 英雄战力
          this.attr = new Map();
        }

        // 英雄数据集
        // 初始化数据
        init(heroId) {
          // 获得要计算的英雄数据集
          var heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getById(heroId);

          if (heroInfo == null) {
            return;
          } // 获得英雄属性及技能


          var heroSkills = [];
          HeroAttrMgr.getHeroAttrAndSkills(this, heroInfo, heroSkills); // 计算英雄战力

          HeroAttrMgr.getHeroPowerScore(this, heroInfo, heroSkills);
          console.log(this);
        } // 增加属性


        addAttr(type, value) {
          var _this$attr$get;

          if (type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_EquipSkill) {
            return;
          }

          var oldVal = (_this$attr$get = this.attr.get(type)) != null ? _this$attr$get : 0;
          this.attr.set(type, oldVal + value);
        } // 获得属性


        getAttr(type) {
          var _this$attr$get2;

          return (_this$attr$get2 = this.attr.get(type)) != null ? _this$attr$get2 : 0;
        }

      });

      _export("HeroAttrMgr", HeroAttrMgr = class HeroAttrMgr {
        // 获得英雄战力及属性集
        static getHeroInfoAttr(heroId) {
          var heroAttr = new HeroAttr();
          heroAttr.init(heroId);
          return heroAttr;
        } // 计算英雄整体攻击力
        // [backend]rps.getHeroTotalAttack


        static getHeroTotalAttack(heroAttr) {
          var atk = heroAttr.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_Attack);
          var per1 = heroAttr.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_DamagePer1);
          var per2 = heroAttr.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_DamagePer2);
          var per3 = heroAttr.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_DamagePer3);
          atk = Math.floor(atk * ((_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).MAX_CHANCE + per1) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).MAX_CHANCE);
          atk = Math.floor(atk * ((_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).MAX_CHANCE + per2) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).MAX_CHANCE);
          atk = Math.floor(atk * ((_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).MAX_CHANCE + per3) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).MAX_CHANCE);
          return atk;
        } // 计算英雄整体防御力
        // [backend]rps.getHeroTotalDefence


        static getHeroTotalDefence(heroAttr) {
          var def = heroAttr.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_Defence);
          var per1 = heroAttr.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_DefencePer1);
          var per2 = heroAttr.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_DefencePer2);
          var per3 = heroAttr.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_DefencePer3);
          def = Math.floor(def * ((_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).MAX_CHANCE + per1) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).MAX_CHANCE);
          def = Math.floor(def * ((_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).MAX_CHANCE + per2) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).MAX_CHANCE);
          def = Math.floor(def * ((_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).MAX_CHANCE + per3) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).MAX_CHANCE);
          return def;
        } // 计算英雄整体血量
        // [backend]rps.getHeroTotalHp


        static getHeroTotalHp(heroAttr) {
          var hp = heroAttr.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_Hp);
          var per = heroAttr.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_HpPer);
          return Math.floor(hp * ((_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).MAX_CHANCE + per) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).MAX_CHANCE);
        }
        /****************************************************************/
        // 获得英雄属
        // [backend]Hero.GetHeroAttrs


        static getHeroAttrs(heroAttr, heroInfo) {
          // 获得上阵数据
          var teamSlot = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getTeam(); // 获得英雄等级

          var heroLevel = 1;
          var slot = teamSlot.find(a => a.heroClass == heroInfo.heroTable.Class);

          if (slot && slot.heroId == heroInfo.id) {
            heroLevel = slot.level;
          } else {
            heroLevel = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
              error: Error()
            }), HeroTeamControl) : HeroTeamControl).ins.getMinTeamLevel();
          } // 检查等级限制


          if (heroLevel > heroInfo.getHeroStarUpTableByStar(heroInfo.star).MaxLevel) {
            heroLevel = heroInfo.getHeroStarUpTableByStar(heroInfo.star).MaxLevel;
          } // 获得基础属性


          HeroAttrMgr.getHeroBaseAttr(heroAttr, heroInfo, heroLevel - 1); // 获得额外全体属性加成

          for (var i = 0; i < teamSlot.length; ++i) {
            var _slot = teamSlot[i];

            if (_slot == null) {
              continue;
            }

            var _heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
              error: Error()
            }), HeroData) : HeroData).ins.getById(_slot.heroId);

            if (_heroInfo == null) {
              continue;
            } // 获得星级属性配置


            var starUpCfg = _heroInfo.getHeroStarUpTableByStar(_heroInfo.star);

            if (starUpCfg == null) {
              continue;
            } // 获得全体附加属性


            HeroAttrMgr.getHeroExtraAllAttrsByType(heroAttr, _heroInfo, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ExtraAttrTarget.ExtraAttrTarget_All); // 获得星级阶段属性

            HeroAttrMgr.getHeroStarStepAttrsByType(heroAttr, _heroInfo, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ExtraAttrTarget.ExtraAttrTarget_All);
          }
        } // 获得英雄基础属性
        // [backend]Hero.GetAttrs


        static getHeroBaseAttr(heroAttr, heroInfo, level) {
          // 获得基础属性
          var baseAttr = heroInfo.heroAttrTable;

          if (baseAttr) {
            for (var i = 0; i < baseAttr.HeroAttrType.length; ++i) {
              heroAttr.addAttr(baseAttr.HeroAttrType[i], baseAttr.HeroAttrValue[i]);
            }
          } // 获得等级提升属性


          var starUpCfg = heroInfo.getHeroStarUpTableByStar(heroInfo.star);

          if (starUpCfg == null) {
            return;
          }

          if (starUpCfg.AttrPerLevel != 0) {
            var attrCfg = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroAttrTableById.getValue(starUpCfg.AttrPerLevel);

            if (attrCfg) {
              for (var _i = 0; _i < attrCfg.HeroAttrType.length; ++_i) {
                heroAttr.addAttr(attrCfg.HeroAttrType[_i], attrCfg.HeroAttrValue[_i] * level);
              }
            }
          } // 获得附加属性


          HeroAttrMgr.getHeroExtraAllAttrsByType(heroAttr, heroInfo, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).ExtraAttrTarget.ExtraAttrTarget_Mine); // 获得星级阶段属性

          HeroAttrMgr.getHeroStarStepAttrsByType(heroAttr, heroInfo, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).ExtraAttrTarget.ExtraAttrTarget_Mine);
        } // 获得额外属性加成
        // [backend]Hero.getExtraAllAttrsByType


        static getHeroExtraAllAttrsByType(heroAttr, heroInfo, target) {
          var starUpCfg = heroInfo.getHeroStarUpTableByStar(heroInfo.star);

          if (starUpCfg == null) {
            return;
          }

          for (var i = 0; i < starUpCfg.ExtraAttrTarget.length; ++i) {
            if (starUpCfg.ExtraAttrTarget[i] == target) {
              var attrId = starUpCfg.ExtraAttrList[i];
              var attrCfg = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().HeroAttrTableById.getValue(attrId);

              if (attrCfg) {
                for (var _i2 = 0; _i2 < attrCfg.HeroAttrType.length; ++_i2) {
                  heroAttr.addAttr(attrCfg.HeroAttrType[_i2], attrCfg.HeroAttrValue[_i2]);
                }
              }
            }
          }
        } // 获得星级阶段升级带来得属性加成
        // [backend]Hero.getStarStepAttrsByType


        static getHeroStarStepAttrsByType(heroAttr, heroInfo, target) {
          for (var i = 0; i < heroInfo.finshedStarSteps.length; i++) {
            var stepConfig = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroStarStepTableById.getValue(heroInfo.finshedStarSteps[i]);

            if (stepConfig == null) {
              continue;
            }

            for (var _i3 = 0; _i3 < stepConfig.ExtraAttrTarget.length; ++_i3) {
              if (stepConfig.ExtraAttrTarget[_i3] == target) {
                var attrId = stepConfig.ExtraAttrList[_i3];
                var attrCfg = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).getData().HeroAttrTableById.getValue(attrId);

                if (attrCfg) {
                  for (var _i4 = 0; _i4 < attrCfg.HeroAttrType.length; ++_i4) {
                    heroAttr.addAttr(attrCfg.HeroAttrType[_i4], attrCfg.HeroAttrValue[_i4]);
                  }
                }
              }
            }
          }
        } // 获取头像 头像框 属性加成
        // [backend]AvatarManager.GetAttrs


        static getHeadAndFrameAttrs(heroAttr) {
          for (var i = 0; i < (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.avatarInfo.headFrames.length; i++) {
            var frameTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeadFramTableById.getValue((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.avatarInfo.headFrames[i].itemId);

            for (var k = 0; k < frameTab.AttrTypes.length; k++) {
              heroAttr.addAttr(frameTab.AttrTypes[k], frameTab.AttrValue[k]);
            }
          }

          for (var j = 0; j < (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.avatarInfo.headIcons.length; j++) {
            var headTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeadTableById.getValue((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.avatarInfo.headIcons[j].itemId);

            for (var v = 0; v < headTab.AttrTypes.length; v++) {
              heroAttr.addAttr(headTab.AttrTypes[v], headTab.AttrValue[v]);
            }
          }
        } // 获得英雄共鸣属性加成
        // [backend]HeroManager.GetResonanceAttrs


        static getHeroResonanceAttrs(heroAttr) {
          // 获得等级共鸣配置
          var lvTab = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getResonanceLevelTab();

          if (lvTab) {
            for (var i = 0; i < lvTab.AttrTypes.length; i++) {
              heroAttr.addAttr(lvTab.AttrTypes[i], lvTab.AttrValue[i]);
            }
          } // 获得星级共鸣配置


          var starTab = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getResonanceStarTab();

          if (starTab) {
            for (var _i5 = 0; _i5 < starTab.AttrTypes.length; _i5++) {
              heroAttr.addAttr(starTab.AttrTypes[_i5], starTab.AttrValue[_i5]);
            }
          }
        } // 成就属性加成


        static getHeroPrestigeAttrs(heroAttr) {
          var prestigeAttr = (_crd && PrestigeData === void 0 ? (_reportPossibleCrUseOfPrestigeData({
            error: Error()
          }), PrestigeData) : PrestigeData).ins.attrMap;
          prestigeAttr.forEach((val, key) => {
            heroAttr.addAttr(key, val);
          });
        } // 获得英雄总属性
        // [backend]RPSManager.GetHeroAttrAndSkills


        static getHeroAttrAndSkills(heroAttr, heroInfo, heroSkills) {
          // 获得英雄属性
          HeroAttrMgr.getHeroAttrs(heroAttr, heroInfo); // 检查英雄是否在队伍中

          if ((_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.heroInTeam(heroInfo.id)) {
            // 获得秘籍属性技能加成
            HeroAttrMgr.getBookAttrAndSkills(heroAttr, heroInfo, heroSkills); // 获得秘籍套装属性加成

            HeroAttrMgr.getBookSerialAttrs(heroAttr); // 获得绘卷属性加成

            HeroAttrMgr.getScrollPaintAttrs(heroAttr, heroInfo); // 获得基因属性技能加成

            HeroAttrMgr.getGeneAttrAndSkills(heroAttr, heroInfo, heroSkills); // 获得丹药属性加成

            HeroAttrMgr.getElixirAttrs(heroAttr, heroInfo); // 获得装备属性技能加成

            HeroAttrMgr.getEquipAttrAndSkills(heroAttr, heroInfo, heroSkills); // 获得英雄共鸣属性加成

            HeroAttrMgr.getHeroResonanceAttrs(heroAttr); // 获得装备共鸣属性加成

            HeroAttrMgr.getEquipResonanceAttrs(heroAttr, heroInfo);
            HeroAttrMgr.getHeroPrestigeAttrs(heroAttr); // 头像头像框属性加成

            HeroAttrMgr.getHeadAndFrameAttrs(heroAttr); // 帮会属性加成

            HeroAttrMgr.getGuildtAttrs(heroAttr, heroInfo);
          } // 填充最终属性


          heroAttr.attr.set((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_TotalAttack, HeroAttrMgr.getHeroTotalAttack(heroAttr));
          heroAttr.attr.set((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_TotalDefence, HeroAttrMgr.getHeroTotalDefence(heroAttr));
          heroAttr.attr.set((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_TotalHp, HeroAttrMgr.getHeroTotalHp(heroAttr));
        }
        /****************************************************************/
        // 获得秘籍属性加成
        // [backend]BookManager.GetAttrs


        static getBookAttrAndSkills(heroAttr, heroInfo, heroSkills) {
          // 通过英雄类型获得全部秘籍
          var bookList = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
            error: Error()
          }), RareBookData) : RareBookData).ins.getBookInfosByHeroClass(heroInfo.heroTable.Class);

          if (!bookList) {
            return;
          }

          for (var i = 0; i < bookList.length; ++i) {
            var bookInfo = bookList[i];
            var startCfg = bookInfo.bookStarTable;
            var levelRatio = 1;

            if (bookInfo.bookLevelTable) {
              levelRatio = bookInfo.bookLevelTable.Ratio;
            }

            for (var _i6 = 0; _i6 < startCfg.AttrType.length; ++_i6) {
              var val = Math.floor(startCfg.AttrValue[_i6] * ((_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
                error: Error()
              }), FightMacro) : FightMacro).MAX_CHANCE + levelRatio
              /** bookInfo.level*/
              ) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
                error: Error()
              }), FightMacro) : FightMacro).MAX_CHANCE);
              heroAttr.addAttr(startCfg.AttrType[_i6], val);
            }

            for (var _i7 = 0; _i7 < startCfg.ExtraAttrType.length; ++_i7) {
              heroAttr.addAttr(startCfg.ExtraAttrType[_i7], startCfg.ExtraAttrValue[_i7]);
            } // 已穿戴的情况把技能也加上


            if (bookInfo.isWear) {
              heroSkills.push(...startCfg.SkillId);
            }
          }
        } // 获得秘籍套装属性加成
        // [backend]BookManager.GetSerialAttrs


        static getBookSerialAttrs(heroAttr) {
          for (var i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BookSeriesTable.length; ++i) {
            var cfg = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().BookSeriesTable[i];

            if (!cfg) {
              continue;
            }

            var serialIfno = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
              error: Error()
            }), RareBookData) : RareBookData).ins.getSerieInfoById(cfg.Id);

            if (serialIfno != null && serialIfno.isComplete()) {
              for (var _i8 = 0; _i8 < cfg.AttrType.length; ++_i8) {
                heroAttr.addAttr(cfg.AttrType[_i8], cfg.AttrValue[_i8]);
              }
            }
          }
        }
        /****************************************************************/
        // 获得绘卷属性加成
        // [backend]ScrollPaintingManager.GetAttrs


        static getScrollPaintAttrs(heroAttr, heroInfo) {
          var attrMap = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getPaintingAttrMap();
          attrMap.forEach((val, type) => {
            heroAttr.addAttr(type, val);
          });
        }
        /****************************************************************/
        // 获得帮会属性技能加成
        // [backend]GeneManager.GetAttr

        /****************************************************************/


        static getGuildtAttrs(heroAttr, heroInfo) {
          if ((_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getInGuild()) {
            var attrMap = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
              error: Error()
            }), AssociationData) : AssociationData).ins.getGuildAttr(heroInfo.heroTable.Class);
            attrMap.forEach((val, type) => {
              heroAttr.addAttr(type, val);
            });
          }
        } // 获得基因属性技能加成
        // [backend]GeneManager.GetAttr


        static getGeneAttrAndSkills(heroAttr, heroInfo, heroSkills) {
          var smallLevel = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.gene.smallGeneLevel;
          var bigLevel = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.gene.bigGeneLevel;

          for (var i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GeneLevelTable.length; i++) {
            var geneTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GeneLevelTable[i];

            if (geneTab.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).GeneType.GeneType_SmallGene && geneTab.Level <= smallLevel || geneTab.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).GeneType.GeneType_BigGene && geneTab.Level <= bigLevel) {
              if (geneTab.AttrType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_EquipSkill) {
                heroSkills.push(geneTab.AttrValue);
              } else {
                heroAttr.addAttr(geneTab.AttrType, geneTab.AttrValue);
              }
            }
          }
        }
        /****************************************************************/
        // 获得丹药属性加成
        // [backend]ElixirManager.GetAttr


        static getElixirAttrs(heroAttr, heroInfo) {
          var elixirAttrs = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getElixirAttr();

          if (elixirAttrs) {
            elixirAttrs.forEach((val, type) => {
              heroAttr.addAttr(type, val);
            });
          }
        }
        /****************************************************************/
        // 获得装备属性技能加成


        static getEquipAttrAndSkills(heroAttr, heroInfo, heroSkills) {
          // 获得装备槽位
          var container = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.getEquipContainerDataByHeroClass(heroInfo.heroTable.Class);

          if (!container) {
            return;
          }

          for (var i = 0; i < container.slotData.length; ++i) {
            HeroAttrMgr.getEquipAttr(heroAttr, container.slotData[i], heroSkills);
          }
        } // 获得装备属性加成
        // [backend]Equip.GetAttr


        static getEquipAttr(heroAttr, slot, heroSkills) {
          var _slot$enhanceLv, _slot$refineLv;

          if (!slot) {
            return;
          } // 获得强化等级


          var enhanceLv = (_slot$enhanceLv = slot.enhanceLv) != null ? _slot$enhanceLv : 0; // 获得精炼等级

          var refineLv = (_slot$refineLv = slot.refineLv) != null ? _slot$refineLv : 0;
          var equipInfo = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.getEquipInfoById(slot.equipId);

          if (!equipInfo) {
            return;
          } // 检查强化等级是否超过武器上限


          if (enhanceLv > equipInfo.equipTable.EnhanceLimit) {
            enhanceLv = equipInfo.equipTable.EnhanceLimit;
          } // 检查淬炼等级是否超过武器上限


          if (refineLv > equipInfo.equipTable.RefineLimit) {
            refineLv = equipInfo.equipTable.RefineLimit;
          } // 基础属性


          for (var i = 0; i < equipInfo.baseAttr.length; ++i) {
            var attrId = equipInfo.baseAttr[i];
            var cfg = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().EquipAttrTableById.getValue(attrId);

            if (!cfg) {
              continue;
            }

            var val = cfg.Base + Math.floor(cfg.Base * enhanceLv * cfg.Growth / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
              error: Error()
            }), FightMacro) : FightMacro).MAX_CHANCE);
            heroAttr.addAttr(cfg.AttrType, val);
          } // 附加属性


          for (var _i9 = 0; _i9 < equipInfo.extraAttr.length; ++_i9) {
            var _attrId = equipInfo.extraAttr[_i9];

            var _cfg = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().EquipAttrTableById.getValue(_attrId);

            if (!_cfg) {
              continue;
            }

            var _val = _cfg.Base + Math.floor(_cfg.Base * refineLv * _cfg.Growth / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
              error: Error()
            }), FightMacro) : FightMacro).MAX_CHANCE);

            heroAttr.addAttr(_cfg.AttrType, _val);
          } // 设置技能


          if (equipInfo.skillList.length > 0) {
            heroSkills.push(...equipInfo.skillList);
          }
        } // 获得装备共鸣属性加成
        // [backend]EquipManager.GetResonanceAttrs


        static getEquipResonanceAttrs(heroAttr, heroInfo) {
          var container = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.getEquipContainerDataByHeroClass(heroInfo.heroTable.Class);

          if (!container) {
            return;
          } // 品质共鸣


          var masterTab = container.masteInfo.qualityTable;

          if (masterTab) {
            for (var i = 0; i < masterTab.AttrList.length; i++) {
              var attrCfg = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().EquipAttrTableById.getValue(masterTab.AttrList[i]);

              if (attrCfg) {
                heroAttr.addAttr(attrCfg.AttrType, attrCfg.Base);
              }
            }
          } // 强化共鸣


          masterTab = container.masteInfo.enhanceTable;

          if (masterTab) {
            for (var _i10 = 0; _i10 < masterTab.AttrList.length; _i10++) {
              var _attrCfg = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().EquipAttrTableById.getValue(masterTab.AttrList[_i10]);

              if (_attrCfg) {
                heroAttr.addAttr(_attrCfg.AttrType, _attrCfg.Base);
              }
            }
          } // 淬炼共鸣


          masterTab = container.masteInfo.refineTable;

          if (masterTab) {
            for (var _i11 = 0; _i11 < masterTab.AttrList.length; _i11++) {
              var _attrCfg2 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().EquipAttrTableById.getValue(masterTab.AttrList[_i11]);

              if (_attrCfg2) {
                heroAttr.addAttr(_attrCfg2.AttrType, _attrCfg2.Base);
              }
            }
          }
        }
        /****************************************************************/
        // 计算英雄战力


        static getHeroPowerScore(heroAttr, heroInfo, heroSkills) {
          HeroAttrMgr.initHeroStarPSMap(); // 计算英雄星级战力加成
          //heroAttr.powerScore = HeroAttrMgr.getHeroStarPowerScore(heroInfo);
          // 计算英雄属性战力

          heroAttr.attr.forEach((val, type) => {
            if (HeroAttrMgr.m_heroPreCalcAttrMap.has(type)) {
              return;
            }

            heroAttr.powerScore += HeroAttrMgr.calcHeroPowerScore(type, val);
          }); // 计算攻击力

          heroAttr.powerScore += HeroAttrMgr.calcHeroPowerScore((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_Attack, heroAttr.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_TotalAttack)); // 计算防御力

          heroAttr.powerScore += HeroAttrMgr.calcHeroPowerScore((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_Defence, heroAttr.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_TotalDefence)); // 计算血量

          heroAttr.powerScore += HeroAttrMgr.calcHeroPowerScore((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_Hp, heroAttr.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_TotalHp)); // 计算技能战力

          heroAttr.powerScore += HeroAttrMgr.calcSkillPowerScore(heroSkills);
        } // 预解析战力表


        static initHeroStarPSMap() {
          if (HeroAttrMgr.m_heroStarPSMap) {
            return;
          }

          HeroAttrMgr.m_heroStarPSMap = new Map();

          for (var i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroPowerScore.length; ++i) {
            var cfg = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroPowerScore[i];

            if (cfg.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AttrType.AttrType_HeroStar) {
              HeroAttrMgr.m_heroStarPSMap.set(cfg.Args, cfg);
            } else if (cfg.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AttrType.AttrType_EquipSkill) {
              HeroAttrMgr.m_heroSkillPSMap.set(cfg.Args, cfg);
            } else {
              HeroAttrMgr.m_heroAttrPSMap.set(cfg.Type, cfg);
            }
          }

          HeroAttrMgr.m_heroPreCalcAttrMap.add((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_Attack);
          HeroAttrMgr.m_heroPreCalcAttrMap.add((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_DamagePer1);
          HeroAttrMgr.m_heroPreCalcAttrMap.add((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_DamagePer2);
          HeroAttrMgr.m_heroPreCalcAttrMap.add((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_DamagePer3);
          HeroAttrMgr.m_heroPreCalcAttrMap.add((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_Hp);
          HeroAttrMgr.m_heroPreCalcAttrMap.add((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_HpPer);
          HeroAttrMgr.m_heroPreCalcAttrMap.add((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_Defence);
          HeroAttrMgr.m_heroPreCalcAttrMap.add((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_DefencePer1);
          HeroAttrMgr.m_heroPreCalcAttrMap.add((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_DefencePer2);
          HeroAttrMgr.m_heroPreCalcAttrMap.add((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_DefencePer3);
        } // 计算英雄星级战力加成


        static getHeroStarPowerScore(heroInfo) {
          if (HeroAttrMgr.m_heroStarPSMap.has(heroInfo.itemId)) {
            var score = HeroAttrMgr.m_heroStarPSMap.get(heroInfo.itemId).Score;
            return Math.floor(score * heroInfo.star / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
              error: Error()
            }), FightMacro) : FightMacro).MAX_CHANCE);
          }

          return 0;
        } // 计算属性战力


        static calcHeroPowerScore(type, val) {
          if (HeroAttrMgr.m_heroAttrPSMap.has(type)) {
            return Math.floor(HeroAttrMgr.m_heroAttrPSMap.get(type).Score * val / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
              error: Error()
            }), FightMacro) : FightMacro).MAX_CHANCE);
          }

          return 0;
        } // 计算技能战力


        static calcSkillPowerScore(skillList) {
          var powerScore = 0;

          for (var i = 0; i < skillList.length; ++i) {
            var id = skillList[i];

            if (HeroAttrMgr.m_heroSkillPSMap.has(id)) {
              powerScore += HeroAttrMgr.m_heroSkillPSMap.get(id).Score;
            }
          }

          return powerScore;
        }

      });

      HeroAttrMgr.m_heroStarPSMap = null;
      HeroAttrMgr.m_heroAttrPSMap = new Map();
      HeroAttrMgr.m_heroSkillPSMap = new Map();
      HeroAttrMgr.m_heroPreCalcAttrMap = new Set();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=49c3e55a3998ed8b82b98df9427e286a8d6bc510.js.map