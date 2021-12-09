const {ccclass, property} = cc._decorator;

@ccclass
export default class PopSuccess extends cc.Component {
    private wrap:cc.Node = null;
    @property (cc.SpriteFrame)
    frames = []
    onLoad(){
        this.wrap = this.node.getChildByName("wrap");
        this.registerEvent();
    }
    onEnable(){
        cc.Tools.showFeedScreen("success");
        cc.Tools.emitEvent("time",0);
        let closeBtn = this.wrap.getChildByName("close_btn");
        closeBtn.active = false;
        this.scheduleOnce(()=>{
            closeBtn.active = true;
        },1)
        this.wrap.getChildByName("video_btn").getChildByName("icon").getComponent(cc.Sprite).spriteFrame = cc.Tools.userInfo.new_free_level_times>0?this.frames[1]:this.frames[0];
    }
    registerEvent(){
        let closeBtn = this.wrap.getChildByName("close_btn");
        closeBtn.on(cc.Node.EventType.TOUCH_END,this.closeLayer,this);
        closeBtn.active = false;
        let videoBtn = this.wrap.getChildByName("video_btn");
        videoBtn.on(cc.Node.EventType.TOUCH_END,this.showVideo,this)
        cc.Tools.breatheAnim(videoBtn)
    }
    removeEvent(){
        let closeBtn = this.wrap.getChildByName("close_btn");
        closeBtn.off(cc.Node.EventType.TOUCH_END,this.closeLayer,this);
        let videoBtn = this.wrap.getChildByName("video_btn");
        videoBtn.off(cc.Node.EventType.TOUCH_END,this.showVideo,this);
        videoBtn.stopAllActions();
    }
    showVideo(){
        if(cc.Tools.userInfo.new_free_level_times){
            let sendData = {
                type:4,
                ts:new Date().getTime()
            };
            cc.Tools.sendRequest("NewAward", "POST", sendData).then((res) => {
                this.closeLayer();
                cc.Tools.emitEvent("getTicket", { ticket: res.data.amount, add:res.data.add_amount,type: 1 ,videoType:4});
            });
        }else{
            cc.Tools.showJiliAd(4);
            this.closeLayer();
        }
    }
    closeLayer(){
        cc.Tools.hideFeedScreen();
        this.node.active = false;
        cc.Tools.emitEvent("time",new Date().getTime());
        cc.Tools.emitEvent("init",true);
        // this.scheduleOnce(()=>{
        //     this.removeEvent();
        // })
    }
    // update (dt) {}
}
