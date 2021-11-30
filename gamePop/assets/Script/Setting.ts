const {ccclass, property} = cc._decorator;

@ccclass
export default class Setting extends cc.Component {
    private userPrivacy:cc.Node = null;
    private userProtocol:cc.Node = null;
    onLoad () {
        this.initLayer();
    }
    onEnable(){
        this.registerEvent();
        cc.Tools.emitEvent("time",0);
        cc.Tools.showBanner();
    }
    initLayer(){
        this.userPrivacy = this.node.getChildByName("user_privacy");
        this.userProtocol = this.node.getChildByName("user_protocol");
        let wrap = this.node.getChildByName("wrap");
        let nickName = wrap.getChildByName("nike_name").getComponent(cc.Label);
        nickName.string = cc.Tools.userInfo.nick_name;
        // icon
        let icon = wrap.getChildByName("icon").getComponent(cc.Sprite);
        var remoteUrl = cc.Tools.userInfo.avatar_url;
        cc.assetManager.loadRemote(remoteUrl, { ext: '.png' }, function (err, texture:cc.Texture2D) {
            // Use texture to create sprite frame
            icon.spriteFrame = new cc.SpriteFrame(texture);
        });
    }
    registerEvent(){
        let closeBtn = this.node.getChildByName("close_btn");
        closeBtn.on(cc.Node.EventType.TOUCH_END,this.closeLayer,this);
        let btn = this.node.getChildByName("btn");
        btn.on(cc.Node.EventType.TOUCH_END,this.closeLayer,this);

        let privacyBtn = this.node.getChildByName("privacy_btn");
        privacyBtn.on(cc.Node.EventType.TOUCH_END,this.showPrivacyLayer,this);

        let closePrivacy = this.userPrivacy.getChildByName("close_privacy");
        closePrivacy.on(cc.Node.EventType.TOUCH_END,this.closePrivacyLayer,this);

        let protocolBtn = this.node.getChildByName("protocol_btn");
        protocolBtn.on(cc.Node.EventType.TOUCH_END,this.showProtocolLayer,this);

        let closeProtocol = this.userProtocol.getChildByName("close_protocol");
        closeProtocol.on(cc.Node.EventType.TOUCH_END,this.closeProtocolLayer,this);
    }
    closePrivacyLayer(){
        this.userPrivacy.active = false;
    }
    showPrivacyLayer(){
        this.userPrivacy.active = true;
    }
    closeProtocolLayer(){
        this.userProtocol.active = false;
    }
    showProtocolLayer(){
        this.userProtocol.active = true;
    }
    removeEvent(){
        let closeBtn = this.node.getChildByName("close_btn");
        closeBtn.off(cc.Node.EventType.TOUCH_END,this.closeLayer,this);

        let btn = this.node.getChildByName("btn");
        btn.off(cc.Node.EventType.TOUCH_END,this.closeLayer,this);

        let privacyBtn = this.node.getChildByName("privacy_btn");
        privacyBtn.off(cc.Node.EventType.TOUCH_END,this.showPrivacyLayer,this);

        let closePrivacy = this.userPrivacy.getChildByName("close_privacy");
        closePrivacy.off(cc.Node.EventType.TOUCH_END,this.closePrivacyLayer,this);

        let protocolBtn = this.node.getChildByName("protocol_btn");
        protocolBtn.off(cc.Node.EventType.TOUCH_END,this.showProtocolLayer,this);

        let closeProtocol = this.userProtocol.getChildByName("close_protocol");
        closeProtocol.off(cc.Node.EventType.TOUCH_END,this.closeProtocolLayer,this);
    }
    closeLayer(){
        this.node.active = false;
        cc.Tools.emitEvent("time",new Date().getTime());
        cc.Tools.hideBanner();
        this.scheduleOnce(()=>{
            this.removeEvent();
            cc.Tools.tableTimes++;
            if(cc.Tools.tableTimes>=5){
                cc.Tools.tableTimes = 0;
                cc.Tools.showTableScreen();
            }
        })
    }
    // update (dt) {}
}
