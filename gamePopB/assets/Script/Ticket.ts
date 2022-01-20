const {ccclass, property} = cc._decorator;

@ccclass
export default class Ticket extends cc.Component {
    private ticket:number = 0;
    private type:number = 0;//来自哪一级界面
    private videoType:number = 0;//视频类型
    @property([cc.SpriteFrame])
    title=[];
    onEnable(){
        this.registerEvent();
    }
    // 1点我领红包 2悬浮红包 3转盘红包 4升级红包 5解冻红包 6存钱罐 7点我领红包(进度不是100%状态) 8超级红包 9连续消除 10雪人红包 11其他不重要的通用接口
    setTicket(ticket:number,add:number,type:number,videoType:number){
        this.ticket = ticket;
        this.type = type;
        this.videoType = videoType;
        //判断当前是否是暴击 加成红包
        if(add){
            let _special = this.node.getChildByName("special");
            _special.active = true;
            let ticketLbl = _special.getChildByName("ticketLbl").getComponent(cc.Label);
            ticketLbl.string = `红包券X${ticket}`
            let addLbl = _special.getChildByName("addLbl");
            addLbl.getComponent(cc.Label).string = `${add}`
            let effect = _special.getChildByName("effect");
            let critical_icon = _special.getChildByName("critical_icon");
            let add_icon = _special.getChildByName("add_icon");
            let lbl = effect.getChildByName("lbl").getComponent(cc.Label);
            critical_icon.active = false;
            add_icon.active = false;
            effect.scale = 4;
            effect.stopAllActions();
            cc.tween(effect).delay(0.1).to(0.4,{scale:0.7}).to(0.2,{scale:1}).start();
            if(add/ticket>1){
                // 那么当时是倍数
                critical_icon.active = true;
                lbl.string = add/ticket+"倍";
            }else{
                add_icon.active = true;
                lbl.string = Math.floor((add/ticket)*100)+"%";
            }
        }else{
            let _normal = this.node.getChildByName("normal");
            _normal.active = true;
            let ticketLbl = _normal.getChildByName("ticketLbl").getComponent(cc.Label);
            ticketLbl.string = `红包券X${ticket}`
            let title = _normal.getChildByName("title").getComponent(cc.Sprite);
            if(videoType===13){
                title.spriteFrame = this.title[1]
            }else{
                title.spriteFrame = this.title[0]
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
        }else if(this.videoType===17){
            cc.Tools.emitEvent("refreshSignList");
        }else{
            if(cc.Tools.reminderMsg){
                cc.Tools.showTips(this.node.parent,`<b><color=#ffffff>${cc.Tools.reminderMsg}</c></b>`);
            }
        }
        this.scheduleOnce(()=>{
            this.removeEvent();
            cc.Tools.emitEvent("showPacket",this.videoType);
            if(this.type===1){
                cc.Tools.emitEvent("init",false);
            }
        })
    }
    // update (dt) {}
}
