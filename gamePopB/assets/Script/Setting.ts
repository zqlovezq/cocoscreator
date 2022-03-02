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
        cc.Tools.showBanner();
        cc.Tools.showTableScreen();
    }
    initLayer(){
        this.userPrivacy = this.node.getChildByName("user_privacy");
        this.userProtocol = this.node.getChildByName("user_protocol");
        let wrap = this.node.getChildByName("wrap");
        let nickName = wrap.getChildByName("nike_name").getComponent(cc.Label);
        nickName.string = cc.Tools.userInfo.nick_name;
        // icon
        let icon = wrap.getChildByName("icon");
        let avatar = icon.getChildByName("avatar");
        let avatarJs = avatar.getComponent("Avatar");
                avatarJs.loadUrl(cc.Tools.userInfo.avatar_url).then((res)=>{
                    // console.log("图片加载成功",res);
                    avatarJs.setAvatar(res,cc.Tools.userInfo.grade_id || 0)
                }).catch(err=>{
                    console.log("图片加载"+err);
                })
        avatar.scale = 1.2
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
        this.scheduleOnce(()=>{
            this.removeEvent();
            cc.Tools.emitEvent("init",false);
            cc.Tools.hideBanner();
        })
    }
    // update (dt) {}
}
