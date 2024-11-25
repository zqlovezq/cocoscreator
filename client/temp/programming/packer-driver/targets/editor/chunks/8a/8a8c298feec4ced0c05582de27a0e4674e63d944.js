System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, Sprite, UITransform, v3, RedDotType, RedMgr, _crd;

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../red/RedDotType", _context.meta, extras);
  }

  _export("RedMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      RedDotType = _unresolved_2.RedDotType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "39029a0cWdOXJ2luqeZQWlR", "RedMgr", undefined);
      /**
       * 红点管理类
       * 定义RedDotType枚举，RedMgr.add(RedData) 注册红点节点， 通过 refreshEvent 计算红点数据并同步UI
       */


      __checkObsolete__(['Node', 'Sprite', 'UITransform', 'Vec2', 'macro', 'v3']);

      /**
       * 红点观察者结构
       */

      /**
       * 红点事件,最高2层结构 引用 RedDotType
       */

      /**
       * 红点管理
       */
      _export("RedMgr", RedMgr = class RedMgr {
        static get ins() {
          if (this.instance == null) {
            this.instance = new RedMgr();
          }

          return this.instance;
        }

        //红点计算函数
        constructor() {
          this.observersNodes = void 0;
          //一个红点对应N个事件
          this.states = void 0;
          //事件对应的红点数据
          this.calculateFbs = void 0;
          this.observersNodes = [];
          this.states = [];
          this.calculateFbs = [];

          for (const key in _crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType) {
            this.states[(_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType)[key]] = {};
          }
        }

        registerCalculateFb(event, fb, target) {
          this.calculateFbs[event] = {
            target: target,
            fb: fb
          };
        }
        /**
         * 刷新红点
         * @param event 事件名
         */


        static refreshEvent(event, state) {
          var stateToChange = RedMgr.ins.states[event]; //todo 红点结构最高2层 stateToChange = bool 、{key1:bool,key2:bool}

          let targetFb = RedMgr.ins.calculateFbs[event];

          if (targetFb) {
            stateToChange = targetFb.fb.call(targetFb.target, stateToChange);
          } else {
            console.error('未找到红点计算函数,请先注册计算函数,RedDotType:' + (_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType)[event]);
          }

          if (state != undefined) {
            stateToChange = state;
          }

          RedMgr.ins.states[event] = stateToChange;
          RedMgr.ins.judge(event);
        }
        /**
         * 注册红点
         * @param args 
         */


        static add(args) {
          args.child = args.child || "all";
          var obs = RedMgr.ins.getHasObs(args.node);

          if (obs == null) {
            var redNode = args.transform.redNode || RedMgr.ins.getRedNode(args.node, args.transform);
            obs = {
              eventNames: {},
              nodeParent: args.node,
              redNode: redNode
            };
            RedMgr.ins.observersNodes.push(obs);
          }

          obs.eventNames[args.event] = {
            child: args.child,
            isActive: false
          };
          RedMgr.ins.judge(args.event);
        }

        judge(event) {
          for (let index = 0; index < this.observersNodes.length; index++) {
            const v = this.observersNodes[index];

            if (!(v.redNode && v.redNode.isValid)) {
              continue;
            }

            if (v.eventNames[event]) {
              let toAdd = this.isRed(event, v.eventNames[event].child, v.eventNames[event].child2);
              v.eventNames[event].isActive = toAdd;
              var isActive = false;

              for (const key in v.eventNames) {
                const v1 = v.eventNames[key];

                if (v1.isActive) {
                  isActive = true;
                }
              }

              v.redNode.active = isActive;
            }
          }
        }

        isRed(key, child = "all", child2 = "all") {
          let eventState = this.states[key];
          var toAdd = false;

          if (typeof eventState == "boolean") {
            toAdd = eventState;
          } else {
            if (child == "all") {
              for (const key in eventState) {
                if (eventState[key]) {
                  if (typeof eventState[key] == "object") {
                    for (const stateKey in eventState[key]) {
                      if (eventState[key][stateKey]) {
                        toAdd = true;
                        break;
                      }
                    }
                  } else {
                    toAdd = true;
                    break;
                  }
                }
              }
            } else {
              if (eventState[child]) {
                if (typeof eventState[child] == "object") {
                  if (child2 == "all") {
                    for (const key in eventState[child]) {
                      if (eventState[child][key]) {
                        toAdd = true;
                        break;
                      }
                    }
                  } else {
                    toAdd = eventState[child][child2];
                  }
                } else {
                  toAdd = true;
                }
              }
            }
          }

          return toAdd;
        }

        static remove(node) {
          var self = RedMgr.ins;

          for (let index = self.observersNodes.length - 1; index >= 0; index--) {
            const v = self.observersNodes[index];

            if (v.nodeParent == node) {
              self.observersNodes.splice(index, 1);
            }
          }
        }

        getHasObs(node) {
          for (let index = 0; index < this.observersNodes.length; index++) {
            const v = this.observersNodes[index];

            if (v.nodeParent == node) {
              return v;
            }
          }

          return null;
        }

        getRedNode(node, transform) {
          var tmpNode = node.getChildByName("red_azhe");

          if (tmpNode == null) {
            tmpNode = new Node("red_azhe");
            let uitrans = tmpNode.addComponent(UITransform);
            uitrans.anchorX = uitrans.anchorY = 0.5;
            var pos = v3();

            if (uitrans.anchorX == 0) {
              pos.x = uitrans.width;
            } else {
              pos.x = uitrans.width / 2;
            }

            if (uitrans.anchorY == 1) {
              pos.y = 0;
            } else if (uitrans.anchorY == 0) {
              pos.y = uitrans.height;
            } else {
              pos.y = uitrans.height / 2;
            }

            if (transform.scale) {
              tmpNode.scale = transform.scale;
            }

            if (transform.offset) {
              pos.x = pos.x + transform.offset.x;
              pos.y = pos.y + transform.offset.y;
            }

            tmpNode.position = pos;
            let spr = tmpNode.addComponent(Sprite);

            if (transform.image) {
              spr.spriteFrame = transform.image;
            } else {
              spr.setTexture("Chess/UI/Common/dot");
            }

            node.addChild(tmpNode);
          }

          return tmpNode;
        }

      });

      RedMgr.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8a8c298feec4ced0c05582de27a0e4674e63d944.js.map