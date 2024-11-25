System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ViewPop, _dec, _class, _crd, ccclass, property, RecruitProbabilityPop;

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "869aea7ZAJNfLVK5iBT3I3o", "RecruitProbabilityPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RecruitProbabilityPop", RecruitProbabilityPop = (_dec = ccclass('RecruitProbabilityPop'), _dec(_class = class RecruitProbabilityPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        // @property(Prefab)
        // ProbabilityItem: Prefab = null;
        // @property(Node)
        // node_content: Node = null;
        // private type: RecruitType = RecruitType.None
        // private _BookMap:Map<number,number[]> = new Map()
        register() {}

        onShow() {// // TipsStrArr = ["Tips_recruit_hero_4","Tips_recruit_heropiece_5","Tips_recruit_hero_5"]
          // this.type = this.openData.type;
          // if (this.type !== RecruitType.Vocation) {
          //     if (this.type === RecruitType.SeniorGuarantee) {
          //         const data = sortByVocation(HeroDataControl.ins.getHeroListByAptitude(tab.HeroAptitude.HeroAptitude_SSR));
          //         const item = instantiate(this.ProbabilityItem);
          //         item.parent = this.node_content;
          //         const itemTs = item.getComponent(RecruitProbabilityItem)
          //         itemTs.setHeroData(data, tab.HeroAptitude.HeroAptitude_SSR, this.type);
          //     } else if(this.type === RecruitType.Book){
          //         this.getBookInfoByAptitude();
          //         for (let i = tab.HeroAptitude.HeroAptitude_SR; i >= tab.HeroAptitude.HeroAptitude_N; i--) {
          //             const item = instantiate(this.ProbabilityItem);
          //             item.parent = this.node_content;
          //             const itemTs = item.getComponent(RecruitProbabilityItem)
          //             itemTs.setHeroData(this._BookMap.get(i), i, this.type);
          //         }
          //     }else if(this.type===RecruitType.BookGuarantee){
          //         this.getBookInfoByAptitude();
          //         const item = instantiate(this.ProbabilityItem);
          //         item.parent = this.node_content;
          //         const itemTs = item.getComponent(RecruitProbabilityItem)
          //         itemTs.setHeroData(this._BookMap.get(tab.HeroAptitude.HeroAptitude_SR), tab.HeroAptitude.HeroAptitude_SR, this.type);
          //     }else {
          //         for (let i = tab.HeroAptitude.HeroAptitude_SSR; i >= tab.HeroAptitude.HeroAptitude_N; i--) {
          //             const data = sortByVocation(HeroDataControl.ins.getHeroListByAptitude(i));
          //             const item = instantiate(this.ProbabilityItem);
          //             item.parent = this.node_content;
          //             const itemTs = item.getComponent(RecruitProbabilityItem)
          //             itemTs.setHeroData(data, i, this.type);
          //         }
          //     }
          // } else {
          //     const TipsStrArr = ["Tips_recruit_hero_5", "Tips_recruit_heropiece_5", "Tips_recruit_hero_4"]
          //     for (let i = 0; i < TipsStrArr.length; i++) {
          //         const recruit = this.openData.recruit;
          //         let vocation = (recruit-190)/10
          //         const data = HeroDataControl.ins.getBookHeroListByVocation(vocation,false);
          //         const item = instantiate(this.ProbabilityItem);
          //         item.parent = this.node_content;
          //         const itemTs = item.getComponent(RecruitProbabilityItem)
          //         itemTs.setHeroData(data, i, this.type, TipsStrArr[i]);
          //     }
          // }
        }

        getBookInfoByAptitude() {// const bookDatas = RareBookData.ins.getBookInfos(true);
          // for (let i = 0; i < bookDatas.length; i++) {
          //     const bookData = bookDatas[i];
          //     if(this._BookMap.has(bookData.bookTable.Aptitude)){
          //         let arr = this._BookMap.get(bookData.bookTable.Aptitude);
          //         arr.push(bookData.itemId);
          //     }else{
          //         this._BookMap.set(bookData.bookTable.Aptitude, [bookData.itemId]);
          //     }
          // }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=190c2a83252fa6009b1790c9ffcc695f1e8f5fab.js.map