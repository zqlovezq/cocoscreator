System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, sp, Sprite, tab, LangMgr, LoadResAsync, createAnimation, setGraySpine, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, ClimbingTowerTowerItem;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadResAsync(extras) {
    _reporterNs.report("LoadResAsync", "../../../mgr/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateAnimation(extras) {
    _reporterNs.report("createAnimation", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetGraySpine(extras) {
    _reporterNs.report("setGraySpine", "../../../utils/GameUtil", _context.meta, extras);
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
      sp = _cc.sp;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      LangMgr = _unresolved_3.LangMgr;
    }, function (_unresolved_4) {
      LoadResAsync = _unresolved_4.LoadResAsync;
    }, function (_unresolved_5) {
      createAnimation = _unresolved_5.createAnimation;
      setGraySpine = _unresolved_5.setGraySpine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2e9d0Aw+rxDdY6jnmW11F+p", "ClimbingTowerTowerItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'sp', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * ClimbingTowerTowerItem
       * zhudingchao
       * Thu Jul 11 2024 19:52:31 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/jianghu/climbingTower/ClimbingTowerTowerItem.ts
       *
       */

      _export("ClimbingTowerTowerItem", ClimbingTowerTowerItem = (_dec = ccclass('ClimbingTowerTowerItem'), _dec2 = property(sp.Skeleton), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Sprite), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = (_class2 = class ClimbingTowerTowerItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bossSp", _descriptor, this);

          _initializerDefineProperty(this, "selectNode", _descriptor2, this);

          _initializerDefineProperty(this, "numLab", _descriptor3, this);

          _initializerDefineProperty(this, "lockNode", _descriptor4, this);

          _initializerDefineProperty(this, "gotNode", _descriptor5, this);

          _initializerDefineProperty(this, "bgSprite", _descriptor6, this);

          _initializerDefineProperty(this, "developNode", _descriptor7, this);

          _initializerDefineProperty(this, "bossNode", _descriptor8, this);
        }

        initView(state, table) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (table) {
              _this.developNode.active = false;
              _this.lockNode.active = state == 2;
              _this.gotNode.active = state == 0;
              _this.selectNode.active = state == 1;
              _this.numLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getCombineString("ui_climbingtower_2", [table.Floor]);

              _this.bgSprite.setTexture(table.BackgroundUrl);

              var tempTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().AnimationTableById.getValue(Number(table.AnimationId));
              var spData = yield (_crd && LoadResAsync === void 0 ? (_reportPossibleCrUseOfLoadResAsync({
                error: Error()
              }), LoadResAsync) : LoadResAsync)(tempTab.Path, sp.SkeletonData);
              _this.bossSp.skeletonData = spData;

              if (state == 2) {
                _this.bgSprite.grayscale = true;
                (_crd && createAnimation === void 0 ? (_reportPossibleCrUseOfcreateAnimation({
                  error: Error()
                }), createAnimation) : createAnimation)(_this.bossSp.node, tempTab.Id, 0);
                (_crd && setGraySpine === void 0 ? (_reportPossibleCrUseOfsetGraySpine({
                  error: Error()
                }), setGraySpine) : setGraySpine)(_this.bossSp, true);
              } else {
                _this.bgSprite.grayscale = false;

                _this.bossSp.setAnimation(0, tempTab.AnimationName, true);

                (_crd && setGraySpine === void 0 ? (_reportPossibleCrUseOfsetGraySpine({
                  error: Error()
                }), setGraySpine) : setGraySpine)(_this.bossSp, false);
              }
            } else {
              //敬请期待
              _this.bossNode.active = false;
              _this.developNode.active = true;
              _this.gotNode.active = false;
            }
          })();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bossSp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "selectNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "numLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lockNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "gotNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bgSprite", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "developNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "bossNode", [_dec9], {
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
//# sourceMappingURL=ac47c176aa4018bb858e12f2618a7442d9d02546.js.map