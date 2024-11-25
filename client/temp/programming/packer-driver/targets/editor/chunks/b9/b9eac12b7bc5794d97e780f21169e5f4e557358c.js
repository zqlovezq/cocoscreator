System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Node, Prefab, Toggle, UITransform, Vec2, Vec3, InfiniteList, FincaFightTeamItem, FincaFightTeamToggle, tab, HeroDataControl, FincaFightTeamState, EventMgr, LocalEvent, AmendmentEventLocation, ButtonLock, deepClone, HeroData, Func, FincaBagLayoutCell, FincaFightData, FincaFightControl, ShowTips, LangMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, FincaFightStageViewHero;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfInfiniteList(extras) {
    _reporterNs.report("InfiniteList", "../../../Common/InfiniteList/InfiniteList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightTeamItem(extras) {
    _reporterNs.report("FincaFightTeamItem", "./FincaFightTeamItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightTeamToggle(extras) {
    _reporterNs.report("FincaFightTeamToggle", "./FincaFightTeamToggle", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "../hero/herobag/HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightTeamState(extras) {
    _reporterNs.report("FincaFightTeamState", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAmendmentEventLocation(extras) {
    _reporterNs.report("AmendmentEventLocation", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfButtonLock(extras) {
    _reporterNs.report("ButtonLock", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdeepClone(extras) {
    _reporterNs.report("deepClone", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "../hero/HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaBagLayoutCell(extras) {
    _reporterNs.report("FincaBagLayoutCell", "./FincaBagLayoutCell", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightData(extras) {
    _reporterNs.report("FincaFightData", "./FincaFightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightControl(extras) {
    _reporterNs.report("FincaFightControl", "./FincaFightControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
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
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Toggle = _cc.Toggle;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      InfiniteList = _unresolved_2.default;
    }, function (_unresolved_3) {
      FincaFightTeamItem = _unresolved_3.FincaFightTeamItem;
    }, function (_unresolved_4) {
      FincaFightTeamToggle = _unresolved_4.FincaFightTeamToggle;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }, function (_unresolved_6) {
      HeroDataControl = _unresolved_6.HeroDataControl;
    }, function (_unresolved_7) {
      FincaFightTeamState = _unresolved_7.FincaFightTeamState;
    }, function (_unresolved_8) {
      EventMgr = _unresolved_8.EventMgr;
    }, function (_unresolved_9) {
      LocalEvent = _unresolved_9.LocalEvent;
    }, function (_unresolved_10) {
      AmendmentEventLocation = _unresolved_10.AmendmentEventLocation;
      ButtonLock = _unresolved_10.ButtonLock;
      deepClone = _unresolved_10.deepClone;
    }, function (_unresolved_11) {
      HeroData = _unresolved_11.HeroData;
    }, function (_unresolved_12) {
      Func = _unresolved_12.Func;
    }, function (_unresolved_13) {
      FincaBagLayoutCell = _unresolved_13.FincaBagLayoutCell;
    }, function (_unresolved_14) {
      FincaFightData = _unresolved_14.FincaFightData;
    }, function (_unresolved_15) {
      FincaFightControl = _unresolved_15.FincaFightControl;
    }, function (_unresolved_16) {
      ShowTips = _unresolved_16.ShowTips;
    }, function (_unresolved_17) {
      LangMgr = _unresolved_17.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "394883Q9f9KB6V6eXUoStbl", "FincaFightStageViewHero", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'instantiate', 'Node', 'Prefab', 'Sprite', 'Toggle', 'UITransform', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FincaFightStageViewHero", FincaFightStageViewHero = (_dec = ccclass('FincaFightStageViewHero'), _dec2 = property(_crd && InfiniteList === void 0 ? (_reportPossibleCrUseOfInfiniteList({
        error: Error()
      }), InfiniteList) : InfiniteList), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(UITransform), _dec6 = property([_crd && FincaFightTeamItem === void 0 ? (_reportPossibleCrUseOfFincaFightTeamItem({
        error: Error()
      }), FincaFightTeamItem) : FincaFightTeamItem]), _dec7 = property([_crd && FincaFightTeamToggle === void 0 ? (_reportPossibleCrUseOfFincaFightTeamToggle({
        error: Error()
      }), FincaFightTeamToggle) : FincaFightTeamToggle]), _dec8 = property([Node]), _dec9 = property(Node), _dec10 = (_crd && ButtonLock === void 0 ? (_reportPossibleCrUseOfButtonLock({
        error: Error()
      }), ButtonLock) : ButtonLock)(1, () => {}), _dec(_class = (_class2 = class FincaFightStageViewHero extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "list_heros", _descriptor, this);

          _initializerDefineProperty(this, "pfb_hero_item", _descriptor2, this);

          _initializerDefineProperty(this, "node_touch_area", _descriptor3, this);

          _initializerDefineProperty(this, "touch_transform", _descriptor4, this);

          _initializerDefineProperty(this, "teamMembersArray", _descriptor5, this);

          _initializerDefineProperty(this, "teamToggleArray", _descriptor6, this);

          _initializerDefineProperty(this, "boundingBoxArray", _descriptor7, this);

          _initializerDefineProperty(this, "vocationToggleNode", _descriptor8, this);

          this._lineHeroCount = 3;
          this._bagVocationType = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Warrior;
          this._touchHeroPos = new Vec3();
          this._bTouch = false;
          this._list = [];
          this._curSelectIndex = 0;
          this.teamArr = [];
          this.teamPosArr = [];
          this._moveNode = null;
          this._tempNode = null;
        }

        onLoad() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).Finca_Team_Change, this.teamHeroChange, this);
          this.node_touch_area.on(Node.EventType.TOUCH_START, this.onTouchBegan, this);
          this.node_touch_area.on(Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
          this.node_touch_area.on(Node.EventType.TOUCH_END, this.onTouchEnded, this);
          this.node_touch_area.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancelled, this);
        }

        teamHeroChange(index) {
          this.teamMembersArray[index - 1].setData(index - 1);
          this.teamToggleArray[index - 1].setData(index - 1);
          this.showHeroView(true); // 判断是否还有新的空位自动移到下一个空位

          this.checkEmpty();
        }

        checkEmpty() {
          const _emptyIndex = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.getHeroEmptyIndex();

          if (_emptyIndex) {
            this.onClickTeamToggle(null, String(_emptyIndex));

            const _toggle = this.teamToggleArray[_emptyIndex - 1].node.getComponent(Toggle);

            _toggle.isChecked = true;
          } else {
            (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
              error: Error()
            }), FincaFightData) : FincaFightData).ins.HeroToggleIndex = 1;
          }
        }

        initData() {
          this.checkEmpty();
          (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.curSelectHero = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.heroIds[(_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.HeroToggleIndex - 1];

          for (let i = 0; i < this.teamMembersArray.length; i++) {
            const v = this.teamMembersArray[i];
            v.setData(i);
            this.teamPosArr.push(v.node.getPosition());
          }

          for (let i = 0; i < this.teamToggleArray.length; i++) {
            const v = this.teamToggleArray[i];
            v.setData(i);
          }

          this.setVocationToggle();
          this.showHeroView(true);
        }

        onDestroy() {
          (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.refreshBagData(0);
        }

        onTouchBegan(event) {
          this._touchHeroPos = this.touch_transform.convertToNodeSpaceAR((_crd && AmendmentEventLocation === void 0 ? (_reportPossibleCrUseOfAmendmentEventLocation({
            error: Error()
          }), AmendmentEventLocation) : AmendmentEventLocation)(new Vec3(event.getUILocation().x, event.getUILocation().y, 0)));

          for (let i = 0; i < this.boundingBoxArray.length; i++) {
            const v = this.boundingBoxArray[i];
            const areaId = Number(v.name);
            const heroId = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
              error: Error()
            }), FincaFightData) : FincaFightData).ins.heroIds[areaId - 1];

            if (heroId && v.getComponent(UITransform).getBoundingBox().contains(new Vec2(this._touchHeroPos.x, this._touchHeroPos.y))) {
              this._bTouch = true;
              this._curSelectIndex = areaId;
              console.log("cocos 当前选择的index为=", this._curSelectIndex);
              this._moveNode = this.teamMembersArray[this._curSelectIndex - 1].node;
              (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                error: Error()
              }), Func) : Func).cocosNodeZIndex(this._moveNode, 100);
            }
          }
        }

        onTouchMoved(event) {
          if (!this._bTouch) {
            return;
          }

          const touchMovePos = this.touch_transform.convertToNodeSpaceAR((_crd && AmendmentEventLocation === void 0 ? (_reportPossibleCrUseOfAmendmentEventLocation({
            error: Error()
          }), AmendmentEventLocation) : AmendmentEventLocation)(new Vec3(event.getUILocation().x, event.getUILocation().y, 0)));

          if (touchMovePos.x > this.touch_transform.width / 2) {
            touchMovePos.x = this.touch_transform.width / 2;
          }

          if (touchMovePos.x < -this.touch_transform.width / 2) {
            touchMovePos.x = -this.touch_transform.width / 2;
          }

          if (touchMovePos.y > this.touch_transform.height / 2) {
            touchMovePos.y = this.touch_transform.height / 2;
          }

          if (touchMovePos.y < -this.touch_transform.height / 2) {
            touchMovePos.y = -this.touch_transform.height / 2;
          }

          this._moveNode.setPosition(touchMovePos);

          this.temporaryExchangeHero();
        }

        onTouchEnded(event) {
          if (!this._bTouch) {
            return;
          }

          console.log("cocos 触发 onTouchEnded");
          const endPos = this.touch_transform.convertToNodeSpaceAR((_crd && AmendmentEventLocation === void 0 ? (_reportPossibleCrUseOfAmendmentEventLocation({
            error: Error()
          }), AmendmentEventLocation) : AmendmentEventLocation)(new Vec3(event.getUILocation().x, event.getUILocation().y, 0))); // if(this._touchHeroPos.subtract(endPos))

          let distPos = this._touchHeroPos.subtract(endPos);

          let dist = distPos.length();
          console.log("cocos向量的长度为-->", dist);
          this._touchHeroPos = endPos;

          if (dist < 5) {
            // 下阵英雄
            (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
              error: Error()
            }), FincaFightData) : FincaFightData).ins.heroIds[this._curSelectIndex - 1] = 0;
            this.teamMembersArray[this._curSelectIndex - 1].node.setPosition(this.teamPosArr[this._curSelectIndex - 1]);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).Finca_Team_Change, this._curSelectIndex);
            this.cleanTouchInfo();
          } else {
            this.confirmExchangeHero();
          }
        }

        onTouchCancelled(event) {
          console.log("cocos 触发 onTouchCancelled");

          if (this._moveNode) {
            this._moveNode.setPosition(this.teamPosArr[this._curSelectIndex - 1]);
          }

          this.cleanTouchInfo();
        } // 判断是否进入区域


        checkEnterArea() {
          for (let i = 0; i < this.boundingBoxArray.length; i++) {
            const v = this.boundingBoxArray[i];
            const areaId = Number(v.name);
            const heroId = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
              error: Error()
            }), FincaFightData) : FincaFightData).ins.heroIds[areaId - 1];

            if (heroId && areaId !== this._curSelectIndex && v.getComponent(UITransform).getBoundingBox().contains(new Vec2(this._touchHeroPos.x, this._touchHeroPos.y))) {
              return Number(v.name);
            }
          }

          return -1;
        } // 临时交换英雄的位置


        temporaryExchangeHero() {
          if (this.checkEnterArea() > 0) {
            const v = this.teamMembersArray[this.checkEnterArea() - 1].node;

            if (!this._tempNode) {
              this._tempNode = v;

              this._tempNode.setPosition(this.teamPosArr[this._curSelectIndex - 1]);
            }
          } else {
            if (this._tempNode) {
              const tempNodeIndex = Number(this._tempNode.name.replace("pos_node", ""));

              this._tempNode.setPosition(this.teamPosArr[tempNodeIndex - 1]);

              this._tempNode = null;
            }
          }
        } // 最终交换英雄的位置


        confirmExchangeHero() {
          if (this.checkEnterArea() > 0) {
            this.exchangeTeamMember(this._curSelectIndex, this.checkEnterArea());
          } else {
            // 位置没有发生变化
            if (this._tempNode) {
              const tempNodeIndex = Number(this._tempNode.name.replace("pos_node", ""));

              this._tempNode.setPosition(this.teamPosArr[tempNodeIndex - 1]);
            }

            this._moveNode.setPosition(this.teamPosArr[this._curSelectIndex - 1]);
          }

          this.cleanTouchInfo();
        }
        /* 最终确认能不能交换 */


        cleanTouchInfo() {
          this._bTouch = false;

          if (this._moveNode) {
            (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
              error: Error()
            }), Func) : Func).cocosNodeZIndex(this._moveNode, 0);
          }

          this._curSelectIndex = 0;
          this._moveNode = null;
          this._tempNode = null;
        }

        async exchangeTeamMember(selectIndex, changeIndex) {
          console.log(`cocos 当前选择将=${selectIndex}和${changeIndex}互换`);
          let temp = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.heroIds[selectIndex - 1];
          (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.heroIds[selectIndex - 1] = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.heroIds[changeIndex - 1];
          (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.heroIds[changeIndex - 1] = temp;
          console.log((_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.heroIds);
          this.teamMembersArray[selectIndex - 1].setData(selectIndex - 1);
          this.teamMembersArray[changeIndex - 1].setData(changeIndex - 1);
          this.teamMembersArray[selectIndex - 1].node.setPosition(this.teamPosArr[selectIndex - 1]);
          this.teamMembersArray[changeIndex - 1].node.setPosition(this.teamPosArr[changeIndex - 1]);
        }

        groupHeroList() {
          const result = [];
          let heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getById((_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.heroId);

          if (heroInfo) {
            let heroList = (_crd && deepClone === void 0 ? (_reportPossibleCrUseOfdeepClone({
              error: Error()
            }), deepClone) : deepClone)((_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
              error: Error()
            }), HeroDataControl) : HeroDataControl).ins.getHeroListByVocation(this._bagVocationType, true));

            if (this._bagVocationType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroClass.HeroClass_Max) {
              for (let i = heroList.length - 1; i >= 0; i--) {
                const heroId = heroList[i];
                const heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
                  error: Error()
                }), HeroData) : HeroData).ins.getById(heroId);

                if (heroInfo.heroClassTable.HeroClass === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).HeroClass.HeroClass_Warrior) {
                  heroList.splice(i, 1);
                }
              }
            }

            for (let i = 0; i < heroList.length; i += this._lineHeroCount) {
              result.push(heroList.slice(i, i + this._lineHeroCount));
            }
          }

          return result;
        }

        showHeroView(isInit) {
          // 刷新背包列表
          this._list = this.groupHeroList();

          if (isInit) {
            this.list_heros.Init({
              getCellNumber: this.getCellCount.bind(this),
              getCellSize: this.getCellHeight.bind(this),
              getCellIdentifer: this.getCellIdentifer.bind(this),
              getCellView: this.getCellView.bind(this),
              getCellData: this.GetCellData.bind(this)
            });
          } else {
            this.list_heros.Refresh();
          }

          this.list_heros.scrollToOffset(new Vec2(0, 0), 1, true);
        }

        getCellCount() {
          return this._list.length;
        }

        getCellHeight() {
          return 185;
        }

        getCellIdentifer() {
          return "HeroBagLayoutCell";
        }

        getCellView() {
          return instantiate(this.pfb_hero_item).getComponent(_crd && FincaBagLayoutCell === void 0 ? (_reportPossibleCrUseOfFincaBagLayoutCell({
            error: Error()
          }), FincaBagLayoutCell) : FincaBagLayoutCell);
        }

        GetCellData(idx) {
          return this._list[idx];
        }
        /* 根据职业刷新界面 */


        switchVocation(event, vocationType) {
          if (this._bagVocationType == Number(vocationType)) {
            return;
          }

          this._bagVocationType = Number(vocationType);
          let heroList = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.getHeroListByVocation(this._bagVocationType, true);
          (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.refreshBagData(heroList[0]);
          this.showHeroView(true);
        }

        onClickTeamToggle(event, curIndex) {
          if ((_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.HeroToggleIndex === Number(curIndex)) {
            return;
          }

          if ((_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.getState(Number(curIndex)) === (_crd && FincaFightTeamState === void 0 ? (_reportPossibleCrUseOfFincaFightTeamState({
            error: Error()
          }), FincaFightTeamState) : FincaFightTeamState).LOCK) {
            const _toggle = this.teamToggleArray[(_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
              error: Error()
            }), FincaFightData) : FincaFightData).ins.HeroToggleIndex - 1].node.getComponent(Toggle);

            _toggle.isChecked = true;
            return;
          }

          if (Number(curIndex) !== 1) {
            this._bagVocationType = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroClass.HeroClass_Max;
          } else {
            this._bagVocationType = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroClass.HeroClass_Warrior;
          }

          (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.HeroToggleIndex = Number(curIndex);
          this.setVocationToggle();
          this.showHeroView(true);
        } // 设置职业toggle


        setVocationToggle() {
          for (let i = 0; i < this.vocationToggleNode.children.length; i++) {
            const toggle = this.vocationToggleNode.children[i];
            const vocation = Number(toggle.name.slice(-1));

            if (this._bagVocationType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).HeroClass.HeroClass_Warrior) {
              toggle.active = vocation === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).HeroClass.HeroClass_Warrior;
            } else {
              toggle.active = !(vocation === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).HeroClass.HeroClass_Warrior);
            }
          }

          const _toggle = this.vocationToggleNode.getChildByName("Toggle" + this._bagVocationType).getComponent(Toggle);

          _toggle.isChecked = true;
        } // 点击战士上下阵


        clickWarrorBtn() {
          if ((_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.heroIds[0]) {
            (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
              error: Error()
            }), FincaFightData) : FincaFightData).ins.heroIds[0] = 0;
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).Finca_Team_Change, 1);
          } else {
            this.onClickTeamToggle(null, String(1));

            const _toggle = this.teamToggleArray[0].node.getComponent(Toggle);

            _toggle.isChecked = true;
          }
        } // 请求保存阵容


        onClickSaveTeam() {
          if (this._bTouch) {
            return;
          }

          if ((_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.heroIds[0]) {
            (_crd && FincaFightControl === void 0 ? (_reportPossibleCrUseOfFincaFightControl({
              error: Error()
            }), FincaFightControl) : FincaFightControl).ins.reqSetFincaBattleHeroIds((_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
              error: Error()
            }), FincaFightData) : FincaFightData).ins.heroIds);
          } else {
            // 至少上个战士
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_finca_1"));
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "list_heros", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pfb_hero_item", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_touch_area", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "touch_transform", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "teamMembersArray", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "teamToggleArray", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "boundingBoxArray", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "vocationToggleNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "onClickSaveTeam", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "onClickSaveTeam"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b9eac12b7bc5794d97e780f21169e5f4e557358c.js.map