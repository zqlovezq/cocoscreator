const { ccclass, property } = cc._decorator;

@ccclass
export default class GetCash extends cc.Component {
    @property(cc.Node)
    item: cc.Node = null;
    @property(cc.Node)
    content: cc.Node = null;
    @property([cc.SpriteFrame])
    bgSp = [];
    @property([cc.SpriteFrame])
    btnSp = [];
    onLoad() {
        let closeBtn = this.node.getChildByName("close_btn");
        closeBtn.on(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
    }
    onEnable() {
        this.setLayer();
        cc.Tools.showBanner();
        cc.Tools.showTableScreen();
        cc.Tools.setAdTimes();
    }
    setLayer() {
        // 像服务器获取提现信息
        this.content.destroyAllChildren();
        let ticket = this.node.getChildByName("cash").getChildByName("ticket");
        let text_1 = ticket.getChildByName("text_1").getComponent(cc.Label);
        text_1.string = cc.Tools.wallet.amount ;
        ticket.getChildByName("layout").getChildByName("text_2").getComponent(cc.Label).string = this.handleNumber(cc.Tools.wallet.amount / 10000);
        let sendData = {

        };
        cc.Tools.sendRequest("CashOutList", "GET", sendData).then((res) => {
            let items = res.data.items
            for (let i = 0; i < items.length; i++) {
                let item = cc.instantiate(this.item);
                item.active = true;
                item.name = "" + items[i].id;
                this.content.addChild(item);
                this.setItem(item, items[i]);
                let bg = item.getChildByName("bg").getComponent(cc.Sprite);
                bg.spriteFrame = this.bgSp[(i % 2)];
                let btn = item.getChildByName("btn").getComponent(cc.Sprite);
                btn.spriteFrame = this.btnSp[(i % 2)];
            }
            this.registerEvent();
        })
    }
    handleNumber(numb) {
        // 先讲数字转换成字符串
        if (numb) {
            let str = "" + numb;
            let key = str.split(".");
            let newKey = key[0] + "." + key[1].slice(0, 2);
            return newKey;
        } else {
            return "0";
        }
    }
    setItem(item: cc.Node, data: any) {
        let _new = item.getChildByName("new");
        _new.active = data.type === 2;
        if (data.left_times === -1) {
            item.getChildByName("special").active = true;;
        } else {
            item.getChildByName("times").active = true;;
            let lbl = item.getChildByName("times").getChildByName("lbl").getComponent(cc.Label);
            lbl.string = `${data.left_times}`
        }
        let lbl_1 = item.getChildByName("lbl_1").getComponent(cc.Label);
        lbl_1.string = `${data.amount / 100}元`;
        let lbl_2 = item.getChildByName("lbl_2").getComponent(cc.Label);
        lbl_2.string = `消耗${data.cash_ticket}红包券`;
    }
    registerEvent() {
        for (let i = 0; i < this.content.children.length; i++) {
            let item = this.content.children[i];
            let btn = item.getChildByName("btn");
            if (btn.getComponent(cc.Button).interactable) {
                btn.on(cc.Node.EventType.TOUCH_END, this.touchBtn, this);
            }
        }
    }
    touchBtn(e) {
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
        cc.Tools.hideBanner();
        // cc.Tools.hideTableScreen();
        if (cc.sys.localStorage.getItem("showBtn") == 100) {
            cc.Tools.showTips(this.node.parent, `<b><color=#ffffff>看完视频 领取更多红包券</c></b>`).then(() => {
                cc.Tools.showJiliAd(11);
            });
            let target = e.target;
            let id = target.parent.name;
            let sendData = {
                "adTimes": cc.Tools.adTimes,
                "id": parseInt(id),
                "ts": new Date().getTime(),//时间戳
                "action": "CashOut"
            };
            cc.Tools.sendRequest("PipeAction", "POST", sendData).then((res) => {
                cc.Tools.getCash = res.msg;
                // 刷新整个界面
                let items = res.items;
                if (items) {
                    for (let i = 0; i < items.length; i++) {
                        this.setItem(this.content.getChildByName((i + 1) + ""), items[i]);
                    }
                    let ticket = this.node.getChildByName("ticket").getChildByName("text").getComponent(cc.Label);
                    ticket.string = res.own_amount;
                    this.node.getChildByName("cash").getChildByName("text").getComponent(cc.Label).string = this.handleNumber(res.own_amount / 10000);
                }
            })
        } else {
            cc.Tools.showTips(this.node.parent, `<b><color=#ffffff>审核中.....</c></b>`)
        }
    }
    removeEvent() {
        for (let i = 0; i < this.content.children.length; i++) {
            let item = this.content.children[i];
            let btn = item.getChildByName("btn");
            btn.off(cc.Node.EventType.TOUCH_END, this.touchBtn, this);
        }
    }
    // 关闭btn事件
    closeBtnEvent(btn) {
        btn.off(cc.Node.EventType.TOUCH_END, this.touchBtn, this);
    }
    closeLayer() {
        this.node.active = false;
        this.scheduleOnce(() => {
            this.removeEvent();
            cc.Tools.emitEvent("init", false);
            cc.Tools.hideBanner();
        })
    }
    // update (dt) {}
}