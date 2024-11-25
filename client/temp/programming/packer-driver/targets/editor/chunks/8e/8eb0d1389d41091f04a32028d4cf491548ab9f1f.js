System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, ProgressBar, GameUtil, handleNumerText, ViewName, UIMgr, GameplayControl, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, EveryDayChallengeBoxItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhandleNumerText(extras) {
    _reporterNs.report("handleNumerText", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameplayControl(extras) {
    _reporterNs.report("GameplayControl", "../GameplayControl", _context.meta, extras);
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
      handleNumerText = _unresolved_2.handleNumerText;
    }, function (_unresolved_3) {
      ViewName = _unresolved_3.ViewName;
    }, function (_unresolved_4) {
      UIMgr = _unresolved_4.UIMgr;
    }, function (_unresolved_5) {
      GameplayControl = _unresolved_5.GameplayControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1b057gY1oBGjr18um117EWN", "EveryDayChallengeBoxItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'Label', 'Node', 'ProgressBar']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * EveryDayChallengeBoxItem
       * zhudingchao
       * Wed Jul 10 2024 15:07:38 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/jianghu/everyDayChallenge/EveryDayChallengeBoxItem.ts
       *
       */

      _export("EveryDayChallengeBoxItem", EveryDayChallengeBoxItem = (_dec = ccclass('EveryDayChallengeBoxItem'), _dec2 = property(ProgressBar), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Node), _dec(_class = (_class2 = class EveryDayChallengeBoxItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "scoreBar", _descriptor, this);

          _initializerDefineProperty(this, "boxNode", _descriptor2, this);

          _initializerDefineProperty(this, "openBoxNode", _descriptor3, this);

          _initializerDefineProperty(this, "boxScoreLab", _descriptor4, this);

          _initializerDefineProperty(this, "cangetNode", _descriptor5, this);

          this.lastScore = void 0;
          this.totalScore = void 0;
          this.dropId = void 0;
          this.isCanReceive = false;
          this.rewards = void 0;
        }

        initView(lastScore, totalScore, currScore, dropId, isReceive) {
          this.rewards = null;
          this.lastScore = lastScore;
          this.totalScore = totalScore;
          this.dropId = dropId;
          this.updateView(currScore, isReceive); // this.scoreBar.progress=progress;

          this.boxScoreLab.string = (_crd && handleNumerText === void 0 ? (_reportPossibleCrUseOfhandleNumerText({
            error: Error()
          }), handleNumerText) : handleNumerText)(totalScore);
        }

        updateView(currScore, isReceive) {
          this.openBoxNode.active = isReceive;
          this.boxNode.active = !isReceive;
          this.isCanReceive = false;

          if (isReceive) {
            this.scoreBar.progress = 1;
            this.cangetNode.active = false;
          } else {
            if (currScore <= this.lastScore) {
              this.scoreBar.progress = 0;
              this.cangetNode.active = false;
              this.isCanReceive = false;
            } else if (currScore >= this.totalScore) {
              this.scoreBar.progress = 1;
              this.cangetNode.active = true;
              this.isCanReceive = true;
            } else {
              let progress = (currScore - this.lastScore) / (this.totalScore - this.lastScore);
              this.scoreBar.progress = progress;
              this.cangetNode.active = false;
              this.isCanReceive = false;
            }
          }
        }

        onClickItem(event) {
          if (!this.isCanReceive) {
            if (!this.rewards) {
              this.rewards = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
                error: Error()
              }), GameUtil) : GameUtil).getRewardsByDropId(this.dropId);
            }

            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).CommonBoxTipsPop,
              data: {
                "worldPos": event.target.worldPosition,
                "rewadInfos": this.rewards
              }
            });
          } else {
            (_crd && GameplayControl === void 0 ? (_reportPossibleCrUseOfGameplayControl({
              error: Error()
            }), GameplayControl) : GameplayControl).ins.requestDailyChallengeReward();
          } // let rewads=[];
          // for(let key in this.table.ItemId){
          //     let itemInfo=new ItemInfo();
          //     itemInfo.initItemData(this.table.ItemId[key],this.table.ItemNum[key]);
          //     rewads.push(itemInfo);
          // }
          //  UIMgr.ins.show({viewName:ViewName.CommonBoxTipsPop,data:{"worldPos":this.node.worldPosition,"rewadInfos":rewads,"isDown":true}})

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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "cangetNode", [_dec6], {
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
//# sourceMappingURL=8eb0d1389d41091f04a32028d4cf491548ab9f1f.js.map