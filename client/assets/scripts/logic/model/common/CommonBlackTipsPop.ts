import { _decorator, Component, HorizontalTextAlignment, Label, Node, UITransform } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { LangMgr } from '../../mgr/LangMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * 通用提示框
 * CommonBlackTipsPop
 * zhudingchao
 * Mon May 20 2024 14:10:40 GMT+0800 (中国标准时间)
 * CommonBlackTipsPop.ts
 * CommonBlackTipsPop
 * db://assets/scripts/logic/model/common/CommonBlackTipsPop.ts
 * https://docs.cocos.com/creator/3.8/manual/zh/
 *
 */

@ccclass('CommonBlackTipsPop')
export class CommonBlackTipsPop extends ViewPop {

  @property(Node)
  bgNode:Node=null;
  @property(Label)
  tipsLab:Label=null;
  register(){

  }
  onShow(): void {
      if(this.openData["worldPos"]){
        // let pos=this.node.getComponent(UITransform).convertToNodeSpaceAR(this.openData["worldPos"])
        this.bgNode.worldPosition=this.openData["worldPos"];
      }
      if(this.openData["WordTableKey"]){
        this.tipsLab.string=LangMgr.getLab(this.openData["WordTableKey"]);
      }
      if(this.openData["scaleX"]){
        let sX=this.openData["scaleX"];
        this.bgNode.setScale(sX,1);
        if(sX<0){
          this.tipsLab.node.setScale(sX,1)
          this.tipsLab.node.getComponent(UITransform).anchorX=1;
          this.tipsLab.horizontalAlign=HorizontalTextAlignment.RIGHT;
        }
      }
        
     
  }


   
}