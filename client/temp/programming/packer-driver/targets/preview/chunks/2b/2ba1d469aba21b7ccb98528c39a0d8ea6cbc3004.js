System.register(["__unresolved_0", "cc", "client_protocol", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Label, Node, RichText, sp, Sprite, proto, Net, EventMgr, RareBookData, tab, UIMgr, ViewName, LangMgr, ItemData, gachaReplace, AdMgr, RedMgr, RedDotType, RoleData, RecruitType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, RareBookGacha;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookData(extras) {
    _reporterNs.report("RareBookData", "./RareBookData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgachaReplace(extras) {
    _reporterNs.report("gachaReplace", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdMgr(extras) {
    _reporterNs.report("AdMgr", "../AdMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRecruitType(extras) {
    _reporterNs.report("RecruitType", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      RichText = _cc.RichText;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_2) {
      Net = _unresolved_2.Net;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }, function (_unresolved_4) {
      RareBookData = _unresolved_4.RareBookData;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }, function (_unresolved_6) {
      UIMgr = _unresolved_6.UIMgr;
    }, function (_unresolved_7) {
      ViewName = _unresolved_7.ViewName;
    }, function (_unresolved_8) {
      LangMgr = _unresolved_8.LangMgr;
    }, function (_unresolved_9) {
      ItemData = _unresolved_9.ItemData;
    }, function (_unresolved_10) {
      gachaReplace = _unresolved_10.gachaReplace;
    }, function (_unresolved_11) {
      AdMgr = _unresolved_11.AdMgr;
    }, function (_unresolved_12) {
      RedMgr = _unresolved_12.RedMgr;
    }, function (_unresolved_13) {
      RedDotType = _unresolved_13.RedDotType;
    }, function (_unresolved_14) {
      RoleData = _unresolved_14.RoleData;
    }, function (_unresolved_15) {
      RecruitType = _unresolved_15.RecruitType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "68e87gFyE9MzrPHfzCQ9KJL", "RareBookGacha", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'EventTouch', 'Label', 'Node', 'RichText', 'sp', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RareBookGacha", RareBookGacha = (_dec = ccclass('RareBookGacha'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(RichText), _dec5 = property(Node), _dec6 = property(sp.Skeleton), _dec(_class = (_class2 = class RareBookGacha extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "lbl_progress", _descriptor, this);

          _initializerDefineProperty(this, "lbl_adv_time", _descriptor2, this);

          _initializerDefineProperty(this, "lbl_desc", _descriptor3, this);

          _initializerDefineProperty(this, "node_adv_btn", _descriptor4, this);

          _initializerDefineProperty(this, "spine_draw", _descriptor5, this);

          this._recruitEquipMap = new Map();
          this._isGacha = false;
        }

        onLoad() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GachaRsp, this.on_s2c_GachaRsp, this);
        }

        initView() {
          this._recruitEquipMap.clear();

          var bookDatas = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
            error: Error()
          }), RareBookData) : RareBookData).ins.getBookInfos();

          for (var i = 0; i < bookDatas.length; i++) {
            var bookData = bookDatas[i];

            if (bookData.bookTable.Aptitude === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroAptitude.HeroAptitude_R) {
              this._recruitEquipMap.set(bookData.itemId, bookData.isLock);
            }
          }

          this.asyncView();
        }

        on_s2c_GachaRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;

          if (msg.id === 1000) {
            this.showNewBookPop(msg.rewards);
          } else {
            this.showGachaView(msg.rewards, msg.id);
          }

          this._isGacha = false;
          this.asyncView();
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroGacha); //保底抽

          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).GachaAds); //广告
        }
        /* 同步一些可变化的信息 */


        asyncView() {
          var type = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AdType.AdType_Gacha1001;
          var maxCount = (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.getAdCountMaxByType(type);
          var curCount = (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.getAdCountByType(type);
          this.lbl_progress.string = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount(82) + "/" + 1000;
          this.lbl_adv_time.string = maxCount - curCount + "/" + maxCount;

          if ((_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.getAdCountByType(type) >= (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.getAdCountMaxByType(type)) {
            this.node_adv_btn.getComponent(Sprite).grayscale = true;
            this.node_adv_btn.getComponent(Button).interactable = false;
          }

          var totalCount = 10;

          for (var i = 0; i < (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.drop.data.length; i++) {
            var data = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.drop.data[i];

            if (data.id == "book_94") {
              totalCount = totalCount - data.sum;
              break;
            }
          }

          this.lbl_desc.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("ui_rarebook_3", [totalCount]);
        }
        /* 十连抽 */


        gachaTen() {
          if (this._isGacha) {
            return;
          }

          this.sendGacha(1002);
        }
        /* 单抽 */


        gachaOnce() {
          if (this._isGacha) {
            return;
          }

          this.sendGacha(1001);
        }
        /* 广告抽 */


        sendAdvWatch() {
          var type = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AdType.AdType_Gacha1001;

          if ((_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.getAdCountByType(type) >= (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.getAdCountMaxByType(type)) {
            return;
          }

          (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.playVideoAd((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AdType.AdType_Gacha1001, () => {
            this.sendGacha(1001, true);
          }, false);
        }

        sendGacha(id, isAdv) {
          if (isAdv === void 0) {
            isAdv = false;
          }

          var self = this;
          var gachaTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GachaTableById.getValue(id);
          var count = gachaTab.ItemCount;
          var itemId = gachaTab.ItemId;
          var itemCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount(itemId);

          var sendMsg = () => {
            self._isGacha = true;
            self.spine_draw.setAnimation(0, "xuanzhuan", false);
            self.spine_draw.setCompleteListener(listener => {
              if (listener.animation.name === "xuanzhuan") {
                var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).Msg_GachaReq();
                msg.id = id;
                msg.fromAdv = isAdv;
                (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
                  error: Error()
                }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).Ptl.GachaReq, msg);
              }
            });
          };

          if (!isAdv && itemCount < count) {
            var canSendMsg = (_crd && gachaReplace === void 0 ? (_reportPossibleCrUseOfgachaReplace({
              error: Error()
            }), gachaReplace) : gachaReplace)(id, (_crd && RecruitType === void 0 ? (_reportPossibleCrUseOfRecruitType({
              error: Error()
            }), RecruitType) : RecruitType).Book, sendMsg);

            if (!canSendMsg) {
              return;
            }
          }

          sendMsg();
        }
        /* 显示抽卡界面 */


        showGachaView(_rewards, _id) {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).RecruitGetPop,
            data: {
              rewards: _rewards,
              id: _id,
              type: (_crd && RecruitType === void 0 ? (_reportPossibleCrUseOfRecruitType({
                error: Error()
              }), RecruitType) : RecruitType).Book,
              map: this._recruitEquipMap
            }
          });
        }
        /* 显示武器保底抽界面 */


        showGuaranteeView(event, type) {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).RareBookGuaranteedPop
          });
        }

        showNewBookPop(rewards) {
          var self = this;
          var itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(rewards[0].itemId);

          if (itemTab.Type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).ItemType.ItemType_Book) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).RareBookGetPop,
              data: {
                itemId: rewards[0].itemId
              }
            });
          } else {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).CongratulationPop,
              data: rewards
            });
          }
        }
        /* 显示概率公示界面 */


        showGachaProbabilityView(event, type) {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).RareBookProbabilityPop
          }); // UIMgr.ins.show({
          //     viewName: ViewName.RecruitProbabilityPop, data: {
          //         type: RecruitType.Book
          //     }
          // });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbl_progress", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbl_adv_time", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbl_desc", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_adv_btn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spine_draw", [_dec6], {
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
//# sourceMappingURL=2ba1d469aba21b7ccb98528c39a0d8ea6cbc3004.js.map