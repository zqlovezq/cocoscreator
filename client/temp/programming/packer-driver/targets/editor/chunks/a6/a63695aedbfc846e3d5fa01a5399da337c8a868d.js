System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "client_protocol", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Prefab, Sprite, ViewScreen, FincaFightData, FincaFightControl, EventMgr, proto, FincaFightItem, ButtonLock, UIMgr, ViewName, SimpleRoleInfo, PlayerHeadItem, LangMgr, ItemPoolMgr, HeroData, tab, Net, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, FincaFightView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewScreen(extras) {
    _reporterNs.report("ViewScreen", "../../../framework/base/ViewScreen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightData(extras) {
    _reporterNs.report("FincaFightData", "./FincaFightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightControl(extras) {
    _reporterNs.report("FincaFightControl", "./FincaFightControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightItem(extras) {
    _reporterNs.report("FincaFightItem", "./FincaFightItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfButtonLock(extras) {
    _reporterNs.report("ButtonLock", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSimpleRoleInfo(extras) {
    _reporterNs.report("SimpleRoleInfo", "../friends/SimpleRoleInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerHeadItem(extras) {
    _reporterNs.report("PlayerHeadItem", "../common/PlayerHeadItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "../hero/HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
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
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ViewScreen = _unresolved_2.ViewScreen;
    }, function (_unresolved_3) {
      FincaFightData = _unresolved_3.FincaFightData;
    }, function (_unresolved_4) {
      FincaFightControl = _unresolved_4.FincaFightControl;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_6) {
      FincaFightItem = _unresolved_6.FincaFightItem;
    }, function (_unresolved_7) {
      ButtonLock = _unresolved_7.ButtonLock;
    }, function (_unresolved_8) {
      UIMgr = _unresolved_8.UIMgr;
    }, function (_unresolved_9) {
      ViewName = _unresolved_9.ViewName;
    }, function (_unresolved_10) {
      SimpleRoleInfo = _unresolved_10.SimpleRoleInfo;
    }, function (_unresolved_11) {
      PlayerHeadItem = _unresolved_11.PlayerHeadItem;
    }, function (_unresolved_12) {
      LangMgr = _unresolved_12.LangMgr;
    }, function (_unresolved_13) {
      ItemPoolMgr = _unresolved_13.ItemPoolMgr;
    }, function (_unresolved_14) {
      HeroData = _unresolved_14.HeroData;
    }, function (_unresolved_15) {
      tab = _unresolved_15.tab;
    }, function (_unresolved_16) {
      Net = _unresolved_16.Net;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b8a280XFHZIo7VmwAYjS/+/", "FincaFightView", undefined);

      __checkObsolete__(['_decorator', 'EventTouch', 'instantiate', 'Label', 'Node', 'Prefab', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      /** PVP */

      _export("FincaFightView", FincaFightView = (_dec = ccclass('FincaFightView'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property([Node]), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Node), _dec10 = (_crd && ButtonLock === void 0 ? (_reportPossibleCrUseOfButtonLock({
        error: Error()
      }), ButtonLock) : ButtonLock)(1, () => {}), _dec(_class = (_class2 = class FincaFightView extends (_crd && ViewScreen === void 0 ? (_reportPossibleCrUseOfViewScreen({
        error: Error()
      }), ViewScreen) : ViewScreen) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "lbl_free_times", _descriptor, this);

          _initializerDefineProperty(this, "node_list_content", _descriptor2, this);

          _initializerDefineProperty(this, "pfb_list_item", _descriptor3, this);

          _initializerDefineProperty(this, "rank_nodes", _descriptor4, this);

          _initializerDefineProperty(this, "node_reward", _descriptor5, this);

          _initializerDefineProperty(this, "lbl_my_ranking", _descriptor6, this);

          _initializerDefineProperty(this, "lbl_my_ranking_score", _descriptor7, this);

          _initializerDefineProperty(this, "node_no_rank_txt", _descriptor8, this);

          this.reward_type = 0;
          this.top_player_list = [];
          this.newSocre = 0;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetFincaBattleOpponentsRsp, this.on_s2c_GetFincaBattleOpponentsRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetFincaBattleFightRecordsRsp, this.on_s2c_GetFincaBattleFightRecordsRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetSimpleRankRsp, this.on_s2c_GetSimpleRankRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.FincaBattleFightRsp, this.on_s2c_FincaBattleFightRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetFincaBattleInfoRsp, this.on_s2c_GetFincaBattleInfoRsp, this);
        }

        on_s2c_GetFincaBattleInfoRsp(msg) {
          this.setView();
          this.newSocre = msg.score;
        }

        on_s2c_FincaBattleFightRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return; // 刷新界面

          this.newSocre = msg.newScore;
          this.setAsyncView();

          if ((_crd && FincaFightControl === void 0 ? (_reportPossibleCrUseOfFincaFightControl({
            error: Error()
          }), FincaFightControl) : FincaFightControl).isSweepPvp) {
            if (msg.rewards.length > 0) {
              (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                error: Error()
              }), UIMgr) : UIMgr).ins.show({
                viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                  error: Error()
                }), ViewName) : ViewName).CongratulationPop,
                data: msg.rewards
              });
            }
          }

          (_crd && FincaFightControl === void 0 ? (_reportPossibleCrUseOfFincaFightControl({
            error: Error()
          }), FincaFightControl) : FincaFightControl).isSweepPvp = false;
        }

        setView() {
          (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.setFincaFightTeamTab();
          (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.checkAllBooks();
          this.checkTeamInfo();
          this.setAsyncView();
        }

        onShow() {
          let finca_msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetFincaBattleInfoReq();
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetFincaBattleInfoReq, finca_msg);
        } // 判断队伍信息


        checkTeamInfo() {
          let heroChange = false;

          for (let i = 0; i < (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.heroIds.length; i++) {
            const heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
              error: Error()
            }), HeroData) : HeroData).ins.getById((_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
              error: Error()
            }), FincaFightData) : FincaFightData).ins.heroIds[i]);

            if (!heroInfo && (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
              error: Error()
            }), FincaFightData) : FincaFightData).ins.heroIds[i] !== 0) {
              (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
                error: Error()
              }), FincaFightData) : FincaFightData).ins.heroIds[i] = 0;
              heroChange = true;
            }
          }

          if (heroChange) {
            // 重新保存阵容
            (_crd && FincaFightControl === void 0 ? (_reportPossibleCrUseOfFincaFightControl({
              error: Error()
            }), FincaFightControl) : FincaFightControl).ins.reqSetFincaBattleHeroIds((_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
              error: Error()
            }), FincaFightData) : FincaFightData).ins.heroIds);
          }

          if (!(_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.heroIds[0]) {
            this.onClickChangeHero();
          }
        }

        onDestroy() {
          super.onDestroy;
        }

        unRegister() {
          super.unRegister();
        } // 设置动态信息


        setAsyncView() {
          // 当前免费次数
          this.lbl_free_times.string = String((_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.freeTimes); // 获取对手信息设置list列表

          (_crd && FincaFightControl === void 0 ? (_reportPossibleCrUseOfFincaFightControl({
            error: Error()
          }), FincaFightControl) : FincaFightControl).ins.reqGetFincaBattleOpponents(); // 获取排行榜信息

          (_crd && FincaFightControl === void 0 ? (_reportPossibleCrUseOfFincaFightControl({
            error: Error()
          }), FincaFightControl) : FincaFightControl).ins.reqGetRank();
        } // 获取庄园战对手


        on_s2c_GetFincaBattleOpponentsRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          this.refreshOpponentsList(msg.opponents);
        }

        refreshOpponentsList(list) {
          this.node_list_content.destroyAllChildren();

          for (let i = 0; i < list.length; i++) {
            const roleInfo = list[i];
            const item = instantiate(this.pfb_list_item);
            item.parent = this.node_list_content;
            const itemTs = item.getComponent(_crd && FincaFightItem === void 0 ? (_reportPossibleCrUseOfFincaFightItem({
              error: Error()
            }), FincaFightItem) : FincaFightItem);
            itemTs.setData(roleInfo);
          }
        } // 点击战报按钮显示战斗界面


        onClickReport() {
          (_crd && FincaFightControl === void 0 ? (_reportPossibleCrUseOfFincaFightControl({
            error: Error()
          }), FincaFightControl) : FincaFightControl).ins.reqGetFincaBattleFightRecords();
        } // 获取战报信息


        on_s2c_GetFincaBattleFightRecordsRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).FincaFightLogPop,
            data: msg.fightRecords
          });
        } // 调整阵型


        onClickChangeHero() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).FincaFightStageView
          });
        }

        on_s2c_GetSimpleRankRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          this.top_player_list = msg.rankList;
          (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.FincaRanking = msg.ranking + 1;
          (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.FincaRankingSimple = msg.selfSimple;
          const rankStr = msg.ranking > -1 ? msg.ranking + 1 : (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab("ui_rank_1");
          this.lbl_my_ranking.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("ui_fincafight_4", [rankStr]);

          if (this.newSocre) {
            this.lbl_my_ranking_score.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_fincafight_5", [this.newSocre]);
          } else {
            this.lbl_my_ranking_score.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_fincafight_5", [msg.selfSimple ? msg.selfSimple.score : 0]);
          }

          this.node_no_rank_txt.active = msg.ranking === -1;
          this.setTopRank(); // 当前奖励

          this.switchView(null, "1");
        }

        setTopRank() {
          for (let i = 0; i < this.rank_nodes.length; i++) {
            const data = this.top_player_list[i];
            this.setRankItem(this.rank_nodes[i], data);
          }
        }

        setRankItem(node, data) {
          const nameTxt = node.getChildByName("name_txt").getComponent(Label);
          const infoTxt = node.getChildByName("info_txt").getComponent(Label);
          const nobodyTxt = node.getChildByName("nobody_txt");
          const palyerHerdItem = node.getChildByName("PlayerHeadItem").getComponent(_crd && PlayerHeadItem === void 0 ? (_reportPossibleCrUseOfPlayerHeadItem({
            error: Error()
          }), PlayerHeadItem) : PlayerHeadItem);

          if (data) {
            nameTxt.node.active = true;
            infoTxt.node.active = true;
            nobodyTxt.active = false;
            palyerHerdItem.node.active = true;
            infoTxt.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_fincafight_13", [data.score]);
            const roleId = data.simple.id;

            if (roleId.indexOf("r_") > -1) {
              // 当前是机器人 SimpleRoleInfo
              const robotId = Number(roleId.slice(-1));
              const tabInfo = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().RobotTableById.getValue(robotId);
              palyerHerdItem.setCloseCallBack(() => {});
              const lbl_lv = palyerHerdItem.node.getChildByName("lv_node").getChildByName("lv_txt").getComponent(Label);
              const sp_head = palyerHerdItem.node.getChildByName("head_node").getChildByName("head_img").getComponent(Sprite);
              lbl_lv.string = String(tabInfo.PlayerLevel);
              let itemHeadTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().ItemTableById.getValue(tabInfo.Image);
              sp_head.setTexture(itemHeadTab.Icon);
              nameTxt.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab(tabInfo.Name);
            } else {
              const playerInfo = new (_crd && SimpleRoleInfo === void 0 ? (_reportPossibleCrUseOfSimpleRoleInfo({
                error: Error()
              }), SimpleRoleInfo) : SimpleRoleInfo)();
              playerInfo.merge(data.simple);
              nameTxt.string = data.simple.name;
              palyerHerdItem.initHeadInfo({
                roleInfo: playerInfo
              });
              palyerHerdItem.setCloseCallBack(() => {
                (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                  error: Error()
                }), UIMgr) : UIMgr).ins.show({
                  viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                    error: Error()
                  }), ViewName) : ViewName).CheckRoleInfoPop,
                  data: {
                    "roleId": roleId
                  }
                });
              });
            }
          } else {
            nameTxt.node.active = false;
            infoTxt.node.active = false;
            nobodyTxt.active = true;
            palyerHerdItem.node.active = false;
          }
        } // 展示奖励弹窗


        showRewardPop() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).FincaFightRankRewardPop
          });
        } // 切换奖励信息


        switchView(e, type) {
          if (e && Number(type) === this.reward_type) {
            return;
          }

          this.reward_type = Number(type);
          this.showRewardInfo();
        } // 显示


        showRewardInfo() {
          const rewards = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.getRewards(this.reward_type, true).selfReward;
          this.node_reward.destroyAllChildren();

          for (let key in rewards) {
            (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.createRewadItem(rewards[key], this.node_reward);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbl_free_times", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_list_content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pfb_list_item", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rank_nodes", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_reward", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lbl_my_ranking", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lbl_my_ranking_score", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_no_rank_txt", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "onClickReport", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "onClickReport"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a63695aedbfc846e3d5fa01a5399da337c8a868d.js.map