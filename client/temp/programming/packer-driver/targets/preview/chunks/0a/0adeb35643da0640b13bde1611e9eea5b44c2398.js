System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, tab, HeroData, HeroTeamControl, _dec, _class, _class2, _crd, ccclass, property, HeroBagDataControl;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "../HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroTeamControl(extras) {
    _reporterNs.report("HeroTeamControl", "../HeroTeamControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../HeroInfo", _context.meta, extras);
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
    }, function (_unresolved_4) {
      HeroTeamControl = _unresolved_4.HeroTeamControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e61fbVhr1dDt5Tf45pdZkWt", "HeroBagDataControl", undefined);
      /*
       * @Date: 2024-05-06 13:59:46
       * @LastEditors: wzq
       * @LastEditTime: 2024-05-23 18:37:52
       */


      __checkObsolete__(['_decorator', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroBagDataControl", HeroBagDataControl = (_dec = ccclass('HeroBagDataControl'), _dec(_class = (_class2 = class HeroBagDataControl {
        constructor() {
          this.heroId = 0;
          this.bookId = 0;
          this._heroList = new Map();
          this._bookList = new Map();
          this._idx = 0;
          this._book_idx = 0;
          this.book_have_count = 0;
          this._starUpMap = new Map();
          this._ResolveHerosMap = new Map();
          this._receivedHeroAlbumIds = new Map();
          this._receivedRecommendTeamIds = new Map();
          this._heroClassType = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Max;
          this._bookClassType = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Max;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new HeroBagDataControl();
          }

          return this._instance;
        }

        setAwardData(receivedHeroAlbumIds, receivedRecommendTeamIds) {
          this._receivedHeroAlbumIds.clear();

          this._receivedRecommendTeamIds.clear();

          for (var i = 0; i < receivedHeroAlbumIds.length; i++) {
            this._receivedHeroAlbumIds.set(receivedHeroAlbumIds[i], true);
          }

          for (var k = 0; k < receivedRecommendTeamIds.length; k++) {
            this._receivedRecommendTeamIds.set(receivedRecommendTeamIds[k], true);
          }
        }

        getBookReceivedIds() {
          return this._receivedHeroAlbumIds;
        }

        getRecommendTeamIds() {
          return this._receivedRecommendTeamIds;
        }

        initData() {
          this._idx = 0;
          this._book_idx = 0;
          this.book_have_count = 0;

          this._heroList.clear();

          var sortHeros = this.sortHeroList((_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getHeros());

          for (var i = 0; i < sortHeros.length; i++) {
            var heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroTableById.getValue(sortHeros[i].itemId);
            var heroClass = heroTab.Class;

            if (!this._heroList.get(heroClass)) {
              this._heroList.set(heroClass, [sortHeros[i].id]);
            } else {
              var heroListClassArr = this._heroList.get(heroClass);

              heroListClassArr.push(sortHeros[i].id);
            }

            if (!this._heroList.get((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroClass.HeroClass_Max)) {
              this._heroList.set((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).HeroClass.HeroClass_Max, [sortHeros[i].id]);
            } else {
              var heroListAllArr = this._heroList.get((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).HeroClass.HeroClass_Max);

              heroListAllArr.push(sortHeros[i].id);
            }
          }

          var bookArr = [];

          for (var j = 0; j < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroTable.length; j++) {
            var _bookId = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroTable[j].Id;
            bookArr.push(_bookId);

            if ((_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
              error: Error()
            }), HeroData) : HeroData).ins.getByItemId(_bookId)) {
              this.book_have_count++;
            }
          }

          bookArr.sort((hero1, hero2) => {
            var itemTab1 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(hero1);
            var itemTab2 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(hero2);
            return itemTab2.Sort - itemTab1.Sort;
          });

          if (this._bookList.size === 0) {
            for (var k = 0; k < bookArr.length; k++) {
              var bookHeroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().HeroTableById.getValue(bookArr[k]);
              var _heroClass = bookHeroTab.Class;

              if (!this._bookList.get(_heroClass)) {
                this._bookList.set(_heroClass, [bookArr[k]]);
              } else {
                var _heroListClassArr = this._bookList.get(_heroClass);

                _heroListClassArr.push(bookArr[k]);
              }

              if (!this._bookList.get((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).HeroClass.HeroClass_Max)) {
                this._bookList.set((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).HeroClass.HeroClass_Max, [bookArr[k]]);
              } else {
                var _heroListAllArr = this._bookList.get((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).HeroClass.HeroClass_Max);

                _heroListAllArr.push(bookArr[k]);
              }
            }
          }

          if (!this.heroId) {
            this.heroId = sortHeros[0].id;
          } else {
            this.refreshData(this.heroId);
          }
        }

        refreshData(id) {
          this.heroId = id;

          var heroListData = this._heroList.get(this._heroClassType);

          if (id === 0) {
            this.heroId = heroListData[0];
            this._idx = 0;
            return;
          }

          for (var i = 0; i < heroListData.length; i++) {
            var heroId = heroListData[i];

            if (id.equals(heroId)) {
              this._idx = i;
            }
          }
        }

        getHeroIndexById(arr, heroId) {
          for (var i = 0; i < arr.length; i++) {
            var id = arr[i];

            if (id.equals(heroId)) {
              return i;
            }
          }

          return -1;
        }
        /* 刷新上陣英雄排序 */


        refreshTeamBagData(heroId) {
          var teamSort = [2, 1, 4, 3, 5];
          var heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getById(heroId);
          var heroClass = heroInfo.heroTable.Class;

          var allList = this._heroList.get((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Max);

          var classList = this._heroList.get(heroClass);

          var teamInfo = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getHeroByClass(heroClass);

          if (!teamInfo) {
            (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
              error: Error()
            }), HeroTeamControl) : HeroTeamControl).ins.refreshTeam(heroId);
            teamInfo = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
              error: Error()
            }), HeroTeamControl) : HeroTeamControl).ins.getHeroByClass(heroClass);
          }
          /* 转换classList */


          var classIndex = this.getHeroIndexById(classList, heroId);
          var classTemp = classList[0];
          classList[0] = heroId;

          if (teamInfo.id) {
            classList[classIndex] = classTemp;
          }
          /* 转换AllList */


          var allTeamIndex = this.getHeroIndexById(allList, teamInfo.id);
          var alIndex = this.getHeroIndexById(allList, heroId);

          if (allTeamIndex < 0) {
            var index = teamSort.indexOf(heroClass);
            allList[index] = heroId;
          } else {
            var allTemp = allList[allTeamIndex];
            allList[allTeamIndex] = heroId;
            allList[alIndex] = allTemp;
          }
        }

        refreshBookData(id) {
          this.bookId = id;

          var bookListData = this._bookList.get(this._bookClassType);

          for (var i = 0; i < bookListData.length; i++) {
            var bookId = bookListData[i];

            if (bookId == id) {
              this._book_idx = i;
            }
          }
        } // /* 获取背包英雄列表数据 */
        // getHeroListDataById(id: number) : proto.Hero{
        //     // const heroListData = 
        //     for (let i = 0; i < this._heroList.get.length; i++) {
        //         let heroId = this._heroList[i].id
        //         if (heroId.equals(id)) {
        //             return this._heroList[i];
        //         }
        //     }
        // }

        /* 展示下一个英雄 */


        NextHero(isTeam) {
          if (this.bookId) {
            this._book_idx++;
            var classType = this._bookClassType;

            var bookListData = this._bookList.get(classType);

            if (this._book_idx > bookListData.length - 1) {
              this._book_idx = 0;
            }

            this.bookId = bookListData[this._book_idx];
          } else {
            if (isTeam) {
              var teamSlots = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
                error: Error()
              }), HeroTeamControl) : HeroTeamControl).ins.getTeam();
              var index = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
                error: Error()
              }), HeroTeamControl) : HeroTeamControl).ins.getTeamIndexById(this.heroId);
              index++;

              if (index > teamSlots.length - 1) {
                index = 0;
              }

              this.heroId = teamSlots[index].heroId;
            } else {
              var _classType = this._heroClassType;

              var heroListData = this._heroList.get(_classType);

              this._idx++;

              if (this._idx > heroListData.length - 1) {
                this._idx = 0;
              }

              this.heroId = heroListData[this._idx];
            }
          }
        }

        LastHero(isTeam) {
          if (this.bookId) {
            var classType = this._bookClassType;
            this._book_idx--;

            var bookListData = this._bookList.get(classType);

            if (this._book_idx < 0) {
              this._book_idx = bookListData.length - 1;
            }

            this.bookId = bookListData[this._book_idx];
          } else {
            if (isTeam) {
              var teamSlots = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
                error: Error()
              }), HeroTeamControl) : HeroTeamControl).ins.getTeam();
              var index = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
                error: Error()
              }), HeroTeamControl) : HeroTeamControl).ins.getTeamIndexById(this.heroId);
              index--;

              if (index < 0) {
                index = teamSlots.length - 1;
              }

              this.heroId = teamSlots[index].heroId;
            } else {
              var _classType2 = this._heroClassType;

              var heroListData = this._heroList.get(_classType2);

              this._idx--;

              if (this._idx < 0) {
                this._idx = heroListData.length - 1;
              }

              this.heroId = heroListData[this._idx];
            }
          }
        }
        /* 英雄排序 */


        sortHeroList(heros) {
          // 先判断是否在team里面
          var teamHeros = [];
          var noTeamHeros = [];
          var temaData = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getTeam();

          for (var i = 0; i < temaData.length; i++) {
            if (temaData[i].heroId) {
              var teamHeroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
                error: Error()
              }), HeroData) : HeroData).ins.getById(temaData[i].heroId);
              teamHeros.push(teamHeroInfo);
            }
          }

          for (var _i = 0; _i < heros.length; _i++) {
            var hero = heros[_i];

            if (hero === null) {
              continue;
            }

            if ((_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
              error: Error()
            }), HeroTeamControl) : HeroTeamControl).ins.heroInTeam(hero.id)) {// teamHeros.push(hero)
            } else {
              noTeamHeros.push(hero);
            }
          } // teamHeros.sort(this.sortFunc);


          noTeamHeros.sort(this.sortFunc);
          return teamHeros.concat(noTeamHeros);
        }
        /* 排序方法 */


        sortFunc(hero1, hero2) {
          var hero1Info = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getById(hero1.id);
          var hero2Info = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getById(hero2.id);
          return hero2Info.powerScore - hero1Info.powerScore; // if (hero1Info.star !== hero2Info.star) {
          //     return hero1.star - hero2Info.star;
          // }
          // return hero1Info.itemTable.Sort - hero2Info.itemTable.Sort;
        }
        /* 根据职业返回list */


        getHeroListByVocation(vocationType) {
          this._heroClassType = vocationType;
          return this._heroList.get(vocationType);
        }
        /* 根据职业返回list */


        getBookHeroListByVocation(vocationType) {
          this._bookClassType = vocationType;
          return this._bookList.get(vocationType);
        }
        /* 返回一键升星的列表 */


        getOneClickList() {
          var _this = this;

          this._starUpMap.clear();

          var allList = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getHeros();
          /* 可以升星的重组一个数组 条件 只能是优的英雄 */

          var map = new Map();

          var _loop = function _loop() {
            var heroInfo = allList[i];

            if (map.get(heroInfo.id)) {
              return 1; // continue
            }

            if (heroInfo.heroTable.Aptitude === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroAptitude.HeroAptitude_R) {
              var materialArr = [];
              var sameIdHeros = heroInfo.getHerosByType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).HeroStarUpType.HeroStarUpType_SameNameHero);
              map.set(heroInfo.id, true);
              sameIdHeros.map.forEach((value, key) => {
                map.set(key, true);
                materialArr.push(value);
              });
              var sameClassHeros = heroInfo.getHerosByType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).HeroStarUpType.HeroStarUpType_SameClassHero);
              sameClassHeros.map.forEach((value, key) => {
                map.set(key, true);
                materialArr.push(value);
              });

              if (sameIdHeros.map.size >= sameIdHeros.needCount && sameClassHeros.map.size >= sameClassHeros.needCount) {
                if (materialArr.length > 0) {
                  _this._starUpMap.set(heroInfo.id, materialArr);
                }
              }
            }
          };

          for (var i = 0; i < allList.length; i++) {
            if (_loop()) continue;
          }

          return this._starUpMap;
        }
        /* 返回所有可以遣散的英雄 */


        getAllResolveHeros() {
          this._ResolveHerosMap.clear();

          var allList = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getHeros();

          for (var i = 0; i < allList.length; i++) {
            var heroInfo = allList[i];

            if (heroInfo.heroTable.Aptitude === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroAptitude.HeroAptitude_N && !(_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
              error: Error()
            }), HeroTeamControl) : HeroTeamControl).ins.heroInTeam(heroInfo.id)) {
              this._ResolveHerosMap.set(heroInfo.id, heroInfo);
            }
          }

          return this._ResolveHerosMap;
        }
        /* 通过星级返回其品质 */


        getItemQualityTableByStar(star) {
          for (var i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemQualityTable.length; i++) {
            var dataTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemQualityTable[i];

            for (var j = 0; j < dataTab.HeroStar.length; j++) {
              if (dataTab.HeroStar[j] === star) {
                return dataTab;
              }
            }
          }

          return null;
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0adeb35643da0640b13bde1611e9eea5b44c2398.js.map