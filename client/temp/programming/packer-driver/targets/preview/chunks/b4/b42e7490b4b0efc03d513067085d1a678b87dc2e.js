System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, AudioSource, AudioClip, director, NodePool, tab, Func, LoadResAsync, Sound, _crd, BGMFlag, SEFlag;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function PlaySound(key) {
    var soundTD = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
      error: Error()
    }), tab) : tab).getData().SoundTableById.getValue(key);

    if (soundTD.Type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
      error: Error()
    }), tab) : tab).SoundType.SoundType_Music) {
      Sound.ins.StopBGM();
      return Sound.ins.Play(key);
    } else {
      return Sound.ins.PlayHitEffect(key);
    }
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "./Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadResAsync(extras) {
    _reporterNs.report("LoadResAsync", "../mgr/ResMgr", _context.meta, extras);
  }

  _export({
    PlaySound: PlaySound,
    default: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      AudioSource = _cc.AudioSource;
      AudioClip = _cc.AudioClip;
      director = _cc.director;
      NodePool = _cc.NodePool;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      Func = _unresolved_3.Func;
    }, function (_unresolved_4) {
      LoadResAsync = _unresolved_4.LoadResAsync;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8156cwSuK1G1qBXh75GskdF", "Sound", undefined);
      /*
       * @Date: 2024-04-19 15:09:14
       * @LastEditors: wzq
       * @LastEditTime: 2024-07-15 18:24:10
       */
      //Sound.ts


      __checkObsolete__(['Node', 'AudioSource', 'AudioClip', 'director', 'NodePool', 'Asset']);

      BGMFlag = "bgm_flag";
      SEFlag = "se_flag";

      _export("default", Sound = class Sound {
        static get ins() {
          if (this._ins == null) {
            this._ins = new Sound();
          }

          return this._ins;
        }

        constructor() {
          this._audioEffectPool = void 0;
          this.curAudioBGM = void 0;
          //BGM组件
          this.m_fVolumeBGM = void 0;
          this.m_fVolumeSount = void 0;
          this.m_iBgmId = void 0;
          this.m_iBgmFile = void 0;
          this._autoID = 0;
          this._idMap = void 0;
          //<自增id，AudioID>
          this._overlap = void 0;
          this._idHitMap = void 0;
          this.enableBGM = true;
          this.enableSE = true;
          this.main_bgm = void 0;
          this.battle_bgm = void 0;
          this.soundEffectParentNode = null;
          //@en create a node as audioMgr
          //@zh 创建一个节点作为 audioMgr
          var Sound = new Node();
          Sound.name = '__Sound__'; //@en add to the scene.
          //@zh 添加节点到场景

          director.getScene().addChild(Sound); //@en make it as a persistent node, so it won't be destroied when scene change.
          //@zh 标记为常驻节点，这样场景切换的时候就不会被销毁了

          director.addPersistRootNode(Sound); //@en add AudioSource componrnt to play audios.
          //@zh 添加 AudioSource 组件，用于播放音频。

          this.curAudioBGM = Sound.addComponent(AudioSource);
          this.curAudioBGM.loop = true;
          this.soundEffectParentNode = new Node("SoundEffectParentNode");
          Sound.addChild(this.soundEffectParentNode);
          this._idMap = new (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Dictionary();
          this._overlap = new (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Dictionary();
          this._idHitMap = new (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Dictionary();
          var bgmFlag = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).getItem(BGMFlag);
          this.EnableBGM(bgmFlag !== "false");
          var seFlag = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).getItem(SEFlag);
          this.EnableSE(seFlag !== "false");
          this._audioEffectPool = new NodePool();
        }

        loadBgm() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.main_bgm = yield (_crd && LoadResAsync === void 0 ? (_reportPossibleCrUseOfLoadResAsync({
              error: Error()
            }), LoadResAsync) : LoadResAsync)('sound/main', AudioClip);
            _this.battle_bgm = yield (_crd && LoadResAsync === void 0 ? (_reportPossibleCrUseOfLoadResAsync({
              error: Error()
            }), LoadResAsync) : LoadResAsync)('sound/battle_main', AudioClip);

            _this.addRef(_this.main_bgm);

            _this.addRef(_this.battle_bgm);
          })();
        }

        addRef(ass) {
          if (ass) {
            ass.addRef();
          }
        }

        Play(key, finishCallback) {
          if (!key) {
            return;
          }

          if ((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData() == null) {
            return;
          }

          if (!this.curAudioBGM) {
            console.error("audioSource is null");
          }

          var soundTD = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().SoundTableById.getValue(key);

          if (!soundTD) {
            console.error("cannot found sound:" + key);
            return undefined;
          } // let bgmFlag = Func.getItem(BGMFlag)


          if (!this.enableBGM && soundTD.Type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).SoundType.SoundType_Music // &&bgmFlag == "false"
          ) {
            return undefined;
          }

          if (soundTD.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).SoundType.SoundType_Music) {
            if (this.m_iBgmFile == soundTD.Path) {
              console.warn("同一个背景音乐-不播放");
              return undefined;
            }
          }

          var id = ++this._autoID;
          var audioID = 0;

          if (soundTD.Id === 1) {
            audioID = this.playClip(this.main_bgm, soundTD);
          } else if (soundTD.Id === 2) {
            audioID = this.playClip(this.battle_bgm, soundTD);
          }

          this._idMap.setValue(id, audioID);

          return id;
        }

        PlayHitEffect(key, finishCallback) {
          if (!key) {
            return undefined;
          }

          var soundTD = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().SoundTableById.getValue(key);

          if (!soundTD) {
            console.error("cannot found sound:" + key);
            return undefined;
          } // let seFlag = Func.getItem(SEFlag)


          if (!this.enableSE && soundTD.Type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).SoundType.SoundType_SoundEffect // &&seFlag == "false"
          ) {
            return undefined;
          }

          var id = this._idHitMap.getValue(key);

          if (id > 3) {
            return undefined; //已经不需要播放了
          }

          if (id) {
            id++;

            this._idHitMap.setValue(key, id);
          } else {
            id = 1;

            this._idHitMap.setValue(key, id);
          }

          (_crd && LoadResAsync === void 0 ? (_reportPossibleCrUseOfLoadResAsync({
            error: Error()
          }), LoadResAsync) : LoadResAsync)(soundTD.Path, AudioClip).then(audioClip => {
            this.playClip(audioClip, soundTD);
          });
          return id;
        }

        playClip(audioClip, soundTD) {
          var soundId = soundTD.Id;

          switch (soundTD.Type) {
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).SoundType.SoundType_SoundEffect:
              {
                var audioSourceNode = this._audioEffectPool.get();

                if (!audioSourceNode) {
                  audioSourceNode = new Node();
                  audioSourceNode.addComponent(AudioSource);
                  this.soundEffectParentNode.addChild(audioSourceNode);
                }

                var audioSource = audioSourceNode.getComponent(AudioSource);
                audioSource.clip = audioClip;
                audioSource.play();
                audioSourceNode.off(AudioSource.EventType.ENDED);
                audioSourceNode.on(AudioSource.EventType.ENDED, () => {
                  this._idHitMap.setValue(soundId, this._idHitMap.getValue(soundId) - 1);

                  this._audioEffectPool.put(audioSourceNode);
                });
                break;
              }

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).SoundType.SoundType_Music:
              {
                //背景音乐
                this.curAudioBGM.clip = audioClip;
                this.curAudioBGM.play();
                this.curAudioBGM.loop = soundTD.Loop;
                this.m_iBgmFile = soundTD.Path;
                this.m_iBgmId = soundId;
                this.curAudioBGM.volume = soundTD.volume / 100;
                break;
              }
          }

          return soundId;
        }
        /**
         * stop the audio play
         */


        stop(id) {
          var audioID = this._idMap.getValue(id);

          if (audioID !== undefined) {
            this.curAudioBGM.stop();

            this._idMap.remove(id);
          }
        }
        /**
         * pause the audio play
         */


        pause() {
          this.curAudioBGM.pause();
        }
        /**
         * resume the audio play
         */


        resume() {
          this.curAudioBGM.play();
        }

        destroyFightEffect() {
          this.soundEffectParentNode.destroyAllChildren();

          this._audioEffectPool.clear();
        }

        StopAllSE() {
          this._idMap.clear();

          this._overlap.clear();
        }

        StopBGM() {
          this.m_iBgmFile = null;
          this.m_iBgmId = 0;
          this.curAudioBGM.stop();
          this.curAudioBGM.clip = null;
        }

        EnableBGM(enable) {
          if (!enable) {
            this.StopBGM();
          }

          this.enableBGM = enable; // if (save) {
          //     Func.setItem(BGMFlag, enable ? "true" : "false")
          // }
        }

        EnableSE(enable) {
          if (!enable) {
            this.StopAllSE();
          }

          this.enableSE = enable; // if (save) {
          //     Func.setItem(SEFlag, enable ? "true" : "false")
          // }
        }

        isEnableBGM() {
          return this.enableBGM;
        }

        isEnableSE() {
          return this.enableSE;
        }

      });

      Sound._ins = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b42e7490b4b0efc03d513067085d1a678b87dc2e.js.map