System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, view, Func, FrameControl, AbsObjType, _dec, _class, _crd, ccclass, property, FightRenderSort;

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFrameControl(extras) {
    _reporterNs.report("FrameControl", "../base/frame/FrameControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjType(extras) {
    _reporterNs.report("AbsObjType", "../base/obj/AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsRole(extras) {
    _reporterNs.report("AbsRole", "../base/obj/role/AbsRole", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      view = _cc.view;
    }, function (_unresolved_2) {
      Func = _unresolved_2.Func;
    }, function (_unresolved_3) {
      FrameControl = _unresolved_3.FrameControl;
    }, function (_unresolved_4) {
      AbsObjType = _unresolved_4.AbsObjType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b7689EExY5PsozkUqz86cEL", "FightRenderSort", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'view']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 战斗渲染排序 
      */

      _export("FightRenderSort", FightRenderSort = (_dec = ccclass('FightRenderSort'), _dec(_class = class FightRenderSort {
        static sort(objects, bulletNode) {
          if (objects.children.length > 80) {
            this.objectSort(objects);
            (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
              error: Error()
            }), Func) : Func).NodeSort(objects);
          } else {
            this.ySort(objects);
          }

          this.sortBullet(bulletNode);
        }

        static ySort(objects) {
          /** y轴排序 */
          objects.children.forEach(element => {
            (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
              error: Error()
            }), Func) : Func).setzIndex(element, view.getVisibleSize().height - element.position.y);
          });
          (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).NodeSort(objects);
        }

        static objectSort(objects) {
          let list = (_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
            error: Error()
          }), FrameControl) : FrameControl).ins.getObjList((_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
            error: Error()
          }), AbsObjType) : AbsObjType).role);
          let len = list.length;
          let abs;

          for (let i = 0; i < len; i++) {
            abs = list[i];
            (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
              error: Error()
            }), Func) : Func).setzIndex(abs.node, view.getVisibleSize().height - abs.node.position.y);
          }

          list = (_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
            error: Error()
          }), FrameControl) : FrameControl).ins.getObjList((_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
            error: Error()
          }), AbsObjType) : AbsObjType).enemy);
          len = list.length;

          for (let i = 0; i < len; i++) {
            abs = list[i];
            (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
              error: Error()
            }), Func) : Func).setzIndex(abs.node, abs.animationId);
          }

          (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).NodeSort(objects); // let ids = []
          // for (let index = 0; index < objects.children.length; index++) {
          //     const v = objects.children[index];
          //     ids.push(v["zIndex"])
          // }
          // console.log('objectSort', ids)
        }

        static sortBullet(bulletNode) {
          (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).NodeSort(bulletNode);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=de2b0d1af892aa227dedafc30ffb18ab669b8903.js.map