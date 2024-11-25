System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "cc/env", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, Component, Layers, Material, Node, Sprite, SpriteAtlas, UIOpacity, UITransform, Vec3, sp, tab, ResMgr, ShaderUtil, JSB, FightData, FightMacro, FPSAvatar, Avatar, _crd, tempPos, tempPos1, color;

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIReset(extras) {
    _reporterNs.report("IReset", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../mgr/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShaderUtil(extras) {
    _reporterNs.report("ShaderUtil", "../../utils/ShaderUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMacro(extras) {
    _reporterNs.report("FightMacro", "../define/FightDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFPSAvatar(extras) {
    _reporterNs.report("FPSAvatar", "./FPSAvatar", _context.meta, extras);
  }

  _export("Avatar", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
      Component = _cc.Component;
      Layers = _cc.Layers;
      Material = _cc.Material;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteAtlas = _cc.SpriteAtlas;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      ResMgr = _unresolved_3.ResMgr;
    }, function (_unresolved_4) {
      ShaderUtil = _unresolved_4.ShaderUtil;
    }, function (_ccEnv) {
      JSB = _ccEnv.JSB;
    }, function (_unresolved_5) {
      FightData = _unresolved_5.FightData;
    }, function (_unresolved_6) {
      FightMacro = _unresolved_6.FightMacro;
    }, function (_unresolved_7) {
      FPSAvatar = _unresolved_7.FPSAvatar;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "99fe6ZKt25DHaERGuWtamto", "Avatar", undefined);

      __checkObsolete__(['Animation', 'AnimationClip', 'Color', 'Component', 'Layers', 'Material', 'Node', 'Pool', 'Sorting', 'Sprite', 'SpriteAtlas', 'SpriteFrame', 'UIOpacity', 'UITransform', 'Vec3', 'View', 'animation', 'game', 'path', 'size', 'sp', 'v2', 'v3', 'view']);

      tempPos = new Vec3(0, 0, 0);
      tempPos1 = new Vec3(0, 0, 1);
      color = new Color();

      _export("Avatar", Avatar = class Avatar extends Component {
        constructor() {
          super(...arguments);
          this.animationId = void 0;
          this.animTab = void 0;
          this.sprite = void 0;
          this.fpsAvatar = void 0;
          this.spine = void 0;
          this.callack = void 0;
          this.flashWhite = false;
          this.isPause = false;
          this.baseSpeedScale = 1;
          this.otherSpeedScale = 1;
          this.totalTimeScale = 1;
          this._selfId = void 0;
          this.animationSprMaterial = void 0;
          this.testTime = 0;
          this.testTime1 = 0;
          this.isUpdate = void 0;
          this.time = void 0;
          this.endTime = void 0;
          this.socketsPathV3Map = new Map();
        }

        static create() {
          var anim = Avatar.avatars.pop();

          if (anim == null) {
            var nn = new Node("Avatar");
            anim = nn.addComponent(Avatar);
            this.selfId += 1;
            anim._selfId = this.selfId;
          }

          anim.node.layer = Layers.Enum.DEFAULT;
          anim.setFlashWhite(false);
          return anim;
        }

        static put(anim) {
          anim.node.removeFromParent();
          anim.reset();
          Avatar.avatars.push(anim);
        }

        static getSpriteWhiteMaterial() {
          return (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).get((_crd && ShaderUtil === void 0 ? (_reportPossibleCrUseOfShaderUtil({
            error: Error()
          }), ShaderUtil) : ShaderUtil).flashWhiteSprite(), Material);
        }

        static getSpineWhiteMaterial() {
          return (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).get((_crd && ShaderUtil === void 0 ? (_reportPossibleCrUseOfShaderUtil({
            error: Error()
          }), ShaderUtil) : ShaderUtil).flashWhiteSpine(), Material);
        }
        /** 销毁 */


        static destory() {
          for (var i = 0; i < Avatar.avatars.length; i++) {
            Avatar.avatars[i].reset();
            Avatar.avatars[i].node.destroy();
          }

          Avatar.avatars.length = 0;
          Avatar.renderClear();
        }

        recycle() {
          Avatar.put(this);
        }

        reset() {
          if (this.sprite) {
            Avatar.putRender((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AnimationType.AnimationType_SpriteFrame, this.animTab.Path, this.sprite);
            this.sprite = null;
          }

          if (this.fpsAvatar) {
            this.fpsAvatar.timeScale = 1;
            this.fpsAvatar.spr.customMaterial = null;
            this.animationSprMaterial = null;
            Avatar.putRender((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AnimationType.AnimationType_Plist, this.animTab.Path, this.fpsAvatar);
            this.fpsAvatar = null;
          }

          if (this.spine) {
            this.spine.timeScale = 1;
            this.spine.customMaterial = null;
            Avatar.putRender((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AnimationType.AnimationType_SkeletonData, this.animTab.Path, this.spine);
            this.spine = null;
          }

          if (this.socketsPathV3Map) {
            this.socketsPathV3Map.clear();
          }

          if (this.node.children.length) {
            console.log("多个---");
          }

          var ui = this.node.getComponent(UIOpacity);

          if (ui) {
            ui.opacity = 255;
          }

          this.animTab = null;
          this.animationId = 0;
          this.isUpdate = false;
          this.isPause = false;
          this.time = 0;
          this.endTime = 0;
          this.baseSpeedScale = 1;
          this.otherSpeedScale = 1;
        }

        setCb(cb) {
          this.callack = cb;
        }

        setFlashWhite(bo) {
          this.flashWhite = bo;
        }

        setAnimationId(id) {
          var tempTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().AnimationTableById.getValue(id);

          if (tempTab == null) {
            console.error("找不到AnimationId", id);
            return;
          }

          var isLoad = false;

          if (this.animTab == null || this.animTab && this.animTab.Path != tempTab.Path) {
            // 换资源
            this.reset();
            isLoad = true;
          }

          tempPos.x = tempPos.y = tempPos.z = 0;
          this.node.position = tempPos;
          this.animationId = id;
          this.animTab = tempTab;
          this.otherSpeedScale = 1;

          if (isLoad) {
            this.load();
          }

          this.play();
          this.setFlashWhiteRate(1);
        }

        setOtherSpeedScale(speedScale) {
          this.otherSpeedScale = 1 + speedScale / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT; // console.log("设置攻击速度", this.otherSpeedScale)

          this.updateTimeScale();
        }

        updatePause(pause) {
          this.isPause = pause;

          if (this.fpsAvatar) {
            if (pause) {
              this.fpsAvatar.pause();
            } else {
              this.fpsAvatar.resume();
            }
          }

          if (this.spine) {
            this.spine.paused = pause;
          }
        }

        updateTimeScale() {
          this.totalTimeScale = this.otherSpeedScale * this.baseSpeedScale * (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.timeScale;

          if (this.spine) {
            this.spine.timeScale = this.totalTimeScale;
          } else if (this.fpsAvatar) {
            this.fpsAvatar.timeScale = this.totalTimeScale;
          } // console.log(this.totalTimeScale, this.otherSpeedScale, this.baseSpeedScale, FightData.ins.timeScale)

        }

        setOpaticy(opacity) {
          var ui = this.node.getComponent(UIOpacity);

          if (ui == null) {
            ui = this.node.addComponent(UIOpacity);
          }

          ui.opacity = opacity;
        }

        setFlashWhiteRate(rate) {
          if (!this.flashWhite) {
            return;
          }

          if (this.sprite) {
            if (this.animationSprMaterial == null) {
              this.animationSprMaterial = this.sprite.getMaterialInstance(0);
            }

            this.animationSprMaterial.setProperty('u_rate', rate);
          } else if (this.spine) {
            if (this.spine.skeletonData == null) {
              return;
            }

            if (JSB) {
              this.spine.getSharedMaterial(0).setProperty("u_rate", rate); // @ts-ignore 

              this.spine.updateMaterial();
            } else {
              // @ts-ignore 
              var cache = this.spine._materialCache;

              for (var i in cache) {
                var material = cache[i];
                material.setProperty("u_rate", rate);
              } // @ts-ignore 
              // this.spine.updateMaterial();

            }
          } else if (this.fpsAvatar) {
            if (this.animationSprMaterial == null) {
              this.animationSprMaterial = this.fpsAvatar.spr.getMaterialInstance(0);
            }

            this.animationSprMaterial.setProperty('u_rate', rate);
          }
        }

        avatarPlayComplete(animName) {
          if (this.animTab && this.animTab.NextAnimation) {
            this.setAnimationId(this.animTab.NextAnimation);
            return;
          }

          this.callack && this.callack(animName);
        }

        getPlayTime() {
          switch (this.animTab.Type) {
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AnimationType.AnimationType_SkeletonData:
              return this.animTab.FrameCount / 30;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AnimationType.AnimationType_Plist:
              return this.animTab.FrameCount / (this.animTab.FPS || 10);
          }

          return 0;
        }

        play() {
          this.isUpdate = false;
          this.testTime = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).time;
          this.testTime1 = new Date().getTime();

          switch (this.animTab.Type) {
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AnimationType.AnimationType_SkeletonData:
              this.endTime = this.getPlayTime();
              this.baseSpeedScale = (this.animTab.AnimationSpeed || (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
                error: Error()
              }), FightMacro) : FightMacro).PERCENT) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
                error: Error()
              }), FightMacro) : FightMacro).PERCENT;
              this.updateTimeScale();

              if (this.spine.skeletonData && this.spine.animation != this.animTab.AnimationName) {
                this.spine.setAnimation(0, this.animTab.AnimationName, this.animTab.Loop);
              }

              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AnimationType.AnimationType_Plist:
              this.updateNodeScale();
              this.baseSpeedScale = (this.animTab.AnimationSpeed || (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
                error: Error()
              }), FightMacro) : FightMacro).PERCENT) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
                error: Error()
              }), FightMacro) : FightMacro).PERCENT;
              this.endTime = this.getPlayTime();
              this.updateTimeScale();

              if (!this.animTab["newName"]) {
                this.animTab["newName"] = this.animTab.AnimationName == "" ? this.animTab.Path : this.animTab.AnimationName;
              }

              if (this.fpsAvatar.actionName != this.animTab["newName"]) {
                var atlast = (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).get(this.animTab.Path, SpriteAtlas);

                if (atlast) {
                  this.fpsAvatar.createWithSpriteFrames(Avatar.setPlistArray(atlast, this.animTab), this.animTab.FPS);
                }
              }

              if (this.fpsAvatar.hasImage()) {
                this.fpsAvatar.actionName = this.animTab["newName"];

                if (this.fpsAvatar.actionName == undefined) {}

                this.fpsAvatar.play(this.animTab.Loop);
              }

              break;

            default:
              return;
          }

          if (this.animTab.Loop) {
            return;
          }

          this.time = 0;
          this.isUpdate = true; //开始计时
        }

        update(dt) {
          if (!this.isPause && this.isUpdate) {
            this.time += dt * this.totalTimeScale;

            if (this.time >= this.endTime) {
              this.time -= this.endTime; // this.endTime = 0

              this.isUpdate = false;
              this.avatarPlayComplete(this.animTab.AnimationName);
            }
          }
        }

        updateNodeScale() {
          tempPos.x = this.animTab.Offset[0] || 0;
          tempPos.y = this.animTab.Offset[1] || 0;
          tempPos1.x = (this.animTab.Scale[0] || (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT;
          tempPos1.y = (this.animTab.Scale[1] || (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT;

          if (this.fpsAvatar) {
            this.fpsAvatar.node.position = tempPos;
            this.fpsAvatar.node.scale = tempPos1;
          }

          if (this.sprite) {
            this.sprite.node.position = tempPos;
            this.sprite.node.scale = tempPos1;
          }

          if (this.spine) {
            this.spine.node.position = tempPos;
            this.spine.node.scale = tempPos1;
          }
        }

        load() {
          tempPos.x = this.animTab.Offset[0] || 0;
          tempPos.y = this.animTab.Offset[1] || 0;
          tempPos1.x = (this.animTab.Scale[0] || (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT;
          tempPos1.y = (this.animTab.Scale[1] || (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT;

          switch (this.animTab.Type) {
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AnimationType.AnimationType_SpriteFrame:
              this.loadSprite();
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AnimationType.AnimationType_SkeletonData:
              this.loadSpine();
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AnimationType.AnimationType_AnimationClip:
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AnimationType.AnimationType_Plist:
              this.loadPlist();
              break;
          }
        }

        loadSprite() {
          this.sprite = Avatar.getRender((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AnimationType.AnimationType_SpriteFrame);
          this.node.addChild(this.sprite.node);
          this.sprite.setTexture(this.animTab.Path);
          this.sprite.node.position = tempPos;
          this.sprite.node.scale = tempPos1;
        }

        getSprite() {
          return this.sprite;
        }

        loadSpine() {
          var animId = this.animationId;
          this.spine = Avatar.getRender((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AnimationType.AnimationType_SkeletonData);
          this.spine.skeletonData = (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).get(this.animTab.Path, sp.SkeletonData);

          if (this.spine.skeletonData == null) {
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).load(this.animTab.Path, sp.SkeletonData, null, (err, resource) => {
              if (err) {
                console.error(err);
                return;
              }

              if (animId != this.animationId) {
                return;
              }

              this.spine.skeletonData = resource;
              this.spine.setAnimation(0, this.animTab.AnimationName, this.animTab.Loop);
            });
          }

          this.node.addChild(this.spine.node);
          this.updateNodeScale();
          this.spine.premultipliedAlpha = false;
          this.spine.enableBatch = true;

          if (this.flashWhite) {
            this.spine.customMaterial = Avatar.getSpineWhiteMaterial();
          }
        }

        loadPlist() {
          this.animTab.FPS = this.animTab.FPS || 30;
          this.fpsAvatar = Avatar.getRender((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AnimationType.AnimationType_Plist, this.animTab.Path);
          this.node.addChild(this.fpsAvatar.node);

          if (this.flashWhite) {
            this.fpsAvatar.spr.customMaterial = Avatar.getSpriteWhiteMaterial();
          }

          var atlast = (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).get(this.animTab.Path, SpriteAtlas);

          if (atlast == null) {
            var animId = this.animationId;
            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).load(this.animTab.Path, SpriteAtlas, null, (err, resource) => {
              if (err) {
                console.error(err);
                return;
              }

              if (animId != this.animationId) {
                if (this.animationId && this.animTab.Path == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).getData().AnimationTableById.getValue(animId).Path) {// console.log("换id后， 还是同一份资源")
                } else {
                  return;
                }
              }

              this.updateNodeScale();
              this.fpsAvatar.createWithSpriteFrames(Avatar.setPlistArray(resource, this.animTab), this.animTab.FPS);
              this.fpsAvatar.actionName = this.animTab["newName"];
              this.fpsAvatar.play(this.animTab.Loop);
            });
          } else {
            this.updateNodeScale();
            this.fpsAvatar.actionName = this.animTab["newName"];
            this.fpsAvatar.createWithSpriteFrames(Avatar.setPlistArray(atlast, this.animTab), this.animTab.FPS);
          }
        }

        getSpineBonePos(path) {
          if (this.spine && this.spine._skeleton) {
            if (this.socketsPathV3Map == null) {
              this.socketsPathV3Map = new Map();
            }

            var bone = this.socketsPathV3Map.get(path);

            if (bone) {
              return bone;
            }

            if (JSB) {
              bone = this.spine._skeleton.bones[this.spine["_cachedSockets"].get(path)];
            } else {
              bone = this.spine._skeleton.bones[this.spine["_cachedSockets"].get(path)];
            }

            this.socketsPathV3Map.set(path, bone);
            return bone;
          }

          return null;
        }

        //plist缓存池
        static getPlistArray(animTab) {
          var key = animTab.AnimationName == "" ? animTab.Path : animTab.AnimationName;

          if (Avatar.plistSfs.has(key)) {
            return Avatar.plistSfs.get(key);
          }

          return null;
        }

        static setPlistArray(atlas, animTab) {
          var hasList = Avatar.getPlistArray(animTab);

          if (Avatar.getPlistArray(animTab)) {
            return hasList;
          }

          var list = atlas.getSpriteFrames();

          if (animTab.AnimationName == "") {
            Avatar.plistSfs.set(animTab.Path, list);
            return list;
          }

          var newList = [];
          var validIndex = 0;

          for (var index = 0; index < list.length; index++) {
            var v = list[index];
            var key = void 0;

            if (animTab.FrameCount < 10) {
              key = validIndex.toString();
            } else {
              key = Avatar.getNum(validIndex);
            }

            if (v.name == animTab.AnimationName + "_" + key) {
              newList.push(v);
              validIndex += 1;
            }
          }

          if (newList.length == 0) {
            newList = list;
          }

          Avatar.plistSfs.set(animTab.AnimationName, newList);
          return newList;
        }

        static getNum(num) {
          if (num < 10) {
            return "0" + num;
          }

          return num.toString();
        }

        static getRender(type, path, fb) {
          switch (type) {
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AnimationType.AnimationType_SpriteFrame:
              var spr = Avatar.sprites.pop();

              if (spr == null) {
                spr = Avatar.createNode().addComponent(Sprite);
                spr.trim = false;
                spr.sizeMode = Sprite.SizeMode.RAW;
              }

              spr.sizeMode = Sprite.SizeMode.RAW;
              spr.customMaterial = null;

              if (path) {
                spr.setTexture(path);
              }

              return spr;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AnimationType.AnimationType_SkeletonData:
              var _spine2 = Avatar.createNode().addComponent(sp.Skeleton);

              return _spine2;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AnimationType.AnimationType_Plist:
              var fpsAni = Avatar.fpsAnims.pop();

              if (fpsAni == null) {
                fpsAni = (_crd && FPSAvatar === void 0 ? (_reportPossibleCrUseOfFPSAvatar({
                  error: Error()
                }), FPSAvatar) : FPSAvatar).get();
              }

              fpsAni.setSprite(Avatar.getRender((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AnimationType.AnimationType_SpriteFrame));
              fpsAni.timeScale = 1;
              return fpsAni;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AnimationType.AnimationType_AnimationClip:
              break;
          }
        }

        static putRender(type, path, render) {
          render.parent = null;

          switch (type) {
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AnimationType.AnimationType_SpriteFrame:
              render.setTexture("");
              render.node.removeFromParent();
              Avatar.sprites.push(render);
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AnimationType.AnimationType_SkeletonData:
              var _spine = render;

              _spine.setCompleteListener(null);

              _spine.skeletonData = null;

              _spine.clearAnimations();

              _spine.clearTracks();

              _spine.node.removeFromParent();

              Avatar.spines.push(render);
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AnimationType.AnimationType_Plist:
              var _animation = render;

              _animation.stop();

              if (_animation.spr) {
                Avatar.putRender((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).AnimationType.AnimationType_SpriteFrame, path, _animation.spr);
              }

              _animation.reset();

              _animation.node.removeFromParent();

              Avatar.fpsAnims.push(render);
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AnimationType.AnimationType_AnimationClip:
              break;
          }
        }

        static createNode() {
          var nn = new Node("anim_node");
          nn.layer = Layers.Enum.DEFAULT;
          nn.addComponent(UITransform);
          return nn;
        }

        static renderClear() {
          Avatar.sprites.forEach(sp => {
            sp.node.destroy();
          });
          Avatar.spines.forEach(sp => {
            sp.node.destroy();
          });
          Avatar.fpsAnims.forEach(animation => {
            animation.node.destroy();
          });
          Avatar.spines.length = 0;
          Avatar.fpsAnims.length = 0;
          Avatar.plistSfs.clear();
          Avatar.sprites.length = 0;
          Avatar.selfId = 0;
        }

      });

      Avatar.avatars = [];
      Avatar.selfId = 0;
      Avatar.spines = [];
      //骨骼动画缓存池
      Avatar.sprites = [];
      //精灵缓存池
      Avatar.fpsAnims = [];
      //动画  
      Avatar.plistSfs = new Map();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=45e59297c373a8d0f7a1eba0b9bf317aa0c8438e.js.map