System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "client_protocol", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Prefab, ScrollView, ViewPop, MailData, MailListItem, TimeUtil, ItemInfo, proto, ItemPoolMgr, EventMgr, MailControl, ShowTips, UIMgr, ViewName, CommonTipsPop, CommonTipsPopCloseType, LangMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, MailPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMailData(extras) {
    _reporterNs.report("MailData", "./MailData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMailListItem(extras) {
    _reporterNs.report("MailListItem", "./MailListItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTimeUtil(extras) {
    _reporterNs.report("TimeUtil", "../../utils/TimeUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMailControl(extras) {
    _reporterNs.report("MailControl", "./MailControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMailInfo(extras) {
    _reporterNs.report("MailInfo", "./MailInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTipsPop(extras) {
    _reporterNs.report("CommonTipsPop", "../common/CommonTipsPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTipsPopCloseType(extras) {
    _reporterNs.report("CommonTipsPopCloseType", "../common/CommonTipsPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
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
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      ScrollView = _cc.ScrollView;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      MailData = _unresolved_3.MailData;
    }, function (_unresolved_4) {
      MailListItem = _unresolved_4.MailListItem;
    }, function (_unresolved_5) {
      TimeUtil = _unresolved_5.TimeUtil;
    }, function (_unresolved_6) {
      ItemInfo = _unresolved_6.ItemInfo;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_7) {
      ItemPoolMgr = _unresolved_7.ItemPoolMgr;
    }, function (_unresolved_8) {
      EventMgr = _unresolved_8.EventMgr;
    }, function (_unresolved_9) {
      MailControl = _unresolved_9.MailControl;
    }, function (_unresolved_10) {
      ShowTips = _unresolved_10.ShowTips;
      UIMgr = _unresolved_10.UIMgr;
    }, function (_unresolved_11) {
      ViewName = _unresolved_11.ViewName;
    }, function (_unresolved_12) {
      CommonTipsPop = _unresolved_12.CommonTipsPop;
      CommonTipsPopCloseType = _unresolved_12.CommonTipsPopCloseType;
    }, function (_unresolved_13) {
      LangMgr = _unresolved_13.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "576bdduAvBGtoBmqEXvLLoP", "MailPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'ScrollView']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * MailPop
       * zhudingchao
       * Mon Jun 03 2024 10:34:28 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/mail/MailPop.ts
       *
       */

      _export("MailPop", MailPop = (_dec = ccclass('MailPop'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Prefab), _dec14 = property(ScrollView), _dec(_class = (_class2 = class MailPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "mailNode", _descriptor, this);

          _initializerDefineProperty(this, "noMailNode", _descriptor2, this);

          _initializerDefineProperty(this, "titleContent", _descriptor3, this);

          _initializerDefineProperty(this, "titleNameLab", _descriptor4, this);

          _initializerDefineProperty(this, "wordLab", _descriptor5, this);

          _initializerDefineProperty(this, "senderLab", _descriptor6, this);

          _initializerDefineProperty(this, "timeLab", _descriptor7, this);

          _initializerDefineProperty(this, "rewardNode", _descriptor8, this);

          _initializerDefineProperty(this, "getBtnNode", _descriptor9, this);

          _initializerDefineProperty(this, "deleteBtnNode", _descriptor10, this);

          _initializerDefineProperty(this, "oneKeyNode", _descriptor11, this);

          _initializerDefineProperty(this, "itemPrefab", _descriptor12, this);

          _initializerDefineProperty(this, "scrollView", _descriptor13, this);

          this.mailItems = void 0;
          this.currSelectItem = null;
          this.rewardItems = [];
          this.mailInfos = void 0;

          this.onTouchTitleItem = item => {
            if (item != this.currSelectItem) {
              if (this.currSelectItem) {
                this.currSelectItem.setSelectState(false);
              }

              item.setSelectState(true);
              this.currSelectItem = item;
              this.updateMailContent();
            }
          };
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetMailsRsp, this.on_s2c_GetMailsRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveMailsRewardRsp, this.on_s2c_ReceiveMailsRewardRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.DeleteMailsRsp, this.on_s2c_DeleteMailsRsp, this);
          (_crd && MailControl === void 0 ? (_reportPossibleCrUseOfMailControl({
            error: Error()
          }), MailControl) : MailControl).ins.requestGetMails();
        }

        onShow() {//    this.initView();
        }

        initView() {
          let mailInfos = (_crd && MailData === void 0 ? (_reportPossibleCrUseOfMailData({
            error: Error()
          }), MailData) : MailData).ins.getMails();
          mailInfos.sort((a, b) => {
            return b.CreatedAt - a.CreatedAt;
          });
          this.mailInfos = mailInfos;

          if (mailInfos.length > 0) {
            this.scrollView.scrollToTop();
            this.noMailNode.active = false;
            this.mailNode.active = true;

            for (let key in this.mailItems) {
              this.mailItems[key].node.active = false;
            }

            for (let key in mailInfos) {
              let item = this.creatorItem(Number(key));
              item.initData(mailInfos[key], this.onTouchTitleItem);
            }

            this.currSelectItem = this.mailItems[0];
            this.currSelectItem.setSelectState(true);
            this.updateMailContent();
          } else {
            this.noMailNode.active = true;
            this.mailNode.active = false;
          }
        }

        updateMailContent() {
          if (this.currSelectItem) {
            let info = this.currSelectItem.info;

            if (info.Type == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).SysMailType.Gm) {
              this.titleNameLab.string = info.Title;
              this.wordLab.string = info.Content;
              this.senderLab.string = info.Sender;
            } else {
              this.titleNameLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab(info.Title);
              let strs = info.Content.split("|");
              let key = strs[0];
              let valeu = strs.length > 1 ? strs.slice(1, strs.length) : [];
              this.wordLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getCombineString(key, valeu);
              this.senderLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab(info.Sender);
            }

            this.timeLab.string = (_crd && TimeUtil === void 0 ? (_reportPossibleCrUseOfTimeUtil({
              error: Error()
            }), TimeUtil) : TimeUtil).timestampToTime(Number(info.CreatedAt));
            this.rewardNode.removeAllChildren();
            let rews = info.Rewards;

            for (let key in rews) {
              let rewInfo = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
                error: Error()
              }), ItemInfo) : ItemInfo)();
              rewInfo.merge(rews[key]);
              (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                error: Error()
              }), ItemPoolMgr) : ItemPoolMgr).ins.createRewadItem(rewInfo, this.rewardNode); // if(rewInfo.itemTable.Type==tab.ItemType.ItemType_Hero){
              //     let heroInfo=new HeroInfo();
              //     heroInfo.initHeroItemId(rewInfo.itemId);
              //     let itemNode = ItemPoolMgr.ins.createHeroItem(heroInfo,this.rewardNode);
              //     itemNode.getComponent(HeroItem).showHeroNum(rewInfo.num);
              //     this.rewardItems.push(itemNode)
              // }else if(rewInfo.itemTable.Type==tab.ItemType.ItemType_Equip){
              //     let equipInfo=new EquipInfo();
              //     equipInfo.createDefaultData(rewInfo.itemId)
              //     let itemNode = ItemPoolMgr.ins.createItem(equipInfo,this.rewardNode,false);
              //     this.rewardItems.push(itemNode)
              // }
              // else{
              //     let itemNode = ItemPoolMgr.ins.createItem(rewInfo,this.rewardNode);
              //     this.rewardItems.push(itemNode)
              // }
            }

            this.getBtnNode.active = info.isCanReceived;
            this.deleteBtnNode.active = !info.isCanReceived;

            if (!info.isRead) {
              info.isRead = true;
              this.currSelectItem.setShowState();
            }
          }
        }

        creatorItem(index) {
          if (!this.mailItems) {
            this.mailItems = [];
          }

          if (!this.mailItems[index]) {
            let node = instantiate(this.itemPrefab);
            node.parent = this.titleContent;
            this.mailItems.push(node.getComponent(_crd && MailListItem === void 0 ? (_reportPossibleCrUseOfMailListItem({
              error: Error()
            }), MailListItem) : MailListItem));
          }

          this.mailItems[index].node.active = true;
          return this.mailItems[index];
        }

        removeRewardItems() {
          if (this.rewardItems) {// for (let key in this.rewardItems) {
            //     let com=this.rewardItems[key].getComponent(CommonItem);
            //     if(com){
            //         ItemPoolMgr.ins.putCommonItem(this.rewardItems[key]);
            //     }else{
            //         let hero=this.rewardItems[key].getComponent(HeroItem);
            //         if(hero){
            //             ItemPoolMgr.ins.putHeroItem(this.rewardItems[key]);
            //         }else{
            //             this.rewardItems[key].removeFromParent();
            //         }
            //     }
            // }
            // this.rewardItems = [];
          }
        }

        onClickGetBtn() {
          (_crd && MailControl === void 0 ? (_reportPossibleCrUseOfMailControl({
            error: Error()
          }), MailControl) : MailControl).ins.requestReceiveMailsReward([this.currSelectItem.info.id]);
        }

        onClickDeleteBtn() {
          (_crd && MailControl === void 0 ? (_reportPossibleCrUseOfMailControl({
            error: Error()
          }), MailControl) : MailControl).ins.requestDeleteMails([this.currSelectItem.info.id]);
        }

        onClickOneKeyGetBtn() {
          let ids = [];

          for (let key in this.mailInfos) {
            if (this.mailInfos[key].isCanReceived) {
              ids.push(this.mailInfos[key].id);
            }
          }

          if (ids.length > 0) {
            (_crd && MailControl === void 0 ? (_reportPossibleCrUseOfMailControl({
              error: Error()
            }), MailControl) : MailControl).ins.requestReceiveMailsReward(ids);
          } else {
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("ui_mail_5")); //ShowTips("没有可领取的奖励");
          }
        }

        onClickOneKeyDeleteBtn() {
          let ids = [];

          for (let key in this.mailInfos) {
            if (!this.mailInfos[key].isCanReceived && this.mailInfos[key].isRead) {
              ids.push(this.mailInfos[key].id);
            }
          }

          if (ids.length > 0) {
            (_crd && CommonTipsPop === void 0 ? (_reportPossibleCrUseOfCommonTipsPop({
              error: Error()
            }), CommonTipsPop) : CommonTipsPop).create((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_mail_1"), closeType => {
              if (closeType == (_crd && CommonTipsPopCloseType === void 0 ? (_reportPossibleCrUseOfCommonTipsPopCloseType({
                error: Error()
              }), CommonTipsPopCloseType) : CommonTipsPopCloseType).confirm) {
                // console.log("ok")
                (_crd && MailControl === void 0 ? (_reportPossibleCrUseOfMailControl({
                  error: Error()
                }), MailControl) : MailControl).ins.requestDeleteMails(ids);
              } else {
                console.log("cancel");
              }
            });
          } else {
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("ui_mail_6")); //ShowTips("没有可删除的邮件");
          }
        }
        /**
        * 请求邮件
        * @param msg 
        */


        on_s2c_GetMailsRsp(msg) {
          this.initView();
        }
        /**
        * 请求领取
        * @param msg 
        */


        on_s2c_ReceiveMailsRewardRsp(msg) {
          if (msg.ids && msg.ids.length > 0) {
            // MailData.ins.receiveMailsRewardSucc(msg.ids);
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).CongratulationPop,
              data: msg.rewards
            });

            if (this.currSelectItem) {
              this.getBtnNode.active = this.currSelectItem.info.isCanReceived;
              this.deleteBtnNode.active = !this.currSelectItem.info.isCanReceived;
            }

            for (let key in msg.ids) {
              let id = Number(msg.ids[key]);
              let item = this.mailItems.find(a => Number(a.info.id) == id);

              if (item) {
                item.setShowState();
              }
            }
          }
        }
        /**
        * 请求删除邮件成功
        * @param msg 
        */


        on_s2c_DeleteMailsRsp(msg) {
          if (msg.ids && msg.ids.length > 0) {
            this.initView();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mailNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "noMailNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "titleContent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "titleNameLab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "wordLab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "senderLab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "timeLab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "rewardNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "getBtnNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "deleteBtnNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "oneKeyNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec14], {
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
//# sourceMappingURL=601336b2e40acb350b92c1f7231c028b0f815d79.js.map