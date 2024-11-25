System.register(["__unresolved_0", "cc", "client_protocol", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "cc/env"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Asset, JsonAsset, Material, SpriteAtlas, SpriteFrame, _decorator, resources, sp, proto, AbsControl, LocalEvent, EventMgr, Net, SceneMgr, FightRootControl, tab, FightData, TestAttr, ViewName, UIMgr, RoleData, CommonTipsPop, LangMgr, loadByResMap, Loading, ShaderUtil, Func, GuideController, PvpControl, DataViewReader, PREVIEW, FightMsgControl, _crd, ccclass, property;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneMgr(extras) {
    _reporterNs.report("SceneMgr", "../mgr/SceneMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightRootControl(extras) {
    _reporterNs.report("FightRootControl", "./FightRootControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "./data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTestAttr(extras) {
    _reporterNs.report("TestAttr", "../../TestAttr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../model/role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTipsPop(extras) {
    _reporterNs.report("CommonTipsPop", "../model/common/CommonTipsPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfloadByResMap(extras) {
    _reporterNs.report("loadByResMap", "../mgr/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoading(extras) {
    _reporterNs.report("Loading", "../model/Loading", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShaderUtil(extras) {
    _reporterNs.report("ShaderUtil", "../utils/ShaderUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuideController(extras) {
    _reporterNs.report("GuideController", "../guide/GuideController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPvpControl(extras) {
    _reporterNs.report("PvpControl", "./pvp/PvpControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataViewReader(extras) {
    _reporterNs.report("DataViewReader", "../net/DataViewRW", _context.meta, extras);
  }

  _export("FightMsgControl", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Asset = _cc.Asset;
      JsonAsset = _cc.JsonAsset;
      Material = _cc.Material;
      SpriteAtlas = _cc.SpriteAtlas;
      SpriteFrame = _cc.SpriteFrame;
      _decorator = _cc._decorator;
      resources = _cc.resources;
      sp = _cc.sp;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_2) {
      AbsControl = _unresolved_2.AbsControl;
    }, function (_unresolved_3) {
      LocalEvent = _unresolved_3.LocalEvent;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
    }, function (_unresolved_5) {
      Net = _unresolved_5.Net;
    }, function (_unresolved_6) {
      SceneMgr = _unresolved_6.SceneMgr;
    }, function (_unresolved_7) {
      FightRootControl = _unresolved_7.FightRootControl;
    }, function (_unresolved_8) {
      tab = _unresolved_8.tab;
    }, function (_unresolved_9) {
      FightData = _unresolved_9.FightData;
    }, function (_unresolved_10) {
      TestAttr = _unresolved_10.TestAttr;
    }, function (_unresolved_11) {
      ViewName = _unresolved_11.ViewName;
    }, function (_unresolved_12) {
      UIMgr = _unresolved_12.UIMgr;
    }, function (_unresolved_13) {
      RoleData = _unresolved_13.RoleData;
    }, function (_unresolved_14) {
      CommonTipsPop = _unresolved_14.CommonTipsPop;
    }, function (_unresolved_15) {
      LangMgr = _unresolved_15.LangMgr;
    }, function (_unresolved_16) {
      loadByResMap = _unresolved_16.loadByResMap;
    }, function (_unresolved_17) {
      Loading = _unresolved_17.Loading;
    }, function (_unresolved_18) {
      ShaderUtil = _unresolved_18.ShaderUtil;
    }, function (_unresolved_19) {
      Func = _unresolved_19.Func;
    }, function (_unresolved_20) {
      GuideController = _unresolved_20.GuideController;
    }, function (_unresolved_21) {
      PvpControl = _unresolved_21.PvpControl;
    }, function (_unresolved_22) {
      DataViewReader = _unresolved_22.DataViewReader;
    }, function (_ccEnv) {
      PREVIEW = _ccEnv.PREVIEW;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "61fe41UcJ5Gb53TCmot0IeZ", "FightMsgControl", undefined);

      __checkObsolete__(['Asset', 'JsonAsset', 'Material', 'Node', 'Prefab', 'SpriteAtlas', 'SpriteFrame', '_decorator', 'error', 'js', 'log', 'resources', 'setRandGenerator', 'sp', 'sys', 'url']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FightMsgControl", FightMsgControl = class FightMsgControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        constructor() {
          super(...arguments);
          this.isTest = false;
          this.reviveCallBack = void 0;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new FightMsgControl();
          }

          return this._instance;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.FightInfoPush, this.on_s2c_Msg_FightInfoPush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.FinishStageRsp, this.on_s2c_Msg_FinishStageRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReviveOnStageRsp, this.on_s2c_ReviveOnStageRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.FincaBattleFightRsp, this.on_s2c_FincaBattleFightRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).FightResLoadComplete, this.onFightResLoadComplete, this);
        }

        startState(stageId) {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_StartStageReq();
          msg.stageId = stageId;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.StartStageReq, msg);
          this.isTest = false;
        } //----------------处理回调---------------------


        onFightResLoadComplete() {
          console.log("onFightResLoadComplete-----------");

          if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.isPvp) {
            (_crd && PvpControl === void 0 ? (_reportPossibleCrUseOfPvpControl({
              error: Error()
            }), PvpControl) : PvpControl).ins.start();
            return;
          }

          (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.loadLevelJson();
          (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.initSkill();
          (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.start();
        }

        on_s2c_Msg_FightInfoPush(msg) {
          if (PREVIEW) {
            console.warn("PVE人物数据\n", JSON.stringify(msg.info));
          }

          this.setFightInfo(msg);
          this.isTest = false;
        }

        setFightInfo(msg) {
          (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.init();
          (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.setFightInfo(msg.info);
          (_crd && SceneMgr === void 0 ? (_reportPossibleCrUseOfSceneMgr({
            error: Error()
          }), SceneMgr) : SceneMgr).ins.enterFight();
        }

        on_s2c_Msg_FinishStageRsp(msg) {
          console.log("\u83B7\u53D6\u6700\u65B0\u5173\u5361\u4FE1\u606F" + (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.fightResult);
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;

          if (msg.stageId == 0) {
            (_crd && CommonTipsPop === void 0 ? (_reportPossibleCrUseOfCommonTipsPop({
              error: Error()
            }), CommonTipsPop) : CommonTipsPop).create((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_exception_1"), () => {
              (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
                error: Error()
              }), FightRootControl) : FightRootControl).ins.enterMain();
            });
            return;
          }

          if ((_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.fightResult !== (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_FinishStageReq.Result.Quit) {
            (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.curClearStageId = msg.stageId;
          }

          if (msg.stageId === 50101) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).FightAssociationBossResultPop,
              data: {
                cb: () => {
                  (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                    error: Error()
                  }), UIMgr) : UIMgr).ins.show({
                    viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                      error: Error()
                    }), ViewName) : ViewName).FightWinPop,
                    data: msg.rewards
                  });
                }
              }
            });
          } else {
            if ((_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
              error: Error()
            }), FightRootControl) : FightRootControl).ins.fightResult == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_FinishStageReq.Result.Win) {
              if ((_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
                error: Error()
              }), GuideController) : GuideController).ins.isGuiding() && (msg.stageId === 1 || msg.stageId === 103)) {
                (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                  error: Error()
                }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                  error: Error()
                }), LocalEvent) : LocalEvent).FightWin);
                (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
                  error: Error()
                }), GuideController) : GuideController).ins.setRewards(msg.rewards);
              } else {
                (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                  error: Error()
                }), UIMgr) : UIMgr).ins.show({
                  viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                    error: Error()
                  }), ViewName) : ViewName).FightWinPop,
                  data: msg.rewards
                });
              }

              if (msg.stageId === 102 && !(_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.clientData.failTimes) {
                (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                  error: Error()
                }), RoleData) : RoleData).ins.setClientData("failTimes", "true");
              }
            } else if ((_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
              error: Error()
            }), FightRootControl) : FightRootControl).ins.fightResult == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_FinishStageReq.Result.Lose) {
              // 显示失败
              (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                error: Error()
              }), UIMgr) : UIMgr).ins.show({
                viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                  error: Error()
                }), ViewName) : ViewName).FightLosePop,
                data: msg.rewards
              });
            }
          }

          var pveTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().PveStageTableByStageId.getValue(msg.stageId);

          if (pveTab.StageType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PveStageType.PveStageType_EliteChapter) {
            // 精英关卡信息
            var elite_msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_GetEliteStageInfoReq();
            (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
              error: Error()
            }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl.GetEliteStageInfoReq, elite_msg);
          } else if (pveTab.StageType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PveStageType.PveStageType_MainChapter) {
            // 普通关卡信息
            var req = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_GetMainStageInfoReq();
            (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
              error: Error()
            }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl.GetMainStageInfoReq, req);
          }
        }

        sendFightResult(req) {
          console.log("发送战斗结果   是否胜利？", req);
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.FinishStageReq, req); // Msg_GetMainStageInfoReq
        }
        /**
        * 请求复活
        */


        requestReviveOnStage(reviveCallBack) {
          this.reviveCallBack = reviveCallBack;
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_ReviveOnStageReq(); // msg.id = id;

          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReviveOnStageReq, msg);
        } // 复活返回


        on_s2c_ReviveOnStageRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            if (this.reviveCallBack) {
              this.reviveCallBack();
            }
          }

          this.reviveCallBack = null;
        }
        /** pvp战斗 */


        on_s2c_FincaBattleFightRsp(msg) {
          if (msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            return;
          }

          if (msg.isSweep) {
            return;
          } // let reader = new DataViewReader(msg.recording)
          // let unit8 = new Uint8Array(reader.getBuffer(), reader.getOffset() + reader.getPos(), reader.getLen())


          var pb = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto)["FightPvP"].decode(msg.recording);
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).toNumber52(pb);
          (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.init();
          (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.fincaBattleFightRsp = msg;
          (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.setPvpInfo(pb);
          (_crd && SceneMgr === void 0 ? (_reportPossibleCrUseOfSceneMgr({
            error: Error()
          }), SceneMgr) : SceneMgr).ins.enterFight();
        }

        getTestHeros() {
          // let tests = [
          //     { id: 1, level: 1, itemId: 1501, star: 3, skillList: [], attrList: [{ type: tab.AttrType.AttrType_Attack, value: 100 }, { type: tab.AttrType.AttrType_Hp, value: 100 }, { type: tab.AttrType.AttrType_Defence, value: 100 }] },
          //     { id: 2, level: 1, itemId: 4403, star: 5, skillList: [], attrList: [{ type: tab.AttrType.AttrType_Attack, value: 100 }, { type: tab.AttrType.AttrType_Hp, value: 100 }, { type: tab.AttrType.AttrType_Defence, value: 100 }] },
          //     { id: 3, level: 1, itemId: 1301, star: 3, skillList: [], attrList: [{ type: tab.AttrType.AttrType_Attack, value: 100 }, { type: tab.AttrType.AttrType_Hp, value: 100 }, { type: tab.AttrType.AttrType_Defence, value: 100 }] },
          //     { id: 4, level: 1, itemId: 1201, star: 3, skillList: [], attrList: [{ type: tab.AttrType.AttrType_Attack, value: 100 }, { type: tab.AttrType.AttrType_Hp, value: 100 }, { type: tab.AttrType.AttrType_Defence, value: 100 }] },
          //     { id: 5, level: 1, itemId: 1101, star: 3, skillList: [], attrList: [{ type: tab.AttrType.AttrType_Attack, value: 100 }, { type: tab.AttrType.AttrType_Hp, value: 100 }, { type: tab.AttrType.AttrType_Defence, value: 100 }] },
          // ]
          var tests = [{
            id: 5,
            level: 1,
            itemId: 4301,
            star: 21,
            skillList: [],
            attrList: []
          }, {
            id: 4,
            level: 1,
            itemId: 4103,
            star: 21,
            skillList: [],
            attrList: []
          }, {
            id: 3,
            level: 1,
            itemId: 4204,
            star: 21,
            skillList: [],
            attrList: []
          }, {
            id: 2,
            level: 1,
            itemId: 4401,
            star: 21,
            skillList: [],
            attrList: []
          }, {
            id: 1,
            level: 1,
            itemId: 4503,
            star: 21,
            skillList: [],
            attrList: []
          }];
          var list = [];

          for (var index = 0; index < tests.length; index++) {
            var v = tests[index];
            v.attrList = [].concat((_crd && TestAttr === void 0 ? (_reportPossibleCrUseOfTestAttr({
              error: Error()
            }), TestAttr) : TestAttr).attack);
            var hero = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).HeroFightData();
            hero.id = v.id;
            hero.level = v.level;
            hero.itemId = v.itemId;
            hero.star = v.star;
            hero.skillList = v.skillList;
            hero.attrList = v.attrList;
            list.push(hero);
          }

          return list;
        }

        testFight(state) {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_FightInfoPush();
          var info = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightInfo();
          info.stageId = state || 102 || 99999;
          info.heroData = this.getTestHeros();
          info.skillList = [];
          msg.info = info;
          this.isTest = true;
          this.setFightInfo(msg);
        }

        testFightPvp() {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).FightPvP();
          msg.fightInfo = [];
          msg.fightFlow = [];

          for (var index = 0; index < 2; index++) {
            var pvpInfo = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_PvPFightInfo();
            pvpInfo.roleId = index.toString();
            pvpInfo.books = [22501, 22404];
            msg.fightInfo.push(pvpInfo);
            var info = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).FightInfo();
            info.heroData = this.getTestHeros();

            for (var i = 0; i < info.heroData.length; i++) {
              var element = info.heroData[i];
              element.id = element.id + index * 5;
            }

            info.stageId = 60001;
            info.skillList = [];
            info.bufferList = [];
            info.bookList = [];
            pvpInfo.fightInfo = info;
          }

          this.isTest = true;
          (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.init();
          (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.setPvpInfo(msg);
          (_crd && SceneMgr === void 0 ? (_reportPossibleCrUseOfSceneMgr({
            error: Error()
          }), SceneMgr) : SceneMgr).ins.enterFight();
        }

        testFightPvpMsg() {
          resources.load("pvp/1v1", Asset, (error, data) => {
            if (error) {
              console.log("文件读取错误");
              return;
            } // Net.onMessage({data:data._buffer} as any)


            var reader = new (_crd && DataViewReader === void 0 ? (_reportPossibleCrUseOfDataViewReader({
              error: Error()
            }), DataViewReader) : DataViewReader)(data["_buffer"]);
            var unit8 = new Uint8Array(reader.getBuffer(), reader.getOffset() + reader.getPos(), reader.getLen());
            var pb = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto)["FightPvP"].decode(unit8);
            (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
              error: Error()
            }), Net) : Net).toNumber52(pb);
            this.isTest = true;
            (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.init();
            pb.fightInfo[0].books = [22501, 22404];
            pb.fightInfo[1].books = [22501, 22404];
            (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.setPvpInfo(pb);
            (_crd && SceneMgr === void 0 ? (_reportPossibleCrUseOfSceneMgr({
              error: Error()
            }), SceneMgr) : SceneMgr).ins.enterFight();
          });
        }

        loadRes(fb) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.isPvp) {
              _this.loadlPvpRes(fb);

              return;
            }

            yield _this.loadJson((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.stageJsonPath, JsonAsset);

            if (resources.get((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.stageJsonPath, JsonAsset) == null) {
              if (resources.getInfoWithPath((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                error: Error()
              }), FightData) : FightData).ins.stageJsonPath) == null) {
                console.error("关卡配置不存在", (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                  error: Error()
                }), FightData) : FightData).ins.stageJsonPath);
                return;
              }

              console.log("关卡配置读取失败", (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                error: Error()
              }), FightData) : FightData).ins.stageJsonPath);
              return;
            }

            (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.loadLevelJson();
            console.log((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.levelJson);
            var list = [];
            list.push({
              url: (_crd && ShaderUtil === void 0 ? (_reportPossibleCrUseOfShaderUtil({
                error: Error()
              }), ShaderUtil) : ShaderUtil).flashWhiteSprite(),
              type: Material
            });
            list.push({
              url: (_crd && ShaderUtil === void 0 ? (_reportPossibleCrUseOfShaderUtil({
                error: Error()
              }), ShaderUtil) : ShaderUtil).flashWhiteSpine(),
              type: Material
            });
            list.push({
              url: (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                error: Error()
              }), FightData) : FightData).ins.stageTab.Background,
              type: SpriteFrame
            });
            var animIds = [];
            var skillIds = [];

            var _loop = function* _loop(index) {
              var v = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                error: Error()
              }), FightData) : FightData).ins.levelJson.phaseList[index];
              v.times.forEach(v => {
                if (v.isMonster()) {
                  var monster = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                    error: Error()
                  }), tab) : tab).getData().MonsterTableById.getValue(v.monsterId);

                  if (monster) {
                    if (monster.MonsterType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                      error: Error()
                    }), tab) : tab).MonsterType.MonsterType_BossMonster || index == 0 && v.time < 120) {
                      animIds.push(monster.IdleAnimationId);
                      animIds.push(monster.WalkAnimationId);
                      animIds.push(monster.DeadAnimationId);
                      animIds.push(monster.BornAnimationId);
                      animIds.push(monster.IdleAnimationId);
                      skillIds.push(monster.SkillIds);
                    }
                  }
                }
              });
            };

            for (var index = 0; index < (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.levelJson.phaseList.length; index++) {
              yield* _loop(index);
            }

            for (var _index = 0; _index < (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.fightInfo.heroData.length; _index++) {
              var element = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                error: Error()
              }), FightData) : FightData).ins.fightInfo.heroData[_index];
              var heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().HeroTableById.getValue(element.itemId);

              if (heroTab) {
                animIds.push(heroTab.Idle);
              }
            }

            for (var _index2 = 0; _index2 < animIds.length; _index2++) {
              var v = animIds[_index2];
              var animTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().AnimationTableById.getValue(v);

              if (animTab) {
                if ((_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                  error: Error()
                }), Func) : Func).forBy(list, "url", animTab.Path)) {
                  continue;
                }

                var assetType = void 0;

                switch (animTab.Type) {
                  case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                    error: Error()
                  }), tab) : tab).AnimationType.AnimationType_SpriteFrame:
                    assetType = SpriteFrame;
                    break;

                  case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                    error: Error()
                  }), tab) : tab).AnimationType.AnimationType_SkeletonData:
                    assetType = sp.SkeletonData;
                    break;

                  case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                    error: Error()
                  }), tab) : tab).AnimationType.AnimationType_Plist:
                    assetType = SpriteAtlas;
                    break;
                }

                if (assetType == null) {
                  continue;
                }

                list.push({
                  url: animTab.Path,
                  type: assetType
                });
              }
            }

            console.log(list);
            yield (_crd && loadByResMap === void 0 ? (_reportPossibleCrUseOfloadByResMap({
              error: Error()
            }), loadByResMap) : loadByResMap)(list, list.length, progress => {
              (_crd && Loading === void 0 ? (_reportPossibleCrUseOfLoading({
                error: Error()
              }), Loading) : Loading).setProgress(progress);
            });
            fb && fb();
          })();
        }

        loadJson(url, type) {
          return _asyncToGenerator(function* () {
            return new Promise(resolve => {
              resources.load((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                error: Error()
              }), FightData) : FightData).ins.stageJsonPath, JsonAsset, null, (error, resource) => {
                if (error) {
                  console.log("加载失败", error);
                  resolve(null);
                  return;
                }

                resolve(resource);
              });
            });
          })();
        }

        loadlPvpRes(fb) {
          return _asyncToGenerator(function* () {
            var list = [];
            list.push({
              url: (_crd && ShaderUtil === void 0 ? (_reportPossibleCrUseOfShaderUtil({
                error: Error()
              }), ShaderUtil) : ShaderUtil).flashWhiteSprite(),
              type: Material
            });
            list.push({
              url: (_crd && ShaderUtil === void 0 ? (_reportPossibleCrUseOfShaderUtil({
                error: Error()
              }), ShaderUtil) : ShaderUtil).flashWhiteSpine(),
              type: Material
            });
            var animIds = [];

            for (var index = 0; index < (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.fightPvp.fightInfo.length; index++) {
              var info = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                error: Error()
              }), FightData) : FightData).ins.fightPvp.fightInfo[index];

              for (var j = 0; j < info.fightInfo.heroData.length; j++) {
                var element = info.fightInfo.heroData[j];
                var heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).getData().HeroTableById.getValue(element.itemId);

                if (heroTab) {
                  animIds.push(heroTab.Idle);
                }
              }
            }

            for (var _index3 = 0; _index3 < animIds.length; _index3++) {
              var v = animIds[_index3];
              var animTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().AnimationTableById.getValue(v);

              if (animTab) {
                if ((_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                  error: Error()
                }), Func) : Func).forBy(list, "url", animTab.Path)) {
                  continue;
                }

                var assetType = void 0;

                switch (animTab.Type) {
                  case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                    error: Error()
                  }), tab) : tab).AnimationType.AnimationType_SpriteFrame:
                    assetType = SpriteFrame;
                    break;

                  case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                    error: Error()
                  }), tab) : tab).AnimationType.AnimationType_SkeletonData:
                    assetType = sp.SkeletonData;
                    break;

                  case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                    error: Error()
                  }), tab) : tab).AnimationType.AnimationType_Plist:
                    assetType = SpriteAtlas;
                    break;
                }

                if (assetType == null) {
                  continue;
                }

                list.push({
                  url: animTab.Path,
                  type: assetType
                });
              }
            }

            yield (_crd && loadByResMap === void 0 ? (_reportPossibleCrUseOfloadByResMap({
              error: Error()
            }), loadByResMap) : loadByResMap)(list, list.length, progress => {
              (_crd && Loading === void 0 ? (_reportPossibleCrUseOfLoading({
                error: Error()
              }), Loading) : Loading).setProgress(progress);
            });
            fb && fb();
          })();
        }

      });

      FightMsgControl._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=21818a38df0d175e1afded7460331d1bd8ebed90.js.map