System.register(["__unresolved_0", "cc", "__unresolved_1", "client_protocol", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsControl, proto, tab, LangMgr, ShowTips, RoleData, Net, EventMgr, LocalEvent, ActivityData, RookieTaskMgr, PayData, BattleMainDataControl, OpenFunctionMgr, _crd, ccclass, property;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../logic/mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../logic/mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../../logic/model/role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../logic/net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../logic/mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../logic/define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityData(extras) {
    _reporterNs.report("ActivityData", "../../logic/model/activity/ActivityData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRookieTaskMgr(extras) {
    _reporterNs.report("RookieTaskMgr", "../../logic/model/activity/rookieTask/RookieTaskMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPayData(extras) {
    _reporterNs.report("PayData", "../../logic/model/pay/PayData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleMainDataControl(extras) {
    _reporterNs.report("BattleMainDataControl", "../../logic/model/home/battle/BattleMainDataControl", _context.meta, extras);
  }

  _export("OpenFunctionMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AbsControl = _unresolved_2.AbsControl;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      LangMgr = _unresolved_4.LangMgr;
    }, function (_unresolved_5) {
      ShowTips = _unresolved_5.ShowTips;
    }, function (_unresolved_6) {
      RoleData = _unresolved_6.RoleData;
    }, function (_unresolved_7) {
      Net = _unresolved_7.Net;
    }, function (_unresolved_8) {
      EventMgr = _unresolved_8.EventMgr;
    }, function (_unresolved_9) {
      LocalEvent = _unresolved_9.LocalEvent;
    }, function (_unresolved_10) {
      ActivityData = _unresolved_10.ActivityData;
    }, function (_unresolved_11) {
      RookieTaskMgr = _unresolved_11.RookieTaskMgr;
    }, function (_unresolved_12) {
      PayData = _unresolved_12.PayData;
    }, function (_unresolved_13) {
      BattleMainDataControl = _unresolved_13.BattleMainDataControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b958eBt0adPNKGuWTAJkMiC", "OpenFunctionMgr", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 功能开启 */

      _export("OpenFunctionMgr", OpenFunctionMgr = class OpenFunctionMgr extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        constructor(...args) {
          super(...args);
          this._openMap = new Map();
          this._waitPopOpenName = [];
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new OpenFunctionMgr();
          }

          return this._instance;
        } // 设置开放功能列表


        setOpenFunctionData(data) {
          for (let i = 0; i < data.length; i++) {
            this._openMap.set(data[i].name, data[i]);
          }
        } // 获取开放功能列表


        getOpenFunctionData(openFunc) {
          return this._openMap.get(openFunc);
        } // 领取奖励之后修改列表


        changeOpenFunctionDataByName(openFunc) {
          const obj = this._openMap.get(openFunc);

          obj.isReceivedRewards = true;
        }

        pushOpenFunctionData(data) {
          for (let i = 0; i < data.length; i++) {
            this._openMap.set(data[i].name, data[i]); // 如果开启的功能中有战令系统 像服务器发送刷新战令功能请求


            this.checkFunctionRefresh(data[i]);
            let opTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().OpenFunctionTableByName.getValue(data[i].name);

            if (opTab.FunctionUnlockAnimation && opTab.FunctionUnlockAnimation != "") {
              if (opTab.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).FunctionType.FunctionType_Activity) {
                if ((_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
                  error: Error()
                }), ActivityData) : ActivityData).ins.getActivityIsOpenByOPName(data[i].name)) {
                  this.waitPopOpenName.push(data[i].name);
                }
              } else {
                this.waitPopOpenName.push(data[i].name);
              }
            }
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).checkOpenFuncPop);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).openFunctions); // if(names.length>0){
          //     UIMgr.ins.show({viewName:ViewName.FunctionUnlockPop,data:{"functionNames":names}})
          // }
        } // 检测功能开启


        checkFunctionIsOpen(openFunc, extraOpenFunc) {
          if (openFunc === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_None) {
            return true;
          }

          let obj = this._openMap.get(openFunc);

          let extra = true;

          if (extraOpenFunc) {
            extra = this.checkExtraFunctionOpen(extraOpenFunc);
          }

          if (obj && obj.name === openFunc && extra) {
            if (obj.isOpen) {
              let openTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().OpenFunctionTableByName.getValue(openFunc);

              if (openTab.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).FunctionType.FunctionType_Activity) {
                let act = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
                  error: Error()
                }), ActivityData) : ActivityData).ins.getActivityIsOpenByOPName(openFunc);
                return act;
              } else {
                if (openTab.Name === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).OpenFunctionName.OpenFunctionName_LimitBenifit) {
                  return (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
                    error: Error()
                  }), ActivityData) : ActivityData).ins.limitedRewardMsg && (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
                    error: Error()
                  }), ActivityData) : ActivityData).ins.isShowLimit();
                } else if (openTab.Name === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask || openTab.Name === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask2) {
                  const openName1 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                    error: Error()
                  }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask;
                  const openName2 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                    error: Error()
                  }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask2;
                  const data1 = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
                    error: Error()
                  }), RookieTaskMgr) : RookieTaskMgr).ins.getTrialTask(openName1);
                  const data2 = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
                    error: Error()
                  }), RookieTaskMgr) : RookieTaskMgr).ins.getTrialTask(openName2);
                  return Boolean(data1 || data2);
                } else if (openTab.Name === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).OpenFunctionName.OpenFunctionName_FirstRecharge) {
                  let rechargeData = (_crd && PayData === void 0 ? (_reportPossibleCrUseOfPayData({
                    error: Error()
                  }), PayData) : PayData).ins.getFirstRechargeTable();
                  return rechargeData !== null;
                } else {
                  return true;
                }
              }
            } else {
              return false;
            }
          }
        }

        checkExtraFunctionOpen(openFunc) {
          const openTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().OpenFunctionTableByName.getValue(openFunc);
          const BattleLv = openTab.BattleLv;
          const PlayerLv = openTab.PlayerLv;
          const CreateDay = openTab.CreateDay;

          if (BattleLv) {
            return (_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
              error: Error()
            }), BattleMainDataControl) : BattleMainDataControl).ins.getIsPasstStageByStageId(BattleLv);
          }

          if (PlayerLv) {
            return (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.level >= PlayerLv;
          }

          if (CreateDay) {
            const newDate = new Date((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.createTime * 1000);
            const tomorrow = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() + 1);
            const times = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.getServerUtcTime() - tomorrow.getTime() / 1000;
            let nowDay = 1;

            if (times > 0) {
              nowDay = Math.ceil(((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.getServerUtcTime() - tomorrow.getTime() / 1000) / 86400) + 1;
            }

            return nowDay >= CreateDay;
          }

          return true;
        } // 显示开启条件


        showFunctionTips(openFunc) {
          const openTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().OpenFunctionTableByName.getValue(openFunc);
          const pveTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().PveStageTableByStageId.getValue(openTab.BattleLv);
          const BattleLv = pveTab ? (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(pveTab.StageName) : "";
          const PlayerLv = openTab.PlayerLv;
          const CreateDay = openTab.CreateDay;
          const Privileged = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PrivilegedType[openTab.Privileged]);
          const VipLv = openTab.VipLv;
          const tipsArr = [BattleLv, PlayerLv, CreateDay, VipLv, Privileged];
          let tips = "";
          tips = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString(openTab.TipsKey, tipsArr);
          (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
            error: Error()
          }), ShowTips) : ShowTips)(tips);
        } // 检查是否有特殊系统开启


        checkFunctionRefresh(data) {
          // 战令开启
          for (let i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BattlePassTable.length; i++) {
            const passTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().BattlePassTable[i];
            const openFuncName = passTab.OpenFunction;

            if (data.name === openFuncName && data.isOpen) {
              let pass_msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).Msg_GetBattlePassInfoMapReq();
              (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
                error: Error()
              }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).Ptl.GetBattlePassInfoMapReq, pass_msg);
              break;
            }
          }

          switch (data.name) {
            //试炼开启
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask:
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask2:
              // 试炼开启
              if (data.isOpen) {
                let trial_msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).Msg_GetNewPlayerTrialMapReq();
                (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
                  error: Error()
                }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).Ptl.GetNewPlayerTrialMapReq, trial_msg);
              }

              break;
            // 精彩活动开启

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_SpecialGiftDaily:
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_SpecialGiftWeekly:
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_SpecialGiftMonthly:
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).openFuncRed);
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_NewPlayerMall:
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_NewPlayerMall2:
              let fixed_msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).Msg_GetFixedShopInfoMapReq();
              (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
                error: Error()
              }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).Ptl.GetFixedShopInfoMapReq, fixed_msg);
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_AutoSelectRogue:
              // SettingsManager.ins.setSetting("isAutoSelectRogue", data.isOpen);
              break;
            // 百抽活动

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_SignInGift:
              let sign_msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).Msg_GetSignInGiftInfoReq();
              (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
                error: Error()
              }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).Ptl.GetSignInGiftInfoReq, sign_msg);
              break;

            default:
              break;
          }
        }
        /**
         * 需要等待弹窗开启功能弹窗的列表
         */


        get waitPopOpenName() {
          if (!this._waitPopOpenName) {
            this._waitPopOpenName = [];
          }

          return this._waitPopOpenName;
        }

        set waitPopOpenName(list) {
          this._waitPopOpenName = list;
        }

      });

      OpenFunctionMgr._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bbcbff3b67a7ca7716ff37b0142b2114e443e065.js.map