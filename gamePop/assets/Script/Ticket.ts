const {ccclass, property} = cc._decorator;

@ccclass
export default class Ticket extends cc.Component {
    private spine = null;
    private ticket:number = 0;
    private type:number = 0;//来自哪一级界面
    private videoType:number = 0;//视频类型
    onEnable(){
        cc.Tools.emitEvent("time",0);
        cc.Tools.hideFeedScreen();
        this.registerEvent();
        let wrap = this.node.getChildByName("wrap");
        this.spine = wrap.getChildByName("spine").getComponent("sp.Skeleton");
        this.spine.setAnimation(0,"open",false);
        this.spine.addAnimation(0,"idle",true);
    }
    // 1点我领红包 2悬浮红包 3转盘红包 4升级红包 5解冻红包 6存钱罐 7点我领红包(进度不是100%状态) 8超级红包 9连续消除 10雪人红包 11其他不重要的通用接口
    setTicket(ticket:number,add:number,type:number,videoType:number){
        let _videoTypeArr = ["点我领红包","悬浮红包","转盘红包","升级红包","解冻红包","存钱罐","点我领红包(进度不是100%状态)","超级红包","连续消除","雪人红包","其他不重要的通用接口"]
        this.ticket = ticket;
        this.type = type;
        this.videoType = videoType;
        let ticketLbl = this.node.getChildByName("ticketLbl").getComponent(cc.Label);
        ticketLbl.string = `红包券X${ticket}`
        let addLbl = this.node.getChildByName("addLbl");
        let effect = this.node.getChildByName("effect");
        if(add===0){
            addLbl.active = false;
            effect.active = false;
        }else{
            addLbl.active = true;
            effect.active = true;
        }
        let critical_icon = effect.getChildByName("critical_icon");
        let add_icon = effect.getChildByName("add_icon");
        let lbl = effect.getChildByName("lbl").getComponent(cc.Label);
        critical_icon.active = false;
        add_icon.active = false;
        effect.scale = 4;
        effect.stopAllActions();
        cc.tween(effect).delay(0.1).to(0.4,{scale:0.7}).to(0.2,{scale:1}).start();
        if(add!==0){
            if(add/ticket>1){
                // 那么当时是倍数
                critical_icon.active = true;
                lbl.string = add/ticket+"倍";
            }else{
                add_icon.active = true;
                lbl.string = Math.floor((add/ticket)*100)+"%";
            }
            if(add){
                addLbl.getComponent(cc.Label).string = `${add}`
            }else{
                addLbl.active = false;
            }
        }
    }
    registerEvent(){
        let closeBtn = this.node.getChildByName("close_btn");
        closeBtn.on(cc.Node.EventType.TOUCH_END,this.closeLayer,this);
    }
    removeEvent(){
        let closeBtn = this.node.getChildByName("close_btn");
        closeBtn.off(cc.Node.EventType.TOUCH_END,this.closeLayer,this);
    }
    closeLayer(){
        // this.setTicket(300,900,4,7);
        this.node.active = false;
        this.spine.clearTracks();
        if(this.type===1){
            cc.Tools.emitEvent("clickRed");
        }
        if(this.videoType===11){
            // 提现成功
            if(!isNaN(cc.Tools.getCash)){
                cc.Tools.showTips(this.node.parent,`<b><color=#ffffff>提现成功</c><color=#F96163>${cc.Tools.getCash}</color><color=#ffffff>元</c></b>`);
            }else{
                cc.Tools.showTips(this.node.parent,`<b><color=#ffffff>${cc.Tools.getCash}</c></b>`);
            }
        }
        this.scheduleOnce(()=>{
            this.removeEvent();
            cc.Tools.emitEvent("showPacket");
            cc.Tools.emitEvent("init",false);
        })
    }
    // update (dt) {}
}
