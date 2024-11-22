
import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import Role from "../Common/Role";
import { getServerUtcTime, setTimeTXT, ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TimeBoxOpenNow extends PopLayer {

    @property(cc.Label)
    timeleft: cc.Label = null;

    @property(cc.Label)
    cost: cc.Label = null;

    @property(cc.Node)
    timenode: cc.Node = null

    @property(cc.Label)
    opentxt: cc.Label = null

    @property(cc.Node)
    diamondnode: cc.Node = null

    index:number = -1
    unlocktime:number = 0
    bnotenough:boolean = false
    opentype: proto.OpenRankBoxType;

    onLoad () {
      this.setClickHide()

    }

    setView(index:number,type:proto.OpenRankBoxType, info:proto.RankBoxData){
        this.bnotenough = false
        this.index = index
        this.opentype = type
        let visible = info.state == proto.RankBoxData.BoxState.Unlocking
       
        if(visible){
            let cost = Math.ceil( (info.unlockTime - getServerUtcTime()) * 1.0 / 600 ) 
            this.cost.string = cost.toString()
            let red = new cc.Color(247, 18, 22)
            this.bnotenough = Role.Instance.RoleData.diamond < cost 
            this.bnotenough ? this.cost.node.color = red : this.cost.node.color = cc.Color.WHITE
            this.unlocktime = info.unlockTime
            let lefttime = this.unlocktime - getServerUtcTime()
            lefttime = lefttime < 0 ? 0 : lefttime
            if(lefttime > 0){
                setTimeTXT(this.timeleft, lefttime)
            }
            this.schedule(this.timecountdown, 1)
        } else {
            let cfg:tab.BoxTable = tab.Data.BoxTableByBoxID.getValue(info.boxId)
            let seconds = cfg.UnlockSeconds
            let bspeed:boolean = getServerUtcTime() <= Role.Instance.RoleData.rankData.buffEndUTC
            if(bspeed) {
                seconds = Math.floor(seconds/2)
            }
            if(cfg){
                this.cost.string = String(Math.ceil( seconds/600))
            }
            setTimeTXT(this.timeleft, seconds)
        }
    }

    timecountdown(dt) {
        let lefttime = this.unlocktime - getServerUtcTime()
        if(lefttime <=  -1){
            this.timenode.active = false
            this.opentxt.node.active = true
            this.diamondnode.active = false
             //重新请求下宝箱的信息,用来刷新界面
             let param = new proto.Msg_GetRankPackageInfoReq()
             Net.Send(proto.Ptl.GetRankPackageInfoReq, param)
            this.unschedule(this.timecountdown)
            return;
        }
        lefttime = lefttime < 0 ? 0 : lefttime
        setTimeTXT(this.timeleft, lefttime)
    }

    openClick(){ //立即打开
        if(this.bnotenough){
            ShowTips("DiamondNotEnough")
            return
        }
        let param = new proto.Msg_ImmediatelyOpenRankBoxReq()
        param.boxPosIndex = this.index
        param.openType = this.opentype
        Net.Send(proto.Ptl.ImmediatelyOpenRankBoxReq, param)

        this.scheduleOnce(this.hide, 0.1)
    }

    start () {}
}
