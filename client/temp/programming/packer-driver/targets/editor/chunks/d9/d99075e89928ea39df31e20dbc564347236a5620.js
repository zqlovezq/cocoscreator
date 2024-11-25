System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Game, game, Layers, Node, Sprite, UITransform, Vec3, ViewScreen, PlayerControl, FightEvent, EventMgr, tab, DropItem, EffectUI, MathAngle, DeadEffectUI, HoldTimeEffectUI, RoguePop, DropControl, FightRenderSort, FightData, LocalEvent, BattleMainDataControl, FightRootControl, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _crd, ccclass, property, tempPos, FightRootView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewScreen(extras) {
    _reporterNs.report("ViewScreen", "../../framework/base/ViewScreen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerControl(extras) {
    _reporterNs.report("PlayerControl", "./base/obj/role/role/PlayerControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "./define/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDropItem(extras) {
    _reporterNs.report("DropItem", "./drop/DropItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectUI(extras) {
    _reporterNs.report("EffectUI", "./base/effect/EffectUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsRole(extras) {
    _reporterNs.report("AbsRole", "./base/obj/role/AbsRole", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMathAngle(extras) {
    _reporterNs.report("MathAngle", "../../framework/collision/Maths", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeadEffectUI(extras) {
    _reporterNs.report("DeadEffectUI", "./base/effect/DeadEffectUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHoldTimeEffectUI(extras) {
    _reporterNs.report("HoldTimeEffectUI", "./base/effect/HoldTimeEffectUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRole(extras) {
    _reporterNs.report("Role", "./base/obj/role/role/Role", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoguePop(extras) {
    _reporterNs.report("RoguePop", "./view/rogue/RoguePop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDropControl(extras) {
    _reporterNs.report("DropControl", "./drop/DropControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightRenderSort(extras) {
    _reporterNs.report("FightRenderSort", "./define/FightRenderSort", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "./data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleMainDataControl(extras) {
    _reporterNs.report("BattleMainDataControl", "../model/home/battle/BattleMainDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightRootControl(extras) {
    _reporterNs.report("FightRootControl", "./FightRootControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPvpRole(extras) {
    _reporterNs.report("PvpRole", "./pvp/obj/PvpRole", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Game = _cc.Game;
      game = _cc.game;
      Layers = _cc.Layers;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      ViewScreen = _unresolved_2.ViewScreen;
    }, function (_unresolved_3) {
      PlayerControl = _unresolved_3.PlayerControl;
    }, function (_unresolved_4) {
      FightEvent = _unresolved_4.FightEvent;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }, function (_unresolved_6) {
      tab = _unresolved_6.tab;
    }, function (_unresolved_7) {
      DropItem = _unresolved_7.DropItem;
    }, function (_unresolved_8) {
      EffectUI = _unresolved_8.EffectUI;
    }, function (_unresolved_9) {
      MathAngle = _unresolved_9.MathAngle;
    }, function (_unresolved_10) {
      DeadEffectUI = _unresolved_10.DeadEffectUI;
    }, function (_unresolved_11) {
      HoldTimeEffectUI = _unresolved_11.HoldTimeEffectUI;
    }, function (_unresolved_12) {
      RoguePop = _unresolved_12.RoguePop;
    }, function (_unresolved_13) {
      DropControl = _unresolved_13.DropControl;
    }, function (_unresolved_14) {
      FightRenderSort = _unresolved_14.FightRenderSort;
    }, function (_unresolved_15) {
      FightData = _unresolved_15.FightData;
    }, function (_unresolved_16) {
      LocalEvent = _unresolved_16.LocalEvent;
    }, function (_unresolved_17) {
      BattleMainDataControl = _unresolved_17.BattleMainDataControl;
    }, function (_unresolved_18) {
      FightRootControl = _unresolved_18.FightRootControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3234fAc90dDvpnbBH//++NR", "FightRootView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'Game', 'game', 'input', 'Input', 'Layers', 'math', 'Node', 'Size', 'Sprite', 'SpriteFrame', 'Toggle', 'Tween', 'tween', 'UITransform', 'v2', 'v3', 'Vec2', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);
      tempPos = new Vec3();

      _export("FightRootView", FightRootView = (_dec = ccclass('FightRootView'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Sprite), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec(_class = (_class2 = class FightRootView extends (_crd && ViewScreen === void 0 ? (_reportPossibleCrUseOfViewScreen({
        error: Error()
      }), ViewScreen) : ViewScreen) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "camera", _descriptor, this);

          //跟随相机
          _initializerDefineProperty(this, "rootNode", _descriptor2, this);

          _initializerDefineProperty(this, "mapSpr", _descriptor3, this);

          _initializerDefineProperty(this, "linkNode", _descriptor4, this);

          _initializerDefineProperty(this, "dropNode", _descriptor5, this);

          //掉落
          _initializerDefineProperty(this, "rolePosNode", _descriptor6, this);

          _initializerDefineProperty(this, "objects", _descriptor7, this);

          //enemy 显示挂载点
          _initializerDefineProperty(this, "bulletHitEffect", _descriptor8, this);

          //子弹击中特效
          _initializerDefineProperty(this, "bullets", _descriptor9, this);

          //bullet 显示挂载点
          _initializerDefineProperty(this, "roleDown", _descriptor10, this);

          _initializerDefineProperty(this, "roleUp", _descriptor11, this);

          _initializerDefineProperty(this, "damages", _descriptor12, this);

          //伤害
          _initializerDefineProperty(this, "touchNode", _descriptor13, this);

          //伤害
          _initializerDefineProperty(this, "dropAnimNode", _descriptor14, this);

          //掉落动画
          _initializerDefineProperty(this, "drawLine", _descriptor15, this);

          //伤害
          this.touchID = -1;
          this.clickCount = 0;
          this.clickTime = 0;
        }

        onLoad() {
          super.onLoad();

          if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.isPvp) {
            this.mapSpr.node.scale = Vec3.ONE;
          }

          this.mapSpr.setTexture((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.stageTab.Background);

          if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.isPvp) {
            return;
          }

          this.clickCount = 0;

          if ((_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
            error: Error()
          }), BattleMainDataControl) : BattleMainDataControl).ins.getLastStageId() <= (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().TapTipsTimes[0]) {
            this.schedule(this.resetClickCount);
          }
        }

        register() {
          console.log("注册消息------");
          this.registerTouch();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Fight_Drop_Item, this.onFight_Drop_Item, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Fight_Drop_Item_Anim, this.onFight_Drop_Item_Anim, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Fight_Drop_Remove_First, this.onFight_Drop_Remove_First, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Hit_Effect_Add, this.onHit_Effect_Add, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).buff_link, this.onBuff_link, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Sort_AbsRole, this.onSort_AbsRole, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).add_DeadEffect, this.onadd_DeadEffect, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).remove_DeadEffect, this.onremove_DeadEffect, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Create_HoldTime_Effect, this.onCreate_HoldTime_Effect, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Effect_Add_To_Layer, this.onEffect_Add_To_Layer, this);
        }

        addNode(nn) {
          this.objects.addChild(nn);
        }

        getBullet(isBelow) {
          if (isBelow) {
            return this.roleDown;
          }

          return this.bullets;
        }

        registerTouch() {
          // input.on(Input.EventType.TOUCH_START, this.touchStart, this);
          // input.on(Input.EventType.TOUCH_MOVE, this.touchMove, this);
          // input.on(Input.EventType.TOUCH_END, this.touchEnd, this);
          // input.on(Input.EventType.TOUCH_CANCEL, this.touchEnd, this);
          this.touchNode.on(Node.EventType.TOUCH_START, this.touchStart, this);
          this.touchNode.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
          this.touchNode.on(Node.EventType.TOUCH_END, this.touchEnd, this);
          this.touchNode.on(Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
          game.on(Game.EVENT_HIDE, () => {
            console.log("进入后台");
            this.cancelTouch();
          });
          game.on(Game.EVENT_SHOW, () => {
            console.log("进入前台");
            this.cancelTouch();
          });
        }

        resetClickCount(dt) {
          this.clickTime += dt / (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.timeScale;

          if (this.clickTime >= 1) {
            if (this.clickCount >= (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().TapTipsTimes[1]) {
              // 显示提示tips
              (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
                error: Error()
              }), FightRootControl) : FightRootControl).ins.getUIView().showTapTipsTimes();
            }

            this.clickCount = 0;
            this.clickTime = 0;
          }
        }

        touchStart(event) {
          if (this.touchID == -1) {
            this.touchID = event.getID();
          }

          if (this.touchID != event.getID()) return false;
          this.clickCount++;
          this.innerPosition(event.getUILocation());
          return true;
        }

        touchMove(event) {
          if (this.touchID != event.getID()) return false;
          this.innerPosition(event.getUILocation());
          return true;
        }

        touchEnd(event) {
          if (this.touchID != event.getID()) return false; // this.innerPosition(event.getUILocation())

          this.cancelTouch();
          return true;
        }

        touchCancel(event) {
          if (this.touchID != event.getID()) return false; // this.innerPosition(event.getUILocation())

          this.cancelTouch();
          return true;
        }

        cancelTouch() {
          this.touchID = -1;
          (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.isClicking(false);
        }

        innerPosition(uiPos) {
          // let clickPos = v3(uiPos.x, uiPos.y, 0)
          (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.setClickWorldPos(uiPos.x, uiPos.y);
        }

        getRolePosByIndex(index) {
          return this.rolePosNode.children[index - 1].position;
        } //----------------回调---------------

        /** 普通掉落 */


        onFight_Drop_Item(dropItemId, position) {
          let dropItem = (_crd && DropItem === void 0 ? (_reportPossibleCrUseOfDropItem({
            error: Error()
          }), DropItem) : DropItem).create();
          this.dropNode.addChild(dropItem.node);
          dropItem.setDropItemId(dropItemId);
          dropItem.setPos(position);

          if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.stageId === 1) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).JadeDrop);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).JadeDropFinger);
          }

          if ((_crd && DropControl === void 0 ? (_reportPossibleCrUseOfDropControl({
            error: Error()
          }), DropControl) : DropControl).ins.audoDropCollect && this.dropNode.children.length == 1) {
            this.scheduleOnce(() => {
              (_crd && RoguePop === void 0 ? (_reportPossibleCrUseOfRoguePop({
                error: Error()
              }), RoguePop) : RoguePop).create();
            }, 0.8);
          }
        }
        /** 普通掉落动画 */


        onFight_Drop_Item_Anim(animId, position) {
          let nn = (_crd && EffectUI === void 0 ? (_reportPossibleCrUseOfEffectUI({
            error: Error()
          }), EffectUI) : EffectUI).create();
          nn.node.parent = this.dropAnimNode;
          nn.node.position = position || tempPos.set(Vec3.ZERO);
          nn.run(animId);
        }

        onFight_Drop_Remove_First() {
          if (this.dropNode.children.length) {
            this.dropNode.children[0].getComponent(_crd && DropItem === void 0 ? (_reportPossibleCrUseOfDropItem({
              error: Error()
            }), DropItem) : DropItem).remove();
          }
        }

        onHit_Effect_Add(hitEffect, startPos, targetPos) {
          for (let index = 0; index < hitEffect.length; index++) {
            let hitType = hitEffect[index];
            let hitAnimId = hitEffect[index + 1];
            let nn = (_crd && EffectUI === void 0 ? (_reportPossibleCrUseOfEffectUI({
              error: Error()
            }), EffectUI) : EffectUI).create();
            nn.node.parent = this.bulletHitEffect;

            if (hitType == 1) {
              nn.node.position = targetPos || tempPos.set(Vec3.ZERO);
              nn.run(hitAnimId);
            } else if (hitType == 2) {
              tempPos.x = (startPos.x + targetPos.x) / 2;
              tempPos.y = (startPos.y + targetPos.y) / 2;
              nn.node.position = tempPos;
              nn.node.angle = (_crd && MathAngle === void 0 ? (_reportPossibleCrUseOfMathAngle({
                error: Error()
              }), MathAngle) : MathAngle).posToAngle(startPos, targetPos);
              let lengthSqr = Vec3.distance(startPos, targetPos);
              nn.run(hitAnimId);

              if (nn.avatar && nn.avatar.fpsAvatar) {
                nn.avatar.fpsAvatar.spr.sizeMode = Sprite.SizeMode.CUSTOM;
                nn.avatar.fpsAvatar.spr.getComponent(UITransform).width = lengthSqr;
              }
            }

            index++;
          }
        }

        onadd_DeadEffect(abs) {
          let nn = (_crd && DeadEffectUI === void 0 ? (_reportPossibleCrUseOfDeadEffectUI({
            error: Error()
          }), DeadEffectUI) : DeadEffectUI).create();
          nn.node.parent = this.bulletHitEffect;
          nn.node.position = abs ? abs.getHitPos() : tempPos.set(Vec3.ZERO);
          nn.setAbs(abs);
          nn.setAnimIds((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().Deatheffect);
        }

        onremove_DeadEffect(abs) {
          let list = this.bulletHitEffect.getComponentsInChildren(_crd && DeadEffectUI === void 0 ? (_reportPossibleCrUseOfDeadEffectUI({
            error: Error()
          }), DeadEffectUI) : DeadEffectUI);

          for (let i = 0; i < list.length; i++) {
            let nn = list[i];

            if (nn.abs == abs) {
              nn.remove();
            }
          }
        }

        onCreate_HoldTime_Effect(abs) {
          let nn = (_crd && HoldTimeEffectUI === void 0 ? (_reportPossibleCrUseOfHoldTimeEffectUI({
            error: Error()
          }), HoldTimeEffectUI) : HoldTimeEffectUI).create();
          nn.node.parent = this.bulletHitEffect;

          if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.isPvp) {
            nn.setAbsPvp(abs);
            return;
          }

          this.scheduleOnce(() => {
            nn.setAbs(abs);
          }, 0.1);
        } //buff伤害链接


        onBuff_link(roles) {
          this.linkNode.destroyAllChildren();

          for (let i = 0; i < roles.length; i++) {
            let now = roles[i];
            let next = roles[i + 1];

            if (next) {
              let nn = new Node("link");
              let uitrans = nn.addComponent(UITransform);
              nn.layer = Layers.Enum.DEFAULT;
              nn.parent = this.linkNode;
              uitrans.anchorX = 0;
              let spr = nn.addComponent(Sprite);
              spr.setTexture("spine/bullet/boss_chain_1");
              spr.sizeMode = Sprite.SizeMode.CUSTOM;
              spr.type = Sprite.Type.TILED;
              nn.position = now.getHitPos();
              nn.angle = (_crd && MathAngle === void 0 ? (_reportPossibleCrUseOfMathAngle({
                error: Error()
              }), MathAngle) : MathAngle).posToAngle(nn.position, next.getHitPos());
              uitrans.width = Vec3.distance(nn.position, next.getHitPos());
              uitrans.height = 32;
            }
          }
        }

        onSort_AbsRole() {
          (_crd && FightRenderSort === void 0 ? (_reportPossibleCrUseOfFightRenderSort({
            error: Error()
          }), FightRenderSort) : FightRenderSort).sort(this.objects, this.bullets);
        }

        getRendderCout() {
          let total = 0;

          for (let index = 0; index < this.rootNode.children.length; index++) {
            const v = this.rootNode.children[index];
            total += v.children.length;
          }

          return total - 5;
        }

        onEffect_Add_To_Layer(layerType, nn) {
          switch (layerType) {
            case "shadow":
              this.roleDown.addChild(nn);
              break;

            default:
              break;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rootNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mapSpr", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "linkNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "dropNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "rolePosNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "objects", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "bulletHitEffect", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bullets", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "roleDown", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "roleUp", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "damages", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "touchNode", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "dropAnimNode", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "drawLine", [_dec16], {
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
//# sourceMappingURL=d99075e89928ea39df31e20dbc564347236a5620.js.map