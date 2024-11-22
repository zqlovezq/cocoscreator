
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class changeTasklayer extends PopLayer {

    OkClickCallback:Function = null; /*  */

    /*  */
    setOkClickCallback(callback:Function){
        this.OkClickCallback = callback
    }

    /*  */
    onOkClick(){
        if(this.OkClickCallback){
            this.OkClickCallback()
        }
        this.hide()
    }
}
