System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Node, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "06e3cF1K3xHwpX1+z0t4gYg", "node", undefined);

      /*
       * @Author       : 程哲林
       * @Date         : 2023-02-22 14:28:25
       * @LastEditors  : 程哲林
       * @LastEditTime : 2023-02-24 21:30:02
       * @FilePath     : /mint-filter/src/node.ts
       * @Description  : 未添加文件描述
       */
      _export("default", Node = class Node {
        constructor(key, depth) {
          if (depth === void 0) {
            depth = 0;
          }

          // 深度
          this.depth = 0;
          // 节点值
          this.key = void 0;
          // 是否为单词最后节点
          this.word = false;
          // 父节点的引用
          // public parent?: Node;
          // 子节点的引用（goto表）
          this.children = {};
          // failure表，用于匹配失败后的跳转
          this.fail = void 0;
          // 引用计数
          this.count = 0;
          this.key = key;
          this.depth = depth;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8f9a29580b941d3a1a1b7070e874ee0b9762b6d2.js.map