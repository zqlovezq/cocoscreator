
import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import DevilHeadPanel from "../Common/DevilHeadPanel";
import Role from "../Common/Role";
import { FightLoader } from "../Fight/FightLoader";
import MainScene, { NodeLayerName } from "../Main/MainScene";
import { getRoleGradeLvStr, ShowTips } from "../Utils/GameUtils";
import ChallengeDeck from "./ChallengeDeck";
import ChallengeFight from "./ChallengeFight";
import ChallengeList from "./ChallengeList";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ChallengeMain extends cc.Component {

    @property(cc.Node)
    locknode: cc.Node = null

    @property(cc.Node)
    listnode: cc.Node = null

    @property(cc.Node)
    tofightnode: cc.Node = null

    @property(cc.Node)
    decknode: cc.Node = null

    public static lockLordID:boolean = false
    public static cancleFight:boolean = false

    /*  */
    private checkChallengeEvilLocked():boolean{
        if(!Role.Instance.challengeData){
            return false
        }

        if(!Role.Instance.challengeData.challengeData.lord){
            return false
        }
        let challid = Role.Instance.challengeData.challengeData.challengeId
        let lockvec:Array<number> = new Array<number>()
        let cfg = tab.Data.ChallengeTableByID.getValue(challid)
        if(cfg){
            if(cfg.Type.includes(tab.ChallengeType.ChallengeType_OutSpecifiedLord)) { //魔王禁用
                lockvec = Array.from(cfg.TypeParam)
            }
        }
        return  lockvec.includes(Role.Instance.challengeData.challengeData.lord.staticId || 0)
    }

    /*  */
    public static checkChallengeFightType(){
        if( Role.Instance.challengeData && Role.Instance.challengeData.challengeData){
            let cfg = tab.Data.ChallengeTableByID.getValue(Role.Instance.challengeData.challengeData.challengeId)
            if(cfg){
                return cfg.Type
            }
        }
        return -1;
    }

    /*  */
    public static getLimitLv(){
        if( Role.Instance.challengeData && Role.Instance.challengeData.challengeData){
            let cfg = tab.Data.ChallengeTableByID.getValue(Role.Instance.challengeData.challengeData.challengeId)
            if(cfg){
                return cfg.HeroLv
            }
        }
        return 999
    }

    //可以等到切换到活动页签的时候再选择显示必要的节点，这样可以在后台设置一些界面
    public initView(){
        this.locknode.active = false
        this.listnode.active = false
        this.tofightnode.active = false
        this.decknode.active = false

        if(Role.Instance.RoleData.level < tab.Data.GetKeyValue_ConfigTable().ChallengeActivityOpenLimitLv){ /* 不开放 */
            this.locknode.active = true
            return
        }

        //如果能领奖，则显示领奖界面
        let awardIndex = -1
        let data = Role.Instance.challengeData
        if(!data){
            return
        }

        let cfg:tab.ChallengeTable = tab.Data.ChallengeTableByID.getValue(data.challengeData.challengeId)
        if(cfg){   
            let curWinCnt = data.challengeData.winCount
            let curAwardCnt =  data.challengeData.awardCount
            for(let i = 0; i < cfg.ChalAward.length ; i++){
                if( i >= curAwardCnt) { //领取过
                    if(i < curWinCnt && awardIndex < 0){
                        awardIndex = i;
                        break
                    }
                }
            }
        }
            
        let info = null
        for(let i = 0; i<data.challengeInfos.length; i++){
            if(data.challengeInfos[i].challengeId == data.challengeData.challengeId){
                info = data.challengeInfos[i]
                break
            }
        }

        if((awardIndex >= 0 || ChallengeMain.cancleFight) && info != null){
            this.listnode.active = false
            this.tofightnode.active = true
            this.tofightnode.getComponent(ChallengeFight).setView(info)
        } else {
            this.listnode.active = true
        }

        let comlist:ChallengeList = this.listnode.getComponent(ChallengeList)
        if(comlist){
            comlist.setView()
        }
    }

    /*  */
    private decknode_OK(){
        if(Role.Instance.challengeData){
            let chaldata = Role.Instance.challengeData.challengeData
            if(chaldata){
                for(let i = 0; i < chaldata.cards.length; i++){
                    if(chaldata.cards[i].staticId <= 0){
                        ShowTips("ChallengeActiveTeamCntNotEnough")
                        return
                    }
                }
            }
        }

        /*  */
        let evilpanl = this.decknode.getComponentInChildren(DevilHeadPanel)
        if(evilpanl){
            if(evilpanl.getCurLordStaticID() <= 0){
                ShowTips("NotSetEvilMan");
                evilpanl.playSwitchDevilEffect()
                return
            }

            if(evilpanl.getSkillReddotVisible()){
                ShowTips("HasTalentPointLeft")
                return
            }
        }
        this.tofightnode.active = true
        this.decknode.active = false
        MainScene.Instance.setHorMoveEnabled(true)
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_ShowNavigationNode, true)
    }

    /*  */
    private decknode_Cancle(){
        this.tofightnode.active = true
        this.decknode.active = false
        MainScene.Instance.setHorMoveEnabled(true)
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_ShowNavigationNode, true)
    }


    /*  */
    private changeTeam(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_ShowNavigationNode, false)

        this.tofightnode.active = false
        this.decknode.active = true
        MainScene.Instance.setHorMoveEnabled(false)
        //这之前保证所有的节点都是可见的，都加载进来了
        let comdeck:ChallengeDeck = this.decknode.getComponent(ChallengeDeck)
        if(comdeck){
            comdeck.refreshTeam()
        }
    }

    /*  */
    private toFight(){
        if(Role.Instance.challengeData){
            let chaldata = Role.Instance.challengeData.challengeData
            if(chaldata)   {
                for(let i = 0; i<chaldata.cards.length; i++){
                    if(chaldata.cards[i].staticId <= 0){
                        ShowTips("ChallengeActiveTeamCntNotEnough")
                        return
                    }
                }
            }
            
            if(chaldata.lord == undefined || chaldata.lord.staticId <= 0 ){
                ShowTips("ChallengeActiveTeamCntNotLord")
                return
            }
        }
        
        ChallengeMain.cancleFight = false
        FightLoader.Instance.MatchChallenge()
    }

    /*  */
    onLoad () {
        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_ShowChallengeToFight, (param)=>{
            let chalinfo = param as proto.IChallengeInfo
            let fighview = this.tofightnode.getComponent(ChallengeFight)
            if(fighview){
                fighview.setView(chalinfo)
                this.tofightnode.active = true
                this.listnode.active = false
                this.decknode.active = false
            }
        }, this);

        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_ChallengeFightBackToMain, (param)=>{
            this.tofightnode.active = false
            this.listnode.active = true
            this.decknode.active = false

        }, this);

        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_SelecetNavigationBtn, (param)=>{
            let str = param as NodeLayerName
            if(str == NodeLayerName.ChallengLayer){
                this.locknode.active = false
                this.tofightnode.active = false
                this.decknode.active = false
                
                if(Role.Instance.RoleData.level < tab.Data.GetKeyValue_ConfigTable().ChallengeActivityOpenLimitLv){ /* 不开放 */
                    this.locknode.active = true
                    this.listnode.active = false
                    return
                }

                if(!Role.Instance.challengeData){
                    let param = new proto.Msg_ChallengeGetInfoReq()
                    Net.Send(proto.Ptl.ChallengeGetInfoReq, param)
                } else {
                    this.listnode.active = true
                }
            }
        }, this);

        //获取挑战信息
        Net.listenProtocol(proto.Ptl.ChallengeGetInfoRsp, (buffer, ptl) =>{
            let msg = proto.Msg_ChallengeGetInfoRsp.decode(buffer)
            cc.log("ChallengeGetInfoRsp(获取挑战信息) : msg " + JSON.stringify(msg));
            if (msg != null){
                Role.Instance.challengeData  = msg
                let comdeck:ChallengeDeck = this.decknode.getComponent(ChallengeDeck)
                if(comdeck){
                    comdeck.setView()
                }

                this.initView()
                ChallengeMain.lockLordID = this.checkChallengeEvilLocked()
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_SetChallengeIcon, null)
            }
        }, this)

        //断线重连
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_Reconnect, (param)=>{
            let param1 = new proto.Msg_ChallengeGetInfoReq()
            Net.Send(proto.Ptl.ChallengeGetInfoReq, param1)

        }, this);

        let param = new proto.Msg_ChallengeGetInfoReq()
        Net.Send(proto.Ptl.ChallengeGetInfoReq, param)

    }
}
