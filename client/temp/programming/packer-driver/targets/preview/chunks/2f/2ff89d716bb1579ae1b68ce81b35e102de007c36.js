System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ActivityData, _dec, _class, _crd, ccclass, property, RecruitLimitToggleItem;

  function _reportPossibleCrUseOfRecruitLimitView(extras) {
    _reporterNs.report("RecruitLimitView", "./RecruitLimitView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityData(extras) {
    _reporterNs.report("ActivityData", "../activity/ActivityData", _context.meta, extras);
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
      ActivityData = _unresolved_2.ActivityData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b4507r8njpCYpRndoe8f1ye", "RecruitLimitToggleItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RecruitLimitToggleItem", RecruitLimitToggleItem = (_dec = ccclass('RecruitLimitToggleItem'), _dec(_class = class RecruitLimitToggleItem extends Component {
        constructor() {
          super(...arguments);
          this._actIndex = 0;
          this._mainView = null;
        }

        setData(actIndex, mainView) {
          this._actIndex = actIndex;
          this._mainView = mainView;
          var actInfos = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.getAllUpData();
          var curInfo = actInfos[actIndex]; // const activityInfo = tab.getData().ActivityTableByActivityId.getValue(this._acitivtyId);
          // this.lbl_name.string = LangMgr.getLab(activityInfo.WordKey);
          // this.lbl_name_1.string = LangMgr.getLab(activityInfo.WordKey);
          // if(this._acitivtyId===this._mainView.curActivityId){
          //     this.toggle_node.isChecked = true;
          // }
          // let com= this.red_dot.addComponent(RedComp);
          // com.redNode=this.red_dot;
          // let evet=new RedEventComp();
          // if(activityInfo.Type===tab.OpenFunctionName.OpenFunctionName_BattlePassSignIn1){
          //     evet.event = RedDotType.Combine_Pass;
          // }else if(activityInfo.Type===tab.OpenFunctionName.OpenFunctionName_ActivityHeroGrow){
          //     evet.event = RedDotType.Combine_Grow;
          // }
          // else if(activityInfo.Type===tab.OpenFunctionName.OpenFunctionName_ActivityMall){
          //     evet.event = RedDotType.Combine_Shop;
          // }
          // evet.child = String(mainView.openData);
          // com.types.push(evet);
          // com.addRed();
        }

        onClickCheck(e, type) {
          if (this._actIndex === this._mainView.curIndex) {
            return;
          }

          this._mainView.switchView(this._actIndex);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2ff89d716bb1579ae1b68ce81b35e102de007c36.js.map