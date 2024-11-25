System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, error, log, Mask, Node, sys, UITransform, Vec3, view, Animation, GuideTrigger, tab, EventMgr, LocalEvent, DisableGuideController, DisableTouchMask, GuideCommand, IsInFightScene, Locator, RoleData, FightData, CommonTipsPop, LangMgr, BattleMainDataControl, FightEvent, stepBranchGuide, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _class3, _crd, ccclass, property, GuideController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGuideTrigger(extras) {
    _reporterNs.report("GuideTrigger", "./GuideTrigger", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDisableGuideController(extras) {
    _reporterNs.report("DisableGuideController", "./GuideCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDisableTouchMask(extras) {
    _reporterNs.report("DisableTouchMask", "./GuideCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuideCommand(extras) {
    _reporterNs.report("GuideCommand", "./GuideCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIsInFightScene(extras) {
    _reporterNs.report("IsInFightScene", "./GuideCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocator(extras) {
    _reporterNs.report("Locator", "./Locator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../model/role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../fight/data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTipsPop(extras) {
    _reporterNs.report("CommonTipsPop", "../model/common/CommonTipsPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleMainDataControl(extras) {
    _reporterNs.report("BattleMainDataControl", "../model/home/battle/BattleMainDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../fight/define/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfstepBranchGuide(extras) {
    _reporterNs.report("stepBranchGuide", "./GuideTask", _context.meta, extras);
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
      director = _cc.director;
      error = _cc.error;
      log = _cc.log;
      Mask = _cc.Mask;
      Node = _cc.Node;
      sys = _cc.sys;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      view = _cc.view;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      GuideTrigger = _unresolved_2.GuideTrigger;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
    }, function (_unresolved_5) {
      LocalEvent = _unresolved_5.LocalEvent;
    }, function (_unresolved_6) {
      DisableGuideController = _unresolved_6.DisableGuideController;
      DisableTouchMask = _unresolved_6.DisableTouchMask;
      GuideCommand = _unresolved_6.GuideCommand;
      IsInFightScene = _unresolved_6.IsInFightScene;
    }, function (_unresolved_7) {
      Locator = _unresolved_7.Locator;
    }, function (_unresolved_8) {
      RoleData = _unresolved_8.RoleData;
    }, function (_unresolved_9) {
      FightData = _unresolved_9.FightData;
    }, function (_unresolved_10) {
      CommonTipsPop = _unresolved_10.CommonTipsPop;
    }, function (_unresolved_11) {
      LangMgr = _unresolved_11.LangMgr;
    }, function (_unresolved_12) {
      BattleMainDataControl = _unresolved_12.BattleMainDataControl;
    }, function (_unresolved_13) {
      FightEvent = _unresolved_13.FightEvent;
    }, function (_unresolved_14) {
      stepBranchGuide = _unresolved_14.stepBranchGuide;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "05131mENdhPGZHI0PMKdHDb", "GuideController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'error', 'log', 'Mask', 'Node', 'Rect', 'Sprite', 'sys', 'UITransform', 'Vec3', 'view', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GuideController", GuideController = (_dec = ccclass('GuideController'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Mask), _dec8 = property(Node), _dec9 = property(_crd && CommonTipsPop === void 0 ? (_reportPossibleCrUseOfCommonTipsPop({
        error: Error()
      }), CommonTipsPop) : CommonTipsPop), _dec10 = property(Node), _dec11 = property(Node), _dec(_class = (_class2 = (_class3 = class GuideController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "touchMask", _descriptor, this);

          _initializerDefineProperty(this, "left", _descriptor2, this);

          _initializerDefineProperty(this, "right", _descriptor3, this);

          _initializerDefineProperty(this, "top", _descriptor4, this);

          _initializerDefineProperty(this, "bottom", _descriptor5, this);

          _initializerDefineProperty(this, "holeMask", _descriptor6, this);

          _initializerDefineProperty(this, "finger", _descriptor7, this);

          _initializerDefineProperty(this, "CommonTipsPop", _descriptor8, this);

          _initializerDefineProperty(this, "node_jump", _descriptor9, this);

          _initializerDefineProperty(this, "node_create_bullet", _descriptor10, this);

          this._fingerRect = void 0;
          this._fingerNode = void 0;
          //点击指向的节点
          this.dropCount = 1;
          this.showMonster = false;
          this.blockButton = false;
          this.JadeTimeCount = 0;
          this.roleIdleTimeCount = 0;
          this.roleIdleState = false;
          this.rewards = [];
          this.canHideHeroPop = false;
          this.setTimeOutCount = 0;
          this._targetNode = void 0;
          this._dispatchEvent = void 0;
          this._task = null;
          this._recordSteps = void 0;
          this.runningCB = null;
          // 正在执行中的步骤的回调函数，用于跳过步骤使用
          this.runningGuideData = null;
        }

        static get ins() {
          return GuideController._ins;
        }

        static set ins(value) {
          if (GuideController._ins) {
            if (!sys.isNative) {
              throw 'GuideController is already created';
            }
          }

          GuideController._ins = value;
          var nodeGuangQuan = new Node();
          nodeGuangQuan.name = "guideGQNode";
          value.node.addChild(nodeGuangQuan);
        }

        static Release() {
          if (GuideController._ins) {
            var tri = GuideController._ins.getComponent(_crd && GuideTrigger === void 0 ? (_reportPossibleCrUseOfGuideTrigger({
              error: Error()
            }), GuideTrigger) : GuideTrigger);

            if (tri) {
              tri.removeListens();
            }

            if (GuideController._ins.TargetNode) {
              GuideController._ins.TargetNode.off(Node.EventType.TOUCH_END);
            }

            GuideController._ins.left.off(Node.EventType.TOUCH_END);

            GuideController._ins.right.off(Node.EventType.TOUCH_END);

            GuideController._ins.top.off(Node.EventType.TOUCH_END);

            GuideController._ins.bottom.off(Node.EventType.TOUCH_END);

            director.targetOff(GuideController._ins.node);
            director.removePersistRootNode(GuideController._ins.node);

            GuideController._ins.node.destroy();

            GuideController._ins = undefined;
          }
        }

        // 正在执行的强制引导数据
        get TargetNode() {
          return this._targetNode;
        }

        set TargetNode(node) {
          this._targetNode = node;
        }
        /* 保存一下引导的结算奖励 */


        setRewards(rewards) {
          this.rewards = rewards;
        }

        gerRewards() {
          return this.rewards;
        }
        /**
         * 是否正在进行新手引导
        */


        isGuiding() {
          return this._task !== null;
        }
        /* 是否在战斗中的新手引导 */


        isInFightGuiding() {
          if ((_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
            error: Error()
          }), BattleMainDataControl) : BattleMainDataControl).ins.getStageClearIds().length === 0 && ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.stageId === 101 || (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.stageId === 1) && !(_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.IsGuideFinished()) {
            return true;
          } else {
            return false;
          }
        } // 是否在进行某个新手引导


        isGuidingTask(taskName) {
          return this._task && this._task.file && this._task.file == taskName;
        }

        isDebug() {
          //return true;
          return this._task && this._task.debug;
        }

        onLoad() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).JadeDropFinger, this.beginCheckJade, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).roleIdleState, this.beginCheckRole, this);
          this.init();
        }

        registerGuildeSelectLeader() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).unFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Select_leader, this.onSelect_leader, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Select_leader, this.onSelect_leader, this);
        }

        onSelect_leader() {
          console.log("cocos 选择队长");

          if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.stageId === 103) {
            clearTimeout(this.setTimeOutCount);
            this.setTimeOutCount = setTimeout(() => {
              (_crd && stepBranchGuide === void 0 ? (_reportPossibleCrUseOfstepBranchGuide({
                error: Error()
              }), stepBranchGuide) : stepBranchGuide)(502);
            }, 30000);
          }
        }

        init() {
          this.node.getComponent(UITransform).setContentSize(view.getVisibleSize());
          this.dropCount = 1;
          this.TargetNode = null;
          this.finger.active = false;
          this._fingerNode = undefined;
          this._fingerRect = undefined;
          this.showMonster = false;
          this.CommonTipsPop.node.active = false;
          this.touchMask.active = false;
          var pos = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().WanDaoLocation;
          this.node_create_bullet.setPosition(new Vec3(pos[0], pos[1], 0));
          this.resetTouchMask();
        }

        runTask(task, taskid, callback) {
          if (this._task) {
            return;
          }

          this._task = task;
          this.run(taskid, callback);
        }

        clearTask() {
          this._task = null;

          var tri = GuideController._ins.getComponent(_crd && GuideTrigger === void 0 ? (_reportPossibleCrUseOfGuideTrigger({
            error: Error()
          }), GuideTrigger) : GuideTrigger);

          tri.setGuideRunning(false);
        }

        triggerTaskError(cb) {
          if (this._task) {
            cb(new Error("Guide Cancelled"));
          }
        }

        run(taskid, callback) {
          if (!this._task) {
            return;
          }

          this.resetTouchMaskDebugColor();
          async.eachSeries(this._task.steps, (step, cb) => {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).CancelRunningGuide, this.triggerTaskError, this, true);
            step.skip_cmd = false;

            this._processStep(step, err => {
              if (this._task) {
                if (taskid !== undefined && step.desc != undefined) {
                  log("~~~~~ guide step complete " + taskid + "_" + step.desc);
                }

                (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                  error: Error()
                }), EventMgr) : EventMgr).unLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                  error: Error()
                }), LocalEvent) : LocalEvent).CancelRunningGuide, this.triggerTaskError, this);

                try {
                  cb(err);
                } catch (error) {}
              }
            });
          }, error => {
            if (error) {
              if (error instanceof Error) {
                log("task [" + this._task.name + "] error: " + error.message);
              } else {
                log("task [" + this._task.name + "] error: " + error);
              }
            } else {
              log("task [" + this._task.name + "] complete");
            }

            this.clearTask();
            this.touchMask.active = false;

            if (this.finger) {
              this.finger.active = false;
              this._fingerNode = undefined;
              this._fingerRect = undefined;
            }

            if (callback) {
              callback(error);
            }
          });
        }

        resetTouchMaskDebugColor() {
          var isDebug = false; // this.left.getComponent(Sprite).enabled = isDebug;
          // this.right.getComponent(Sprite).enabled = isDebug;
          // this.top.getComponent(Sprite).enabled = isDebug;
          // this.bottom.getComponent(Sprite).enabled = isDebug;
        }

        _processStep(step, callback) {
          var realThis = this;
          realThis.touchMask.active = realThis._task.mask;
          realThis.resetTouchMask();
          async.series({
            //任务开始
            stepStart: cb => {
              realThis.runningCB = cb;

              if (step.onStart) {
                log("step [" + step.desc + "] onStart");
                step.onStart.call(step, cb);
              } else {
                cb();
                realThis.runningCB = null;
              }
            },
            //任务指令
            stepCommand: cb => {
              if (step.skip_cmd) {
                //跳过指令
                cb();
                return;
              }

              realThis.scheduleOnce(() => {
                realThis._processStepCommand(step, cb);
              }, step.delayTime || 0);
            },
            //任务结束
            taskEnd: cb => {
              realThis.runningCB = cb;
              realThis.finger.active = false;
              realThis._fingerNode = undefined;
              realThis._fingerRect = undefined;

              if (step.onEnd) {
                // realThis.log(`step [${step.desc}] onEnd`);
                step.onEnd.call(step, cb);
              } else {
                cb();
                realThis.runningCB = null;
              }
            }
          }, error => {
            realThis.resetTouchMask();

            if (error) {
              log("step [" + step.desc + "] error: " + error);
            } else {
              log("step [" + step.desc + "] complete");
            }

            callback(error);
          });
        }

        resetTouchMask() {
          this.left.setPosition(new Vec3(0, 0, 0));
          this.right.setPosition(new Vec3(0, 0, 0));
          this.top.setPosition(new Vec3(0, 0, 0));
          this.bottom.setPosition(new Vec3(0, 0, 0));
          this.holeMask.node.active = false;
          this.holeMask.enabled = false;
        }
        /**
         * 处理步骤指令
         * @param {*} step 
         * @param {*} cb 
         */


        _processStepCommand(step, cb) {
          log("step [" + step.desc + "] begin");

          if (!!!step.command) {
            //没有command
            cb();
            return;
          }

          if (Array.isArray(step.command)) {
            //并行执行command
            async.each(step.command, (command, callback) => {
              this._processCommand(command.cmd, command.args, callback);
            }, err => {
              if (err) {
                error("step [" + step.desc + "] failed! [" + err + "]");
              } else {
                log("step [" + step.desc + "] complete");
              }

              cb(err);
            });
          } else {
            this._processCommand(step.command.cmd, step.command.args, err => {
              log("step [" + step.desc + "] complete");
              cb(err);
            });
          }
        }

        _processCommand(cmd, args, cb) {
          this.runningCB = cb;
          var cmdFunc = (_crd && GuideCommand === void 0 ? (_reportPossibleCrUseOfGuideCommand({
            error: Error()
          }), GuideCommand) : GuideCommand).getFunc(cmd);

          if (cmdFunc) {
            cmdFunc(this, args, err => {
              this.runningCB = null;
              cb(err);
            });
          } else {
            this.runningCB = null;
            cb(new Error("cmd [" + cmd + "] not exist"));
          }
        }

        find(value, cb) {
          var root = director.getScene();
          (_crd && Locator === void 0 ? (_reportPossibleCrUseOfLocator({
            error: Error()
          }), Locator) : Locator).locateNode(root, value, (error, node) => {
            if (error) {
              cb(null, error); //找不到， 回调错误

              return;
            }

            log('find succeed');
            cb(node);
          });
        }
        /**
         * 手指动画
         */


        fingerToNode(node, fingerActive, holeActive, isCircle, isScale) {
          if (fingerActive === void 0) {
            fingerActive = true;
          }

          if (holeActive === void 0) {
            holeActive = true;
          }

          this._fingerNode = node;
          this.finger.active = fingerActive;
          this.holeMask.node.active = holeActive;
          this.holeMask.enabled = holeActive;

          if (isCircle) {
            this.holeMask.type = Mask.Type.GRAPHICS_ELLIPSE;
          } else {
            this.holeMask.type = Mask.Type.GRAPHICS_RECT;
          }

          this.focusToNode(node, isCircle, isScale);
        }

        focusToNode(node, isCircle, isScale) {
          //设置点击屏蔽遮罩
          var rect = this.GetBoundingBoxToWorld(node);

          if (this._fingerRect && this._fingerRect.equals(rect)) {
            //rect没有发生改变
            return;
          }

          this._fingerRect = rect;

          if (this.finger.active) {
            this.finger.getComponent(Animation).play("guideFinger");
            this.finger.setPosition(this.finger.parent.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(rect.center.x + 60, rect.center.y - 30, 0)));
          }

          var pos = this.touchMask.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(rect.center.x, rect.center.y, 0));

          if (this.holeMask.enabled) {
            this.setHoleMask(pos.x, pos.y, rect.width, rect.height, isCircle, isScale);
          }

          var xLength = rect.width / 2;
          var yLength = rect.height / 2;
          this.left.setPosition(new Vec3(pos.x - xLength, 0, 0));
          this.right.setPosition(new Vec3(pos.x + xLength, 0, 0));
          this.top.setPosition(new Vec3(0, pos.y + yLength, 0));
          this.bottom.setPosition(new Vec3(0, pos.y - yLength, 0));
          console.log(director.getScene());
        }

        setHoleMask(x, y, w, h, isCircle, isScale) {
          this.holeMask.enabled = true;

          if (isCircle) {
            this.holeMask.node.setPosition(new Vec3(x, y + 15, 0));
          } else {
            this.holeMask.node.setPosition(new Vec3(x, y, 0));
          }

          var _h = 0;
          var _w = 0;
          var scaleCount = 1.1;

          if (isScale) {
            scaleCount = isScale;
          }

          if ((_crd && IsInFightScene === void 0 ? (_reportPossibleCrUseOfIsInFightScene({
            error: Error()
          }), IsInFightScene) : IsInFightScene)()) {
            _h = isCircle ? h : h * scaleCount;
            _w = isCircle ? w : w * scaleCount;
          } else {
            _h = h;
            _w = w;
          }

          this.holeMask.node.getComponent(UITransform).setContentSize(_w, _h);
        }
        /**
        * 返回节点在世界坐标系下的对齐轴向的包围盒（AABB）
        * 该边框不包含自身和已激活的子节点的世界边框。
        */


        GetBoundingBoxToWorld(node) {
          var transform = node.getComponent(UITransform);

          if (node.parent) {
            return transform.getBoundingBoxToWorld();
          } else {
            return transform.getBoundingBox();
          }
        }

        JumpGuide() {
          this.CommonTipsPop.node.active = true;
          this.CommonTipsPop.setData((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab("ui_guide_1"));
        }

        clickJumpGuide() {
          (_crd && DisableGuideController === void 0 ? (_reportPossibleCrUseOfDisableGuideController({
            error: Error()
          }), DisableGuideController) : DisableGuideController)();
          (_crd && DisableTouchMask === void 0 ? (_reportPossibleCrUseOfDisableTouchMask({
            error: Error()
          }), DisableTouchMask) : DisableTouchMask)();
          (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.setClientData("guideTrunk", String(500));
          (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.setClientData("equipGuildOver", "true");
          (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.setClientData("jadeGuildOver", "true");
          this.clearTask();

          if (GuideController.ins.dropCount > 1) {
            GuideController.ins.dropCount -= 1;
          } else {
            GuideController.ins.dropCount = 1;
          }

          if ((_crd && IsInFightScene === void 0 ? (_reportPossibleCrUseOfIsInFightScene({
            error: Error()
          }), IsInFightScene) : IsInFightScene)()) {
            (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.pause = false; // EventMgr.emitFight(FightEvent.ReviveByItemid, 1401);
            // EventMgr.emitFight(FightEvent.ReviveByItemid, 1101);
            // EventMgr.emitFight(FightEvent.ReviveByItemid, 1301);
            // EventMgr.emitFight(FightEvent.ReviveByItemid, 1201);
            // EventMgr.emitFight(FightEvent.ReviveByItemid, 1501);
          }
        }

        hideTips() {
          this.CommonTipsPop.node.active = false;
        }

        beginCheckRole(state) {
          if (state && this.roleIdleTimeCount === 0) {
            this.schedule(this.updateCheckRole, 1);
          } else {
            this.stopCheckRole();
          }
        }

        updateCheckRole() {
          if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.pause) {
            this.stopCheckRole();
            return;
          }

          if (!(_crd && IsInFightScene === void 0 ? (_reportPossibleCrUseOfIsInFightScene({
            error: Error()
          }), IsInFightScene) : IsInFightScene)()) {
            this.stopCheckRole();
            return;
          }

          if (this.JadeTimeCount >= 5) {
            this.stopCheckRole();
            return;
          }

          if (this.roleIdleTimeCount >= 3) {
            if (this.roleIdleTimeCount === 3) {
              if (!this.finger.active) {
                this.searchFingerNode('FightRootView/rootNode/objects/Monster');
              }
            }
          } else {
            this.roleIdleTimeCount++;
          }
        }

        stopCheckRole() {
          this.roleIdleTimeCount = 0;

          if (this.finger.active && !this.touchMask.active && this.JadeTimeCount < 5) {
            this.finger.active = false;
            this._fingerNode = undefined;
            this._fingerRect = undefined;
          }

          this.unschedule(this.updateCheckRole);
        } // 开始每秒检测小手


        beginCheckJade() {
          if (this.JadeTimeCount === 0) {
            this.schedule(this.updateCheckJade, 1);
          }
        }

        updateCheckJade() {
          if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.pause) {
            this.stopCheckJade();
            return;
          }

          if (!(_crd && IsInFightScene === void 0 ? (_reportPossibleCrUseOfIsInFightScene({
            error: Error()
          }), IsInFightScene) : IsInFightScene)()) {
            this.stopCheckJade();
            return;
          }

          if (this.JadeTimeCount >= 5) {
            if (this.JadeTimeCount === 5) {
              if (!this.touchMask.active) {
                this.searchFingerNode('FightRootView/rootNode/dropNode/dropNode');
              }
            }
          } else {
            this.JadeTimeCount++;
          }
        } // 停止检测小手


        stopCheckJade() {
          this.JadeTimeCount = 0;

          if (this.finger.active && !this.touchMask.active) {
            this.finger.active = false;
            this._fingerNode = undefined;
            this._fingerRect = undefined;
          }

          this.unschedule(this.updateCheckJade);
        }

        searchFingerNode(args) {
          this.find(args, (node, error) => {
            if (error) {
              return;
            }

            this.fingerToNode(node, true, false, false);
          });
        }

        onDestroy() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).unLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).JadeDropFinger);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).unLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).roleIdleState);
        }

      }, _class3._ins = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "touchMask", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "left", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "right", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "top", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bottom", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "holeMask", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "finger", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "CommonTipsPop", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "node_jump", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "node_create_bullet", [_dec11], {
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
//# sourceMappingURL=603b314c9602af0bff32ac9cc6f6184504edff21.js.map