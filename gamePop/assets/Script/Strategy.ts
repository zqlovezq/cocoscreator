// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Strategy extends cc.Component {
    private wrap: cc.Node = null;
    private closeLayer: cc.Node = null;
    private consultLayer: cc.Node = null;
    private strategyLayer: cc.Node = null;
    private privacyLayer: cc.Node = null;
    private webView: cc.Node = null;
    private item: cc.Node = null;
    private setBtn: cc.Node = null;
    private consultBtn: cc.Node = null;
    private strategyBtn: cc.Node = null;
    private loginOutBtn: cc.Node = null;
    private closeBtn: cc.Node = null;
    private closeSetBtn: cc.Node = null;
    private privacyBtn: cc.Node = null;
    private closePrivacyBtn: cc.Node = null;

    onLoad() {
        cc.Tools.screenAdapter();
        this.wrap = this.node.getChildByName("wrap");
        this.closeLayer = this.node.getChildByName("close_layer");
        this.consultLayer = this.node.getChildByName("consult_layer");
        this.strategyLayer = this.node.getChildByName("strategy_layer");
        this.item = this.node.getChildByName("item");
        this.webView = this.node.getChildByName("web_view");
        this.privacyLayer = this.node.getChildByName("user_privacy");

        this.setBtn = this.wrap.getChildByName("top").getChildByName("btn_1");
        this.consultBtn = this.wrap.getChildByName("bottom").getChildByName("btn_2");
        this.strategyBtn = this.wrap.getChildByName("bottom").getChildByName("btn_3");
        this.loginOutBtn = this.closeLayer.getChildByName("btn_4");
        this.closeBtn = this.webView.getChildByName("close_btn");
        this.closeSetBtn = this.closeLayer.getChildByName("btn_5");
        this.privacyBtn = this.closeLayer.getChildByName("btn_6");
        this.closePrivacyBtn = this.privacyLayer.getChildByName("close_privacy");

        this.registerEvent();
        // 获取信息列表
        let sendData = {};
        cc.Tools.sendRequest("post-list", "GET", sendData).then((res) => {
            let listConsultData = res.data.news;
            let listStrategyData = res.data.strategy;
            for (let key of Object.keys(listConsultData)) {
                let element = listConsultData[key];
                let item = cc.instantiate(this.item);
                item.active = true;
                let content = this.consultLayer.getChildByName("view").getChildByName("content");
                content.addChild(item);
                let title = item.getChildByName("title").getComponent(cc.Label);
                let text = item.getChildByName("text").getComponent(cc.Label);
                title.string = element.title;
                text.string = element.brief;
                item["id"] = element.id;
                this.loadSprite(element.image, item.getChildByName("icon").getComponent(cc.Sprite));
                item.on(cc.Node.EventType.TOUCH_END, this.showWebView, this)
            }
            for (let key of Object.keys(listStrategyData)) {
                let element = listStrategyData[key];
                let item = cc.instantiate(this.item);
                item.active = true;
                let content = this.strategyLayer.getChildByName("view").getChildByName("content");
                content.addChild(item);
                let title = item.getChildByName("title").getComponent(cc.Label);
                let text = item.getChildByName("text").getComponent(cc.Label);
                title.string = element.title;
                text.string = element.brief;
                item["id"] = element.id;
                this.loadSprite(element.image, item.getChildByName("icon").getComponent(cc.Sprite));
                item.on(cc.Node.EventType.TOUCH_END, this.showWebView, this)
            }
        })
    }
    start() {
        this.showConsultLayer();
        let sendData = {};
        cc.Tools.sendRequest("UserInfo", "GET", sendData).then((res) => {
            cc.Tools.userInfo = res.data;
            let icon = this.closeLayer.getChildByName("mask").getChildByName("icon").getComponent(cc.Sprite);
            var remoteUrl = cc.Tools.userInfo.avatar_url;
            cc.assetManager.loadRemote(remoteUrl, { ext: '.png' }, function (err, texture: cc.Texture2D) {
                icon.spriteFrame = new cc.SpriteFrame(texture);
            });
        }).catch((err) => {
            if (err === "token验证失败,请重新登陆") {
                // 重新登陆
                cc.director.loadScene('Login');
                cc.sys.localStorage.setItem("token", "");
            }
        })
    }
    loadSprite(url, icon) {
        cc.assetManager.loadRemote(url, { ext: '.png' }, function (err, texture: cc.Texture2D) {
            icon.spriteFrame = new cc.SpriteFrame(texture);
        });
    }
    registerEvent() {
        this.setBtn.on(cc.Node.EventType.TOUCH_END, this.showSetLayer, this);
        this.consultBtn.on(cc.Node.EventType.TOUCH_END, this.showConsultLayer, this);
        this.strategyBtn.on(cc.Node.EventType.TOUCH_END, this.showStrategyLayer, this);
        this.loginOutBtn.on(cc.Node.EventType.TOUCH_END, this.loginOut, this);
        this.closeBtn.on(cc.Node.EventType.TOUCH_END, this.hideWebView, this);
        this.closeSetBtn.on(cc.Node.EventType.TOUCH_END, this.hideSetLayer, this)
        this.privacyBtn.on(cc.Node.EventType.TOUCH_END, this.showPrivacy, this);
        this.closePrivacyBtn.on(cc.Node.EventType.TOUCH_END, this.hidePrivacy, this)
    }
    removeEvent() {
        this.setBtn.off(cc.Node.EventType.TOUCH_END, this.showSetLayer, this);
        this.consultBtn.off(cc.Node.EventType.TOUCH_END, this.showConsultLayer, this);
        this.strategyBtn.off(cc.Node.EventType.TOUCH_END, this.showStrategyLayer, this);
        this.loginOutBtn.off(cc.Node.EventType.TOUCH_END, this.loginOut, this);
        this.closeBtn.off(cc.Node.EventType.TOUCH_END, this.hideWebView, this);
        this.closeSetBtn.off(cc.Node.EventType.TOUCH_END, this.hideSetLayer, this);
        this.privacyBtn.off(cc.Node.EventType.TOUCH_END, this.showPrivacy, this);
        this.closePrivacyBtn.off(cc.Node.EventType.TOUCH_END, this.hidePrivacy, this)
    }
    showPrivacy() {
        this.privacyLayer.active = true;
    }
    hidePrivacy(){
        this.privacyLayer.active = false;
    }
    loginOut() {
        cc.director.loadScene('Login');
        cc.sys.localStorage.setItem("token", "");
    }
    setectBtn(btn: cc.Node) {
        btn.getChildByName("select").active = true;
    }
    unSetectBtn(btn: cc.Node) {
        btn.getChildByName("select").active = false;
    }
    showConsultLayer() {
        this.consultLayer.active = true;
        this.strategyLayer.active = false;
        this.unSetectBtn(this.strategyBtn);
        this.setectBtn(this.consultBtn);
    }
    showStrategyLayer() {
        this.consultLayer.active = false;
        this.strategyLayer.active = true;
        this.setectBtn(this.strategyBtn);
        this.unSetectBtn(this.consultBtn);
    }
    showSetLayer() {
        this.closeLayer.active = true;
    }
    hideSetLayer() {
        this.closeLayer.active = false;
    }
    hideWebView() {
        this.webView.active = false;
    }
    showWebView(e) {
        let target = e.target;
        this.webView.active = true;;
        let web: cc.WebView = this.webView.getChildByName("web").getComponent(cc.WebView);
        let id = target.id;
        web.url = `https://api.jiankangzhuan.com/api.Hbxxl/post-detail?id=${id}`
    }
    // update (dt) {}
}
