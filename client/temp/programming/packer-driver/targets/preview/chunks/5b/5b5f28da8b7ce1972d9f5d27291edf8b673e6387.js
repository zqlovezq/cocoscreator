System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AudioClip, AudioSource, Component, Node, RichText, Sprite, Vec3, EventMgr, LocalEvent, tab, LangMgr, LoadResAsync, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, GuideDialogue;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadResAsync(extras) {
    _reporterNs.report("LoadResAsync", "../mgr/ResMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      Component = _cc.Component;
      Node = _cc.Node;
      RichText = _cc.RichText;
      Sprite = _cc.Sprite;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.EventMgr;
    }, function (_unresolved_3) {
      LocalEvent = _unresolved_3.LocalEvent;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      LangMgr = _unresolved_5.LangMgr;
    }, function (_unresolved_6) {
      LoadResAsync = _unresolved_6.LoadResAsync;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f045dLHq2JIwYX3hbPbhK6w", "GuideDialogue", undefined);

      __checkObsolete__(['_decorator', 'AudioClip', 'AudioSource', 'Component', 'Node', 'RichText', 'Sprite', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GuideDialogue", GuideDialogue = (_dec = ccclass('GuideDialogue'), _dec2 = property(Node), _dec3 = property(AudioSource), _dec(_class = (_class2 = class GuideDialogue extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "node_block", _descriptor, this);

          _initializerDefineProperty(this, "guide_audio", _descriptor2, this);

          this.m_HideCallback = void 0;
          this.m_AutoHide = true;
          this.soundId = 0;
          this.canHide = false;
        }

        start() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).HideDialogue, () => {
            this.hide();
          }, this);
        }

        setDialogude(id, callback) {
          var self = this;
          this.canHide = true;

          if (callback) {
            this.node.on(Node.EventType.TOUCH_START, event => {
              this.hide();
            }, this);
          } else {
            this.node.targetOff(this.node);
          } // 通过id获取tab列表


          var dialogueTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GuideDialogueTableById.getValue(id);
          this.m_HideCallback = callback;
          var leftNode = this.node.getChildByName("left_node");
          var rightNode = this.node.getChildByName("right_node");
          leftNode.active = false;
          rightNode.active = false;
          var showNode = dialogueTab.IsLeft ? leftNode : rightNode;
          this.node_block.active = false;
          var pos = showNode.getPosition();
          showNode.setPosition(new Vec3(pos.x + dialogueTab.PosX, pos.y + dialogueTab.PosY, 0));
          showNode.active = true;
          var richTextLbl = showNode.getChildByName("bg").getChildByName("RichText").getComponent(RichText);
          richTextLbl.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(id);
          showNode.getChildByName("img").getComponent(Sprite).setTexture(dialogueTab.Head);

          if (dialogueTab.Sound) {
            var soundTD = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().SoundTableById.getValue(dialogueTab.Sound);

            if (!soundTD) {
              console.error("cannot found sound:" + dialogueTab.Sound);
              return undefined;
            }

            if (soundTD.Path) {
              (_crd && LoadResAsync === void 0 ? (_reportPossibleCrUseOfLoadResAsync({
                error: Error()
              }), LoadResAsync) : LoadResAsync)(soundTD.Path, AudioClip).then(audioClip => {
                if (self.canHide) {
                  this.guide_audio.clip = audioClip;
                  this.guide_audio.play();
                }
              });
            }
          }
        }

        hide() {
          this.canHide = false;
          this.guide_audio.stop();
          this.DoCallback();
          this.node.removeFromParent();
          this.node.destroy();
        }

        DoCallback() {
          if (this.m_HideCallback) {
            var callback = this.m_HideCallback;
            this.m_HideCallback = null;
            callback();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_block", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "guide_audio", [_dec3], {
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
//# sourceMappingURL=5b5f28da8b7ce1972d9f5d27291edf8b673e6387.js.map