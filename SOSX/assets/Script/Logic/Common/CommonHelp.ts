/**
 * 
 */

import { tab } from "../../Table/table_gen";
import { showPopLayerV2 } from "../Utils/GameUtils";

 const {ccclass, property} = cc._decorator;

 @ccclass
 export default class CommonHelp extends cc.Component {
 
     @property(cc.Button)
     private close_btn: cc.Button = null;

     @property(cc.Label)
     txt:cc.Label = null
    
     
     static async show(tipsKey:string) {
        let tips = await showPopLayerV2("prefab/CommonHelp", CommonHelp)
        if(tips) {
            tips.initData(tipsKey)
        }
    }
    
     onLoad() {
         this.close_btn.node.on("click", () => { this.setVisible(false); }, this);
     }
 
     public initData(key:string){
        let tipsTbl = tab.Data.TipsTableByKey.getValue(key);
        if (tipsTbl){
            this.txt.string = tipsTbl.Value.replace(/\\n/g, '\n')
        }else{
            this.txt.string = "无内容 type: " + key
        }
        
     }
 
     setVisible(visible: boolean){
         this.node.removeFromParent();
         this.node.destroy();
     }
     
     onDestroy() {
         console.log("抽卡Tips界面销毁");
     }
 }
 