System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Layers, Node, Size, UITransform, Vec2, Vec3, tab, RoguePop, DropControl, Avatar, Func, MathAngle, ViewSize, _dec, _class, _crd, ccclass, property, halfSize, tempPos, DropItem;

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoguePop(extras) {
    _reporterNs.report("RoguePop", "../view/rogue/RoguePop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDropControl(extras) {
    _reporterNs.report("DropControl", "./DropControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAvatar(extras) {
    _reporterNs.report("Avatar", "../animation/Avatar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMathAngle(extras) {
    _reporterNs.report("MathAngle", "../../../framework/collision/Maths", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewSize(extras) {
    _reporterNs.report("ViewSize", "../../define/ViewDefine", _context.meta, extras);
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
      Layers = _cc.Layers;
      Node = _cc.Node;
      Size = _cc.Size;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      RoguePop = _unresolved_3.RoguePop;
    }, function (_unresolved_4) {
      DropControl = _unresolved_4.DropControl;
    }, function (_unresolved_5) {
      Avatar = _unresolved_5.Avatar;
    }, function (_unresolved_6) {
      Func = _unresolved_6.Func;
    }, function (_unresolved_7) {
      MathAngle = _unresolved_7.MathAngle;
    }, function (_unresolved_8) {
      ViewSize = _unresolved_8.ViewSize;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "199f4/GGhBOYaUMR1E/mOUf", "DropItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Layers', 'Node', 'Prefab', 'Size', 'Sprite', 'UITransform', 'Vec2', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);
      halfSize = new Size();
      tempPos = new Vec3(0, 0, 0);
      /** 掉落 */

      _export("DropItem", DropItem = (_dec = ccclass('DropItem'), _dec(_class = class DropItem extends Component {
        constructor() {
          super(...arguments);
          this.dropId = void 0;
          this.dropTab = void 0;
          this.avatar = null;
        }

        static create() {
          var nn = new Node("dropNode");
          nn.layer = Layers.Enum.DEFAULT;
          return nn.addComponent(DropItem);
        }

        onLoad() {
          var uiTrans = this.node.addComponent(UITransform);
          uiTrans.width = uiTrans.height = 80;
        }

        setDropItemId(dropItemId) {
          this.getHalfSize();
          this.dropId = dropItemId;
          this.dropTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().VirtualItemByVirtualItemId.getValue(dropItemId);
          var nn = new Node("dropNode");
          nn.layer = Layers.Enum.DEFAULT;
          this.node.addChild(nn);

          if (this.dropTab.VirtualAnimationId) {
            this.avatar = (_crd && Avatar === void 0 ? (_reportPossibleCrUseOfAvatar({
              error: Error()
            }), Avatar) : Avatar).create();
            nn.addChild(this.avatar.node);
            this.avatar.setAnimationId(this.dropTab.VirtualAnimationId);
          } // let spr = nn.addComponent(Sprite)
          // spr.sizeMode = Sprite.SizeMode.RAW
          // spr.setTexture(this.dropTab.VirtualItemIcon)
          // spr.node.scale = new Vec3(0.8, 0.8, 0.8)


          this.checkAddTouch();
        }

        remove() {
          if (this.avatar) {
            this.avatar.recycle();
          }

          this.avatar = null;
          this.node.destroy(); //做Avatar回收
        }

        checkAddTouch() {
          if (this.isRogueDrop()) {
            this.node.on(Node.EventType.TOUCH_START, () => {
              console.log("点击了");
              (_crd && RoguePop === void 0 ? (_reportPossibleCrUseOfRoguePop({
                error: Error()
              }), RoguePop) : RoguePop).create();
            });
          }
        }

        isRogueDrop() {
          return (_crd && DropControl === void 0 ? (_reportPossibleCrUseOfDropControl({
            error: Error()
          }), DropControl) : DropControl).isRogueDrop(this.dropId);
        }

        setPos(position) {
          if (position == null) {
            position = new Vec3();
            position.x = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
              error: Error()
            }), Func) : Func).random(0, halfSize.width - 100);
            position.y = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
              error: Error()
            }), Func) : Func).random(-halfSize.height, halfSize.height);
          } else {
            if (position.x < 0) {
              position.x = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                error: Error()
              }), Func) : Func).random(0, halfSize.width - 100);
            }
          }

          if (this.isRogueDrop()) {
            this.checkPos(position);
          } else {
            this.node.position = position;
          }
        }

        checkPos(position) {
          var dropTrans = this.node.getComponent(UITransform);
          var isRandom = false;

          if (position.x == 0 && position.y == 0) {
            var angle = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
              error: Error()
            }), Func) : Func).random(0, 360);
            (_crd && MathAngle === void 0 ? (_reportPossibleCrUseOfMathAngle({
              error: Error()
            }), MathAngle) : MathAngle).angleToDirection(angle, position);
            position.multiplyScalar((_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
              error: Error()
            }), Func) : Func).random(-300, 300));
            isRandom = true;
          }

          if (!isRandom) {
            var pos2 = new Vec2();
            pos2.x = position.x;
            pos2.y = position.y;

            for (var index = 0; index < 4; index++) {
              if (this.checkOverlap(this.node, pos2)) {
                break;
              }

              pos2.x = position.x;
              pos2.y = position.y;

              if (index == 0) {
                pos2.x += dropTrans.width;
              } else if (index == 1) {
                pos2.x -= dropTrans.width;
              } else if (index == 2) {
                pos2.y += dropTrans.height;
              } else if (index == 3) {
                pos2.y -= dropTrans.height;
              }
            }

            position.x = pos2.x;
            position.y = pos2.y;
          }

          if (position.x > halfSize.width) {
            position.x = halfSize.width - dropTrans.width / 2;
          } else if (position.x < -halfSize.width) {
            position.x = -halfSize.width + dropTrans.width / 2;
          }

          if (position.y > halfSize.height) {
            position.y = halfSize.height - dropTrans.height / 2;
          } else if (position.y < -halfSize.height) {
            position.y = -halfSize.height + dropTrans.height / 2;
          }

          this.node.position = position;
        }

        checkOverlap(newNode, pos) {
          for (var nn of this.node.parent.children) {
            if (nn == newNode) {
              continue;
            }

            if (nn.getComponent(UITransform).getBoundingBox().contains(pos)) {
              return false;
            }
          }

          return true;
        }

        getHalfSize() {
          if (halfSize.width == 0) {
            halfSize.width = (_crd && ViewSize === void 0 ? (_reportPossibleCrUseOfViewSize({
              error: Error()
            }), ViewSize) : ViewSize).frameSize.width * 0.5;
            halfSize.height = (_crd && ViewSize === void 0 ? (_reportPossibleCrUseOfViewSize({
              error: Error()
            }), ViewSize) : ViewSize).frameSize.height / 9 * 5 * 0.5;
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2e635c213156d489130935b06273d289904a5dd6.js.map