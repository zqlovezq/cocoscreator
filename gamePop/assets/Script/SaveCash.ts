const {ccclass, property} = cc._decorator;

@ccclass
export default class SaveCash extends cc.Component {
    private spine = null;
    private isFirstShow = false;
    onEnable(){
        this.registerEvent();
        cc.Tools.emitEvent("time",0);
        cc.Tools.Event.on("saveCash", this.refreshLayer, this);
        // 展示banner+插屏
        let wrap = this.node.getChildByName("wrap");
        this.spine = wrap.getChildByName("spine").getComponent("sp.Skeleton");
        this.spine.setAnimation(0,"open",false);
        this.spine.addAnimation(0,"idle",true);
        // 存钱罐红包
        let ticket = wrap.getChildByName("ticket").getComponent(cc.Label);
        ticket.string = cc.Tools.userInfo.save_amount+cc.Tools.userInfo.save_freeze_amount;
        // 提现状态
    }
    // 获取存钱罐的状态
    refreshLayer(ad){
        let wrap = this.node.getChildByName("wrap");
        // 获取用户信息
        let sendData = {
            "ad_id":ad,
            "ts":new Date().getTime()
        };
        cc.Tools.sendRequest("AddSaving", "POST", sendData).then((res) => {
            let ticket = wrap.getChildByName("ticket").getComponent(cc.Label);
            ticket.string = res.data.amount+res.data.freeze_amount;
        });
    }
    registerEvent(){
        let closeBtn = this.node.getChildByName("close_btn");
        closeBtn.active = false;
        closeBtn.on(cc.Node.EventType.TOUCH_END,this.closeLayer,this);

        let closeBtnOther = this.node.getChildByName("close_btn_other");
        closeBtnOther.active = false;
        closeBtnOther.on(cc.Node.EventType.TOUCH_END,this.closeLayer,this);
        if(this.isFirstShow){
            closeBtnOther.active = true;
            this.isFirstShow = false;
        }else{
            this.scheduleOnce(()=>{
                closeBtnOther.active = true;
            },2)
        }
        let getBtn = this.node.getChildByName("get_btn");
        getBtn.on(cc.Node.EventType.TOUCH_END,this.getCash,this);
        let lbl_1 = getBtn.getChildByName("lbl_1").getComponent(cc.Label);
        let lbl_2 = getBtn.getChildByName("lbl_2").getComponent(cc.Label);
        if(cc.Tools.userInfo.save_amount){
            lbl_1.string = "今日可领";
            lbl_2.string = `${Math.floor(cc.Tools.userInfo.save_amount/100)/100}元`
        }else{
            lbl_1.string = "明日可领";
            lbl_2.string = "无需看广告";
        }

        let anim = this.node.getChildByName("anim").getComponent(cc.Animation);
        anim.node.active = true;
        anim.play("count_down");
        anim.on("finished",(e)=>{
            anim.node.active = false;
            closeBtn.active = true;
        },this)
    }
    removeEvent(){
        let closeBtn = this.node.getChildByName("close_btn");
        closeBtn.off(cc.Node.EventType.TOUCH_END,this.closeLayer,this);

        let closeBtnOther = this.node.getChildByName("close_btn_other");
        closeBtnOther.off(cc.Node.EventType.TOUCH_END,this.closeLayer,this);

        let getBtn = this.node.getChildByName("get_btn");
        getBtn.off(cc.Node.EventType.TOUCH_END,this.getCash,this);
    }
    // 存钱罐取钱
    getCash(){
        if(cc.Tools.userInfo.save_amount){
            // 像服务器发送请求
            let sendData = {};
            cc.Tools.sendRequest("SubSaving", "POST", sendData).then((res) => {
                cc.Tools.userInfo.save_amount = res.data.amount;
                cc.Tools.userInfo.save_freeze_amount = res.data.freeze_amount;
                let getBtn = this.node.getChildByName("get_btn");
                let lbl_1 = getBtn.getChildByName("lbl_1").getComponent(cc.Label);
                let lbl_2 = getBtn.getChildByName("lbl_2").getComponent(cc.Label);
                lbl_1.string = "明日可领";
                lbl_2.string = "无需看广告";
                let wrap = this.node.getChildByName("wrap");
                let ticket = wrap.getChildByName("ticket").getComponent(cc.Label);
                ticket.string = cc.Tools.userInfo.save_freeze_amount;
            })
        }else{
            // cc.Tools.showJiliAd(6);
        }
    }
    closeLayer(){
        this.spine.clearTracks();
        this.node.active = false;
        cc.Tools.emitEvent("time",new Date().getTime());
        cc.Tools.emitEvent("init",false);
        this.scheduleOnce(()=>{
            this.removeEvent();
        })
    }
    // update (dt) {}
}
