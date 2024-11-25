System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Node, Mint, _crd;

  function _reportPossibleCrUseOfNode(extras) {
    _reporterNs.report("Node", "./node", _context.meta, extras);
  }

  _export("Mint", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Node = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ac77aJQvm9DQYlpijlfFZ6G", "index", undefined);
      /*
       * @Author       : 程哲林
       * @Date         : 2023-02-20 20:03:15
       * @LastEditors  : 程哲林
       * @LastEditTime : 2023-05-08 18:09:03
       * @FilePath     : /mint-filter/src/index.ts
       * @Description  : 未添加文件描述
       * github https://github.com/ZhelinCheng/mint-filter
       */


      _export("Mint", Mint = class Mint {
        constructor(keys, ops) {
          this.root = new (_crd && Node === void 0 ? (_reportPossibleCrUseOfNode({
            error: Error()
          }), Node) : Node)('root');
          this.customCharacter = void 0;
          const len = keys.length;
          this.customCharacter = (ops == null ? void 0 : ops.customCharacter) || '*';

          for (let idx = 0; idx < len; idx++) {
            this.add(keys[idx], false);
          }

          this.build();
        } // 构建


        build() {
          const queue = [];
          queue.push(this.root);
          let idx = 0;

          while (queue.length > idx) {
            const beginNode = queue[idx];
            const map = beginNode.children;

            for (const key in beginNode.children) {
              var _failNode;

              const node = map[key];
              let failNode = beginNode.fail;

              while (failNode && !failNode.children[key]) {
                failNode = failNode.fail;
              }

              node.fail = ((_failNode = failNode) == null ? void 0 : _failNode.children[key]) || this.root;
              queue.push(node);
            }

            idx++;
          }
        }

        search(text, options = {
          replace: true
        }) {
          let node = this.root;
          const fText = [];
          const oText = [];
          const words = [];
          const {
            replace = true,
            verify = false
          } = options;
          const textLen = text.length;

          for (let i = 0; i < textLen; i++) {
            var _node3;

            // const key = text.charAt(i);
            const oKey = text[i];
            const key = oKey.toLowerCase();

            while (node && !((_node = node) != null && _node.children[key])) {
              var _node, _node2;

              node = (_node2 = node) == null ? void 0 : _node2.fail;
            }

            node = ((_node3 = node) == null ? void 0 : _node3.children[key]) || this.root;
            fText.push(oKey);
            oText.push(oKey);

            if (node.word) {
              let idx = i + 1 - node.depth;
              let word = '';

              while (idx <= i) {
                const v = oText[idx];
                word += v;

                if (replace) {
                  fText[idx] = this.customCharacter;
                }

                idx++;
              }

              words.push(word);

              if (verify) {
                break;
              }
            }
          }

          return {
            words,
            text: fText.join('')
          };
        }
        /**
         * 过滤文本
         *
         * @param text 文本内容
         * @param options.replace 是否替换掉敏感词部位
         * @returns FilterData
         *
         * @example
         *
         * ```typescript
         * mint.add('无法通过')
         * let status = mint.filter('这是一句无法通过的文本')
         * console.log(status) // { words: ["无法通过"], text: "这是一句****的文本" }
         *
         * status = mint.filter('这是一句无法通过的文本', { replace: false })
         * console.log(status) // { words: ["无法通过"], text: "这是一句无法通过的文本" }
         * ```
         */


        filter(text, options) {
          return this.search(text, options);
        }
        /**
         * 检测文本是否通过验证
         *
         * @param text 文本内容
         * @returns Boolean
         *
         * @example
         *
         * ```typescript
         * mint.add('无法通过')
         * const status = mint.verify('这是一句无法通过的文本')
         * console.log(status) // false
         * ```
         */


        verify(text) {
          const {
            words
          } = this.search(text, {
            verify: true
          });
          return !words.length;
        }
        /**
         * 删除关键字
         *
         * @param key 关键词
         * @returns 状态（update ｜ delete），告知用户是删除了树上的节点还是单纯的更新了节点
         *
         * @example
         *
         * ```typescript
         * const status = mint.delete('敏感词')
         * ```
         */


        delete(key) {
          const type = this.pop(key.toLowerCase(), key.length, this.root);
          this.build();
          return type;
        }

        pop(key, len, node, carry = 'delete', idx = 0) {
          if (!node) {
            return 'delete';
          }

          if (idx === len) {
            node.word = false;
            node.count--; // 需要删除的情况

            let isDel = true;

            for (const k in node.children) {
              if (k) {
                isDel = false;
                break;
              }
            }

            return isDel ? carry : 'update';
          } else {
            const val = key[idx];
            const next = node.children[val];
            const type = this.pop(key, len, next, node.word ? 'update' : carry, idx + 1);
            node.count--;

            if (type === 'delete' && (next == null ? void 0 : next.count) === 0) {
              delete node.children[val]; // node.children[val] = undefined
            }

            return type;
          }
        }
        /**
         * 新增敏感词
         *
         * @param key 关键词
         * @param build 是否构建树，默认不用传递
         * @returns 状态
         *
         * @example
         *
         * ```typescript
         * const status = mint.add('敏感词')
         * ```
         */


        add(key, build = true) {
          const lowKey = key.toLowerCase();
          const len = lowKey.length;
          this.put(lowKey, len);

          if (build) {
            this.build();
            /* const queue: Node[] = [this.root];
            let idx = 0;
             while (queue.length > idx) {
              const beginNode = queue[idx];
              const map = beginNode.children;
              const k = lowKey[idx];
               // FIX: 可以优化
              if (!k) {
                break;
              }
               const node = map[k];
              let failNode = beginNode.fail;
               while (failNode && !failNode.children[lowKey]) {
                failNode = failNode.fail;
              }
              node.fail = failNode?.children[lowKey] || this.root;
               queue.push(node);
              idx++;
            } */
          }

          return true;
        }
        /* private put(key: string, len: number, node?: Node, idx = 0): Node {
          if (!node) {
            node = this.root;
          }
           // 基线条件
          if (idx === len) {
            node.word = true;
            node.count++;
            return node;
          }
           const val = key[idx];
          const next = node.children[val];
          const depth = idx + 1;
          node.children[val] = this.put(
            key,
            len,
            next || new Node(val, depth),
            depth,
          );
           node.count++;
          return node;
        } */


        put(key, len) {
          let node = this.root;
          const lastIdx = len - 1;
          node.count++;

          for (let idx = 0; idx < len; idx++) {
            const val = key[idx];
            const nextNode = node.children[val];

            if (nextNode) {
              nextNode.count++;
              node = nextNode;
            } else {
              const newNode = new (_crd && Node === void 0 ? (_reportPossibleCrUseOfNode({
                error: Error()
              }), Node) : Node)(val, idx + 1);
              newNode.count = 1;
              node.children[val] = newNode;
              node = newNode;
            }

            if (lastIdx === idx && node.depth) {
              node.word = true;
            }
          }
        }

      });

      _export("default", Mint);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d7bb004688355f741f46eca26c0e2da49ed8a690.js.map