const { ccclass, property } = cc._decorator;

@ccclass
export default class StealMark extends cc.Component {

    @property(cc.Node)
    revenge: cc.Node = null;
    @property(cc.Node)
    item: cc.Node = null;
    @property([cc.SpriteFrame])
    icon = [];
    private wrap: cc.Node = null;
    onLoad() {
        this.wrap = this.node.getChildByName("wrap");
        this.node.getChildByName("bg").on(cc.Node.EventType.TOUCH_END,this.closeLayer,this);
        cc.tween(this.node).to(0.1, { scale: 1 }, { easing: 'sineOutIn' }).start();
    }

    start() {
        this.setRevengeList();
    }
    //设置复仇记录
    setRevengeList() {
        this.revenge.destroyAllChildren();
        let icon: cc.Sprite = this.node.getChildByName("icon").getComponent(cc.Sprite);
        let pop: cc.Node = this.node.getChildByName("pop");
        pop.scale = 0;
        let popText: cc.Label = pop.getChildByName("text").getComponent(cc.Label);
        cc.tween(pop).delay(0.2).to(0.3, { scale: 1 }, { easing: 'sineOutIn' }).start();
        cc.Tools.sendRequest("RevengeList", "GET", {}).then((res) => {
            let items = res.data.items;
            //处理items
            //获取上一次退出时间
            let lastExit = cc.sys.localStorage.getItem("lastExit");
            console.log("cocos----上次退出的时间",lastExit);
            let newArr = [];
            if(items.length>0){
                for(let i=0;i<items;i++){
                    let data = items[i];
                    let ts = data.ts;
                    console.log("cocos----服务器记录的时间",ts);
                    if(ts>=lastExit){
                        newArr.push(data);
                    }
                }
            }
            if (newArr.length > 0) {
                this.wrap.active = true;
                icon.spriteFrame = this.icon[1];
                popText.string = "小主，对不起你没能守护好你的红包树！";
                for (let i = 0; i < newArr.length; i++) {
                    let item = newArr[i];
                    let _itemNode = cc.instantiate(this.item);
                    _itemNode.active = true;
                    this.revenge.addChild(_itemNode);
                    let text = _itemNode.getChildByName("text").getComponent(cc.RichText);
                    if (item.amount > 100) {
                        text.string = `<color=#FFE6B8>${item.user_name}偷了你红包券</c><color=#E3A44A>【${item.amount}】</color>`
                    } else {
                        text.string = `<color=#FFE6B8>${item.user_name}偷了你红包券</c><color=#F773FF>【${item.amount}】</color>`
                    }
                    let time:cc.Label = _itemNode.getChildByName("time").getComponent(cc.Label);
                    let _time = cc.Tools.changeTimeToloc(item.ts*1000);
                    time.string = _time;
                }
            } else {
                this.wrap.active = false;
                popText.string = "小主，我守护好你的红包树～～快夸夸我";
                icon.spriteFrame = this.icon[0];
            }
        }).catch((err) => {
            console.log("cocos----复仇列表err--" + err);
        })
    }
    closeLayer() {
        this.node.active = false;
        cc.Tools.emitEvent("init", false);
        cc.Tools.emitEvent("showGuide");
        this.scheduleOnce(()=>{
            console.log("注销事件");
            this.wrap.off(cc.Node.EventType.TOUCH_END,this.closeLayer,this);
        })
    }
    // update (dt) {}
}
