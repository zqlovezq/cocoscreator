import { _decorator, Component, Node } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
const { ccclass, property } = _decorator;

/**
 * 
 * RecruitProProbabilityPop
 * zhudingchao
 * Tue Jul 23 2024 17:21:27 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/recruit/RecruitProProbabilityPop.ts
 *
 */

@ccclass('RecruitProProbabilityPop')
export class RecruitProProbabilityPop extends ViewPop {
  register(): void {
      
  }
  onShow(): void {
    if(this.openData&&this.openData["heroClass"]){
        let heroClass=this.openData["heroClass"];
        let node=this.node.getChildByName("node"+heroClass);
        if(node){
            node.active=true;
        }
    }
      
  }
}