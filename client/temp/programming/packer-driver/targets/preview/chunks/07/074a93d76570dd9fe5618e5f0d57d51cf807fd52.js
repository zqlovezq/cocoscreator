System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "client_protocol", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Prefab, Sprite, ViewPop, RoleData, RoleInfoDecorationsItem, HEADTYPE, proto, Net, tab, HeroAttrItem, LangMgr, EventMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, RoleInfoDecorationsPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleInfoDecorationsItem(extras) {
    _reporterNs.report("RoleInfoDecorationsItem", "./RoleInfoDecorationsItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHEADTYPE(extras) {
    _reporterNs.report("HEADTYPE", "../../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroAttrItem(extras) {
    _reporterNs.report("HeroAttrItem", "../../hero/herobag/HeroAttrItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      RoleData = _unresolved_3.RoleData;
    }, function (_unresolved_4) {
      RoleInfoDecorationsItem = _unresolved_4.RoleInfoDecorationsItem;
    }, function (_unresolved_5) {
      HEADTYPE = _unresolved_5.HEADTYPE;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_6) {
      Net = _unresolved_6.Net;
    }, function (_unresolved_7) {
      tab = _unresolved_7.tab;
    }, function (_unresolved_8) {
      HeroAttrItem = _unresolved_8.HeroAttrItem;
    }, function (_unresolved_9) {
      LangMgr = _unresolved_9.LangMgr;
    }, function (_unresolved_10) {
      EventMgr = _unresolved_10.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "35786cO1zdG5YObrRYKL0WX", "RoleInfoDecorationsPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'instantiate', 'Label', 'Node', 'Prefab', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RoleInfoDecorationsPop", RoleInfoDecorationsPop = (_dec = ccclass('RoleInfoDecorationsPop'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Sprite), _dec8 = property(Node), _dec9 = property(Sprite), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Node), _dec(_class = (_class2 = class RoleInfoDecorationsPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pfb_item", _descriptor, this);

          _initializerDefineProperty(this, "pfb_attr", _descriptor2, this);

          _initializerDefineProperty(this, "node_content", _descriptor3, this);

          _initializerDefineProperty(this, "node_btn", _descriptor4, this);

          _initializerDefineProperty(this, "node_head", _descriptor5, this);

          _initializerDefineProperty(this, "sp_head", _descriptor6, this);

          _initializerDefineProperty(this, "node_frame", _descriptor7, this);

          _initializerDefineProperty(this, "sp_frame", _descriptor8, this);

          _initializerDefineProperty(this, "lbl_name", _descriptor9, this);

          _initializerDefineProperty(this, "lbl_desc", _descriptor10, this);

          _initializerDefineProperty(this, "node_attr_layout", _descriptor11, this);

          this.default_view = (_crd && HEADTYPE === void 0 ? (_reportPossibleCrUseOfHEADTYPE({
            error: Error()
          }), HEADTYPE) : HEADTYPE).NONE;
          this.cur_select_item = null;
        }

        onShow() {
          this.default_view = (_crd && HEADTYPE === void 0 ? (_reportPossibleCrUseOfHEADTYPE({
            error: Error()
          }), HEADTYPE) : HEADTYPE).HEADICON;
          this.initView();
        }

        initView() {
          //拥有的头像
          this.cur_select_item = null;
          this.showViewByType();
          this.changeIconState((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.avatarInfo.headIcon, (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.avatarInfo.headFrame, true);
        }

        clickSwitchView(e, type) {
          if (this.default_view === Number(type)) {
            return;
          }

          this.default_view = Number(type);
          this.initView();
        }

        showViewByType() {
          switch (this.default_view) {
            case (_crd && HEADTYPE === void 0 ? (_reportPossibleCrUseOfHEADTYPE({
              error: Error()
            }), HEADTYPE) : HEADTYPE).HEADICON:
              this.showHeadIconView();
              break;

            case (_crd && HEADTYPE === void 0 ? (_reportPossibleCrUseOfHEADTYPE({
              error: Error()
            }), HEADTYPE) : HEADTYPE).HEADFRAME:
              this.showHeadFrameView();
              break;

            default:
              break;
          }
        }
        /* 显示头像界面 */


        showHeadIconView() {
          this.node_content.destroyAllChildren();
          var headTabs = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeadTable;
          var headList = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.avatarInfo.headIcon ? [(_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.avatarInfo.headIcon] : [];
          var haveHead = [];
          var noHavaHead = [];

          for (var i = 0; i < headTabs.length; i++) {
            var id = headTabs[i].Id;

            if (id !== (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.avatarInfo.headIcon) {
              if (this.checkHeadIsHave(id)) {
                haveHead.push(id);
              } else {
                noHavaHead.push(id);
              }
            }
          }

          haveHead.sort((a, b) => {
            var itemTab1 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(a);
            var itemTab2 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(b);
            return itemTab1.Sort - itemTab2.Sort;
          });
          noHavaHead.sort((a, b) => {
            var itemTab1 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(a);
            var itemTab2 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(b);
            return itemTab1.Sort - itemTab2.Sort;
          });
          var combinedArray = [...headList, ...haveHead, ...noHavaHead];

          for (var _i = 0; _i < combinedArray.length; _i++) {
            var item = instantiate(this.pfb_item);
            item.parent = this.node_content;
            var itemTs = item.getComponent(_crd && RoleInfoDecorationsItem === void 0 ? (_reportPossibleCrUseOfRoleInfoDecorationsItem({
              error: Error()
            }), RoleInfoDecorationsItem) : RoleInfoDecorationsItem);
            itemTs.initHeadData(combinedArray[_i], this);
          }
        }
        /* 显示头像框界面 */


        showHeadFrameView() {
          this.node_content.destroyAllChildren();
          var headFrameTabs = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeadFramTable;
          var headFrameList = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.avatarInfo.headFrame ? [(_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.avatarInfo.headFrame] : [];
          var haveFrameHead = [];
          var noHavaFrameHead = [];

          for (var i = 0; i < headFrameTabs.length; i++) {
            var id = headFrameTabs[i].Id;

            if (id !== (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.avatarInfo.headFrame) {
              if (this.checkHeadIsHave(id)) {
                haveFrameHead.push(id);
              } else {
                noHavaFrameHead.push(id);
              }
            }
          }

          haveFrameHead.sort((a, b) => {
            var itemTab1 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(a);
            var itemTab2 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(b);
            return itemTab1.Sort - itemTab2.Sort;
          });
          noHavaFrameHead.sort((a, b) => {
            var itemTab1 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(a);
            var itemTab2 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(b);
            return itemTab1.Sort - itemTab2.Sort;
          });
          var combinedArray = [...headFrameList, ...haveFrameHead, ...noHavaFrameHead];

          for (var _i2 = 0; _i2 < combinedArray.length; _i2++) {
            var item = instantiate(this.pfb_item);
            item.parent = this.node_content;
            var itemTs = item.getComponent(_crd && RoleInfoDecorationsItem === void 0 ? (_reportPossibleCrUseOfRoleInfoDecorationsItem({
              error: Error()
            }), RoleInfoDecorationsItem) : RoleInfoDecorationsItem);
            itemTs.initFrameData(combinedArray[_i2], this);
          }
        }

        onDestroy() {
          super.onDestroy();
        }

        register() {
          // 更换头像
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.SetHeadIconRsp, this.on_s2c_SetHeadIconRsp, this); // 更换头像框

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.SetHeadFrameRsp, this.on_s2c_SetHeadFrameRsp, this);
        }

        unRegister() {
          super.unRegister();
        }

        on_s2c_SetHeadIconRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.avatarInfo.headIcon = msg.headIcon;
            this.initView();
          }
        }

        on_s2c_SetHeadFrameRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.avatarInfo.headFrame = msg.headFrame;
            this.initView();
          }
        }

        selectHead(item) {
          if (this.cur_select_item) {
            this.cur_select_item.unSelectHead();
            this.cur_select_item = null;
          }

          if (item) {
            this.cur_select_item = item;

            if (this.default_view === (_crd && HEADTYPE === void 0 ? (_reportPossibleCrUseOfHEADTYPE({
              error: Error()
            }), HEADTYPE) : HEADTYPE).HEADICON) {
              this.changeIconState(this.cur_select_item.itemId, 0);
            } else if (this.default_view === (_crd && HEADTYPE === void 0 ? (_reportPossibleCrUseOfHEADTYPE({
              error: Error()
            }), HEADTYPE) : HEADTYPE).HEADFRAME) {
              this.changeIconState(0, this.cur_select_item.itemId);
            }
          }
        } // 像服务器发送切换头像、头像框的功能


        sendMsg() {
          if (!this.cur_select_item) {
            return;
          }

          if (this.cur_select_item.itemId === (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.avatarInfo.headFrame || this.cur_select_item.itemId === (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.avatarInfo.headIcon) {
            return;
          }

          switch (this.default_view) {
            case (_crd && HEADTYPE === void 0 ? (_reportPossibleCrUseOfHEADTYPE({
              error: Error()
            }), HEADTYPE) : HEADTYPE).HEADICON:
              if ((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.avatarInfo.headIcon !== this.cur_select_item.itemId) {
                var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).Msg_SetHeadIconReq();
                msg.headIcon = this.cur_select_item.itemId;
                (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
                  error: Error()
                }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).Ptl.SetHeadIconReq, msg);
              }

              break;

            case (_crd && HEADTYPE === void 0 ? (_reportPossibleCrUseOfHEADTYPE({
              error: Error()
            }), HEADTYPE) : HEADTYPE).HEADFRAME:
              if ((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.avatarInfo.headFrame !== this.cur_select_item.itemId) {
                var _msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).Msg_SetHeadFrameReq();

                _msg.headFrame = this.cur_select_item.itemId;
                (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
                  error: Error()
                }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).Ptl.SetHeadFrameReq, _msg);
              }

              break;

            default:
              break;
          }
        } // 判断当前headicon是否拥有


        checkHeadIsHave(itemId) {
          for (var i = 0; i < (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.avatarInfo.headIcons.length; i++) {
            var id = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.avatarInfo.headIcons[i].itemId;

            if (id === itemId) {
              return true;
            }
          }

          return false;
        } // 判断当前头像框是否拥有


        checkFrameIsHave(itemId) {
          for (var i = 0; i < (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.avatarInfo.headFrames.length; i++) {
            var id = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.avatarInfo.headFrames[i].itemId;

            if (id === itemId) {
              return true;
            }
          }

          return false;
        }
        /* 根据点击的头像或者头像框 切换头像状态 */


        changeIconState(headItemId, headFrameId, isInit) {
          // this.node_head.active = false;
          // this.node_frame.active = false;
          this.node_attr_layout.destroyAllChildren();

          if (headFrameId) {
            // this.node_frame.active = true;
            var frameItemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(headFrameId);
            this.sp_frame.setTexture(frameItemTab.Icon);
            this.lbl_name.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(frameItemTab.Name); // 查看是否有属性

            var frameTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeadFramTableById.getValue(headFrameId);
            this.lbl_desc.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(frameItemTab.Desc);

            if (frameTab) {
              for (var i = 0; i < frameTab.AttrTypes.length; i++) {
                var attrItem = instantiate(this.pfb_attr);
                attrItem.parent = this.node_attr_layout;
                var attrItemTs = attrItem.getComponent(_crd && HeroAttrItem === void 0 ? (_reportPossibleCrUseOfHeroAttrItem({
                  error: Error()
                }), HeroAttrItem) : HeroAttrItem);
                attrItemTs.initView(frameTab.AttrTypes[i], frameTab.AttrValue[i]);
              }
            }
          }

          if (headItemId) {
            // this.node_head.active = true;
            var headTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeadTableById.getValue(headItemId);
            var headItemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(headItemId);
            this.sp_head.setTexture(headItemTab.Icon);
            this.lbl_desc.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(headItemTab.Desc);
            this.lbl_name.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(headItemTab.Name);

            if (headTab && !isInit) {
              for (var _i3 = 0; _i3 < headTab.AttrTypes.length; _i3++) {
                var _attrItem = instantiate(this.pfb_attr);

                _attrItem.parent = this.node_attr_layout;

                var _attrItemTs = _attrItem.getComponent(_crd && HeroAttrItem === void 0 ? (_reportPossibleCrUseOfHeroAttrItem({
                  error: Error()
                }), HeroAttrItem) : HeroAttrItem);

                _attrItemTs.initView(headTab.AttrTypes[_i3], headTab.AttrValue[_i3]);
              }
            }
          }

          var wearBtn = this.node_btn.getChildByName("wear_btn");
          var wearingBtn = this.node_btn.getChildByName("wearing_node");
          var goBtn = this.node_btn.getChildByName("go_btn");
          wearBtn.active = false;
          wearingBtn.active = false;
          goBtn.active = false;

          switch (this.default_view) {
            case (_crd && HEADTYPE === void 0 ? (_reportPossibleCrUseOfHEADTYPE({
              error: Error()
            }), HEADTYPE) : HEADTYPE).HEADICON:
              if (headItemId === (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.avatarInfo.headIcon) {
                // 当前已穿带
                wearingBtn.active = true;
              } else {
                if (this.checkHeadIsHave(headItemId)) {
                  wearBtn.active = true;
                } else {
                  goBtn.active = true;
                }
              }

              break;

            case (_crd && HEADTYPE === void 0 ? (_reportPossibleCrUseOfHEADTYPE({
              error: Error()
            }), HEADTYPE) : HEADTYPE).HEADFRAME:
              if (headFrameId === (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.avatarInfo.headFrame) {
                // 当前已穿带
                wearingBtn.active = true;
              } else {
                if (this.checkFrameIsHave(headFrameId)) {
                  wearBtn.active = true;
                } else {
                  goBtn.active = true;
                }
              }

              break;

            default:
              break;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pfb_item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pfb_attr", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_content", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_btn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_head", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "sp_head", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_frame", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "sp_frame", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lbl_name", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lbl_desc", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "node_attr_layout", [_dec12], {
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
//# sourceMappingURL=074a93d76570dd9fe5618e5f0d57d51cf807fd52.js.map