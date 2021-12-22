const { ccclass, property } = cc._decorator;

@ccclass
export default class Turntable extends cc.Component {
    private beginTurn: boolean = false;
    private speed: number = 18;
    private point: cc.Node = null;
    private circle: number = 0;
    private value: number = 1;
    private endAngle: number = 0;
    private ticket: number = 0;
    private canClick = true;
    private freeTimes = 0;
    private add: number = 0;
    onLoad() {
        // this.initLayer();
        this.point = this.node.getChildByName("wrap").getChildByName("point");
        cc.Tools.Event.on('getTable', this.getTableFunc, this);
        let closeBtn = this.node.getChildByName("close_btn");
        closeBtn.on(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
    }
    onEnable() {
        // 展示banner+插屏
        cc.Tools.emitEvent("time", 0);
        cc.Tools.showBanner();
        cc.Tools.showTableScreen();
        //  获取抽奖状态
        this.refreshTimes();
    }
    // 刷新次数
    refreshTimes() {
        let sendData = {};
        cc.Tools.sendRequest("LuckyLotteryStatus", "GET", sendData).then((res) => {
            let data = res.data
            let lbl = this.node.getChildByName("click_btn").getChildByName("lbl_2").getComponent(cc.Label);
            if (data.free_times) {
                lbl.string = `免费：${data.free_times}次`
            } else {
                lbl.string = `剩余：${data.max_times - data.used_times}次`
            }
            this.freeTimes = data.free_times;
            this.registerEvent();
        })
    }
    registerEvent() {
        let clickBtn = this.node.getChildByName("click_btn");
        cc.Tools.breatheAnim(clickBtn);
        clickBtn.on(cc.Node.EventType.TOUCH_END, this.clickVideo, this);
    }
    clickVideo() {
        // 点击加锁
        if (cc.Tools.lock) {
            cc.Tools.showTips(this.node.parent, `<b><color=#ffffff>点击太频繁</c></b>`);
            return;
        } else {
            cc.Tools.lock = true;
            setTimeout(() => {
                cc.Tools.lock = false;
            }, 3000)
        }
        if (this.freeTimes > 0) {
            let sendData = {
                type: 3,
                ts: new Date().getTime()
            };
            cc.Tools.sendRequest("NewAward", "POST", sendData).then((res) => {
                this.freeTimes--;
                let lbl = this.node.getChildByName("click_btn").getChildByName("lbl_2").getComponent(cc.Label);
                lbl.string = `免费：${this.freeTimes}次`
                // 转盘转动
                let posArr = [360, 60, 120, 180, 240, 300];
                this.ticket = res.data.amount;
                this.add = res.data.add_amount;
                this.beginTurn = true;
                this.point.angle = 360;
                this.speed = 18;
                this.value = 1;
                this.circle = 0;
                let index
                if (res.data.amount < 101) {
                    index = 0;
                } else if (res.data.amount >= 500) {
                    index = 2;
                } else {
                    index = 1;
                }
                this.endAngle = posArr[index];
            });
        } else {
            if (!this.canClick) {
                return;
            }
            cc.Tools.showJiliAd(3);
        }
    }
    /**
     * 
     * @param ad 广告ad
     */
    getTableFunc(ad: string) {
        let sendData = {
            "ad_id": ad,
            "ts": new Date().getTime(),
            "action":"LuckyLottery"
        };
        let posArr = [360, 60, 120, 180, 240, 300]
        cc.Tools.sendRequest("PipeAction", "POST", sendData).then((res) => {
            this.ticket = res.amount;
            this.add = res.add_amount;
            this.beginTurn = true;
            this.point.angle = 360;
            this.speed = 18;
            this.value = 1;
            this.circle = 0;
            this.endAngle = posArr[res.id - 1];
        });
    }
    removeEvent() {
        // let closeBtn = this.node.getChildByName("close_btn");
        // closeBtn.off(cc.Node.EventType.TOUCH_END,this.closeLayer,this);
        let clickBtn = this.node.getChildByName("click_btn");
        clickBtn.stopAllActions();
    }
    closeLayer() {
        if (this.beginTurn) {
            return;
        }
        this.node.active = false;
        cc.Tools.emitEvent("time", new Date().getTime());
        cc.Tools.hideBanner();
        cc.Tools.hideTableScreen();
        this.scheduleOnce(() => {
            this.removeEvent();
        })
    }
    update(dt) {
        if (this.beginTurn) {
            // 开始旋转
            this.canClick = false;
            this.point.angle -= this.speed;
            if (this.point.angle <= 0) {
                this.point.angle = 360;
                this.circle++;

                if (this.circle % 2 === 0) {
                    // 条件达成 表示转了两圈
                    this.speed -= this.value;
                    if (this.value === 4.5) {
                        this.value = 4.5;
                    } else {
                        this.value += 1.5;
                    }
                }
            }
            if (this.speed <= 5 && this.point.angle <= this.endAngle) {
                this.point.angle = this.endAngle;
                this.beginTurn = false;
                this.scheduleOnce(() => {
                    this.canClick = true;
                    let info = { ticket: this.ticket, add: this.add, type: 2, videoType: 3 }
                    cc.Tools.emitEvent("getTicket", info);
                    this.refreshTimes();
                }, 0.5)
            }
        }
    }
}
