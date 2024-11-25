System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "client_protocol", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, instantiate, Label, log, Node, NodeEventType, Prefab, ProgressBar, ScrollView, Sprite, Toggle, UITransform, Vec3, ComponentBase, AssociationControl, AssociationView, UIMgr, proto, ViewName, ASSOCIATIONVIEW, InfiniteList, AssociationPlayerItem, AssociationData, tab, AssociationOperatePop, EventMgr, getPlayInfoById, getTimeUntilNextDay, setTextTime, RoleData, LangMgr, RedMgr, RedDotType, OpenFunctionMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _crd, ccclass, property, AssociationMainView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfComponentBase(extras) {
    _reporterNs.report("ComponentBase", "../../../framework/base/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationControl(extras) {
    _reporterNs.report("AssociationControl", "./AssociationControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationView(extras) {
    _reporterNs.report("AssociationView", "./AssociationView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfASSOCIATIONVIEW(extras) {
    _reporterNs.report("ASSOCIATIONVIEW", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfiniteList(extras) {
    _reporterNs.report("InfiniteList", "../../../Common/InfiniteList/InfiniteList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationPlayerItem(extras) {
    _reporterNs.report("AssociationPlayerItem", "./AssociationPlayerItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationData(extras) {
    _reporterNs.report("AssociationData", "./AssociationData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationOperatePop(extras) {
    _reporterNs.report("AssociationOperatePop", "./AssociationOperatePop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetPlayInfoById(extras) {
    _reporterNs.report("getPlayInfoById", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetTimeUntilNextDay(extras) {
    _reporterNs.report("getTimeUntilNextDay", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetTextTime(extras) {
    _reporterNs.report("setTextTime", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenFunctionMgr(extras) {
    _reporterNs.report("OpenFunctionMgr", "../../../Common/component/OpenFunctionMgr", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      log = _cc.log;
      Node = _cc.Node;
      NodeEventType = _cc.NodeEventType;
      Prefab = _cc.Prefab;
      ProgressBar = _cc.ProgressBar;
      ScrollView = _cc.ScrollView;
      Sprite = _cc.Sprite;
      Toggle = _cc.Toggle;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      ComponentBase = _unresolved_2.ComponentBase;
    }, function (_unresolved_3) {
      AssociationControl = _unresolved_3.AssociationControl;
    }, function (_unresolved_4) {
      AssociationView = _unresolved_4.AssociationView;
    }, function (_unresolved_5) {
      UIMgr = _unresolved_5.UIMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_6) {
      ViewName = _unresolved_6.ViewName;
    }, function (_unresolved_7) {
      ASSOCIATIONVIEW = _unresolved_7.ASSOCIATIONVIEW;
    }, function (_unresolved_8) {
      InfiniteList = _unresolved_8.default;
    }, function (_unresolved_9) {
      AssociationPlayerItem = _unresolved_9.AssociationPlayerItem;
    }, function (_unresolved_10) {
      AssociationData = _unresolved_10.AssociationData;
    }, function (_unresolved_11) {
      tab = _unresolved_11.tab;
    }, function (_unresolved_12) {
      AssociationOperatePop = _unresolved_12.AssociationOperatePop;
    }, function (_unresolved_13) {
      EventMgr = _unresolved_13.EventMgr;
    }, function (_unresolved_14) {
      getPlayInfoById = _unresolved_14.getPlayInfoById;
      getTimeUntilNextDay = _unresolved_14.getTimeUntilNextDay;
      setTextTime = _unresolved_14.setTextTime;
    }, function (_unresolved_15) {
      RoleData = _unresolved_15.RoleData;
    }, function (_unresolved_16) {
      LangMgr = _unresolved_16.LangMgr;
    }, function (_unresolved_17) {
      RedMgr = _unresolved_17.RedMgr;
    }, function (_unresolved_18) {
      RedDotType = _unresolved_18.RedDotType;
    }, function (_unresolved_19) {
      OpenFunctionMgr = _unresolved_19.OpenFunctionMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1a81dwUfi9JzKmT/F9F7wEL", "AssociationMainView", undefined);
      /*
       * @Date: 2024-08-28 11:02:22
       * @LastEditors: wzq
       * @LastEditTime: 2024-11-05 10:09:52
       */


      __checkObsolete__(['_decorator', 'Button', 'Component', 'EventTouch', 'instantiate', 'Label', 'log', 'Node', 'NodeEventType', 'Prefab', 'ProgressBar', 'ScrollView', 'Sprite', 'Toggle', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AssociationMainView", AssociationMainView = (_dec = ccclass('AssociationMainView'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(_crd && InfiniteList === void 0 ? (_reportPossibleCrUseOfInfiniteList({
        error: Error()
      }), InfiniteList) : InfiniteList), _dec5 = property(Prefab), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(ProgressBar), _dec13 = property(Sprite), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Label), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Toggle), _dec21 = property(Toggle), _dec22 = property(Label), _dec23 = property(Node), _dec(_class = (_class2 = class AssociationMainView extends (_crd && ComponentBase === void 0 ? (_reportPossibleCrUseOfComponentBase({
        error: Error()
      }), ComponentBase) : ComponentBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "node_info", _descriptor, this);

          _initializerDefineProperty(this, "node_event", _descriptor2, this);

          _initializerDefineProperty(this, "list_view", _descriptor3, this);

          _initializerDefineProperty(this, "pfb_item", _descriptor4, this);

          _initializerDefineProperty(this, "lbl_guild_name", _descriptor5, this);

          //公会名字
          _initializerDefineProperty(this, "lbl_leader_name", _descriptor6, this);

          //公会舰长名字
          _initializerDefineProperty(this, "lbl_guild_notice", _descriptor7, this);

          //公会公告
          _initializerDefineProperty(this, "lbl_guild_lv", _descriptor8, this);

          //公会等级
          _initializerDefineProperty(this, "lbl_guild_member_count", _descriptor9, this);

          //公会成员数量
          _initializerDefineProperty(this, "lbl_guild_exp", _descriptor10, this);

          //公会成员数量
          _initializerDefineProperty(this, "bar_guild_exp", _descriptor11, this);

          _initializerDefineProperty(this, "sp_guild_flag", _descriptor12, this);

          //公会旗帜
          _initializerDefineProperty(this, "node_small_tips", _descriptor13, this);

          _initializerDefineProperty(this, "node_sign", _descriptor14, this);

          _initializerDefineProperty(this, "timerLab", _descriptor15, this);

          _initializerDefineProperty(this, "node_guild_setting", _descriptor16, this);

          _initializerDefineProperty(this, "node_write_notice", _descriptor17, this);

          _initializerDefineProperty(this, "node_guild_proces", _descriptor18, this);

          _initializerDefineProperty(this, "toggle_info", _descriptor19, this);

          _initializerDefineProperty(this, "toggle_event", _descriptor20, this);

          _initializerDefineProperty(this, "timerBossLab", _descriptor21, this);

          _initializerDefineProperty(this, "node_hide", _descriptor22, this);

          this.view_type = (_crd && ASSOCIATIONVIEW === void 0 ? (_reportPossibleCrUseOfASSOCIATIONVIEW({
            error: Error()
          }), ASSOCIATIONVIEW) : ASSOCIATIONVIEW).NONE;
          this._list = [];
          this._openData = null;
          this.endBossTimer = 0;
          this.endTimer = 0;

          this.updateTimer = () => {
            this.endTimer--;

            if (this.endTimer >= 0) {
              //let tips = "{0}後可再次領取"
              this.timerLab.string = (_crd && setTextTime === void 0 ? (_reportPossibleCrUseOfsetTextTime({
                error: Error()
              }), setTextTime) : setTextTime)(this.endTimer);
            } else {
              this.unschedule(this.updateTimer);
            }
          };

          this.updateBossTimer = () => {
            this.endBossTimer--;

            if (this.endBossTimer >= 0) {
              this.timerBossLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab("ui_commondesc_109") + (_crd && setTextTime === void 0 ? (_reportPossibleCrUseOfsetTextTime({
                error: Error()
              }), setTextTime) : setTextTime)(this.endBossTimer);
            } else {
              this.unschedule(this.updateBossTimer);
            }
          };
        }

        register() {
          /* 成员信息变动 */
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.SetGuildMemberJobRsp, this.on_s2c_SetGuildMemberJobRsp, this);
          /* 踢出公会 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.KickGuildMemberRsp, this.on_s2c_KickGuildMemberRsp, this);
          /* 监听公会签到 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.SignGuildRsp, this.on_s2c_SignGuildRsp, this);
          /* 监听公会公告修改 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.SetGuildNoticeRsp, this.on_s2c_SetGuildNoticeRsp, this);
          /* 监听设置公会名字和旗帜 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.SetGuildNameAndFlagRsp, this.on_s2c_SetGuildNameAndFlagRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GuileLevelUpPush, this.on_s2c_GuileLevelUpPush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetSimpleRoleRsp, this.on_s2c_GetSimpleRoleRsp, this);
          this.node_hide.on(NodeEventType.TOUCH_START, () => {
            this.node_hide.active = false;
            this.node_small_tips.active = false;
          }, this);
        }

        unRegister() {
          super.unRegister();
        }

        onDestroy() {
          super.onDestroy();
        }

        onShow(openData) {
          this.view_type = openData ? (_crd && ASSOCIATIONVIEW === void 0 ? (_reportPossibleCrUseOfASSOCIATIONVIEW({
            error: Error()
          }), ASSOCIATIONVIEW) : ASSOCIATIONVIEW).EVENT : (_crd && ASSOCIATIONVIEW === void 0 ? (_reportPossibleCrUseOfASSOCIATIONVIEW({
            error: Error()
          }), ASSOCIATIONVIEW) : ASSOCIATIONVIEW).INFO;

          if (openData) {
            this._openData = openData;
          }

          this.onTouchStar();
          this.setView();
        }
        /* 点击获取申请列表 */


        clickGetApplyList() {
          this.onTouchStar();
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).AssociationApplyListPop
          });
        }

        onClose() {
          const view = (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.getView("AssociationView").getComponent(_crd && AssociationView === void 0 ? (_reportPossibleCrUseOfAssociationView({
            error: Error()
          }), AssociationView) : AssociationView);
          view.onClose();
        }

        onClickChat() {
          // 判断聊天是否开启
          this.onTouchStar();
          const isOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_Chat);

          if (isOpen) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).ChatPop,
              data: {
                "channelType": (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).ChatChannelType.Guild
              }
            });
          } else {
            (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
              error: Error()
            }), OpenFunctionMgr) : OpenFunctionMgr).ins.showFunctionTips((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_Chat);
          }
        }

        setView(isRefresh) {
          this.node_info.active = this.view_type === (_crd && ASSOCIATIONVIEW === void 0 ? (_reportPossibleCrUseOfASSOCIATIONVIEW({
            error: Error()
          }), ASSOCIATIONVIEW) : ASSOCIATIONVIEW).INFO;
          this.node_event.active = this.view_type === (_crd && ASSOCIATIONVIEW === void 0 ? (_reportPossibleCrUseOfASSOCIATIONVIEW({
            error: Error()
          }), ASSOCIATIONVIEW) : ASSOCIATIONVIEW).EVENT;
          this.toggle_info.isChecked = this.view_type === (_crd && ASSOCIATIONVIEW === void 0 ? (_reportPossibleCrUseOfASSOCIATIONVIEW({
            error: Error()
          }), ASSOCIATIONVIEW) : ASSOCIATIONVIEW).INFO;
          this.toggle_event.isChecked = this.view_type === (_crd && ASSOCIATIONVIEW === void 0 ? (_reportPossibleCrUseOfASSOCIATIONVIEW({
            error: Error()
          }), ASSOCIATIONVIEW) : ASSOCIATIONVIEW).EVENT;

          switch (this.view_type) {
            case (_crd && ASSOCIATIONVIEW === void 0 ? (_reportPossibleCrUseOfASSOCIATIONVIEW({
              error: Error()
            }), ASSOCIATIONVIEW) : ASSOCIATIONVIEW).INFO:
              // 公会信息界面
              this.unschedule(this.updateBossTimer);
              this._list = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
                error: Error()
              }), AssociationData) : AssociationData).ins.getMemberArr();
              this.initList(isRefresh);
              this.setGuildSimpleInfo();
              break;

            case (_crd && ASSOCIATIONVIEW === void 0 ? (_reportPossibleCrUseOfASSOCIATIONVIEW({
              error: Error()
            }), ASSOCIATIONVIEW) : ASSOCIATIONVIEW).EVENT:
              //工会任务界面 
              if (this._openData === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).PveStageType.PveStageType_GuildBoss) {
                (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                  error: Error()
                }), UIMgr) : UIMgr).ins.show({
                  viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                    error: Error()
                  }), ViewName) : ViewName).AssociationBossView
                });
              }

              this._openData = null;
              this.initBossEndTimer();
              break;

            default:
              break;
          }
        }

        switchView(e, view) {
          this.onTouchStar();

          if (Number(view) === this.view_type) {
            return;
          }

          this.view_type = Number(view);
          this.setView();
        }

        initList(isRefresh) {
          if (isRefresh) {
            this.list_view.Refresh();
          } else {
            this.list_view.Init({
              getCellNumber: this.getCellCount.bind(this),
              getCellSize: this.getCellHeight.bind(this),
              getCellIdentifer: this.getCellIdentifer.bind(this),
              getCellView: this.getCellView.bind(this),
              getCellData: this.GetCellData.bind(this)
            }); // this.list_view.node.on("scrolling", this.onScrolling, this);

            let _scrollView = this.list_view.getComponent(ScrollView);

            this.list_view.node.targetOff(this.list_view.node);

            _scrollView.node.off(NodeEventType.TOUCH_START, this.onTouchStar, this, true);

            this.list_view.node.on("scroll-began", () => {
              this.node_small_tips.active = false;
            }, this);

            _scrollView.node.on(NodeEventType.TOUCH_START, this.onTouchStar, this, true);
          }
        }

        onTouchStar() {
          this.node_small_tips.active = false;
        }

        getCellCount() {
          return this._list.length;
        }

        getCellHeight(idx) {
          return 120;
        }

        getCellIdentifer(idx) {
          return "AssociationPlayerItem";
        }

        getCellView(idx, identifer) {
          let cell = instantiate(this.pfb_item).getComponent(_crd && AssociationPlayerItem === void 0 ? (_reportPossibleCrUseOfAssociationPlayerItem({
            error: Error()
          }), AssociationPlayerItem) : AssociationPlayerItem);
          return cell;
        }

        GetCellData(idx) {
          return {
            data: this._list[idx],
            view: this
          };
        }

        on_s2c_GetSimpleRoleRsp(msg) {
          this.lbl_leader_name.string = msg.role.name;
          (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getAssocitionSimpleInfo().leaderName = msg.role.name;
        }

        setGuildSimpleInfo() {
          const guildData = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getAssocitionSimpleInfo();

          if (guildData) {
            const flagtab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GuildFlagTableById.getValue(guildData.flagId ? guildData.flagId : 1);
            this.sp_guild_flag.setTexture(flagtab.IconUrl);
            this.lbl_guild_name.string = guildData.name;

            if (guildData.leaderName) {
              this.lbl_leader_name.string = guildData.leaderName;
            } else {
              (_crd && getPlayInfoById === void 0 ? (_reportPossibleCrUseOfgetPlayInfoById({
                error: Error()
              }), getPlayInfoById) : getPlayInfoById)(guildData.leaderId);
            }

            this.lbl_guild_notice.string = guildData.notice;
            const memberCountInfo = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
              error: Error()
            }), AssociationData) : AssociationData).ins.getGuildMembersCount();
            const memberData = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
              error: Error()
            }), AssociationData) : AssociationData).ins.getMemberData((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.id);
            this.lbl_guild_member_count.string = memberCountInfo.memberCount + "/" + memberCountInfo.totalCount;
            this.setExpLevel();
            this.unschedule(this.updateTimer);
            this.endTimer = (_crd && getTimeUntilNextDay === void 0 ? (_reportPossibleCrUseOfgetTimeUntilNextDay({
              error: Error()
            }), getTimeUntilNextDay) : getTimeUntilNextDay)(); //let tips = "{0}後可再次領取"

            this.timerLab.string = (_crd && setTextTime === void 0 ? (_reportPossibleCrUseOfsetTextTime({
              error: Error()
            }), setTextTime) : setTextTime)(this.endTimer);
            this.schedule(this.updateTimer, 1); // 设置权限

            const guildPositionTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GuildPositionTableByPosition.getValue(memberData.job);
            this.node_guild_setting.active = guildPositionTab.Setting;
            this.node_write_notice.active = guildPositionTab.WriteNotification && !(_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
              error: Error()
            }), AssociationData) : AssociationData).ins.getAssocitionInfo().isBanNotice;
            this.node_guild_proces.active = guildPositionTab.Proces;
            this.setSignBtn(); // 刷新一下申请红点

            (_crd && AssociationControl === void 0 ? (_reportPossibleCrUseOfAssociationControl({
              error: Error()
            }), AssociationControl) : AssociationControl).ins.reqGetJoinGuildRequests(0);
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Guild_Activity);
          }
        }

        showSmallTips(target, data) {
          // AssociationOperatePop
          this.node_small_tips.active = true;
          this.node_hide.active = true;
          const ts = this.node_small_tips.getComponent(_crd && AssociationOperatePop === void 0 ? (_reportPossibleCrUseOfAssociationOperatePop({
            error: Error()
          }), AssociationOperatePop) : AssociationOperatePop);
          ts.setData(data);
          const scrollViewMidY = this.list_view.node.getComponent(UITransform).height / 2;
          const worldPos = target.parent.getComponent(UITransform).convertToWorldSpaceAR(target.position);
          const viewPos = this.list_view.node.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
          const distanceToCenter = viewPos.y + scrollViewMidY;

          if (distanceToCenter > 0) {
            this.node_small_tips.setPosition(new Vec3(viewPos.x, viewPos.y, 0));
          } else {
            this.node_small_tips.setPosition(new Vec3(viewPos.x, viewPos.y - distanceToCenter + 40, 0));
          }
        }
        /* 队员信息变动 */


        on_s2c_SetGuildMemberJobRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          this.setView(true);
        }
        /* 踢出队员 */


        on_s2c_KickGuildMemberRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          this.setView(false);
        }
        /* 点击鸡多多界面 */


        onClickBargainGiftPop(e, type) {
          const isOpen = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).GuildOFName.GuildOFName_GuildGift);

          if (isOpen) {
            if ((_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
              error: Error()
            }), AssociationData) : AssociationData).ins.getBargainGift(type)) {
              (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                error: Error()
              }), UIMgr) : UIMgr).ins.show({
                viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                  error: Error()
                }), ViewName) : ViewName).AssociationGiftPop,
                data: type
              });
            }
          } else {
            (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
              error: Error()
            }), AssociationData) : AssociationData).ins.showFunctionTips((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).GuildOFName.GuildOFName_GuildGift);
          }
        }
        /* 点击更改信息 */


        onClickChangeInfo(e, type) {
          this.onTouchStar();
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).AssociationChangeInfoPop
          });
        }

        onClickChangeNotice(e, type) {
          this.onTouchStar();
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).AssociationChangeNoticePop
          });
        }
        /* 点击签到 */


        onClickSign(e, type) {
          this.onTouchStar();
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).AssociationDonatePop
          });
        }
        /* 点击公会boss */


        onClickGuildBoss(e, type) {
          const isOpen = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).GuildOFName.GuildOFName_GuildBoss);

          if (isOpen) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).AssociationBossView
            });
          } else {
            (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
              error: Error()
            }), AssociationData) : AssociationData).ins.showFunctionTips((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).GuildOFName.GuildOFName_GuildBoss);
          }
        }

        on_s2c_SignGuildRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          this.setSignBtn();
        }

        setSignBtn() {
          const guildInfo = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getAssocitionInfo();
          const signCount = guildInfo.signTimes;
          const maxSignCount = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GuildSignInTable.length;
          const maxRemainSignCount = maxSignCount - signCount;
          this.node_sign.getComponent(Button).interactable = maxRemainSignCount > 0;
          this.node_sign.getComponent(Sprite).grayscale = maxRemainSignCount <= 0;
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Guild_Sign);
          this.setExpLevel();
        }

        on_s2c_GuileLevelUpPush(msg) {
          const guildData = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getAssocitionSimpleInfo();
          guildData.exp = msg.exp;
          guildData.level = msg.level;
          this.setExpLevel();
        }

        setExpLevel() {
          const guildData = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getAssocitionSimpleInfo();

          if (guildData) {
            const lvData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GuildLevelTableById.getValue(guildData.level);
            const nextLvData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GuildLevelTableById.getValue(guildData.level + 1);
            this.lbl_guild_exp.string = guildData.exp + "/" + (nextLvData ? nextLvData.Exp : lvData.Exp);
            this.lbl_guild_lv.string = String(guildData.level);

            const _progress = guildData.exp / (nextLvData ? nextLvData.Exp : lvData.Exp);

            this.bar_guild_exp.progress = _progress > 1 ? 1 : _progress;
            const memberCountInfo = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
              error: Error()
            }), AssociationData) : AssociationData).ins.getGuildMembersCount();
            this.lbl_guild_member_count.string = memberCountInfo.memberCount + "/" + memberCountInfo.totalCount;
          }
        }

        on_s2c_SetGuildNoticeRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          log("cocos 设置公会公告成功");
          this.setView(true);
        }

        on_s2c_SetGuildNameAndFlagRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          log("cocos 设置工会旗帜 姓名成功");
          this.setView(true);
        }
        /* 点击任务按钮 */


        onClickTaskBtn() {
          this.onTouchStar();
          const isOpen = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).GuildOFName.GuildOFName_GuildTask);

          if (isOpen) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).AssociationTaskPop
            });
          } else {
            (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
              error: Error()
            }), AssociationData) : AssociationData).ins.showFunctionTips((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).GuildOFName.GuildOFName_GuildTask);
          }
        }
        /* 点击技能按钮 */


        onClickSkillBtn() {
          this.onTouchStar();
          const isOpen = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).GuildOFName.GuildOFName_GuildAttr);

          if (isOpen) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).AssociationSkillPop
            });
          } else {
            (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
              error: Error()
            }), AssociationData) : AssociationData).ins.showFunctionTips((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).GuildOFName.GuildOFName_GuildAttr);
          }
        }

        onClickLogBtn() {
          this.onTouchStar();
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).AssociationLogPop
          });
        }

        initBossEndTimer() {
          this.unschedule(this.updateBossTimer);
          const isOpen = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).GuildOFName.GuildOFName_GuildBoss);

          if (isOpen) {
            this.endBossTimer = (_crd && getTimeUntilNextDay === void 0 ? (_reportPossibleCrUseOfgetTimeUntilNextDay({
              error: Error()
            }), getTimeUntilNextDay) : getTimeUntilNextDay)();
            this.timerBossLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("ui_commondesc_109") + (_crd && setTextTime === void 0 ? (_reportPossibleCrUseOfsetTextTime({
              error: Error()
            }), setTextTime) : setTextTime)(this.endBossTimer);
            this.schedule(this.updateBossTimer, 1);
          } else {
            this.timerBossLab.string = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
              error: Error()
            }), AssociationData) : AssociationData).ins.getFunctionTips((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).GuildOFName.GuildOFName_GuildBoss);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_info", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_event", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "list_view", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "pfb_item", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lbl_guild_name", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lbl_leader_name", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lbl_guild_notice", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lbl_guild_lv", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lbl_guild_member_count", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lbl_guild_exp", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "bar_guild_exp", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "sp_guild_flag", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "node_small_tips", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "node_sign", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "timerLab", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "node_guild_setting", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "node_write_notice", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "node_guild_proces", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "toggle_info", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "toggle_event", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "timerBossLab", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "node_hide", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a70557feb2d35dbbda09bde69ab3bf098330ea84.js.map