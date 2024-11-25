System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, FincaFightTeamState, createAnimation, FincaFightData, HeroData, ShowTips, LangMgr, _dec, _class, _crd, ccclass, property, FincaFightTeamItem;

  function _reportPossibleCrUseOfFincaFightTeamState(extras) {
    _reporterNs.report("FincaFightTeamState", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateAnimation(extras) {
    _reporterNs.report("createAnimation", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightData(extras) {
    _reporterNs.report("FincaFightData", "./FincaFightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "../hero/HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../hero/HeroInfo", _context.meta, extras);
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
    }, function (_unresolved_2) {
      FincaFightTeamState = _unresolved_2.FincaFightTeamState;
    }, function (_unresolved_3) {
      createAnimation = _unresolved_3.createAnimation;
    }, function (_unresolved_4) {
      FincaFightData = _unresolved_4.FincaFightData;
    }, function (_unresolved_5) {
      HeroData = _unresolved_5.HeroData;
    }, function (_unresolved_6) {
      ShowTips = _unresolved_6.ShowTips;
    }, function (_unresolved_7) {
      LangMgr = _unresolved_7.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8f7f2DKcD5C7rbADgxIirrg", "FincaFightTeamItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FincaFightTeamItem", FincaFightTeamItem = (_dec = ccclass('FincaFightTeamItem'), _dec(_class = class FincaFightTeamItem extends Component {
        constructor(...args) {
          super(...args);
          this.emptyNode = null;
          this.lockNode = null;
          this.heroNode = null;
          this.heroSpine = null;
          this.heroInfo = null;
          this.curIndex = 0;
        }

        setData(index) {
          this.curIndex = index;
          let heroId = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.heroIds[index];
          this.heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getById(heroId);
          this.emptyNode = this.node.getChildByName("empty_node");
          this.lockNode = this.node.getChildByName("lock_node");
          this.heroNode = this.node.getChildByName("common_node");
          this.heroSpine = this.heroNode.getChildByName("hero_spine");
          const state = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.getState(index + 1);
          this.refreshItemState(state);

          if (state === (_crd && FincaFightTeamState === void 0 ? (_reportPossibleCrUseOfFincaFightTeamState({
            error: Error()
          }), FincaFightTeamState) : FincaFightTeamState).HERO) {
            (_crd && createAnimation === void 0 ? (_reportPossibleCrUseOfcreateAnimation({
              error: Error()
            }), createAnimation) : createAnimation)(this.heroSpine, this.heroInfo.heroTable.Born, this.heroInfo.heroTable.Idle);
          }
        }

        refreshItemState(state) {
          this.emptyNode.active = state === (_crd && FincaFightTeamState === void 0 ? (_reportPossibleCrUseOfFincaFightTeamState({
            error: Error()
          }), FincaFightTeamState) : FincaFightTeamState).EMPTY;
          this.lockNode.active = state === (_crd && FincaFightTeamState === void 0 ? (_reportPossibleCrUseOfFincaFightTeamState({
            error: Error()
          }), FincaFightTeamState) : FincaFightTeamState).LOCK;
          this.heroNode.active = state === (_crd && FincaFightTeamState === void 0 ? (_reportPossibleCrUseOfFincaFightTeamState({
            error: Error()
          }), FincaFightTeamState) : FincaFightTeamState).HERO;
        }

        onClickLockBtn() {
          const level = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.getUnLockLevel(this.curIndex + 1, true);
          (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
            error: Error()
          }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("Tips_finca_3", [level]));
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=088bb2171cbe4005d189289b6b94f0284d40637d.js.map