const { ccclass, property } = cc._decorator;

@ccclass
export default class Lottery extends cc.Component {
    private wrap: cc.Node = null;
    private canClick = true;
    private clickBtn = 0;
    private specialNumber = 0;
    private normalNumber = 0;
    onLoad() {
        this.wrap = this.node.getChildByName("wrap");
        let closeBtn = this.wrap.getChildByName("close_btn");
        closeBtn.on(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
        cc.Tools.Event.on("openBox", this.openBoxFunc, this);
        let normal = this.wrap.getChildByName("normal");
        let special = this.wrap.getChildByName("special");
        let text = normal.getChildByName("text").getComponent(cc.Label);
        text.string = `X${cc.Tools.treasure.left_num_a}`;
        let _text = special.getChildByName("text").getComponent(cc.Label);
        _text.string = `X${cc.Tools.treasure.left_num_b}`;
        this.specialNumber = cc.Tools.treasure.left_num_b;
        this.normalNumber = cc.Tools.treasure.left_num_a;
        this.registerEvent();
    }
    onEnable() {
        cc.Tools.showBanner();
        cc.Tools.showTableScreen();
        let activity = this.wrap.getChildByName("activity");
        let _text = activity.getChildByName("text").getComponent(cc.Label);
        let _time = cc.Tools.treasure.end - Math.floor(new Date().getTime() / 1000);
        // 显示进度条
        _text.string = cc.Tools.changeSecondTime(_time);
        let cash = this.wrap.getChildByName("cash");
        let _cash = Math.floor(cc.Tools.treasure.amount / 100);
        cash.getChildByName("cash").getComponent(cc.Label).string = `${_cash}元`;
        // cash.getChildByName("lbl_2").getComponent(cc.Label).string = `满${_cash}元即可提现`;
        let progressBar = cash.getChildByName("progress_bar").getComponent(cc.ProgressBar);
        progressBar.progress = cc.Tools.treasure.rate / 100;
        let lbl: cc.RichText = cash.getChildByName("progress_bar").getChildByName("lbl").getComponent(cc.RichText);
        lbl.string = `<color=#FE7F01>${cc.Tools.treasure.rate * (cc.Tools.treasure.ad_num / 100)}</c><color=#FFFAF6>/${cc.Tools.treasure.ad_num}</color>`
        cc.Tools.Event.emit("refreshWallet");
    }
    registerEvent() {
        let cash = this.wrap.getChildByName("cash");
        let getBtn = cash.getChildByName("btn");
        getBtn.on(cc.Node.EventType.TOUCH_END, this.goCashLayer, this);
        if (cc.Tools.treasure.rate >= 100) {
            cc.Tools.breatheAnim(getBtn);
        } else {
            cc.Tools.setButtonGary(getBtn);
        }
        //点击normal按钮
        let normal = this.wrap.getChildByName("normal");
        normal.on(cc.Node.EventType.TOUCH_END, this.clickNormal, this)
        let special = this.wrap.getChildByName("special");
        special.on(cc.Node.EventType.TOUCH_END, this.clickSpecial, this)
    }
    clickNormal(e) {
        if (this.canClick) {
            let self = this;
            let target = e.target;
            if (this.normalNumber <= 0) {
                cc.Tools.showTips(self.node.parent, `<b><color=#ffffff>次数不足</c></b>`);
                return;
            }
            this.clickBtn = 1;
            let light = target.getChildByName("light");
            let anim = target.getChildByName("icon").getComponent(cc.Animation);
            anim.play();
            anim.on('finished', function (e) {
                light.active = true;
                light.angle = 0;
                cc.tween(light).to(1, { angle: -360 }).call(() => {
                    anim.setCurrentTime(0, "normal");
                    light.active = false;
                    light.angle = 0;
                    cc.Tools.showTips(self.node.parent, `<b><color=#ffffff>看完视频 领取更多红包券</c></b>`).then(() => {
                        cc.Tools.showJiliAd(16);
                        // cc.Tools.adCallBack("100,16")
                    });
                }).start()
            })
        }
    }
    clickSpecial(e) {
        if (this.canClick) {
            let target = e.target;
            let self = this;
            if (this.specialNumber <= 0) {
                cc.Tools.showTips(self.node.parent, `<b><color=#ffffff>次数不足</c></b>`);
                return;
            }
            this.clickBtn = 10;
            let light = target.getChildByName("light");
            let anim = target.getChildByName("icon").getComponent(cc.Animation);
            anim.play();
            anim.on('finished', function (e) {
                console.log("宝箱打开");
                light.active = true;
                light.angle = 0;
                cc.tween(light).to(1, { angle: -360 }).call(() => {
                    anim.setCurrentTime(0, "special");
                    light.active = false;
                    light.angle = 0;
                    cc.Tools.showTips(self.node.parent, `<b><color=#ffffff>看完视频 领取更多红包券</c></b>`).then(() => {
                        cc.Tools.showJiliAd(16);
                        // cc.Tools.adCallBack("100,16")
                    });
                }).start()
            })
        }
    }
    openBoxFunc(ad_id: string) {
        //像服务器发送请求
        let sendData = {
            "ad_id": ad_id,
            "ts": new Date().getTime(),//时间戳
            "ctype": this.clickBtn,
            "action": "OpenBox"
        };
        // console.log("openbox---"+JSON.stringify(sendData));
        cc.Tools.sendRequest("PipeOpenTreasureReq", "POST", sendData).then((res) => {
            // console.log("点击宝箱返回信息",res);
            if (this.clickBtn === 1) {
                cc.Tools.emitEvent("getTicket", { ticket: res.amount, add: res.add_amount, type: 2, videoType: 16 });
                //刷新次数
                let normal = this.wrap.getChildByName("normal");
                let text = normal.getChildByName("text").getComponent(cc.Label);
                text.string = `X${res.addon_num}`
                this.normalNumber = res.addon_num;
            } else if (this.clickBtn === 10) {
                cc.Tools.emitEvent("getTenTicket", { ticket: res.amount, add: res.add_amount, type: 2, videoType: 16 });
                let special = this.wrap.getChildByName("special");
                let text = special.getChildByName("text").getComponent(cc.Label);
                text.string = `X${res.addon_num}`
                this.specialNumber = res.addon_num
            }
            let cash = this.wrap.getChildByName("cash");
            let progressNode: cc.Node = cash.getChildByName("progress_bar")
            let progressBar: cc.ProgressBar = progressNode.getComponent(cc.ProgressBar);
            let lbl: cc.RichText = progressNode.getChildByName("lbl").getComponent(cc.RichText);
            lbl.string = `<color=#FE7F01>${res.addon_num2 * (cc.Tools.treasure.ad_num / 100)}</c><color=#FFFAF6>/${cc.Tools.treasure.ad_num}</color>`
            progressBar.progress = res.addon_num2 / 100;
            cc.Tools.treasure.rate = res.addon_num2;
            let getBtn = cash.getChildByName("btn");
            if (res.addon_num2 >= 100) {
                cc.Tools.breatheAnim(getBtn);
                getBtn.getComponent(cc.Button).enableAutoGrayEffect = false;
                getBtn.getComponent(cc.Button).interactable = true;
            } else {
                cc.Tools.setButtonGary(getBtn);
            }
        })
    }
    goCashLayer() {
        this.node.active = false;
        this.scheduleOnce(() => {
            this.removeEvent();
            cc.Tools.emitEvent("cash");
        })
    }
    removeEvent() {

    }
    closeLayer() {
        this.node.active = false;
        cc.Tools.emitEvent("init", false);
        cc.Tools.hideBanner();
        // cc.Tools.hideTableScreen();
        this.scheduleOnce(() => {
            this.removeEvent();
        })
    }
}
