System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "client_protocol", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, EventMgr, LocalEvent, Global, Func, RoleData, BattleMainDataControl, ComponentBase, ChannelMgr, proto, UIMgr, ViewName, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, Jp37PopBtnType, jp37RedKey, Community_list;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobal(extras) {
    _reporterNs.report("Global", "../../../Global", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleMainDataControl(extras) {
    _reporterNs.report("BattleMainDataControl", "./battle/BattleMainDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComponentBase(extras) {
    _reporterNs.report("ComponentBase", "../../../framework/base/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannelMgr(extras) {
    _reporterNs.report("ChannelMgr", "../../../channel/ChannelMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJP37Channel(extras) {
    _reporterNs.report("JP37Channel", "../../../channel/jp37/JP37Channel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.EventMgr;
    }, function (_unresolved_3) {
      LocalEvent = _unresolved_3.LocalEvent;
    }, function (_unresolved_4) {
      Global = _unresolved_4.Global;
    }, function (_unresolved_5) {
      Func = _unresolved_5.Func;
    }, function (_unresolved_6) {
      RoleData = _unresolved_6.RoleData;
    }, function (_unresolved_7) {
      BattleMainDataControl = _unresolved_7.BattleMainDataControl;
    }, function (_unresolved_8) {
      ComponentBase = _unresolved_8.ComponentBase;
    }, function (_unresolved_9) {
      ChannelMgr = _unresolved_9.ChannelMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_10) {
      UIMgr = _unresolved_10.UIMgr;
    }, function (_unresolved_11) {
      ViewName = _unresolved_11.ViewName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "73229BwFH1PfZYCIHlB7vCL", "Community_list", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      // import { JP37Channel } from '../../../channel/jp37/JP37Channel';
      ({
        ccclass,
        property
      } = _decorator); //弹窗类型：1-GS弹窗；2-精彩事件；12-新手福利；13-周一福利;14-社媒弹窗；15-问卷星

      Jp37PopBtnType = /*#__PURE__*/function (Jp37PopBtnType) {
        Jp37PopBtnType[Jp37PopBtnType["gsPop"] = 1] = "gsPop";
        Jp37PopBtnType[Jp37PopBtnType["eventPop"] = 2] = "eventPop";
        Jp37PopBtnType[Jp37PopBtnType["sojump"] = 15] = "sojump";
        return Jp37PopBtnType;
      }(Jp37PopBtnType || {});

      jp37RedKey = "jp37btn_red_";
      /**
       * 主界面sdk公共按钮
       */

      _export("Community_list", Community_list = (_dec = ccclass('Community_list'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = (_class2 = class Community_list extends (_crd && ComponentBase === void 0 ? (_reportPossibleCrUseOfComponentBase({
        error: Error()
      }), ComponentBase) : ComponentBase) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "community_layout", _descriptor, this);

          _initializerDefineProperty(this, "communityBtnNode", _descriptor2, this);

          _initializerDefineProperty(this, "inspireBtnNode", _descriptor3, this);

          _initializerDefineProperty(this, "twitter_btnNode", _descriptor4, this);

          _initializerDefineProperty(this, "discord_btnNode", _descriptor5, this);

          _initializerDefineProperty(this, "btn_15", _descriptor6, this);

          //问卷星
          _initializerDefineProperty(this, "btn_2", _descriptor7, this);

          //精彩事件
          _initializerDefineProperty(this, "btn_1", _descriptor8, this);
        }

        //大客户
        onLoad() {
          super.onLoad();
          this.community_layout.children.forEach(item => {
            item.active = false;
          });
        }

        start() {
          if (!(_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).isReview) {
            if ((_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
              error: Error()
            }), ChannelMgr) : ChannelMgr).isP8) {
              this.communityBtnNode.active = true;
            }

            if ((_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
              error: Error()
            }), ChannelMgr) : ChannelMgr).isJp37 || (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
              error: Error()
            }), ChannelMgr) : ChannelMgr).isDevChannel) {
              this.twitter_btnNode.active = true;
              this.refresh37Btn();
            }

            this.updateInspireBtn();
          }
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).updateInspireBtn, this.updateInspireBtn, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.Mobile37PopupsPush, this.s2c_Mobile37PopupsPush, this);
        }

        s2c_Mobile37PopupsPush(msg) {
          //更新3个按钮
          this.refresh37Btn();
        }

        refresh37Btn() {
          this.unscheduleAllCallbacks();

          if ((_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).isReview) {
            return;
          }

          this.btn_15.active = this.btn_2.active = this.btn_1.active = false;
          var pops = (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).getChannel().popBtns;

          if (pops) {
            for (var iterator of pops) {
              var v = iterator[1];
              var btn = this["btn_" + v.type];

              if (btn) {
                btn.active = true;
                this.checkBtnRed(v);
              }
            }
          }

          this.schedule(() => {
            //5分钟刷新一次
            this.refresh37Btn();
          }, 60 * 5);
        }

        updateInspireBtn() {
          if ((_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).isReview) {
            this.inspireBtnNode.active = false;
            return;
          }

          if ((_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
            error: Error()
          }), BattleMainDataControl) : BattleMainDataControl).ins.getIsPasstStageByStageId(503)) {
            var isComment = Number((_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
              error: Error()
            }), Func) : Func).getItem("isComment_" + (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.id));

            if (!isComment) {
              this.inspireBtnNode.active = true;
            } else {
              this.inspireBtnNode.active = false;
            }
          } else {
            this.inspireBtnNode.active = false;
          }
        }

        onClickCommunity() {
          console.log("js调用打开网页");

          if ((_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).channelTab) {
            (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
              error: Error()
            }), ChannelMgr) : ChannelMgr).openURL((_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
              error: Error()
            }), ChannelMgr) : ChannelMgr).channelTab.FaceBookUrl);
          } else {
            (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
              error: Error()
            }), ChannelMgr) : ChannelMgr).openURL("https://www.facebook.com/cjxd.re.tw/");
          }
        }

        onTwitterClick() {
          // ChannelMgr.openURL("https://x.com/pipiyuusya/")
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).CommunityPop
          });
        }

        onClickSojump() {
          this.onOpenWebView(Jp37PopBtnType.sojump);
        }

        onClickEvent() {
          this.onOpenWebView(Jp37PopBtnType.eventPop);
        }

        onClickClient() {
          this.onOpenWebView(Jp37PopBtnType.gsPop);
        }

        onOpenWebView(type) {
          var pops = (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).getChannel().popBtns;

          if (pops) {
            var v = pops.get(type);

            if (v) {
              (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
                error: Error()
              }), ChannelMgr) : ChannelMgr).openActionWebView(v.url);
              (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                error: Error()
              }), Func) : Func).setItem(jp37RedKey + v.type, 1);
              this.checkBtnRed(v);
            }
          }
        }

        checkBtnRed(dd) {
          var btn = this["btn_" + dd.type];

          if (btn) {
            btn.getChildByName("redNode").active = dd.red && (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
              error: Error()
            }), Func) : Func).checkInt((_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
              error: Error()
            }), Func) : Func).getItem(jp37RedKey + dd.type)) == 0;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "community_layout", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "communityBtnNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "inspireBtnNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "twitter_btnNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "discord_btnNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btn_15", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "btn_2", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btn_1", [_dec9], {
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
//# sourceMappingURL=89fe17cd47c8171f4cb1982b4da25bb6377ed632.js.map