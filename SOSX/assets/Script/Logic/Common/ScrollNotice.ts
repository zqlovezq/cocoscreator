
import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import timeboxsnode from "../Main/timeboxsnode";
import { getServerUtcTime } from "../Utils/GameUtils";

class scrollStru{
    playUtc:number = 0;
    con:proto.IScrollMsg = null;
}


const {ccclass, property} = cc._decorator;

@ccclass
export default class ScrollNotice extends cc.Component {

    @property(cc.RichText)
    txt: cc.RichText = null;

    @property(cc.Node)
    parnode:cc.Node = null

    data:Map<string, proto.IScrollMsg> = new Map<string, proto.IScrollMsg>()

    intervalRecord:Map<String, number> = new Map<String, number>()


    queue:scrollStru[] = []

    bplaying:boolean = false

    scrollMaxWidth:number = 0
    
    onLoad () {
        this.scrollMaxWidth = this.parnode.getContentSize().width
        Net.listenProtocol(proto.Ptl.ScrollNoticeRsp, (buffer, ptl)=>{
            let msg = proto.Msg_ScrollNoticeRsp.decode(buffer);
            cc.log("ScrollNotice.ts : UpdateItemData(同步道具数据) msg: "+JSON.stringify(msg));
            if(msg != null){
                this.node.active = true
                let newdata:proto.IScrollMsg[] = []
                let curtime = getServerUtcTime()
                for(let i = 0; i < msg.notices.length; i++){
                    if(curtime < msg.notices[i].endTimeUTC){
                        if(this.data.get(msg.notices[i].ID) == undefined) {
                            newdata.push(msg.notices[i])
                        }
                        this.data.set(msg.notices[i].ID, msg.notices[i])
                    } else {
                        //删除公告通过修改 endtimeutc来实现，服务器只通知id和结束时间
                        this.data.set(msg.notices[i].ID, null)
                    }
                }
                this.series(newdata)
            }
        },this)
    }

    /*  */
    check() {
        if(this.bplaying) 
            return;
        if(this.queue.length > 0){
            let notice = this.queue[0]
            if(notice.con.endTimeUTC <= getServerUtcTime()) {
                clearInterval(this.intervalRecord.get(notice.con.ID))
                return
            }
            notice = this.queue.shift()
            this.node.active = true
            this.txt.node.stopAllActions()
            this.txt.string = notice.con.contentTXT
            this.txt.node.setPosition(new cc.Vec2(this.scrollMaxWidth, 0))
            this.bplaying = true
            let width = this.txt.node.getContentSize().width
            let speed = 50
            cc.tween(this.txt.node)
                .by(width/speed, {position: new cc.Vec3(-this.scrollMaxWidth - width, 0, 0)})
                .call(()=>{this.bplaying = false}).start()
        } else {
            this.node.active = false
        }
    }
    
    start () {
        cc.director.getScheduler().schedule(this.check.bind(this),this, 1)               
    }

    series(nos:proto.IScrollMsg[])
    {
        nos.forEach((value:proto.IScrollMsg, key:Number)=>{
            if(value.beginTimeUTC <= getServerUtcTime())
            {
                this.createCall(value.ID)
                let result = setInterval(()=>this.createCall(value.ID), value.playInterval * 1000)
                this.intervalRecord.set(value.ID, result)
            }
            else
            {
                let offset = getServerUtcTime() - value.beginTimeUTC
                setTimeout(()=>{this.series([value])}, offset*1000)
            }
        })
    }

    createCall(ID:string)
    {

        let info = new scrollStru()
        info.con = this.data.get(ID)
        info.playUtc = getServerUtcTime()
        if(info.playUtc < info.con.endTimeUTC)
        {
            this.queue.push(info)
            this.check()
        }
        else
        {
            clearInterval(this.intervalRecord.get(info.con.ID))
        }
    }

    
    onClose()
    {        
        this.node.active = false
        this.bplaying = false
    }

    // update (dt) {
    // }


}
