System.register(["__unresolved_0", "cc", "__unresolved_1", "client_protocol", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsControl, proto, EventMgr, Net, MALLNAME, RANKING_TYPE, FincaFightData, tab, UIMgr, ItemData, ViewName, RedMgr, RedDotType, _dec, _class, _class2, _crd, ccclass, property, FincaFightControl;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMALLNAME(extras) {
    _reporterNs.report("MALLNAME", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRANKING_TYPE(extras) {
    _reporterNs.report("RANKING_TYPE", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightData(extras) {
    _reporterNs.report("FincaFightData", "./FincaFightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
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
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }, function (_unresolved_4) {
      Net = _unresolved_4.Net;
    }, function (_unresolved_5) {
      MALLNAME = _unresolved_5.MALLNAME;
      RANKING_TYPE = _unresolved_5.RANKING_TYPE;
    }, function (_unresolved_6) {
      FincaFightData = _unresolved_6.FincaFightData;
    }, function (_unresolved_7) {
      tab = _unresolved_7.tab;
    }, function (_unresolved_8) {
      UIMgr = _unresolved_8.UIMgr;
    }, function (_unresolved_9) {
      ItemData = _unresolved_9.ItemData;
    }, function (_unresolved_10) {
      ViewName = _unresolved_10.ViewName;
    }, function (_unresolved_11) {
      RedMgr = _unresolved_11.RedMgr;
    }, function (_unresolved_12) {
      RedDotType = _unresolved_12.RedDotType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d5562fQKNVNX5nMR9I3tVJV", "FincaFightControl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FincaFightControl", FincaFightControl = (_dec = ccclass('FincaFightControl'), _dec(_class = (_class2 = class FincaFightControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        static get ins() {
          if (null == this._instance) {
            this._instance = new FincaFightControl();
          }

          return this._instance;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.FincaBattleFightRsp, this.on_s2c_FincaBattleFightRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.SetFincaBattleHeroIdsRsp, this.on_s2c_SetFincaBattleHeroIdsRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.SetFincaBattleBookIdsRsp, this.on_s2c_SetFincaBattleBookIdsRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetFincaBattleOpponentsRsp, this.on_s2c_GetFincaBattleOpponentsRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetFincaBattleFightRecordsRsp, this.on_s2c_GetFincaBattleFightRecordsRsp, this);
        }
        /* -------------------------------------------------------------------------------------------- */
        // 发起庄园战挑战


        reqFincaBattleFight(opponentRoleId, isSweep) {
          let sendMsg = () => {
            let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_FincaBattleFightReq();
            FincaFightControl.isSweepPvp = isSweep;
            msg.isSweep = isSweep;
            msg.opponentRoleId = opponentRoleId;
            (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
              error: Error()
            }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl.FincaBattleFightReq, msg);
          }; // 判断当前次数


          if ((_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.freeTimes > 0 || (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount(85) > 0) {
            sendMsg();
          } else {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).ItemBuyPop,
              data: {
                name: (_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
                  error: Error()
                }), MALLNAME) : MALLNAME).PvpToken
              }
            });
          }
        }

        on_s2c_FincaBattleFightRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.freeTimes = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().FincaFightFreeTimes - msg.freeFightTimes;
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Free_Fight_Token);
        }
        /* -------------------------------------------------------------------------------------------- */
        // 设置庄园战英雄


        reqSetFincaBattleHeroIds(heroIds) {
          // 检测一下首个必须是战士还有职业不能重复
          if ((_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.checkHeroIdsOk()) {
            let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_SetFincaBattleHeroIdsReq();
            msg.heroIds = heroIds;
            (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
              error: Error()
            }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl.SetFincaBattleHeroIdsReq, msg);
          }
        }

        on_s2c_SetFincaBattleHeroIdsRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return; // 保存成功

          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).PVP_Fight_Team);
        }
        /* -------------------------------------------------------------------------------------------- */
        // 设置庄园战秘籍


        reqSetFincaBattleBookIds(bookIds) {
          let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_SetFincaBattleBookIdsReq();
          msg.bookItemIds = bookIds;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.SetFincaBattleBookIdsReq, msg);
        }

        on_s2c_SetFincaBattleBookIdsRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return; // 保存成功

          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).PVP_Fight_Team);
        }
        /* -------------------------------------------------------------------------------------------- */
        // 获取庄园战对手


        reqGetFincaBattleOpponents() {
          let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetFincaBattleOpponentsReq();
          msg.isRefresh = true;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetFincaBattleOpponentsReq, msg);
        }

        on_s2c_GetFincaBattleOpponentsRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
        }
        /* -------------------------------------------------------------------------------------------- */
        // 获取庄园战战斗记录


        reqGetFincaBattleFightRecords() {
          let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetFincaBattleFightRecordsReq();
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetFincaBattleFightRecordsReq, msg);
        }

        on_s2c_GetFincaBattleFightRecordsRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
        }

        reqGetRank() {
          let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetSimpleRankReq();
          msg.rankId = (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).Fight;
          msg.pageIndex = 0;
          msg.pageSize = 3;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetSimpleRankReq, msg);
        }

      }, _class2.isSweepPvp = false, _class2._instance = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c6527f5803b130b569277940d0360aea4b2fc2ab.js.map