System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCInteger, Color, Component, Layers, Node, PhysicsSystem, Rect, Size, Sprite, TransformBit, Vec3, _decorator, ccenum, ColliderMgr, UITransform, ShapeType, CollisionBox, CollisionSphere, CollisionArc, Func, MathAngle, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, Trigger, Dirty, CollisionObject;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCollisionBody(extras) {
    _reporterNs.report("CollisionBody", "./CollisionBody", _context.meta, extras);
  }

  function _reportPossibleCrUseOfColliderMgr(extras) {
    _reporterNs.report("ColliderMgr", "./ColliderMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShapeType(extras) {
    _reporterNs.report("ShapeType", "./CollisionShape", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCollisionShape(extras) {
    _reporterNs.report("CollisionShape", "./CollisionShape", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCollisionBox(extras) {
    _reporterNs.report("CollisionBox", "./CollisionShape", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCollisionSphere(extras) {
    _reporterNs.report("CollisionSphere", "./CollisionShape", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCollisionArc(extras) {
    _reporterNs.report("CollisionArc", "./CollisionShape", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../logic/utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIFrame(extras) {
    _reporterNs.report("IFrame", "../../logic/fight/base/frame/IFrame", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMathAngle(extras) {
    _reporterNs.report("MathAngle", "./Maths", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCollisionGroup(extras) {
    _reporterNs.report("CollisionGroup", "../../logic/fight/define/FightDefine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      CCInteger = _cc.CCInteger;
      Color = _cc.Color;
      Component = _cc.Component;
      Layers = _cc.Layers;
      Node = _cc.Node;
      PhysicsSystem = _cc.PhysicsSystem;
      Rect = _cc.Rect;
      Size = _cc.Size;
      Sprite = _cc.Sprite;
      TransformBit = _cc.TransformBit;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
      ccenum = _cc.ccenum;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      ColliderMgr = _unresolved_2.ColliderMgr;
    }, function (_unresolved_3) {
      ShapeType = _unresolved_3.ShapeType;
      CollisionBox = _unresolved_3.CollisionBox;
      CollisionSphere = _unresolved_3.CollisionSphere;
      CollisionArc = _unresolved_3.CollisionArc;
    }, function (_unresolved_4) {
      Func = _unresolved_4.Func;
    }, function (_unresolved_5) {
      MathAngle = _unresolved_5.MathAngle;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f834eM8pElOqJ717Yz/Xt9+", "CollisionObject", undefined);

      __checkObsolete__(['CCInteger', 'Color', 'Component', 'Graphics', 'Layers', 'Node', 'PhysicsSystem', 'Quat', 'Rect', 'Size', 'Sprite', 'TransformBit', 'Vec2', 'Vec3', '_decorator', 'ccenum', 'v3']);

      __checkObsolete__(['UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Trigger", Trigger = /*#__PURE__*/function (Trigger) {
        Trigger[Trigger["default"] = 0] = "default";
        Trigger[Trigger["enter"] = 1] = "enter";
        Trigger[Trigger["stay"] = 2] = "stay";
        Trigger[Trigger["exit"] = 3] = "exit";
        return Trigger;
      }({}));

      ;

      _export("Dirty", Dirty = /*#__PURE__*/function (Dirty) {
        Dirty[Dirty["R"] = 1] = "R";
        Dirty[Dirty["T"] = 2] = "T";
        Dirty[Dirty["S"] = 4] = "S";
        Dirty[Dirty["RTS"] = 7] = "RTS";
        Dirty[Dirty["RS"] = 5] = "RS";
        Dirty[Dirty["NON"] = 0] = "NON";
        return Dirty;
      }({}));

      ;
      ccenum(_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
        error: Error()
      }), ShapeType) : ShapeType);

      _export("CollisionObject", CollisionObject = (_dec = ccclass('CollisionObject'), _dec2 = property({
        group: "CollisionBody",
        tooltip: "碰撞开关"
      }), _dec3 = property({
        type: PhysicsSystem.PhysicsGroup,
        group: "CollisionBody"
      }), _dec4 = property({
        type: _crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
          error: Error()
        }), ShapeType) : ShapeType,
        group: "Shape"
      }), _dec5 = property({
        group: "Shape"
      }), _dec6 = property({
        group: "Shape",

        visible() {
          return this.type == (_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
            error: Error()
          }), ShapeType) : ShapeType).Box;
        }

      }), _dec7 = property({
        group: "Shape",

        visible() {
          return this.type != (_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
            error: Error()
          }), ShapeType) : ShapeType).Box;
        }

      }), _dec8 = property({
        group: "Shape",

        visible() {
          return this.type == (_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
            error: Error()
          }), ShapeType) : ShapeType).Arc;
        }

      }), _dec9 = property({
        group: "Shape",

        visible() {
          return this.type == (_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
            error: Error()
          }), ShapeType) : ShapeType).Arc;
        }

      }), _dec10 = property({
        group: "Agent"
      }), _dec11 = property({
        type: CCInteger,
        group: "Agent",

        visible() {
          return this.agent;
        }

      }), _dec12 = property({
        group: "Agent",

        visible() {
          return this.agent;
        }

      }), _dec13 = property({
        group: "Agent",

        visible() {
          return this.agent;
        }

      }), _dec14 = property(Vec3), _dec(_class = (_class2 = class CollisionObject extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "trigger", _descriptor, this);

          //碰撞开关
          _initializerDefineProperty(this, "group", _descriptor2, this);

          //碰撞分组
          _initializerDefineProperty(this, "type", _descriptor3, this);

          //相交形状类型
          _initializerDefineProperty(this, "center", _descriptor4, this);

          //偏移位置，是shape相对node节点的中心偏移
          _initializerDefineProperty(this, "size", _descriptor5, this);

          //方块的长宽高
          _initializerDefineProperty(this, "radius", _descriptor6, this);

          //半径，sphere 或者 capsule
          _initializerDefineProperty(this, "arcAngle", _descriptor7, this);

          //扇形开口角度
          _initializerDefineProperty(this, "arcHeading", _descriptor8, this);

          //扇形指向
          _initializerDefineProperty(this, "agent", _descriptor9, this);

          //Agent开关
          _initializerDefineProperty(this, "priority", _descriptor10, this);

          //Agent避让优先级,越大优先级越高
          _initializerDefineProperty(this, "maxRadius", _descriptor11, this);

          //Agent碰撞半径,小于等于物体体积
          _initializerDefineProperty(this, "maxVelocity", _descriptor12, this);

          //Agent最大速度,小于等于物体速度
          this.ignoreTrigger = false;
          //忽略碰撞
          //常用变量
          this.speed = 0;
          //最大速度
          this.angle = 0;

          //旋转角度
          _initializerDefineProperty(this, "velocity", _descriptor13, this);

          //当前速度
          this.voAngle = 0;
          //vo角度
          this.voRatio = 1;
          //vo比例
          this.isDirty = Dirty.RTS;
          this.shape = null;
          this.body = null;
          this.isRecycle = false;
          this.bobyGraphics = void 0;
        }

        onLoad() {}

        reset() {
          this.setIgnoreTrigger(false);
          this.velocity.x = 0;
          this.velocity.y = 0;
          this.voAngle = 0;
          this.voRatio = 1;
          this.body = null;
        }

        setIgnoreTrigger(value) {
          this.ignoreTrigger = value;

          if (this.body) {
            this.body.isIgnoreTrigger = this.ignoreTrigger;
          }
        }

        isDestroy() {
          return this.isRecycle || this.body && this.body.isRemove;
        }

        initBoby() {
          //创建碰撞形状
          switch (this.type) {
            case (_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
              error: Error()
            }), ShapeType) : ShapeType).Box:
              this.shape = new (_crd && CollisionBox === void 0 ? (_reportPossibleCrUseOfCollisionBox({
                error: Error()
              }), CollisionBox) : CollisionBox)(this.center, this.size);
              break;

            case (_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
              error: Error()
            }), ShapeType) : ShapeType).Sphere:
              this.shape = new (_crd && CollisionSphere === void 0 ? (_reportPossibleCrUseOfCollisionSphere({
                error: Error()
              }), CollisionSphere) : CollisionSphere)(this.center, this.radius);
              break;

            case (_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
              error: Error()
            }), ShapeType) : ShapeType).Arc:
              this.shape = new (_crd && CollisionArc === void 0 ? (_reportPossibleCrUseOfCollisionArc({
                error: Error()
              }), CollisionArc) : CollisionArc)(this.center, this.radius, this.arcAngle, this.arcHeading);
              break;
          }

          this.initGraphics(); //创建碰撞body容器

          this.body = (_crd && ColliderMgr === void 0 ? (_reportPossibleCrUseOfColliderMgr({
            error: Error()
          }), ColliderMgr) : ColliderMgr).inst.create(this);
          this.body.shape = this.shape; //绑定碰撞形状

          this.body.group = this.group; //碰撞分组掩码

          this.body.isAgent = this.agent; // agent 检测开关

          this.body.priority = this.priority; // agent 避让优先级

          this.body.neighborDist = this.maxRadius; // agent 体积半径

          this.body.maxVelocity = this.maxVelocity; // agent 最大速度

          this.body.mask = PhysicsSystem.instance.collisionMatrix[this.group]; //把body加入碰撞管理

          (_crd && ColliderMgr === void 0 ? (_reportPossibleCrUseOfColliderMgr({
            error: Error()
          }), ColliderMgr) : ColliderMgr).inst.insert(this.body);
          this.isDirty = Dirty.RTS; //首次更新标记
        }
        /** 更新碰撞分组 */


        updateGroup(_group) {
          this.group = PhysicsSystem.PhysicsGroup[_group];

          if (this.body) {
            this.body.group = this.group;
            this.body.mask = PhysicsSystem.instance.collisionMatrix[this.group];
          }
        } //同步位置到body


        setPosition(position) {
          this.node.position = position;
          this.isDirty |= Dirty.T;
        }

        updatePostion() {
          this.isDirty |= Dirty.RTS;
        } //同步旋转到body


        setRotation(rotation) {
          this.node.rotation = rotation;
          this.isDirty |= Dirty.R;
        }

        setAngle(angle) {
          this.node.angle = angle;
          this.isDirty |= Dirty.R;
        }

        addAngle(angle) {
          this.setAngle(this.node.angle + angle);
        }

        updateDirty() {
          this.isDirty |= Dirty.R;
        } //同步缩放到body


        setScale(scale) {
          this.node.scale = scale;
          this.isDirty |= Dirty.S;
        } //设置瞄点，2D专用


        setAnchor(anchor) {
          var c0 = this.center;
          var c1 = this.shape.center;
          var uts = this.node.getComponent(UITransform);

          if (uts) {
            uts.anchorPoint = anchor;
            var s = uts.contentSize;
            c1.x = (0.5 - anchor.x) * s.width + c0.x;
            c1.y = (0.5 - anchor.y) * s.height + c0.y;
            this.isDirty |= Dirty.T;
          }
        }

        getRotation() {
          return this.node.rotation;
        }

        getPosition() {
          return this.node.position;
        }

        getScale() {
          return this.node.scale;
        } //删除当前节点


        remove(retrieve) {
          if (retrieve === void 0) {
            retrieve = true;
          }

          //移除body, retrieve: 是否回收body ？
          (_crd && ColliderMgr === void 0 ? (_reportPossibleCrUseOfColliderMgr({
            error: Error()
          }), ColliderMgr) : ColliderMgr).inst.remove(this.body, retrieve);
          return this.node;
        } //重新添加到碰撞管理器


        insert() {
          //插入body, 强制更新body数据
          (_crd && ColliderMgr === void 0 ? (_reportPossibleCrUseOfColliderMgr({
            error: Error()
          }), ColliderMgr) : ColliderMgr).inst.insert(this.body, true);
        }

        setColor(color) {}

        init() {} //trigger 回调 enter,stay exit
        //CollisionBody /Trigger


        onTrigger(b, trigger) {
          switch (trigger) {
            case Trigger.enter:
              //onTriggerEnter();
              break;

            case Trigger.stay:
              //onTriggerStay();
              break;

            case Trigger.exit:
              //onTriggerExit();
              break;
          }
        }

        hasChangeDirty() {
          var isDirty = this.isDirty;
          var flag = this.node.hasChangedFlags;

          if (flag) {
            if (flag & TransformBit.POSITION) isDirty |= Dirty.T;
            if (flag & TransformBit.ROTATION) isDirty |= Dirty.R;
            if (flag & TransformBit.SCALE) isDirty |= Dirty.S;
          }

          this.isDirty = Dirty.NON;
          return isDirty;
        }

        onDestroy() {
          this.unscheduleAllCallbacks();
          this.shape = null;
          this.body = null;
        }
        /** 回收 */


        recycle() {
          this.setTrigger(false);
          this.remove(true);
        }

        setTrigger(trigger) {
          this.trigger = trigger;
        }

        insertFrame() {}

        updateFrame(dt) {}

        removeFrame() {}

        lateUpdateFrame() {}

        getVoAngle() {
          return this.voAngle;
        }

        getVoRatio() {
          return this.voRatio;
        }

        setVelocityAndRatio(ve, ratio) {
          this.voRatio = ratio;
          this.setVelocity(ve);
        }

        setVelocity(ve) {
          this.voAngle = (_crd && MathAngle === void 0 ? (_reportPossibleCrUseOfMathAngle({
            error: Error()
          }), MathAngle) : MathAngle).directionToAngle(ve);
          ve.multiplyScalar(this.speed * this.voRatio);
          this.velocity.set(ve);
        }

        setVelocityAngle(angle) {
          this.voAngle = angle;
          (_crd && MathAngle === void 0 ? (_reportPossibleCrUseOfMathAngle({
            error: Error()
          }), MathAngle) : MathAngle).angleToDirection(angle, this.velocity);
          this.velocity.multiplyScalar(this.speed * this.voRatio);
        }

        velocityFlip() {
          this.velocity.x = -this.velocity.x;
          this.velocity.y = -this.velocity.y;
          this.setScale(new Vec3(-1 * this.getScale().x, this.getScale().y, this.getScale().z));
        }

        initGraphics() {
          //创建碰撞形状
          switch (this.type) {
            case (_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
              error: Error()
            }), ShapeType) : ShapeType).Box:
              var rect = new Rect(this.center.x - this.size.x / 2, this.center.y - this.size.y / 2, this.size.x, this.size.y); // let rect = new Rect(this.center.x, this.center.y - this.size.y / 2, this.size.x, this.size.y)

              this.bobyGraphics = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                error: Error()
              }), Func) : Func).drawRect(rect, this.node, Color.RED, this.node.layer, this.bobyGraphics);
              break;

            case (_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
              error: Error()
            }), ShapeType) : ShapeType).Sphere:
              this.bobyGraphics = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                error: Error()
              }), Func) : Func).drawCircle(this.radius, this.center, this.node, Color.RED, this.node.layer, this.bobyGraphics);
              break;

            case (_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
              error: Error()
            }), ShapeType) : ShapeType).Arc:
              this.bobyGraphics = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                error: Error()
              }), Func) : Func).drawArc(this.radius, this.arcAngle, 0, this.node, Color.RED, this.node.layer, this.bobyGraphics);
              this.setAngle(this.arcHeading);
              break;
          }

          var def_node = this.node.getChildByName("def_node");

          if (def_node == null) {
            def_node = new Node("def_node");
            def_node.layer = Layers.Enum.DEFAULT;
            this.node.addChild(def_node);
            var spr = def_node.addComponent(Sprite);
            spr.sizeMode = Sprite.SizeMode.CUSTOM;
            spr.color = Color.BLACK;
            spr.setTexture("textrue/bg_1");
            spr.getComponent(UITransform).setContentSize(new Size(50, 5));
          }
        }

        preCollider() {}

        lateCollider() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "trigger", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "group", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return PhysicsSystem.PhysicsGroup.DEFAULT;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
            error: Error()
          }), ShapeType) : ShapeType).Box;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "center", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "size", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "radius", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "arcAngle", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "arcHeading", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "agent", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "priority", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "maxRadius", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "maxVelocity", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "velocity", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8079fce8848169a5c6c81ce2833ad159e32c8edf.js.map