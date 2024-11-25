System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, FincaFightTeamState, HeroData, ItemPoolMgr, HeroItem, FincaFightData, ShowTips, LangMgr, _dec, _class, _crd, ccclass, property, FincaFightTeamToggle;

  function _reportPossibleCrUseOfFincaFightTeamState(extras) {
    _reporterNs.report("FincaFightTeamState", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "../hero/HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroItem(extras) {
    _reporterNs.report("HeroItem", "../item/HeroItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightData(extras) {
    _reporterNs.report("FincaFightData", "./FincaFightData", _context.meta, extras);
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
      Label = _cc.Label;
    }, function (_unresolved_2) {
      FincaFightTeamState = _unresolved_2.FincaFightTeamState;
    }, function (_unresolved_3) {
      HeroData = _unresolved_3.HeroData;
    }, function (_unresolved_4) {
      ItemPoolMgr = _unresolved_4.ItemPoolMgr;
    }, function (_unresolved_5) {
      HeroItem = _unresolved_5.HeroItem;
    }, function (_unresolved_6) {
      FincaFightData = _unresolved_6.FincaFightData;
    }, function (_unresolved_7) {
      ShowTips = _unresolved_7.ShowTips;
    }, function (_unresolved_8) {
      LangMgr = _unresolved_8.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "128c7OnXtpIxYFxLTz2FZQA", "FincaFightTeamToggle", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FincaFightTeamToggle", FincaFightTeamToggle = (_dec = ccclass('FincaFightTeamToggle'), _dec(_class = class FincaFightTeamToggle extends Component {
        constructor() {
          super(...arguments);
          this.emptyNode = null;
          this.lockNode = null;
          this.heroNode = null;
          this.selectNode = null;
          this.heroItem = null;
          this.lvNode = null;
          this.curIndex = 0;
        }

        setData(index) {
          var heroId = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.heroIds[index];
          this.curIndex = index;
          this.emptyNode = this.node.getChildByName("empty_node");
          this.lockNode = this.node.getChildByName("lock_node");
          this.heroNode = this.node.getChildByName("item");
          this.selectNode = this.node.getChildByName("select_node");
          this.lvNode = this.node.getChildByName("lv_node").getChildByName("lv_txt").getComponent(Label);
          this.lvNode.string = String(this.getHeroPvpLevel());
          var state = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.getState(index + 1);
          this.emptyNode.active = state === (_crd && FincaFightTeamState === void 0 ? (_reportPossibleCrUseOfFincaFightTeamState({
            error: Error()
          }), FincaFightTeamState) : FincaFightTeamState).EMPTY;
          this.lockNode.active = state === (_crd && FincaFightTeamState === void 0 ? (_reportPossibleCrUseOfFincaFightTeamState({
            error: Error()
          }), FincaFightTeamState) : FincaFightTeamState).LOCK;
          this.heroNode.active = state === (_crd && FincaFightTeamState === void 0 ? (_reportPossibleCrUseOfFincaFightTeamState({
            error: Error()
          }), FincaFightTeamState) : FincaFightTeamState).HERO;
          this.lvNode.node.parent.active = state === (_crd && FincaFightTeamState === void 0 ? (_reportPossibleCrUseOfFincaFightTeamState({
            error: Error()
          }), FincaFightTeamState) : FincaFightTeamState).HERO;
          var heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getById(heroId);

          if (heroId) {
            if (!this.heroItem) {
              var heroItemNode = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                error: Error()
              }), ItemPoolMgr) : ItemPoolMgr).ins.createHeroItem(heroInfo, this.heroNode);
              this.heroItem = heroItemNode.getComponent(_crd && HeroItem === void 0 ? (_reportPossibleCrUseOfHeroItem({
                error: Error()
              }), HeroItem) : HeroItem);
              this.heroItem.setTouchCallBack(() => {// console.log(`cocos 当前点击的index=${index}`)
              });
            } else {
              this.heroItem.UpdateContent(heroInfo);
            }
          }
        }

        setSelectState(isSelect) {
          this.selectNode.active = isSelect;
        }

        refreshItem(heroId) {
          var heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getById(heroId);
          this.heroItem.UpdateContent(heroInfo);
        }

        onClickLockBtn() {
          var level = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.getUnLockLevel(this.curIndex + 1, true);
          (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
            error: Error()
          }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("Tips_finca_3", [level]));
        } // 获取pvp英雄的觉醒星级


        getHeroPvpLevel() {
          var defaultLevel = 5;
          var heroId = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.heroIds[this.curIndex];
          var heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getById(heroId); // 英雄星级>=16时，星级+1

          if (heroInfo && heroInfo.star >= 16) {
            defaultLevel += 1;
          }

          return defaultLevel;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=89fd1922ec5846fa8b85e4dc6f3e80b12aeb6a89.js.map