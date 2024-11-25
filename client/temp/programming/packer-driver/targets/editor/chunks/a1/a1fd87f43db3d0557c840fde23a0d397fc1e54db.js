System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, Sprite, UIMgr, ViewName, tab, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, HeroSkillItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../HeroInfo", _context.meta, extras);
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
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      UIMgr = _unresolved_2.UIMgr;
    }, function (_unresolved_3) {
      ViewName = _unresolved_3.ViewName;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6b586cJwzRM2IRgkUanJoBd", "HeroSkillItem", undefined);
      /*
       * @Date: 2024-05-14 15:07:59
       * @LastEditors: wzq
       * @LastEditTime: 2024-06-05 17:54:14
       */


      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroSkillItem", HeroSkillItem = (_dec = ccclass('HeroSkillItem'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Sprite), _dec5 = property(Node), _dec6 = property([Node]), _dec(_class = (_class2 = class HeroSkillItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "lbl_skill_now_level", _descriptor, this);

          _initializerDefineProperty(this, "lbl_skill_max_level", _descriptor2, this);

          _initializerDefineProperty(this, "sp_skill_icon", _descriptor3, this);

          _initializerDefineProperty(this, "node_skill_layout", _descriptor4, this);

          _initializerDefineProperty(this, "nodes_skill", _descriptor5, this);

          this._type = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroStarDescType.HeroStarDescType_None;
          this._heroInfo = null;
        }

        initData(type, heroInfo) {
          let heroTab = heroInfo.heroTable;
          this._type = type;
          this._heroInfo = heroInfo;

          let _skillData = heroInfo.getHeroSkillMap().get(type);

          let _skillIcon = heroTab["SkillIcon" + type]; // let _bgIcon = heroInfo.heroAptitudeTable.SkillBg;

          for (let i = 0; i < this.nodes_skill.length; i++) {
            let node = this.nodes_skill[i];
            node.active = false;

            if (i == type - 1) {
              node.active = true;
              node.getChildByName("mask").getChildByName("skill_icon").getComponent(Sprite).setTexture(_skillIcon);
            }
          }

          if (type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroStarDescType.HeroStarDescType_First) {
            this.node_skill_layout.active = false;
          } else {
            this.lbl_skill_max_level.string = String(_skillData.length);
            let curCount = 0;

            for (let i = 0; i < _skillData.length; i++) {
              let HeroStarUpTab = _skillData[i];

              if (HeroStarUpTab.HeroStar <= heroInfo.star) {
                curCount++;
              }
            }

            this.lbl_skill_now_level.string = String(curCount);
          }
        }

        setSkillImgActive(isActive) {
          // this.node_skill_img.active = isActive;
          for (let i = 0; i < this.nodes_skill.length; i++) {
            let node = this.nodes_skill[i]; // let child1 = node.children[1];

            let child2 = node.children[2]; // child1.active = isActive;

            child2.active = isActive;
          }

          this.node_skill_layout.active = isActive;
        }

        onClick() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).HeroSkillPop,
            data: {
              type: this._type,
              heroInfo: this._heroInfo
            },
            zIndex: 300
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbl_skill_now_level", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbl_skill_max_level", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sp_skill_icon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_skill_layout", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodes_skill", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a1fd87f43db3d0557c840fde23a0d397fc1e54db.js.map