System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, WeaponItem, FincaFightData, FincaFightTeamState, ItemPoolMgr, RareBookData, ShowTips, LangMgr, _dec, _class, _crd, ccclass, property, FincaFightBookToggle;

  function _reportPossibleCrUseOfWeaponItem(extras) {
    _reporterNs.report("WeaponItem", "../common/WeaponItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightData(extras) {
    _reporterNs.report("FincaFightData", "./FincaFightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightTeamState(extras) {
    _reporterNs.report("FincaFightTeamState", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookData(extras) {
    _reporterNs.report("RareBookData", "../rareBook/RareBookData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      WeaponItem = _unresolved_2.WeaponItem;
    }, function (_unresolved_3) {
      FincaFightData = _unresolved_3.FincaFightData;
    }, function (_unresolved_4) {
      FincaFightTeamState = _unresolved_4.FincaFightTeamState;
    }, function (_unresolved_5) {
      ItemPoolMgr = _unresolved_5.ItemPoolMgr;
    }, function (_unresolved_6) {
      RareBookData = _unresolved_6.RareBookData;
    }, function (_unresolved_7) {
      ShowTips = _unresolved_7.ShowTips;
    }, function (_unresolved_8) {
      LangMgr = _unresolved_8.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "383f8VcRYZE1JK98csyzlHa", "FincaFightBookToggle", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FincaFightBookToggle", FincaFightBookToggle = (_dec = ccclass('FincaFightBookToggle'), _dec(_class = class FincaFightBookToggle extends Component {
        constructor(...args) {
          super(...args);
          this.emptyNode = null;
          this.lockNode = null;
          this.bookNode = null;
          this.selectNode = null;
          this.bookItem = null;
          this.curIndex = 0;
        }

        setData(index) {
          let bookId = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.bookIds[index];
          this.curIndex = index;
          this.emptyNode = this.node.getChildByName("empty_node");
          this.lockNode = this.node.getChildByName("lock_node");
          this.bookNode = this.node.getChildByName("item");
          this.selectNode = this.node.getChildByName("select_node");
          const state = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.getBookState(index + 1);
          this.emptyNode.active = state === (_crd && FincaFightTeamState === void 0 ? (_reportPossibleCrUseOfFincaFightTeamState({
            error: Error()
          }), FincaFightTeamState) : FincaFightTeamState).EMPTY;
          this.lockNode.active = state === (_crd && FincaFightTeamState === void 0 ? (_reportPossibleCrUseOfFincaFightTeamState({
            error: Error()
          }), FincaFightTeamState) : FincaFightTeamState).LOCK;
          this.bookNode.active = state === (_crd && FincaFightTeamState === void 0 ? (_reportPossibleCrUseOfFincaFightTeamState({
            error: Error()
          }), FincaFightTeamState) : FincaFightTeamState).BOOK;
          let bookInfo = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
            error: Error()
          }), RareBookData) : RareBookData).ins.getBookInfoByItemId(bookId);

          if (bookId) {
            if (!this.bookItem) {
              let bookItemNode = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                error: Error()
              }), ItemPoolMgr) : ItemPoolMgr).ins.createBookItem(bookInfo, this.bookNode);
              this.bookItem = bookItemNode.getComponent(_crd && WeaponItem === void 0 ? (_reportPossibleCrUseOfWeaponItem({
                error: Error()
              }), WeaponItem) : WeaponItem);
            } else {
              this.bookItem.initData(bookInfo, false, false);
            }
          }
        }

        setSelectState(isSelect) {
          this.selectNode.active = isSelect;
        }

        refreshItem(heroId) {// let heroInfo = HeroData.ins.getById(heroId);
          // this.heroItem.UpdateContent(heroInfo)
        }

        onClickLockBtn() {
          const level = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.getUnLockLevel(this.curIndex + 1, false);
          (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
            error: Error()
          }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("Tips_finca_3", [level]));
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=090482542389897b33c98d85966e4d61275e7651.js.map