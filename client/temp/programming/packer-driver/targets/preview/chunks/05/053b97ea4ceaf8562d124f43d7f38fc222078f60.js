System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, JsonAsset, assetManager, resources, sensitive_tab, Mint, SensitiveWordsManager, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfsensitive_tab(extras) {
    _reporterNs.report("sensitive_tab", "../../Table/sensitive_words_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMint(extras) {
    _reporterNs.report("Mint", "../../sensitive_word/src", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      JsonAsset = _cc.JsonAsset;
      assetManager = _cc.assetManager;
      resources = _cc.resources;
    }, function (_unresolved_2) {
      sensitive_tab = _unresolved_2.sensitive_tab;
    }, function (_unresolved_3) {
      Mint = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a38deuTqt5E35x/jDCJF7FB", "SensitiveWordsManager", undefined);

      __checkObsolete__(['JsonAsset', 'assetManager', 'resources']);

      //敏感词检测
      _export("default", SensitiveWordsManager = class SensitiveWordsManager {
        constructor() {
          this.mint = void 0;
        }

        static get ins() {
          if (SensitiveWordsManager._ins === null) {
            SensitiveWordsManager._ins = new SensitiveWordsManager();
          }

          return SensitiveWordsManager._ins;
        }

        Init() {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (_this.mint !== undefined) {
              return;
            }

            _this.mint = null;
            yield _this.LoadTable();
            var sensitiveArray = [];

            for (var data of (_crd && sensitive_tab === void 0 ? (_reportPossibleCrUseOfsensitive_tab({
              error: Error()
            }), sensitive_tab) : sensitive_tab).getData().SensitiveWordsTable) {
              sensitiveArray.push(data.SensitiveWords);
            }

            _this.mint = new (_crd && Mint === void 0 ? (_reportPossibleCrUseOfMint({
              error: Error()
            }), Mint) : Mint)(sensitiveArray);

            _this.test();
          })();
        }

        LoadTable(progressCallback) {
          return new Promise(resolve => {
            resources.load('tabledata/sensitive_words_gen', JsonAsset, progressCallback, (error, resource) => {
              if (error) {
                throw error;
              }

              (_crd && sensitive_tab === void 0 ? (_reportPossibleCrUseOfsensitive_tab({
                error: Error()
              }), sensitive_tab) : sensitive_tab).InitData(resource.json);
              assetManager.releaseAsset(resource);
              resolve();
            });
          });
        }
        /**
         * 检测有没有敏感词，没有敏感词时返回true
         */


        check(str) {
          if (!this.mint) {
            return true;
          }

          return this.mint.verify(str);
        }
        /**
         * 把字符串中的敏感词替换为*
         */


        replace(str) {
          if (!this.mint) {
            return str;
          }

          return this.mint.filter(str).text;
        }

        test() {
          var testStr = "75年前的今天，中国人民同世界人民一道，以顽强的意志和英勇的斗争，彻底打败了法西斯主义，取得了正义战胜邪恶、光明战胜黑暗、进步战胜反动的伟大胜利！";
          console.log(SensitiveWordsManager.ins.replace(testStr));
          console.log(SensitiveWordsManager.ins.check(testStr));
        }

      });

      SensitiveWordsManager._ins = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=053b97ea4ceaf8562d124f43d7f38fc222078f60.js.map