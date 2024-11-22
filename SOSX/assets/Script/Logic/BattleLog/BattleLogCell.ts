/*
 * @Descripttion: 处理支援区域缩回动画结束帧事件
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import CopyTeamSelect from "../Common/CopyTeamSelect";
import Role from "../Common/Role";
import DeckLayer from "../DeckLayer/DeckLayer";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import { getServerUtcTime, setGray, setTimeTXT, showPopLayerV2, ShowTips, ShowTipsOfCustomString } from "../Utils/GameUtils";
import BattleLog from "./BattleLog";
import BattleLogPlayerInfo from "./BattleLogPlayerInfo";
import ReportConfirm from "./ReportConfirm";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BattleLogCell extends InfiniteCell {

    @property(cc.Node)
    winnode: cc.Node = null

    @property(cc.Node)
    losenode: cc.Node = null

    @property(cc.Label)
    changescore: cc.Label = null

    @property(cc.Node)
    leftplayernode: cc.Node = null

    @property(cc.Node)
    rightplayernode: cc.Node = null

    @property(cc.Label)
    title: cc.Label = null

    @property(cc.Label)
    timepassed: cc.Label = null

    @property(cc.Sprite)
    icon: cc.Sprite = null

    @property(cc.Label)
    fighttypetxt: cc.Label = null

    @property(cc.Node)
    reportnode: cc.Node = null

    @property(cc.Node)
    copyteamnode: cc.Node = null

    @property(cc.Sprite)
    copyteambg: cc.Sprite = null

    @property(cc.Node)
    scorenode: cc.Node = null

    _data:proto.FightLogData = null

    onLoad () {

        /* 举报 */
        Net.listenProtocol(proto.Ptl.ReportRsp, function (buffer, ptl){
            let msg = proto.Msg_ReportRsp.decode(buffer)
            cc.log("ReportRsp(举报) : msg " + JSON.stringify(msg));
            if (msg != null){
                if(msg.result == proto.Msg_ReportRsp.ErrorCode.Succeed){
                    let beReportedId = this._data.FightDatas[0].roleId == Role.Instance.ID ? this._data.FightDatas[1].roleId : this._data.FightDatas[0].roleId
                    if(beReportedId == msg.roleId){
                        this._data.isReport = true
                        this.UpdateContent(this._data)
                    }
                }
            }
        }, this)
    }

    /*  */
    UpdateContent(data:proto.FightLogData){
        this._data = data
        let cfg = tab.Data.FightTypeInfoTableByFightType.getValue(data.Type)
        if(cfg){
            this.fighttypetxt.string = cfg.Desc
            this.icon.setTexture(cfg.Icon)
        }

        if(data.Type == proto.FightType.Challenge){
            let ccfg = tab.Data.ChallengeTableByID.getValue(data.ChallengeId)
            if(ccfg){
                this.fighttypetxt.string = ccfg.ChalTitle
            }
        }

        this.changescore.string = data.ChangeScore > 0 ? ("+" + data.ChangeScore.toString()) : data.ChangeScore.toString()
        this.scorenode.active = data.Type == proto.FightType.PvP
        let bwin = data.WinRoleId == Role.Instance.ID

        this.winnode.active = bwin
        this.losenode.active = !bwin
        if(data.WaveNum == 0){
            data.WaveNum = 1
        }
        this.reportnode.active = data.Type == proto.FightType.AlliancePvE || 
                                data.Type == proto.FightType.PvE || 
                                data.Type == proto.FightType.FriendPve || 
                                data.Type == proto.FightType.WorldChannelPvE;
        if(this.reportnode.active){
            this.title.string = `第${data.WaveNum}波`
            this.reportnode.getComponent(cc.Button).enableAutoGrayEffect = true
            this.reportnode.getComponent(cc.Button).interactable = !(data.isReport)
            this.winnode.active = true
            this.losenode.active = false

        } else {
            let str = bwin  ? "胜利" : "失败"
            this.title.string = `第${data.WaveNum}回合${str}`
        }
 
        setGray(this.copyteambg, this.checkCopyCondition() == false)        

        let logplayer:BattleLogPlayerInfo = this.leftplayernode.getComponent(BattleLogPlayerInfo)
        if(logplayer){
            logplayer.setView(data.FightDatas[0])
        }

        let logplayer2:BattleLogPlayerInfo = this.rightplayernode.getComponent(BattleLogPlayerInfo)
        if(logplayer2){
            logplayer2.setView(data.FightDatas[1])
        }

        this.timeCountDown(0)
        // this.unschedule(this.timeCountDown)
        // this.schedule(this.timeCountDown, 1)
    }

    timeCountDown(dt){
        let lefttime:number = getServerUtcTime() - this._data.UTC
        if(lefttime <= 0){
            this.unschedule(this.timeCountDown)
            return
        }
       lefttime = lefttime < 0 ? 0 :lefttime
       setTimeTXT(this.timepassed, lefttime)
    }

    /*  */
    checkCopyCondition():boolean{
        let copydata = this._data.FightDatas[0].roleId == Role.Instance.ID ? this._data.FightDatas[1] : this._data.FightDatas[0]
        //检测卡牌和魔王
        let lord = Role.Instance.RoleItemAtrr.getItemByStaticID(copydata.lordData.staticId)
        if(!lord){
            return false
        }
        
        for(let i = 0; i<copydata.deckData.length; i++){
            let card = Role.Instance.RoleItemAtrr.getItemByStaticID(copydata.deckData[i].staticId)
            if(!card){
                return false
            }
        }
        return true
    }

    /*  */
    copyClick(){
        let copydata = this._data.FightDatas[0].roleId == Role.Instance.ID ? this._data.FightDatas[1] : this._data.FightDatas[0]

        if(this.checkCopyCondition() === false){
            ShowTips("BattleLogCannotCopyTeam")
            return
        }
      
        //设置回调函数
        let copyfun = (deckindex:number)=>{
            let param = new proto.Msg_CopyDeckReq
            param.talent = copydata.talent
            param.DeckData = copydata.deckData
            param.lordData = copydata.lordData
            param.deckIndex = deckindex
            Net.Send(proto.Ptl.CopyDeckReq, param)
        }
        CopyTeamSelect.show(this.copyteamnode, copyfun) //弹出气泡界面
    }

    //举报只在合作模式中显示,举报的是队友
    reportClick(){
        let roleId = this._data.FightDatas[0].roleId == Role.Instance.ID ? this._data.FightDatas[1].roleId : this._data.FightDatas[0].roleId
        let index = BattleLog.datalenght - 1 - this.dataIndex
        showPopLayerV2("prefab/ReportConfirmTips", ReportConfirm).then((value:ReportConfirm)=>{
            if(value){
                value.setinfo(roleId, index)
            }
        })
    }
}