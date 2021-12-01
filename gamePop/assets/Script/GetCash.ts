const { ccclass, property } = cc._decorator;

@ccclass
export default class GetCash extends cc.Component {
    @property(cc.Node)
    item: cc.Node = null;
    @property(cc.Node)
    content: cc.Node = null;
    onLoad(){
        let closeBtn = this.node.getChildByName("close_btn");
        closeBtn.on(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
    }
    onEnable() {
        this.setLayer();
        cc.Tools.showBanner();
        cc.Tools.emitEvent("time", 0);
    }
    setLayer() {
        // 像服务器获取提现信息
        this.content.destroyAllChildren();
        let ticket = this.node.getChildByName("ticket").getComponent(cc.Label);
        ticket.string = cc.Tools.userInfo.amount;
        this.node.getChildByName("cash").getComponent(cc.Label).string = this.handleNumber(cc.Tools.userInfo.amount / 10000);
        let sendData = {

        };
        cc.Tools.sendRequest("CashOutList", "GET", sendData).then((res) => {
            let items = res.data.items
            for (let i = 0; i < items.length; i++) {
                let item = cc.instantiate(this.item);
                item.active = true;
                item.name = ""+items[i].id;
                this.content.addChild(item);
                this.setItem(item,items[i]);
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
    setItem(item:cc.Node,data:any){
        let _new =  item.getChildByName("new");
        _new.active = data.type===2;
        if(data.left_times===-1){
            item.getChildByName("special").active = true;;
        }else{
            item.getChildByName("times").active = true;;
            let lbl = item.getChildByName("times").getChildByName("lbl").getComponent(cc.Label);
            lbl.string = `剩余${data.left_times}次`
        }
        let lbl_1 = item.getChildByName("lbl_1").getComponent(cc.Label);
        lbl_1.string = `${data.amount/100}元`;
        let lbl_2 = item.getChildByName("lbl_2").getComponent(cc.Label);
        lbl_2.string = `消耗${data.cash_ticket}红包券`;
        if(data.status===false){
            let btn = item.getChildByName("btn")
            cc.Tools.setButtonGary(btn)
            this.closeBtnEvent(btn);
        }
    }
    registerEvent() {
        for(let i=0;i<this.content.children.length;i++){
            let item = this.content.children[i]; 
            let btn = item.getChildByName("btn");
            if(btn.getComponent(cc.Button).interactable){
                btn.on(cc.Node.EventType.TOUCH_END,this.touchBtn,this);
            }
        }
    }
    touchBtn(e){
        cc.Tools.hideBanner();
        let target = e.target;
        let id = target.parent.name;
        let sendData = {
            "id":parseInt(id),
            "ts":new Date().getTime()
        };
        cc.Tools.sendRequest("CashOut", "POST", sendData).then((res) => {
            console.log("提现成功");
            let lbl = target.parent.getChildByName("lbl_1").getComponent(cc.Label)
            cc.Tools.getCash  = lbl.string.replace("元","");
            // 刷新整个界面
            let items = res.data.items;
            for(let i=0;i<items.length;i++){
                this.setItem(this.content.getChildByName((i+1)+""),items[i]);
            }
            cc.Tools.userInfo.amount = res.data.own_amount;
            let ticket = this.node.getChildByName("ticket").getComponent(cc.Label);
            ticket.string = cc.Tools.userInfo.amount;
            this.node.getChildByName("cash").getComponent(cc.Label).string = this.handleNumber(cc.Tools.userInfo.amount / 10000);
            cc.Tools.emitEvent("init",false);
            cc.Tools.showJiliAd(11);
        })
    }
    removeEvent() {
        // let closeBtn = this.node.getChildByName("close_btn");
        // closeBtn.off(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
        for(let i=0;i<this.content.children.length;i++){
            let item = this.content.children[i]; 
            let btn = item.getChildByName("btn");
            btn.off(cc.Node.EventType.TOUCH_END,this.touchBtn,this);
        }
    }
    // 关闭btn事件
    closeBtnEvent(btn){
        btn.off(cc.Node.EventType.TOUCH_END,this.touchBtn,this);
    }
    closeLayer() {
        this.node.active = false;
        cc.Tools.emitEvent("time", new Date().getTime());
        cc.Tools.hideBanner();
        this.scheduleOnce(() => {
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
