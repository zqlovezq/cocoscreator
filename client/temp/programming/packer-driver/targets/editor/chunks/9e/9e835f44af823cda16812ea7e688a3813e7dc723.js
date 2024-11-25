System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, sensitive_tab;

  _export("sensitive_tab", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b2742LNYWRF2LTVej+2Y/Em", "sensitive_words_gen", undefined);

      (function (_sensitive_tab) {
        // export var Data:Table = null;
        // export function InitData(json: Object|string) {
        // 	Data = Table.FromJSON(json);
        // }
        var Data = null;

        function getData() {
          return Data;
        }

        _sensitive_tab.getData = getData;

        function InitData(json) {
          Data = Table.FromJSON(json);
        }

        _sensitive_tab.InitData = InitData;

        class SensitiveWordsTable {
          constructor() {
            this.SensitiveWords = void 0;
          } // 屏蔽字 


        }

        _sensitive_tab.SensitiveWordsTable = SensitiveWordsTable;

        class Table {
          constructor() {
            this.SensitiveWordsTable = void 0;
          }

          // table: SensitiveWordsTable 
          // Indices 
          //根据json创建Table
          static FromJSON(json) {
            let result;

            if (typeof json === 'string') {
              // if it's a string, parse it first
              result = JSON.parse(json, Table.reviver);
            } else {
              // create an instance of the Table class
              let tbl = new Table(); // copy all the fields from the json object

              result = Object.assign(tbl, json);
            }

            result.BuildData();
            return result;
          }

          static reviver(key, value) {
            return key === "" ? Table.FromJSON(value) : value;
          } // 清除索引和数据


          ResetData() {
            this.SensitiveWordsTable = [];
          } // 构建索引


          BuildData() {}

        }

        _sensitive_tab.Table = Table;
      })(sensitive_tab || _export("sensitive_tab", sensitive_tab = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9e835f44af823cda16812ea7e688a3813e7dc723.js.map