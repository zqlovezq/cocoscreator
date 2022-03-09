import { throws } from "assert";
import Game from "../Game/Game";
import CocosBridge from "../Tools/CocosBridge";
var self: any = null;
const { ccclass, property } = cc._decorator;
@ccclass
export default class Cash extends cc.Component {
    public static Instance: Cash = null;
    private wrap: cc.Node = null;
    private task: cc.Node = null;
    private count_down: number = 0;
    private curCashData;
    protected onLoad(): void {
        if (Cash.Instance === null) {
            Cash.Instance = this;
        } else {
            this.destroy();
            return;
        }
        self = this;
        this.wrap = this.node.getChildByName("wrap");
        this.task = this.wrap.getChildByName("type_2").getChildByName("task");
        this.task.active = false;
        cc.Tools.Event.on("cashout", this.initLayer, this);
    }
    protected onEnable(): void {
        this.initLayer();
        this.registerEvent();
        this.openAnim();
    }
    //layer动画
    private openAnim(): void {
        //主页
        this.node.scale = 1;
        this.node.opacity = 255;
        this.node.x = 0;
        this.node.y = 0;
        this.wrap.stopAllActions();
        this.wrap.scale = 0.7;
        this.wrap.opacity = 255;
        let scale1 = cc.scaleTo(0.12, 0.93, 1.05).easing(cc.easeQuadraticActionOut());
        let scale2 = cc.scaleTo(0.2, 1.05, 0.99).easing(cc.easeQuadraticActionOut());
        let scale3 = cc.scaleTo(0.25, 1, 1).easing(cc.easeQuadraticActionOut());
        let seq1 = cc.sequence(cc.delayTime(0.02), scale1, scale2, scale3);
        let seq2 = cc.sequence(cc.delayTime(0.05), cc.fadeIn(0.12));
        cc.tween(this.wrap)
            .parallel(
                seq1,
                seq2
            )
            .start()
        // //背景
        let block = this.node.getChildByName("block");
        block.opacity = 0;
        cc.tween(block).delay(0.05).to(0.22, { opacity: 160 }).start();
        // //标题
        let title = this.wrap.getChildByName("common").getChildByName("title");
        title.scaleX = 0.5;
        title.scaleY = 1;
        let title_scale1 = cc.scaleTo(0.2, 1.1, 1).easing(cc.easeQuadraticActionOut());
        let title_scale2 = cc.scaleTo(0.24, 1, 1).easing(cc.easeQuadraticActionOut());
        let title_seq1 = cc.sequence(cc.delayTime(0.06), title_scale1, title_scale2);
        let title_seq2 = cc.sequence(cc.delayTime(0.06), cc.fadeIn(0.2));
        cc.tween(title)
            .parallel(
                title_seq1,
                title_seq2
            )
            .start()
        //金币
        let gold = this.wrap.getChildByName("common").getChildByName("gold");
        gold.x = -208;
        gold.y = 630;
        gold.scale = 1;
        let gold_1_action1 = cc.moveBy(2, - 10, 15).easing(cc.easeQuadraticActionOut());
        let gold_1_action2 = cc.moveBy(2, 10, - 15).easing(cc.easeQuadraticActionOut());
        let gold_seq1 = cc.sequence(gold_1_action1, cc.delayTime(0.5), gold_1_action2, cc.delayTime(0.5));
        let gold_2_action1 = cc.scaleTo(0.1, 1.03, 0.97).easing(cc.easeQuadraticActionOut());
        let gold_2_action2 = cc.scaleTo(0.1, 0.97, 1.03).easing(cc.easeQuadraticActionOut());
        let gold_2_action3 = cc.scaleTo(0.2, 1, 1).easing(cc.easeQuadraticActionOut());
        let gold_seq2 = cc.sequence(cc.delayTime(2.5), gold_2_action1, gold_2_action2, gold_2_action1, gold_2_action3, cc.delayTime(2));
        let action = cc.spawn(gold_seq1, gold_seq2);
        cc.tween(gold)
            .repeatForever(action)
            .start()
    }
    private closeAnim(cb: Function) {
        let endBtn = Game.Instance.wrap.getChildByName("bottom").getChildByName("btn_3");
        let endP = this.node.convertToNodeSpaceAR(endBtn.parent.convertToWorldSpaceAR(endBtn.getPosition()));
        this.node.scale = 1;
        this.node.opacity = 255;
        let scale1 = cc.scaleTo(0.2, 1.1, 1.1).easing(cc.easeQuadraticActionOut());
        let scale2 = cc.scaleTo(0.2, 0.3, 0.3).easing(cc.easeQuadraticActionOut());
        let seq1 = cc.sequence(scale1, scale2);
        let seq2 = cc.sequence(cc.delayTime(0.2), cc.fadeOut(0.2));
        let seq3 = cc.sequence(cc.delayTime(0.2), cc.moveTo(0.34, endP.x, endP.y), cc.callFunc(() => {
            this.node.active = false;
            cb();
        }));
        cc.tween(this.node)
            .parallel(
                seq1,
                seq2,
                seq3
            )
            .start();
        let block = this.node.getChildByName("block");
        block.opacity = 0;
    }
    private initLayer(): void {
        let common: cc.Node = this.wrap.getChildByName("common");
        let cash: cc.Label = common.getChildByName("layout").getChildByName("cash").getComponent(cc.Label);
        //像服务器请求接口
        cc.Tools.sendRequest("Wallet", "GET", {}).then(res => {
            let _data = res.data;
            this.curCashData = _data;
            cash.string = this.curCashData.amount / 100 + "";
            cc.Tools.sendRequest("CashOutList", "GET", {}).then((res) => {
                let data = res.data;
                this.setLayer1(data.big_items[0]);
                this.setLayer2(data.items)
            })
        })
    }
    public showTypeLayer1(): void {
        this.showTypeLayer(1)
    }
    public showTypeLayer2(): void {
        this.showTypeLayer(2)
    }
    //1:无门槛大额提现
    private setLayer1(data: any): void {
        let type = this.wrap.getChildByName("type_1");
        let btn = type.getChildByName("btn");
        let progressNode: cc.Node = type.getChildByName("progress")
        let progress: cc.ProgressBar = progressNode.getComponent(cc.ProgressBar);
        let lbl: cc.Label = progressNode.getChildByName("lbl").getComponent(cc.Label);
        lbl.string = `${Math.floor(this.curCashData.amount / 100)}/100`;
        progress.progress = this.curCashData.amount / 10000 > 1 ? 1 : this.curCashData.amount / 10000;
        let content: cc.Node = type.getChildByName("scroll").getChildByName("view").getChildByName("content");
        content.destroyAllChildren();
        let item: cc.Node = type.getChildByName("item");
        //如果有倒计时那么btn置灰
        // data.big_count_down = 71 * 3600 - 60;
        if (data.big_count_down > 0) {
            cc.Tools.setButtonGary(btn);
            this.count_down = data.big_count_down
            this.schedule(this.cashCountDown, 1)
        }else{
            btn.on(cc.Node.EventType.TOUCH_END,this.getCashFunc,this);
        }
        cc.Tools.sendRequest("CashOutUserList", "GET", {}).then(res => {
            let items = res.data.items;
            for (let element of items) {
                let _item = cc.instantiate(item);
                content.addChild(_item);
                _item.active = true;
                let nick_name: cc.Label = _item.getChildByName("nick_name").getComponent(cc.Label);
                let text: cc.Label = _item.getChildByName("text").getComponent(cc.Label);
                nick_name.string = element.user_name;
                text.string = `中奖提现${element.amount / 100}元`
            }
        })
    }
    //提现接口
    getCashFunc(){
        if(this.curCashData.amount>=10000){
            CocosBridge.JSCallNative("showRewardVideoAd", "3")
        }else{
            console.log("金钱不足");
        }
    }
    //倒计时
    private cashCountDown() {
        let type = this.wrap.getChildByName("type_1");
        let btn = type.getChildByName("btn");
        let lbl: cc.Label = btn.getChildByName("lbl").getComponent(cc.Label);
        lbl.string = cc.Tools.changeTime(this.count_down,false);
        this.count_down--;
    }
    //每日提现
    private setLayer2(data: any): void {
        let type = this.wrap.getChildByName("type_2")
        let prefab = type.getChildByName("item");
        for (let i = 0; i < prefab.children.length; i++) {
            let ch = prefab.children[i];
            ch.active = false;
        }
        this.task.active = false;
        let content = type.getChildByName("scroll").getChildByName("view").getChildByName("content");
        let count: number = 0;
        let isCurrnet = false;
        //是否需要创建item
        let isCreate = true;
        if (content.children.length !== 0) {
            isCreate = false;
        }
        for (let element of data) {
            let item = null;
            if (isCreate) {
                item = cc.instantiate(prefab);
                content.addChild(item);
                item.id = element.id;
            } else {
                item = content.children[count];
            }
            if (element.is_cashed) {
                //是否被领到了
                let _item = item.getChildByName("past");
                _item.active = true;
                let lbl: cc.Label = _item.getChildByName("lbl").getComponent(cc.Label);
                lbl.string = element.amount / 100 + "";
            } else {
                if (!isCurrnet) {
                    isCurrnet = true;
                    let _item = item.getChildByName("current");
                    _item.active = true;
                    let lbl: cc.Label = _item.getChildByName("lbl").getComponent(cc.Label);
                    lbl.string = element.amount / 100 + "";

                    this.task.parent = item;
                    this.task.active = true;
                    this.setTask(element, this.task);
                } else {
                    let _item = item.getChildByName("future");
                    _item.active = true;
                    let lbl: cc.Label = _item.getChildByName("lbl").getComponent(cc.Label);
                    lbl.string = element.amount / 100 + "";
                }
            }
            count++;
        }
    }
    private setTask(data: any, taskNode: cc.Node) {
        let needLevel = data.cond_level;
        let needAd = data.cond_ad_num;
        let needTime = data.cond_live_second;
        let curLevel = this.curCashData.level;
        let curAd = this.curCashData.ad_num;
        let curTime = this.curCashData.live_second;
        let taskArr = [[curLevel, needLevel], [curAd, needAd], [curTime, needTime]]
        let taskState = ["is_finish_level","is_finish_ad_num","is_finish_live_second"];
        let taskEvent = ["level","ad_num","live_second"]
        for (let t = 1; t <= 3; t++) {
            let task = taskNode.getChildByName("task_" + t);
            let state = task.getChildByName("state")
            for (let i = 1; i <= 3; i++) {
                let _state = state.getChildByName("state_" + i);
                _state.active = false;
            }
            let cur = taskArr[t - 1][0];
            let need = taskArr[t - 1][1];
            if (cur < need) {
                let _state = state.getChildByName("state_1");
                _state.active = true;
                let lbl: cc.Label = _state.getComponent(cc.Label);
                lbl.string = `${cur}/${need}`
            } else {
                //判断是否点过完成按钮 点过则显示状态3 否则显示状态2
                //is_finish_ad_num: false
                //is_finish_level: false
                //is_finish_live_second: false
                let _state ;
                if(data[taskState[t-1]]){
                    _state = state.getChildByName("state_3");
                }else{
                    _state = state.getChildByName("state_2");
                    _state["id"] = data.id;
                    _state["type"] = taskEvent[t-1];
                    _state.on(cc.Node.EventType.TOUCH_END,this.touchState,this);
                }
                _state.active = true;
            }
            let progress: cc.ProgressBar = task.getChildByName("progress").getComponent(cc.ProgressBar);
            progress.progress = cur / need > 1 ? 1 : cur / need;
        }
    }
    private touchState(e:cc.Event.EventTouch):void{
        let target = e.target;
        cc.Tools.sendRequest("CashCompleteItem", "POST", {
            type:target.type,
            cash_id:target.id
        }).then(res => {
            let state = target.parent;
            target.active = false;
            state.getChildByName("state_3").active= true;
        })
    }
    //显示哪个界面 1:无门槛提现 2:每日提现
    private showTypeLayer(type: number) {
        let common: cc.Node = this.wrap.getChildByName("common");
        let type1 = this.wrap.getChildByName("type_1");
        let type2 = this.wrap.getChildByName("type_2");
        let btn1 = common.getChildByName("btn_1");
        let btn2 = common.getChildByName("btn_2");
        if (type === 1) {
            btn1.getChildByName("select").active = true;
            btn2.getChildByName("select").active = false;
            type1.active = true;
            type2.active = false;
        } else {
            btn1.getChildByName("select").active = false;
            btn2.getChildByName("select").active = true;
            type1.active = false;
            type2.active = true;
        }
    }
    private registerEvent(): void {
        let common: cc.Node = self.wrap.getChildByName("common");
        let closeBtn = common.getChildByName("close_btn");
        let btn1 = common.getChildByName("btn_1");
        let btn2 = common.getChildByName("btn_2");
        btn1.on(cc.Node.EventType.TOUCH_END, this.showTypeLayer1, this);
        btn2.on(cc.Node.EventType.TOUCH_END, this.showTypeLayer2, this);
        closeBtn.on(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
    }
    private removeEvent(): void {
        let common: cc.Node = self.wrap.getChildByName("common");
        let closeBtn = common.getChildByName("close_btn");
        let btn1 = common.getChildByName("btn_1");
        let btn2 = common.getChildByName("btn_2");
        btn1.off(cc.Node.EventType.TOUCH_END, self.showTypeLayer1, self);
        btn2.off(cc.Node.EventType.TOUCH_END, self.showTypeLayer2, self);
        closeBtn.off(cc.Node.EventType.TOUCH_END, self.closeLayer, self);
    }
    private closeLayer(): void {
        console.log("close");
        this.closeAnim(this.removeEvent);
    }
}
