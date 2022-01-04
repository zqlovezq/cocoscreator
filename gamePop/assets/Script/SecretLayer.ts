// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class SecretLayer extends cc.Component {
    private wrap:cc.Node = null;
    onLoad(){
        this.wrap = this.node.getChildByName("wrap");
        this.registerEvent();
        // 设置layer
        let userId = this.wrap.getChildByName("user_id").getComponent(cc.Label);
        userId.string = cc.Tools.userInfo.user_id;

        let channel = this.wrap.getChildByName("channel").getComponent(cc.Label);
        channel.string = cc.sys.localStorage.getItem("channel")
    }
    start () {

    }
    onEnable(){
        cc.Tools.emitEvent("time",0);
    }
    registerEvent(){
        let closeBtn = this.wrap.getChildByName("close_btn");
        closeBtn.on(cc.Node.EventType.TOUCH_END,this.closeLayer,this);
    }
    closeLayer(){
        // cc.Tools.hideFeedScreen();
        this.node.active = false;
        cc.Tools.emitEvent("time",new Date().getTime());
    }
}
