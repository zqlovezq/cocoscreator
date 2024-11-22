import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { CaiHongData } from "../../sdk/rainbow/CaiHongData";
import { tab } from "../../Table/table_gen";
import { getTimeDiffString } from "../Alliance/AllianceCommonInterface";
import ChallengeMain from "../Challenge/ChallengeMain";
import { CardNodeState, isValidObj, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import SmallPortrait from "../Common/SmallPortrait";
import PlayerCard from "../PlayerInfo/PlayerCard";
import { LoadScene } from "../Utils/GameUtils";
import ResManager from "../Utils/ResManager";
import Sound, { PlaySound } from "../Utils/Sound";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoadingBountyPrefab extends cc.Component {

    @property(cc.Node)
    nodeInfo: cc.Node = null;

    @property(cc.Button)
    cancleBtn: cc.Button = null;

    @property(cc.Node)
    node_cutdown_time: cc.Node = null;

    @property(cc.Label)
    lbl_cutdown_time: cc.Label = null;

    @property(cc.Node)
    node_card_group: cc.Node = null;

    @property(cc.Label)
    lbl_team_idx: cc.Label = null;

    @property(cc.Node)
    node_self_team: cc.Node = null;

    @property(cc.Node)
    node_card_1: cc.Node = null;

    @property(cc.Node)
    node_card_2: cc.Node = null;

    @property(cc.Node)
    node_card_3: cc.Node = null;

    @property(cc.Node)
    node_card_4: cc.Node = null;

    @property(cc.Node)
    node_card_5: cc.Node = null;

    @property(cc.Label)
    lbl_gameHelpTips: cc.Label = null

    @property(cc.Label)
    lbl_ready_title: cc.Label = null;
    @property(cc.Label)
    lbl_person_number:cc.Label = null;
    
    moveToPromise: Promise<void> = null;
    public static MatchPeopleCount:number = 0;
    private _self_cur_card_group_list: SmallPortrait[] = [];
    private _left_time: number = kZeroNumber;
    private _fight_type: proto.FightType;
    private _bNewPlayerFirstFight: boolean = false;

    private _game_tips: number[] = [];

    onLoad () {
        this.node_cutdown_time.active  = false;
        this.cancleBtn.node.active     = false;
        this.node_card_group.active    = false;

        this.node.on(cc.Node.EventType.TOUCH_END, this.randomGeneratorTips, this);
        
        /* 取消匹配pvp战斗 */
        Net.listenProtocol(proto.Ptl.CancelMatchFightRsp, function (buffer, ptl){
            let msg = proto.Msg_CancelMatchFightRsp.decode(buffer)
            cc.log("CancelMatchFightRsp (取消匹配pvp战斗) msg: " + JSON.stringify(msg));
            if (msg != null){
                cc.log("hidecancelbtn%%%%%%%%%%%%" + msg.result)
                if(msg.result == proto.Msg_CancelMatchFightRsp.ErrorCode.Succeed) {
                    ChallengeMain.cancleFight = true;
                    this.node_card_group.active = false;
                    this.lbl_gameHelpTips.node.active = false;
                    this.node_cutdown_time.active = false;
               } else if(msg.result == proto.Msg_CancelMatchFightRsp.ErrorCode.CancelFailed) {
                    //已经匹配成功进入战斗，不再处理
               } else if(msg.result == proto.Msg_CancelMatchFightRsp.ErrorCode.InvalidOperator) {

               }
            }
        }, this)

        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_HideCancelMachFightBtn, (param)=>{
            this.cancleBtn.node.active = false;

        }, this);

        // 时刻监听进来的对手 wzq 20230601
        // Net.listenProtocol(proto.Ptl.CancelMatchFightRsp, function (buffer, ptl){
        //     let msg = proto.Msg_CancelMatchFightRsp.decode(buffer)
        //     if (msg != null){
        //         this.lbl_person_number.string = "#/8"
        //     }
        // }, this)
        this._self_cur_card_group_list.push(this.node_card_1.getComponent(SmallPortrait));
        this._self_cur_card_group_list.push(this.node_card_2.getComponent(SmallPortrait));
        this._self_cur_card_group_list.push(this.node_card_3.getComponent(SmallPortrait));
        this._self_cur_card_group_list.push(this.node_card_4.getComponent(SmallPortrait));
        this._self_cur_card_group_list.push(this.node_card_5.getComponent(SmallPortrait));

        this.loadNewPlayerFirstFight();
        this.loadGameTipsData();
    }

    start () {
        Sound.Instance.StopAll()
        PlaySound("BGM_Loading")
        ResManager.releaseOtherScene()//释放资源
        this.randomGeneratorTips();
    }

    /* 加载游戏tips数据 */
    private loadGameTipsData(){
        this._game_tips = [];
        let maxSeason = Role.Instance.RoleData.rankData.historyMaxScore;
        for(let data of tab.Data.GameHelpTipsAreaTable){
            if(maxSeason >= data.Area[kZeroNumber] && maxSeason <= data.Area[kOneNumber]){
                for(let id of data.TipsID){
                    this._game_tips.push(id);
                }
            }
        }
    }

    /* 随机生成tips */
    private randomGeneratorTips(){
        let index =  Math.floor(Math.random() * (this._game_tips.length - kOneNumber))
        let cfg = tab.Data.GameHelpTipsTableByID.getValue(this._game_tips[index]);
        if(cfg){
            this.lbl_gameHelpTips.string = cfg.GameHelpTips
        }
    }
    
    /*  */
    public async loadRes(sceneName:string, func?:()=>Promise<void>, loadFin?:Function, bVisibleNodeInfo: boolean = true) {
        this.nodeInfo.active = bVisibleNodeInfo;
        await new Promise(resolve=>{
            CaiHongData.resource_load(sceneName,1,1)
            cc.director.preloadScene(sceneName, (completedCount: number, totalCount: number, item: any)=>{
                // let progress = completedCount / totalCount * 0.5;
                // if(progress > this.progressBar.progress) {
                //     this.progressBar.progress = progress;
                //     this.m_precent.string = `${Math.floor(progress*100)}%`
                // }
            }, (error: Error)=>{
                if (error){
                    CaiHongData.resource_load(sceneName,1,3,error.message)
                }else{
                    CaiHongData.resource_load(sceneName,1,2)
                }
                resolve(error);
            })
        });


        if(func != undefined){
            await func();
        }

        // this.progressBar.progress = 1;
        if(loadFin) {
            loadFin();
        }
    }

    enterScene(sceneName:string, onLaunched?: (error:Error, scene:cc.Scene)=>void) {
        ResManager.mergeResTo(sceneName)
        LoadScene(sceneName, onLaunched)
    }

    cancleMatch(){
        /*
        if(this._fight_type === proto.FightType.AlliancePvE || 
            this._fight_type === proto.FightType.AlliancePvP){
            this.cancelFightInvocation();
            return;
        }
        */
        let param = new proto.Msg_CancelMatchFightReq()
        Net.Send(proto.Ptl.CancelMatchFightReq, param)
        cc.log("发送取消匹配协议")
    }


    showCancleBtn(arg0: boolean) {
        this.cancleBtn.node.active = arg0;     
    }

    onDestroy(){
        this._self_cur_card_group_list = [];
        this.unschedule(this.refreshPvpInvitationCutDownTime);
    }

    /* 设置当前的战斗类型
     * @param type  战斗类型
     */
    public setCurFightType(type: proto.FightType){

        this._fight_type = type;

        switch(type) {
        case proto.FightType.RookiePvP:
            this.node_card_group.active = false;
            break;
        default:
            this.node_card_group.active = true
            break;
        }
        
        if(proto.FightType.Challenge  === this._fight_type){
            this.setChallengeTeamInfo()
        } else {
            this.setSelfTeamInfo();
        }

        if(proto.FightType.AlliancePvE === this._fight_type  || 
            proto.FightType.AlliancePvP === this._fight_type || 
            proto.FightType.FriendPvp === this._fight_type   || 
            proto.FightType.FriendPve === this._fight_type   ||
            proto.FightType.WorldChannelPvE === this._fight_type ||
            proto.FightType.WorldChannelPvP === this._fight_type||
            proto.FightType.Bounty === this._fight_type){
            this._left_time = tab.Data.GetKeyValue_ConfigTable().AllianceInvitationTimeLimit;
            if(proto.FightType.Bounty === this._fight_type){
                this._left_time = 0;
            }
            this.startPvpInvitationProcess();
        }

        if( proto.FightType.AlliancePvE === this._fight_type || 
            proto.FightType.FriendPve === this._fight_type || 
            proto.FightType.PvE === this._fight_type || 
            proto.FightType.WorldChannelPvE === this._fight_type){
            this.lbl_ready_title.string = tab.Data.GetKeyValue_ConfigTable().SearchingPartnershipTips;
        }
    }

    /* 启动pvp邀请流程 */
    private startPvpInvitationProcess(){
        this.node_cutdown_time.active  = true;
        this.setPvpInvitationTitle();
        this.unschedule(this.refreshPvpInvitationCutDownTime);
        this.refreshPvpInvitationCutDownTime();
        this.schedule(this.refreshPvpInvitationCutDownTime, kOneNumber);
    }
    
    /* 刷新PVP邀请的倒计时 */
    private refreshPvpInvitationCutDownTime(){
        if(proto.FightType.Bounty !== this._fight_type){
            if(this._left_time <= kZeroNumber){
                this.node_cutdown_time.active = false;
                this.cancleMatch();
                this.unschedule(this.refreshPvpInvitationCutDownTime);
            }else{
                this._left_time--;
            }
        }else{
            this._left_time++;
        }
        this.lbl_cutdown_time.string = getTimeDiffString(this._left_time);
    }

    /* 设置PVP邀请标题 */
    private setPvpInvitationTitle(){
        let titleStr = (proto.FightType.AlliancePvE === this._fight_type || 
                        proto.FightType.FriendPve === this._fight_type || 
                        proto.FightType.WorldChannelPvE ===  this._fight_type) ? 
                        tab.Data.GetKeyValue_ConfigTable().InfiniteDefenseTip : 
                        tab.Data.GetKeyValue_ConfigTable().FriendMatchTip;
    }

    /* 设置自身阵容信息 */
    private setSelfTeamInfo(){
        let curTeamInfo: proto.IDeckData = Role.Instance.RoleData.decks[Role.Instance.DeckIndex];
        let curTeamInfoLen = curTeamInfo.deckItems.length;
        let curCardGroupLen = this._self_cur_card_group_list.length;
        let cardData: proto.IItemData = null;
        for(let idx = kZeroNumber; idx < curCardGroupLen; ++idx){
            if(idx < curTeamInfoLen){
                cardData = Role.Instance.RoleItemAtrr.getItemByUUID(curTeamInfo.deckItems[idx]);
                if(isValidObj(cardData)){
                    this._self_cur_card_group_list[idx].initWithStaticId(cardData.staticId, false,undefined,cardData.level);
                }
            }
        }
        this.setSelfTeamIndex();
    }

    /**
     * 设置活动的阵容信息
     */
     private setChallengeTeamInfo(){
        let curTeamInfo: proto.IFightCardData[] = Role.Instance.challengeData.challengeData.cards

        let curCardGroupLen = this._self_cur_card_group_list.length;
        let cardData: proto.IItemData = null;
        for(let idx = kZeroNumber; idx < curCardGroupLen; ++idx){
            if(idx < curTeamInfo.length){

                cardData = curTeamInfo[idx]

                if(isValidObj(cardData)){
                    this._self_cur_card_group_list[idx].initWithStaticId(cardData.staticId, false,undefined,cardData.level);
                }
            }
        }

    }

    /* 设置自身阵容索引 */
    private setSelfTeamIndex(){
        this.lbl_team_idx.string = `${Role.Instance.DeckIndex + kOneNumber}`;
    }
    addPersistNode() {
        if(this.node.parent) {
            this.node.removeFromParent()
        }
        cc.game.addPersistRootNode(this.node)
    }
    removePersistNode() {
        if(cc.game.isPersistRootNode(this.node)) {
            cc.game.removePersistRootNode(this.node);
        }
    }
    
    /* 获取是不是新手第一场战斗 */
    private loadNewPlayerFirstFight(){
        let key       = `${Role.Instance.RoleData.id}_new_player_first`;
        let localData = cc.sys.localStorage.getItem(key, true);
        this._bNewPlayerFirstFight = !isValidObj(localData) ? true : (localData === "true");
    }
    protected update(dt: number): void {
        this.lbl_person_number.string = LoadingBountyPrefab.MatchPeopleCount+"/8"
    }
}
