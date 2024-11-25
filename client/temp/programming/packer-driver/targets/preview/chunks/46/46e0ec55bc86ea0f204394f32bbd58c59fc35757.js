System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, error, log, RareBookInfo, RoleData, tab, ItemData, RareBookSlotInfo, RareBookSerieInfo, RedMgr, RedDotType, RareBookControl, EventMgr, LocalEvent, Func, _dec, _class, _class2, _crd, ccclass, property, RareBookData;

  function _reportPossibleCrUseOfIClear(extras) {
    _reporterNs.report("IClear", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookInfo(extras) {
    _reporterNs.report("RareBookInfo", "./RareBookInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookSlotInfo(extras) {
    _reporterNs.report("RareBookSlotInfo", "./RareBookSlotInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookSerieInfo(extras) {
    _reporterNs.report("RareBookSerieInfo", "./RareBookSerieInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLong(extras) {
    _reporterNs.report("Long", "protobufjs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookControl(extras) {
    _reporterNs.report("RareBookControl", "./RareBookControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../utils/Func", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      error = _cc.error;
      log = _cc.log;
    }, function (_unresolved_2) {
      RareBookInfo = _unresolved_2.RareBookInfo;
    }, function (_unresolved_3) {
      RoleData = _unresolved_3.RoleData;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      ItemData = _unresolved_5.ItemData;
    }, function (_unresolved_6) {
      RareBookSlotInfo = _unresolved_6.RareBookSlotInfo;
    }, function (_unresolved_7) {
      RareBookSerieInfo = _unresolved_7.RareBookSerieInfo;
    }, function (_unresolved_8) {
      RedMgr = _unresolved_8.RedMgr;
    }, function (_unresolved_9) {
      RedDotType = _unresolved_9.RedDotType;
    }, function (_unresolved_10) {
      RareBookControl = _unresolved_10.RareBookControl;
    }, function (_unresolved_11) {
      EventMgr = _unresolved_11.EventMgr;
    }, function (_unresolved_12) {
      LocalEvent = _unresolved_12.LocalEvent;
    }, function (_unresolved_13) {
      Func = _unresolved_13.Func;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b4695MCe1FBJ5isd8kYDQfH", "RareBookData", undefined);

      __checkObsolete__(['_decorator', 'Component', 'error', 'log', 'Node', 'ValueType']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * RareBookData
       * zhudingchao
       * Wed May 22 2024 15:26:54 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/rareBook/RareBookData.ts
       *
       */

      _export("RareBookData", RareBookData = (_dec = ccclass('RareBookData'), _dec(_class = (_class2 = class RareBookData {
        constructor() {
          this.bookMap = void 0;
          this.bookSerieMap = void 0;
          this.bookLevelMap = void 0;
          this.bookStarMap = void 0;
          this.bookAdvanceMap = void 0;
          this.bookContainerMap = void 0;
          this.bookBaseMap = void 0;
          this.bookFragmentMap = void 0;
          this.bookSerieInfoMap = void 0;
          this.bookSerieGroupMap = void 0;
          this.bookDicTabMap = void 0;
          this._powerScore = 0;
          this.bookCollectRedPointId = "";
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new RareBookData();
          }

          return this._instance;
        }

        purge() {}

        initBookData() {
          this.bookMap = new Map();
          var data = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.book;
          log("武器==", data);
          this.powerScore = data.powerScore;
          var list = data.equipList;
          var maxStarMap = new Map();
          var starTabs = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BookStarTable;

          for (var key in starTabs) {
            var booId = starTabs[key].BookId;

            if (!maxStarMap.has(booId)) {
              maxStarMap.set(booId, starTabs[key].Level);
            } else {
              if (maxStarMap.get(booId) < starTabs[key].Level) {
                maxStarMap.set(booId, starTabs[key].Level);
              }
            }
          }

          for (var _key in list) {
            var info = new (_crd && RareBookInfo === void 0 ? (_reportPossibleCrUseOfRareBookInfo({
              error: Error()
            }), RareBookInfo) : RareBookInfo)();
            info.merge(list[_key]);
            this.bookMap.set(info.itemId, info);
            info.maxStar = maxStarMap.get(info.itemId);
          }

          var tables = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BookTable;

          for (var _key2 in tables) {
            if (!this.bookMap.has(tables[_key2].Id)) {
              var _info = new (_crd && RareBookInfo === void 0 ? (_reportPossibleCrUseOfRareBookInfo({
                error: Error()
              }), RareBookInfo) : RareBookInfo)();

              _info.initItemId(tables[_key2].Id);

              this.bookMap.set(_info.itemId, _info);
              _info.maxStar = maxStarMap.get(_info.itemId);
            }
          }

          this.bookSerieMap = new Map();
          this.bookSerieGroupMap = new Map();
          var tabs = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BookSeriesTable;

          for (var value of tabs) {
            if (value.Id == value.GroupId) for (var itemId of value.BookId) {
              this.bookSerieMap.set(itemId, value);
            }
            this.bookSerieGroupMap.set(value.GroupId, value);
          }

          this.bookSerieInfoMap = new Map();
          var seriesData = data.seriesData;

          for (var _key3 in seriesData) {
            var _info2 = new (_crd && RareBookSerieInfo === void 0 ? (_reportPossibleCrUseOfRareBookSerieInfo({
              error: Error()
            }), RareBookSerieInfo) : RareBookSerieInfo)();

            _info2.merge(seriesData[_key3]);

            this.bookSerieInfoMap.set(_info2.id, _info2);
          }

          this.initContainerMap();
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Weapon_Job_Archer);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Weapon_Job_Assassin);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Weapon_Job_Priest);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Weapon_Job_Caster);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Weapon_Job_Warrior);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).BooK_Equip);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Book_Job);
          this.updateBookCollectRedPoint();
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Book_collect);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Weapon_recovery);
        }

        initBookLevelMap() {
          this.bookLevelMap = new Map();
          var tabs = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BookLevelTable;

          for (var key in tabs) {
            var str = tabs[key].Aptitude + "_" + tabs[key].Class + "_" + tabs[key].Level;
            this.bookLevelMap.set(str, tabs[key]);
          }
        }

        initBookStarMap() {
          this.bookStarMap = new Map();
          var tabs = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BookStarTable;

          for (var key in tabs) {
            var str = tabs[key].BookId + "_" + tabs[key].Level;
            this.bookStarMap.set(str, tabs[key]);
          }
        }

        initBookAdvanceMap() {
          this.bookAdvanceMap = new Map();
          this.bookBaseMap = new Map();
          this.bookDicTabMap = new Map();
          var tabs = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BookDictionary;

          for (var key in tabs) {
            var t = tabs[key];

            for (var k2 in t.PhaseThreeBook) {
              this.bookAdvanceMap.set(t.PhaseThreeBook[k2], t.PhaseTwoBook[k2]);
              this.bookAdvanceMap.set(t.PhaseTwoBook[k2], t.PhaseOneBook);
            }

            var info = this.getBookInfoByItemId(t.PhaseOneBook);
            this.bookBaseMap.set(info.bookTable.Class, info);
            this.bookDicTabMap.set(info.bookTable.Class, t);
          }
        }

        initContainerMap() {
          this.bookContainerMap = new Map();
          var bookSlots = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BookSlotTable;

          for (var key in bookSlots) {
            var table = bookSlots[key];
            var list = this.bookContainerMap.get(table.Class);

            if (!list) {
              list = [];
              this.bookContainerMap.set(table.Class, list);
            }

            var info = new (_crd && RareBookSlotInfo === void 0 ? (_reportPossibleCrUseOfRareBookSlotInfo({
              error: Error()
            }), RareBookSlotInfo) : RareBookSlotInfo)();
            info.bookSlotTable = table;
            list.push(info);
          } // this.bookContainerMap.forEach((value) => {
          //     value.sort((a, b) => {
          //         return a.bookSlotTable.Slot - b.bookSlotTable.Slot;
          //     })
          // })


          var container = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.book.containerList;

          for (var _key4 in container) {
            var c = container[_key4].heroClass;

            var _list = this.bookContainerMap.get(c);

            var slotData = container[_key4].slotData;

            for (var i = 1; i < slotData.length; i++) {
              _list[i - 1].bookId = slotData[i].bookId;

              if (Number(slotData[i].bookId) != 0) {
                var bookInfo = this.getBookInfoById(slotData[i].bookId);

                if (bookInfo) {
                  bookInfo.isWear = true;
                  _list[i - 1].bookInfo = bookInfo;
                }
              }
            }
          }
        }

        initBookFragmentMap() {
          this.bookFragmentMap = new Map();
          var tables = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BookFragmentTable;

          for (var key in tables) {
            this.bookFragmentMap.set(tables[key].BookId, tables[key]);
          }
        }

        set powerScore(num) {
          this._powerScore = num;
        }

        get powerScore() {
          return this._powerScore;
        }

        addBooks(books) {
          for (var key in books) {
            // let info=new RareBookInfo();
            var info = this.bookMap.get(books[key].itemId);
            info.merge(books[key]);

            if (info.bookTable.Aptitude == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroAptitude.HeroAptitude_SR) {
              (_crd && RareBookControl === void 0 ? (_reportPossibleCrUseOfRareBookControl({
                error: Error()
              }), RareBookControl) : RareBookControl).ins.refreshfTujianRedPoint(info.bookTable.Class);
            }

            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Book_Job);

            if (info.maxStar) {
              (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
                error: Error()
              }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
                error: Error()
              }), RedDotType) : RedDotType).Weapon_recovery);
            }
          }

          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).BooK_Equip);
        }

        updateBook(book) {
          var info = this.bookMap.get(book.itemId);

          if (info) {
            info.update(book);

            if (info.maxStar) {
              (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
                error: Error()
              }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
                error: Error()
              }), RedDotType) : RedDotType).Weapon_recovery);
            }
          } else {
            error("更新秘籍错误==", book);
          }
        }

        getBookLevelTable(aptitude, heroClass, level) {
          if (!this.bookLevelMap) {
            this.initBookLevelMap();
          }

          var key = aptitude + "_" + heroClass + "_" + level;
          return this.bookLevelMap.get(key);
        }

        getBoolStarTable(bookId, star) {
          if (!this.bookStarMap) {
            this.initBookStarMap();
          }

          var key = bookId + "_" + star;
          return this.bookStarMap.get(key);
        }

        getBookInfoById(id) {
          id = Number(id);
          var values = Array.from(this.bookMap.values());
          var info = values.find(a => Number(a.id) == id);
          return info;
        }

        getBookInfoByItemId(itemId) {
          // let values=Array.from(this.bookMap.values());
          // let info=values.find(a=>a.itemId==itemId);
          // if(!info){
          //     info=new RareBookInfo();
          //     info.initItemId(itemId);
          // }
          if (!itemId) {
            return;
          }

          if (this.bookMap == null) {
            this.bookMap = new Map();
          }

          if (this.bookMap) {
            if (this.bookMap.has(itemId)) {
              return this.bookMap.get(itemId);
            }

            var info = new (_crd && RareBookInfo === void 0 ? (_reportPossibleCrUseOfRareBookInfo({
              error: Error()
            }), RareBookInfo) : RareBookInfo)();
            info.initItemId(itemId);
            this.bookMap.set(itemId, info);
            return info;
          }

          return this.bookMap && this.bookMap.get(itemId);
        }
        /** 根据道具id查找是否已穿戴 */


        isWearByItemId(itemId) {
          var info = this.getBookInfoByItemId(itemId);

          if (info) {
            return info.isWear;
          }

          return false;
        }

        getBookInfos(isSort) {
          if (isSort === void 0) {
            isSort = false;
          }

          var values = Array.from(this.bookMap.values());

          if (isSort) {
            values.sort((a, b) => {
              if (a.isRedPoint && b.isRedPoint) {
                return b.bookTable.Aptitude - a.bookTable.Aptitude;
              }

              if (a.isRedPoint) {
                return -1;
              }

              if (b.isRedPoint) {
                return 1;
              }

              if (a.isLock && b.isLock) {
                return b.bookTable.Aptitude - a.bookTable.Aptitude;
              }

              if (a.isLock) {
                return -1;
              }

              if (b.isLock) {
                return 1;
              }

              return b.bookTable.Aptitude - a.bookTable.Aptitude;
            });
          }

          return values;
        }

        getBookSerieMap() {
          return this.bookSerieMap;
        }

        getSerieTableByBookId(bookId) {
          return this.bookSerieMap.get(bookId);
        }

        getSerieTableByGroupId(groupId) {
          return this.bookSerieGroupMap.get(groupId);
        }

        getSerieInfoById(id) {
          return this.bookSerieInfoMap.get(id);
        }

        getBookAdvanceId(bookId) {
          if (!this.bookAdvanceMap) {
            this.initBookAdvanceMap();
          }

          return this.bookAdvanceMap.get(bookId);
        }

        getBookDicTabByHeroClass(heroClass) {
          if (!this.bookDicTabMap) {
            this.initBookAdvanceMap();
          }

          return this.bookDicTabMap.get(heroClass);
        }
        /**
         * 获得可以转换的秘籍碎片
         */


        getExchangBookFragments() {
          var items = [];
          this.bookMap.forEach(value => {
            if (value.isMaxStar()) {
              var fragmentId = this.getBookFragmentByBookItemId(value.itemId).Id;
              var itemInfo = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
                error: Error()
              }), ItemData) : ItemData).ins.getByItemId(fragmentId);

              if (itemInfo && Number(itemInfo.num) > 0) {
                items.push(itemInfo);
              }
            }
          });
          return items;
        }

        getContainerMap() {
          return this.bookContainerMap;
        }

        getBookSlotsByHeroClass(heroClass) {
          return this.bookContainerMap.get(heroClass);
        }

        getCanBookInfosByHeroClass(heroClass) {
          var list = [];
          this.bookMap.forEach(value => {
            if (value.isLock && value.bookTable.Aptitude >= (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroAptitude.HeroAptitude_SR && !value.isWear && value.bookTable.Class == heroClass) {
              list.push(value);
            }
          });
          return list;
        }

        getBaseBookInfoByHeroClass(heroClass) {
          if (!this.bookBaseMap) {
            this.initBookAdvanceMap();
          }

          return this.bookBaseMap.get(heroClass);
        }

        getBookFragmentByBookItemId(bookItemId) {
          if (!this.bookFragmentMap) {
            this.initBookFragmentMap();
          }

          return this.bookFragmentMap.get(bookItemId);
        }

        updateBookSeriesData(datas) {
          for (var key in datas) {
            var info = this.getSerieInfoById(datas[key].id);

            if (info) {
              info.merge(datas[key]);
            } else {
              info = new (_crd && RareBookSerieInfo === void 0 ? (_reportPossibleCrUseOfRareBookSerieInfo({
                error: Error()
              }), RareBookSerieInfo) : RareBookSerieInfo)();
              info.merge(datas[key]);
              this.bookSerieInfoMap.set(info.id, info);
            }
          }

          this.updateBookCollectRedPoint();
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Book_collect);
        }

        updateSlotInfo(bookId, slotIndex, isWear) {
          if (isWear === void 0) {
            isWear = true;
          }

          var info = this.getBookInfoById(bookId);

          if (info) {
            var c = info.bookTable.Class;
            var cons = this.getBookSlotsByHeroClass(c);

            if (isWear) {
              cons[slotIndex - 1].bookId = bookId;
              cons[slotIndex - 1].bookInfo = info;
              info.isWear = true;
            } else {
              cons[slotIndex - 1].bookId = 0;
              cons[slotIndex - 1].bookInfo = null;
              info.isWear = false;
            }
          }
        } // 通过英雄类型获得已拥有的武器列表


        getBookInfosByHeroClass(heroClass) {
          var list = [];
          this.bookMap.forEach(book => {
            if (book.bookTable.Class == heroClass && book.isLock) {
              list.push(book);
            }
          });
          return list;
        }
        /**
         * 是否是三阶秘籍
         */


        getIsPhaseThreeBook() {}
        /**刷新秘籍是否可以升级和升星 */


        updateBookCanUpLevelAndStar() {
          if (!this.bookMap) {
            return;
          }

          this.bookMap.forEach(book => {
            book.updateCanStudy();
            book.updateCanUpStar();
          });
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Book_Job);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).updateBookRedPoint);
        }
        /**
         * 刷新并记录当前装备收藏红点
         */


        updateBookCollectRedPoint() {
          this.bookCollectRedPointId = "";
          this.bookSerieInfoMap.forEach(value => {
            var seriesTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().BookSeriesTableById.getValue(value.id);

            if (seriesTable) {
              var level = seriesTable.Level;
              seriesTable == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().BookSeriesTableById.getValue(seriesTable.GroupId);

              if (seriesTable.BookId.length == value.count) {
                var key = seriesTable.GroupId + "_" + level;
                var isRecord = Number((_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                  error: Error()
                }), Func) : Func).getItem("RareBook_CollectRed_" + key));

                if (!isRecord) {
                  this.bookCollectRedPointId = key;
                  return;
                }
              }
            }
          });
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=46e0ec55bc86ea0f204394f32bbd58c59fc35757.js.map