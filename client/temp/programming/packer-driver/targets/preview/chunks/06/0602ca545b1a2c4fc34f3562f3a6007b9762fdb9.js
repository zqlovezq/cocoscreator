System.register(["__unresolved_0", "cc", "client_protocol", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, proto, tab, RareBookData, ItemData, Func, RareBookControl, RedMgr, RedDotType, RoleData, _dec, _class, _crd, ccclass, property, RareBookInfo;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookData(extras) {
    _reporterNs.report("RareBookData", "./RareBookData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookControl(extras) {
    _reporterNs.report("RareBookControl", "./RareBookControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

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
      RareBookData = _unresolved_3.RareBookData;
    }, function (_unresolved_4) {
      ItemData = _unresolved_4.ItemData;
    }, function (_unresolved_5) {
      Func = _unresolved_5.Func;
    }, function (_unresolved_6) {
      RareBookControl = _unresolved_6.RareBookControl;
    }, function (_unresolved_7) {
      RedMgr = _unresolved_7.RedMgr;
    }, function (_unresolved_8) {
      RedDotType = _unresolved_8.RedDotType;
    }, function (_unresolved_9) {
      RoleData = _unresolved_9.RoleData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "508faq09VJBCbm0B8xCKV0E", "RareBookInfo", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * BareBookInfo
       * zhudingchao
       * Wed May 22 2024 15:32:38 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/rareBook/BareBookInfo.ts
       *
       */

      _export("RareBookInfo", RareBookInfo = (_dec = ccclass('RareBookInfo'), _dec(_class = class RareBookInfo extends (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto).BookData {
        constructor() {
          super(...arguments);
          this._bookTable = void 0;
          this._itemTable = void 0;
          this.isLock = false;
          this._isWear = false;
          this._bookLevelTable = void 0;
          this._bookStarTable = void 0;
          this._attrMap = void 0;
          this.maxStar = void 0;
          this._fragmentTable = void 0;
          this._isRedPoint = false;
          this._tujianRedPoint = false;
          this._isCanStudy = false;
          this._isCanUpStar = false;
          this._nextLevelTable = void 0;
          this.isMaxLevel = false;
        }

        merge(bookInfo) {
          for (var key in bookInfo) {
            this[key] = bookInfo[key];
          }

          this.isLock = true;
          var value = Number((_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).getItem("RareBook_RedPoint_" + (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.id + "_" + String(this.id)));

          if (value && value == 1) {
            this._isRedPoint = false;
          } else {
            this._isRedPoint = true;
          }

          var value2 = Number((_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).getItem("RareBook_tujianRedPoint_" + String(this.id)));

          if (value2 && value2 == 1) {
            this._tujianRedPoint = false;
          } else {
            this._tujianRedPoint = true;
          }

          this.updateCanStudy();
          this.updateCanUpStar();
        }

        initItemId(itemId) {
          this.itemId = itemId;
          this.star = 1;
          this.level = 0;
          this.isLock = false;
        }

        update(bookInfo) {
          if (bookInfo.level != this.level) {
            this.nextLevelTable = null;
          }

          for (var key in bookInfo) {
            this[key] = bookInfo[key];
          }

          this._bookLevelTable = null;
          this._bookStarTable = null;
          this._attrMap = null;
          this.updateCanStudy();
          this.updateCanUpStar();
        }

        initBookLevelTable() {
          this._bookLevelTable = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
            error: Error()
          }), RareBookData) : RareBookData).ins.getBookLevelTable(this.bookTable.Aptitude, this.bookTable.Class, this.level);
        }

        initBookStarTable() {
          this._bookStarTable = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
            error: Error()
          }), RareBookData) : RareBookData).ins.getBoolStarTable(this.itemId, this.star);
        }

        getAttrMapByLevelRatio(ratio, types, values) {
          if (types === void 0) {
            types = null;
          }

          if (values === void 0) {
            values = null;
          }

          var map = new Map();

          if (!types) {
            types = this.bookStarTable.AttrType;
          }

          if (!values) {
            values = this.bookStarTable.AttrValue;
          }

          for (var key in types) {
            var t = types[key];
            var v = Math.floor(values[key] * (10000 + ratio) / 10000);

            if (map.has(t)) {
              map.set(t, map.get(t) + v);
            } else {
              map.set(t, v);
            }
          }

          return map;
        }

        initAttrMap() {
          this._attrMap = this.getAttrMapByLevelRatio(this.level == 0 ? 0 : this.bookLevelTable.Ratio);
        }

        get fragmentTable() {
          if (!this._fragmentTable) {
            this._fragmentTable = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
              error: Error()
            }), RareBookData) : RareBookData).ins.getBookFragmentByBookItemId(this.itemId);
          }

          return this._fragmentTable;
        }

        get bookTable() {
          if (!this._bookTable) {
            this._bookTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().BookTableById.getValue(this.itemId);
          }

          return this._bookTable;
        }

        get itemTable() {
          if (!this._itemTable) {
            this._itemTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(this.itemId);
          }

          return this._itemTable;
        }

        get isWear() {
          return this._isWear;
        }

        set isWear(b) {
          this._isWear = b;
        }

        get bookLevelTable() {
          if (!this._bookLevelTable && this.level > 0) {
            this.initBookLevelTable();
          }

          return this._bookLevelTable;
        }

        get bookStarTable() {
          if (!this._bookStarTable) {
            this.initBookStarTable();
          }

          return this._bookStarTable;
        }

        get levelRatio() {
          return this.bookLevelTable ? this.bookLevelTable.Ratio : 0;
        }

        get attrMap() {
          if (!this._attrMap) {
            this.initAttrMap();
          }

          return this._attrMap;
        }

        isLevelLimit() {
          return this.level >= this.bookStarTable.MaxLevel;
        }

        isMaxStar() {
          return this.star >= this.maxStar;
        }

        isCanActivate() {
          var curr = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount(this.fragmentTable.Id);
          return curr >= this.fragmentTable.Count;
        }

        get isRedPoint() {
          if (!this.isLock) {
            if (this.isCanActivate()) {
              return true;
            }

            return false;
          }

          return this._isRedPoint || this.isCanStudy || this.isCanUpStar;
        }

        set isRedPoint(b) {
          this._isRedPoint = b;

          if (b == false && this.isLock) {
            (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
              error: Error()
            }), Func) : Func).setItem("RareBook_RedPoint_" + (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.id + "_" + String(this.id), 1); // if(!this.isCanStudy&&!this.isCanUpStar){

            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Book_Job); // }
          }
        }

        get firstLookRed() {
          return this._isRedPoint;
        }

        get tujianRedPoint() {
          if (!this.isLock) {
            return false;
          }

          return this._tujianRedPoint;
        }

        set tujianRedPoint(b) {
          this._tujianRedPoint = b;

          if (b == false && this.isLock) {
            (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
              error: Error()
            }), Func) : Func).setItem("RareBook_tujianRedPoint_" + String(this.id), 1);
            (_crd && RareBookControl === void 0 ? (_reportPossibleCrUseOfRareBookControl({
              error: Error()
            }), RareBookControl) : RareBookControl).ins.refreshfTujianRedPoint(this.bookTable.Class);
          }
        }

        get nextLevelTable() {
          if (!this._nextLevelTable) {
            var nextLevel = this.level + 1;
            var nextLavelTable = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
              error: Error()
            }), RareBookData) : RareBookData).ins.getBookLevelTable(this.bookTable.Aptitude, this.bookTable.Class, nextLevel);
            this._nextLevelTable = nextLavelTable;

            if (this._nextLevelTable) {
              this.isMaxLevel = false;
            } else {
              this.isMaxLevel = true;
            }
          }

          return this._nextLevelTable;
        }

        set nextLevelTable(tab) {
          this._nextLevelTable = tab;
        }
        /**是否可以研习 */


        updateCanStudy() {
          var isCanStudy = this._isCanStudy;

          if (!this.isLock || this.isLevelLimit() || this.isMaxLevel || !this.nextLevelTable) {
            this._isCanStudy = false;
          } else {
            var itemid = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
              error: Error()
            }), ItemData) : ItemData).ins.isItemsEnoughByList(this.nextLevelTable.MaterialIdList, this.nextLevelTable.MaterialCountList);
            this._isCanStudy = itemid <= 0;
          }

          return isCanStudy != this._isCanStudy;
        }

        get isCanStudy() {
          return this._isCanStudy;
        }

        get isCanUpStar() {
          return this._isCanUpStar;
        }
        /**是否可以升星 */


        updateCanUpStar() {
          var isCanUpStar = this._isCanUpStar;

          if (this.bookStarTable && !this.isMaxStar()) {
            var id = this.bookStarTable.MaterialIdList[0];
            var needNum = this.bookStarTable.MaterialCountList[0];
            var currNum = Number((_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
              error: Error()
            }), ItemData) : ItemData).ins.getCount(id));

            if (this.itemTable.Quality >= (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().BookStarUniversalMaterialQuality) {
              var itemId = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().GetKeyValue_ConfigTable().BookStarUniversalMaterial;
              var currNum2 = Number((_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
                error: Error()
              }), ItemData) : ItemData).ins.getCount(itemId));
              currNum += currNum2;
            }

            if (needNum <= currNum) {
              this._isCanUpStar = true;
            } else {
              this._isCanUpStar = false;
            }
          } else {
            this._isCanUpStar = false;
          }

          return isCanUpStar != this._isCanUpStar;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0602ca545b1a2c4fc34f3562f3a6007b9762fdb9.js.map