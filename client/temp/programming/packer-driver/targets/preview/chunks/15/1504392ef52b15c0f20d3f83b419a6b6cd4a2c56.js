System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "client_protocol", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, ViewPop, PlayerHeadItem, SimpleRoleInfo, tab, LangMgr, ItemPoolMgr, HeroInfo, HeroItem, FriendControl, ShowTips, UIMgr, CommonTipsPop, CommonTipsPopCloseType, EventMgr, proto, Net, ViewName, RoleData, GameUtil, BattleMainDataControl, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, CheckRoleInfoPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerHeadItem(extras) {
    _reporterNs.report("PlayerHeadItem", "../common/PlayerHeadItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSimpleRoleInfo(extras) {
    _reporterNs.report("SimpleRoleInfo", "../friends/SimpleRoleInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../hero/HeroInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroItem(extras) {
    _reporterNs.report("HeroItem", "../item/HeroItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFriendControl(extras) {
    _reporterNs.report("FriendControl", "../friends/FriendControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTipsPop(extras) {
    _reporterNs.report("CommonTipsPop", "../common/CommonTipsPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTipsPopCloseType(extras) {
    _reporterNs.report("CommonTipsPopCloseType", "../common/CommonTipsPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleMainDataControl(extras) {
    _reporterNs.report("BattleMainDataControl", "../home/battle/BattleMainDataControl", _context.meta, extras);
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
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      PlayerHeadItem = _unresolved_3.PlayerHeadItem;
    }, function (_unresolved_4) {
      SimpleRoleInfo = _unresolved_4.SimpleRoleInfo;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }, function (_unresolved_6) {
      LangMgr = _unresolved_6.LangMgr;
    }, function (_unresolved_7) {
      ItemPoolMgr = _unresolved_7.ItemPoolMgr;
    }, function (_unresolved_8) {
      HeroInfo = _unresolved_8.HeroInfo;
    }, function (_unresolved_9) {
      HeroItem = _unresolved_9.HeroItem;
    }, function (_unresolved_10) {
      FriendControl = _unresolved_10.FriendControl;
    }, function (_unresolved_11) {
      ShowTips = _unresolved_11.ShowTips;
      UIMgr = _unresolved_11.UIMgr;
    }, function (_unresolved_12) {
      CommonTipsPop = _unresolved_12.CommonTipsPop;
      CommonTipsPopCloseType = _unresolved_12.CommonTipsPopCloseType;
    }, function (_unresolved_13) {
      EventMgr = _unresolved_13.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_14) {
      Net = _unresolved_14.Net;
    }, function (_unresolved_15) {
      ViewName = _unresolved_15.ViewName;
    }, function (_unresolved_16) {
      RoleData = _unresolved_16.RoleData;
    }, function (_unresolved_17) {
      GameUtil = _unresolved_17.GameUtil;
    }, function (_unresolved_18) {
      BattleMainDataControl = _unresolved_18.BattleMainDataControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e32afFPrhtFW7orcXLEandt", "CheckRoleInfoPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * CheckRoleInfoPop
       * zhudingchao
       * Tue Jun 11 2024 17:24:38 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/checkroleInfo/CheckRoleInfoPop.ts
       *
       */

      _export("CheckRoleInfoPop", CheckRoleInfoPop = (_dec = ccclass('CheckRoleInfoPop'), _dec2 = property(Label), _dec3 = property(_crd && PlayerHeadItem === void 0 ? (_reportPossibleCrUseOfPlayerHeadItem({
        error: Error()
      }), PlayerHeadItem) : PlayerHeadItem), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec(_class = (_class2 = class CheckRoleInfoPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "playNameLab", _descriptor, this);

          _initializerDefineProperty(this, "palyerHerdItem", _descriptor2, this);

          _initializerDefineProperty(this, "titleLab", _descriptor3, this);

          _initializerDefineProperty(this, "forceLab", _descriptor4, this);

          _initializerDefineProperty(this, "chapterLab", _descriptor5, this);

          _initializerDefineProperty(this, "gangLab", _descriptor6, this);

          _initializerDefineProperty(this, "friendNode", _descriptor7, this);

          _initializerDefineProperty(this, "strangerBtn", _descriptor8, this);

          _initializerDefineProperty(this, "blackNode", _descriptor9, this);

          _initializerDefineProperty(this, "itemLayout", _descriptor10, this);

          this.info = void 0;
          this.rankData = null;

          this.onTouchHero = item => {};
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetSimpleRoleRsp, this.on_s2c_GetSimpleRoleRsp, this);
        }

        onShow() {
          if (this.openData["info"]) {
            this.info = this.openData["info"];
            this.initView();
          } else if (this.openData["roleId"]) {
            this.requestGetSimpleRole(this.openData["roleId"]);
          } else if (this.openData["rankData"]) {
            this.info = this.openData.rankData;
            this.rankData = this.openData.rankData;
            this.initView();
            this.strangerBtn.active = this.info.id !== (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.id;
            this.friendNode.active = false;
            this.blackNode.active = false;
          }
        }

        requestGetSimpleRole(roleId) {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetSimpleRoleReq();
          msg.roleId = roleId;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetSimpleRoleReq, msg);
        }

        on_s2c_GetSimpleRoleRsp(msg) {
          if (msg.role) {
            this.info = new (_crd && SimpleRoleInfo === void 0 ? (_reportPossibleCrUseOfSimpleRoleInfo({
              error: Error()
            }), SimpleRoleInfo) : SimpleRoleInfo)();
            this.info.merge(msg.role);
            this.initView();
          } else {
            this.onClose(); //ShowTips("请求用户信息错误")

            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_friend_14"));
          }
        }

        initView() {
          var _this = this;

          this.itemLayout.destroyAllChildren();
          var table = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().QuestLogTableByLevel.getValue(this.info.reputation);

          if (table) {
            this.titleLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(table.Name);
          }

          this.playNameLab.string = this.info.name;
          var pveTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().PveStageTableByStageId.getValue(this.info.mainStage);

          if (this.info.mainStage === 0) {
            pveTable = (_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
              error: Error()
            }), BattleMainDataControl) : BattleMainDataControl).ins.getMaxPveMainStage();
          }

          if (pveTable) {
            //this.chapterLab.string="主線關卡："+pveTable.StageName;
            this.chapterLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("ui_friend_15") + (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(pveTable.StageName);
          } else {
            //this.chapterLab.string="主線關卡：无";
            this.chapterLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("ui_friend_15") + (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("ui_commondesc_88");
          }

          var isSelf = this.info.id === (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.id;
          this.strangerBtn.active = !this.info.isMyFriend && !this.info.isBlackList && !isSelf;
          this.friendNode.active = this.info.isMyFriend && !isSelf;
          this.blackNode.active = !this.info.isBlackList && !isSelf;
          this.palyerHerdItem.initHeadInfo({
            roleInfo: this.info
          }); //this.forceLab.string="戰鬥力："+this.info.powerScore+"";

          this.forceLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab("ui_commondesc_43") + (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).convertNumber(this.info.powerScore) + "";

          if (this.info.guildName) {
            //this.gangLab.string="幫會名稱："+this.info.guildName;
            this.gangLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("ui_friend_16") + this.info.guildName;
          } else {
            //this.gangLab.string="幫會名稱：无";
            this.gangLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("ui_friend_16") + (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("ui_commondesc_88");
          }

          var heros = this.info.heroes;

          var _loop = function _loop(key) {
            var heroInfo = new (_crd && HeroInfo === void 0 ? (_reportPossibleCrUseOfHeroInfo({
              error: Error()
            }), HeroInfo) : HeroInfo)();
            heroInfo.itemId = heros[key].itemId;
            heroInfo.id = 0;
            heroInfo.star = heros[key].star;
            heroInfo.level = heros[key].level;
            var item = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.createHeroItem(heroInfo, _this.itemLayout);

            if (_this.rankData) {
              item.getComponent(_crd && HeroItem === void 0 ? (_reportPossibleCrUseOfHeroItem({
                error: Error()
              }), HeroItem) : HeroItem).setTouchCallBack(() => {
                (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                  error: Error()
                }), UIMgr) : UIMgr).ins.show({
                  viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                    error: Error()
                  }), ViewName) : ViewName).CheckRoleInfoHeroPop,
                  data: {
                    heroData: heros[key]
                  }
                });
              });
            } else {
              item.getComponent(_crd && HeroItem === void 0 ? (_reportPossibleCrUseOfHeroItem({
                error: Error()
              }), HeroItem) : HeroItem).setTouchCallBack(_this.onTouchHero);
            }
          };

          for (var key in heros) {
            _loop(key);
          }
        }

        onClickBlack() {
          (_crd && CommonTipsPop === void 0 ? (_reportPossibleCrUseOfCommonTipsPop({
            error: Error()
          }), CommonTipsPop) : CommonTipsPop).create((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab("Tips_friend_15"), closeType => {
            if (closeType == (_crd && CommonTipsPopCloseType === void 0 ? (_reportPossibleCrUseOfCommonTipsPopCloseType({
              error: Error()
            }), CommonTipsPopCloseType) : CommonTipsPopCloseType).confirm) {
              // console.log("ok")
              (_crd && FriendControl === void 0 ? (_reportPossibleCrUseOfFriendControl({
                error: Error()
              }), FriendControl) : FriendControl).ins.requestAddBlacklist(this.info.id);
              this.onClose();
            } else {
              console.log("cancel");
            }
          });
        }

        onClickAdd() {
          if (this.info.isApplyList) {
            (_crd && FriendControl === void 0 ? (_reportPossibleCrUseOfFriendControl({
              error: Error()
            }), FriendControl) : FriendControl).ins.requestConfirmFriend([this.info.id]);
            this.onClose();
          } else {
            (_crd && FriendControl === void 0 ? (_reportPossibleCrUseOfFriendControl({
              error: Error()
            }), FriendControl) : FriendControl).ins.requestAddFriend(this.info.id);
          }
        }

        onClickChat() {
          (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
            error: Error()
          }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab("Tips_friend_17"));
        }

        onClickDelect() {
          (_crd && CommonTipsPop === void 0 ? (_reportPossibleCrUseOfCommonTipsPop({
            error: Error()
          }), CommonTipsPop) : CommonTipsPop).create((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab("Tips_friend_16"), closeType => {
            if (closeType == (_crd && CommonTipsPopCloseType === void 0 ? (_reportPossibleCrUseOfCommonTipsPopCloseType({
              error: Error()
            }), CommonTipsPopCloseType) : CommonTipsPopCloseType).confirm) {
              // console.log("ok")
              (_crd && FriendControl === void 0 ? (_reportPossibleCrUseOfFriendControl({
                error: Error()
              }), FriendControl) : FriendControl).ins.requestRemoveFriend(this.info.id);
              this.onClose();
            } else {
              console.log("cancel");
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "playNameLab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "palyerHerdItem", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "titleLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "forceLab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "chapterLab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "gangLab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "friendNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "strangerBtn", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "blackNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "itemLayout", [_dec11], {
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
//# sourceMappingURL=1504392ef52b15c0f20d3f83b419a6b6cd4a2c56.js.map