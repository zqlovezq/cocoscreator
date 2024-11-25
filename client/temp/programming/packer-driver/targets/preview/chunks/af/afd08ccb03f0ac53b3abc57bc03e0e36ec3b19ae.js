System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Label, Node, Sprite, tab, LangMgr, ItemInfo, ItemPoolMgr, UIMgr, RedComp, RedEventComp, RedDotType, RedMgr, OpenFunctionMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, GameplayViewItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedComp(extras) {
    _reporterNs.report("RedComp", "../../../Common/component/RedComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedEventComp(extras) {
    _reporterNs.report("RedEventComp", "../../../Common/component/RedEventComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenFunctionMgr(extras) {
    _reporterNs.report("OpenFunctionMgr", "../../../Common/component/OpenFunctionMgr", _context.meta, extras);
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
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      LangMgr = _unresolved_3.LangMgr;
    }, function (_unresolved_4) {
      ItemInfo = _unresolved_4.ItemInfo;
    }, function (_unresolved_5) {
      ItemPoolMgr = _unresolved_5.ItemPoolMgr;
    }, function (_unresolved_6) {
      UIMgr = _unresolved_6.UIMgr;
    }, function (_unresolved_7) {
      RedComp = _unresolved_7.default;
    }, function (_unresolved_8) {
      RedEventComp = _unresolved_8.default;
    }, function (_unresolved_9) {
      RedDotType = _unresolved_9.RedDotType;
    }, function (_unresolved_10) {
      RedMgr = _unresolved_10.RedMgr;
    }, function (_unresolved_11) {
      OpenFunctionMgr = _unresolved_11.OpenFunctionMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b65c8udFwBIQp0sMMocgbGZ", "GameplayViewItem", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'EventTouch', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameplayViewItem", GameplayViewItem = (_dec = ccclass('GameplayViewItem'), _dec2 = property(Label), _dec3 = property(Sprite), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = class GameplayViewItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "lbl_name", _descriptor, this);

          _initializerDefineProperty(this, "sp_icon", _descriptor2, this);

          _initializerDefineProperty(this, "node_layout", _descriptor3, this);

          _initializerDefineProperty(this, "node_red", _descriptor4, this);

          _initializerDefineProperty(this, "lock_node", _descriptor5, this);

          this._data = null;
          this.opName = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Module.Module_Unknown;
          this.openFunc = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_None;
        }

        setData(data) {
          this._data = data;
          this.opName = data.JumpUI;
          this.sp_icon.setTexture(data.Background);
          this.lbl_name.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(data.Name);
          this.node_layout.destroyAllChildren();
          this.setOpenFunc(data.Id);
          var isOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen(this.openFunc);
          this.lock_node.active = !isOpen;

          if (isOpen) {
            // 添加红点逻辑
            this.addRedEvent(data.Id);
          } else {
            this.node_red.active = false;
          }

          for (var i = 0; i < data.ShowItemId.length; i++) {
            var itemInfo = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
              error: Error()
            }), ItemInfo) : ItemInfo)();
            itemInfo.itemId = data.ShowItemId[i];
            itemInfo.num = 0;
            (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.createItem(itemInfo, this.node_layout);
          }
        } // 获取openFunc


        setOpenFunc(id) {
          switch (id) {
            case 1:
              this.openFunc = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).OpenFunctionName.OpenFunctionName_Challenge;
              break;

            case 2:
              this.openFunc = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).OpenFunctionName.OpenFunctionName_DailyChallenge;
              break;

            case 3:
              this.openFunc = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).OpenFunctionName.OpenFunctionName_WorldBoss;
              break;

            case 4:
              this.openFunc = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).OpenFunctionName.OpenFunctionName_ClimbTower;
              break;

            case 5:
              this.openFunc = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).OpenFunctionName.OpenFunctionName_FincaFight;
              break;

            default:
              break;
          }
        }

        addRedEvent(id) {
          if (id === 1) {
            var redCompTs = this.addComponent(_crd && RedComp === void 0 ? (_reportPossibleCrUseOfRedComp({
              error: Error()
            }), RedComp) : RedComp);
            redCompTs.redNode = this.node_red;
            var type1 = new (_crd && RedEventComp === void 0 ? (_reportPossibleCrUseOfRedEventComp({
              error: Error()
            }), RedEventComp) : RedEventComp)();
            type1.event = (_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).ChallengeDailyFreeTimes;
            var type2 = new (_crd && RedEventComp === void 0 ? (_reportPossibleCrUseOfRedEventComp({
              error: Error()
            }), RedEventComp) : RedEventComp)();
            type2.event = (_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).ChallengeDailyAward;
            redCompTs.types = [type1, type2];
            redCompTs.addRed();
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).ChallengeDailyFreeTimes);
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).ChallengeDailyAward);
          } else if (id == 4) {
            var _redCompTs = this.addComponent(_crd && RedComp === void 0 ? (_reportPossibleCrUseOfRedComp({
              error: Error()
            }), RedComp) : RedComp);

            _redCompTs.redNode = this.node_red; // const type1: RedEventComp = new RedEventComp();
            // type1.event = RedDotType.ClimbingTowerChallenge;

            var _type = new (_crd && RedEventComp === void 0 ? (_reportPossibleCrUseOfRedEventComp({
              error: Error()
            }), RedEventComp) : RedEventComp)();

            _type.event = (_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).ClimbingTowerDailyReward;
            var type3 = new (_crd && RedEventComp === void 0 ? (_reportPossibleCrUseOfRedEventComp({
              error: Error()
            }), RedEventComp) : RedEventComp)();
            type3.event = (_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).ClimbingTowerStageReward;
            var type4 = new (_crd && RedEventComp === void 0 ? (_reportPossibleCrUseOfRedEventComp({
              error: Error()
            }), RedEventComp) : RedEventComp)();
            type4.event = (_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Battle_Pass;
            type4.child = "5";
            _redCompTs.types = [_type, type3, type4];

            _redCompTs.addRed();

            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).ClimbingTowerChallenge);
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).ClimbingTowerDailyReward);
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).ClimbingTowerStageReward);
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Battle_Pass);
          } else if (id == 2) {
            var _redCompTs2 = this.addComponent(_crd && RedComp === void 0 ? (_reportPossibleCrUseOfRedComp({
              error: Error()
            }), RedComp) : RedComp);

            _redCompTs2.redNode = this.node_red;

            var _type2 = new (_crd && RedEventComp === void 0 ? (_reportPossibleCrUseOfRedEventComp({
              error: Error()
            }), RedEventComp) : RedEventComp)();

            _type2.event = (_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).EveryDayChallengeFreeNum;

            var _type3 = new (_crd && RedEventComp === void 0 ? (_reportPossibleCrUseOfRedEventComp({
              error: Error()
            }), RedEventComp) : RedEventComp)();

            _type3.event = (_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).EveryDayChallengeUpReward;

            var _type4 = new (_crd && RedEventComp === void 0 ? (_reportPossibleCrUseOfRedEventComp({
              error: Error()
            }), RedEventComp) : RedEventComp)();

            _type4.event = (_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).EveryDayChallengeBoxReward;
            _redCompTs2.types = [_type2, _type3, _type4];

            _redCompTs2.addRed();

            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).EveryDayChallengeFreeNum);
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).EveryDayChallengeUpReward);
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).EveryDayChallengeBoxReward);
          } else if (id == 3) {
            var _redCompTs3 = this.addComponent(_crd && RedComp === void 0 ? (_reportPossibleCrUseOfRedComp({
              error: Error()
            }), RedComp) : RedComp);

            _redCompTs3.redNode = this.node_red;

            var _type5 = new (_crd && RedEventComp === void 0 ? (_reportPossibleCrUseOfRedEventComp({
              error: Error()
            }), RedEventComp) : RedEventComp)();

            _type5.event = (_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).TopWarChallengeFreeNum;
            _redCompTs3.types = [_type5];

            _redCompTs3.addRed();

            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).TopWarChallengeFreeNum);
          } else if (id === 99) {
            this.node.getComponent(Button).enabled = false;
          } else if (id === 5) {
            var _redCompTs4 = this.addComponent(_crd && RedComp === void 0 ? (_reportPossibleCrUseOfRedComp({
              error: Error()
            }), RedComp) : RedComp);

            _redCompTs4.redNode = this.node_red;

            var _type6 = new (_crd && RedEventComp === void 0 ? (_reportPossibleCrUseOfRedEventComp({
              error: Error()
            }), RedEventComp) : RedEventComp)();

            _type6.event = (_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Free_Fight_Token;
            _redCompTs4.types = [_type6];

            _redCompTs4.addRed();

            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Free_Fight_Token);
          }
        }

        onClickBtn() {
          var isOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen(this.openFunc);

          if (!isOpen) {
            (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
              error: Error()
            }), OpenFunctionMgr) : OpenFunctionMgr).ins.showFunctionTips(this.openFunc);
            return;
          }

          if (this.opName) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.jumpLayer(this.opName);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbl_name", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sp_icon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_layout", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_red", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lock_node", [_dec6], {
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
//# sourceMappingURL=afd08ccb03f0ac53b3abc57bc03e0e36ec3b19ae.js.map