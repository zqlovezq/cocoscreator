System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, Sprite, InfiniteCell, LangMgr, GameUtil, refreshFlagImg, SimpleRoleInfo, PlayerHeadItem, UIMgr, ViewName, AssociationData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, AssociationRankBottomItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfInfiniteCell(extras) {
    _reporterNs.report("InfiniteCell", "../../../Common/InfiniteList/InfiniteCell", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrefreshFlagImg(extras) {
    _reporterNs.report("refreshFlagImg", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSimpleRoleInfo(extras) {
    _reporterNs.report("SimpleRoleInfo", "../friends/SimpleRoleInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerHeadItem(extras) {
    _reporterNs.report("PlayerHeadItem", "../common/PlayerHeadItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationData(extras) {
    _reporterNs.report("AssociationData", "./AssociationData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      InfiniteCell = _unresolved_2.default;
    }, function (_unresolved_3) {
      LangMgr = _unresolved_3.LangMgr;
    }, function (_unresolved_4) {
      GameUtil = _unresolved_4.GameUtil;
      refreshFlagImg = _unresolved_4.refreshFlagImg;
    }, function (_unresolved_5) {
      SimpleRoleInfo = _unresolved_5.SimpleRoleInfo;
    }, function (_unresolved_6) {
      PlayerHeadItem = _unresolved_6.PlayerHeadItem;
    }, function (_unresolved_7) {
      UIMgr = _unresolved_7.UIMgr;
    }, function (_unresolved_8) {
      ViewName = _unresolved_8.ViewName;
    }, function (_unresolved_9) {
      AssociationData = _unresolved_9.AssociationData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "962d1tTcZtCHYBqA1LAfqAY", "AssociationRankBottomItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AssociationRankBottomItem", AssociationRankBottomItem = (_dec = ccclass('AssociationRankBottomItem'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Sprite), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(_crd && PlayerHeadItem === void 0 ? (_reportPossibleCrUseOfPlayerHeadItem({
        error: Error()
      }), PlayerHeadItem) : PlayerHeadItem), _dec10 = property(Label), _dec11 = property(Label), _dec(_class = (_class2 = class AssociationRankBottomItem extends (_crd && InfiniteCell === void 0 ? (_reportPossibleCrUseOfInfiniteCell({
        error: Error()
      }), InfiniteCell) : InfiniteCell) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "node_role", _descriptor, this);

          _initializerDefineProperty(this, "node_guild", _descriptor2, this);

          _initializerDefineProperty(this, "lbl_rank", _descriptor3, this);

          _initializerDefineProperty(this, "sp_guild_flag", _descriptor4, this);

          _initializerDefineProperty(this, "lbl_guild_name", _descriptor5, this);

          _initializerDefineProperty(this, "lbl_guild_score", _descriptor6, this);

          _initializerDefineProperty(this, "lbl_members_count", _descriptor7, this);

          _initializerDefineProperty(this, "palyerHerdItem", _descriptor8, this);

          _initializerDefineProperty(this, "lbl_role_damage", _descriptor9, this);

          _initializerDefineProperty(this, "lbl_role_name", _descriptor10, this);

          this.data = null;
          this.simpleRole = null;
          this.simpleGuild = null;
          this.view_type = 0;
          this._rank_index = 0;
          this._isMySelf = false;
        }

        UpdateContent(data) {
          this.view_type = data.view_type;
          this.node_role.active = false;
          this.node_guild.active = false;
          this._rank_index = data.index;
          this._isMySelf = data.isSelf;

          if (data) {
            if (this.view_type === 1) {
              this.data = data.rankData;
              this.initPlayerData(this.data);
            } else {
              this.data = data.rankData;
              this.initGuildData(this.data);
            }
          }
        }

        initPlayerData(data) {
          this.simpleRole = data.simple;
          this.node_role.active = true;
          const playerInfo = new (_crd && SimpleRoleInfo === void 0 ? (_reportPossibleCrUseOfSimpleRoleInfo({
            error: Error()
          }), SimpleRoleInfo) : SimpleRoleInfo)();
          playerInfo.merge(this.simpleRole);
          this.palyerHerdItem.initHeadInfo({
            roleInfo: playerInfo
          });
          this.lbl_role_damage.string = String(data.score);
          this.lbl_role_name.string = this.simpleRole.name;
          this.lbl_rank.string = String(this._rank_index + 4);
        }

        initGuildData(data) {
          if (data && data.guild && data.guild.simple) {
            this.node_guild.active = true;
            this.simpleGuild = data.guild.simple;
            this.createGuildData();
          }
        }

        createGuildData() {
          (_crd && refreshFlagImg === void 0 ? (_reportPossibleCrUseOfrefreshFlagImg({
            error: Error()
          }), refreshFlagImg) : refreshFlagImg)(this.simpleGuild ? this.simpleGuild.flagId : 0, this.sp_guild_flag);
          this.lbl_guild_name.string = this.simpleGuild ? this.simpleGuild.name : "";
          this.lbl_guild_score.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).convertNumber(this.data.score);
          this.lbl_members_count.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("ui_association_4", [this.data.members]);
          this.lbl_rank.string = String(this._rank_index + 4);
        }

        setPlayerMyRank(idx) {
          this.lbl_rank.string = String(idx);

          if (idx > 0 && idx <= 3) {
            this.node.getChildByName("rank_node").active = false;
            this.node.getChildByName("myno1").active = idx === 1;
            this.node.getChildByName("myno2").active = idx === 2;
            this.node.getChildByName("myno3").active = idx === 3;
          } else if (idx > 3) {
            this.node.getChildByName("rank_node").active = true;
          } else {
            this.lbl_rank.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("ui_rank_1");
          }

          this.simpleGuild = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getAssocitionSimpleInfo();
        }

        onClickGuild() {
          if (this.simpleGuild) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).AssociationMainPop,
              data: {
                "rankData": this.simpleGuild
              }
            });
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_role", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_guild", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbl_rank", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sp_guild_flag", [_dec5], {
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
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lbl_guild_score", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lbl_members_count", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "palyerHerdItem", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lbl_role_damage", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lbl_role_name", [_dec11], {
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
//# sourceMappingURL=05244d1293325a8c9a571a6f8f2d86e27d823eb6.js.map