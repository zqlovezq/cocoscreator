System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsControl, PrestigeData, tab, FincaFightTeamState, RANKING_TYPE, HeroData, GameUtil, RedMgr, RedDotType, FincaFightControl, RareBookData, _dec, _class, _class2, _crd, ccclass, property, FincaFightData;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrestigeData(extras) {
    _reporterNs.report("PrestigeData", "../prestige/PrestigeData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightTeamState(extras) {
    _reporterNs.report("FincaFightTeamState", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRANKING_TYPE(extras) {
    _reporterNs.report("RANKING_TYPE", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "../hero/HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightControl(extras) {
    _reporterNs.report("FincaFightControl", "./FincaFightControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookInfo(extras) {
    _reporterNs.report("RareBookInfo", "../rareBook/RareBookInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookData(extras) {
    _reporterNs.report("RareBookData", "../rareBook/RareBookData", _context.meta, extras);
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
      PrestigeData = _unresolved_3.PrestigeData;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      FincaFightTeamState = _unresolved_5.FincaFightTeamState;
      RANKING_TYPE = _unresolved_5.RANKING_TYPE;
    }, function (_unresolved_6) {
      HeroData = _unresolved_6.HeroData;
    }, function (_unresolved_7) {
      GameUtil = _unresolved_7.GameUtil;
    }, function (_unresolved_8) {
      RedMgr = _unresolved_8.RedMgr;
    }, function (_unresolved_9) {
      RedDotType = _unresolved_9.RedDotType;
    }, function (_unresolved_10) {
      FincaFightControl = _unresolved_10.FincaFightControl;
    }, function (_unresolved_11) {
      RareBookData = _unresolved_11.RareBookData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "88e739aBlFNw6QmRXXzJdXv", "FincaFightData", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FincaFightData", FincaFightData = (_dec = ccclass('FincaFightData'), _dec(_class = (_class2 = class FincaFightData extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        constructor() {
          super(...arguments);
          this.fincaFightData = null;
          this.heroIds = [];
          //英雄信息
          this.bookIds = [];
          //秘籍信息
          this.freeTimes = 0;
          this._fincaFightTeamTab = null;
          this.HeroToggleIndex = 0;
          this.curSelectHero = 0;
          this.curSelectBook = 0;
          this.BookToggleIndex = 0;
          this.FincaRanking = 0;
          this.FincaRankingSimple = null;
          this.boosDicTabs = new Map();
          this.bookList = new Map();
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new FincaFightData();
          }

          return this._instance;
        }

        initData(msg) {
          (_crd && FincaFightControl === void 0 ? (_reportPossibleCrUseOfFincaFightControl({
            error: Error()
          }), FincaFightControl) : FincaFightControl).ins.init();
          this.fincaFightData = msg;
          this.heroIds = msg.heroIds;
          this.bookIds = msg.bookItemIds;

          if (this.bookIds.length === 5) {
            this.bookIds.push(0);
          }

          this.freeTimes = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().FincaFightFreeTimes - msg.freeFightTimes;
          this.setBookData();
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Free_Fight_Token);
        }

        setFincaFightTeamTab() {
          this._fincaFightTeamTab = this.getTeamTab((_crd && PrestigeData === void 0 ? (_reportPossibleCrUseOfPrestigeData({
            error: Error()
          }), PrestigeData) : PrestigeData).ins.level);
        }
        /** 根据冒险等级获取解锁 */


        getTeamTab(prestigeLevel) {
          var maxLevel = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().FincaFightTeam[(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().FincaFightTeam.length - 1].Level;
          return (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().FincaFightTeamByLevel.getValue(Math.min(prestigeLevel, maxLevel));
        } // 获取当前解锁了几个


        getFincaFightTeamTab() {
          return this._fincaFightTeamTab;
        } // 获取当前位置上的状态


        getState(index) {
          if (index > this._fincaFightTeamTab.UnlockHero) {
            return (_crd && FincaFightTeamState === void 0 ? (_reportPossibleCrUseOfFincaFightTeamState({
              error: Error()
            }), FincaFightTeamState) : FincaFightTeamState).LOCK;
          } else {
            if (this.heroIds[index - 1]) {
              return (_crd && FincaFightTeamState === void 0 ? (_reportPossibleCrUseOfFincaFightTeamState({
                error: Error()
              }), FincaFightTeamState) : FincaFightTeamState).HERO;
            }

            return (_crd && FincaFightTeamState === void 0 ? (_reportPossibleCrUseOfFincaFightTeamState({
              error: Error()
            }), FincaFightTeamState) : FincaFightTeamState).EMPTY;
          }
        } // 获取当前位置上秘籍的状态


        getBookState(index) {
          if (index > this._fincaFightTeamTab.UnlockWeapon) {
            return (_crd && FincaFightTeamState === void 0 ? (_reportPossibleCrUseOfFincaFightTeamState({
              error: Error()
            }), FincaFightTeamState) : FincaFightTeamState).LOCK;
          } else {
            if (this.bookIds[index - 1]) {
              return (_crd && FincaFightTeamState === void 0 ? (_reportPossibleCrUseOfFincaFightTeamState({
                error: Error()
              }), FincaFightTeamState) : FincaFightTeamState).BOOK;
            }

            return (_crd && FincaFightTeamState === void 0 ? (_reportPossibleCrUseOfFincaFightTeamState({
              error: Error()
            }), FincaFightTeamState) : FincaFightTeamState).EMPTY;
          }
        } // 通过heroid判断状态


        getHeroInTeam(heroId) {
          return this.heroIds.indexOf(heroId);
        } // 获取上阵英雄数量


        getInTeamHerosCount() {
          var count = 0;

          for (var i = 0; i < this.heroIds.length; i++) {
            if (this.heroIds[i]) {
              count++;
            }
          }

          return count;
        } // 获取当前的空位


        getHeroEmptyIndex() {
          var maxIndex = this._fincaFightTeamTab.UnlockHero;

          for (var i = 1; i <= maxIndex; i++) {
            if (!this.heroIds[i - 1]) {
              return i;
            }
          }

          return 0;
        } // 判断当前是否可以上阵或者替换英雄


        checkReplaceHero(heroId) {
          for (var i = 0; i < this.heroIds.length; i++) {
            if (i !== this.HeroToggleIndex - 1) {
              var _id = this.heroIds[i];

              if (_id) {
                var heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
                  error: Error()
                }), HeroData) : HeroData).ins.getById(_id);
                var replaceHeroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
                  error: Error()
                }), HeroData) : HeroData).ins.getById(heroId);

                if (heroInfo.heroClassTable.HeroClass === replaceHeroInfo.heroClassTable.HeroClass) {
                  return false;
                }
              }
            }
          }

          return true;
        }
        /* ------------------------------------------------------- */
        // 通过heroid判断状态


        getBookInTeam(bookId) {
          return this.bookIds.indexOf(bookId);
        }

        getBookEmptyIndex() {
          var maxIndex = this._fincaFightTeamTab.UnlockWeapon;

          for (var i = 1; i <= maxIndex; i++) {
            if (!this.bookIds[i - 1]) {
              return i;
            }
          }

          return 0;
        } // 获取上阵英雄数量


        getInTeamBooksCount() {
          var count = 0;

          for (var i = 0; i < this.bookIds.length; i++) {
            if (this.bookIds[i]) {
              count++;
            }
          }

          return count;
        } // 获取奖励信息列表：1是今日奖励、2是结算奖励


        getRewards(type, needSelf) {
          var rewardInfo = {
            DropId: [],
            Rankings: [],
            selfReward: []
          };

          if (type === 2) {
            var tableData1 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().RankRewardTableById.getValue((_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
              error: Error()
            }), RANKING_TYPE) : RANKING_TYPE).Fight);
            rewardInfo.Rankings = tableData1.Ranking;
            rewardInfo.DropId = tableData1.DropId;
          } else {
            var tableData2 = this.getCycleRewardTab();
            rewardInfo.Rankings = tableData2.CycleRanking;
            rewardInfo.DropId = tableData2.CycleDropId;
          }

          if (needSelf) {
            for (var i = 0; i < rewardInfo.Rankings.length; i++) {
              var str = rewardInfo.Rankings[i].split(";");

              if (Number(str[0]) <= this.FincaRanking && Number(str[1]) >= this.FincaRanking) {
                rewardInfo.selfReward = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
                  error: Error()
                }), GameUtil) : GameUtil).getRewardsByDropId(rewardInfo.DropId[i]);
                break;
              }
            }
          }

          return rewardInfo;
        }

        getCycleRewardTab() {
          for (var i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().RankCycleRewardTable.length; i++) {
            var _tab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().RankCycleRewardTable[i];

            if (_tab.Id === (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
              error: Error()
            }), RANKING_TYPE) : RANKING_TYPE).Fight) {
              return _tab;
            }
          }
        } // 根据位置返回日志等级


        getUnLockLevel(index, isHero) {
          for (var i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().FincaFightTeam.length; i++) {
            var fincaTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().FincaFightTeam[i];

            if (isHero) {
              if (fincaTab.UnlockHero === index) {
                return fincaTab.Level;
              }
            } else {
              if (fincaTab.UnlockWeapon === index) {
                return fincaTab.Level;
              }
            }
          }

          return 0;
        } // 判断当前是否可以提交


        checkHeroIdsOk() {
          if (this.heroIds[0]) {
            var heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
              error: Error()
            }), HeroData) : HeroData).ins.getById(this.heroIds[0]);

            if (heroInfo.heroClassTable.HeroClass !== (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroClass.HeroClass_Warrior) {
              console.log("cocos 首位不能是非战士英雄");
              return false;
            }

            var newArr = [];

            for (var i = 0; i < this.heroIds.length; i++) {
              if (this.heroIds[i]) {
                var _heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
                  error: Error()
                }), HeroData) : HeroData).ins.getById(this.heroIds[i]);

                newArr.push({
                  classType: _heroInfo.heroClassTable.HeroClass
                });
              }
            }

            var hasRepeat = this.hasDuplicate(newArr, "classType");
            return !hasRepeat;
          } else {
            return false;
          }
        }

        hasDuplicate(arr, field) {
          var seen = {}; // 使用对象来记录已出现的属性值

          for (var i = 0; i < arr.length; i++) {
            var value = arr[i][field];

            if (seen[value]) {
              // 如果该值已存在，说明有重复
              return true;
            }

            seen[value] = true; // 如果没有出现过，将该值标记为已出现
          }

          return false; // 没有重复
        } // 获取秘籍数据按照全部、刺客、射手、牧师、法师、战士


        setBookData() {
          this.bookList.clear();
          this.boosDicTabs.clear();
          var tabs = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BookDictionary;

          for (var key in tabs) {
            var bookId = tabs[key].PhaseOneBook;
            var heroClass = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
              error: Error()
            }), RareBookData) : RareBookData).ins.getBookInfoByItemId(bookId).bookTable.Class;
            this.boosDicTabs.set(heroClass, tabs[key]);
          }

          for (var i = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Assassin; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Max; i++) {
            var arr = [];
            var dict = this.boosDicTabs.get(i);

            for (var k = 0; k < dict.PhaseTwoBook.length; k++) {
              var twoBookId = dict.PhaseTwoBook[k];
              var threeBookId = dict.PhaseThreeBook[k];
              var bookInfo = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
                error: Error()
              }), RareBookData) : RareBookData).ins.getBookInfoByItemId(threeBookId);

              if (bookInfo.isLock) {
                var _bookInfo = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
                  error: Error()
                }), RareBookData) : RareBookData).ins.getBookInfoByItemId(threeBookId);

                arr.push(_bookInfo);
              } else {
                var _bookInfo2 = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
                  error: Error()
                }), RareBookData) : RareBookData).ins.getBookInfoByItemId(twoBookId);

                arr.push(_bookInfo2);
              }
            }

            this.bookList.set(i, arr);

            if (this.bookList.has((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroClass.HeroClass_Any)) {
              var newArr = this.bookList.get((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).HeroClass.HeroClass_Any).concat(arr);
              this.bookList.set((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).HeroClass.HeroClass_Any, newArr);
            } else {
              this.bookList.set((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).HeroClass.HeroClass_Any, arr);
            }
          }

          console.log(this.bookList);
        }

        getBookList() {
          return this.bookList;
        } // 判断当前的bookid是否有可替换的 并保存


        checkAllBooks() {
          var canSave = false;

          for (var i = 0; i < this.bookIds.length; i++) {
            var bookId = this.bookIds[i];

            if (!bookId) {
              continue;
            }

            var bookInfo = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
              error: Error()
            }), RareBookData) : RareBookData).ins.getBookInfoByItemId(bookId);
            var heroClass = bookInfo.bookTable.Class;
            var bookArr = this.bookList.get(heroClass);

            if (bookArr.indexOf(bookInfo) > -1) {
              continue;
            } else {
              // 当前秘籍已经不存在替换
              var dict = this.boosDicTabs.get(heroClass);
              var index = dict.PhaseTwoBook.indexOf(bookId);
              this.bookIds[i] = dict.PhaseThreeBook[index];
              canSave = true;
            }
          }

          if (canSave) {
            (_crd && FincaFightControl === void 0 ? (_reportPossibleCrUseOfFincaFightControl({
              error: Error()
            }), FincaFightControl) : FincaFightControl).ins.reqSetFincaBattleBookIds(FincaFightData.ins.bookIds);
          }
        }

        getChangeScoreStr(newScore) {
          var score = newScore - this.fincaFightData.score;

          if (score > 0) {
            return "+" + score;
          } else if (score == 0) {
            return "0";
          } else {
            return score;
          }
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d3aaab8ba1da56ce65285fcf6dd1f64b4239638d.js.map