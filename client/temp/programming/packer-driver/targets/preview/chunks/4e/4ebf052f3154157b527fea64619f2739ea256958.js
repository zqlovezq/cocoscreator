System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, JsonAsset, assetManager, resources, tab, _crd;

  function LoadTable(worldPath, progressCallback) {
    return new Promise(resolve => {
      console.log("worldKey", worldPath);
      var paths = [];
      paths.push('tabledata/table_gen');
      paths.push(worldPath); //多语言

      resources.load(paths, JsonAsset, progressCallback, (error, resource) => {
        if (error) {
          throw error;
        }

        var worldData = {};

        for (var index = 0; index < resource.length; index++) {
          var v = resource[index];

          if (v.name == 'table_gen') {
            (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).InitData(v.json);
            assetManager.releaseAsset(v);
          }
        }

        resolve();
      }); // resources.load('tabledata/table_gen', JsonAsset, progressCallback, (error: Error, resource: any)=>{
      //     if(error) {
      //          throw error;
      //     }
      //     tab.InitData(resource.json)
      //     assetManager.releaseAsset(resource)
      //     resolve();
      // })
    });
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "./table_gen", _context.meta, extras);
  }

  _export("LoadTable", LoadTable);

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
      tab = _unresolved_2.tab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "33fef2ryK5CxrF3iu337RGJ", "table", undefined);

      __checkObsolete__(['JsonAsset', 'assetManager', 'resources']);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4ebf052f3154157b527fea64619f2739ea256958.js.map