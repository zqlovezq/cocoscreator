System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, js, RichText, Toggle, ViewPop, LangMgr, UIMgr, Func, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, CommonTipsPopCloseType, CommonTipsPop;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../utils/Func", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      js = _cc.js;
      RichText = _cc.RichText;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      LangMgr = _unresolved_3.LangMgr;
    }, function (_unresolved_4) {
      UIMgr = _unresolved_4.UIMgr;
    }, function (_unresolved_5) {
      Func = _unresolved_5.Func;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "de1f48FXqdB4Lfs/m95EBlx", "CommonTipsPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'js', 'Label', 'Node', 'RichText', 'Toggle', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 关闭类型 */

      _export("CommonTipsPopCloseType", CommonTipsPopCloseType = /*#__PURE__*/function (CommonTipsPopCloseType) {
        CommonTipsPopCloseType[CommonTipsPopCloseType["cancel"] = 0] = "cancel";
        CommonTipsPopCloseType[CommonTipsPopCloseType["confirm"] = 1] = "confirm";
        return CommonTipsPopCloseType;
      }({}));
      /** 通用确认弹窗 */


      _export("CommonTipsPop", CommonTipsPop = (_dec = ccclass('CommonTipsPop'), _dec2 = property(Toggle), _dec3 = property(Toggle), _dec4 = property(RichText), _dec(_class = (_class2 = class CommonTipsPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "toggle_today", _descriptor, this);

          _initializerDefineProperty(this, "toggle_forever", _descriptor2, this);

          this._callFunc = null;
          this._param = null;

          _initializerDefineProperty(this, "info_txt", _descriptor3, this);
        }

        /**
         * 打开通用弹窗
         * @param tipsKey 描述文字
         * @param callFunc 回调
         * @param param 可选参数
         */
        static create(tipsKey, callFunc, param) {
          return _asyncToGenerator(function* () {
            yield (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: "CommonTipsPop"
            });
            var pop = (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.getViewScr("CommonTipsPop");

            if (pop) {
              pop.setData(tipsKey, callFunc, param);
            }
          })();
        }

        register() {}

        setData(tipsKey, callFunc, param) {
          this._callFunc = callFunc;
          console.log(tipsKey);
          tipsKey = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(tipsKey);

          if (tipsKey.indexOf("<color=") == -1) {
            tipsKey = js.formatStr("<color=#0000>%s</color>", tipsKey);
          }

          this.info_txt.string = tipsKey;

          if (param && param.gacha) {
            this._param = param;
            this.toggle_today.node.parent.active = true;
            this.recordDismissTime();
          }
        }

        onClickCancel() {
          var _call = this._callFunc;
          this.close();
          _call && _call(CommonTipsPopCloseType.cancel);
        }

        onClickConfirm() {
          var _call = this._callFunc;
          this.close();
          _call && _call(CommonTipsPopCloseType.confirm);

          if (this._param && this._param.gacha) {
            var currentDate = new Date();
            var dismissTime = currentDate.toDateString();

            if (this.toggle_today.isChecked) {
              (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                error: Error()
              }), Func) : Func).setItem("dismissTime" + this._param.gacha, dismissTime);
            } else {
              (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                error: Error()
              }), Func) : Func).setItem("dismissTime" + this._param.gacha, "");
            }
          }
        }

        onClose() {
          this.onClickCancel();
        } // 在弹窗中用户选贼不在提示时,记录当前时间


        recordDismissTime() {// const currentDate = new Date();
          // const dismissTime = currentDate.toDateString();
          // if(this.toggle_today.isChecked){
          //     Func.setItem("dismissTime"+this._param.gacha,dismissTime)
          // }else{
          //     Func.setItem("dismissTime"+this._param.gacha,"")
          // }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "toggle_today", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "toggle_forever", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "info_txt", [_dec4], {
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
//# sourceMappingURL=1698c1ee4cd61470f33a40a82097e17bf7b8767a.js.map