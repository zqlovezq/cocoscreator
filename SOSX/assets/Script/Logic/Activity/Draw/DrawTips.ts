/**
 * 
 */

const {ccclass, property} = cc._decorator;

@ccclass
export default class DrawTips extends cc.Component {

    @property(cc.Button)

    private close_btn: cc.Button = null;

    onLoad() {
        this.close_btn.node.on("click", () => { this.setVisible(false); }, this);
    }

    start () {

    }

    public initData(){

    }

    setVisible(visible: boolean){
        this.node.removeFromParent();
        this.node.destroy();
    }
    
    onDestroy() {
        console.log("抽卡Tips界面销毁");
    }
}
