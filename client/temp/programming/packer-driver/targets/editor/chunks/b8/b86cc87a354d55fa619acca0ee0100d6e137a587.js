System.register(["__unresolved_0", "cc", "client_protocol", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, log, Node, Sprite, proto, HeroDataControl, HeroData, HeroTeamControl, tab, HeroStar, RedMgr, RedDotType, Net, HeroRed, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _crd, ccclass, property, HeroBagItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "./HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../HeroInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "../HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroTeamControl(extras) {
    _reporterNs.report("HeroTeamControl", "../HeroTeamControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroStar(extras) {
    _reporterNs.report("HeroStar", "../HeroStar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroRed(extras) {
    _reporterNs.report("HeroRed", "./HeroRed", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      log = _cc.log;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_2) {
      HeroDataControl = _unresolved_2.HeroDataControl;
    }, function (_unresolved_3) {
      HeroData = _unresolved_3.HeroData;
    }, function (_unresolved_4) {
      HeroTeamControl = _unresolved_4.HeroTeamControl;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }, function (_unresolved_6) {
      HeroStar = _unresolved_6.HeroStar;
    }, function (_unresolved_7) {
      RedMgr = _unresolved_7.RedMgr;
    }, function (_unresolved_8) {
      RedDotType = _unresolved_8.RedDotType;
    }, function (_unresolved_9) {
      Net = _unresolved_9.Net;
    }, function (_unresolved_10) {
      HeroRed = _unresolved_10.HeroRed;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "75f62AFBchJgKH2FLhRH1Az", "HeroBagItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'log', 'Node', 'Sprite', 'SpriteRenderer', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroBagItem", HeroBagItem = (_dec = ccclass('HeroBagItem'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(Sprite), _dec7 = property(Node), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec(_class = (_class2 = class HeroBagItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "sp_hero", _descriptor, this);

          //英雄头像
          _initializerDefineProperty(this, "sp_vocation", _descriptor2, this);

          //职业
          _initializerDefineProperty(this, "sp_quality", _descriptor3, this);

          //品质
          _initializerDefineProperty(this, "sp_quality_bg", _descriptor4, this);

          //品质框
          _initializerDefineProperty(this, "sp_quality_star_bg", _descriptor5, this);

          //装备星级职业底
          _initializerDefineProperty(this, "node_star", _descriptor6, this);

          _initializerDefineProperty(this, "lbl_level", _descriptor7, this);

          _initializerDefineProperty(this, "node_inTeam", _descriptor8, this);

          _initializerDefineProperty(this, "node_select", _descriptor9, this);

          _initializerDefineProperty(this, "node_red", _descriptor10, this);

          _initializerDefineProperty(this, "node_award_book", _descriptor11, this);

          _initializerDefineProperty(this, "num_label", _descriptor12, this);

          this.touchCallBack = void 0;
          this.heroInfo = void 0;
          this.teamSlots = [];
          this._itemId = 0;
        }

        onLoad() {
          /* 点击事件 */

          /* 切换立绘 */
          this.node.on(Node.EventType.TOUCH_END, this.onTouchItem, this);
        }

        UpdateContent(data) {
          this._itemId = data.itemId;
          this.node.name = String(data.itemId);
          let itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(data.itemId);
          let heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroTableById.getValue(data.itemId);
          let heroClassTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroClassTableByHeroClass.getValue(heroTab.Class);
          let heroAptitudeTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroAptitudeTableByHeroAptitude.getValue(heroTab.Aptitude);
          /* 获取品质 */

          let itemQualityTab = null;

          if (data.id) {
            this.node_award_book.active = false;
            this.heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
              error: Error()
            }), HeroData) : HeroData).ins.getById(data.id);
            let level = this.heroInfo.getHeroLevel();
            let maxLevel = this.heroInfo.heroStarUpTable.MaxLevel;

            if (maxLevel < this.heroInfo.getHeroLevel()) {
              level = maxLevel;
            }

            this.lbl_level.string = String(level);
            this.node_select.active = Number(this.heroInfo.id) === (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
              error: Error()
            }), HeroDataControl) : HeroDataControl).ins.heroId;
            let star = this.heroInfo.star;
            itemQualityTab = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
              error: Error()
            }), HeroDataControl) : HeroDataControl).ins.getItemQualityTableByStar(star);
          } else {
            /* 图签 */
            this.lbl_level.node.active = false;
            itemQualityTab = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
              error: Error()
            }), HeroDataControl) : HeroDataControl).ins.getItemQualityTableByStar(heroTab.DefaultStar);
            this.node_select.active = data.itemId === (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
              error: Error()
            }), HeroDataControl) : HeroDataControl).ins.bookId;
            this.node.name = String(data.itemId);
            let awardMap = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
              error: Error()
            }), HeroDataControl) : HeroDataControl).ins.getBookReceivedIds();
            const awardObj = awardMap.get(data.itemId);
            this.node_award_book.active = awardObj && !awardObj.isReceived;

            if (this.node_award_book.active) {
              let awardTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().HeroAlbumTableByHeroAptitude.getValue(heroTab.Aptitude);
              let awardItemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().ItemTableById.getValue(awardTab.ItemId);
              let count = awardTab.ItemNum;
              this.node_award_book.getChildByName("reward_icon").getComponent(Sprite).setTexture(awardItemTab.Icon);
              this.num_label.getComponent(Label).string = String(count);
            }
          }

          this.sp_quality_bg.setTexture(itemQualityTab.HeroBagQuality);
          this.sp_quality_star_bg.setTexture(itemQualityTab.HeroStarBg);
          this.sp_vocation.setTexture(heroClassTable.Icon);
          this.sp_hero.setTexture(itemTab.Icon);
          this.sp_quality.setTexture(heroAptitudeTab.Icon);
          this.node_star.getComponent(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
            error: Error()
          }), HeroStar) : HeroStar).showStar(data.star);
          let itemData = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getByItemId(data.itemId);

          let _awardMap = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.getBookReceivedIds();

          if (!itemData && !_awardMap.has(data.itemId) || this.node_award_book.active) {
            this.sp_hero.grayscale = true;
            this.sp_quality_bg.grayscale = true;
            this.sp_quality_star_bg.grayscale = true;
            this.node_inTeam.active = false;
          } else {
            this.sp_hero.grayscale = false;
            this.sp_quality_bg.grayscale = false;
            this.sp_quality_star_bg.grayscale = false;
            this.node_inTeam.active = !!(_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
              error: Error()
            }), HeroTeamControl) : HeroTeamControl).ins.heroInTeam(data.id);
          }
          /* 处理红点逻辑 */


          if (data.id && (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.heroInTeam(data.id)) {
            this.node_red.active = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).HeroupLevel, String(data.id)) || (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).HeroupStar, String(data.id)) || (_crd && HeroRed === void 0 ? (_reportPossibleCrUseOfHeroRed({
              error: Error()
            }), HeroRed) : HeroRed).ins.checkWearEquip(data);
          } else {
            // 判断是否是可推荐的上阵的英雄
            this.node_red.active = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).HeroReplace, String(data.id));
          }
        }

        setRed(show) {
          this.node_red.active = show;
        }

        setTouchCallBack(callBack) {
          this.touchCallBack = callBack;
        }

        onTouchItem() {
          if (this.touchCallBack) {
            this.touchCallBack();
          } else {
            log("点击了item");
          }
        }

        onDisable() {
          this.node_star.getComponent(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
            error: Error()
          }), HeroStar) : HeroStar).onDisable();
        }

        onDestroy() {
          this.node.targetOff(this);
        }
        /* 点击领取奖励 */


        clickGetAward() {
          let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_ReceiveHeroAlbumRewardReq();
          msg.heroItemId = this._itemId;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveHeroAlbumRewardReq, msg);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sp_hero", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sp_vocation", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sp_quality", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sp_quality_bg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sp_quality_star_bg", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_star", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lbl_level", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_inTeam", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "node_select", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "node_red", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "node_award_book", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "num_label", [_dec13], {
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
//# sourceMappingURL=b86cc87a354d55fa619acca0ee0100d6e137a587.js.map