System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, JsonAsset, assetManager, resources, AbsMgr, LangMgr, _crd, constKey, prefix_path, LanguageType;

  function _reportPossibleCrUseOfAbsMgr(extras) {
    _reporterNs.report("AbsMgr", "../../framework/base/IAbs", _context.meta, extras);
  }

  _export("LangMgr", void 0);

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
      AbsMgr = _unresolved_2.AbsMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3a7f1/qNQBNDZktg/KHE7iI", "LangMgr", undefined);

      __checkObsolete__(['Director', 'DynamicAtlasManager', 'JsonAsset', 'Node', 'Prefab', 'Scene', 'SpriteFrame', 'assert', 'assetManager', 'director', 'js', 'log', 'resources']);

      String.prototype["format"] = function (arr) {
        if (arr.length === 0) {
          return String(this);
        }

        let reg = /(\{\d\})/;
        let r = this;

        while (reg.test(r)) {
          let index = RegExp.$1.slice(1, -1);
          r = r.replace(new RegExp("\\{" + index + "\\}", "g"), index >= arr.length ? "" : arr[index]);
        }

        return r;
      };

      constKey = {
        txt: ""
      };
      prefix_path = "world_lang_";

      LanguageType = /*#__PURE__*/function (LanguageType) {
        LanguageType["EN"] = "En_us";
        LanguageType["JP"] = "Jp_jp";
        LanguageType["TW"] = "Zh_tw";
        return LanguageType;
      }(LanguageType || {});
      /**
       * 多语言管理
       */


      _export("LangMgr", LangMgr = class LangMgr extends (_crd && AbsMgr === void 0 ? (_reportPossibleCrUseOfAbsMgr({
        error: Error()
      }), AbsMgr) : AbsMgr) {
        constructor(...args) {
          super(...args);
          this.nowPath = prefix_path;
          this._currLanguageValue = void 0;
          this.nowSuffix = void 0;
          this.worldTable = {};
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new LangMgr();
          }

          return this._instance;
        }

        init() {
          this._currLanguageValue = LanguageType.TW;
          let str = "";

          switch (this._currLanguageValue) {
            case LanguageType.EN:
              str = "en";
              break;

            case LanguageType.JP:
              str = "jp";
              break;

            case LanguageType.TW:
              str = "cn";
              break;

            default:
              break;
          }

          this.nowSuffix = str;
          this.nowPath = prefix_path + this.nowSuffix;
        }

        InitData() {
          this.worldTable = {};
          let jsonAsset = resources.get(this.nowPath, JsonAsset);
          let len = jsonAsset.json.WordTable.length;
          let v;

          for (let index = 0; index < len; index++) {
            v = jsonAsset.json.WordTable[index];
            this.worldTable[v.Key] = v[this._currLanguageValue].replace(/\\n/g, '\n');
          }

          console.log(this.worldTable);
          assetManager.releaseAsset(jsonAsset);
        }

        static getLab(key) {
          if (LangMgr.ins.worldTable[key]) {
            return LangMgr.ins.worldTable[key];
          }

          return key; // let worldTab = tab.getData().WordTableByKey.getValue(key);
          // if (worldTab) {
          //     constKey.txt = worldTab[LangMgr.ins._currLanguageValue];
          //     if (constKey.txt) {
          //         return constKey.txt.replace(/\\n/g, '\n')
          //     }
          //     return constKey.txt;
          // } else {
          //     return key;
          // }
        }
        /** 检测路径是否为多语言 */


        static checkPath(path) {
          return path.indexOf(prefix_path) != -1 && path.indexOf(LangMgr.ins.nowPath) == -1;
        }

        static transformPath(path) {
          if (this.checkPath(path)) {
            const pattern = /world_lang_(.*?)\//;
            const replacement = LangMgr.ins.nowPath + '/';
            const result = path.replace(pattern, replacement);
            return result;
          }

          return path;
        }

        static setTexture() {}

        static getCombineString(key, opt) {
          let s = LangMgr.getLab(key);
          if (!s) s = key;

          if (opt) {
            s = s["format"](opt);
          }

          return s;
        }

      });

      LangMgr._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=55025c0f5294221cf2a54558e8daadda1de8c18e.js.map