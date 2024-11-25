System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Prefab, ScrollView, ViewPop, Http, LoginData, ServerChooseItem, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, ServerChoosePop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttp(extras) {
    _reporterNs.report("Http", "../../net/Http", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginData(extras) {
    _reporterNs.report("LoginData", "../login/LoginData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfServerChooseItem(extras) {
    _reporterNs.report("ServerChooseItem", "./ServerChooseItem", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Prefab = _cc.Prefab;
      ScrollView = _cc.ScrollView;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      Http = _unresolved_3.default;
    }, function (_unresolved_4) {
      LoginData = _unresolved_4.LoginData;
    }, function (_unresolved_5) {
      ServerChooseItem = _unresolved_5.ServerChooseItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0e2effGuXNIZ6O6kK9sC98D", "ServerChoosePop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'ScrollView']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ServerChoosePop", ServerChoosePop = (_dec = ccclass('ServerChoosePop'), _dec2 = property(Label), _dec3 = property(ScrollView), _dec4 = property(Prefab), _dec(_class = (_class2 = class ServerChoosePop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "lastServerLab", _descriptor, this);

          _initializerDefineProperty(this, "scrollView", _descriptor2, this);

          _initializerDefineProperty(this, "itemPrefab", _descriptor3, this);

          this.recommendServers = void 0;
          this.userServers = void 0;
          this.currTag = 1;
        }

        register() {}

        onShow() {
          let addr = (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
            error: Error()
          }), LoginData) : LoginData).ins.loginServerTab.SelectServerUrl;
          let reqParam = `uid=${(_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
            error: Error()
          }), LoginData) : LoginData).ins.uid}&token=${(_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
            error: Error()
          }), LoginData) : LoginData).ins.token}&group=${(_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
            error: Error()
          }), LoginData) : LoginData).ins.loginGroup}`; // Waiting.Show(WaitingTag.Login, 0)

          (_crd && Http === void 0 ? (_reportPossibleCrUseOfHttp({
            error: Error()
          }), Http) : Http).request({
            host: addr,
            method: "GET",
            reqParam: reqParam,
            cb: responseJson => {
              console.log(responseJson);

              if (responseJson) {
                if (responseJson.ret == 0) {
                  console.log("responseJson==", responseJson);
                  this.recommendServers = responseJson.recommend_areas;
                  this.userServers = responseJson.user_areas;
                  this.initView();
                }
              } // Waiting.Hide(WaitingTag.Login)

            }
          });
        }

        initView() {
          this.initServerItem();
          let myServerData = null;
          let myAreaId = (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
            error: Error()
          }), LoginData) : LoginData).ins.default_area;

          for (let key in this.userServers) {
            if (myAreaId == this.userServers[key]["id"]) {
              myServerData = this.userServers[key];
              break;
            }
          }

          if (myServerData) {
            this.lastServerLab.string = myServerData.name;
          }
        }

        initServerItem() {
          this.scrollView.content.removeAllChildren();
          let list = this.currTag == 1 ? this.userServers : this.recommendServers;

          for (let key in list) {
            let node = instantiate(this.itemPrefab);
            node.parent = this.scrollView.content;
            node.getComponent(_crd && ServerChooseItem === void 0 ? (_reportPossibleCrUseOfServerChooseItem({
              error: Error()
            }), ServerChooseItem) : ServerChooseItem).initData(list[key]);
          }
        }

        onToggle(event, type) {
          if (Number(type) != this.currTag) {
            this.currTag = Number(type);
            this.initServerItem();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lastServerLab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8d1108113ea0ca55177bb3329b849ee6e6d4d8ed.js.map