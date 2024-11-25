System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EventMgr, LocalEvent, tab, Func, SignInGiftData, UIMgr, PatrolDataMgr, RoleData, ActivityData, OpenFunctionMgr, checkSameDay, RecruitType, _dec, _class, _class2, _crd, ccclass, property, PopUI_id, MainSceneQueueUI;

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "./Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSignInGiftData(extras) {
    _reporterNs.report("SignInGiftData", "../model/activity/signGift/SignInGiftData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPatrolDataMgr(extras) {
    _reporterNs.report("PatrolDataMgr", "../model/home/Patrol/PatrolDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../model/role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityData(extras) {
    _reporterNs.report("ActivityData", "../model/activity/ActivityData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenFunctionMgr(extras) {
    _reporterNs.report("OpenFunctionMgr", "../../Common/component/OpenFunctionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcheckSameDay(extras) {
    _reporterNs.report("checkSameDay", "./GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRecruitType(extras) {
    _reporterNs.report("RecruitType", "../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.EventMgr;
    }, function (_unresolved_3) {
      LocalEvent = _unresolved_3.LocalEvent;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      Func = _unresolved_5.Func;
    }, function (_unresolved_6) {
      SignInGiftData = _unresolved_6.SignInGiftData;
    }, function (_unresolved_7) {
      UIMgr = _unresolved_7.UIMgr;
    }, function (_unresolved_8) {
      PatrolDataMgr = _unresolved_8.PatrolDataMgr;
    }, function (_unresolved_9) {
      RoleData = _unresolved_9.RoleData;
    }, function (_unresolved_10) {
      ActivityData = _unresolved_10.ActivityData;
    }, function (_unresolved_11) {
      OpenFunctionMgr = _unresolved_11.OpenFunctionMgr;
    }, function (_unresolved_12) {
      checkSameDay = _unresolved_12.checkSameDay;
    }, function (_unresolved_13) {
      RecruitType = _unresolved_13.RecruitType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "773bci7CG5G+6W04s1/mX7o", "MainSceneQueueUI", undefined);
      /*
       * @Date: 2024-10-15 16:32:56
       * @LastEditors: wzq
       * @LastEditTime: 2024-11-06 09:57:55
       * @param:进入主场景弹出队列UI
       */


      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      PopUI_id = /*#__PURE__*/function (PopUI_id) {
        PopUI_id[PopUI_id["Sign100"] = 10001] = "Sign100";
        PopUI_id[PopUI_id["SignNew"] = 10002] = "SignNew";
        PopUI_id[PopUI_id["SignDay"] = 10003] = "SignDay";
        PopUI_id[PopUI_id["Patrol"] = 10004] = "Patrol";
        PopUI_id[PopUI_id["upBanner"] = 10005] = "upBanner";
        return PopUI_id;
      }(PopUI_id || {});

      _export("default", MainSceneQueueUI = (_dec = ccclass('MainSceneQueueUI'), _dec(_class = (_class2 = class MainSceneQueueUI {
        static init() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).LocalMsg_QueueUI_check, this.checkOpenAll, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).LocalMsg_QueueUI_deleteUI, this.deleteUI, this);
        }

        static deleteUI() {
          if (this.queueUIs && this.queueUIs.length > 0) {
            this.queueUIs.splice(0, 1);
            this.showUI();
          }
        }

        static checkOpenAll() {
          var openView = []; //检测打开条件

          for (var key in PopUI_id) {
            var value = PopUI_id[key];

            if (typeof value == 'number') {
              var openObj = {
                id: value,
                isOpen: this["checkItem" + value]()
              };
              openView.push(openObj);
            }
          } //处理互斥


          for (var index = 0; index < openView.length; index++) {
            var v = openView[index];

            if (v.isOpen) {
              var conf = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().PopWindowMechanismByID.getValue(v.id);

              for (var j = 0; j < conf.MutexID.length; j++) {
                var dd = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                  error: Error()
                }), Func) : Func).forBy(openView, "id", conf.MutexID[j]);

                if (dd) {
                  dd.isOpen = false;
                }
              }
            }
          } //删除因为互斥不显示的模块


          for (var _index = openView.length - 1; _index >= 0; _index--) {
            var _v = openView[_index];

            if (!_v.isOpen) {
              openView.splice(_index, 1);
            }
          }

          openView.sort((a, b) => {
            var aconf = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().PopWindowMechanismByID.getValue(a.id);
            var bconf = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().PopWindowMechanismByID.getValue(b.id);
            return aconf.PopPriority - bconf.PopPriority;
          });
          this.queueUIs = openView;
          console.warn("主场景打开队列", JSON.stringify(this.queueUIs));
          this.showUI();
        }

        static showUI() {
          var data = this.queueUIs[0];

          if (data) {
            switch (data.id) {
              case PopUI_id.Sign100:
                var isGiftOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
                  error: Error()
                }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).OpenFunctionName.OpenFunctionName_SignInGift);

                if (isGiftOpen && !(_crd && SignInGiftData === void 0 ? (_reportPossibleCrUseOfSignInGiftData({
                  error: Error()
                }), SignInGiftData) : SignInGiftData).ins.checkActivityEnd()) {
                  (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                    error: Error()
                  }), UIMgr) : UIMgr).ins.jumpLayer((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                    error: Error()
                  }), tab) : tab).Module.Module_SignInGiftPop);
                }

                break;

              case PopUI_id.SignNew:
                (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                  error: Error()
                }), UIMgr) : UIMgr).ins.jumpLayer((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).Module.Module_NewPlayerSignInPop);
                break;

              case PopUI_id.SignDay:
                // UIMgr.ins.jumpLayer(tab.Module.Module_NewPlayerSignInPop);
                break;

              case PopUI_id.upBanner:
                if (!(_crd && checkSameDay === void 0 ? (_reportPossibleCrUseOfcheckSameDay({
                  error: Error()
                }), checkSameDay) : checkSameDay)((_crd && RecruitType === void 0 ? (_reportPossibleCrUseOfRecruitType({
                  error: Error()
                }), RecruitType) : RecruitType).GaChaUp)) {
                  (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                    error: Error()
                  }), UIMgr) : UIMgr).ins.jumpLayer((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                    error: Error()
                  }), tab) : tab).Module.Module_BannerPop);
                }

                break;

              case PopUI_id.Patrol:
                var patrolOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
                  error: Error()
                }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).OpenFunctionName.OpenFunctionName_Patrol);

                if (patrolOpen) {
                  (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                    error: Error()
                  }), UIMgr) : UIMgr).ins.jumpLayer((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                    error: Error()
                  }), tab) : tab).Module.Module_PatrolPop);
                }

                break;

              default:
                break;
            }
          }
        }
        /* 签到 */


        static checkItem10001() {
          return (_crd && SignInGiftData === void 0 ? (_reportPossibleCrUseOfSignInGiftData({
            error: Error()
          }), SignInGiftData) : SignInGiftData).ins.canReceive();
        }
        /* 巡逻奖励满 */


        static checkItem10004() {
          var startPatrolData = (_crd && PatrolDataMgr === void 0 ? (_reportPossibleCrUseOfPatrolDataMgr({
            error: Error()
          }), PatrolDataMgr) : PatrolDataMgr).ins.startPatrolData;
          var InitialPatrolMaxTime = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().InitialPatrolMaxTime + (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.getPrivilegeValue((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).VipBonus.VipBonus_PatrolIdleTime);
          var curTime = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.getServerUtcTime();
          var timeCount = curTime - Number(startPatrolData.startPatrolTime);
          var maxTime = InitialPatrolMaxTime;
          return timeCount > maxTime;
        }
        /* 萌新签到 */


        static checkItem10002() {
          // 还有未签到的
          var canGet = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.getNewPlayerSignAwards();
          var isOpen = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.isOpenDailyAcivity((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).DailyRewardType.DailyRewardType_NewServer);
          return isOpen && canGet;
        }

        static checkItem10003() {
          return false;
        }

        static checkItem10005() {
          var actInfos = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.getAllUpData();
          return actInfos.length > 0;
        }

      }, _class2.queueUIs = [], _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=86c6af06008d8458f6d0eca261aa66921e1daa83.js.map