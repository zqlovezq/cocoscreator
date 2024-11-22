
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GuideFrameTips extends cc.Component {
    onLoad() {
        Net.listenLoaclMessage(LOCAL_MESSAGE.HideFrameTips, ()=>{
            this.node.destroy()
        },this)
    }
}
