System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Label, Node, RareBookData, RareBookItem, UIMgr, ViewName, GameUtil, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, RareBookHandBookNode;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfRareBookData(extras) {
    _reporterNs.report("RareBookData", "./RareBookData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookInfo(extras) {
    _reporterNs.report("RareBookInfo", "./RareBookInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookItem(extras) {
    _reporterNs.report("RareBookItem", "./RareBookItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../utils/GameUtil", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      RareBookData = _unresolved_2.RareBookData;
    }, function (_unresolved_3) {
      RareBookItem = _unresolved_3.RareBookItem;
    }, function (_unresolved_4) {
      UIMgr = _unresolved_4.UIMgr;
    }, function (_unresolved_5) {
      ViewName = _unresolved_5.ViewName;
    }, function (_unresolved_6) {
      GameUtil = _unresolved_6.GameUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "77450IxYgJJEo3D2OpcUxZf", "RareBookHandBookNode", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * RareBookHandBookItem
       * zhudingchao
       * Wed May 22 2024 11:19:11 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/rareBook/RareBookHandBookItem.ts
       *
       */

      _export("RareBookHandBookNode", RareBookHandBookNode = (_dec = ccclass('RareBookHandBookNode'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Node), _dec(_class = (_class2 = class RareBookHandBookNode extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "scoreLab", _descriptor, this);

          _initializerDefineProperty(this, "contentNode", _descriptor2, this);

          _initializerDefineProperty(this, "numLab", _descriptor3, this);

          _initializerDefineProperty(this, "currTargetNode", _descriptor4, this);

          this.currTag = 0;
          this.itemPrefab = null;
          this.allData = void 0;
          this.rareItems = [];

          this.onTouchItem = info => {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).RareBookDetailView,
              data: {
                "bookInfos": this.allData,
                "currInfo": info
              }
            }); // UIMgr.ins.show({ viewName: ViewName.RareBookRewardPreviewPop})
            // UIMgr.ins.show({ viewName: ViewName.RareBookEquipPop,data:{"bookInfo":info}})
            //    UIMgr.ins.show({ viewName: ViewName.WeaponPop})
          };
        }

        // private currTargetNode:Node;
        start() {}

        initView(itemPrefab) {
          if (itemPrefab === void 0) {
            itemPrefab = null;
          }

          this.allData = [];

          if (itemPrefab) {
            this.itemPrefab = itemPrefab;
          }

          this.updateScore();
          this.allData = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
            error: Error()
          }), RareBookData) : RareBookData).ins.getBookInfos(true);
          var count = 0;

          for (var key in this.allData) {
            if (this.allData[key].isLock) {
              count++;
            }
          } // this.allData.sort((a,b)=>{
          //     if(a.isRedPoint&&b.isRedPoint){
          //         return b.bookTable.Aptitude-a.bookTable.Aptitude;
          //     }
          //     if(a.isRedPoint){
          //         return -1;
          //     }
          //     if(b.isRedPoint){
          //         return 1;
          //     }
          //     if(a.isLock&&b.isLock){
          //         return b.bookTable.Aptitude-a.bookTable.Aptitude;
          //     }
          //     if(a.isLock){
          //         return -1;
          //     }
          //     if(b.isLock){
          //         return 1;
          //     }
          //     return b.bookTable.Aptitude-a.bookTable.Aptitude;
          // })
          // let tables=tab.getData().BookTable;
          // for(let key in tables){
          //     let info=havaBooks.find(a=>a.itemId==tables[key].Id);
          //     if(!info){
          //         info=new RareBookInfo();
          //         info.initItemId(tables[key].Id);
          //     }
          //     this.allData.push(info);
          // }


          this.numLab.string = count + "/" + this.allData.length;
          this.initItems();
        }

        updateScore() {
          this.scoreLab.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).convertNumber((_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
            error: Error()
          }), RareBookData) : RareBookData).ins.powerScore) + "";
        }

        updateItem(itemId) {
          for (var key in this.rareItems) {
            if (this.rareItems[key] && this.rareItems[key].info.itemId == itemId) {
              this.rareItems[key].updateView();
            }
          }
        }

        initItems() {
          for (var key in this.rareItems) {
            this.rareItems[key].node.active = false;
          }

          var index = 0;

          for (var _key in this.allData) {
            if (this.currTag == 0 || this.allData[_key].bookTable.Class == this.currTag) {
              if (!this.rareItems[index]) {
                var node = instantiate(this.itemPrefab);
                node.parent = this.contentNode;
                this.rareItems.push(node.getComponent(_crd && RareBookItem === void 0 ? (_reportPossibleCrUseOfRareBookItem({
                  error: Error()
                }), RareBookItem) : RareBookItem));
              }

              this.rareItems[index].node.active = true;
              this.rareItems[index].initData(this.allData[_key], true, this.onTouchItem, true, false, true);
              index++;
            } // this.rareItems[k

          }
        }

        onClickToggle(event, type) {
          type = Number(type);

          if (this.currTag != type) {
            this.currTag = type;
            this.initItems();

            if (this.currTargetNode) {
              this.currTargetNode.getChildByName("redNode").active = true;
            }

            event.target.getChildByName("redNode").active = false;
            this.currTargetNode = event.target;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scoreLab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "numLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "currTargetNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3b7867bdc42b45072d4e0b09b9640a6ee2044540.js.map