/*
 * @Descripttion: 
 */

import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RightAgeTipPop extends PopLayer {
    
    @property(cc.Button)
    btn_closed: cc.Button = null;

    onLoad () {
        this.btn_closed.node.on("click", ()=>{this.setVisible(false);}, this);
    }

    start () {}
}
