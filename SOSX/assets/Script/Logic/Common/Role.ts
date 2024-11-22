import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { DefaultEnterPageType, FightFromWhichLayer } from "../Alliance/AllianceCommonInterface";
import { GuideStep } from "../Guide/GuideConfig";
import LoginData from "../Login/LoginData";
import PassportFunc from "../passport/PassportFunc";
import PassportMsg from "../passport/PassportController";
import { getBoxIDAndCfg, getClientUtcTime } from "../Utils/GameUtils";
import { WechatUserInfo } from "../Utils/SdkManager";
import { kThousandNumber } from "./CommonInterface";
import ItemAttr from "./ItemAttr";
import MainMessage from "./MainMessage";
import SeasonFunc from "../Season/SeasonFunc";
import ActivityController from "../Activity/Activity/ActivityController";

export default class Role {
    public shopData         : proto.Msg_GetShopInfoRsp = null;
    public giftBagData      : proto.Msg_GetGiftBagRsp = null;
    public taskData         : proto.Msg_TaskInfoRsp = null;
    public bossBoxData      : proto.BossBoxData = null;
    public challengeData    : proto.Msg_ChallengeGetInfoRsp = null   //活动的信息
    public membershipData   : proto.MembershipData = null;//月卡、永久卡

    public isDemonPass     : boolean = false  //通行证是否已购买
    public FightType    : proto.FightType = null
    protected roleData  : proto.IRoleData = null; /* 角色数据 */

    protected roleItemAttr: ItemAttr = new ItemAttr();

    protected static _ins: Role = null;
    protected newRankLevel = 0;

    protected addCup        : number = 0; // 暂时记录增加的杯数，为了展示用
    protected addShanDian   : number = 0; // 暂时记录增加的闪电，为了展示用
    public addGold          : number = 0;
    public beReportedEndUTC : number = 0;
    // 服务器utc时间减去客户端utc时间
    private m_clientToServerTimeOffset  : number = 0;
    private historyMaxLv                : number = 0
    private _old_rank_level             : number = 0;
    private _old_buffer_end_utc         : number = 0;
    public sharedData                   : proto.Msg_SharedGameRsp = null;
    public everyDaySharedData           : proto.Msg_DailyShareInviteRsp = null;

    private _victoryBoxRewardCount :number = 0; /* 今天胜利宝箱领取次数 */
    private _victoryBoxRefuseCount :number = 0; /* 今天胜利宝箱拒绝次数 */
    private _todayWeekBoxWatchCnt  :number = 0; /* 今天周宝箱广告观看次数 */


    /*  */
    static get Instance(): Role {
        if (!Role._ins) {
            Role._ins = new Role();
        }
        return Role._ins;
    }

    /*  */
    static Purge() {
        Role._ins = null;
    }

    static setRoomData(roomId :number, roomType :number=0, roomCreateTime :number=0){
        Role._ins.roleData.RoomID = roomId;
        Role._ins.roleData.RoomType = roomType;
        Role._ins.roleData.RoomCreateTime = roomCreateTime;
    }

    /* 周礼包 领取次数 */
    public get WeekBoxRewardCnt():number {
        return this._todayWeekBoxWatchCnt;
    }
    public set WeekBoxBoxRewardCnt(cnt:number) {
        this._todayWeekBoxWatchCnt = cnt;
    }

    /* 胜利宝箱 领取次数 */
    public get VictoryBoxRewardCnt():number {
        return this._victoryBoxRewardCount;
    }
    public set VictoryBoxRewardCnt(cnt:number) {
        this._victoryBoxRewardCount = cnt;
    }

    /* 拒绝次数 */
    public get VictoryBoxRefuseCnt():number {
        return this._victoryBoxRefuseCount;
    }
    public set VictoryBoxRefuseCnt(cnt:number) {
        this._victoryBoxRefuseCount = cnt;
    }


    /*  */
    public get IsFirstPayEvilPss(): boolean {
        return this.roleData.bFirstPayEvilPass
    }

    /*  */
    public set firstPayEvilPass(buyed: boolean) {
        this.roleData.bFirstPayEvilPass = buyed
    }

    /*  */
    public get ID() {
        return this.roleData?.id;
    }

    /*  */
    public get RoleData() {
        return this.roleData;
    }

    /*  */
    public get RoleItemAtrr() {
        return this.roleItemAttr;
    }

    /*  */
    public get Name(): string {
        /*
        if(this.roleData.guideTrunk < GuideStep.Name) {
            return tab.Data.GetKeyValue_ConfigTable().PlayerDefaultName;
        }
        */
        return this.roleData?.name;
    }

    public set Name(_name:string){
        this.roleData.name = _name
    }

    /*  */
    init(data: proto.IRoleData) {
        // data.guideBranch = [] //fortest only
        this.roleData = data;

        if (!this.roleData.allianceData || this.roleData.allianceData === undefined) {
            this.roleData.allianceData = new proto.RoleAllianceData();
            this.roleData.allianceData.allianceID = "";
            this.roleData.allianceData.applyingAllianceID = "";
            this.roleData.allianceData.PostRank = -1;
        }

        if (!this.roleData.emotions || this.roleData.emotions.length == 0) {
            for (let id of tab.Data.GetKeyValue_ConfigTable().DefaultEmotionID) {
                this.roleData.emotions.push(id);
            }
        }

        // this.head = "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epQ2aE8TQ54ZiadjRIvgfu238RccrLHUvz7UJx74iayEon75wmZY0KmmKnP6GqnjoCc0499ta0O7GGQ/132"

        this.roleItemAttr.init(data.items);
        this.RoleCup = this.roleData.rankData.score;
        this._old_rank_level = this.RoleGrade;
        this._old_buffer_end_utc = this.roleData.rankData.buffEndUTC;
        this.historyMaxLv = this.getRoleRankLvByScore(this.roleData.rankData.historyMaxScore)

       
        this.isDemonPass = this.roleData.isDemonPass;
        PassportFunc.sortOutData(true)
        this.setBossBoxData(this.roleData.bossBox)
        this.setMembershipData(this.roleData.membershipData)
        this.checkGuideBranchFinish();
        FightFromWhichLayer.getInstance().DefaultEnterPageState = DefaultEnterPageType.FightType;
        MainMessage.Instance.init();
    }

    /*  */
    public set RoleCup(score: number) {
        this.roleData.rankData.score = score;

        let newLv = this.getRoleRankLv();

        if (this.newRankLevel != newLv) {
            this.newRankLevel = newLv;
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_RoleGradeChanged, null)
        }
        // if (this.roleData.rankData.score > this.roleData.rankData.historyMaxScore) {
            //进入大厅时，服务器给的score==historyMaxScore
            this.roleData.rankData.historyMaxScore = Math.max(this.roleData.rankData.score, this.roleData.rankData.historyMaxScore)
            let tmpHistoryMaxLv = this.getRoleRankLvByScore(this.roleData.rankData.historyMaxScore)
            if (this.historyMaxLv != tmpHistoryMaxLv){
                this.historyMaxLv = tmpHistoryMaxLv
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_HistoryMaxlvChange, null)
            }else{
                this.historyMaxLv = this.getRoleRankLvByScore(this.roleData.rankData.historyMaxScore)
            }
        // }
    }

    /*  */
    public get RoleCup() {
        return this.roleData.rankData.score;
    }

    /*  */
    public get RoleGrade() {
        return this.newRankLevel
    }

    /*  */
    public get RoleHistoryMaxRankLv() {
        return this.historyMaxLv
    }

    /*  */
    public get AddShanDian() {
        return this.addShanDian;
    }

    /*  */
    public set AddShanDian(param: number) {
        this.addShanDian = param;
    }

    /*  */
    public set AddCup(param: number) {
        this.addCup = param;
    }

    /*  */
    public get AddCup() {
        return this.addCup;
    }

    /*  */
    getCurrentDeck(): proto.IItemData[] {
        if (this.roleData.deckIndex < 0 || this.roleData.deckIndex >= this.roleData.decks.length) {
            return [];
        }

        let itemArray: proto.IItemData[] = [];
        for (let cardUUID of this.roleData.decks[this.roleData.deckIndex].deckItems) {
            let item = this.roleItemAttr.getItemByUUID(cardUUID)
            itemArray.push(item);
        }
        return itemArray;
    }

    /*  */
    getCurrentLord(): number {
        if (this.roleData.deckIndex < 0 || this.roleData.deckIndex >= this.roleData.decks.length) {
            return 0
        }

        let item = this.roleItemAttr.getItemByUUID(this.roleData.decks[this.roleData.deckIndex].lord)
        if (item) {
            return item.staticId
        }
        return 0
    }

    /*  */
    makeClientToServerTimeOffset(serverUtcTime: number) {
        let newOffset = serverUtcTime - getClientUtcTime();
        if (0 == this.m_clientToServerTimeOffset) {
            this.m_clientToServerTimeOffset = newOffset;
        } else {
            // 偏离越大，说明网络延迟越小
            this.m_clientToServerTimeOffset =
                this.m_clientToServerTimeOffset > newOffset ? this.m_clientToServerTimeOffset : newOffset;
        }
    }

    /*  */
    getClientToServerTimeOffset(): number {
        return this.m_clientToServerTimeOffset;
    }

    /*  */
    clearClientToServerTime() {
        this.m_clientToServerTimeOffset = 0;
    }

    /*  */
    public getRoleRankLvByScore(score: number): number {
        let cfgdata = tab.Data.RankScoreRewardTable
        for(let i= cfgdata.length - 1; i>= 0; i--){
            if(score>= cfgdata[i].Score){
                return  cfgdata[i].FightNum
            }
        }
        return 0
    }

    /*  */
    private getRoleRankLv() {
        return this.getRoleRankLvByScore(this.RoleCup);
    }

    /*  */
    public bTaskReddot(): number {
        if (!this.taskData) {
            return 0;
        }

        let taskboxgroupcfg = tab.Data.TaskBoxGroupTableByBoxGroupId.getValue(this.taskData.boxGroupId)
        let cfgscore = taskboxgroupcfg ? taskboxgroupcfg.Score : "0"  //宝箱的配置积分

        let rednum: number = 0;
        this.taskData.goalBoxScore >= cfgscore && (rednum++);

        for (let i = 0; i < this.taskData.dailyGifts.length; i++) {
            this.taskData.dailyGifts[i].state == proto.TaskState.Reward && (rednum++)
        }

        for (let i = 0; i < this.taskData.dailyTasks.length; i++) {
            this.taskData.dailyTasks[i].state == proto.TaskState.Reward && (rednum++)
        }

        return rednum
    }

    /*  */
    public IsGuideFinished() {
        /* 20230310 wzq修改 */
        // return true;
        // if (SdkManager.Instance.IsReviewMLWY()) {
        //     return true;
        // }
        return this.roleData.guideTrunk >= GuideStep.GuideTrunkDone;
    }

    /*  */
    public IsPassGuideBranch(guideId: number) {
        return this.roleData.guideBranch.indexOf(guideId) != -1;
    }

    /*  */
    public IsOpenSeasonPage() {
        // return this.roleData.guideTrunk >= GuideStep.Fight_3;
    }

    /*  */
    public IsUseNewFightEndLayer() {
        return this.roleData.guideTrunk > GuideStep.Fight_4
    }

    /*  */
    public GetGuideRewardStep(): number {
        if (this.roleData.guideTrunk < GuideStep.Fight_1) {
            return 0
        } else if (this.roleData.guideTrunk < GuideStep.GuideTrunkDone) {
            return 1
        } 
        // else if (this.roleData.guideTrunk < GuideStep.Fight_3) {
        //     return 2
        // } else if (this.roleData.guideTrunk < GuideStep.Fight_4) {
        //     return 3
        // }
        return 1
    }

    /*  */
    // public FinishGuide(guideID: number, sendToSvr = true) {
    //     let guideData = tab.Data.GuideTableByGuidID.getValue(guideID)
    //     console.log("finishGuide 像服务器发送信息");
    //     if (!guideData) {
    //         return;
    //     }
    //     if (guideData.Type == tab.GuideType.GuideType_Trunk) {
    //         if (this.roleData.guideTrunk < guideID) {
    //             this.roleData.guideTrunk = guideID;
    //             if (sendToSvr) {
    //                 //发送给服务器
    //                 let req = new proto.Msg_GuideSetStepReq();
    //                 req.guideStepID = guideID;
    //                 req.isTrunk = true;
    //                 Net.Send(proto.Ptl.GuideSetStepReq, req);
    //             }
    //         }
    //     } else if (guideData.Type == tab.GuideType.GuideType_Branch) {
    //         if (this.roleData.guideBranch.indexOf(guideID) < 0) {
    //             this.roleData.guideBranch.push(guideID)
    //             if (sendToSvr) {
    //                 //发送给服务器
    //                 let req = new proto.Msg_GuideSetStepReq();
    //                 req.guideStepID = guideID;
    //                 req.isTrunk = false;
    //                 Net.Send(proto.Ptl.GuideSetStepReq, req);
    //             }
    //         }
    //     }
    // }

    /*  */
    public getOldRankLevel() {
        return this._old_rank_level;
    }

    /*  */
    public setOldRankLevel(lv: number) {
        this._old_rank_level = lv;
    }

    /*  */
    public getOldBufferEndUTC() {
        return this._old_buffer_end_utc;
    }

    /*  */
    public setOldBufferEndUTC(utc: number) {
        this._old_buffer_end_utc = utc;
    }

    /*  */
    private checkGuideBranchFinish() {
        if (this.roleData.guideTrunk == GuideStep.Fight_4) {
            if (!this.roleData.guideBranch.includes(201)) {
                // this.FinishGuide(201, true);
            }
        }
    }

    /*  */
    public get DeckIndex() {
        return this.roleData.deckIndex;
    }

    /*  */
    public set DeckIndex(idx: number) {
        this.roleData.deckIndex = idx;
    }

    /*  */
    public get Diamond() {
        return this.roleData.diamond;
    }

    /*  */
    public get Gold() {
        return this.roleData.gold;
    }

    public get head(){
        return this.roleData.head
    }

    public set head(_head:string){
        this.roleData.head = _head
    }

    public setWegameInfo(wegameinfo:WechatUserInfo){
        if (Role.Instance.RoleData.guideTrunk >= 100){
            return
        }
        console.log("setWegameInfo",wegameinfo)
        this.head = wegameinfo.avatarUrl
        this.Name = wegameinfo.nickName
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateWechatUserInfo,wegameinfo)
    }


    public checkDiamond(target:number){
        return this.Diamond >= target
    }

    public checkGold(target:number){
        return this.Gold >= target
    }

    public get seasonID(){
        // return 1
        return this.roleData.rankData.fightId
    }

    public isSeason(){
        return this.seasonID > 0
    }


    public setBossBoxData(data:proto.IBossBoxData){
        // data = new proto.BossBoxData()
        // data.level = 0
        // data.exp = 0
        // data.gotBossBoxRewardLevels = []
        // data.gotBossBoxVipRewardLevels = []
        this.bossBoxData = (data as proto.BossBoxData)
        this.bossBoxData.level =data.level || 0
    }
    
    public setMembershipData(data:proto.IMembershipData){
        this.membershipData =  (data as proto.MembershipData)
        if (this.membershipData == null){
            this.membershipData = new proto.MembershipData
        }
        this.membershipData.LifetimeCardAwardTime = this.membershipData.LifetimeCardAwardTime || 0
        this.membershipData.LifetimeCardBuyTime = this.membershipData.LifetimeCardBuyTime || 0
        this.membershipData.MonthlyCardAwardTime = this.membershipData.MonthlyCardAwardTime || 0
        this.membershipData.MonthlyCardVaildTime = this.membershipData.MonthlyCardVaildTime || 0
        ActivityController.getInstance().refreshActivityReddotByID(tab.LimitActivityID.LimitActivityID_MonthAndWeekCard);
    }
    
}