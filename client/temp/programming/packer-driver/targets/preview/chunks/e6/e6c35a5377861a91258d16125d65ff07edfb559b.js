System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "client_protocol", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ViewPop, HeroDataControl, DEVELOPTYPE, FincaFightStageViewHero, FincaFightStageViewBook, FincaFightData, ShowTips, UIMgr, LangMgr, ViewName, FincaFightControl, CommonTipsPop, EventMgr, proto, RedMgr, RedDotType, deepClone, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, FincaFightStageView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "../hero/herobag/HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDEVELOPTYPE(extras) {
    _reporterNs.report("DEVELOPTYPE", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightStageViewHero(extras) {
    _reporterNs.report("FincaFightStageViewHero", "./FincaFightStageViewHero", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightStageViewBook(extras) {
    _reporterNs.report("FincaFightStageViewBook", "./FincaFightStageViewBook", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightData(extras) {
    _reporterNs.report("FincaFightData", "./FincaFightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightControl(extras) {
    _reporterNs.report("FincaFightControl", "./FincaFightControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTipsPop(extras) {
    _reporterNs.report("CommonTipsPop", "../common/CommonTipsPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdeepClone(extras) {
    _reporterNs.report("deepClone", "../../utils/GameUtil", _context.meta, extras);
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
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      HeroDataControl = _unresolved_3.HeroDataControl;
    }, function (_unresolved_4) {
      DEVELOPTYPE = _unresolved_4.DEVELOPTYPE;
    }, function (_unresolved_5) {
      FincaFightStageViewHero = _unresolved_5.FincaFightStageViewHero;
    }, function (_unresolved_6) {
      FincaFightStageViewBook = _unresolved_6.FincaFightStageViewBook;
    }, function (_unresolved_7) {
      FincaFightData = _unresolved_7.FincaFightData;
    }, function (_unresolved_8) {
      ShowTips = _unresolved_8.ShowTips;
      UIMgr = _unresolved_8.UIMgr;
    }, function (_unresolved_9) {
      LangMgr = _unresolved_9.LangMgr;
    }, function (_unresolved_10) {
      ViewName = _unresolved_10.ViewName;
    }, function (_unresolved_11) {
      FincaFightControl = _unresolved_11.FincaFightControl;
    }, function (_unresolved_12) {
      CommonTipsPop = _unresolved_12.CommonTipsPop;
    }, function (_unresolved_13) {
      EventMgr = _unresolved_13.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_14) {
      RedMgr = _unresolved_14.RedMgr;
    }, function (_unresolved_15) {
      RedDotType = _unresolved_15.RedDotType;
    }, function (_unresolved_16) {
      deepClone = _unresolved_16.deepClone;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "189f7tjNKNCGpG/akAv3jdx", "FincaFightStageView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'instantiate', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FincaFightStageView", FincaFightStageView = (_dec = ccclass('FincaFightStageView'), _dec2 = property(_crd && FincaFightStageViewHero === void 0 ? (_reportPossibleCrUseOfFincaFightStageViewHero({
        error: Error()
      }), FincaFightStageViewHero) : FincaFightStageViewHero), _dec3 = property(_crd && FincaFightStageViewBook === void 0 ? (_reportPossibleCrUseOfFincaFightStageViewBook({
        error: Error()
      }), FincaFightStageViewBook) : FincaFightStageViewBook), _dec(_class = (_class2 = class FincaFightStageView extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "node_hero", _descriptor, this);

          _initializerDefineProperty(this, "node_book", _descriptor2, this);

          this.refreshMainView = false;
          this.view_type = (_crd && DEVELOPTYPE === void 0 ? (_reportPossibleCrUseOfDEVELOPTYPE({
            error: Error()
          }), DEVELOPTYPE) : DEVELOPTYPE).NONE;
          this.serverHeroIds = [];
          this.serverBookIds = [];
        }

        onShow() {
          this.view_type = (_crd && DEVELOPTYPE === void 0 ? (_reportPossibleCrUseOfDEVELOPTYPE({
            error: Error()
          }), DEVELOPTYPE) : DEVELOPTYPE).HERO;
          this.serverHeroIds = (_crd && deepClone === void 0 ? (_reportPossibleCrUseOfdeepClone({
            error: Error()
          }), deepClone) : deepClone)((_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.heroIds);
          this.serverBookIds = (_crd && deepClone === void 0 ? (_reportPossibleCrUseOfdeepClone({
            error: Error()
          }), deepClone) : deepClone)((_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.bookIds);
          this.refreshMainView = !(_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.heroIds[0];
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).PVP_Fight_Team);
          this.setView();
        }

        onClose() {
          var self = this;

          if (!(_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.heroIds[0]) {
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_finca_1"));
          } else {
            this.checkBookChange();

            if (self.refreshMainView) {
              (_crd && FincaFightControl === void 0 ? (_reportPossibleCrUseOfFincaFightControl({
                error: Error()
              }), FincaFightControl) : FincaFightControl).ins.reqSetFincaBattleHeroIds((_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
                error: Error()
              }), FincaFightData) : FincaFightData).ins.heroIds);
              super.onClose();
              (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                error: Error()
              }), UIMgr) : UIMgr).ins.show({
                viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                  error: Error()
                }), ViewName) : ViewName).FincaFightView
              });
            } else {
              // 判断阵容是否发生变动
              if (self.checkTeamChange()) {
                // 添加一个弹窗
                (_crd && CommonTipsPop === void 0 ? (_reportPossibleCrUseOfCommonTipsPop({
                  error: Error()
                }), CommonTipsPop) : CommonTipsPop).create(self.checkTeamChange(), val => {
                  if (val) {
                    if ((_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
                      error: Error()
                    }), FincaFightData) : FincaFightData).ins.heroIds[0]) {
                      (_crd && FincaFightControl === void 0 ? (_reportPossibleCrUseOfFincaFightControl({
                        error: Error()
                      }), FincaFightControl) : FincaFightControl).ins.reqSetFincaBattleHeroIds((_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
                        error: Error()
                      }), FincaFightData) : FincaFightData).ins.heroIds);
                      super.onClose();
                    } else {
                      // 至少上个战士
                      (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
                        error: Error()
                      }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                        error: Error()
                      }), LangMgr) : LangMgr).getLab("Tips_finca_1"));
                    }
                  } else {
                    (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
                      error: Error()
                    }), FincaFightData) : FincaFightData).ins.heroIds = self.serverHeroIds;
                    super.onClose();
                  }
                });
              } else {
                super.onClose();
              }
            }
          }
        }

        checkBookChange() {
          var change = false;

          for (var i = 0; i < this.serverBookIds.length; i++) {
            if (this.serverBookIds[i] !== (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
              error: Error()
            }), FincaFightData) : FincaFightData).ins.bookIds[i]) {
              change = true;
            }
          }

          if (change) {
            (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
              error: Error()
            }), FincaFightData) : FincaFightData).ins.bookIds = (_crd && deepClone === void 0 ? (_reportPossibleCrUseOfdeepClone({
              error: Error()
            }), deepClone) : deepClone)(this.serverBookIds);
          }
        }

        checkTeamChange() {
          if ((_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.getHeroEmptyIndex()) {
            // 还有未上阵英雄
            return (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_finca_6");
          } else {
            // 阵容发生变化
            var change = false;

            for (var i = 0; i < this.serverHeroIds.length; i++) {
              if (this.serverHeroIds[i] !== (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
                error: Error()
              }), FincaFightData) : FincaFightData).ins.heroIds[i]) {
                change = true;
              }
            }

            if (change) {
              return (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab("Tips_finca_5");
            } else {
              return "";
            }
          }
        }

        register() {
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
        }

        onDestroy() {
          super.onDestroy();
          (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.refreshBagData(0);
        }

        unRegister() {
          super.unRegister();
        }

        switchView(event, view_type) {
          if (this.view_type === Number(view_type)) {
            return;
          }

          this.view_type = Number(view_type);
          this.setView();
        }

        setView() {
          this.node_hero.node.active = this.view_type === (_crd && DEVELOPTYPE === void 0 ? (_reportPossibleCrUseOfDEVELOPTYPE({
            error: Error()
          }), DEVELOPTYPE) : DEVELOPTYPE).HERO;
          this.node_book.node.active = this.view_type === (_crd && DEVELOPTYPE === void 0 ? (_reportPossibleCrUseOfDEVELOPTYPE({
            error: Error()
          }), DEVELOPTYPE) : DEVELOPTYPE).BOOK;

          switch (this.view_type) {
            case (_crd && DEVELOPTYPE === void 0 ? (_reportPossibleCrUseOfDEVELOPTYPE({
              error: Error()
            }), DEVELOPTYPE) : DEVELOPTYPE).HERO:
              this.node_hero.initData();
              break;

            case (_crd && DEVELOPTYPE === void 0 ? (_reportPossibleCrUseOfDEVELOPTYPE({
              error: Error()
            }), DEVELOPTYPE) : DEVELOPTYPE).BOOK:
              this.node_book.initData();
              break;

            default:
              break;
          }
        }

        on_s2c_SetFincaBattleHeroIdsRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
            error: Error()
          }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab("ui_fincafight_19"));
          this.serverHeroIds = (_crd && deepClone === void 0 ? (_reportPossibleCrUseOfdeepClone({
            error: Error()
          }), deepClone) : deepClone)((_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.heroIds);
        }

        on_s2c_SetFincaBattleBookIdsRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
            error: Error()
          }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab("ui_fincafight_19"));
          this.serverBookIds = (_crd && deepClone === void 0 ? (_reportPossibleCrUseOfdeepClone({
            error: Error()
          }), deepClone) : deepClone)((_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.bookIds);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_hero", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_book", [_dec3], {
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
//# sourceMappingURL=e6c35a5377861a91258d16125d65ff07edfb559b.js.map