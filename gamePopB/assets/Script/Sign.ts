// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    private wrap:cc.Node = null;
    private singDay = 0;
    private isSign = false;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.wrap = this.node.getChildByName("wrap");
        let closeBtn = this.wrap.getChildByName("close_btn");
        closeBtn.on(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
        let videoBtn = this.wrap.getChildByName("get_btn");
        videoBtn.on(cc.Node.EventType.TOUCH_END, this.showVideo, this)
        cc.Tools.Event.on("refreshSignList", this.getSignList, this);
    }
    onEnable(){
        this.getSignList();
    }
    //获取签到列表
    getSignList(){
        cc.Tools.sendRequest("SignList", "GET", {}).then((res) => {
            let items = res.data.items;
            this.singDay = res.data.last_num;
            this.isSign = res.data.is_sign_today;
            for(let i=1;i<=6;i++){
                let sign = this.wrap.getChildByName("sign_"+i);
                let text = sign.getChildByName("text").getComponent(cc.Label);
                text.string =  items[i-1].amount
            }
            this.setLayer();
        })
    }
    setLayer(){
        //当前是第几天
        let singDay = this.singDay;
        for(let i=1;i<=6;i++){
            let sign = this.wrap.getChildByName("sign_"+i);
            let choiced = sign.getChildByName("choiced");
            let choice = sign.getChildByName("choice");
            choiced.active = false;
            choice.active = false;
            if(i===singDay){
                if(!this.isSign){
                    choice.active = true;
                }else{
                    choiced.active = true;
                }
            }else if(i<singDay){
                choiced.active = true;
            }else{
                //
            }
        }
    }
    showVideo(e) {
        // 点击加锁
        let target = e.target;
        if (cc.Tools.lock) {
            cc.Tools.showTips(this.node.parent, `<b><color=#ffffff>点击太频繁</c></b>`);
            return;
        } else {
            cc.Tools.lock = true;
            setTimeout(() => {
                cc.Tools.lock = false;
            }, 3000)
        }
        //先签到 然后看视频

        cc.Tools.showTips(this.node.parent,`<b><color=#ffffff>看完视频 领取更多红包券</c></b>`).then(()=>{
            cc.Tools.setButtonGary(target)
            cc.Tools.showJiliAd(17);
        });
    }
    closeLayer() {
        this.node.active = false;
        cc.Tools.emitEvent("init", false);
    }
    // update (dt) {}
}
