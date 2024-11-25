System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "client_protocol", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Node, Prefab, ViewPop, InfiniteList, proto, Net, EventMgr, RankBottomItem, RankTopItem, RankToggleItem, LocalEvent, RANKING_TYPE, RoleData, HeroTeamControl, BattleMainDataControl, AssociationControl, AssociationData, ViewName, UIMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, RankPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfiniteList(extras) {
    _reporterNs.report("InfiniteList", "../../../Common/InfiniteList/InfiniteList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRankBottomItem(extras) {
    _reporterNs.report("RankBottomItem", "./RankBottomItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRankTopItem(extras) {
    _reporterNs.report("RankTopItem", "./RankTopItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRankToggleItem(extras) {
    _reporterNs.report("RankToggleItem", "./RankToggleItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRANKING_TYPE(extras) {
    _reporterNs.report("RANKING_TYPE", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroTeamControl(extras) {
    _reporterNs.report("HeroTeamControl", "../hero/HeroTeamControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleMainDataControl(extras) {
    _reporterNs.report("BattleMainDataControl", "../home/battle/BattleMainDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationControl(extras) {
    _reporterNs.report("AssociationControl", "../association/AssociationControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationData(extras) {
    _reporterNs.report("AssociationData", "../association/AssociationData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
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
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      InfiniteList = _unresolved_3.default;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_4) {
      Net = _unresolved_4.Net;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }, function (_unresolved_6) {
      RankBottomItem = _unresolved_6.RankBottomItem;
    }, function (_unresolved_7) {
      RankTopItem = _unresolved_7.RankTopItem;
    }, function (_unresolved_8) {
      RankToggleItem = _unresolved_8.RankToggleItem;
    }, function (_unresolved_9) {
      LocalEvent = _unresolved_9.LocalEvent;
    }, function (_unresolved_10) {
      RANKING_TYPE = _unresolved_10.RANKING_TYPE;
    }, function (_unresolved_11) {
      RoleData = _unresolved_11.RoleData;
    }, function (_unresolved_12) {
      HeroTeamControl = _unresolved_12.HeroTeamControl;
    }, function (_unresolved_13) {
      BattleMainDataControl = _unresolved_13.BattleMainDataControl;
    }, function (_unresolved_14) {
      AssociationControl = _unresolved_14.AssociationControl;
    }, function (_unresolved_15) {
      AssociationData = _unresolved_15.AssociationData;
    }, function (_unresolved_16) {
      ViewName = _unresolved_16.ViewName;
    }, function (_unresolved_17) {
      UIMgr = _unresolved_17.UIMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "792f82osfxG+rj3sdw0GnB3", "RankPop", undefined);
      /*
       * @Date: 2024-06-12 17:43:04
       * @LastEditors: wzq
       * @LastEditTime: 2024-11-01 16:06:00
       */


      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'log', 'Node', 'Prefab', 'Toggle', 'ToggleContainer']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RankPop", RankPop = (_dec = ccclass('RankPop'), _dec2 = property(_crd && InfiniteList === void 0 ? (_reportPossibleCrUseOfInfiniteList({
        error: Error()
      }), InfiniteList) : InfiniteList), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(_crd && RankBottomItem === void 0 ? (_reportPossibleCrUseOfRankBottomItem({
        error: Error()
      }), RankBottomItem) : RankBottomItem), _dec(_class = (_class2 = class RankPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "list_view", _descriptor, this);

          _initializerDefineProperty(this, "pfb_rank_item", _descriptor2, this);

          _initializerDefineProperty(this, "pfb_rank_top_item", _descriptor3, this);

          _initializerDefineProperty(this, "pfb_toggle_item", _descriptor4, this);

          _initializerDefineProperty(this, "node_top_items", _descriptor5, this);

          _initializerDefineProperty(this, "node_toggle_content", _descriptor6, this);

          _initializerDefineProperty(this, "node_my_rank_item", _descriptor7, this);

          this.top_rank_list = [];
          this.rank_hero_list = [];
          this.rank_player_list = [];
          this.top_player_list = [];
          this.rank_guild_list = [];
          this.top_guild_list = [];
          this._rank_type = (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).NONE;
          this._rankId = 0;
          this._ranking = 0;
          this._selfSimple = null;
        }

        onShow() {
          this.node_toggle_content.destroyAllChildren();
          this.createToggleItem();
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetRankRsp, this.on_s2c_GetRankRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetHeroRankRsp, this.on_s2c_GetHeroRankRsp, this); // 切换排行榜

          /* 监听设置公会排行榜 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetGuildRankRsp, this.on_s2c_GetGuildRankRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).Rank_Change, this.changeRank, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetSimpleRankRsp, this.on_s2c_GetSimpleRankRsp, this);
        }

        changeRank(rankId) {
          if (rankId <= 5) {
            this._rank_type = (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
              error: Error()
            }), RANKING_TYPE) : RANKING_TYPE).HERO;
            let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_GetHeroRankReq();
            msg.rankId = rankId;
            (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
              error: Error()
            }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl.GetHeroRankReq, msg);
          } else {
            if (this._rank_type === rankId) {
              return;
            }

            this._rank_type = rankId;

            if (rankId === (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
              error: Error()
            }), RANKING_TYPE) : RANKING_TYPE).GUILD) {
              (_crd && AssociationControl === void 0 ? (_reportPossibleCrUseOfAssociationControl({
                error: Error()
              }), AssociationControl) : AssociationControl).ins.reqGetGuildRank(14);
            } else if (rankId == (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
              error: Error()
            }), RANKING_TYPE) : RANKING_TYPE).Fight) {
              let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).Msg_GetSimpleRankReq();
              msg.rankId = (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
                error: Error()
              }), RANKING_TYPE) : RANKING_TYPE).Fight;
              msg.pageIndex = 0;
              msg.pageSize = 30;
              (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
                error: Error()
              }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).Ptl.GetSimpleRankReq, msg);
            } else {
              let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).Msg_GetRankReq();
              msg.rankId = rankId;
              (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
                error: Error()
              }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).Ptl.GetRankReq, msg);
            }
          }
        }

        on_s2c_GetGuildRankRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          this._rankId = msg.rankId;
          this._ranking = msg.ranking;
          this.rank_guild_list = [];
          this.top_guild_list = []; // 处理一下rankList 有可能有的排行已经解散
          // const list = [];
          // for(let k=0;k<msg.rankList.length;k++){
          //     const _rankList = msg.rankList[i]
          //     if(_rankList)
          // }

          for (let i = 0; i < msg.rankList.length; i++) {
            if (i < 3) {
              this.top_guild_list.push(msg.rankList[i]);
            } else {
              this.rank_guild_list.push(msg.rankList[i]);
            }
          }

          this.initStaticView();
          this.createTopItem();
        }

        on_s2c_GetSimpleRankRsp(msg) {
          /*排行榜数据返回 */
          this._rankId = msg.rankId;
          this._ranking = msg.ranking;
          this._selfSimple = msg.selfSimple;
          this.rank_player_list = [];
          this.top_player_list = [];

          for (let i = 0; i < msg.rankList.length; i++) {
            if (i < 3) {
              this.top_player_list.push(msg.rankList[i]);
            } else {
              this.rank_player_list.push(msg.rankList[i]);
            }
          }

          this.initStaticView();
          this.createTopItem();
        }

        on_s2c_GetRankRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          /*排行榜数据返回 */

          this._rankId = msg.rankId;
          this._ranking = msg.ranking;
          this._selfSimple = msg.selfSimple;
          this.rank_player_list = [];
          this.top_player_list = [];

          for (let i = 0; i < msg.rankList.length; i++) {
            if (i < 3) {
              this.top_player_list.push(msg.rankList[i]);
            } else {
              this.rank_player_list.push(msg.rankList[i]);
            }
          }

          this.initStaticView();
          this.createTopItem();
        }

        on_s2c_GetHeroRankRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          /*英雄排行榜数据返回 */
          // 前三名放在榜首位置

          this._rankId = msg.rankId;
          this._ranking = msg.ranking;
          this._selfSimple = msg.selfSimple;
          this.rank_hero_list = [];
          this.top_rank_list = [];

          for (let i = 0; i < msg.rankList.length; i++) {
            if (i < 3) {
              this.top_rank_list.push(msg.rankList[i]);
            } else {
              this.rank_hero_list.push(msg.rankList[i]);
            }
          }

          this.initStaticView();
          this.createTopItem();
        }

        initStaticView() {
          let canInit = false;

          if (this._rank_type === (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).HERO && this.rank_hero_list.length > 0) {
            canInit = true;
          }

          if (this._rank_type !== (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).HERO && this.rank_player_list.length > 0) {
            canInit = true;
          }

          if (this._rank_type === (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).GUILD && this.rank_guild_list.length > 0) {
            canInit = true;
          }

          this.list_view.stopAutoScroll();

          if (canInit) {
            this.list_view.node.parent.active = true;
            this.list_view.Init({
              getCellNumber: this.getCellCount.bind(this),
              getCellSize: this.getCellHeight.bind(this),
              getCellIdentifer: this.getCellIdentifer.bind(this),
              getCellView: this.getCellView.bind(this),
              getCellData: this.GetCellData.bind(this)
            });
          } else {
            this.list_view.node.parent.active = false;
          }

          this.createMyRank();
        }

        getCellCount() {
          if (this._rank_type === (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).HERO) {
            return this.rank_hero_list.length;
          } else if (this._rank_type === (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).GUILD) {
            return this.rank_guild_list.length;
          } else {
            return this.rank_player_list.length;
          }
        }

        getCellHeight(idx) {
          return 82;
        }

        getCellIdentifer(idx) {
          return "RankBottomItem";
        }

        getCellView(idx, identifer) {
          return instantiate(this.pfb_rank_item).getComponent(_crd && RankBottomItem === void 0 ? (_reportPossibleCrUseOfRankBottomItem({
            error: Error()
          }), RankBottomItem) : RankBottomItem);
        }

        GetCellData(idx) {
          if (this._rank_type === (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).HERO) {
            return {
              rankData: this.rank_hero_list[idx],
              index: idx,
              rankType: this._rank_type
            };
          } else if (this._rank_type === (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).GUILD) {
            return {
              rankData: this.rank_guild_list[idx],
              index: idx,
              rankType: this._rank_type
            };
          } else {
            return {
              rankData: this.rank_player_list[idx],
              index: idx,
              rankType: this._rank_type
            };
          }
        }

        onDestroy() {
          super.onDestroy();
        }
        /* 创建前三的数据 */


        createTopItem() {
          for (let i = 0; i < 3; i++) {
            const parentNode = this.node_top_items.children[i];
            let item = null;

            if (!parentNode.children[0]) {
              item = instantiate(this.pfb_rank_top_item);
              item.parent = parentNode;
            } else {
              item = parentNode.children[0];
            }

            const itemTs = item.getComponent(_crd && RankTopItem === void 0 ? (_reportPossibleCrUseOfRankTopItem({
              error: Error()
            }), RankTopItem) : RankTopItem);

            if (this._rank_type === (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
              error: Error()
            }), RANKING_TYPE) : RANKING_TYPE).HERO) {
              itemTs.initHeroData(this.top_rank_list[i]);
            } else if (this._rank_type === (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
              error: Error()
            }), RANKING_TYPE) : RANKING_TYPE).GUILD) {
              itemTs.initGuildData(this.top_guild_list[i]);
            } else {
              itemTs.initHeroPlayerData(this.top_player_list[i], this._rank_type);
            }
          }
        }
        /* 创建toggle */


        createToggleItem() {
          const arr = [8, 6, 1, 7, 9, 14, 17];

          for (let i = 0; i < arr.length; i++) {
            const _key = arr[i];
            let item = null;
            let itemTs = null;
            item = instantiate(this.pfb_toggle_item);
            item.parent = this.node_toggle_content;
            item.name = String(_key);
            itemTs = item.getComponent(_crd && RankToggleItem === void 0 ? (_reportPossibleCrUseOfRankToggleItem({
              error: Error()
            }), RankToggleItem) : RankToggleItem);
            itemTs.setData(_key);
          }

          if (this.openData) {
            const ts = this.node_toggle_content.getChildByName(String(this.openData)).getComponent(_crd && RankToggleItem === void 0 ? (_reportPossibleCrUseOfRankToggleItem({
              error: Error()
            }), RankToggleItem) : RankToggleItem);
            ts.onClickCheck(null, String(this.openData));
          } else {
            const ts = this.node_toggle_content.getChildByName(String(arr[0])).getComponent(_crd && RankToggleItem === void 0 ? (_reportPossibleCrUseOfRankToggleItem({
              error: Error()
            }), RankToggleItem) : RankToggleItem);
            ts.onClickCheck(null, String(arr[0]));
          }
        } // 创建自己的排行


        createMyRank() {
          let allRank = [];

          if (this._rank_type === (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).HERO) {
            allRank = this.top_rank_list.concat(this.rank_hero_list);
          } else if (this._rank_type === (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
            error: Error()
          }), RANKING_TYPE) : RANKING_TYPE).GUILD) {
            allRank = this.top_guild_list.concat(this.rank_guild_list);
          } else {
            allRank = this.top_player_list.concat(this.rank_player_list);
          }

          if (this._ranking >= 0) {
            if (this._rankId < (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
              error: Error()
            }), RANKING_TYPE) : RANKING_TYPE).CHAPTER) {
              // 英雄数据
              const rankData = allRank[this._ranking];
              this.setMyRank(rankData, this._ranking);
            } else {
              if (this._rankId === (_crd && RANKING_TYPE === void 0 ? (_reportPossibleCrUseOfRANKING_TYPE({
                error: Error()
              }), RANKING_TYPE) : RANKING_TYPE).GUILD) {
                const rankData = allRank[this._ranking];
                this.setMyRank(rankData, this._ranking);
              } else {
                // 个人数据
                const rankData = allRank[this._ranking];
                this.setMyRank(rankData, this._ranking);
              }
            }
          } else {
            const rankData = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
              error: Error()
            }), AssociationData) : AssociationData).ins.getAssocitionSimpleInfo();
            this.setMyRank(rankData, -1);
          }
        }

        setMyRank(rankData, rankLevel) {
          this.node_my_rank_item.UpdateContent({
            rankData: rankData,
            index: rankLevel + 1,
            rankType: this._rank_type,
            isSelf: true
          });
          this.node_my_rank_item.setPlayerMyRank(rankLevel + 1);
        } // 通过玩家当前的排行榜创建数据


        createDataByRankId() {
          let data = null;

          switch (this._rankId) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              // 获取队伍中英雄的信息 = 
              data = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).SimpleHero();
              const itemData = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
                error: Error()
              }), HeroTeamControl) : HeroTeamControl).ins.getHeroByClass(this._rankId);
              data.itemId = itemData.itemId;
              data.level = itemData.level;
              data.star = itemData.star;
              data.roleName = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.name;
              data.powerScore = itemData.powerScore;
              break;

            case 6:
            case 7:
            case 8:
            case 9:
              data = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).SimpleRank(); // score := int64(stageId)*1000000 + int64(alive)%1000000

              const stageId = (_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
                error: Error()
              }), BattleMainDataControl) : BattleMainDataControl).ins.getCurFightStageId();
              const time = (_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
                error: Error()
              }), BattleMainDataControl) : BattleMainDataControl).ins.getClearedStageAliveSecond(stageId);
              data.score = stageId * 1000000 + time % 1000000;
              data.simple = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).SimpleRole();
              data.simple.name = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.name;
              data.simple.powerScore = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.powerScore;
              data.simple.reputation = 0;
              data.simple.level = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.level;
              break;

            case 14:
              data = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).SimpleGuild();
              data.flagId = 1;
              data.name = "";
              data.powerScore = 0;
              break;

            default:
              break;
          }

          return data;
        }

        onClose() {
          this.list_view.stopAutoScroll();
          super.onClose();
        }

        onClickGuild() {
          const rankData = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getAssocitionSimpleInfo();

          if (rankData.id) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).AssociationMainPop,
              data: {
                "rankData": rankData
              }
            });
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "list_view", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pfb_rank_item", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pfb_rank_top_item", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "pfb_toggle_item", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_top_items", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_toggle_content", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_my_rank_item", [_dec8], {
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
//# sourceMappingURL=53f1732ea656f69c7f7b145768dda2777ee4fe26.js.map