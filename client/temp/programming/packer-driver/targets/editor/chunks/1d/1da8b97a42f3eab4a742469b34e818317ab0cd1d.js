System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "client_protocol"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Node, Prefab, Toggle, Vec2, tab, InfiniteList, RareBookData, FincaFightStageWeaponLayoutItem, EventMgr, LocalEvent, FincaFightBookToggle, FincaFightData, FincaFightTeamState, WeaponInfoItem, ButtonLock, moveZeroes, FincaFightControl, proto, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, FincaFightStageViewBook;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfiniteList(extras) {
    _reporterNs.report("InfiniteList", "../../../Common/InfiniteList/InfiniteList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookData(extras) {
    _reporterNs.report("RareBookData", "../rareBook/RareBookData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightStageWeaponLayoutItem(extras) {
    _reporterNs.report("FincaFightStageWeaponLayoutItem", "./FincaFightStageWeaponLayoutItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightBookToggle(extras) {
    _reporterNs.report("FincaFightBookToggle", "./FincaFightBookToggle", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightData(extras) {
    _reporterNs.report("FincaFightData", "./FincaFightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightTeamState(extras) {
    _reporterNs.report("FincaFightTeamState", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponInfoItem(extras) {
    _reporterNs.report("WeaponInfoItem", "../common/WeaponInfoItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfButtonLock(extras) {
    _reporterNs.report("ButtonLock", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmoveZeroes(extras) {
    _reporterNs.report("moveZeroes", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightControl(extras) {
    _reporterNs.report("FincaFightControl", "./FincaFightControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Toggle = _cc.Toggle;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      InfiniteList = _unresolved_3.default;
    }, function (_unresolved_4) {
      RareBookData = _unresolved_4.RareBookData;
    }, function (_unresolved_5) {
      FincaFightStageWeaponLayoutItem = _unresolved_5.FincaFightStageWeaponLayoutItem;
    }, function (_unresolved_6) {
      EventMgr = _unresolved_6.EventMgr;
    }, function (_unresolved_7) {
      LocalEvent = _unresolved_7.LocalEvent;
    }, function (_unresolved_8) {
      FincaFightBookToggle = _unresolved_8.FincaFightBookToggle;
    }, function (_unresolved_9) {
      FincaFightData = _unresolved_9.FincaFightData;
    }, function (_unresolved_10) {
      FincaFightTeamState = _unresolved_10.FincaFightTeamState;
    }, function (_unresolved_11) {
      WeaponInfoItem = _unresolved_11.WeaponInfoItem;
    }, function (_unresolved_12) {
      ButtonLock = _unresolved_12.ButtonLock;
      moveZeroes = _unresolved_12.moveZeroes;
    }, function (_unresolved_13) {
      FincaFightControl = _unresolved_13.FincaFightControl;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "37073jVG/JNb6zP81Qu/jJ1", "FincaFightStageViewBook", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'instantiate', 'Node', 'Prefab', 'Toggle', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FincaFightStageViewBook", FincaFightStageViewBook = (_dec = ccclass('FincaFightStageViewBook'), _dec2 = property(_crd && InfiniteList === void 0 ? (_reportPossibleCrUseOfInfiniteList({
        error: Error()
      }), InfiniteList) : InfiniteList), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property([_crd && FincaFightBookToggle === void 0 ? (_reportPossibleCrUseOfFincaFightBookToggle({
        error: Error()
      }), FincaFightBookToggle) : FincaFightBookToggle]), _dec6 = property(_crd && WeaponInfoItem === void 0 ? (_reportPossibleCrUseOfWeaponInfoItem({
        error: Error()
      }), WeaponInfoItem) : WeaponInfoItem), _dec7 = property(Node), _dec8 = (_crd && ButtonLock === void 0 ? (_reportPossibleCrUseOfButtonLock({
        error: Error()
      }), ButtonLock) : ButtonLock)(1, () => {}), _dec(_class = (_class2 = class FincaFightStageViewBook extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "list_books", _descriptor, this);

          _initializerDefineProperty(this, "pfb_book_item", _descriptor2, this);

          _initializerDefineProperty(this, "vocationToggleNode", _descriptor3, this);

          _initializerDefineProperty(this, "teamToggleArray", _descriptor4, this);

          _initializerDefineProperty(this, "WeaponInfoItem", _descriptor5, this);

          _initializerDefineProperty(this, "node_no_weapon", _descriptor6, this);

          this._list = [];
          this._vocationType = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Any;
          this._lineHeroCount = 4;
        }

        onLoad() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).Finca_Book_Change, this.teamBookChange, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.SetFincaBattleBookIdsRsp, this.on_s2c_SetFincaBattleBookIdsRsp, this);
        }

        teamBookChange(index) {
          this.teamToggleArray[index - 1].setData(index - 1);
          this.checkEmpty();
          this.showBookView(true);
          this.updateWeaponInfoItem();
        }

        checkEmpty() {
          const _emptyIndex = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.getBookEmptyIndex();

          if (_emptyIndex) {
            this.onClickTeamToggle(null, String(_emptyIndex));

            const _toggle = this.teamToggleArray[_emptyIndex - 1].node.getComponent(Toggle);

            _toggle.isChecked = true;
            (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
              error: Error()
            }), FincaFightData) : FincaFightData).ins.curSelectBook = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
              error: Error()
            }), FincaFightData) : FincaFightData).ins.bookIds[_emptyIndex - 1];
          }
        }

        initData() {
          for (let i = 0; i < this.teamToggleArray.length; i++) {
            const v = this.teamToggleArray[i];

            if (i === 0) {
              (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
                error: Error()
              }), FincaFightData) : FincaFightData).ins.BookToggleIndex = 1;
            }

            v.setData(i);
          }

          this._vocationType = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Any;

          const _toggle = this.vocationToggleNode.getChildByName("Toggle" + this._vocationType).getComponent(Toggle);

          _toggle.isChecked = true;
          this.checkEmpty();
          this.updateWeaponInfoItem();
          this.showBookView(true);
        }

        groupBookList() {
          const result = [];
          const bookList = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.getBookList().get(this._vocationType);

          for (let i = 0; i < bookList.length; i += this._lineHeroCount) {
            result.push(bookList.slice(i, i + this._lineHeroCount));
          }

          return result;
        }

        showBookView(isInit) {
          // 刷新背包列表
          this._list = this.groupBookList();

          if (isInit) {
            this.list_books.Init({
              getCellNumber: this.getCellCount.bind(this),
              getCellSize: this.getCellHeight.bind(this),
              getCellIdentifer: this.getCellIdentifer.bind(this),
              getCellView: this.getCellView.bind(this),
              getCellData: this.GetCellData.bind(this)
            });
          } else {
            this.list_books.Refresh();
          }

          this.list_books.scrollToOffset(new Vec2(0, 0), 1, true);
        }

        getCellCount() {
          return this._list.length;
        }

        getCellHeight() {
          return 150;
        }

        getCellIdentifer() {
          return "FincaFightStageWeaponLayoutItem";
        }

        getCellView() {
          return instantiate(this.pfb_book_item).getComponent(_crd && FincaFightStageWeaponLayoutItem === void 0 ? (_reportPossibleCrUseOfFincaFightStageWeaponLayoutItem({
            error: Error()
          }), FincaFightStageWeaponLayoutItem) : FincaFightStageWeaponLayoutItem);
        }

        GetCellData(idx) {
          return this._list[idx];
        }

        switchVocation(event, vocationType) {
          if (this._vocationType == Number(vocationType)) {
            return;
          }

          this._vocationType = Number(vocationType);
          this.showBookView(true);
        }

        onClickTeamToggle(event, curIndex) {
          if ((_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.BookToggleIndex === Number(curIndex)) {
            return;
          }

          if ((_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.getBookState(Number(curIndex)) === (_crd && FincaFightTeamState === void 0 ? (_reportPossibleCrUseOfFincaFightTeamState({
            error: Error()
          }), FincaFightTeamState) : FincaFightTeamState).LOCK) {
            const _toggle = this.teamToggleArray[(_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
              error: Error()
            }), FincaFightData) : FincaFightData).ins.BookToggleIndex - 1].node.getComponent(Toggle);

            _toggle.isChecked = true;
            return;
          }

          (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.BookToggleIndex = Number(curIndex);
          (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.curSelectBook = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.bookIds[(_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.BookToggleIndex - 1];
          this.updateWeaponInfoItem();
          this.showBookView(true);
        }

        updateWeaponInfoItem() {
          if ((_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.curSelectBook) {
            this.node_no_weapon.active = false;
            this.WeaponInfoItem.node.active = true;
            let bookInfo = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
              error: Error()
            }), RareBookData) : RareBookData).ins.getBookInfoByItemId((_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
              error: Error()
            }), FincaFightData) : FincaFightData).ins.curSelectBook);
            this.WeaponInfoItem.initData(bookInfo);
            this.WeaponInfoItem.setShowStar(bookInfo.bookTable.Aptitude == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroAptitude.HeroAptitude_SR);
          } else {
            this.node_no_weapon.active = true;
            this.WeaponInfoItem.node.active = false;
          }
        } // 请求保存阵容


        onClickSaveTeam() {
          (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.bookIds = (_crd && moveZeroes === void 0 ? (_reportPossibleCrUseOfmoveZeroes({
            error: Error()
          }), moveZeroes) : moveZeroes)((_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.bookIds);
          (_crd && FincaFightControl === void 0 ? (_reportPossibleCrUseOfFincaFightControl({
            error: Error()
          }), FincaFightControl) : FincaFightControl).ins.reqSetFincaBattleBookIds((_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.bookIds);
        }

        on_s2c_SetFincaBattleBookIdsRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;

          for (let i = 0; i < this.teamToggleArray.length; i++) {
            const v = this.teamToggleArray[i];

            if (i === 0) {
              (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
                error: Error()
              }), FincaFightData) : FincaFightData).ins.BookToggleIndex = 1;
            }

            v.setData(i);
          }

          this.checkEmpty();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "list_books", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pfb_book_item", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "vocationToggleNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "teamToggleArray", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "WeaponInfoItem", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_no_weapon", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "onClickSaveTeam", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "onClickSaveTeam"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1da8b97a42f3eab4a742469b34e818317ab0cd1d.js.map