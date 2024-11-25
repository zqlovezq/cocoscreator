System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "client_protocol", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Node, NodeEventType, Prefab, ScrollView, UITransform, Vec3, ViewPop, InfiniteList, tab, TalentItem, TalentViewSpecialItem, TalentMiniTipsPop, TalentBigTipsPop, EventMgr, proto, RoleData, RedMgr, RedDotType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, TalentView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfiniteList(extras) {
    _reporterNs.report("InfiniteList", "../../../Common/InfiniteList/InfiniteList", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTalentItem(extras) {
    _reporterNs.report("TalentItem", "./TalentItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTalentViewSpecialItem(extras) {
    _reporterNs.report("TalentViewSpecialItem", "./TalentViewSpecialItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTalentMiniTipsPop(extras) {
    _reporterNs.report("TalentMiniTipsPop", "./TalentMiniTipsPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTalentBigTipsPop(extras) {
    _reporterNs.report("TalentBigTipsPop", "./TalentBigTipsPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
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
      NodeEventType = _cc.NodeEventType;
      Prefab = _cc.Prefab;
      ScrollView = _cc.ScrollView;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      InfiniteList = _unresolved_3.default;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      TalentItem = _unresolved_5.TalentItem;
    }, function (_unresolved_6) {
      TalentViewSpecialItem = _unresolved_6.TalentViewSpecialItem;
    }, function (_unresolved_7) {
      TalentMiniTipsPop = _unresolved_7.TalentMiniTipsPop;
    }, function (_unresolved_8) {
      TalentBigTipsPop = _unresolved_8.TalentBigTipsPop;
    }, function (_unresolved_9) {
      EventMgr = _unresolved_9.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_10) {
      RoleData = _unresolved_10.RoleData;
    }, function (_unresolved_11) {
      RedMgr = _unresolved_11.RedMgr;
    }, function (_unresolved_12) {
      RedDotType = _unresolved_12.RedDotType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "91440cor89A4qviXqhH+DH2", "TalentView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'NodeEventType', 'Prefab', 'ScrollView', 'UITransform', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TalentView", TalentView = (_dec = ccclass('TalentView'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(_crd && InfiniteList === void 0 ? (_reportPossibleCrUseOfInfiniteList({
        error: Error()
      }), InfiniteList) : InfiniteList), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = class TalentView extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pfb_item", _descriptor, this);

          _initializerDefineProperty(this, "pfb_start_item", _descriptor2, this);

          _initializerDefineProperty(this, "list_view", _descriptor3, this);

          _initializerDefineProperty(this, "node_big_tips", _descriptor4, this);

          _initializerDefineProperty(this, "node_small_tips", _descriptor5, this);

          this._lineHeroCount = 3;
          this._list = [];
          this._canClose = true;
        }

        onShow() {
          this._list = this.groupList();
          this.list_view.getContent().getComponent(UITransform).setAnchorPoint(0, 0.5);
          this.list_view.Init({
            getCellNumber: this.getCellCount.bind(this),
            getCellSize: this.getCellWidth.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView: this.getCellView.bind(this),
            getCellData: this.GetCellData.bind(this)
          });
          var smallLevel = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.gene.smallGeneLevel;
          var idex = Math.floor(smallLevel / 3);
          var pos = this.list_view.GetScrollPosOfCell(idex);
          var maxWidth = this.list_view.getContent().getComponent(UITransform).width - 1500;
          var max_x = pos.x > maxWidth ? maxWidth : pos.x;
          this.list_view.setContentPos(-max_x, -max_x, 0);
          this.list_view.node.on("scroll-began", () => {
            this.node_big_tips.active = false;
            this.node_small_tips.active = false;
          }, this);

          var _scrollView = this.list_view.getComponent(ScrollView);

          _scrollView.node.on(NodeEventType.TOUCH_START, this._onTouchStar, this, true);
        }

        _onTouchStar() {
          this.node_big_tips.active = false;
          this.node_small_tips.active = false;
        }

        getCellCount() {
          return this._list.length;
        }

        getCellWidth(idx) {
          if (idx === 0) {
            return 136.85;
          }

          if (idx == this._list.length - 1) {
            return 268 + 80;
          }

          return 268;
        }

        getCellIdentifer(idx) {
          if (idx === 0) {
            return "TalentViewSpecialItem";
          }

          return "TalentItem";
        }

        getCellView(idx, identifer) {
          var cell = null;

          switch (identifer) {
            case "TalentItem":
              cell = instantiate(this.pfb_item).getComponent(_crd && TalentItem === void 0 ? (_reportPossibleCrUseOfTalentItem({
                error: Error()
              }), TalentItem) : TalentItem);
              break;

            case "TalentViewSpecialItem":
              cell = instantiate(this.pfb_start_item).getComponent(_crd && TalentViewSpecialItem === void 0 ? (_reportPossibleCrUseOfTalentViewSpecialItem({
                error: Error()
              }), TalentViewSpecialItem) : TalentViewSpecialItem);
              break;
          }

          return cell;
        }

        GetCellData(idx) {
          return {
            view: this,
            data: this._list[idx]
          };
        }
        /* 将英雄数据分组 */


        groupList() {
          var result = [];
          var list = [];

          for (var i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GeneLevelTable.length; i++) {
            var _geneTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GeneLevelTable[i];
            var obj = {
              small: null,
              big: null
            };

            if (_geneTab.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).GeneType.GeneType_SmallGene) {
              obj.small = _geneTab;
              list.push(obj);
            } else {
              var level = _geneTab.UnlockArgs;
              var _obj = list[level - 1];
              _obj.big = _geneTab;
            }
          }
          /* 3个一节 分组 */


          for (var _i = 0; _i < list.length; _i += this._lineHeroCount) {
            result.push(list.slice(_i, _i + this._lineHeroCount));
          }

          return [null].concat(result);
        }

        register() {
          // 监听基因升级
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpgradeGeneLevelRsp, this.on_s2c_UpgradeGeneLevelRsp, this);
        }

        on_s2c_UpgradeGeneLevelRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          this._canClose = false;
          var self = this;

          if (msg.type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).GeneType.GeneType_SmallGene) {
            var content = this.list_view.getContent();
            var item = content.getChildByName(String(Math.floor((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.gene.smallGeneLevel / 3) + 1));
            var itemTs = item.getComponent(_crd && TalentItem === void 0 ? (_reportPossibleCrUseOfTalentItem({
              error: Error()
            }), TalentItem) : TalentItem);
            itemTs.talentItemSmallAction(() => {
              (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.gene.smallGeneLevel = msg.level;
              self.list_view.Refresh();
              (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
                error: Error()
              }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
                error: Error()
              }), RedDotType) : RedDotType).HeroGene);
              this._canClose = true;
            });
          } else {
            (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.gene.bigGeneLevel = msg.level;
            this.list_view.Refresh();
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).HeroGene);
            this._canClose = true;
          }
        }

        onDestroy() {
          super.onDestroy();
        }

        showBigTips(target, data) {
          var ts = this.node_big_tips.getComponent(_crd && TalentBigTipsPop === void 0 ? (_reportPossibleCrUseOfTalentBigTipsPop({
            error: Error()
          }), TalentBigTipsPop) : TalentBigTipsPop);
          ts.setData(data);
          var worldPos = target.parent.getComponent(UITransform).convertToWorldSpaceAR(target.position);
          var viewPos = this.list_view.node.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
          this.node_big_tips.setPosition(new Vec3(viewPos.x - 640, viewPos.y + 200, 0));
        }

        showSmallTips(target, data) {
          var ts = this.node_small_tips.getComponent(_crd && TalentMiniTipsPop === void 0 ? (_reportPossibleCrUseOfTalentMiniTipsPop({
            error: Error()
          }), TalentMiniTipsPop) : TalentMiniTipsPop);
          ts.setData(data);
          var scrollViewMidX = this.list_view.node.getComponent(UITransform).width / 2;
          var worldPos = target.parent.getComponent(UITransform).convertToWorldSpaceAR(target.position);
          var viewPos = this.list_view.node.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
          var distanceToCenter = viewPos.x - scrollViewMidX;

          if (distanceToCenter > 0) {
            // 在屏幕右侧
            this.node_small_tips.setPosition(new Vec3(viewPos.x - 740, viewPos.y, 0));
          } else {
            // 在屏幕左侧
            this.node_small_tips.setPosition(new Vec3(viewPos.x - 540, viewPos.y, 0));
          }
        }

        clickMove() {
          var content = this.list_view.getContent();
          var item = content.getChildByName(String(Math.ceil((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.gene.smallGeneLevel / 3)));
          var itemTs = item.getComponent(_crd && TalentItem === void 0 ? (_reportPossibleCrUseOfTalentItem({
            error: Error()
          }), TalentItem) : TalentItem);
          itemTs.talentItemSmallAction(() => {});
        }

        onClose() {
          if (this._canClose) {
            super.onClose();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pfb_item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pfb_start_item", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "list_view", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_big_tips", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_small_tips", [_dec6], {
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
//# sourceMappingURL=974b73f0b6ee6d03d309ba610999c0ef0bce0ff7.js.map