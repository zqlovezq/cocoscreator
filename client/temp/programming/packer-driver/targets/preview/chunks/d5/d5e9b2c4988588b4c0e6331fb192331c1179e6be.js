System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, tab, RareBookData, _dec, _class, _crd, ccclass, property, Math_RATIO, RogueInfo;

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillPowers(extras) {
    _reporterNs.report("SkillPowers", "../../power/SkillPowers", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillTab(extras) {
    _reporterNs.report("SkillTab", "../../power/powerTab/SkillTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillGroupTab(extras) {
    _reporterNs.report("SkillGroupTab", "../../power/powerTab/SkillGroupTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookData(extras) {
    _reporterNs.report("RareBookData", "../../../model/rareBook/RareBookData", _context.meta, extras);
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
      RareBookData = _unresolved_3.RareBookData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2d5aaWn2GtPPJi6PJOnQ8oR", "RogueInfo", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);
      Math_RATIO = 10000;

      _export("RogueInfo", RogueInfo = (_dec = ccclass('RogueInfo'), _dec(_class = class RogueInfo {
        constructor(itemId) {
          this.Id = void 0;
          this.skillPowers = void 0;
          //增强存储
          this._config = void 0;

          /** 放回次数 */
          this.backCount = 0;
          this.heroItemId = 0;

          /** 是否升级 ToDo英雄通过属性直接升级 */
          this.isHeroLevel = false;
          this.level = 0;
          this.skills = [];
          this.skillGroup = null;
          this.Id = itemId;
          this.rogueTab;
        }

        get rogueTab() {
          if (this._config == null) {
            this._config = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().RogueTableById.getValue(this.Id);

            if (this._config == null) {
              console.error("未找到rogueid", this.Id);
            }

            if (this.heroItemId != 0) {
              this.level = this._config.Level;
            }
          }

          return this._config;
        }

        addCount() {
          this.backCount += 1;
        }

        ifFullId() {
          return this.Id == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().RogueFullBackupOption;
        }

        isRemove() {
          if (this.rogueTab.Backlimit == 0) {
            return this.backCount > this.rogueTab.Backlimit;
          }

          return this.backCount >= this.rogueTab.Backlimit;
        }

        setParentPowers(powers) {
          this.skillPowers = powers;

          if (powers) {
            if (this.rogueTab.Skill) {
              for (var index = 0; index < this.rogueTab.Skill.length; index++) {
                var element = this.rogueTab.Skill[index];
                this.skills.push(this.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).PowerType.PowerType_SkillTable, this.rogueTab.Skill[index]));
              }
            }

            if (this.rogueTab.BookId) {
              var bookInfo = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
                error: Error()
              }), RareBookData) : RareBookData).ins.getBookInfoByItemId(this.rogueTab.BookId);

              if (bookInfo.bookStarTable.SkillId) {
                for (var _index = 0; _index < bookInfo.bookStarTable.SkillId.length; _index++) {
                  this.skills.push(this.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                    error: Error()
                  }), tab) : tab).PowerType.PowerType_SkillTable, bookInfo.bookStarTable.SkillId[_index]));
                }
              }
            }

            if (this.rogueTab.SkillGroup) {
              this.skillGroup = this.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).PowerType.PowerType_SkillGroupTable, this.rogueTab.SkillGroup);
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d5e9b2c4988588b4c0e6331fb192331c1179e6be.js.map