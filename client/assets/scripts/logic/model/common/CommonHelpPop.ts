import { _decorator, Component, Label, Node } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
const { ccclass, property } = _decorator;

/**
 * 
 * CommonHelpPop
 * zhudingchao
 * Tue Jun 25 2024 15:43:54 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/common/CommonHelpPop.ts
 *
 */

@ccclass('CommonHelpPop')
export class CommonHelpPop extends ViewPop {
    @property(Label)
    wordLab:Label=null;
   register(): void {
       
   }
   onShow(): void {
    if(this.openData&&this.openData["content"]){
        this.wordLab.string=this.openData["content"];
    }
      
   }
}