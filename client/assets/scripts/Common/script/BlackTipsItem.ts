import { _decorator, Component, Label, Node ,Animation} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BlackTipsItem')
export class BlackTipsItem extends Component {
    @property(Label)
    lblTips:Label = null;
    SetString(str:string) {
        this.lblTips.string = str;
        let anim = this.node.getComponent(Animation);
        anim.play("blackTipsItem");
        anim.on(Animation.EventType.FINISHED, ()=>{
            this.node.removeFromParent();
            this.node.destroy();
        }, this)
    }
}


