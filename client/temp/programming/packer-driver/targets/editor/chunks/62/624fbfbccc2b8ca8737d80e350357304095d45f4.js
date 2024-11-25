System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, isValid, log, Scene, _class, _class2, _crd, DefaultLocatorTimeOut, ccclass, property, Locator;

  function findChildNodeByName(pNode, strName, needActive = false) {
    if (!pNode || !isValid(pNode)) {
      return null;
    }

    if (pNode.name == strName) {
      if (needActive) {
        if (pNode instanceof Scene || pNode.activeInHierarchy) {
          //scene没有activeInHierarchy
          return pNode;
        }
      }

      if (!needActive || pNode.activeInHierarchy) {
        return pNode;
      }
    }

    for (let child of pNode.children) {
      let pChildFind = findChildNodeByName(child, strName, needActive);

      if (pChildFind) {
        return pChildFind;
      }
    }

    return null;
  }

  _export("findChildNodeByName", findChildNodeByName);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      isValid = _cc.isValid;
      log = _cc.log;
      Scene = _cc.Scene;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9d39eiaIoVBLZhcoyYrDr1H", "Locator", undefined);

      __checkObsolete__(['_decorator', 'isValid', 'log', 'Node', 'Scene']);

      _export("DefaultLocatorTimeOut", DefaultLocatorTimeOut = 8000);
      /**
       * @object
       * Location主要用从场景树中检索UI节点
       */


      ({
        ccclass,
        property
      } = _decorator);

      _export("Locator", Locator = ccclass(_class = (_class2 = class Locator {
        /**
         * 定位解析
         * @param locator
         * @returns {Array}
         */
        static parse(locator) {
          log(locator, 'locator string is null'); //使用正则表达示分隔名字

          let names = locator.split(/[.,//,>,#]/g);
          let segments = names.map(function (name) {
            let index = locator.indexOf(name);
            let symbol = locator[index - 1] || '>';
            return {
              symbol: symbol,
              name: name.trim()
            };
          }); // console.log('segments----->', segments);

          return segments;
        }
        /**
         * 通过节点名搜索节点对象
         * @param root
         * @param name
         * @returns {*}
         */


        static seekNodeByName(root, name) {
          return findChildNodeByName(root, name, true);
        }
        /**
         * 在root节点中，定位locator
         * @param root
         * @param locator
         * @param cb
         */


        static locateNode(root, locator, cb) {
          if (!isValid(root)) {
            //root已经销毁，不要再在它下面找了
            cb('locateNode root is not valid');
            return null;
          }

          if (!Locator.locating) {
            Locator.startTime = Date.now();
            Locator.locating = true;
          }

          let segments = Locator.parse(locator);
          let child,
              node = root;

          for (let i = 0; i < segments.length; i++) {
            let item = segments[i];

            switch (item.symbol) {
              case '/':
              case '_':
                child = node.getChildByName(item.name);
                break;

              case '.':
                child = node[item.name];
                break;

              case '>':
                child = Locator.seekNodeByName(node, item.name);
                break;
            }

            if (!child) {
              node = null;
              break;
            }

            node = child;
          }

          if (node && node.active && cb) {
            Locator.locating = false;
            cb(null, node);
          } else if (cb) {
            if (false
            /*Date.now() - Locator.startTime > Locator.timeout*/
            ) {
              //超时还找不到节点，返回错误
              cb(`timeout: ${locator} `);
            } else {
              setTimeout(function () {
                Locator.locateNode(root, locator, cb);
              }, 100);
            }
          }

          return node;
        }

        static getNodeFullPath(node) {
          let array = [];
          let temp = node;

          do {
            array.unshift(temp.name);
            temp = temp.parent;
          } while (temp && temp.name !== 'Canvas');

          return array.join('/');
        }

      }, _class2.locating = false, _class2.startTime = void 0, _class2.timeout = DefaultLocatorTimeOut, _class2)) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=624fbfbccc2b8ca8737d80e350357304095d45f4.js.map