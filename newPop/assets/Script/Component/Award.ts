import CocosBridge from "../Tools/CocosBridge";

const { ccclass, property } = cc._decorator;
@ccclass
export default class Award extends cc.Component {
    public static Instance: Award = null;
    private wrap: cc.Node = null;
    private _info: any = null;
    protected onLoad(): void {
        if (Award.Instance === null) {
            Award.Instance = this;
        } else {
            this.destroy();
            return;
        }
        this.wrap = this.node.getChildByName("wrap");
        cc.Tools.Event.on("award", this.showAwardLayer, this);
        cc.Tools.Event.on("open_award", this.openAwardLayer, this);
    }
    protected onEnable(): void {
        this.registerEvent();
    }
    private showAwardLayer(ad_id: string) {
        let sendData = {
            "ad_id": ad_id,
            "ts": new Date().getTime(),//时间戳
        };
        cc.Tools.sendRequest("JoinDraw", "POST", sendData).then(res => {
            console.log("res",res.data);
            let data = res.data;
            //将批号记录更新
            cc.sys.localStorage.setItem("sn",data.sn);
            if(data.msg){
                console.log("error---msg--",data.msg);
            }
            this._info.info = data;
            this.showTypeLayer2(this._info);
        })
    }
    public showTypeLayer1(info: any): void {
        this._info = info;
        this.showTypeLayer(1);
        this.showUserList();
        if(this._info.wait_end){
            this.schedule(this.awardCountDownFunc1, 1);
        }
    }
    private awardCountDownFunc1(): void {
        //倒计时
        let type: cc.Node = this.node.getChildByName("type_1");
        let time: cc.Label = type.getChildByName("time").getComponent(cc.Label);
        time.string = cc.Tools.changeTime(this._info.wait_end,false);
        if(this._info.wait_end<=0){
            this.unschedule(this.awardCountDownFunc1);
        }
        this._info.wait_end--;
    }
    private awardCountDownFunc2():void{
        let type: cc.Node = this.node.getChildByName("type_2");
        let time: cc.Label = type.getChildByName("time").getComponent(cc.Label);
        time.string = cc.Tools.changeTime(this._info.wait_end,false);
        let block:cc.Node = type.getChildByName("block_mask");
        let scratch_mask:cc.Node = type.getChildByName("scratch_mask")
        if(this._info.wait_end<=0){
            this.unschedule(this.awardCountDownFunc2);
            block.active = true;
            //可以开奖了
            let sendData = {
                "sn":cc.sys.localStorage.getItem("sn")
            };
            cc.Tools.sendRequest("OpenDraw", "POST", sendData).then(res => {
                let data = res.data;
                let resultNumber = data.open_num.toString().replace(",","");
                let resultLabel = scratch_mask.getChildByName("resultLabel").getComponent(cc.Label);
                resultLabel.string = resultNumber
                let type3Text:cc.Label = this.node.getChildByName("type_3").getChildByName("text").getComponent(cc.Label);
                type3Text.string =  resultNumber
            }).catch(err=>{
                console.log(err);
            })
        }
        this._info.wait_end--;
    }
    //显示上轮中奖用户
    private showUserList() {
        let type: cc.Node = this.node.getChildByName("type_1");
        let content: cc.Node = type.getChildByName("scroll").getChildByName("view").getChildByName("content");
        content.destroyAllChildren();
        let prefab: cc.Node = type.getChildByName("item");
        cc.Tools.sendRequest("DrawWinList", "GET", {}).then(res => {
            let data = res.data;
            let items = data.items;
            for (let element of items) {
                let item = cc.instantiate(prefab);
                content.addChild(item);
                item.active = true;
                let nick_name: cc.Label = item.getChildByName("nick_name").getComponent(cc.Label);
                let text: cc.Label = item.getChildByName("text").getComponent(cc.Label);
                nick_name.string = element.user_name;
                text.string = `中奖提现${element.amount / 100}元`
            }
        })
    }
    public showTypeLayer2(info: any): void {
        this._info = info;
        this.showTypeLayer(2)
        if(this._info.wait_end){
            this.schedule(this.awardCountDownFunc2, 1);
        }
        //设置界面
        this.setLayer2Info();
    }
    private setLayer2Info():void{
        //先设置数字
        let info = this._info.info;
        let type: cc.Node = this.node.getChildByName("type_2");
        let layout = type.getChildByName("layout");
        for(let numNode of layout.children){
            numNode.active = false;
        }
        for(let i=1;i<=info.hand_in_num.length;i++){
            let node = layout.getChildByName("num_"+i);
            node.active = true;
            let text:cc.Label = node.getChildByName("text").getComponent(cc.Label);
            text.string = ""+info.hand_in_num[i-1];
        }
        //设置还有几次中奖
        let text:cc.Label = type.getChildByName("video_btn_2").getChildByName("text").getComponent(cc.Label);
        text.string = `(${info.need_start_ad_num}/${info.need_end_ad_num})`
    }
    private setLayer3Info():void{
        //先设置数字
        let info = this._info.info;
        let type: cc.Node = this.node.getChildByName("type_2");
        let layout = type.getChildByName("layout");
        for(let numNode of layout.children){
            numNode.active = false;
        }
        for(let i=1;i<=info.hand_in_num.length;i++){
            let node = layout.getChildByName("num_"+i);
            node.active = true;
            let text:cc.Label = node.getChildByName("text").getComponent(cc.Label);
            text.string = ""+info.hand_in_num[i-1];
        }
    }
    private openAwardLayer(info:any){
        this.showTypeLayer3();
    }
    public showTypeLayer3(): void {
        this.showTypeLayer(3);
        this.setLayer3Info();
    }
    //显示哪个界面 1:开时抽奖 2:等待抽奖 3:抽奖结果
    private showTypeLayer(type: number) {
        let type1 = this.node.getChildByName("type_1");
        let type2 = this.node.getChildByName("type_2");
        let type3 = this.node.getChildByName("type_3");
        if (type === 1) {
            this.wrap.active = true;
            type1.active = true;
            type2.active = false;
            type3.active = false;
        } else if (type === 2) {
            this.wrap.active = true;
            type1.active = false;
            type2.active = true;
            type3.active = false;
        } else {
            this.wrap.active = false;
            type1.active = false;
            type2.active = false;
            type3.active = true;
        }
    }
    private registerEvent(): void {
        let closeBtn = this.wrap.getChildByName("close_btn");
        closeBtn.on(cc.Node.EventType.TOUCH_END, this.closeLayer, this);

        let videoBtn_1 = this.node.getChildByName("type_1").getChildByName("video_btn_1");
        videoBtn_1.on(cc.Node.EventType.TOUCH_END, this.showVideo, this);
        let videoBtn_2 = this.node.getChildByName("type_2").getChildByName("video_btn_2");
        videoBtn_2.on(cc.Node.EventType.TOUCH_END, this.showVideo, this);

        let closeBtn3 = this.node.getChildByName("type_3").getChildByName("close_btn");
        closeBtn3.on(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
        // let type_3 = this.node.getChildByName("type_3");
        // let closeBtn1 = type_3.getChildByName("close_btn");
        // closeBtn1.on(cc.Node.EventType.TOUCH_END,this.closeLayer1,this);
    }
    private showVideo(e: cc.Event.EventTouch): void {
        let target: cc.Node = e.target;
        if (target.name === "video_btn_1") {
            this.unschedule(this.awardCountDownFunc1);
            CocosBridge.JSCallNative("showRewardVideoAd", "6");
        }else{
            CocosBridge.JSCallNative("showRewardVideoAd", "6");
        }
    }
    private closeLayer1(): void {
        console.log("关闭最终奖励界面");
    }
    private removeEvent(): void {

    }
    private closeLayer(): void {
        console.log("close");
        this.node.active = false;
        this.scheduleOnce(() => {
            this.removeEvent();
        })
    }
}
