System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "cc/env"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, instantiate, Label, log, Node, Prefab, ViewPop, ShowTips, UIMgr, DropControl, RogueControl, RogueBaseItem, EventMgr, tab, FightRoleTeam, FightWeaponTeam, FightData, PlayerControl, ViewName, LocalEvent, GuideController, FightMsgControl, HeroTeamControl, HeroData, AdMgr, SettingsManager, LangMgr, PREVIEW, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, RoguePop;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDropControl(extras) {
    _reporterNs.report("DropControl", "../../drop/DropControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRogueControl(extras) {
    _reporterNs.report("RogueControl", "./RogueControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRogueSelect(extras) {
    _reporterNs.report("RogueSelect", "./RogueControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRogueInfo(extras) {
    _reporterNs.report("RogueInfo", "./RogueInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRogueBaseItem(extras) {
    _reporterNs.report("RogueBaseItem", "./RogueBaseItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightRoleTeam(extras) {
    _reporterNs.report("FightRoleTeam", "../common/FightRoleTeam", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightWeaponTeam(extras) {
    _reporterNs.report("FightWeaponTeam", "../common/FightWeaponTeam", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../../data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerControl(extras) {
    _reporterNs.report("PlayerControl", "../../base/obj/role/role/PlayerControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuideController(extras) {
    _reporterNs.report("GuideController", "../../../guide/GuideController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMsgControl(extras) {
    _reporterNs.report("FightMsgControl", "../../FightMsgControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroTeamControl(extras) {
    _reporterNs.report("HeroTeamControl", "../../../model/hero/HeroTeamControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "../../../model/hero/HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdMgr(extras) {
    _reporterNs.report("AdMgr", "../../../model/AdMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSettingsManager(extras) {
    _reporterNs.report("SettingsManager", "../../../model/role/SettingsManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCFloat = _cc.CCFloat;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      log = _cc.log;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      ShowTips = _unresolved_3.ShowTips;
      UIMgr = _unresolved_3.UIMgr;
    }, function (_unresolved_4) {
      DropControl = _unresolved_4.DropControl;
    }, function (_unresolved_5) {
      RogueControl = _unresolved_5.RogueControl;
    }, function (_unresolved_6) {
      RogueBaseItem = _unresolved_6.RogueBaseItem;
    }, function (_unresolved_7) {
      EventMgr = _unresolved_7.EventMgr;
    }, function (_unresolved_8) {
      tab = _unresolved_8.tab;
    }, function (_unresolved_9) {
      FightRoleTeam = _unresolved_9.FightRoleTeam;
    }, function (_unresolved_10) {
      FightWeaponTeam = _unresolved_10.FightWeaponTeam;
    }, function (_unresolved_11) {
      FightData = _unresolved_11.FightData;
    }, function (_unresolved_12) {
      PlayerControl = _unresolved_12.PlayerControl;
    }, function (_unresolved_13) {
      ViewName = _unresolved_13.ViewName;
    }, function (_unresolved_14) {
      LocalEvent = _unresolved_14.LocalEvent;
    }, function (_unresolved_15) {
      GuideController = _unresolved_15.GuideController;
    }, function (_unresolved_16) {
      FightMsgControl = _unresolved_16.FightMsgControl;
    }, function (_unresolved_17) {
      HeroTeamControl = _unresolved_17.HeroTeamControl;
    }, function (_unresolved_18) {
      HeroData = _unresolved_18.HeroData;
    }, function (_unresolved_19) {
      AdMgr = _unresolved_19.AdMgr;
    }, function (_unresolved_20) {
      SettingsManager = _unresolved_20.SettingsManager;
    }, function (_unresolved_21) {
      LangMgr = _unresolved_21.LangMgr;
    }, function (_ccEnv) {
      PREVIEW = _ccEnv.PREVIEW;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "585e8TJKd5EGYbKyWC6jmMN", "RoguePop", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'Component', 'instantiate', 'Label', 'log', 'Node', 'Prefab', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 肉鸽界面 */

      _export("RoguePop", RoguePop = (_dec = ccclass('RoguePop'), _dec2 = property([Node]), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec6 = property(_crd && FightRoleTeam === void 0 ? (_reportPossibleCrUseOfFightRoleTeam({
        error: Error()
      }), FightRoleTeam) : FightRoleTeam), _dec7 = property(_crd && FightWeaponTeam === void 0 ? (_reportPossibleCrUseOfFightWeaponTeam({
        error: Error()
      }), FightWeaponTeam) : FightWeaponTeam), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Node), _dec11 = property(Label), _dec12 = property(Node), _dec13 = property(CCFloat), _dec14 = property(Node), _dec(_class = (_class2 = class RoguePop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "titleNodes", _descriptor, this);

          _initializerDefineProperty(this, "select_layout", _descriptor2, this);

          _initializerDefineProperty(this, "heroPfb", _descriptor3, this);

          _initializerDefineProperty(this, "weaponPfb", _descriptor4, this);

          _initializerDefineProperty(this, "fightTeam", _descriptor5, this);

          _initializerDefineProperty(this, "fightWeapon", _descriptor6, this);

          _initializerDefineProperty(this, "refreshBtn", _descriptor7, this);

          _initializerDefineProperty(this, "refreshTimeLab", _descriptor8, this);

          _initializerDefineProperty(this, "adrefreshBtn", _descriptor9, this);

          _initializerDefineProperty(this, "adRefreshTimeLab", _descriptor10, this);

          _initializerDefineProperty(this, "timeTouchNode", _descriptor11, this);

          _initializerDefineProperty(this, "canClickTime", _descriptor12, this);

          _initializerDefineProperty(this, "testRefreshBtn", _descriptor13, this);

          this.rogueSelect = void 0;
          this.totalRefreshTime = 0;
          this.rogueIndex = 0;
          this.heroScoreMap = new Map();
        }

        static create() {
          return _asyncToGenerator(function* () {
            if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.isDestory) {
              return;
            }

            if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.pause) {
              return;
            }

            if ((_crd && DropControl === void 0 ? (_reportPossibleCrUseOfDropControl({
              error: Error()
            }), DropControl) : DropControl).ins.rogueDrops.length == 0) {
              return;
            }

            (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.pause = true;
            yield (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: "RoguePop"
            });
          })();
        }

        static hide() {
          if (!(_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
            error: Error()
          }), GuideController) : GuideController).ins.isInFightGuiding() || !(_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
            error: Error()
          }), GuideController) : GuideController).ins.holeMask.node.active || (_crd && FightMsgControl === void 0 ? (_reportPossibleCrUseOfFightMsgControl({
            error: Error()
          }), FightMsgControl) : FightMsgControl).ins.isTest) {
            (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.pause = false;
          }

          if ((_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
            error: Error()
          }), GuideController) : GuideController).ins.isInFightGuiding()) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).hidePop);
          }

          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.hideView("RoguePop");
        }

        onLoad() {
          super.onLoad();
          this.scheduleOnce(() => {
            this.timeTouchNode.active = false;
          }, this.canClickTime);
          this.testRefreshBtn.active = PREVIEW;
        }

        register() {}

        onShow() {
          this.refresh();

          if ((_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
            error: Error()
          }), GuideController) : GuideController).ins.isInFightGuiding()) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).ShowPop);
          }
        }

        updateRefreshBtn() {
          this.totalRefreshTime = (_crd && RogueControl === void 0 ? (_reportPossibleCrUseOfRogueControl({
            error: Error()
          }), RogueControl) : RogueControl).ins.getRefreshRogueTotalTime();
          var lastTime = this.totalRefreshTime - (_crd && RogueControl === void 0 ? (_reportPossibleCrUseOfRogueControl({
            error: Error()
          }), RogueControl) : RogueControl).ins.refreshRogueTime;

          if (lastTime == 0) {
            this.refreshBtn.active = false;
            this.adrefreshBtn.active = false;
          } else if (lastTime > 1) {
            this.refreshBtn.active = true;
            this.adrefreshBtn.active = false;
            this.refreshTimeLab.string = this.totalRefreshTime - (_crd && RogueControl === void 0 ? (_reportPossibleCrUseOfRogueControl({
              error: Error()
            }), RogueControl) : RogueControl).ins.refreshRogueTime + "/" + this.totalRefreshTime;
          } else {
            this.refreshBtn.active = false;
            this.adrefreshBtn.active = true;
            this.adRefreshTimeLab.string = "1/1";
          }
        }
        /**
         * 
         * @param isSelfRefresh 是否用户手动点击刷新按钮
         */


        refresh(isSelfRefresh) {
          if (isSelfRefresh === void 0) {
            isSelfRefresh = false;
          }

          this.rogueSelect = (_crd && RogueControl === void 0 ? (_reportPossibleCrUseOfRogueControl({
            error: Error()
          }), RogueControl) : RogueControl).ins.getList(isSelfRefresh);
          this.fightTeam.refresh(true);
          this.fightWeapon.refresh(true); // this.totalRefreshTime = RogueControl.ins.getRefreshRogueTotalTime();

          this.updateRefreshBtn();
          this.showType(this.rogueSelect.type);
          this.showList();

          if (this.rogueSelect.list.length == 0) {
            this.onCloseClick();
            return;
          }
        }

        showType(idx) {
          for (var index = 0; index < this.titleNodes.length; index++) {
            var v = this.titleNodes[index];
            v.active = index == idx;
          }
        }

        showList() {
          this.select_layout.destroyAllChildren();

          for (var index = 0; index < this.rogueSelect.list.length; index++) {
            var rogueInfo = this.rogueSelect.list[index];

            if (rogueInfo == null) {
              continue;
            }

            var nn = void 0;

            if (rogueInfo.rogueTab.Sort == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).VirtualItemType.VirtualItemType_Eggs) {
              nn = instantiate(this.heroPfb);
            } else {
              nn = instantiate(this.weaponPfb);
            }

            this.select_layout.addChild(nn);
            nn.name = "RogueHeroItem" + index;
            var rogueBase = nn.getComponent(_crd && RogueBaseItem === void 0 ? (_reportPossibleCrUseOfRogueBaseItem({
              error: Error()
            }), RogueBaseItem) : RogueBaseItem);
            rogueBase.setOwner(this);
            rogueBase.setData(rogueInfo);
          }

          if ((_crd && FightMsgControl === void 0 ? (_reportPossibleCrUseOfFightMsgControl({
            error: Error()
          }), FightMsgControl) : FightMsgControl).ins.isTest) {
            return;
          }

          if ((_crd && FightMsgControl === void 0 ? (_reportPossibleCrUseOfFightMsgControl({
            error: Error()
          }), FightMsgControl) : FightMsgControl).ins.isTest || this.rogueSelect.list.length <= 1) {
            this.rogueIndex = 0;
            this.scheduleOnce(this.showRogueChoose, 5);
            return;
          }

          this.rogueIndex = this.caleRecommendRogue();
          this.unschedule(this.showRogueChoose);
          this.scheduleOnce(this.showRogueChoose, 5);
        }

        showRogueChoose() {
          var _rogueItem = this.select_layout.getChildByName("RogueHeroItem" + this.rogueIndex);

          if (_rogueItem && _rogueItem.isValid) {
            if ((_crd && SettingsManager === void 0 ? (_reportPossibleCrUseOfSettingsManager({
              error: Error()
            }), SettingsManager) : SettingsManager).ins.getSetting("isAutoSelectRogue")) {
              _rogueItem.getComponent(_crd && RogueBaseItem === void 0 ? (_reportPossibleCrUseOfRogueBaseItem({
                error: Error()
              }), RogueBaseItem) : RogueBaseItem).showChoose(); // _rogueItem.getComponent(RogueBaseItem).onClick();


              this.scheduleOnce(() => {
                if (_rogueItem && _rogueItem.isValid) {
                  _rogueItem.getComponent(_crd && RogueBaseItem === void 0 ? (_reportPossibleCrUseOfRogueBaseItem({
                    error: Error()
                  }), RogueBaseItem) : RogueBaseItem).onClick();
                }
              }, 0.5);
            } else {
              _rogueItem.getComponent(_crd && RogueBaseItem === void 0 ? (_reportPossibleCrUseOfRogueBaseItem({
                error: Error()
              }), RogueBaseItem) : RogueBaseItem).showChoose();
            }
          }
        }

        onItemClick(info) {
          console.log(info);
          (_crd && RogueControl === void 0 ? (_reportPossibleCrUseOfRogueControl({
            error: Error()
          }), RogueControl) : RogueControl).ins.addRogueId(info);
          this.checkNext();
        }

        checkNext() {
          if ((_crd && DropControl === void 0 ? (_reportPossibleCrUseOfDropControl({
            error: Error()
          }), DropControl) : DropControl).ins.rogueDrops.length > 0) {
            this.unscheduleAllCallbacks();
            this.refresh();
            return;
          }

          RoguePop.hide();
        }

        onRefreshClick() {
          if ((_crd && RogueControl === void 0 ? (_reportPossibleCrUseOfRogueControl({
            error: Error()
          }), RogueControl) : RogueControl).ins.refreshRogueTime >= this.totalRefreshTime) {
            //ShowTips("刷新次数已用完");
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_refresh_1"));
          } else {
            (_crd && RogueControl === void 0 ? (_reportPossibleCrUseOfRogueControl({
              error: Error()
            }), RogueControl) : RogueControl).ins.addRefreshRogueTime();
            this.refresh(true);
          }
        }

        onRefreshClicktEST() {
          this.refresh(true);
        }

        onAdRefreshClick() {
          if ((_crd && RogueControl === void 0 ? (_reportPossibleCrUseOfRogueControl({
            error: Error()
          }), RogueControl) : RogueControl).ins.refreshRogueTime >= this.totalRefreshTime) {
            //ShowTips("刷新次数已用完");
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_refresh_1"));
          } else {
            (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
              error: Error()
            }), AdMgr) : AdMgr).ins.playVideoAd((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AdType.AdType_RogueRefreshByAdvert, () => {
              (_crd && RogueControl === void 0 ? (_reportPossibleCrUseOfRogueControl({
                error: Error()
              }), RogueControl) : RogueControl).ins.addRefreshRogueTime();
              this.refresh(true);
            });
          }
        }

        onClickWeapon() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).WeaponPop
          });
        }

        onCloseClick() {
          RoguePop.hide();
        }

        // 写一个推荐肉鸽算法 返回积分最高的肉鸽index
        caleRecommendRogue() {
          var baseScores = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().RogueHeroRankScore;
          var leaderScore = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().RogueCaptainScore;
          var WarriorScore = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().RogueWarriorScore;
          var teams = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getTeam();
          this.heroScoreMap.clear();
          var _maxScore = 0; // let _leaderScore = 0;

          var levels = [];

          for (var i = 0; i < teams.length; i++) {
            var _lv = teams[i].level;
            levels.push(_lv);
          }

          levels = levels.sort((lv1, lv2) => {
            return lv2 - lv1;
          });

          for (var j = 0; j < teams.length; j++) {
            var _heroClass = teams[j].heroClass;
            var levelIndex = levels.indexOf(teams[j].level);
            var _baseScore = baseScores[levelIndex];
            levels[levelIndex] = 0; // 获取队长职业

            var _leader = (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
              error: Error()
            }), PlayerControl) : PlayerControl).ins.getLeader();

            var _leaderClass = 0;

            if (_leader) {
              _leaderClass = _leader.info.configTab.Class;
            }

            var _addScore = 0;

            if (_heroClass === _leaderClass) {
              if (_heroClass === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).HeroClass.HeroClass_Warrior) {
                _addScore = leaderScore + WarriorScore;
              } else {
                _addScore = leaderScore;
              } // _leaderScore = _baseScore+_addScore;

            } else {
              if (_heroClass === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).HeroClass.HeroClass_Warrior) {
                _addScore = WarriorScore;
              }
            }

            var _heroScore = _baseScore + _addScore;

            if (_maxScore < _heroScore) {
              _maxScore = _heroScore;
            }

            this.heroScoreMap.set(_heroClass, _heroScore);
          } // 设置基础分完毕


          log("cocos肉鸽 设置肉鸽的基础分完毕=", this.heroScoreMap);
          var maxScore = 0;
          var _index = 0;

          for (var index = 0; index < this.rogueSelect.list.length; index++) {
            var rogueInfo = this.rogueSelect.list[index];

            if (rogueInfo == null) {
              continue;
            } // 如果当前是武器 武器算法


            var score = 0;

            if (rogueInfo.heroItemId) {
              var heroClass = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
                error: Error()
              }), HeroData) : HeroData).ins.getByItemId(rogueInfo.heroItemId).heroTable.Class;
              score = this.heroScoreMap.get(heroClass);

              var _leader2 = (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
                error: Error()
              }), PlayerControl) : PlayerControl).ins.getLeader();

              var _leaderClass2 = 0;

              if (_leader2) {
                _leaderClass2 = _leader2.info.configTab.Class;
              }

              var isLeader = heroClass === _leaderClass2;

              if (isLeader) {
                score *= (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).getData().GetKeyValue_ConfigTable().RogueCaptainUpMul;
                console.log("cocos\u8089\u9E3D \u5F53\u524D~~~~~~~~~~~~~~index=" + index + ",\u5F53\u524D\u4E3A\u961F\u957F\u8BA1\u7B97\u51FA\u7684\u79EF\u5206\u4E3A=" + score);
              }
            } else {
              var bookTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().BookTableById.getValue(rogueInfo.rogueTab.BookId);
              score = this.caleRecommendRogueWeapen(rogueInfo, this.heroScoreMap.get(bookTab.Class), _maxScore);
            }

            console.log("cocos\u8089\u9E3D \u5F53\u524D~~~~~~~~~~~~~~index=" + index + ",\u5F53\u524D\u8BA1\u7B97\u51FA\u7684\u79EF\u5206\u4E3A=" + score);

            if (rogueInfo.rogueTab.Sort !== (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).VirtualItemType.VirtualItemType_Eggs) {
              this.setExtraStar(index, score);
            }

            if (score > maxScore) {
              maxScore = score;
              _index = index;
            }
          }

          return _index;
        }

        setExtraStar(index, score) {
          var nn = null;

          for (var i = 0; i < this.select_layout.children.length; i++) {
            var child = this.select_layout.children[i];

            if (child.name === "RogueHeroItem" + index && child.active) {
              nn = child;
            }
          } // let nn = this.select_layout.getChildByName("RogueHeroItem" + index);


          var rogueBase = nn.getComponent(_crd && RogueBaseItem === void 0 ? (_reportPossibleCrUseOfRogueBaseItem({
            error: Error()
          }), RogueBaseItem) : RogueBaseItem);
          var star = 0;

          if (score >= (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().RogueSeparatedScore[0]) {
            star = 3;
          } else if (score < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().RogueSeparatedScore[1]) {
            star = 1;
          } else {
            star = 2;
          }

          rogueBase.setStar(star);
        }

        caleRecommendRogueWeapen(rogueInfo, baseScore, maxScore) {
          var buildsScore = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().RogueBookBuildsScore;
          var buildsCoreScore = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().RogueBookCoreScore;
          var buildsSkillScore = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().RogueBookSkillScore;
          var buildsDefaultScore = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().RogueBookBaseScore;
          var buildsKeyScore = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().RogueBookKeyScore;
          var totalScore = 0;
          var curScore = 0;
          var maxWeapenScore = 0; // 通过肉鸽id获取所有的前置条件的肉鸽ids
          // 获取生效值

          var validList = (_crd && RogueControl === void 0 ? (_reportPossibleCrUseOfRogueControl({
            error: Error()
          }), RogueControl) : RogueControl).ins.validList;
          var rogueInfos = [rogueInfo];

          for (var i = 0; i < validList.length; i++) {
            var _rogueInfo = validList[i];

            if (_rogueInfo.Id === rogueInfo.Id) {
              continue;
            }

            if (_rogueInfo.rogueTab.Condition === rogueInfo.rogueTab.Id) {
              rogueInfos.push(_rogueInfo);
            }
          }

          var scoreArr = [];
          log("cocos肉鸽 rogueInfos=", rogueInfos);

          for (var k = 0; k < rogueInfos.length; k++) {
            var bookID = rogueInfos[k].rogueTab.BookId;
            var bookTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().BookTableById.getValue(bookID);
            var _score = 0;

            if (bookTab.Builds === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Builds.Builds_Core) {
              // 核心
              if (baseScore === maxScore) {
                _score = baseScore * buildsCoreScore;
              }

              console.log("cocos\u8089\u9E3D \u6838\u5FC3\u79EF\u5206=" + _score);
            } else if (bookTab.Builds === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Builds.Builds_Skill) {
              // 招式
              if (baseScore === maxScore) {
                _score = baseScore * buildsSkillScore;
              }

              console.log("cocos\u8089\u9E3D \u62DB\u5F0F\u79EF\u5206=" + _score);
            } else if (bookTab.Builds === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Builds.Builds_None) {
              _score = buildsDefaultScore;
            } else {
              // 流派
              // 找出当前流派的英雄数量
              // const buildCount = this.getTeamCountSchool(bookTab.Builds)
              // const str = tab.Builds[bookTab.Builds];
              // if (str.indexOf("1") > -1) {
              //     // 流派1
              //     _score = baseScore * buildCount * buildsScore[0]
              //     console.log(`cocos肉鸽 流派1积分=${_score}`)
              // } else {
              //     // 流派2
              //     _score = baseScore * buildCount * buildsScore[1];
              //     console.log(`cocos肉鸽 流派2积分=${_score}`)
              // }
              _score = this.getTeamCountSchool(bookTab.Builds);
            }

            scoreArr.push(Math.floor(_score * 100) / 100);
          }

          curScore = scoreArr[0];
          maxWeapenScore = Math.max(...scoreArr);
          var sumScore = scoreArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
          totalScore = Math.floor(sumScore * buildsKeyScore * 100) / 100;
          console.log("cocos\u8089\u9E3D \u79EF\u5206\u6570\u7EC4\u4E3A=" + scoreArr);
          return Math.max(...[totalScore, curScore, maxWeapenScore]);
        } // 获取队伍中流派


        getTeamCountSchool(buildId) {
          var buildsScore = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().RogueBookBuildsScore;
          var score = 0;
          var str = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Builds[buildId];
          var buldsScore = str.indexOf("1") > -1 ? buildsScore[0] : buildsScore[1];
          var teams = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getTeam();

          for (var i = 0; i < teams.length; i++) {
            var heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
              error: Error()
            }), HeroData) : HeroData).ins.getById(teams[i].heroId);
            var builds = heroInfo.heroTable.Builds;

            if (builds.indexOf(buildId) > -1) {
              if (this.heroScoreMap.get(heroInfo.heroClassTable.HeroClass) * buldsScore > score) {
                score = this.heroScoreMap.get(heroInfo.heroClassTable.HeroClass) * buldsScore;
              }
            }
          }

          return score;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "titleNodes", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "select_layout", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "heroPfb", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "weaponPfb", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "fightTeam", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "fightWeapon", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "refreshBtn", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "refreshTimeLab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "adrefreshBtn", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "adRefreshTimeLab", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "timeTouchNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "canClickTime", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "testRefreshBtn", [_dec14], {
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
//# sourceMappingURL=5aea734ccd3d7ac942bbb64621293f54b72479a5.js.map