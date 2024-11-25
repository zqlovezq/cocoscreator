System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "client_protocol", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Node, Prefab, ScrollView, Toggle, Vec2, ViewBase, RareBookHandBookNode, tab, RareBookData, RareBookGroupItem, UIMgr, ViewName, RareBookEquipNode, proto, EventMgr, RareBookGacha, Func, RedMgr, RedDotType, SettingRedManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, RareBookView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewBase(extras) {
    _reporterNs.report("ViewBase", "../../../framework/base/ViewBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookHandBookNode(extras) {
    _reporterNs.report("RareBookHandBookNode", "./RareBookHandBookNode", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookData(extras) {
    _reporterNs.report("RareBookData", "./RareBookData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookGroupItem(extras) {
    _reporterNs.report("RareBookGroupItem", "./RareBookGroupItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookEquipNode(extras) {
    _reporterNs.report("RareBookEquipNode", "./RareBookEquipNode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookGacha(extras) {
    _reporterNs.report("RareBookGacha", "./RareBookGacha", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSettingRedManager(extras) {
    _reporterNs.report("SettingRedManager", "../role/SettingRedManager", _context.meta, extras);
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
      ScrollView = _cc.ScrollView;
      Toggle = _cc.Toggle;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      ViewBase = _unresolved_2.ViewBase;
    }, function (_unresolved_3) {
      RareBookHandBookNode = _unresolved_3.RareBookHandBookNode;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      RareBookData = _unresolved_5.RareBookData;
    }, function (_unresolved_6) {
      RareBookGroupItem = _unresolved_6.RareBookGroupItem;
    }, function (_unresolved_7) {
      UIMgr = _unresolved_7.UIMgr;
    }, function (_unresolved_8) {
      ViewName = _unresolved_8.ViewName;
    }, function (_unresolved_9) {
      RareBookEquipNode = _unresolved_9.RareBookEquipNode;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_10) {
      EventMgr = _unresolved_10.EventMgr;
    }, function (_unresolved_11) {
      RareBookGacha = _unresolved_11.RareBookGacha;
    }, function (_unresolved_12) {
      Func = _unresolved_12.Func;
    }, function (_unresolved_13) {
      RedMgr = _unresolved_13.RedMgr;
    }, function (_unresolved_14) {
      RedDotType = _unresolved_14.RedDotType;
    }, function (_unresolved_15) {
      SettingRedManager = _unresolved_15.SettingRedManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "122e2AOw2dMw5ZH8IgeQFfi", "RareBookView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab', 'ScrollView', 'sp', 'Toggle', 'UI', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * RareBookView
       * zhudingchao
       * Wed May 22 2024 10:20:35 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/rareBook/RareBookView.ts
       *
       */

      _export("RareBookView", RareBookView = (_dec = ccclass('RareBookView'), _dec2 = property(_crd && RareBookHandBookNode === void 0 ? (_reportPossibleCrUseOfRareBookHandBookNode({
        error: Error()
      }), RareBookHandBookNode) : RareBookHandBookNode), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(_crd && RareBookEquipNode === void 0 ? (_reportPossibleCrUseOfRareBookEquipNode({
        error: Error()
      }), RareBookEquipNode) : RareBookEquipNode), _dec6 = property(Prefab), _dec7 = property(Node), _dec8 = property(Prefab), _dec9 = property(_crd && RareBookGacha === void 0 ? (_reportPossibleCrUseOfRareBookGacha({
        error: Error()
      }), RareBookGacha) : RareBookGacha), _dec10 = property(Node), _dec11 = property(ScrollView), _dec(_class = (_class2 = class RareBookView extends (_crd && ViewBase === void 0 ? (_reportPossibleCrUseOfViewBase({
        error: Error()
      }), ViewBase) : ViewBase) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "handbookNode", _descriptor, this);

          _initializerDefineProperty(this, "drawbookNode", _descriptor2, this);

          _initializerDefineProperty(this, "groupNode", _descriptor3, this);

          _initializerDefineProperty(this, "equipNode", _descriptor4, this);

          _initializerDefineProperty(this, "rareItemPrefab", _descriptor5, this);

          _initializerDefineProperty(this, "groupContentNode", _descriptor6, this);

          _initializerDefineProperty(this, "rareGroupItemPrefab", _descriptor7, this);

          _initializerDefineProperty(this, "gachaBookNode", _descriptor8, this);

          _initializerDefineProperty(this, "toggleNode", _descriptor9, this);

          _initializerDefineProperty(this, "groupScrollview", _descriptor10, this);

          this.currTag = 1;
          this.groupItems = void 0;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.CombineBookFragmentRsp, this.on_s2c_CombineBookFragmentRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpgradeBookLevelRsp, this.on_s2c_UpgradeBookLevelRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpgradeBookStarRsp, this.on_s2c_UpgradeBookStarRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpdateBookSeriesData, this.on_s2c_Msg_UpdateBookSeriesData, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.TakeBookRsp, this.on_s2c_Msg_TakeBookRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.DropBookRsp, this.on_s2c_Msg_DropBookRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpdateBookPowerScore, this.on_s2c_Msg_UpdateBookPowerScore, this);
        }

        onShow() {
          if (this.openData) {
            this.currTag = this.openData;
          }

          this.setShowState();
          this.initView();
        } // start() {
        //     this.setShowState();
        //     this.initView();
        // }


        onClickToggle(event, tag) {
          tag = Number(tag);

          if (this.currTag != tag) {
            this.currTag = tag;
            this.setShowState();
            this.initView();
          }
        }

        setShowState() {
          this.handbookNode.node.active = this.currTag == 1;
          this.drawbookNode.active = this.currTag == 2;
          this.groupNode.active = this.currTag == 3;
          this.equipNode.node.active = this.currTag == 4;
          this.toggleNode.getChildByName("Toggle" + this.currTag).getComponent(Toggle).isChecked = true;
        }

        initView() {
          this.unscheduleAllCallbacks();

          if (this.currTag == 1) {
            this.initHandBook();
          } else if (this.currTag == 3) {
            this.initGroupView();
          } else if (this.currTag == 4) {
            this.initEquipView();
          } else if (this.currTag === 2) {
            this.initBookGachaView();
          }
        }

        initBookGachaView() {
          this.gachaBookNode.initView();
        }

        initHandBook() {
          this.handbookNode.initView(this.rareItemPrefab);
        }

        initGroupView() {
          var _this = this;

          if (!this.groupItems) {
            this.groupItems = [];
            var groupMap = new Map();
            var groupTabs = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().BookSeriesTable;

            for (var key in groupTabs) {
              var id = groupTabs[key].GroupId;
              var list = groupMap.get(id);

              if (!list) {
                list = [];
                groupMap.set(id, list);
              }

              list.push(groupTabs[key]);
            }

            groupMap.forEach(value => {
              var item = instantiate(this.rareGroupItemPrefab);
              item.parent = this.groupContentNode;
              var com = item.getComponent(_crd && RareBookGroupItem === void 0 ? (_reportPossibleCrUseOfRareBookGroupItem({
                error: Error()
              }), RareBookGroupItem) : RareBookGroupItem);
              com.initData(value);
              this.groupItems.push(com);
            }); // let tabs = tab.getData().BookSeriesTable;
            // for (let key in tabs) {
            // }
          } else {
            for (var _key in this.groupItems) {
              this.groupItems[_key].updateView();
            }
          } //红点效果


          if (this.groupNode.active) {
            var redKey = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
              error: Error()
            }), RareBookData) : RareBookData).ins.bookCollectRedPointId;

            if (redKey != "") {
              var groupId = Number(redKey.split("_")[0]);

              var _loop = function _loop(_key2) {
                if (_this.groupItems[_key2].groupId == groupId) {
                  var pos = _this.groupItems[_key2].node.position;
                  _this.groupItems[_key2].redPoint.active = true;

                  _this.scheduleOnce(() => {
                    _this.groupScrollview.scrollToOffset(new Vec2(0, -pos.y + 100), 0.1);

                    _this.scheduleOnce(() => {
                      _this.groupItems[_key2].playAnim();

                      (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                        error: Error()
                      }), Func) : Func).setItem("RareBook_CollectRed_" + redKey, 1);
                      (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
                        error: Error()
                      }), RareBookData) : RareBookData).ins.updateBookCollectRedPoint();
                      (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
                        error: Error()
                      }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
                        error: Error()
                      }), RedDotType) : RedDotType).Book_collect);
                    }, 0.5);
                  });

                  return 1; // break
                }
              };

              for (var _key2 in this.groupItems) {
                if (_loop(_key2)) break;
              }
            }
          } //  }
          // let pos=this.groupItems[4].node.position;
          // this.groupItems[4].redPoint.active=true;
          // this.scheduleOnce(()=>{
          //     this.groupScrollview.scrollToOffset(new Vec2(0, -pos.y-270), 0.1);
          //     this.scheduleOnce(()=>{
          //         this.groupItems[4].playAnim();
          //         // Func.setItem("RareBook_CollectRed_" + redKey,1);
          //         // RareBookData.ins.updateBookCollectRedPoint();
          //         // RedMgr.refreshEvent(RedDotType.Book_collect);
          //     },0.5)
          // })

        }

        initEquipView() {
          this.equipNode.initView(this.rareItemPrefab);
        }

        onClickExchang() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).RareBookExchangePop
          });
        }

        on_s2c_CombineBookFragmentRsp(msg) {
          if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            this.handbookNode.initView(); // this.updateGropView(msg.bookId);

            var info = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
              error: Error()
            }), RareBookData) : RareBookData).ins.getBookInfoById(msg.bookId);

            if (info && info.bookTable.Aptitude >= (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroAptitude.HeroAptitude_SR) {
              this.initGroupView();
            }
          }
        }

        on_s2c_UpgradeBookLevelRsp(msg) {
          if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            this.handbookNode.updateItem(msg.book.itemId);
            this.updateGropView(msg.book.itemId);
          }
        }

        on_s2c_UpgradeBookStarRsp(msg) {
          if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            this.handbookNode.updateItem(msg.book.itemId);
            this.updateGropView(msg.book.itemId);
          }
        }

        on_s2c_Msg_UpdateBookSeriesData(msg) {
          this.initGroupView();
        }

        on_s2c_Msg_TakeBookRsp(msg) {
          if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            this.equipNode.initView();
          }
        }

        on_s2c_Msg_DropBookRsp(msg) {
          if (msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            this.equipNode.initView();
          }
        }

        updateGropView(itemId) {
          if (this.groupItems && this.groupItems.length > 0) {
            var info = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
              error: Error()
            }), RareBookData) : RareBookData).ins.getBookInfoByItemId(itemId);

            if (info.bookTable.Aptitude >= (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroAptitude.HeroAptitude_SR) {
              this.initGroupView();
            }
          }
        }

        on_s2c_Msg_UpdateBookPowerScore(msg) {
          this.handbookNode.updateScore(); // RareBookData.ins.updateBook(msg.book as proto.BookData)
        }

        onDestroy() {
          super.onDestroy();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).unTarget(this);

          if (!(_crd && SettingRedManager === void 0 ? (_reportPossibleCrUseOfSettingRedManager({
            error: Error()
          }), SettingRedManager) : SettingRedManager).ins.getSetting("TenBookGacha")) {
            (_crd && SettingRedManager === void 0 ? (_reportPossibleCrUseOfSettingRedManager({
              error: Error()
            }), SettingRedManager) : SettingRedManager).ins.setSetting("TenBookGacha", true);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "handbookNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "drawbookNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "groupNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "equipNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rareItemPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "groupContentNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "rareGroupItemPrefab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "gachaBookNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "toggleNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "groupScrollview", [_dec11], {
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
//# sourceMappingURL=6a20d3f6c2a88b1be9a0d3fa7ff2ddc10e2101df.js.map