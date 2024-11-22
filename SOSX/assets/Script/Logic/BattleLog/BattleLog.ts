/*
 * @Descripttion: 处理支援区域缩回动画结束帧事件
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import CopyTeamSelect from "../Common/CopyTeamSelect";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import InfiniteList from "../InfiniteList/InfiniteList";
import { ShowTips, ShowTipsOfCustomString } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import BattleLogCell from "./BattleLogCell";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BattleLog extends PopLayer {

    @property(InfiniteList)
    m_sv_list: InfiniteList = null;

    @property(cc.Prefab)
    m_cell_prefab: cc.Prefab = null
    
    m_cell_height: number = 0;

    data:Array<proto.FightLogData> = new Array<proto.FightLogData>()

    public static datalenght:number = 0

    public initView(){
        this.m_sv_list.Reload();
        if(this.data.length > 0){
            this.m_sv_list.scrollToTop(0.01);
        }
    }


    GetCellNumber(): number{
        return this.data.length;
    }

    GetCellSize(idx: number): number{
        if (this.m_cell_height == 0){
            this.m_cell_height = cc.instantiate(this.m_cell_prefab).height;
        }
        return this.m_cell_height;
    }

    GetCellIdentifer(idx: number): string{
        return idx.toString();
    }

    GetCellView(idx: number): InfiniteCell{
        return cc.instantiate(this.m_cell_prefab).getComponent(BattleLogCell);
    }

    GetCellData(idx: number){
        if (idx < this.data.length){
            return this.data[this.data.length - 1 - idx];
        }
        return null;
    }

    onTouchStart(){
        let tips = cc.director.getScene().getComponentInChildren(CopyTeamSelect)
        if(tips){
            tips.node.active = false
        }
    }

    onLoad () {

        this.setClickHide()
     
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, true)

        this.m_sv_list.Init({
            getCellNumber: this.GetCellNumber.bind(this),
            getCellSize: this.GetCellSize.bind(this),
            getCellIdentifer: this.GetCellIdentifer.bind(this),
            getCellView: this.GetCellView.bind(this),
            getCellData: this.GetCellData.bind(this),
        });

        /* 获取战斗记录 */
        Net.listenProtocol(proto.Ptl.FightLogRsp, function (buffer, ptl){
            let msg = proto.Msg_FightLogRsp.decode(buffer)
            cc.log("FightLogRsp(获取战斗记录) : msg " + JSON.stringify(msg));
            if (msg != null){
                this.data = msg.fightLogs || new Array<proto.FightLogData>()
                BattleLog.datalenght = this.data.length
                this.initView()
            }
        }, this)

        /*
        Net.listenProtocol(proto.Ptl.CopyDeckRsp, function (buffer, ptl){
           let msg = proto.Msg_CopyDeckRsp.decode(buffer)
           if (msg != null){
                //this.hide()
             ShowTips("CopyTeamSuccess")
           }
        }, this)
        */

        /* 举报 */
        Net.listenProtocol(proto.Ptl.ReportRsp, function (buffer, ptl){
            let msg = proto.Msg_ReportRsp.decode(buffer)
            cc.log("ReportRsp(举报) : msg " + JSON.stringify(msg));
            if (msg != null){
                if(msg.result == proto.Msg_ReportRsp.ErrorCode.Succeed) {
                    ShowTips("reportsomeone")
                } else if(msg.result == proto.Msg_ReportRsp.ErrorCode.ParamError) {
                    ShowTips("ParamStrError")
                } else if(msg.result == proto.Msg_ReportRsp.ErrorCode.NonPve) {
                    ShowTips("NotCooprateModel")
                } else if(msg.result == proto.Msg_ReportRsp.ErrorCode.CountExceeded) {
                    ShowTips("ReportTimesOut")  
                } else if(msg.result == proto.Msg_ReportRsp.ErrorCode.OutTime){
                    ShowTips("ReportTime24Out")   
                }
           }
        }, this)
        let param = new proto.Msg_FightLogReq()
        Net.Send(proto.Ptl.FightLogReq, param)
    }
}
