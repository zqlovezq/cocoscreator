System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, Label, Node, ProgressBar, RichText, tab, LangMgr, ItemInfo, ItemPoolMgr, ActivityControl, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, HeroRoadItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityControl(extras) {
    _reporterNs.report("ActivityControl", "../ActivityControl", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
      RichText = _cc.RichText;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      LangMgr = _unresolved_3.LangMgr;
    }, function (_unresolved_4) {
      ItemInfo = _unresolved_4.ItemInfo;
    }, function (_unresolved_5) {
      ItemPoolMgr = _unresolved_5.ItemPoolMgr;
    }, function (_unresolved_6) {
      ActivityControl = _unresolved_6.ActivityControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "02651eXizZNB7QxV+DxjWgy", "HeroRoadItem", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Label', 'Node', 'ProgressBar', 'RichText']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * HeroRoadItem
       * zhudingchao
       * Mon Jun 24 2024 15:56:24 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/activity/heroRoad/HeroRoadItem.ts
       *
       */

      _export("HeroRoadItem", HeroRoadItem = (_dec = ccclass('HeroRoadItem'), _dec2 = property(RichText), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(ProgressBar), _dec9 = property(Label), _dec10 = property(Label), _dec(_class = (_class2 = class HeroRoadItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "titleRichText", _descriptor, this);

          _initializerDefineProperty(this, "faGuangNode", _descriptor2, this);

          _initializerDefineProperty(this, "rewardNode", _descriptor3, this);

          _initializerDefineProperty(this, "rewardBtnNode", _descriptor4, this);

          _initializerDefineProperty(this, "lockNode", _descriptor5, this);

          _initializerDefineProperty(this, "gotNode", _descriptor6, this);

          _initializerDefineProperty(this, "proBar", _descriptor7, this);

          _initializerDefineProperty(this, "currLab", _descriptor8, this);

          _initializerDefineProperty(this, "totalLab", _descriptor9, this);

          this.state = 0;
          this.table = void 0;
        }

        initView(table, state, progress) {
          this.table = table;
          let key = String((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroCollectionType[table.Type]);
          this.titleRichText.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString(key, [table.Params]);
          this.updateView(state, progress);
          let itemInfo = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
            error: Error()
          }), ItemInfo) : ItemInfo)();
          itemInfo.initItemData(table.ItemId, table.ItemCount);
          (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
            error: Error()
          }), ItemPoolMgr) : ItemPoolMgr).ins.createRewadItem(itemInfo, this.rewardNode);
        }

        updateView(state, progress) {
          this.state = state;
          this.faGuangNode.active = state == 1;
          this.rewardBtnNode.active = state == 1;
          this.lockNode.active = state != 2;
          this.gotNode.active = state == 2;

          if (progress > this.table.Params) {
            progress = this.table.Params;
          }

          if (this.lockNode.active) {
            this.proBar.progress = progress / this.table.Params;
            this.currLab.string = progress + "";
            this.totalLab.string = "/" + this.table.Params;
            let cStr = "";

            if (progress < this.table.Params) {
              cStr = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().GetKeyValue_ConfigTable().InterfaceTxtRed;
            } else {
              cStr = "ffffff";
            }

            this.currLab.color = new Color().fromHEX(cStr);
          }
        }

        onClickItem() {
          if (this.state == 1) {
            (_crd && ActivityControl === void 0 ? (_reportPossibleCrUseOfActivityControl({
              error: Error()
            }), ActivityControl) : ActivityControl).ins.requestGetHeroCollectionReward(this.table.Id);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "titleRichText", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "faGuangNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rewardNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rewardBtnNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lockNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "gotNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "proBar", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "currLab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "totalLab", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c9a5979f62e9984e7ed152f94c62b2c5352a28f7.js.map