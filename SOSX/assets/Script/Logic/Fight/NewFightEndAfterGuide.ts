/**
 * 
*/

import Analytics, { CAEvtID, CAEvtName } from "../../../Update/Analytics";
import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import ChallengeMain from "../Challenge/ChallengeMain";
import { addFriend, checkCanWatchAdvert, isValidObj, kNoneString, kOneNumber, kZeroNumber, sendAdvertPos, WatchAdvert } from "../Common/CommonInterface";
import ManagerShareType from "../Common/ManagerShareType";
import Role from "../Common/Role";
import ShareBtnModel from "../Common/ShareBtnModel";
import CleanCache from "../Login/CleanCache";
import SimpleItem from "../NewPlayerGiftBag/SimpleItem";
import PlayerCard from "../PlayerInfo/PlayerCard";
import { setTextWithAction, showPopLayerV2, ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import Sound, { PlaySound } from "../Utils/Sound";
import FightDataStatistics, { IFightDamageData } from "./FightDataStatistics";
import FightMsgManager from "./FightMsgManager";
import FightRewardCell from "./FightRewardCell";
import FightShowPlayer from "./FightShowPlayer";
import OnlyCupItem from "./OnlyCupItem";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewFightEndAfterGuide extends PopLayer {

    @property(cc.Node)
    btn_ensure_btn:cc.Node = null

    @property(cc.Label)
    lab_cup_count:cc.Label = null

    @property(cc.Prefab)
    simpleaward: cc.Prefab = null;

    @property(cc.Node)
    other_node:cc.Node = null

    @property(cc.Label)
    other_name:cc.Label = null

    @property(cc.Label)
    other_rankLv:cc.Label = null

    @property(cc.Node)
    other_cards:cc.Node = null

    @property(cc.Label)
    other_lbl_winrate: cc.Label = null;

    @property(cc.Label)
    other_lbl_cups: cc.Label = null;

    @property(cc.Node)
    other_nodeCup:cc.Node = null;

    @property(cc.Node)
    other_cupTips:cc.Node = null

    @property(cc.Node)
    other_winRate:cc.Node = null;

    @property(cc.Node)
    other_winRateTips:cc.Node = null

    @property(cc.Node)
    other_spr_win:cc.Node = null;

    @property(cc.Node)
    other_spr_lose:cc.Node = null;

    @property(cc.Node)
    mine_info_node:cc.Node = null
    
    @property(cc.Label)
    mine_name:cc.Label = null

    @property(cc.Label)
    mine_rankLv:cc.Label = null

    @property(cc.Node)
    mine_info_node_fail:cc.Node = null

    @property(cc.Node)
    mine_info_node_win:cc.Node = null

    @property(cc.Node)
    mine_cards:cc.Node = null

    @property(cc.Label)
    mine_lbl_winrate: cc.Label = null;

    @property(cc.Label)
    mine_lbl_cups: cc.Label = null;

    @property(cc.Node)
    mine_nodeCup:cc.Node = null;

    @property(cc.Node)
    mine_cupTips:cc.Node = null

    @property(cc.Node)
    mine_winRate:cc.Node = null;

    @property(cc.Node)
    mine_winRateTips:cc.Node = null

    @property(cc.Node)
    mine_spr_win:cc.Node = null;

    @property(cc.Node)
    mine_spr_lose:cc.Node = null;

    @property(cc.Label)
    add_cups: cc.Label = null;

    @property(cc.Label)
    decr_cups: cc.Label = null;

    @property(cc.Layout)
    rewardLayout:cc.Layout = null;

    @property(cc.Prefab)
    noBoxSpace:cc.Prefab = null;

    @property(cc.Prefab)
    scorePrefab:cc.Prefab = null;

    @property(cc.Button)
    btn_add_friend: cc.Button = null;

    @property(cc.Button)
    btn_fight_data: cc.Button = null;

    @property(ShareBtnModel)
    node_share_btn: ShareBtnModel = null;

    @property(cc.Button)
    btn_watch_ad_resume_score: cc.Button = null;

    @property(cc.Button)
    btn_yes: cc.Button = null;

    @property(cc.Label)
    lbl_watch_ad_left_time: cc.Label = null;

    @property(cc.Label)
    lbl_first_watch_ad_tip: cc.Label = null;

    @property(cc.Node)
    fight_data:cc.Node = null

    @property(cc.Node)
    Vs_node:cc.Node = null

    private msg_data: proto.IMsg_FightEnd;
    private lay_box : cc.Node = null;
    private _self_damage_list: IFightDamageData[]  = [];
    private _other_damage_list: IFightDamageData[] = [];
    private confirmCallback:Function;
    //private _bWatchAdvertFinish: boolean = false;

    onLoad () {
        this.mine_nodeCup.on(cc.Node.EventType.TOUCH_END, ()=>{this.mine_cupTips.active = true}, this)
        this.mine_winRate.on(cc.Node.EventType.TOUCH_END, ()=>{this.mine_winRateTips.active = true}, this)
        this.other_nodeCup.on(cc.Node.EventType.TOUCH_END, ()=>{this.other_cupTips.active = true}, this)
        this.other_winRate.on(cc.Node.EventType.TOUCH_END, ()=>{this.other_winRateTips.active = true}, this)

        this.btn_add_friend.node.on("click", ()=>{
            let bValidRoleID = isValidObj(FightMsgManager.Instance.otherFightData.roleId);
            addFriend(FightMsgManager.Instance.otherFightData.roleId, 
                bValidRoleID ? FightMsgManager.Instance.otherFightData.name : kNoneString);
        }, this);
        this.btn_add_friend && (this.btn_add_friend.node.active = Role.Instance.IsGuideFinished());

        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this, true)

        this.btn_fight_data.node.on("click", this.onClickOpenDamage, this);
        this.btn_fight_data.node.active = Role.Instance.IsGuideFinished();


        this.node_share_btn.initData(tab.SharedType.SharedType_PVP);
        this.btn_watch_ad_resume_score.node.on("click", this.onClickWatchAd, this);
        
        //监听看广告不掉分消息
        Net.listenProtocol(proto.Ptl.WatchAdResumeSeasonScoreRsp, function (buffer, ptl){
            let msg = proto.Msg_WatchAdResumeSeasonScoreRsp.decode(buffer)
            cc.log("WatchAdResumeSeasonScoreRsp (看广告不掉分) msg: " + JSON.stringify(msg));
            if (msg != null && proto.Msg_WatchAdResumeSeasonScoreRsp.ErrorCode.Succeed === msg.result){
                this.btn_watch_ad_resume_score.interactable = false;
                this.setLeftWatchAdTime(this.msg_data.watchAdCount + kOneNumber);
                this.playResumeScoreEffect();
                return;
            }

           proto.Msg_WatchAdResumeSeasonScoreRsp.ErrorCode.UseUpWatchAd === msg.result && ShowTips("AdvertUseUp");
        }, this);
    }
    
    onDestroy(){
        this._self_damage_list  = [];
        this._other_damage_list = [];
        this.saveNewPlayerFirstFight();
    }

    onTouchBegan(event){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_FightRewardCellHideTips, null)
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips, null)
       
        this.mine_cupTips.active = false
        this.other_cupTips.active = false
        this.mine_winRateTips.active = false
        this.other_winRateTips.active = false
    }

    onOK(){
        this.other_node.active = false
        this.btn_ensure_btn.active = false
        this.fight_data.active = false
        this.Vs_node.active = false
        
        let ani:cc.Animation = this.mine_info_node.getComponent(cc.Animation)
        if(ani){
            ani.play()
            ani.on("finished", ()=>{
                this.btn_yes.node.active = true
                this.mine_info_node_win.active = this.msg_data.isWin
                this.mine_info_node_fail.active = !(this.msg_data.isWin)

                this.node_share_btn.node.active = Role.Instance.IsGuideFinished() && this.msg_data.isWin && !ManagerShareType.getInstance().getIsShared(tab.SharedType.SharedType_PVP);
                this.btn_watch_ad_resume_score.node.active = Role.Instance.IsGuideFinished() && 
                !this.msg_data.isWin && this.msg_data.changeCup > kZeroNumber &&
                checkCanWatchAdvert(tab.AdvertPosType.AdvertPosType_ResumeSeasonScore, 
                    this.msg_data.watchAdCount);
                },this)
        }
    }
    

    // private setAttachedNode(san_kai_tmp: sp.Skeleton, attachName: string
    //     , playerName:string, allianceName?:string, allianceIcon?:number) {
    //     let attachUtil: sp.sp.AttachUtil = san_kai_tmp.attachUtil;
    //     attachUtil.generateAllAttachedNodes();
    //     let boneNodes = attachUtil.getAttachedNodes(attachName);
    //     if (boneNodes.length > 0) {
    //         let firstNode = boneNodes[0]; // 取第一个骨骼挂点
    //         if (firstNode) {
    //             let playerInfo = cc.instantiate(this.pre_player).getComponent(FightShowPlayer);
    //             if(playerInfo) {
    //                 playerInfo.setData(playerName, allianceName, allianceIcon)
    //                 firstNode.addChild(playerInfo.node);
    //             }  
    //         }
    //     }
    // }

    onClickConfirm(){
        if(this.confirmCallback) {
            this.confirmCallback()
        }
    }

    public async setFightEndData(data: proto.IMsg_FightEnd, callback:Function) {
        this.msg_data = data;
        this.confirmCallback = callback;

        Sound.Instance.StopAll();
        if(!this.msg_data.isWin){
            PlaySound("PvPLose")
            PlaySound("CrowdLose")
        } else {
            PlaySound("PvPWin")
            PlaySound("CrowdWin")
        }
        this.initData();
        this.groupDamageData();
    }

    private initData() {
        //显示双方的卡牌阵容
        let otherdata = FightMsgManager.Instance.otherFightData
        let minedata = FightMsgManager.Instance.myFightData
        
        let othercards:PlayerCard[] = this.other_cards.getComponentsInChildren(PlayerCard)
        for(let i = 0; i<othercards.length; i++){
            if(i < otherdata.deckData.length){
                othercards[i].initData(otherdata.deckData[i].staticId, otherdata.deckData[i].level, false)
            }
        }

        othercards[othercards.length-1].initData(otherdata.lordData.staticId, otherdata.lordData.level, false)

        this.other_name.string = otherdata.name
        this.other_rankLv.string = otherdata.rankGrade.toString()
        let othercups = this.msg_data.isWin ? (otherdata.rankScore - this.msg_data.otherChangeCup) : (otherdata.rankScore + this.msg_data.otherChangeCup)
        this.other_lbl_cups.string = othercups.toString()
        let otherwincount = this.msg_data.isWin ? otherdata.pvpWinCount : (otherdata.pvpWinCount + 1)
        
        if(otherdata.pvpCount > 0) {
            this.other_lbl_winrate.string = (100 * otherwincount / (otherdata.pvpCount+1)).toFixed(2) + "%"
        } else {
            this.other_lbl_winrate.string = "60%"
        }

        let minecards:PlayerCard[] = this.mine_cards.getComponentsInChildren(PlayerCard)

        for(let idx = kZeroNumber; idx < minecards.length; ++idx){           
            if(idx < minedata.deckData.length){
                minecards[idx].initData(minedata.deckData[idx].staticId, minedata.deckData[idx].level, true, false);
            }
        }

        minecards[minecards.length-1].initData(otherdata.lordData.staticId, otherdata.lordData.level, false)

        this.mine_name.string = minedata.name
        this.mine_rankLv.string = minedata.rankGrade.toString()
        this.mine_lbl_cups.string = this.msg_data.roleCup.toString()
        let wincount = this.msg_data.isWin ? (minedata.pvpWinCount + 1) : minedata.pvpWinCount

        if(minedata.pvpCount > 0){
            this.mine_lbl_winrate.string = (100 * wincount / (minedata.pvpCount+1)).toFixed(2) + "%"
        } else {
            this.mine_lbl_winrate.string = "100%"
        }

        let isWin = this.msg_data.isWin;

        this.mine_spr_lose.active = !isWin
        this.mine_spr_win.active = isWin
        this.other_spr_win.active = !isWin
        this.other_spr_lose.active = isWin
        // 赢了才给闪电奖励
        if(this.msg_data.isWin){
            this.rewardLayout.node.removeAllChildren()
            for(let reward of this.msg_data.rewards) {
                this.setReward(reward);
            }

            if(this.msg_data.noBoxSpace) {
                let nodebox:cc.Node = cc.instantiate(this.noBoxSpace)
                if (nodebox) {
                    this.rewardLayout.node.addChild(nodebox);
                }
            }
            if(isWin){
                let node = cc.instantiate(this.scorePrefab)
                let cup:OnlyCupItem = node.getComponent(OnlyCupItem)
                if(cup){
                    cup.setCount(this.msg_data.changeCup)   
                    this.rewardLayout.node.addChild(node)
                }
            }
        }

        this.setCupCount(isWin, this.msg_data.changeCup);
        Role.Instance.FightType = this.msg_data.fightType
        Role.Instance.AddCup = this.msg_data.changeCup; 
        Role.Instance.AddShanDian = this.msg_data.addLighting; 
       
        // 战斗失败，不显示动画
        if(!this.msg_data.isWin){
            Role.Instance.AddCup = 0;
            Role.Instance.AddShanDian = 0;
            ChallengeMain.cancleFight = true
        }

        //上报打点数据
        //Analytics.Instance.EventSuccess(CAEvtID.EventTracking, CAEvtName.PvpParticipation);/* zhibo-@20230410 for <删除打点> */

        this.setLeftWatchAdTime(this.msg_data.watchAdCount);
    }

    private setReward(data:proto.IRewardSimpleInfo) {
        let rewardCell:SimpleItem = cc.instantiate(this.simpleaward).getComponent(SimpleItem);
        if (rewardCell) {
            this.rewardLayout.node.addChild(rewardCell.node);
            rewardCell.setView(data, true)
        }
    }

    private setCupCount(isWin: boolean, addCup: number) {
        this.add_cups.string = `+${addCup}`;
        this.decr_cups.string = `-${addCup}`;
        this.add_cups.node.active = isWin
        this.decr_cups.node.active = !isWin
    }

    /* 组织敌我双方伤害数据
     */
    private groupDamageData(){
        this._self_damage_list = []
        for(let data in this.msg_data.myDamage.damageRecord){
            this._self_damage_list.push({cardID: Number(data), damageVal: Number(this.msg_data.myDamage.damageRecord[data])});   
        }
        
        this._other_damage_list = []
        for(let data in this.msg_data.otherDamage.damageRecord){
            this._other_damage_list.push({cardID: Number(data), damageVal: Number(this.msg_data.otherDamage.damageRecord[data])});   
        }
    }

    /* 设置看广告次数
     */
    private setLeftWatchAdTime(watchCount: number){
        let advertTabData = tab.Data.AdvertPosTableByAdvertPos.getValue(tab.AdvertPosType.AdvertPosType_ResumeSeasonScore);
        if(isValidObj(advertTabData)){
            let totalCnt = advertTabData.EveryDayAdvertCount;
            this.lbl_watch_ad_left_time.string = `${watchCount}/${totalCnt}`;
        }
        this.setFirstWatchAdTipVisible(watchCount);
    }

    /* 设置首次看广告提示的可见性
     */
    private setFirstWatchAdTipVisible(count: number){
        this.lbl_first_watch_ad_tip.node.active = count <= kZeroNumber;
    }

    /* 播放恢复积分特效
     */
    private playResumeScoreEffect(){
        this.scheduleOnce(()=>{
            setTextWithAction(this.lab_cup_count.node, 
                                kZeroNumber, 
                                -this.msg_data.changeCup, 
                                kOneNumber, 
                                ()=>{
                                    this.lab_cup_count.node.color = cc.Color.GREEN;
                                    this.msg_data.changeCup       = kZeroNumber;
                                }
                            );
        }, 0.1);
    }

    private onClickOpenDamage(){
        let self = this;
        showPopLayerV2("prefab/FightDataStatistics", FightDataStatistics).then(layer =>{
            layer.initData( self._self_damage_list, 
                            self._other_damage_list, 
                            self.msg_data.waveNum, 
                            self.msg_data.isWin, true);
        });
    }

    private saveNewPlayerFirstFight(){
        let key = `${Role.Instance.RoleData.id}_new_player_first`;
        cc.sys.localStorage.setItem(key, false);
    }

    /* 点击看广告
     */
    private onClickWatchAd(){
        let self = this;
        WatchAdvert((error: Error)=>{
            if(error === undefined){
                sendAdvertPos(tab.AdvertPosType.AdvertPosType_ResumeSeasonScore, kZeroNumber);
            }
        }, 
        (bFinish: boolean)=>{
            if(bFinish){
                //self._bWatchAdvertFinish = true;
                sendAdvertPos(tab.AdvertPosType.AdvertPosType_ResumeSeasonScore, kOneNumber);
                //let param = new proto.Msg_WatchAdResumeSeasonScoreReq();
                //Net.Send(proto.Ptl.WatchAdResumeSeasonScoreReq, param);
                self.sendResumeScoreReq();
            }
        },tab.AdvertPosType.AdvertPosType_ResumeSeasonScore);
    }

    /* 检测要不要发送恢复积分消息
     */
    private checkResumeScore(){
        /*if(this._bWatchAdvertFinish){
            this.sendResumeScoreReq();
        }*/
    }

    /* 发送恢复积分消息
     */
    private sendResumeScoreReq(){
        let param = new proto.Msg_WatchAdResumeSeasonScoreReq();
        Net.Send(proto.Ptl.WatchAdResumeSeasonScoreReq, param);
    }
}
