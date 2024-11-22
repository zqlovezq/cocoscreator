
import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import InfiniteList from "../InfiniteList/InfiniteList";
import SimpleItem from "../NewPlayerGiftBag/SimpleItem";
import { getServerUtcTime, popRewardLayer_Ex, setTextTime_3, setTimeTXT, ShowTipsOfCustomString } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import HeroLoadManager from "./HeroLoadManager";
import HeroLoadTaskCell from "./HeroLoadTaskCell";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HeroLoadLayer extends PopLayer {

    @property(cc.Label)
    lbl_totalScore:cc.Label = null

    @property(cc.ProgressBar)
    pro_scoreProgress:cc.ProgressBar = null

    @property([cc.Node])
    vec_scoreAwardNode:cc.Node[] = []

    @property([cc.Node])
    vec_scoreAwardSimple:cc.Node[] = []

    @property([cc.Node])
    vec_scoreAwardAleadyGet:cc.Node[] = []

    @property([cc.Node])
    vec_scoreAwardReddot:cc.Node[] = []

    @property([cc.Label])
    vec_scoreAwardStars:cc.Label[] = []

    @property([cc.Toggle])
    vec_toggleDays:cc.Toggle[] = []

    @property([cc.Node])
    vec_daysLocks:cc.Node[] = []

    @property([cc.Node])
    vec_daysReddot:cc.Node[] = []

    @property(InfiniteList)
    scr_list:InfiniteList = null

    @property(cc.Prefab)
    m_cell_prefab:cc.Prefab = null

    @property(cc.Node)
    timeNode:cc.Node = null

    @property(cc.Label)
    timeleft:cc.Label = null

    maxDay:number = 0;  //开启到的最大的天数
    selectDay:number = 1
    data:proto.IHeroLoadTaskCell[] = []
    m_cell_height: number = 0

    onLoad () {
        this.scr_list.Init({
            getCellNumber: this.GetCellNumber.bind(this),
            getCellSize: this.GetCellSize.bind(this),
            getCellIdentifer: this.GetCellIdentifer.bind(this),
            getCellView: this.GetCellView.bind(this),
            getCellData: this.GetCellData.bind(this),
        });
        
        /*  */
        Net.listenProtocol(proto.Ptl.HeroLoadTaskListRsp, buffer=>{
            let msg = proto.Msg_HeroLoadTaskListRsp.decode(buffer);
            cc.log("HeroLoadTaskListRsp (获取英雄之路任务列表) msg: " + JSON.stringify(msg));
            if(msg) {
                HeroLoadManager.getInstance().data = msg
                this.maxDay = msg.unlockDay > 7 ? 7 : msg.unlockDay
                this.setDays()
                this.setTopScore()
                this.refreshTop()
                this.onToggleClick(null, this.maxDay)
            }
        },this);

        //领取任务奖励
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_HeroLoadGetAward, (param)=>{
            let msg = param as proto.Msg_ReceiveHeroLoadTaskRewardRsp
            if(msg)
            {
                popRewardLayer_Ex(msg.reward)
                this.refreshTop()
                this.refreshDAysReddot()
                this.setTopScore()
                this.setListView()
            }

        }, this);

        //领取任务积分奖励
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_HeroLoadGetScoreAward, (param)=>{
            let msg = param as proto.Msg_ReceiveHeroLoadTaskStepRewardRsp
            if(msg){
                this.setTopScore()
                this.refreshDAysReddot()
                this.setListView()
            }
        }, this);

        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan.bind(this), this, true)

        let param8 = new proto.Msg_HeroLoadTaskListReq()
        Net.Send(proto.Ptl.HeroLoadTaskListReq, param8)
    }

    onTouchBegan(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips)
    }

    setDays(){
        for(let i = 0; i < this.vec_daysLocks.length; i++){
            this.vec_daysLocks[i].active = i >= this.maxDay
        }
        this.refreshDAysReddot()
    }

    refreshTop(){
        let curscore = HeroLoadManager.getInstance().data.score
        this.lbl_totalScore.string = curscore.toString()
        let len = tab.Data.HeroLoadTaskScoreTable.length
        let maxscore = tab.Data.HeroLoadTaskScoreTable[len-1].ScoreID || 1
        this.pro_scoreProgress.progress = curscore / maxscore

        this.timeNode.active = HeroLoadManager.getInstance().data.endUTC > getServerUtcTime()
        if(this.timeNode.active){
            this.unschedule(this.countDown)
            this.countDown(0)
            this.schedule(this.countDown, 1)
        }
    }

    countDown(dt){
        let left = HeroLoadManager.getInstance().data.endUTC - getServerUtcTime()
        if(left <= 0){
            this.hide()
            this.unschedule(this.countDown)
            return
        }

        left = left < 0 ? 0 : left
        setTimeTXT(this.timeleft, left)
    }

    //刷新天数也签上的小红点
    refreshDAysReddot(){
        let reddotVec:number[] = HeroLoadManager.getInstance().getDayRed()
        for(let i = 0; i < this.vec_daysReddot.length; i++){
            this.vec_daysReddot[i].active = reddotVec.includes(i+1)
        }
    }

    initTop(){
        let maxposx = this.pro_scoreProgress.node.getContentSize().width
        let len = tab.Data.HeroLoadTaskScoreTable.length
        let maxscore = tab.Data.HeroLoadTaskScoreTable[len-1].ScoreID || 1
        for(let i = 0; i < this.vec_scoreAwardNode.length; i++){
            let ele = this.vec_scoreAwardNode[i]
            let cfg = tab.Data.HeroLoadTaskScoreTable[i]
            if(cfg){
                let posx = maxposx * (cfg.ScoreID / maxscore )
                ele.setPosition(new cc.Vec2(posx, ele.getPosition().y))
            }
        }
    }

    /*  */
    setTopScore(){
        for(let i = 0; i < this.vec_scoreAwardSimple.length; i++){
            let ele = this.vec_scoreAwardSimple[i]
            let com = ele.getComponent(SimpleItem)
            com.setNameVisible(false)
            this.vec_scoreAwardAleadyGet[i].active = false      
            this.vec_scoreAwardReddot[i].active = false                  
            let cfg = tab.Data.HeroLoadTaskScoreTable[i]
            if(cfg){
                this.vec_scoreAwardStars[i].string = cfg.ScoreID.toString()
                let award:proto.RewardSimpleInfo = new proto.RewardSimpleInfo
                award.rewardCount = cfg.RewardCount
                award.rewardId = cfg.RewardID
                award.rewardType = cfg.RewardType

                com.setView(award, true)
            
                let data = HeroLoadManager.getInstance().data
                if(data.score >= cfg.ScoreID ){
                    if(data.alreadyGetIDList.includes(cfg.ScoreID) == false){
                        this.vec_scoreAwardReddot[i].active = true
                        com.setClickCallback(()=>{       
                            let param8 = new proto.Msg_ReceiveHeroLoadTaskStepRewardReq()
                            param8.scoreID = cfg.ScoreID
                            Net.Send(proto.Ptl.ReceiveHeroLoadTaskStepRewardReq, param8)
                        })
                    } else {
                        com.setClickCallback(null)
                        this.vec_scoreAwardAleadyGet[i].active = true                        
                    }
                } else {
                    com.setClickCallback(null)
                }
            }
        }
    }

    GetCellNumber(): number {
        return this.data.length;
    }

    GetCellSize(idx: number): number {
        if (this.m_cell_height == 0){
            this.m_cell_height = cc.instantiate(this.m_cell_prefab).height;
        }
        return this.m_cell_height;
    }

    GetCellIdentifer(idx: number): string {
        return "HeroLoadCell"
    }

    GetCellView(idx: number): InfiniteCell {
        return cc.instantiate(this.m_cell_prefab).getComponent(HeroLoadTaskCell);
    }
    
    GetCellData(idx: number){
        if (idx < this.data.length){
            return this.data[idx];
        }
        return null;
    }

    onToggleClick(toggle, args){
        let days = Number(args)
        if(days > 0 && days <= 7){
            if(this.vec_daysLocks[days-1].active){
                ShowTipsOfCustomString("未解锁")
                this.vec_toggleDays[this.selectDay-1].isChecked = true
                return
            }
            this.vec_toggleDays[days-1].isChecked = true

            let node1 = this.vec_toggleDays[this.selectDay-1].node.getChildByName("orilbl")
            if(node1){
                node1.active = true
            }

            let node = this.vec_toggleDays[days-1].node.getChildByName("orilbl")
            if(node){
                node.active = false
            }
            this.selectDay = days
            this.setListView()
        }
    }

    setListView(){
        if(!HeroLoadManager.getInstance().data){
            cc.log("heroload data is null")
            return
        }

        let list = HeroLoadManager.getInstance().data.tasks
        this.data = []
  
        for(let i = 0; i < list.length; i++){
            let cfg = tab.Data.HeroLoadTaskTableByID.getValue(list[i].taskID)
            if(cfg && cfg.BelongToDay == this.selectDay){
                this.data.push(list[i])
            }
        }

        if(this.data.length > 0){
            this.data.sort((a,b)=>{
                return a.state - b.state
            })        
        }
        this.scr_list.Reload()
        this.scr_list.scrollToOffset(new cc.Vec2(0,2))
        
    }


    start () {
        this.initTop()
    }
}
