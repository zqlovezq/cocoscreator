System.register(["__unresolved_0", "cc", "__unresolved_1", "client_protocol", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Node, Prefab, ViewPop, proto, AssociationData, AssociationRankBottomItem, AssociationRankTopItem, InfiniteList, RoleData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, AssociationRankPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationData(extras) {
    _reporterNs.report("AssociationData", "./AssociationData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationRankBottomItem(extras) {
    _reporterNs.report("AssociationRankBottomItem", "./AssociationRankBottomItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationRankTopItem(extras) {
    _reporterNs.report("AssociationRankTopItem", "./AssociationRankTopItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfiniteList(extras) {
    _reporterNs.report("InfiniteList", "../../../Common/InfiniteList/InfiniteList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
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
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_3) {
      AssociationData = _unresolved_3.AssociationData;
    }, function (_unresolved_4) {
      AssociationRankBottomItem = _unresolved_4.AssociationRankBottomItem;
    }, function (_unresolved_5) {
      AssociationRankTopItem = _unresolved_5.AssociationRankTopItem;
    }, function (_unresolved_6) {
      InfiniteList = _unresolved_6.default;
    }, function (_unresolved_7) {
      RoleData = _unresolved_7.RoleData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7b0d2uoPLpClIfCvgy7xPvA", "AssociationRankPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'instantiate', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AssociationRankPop", AssociationRankPop = (_dec = ccclass('AssociationRankPop'), _dec2 = property(_crd && InfiniteList === void 0 ? (_reportPossibleCrUseOfInfiniteList({
        error: Error()
      }), InfiniteList) : InfiniteList), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec6 = property(_crd && AssociationRankBottomItem === void 0 ? (_reportPossibleCrUseOfAssociationRankBottomItem({
        error: Error()
      }), AssociationRankBottomItem) : AssociationRankBottomItem), _dec(_class = (_class2 = class AssociationRankPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "list_view", _descriptor, this);

          _initializerDefineProperty(this, "node_top_items", _descriptor2, this);

          _initializerDefineProperty(this, "pfb_rank_top_item", _descriptor3, this);

          _initializerDefineProperty(this, "pfb_rank_item", _descriptor4, this);

          _initializerDefineProperty(this, "node_my_rank_item", _descriptor5, this);

          this.bossGuildRank = [];
          //公会排行榜
          this.bossRoleRank = [];
          //公会个人排行榜
          this.view_type = 0;
          //1:个人排行 2：公会排行
          this.rank_list = [];
          this.top_list = [];
        }

        onShow() {
          this.view_type = 1;
          this.bossRoleRank = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getRoleRank();
          this.bossGuildRank = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getGuildRank();
          this.switchView(null, String(this.view_type));
        } // 根据view_type刷新数据


        switchView(e, type) {
          if (e && Number(type) === this.view_type) {
            return;
          }

          this.view_type = Number(type);
          this.rank_list = [];
          this.top_list = [];
          const rankList = Number(type) === 1 ? this.bossRoleRank : this.bossGuildRank;

          for (let i = 0; i < rankList.length; i++) {
            if (i < 3) {
              this.top_list.push(rankList[i]);
            } else {
              this.rank_list.push(rankList[i]);
            }
          }

          this.initStaticView();
          this.createTopItem();
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

            const itemTs = item.getComponent(_crd && AssociationRankTopItem === void 0 ? (_reportPossibleCrUseOfAssociationRankTopItem({
              error: Error()
            }), AssociationRankTopItem) : AssociationRankTopItem);
            itemTs.initData(this.top_list[i], this.view_type);
          }
        }

        onDestroy() {
          super.onDestroy();
        }

        register() {}

        unRegister() {
          super.unRegister();
        }

        initStaticView() {
          let canInit = this.rank_list.length > 0;
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
          return this.rank_list.length;
        }

        getCellHeight(idx) {
          return 82;
        }

        getCellIdentifer(idx) {
          return "RankBottomItem";
        }

        getCellView(idx, identifer) {
          return instantiate(this.pfb_rank_item).getComponent(_crd && AssociationRankBottomItem === void 0 ? (_reportPossibleCrUseOfAssociationRankBottomItem({
            error: Error()
          }), AssociationRankBottomItem) : AssociationRankBottomItem);
        }

        GetCellData(idx) {
          return {
            rankData: this.rank_list[idx],
            index: idx,
            view_type: this.view_type
          };
        }

        createMyRank() {
          const roleData = this.getMyData();

          if (roleData) {
            this.setMyRank(roleData.data, roleData.ranking);
          } else {
            const rankData = this.createDataByRankId();
            this.setMyRank(rankData, -1);
          }
        } // 获取当前自己的数据


        getMyData() {
          let allRank = this.top_list.concat(this.rank_list);

          if (this.view_type === 1) {
            for (let i = 0; i < allRank.length; i++) {
              const roleData = allRank[i];

              if (roleData.simple.id === (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.id) {
                return {
                  data: roleData,
                  ranking: i
                };
              }
            }
          } else if (this.view_type === 2) {
            for (let i = 0; i < allRank.length; i++) {
              const roleData = allRank[i];

              if (roleData.guild.simple.id === (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
                error: Error()
              }), AssociationData) : AssociationData).ins.getAssocitionSimpleInfo().id) {
                return {
                  data: roleData,
                  ranking: i
                };
              }
            }
          }
        }

        setMyRank(rankData, rankLevel) {
          this.node_my_rank_item.UpdateContent({
            rankData: rankData,
            index: rankLevel + 1,
            view_type: this.view_type,
            isSelf: true
          });
          this.node_my_rank_item.setPlayerMyRank(rankLevel + 1);
        }

        createDataByRankId() {
          let data = null;

          switch (this.view_type) {
            case 1:
              data = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).SimpleRank();
              data.score = 0;
              data.simple = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).SimpleRole();
              data.simple.id = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.id;
              data.simple.level = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.level;
              data.simple.name = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.name;
              data.simple.powerScore = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.powerScore;
              data.simple.headIcon = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.avatarInfo.headIcon;
              data.simple.headFrame = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.avatarInfo.headFrame;
              break;

            case 2:
              data = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).GuildBossRank();
              data.score = 0;
              data.members = 0;
              data.guild = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
                error: Error()
              }), AssociationData) : AssociationData).ins.getAssocitionInfo();
              break;

            default:
              break;
          }

          return data;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "list_view", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_top_items", [_dec3], {
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "pfb_rank_item", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_my_rank_item", [_dec6], {
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
//# sourceMappingURL=523353340a25e743574b747b801a5fe80dc06147.js.map