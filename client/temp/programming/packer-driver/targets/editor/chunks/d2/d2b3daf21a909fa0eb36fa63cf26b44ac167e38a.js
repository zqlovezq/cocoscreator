System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _class, _class2, _descriptor, _crd, ccclass, property, InfiniteCell;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7e7d1kNOItL56rp7OCVdjcF", "InfiniteCell", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * InfiniteCell base class
       * Author: Louis Huang
       * 每一个使用 InfiniteList 的用户，都需要实现这个 cell 的 interface
       */

      _export("default", InfiniteCell = ccclass(_class = (_class2 = class InfiniteCell extends Component {
        constructor(...args) {
          super(...args);

          /**
           * cellIdentifier 是一个独特的字符串，用来表示这个 cell 使用的是哪种类型的资源，
           * 这样在同一个 scroll 中可以使用多种不同的 cell 类型
           */
          _initializerDefineProperty(this, "cellIdentifier", _descriptor, this);

          /**
           * 表示这个 cell 使用的数据，在整个数据中的索引值
           */
          this.dataIndex = -1;
        }

        /**
         * 使用这个函数来更新当前的 Cell 内容，在这个函数被调用时，dataIndex 会指向正确的索引值，所以实现者，可以使用这个索引获得需要更新的数据
         * 
         * @param data 用来更新这个 Cell 的数据，由使用者的 GetCellData 回调函数提供，如果没有提供这个回调函数，data 就是 null
         * 
         * 需要注意的是，如果在 UpdateContent 中使用了异步函数获得结果来更新这个 Cell 时
         * 很有可能返回时，当前的 Cell 已经不再用来显示之前的数据了，所以这时需要在函数中
         * 使用一个本地变量记录当前的 dataIndex 并在回调函数返回时比较这两个值是否一致
         */
        UpdateContent(data) {}
        /**
         * 获取积分节点位置
         */


        GetScoreNode() {
          return null;
        }
        /**
         * 获取单元格Size【垂直为高度，否则为宽度】
         */


        GetCellSize() {
          return 0;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cellIdentifier", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      })), _class2)) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d2b3daf21a909fa0eb36fa63cf26b44ac167e38a.js.map