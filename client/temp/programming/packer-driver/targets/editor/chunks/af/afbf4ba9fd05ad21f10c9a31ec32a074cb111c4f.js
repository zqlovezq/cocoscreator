System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "client_protocol", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, log, AbsControl, EventMgr, proto, EquipData, Net, tab, LocalEvent, ShowTips, LangMgr, EquipControl, _crd, ccclass, property;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipData(extras) {
    _reporterNs.report("EquipData", "./EquipData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  _export("EquipControl", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      log = _cc.log;
    }, function (_unresolved_2) {
      AbsControl = _unresolved_2.AbsControl;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_4) {
      EquipData = _unresolved_4.EquipData;
    }, function (_unresolved_5) {
      Net = _unresolved_5.Net;
    }, function (_unresolved_6) {
      tab = _unresolved_6.tab;
    }, function (_unresolved_7) {
      LocalEvent = _unresolved_7.LocalEvent;
    }, function (_unresolved_8) {
      ShowTips = _unresolved_8.ShowTips;
    }, function (_unresolved_9) {
      LangMgr = _unresolved_9.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "327087MOGBPKr5qzJsC4poU", "EquipControl", undefined);

      __checkObsolete__(['Node', '_decorator', 'js', 'log', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 装备 */

      _export("EquipControl", EquipControl = class EquipControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        static get ins() {
          if (null == this._instance) {
            this._instance = new EquipControl();
          }

          return this._instance;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ChangeEquipRsp, this.on_s2c_ChangeEquipRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.EnhanceEquipRsp, this.on_s2c_EnhanceEquipRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.RefineEquipRsp, this.on_s2c_RefineEquipRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpdateHeroMasterLv, this.on_s2c_UpdateEquipMasterRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.DecomposeEquipRsp, this.on_s2c_DecomposeEquipRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.FeatherRecastRsp, this.on_s2c_FeatherRecastRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.FeatherRecastConfirmRsp, this.on_s2c_FeatherRecastConfirmRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.SwitchEquipRsp, this.on_s2c_SwitchEquipRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UndressEquipRsp, this.on_s2c_UndressEquipRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.LockEquipRsp, this.on_s2c_LockEquipRsp, this);
        }

        requestEquips() {}
        /**
         * 请求替换 穿戴 装备
         */


        reqChangEquips(heroClass, euqipIds) {
          let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_ChangeEquipReq();
          msg.equipList = euqipIds;
          msg.heroClass = heroClass;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ChangeEquipReq, msg);
        }
        /**请求一键穿戴装备 */


        reqOnekeyEquips(heroClass) {
          let equipList = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.getEquipBagByHeroClass(heroClass);
          let types = [(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).EquipType.EquipType_Gloves, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).EquipType.EquipType_Clothing, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).EquipType.EquipType_Cloak, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).EquipType.EquipType_Hat];
          let slots = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.getEquipContainerDataByHeroClass(heroClass).slotData;
          let ids = [];

          for (let key in types) {
            let type = types[key];
            let slot = slots[type];

            if (slot && slot.equipId != 0) {
              let equipInfo = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
                error: Error()
              }), EquipData) : EquipData).ins.getEquipInfoById(slot.equipId);
              let currInfo = null;

              for (let value of equipList) {
                if (value.equipTable.Type == type) {
                  if (value.score > equipInfo.score) {
                    if (currInfo) {
                      if (value.score > currInfo.score) {
                        currInfo = value;
                      }
                    } else {
                      currInfo = value;
                    }
                  }
                }
              }

              if (currInfo) {
                ids.push(currInfo.id);
              }
            } else {
              let currInfo = null;

              for (let value of equipList) {
                if (value.equipTable.Type == type) {
                  if (currInfo) {
                    if (value.score > currInfo.score) {
                      currInfo = value;
                    }
                  } else {
                    currInfo = value;
                  }
                }
              }

              if (currInfo) {
                ids.push(currInfo.id);
              }
            }
          }

          if (ids.length > 0) {
            this.reqChangEquips(heroClass, ids);
          } else {
            //ShowTips("没有可穿戴的装备")
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("ui_equip_28"));
          }
        }
        /**
         * 请求强化装备
         */


        reqEnhanceEquips(heroClass, slotList) {
          let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_EnhanceEquipReq();
          msg.slotList = slotList;
          msg.heroClass = heroClass;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.EnhanceEquipReq, msg);
        }
        /**请求添加测试装备 */


        reqAddTestEquips() {// let msg = new proto.Msg_FinishStageReq;
          // Net.Send(proto.Ptl.FinishStageReq, msg);
        }
        /**
        * 请求淬炼装备
        */


        reqRefineEquips(heroClass, slotIndex) {
          let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_RefineEquipReq();
          msg.slotIndex = slotIndex;
          msg.heroClass = heroClass;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.RefineEquipReq, msg);
        }
        /**
        * 请求分解装备
        */


        reqDecomposeEquips(equipIds) {
          log("分解---------", equipIds);
          let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_DecomposeEquipReq();
          msg.equipList = equipIds;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.DecomposeEquipReq, msg);
        }
        /**
        * 请求羽毛重铸
        */


        reqFeatherRecast(equipId) {
          log("重铸---------", equipId);
          let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_FeatherRecastReq();
          msg.equipId = equipId;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.FeatherRecastReq, msg);
        }
        /**
        * 请求羽毛重铸
        */


        reqFeatherRecastConfirmReq(equipId, result) {
          log("重铸---------结果------", equipId);
          let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_FeatherRecastConfirmReq();
          msg.equipId = equipId;
          msg.result = result;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.FeatherRecastConfirmReq, msg);
        }
        /**
         * 请求交换装备
         * @param id1 
         * @param id2 
         * @param heroClass1 
         * @param heroClass2 
         */


        reqSwitchEquip(id1, id2, heroClass1, heroClass2) {
          let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_SwitchEquipReq();
          msg.equipId1 = id1;
          msg.equipId2 = id2;
          msg.heroClass1 = heroClass1;
          msg.heroClass2 = heroClass2;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.SwitchEquipReq, msg);
        }

        reqUndressEquip(id, heroClass) {
          let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_UndressEquipReq();
          msg.equipId = id;
          msg.heroClass = heroClass;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UndressEquipReq, msg);
        }

        reqLockEquip(id, isLock) {
          let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_LockEquipReq();
          msg.equipId = id;
          msg.state = isLock ? 1 : 0;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.LockEquipReq, msg);
        }
        /**
         * 替换装备成功
         * @param msg 
         */


        on_s2c_ChangeEquipRsp(msg) {
          if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
              error: Error()
            }), EquipData) : EquipData).ins.changeEquip(msg.equipList, msg.heroClass);
          }
        }
        /**
         * 强化装备成功
         * @param msg 
         */


        on_s2c_EnhanceEquipRsp(msg) {
          if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
              error: Error()
            }), EquipData) : EquipData).ins.updateEquipSlotData(msg.heroClass, msg.updateData);
          }
        }
        /**
        * 淬炼装备成功
        * @param msg 
        */


        on_s2c_RefineEquipRsp(msg) {
          if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
              error: Error()
            }), EquipData) : EquipData).ins.updateEquipSlotData(msg.heroClass, [msg.updateData]);
          }
        }
        /**
         * 更新装备大师数据
         * @param msg 
         */


        on_s2c_UpdateEquipMasterRsp(msg) {
          (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.updateEquipMasterData(msg.heroClass, msg.masterData);
        }
        /**
        * 分解装备成功
        * @param msg 
        */


        on_s2c_DecomposeEquipRsp(msg) {
          if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {// EquipData.ins.removeEquipByIds(msg.equipList);
          } // EquipData.ins.updateEquipMasterData(msg.heroClass,msg.masterData);

        }
        /**
         * 羽毛重铸
         * @param msg 
         */


        on_s2c_FeatherRecastRsp(msg) {
          if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
              error: Error()
            }), EquipData) : EquipData).ins.updateEquipInfo(msg.data);
          } // EquipData.ins.updateEquipMasterData(msg.heroClass,msg.masterData);

        }
        /**
        * 羽毛重铸
        * @param msg 
        */


        on_s2c_FeatherRecastConfirmRsp(msg) {
          if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
              error: Error()
            }), EquipData) : EquipData).ins.updateEquipInfo(msg.data);
          } // EquipData.ins.updateEquipMasterData(msg.heroClass,msg.masterData);

        }

        on_s2c_SwitchEquipRsp(msg) {
          if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            let id1 = msg.equipId2;
            let id2 = msg.equipId1; //req的参数rsp时会原封返回给前端，前端需要根据回传自己做脱卸或穿戴操作

            (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
              error: Error()
            }), EquipData) : EquipData).ins.switchEquip(id1, id2, msg.heroClass1, msg.heroClass2); //    if(msg.equipId1&&msg.equipId1!=0){
            //    }

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).Equip_Chang, msg.heroClass1, id1);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).Equip_Chang, msg.heroClass2, id2); // EquipData.ins.updateEquipInfo();
          } // EquipData.ins.updateEquipMasterData(msg.heroClass,msg.masterData);

        }

        on_s2c_UndressEquipRsp(msg) {
          if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            // EquipData.ins.switchEquip(msg.equipId1,msg.equipId2,msg.heroClass1,msg.heroClass2)
            // EquipData.ins.updateEquipInfo();
            (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
              error: Error()
            }), EquipData) : EquipData).ins.undressEquip(msg.equipId, msg.heroClass);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).Equip_Chang, msg.heroClass, msg.equipId);
          }
        }

        on_s2c_LockEquipRsp(msg) {
          if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            // EquipData.ins.switchEquip(msg.equipId1,msg.equipId2,msg.heroClass1,msg.heroClass2)
            // EquipData.ins.updateEquipInfo();
            (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
              error: Error()
            }), EquipData) : EquipData).ins.lockEquip(msg.equipId, msg.state == 1); //  EventMgr.emitLocal(LocalEvent.Equip_Chang,msg.heroClass,msg.equipId);
          }
        }

      });

      EquipControl._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=afbf4ba9fd05ad21f10c9a31ec32a074cb111c4f.js.map