System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Label, Node, ProgressBar, Sprite, tween, tab, UIMgr, ViewName, RareBookData, BuffControl, AbsObjType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, FightWeaponTeamItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRogueInfo(extras) {
    _reporterNs.report("RogueInfo", "../rogue/RogueInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookData(extras) {
    _reporterNs.report("RareBookData", "../../../model/rareBook/RareBookData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffControl(extras) {
    _reporterNs.report("BuffControl", "../../base/buff/BuffControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjType(extras) {
    _reporterNs.report("AbsObjType", "../../base/obj/AbsObj", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      UIMgr = _unresolved_3.UIMgr;
    }, function (_unresolved_4) {
      ViewName = _unresolved_4.ViewName;
    }, function (_unresolved_5) {
      RareBookData = _unresolved_5.RareBookData;
    }, function (_unresolved_6) {
      BuffControl = _unresolved_6.BuffControl;
    }, function (_unresolved_7) {
      AbsObjType = _unresolved_7.AbsObjType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dd29cOOFQlP9J2T3pSpTqc2", "FightWeaponTeamItem", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Color', 'Component', 'Label', 'Node', 'Prefab', 'ProgressBar', 'Sprite', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FightWeaponTeamItem", FightWeaponTeamItem = (_dec = ccclass('FightWeaponTeamItem'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(Button), _dec7 = property(Sprite), _dec8 = property(Node), _dec9 = property(ProgressBar), _dec10 = property(Label), _dec(_class = (_class2 = class FightWeaponTeamItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "baseNode", _descriptor, this);

          _initializerDefineProperty(this, "blackNode", _descriptor2, this);

          _initializerDefineProperty(this, "qualityImg", _descriptor3, this);

          _initializerDefineProperty(this, "iconImg", _descriptor4, this);

          _initializerDefineProperty(this, "btn", _descriptor5, this);

          _initializerDefineProperty(this, "bookPlaysSpr", _descriptor6, this);

          _initializerDefineProperty(this, "lookNode", _descriptor7, this);

          _initializerDefineProperty(this, "cdBar", _descriptor8, this);

          _initializerDefineProperty(this, "buffNumberLab", _descriptor9, this);

          this.info = void 0;
          this.bookId = 0;
        }

        onLoad() {
          this.buffNumberLab.node.active = false;
          this.buffNumberLab.string = "";
        }

        setData(info, isTouch) {
          if (isTouch === void 0) {
            isTouch = false;
          }

          this.info = info;
          this.btn.enabled = isTouch;

          if (info == null) {
            this.blackNode.active = true;
            this.baseNode.active = !this.blackNode.active;
            return;
          }

          this.blackNode.active = false;
          this.baseNode.active = !this.blackNode.active;
          var itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(info.rogueTab.BookId);
          var bookTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BookTableById.getValue(info.rogueTab.BookId);
          this.iconImg.setTexture(itemTab.Icon);
          this.qualityImg.setTexture("textrue/quality/qualityBg_" + itemTab.Quality);
          this.bookPlaysSpr.node.active = bookTab.PlaystyleName != "";

          if (bookTab.PlaystyleName != "") {
            this.bookPlaysSpr.setTexture(bookTab.PlaystyleName);
          }

          this.buffNumberLab.node.active = false;
          var idlist = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().FinalBuffId;

          for (var i = 0; i < idlist.length; i++) {
            var rogueId = idlist[i];
            var buffid = idlist[i + 1]; //指定id显示一个buff层数共享

            if (info.Id == rogueId) {
              var num = (_crd && BuffControl === void 0 ? (_reportPossibleCrUseOfBuffControl({
                error: Error()
              }), BuffControl) : BuffControl).ins.getBuffNumByObjTypeAndBuffId((_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
                error: Error()
              }), AbsObjType) : AbsObjType).role, buffid);

              if (num > 0) {
                this.buffNumberLab.node.active = true;
                this.buffNumberLab.string = num.toString();
              }
            }

            i++;
          }
        }

        onClickItem() {
          var bookId = 0;

          if (this.info && this.info.rogueTab && this.info.rogueTab.BookId) {
            bookId = this.info.rogueTab.BookId;
          } else {
            bookId = this.bookId;
          }

          if (bookId == 0) {
            return;
          }

          var bookInfo = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
            error: Error()
          }), RareBookData) : RareBookData).ins.getBookInfoByItemId(bookId);
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).RareBookInfoItemPop,
            data: {
              "bookInfo": bookInfo
            }
          }); // UIMgr.ins.show({ viewName: ViewName.HeroSkillPop,data: {
          //     type:this._type,
          //     heroInfo:this._heroInfo
          // },zIndex:300})
        }

        /** pvp 0未设置， -1未解锁 */
        setBookId(bookId) {
          this.bookId = bookId;

          if (bookId <= 0) {
            this.blackNode.active = true;
            this.baseNode.active = !this.blackNode.active;
            this.lookNode.active = bookId == -1;
            return;
          }

          this.blackNode.active = false;
          this.baseNode.active = !this.blackNode.active;
          this.btn.enabled = false;
          var itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(bookId);
          var bookTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BookTableById.getValue(bookId);
          this.iconImg.setTexture(itemTab.Icon);
          this.qualityImg.setTexture("textrue/quality/qualityBg_" + itemTab.Quality);
          this.bookPlaysSpr.node.active = bookTab.PlaystyleName != "";

          if (bookTab.PlaystyleName != "") {
            this.bookPlaysSpr.setTexture(bookTab.PlaystyleName);
          }

          this.cdBar.node.active = true;
          this.cdBar.progress = 1;
        }

        activeBook() {
          if (this.bookId > 0) {
            tween(this.cdBar).to(0.2, {
              progress: 0
            }).start();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "baseNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "blackNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "qualityImg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "iconImg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bookPlaysSpr", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lookNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "cdBar", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "buffNumberLab", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=51a3e4ae212acdfcd1008c5b0a8a623532812c4c.js.map