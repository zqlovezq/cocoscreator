System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Font, instantiate, js, Label, Node, Prefab, ProgressBar, Tween, tween, UIOpacity, UITransform, ViewScreen, EventMgr, FightEvent, WaveTimeControl, FightUITeam, PlayerControl, Func, FightData, ShowTips, UIMgr, ViewName, FightPausePop, FightRootControl, setTextTime_3, FightBarItem, tab, FightBossBar, OpenFunctionMgr, LangMgr, FightMsgControl, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _crd, ccclass, property, TimeScale, FightUIView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewScreen(extras) {
    _reporterNs.report("ViewScreen", "../../framework/base/ViewScreen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "./define/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleInfo(extras) {
    _reporterNs.report("RoleInfo", "./base/obj/role/role/RoleInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaveTimeControl(extras) {
    _reporterNs.report("WaveTimeControl", "./wave/WaveTimeControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightUITeam(extras) {
    _reporterNs.report("FightUITeam", "./view/common/FightUITeam", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerControl(extras) {
    _reporterNs.report("PlayerControl", "./base/obj/role/role/PlayerControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "./data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightPausePop(extras) {
    _reporterNs.report("FightPausePop", "./view/FightPausePop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightRootControl(extras) {
    _reporterNs.report("FightRootControl", "./FightRootControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetTextTime_(extras) {
    _reporterNs.report("setTextTime_3", "../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightBarItem(extras) {
    _reporterNs.report("FightBarItem", "./view/common/FightBarItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightBossBar(extras) {
    _reporterNs.report("FightBossBar", "./view/common/FightBossBar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenFunctionMgr(extras) {
    _reporterNs.report("OpenFunctionMgr", "../../Common/component/OpenFunctionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMsgControl(extras) {
    _reporterNs.report("FightMsgControl", "./FightMsgControl", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Font = _cc.Font;
      instantiate = _cc.instantiate;
      js = _cc.js;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      ProgressBar = _cc.ProgressBar;
      Tween = _cc.Tween;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      ViewScreen = _unresolved_2.ViewScreen;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }, function (_unresolved_4) {
      FightEvent = _unresolved_4.FightEvent;
    }, function (_unresolved_5) {
      WaveTimeControl = _unresolved_5.WaveTimeControl;
    }, function (_unresolved_6) {
      FightUITeam = _unresolved_6.FightUITeam;
    }, function (_unresolved_7) {
      PlayerControl = _unresolved_7.PlayerControl;
    }, function (_unresolved_8) {
      Func = _unresolved_8.Func;
    }, function (_unresolved_9) {
      FightData = _unresolved_9.FightData;
    }, function (_unresolved_10) {
      ShowTips = _unresolved_10.ShowTips;
      UIMgr = _unresolved_10.UIMgr;
    }, function (_unresolved_11) {
      ViewName = _unresolved_11.ViewName;
    }, function (_unresolved_12) {
      FightPausePop = _unresolved_12.FightPausePop;
    }, function (_unresolved_13) {
      FightRootControl = _unresolved_13.FightRootControl;
    }, function (_unresolved_14) {
      setTextTime_3 = _unresolved_14.setTextTime_3;
    }, function (_unresolved_15) {
      FightBarItem = _unresolved_15.FightBarItem;
    }, function (_unresolved_16) {
      tab = _unresolved_16.tab;
    }, function (_unresolved_17) {
      FightBossBar = _unresolved_17.FightBossBar;
    }, function (_unresolved_18) {
      OpenFunctionMgr = _unresolved_18.OpenFunctionMgr;
    }, function (_unresolved_19) {
      LangMgr = _unresolved_19.LangMgr;
    }, function (_unresolved_20) {
      FightMsgControl = _unresolved_20.FightMsgControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f312fjzDwVI8awxXYX3F53m", "FightUIView", undefined);

      __checkObsolete__(['_decorator', 'director', 'EditBox', 'EventTouch', 'Font', 'game', 'instantiate', 'js', 'Label', 'Layers', 'Node', 'Prefab', 'ProgressBar', 'Size', 'Sprite', 'SpriteFrame', 'Toggle', 'Tween', 'tween', 'UIOpacity', 'UITransform', 'v2', 'v3', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);
      TimeScale = [1, 1, 1.3, 1.6];

      _export("FightUIView", FightUIView = (_dec = ccclass('FightUIView'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(_crd && FightBossBar === void 0 ? (_reportPossibleCrUseOfFightBossBar({
        error: Error()
      }), FightBossBar) : FightBossBar), _dec6 = property(_crd && FightUITeam === void 0 ? (_reportPossibleCrUseOfFightUITeam({
        error: Error()
      }), FightUITeam) : FightUITeam), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(ProgressBar), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property([Font]), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec(_class = (_class2 = class FightUIView extends (_crd && ViewScreen === void 0 ? (_reportPossibleCrUseOfViewScreen({
        error: Error()
      }), ViewScreen) : ViewScreen) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "skillCd", _descriptor, this);

          _initializerDefineProperty(this, "barNode", _descriptor2, this);

          _initializerDefineProperty(this, "barItemPfb", _descriptor3, this);

          _initializerDefineProperty(this, "bossBar", _descriptor4, this);

          _initializerDefineProperty(this, "team", _descriptor5, this);

          _initializerDefineProperty(this, "timeLabel", _descriptor6, this);

          _initializerDefineProperty(this, "timePerLabel", _descriptor7, this);

          _initializerDefineProperty(this, "timeBar", _descriptor8, this);

          _initializerDefineProperty(this, "audoToggle", _descriptor9, this);

          _initializerDefineProperty(this, "speedNodeParent", _descriptor10, this);

          _initializerDefineProperty(this, "fonts", _descriptor11, this);

          _initializerDefineProperty(this, "multiplayRedPoint", _descriptor12, this);

          _initializerDefineProperty(this, "autoRedPoint", _descriptor13, this);

          _initializerDefineProperty(this, "autoLock", _descriptor14, this);

          _initializerDefineProperty(this, "buffBtnNode", _descriptor15, this);

          this.speedIdx = 1;
          this.isCheckedAudo = false;
          this.GuideDropTime = 0;
        }

        onLoad() {
          super.onLoad();
          this.timeLabel.string = "00:00";
          this.timePerLabel.string = "0%";
          this.timeBar.progress = 0;
          this.schedule(() => {
            this.updateTime();
          }, 1); // if (Func.getItem("isCheckedAudo") == null) {//默认开启
          //     Func.setItem("isCheckedAudo", 1);
          // }

          var isCheckedAudo = Number((_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).getItem("isCheckedAudo"));
          var open = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_FightAuto);

          if (isCheckedAudo && isCheckedAudo == 1) {
            if (open) {
              this.isCheckedAudo = true;
            } else {
              this.isCheckedAudo = false;
            }
          } else {
            this.isCheckedAudo = false;
          }

          if (open) {
            var isAudoRed = Number((_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
              error: Error()
            }), Func) : Func).getItem("isShowAudoRedPoint"));

            if (!isAudoRed) {
              this.autoRedPoint.active = true;
            } else {
              this.autoRedPoint.active = false;
            }

            this.autoLock.active = false;
          } else {
            this.autoRedPoint.active = false;
            this.autoLock.active = true;
          }

          this.setAudoShow();
          this.buffBtnNode.active = false;

          if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.fightInfo.bufferList && (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.fightInfo.bufferList.length > 0) {
            (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.fightInfo.bufferList.forEach(element => {
              var pveBuffTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().PveStageBuffTableById.getValue(element);

              if (pveBuffTable.ShowIcon != "") {
                this.buffBtnNode.active = true;
              }
            });
          }

          this.buffBtnNode.active = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.fightInfo.bufferList && (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.fightInfo.bufferList.length > 0;
        }

        onShow() {
          this.audoToggle.getChildByName("txt").active = !this.isCheckedAudo;
          this.audoToggle.getChildByName("txt2").active = this.isCheckedAudo;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Fight_Skill_Cding, this.on_fight_Fight_Skill_Cding, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Fight_Start, this.on_Fight_Start, this);
        }

        onFightResLoadComplete() {}

        onClickShowBullet() {}

        onClickBorder() {}

        updateTime() {
          if ((_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.isFight()) {
            var nowTime = (_crd && WaveTimeControl === void 0 ? (_reportPossibleCrUseOfWaveTimeControl({
              error: Error()
            }), WaveTimeControl) : WaveTimeControl).ins.nowTotalTime;
            var totalTime = (_crd && WaveTimeControl === void 0 ? (_reportPossibleCrUseOfWaveTimeControl({
              error: Error()
            }), WaveTimeControl) : WaveTimeControl).ins.totalTime;

            if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.isWorldAndGuildBoss()) {
              nowTime = totalTime - nowTime;
            }

            this.timeLabel.string = (_crd && setTextTime_3 === void 0 ? (_reportPossibleCrUseOfsetTextTime_({
              error: Error()
            }), setTextTime_3) : setTextTime_3)(nowTime);
            this.timeBar.progress = nowTime / totalTime;
            var per = Math.floor(nowTime * 100 / totalTime);

            if (isNaN(per)) {
              per = 0;
            }

            this.timePerLabel.string = js.formatStr("%s%", per); // if (GuideController.ins.isInFightGuiding() && GuideController.ins.isGuiding()) {
            //     if (nowTime == 51 && GuideController.ins.dropCount === 3 && this.GuideDropTime !== nowTime) {
            //         DropControl.ins.addDrop([1002]);
            //     }
            //     if (nowTime == 52 && GuideController.ins.dropCount === 4 && this.GuideDropTime !== nowTime) {
            //         DropControl.ins.addDrop([1002]);
            //     }
            //     if (nowTime == 53 && GuideController.ins.dropCount === 5 && this.GuideDropTime !== nowTime) {
            //         DropControl.ins.addDrop([1002]);
            //     }
            //     if (this.GuideDropTime !== nowTime) {
            //         this.GuideDropTime = nowTime
            //     }
            // }
          }
        }

        on_fight_Fight_Skill_Cding(uiPos) {
          var opa = this.skillCd.getComponent(UIOpacity);
          opa.opacity = 255;
          Tween.stopAllByTarget(opa);
          var spacePos = this.skillCd.parent.getComponent(UITransform).convertToNodeSpaceAR(uiPos);
          this.skillCd.active = true;
          this.skillCd.setPosition(spacePos);
          tween(opa).to(1, {
            opacity: 0
          }).call(() => {
            this.skillCd.active = false;
          }).start();
        }

        getRoleHead() {}

        createRoleHead(roleInfo) {
          var roleHead = this.team.getFree();
          roleHead.setRoleInfo(roleInfo);
          return roleHead;
        }

        createBarItem(roleInfo) {
          var barItem = instantiate(this.barItemPfb);
          this.barNode.addChild(barItem);
          return barItem.getComponent(_crd && FightBarItem === void 0 ? (_reportPossibleCrUseOfFightBarItem({
            error: Error()
          }), FightBarItem) : FightBarItem);
        }

        onAudoToggle(eventTouch) {
          var open = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_FightAuto) || (_crd && FightMsgControl === void 0 ? (_reportPossibleCrUseOfFightMsgControl({
            error: Error()
          }), FightMsgControl) : FightMsgControl).ins.isTest;

          if (open) {
            this.isCheckedAudo = !this.isCheckedAudo;
            this.setAudoShow();
            (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
              error: Error()
            }), Func) : Func).setItem("isCheckedAudo", this.isCheckedAudo ? 1 : 0);

            if (this.autoRedPoint.active) {
              this.autoRedPoint.active = false;
              (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                error: Error()
              }), Func) : Func).setItem("isShowAudoRedPoint", 1);
            }
          } else {
            var openTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().OpenFunctionTableByName.getValue((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_FightAuto);
            var Level = openTab.BattleLv;
            var tip1 = Math.floor(Level / 100) + "-" + Level % 100;
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_fight_18", [tip1])); // OpenFunctionMgr.ins.showFunctionTips(tab.OpenFunctionName.OpenFunctionName_FightAuto);
          }
        }

        setAudoShow() {
          this.audoToggle.getChildByName("txt").active = !this.isCheckedAudo;
          this.audoToggle.getChildByName("txt2").active = this.isCheckedAudo;
          (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.setAudo(this.isCheckedAudo);
        }

        on_Fight_Start() {
          var idx = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).checkInt((_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).getItem("FightSpeedIdx"));
          idx = Math.max(idx, 1);
          var open = this.checkSpeedOpen(idx);
          this.checkFightSpeedRedPoint();

          if (!open) {
            if (idx == 3) {
              idx = 2;
            } else {
              idx = 1;
            }
          }

          this.setSpeedIdx(idx);
        }

        checkFightSpeedRedPoint() {
          var red = Number((_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).getItem("FightSpeedRedPoint"));
          var open = this.checkSpeedOpen(2 + red);

          if (open) {
            if (red < 2) {
              this.multiplayRedPoint.active = true;
            } else {
              this.multiplayRedPoint.active = false;
            }
          } else {
            this.multiplayRedPoint.active = false;
          }
        }

        onSpeedClick(event, data) {
          var idx = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).checkInt(data);

          if (this.checkSpeedOpen(idx + 1, true)) {
            idx = idx + 1;
            this.setSpeedIdx(idx);

            if (this.multiplayRedPoint.active) {
              this.multiplayRedPoint.active = false;
              (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                error: Error()
              }), Func) : Func).setItem("FightSpeedRedPoint", idx - 1);
            }
          } else {
            if (idx + 1 >= 3) {
              this.setSpeedIdx(1);
            }
          }
        }

        setSpeedIdx(idx) {
          if (idx > 3) {
            idx = 1;
          }

          this.speedIdx = idx;
          (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).setItem("FightSpeedIdx", idx);

          for (var index = 0; index < this.speedNodeParent.children.length; index++) {
            var element = this.speedNodeParent.children[index];
            element.active = idx - 1 == index;
          }

          (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.timeScale = Math.max((_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).checkInt((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().TimeScale[this.speedIdx - 1]), 0.8);
        }

        onPauseClick() {
          (_crd && FightPausePop === void 0 ? (_reportPossibleCrUseOfFightPausePop({
            error: Error()
          }), FightPausePop) : FightPausePop).create();
        }

        onDamageClick(event) {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).FightDamageRankPop,
            data: {
              event: event
            }
          });
        }

        checkSpeedOpen(index, istips) {
          if (istips === void 0) {
            istips = false;
          }

          if ((_crd && FightMsgControl === void 0 ? (_reportPossibleCrUseOfFightMsgControl({
            error: Error()
          }), FightMsgControl) : FightMsgControl).ins.isTest) {
            return true;
          }

          if (index == 1) {
            return true;
          } else if (index == 2) {
            if ((_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
              error: Error()
            }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_FightSpeed2)) {
              return true;
            } else {
              if (istips) {
                var openTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).getData().OpenFunctionTableByName.getValue((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).OpenFunctionName.OpenFunctionName_FightSpeed2);
                var PlayerLv = openTab.PlayerLv;
                var key = "ui_fight_16";
                (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
                  error: Error()
                }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                  error: Error()
                }), LangMgr) : LangMgr).getCombineString(key, [PlayerLv]));
              }

              return false;
            }
          } else if (index == 3) {
            if ((_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
              error: Error()
            }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_FightSpeed3)) {
              return true;
            } else {
              if (istips) {
                (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
                  error: Error()
                }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                  error: Error()
                }), LangMgr) : LangMgr).getLab("ui_fight_17"));
              }

              return false;
            }
          } else {
            return true;
          }
        }

        onBuffClick() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).EveryDayBuffPop
          });
        }

        showTapTipsTimes() {
          if (this.node.getChildByName("taptips_node").active) {
            return;
          }

          this.node.getChildByName("taptips_node").active = true;
          this.unschedule(this.hideTapTipsTimes);
          this.scheduleOnce(this.hideTapTipsTimes, 3);
        }

        hideTapTipsTimes() {
          this.node.getChildByName("taptips_node").active = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "skillCd", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "barNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "barItemPfb", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bossBar", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "team", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "timeLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "timePerLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "timeBar", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "audoToggle", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "speedNodeParent", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "fonts", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "multiplayRedPoint", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "autoRedPoint", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "autoLock", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "buffBtnNode", [_dec16], {
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
//# sourceMappingURL=bf5a05e14418c971c2fc2c7a5f59b283f8d09ae1.js.map