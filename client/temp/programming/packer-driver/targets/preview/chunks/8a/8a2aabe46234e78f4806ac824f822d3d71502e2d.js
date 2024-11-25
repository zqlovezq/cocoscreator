System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Node, Prefab, ViewPop, HeroAttrPopItem, tab, HeroAttr, HeroAttrMgr, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, HeroAttrPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroAttrPopItem(extras) {
    _reporterNs.report("HeroAttrPopItem", "./HeroAttrPopItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroAttr(extras) {
    _reporterNs.report("HeroAttr", "../../../../Common/script/HeroAttrMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroAttrMgr(extras) {
    _reporterNs.report("HeroAttrMgr", "../../../../Common/script/HeroAttrMgr", _context.meta, extras);
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
      HeroAttrPopItem = _unresolved_3.HeroAttrPopItem;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      HeroAttr = _unresolved_5.HeroAttr;
      HeroAttrMgr = _unresolved_5.HeroAttrMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "67819nzj+NOl7XAWfMAibXt", "HeroAttrPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroAttrPop", HeroAttrPop = (_dec = ccclass('HeroAttrPop'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = (_class2 = class HeroAttrPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "baseNode", _descriptor, this);

          _initializerDefineProperty(this, "extraNode", _descriptor2, this);

          _initializerDefineProperty(this, "itemPrefab", _descriptor3, this);

          this.attrMap = void 0;
        }

        register() {}

        onShow() {
          this.attrMap = this.openData["attrMap"];
          this.initView();
        }

        initView() {
          if (!this.attrMap) {
            return;
          }

          var heroAttr = new (_crd && HeroAttr === void 0 ? (_reportPossibleCrUseOfHeroAttr({
            error: Error()
          }), HeroAttr) : HeroAttr)();
          heroAttr.attr = this.attrMap;
          var map = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroAttrClientTableByType;
          map.forEach((key, value) => {
            if (value.ShowHeroAttr) {
              var node = instantiate(this.itemPrefab);
              var com = node.getComponent(_crd && HeroAttrPopItem === void 0 ? (_reportPossibleCrUseOfHeroAttrPopItem({
                error: Error()
              }), HeroAttrPopItem) : HeroAttrPopItem);

              if (value.IsBase) {
                node.parent = this.baseNode;
              } else {
                node.parent = this.extraNode;
              } // let num=this.attrMap.has(key)?this.attrMap.get(key):0;


              var num = 0;
              num = this.attrMap.has(key) ? this.attrMap.get(key) : 0; // if (key === tab.AttrType.AttrType_Attack) {
              //     num = this.attrMap.get(tab.AttrType.AttrType_TotalAttack) ?? num;
              // } else if (key == tab.AttrType.AttrType_Defence) {
              //     num = this.attrMap.get(tab.AttrType.AttrType_TotalDefence) ?? num;
              // } else if (key == tab.AttrType.AttrType_Hp) {
              //     num = this.attrMap.get(tab.AttrType.AttrType_TotalHp) ?? num;
              // } else if (key == tab.AttrType.AttrType_CriticalDamage) {
              //     num = Math.floor(num / 100);
              // }

              if (key === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_Attack) {
                var _getHeroTotalAttack;

                num = (_getHeroTotalAttack = (_crd && HeroAttrMgr === void 0 ? (_reportPossibleCrUseOfHeroAttrMgr({
                  error: Error()
                }), HeroAttrMgr) : HeroAttrMgr).getHeroTotalAttack(heroAttr)) != null ? _getHeroTotalAttack : num;
              } else if (key == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_Defence) {
                var _getHeroTotalDefence;

                num = (_getHeroTotalDefence = (_crd && HeroAttrMgr === void 0 ? (_reportPossibleCrUseOfHeroAttrMgr({
                  error: Error()
                }), HeroAttrMgr) : HeroAttrMgr).getHeroTotalDefence(heroAttr)) != null ? _getHeroTotalDefence : num;
              } else if (key == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_Hp) {
                var _getHeroTotalHp;

                num = (_getHeroTotalHp = (_crd && HeroAttrMgr === void 0 ? (_reportPossibleCrUseOfHeroAttrMgr({
                  error: Error()
                }), HeroAttrMgr) : HeroAttrMgr).getHeroTotalHp(heroAttr)) != null ? _getHeroTotalHp : num;
              } // else if (key == tab.AttrType.AttrType_CriticalDamage) {
              //     num = Math.floor(num / 100);
              // }


              com.initData(value, num);
            }
          }); // if(this.attrMap){
          //     this.attrMap.forEach((value,key)=>{
          //         let node:Node=instantiate(this.itemPrefab);
          //         let com= node.getComponent(HeroAttrPopItem);
          //         let t=tab.getData().HeroAttrClientTableByType.getValue(key);
          //         if(t.IsBase){
          //             node.parent=this.baseNode;
          //         }else{
          //             node.parent=this.extraNode;
          //         }
          //         com.initData(t,value);
          //     })
          // }
        }

        onDestroy() {
          super.onDestroy();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "baseNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "extraNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec4], {
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
//# sourceMappingURL=8a2aabe46234e78f4806ac824f822d3d71502e2d.js.map