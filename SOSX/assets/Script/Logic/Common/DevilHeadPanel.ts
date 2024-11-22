/*
 * @Descripttion: 魔王头像通用信息面板
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import ChallengeMain from "../Challenge/ChallengeMain";
import CardDetail from "../Main/CardDetail";
import TalentLayer from "../Talent/Talent";
import talentTotalInfo from "../Talent/talentTotalInfo";
import { LoadResAsync, showPopLayerV2, ShowTips } from "../Utils/GameUtils";
import { CardNodeState, isValidObj, kNegativeOneNumber, kNoneString, kOneNumber, kTwoNumber, kZeroNumber } from "./CommonInterface";
import ManagerNewCardRedDot from "./ManagerNewCardRedDot";
import Role from "./Role";
import { checkIconPathIsValid } from "./SeasonRankCommonFunc";

const {ccclass, property} = cc._decorator;

@ccclass
export default class DevilHeadPanel extends cc.Component {

    @property(cc.Node)
    node_devil: cc.Node = null;

    @property(cc.Sprite)
    spr_devil_bg: cc.Sprite = null;
    
    @property(cc.Sprite)
    spr_devil_portrait: cc.Sprite = null;

    @property(cc.Sprite)
    spr_devil_frame: cc.Sprite = null;

    @property(cc.Label)
    lbl_devil_name: cc.Label = null;
    
    @property(cc.Label)
    lbl_devil_level: cc.Label = null;

    @property(cc.ProgressBar)
    prog_bar_devil: cc.ProgressBar = null;

    @property(cc.Sprite)
    spr_full_bar: cc.Sprite = null;

    @property(cc.Sprite)
    spr_full_arrow: cc.Sprite = null;

    @property(cc.Sprite)
    spr_arrow: cc.Sprite = null;

    @property(cc.Label)
    lbl_card_count: cc.Label = null;
    
    @property(cc.Button)
    btn_learn_skill: cc.Button = null;

    @property(cc.Node)
    spr_talent_reddot: cc.Node = null;

    @property(cc.Label)
    lbl_talent_left_count: cc.Label = null;

    @property(cc.Node)
    node_level: cc.Node = null;

    @property(cc.Sprite)
    spr_challengeLock: cc.Sprite = null;
    
    private _bChallenge:boolean           = false
    private _devil_uuid: string           = kNoneString;
    private _bTalentTotalInfo: boolean    = false;
    private _bSelf: boolean               = false;
    private _bDisplayProgressBar: boolean = true;
    private _devil_level: number          = kZeroNumber;
    private _devil_static_id: number      = kZeroNumber;
    private _devil_own_count: number      = kZeroNumber;
    private _teamIndex: number            = kNegativeOneNumber;
    private _talent_infos: proto.ITalenItem[] | Map<number,number>;

    /*  */
    onLoad () {
        this.btn_learn_skill.node.on("click", this.onClickOpenTalentSys, this);
        this.spr_devil_portrait.node.on(cc.Node.EventType.TOUCH_END, this.showDevilSystem, this);
        this.spr_devil_bg.node.on(cc.Node.EventType.TOUCH_END, this.showDevilSystem, this);

        //监听切换魔王
        Net.listenProtocol(proto.Ptl.SetLordRsp, (buffer, ptl)=>{
            if(this._bChallenge){
                return
            }
            let msg = proto.Msg_SetLordRsp.decode(buffer);
            cc.log("SetLordRsp (监听切换魔王) : msg " + JSON.stringify(msg));
            switch(msg.result){
                case proto.CommonErrorCode.Succeed:
                    this._devil_uuid = msg.lord;
                    Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_RefreshDevilInfo, msg.lord);
                    this.refreshDevilInfo();
                    break;

                case proto.CommonErrorCode.Failed:
                    ShowTips("SwitchDevilError");
                    break;
            }
        }, this);

        /* 挑战设置魔王 */
        Net.listenProtocol(proto.Ptl.ChallengeSetLordRsp, (buffer, ptl)=>{
            let msg = proto.Msg_ChallengeSetLordRsp.decode(buffer)
            cc.log("ChallengeSetLordRsp (挑战设置魔王) : msg " + JSON.stringify(msg));
            switch(msg.result){
                case proto.Msg_ChallengeChangeDeckRsp.ErrorCode.Succeed:
                    this._devil_uuid = msg.cardUuid;
                    let card = Role.Instance.RoleItemAtrr.getItemByUUID(msg.cardUuid)
                    if(card){
                        let lord = Role.Instance.challengeData.challengeData.lord
                        if(lord == undefined){
                            Role.Instance.challengeData.challengeData.lord = new proto.FightCardData()
                        }
                        
                        Role.Instance.challengeData.challengeData.lord.staticId = card.staticId
                        Role.Instance.challengeData.challengeData.lord.level = card.level
                    }
                    Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_ChallengeRefreshDevilInfo, msg.cardUuid);
                    this.refreshDevilInfo();
                    break;

                case proto.Msg_ChallengeChangeDeckRsp.ErrorCode.ParamError:
                    ShowTips("ParamStrError");
                    break;
                case proto.Msg_ChallengeChangeDeckRsp.ErrorCode.NoChallenge:
                    ShowTips("ChallengeActivityNotOpen");
                    break;

                case proto.Msg_ChallengeChangeDeckRsp.ErrorCode.ForbidQuality:
                    ShowTips("CannotUseColorCard");
                    break;
                case proto.Msg_ChallengeChangeDeckRsp.ErrorCode.SpecifiedCard:
                    ShowTips("SpecialCards");
                    break;
            }
        }, this)

        //监听天赋红点
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_TalentReddot, (param)=>{
           this.refreshTalentSkillReddot();
        }, this);

        //角色等级变化检查天赋红点
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateRoleExpAndLevel, (param: any)=>{
            this.refreshTalentSkillReddot();
        }, this);
    }

    /*  */
    start () {
        this.refreshTalentBtnVisible();
    }

    /*  */
    public initDevilDataOfUUID(devilUUID: string, teamIndex:number = -1){
        this._devil_uuid          = devilUUID;
        this._bDisplayProgressBar = true;
        this._bSelf               = true;
        this._bTalentTotalInfo    = false;
        this._teamIndex           = teamIndex;
        this.resetSelfDevilData();
    }

    /*  */
    private resetSelfDevilData(){
        let devilInfo: proto.IItemData = Role.Instance.RoleItemAtrr.getItemByUUID(this._devil_uuid);
        if (!isValidObj(devilInfo)){
            if(!cc.sys.isNative){throw new Error("The Devil UUID is invalid!");}
            return;
        }

        this._devil_level      = devilInfo.level;
        this._devil_static_id  = devilInfo.staticId;
        this._devil_own_count  = devilInfo.count;
        ManagerNewCardRedDot.getInstance().signCardState(this._devil_static_id, false);
        this.setDisplayElement();
    }

    /*  */
    public initDevilDataOfStaticID(devilID: number, devilLevel: number, talentInfos: proto.ITalenItem[] | Map<number,number>, bSelf: boolean){
        this._devil_static_id     = devilID;
        this._devil_level         = devilLevel;
        this._talent_infos        = talentInfos;
        this._bDisplayProgressBar = false;
        this._bSelf               = bSelf;
        this._bTalentTotalInfo    = true;
        this.setDisplayElement();
    }

    /*  */
    public setTalentTotalInfo(bTotal:boolean){
        this._bTalentTotalInfo = bTotal;
    }

    /*  */
    private refreshDevilInfo(){
        this.resetSelfDevilData();
        this.playSwitchDevilEffect();
    }

    /**
     * @returns 获得当前上阵魔王的静态id
     */
    public getCurLordStaticID():number{
        return this._devil_static_id;
    }

    /* 显示魔王信息
     */
    private setDisplayElement(){
        //先重置下魔王的信息
        this.spr_devil_portrait.setTexture(kNoneString);
        this.setDevilName(kNoneString);
        this.lbl_devil_level.string     = kNoneString;
        this.node_level.active          = false;
        this.prog_bar_devil.node.active = false;
        this.refreshTalentSkillReddot();
        this.refreshLockIcon();

        let itemData: tab.ItemTable = tab.Data.ItemTableByID.getValue(this._devil_static_id);
        if (!isValidObj(itemData)){
            cc.log("魔王数据不存在！@@@@");
            return;
        }

        let lordData = tab.Data.LordSkillTableByLordID.getValue(this._devil_static_id);
        if(!lordData) {
            cc.log("魔王数据不存在！");
            return;
        }
       
        this.prog_bar_devil.node.active = this._bDisplayProgressBar;
        this.setDevilHeadIcon(lordData.ShowPortrait);

        this.setDevilQualityFrame();
        this.prog_bar_devil.node.active && this.setDevilProgressBar(itemData.Quality);
        this.setDevilName(itemData.Name);
        this.setDevilLevel();
    }
    
    /* 设置魔王头像
     * @param icon   头像icon
     */
    private async setDevilHeadIcon(icon: string){
        if(!checkIconPathIsValid(icon)){
            if(!cc.sys.isNative){throw new Error("Devil Icon is inValid");}
            return;
        }

        let sf = await LoadResAsync(icon, cc.SpriteFrame);
        if(sf) {
            if(this.spr_devil_portrait){
                this.spr_devil_portrait.spriteFrame = sf;
            }
        }
    }

    /* 设置魔王品质框
     */
    private async setDevilQualityFrame(){
        let devilPanelTab: tab.DevilPanelIconTable = tab.Data.DevilPanelIconTableByID.getValue(this._devil_static_id);
        if(isValidObj(devilPanelTab)){
            let sf = await LoadResAsync(devilPanelTab.QualityFrameIcon, cc.SpriteFrame);
            if(sf) {
                if(this.spr_devil_frame){
                    this.spr_devil_frame.spriteFrame = sf;
                }
            }
            sf = await LoadResAsync(devilPanelTab.BgIcon, cc.SpriteFrame);
            if(sf){
                if(this.spr_devil_bg){
                    this.spr_devil_bg.spriteFrame = sf;
                }
            }
        }
    }

    /* 设置魔王名称
     */
    private setDevilName(name: string){
        this.lbl_devil_name.string = name;
    }

    /* 设置魔王等级
     */
    private setDevilLevel(){
        let itemTab: tab.ItemTable = tab.Data.ItemTableByID.getValue(this._devil_static_id);
        if(!isValidObj(itemTab)){
            if(!cc.sys.isNative){throw new Error("The Devil is invalid");}
            return;
        }
        
        let cardUpLevelTab:tab.CardUpLevelTable = tab.Data.CardUpLevelTableByQuality.getValue(itemTab.Quality);
        let limitLevel = ChallengeMain.getLimitLv();
        if(isValidObj(cardUpLevelTab)){
            let realLevel =  this._devil_level + cardUpLevelTab.ExtraAddLv
            this._bChallenge && (realLevel = realLevel > limitLevel ? limitLevel : realLevel);
            this.lbl_devil_level.string = `${realLevel}`;
        } else {
            this.lbl_devil_level.string = `${this._devil_level}`;
        }

        this.node_level.active = true;
    }

    /* 设置魔王进度条信息
     * @param quality  品质
     */
    private setDevilProgressBar(quality: number){
        let cardUpLevelTab:tab.CardUpLevelTable = tab.Data.CardUpLevelTableByQuality.getValue(quality);
        if(isValidObj(cardUpLevelTab)){
            let tempArr = cardUpLevelTab.Count;
            let idx     = kZeroNumber;
            while((idx  = tempArr.indexOf(kZeroNumber, kOneNumber)) > kNegativeOneNumber){
                if (idx > kNegativeOneNumber) {
                    tempArr.splice(idx, kOneNumber);
                }
            }

            let levelIdx = this._devil_level < tempArr.length ? this._devil_level : (tempArr.length - kOneNumber);
            let bReachMaxLv = this._devil_level >= tempArr.length;
            this.setUpLvProgressBar(this._devil_own_count, tempArr[levelIdx], bReachMaxLv);
            return;
        }

        this.setUpLvProgressBar(kZeroNumber, kZeroNumber, false);
    }

    /* 设置魔王升级进度条信息
     * @param ownCount   已经拥有的数量
     * @param needCount  升级需要的数量
     */
    private setUpLvProgressBar(ownCount: number, needCount: number, bReachMaxLv: boolean){
        ownCount                        = ownCount > kZeroNumber ? (ownCount - kOneNumber) : ownCount; //必须减掉自身【设计缺陷】
        this.lbl_card_count.string      = `${ownCount}/${needCount}`;
        this.prog_bar_devil.progress    = (ownCount / needCount > kOneNumber) ? kOneNumber : ownCount / needCount;
        this.spr_full_arrow.node.active = !bReachMaxLv && ownCount >= needCount;
        this.spr_arrow.node.active      = ownCount < needCount;
        this.spr_full_bar.node.active   = ownCount >= needCount;
    }

    /* 打开天赋系统
     */
    private onClickOpenTalentSys(){
        if(this._bTalentTotalInfo){
            showPopLayerV2("prefab/talentTotalInfo", talentTotalInfo).then(talentTotalInfo=>{
                if(talentTotalInfo){
                    talentTotalInfo.setData(true, this._talent_infos);
                }
            });
            return;
        }

        if(Role.Instance.RoleData.level < kTwoNumber){
            ShowTips("NotEnoughToOpen");
            return;
        }
        
        showPopLayerV2("prefab/Talent", TalentLayer).then(talentInfoLayer=>{
            talentInfoLayer && talentInfoLayer.initView(this._teamIndex == kNegativeOneNumber ? Role.Instance.DeckIndex : this._teamIndex, 
                this._bChallenge);
        });
    }

    /* 打开魔王系统
     */
    private showDevilSystem(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyCloseCopyDeck);
        
        if(!isValidObj(this._devil_uuid) && this._devil_static_id <= kZeroNumber){
            return;
        }

        let self = this;
        showPopLayerV2("prefab/CardDetail", CardDetail, false).then(nodeDetail=>{
            let cardNodeState = !self._bTalentTotalInfo ? CardNodeState.CARD_NODE_STATE_IN_TEAM : CardNodeState.CARD_NODE_STATE_UNOWN;
            nodeDetail.setCardData( self._devil_static_id, 
                                    cardNodeState, );
        });
    }

    /* 播放切换魔王特效
     */
    public playSwitchDevilEffect(){
        let animNode = this.node_devil.getComponent(cc.Animation);
        if(animNode){
            animNode.play("swtich_devil_effect");
        }
    }

    /**
     * 刷新小锁的状态
     */
    private refreshLockIcon(){
        if(!this._bChallenge){
            this.spr_challengeLock.node.active = false;
            return;
        }

        this.spr_challengeLock.node.active = ChallengeMain.lockLordID;
    }

    /**
     * 获取魔王锁定的状态
     */
    public getEvilLockState(): boolean{
        return this.spr_challengeLock.node.active;
    }

    /*  */
    public showRedPoint(bVisible: boolean) {
        this.spr_talent_reddot.active          = bVisible;
        this.lbl_talent_left_count.node.active = bVisible;
    }

    /*  */
    public getSkillReddotVisible(): boolean{
        return this.spr_talent_reddot.active;
    }

    /* 刷新天赋技能红点
     */
    private refreshTalentSkillReddot(){
        if(!this._bSelf ){
            this.spr_talent_reddot && (this.spr_talent_reddot.active = false);
            return;
        }

        let totalNum    = kZeroNumber;
        let leftNum     = kZeroNumber;
        let redNum      = kZeroNumber;
        let talentInfos = null;

        if(!this._bChallenge){
            totalNum = Role.Instance.RoleData.level - kOneNumber;
            let teamIdx = this._teamIndex == kNegativeOneNumber ? Role.Instance.DeckIndex : this._teamIndex;
            let curTeamData: proto.IDeckData = Role.Instance.RoleData.decks[teamIdx];
            isValidObj(curTeamData) && (talentInfos = isValidObj(curTeamData.talent) && curTeamData.talent.talentItems);
        } else {
            totalNum = Math.min(Role.Instance.RoleData.level, ChallengeMain.getLimitLv()) - kOneNumber;
            let challengeInfo = Role.Instance.challengeData;
            if(isValidObj(challengeInfo) && challengeInfo.challengeData.talent){
                talentInfos = challengeInfo.challengeData.talent.talentItems || [];
            }
        }

        talentInfos && (redNum = this.calcLeftTalentPoints(talentInfos));
        leftNum = totalNum - redNum;

        let bRedTip = leftNum > kZeroNumber;
        if(!this._bChallenge){
            ManagerNewCardRedDot.getInstance().saveTeamTalent(this._teamIndex == kNegativeOneNumber ? Role.Instance.DeckIndex : this._teamIndex, 
                bRedTip);
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NewTalent, bRedTip)   //check下下排按钮卡牌的小红点显示
        }

        if(this.spr_talent_reddot){
            this.spr_talent_reddot.active          = bRedTip;
            this.lbl_talent_left_count.node.active = bRedTip;
            this.lbl_talent_left_count.string      = leftNum.toString()
        }
    }

    /* 计算天赋点数
     */
    private calcLeftTalentPoints(talentPoints: proto.ITalenItem[]){
        let retVal          = kZeroNumber;
        let talentPointsLen = talentPoints.length;
        for(let idx = kZeroNumber; idx < talentPointsLen; idx++){
            if(talentPoints[idx].points){
                talentPoints[idx].points.forEach((value, key)=>{
                    retVal += value;
                });
            }
        }
        return retVal;
    }

    /* 刷新天赋技能按可见性
     */
    private refreshTalentBtnVisible(){
        this.btn_learn_skill.node.active = Role.Instance.RoleGrade > kZeroNumber;
    }

    /* 播放切换动画
     */
    public playExchangeAni(bPlay:boolean = true){
        let animNode = this.node_devil.getComponent(cc.Animation);
        if(animNode){
            bPlay  ? animNode.play("changecardhuangdong") : animNode.stop("changecardhuangdong");
            !bPlay && (this.node_devil.angle = kZeroNumber); 
        }
    }
}
