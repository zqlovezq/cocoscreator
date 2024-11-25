System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "cc/env", "__unresolved_6", "__unresolved_7", "__unresolved_8", "client_protocol", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, EditBox, instantiate, Label, Node, Sprite, ViewScreen, UIMgr, Func, EventMgr, LocalEvent, PREVIEW, LoginControl, LoginData, SceneMgr, ScenesName, proto, tab, ViewName, FightMsgControl, ChannelMgr, Global, RoleData, Net, AdMgr, LoginServerChooseItem, RoleControl, SensitiveWordsManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, LoginView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewScreen(extras) {
    _reporterNs.report("ViewScreen", "../../../framework/base/ViewScreen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginControl(extras) {
    _reporterNs.report("LoginControl", "./LoginControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginData(extras) {
    _reporterNs.report("LoginData", "./LoginData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneMgr(extras) {
    _reporterNs.report("SceneMgr", "../../mgr/SceneMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScenesName(extras) {
    _reporterNs.report("ScenesName", "../../mgr/SceneMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMsgControl(extras) {
    _reporterNs.report("FightMsgControl", "../../fight/FightMsgControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannelMgr(extras) {
    _reporterNs.report("ChannelMgr", "../../../channel/ChannelMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobal(extras) {
    _reporterNs.report("Global", "../../../Global", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdMgr(extras) {
    _reporterNs.report("AdMgr", "../AdMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginServerChooseItem(extras) {
    _reporterNs.report("LoginServerChooseItem", "./LoginServerChooseItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleControl(extras) {
    _reporterNs.report("RoleControl", "../role/RoleControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSensitiveWordsManager(extras) {
    _reporterNs.report("SensitiveWordsManager", "../../utils/SensitiveWordsManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      EditBox = _cc.EditBox;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ViewScreen = _unresolved_2.ViewScreen;
    }, function (_unresolved_3) {
      UIMgr = _unresolved_3.UIMgr;
    }, function (_unresolved_4) {
      Func = _unresolved_4.Func;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }, function (_unresolved_6) {
      LocalEvent = _unresolved_6.LocalEvent;
    }, function (_ccEnv) {
      PREVIEW = _ccEnv.PREVIEW;
    }, function (_unresolved_7) {
      LoginControl = _unresolved_7.LoginControl;
    }, function (_unresolved_8) {
      LoginData = _unresolved_8.LoginData;
    }, function (_unresolved_9) {
      SceneMgr = _unresolved_9.SceneMgr;
      ScenesName = _unresolved_9.ScenesName;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_10) {
      tab = _unresolved_10.tab;
    }, function (_unresolved_11) {
      ViewName = _unresolved_11.ViewName;
    }, function (_unresolved_12) {
      FightMsgControl = _unresolved_12.FightMsgControl;
    }, function (_unresolved_13) {
      ChannelMgr = _unresolved_13.ChannelMgr;
    }, function (_unresolved_14) {
      Global = _unresolved_14.Global;
    }, function (_unresolved_15) {
      RoleData = _unresolved_15.RoleData;
    }, function (_unresolved_16) {
      Net = _unresolved_16.Net;
    }, function (_unresolved_17) {
      AdMgr = _unresolved_17.AdMgr;
    }, function (_unresolved_18) {
      LoginServerChooseItem = _unresolved_18.LoginServerChooseItem;
    }, function (_unresolved_19) {
      RoleControl = _unresolved_19.RoleControl;
    }, function (_unresolved_20) {
      SensitiveWordsManager = _unresolved_20.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b347cbqOfpIbYcWCv89YDzE", "LoginView", undefined);

      __checkObsolete__(['_decorator', 'Button', 'EditBox', 'instantiate', 'Label', 'Layers', 'Node', 'Size', 'Sprite', 'SpriteAtlas', 'SpriteFrame', 'sys', 'Tween', 'tween', 'UITransform', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LoginView", LoginView = (_dec = ccclass('LoginView'), _dec2 = property(Sprite), _dec3 = property(Node), _dec4 = property(Button), _dec5 = property(Button), _dec6 = property(EditBox), _dec7 = property(EditBox), _dec8 = property(Button), _dec9 = property(Node), _dec10 = property(Label), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(_crd && LoginServerChooseItem === void 0 ? (_reportPossibleCrUseOfLoginServerChooseItem({
        error: Error()
      }), LoginServerChooseItem) : LoginServerChooseItem), _dec14 = property(Node), _dec(_class = (_class2 = class LoginView extends (_crd && ViewScreen === void 0 ? (_reportPossibleCrUseOfViewScreen({
        error: Error()
      }), ViewScreen) : ViewScreen) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "spr", _descriptor, this);

          _initializerDefineProperty(this, "previewNode", _descriptor2, this);

          _initializerDefineProperty(this, "sdkLoginBtn", _descriptor3, this);

          _initializerDefineProperty(this, "testSdkBtn", _descriptor4, this);

          _initializerDefineProperty(this, "ebAccount", _descriptor5, this);

          _initializerDefineProperty(this, "ebPassword", _descriptor6, this);

          _initializerDefineProperty(this, "enterBtn", _descriptor7, this);

          _initializerDefineProperty(this, "serverList", _descriptor8, this);

          _initializerDefineProperty(this, "serverName", _descriptor9, this);

          _initializerDefineProperty(this, "serverContent", _descriptor10, this);

          _initializerDefineProperty(this, "serverItem", _descriptor11, this);

          _initializerDefineProperty(this, "serverChooseItem", _descriptor12, this);

          _initializerDefineProperty(this, "testLayout", _descriptor13, this);

          this.currSelectId = 0;
        }

        onLoad() {
          super.onLoad();
          this.testLayout.active = PREVIEW;
          this.ebPassword.string = "111";
          this.ebAccount.string = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).getItem("custom_account") || "";
          this.currSelectId = Number((_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).getItem("custom_server_id"));

          if (!this.currSelectId) {
            this.currSelectId = PREVIEW ? 2 : (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
              error: Error()
            }), ChannelMgr) : ChannelMgr).getDefaultServerId();
          }

          (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
            error: Error()
          }), LoginData) : LoginData).ins.setServerId(this.currSelectId);
          this.previewNode.active = PREVIEW || (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).isDevChannel;
          this.testSdkBtn.node.active = (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).isDebug;

          if (!(_crd && LoginControl === void 0 ? (_reportPossibleCrUseOfLoginControl({
            error: Error()
          }), LoginControl) : LoginControl).ins.isChangeServer) {
            this.checkSdkOk();
          }
        }

        start() {
          this.showArea();

          if (!(_crd && LoginControl === void 0 ? (_reportPossibleCrUseOfLoginControl({
            error: Error()
          }), LoginControl) : LoginControl).ins.isChangeServer) {
            this.initTestServerList();
            this.updateServerName();
            (_crd && RoleControl === void 0 ? (_reportPossibleCrUseOfRoleControl({
              error: Error()
            }), RoleControl) : RoleControl).ins.updateNoticeRed();
            (_crd && SensitiveWordsManager === void 0 ? (_reportPossibleCrUseOfSensitiveWordsManager({
              error: Error()
            }), SensitiveWordsManager) : SensitiveWordsManager).ins.Init();
          } else {
            (_crd && LoginControl === void 0 ? (_reportPossibleCrUseOfLoginControl({
              error: Error()
            }), LoginControl) : LoginControl).ins.isChangeServer = false;
            (_crd && LoginControl === void 0 ? (_reportPossibleCrUseOfLoginControl({
              error: Error()
            }), LoginControl) : LoginControl).ins.connect();
          }
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).LocalEvent_Begin, this.LocalEvent_Begin, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).LoginProcessComplete, this.on_local_LoginProcessComplete, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).ServerMaintain, this.on_local_ServerMaintain, this);
        }

        LocalEvent_Begin(arg1, arg2, arg3, arg4, arg5) {
          console.log("收到事件----", arg1, arg2, arg3, arg4, arg5);
        }

        onClickLogin() {
          if (this.ebAccount.string.length == 0) {
            console.log("账号不能为空");
            return;
          }

          (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).setItem("custom_account", this.ebAccount.string);
          (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).setItem("custom_server_id", this.currSelectId);
          (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
            error: Error()
          }), LoginData) : LoginData).ins.setServerId(this.currSelectId);
          (_crd && LoginControl === void 0 ? (_reportPossibleCrUseOfLoginControl({
            error: Error()
          }), LoginControl) : LoginControl).ins.login(this.ebAccount.string, this.ebPassword.string, "");
        }

        on_local_LoginProcessComplete() {
          if ((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.IsGuideFinished() || Number((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.clientData.guideTrunk) >= 100) {
            this.enterMainScene();
          } else {
            // 开始战斗新手战斗
            let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_StartStageReq();
            msg.stageId = 1;
            (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
              error: Error()
            }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl.StartStageReq, msg);
          }
        }

        showArea() {
          this.serverChooseItem.node.active = false;
          let str = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).getItem("lastLoginArea");

          if (str) {
            try {
              let dd = JSON.parse(str);

              if (dd && dd.area) {
                this.serverChooseItem.node.active = true;
                let data = {};
                data.id = dd.area;
                data.name = dd.name;
                data.status = 3;
                data.role_level = 0;
                this.serverChooseItem.initData(data);
              }
            } catch (e) {}
          }
        }

        on_local_ServerMaintain() {
          if (this.serverChooseItem.node.active) {
            this.serverChooseItem.serverData.status = 1;
            this.serverChooseItem.initData(this.serverChooseItem.serverData);
          }
        }

        enterMainScene() {
          (_crd && SceneMgr === void 0 ? (_reportPossibleCrUseOfSceneMgr({
            error: Error()
          }), SceneMgr) : SceneMgr).ins.loadScene((_crd && ScenesName === void 0 ? (_reportPossibleCrUseOfScenesName({
            error: Error()
          }), ScenesName) : ScenesName).main);
        }

        onClickTest() {
          // UIMgr.ins.show({ viewName: ViewName.DynamicAtlas })
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).AzheGmPop
          }); //UIMgr.ins.show({ viewName: ViewName.BagPop })
        }

        onClickFight() {
          (_crd && FightMsgControl === void 0 ? (_reportPossibleCrUseOfFightMsgControl({
            error: Error()
          }), FightMsgControl) : FightMsgControl).ins.testFight();
        }

        onClickWorldboss() {
          (_crd && FightMsgControl === void 0 ? (_reportPossibleCrUseOfFightMsgControl({
            error: Error()
          }), FightMsgControl) : FightMsgControl).ins.testFight((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().WorldBossStageId);
        }

        onClickPvp() {
          (_crd && FightMsgControl === void 0 ? (_reportPossibleCrUseOfFightMsgControl({
            error: Error()
          }), FightMsgControl) : FightMsgControl).ins.testFightPvp();
        }

        onClickPvpMsg() {
          (_crd && FightMsgControl === void 0 ? (_reportPossibleCrUseOfFightMsgControl({
            error: Error()
          }), FightMsgControl) : FightMsgControl).ins.testFightPvpMsg();
        }

        onClickServer() {
          this.serverList.active = true;
        }

        initTestServerList() {
          let datas = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ServerlistTable;

          for (let key in datas) {
            let item = instantiate(this.serverItem);
            item.active = true;
            item["Id"] = datas[key].ID;
            item["Name"] = datas[key].Name;
            item.getChildByName("nameLab").getComponent(Label).string = datas[key].Name;
            item.on(Node.EventType.TOUCH_END, this.onClickServerItem, this);
            this.serverContent.addChild(item);
          }
        }

        updateServerName() {
          this.serverName.string = (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
            error: Error()
          }), LoginData) : LoginData).ins.getServerlistTable().Name;
        }

        onClickServerItem(event) {
          let target = event.target;
          this.currSelectId = target.Id;
          this.serverList.active = false; // this.serverName.string=target.Name;

          this.currSelectId = target.Id;
          (_crd && LoginData === void 0 ? (_reportPossibleCrUseOfLoginData({
            error: Error()
          }), LoginData) : LoginData).ins.setServerId(this.currSelectId);
          this.updateServerName(); // console.log("FFFFF")
        }

        sdkLoginClick() {
          if ((_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).isDevChannel) {
            return;
          }

          (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).login({}, params => {
            console.log("sdkLoginClick");

            if (params.code == 0) {
              (_crd && LoginControl === void 0 ? (_reportPossibleCrUseOfLoginControl({
                error: Error()
              }), LoginControl) : LoginControl).ins.sdkLogin();
            } else {
              console.log("登录失败");
            }
          });
        }

        onShowAd() {
          // AdMgr.ins.playVideoAd(tab.AdType.AdType_MainChapterReward, () => {
          //     console.log("播放成功")
          // })
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).SdkTestPop
          });
        }

        checkSdkOk() {
          this.sdkLoginBtn.node.active = (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).isDebug; //!this.previewNode.active

          if ((_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).isDevChannel) {
            (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
              error: Error()
            }), AdMgr) : AdMgr).ins.initSdk();
            return;
          }

          let sdkOk = (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).isSdkInitOk();
          console.log("initSdkOk", sdkOk);

          if (sdkOk == 1) {
            this.sdkLoginBtn.node.active = true;
            (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
              error: Error()
            }), AdMgr) : AdMgr).ins.initSdk();
            this.sdkLoginClick();
            return;
          }

          this.scheduleOnce(() => {
            this.checkSdkOk();
          }, 1);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spr", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "previewNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sdkLoginBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "testSdkBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ebAccount", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "ebPassword", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "enterBtn", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "serverList", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "serverName", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "serverContent", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "serverItem", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "serverChooseItem", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "testLayout", [_dec14], {
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
//# sourceMappingURL=52ea4925c90e6200557a9ca01355cc8a7e060f35.js.map