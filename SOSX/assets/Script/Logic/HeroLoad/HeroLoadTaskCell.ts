
import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { kOneNumber, kZeroNumber, sendAdvertPos, WatchAdvert } from "../Common/CommonInterface";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import SimpleItem from "../NewPlayerGiftBag/SimpleItem";
import { setGray, ShowTipsOfCustomString } from "../Utils/GameUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HeroLoadTaskCell extends InfiniteCell {

    @property(cc.Node)
    taskitemshow: cc.Node = null

    @property(cc.ProgressBar)
    progress: cc.ProgressBar = null

    @property(cc.Label)
    progresstxt: cc.Label = null

    @property(cc.Label)
    taskname: cc.Label = null

    @property(cc.Label)
    destxt: cc.Label = null

    @property(cc.Sprite)
    avdflag:cc.Sprite = null

    @property(cc.Node)
    aleadyGet:cc.Node = null

    @property(cc.Node)
    btnNode:cc.Node = null

    @property(cc.Label)
    addscore: cc.Label = null

    @property(cc.Label)
    addscorenot: cc.Label = null

    @property(cc.Sprite)
    btnground: cc.Sprite = null

    @property(cc.Node)
    btnOpen:cc.Node = null

    @property(cc.Node)
    btnGetAward:cc.Node = null

    info: proto.IHeroLoadTaskCell = null

    UpdateContent(data: any): void {
        let info:proto.IHeroLoadTaskCell = data as proto.IHeroLoadTaskCell
        if(info){
            this.info = info
            let taskcfg  = tab.Data.HeroLoadTaskTableByID.getValue(info.taskID)
            if(taskcfg){
                this.taskname.string = taskcfg.Title
                this.destxt.string = taskcfg.Desc
                this.progress.progress = info.taskProgress / taskcfg.FinishCondition
                let curscore = Math.min(info.taskProgress, taskcfg.FinishCondition)
                this.progresstxt.string = `${curscore}/${taskcfg.FinishCondition}`
            } else {
                this.taskname.string = "错误"
                this.destxt.string = "错误"
                this.progress.progress = 0
                this.progresstxt.string = "0"
            }
    
            let item:SimpleItem = this.taskitemshow.getComponent(SimpleItem)
            if(item){
                let cfg = tab.Data.HeroLoadTaskTableByID.getValue(this.info.taskID)
                if(cfg){
                    let award:proto.RewardSimpleInfo = new proto.RewardSimpleInfo()
                    if(info.state == proto.HLTaskType.TaskOpen || info.state == proto.HLTaskType.Award){
                        this.addscore.string = taskcfg.RewardScore.toString()
                        this.addscorenot.string = taskcfg.RewardScore.toString()

                        award.rewardCount = cfg.RewardCount
                        award.rewardId = cfg.RewardID
                        award.rewardType = cfg.RewardType
                    } else {
                        this.addscore.string = taskcfg.ADRewardScore.toString()
                        this.addscorenot.string = taskcfg.RewardScore.toString()
                        award.rewardCount = cfg.ADRewardCount
                        award.rewardId = cfg.ADRewardID
                        award.rewardType = cfg.ADRewardType
                    }
                    item.setView(award, true) 
                }
            }
            this.avdflag.node.active = this.info.state == proto.HLTaskType.GetNormalAward

            this.aleadyGet.active = this.info.state == proto.HLTaskType.GetADAward
            this.btnNode.active = this.info.state != proto.HLTaskType.GetADAward

            setGray(this.btnground, this.info.state == proto.HLTaskType.TaskOpen)
            this.btnOpen.active = this.info.state == proto.HLTaskType.TaskOpen
            this.btnGetAward.active = this.info.state == proto.HLTaskType.Award || this.info.state == proto.HLTaskType.GetNormalAward
        }
    }

    onClick(){
        if(this.info.state == proto.HLTaskType.Award) {
            let param = new proto.Msg_ReceiveHeroLoadTaskRewardReq()
            param.taskId = this.info.taskID
            param.ntype = proto.HLAwardType.NormalTaskType
            Net.Send(proto.Ptl.ReceiveHeroLoadTaskRewardReq, param)
        } else if(this.info.state == proto.HLTaskType.GetNormalAward) {
            WatchAdvert((error: Error)=>{
                if(error === undefined){
                    sendAdvertPos(tab.AdvertPosType.AdvertPosType_HeroLoadADGetAward, kZeroNumber);
                }
            },
            (bFinish: boolean)=>{
                if(bFinish){
                    sendAdvertPos(tab.AdvertPosType.AdvertPosType_HeroLoadADGetAward, kOneNumber);
                    let param = new proto.Msg_ReceiveHeroLoadTaskRewardReq()
                    param.taskId = this.info.taskID
                    param.ntype = proto.HLAwardType.ADTaskType
                    Net.Send(proto.Ptl.ReceiveHeroLoadTaskRewardReq, param)
                }
            },tab.AdvertPosType.AdvertPosType_HeroLoadADGetAward);      
        } else {
            ShowTipsOfCustomString("请先完成任务")
        }
    }

    start () {}
}
