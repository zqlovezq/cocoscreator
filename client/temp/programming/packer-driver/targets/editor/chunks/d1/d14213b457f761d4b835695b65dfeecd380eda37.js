System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, ProgressBar, GameUtil, UIMgr, ViewName, ItemInfo, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, TopWarDamageItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../../item/ItemInfo", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
    }, function (_unresolved_2) {
      GameUtil = _unresolved_2.GameUtil;
    }, function (_unresolved_3) {
      UIMgr = _unresolved_3.UIMgr;
    }, function (_unresolved_4) {
      ViewName = _unresolved_4.ViewName;
    }, function (_unresolved_5) {
      ItemInfo = _unresolved_5.ItemInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ee910pEbt9BQrBD4I7vh7A9", "TopWarDamageItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'ProgressBar']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * TopWarDamageItem
       * zhudingchao
       * Mon Jul 08 2024 15:36:09 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/jianghu/topWar/TopWarDamageItem.ts
       *
       */

      _export("TopWarDamageItem", TopWarDamageItem = (_dec = ccclass('TopWarDamageItem'), _dec2 = property(ProgressBar), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec(_class = (_class2 = class TopWarDamageItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "scoreBar", _descriptor, this);

          _initializerDefineProperty(this, "boxNode", _descriptor2, this);

          _initializerDefineProperty(this, "openBoxNode", _descriptor3, this);

          _initializerDefineProperty(this, "boxScoreLab", _descriptor4, this);

          this.table = void 0;
          this.lastScore = void 0;
        }

        initView(table, lastScore, currScore) {
          this.table = table;
          this.lastScore = lastScore;
          this.updateView(currScore); // this.scoreBar.progress=progress;

          this.boxScoreLab.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).convertNumber(table.Damage);
        }

        updateView(currScore) {
          let isReceive = currScore >= this.table.Damage;
          this.openBoxNode.active = isReceive;
          this.boxNode.active = !isReceive;

          if (isReceive) {
            this.scoreBar.progress = 1;
          } else {
            if (currScore <= this.lastScore) {
              this.scoreBar.progress = 0;
            } else {
              let progress = (currScore - this.lastScore) / (this.table.Damage - this.lastScore);
              this.scoreBar.progress = progress;
            }
          }
        }

        onClickItem() {
          let rewads = [];

          for (let key in this.table.ItemId) {
            let itemInfo = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
              error: Error()
            }), ItemInfo) : ItemInfo)();
            itemInfo.initItemData(this.table.ItemId[key], this.table.ItemNum[key]);
            rewads.push(itemInfo);
          }

          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).CommonBoxTipsPop,
            data: {
              "worldPos": this.node.worldPosition,
              "rewadInfos": rewads,
              "isDown": true
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scoreBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "boxNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "openBoxNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "boxScoreLab", [_dec5], {
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
//# sourceMappingURL=d14213b457f761d4b835695b65dfeecd380eda37.js.map