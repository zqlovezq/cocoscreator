System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Graphics, Layers, Node, _dec, _class, _crd, ccclass, property, PvpDrawLine;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Graphics = _cc.Graphics;
      Layers = _cc.Layers;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ad9ea7Fzu5JxqwruCaSf9Ob", "PvpDrawLine", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'director', 'EditBox', 'EventTouch', 'Font', 'game', 'Graphics', 'instantiate', 'js', 'Label', 'Layers', 'Node', 'Prefab', 'ProgressBar', 'Size', 'Sprite', 'SpriteFrame', 'Toggle', 'Tween', 'tween', 'UIOpacity', 'UITransform', 'v2', 'v3', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PvpDrawLine", PvpDrawLine = (_dec = ccclass('PvpDrawLine'), _dec(_class = class PvpDrawLine {
        constructor() {
          this.pool = [];
          this.graphics = [];
          this.parent = null;
        }

        setParent(parent) {
          this.parent = parent;
        }

        create() {
          var grap = this.pool.pop();

          if (grap == null) {
            var nn = new Node("PvpDrawLine");
            nn.layer = Layers.Enum.DEFAULT;
            grap = nn.addComponent(Graphics);
            this.parent.addChild(nn);
          }

          grap.clear();
          grap.node.angle = 0;
          return grap;
        }

        put(grap) {
          grap.clear();
          this.pool.push(grap);
        }

        destory() {
          this.recycle();
          this.pool.length = 0;
        }

        recycle() {
          for (var index = this.graphics.length - 1; index >= 0; index--) {
            this.put(this.graphics[index]);
          }

          this.graphics.length = 0;
        }

        show(points) {
          if (points.length == 0) {
            return;
          }

          var grap = this.create();
          grap.strokeColor = Color.RED;
          grap.lineWidth = 3;

          for (var index = 0; index < points.length; index += 2) {
            if (points.length - 2 == index) {
              break;
            }

            grap.moveTo(points[index], points[index + 1]);
            grap.lineTo(points[index + 2], points[index + 3]);
          } // grap.moveTo(0,0)
          // grap.lineTo(0,100)
          // grap.moveTo(0,100)
          // grap.lineTo(100,100)
          // grap.moveTo(100,100)
          // grap.lineTo(100,0)
          // grap.moveTo(100,0)
          // grap.lineTo(0,0)


          grap.stroke();
          this.graphics.push(grap);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=402075a8c977c25cc018eace520859b1089f9c90.js.map