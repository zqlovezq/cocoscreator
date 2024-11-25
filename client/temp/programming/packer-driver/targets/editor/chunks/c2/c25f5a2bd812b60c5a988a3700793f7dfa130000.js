System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, game, Label, native, ProgressBar, Global, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, UpdateView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGlobal(extras) {
    _reporterNs.report("Global", "./Global", _context.meta, extras);
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
      game = _cc.game;
      Label = _cc.Label;
      native = _cc.native;
      ProgressBar = _cc.ProgressBar;
    }, function (_unresolved_2) {
      Global = _unresolved_2.Global;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2873dj42A9E1YCzH6W0vcLX", "UpdateView", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'BlockInputEvents', 'Button', 'Color', 'Component', 'director', 'game', 'instantiate', 'Label', 'Layers', 'native', 'Node', 'Prefab', 'ProgressBar', 'ResolutionPolicy', 'Sprite', 'tween', 'UITransform', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UpdateView", UpdateView = (_dec = ccclass('UpdateView'), _dec2 = property(ProgressBar), _dec3 = property(Label), _dec4 = property(Label), _dec(_class = (_class2 = class UpdateView extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bar", _descriptor, this);

          _initializerDefineProperty(this, "lab", _descriptor2, this);

          _initializerDefineProperty(this, "verLab", _descriptor3, this);

          this._updating = false;
          this._canRetry = false;
          this._storagePath = '';
          this._am = null;
          this._checkListener = null;
          this._updateListener = null;
          this._failCount = 0;
          this.versionCompareHandle = null;
          this.cb = void 0;
        }

        onLoad() {
          this.verLab.string = "";
        }

        setCb(_cb) {
          this.cb = _cb;
        }

        check() {
          this.loadUpdate();
        }

        loadUpdate() {
          this._storagePath = (native.fileUtils ? native.fileUtils.getWritablePath() : '/') + 'newUpdate';
          console.log('Storage path for remote asset : ' + this._storagePath);
          console.log("当前搜索路径", native.fileUtils.getSearchPaths()); // // Setup your own version compare handler, versionA and B is versions in string
          // // if the return value greater than 0, versionA is greater than B,
          // // if the return value equals 0, versionA equals to B,
          // // if the return value smaller than 0, versionA is smaller than B.

          this.versionCompareHandle = function (versionA, versionB) {
            console.log("JS Custom Version Compare: version A is " + versionA + ', version B is ' + versionB);
            var vA = versionA.split('.');
            var vB = versionB.split('.');

            for (var i = 0; i < vA.length; ++i) {
              var a = parseInt(vA[i]);
              var b = parseInt(vB[i] || '0');

              if (a === b) {
                continue;
              } else {
                return a - b;
              }
            }

            if (vB.length > vA.length) {
              return -1;
            } else {
              return 0;
            }
          }; // // Init with empty manifest url for testing custom manifest


          this._am = new native.AssetsManager('version/project.manifest', this._storagePath, this.versionCompareHandle); // // Setup the verification callback, but we don't have md5 check function yet, so only print some message
          // // Return true if the verification passed, otherwise return false

          this._am.setVerifyCallback(function (path, asset) {
            // // When asset is compressed, we don't need to check its md5, because zip file have been deleted.
            var compressed = asset.compressed; // // Retrieve the correct md5 value.

            var expectedMD5 = asset.md5; // // asset.path is relative path and path is absolute.

            var relativePath = asset.path; // // The size of asset file, but this value could be absent.

            var size = asset.size;

            if (compressed) {
              return true;
            } else {
              return true;
            }
          });

          (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).RES_VERSION = this._am.getLocalManifest().getVersion();
          this.verLab.string = (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).getVersionStr();
          this.checkUpdate();
        }

        checkUpdate() {
          if (this._updating) {
            return;
          }

          this._am.setCDNUrl((_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).getHotUpdateURL());

          this._am.setEventCallback(this.checkCb.bind(this));

          this._am.checkUpdate();

          this._updating = true;
        }

        checkCb(event) {
          console.log('Code: ' + event.getEventCode());
          var isGame = false;

          switch (event.getEventCode()) {
            case native.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
              // //下载清单文件失败，跳过热更新。
              isGame = true;
              console.log("找不到本地清单文件，跳过了热更新。");
              break;

            case native.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case native.EventAssetsManager.ERROR_PARSE_MANIFEST:
              isGame = true;
              console.log("下载清单文件失败，跳过热更新。");
              break;

            case native.EventAssetsManager.ALREADY_UP_TO_DATE:
              // //已经更新了最新的远程版本。
              isGame = true;
              console.log("已经更新了最新的远程版本。");
              break;

            case native.EventAssetsManager.NEW_VERSION_FOUND:
              // //可以开始更新游戏
              console.log("可以开始更新游戏");
              this.bar.node.active = true;
              this.setProgress(0.01);
              isGame = false;
              break;

            default:
              return;
          }

          this._am.setEventCallback(null);

          this._checkListener = null;
          this._updating = false;

          if (isGame) {
            this.cb();
          } else {
            this.hotUpdate();
          }
        }

        setProgress(progress) {
          let progressStr = (progress * 100).toFixed(2) + '%';
          this.bar.progress = progress;
          this.lab.string = progressStr;
        }

        hotUpdate() {
          if (this._am && !this._updating) {
            this._am.setEventCallback(this.updateCb.bind(this));

            this._failCount = 0;

            this._am.update();

            this._updating = true;
          }
        }

        updateCb(event) {
          var needRestart = false;
          var failed = false;

          switch (event.getEventCode()) {
            case native.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
              console.log('找不到本地清单文件，跳过了热更新。');
              failed = true;
              break;

            case native.EventAssetsManager.UPDATE_PROGRESSION:
              // //更新中
              this.setProgress(event.getPercent());
              break;

            case native.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case native.EventAssetsManager.ERROR_PARSE_MANIFEST:
              console.log('下载清单文件失败，跳过热更新。');
              failed = true;
              break;

            case native.EventAssetsManager.ALREADY_UP_TO_DATE:
              console.log('已经更新了最新的远程版本。');
              failed = true;
              break;

            case native.EventAssetsManager.UPDATE_FINISHED:
              // //更新完成
              console.log('更新完成');
              needRestart = true;
              break;

            case native.EventAssetsManager.UPDATE_FAILED:
              // //更新失败 可以尝试再次更新
              console.log('更新失败 可以尝试再次更新');
              this._updating = false;
              this._canRetry = true;
              this.retry();
              break;

            case native.EventAssetsManager.ERROR_UPDATING:
              // //资源更新错误
              console.log('资源更新错误: ' + event.getAssetId() + ', ' + event.getMessage());
              break;

            case native.EventAssetsManager.ERROR_DECOMPRESS:
              // //解压时出错
              console.log('解压时出错');
              break;

            default:
              break;
          }

          if (failed) {
            this._am.setEventCallback(null);

            this._updateListener = null;
            this._updating = false;
          }

          if (needRestart) {
            this._am.setEventCallback(null);

            this._updateListener = null;
            game.restart(); //热更完成
          }
        }

        retry() {
          if (!this._updating && this._canRetry) {
            this._canRetry = false;
            this.lab.string = "重试失败的文件";

            this._am.downloadFailedAssets();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "verLab", [_dec4], {
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
//# sourceMappingURL=c25f5a2bd812b60c5a988a3700793f7dfa130000.js.map