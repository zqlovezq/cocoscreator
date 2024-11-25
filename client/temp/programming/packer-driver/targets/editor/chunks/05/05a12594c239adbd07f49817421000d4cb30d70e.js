System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, Sprite, UITransform, Vec3, ComponentBase, tab, RoleData, ShowTips, UIMgr, RoleControl, ItemData, LangMgr, ViewName, AdMgr, BattleMainDataControl, GameUtil, HeroRed, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _crd, ccclass, property, ResourceBuyItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfComponentBase(extras) {
    _reporterNs.report("ComponentBase", "../../../framework/base/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleControl(extras) {
    _reporterNs.report("RoleControl", "../role/RoleControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdMgr(extras) {
    _reporterNs.report("AdMgr", "../AdMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleMainDataControl(extras) {
    _reporterNs.report("BattleMainDataControl", "../home/battle/BattleMainDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroRed(extras) {
    _reporterNs.report("HeroRed", "../hero/herobag/HeroRed", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      ComponentBase = _unresolved_2.ComponentBase;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      RoleData = _unresolved_4.RoleData;
    }, function (_unresolved_5) {
      ShowTips = _unresolved_5.ShowTips;
      UIMgr = _unresolved_5.UIMgr;
    }, function (_unresolved_6) {
      RoleControl = _unresolved_6.RoleControl;
    }, function (_unresolved_7) {
      ItemData = _unresolved_7.ItemData;
    }, function (_unresolved_8) {
      LangMgr = _unresolved_8.LangMgr;
    }, function (_unresolved_9) {
      ViewName = _unresolved_9.ViewName;
    }, function (_unresolved_10) {
      AdMgr = _unresolved_10.AdMgr;
    }, function (_unresolved_11) {
      BattleMainDataControl = _unresolved_11.BattleMainDataControl;
    }, function (_unresolved_12) {
      GameUtil = _unresolved_12.GameUtil;
    }, function (_unresolved_13) {
      HeroRed = _unresolved_13.HeroRed;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5eaf45S/65Ef7j1Fsc6PGIF", "ResourceBuyItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'Sprite', 'UITransform', 'v2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * ResourceBuyItem
       * zhudingchao
       * Mon Jun 17 2024 14:08:04 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/common/ResourceBuyItem.ts
       *
       */

      _export("ResourceBuyItem", ResourceBuyItem = (_dec = ccclass('ResourceBuyItem'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Sprite), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Sprite), _dec15 = property(Label), _dec16 = property(Label), _dec17 = property(Label), _dec(_class = (_class2 = class ResourceBuyItem extends (_crd && ComponentBase === void 0 ? (_reportPossibleCrUseOfComponentBase({
        error: Error()
      }), ComponentBase) : ComponentBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "energyNode", _descriptor, this);

          _initializerDefineProperty(this, "advanceNode", _descriptor2, this);

          _initializerDefineProperty(this, "iconSpr", _descriptor3, this);

          _initializerDefineProperty(this, "disCoutNode", _descriptor4, this);

          _initializerDefineProperty(this, "numLable", _descriptor5, this);

          _initializerDefineProperty(this, "multiNode", _descriptor6, this);

          _initializerDefineProperty(this, "timesNode", _descriptor7, this);

          _initializerDefineProperty(this, "buyBtnNode", _descriptor8, this);

          _initializerDefineProperty(this, "freeBtnNode", _descriptor9, this);

          _initializerDefineProperty(this, "accumulateNode", _descriptor10, this);

          _initializerDefineProperty(this, "accumulatenumLab", _descriptor11, this);

          _initializerDefineProperty(this, "lastTimeLab", _descriptor12, this);

          _initializerDefineProperty(this, "buyIconSpr", _descriptor13, this);

          _initializerDefineProperty(this, "buyNumLab", _descriptor14, this);

          _initializerDefineProperty(this, "freeNumLab", _descriptor15, this);

          _initializerDefineProperty(this, "lbl_common_name", _descriptor16, this);

          this.isHaveTime = false;
          this.costItemNum = void 0;
          this.costItemId = void 0;
          this.isGetStamina = void 0;
          this.isBuyGold = false;
          this._buyGoldType = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BuyGoldType.BuyGoldType_Buy1;
        }

        register() {}

        initEnergyView(table) {
          this.isGetStamina = true;
          this.energyNode.active = true;
          this.advanceNode.active = false;
          this.disCoutNode.active = false;
          let lasttime = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.staminaInfo.remainBuyTimesMap[table.Type];
          this.lastTimeLab.string = lasttime + "/" + table.DailyCount;
          this.isHaveTime = lasttime > 0;
          this.numLable.string = "x" + table.GetItemNum + "";
          this.iconSpr.setTexture(table.ShowIcon);

          if (table.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BuyStaminaType.BuyStaminaType_WatchAdverts) {
            this.freeBtnNode.active = true;
            this.buyBtnNode.active = false;
            this.freeNumLab.string = "(" + lasttime + "/" + table.DailyCount + ")";
            this.accumulateNode.active = false;
            this.freeBtnNode.getChildByName("redDot").active = (_crd && RoleControl === void 0 ? (_reportPossibleCrUseOfRoleControl({
              error: Error()
            }), RoleControl) : RoleControl).ins.buyStaminaRedPoint();
          } else if (table.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BuyStaminaType.BuyStaminaType_UseCurrency) {
            this.freeBtnNode.active = false;
            this.buyBtnNode.active = true;
            let info = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(table.CostItemId);
            this.buyIconSpr.setTexture(info.Icon);
            this.buyNumLab.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
              error: Error()
            }), GameUtil) : GameUtil).convertNumber(table.CostItemNum) + "";
            let lt = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.staminaInfo.remainBuyTimesMap[(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).BuyStaminaType.BuyStaminaType_BuyMissStamina];
            this.accumulateNode.active = true; // this.accumulateNode.active = lt > 0;
            // if (lt > 0) {

            this.accumulatenumLab.string = "" + lt; // }

            this.costItemId = table.CostItemId;
            this.costItemNum = table.CostItemNum;
          }
        }

        initGoldView(table) {
          const info = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.getGoldHistory(table.Type);
          this._buyGoldType = table.Type;
          this.isBuyGold = true;
          this.energyNode.active = false;
          this.advanceNode.active = true; // this.disCoutNode.active = true;

          this.buyBtnNode.active = table.AdType !== (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AdType.AdType_BuyGold;
          this.freeBtnNode.active = table.AdType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AdType.AdType_BuyGold;
          this.costItemId = table.CostItemId;
          this.costItemNum = table.CostItemCount;
          const gotTableData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(table.ItemId[0]);
          const costTableData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(table.CostItemId);
          this.iconSpr.setTexture(table.ShowIcon);

          if (this.buyBtnNode.active) {
            this.buyNumLab.string = table.CostItemCount + "";
            this.buyIconSpr.setTexture(costTableData.Icon);
            let lasttime = info.count;
            this.lastTimeLab.string = table.PurchaseCount - lasttime + "/" + table.PurchaseCount;
            this.isHaveTime = lasttime < table.PurchaseCount;
            this.numLable.string = "x" + (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
              error: Error()
            }), GameUtil) : GameUtil).convertNumber(table.CostItemCount) + "";
          } else {
            this.timesNode.active = false;
            const curAdTimes = (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
              error: Error()
            }), AdMgr) : AdMgr).ins.getAdCountByType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AdType.AdType_BuyGold);
            const maxAdTimes = (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
              error: Error()
            }), AdMgr) : AdMgr).ins.getAdCountMaxByType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AdType.AdType_BuyGold);
            this.freeNumLab.string = "(" + (maxAdTimes - curAdTimes) + "/" + maxAdTimes + ")";
            this.freeBtnNode.getChildByName("redDot").active = (_crd && HeroRed === void 0 ? (_reportPossibleCrUseOfHeroRed({
              error: Error()
            }), HeroRed) : HeroRed).ins.red_GoldBuy();
            this.isHaveTime = maxAdTimes > curAdTimes;
          }

          this.lbl_common_name.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(gotTableData.Name); // 计算俩小时的金币数量

          const stageClearIds = (_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
            error: Error()
          }), BattleMainDataControl) : BattleMainDataControl).ins.getStageClearIds();

          if (stageClearIds.length > 0) {
            const lastStageId = stageClearIds[stageClearIds.length - 1];
            const patrolTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().PatrolTableByPveStageId.getValue(lastStageId);
            const hourCount = patrolTab.BaseItemNum[0] * 6 * (1 + (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.getPrivilegeValue((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).VipBonus.VipBonus_PatrolMoneyRatio) / 10000);

            if (table.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).BuyGoldType.BuyGoldType_Buy1) {
              this.numLable.string = "x " + (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
                error: Error()
              }), GameUtil) : GameUtil).convertNumber(2 * hourCount);
            } else if (table.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).BuyGoldType.BuyGoldType_Buy2) {
              this.numLable.string = "x " + (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
                error: Error()
              }), GameUtil) : GameUtil).convertNumber(8 * hourCount);
            } else if (table.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).BuyGoldType.BuyGoldType_Buy3) {
              this.numLable.string = "x " + (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
                error: Error()
              }), GameUtil) : GameUtil).convertNumber(24 * hourCount);
            }
          }
        }

        onClickFree() {
          if (this.isHaveTime) {
            if (this.isGetStamina) {
              (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
                error: Error()
              }), AdMgr) : AdMgr).ins.playVideoAd((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AdType.AdType_BuyStamina, () => {
                (_crd && RoleControl === void 0 ? (_reportPossibleCrUseOfRoleControl({
                  error: Error()
                }), RoleControl) : RoleControl).ins.requestBuyStamina((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).BuyStaminaType.BuyStaminaType_WatchAdverts);
              }, false);
            } else if (this.isBuyGold) {
              (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
                error: Error()
              }), AdMgr) : AdMgr).ins.playVideoAd((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AdType.AdType_BuyGold, () => {
                (_crd && RoleControl === void 0 ? (_reportPossibleCrUseOfRoleControl({
                  error: Error()
                }), RoleControl) : RoleControl).ins.requestBuyGold((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).BuyGoldType.BuyGoldType_Buy1);
              }, false);
            }
          } else {
            //ShowTips("今日次数已用完")
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_timeshortage"));
          }
        }

        onClickBuy() {
          if (this.isHaveTime) {
            let id = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
              error: Error()
            }), ItemData) : ItemData).ins.isItemsEnoughByList([this.costItemId], [this.costItemNum]);

            if (id <= 0) {
              if (this.isGetStamina) {
                (_crd && RoleControl === void 0 ? (_reportPossibleCrUseOfRoleControl({
                  error: Error()
                }), RoleControl) : RoleControl).ins.requestBuyStamina((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).BuyStaminaType.BuyStaminaType_UseCurrency);
              } else if (this.isBuyGold) {
                (_crd && RoleControl === void 0 ? (_reportPossibleCrUseOfRoleControl({
                  error: Error()
                }), RoleControl) : RoleControl).ins.requestBuyGold(this._buyGoldType);
              }
            } else {
              let itemtab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().ItemTableById.getValue(id);
              (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
                error: Error()
              }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getCombineString("Tips_itemshortage", [(_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab(itemtab.Name)])); //ShowTips( LangMgr.getLab(itemtab.Name)+"不足");
            }
          } else {
            //ShowTips("今日次数已用完")
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_timeshortage"));
          }
        }

        onClickAccumulate() {
          let wordPos = new Vec3(this.node.worldPosition.x + this.node.getComponent(UITransform).contentSize.width / 2 + 30, this.node.worldPosition.y);
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).EnergyAccumulatePop,
            data: {
              "worldPos": wordPos
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "energyNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "advanceNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "iconSpr", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "disCoutNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "numLable", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "multiNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "timesNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "buyBtnNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "freeBtnNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "accumulateNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "accumulatenumLab", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "lastTimeLab", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "buyIconSpr", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "buyNumLab", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "freeNumLab", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "lbl_common_name", [_dec17], {
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
//# sourceMappingURL=05a12594c239adbd07f49817421000d4cb30d70e.js.map