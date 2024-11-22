// import { GuideTipsTableData } from "../../Tools/staticdata/GuideTipsTableData";

// const {ccclass, property} = cc._decorator;

// @ccclass
// export default class GuideTips extends cc.Component {
//     @property(cc.Label)
//     txtContent: cc.Label = null;

//     showTips(tipsId:number, pos?:cc.Vec2):boolean {
//         // this.node.opacity = 0
//         let tipsTD = GuideTipsTableData.getById(tipsId);
//         if(!tipsTD) {
//             return false;
//         }

//         this.txtContent.string = tipsTD.content;
//         if(pos === undefined) {
//             if(tipsTD.posY == 0) {
//                 this.node.x = tipsTD.posX;
//                 this.node.y = -100;
//             }
//             else {
//                 this.node.setPosition(tipsTD.posX, tipsTD.posY)
//             }
//         }
//         else {
//             this.node.setPosition(pos);
//         }
//         // this.node.getComponent(cc.Animation).play()
//         return true;
//     }
// }