System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsControl, AWARD_STATE, RedMgr, RedDotType, tab, _dec, _class, _class2, _crd, ccclass, property, SignInGiftData;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAWARD_STATE(extras) {
    _reporterNs.report("AWARD_STATE", "../../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
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
      AbsControl = _unresolved_2.AbsControl;
    }, function (_unresolved_3) {
      AWARD_STATE = _unresolved_3.AWARD_STATE;
    }, function (_unresolved_4) {
      RedMgr = _unresolved_4.RedMgr;
    }, function (_unresolved_5) {
      RedDotType = _unresolved_5.RedDotType;
    }, function (_unresolved_6) {
      tab = _unresolved_6.tab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3a0c5dNxCpJEafu3iA9oJLn", "SignInGiftData", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SignInGiftData", SignInGiftData = (_dec = ccclass('SignInGiftData'), _dec(_class = (_class2 = class SignInGiftData extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        constructor(...args) {
          super(...args);
          this.curSignDay = -1;
          this.gotSignDays = [];
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new SignInGiftData();
          }

          return this._instance;
        }

        initSignInGift(msg) {
          this.curSignDay = msg.signInDays ? msg.signInDays : 0;
          this.gotSignDays = msg.receivedDays ? msg.receivedDays : [];
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).SignGiftRed);
        }

        getSignDay() {
          return this.curSignDay;
        }

        getGotGignDays() {
          return this.gotSignDays;
        } // 有可领取的奖励


        canReceive() {
          return this.gotSignDays.length < this.curSignDay;
        } // 判断活动是否结束


        checkActivityEnd() {
          return this.gotSignDays.length === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().SignInGiftTable.length;
        } // 获取礼品


        receiveGift(day) {
          this.gotSignDays = this.gotSignDays.concat(day);
        } // 判断当前签到奖励状态


        getSignState(day) {
          if (day > this.curSignDay) {
            return (_crd && AWARD_STATE === void 0 ? (_reportPossibleCrUseOfAWARD_STATE({
              error: Error()
            }), AWARD_STATE) : AWARD_STATE).LOCK;
          } else {
            if (this.gotSignDays.indexOf(day) > -1) {
              return (_crd && AWARD_STATE === void 0 ? (_reportPossibleCrUseOfAWARD_STATE({
                error: Error()
              }), AWARD_STATE) : AWARD_STATE).GOT;
            } else {
              return (_crd && AWARD_STATE === void 0 ? (_reportPossibleCrUseOfAWARD_STATE({
                error: Error()
              }), AWARD_STATE) : AWARD_STATE).RECEIVE;
            }
          }
        } // 获取当前没有领取奖励的id


        getNotGetData() {
          const tabs = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().SignInGiftTable;

          for (let i = 0; i < tabs.length; i++) {
            const day = tabs[i].Day;

            if (this.curSignDay >= day) {
              // 表示可领的奖励
              if (this.gotSignDays.indexOf(day) > -1) {
                // 已经领过
                continue;
              } else {
                return tabs[i];
              }
            } else {
              break;
            }
          }

          return (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().SignInGiftTableByDay.getValue(this.curSignDay);
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=33da769cd1b027be03df6fdfdab1b3176c154717.js.map