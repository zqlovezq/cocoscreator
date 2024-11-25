System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Label, ProgressBar, Sprite, tween, Vec3, InfiniteCell, Func, tab, RoleData, ItemData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, TalentItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfInfiniteCell(extras) {
    _reporterNs.report("InfiniteCell", "../../../Common/InfiniteList/InfiniteCell", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTalentView(extras) {
    _reporterNs.report("TalentView", "./TalentView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../item/ItemData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Label = _cc.Label;
      ProgressBar = _cc.ProgressBar;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      InfiniteCell = _unresolved_2.default;
    }, function (_unresolved_3) {
      Func = _unresolved_3.Func;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      RoleData = _unresolved_5.RoleData;
    }, function (_unresolved_6) {
      ItemData = _unresolved_6.ItemData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1c11c+t0ExPcpUlj123MzbI", "TalentItem", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'EventTouch', 'Label', 'Node', 'ProgressBar', 'Sprite', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TalentItem", TalentItem = (_dec = ccclass('TalentItem'), _dec2 = property(Label), _dec3 = property(Sprite), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(Sprite), _dec7 = property(ProgressBar), _dec8 = property(ProgressBar), _dec9 = property(Sprite), _dec(_class = (_class2 = class TalentItem extends (_crd && InfiniteCell === void 0 ? (_reportPossibleCrUseOfInfiniteCell({
        error: Error()
      }), InfiniteCell) : InfiniteCell) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "lbl_lv", _descriptor, this);

          _initializerDefineProperty(this, "sp_mini_1", _descriptor2, this);

          _initializerDefineProperty(this, "sp_mini_2", _descriptor3, this);

          _initializerDefineProperty(this, "sp_mini_3", _descriptor4, this);

          _initializerDefineProperty(this, "sp_big", _descriptor5, this);

          _initializerDefineProperty(this, "bar_progress", _descriptor6, this);

          _initializerDefineProperty(this, "bar_big_progress", _descriptor7, this);

          _initializerDefineProperty(this, "sp_line", _descriptor8, this);

          this._itemData = null;
          this._view = null;
          this._big_data = null;
        }

        UpdateContent(data) {
          // console.log(data);
          this._view = data.view;
          this._itemData = data.data;
          var smallLevel = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.gene.smallGeneLevel;
          var bigLevel = 10000 + (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.gene.bigGeneLevel;
          var playerLv = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.level;
          (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).cocosNodeZIndex(this.node, this._itemData[0].small.Id);
          this.lbl_lv.string = String(this._itemData[0].small.UnlockArgs);
          this.sp_big.node.getChildByName("lvup_node").active = false;
          this.sp_big.node.active = false;
          this.sp_line.node.active = false;

          if (this._itemData[2].small.Id <= smallLevel) {
            this.bar_progress.progress = 1;
          }

          if (this._itemData[0].small.Id > smallLevel) {
            this.bar_progress.progress = 0;
          }

          if ((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.gene.bigGeneLevel) {
            var bigTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GeneLevelTableById.getValue(bigLevel);
            var bigNeedSmalllevel = bigTab.UnlockArgs;

            if (this._itemData[2].small.Id < bigNeedSmalllevel) {
              this.bar_big_progress.progress = 1;
            }

            if (this._itemData[0].small.Id > bigNeedSmalllevel) {
              this.bar_big_progress.progress = 0;
            }

            for (var k = 0; k < this._itemData.length; k++) {
              var geneData = this._itemData[k];
              var small = geneData.small;

              if (small.Id === bigNeedSmalllevel) {
                var _smallBtn = this["sp_mini_" + (k + 1)];

                var smallX = _smallBtn.node.getPosition().x;

                this.bar_big_progress.progress = smallX / 268;
              }
            }
          } else {
            this.bar_big_progress.progress = 0;
          }

          for (var i = 0; i < this._itemData.length; i++) {
            var _geneData = this._itemData[i];
            var _small = _geneData.small;
            var smallBtn = this["sp_mini_" + (i + 1)];
            var iconPath = _small.Id <= smallLevel ? _small.EnableIcon : _small.DisableIcon;
            smallBtn.setTexture(iconPath); // 判断当前是否可以升级

            var needSmallGeneRes = _small.MaterialCountList[0];
            var haveSmallCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
              error: Error()
            }), ItemData) : ItemData).ins.getCount(_small.MaterialIdList[0]);

            if (i === 0) {
              if (_small.UnlockArgs === playerLv + 1) {
                this.sp_line.node.active = true;
                this.sp_line.color = new Color().fromHEX("#ffb300");
                this.sp_line.node.setPosition(new Vec3(0, this.sp_line.node.getPosition().y, 0));
              }
            }

            if (_small.Id == smallLevel + 1 && playerLv >= _small.UnlockArgs) {
              var _smallX = smallBtn.node.getPosition().x;
              this.sp_line.node.active = true;
              this.sp_line.color = new Color().fromHEX("#00FCFF");
              this.sp_line.node.setPosition(new Vec3(_smallX, this.sp_line.node.getPosition().y, 0));
              this.bar_progress.progress = _smallX / 268;
              smallBtn.node.getChildByName("lvup").active = haveSmallCount >= needSmallGeneRes;
            } else {
              smallBtn.node.getChildByName("lvup").active = false;
            }

            if (_geneData.big) {
              this._big_data = _geneData.big; // const equipSkillTab = tab.getData().EquipSkillTableById.getValue(this._big_data.AttrValue);

              this.sp_big.node.active = true;
              var posX = smallBtn.node.getPosition().x;
              var posY = this.sp_big.node.getPosition().y;
              this.sp_big.node.setPosition(new Vec3(posX, posY, 0));

              var _iconPath = this._big_data.Id <= bigLevel ? this._big_data.EnableIcon : this._big_data.DisableIcon;

              this.sp_big.setTexture(_iconPath);
              var needBigGeneRes = this._big_data.MaterialCountList[0];
              var haveBigCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
                error: Error()
              }), ItemData) : ItemData).ins.getCount(this._big_data.MaterialIdList[0]);

              if (haveBigCount >= needBigGeneRes && this._big_data.Id == bigLevel + 1 && smallLevel >= this._big_data.UnlockArgs) {
                this.sp_big.node.getChildByName("lvup_node").active = true;
              }
            }
          }
        }

        clickSmallBtn(event, idx) {
          var data = this._itemData[idx].small;

          this._view.showSmallTips(event.target, data);
        }

        clickBigBtn(event, idx) {
          this._view.showBigTips(event.target, this._big_data);
        }
        /* 做一个动画 this.sp_line往前移动一个单位 this.bar_progress移动一个单位*/


        talentItemSmallAction(callback) {
          var smallLevel = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.gene.smallGeneLevel;
          var idx = 0;

          for (var k = 0; k < this._itemData.length; k++) {
            var geneData = this._itemData[k];
            var small = geneData.small;

            if (small.Id === smallLevel + 1) {
              idx = k;
              break;
            }
          }

          var next = idx + 1;
          var smallX = 0;

          if (next > 2) {
            smallX = 268;
          } else {
            var smallBtn = this["sp_mini_" + (next + 1)];
            smallX = smallBtn.node.getPosition().x;
          }

          tween(this.bar_progress).to(0.5, {
            progress: smallX / 268
          }).call(() => {
            callback();
          }).start();
          tween(this.sp_line.node.position).to(0.5, new Vec3(smallX, this.sp_line.node.getPosition().y, 0), {
            onUpdate: (target, ratio) => {
              this.sp_line.node.position = target;
            }
          }).start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbl_lv", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sp_mini_1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sp_mini_2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sp_mini_3", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sp_big", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bar_progress", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bar_big_progress", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "sp_line", [_dec9], {
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
//# sourceMappingURL=a08c98d34077edbe216ff20d26c61a2decc03c4f.js.map