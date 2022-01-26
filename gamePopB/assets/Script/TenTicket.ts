// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class TenTicket extends cc.Component {
    private ticket: number = 0;
    private type: number = 0;//来自哪一级界面
    private videoType: number = 0;//视频类型
    @property(cc.Prefab)
    packet: cc.Prefab = null;
    onEnable() {
        this.registerEvent();
        let red = this.node.getChildByName("red");
        red.opacity = 255;
        red.y = 450;
        for (let i = 1; i <= 10; i++) {
            let award = this.node.getChildByName("award_" + i);
            award.active = false;
            award.zIndex = 9999;
            if(this.node.getChildByName("packet"+i)){
                let packet = this.node.getChildByName("packet"+i);
                packet.removeFromParent();
                packet.destroy();
                packet = null;
            }
        }
    }
    // 1点我领红包 2悬浮红包 3转盘红包 4升级红包 5解冻红包 6存钱罐 7点我领红包(进度不是100%状态) 8超级红包 9连续消除 10雪人红包 11其他不重要的通用接口
    setTicket(ticket: number, add: number, type: number, videoType: number) {
        this.ticket = ticket;
        this.type = type;
        this.videoType = videoType;
        let red = this.node.getChildByName("red");
        let splitArr = this.splitNumber(ticket);
        cc.tween(red).to(0.5, { y: 250 }).call(() => {
            red.opacity = 0;
            this.showPacketAnim(9, 0.01, 100, cc.v3(red.x + 375, red.y + 667), () => {
                for (let i = 1; i <= 10; i++) {
                    let award = this.node.getChildByName("award_" + i);
                    award.getComponent(cc.Label).string = splitArr[i-1];
                    award.active = true;
                    let closeBtn = this.node.getChildByName("close_btn");
                    closeBtn.active= true;
                }
            })
        }).start()
    }
    registerEvent() {
        let closeBtn = this.node.getChildByName("close_btn");
        closeBtn.on(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
    }
    removeEvent() {
        let closeBtn = this.node.getChildByName("close_btn");
        closeBtn.off(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
    }
    closeLayer() {
        this.node.active = false;
        this.scheduleOnce(() => {
            this.removeEvent();
            cc.Tools.emitEvent("showPacket",{videoType:16,dir:1});
        })
    }
    showPacketAnim(c: number, nt: number, randomScope: number = 80, startPos: cc.Vec3 = cc.v3(0, 0), call: Function = null) {
        let newTime = nt;
        let tempPlayer = this.node.convertToNodeSpaceAR(startPos)
        let _count = 0;
        let _times = 0;
        this.schedule(() => {
            let pre = cc.instantiate(this.packet);
            pre.parent = this.node;
            pre.setPosition(tempPlayer)
            let rannumx = cc.Tools.createRandom(-randomScope, randomScope);// (this.random2 - this.random1 + 1) + this.random1
            let rannumy = cc.Tools.createRandom(-randomScope, randomScope);//(this.random2 - this.random1 + 1) / 1.5 + this.random1 / 1.5)
            _times++;
            if (_times > 10) {
                _times = 10;
            }
            let endNode = this.node.getChildByName("award_" + _times);
            pre.name = "packet"+_times;
            let endP = endNode.getPosition();
            endP = this.node.convertToNodeSpaceAR(endNode.parent.convertToWorldSpaceAR(endP))
            cc.tween(pre)
                .by(0.4, { position: cc.v3(rannumx, rannumy) }, { easing: 'quadOut' })
                .delay(0.3)
                .to(0.4, { position: cc.v3(endP.x,endP.y+100) })
                .call(() => {
                    // pre.destroy()
                    _count++
                    if (_count == c) {
                        console.log("动画完毕")
                    }
                })
                .start()
        }, newTime, c)
        this.scheduleOnce(() => {
            call && call()
        }, 2)
    }
    //写一个方法将一个数字随机分成10份
    splitNumber(num:number) {
        let _num = num>10?num:10;
        let _arr = [];
        let val;
        for (let i = 0; i < 10; i++) {
            //随机一个值
            if (i === 9) {
                _arr.push(_num);
            } else {
                let _average = Math.floor(_num / (10 - i));
                let rdm = Math.random();
                val = rdm > 0.5 ? _average + Math.floor(_average * rdm) : _average - Math.floor(_average * rdm);
                _arr.push(val);
                _num -= val;
            }
        }
        return _arr;
    }
}
