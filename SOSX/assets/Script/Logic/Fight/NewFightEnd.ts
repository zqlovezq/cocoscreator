
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
import { setTextWithAction, showPopLayerV2, ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import Sound, { PlaySound } from "../Utils/Sound";
import FightDataStatistics, { IFightDamageData } from "./FightDataStatistics";
import FightMsgManager from "./FightMsgManager";
import FightRewardCell from "./FightRewardCell";
import FightShowPlayer from "./FightShowPlayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewFightEnd extends PopLayer {

    @property(cc.Label)
    lab_cup_count: cc.Label = null;

    @property(cc.Node)
    money: cc.Node = null;

    @property(cc.Layout)
    lay_money: cc.Layout = null;

    @property(cc.Button)
    bt_disable: cc.Button = null;

    @property(cc.Prefab)
    pre_money_cell: cc.Prefab = null;

    @property(cc.Prefab)
    pre_no_box: cc.Prefab = null;

    @property(cc.Prefab)
    pre_player: cc.Prefab = null;

    @property(cc.Node)
    nodeCup:cc.Node = null;

    @property(cc.Node)
    cupTips:cc.Node = null

    @property(cc.Layout)
    rewardLayout:cc.Layout = null;

    @property(cc.Node)
    noBoxSpace:cc.Node = null;

    @property(cc.Button)
    btn_add_friend: cc.Button = null;

    @property(cc.Button)
    btn_fight_data: cc.Button = null;

    @property(ShareBtnModel)
    node_share_btn: ShareBtnModel = null;

    @property(cc.Button)
    btn_watch_ad_resume_score: cc.Button = null;

    @property(cc.Label)
    lbl_watch_ad_left_time: cc.Label = null;

    @property(cc.Label)
    lbl_first_watch_ad_tip: cc.Label = null;

    @property(cc.Label)
    lbl_sign: cc.Label = null;
    
    private msg_data: proto.IMsg_FightEnd;
    private lay_box : cc.Node = null;
    private _self_damage_list: IFightDamageData[]  = [];
    private _other_damage_list: IFightDamageData[] = [];
    private confirmCallback:Function;
    //private _bWatchAdvertFinish: boolean = false;

    onLoad () {
        this.lay_box = this.lay_money.node.getChildByName("lay_box");

        this.nodeCup.on(cc.Node.EventType.TOUCH_END, this.showCupTips, this)

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
    
    /*  */
    onDestroy(){
        this._self_damage_list  = [];
        this._other_damage_list = [];
        this.saveNewPlayerFirstFight();
    }

    /*  */
    onTouchBegan(event)
    {
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_FightRewardCellHideTips, null)
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips, null)
        this.cupTips.active = false
    }

    /*  */
    showCupTips() {
        this.cupTips.active = true
    }
    
    /*  */
    private setAttachedNode(san_kai_tmp: sp.Skeleton, attachName: string
        , playerName:string, allianceName?:string, allianceIcon?:number) {

        let attachUtil: sp.sp.AttachUtil = san_kai_tmp.attachUtil;
        attachUtil.generateAllAttachedNodes();
        let boneNodes = attachUtil.getAttachedNodes(attachName);
        if (boneNodes.length > 0) {
            let firstNode = boneNodes[0]; // 取第一个骨骼挂点
            if (firstNode) {
                let playerInfo = cc.instantiate(this.pre_player).getComponent(FightShowPlayer);
                if(playerInfo) {
                    playerInfo.setData(playerName, allianceName, allianceIcon)
                    firstNode.addChild(playerInfo.node);
                }  
            }
        }
    }

    /*  */
    onClickConfirm(){
        if(this.confirmCallback) {
            this.confirmCallback()
        }
    }

    /*  */
    public async setFightEndData(data: proto.IMsg_FightEnd, callback:Function) {
        this.msg_data = data;
        this.confirmCallback = callback;

        let firstAnimationName = "win";
        let secondAnimationName = "winloop";

        Sound.Instance.StopAll();
        if(!this.msg_data.isWin){
            firstAnimationName = "lose";
            secondAnimationName = "loseloop";
            PlaySound("PvPLose")
            PlaySound("CrowdLose")
        } else {
            PlaySound("PvPWin")
            PlaySound("CrowdWin")
        }

        let end_te_xiao = this.node.getChildByName("end_te_xiao");
        let san_kai = end_te_xiao.getComponent(sp.Skeleton);
        if(san_kai){
            san_kai.setAnimation(0, firstAnimationName, false);
            this.scheduleOnce(()=>{
                // 设置角色名字 // 设置联盟名字,目前没有联盟,先放着不做
                this.setAttachedNode(san_kai, "text1", FightMsgManager.Instance.otherFightData.name
                    , FightMsgManager.Instance.otherFightData.allianceName
                    , FightMsgManager.Instance.otherFightData.allianceIcon);
                this.setAttachedNode(san_kai, "text2", FightMsgManager.Instance.myFightData.name
                    , FightMsgManager.Instance.myFightData.allianceName
                    , FightMsgManager.Instance.myFightData.allianceIcon);
                this.initData();
            }, 1);

            san_kai.setCompleteListener(()=>{
                san_kai.setAnimation(0, secondAnimationName, true);
            });
        }
        // this.groupDamageData();
    }

    /*  */
    private initData() {
        // 显示确认按钮
        this.bt_disable.node.active = true;
        // 显示奖励信息
        this.money.parent.active = true;

        this.node_share_btn.node.active = Role.Instance.IsGuideFinished() && this.msg_data.isWin && !ManagerShareType.getInstance().getIsShared(tab.SharedType.SharedType_PVP);
        this.btn_watch_ad_resume_score.node.active = Role.Instance.IsGuideFinished() && 
                                                        !this.msg_data.isWin && this.msg_data.changeCup > kZeroNumber &&
                                                        checkCanWatchAdvert(tab.AdvertPosType.AdvertPosType_ResumeSeasonScore, 
                                                                            this.msg_data.watchAdCount);
        let isWin = this.msg_data.isWin;

        // 赢了才给闪电奖励
        if(this.msg_data.isWin){
            
            this.rewardLayout.node.removeAllChildren()
            for(let reward of this.msg_data.rewards) {
                this.setReward(reward);
            }
            if(this.msg_data.noBoxSpace) {
                this.noBoxSpace.active = true;
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
        //this.checkResumeScore();
    }

    /*  */
    private setReward(data:proto.IRewardSimpleInfo) {
        let icon:string = undefined;
        let count:number = 0
        if(data.rewardType == Number(tab.RewardType.RewardType_ItemType)) {
            let itemData = tab.Data.ItemTableByID.getValue(data.rewardId)
            if(itemData) {
                icon = itemData.Icon;
                count = data.rewardCount
            }
        } else if(data.rewardType == Number(tab.RewardType.RewardType_BoxType)) {
            let boxData = tab.Data.BoxTableByBoxID.getValue(data.rewardId);
            if(boxData) {
                icon = boxData.ItemIcon;
            }
        }

        if(!icon) {
            return;
        }

        let rewardCell = cc.instantiate(this.pre_money_cell).getComponent(FightRewardCell);
        if (rewardCell) {
            this.rewardLayout.node.addChild(rewardCell.node);
            rewardCell.setIcon(icon);
            rewardCell.setTxt(`${count}`);
            rewardCell.setItemInfo(data)
        }
    }

    /*  */
    private setCupCount(isWin: boolean, addCup: number) {
        let sign = "+";
        if(!isWin){
            sign = "-";
            this.lab_cup_count.node.color = cc.Color.RED;
            this.lbl_sign.node.color      = cc.Color.RED;
        }

        this.lab_cup_count.string = `${addCup}`;
        this.nodeCup.active = (addCup != 0)
        this.lbl_sign.string = sign;
    }

    /* 组织敌我双方伤害数据 */
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

    /* 设置看广告次数 */
    private setLeftWatchAdTime(watchCount: number){
        let advertTabData = tab.Data.AdvertPosTableByAdvertPos.getValue(tab.AdvertPosType.AdvertPosType_ResumeSeasonScore);
        if(isValidObj(advertTabData)){
            let totalCnt = advertTabData.EveryDayAdvertCount;
            this.lbl_watch_ad_left_time.string = `${watchCount}/${totalCnt}`;
        }

        this.setFirstWatchAdTipVisible(watchCount);
    }

    /* 设置首次看广告提示的可见性 */
    private setFirstWatchAdTipVisible(count: number){
        this.lbl_first_watch_ad_tip.node.active = count <= kZeroNumber;
    }

    /* 播放恢复积分特效 */
    private playResumeScoreEffect(){
        this.scheduleOnce(()=>{
            this.lbl_sign.node.active = false;
            setTextWithAction(this.lab_cup_count.node, 
                                kZeroNumber, 
                                -this.msg_data.changeCup, 
                                kOneNumber, 
                                ()=>{
                                    this.lab_cup_count.node.color = cc.Color.GREEN;
                                    this.lbl_sign.node.color      = cc.Color.GREEN;
                                    this.lbl_sign.node.active     = true;
                                    this.msg_data.changeCup       = kZeroNumber;
                                }
                            );
        }, 0.1);
    }

    /*  */
    private onClickOpenDamage(){
        let self = this;
        showPopLayerV2("prefab/FightDataStatistics", FightDataStatistics).then(layer =>{
            layer.initData( self._self_damage_list, 
                            self._other_damage_list, 
                            self.msg_data.waveNum, 
                            self.msg_data.isWin, true);
        });
    }

    /*  */
    private saveNewPlayerFirstFight(){
        let key = `${Role.Instance.RoleData.id}_new_player_first`;
        cc.sys.localStorage.setItem(key, false);
    }

    /* 点击看广告 */
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

    /* 检测要不要发送恢复积分消息 */
    private checkResumeScore(){
        /*if(this._bWatchAdvertFinish){
            this.sendResumeScoreReq();
        }*/
    }

    /* 发送恢复积分消息 */
    private sendResumeScoreReq(){
        let param = new proto.Msg_WatchAdResumeSeasonScoreReq();
        Net.Send(proto.Ptl.WatchAdResumeSeasonScoreReq, param);
    }
}
