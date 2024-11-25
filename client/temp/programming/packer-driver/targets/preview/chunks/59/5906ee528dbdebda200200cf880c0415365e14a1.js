System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "client_protocol", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, instantiate, Label, Node, Prefab, ProgressBar, Sprite, ViewPop, tab, proto, AssociationData, AssociationControl, EventMgr, AssociationPlayerItem, InfiniteList, LangMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _crd, ccclass, property, AssociationMainPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationData(extras) {
    _reporterNs.report("AssociationData", "./AssociationData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationControl(extras) {
    _reporterNs.report("AssociationControl", "./AssociationControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationPlayerItem(extras) {
    _reporterNs.report("AssociationPlayerItem", "./AssociationPlayerItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfiniteList(extras) {
    _reporterNs.report("InfiniteList", "../../../Common/InfiniteList/InfiniteList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
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
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      ProgressBar = _cc.ProgressBar;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_4) {
      AssociationData = _unresolved_4.AssociationData;
    }, function (_unresolved_5) {
      AssociationControl = _unresolved_5.AssociationControl;
    }, function (_unresolved_6) {
      EventMgr = _unresolved_6.EventMgr;
    }, function (_unresolved_7) {
      AssociationPlayerItem = _unresolved_7.AssociationPlayerItem;
    }, function (_unresolved_8) {
      InfiniteList = _unresolved_8.default;
    }, function (_unresolved_9) {
      LangMgr = _unresolved_9.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "14f3cVHxzBGHYhcdGnZnavd", "AssociationMainPop", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'ProgressBar', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AssociationMainPop", AssociationMainPop = (_dec = ccclass('AssociationMainPop'), _dec2 = property(Prefab), _dec3 = property(_crd && InfiniteList === void 0 ? (_reportPossibleCrUseOfInfiniteList({
        error: Error()
      }), InfiniteList) : InfiniteList), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(ProgressBar), _dec11 = property(Sprite), _dec12 = property(Node), _dec13 = property(Label), _dec(_class = (_class2 = class AssociationMainPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pfb_item", _descriptor, this);

          _initializerDefineProperty(this, "list_view", _descriptor2, this);

          _initializerDefineProperty(this, "lbl_guild_name", _descriptor3, this);

          //公会名字
          _initializerDefineProperty(this, "lbl_leader_name", _descriptor4, this);

          //公会舰长名字
          _initializerDefineProperty(this, "lbl_guild_notice", _descriptor5, this);

          //公会公告
          _initializerDefineProperty(this, "lbl_guild_lv", _descriptor6, this);

          //公会等级
          _initializerDefineProperty(this, "lbl_guild_member_count", _descriptor7, this);

          //公会成员数量
          _initializerDefineProperty(this, "lbl_guild_exp", _descriptor8, this);

          //公会成员数量
          _initializerDefineProperty(this, "bar_guild_exp", _descriptor9, this);

          _initializerDefineProperty(this, "sp_guild_flag", _descriptor10, this);

          //公会旗帜
          _initializerDefineProperty(this, "node_apply", _descriptor11, this);

          _initializerDefineProperty(this, "lbl_apply", _descriptor12, this);

          this.guildData = null;
          this._list = [];
          this._applyGuide = false;
        }

        onShow() {
          this.guildData = this.openData.rankData;
          this._applyGuide = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getGuildIsRequest(this.guildData.id);
          this.setGuildSimpleInfo(); // 获取公会信息

          var simpleInfo = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getAssocitionSimpleInfo();

          if (simpleInfo && this.guildData.id === simpleInfo.id) {
            this._list = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
              error: Error()
            }), AssociationData) : AssociationData).ins.getMemberArr();
            this.initList();
          } else {
            (_crd && AssociationControl === void 0 ? (_reportPossibleCrUseOfAssociationControl({
              error: Error()
            }), AssociationControl) : AssociationControl).ins.reqGetGuildDesc(this.guildData.id);
          }
        }

        onDestroy() {
          super.onDestroy();
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.QueryGuildInfoRsp, this.on_s2c_QueryGuildInfoRsp, this);
        }

        unRegister() {
          super.unRegister();
        }

        on_s2c_QueryGuildInfoRsp(msg) {
          this._list = msg.guild.members;
          this.initList();
        }

        initList() {
          this.list_view.Init({
            getCellNumber: this.getCellCount.bind(this),
            getCellSize: this.getCellHeight.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView: this.getCellView.bind(this),
            getCellData: this.GetCellData.bind(this)
          });
        }

        setGuildSimpleInfo() {
          var guildData = this.guildData;
          var flagtab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GuildFlagTableById.getValue(guildData.flagId ? guildData.flagId : 1);
          this.sp_guild_flag.setTexture(flagtab.IconUrl);
          this.lbl_guild_name.string = guildData.name;
          this.lbl_leader_name.string = guildData.leaderName;
          this.lbl_guild_notice.string = guildData.notice;
          var lvData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GuildLevelTableById.getValue(guildData.level);
          this.lbl_guild_member_count.string = this.guildData.memberCount + "/" + lvData.MaxCount;
          var nextLvData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GuildLevelTableById.getValue(guildData.level + 1);
          this.lbl_guild_exp.string = guildData.exp + "/" + (nextLvData ? nextLvData.Exp : lvData.Exp);
          this.lbl_guild_lv.string = String(guildData.level);

          var _progress = guildData.exp / (nextLvData ? nextLvData.Exp : lvData.Exp);

          this.bar_guild_exp.progress = _progress > 1 ? 1 : _progress;
          this.node_apply.active = !(_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getInGuild();
          this.refreshApplyLable();
        }

        refreshApplyLable() {
          this.lbl_apply.string = this._applyGuide ? (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab("ui_association_8") : (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab("ui_association_7");
          this.node_apply.getComponent(Button).interactable = !this._applyGuide;
          this.node_apply.getComponent(Sprite).grayscale = this._applyGuide;
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
          var cell = instantiate(this.pfb_item).getComponent(_crd && AssociationPlayerItem === void 0 ? (_reportPossibleCrUseOfAssociationPlayerItem({
            error: Error()
          }), AssociationPlayerItem) : AssociationPlayerItem);
          return cell;
        }

        GetCellData(idx) {
          return {
            data: this._list[idx],
            view: this,
            guildData: this.guildData
          };
        }
        /* 申请加入公会 */


        onClickEnterGuild() {
          (_crd && AssociationControl === void 0 ? (_reportPossibleCrUseOfAssociationControl({
            error: Error()
          }), AssociationControl) : AssociationControl).ins.reqJoinGuild(this.guildData.id);
          this._applyGuide = true;
          this.refreshApplyLable();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pfb_item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "list_view", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbl_guild_name", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lbl_leader_name", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lbl_guild_notice", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lbl_guild_lv", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lbl_guild_member_count", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lbl_guild_exp", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bar_guild_exp", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "sp_guild_flag", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "node_apply", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "lbl_apply", [_dec13], {
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
//# sourceMappingURL=5906ee528dbdebda200200cf880c0415365e14a1.js.map