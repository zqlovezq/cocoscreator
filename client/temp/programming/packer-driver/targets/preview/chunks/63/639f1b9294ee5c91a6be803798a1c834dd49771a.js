System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "client_protocol", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Node, Prefab, Toggle, ViewPop, ACTIVITY_GIFT_VIEW, MALLNAME, CycleGiftView, ChapterGiftView, tab, BattleMainDataControl, OpenFunctionMgr, MallDataMgr, Func, NewHandGiftView, proto, Net, EventMgr, RedMgr, RedDotType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _crd, ccclass, property, ActivityMainView;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfACTIVITY_GIFT_VIEW(extras) {
    _reporterNs.report("ACTIVITY_GIFT_VIEW", "../../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMALLNAME(extras) {
    _reporterNs.report("MALLNAME", "../../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCycleGiftView(extras) {
    _reporterNs.report("CycleGiftView", "./CycleGiftView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChapterGiftView(extras) {
    _reporterNs.report("ChapterGiftView", "./ChapterGiftView", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleMainDataControl(extras) {
    _reporterNs.report("BattleMainDataControl", "../../home/battle/BattleMainDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenFunctionMgr(extras) {
    _reporterNs.report("OpenFunctionMgr", "../../../../Common/component/OpenFunctionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMallDataMgr(extras) {
    _reporterNs.report("MallDataMgr", "../../shop/MallDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNewHandGiftView(extras) {
    _reporterNs.report("NewHandGiftView", "./NewHandGiftView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../../red/RedDotType", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      ACTIVITY_GIFT_VIEW = _unresolved_3.ACTIVITY_GIFT_VIEW;
      MALLNAME = _unresolved_3.MALLNAME;
    }, function (_unresolved_4) {
      CycleGiftView = _unresolved_4.CycleGiftView;
    }, function (_unresolved_5) {
      ChapterGiftView = _unresolved_5.ChapterGiftView;
    }, function (_unresolved_6) {
      tab = _unresolved_6.tab;
    }, function (_unresolved_7) {
      BattleMainDataControl = _unresolved_7.BattleMainDataControl;
    }, function (_unresolved_8) {
      OpenFunctionMgr = _unresolved_8.OpenFunctionMgr;
    }, function (_unresolved_9) {
      MallDataMgr = _unresolved_9.MallDataMgr;
    }, function (_unresolved_10) {
      Func = _unresolved_10.Func;
    }, function (_unresolved_11) {
      NewHandGiftView = _unresolved_11.NewHandGiftView;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_12) {
      Net = _unresolved_12.Net;
    }, function (_unresolved_13) {
      EventMgr = _unresolved_13.EventMgr;
    }, function (_unresolved_14) {
      RedMgr = _unresolved_14.RedMgr;
    }, function (_unresolved_15) {
      RedDotType = _unresolved_15.RedDotType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e563fyIEWNOhbA2ZZLl/jUb", "ActivityMainView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'error', 'EventTouch', 'instantiate', 'Node', 'Prefab', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ActivityMainView", ActivityMainView = (_dec = ccclass('ActivityMainView'), _dec2 = property(Node), _dec3 = property(Toggle), _dec4 = property(Toggle), _dec5 = property(Toggle), _dec6 = property(Toggle), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Prefab), _dec14 = property(Prefab), _dec15 = property(Prefab), _dec(_class = (_class2 = class ActivityMainView extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "activityNode", _descriptor, this);

          _initializerDefineProperty(this, "toggle_chapter", _descriptor2, this);

          _initializerDefineProperty(this, "toggle_Cycle", _descriptor3, this);

          _initializerDefineProperty(this, "toggle_NewPlayerMall", _descriptor4, this);

          _initializerDefineProperty(this, "toggle_NewPlayerMall2", _descriptor5, this);

          _initializerDefineProperty(this, "node_red_chapter", _descriptor6, this);

          _initializerDefineProperty(this, "node_red_NewPlayerMall", _descriptor7, this);

          _initializerDefineProperty(this, "node_red_NewPlayerMall2", _descriptor8, this);

          _initializerDefineProperty(this, "node_toggle_NewPlayerMall", _descriptor9, this);

          _initializerDefineProperty(this, "node_toggle_NewPlayerMall2", _descriptor10, this);

          _initializerDefineProperty(this, "node_activity_red", _descriptor11, this);

          _initializerDefineProperty(this, "pfb_cycle", _descriptor12, this);

          //周期礼包
          _initializerDefineProperty(this, "pfb_chapter", _descriptor13, this);

          //章节礼包
          _initializerDefineProperty(this, "pfb_mall", _descriptor14, this);

          //新手商场
          this.cycle_view = null;
          this.chapter_view = null;
          this.hand_view = null;
          this.hand_view2 = null;
          this.view_type = (_crd && ACTIVITY_GIFT_VIEW === void 0 ? (_reportPossibleCrUseOfACTIVITY_GIFT_VIEW({
            error: Error()
          }), ACTIVITY_GIFT_VIEW) : ACTIVITY_GIFT_VIEW).NONE;
          this.currNode = null;
          this.chapterMap = new Map();
        }

        onShow() {
          // 获取固定商店信息
          var fixed_msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetFixedShopInfoMapReq();
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetFixedShopInfoMapReq, fixed_msg);
        }

        initView() {
          this.view_type = this.openData ? this.openData[0] : (_crd && ACTIVITY_GIFT_VIEW === void 0 ? (_reportPossibleCrUseOfACTIVITY_GIFT_VIEW({
            error: Error()
          }), ACTIVITY_GIFT_VIEW) : ACTIVITY_GIFT_VIEW).NONE;
          console.log((_crd && MallDataMgr === void 0 ? (_reportPossibleCrUseOfMallDataMgr({
            error: Error()
          }), MallDataMgr) : MallDataMgr).ins.getFixedShopExpireTime((_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
            error: Error()
          }), MALLNAME) : MALLNAME).NewPlayerMall));
          this.node_toggle_NewPlayerMall.active = (_crd && MallDataMgr === void 0 ? (_reportPossibleCrUseOfMallDataMgr({
            error: Error()
          }), MallDataMgr) : MallDataMgr).ins.getFixedShopExpireTime((_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
            error: Error()
          }), MALLNAME) : MALLNAME).NewPlayerMall) > 0;
          this.node_toggle_NewPlayerMall2.active = (_crd && MallDataMgr === void 0 ? (_reportPossibleCrUseOfMallDataMgr({
            error: Error()
          }), MallDataMgr) : MallDataMgr).ins.getFixedShopExpireTime((_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
            error: Error()
          }), MALLNAME) : MALLNAME).NewPlayerMall2) > 0;
          this.toggle_Cycle.node.active = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_SpecialGiftDaily);

          if (this.node_toggle_NewPlayerMall.active) {
            this.view_type = (_crd && ACTIVITY_GIFT_VIEW === void 0 ? (_reportPossibleCrUseOfACTIVITY_GIFT_VIEW({
              error: Error()
            }), ACTIVITY_GIFT_VIEW) : ACTIVITY_GIFT_VIEW).NewPlayerMall;
            this.toggle_NewPlayerMall.isChecked = true;
          } else if (this.node_toggle_NewPlayerMall2.active) {
            this.view_type = (_crd && ACTIVITY_GIFT_VIEW === void 0 ? (_reportPossibleCrUseOfACTIVITY_GIFT_VIEW({
              error: Error()
            }), ACTIVITY_GIFT_VIEW) : ACTIVITY_GIFT_VIEW).NewPlayerMall2;
            this.toggle_NewPlayerMall2.isChecked = true;
          } else if (this.toggle_Cycle.node.active) {
            this.view_type = (_crd && ACTIVITY_GIFT_VIEW === void 0 ? (_reportPossibleCrUseOfACTIVITY_GIFT_VIEW({
              error: Error()
            }), ACTIVITY_GIFT_VIEW) : ACTIVITY_GIFT_VIEW).CYCLE;
            this.toggle_Cycle.isChecked = true;
          } else {
            this.view_type = (_crd && ACTIVITY_GIFT_VIEW === void 0 ? (_reportPossibleCrUseOfACTIVITY_GIFT_VIEW({
              error: Error()
            }), ACTIVITY_GIFT_VIEW) : ACTIVITY_GIFT_VIEW).CHAPTER;
            this.toggle_chapter.isChecked = true;
          } // if (this.view_type == ACTIVITY_GIFT_VIEW.NONE) {
          //     console.error("没有显示的页签")
          //     this.view_type = ACTIVITY_GIFT_VIEW.CYCLE;
          // }


          this.setChapterMap();
          this.switchView();
          this.refreshHandGiftRed();
          this.updateCycleActivityRed(); // this.toggle_Cycle.isChecked = true
        }

        setChapterMap() {
          // 获取当前的章节
          this.chapterMap.clear();
          var ChapterId = (_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
            error: Error()
          }), BattleMainDataControl) : BattleMainDataControl).ins.getPassChapterId();

          if (ChapterId === 0) {
            return;
          }

          for (var i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().MallTable.length; i++) {
            var _mallTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().MallTable[i];
            var _mallId = _mallTab.MallId;

            if (_mallTab.MallType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).MallType.MallType_MainChapterGift) {
              // 章节礼包
              for (var k = 0; k < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().MallItemTabe.length; k++) {
                var mallTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).getData().MallItemTabe[k];

                if (mallTab.MallId === _mallId) {
                  // 判定开启条件
                  if (mallTab.OpenFunction) {
                    var isOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
                      error: Error()
                    }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen(mallTab.OpenFunction);

                    if (!isOpen) {
                      continue;
                    }
                  } // 获取MainChapterGiftTable数据


                  var ChapterGiftTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                    error: Error()
                  }), tab) : tab).getData().MainChapterGiftTableByMallId.getValue(mallTab.MallId); // 是否达到通关条件

                  if (ChapterGiftTab.MainChapterId <= ChapterId) {
                    // 是否购买了
                    var boughtCount = (_crd && MallDataMgr === void 0 ? (_reportPossibleCrUseOfMallDataMgr({
                      error: Error()
                    }), MallDataMgr) : MallDataMgr).ins.getFixedShopData(mallTab.MallId).get(mallTab.Id);

                    if (boughtCount === 0) {
                      this.chapterMap.set(mallTab.Id, mallTab);
                    }
                  }
                }
              }
            }
          }

          this.toggle_chapter.node.active = this.chapterMap.size > 0;
          this.refreshChapterRed();
        }

        onDestroy() {
          super.onDestroy();
        }

        register() {
          /* 商店固定信息 */
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetFixedShopInfoMapRsp, this.on_s2c_GetFixedShopInfoMapRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.AdvWatchDataPush, this.updateCycleActivityRed, this);
        }

        on_s2c_GetFixedShopInfoMapRsp(msg) {
          this.initView();
        }

        unRegister() {
          super.unRegister();
        }

        clickSwitchView(e, view) {
          this.view_type = Number(view);
          this.switchView();
        }

        switchView() {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (_this.currNode) {
              _this.currNode.active = false;
            }

            switch (_this.view_type) {
              case (_crd && ACTIVITY_GIFT_VIEW === void 0 ? (_reportPossibleCrUseOfACTIVITY_GIFT_VIEW({
                error: Error()
              }), ACTIVITY_GIFT_VIEW) : ACTIVITY_GIFT_VIEW).CYCLE:
                if (!_this.cycle_view) {
                  var _cycle_view = instantiate(_this.pfb_cycle);

                  _cycle_view.parent = _this.activityNode;

                  if (_cycle_view) {
                    _this.cycle_view = _cycle_view.getComponent(_crd && CycleGiftView === void 0 ? (_reportPossibleCrUseOfCycleGiftView({
                      error: Error()
                    }), CycleGiftView) : CycleGiftView);
                    _this.currNode = _cycle_view;

                    _this.cycle_view.onShow(_this.openData);
                  }
                } else {
                  _this.cycle_view.node.active = true;
                  _this.currNode = _this.cycle_view.node;

                  _this.cycle_view.onShow(_this.openData);
                }

                break;

              case (_crd && ACTIVITY_GIFT_VIEW === void 0 ? (_reportPossibleCrUseOfACTIVITY_GIFT_VIEW({
                error: Error()
              }), ACTIVITY_GIFT_VIEW) : ACTIVITY_GIFT_VIEW).CHAPTER:
                // 章节礼包
                if (!_this.chapter_view) {
                  var _chapter_view = instantiate(_this.pfb_chapter);

                  _chapter_view.parent = _this.activityNode;

                  if (_chapter_view) {
                    _this.chapter_view = _chapter_view.getComponent(_crd && ChapterGiftView === void 0 ? (_reportPossibleCrUseOfChapterGiftView({
                      error: Error()
                    }), ChapterGiftView) : ChapterGiftView);
                    _this.currNode = _chapter_view;

                    _this.chapter_view.onShow(_this.chapterMap);
                  }
                } else {
                  _this.chapter_view.node.active = true;
                  _this.currNode = _this.chapter_view.node;

                  _this.chapter_view.onShow();
                }

                break;

              case (_crd && ACTIVITY_GIFT_VIEW === void 0 ? (_reportPossibleCrUseOfACTIVITY_GIFT_VIEW({
                error: Error()
              }), ACTIVITY_GIFT_VIEW) : ACTIVITY_GIFT_VIEW).NewPlayerMall:
                // 新手商城
                if (!_this.hand_view) {
                  var _hand_view = instantiate(_this.pfb_mall);

                  _hand_view.parent = _this.activityNode;

                  if (_hand_view) {
                    _this.hand_view = _hand_view.getComponent(_crd && NewHandGiftView === void 0 ? (_reportPossibleCrUseOfNewHandGiftView({
                      error: Error()
                    }), NewHandGiftView) : NewHandGiftView);
                    _this.currNode = _hand_view;

                    _this.hand_view.onShow((_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
                      error: Error()
                    }), MALLNAME) : MALLNAME).NewPlayerMall);
                  }
                } else {
                  _this.hand_view.node.active = true;
                  _this.currNode = _this.hand_view.node;

                  _this.hand_view.onShow((_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
                    error: Error()
                  }), MALLNAME) : MALLNAME).NewPlayerMall);
                }

                break;

              case (_crd && ACTIVITY_GIFT_VIEW === void 0 ? (_reportPossibleCrUseOfACTIVITY_GIFT_VIEW({
                error: Error()
              }), ACTIVITY_GIFT_VIEW) : ACTIVITY_GIFT_VIEW).NewPlayerMall2:
                // 精英商城
                if (!_this.hand_view2) {
                  var _hand_view2 = instantiate(_this.pfb_mall);

                  _hand_view2.parent = _this.activityNode;

                  if (_hand_view2) {
                    _this.hand_view2 = _hand_view2.getComponent(_crd && NewHandGiftView === void 0 ? (_reportPossibleCrUseOfNewHandGiftView({
                      error: Error()
                    }), NewHandGiftView) : NewHandGiftView);
                    _this.currNode = _hand_view2;

                    _this.hand_view2.onShow((_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
                      error: Error()
                    }), MALLNAME) : MALLNAME).NewPlayerMall2);
                  }
                } else {
                  _this.hand_view2.node.active = true;
                  _this.currNode = _this.hand_view2.node;

                  _this.hand_view2.onShow((_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
                    error: Error()
                  }), MALLNAME) : MALLNAME).NewPlayerMall2);
                }

              default:
                break;
            }
          })();
        } // async createView(viewName: ViewName) {
        //     let viewTab = ClientView.ins.getViewTab(viewName);
        //     if (viewTab) {
        //         let pfb: Prefab = await LoadResAsync(viewTab.Path, Prefab)
        //         let view = instantiate(pfb);
        //         view.parent = this.activityNode;
        //         return view;
        //     } else {
        //         error("view路径没有配置", viewName)
        //     }
        //     return null;
        // }
        // 章节礼包红点


        refreshChapterRed() {
          var isRed = false;
          this.chapterMap.forEach((val, key) => {
            var local = Boolean((_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
              error: Error()
            }), Func) : Func).getItem("chapter_gift_" + key));

            if (!local && !isRed) {
              isRed = true;
            }
          });
          this.node_red_chapter.active = isRed;
        } // 新手礼包 精英礼包红点


        refreshHandGiftRed() {
          // 新手礼包
          var newBoughtCount = (_crd && MallDataMgr === void 0 ? (_reportPossibleCrUseOfMallDataMgr({
            error: Error()
          }), MallDataMgr) : MallDataMgr).ins.getFixedShopData((_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
            error: Error()
          }), MALLNAME) : MALLNAME).NewPlayerMall).get(7001);
          var newBoughtCount2 = (_crd && MallDataMgr === void 0 ? (_reportPossibleCrUseOfMallDataMgr({
            error: Error()
          }), MallDataMgr) : MallDataMgr).ins.getFixedShopData((_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
            error: Error()
          }), MALLNAME) : MALLNAME).NewPlayerMall2).get(7101);
          var mallItemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().MallItemTabeById.getValue(7001);
          var mallItemTab2 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().MallItemTabeById.getValue(7101);
          this.node_red_NewPlayerMall.active = newBoughtCount < mallItemTab.LimitCount;
          this.node_red_NewPlayerMall2.active = newBoughtCount2 < mallItemTab2.LimitCount;
        } // 日礼包 周礼包 月礼包红点


        updateCycleActivityRed() {
          var dailyRed = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).GachaAds, "11");
          var weekRed = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).GachaAds, "12");
          var MonthRed = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).GachaAds, "13");
          this.node_activity_red.active = dailyRed || weekRed || MonthRed;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "activityNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "toggle_chapter", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "toggle_Cycle", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "toggle_NewPlayerMall", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "toggle_NewPlayerMall2", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_red_chapter", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_red_NewPlayerMall", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_red_NewPlayerMall2", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "node_toggle_NewPlayerMall", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "node_toggle_NewPlayerMall2", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "node_activity_red", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "pfb_cycle", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "pfb_chapter", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "pfb_mall", [_dec15], {
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
//# sourceMappingURL=639f1b9294ee5c91a6be803798a1c834dd49771a.js.map