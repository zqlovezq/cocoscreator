
import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { CardNodeState, isValidObj, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import SmallPortrait from "../Common/SmallPortrait";
import { LoadScene, showPopLayer, showPopLayerV2 } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import TalentCellList from "./TalentCellList";
import TalentTips from "./TalentTips";
import talentTotalInfo from "./talentTotalInfo";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TalentLayer extends PopLayer {

    @property(cc.Label)
    teamtxt: cc.Label = null

    @property(cc.Label)
    leftPoint: cc.Label = null;

    @property(cc.ProgressBar)
    curprogressbar: cc.ProgressBar = null

    @property(cc.Label)
    curprogresstxt: cc.Label = null;

    @property([cc.Node])
    node_team_cards: cc.Node[] = []

    @property(cc.Node)
    mowang_node: cc.Node = null

    @property(cc.ScrollView)
    scrollview: cc.ScrollView = null

    @property(cc.Prefab)
    TalentcellList: cc.Prefab = null

    public static  _teamIndex = 0
    public static _curLeftPoint = 0
    private _teamMembersArry: SmallPortrait[]     = [];
    private _bchallenge:boolean = false;

    /*  */
    onClose(){
        if(this._bchallenge){
            let param = new proto.Msg_ChallengeSetTalentReq()
            param.talent = Role.Instance.challengeData.challengeData.talent
            Net.Send(proto.Ptl.ChallengeSetTalentReq, param)
        } else {
            let team: proto.IDeckData = Role.Instance.RoleData.decks[TalentLayer._teamIndex];
            if(team) {
                let param = new proto.Msg_SetTalentReq()
                param.deckIndex = TalentLayer._teamIndex
                param.talent = team.talent
                Net.Send(proto.Ptl.SetTalentReq, param)
            }
        }
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_TalentReddot, null)
        this.hide()
    }

    //天赋说明
    onClickDec() {
        showPopLayerV2("prefab/talentTotalInfo", talentTotalInfo).then(talentTotalInfo=>{
            if(talentTotalInfo){
                if(this._bchallenge){
                    if(Role.Instance.challengeData) {
                        talentTotalInfo.setData(true, Role.Instance.challengeData.challengeData.talent.talentItems)
                    }
                } else {
                    talentTotalInfo.setData(false);
                }
            }
        });
    }

    /*  */
    onTouchBegan(){
        let talenttips = cc.director.getScene().getComponentsInChildren(TalentTips)
        if(talenttips){
            for( let child of talenttips){
                child.node.active = false
            }
        }
    }

    /*  */
    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this, true)
        this._bchallenge = false
        for(let i= 0; i<this.node_team_cards.length; i++){
            this._teamMembersArry.push(this.node_team_cards[i].getComponent(SmallPortrait));
        }

        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_TalentRefreshCellList, (id)=>{
            this.refreshCellList(id)
            this.refreshCellList(id + 1)
        }, this);

        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_TalentRefreshLeftPoint, (param)=>{
           this.refreshLeftPoint()
        }, this);

        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_EnableTalentScroll, (param)=>{
           this.scrollview.enabled = param
        }, this);
    }

    /*  */
    initView(teamIndex:number, bchal:boolean = false){
        TalentLayer._teamIndex = teamIndex
        this._bchallenge = bchal
        let talentItems = this.getTalentEmlments()
       
        //活动挑战和普通的天赋走不同的设置
        if(bchal){
            this.teamtxt.node.active = false
            let team:proto.IFightCardData[] = Role.Instance.challengeData.challengeData.cards
            if(!team){
                return
            }
            
            let mowang:SmallPortrait = this.mowang_node.getComponent(SmallPortrait) //魔王
            if(mowang){
                mowang.hideProgressNode(true)
                if(Role.Instance.challengeData.challengeData.lord){
                    mowang.initWithStaticId(Role.Instance.challengeData.challengeData.lord.staticId, true,CardNodeState.CARD_NODE_STATE_IN_TEAM)
                } else {
                    mowang.setEmptyInfo()
                }
            }    
        
            let membersCount          = team.length; //队伍
            for(let i = 0; i < this._teamMembersArry.length; ++i){
                if(i < membersCount){
                    this._teamMembersArry[i].hideProgressNode(true)
                    this._teamMembersArry[i].initWithStaticId(team[i].staticId,true, CardNodeState.CARD_NODE_STATE_IN_TEAM);
                } else {
                    mowang.setEmptyInfo()
                }
            }
        } else {
            let team: proto.IDeckData = Role.Instance.RoleData.decks[teamIndex];
            if(!team){
                return
            }           
            this.teamtxt.string = String(teamIndex + 1)            
            //魔王
            let mowang:SmallPortrait = this.mowang_node.getComponent(SmallPortrait)
            if(mowang){
                mowang.hideProgressNode(true)
                mowang.initData(Role.Instance.RoleData.decks[teamIndex].lord, false,CardNodeState.CARD_NODE_STATE_IN_TEAM)
            }

            let membersCount = team.deckItems.length; //队伍
            for(let i = 0; i < this._teamMembersArry.length; ++i){
                if(i < membersCount) {
                    this._teamMembersArry[i].hideProgressNode(true)
                    this._teamMembersArry[i].initData(team.deckItems[i], true,CardNodeState.CARD_NODE_STATE_IN_TEAM);
                }
            }    
        }

        let cfg:tab.ChallengeTable = null
        if(Role.Instance.challengeData){
            cfg = tab.Data.ChallengeTableByID.getValue(Role.Instance.challengeData.challengeData.challengeId)
        }
        
        let total:number = 0

        for(let i = 0; i < tab.Data.TalentTierTable.length; i++) { //层
            total += tab.Data.TalentTierTable[i].MaxPoint
            if(bchal && cfg && total > cfg.TalentPoint){
                break;     //如果是挑战模式,天赋点有限制
            }

            let talentcelllist = this.scrollview.content.children[i]
            if(!talentcelllist){
                talentcelllist =  cc.instantiate(this.TalentcellList)
                this.scrollview.content.addChild(talentcelllist)
            }

            if(talentItems && i < talentItems.length){
                talentcelllist.getComponent(TalentCellList).setView(talentItems[i], tab.Data.TalentTierTable[i], this._bchallenge)
            } else {
                talentcelllist.getComponent(TalentCellList).setView({points:[0,0,0]}, tab.Data.TalentTierTable[i], this._bchallenge)
            }
        }
        this.refreshLeftPoint()
    }

    /*  */
    refreshLeftPoint(){
        let talentItems = this.getTalentEmlments()
        let total  = 0
        if(talentItems) {
            for(let i = 0; i < tab.Data.TalentTierTable.length; i++) {  //层
                if(i < talentItems.length){
                    talentItems[i].points.forEach((value,index)=>{
                        total += value
                    })
                }
            }
        }

        let cfg:tab.ChallengeTable = null
        if(Role.Instance.challengeData) {
           cfg = tab.Data.ChallengeTableByID.getValue(Role.Instance.challengeData.challengeData.challengeId)
        }

        let rolepoint = Role.Instance.RoleData.level -1
        let roleTotalPonit = this._bchallenge ? Math.min( cfg.TalentPoint, rolepoint) : rolepoint

        TalentLayer._curLeftPoint = roleTotalPonit  - total

        this.leftPoint.string =  String(roleTotalPonit - total)
    }

    /*  */
    refreshCellList(floorIndex:number){
        let talentItems = this.getTalentEmlments()
        let node = this.scrollview.content.children[floorIndex]
        if(node){
            let celllist:TalentCellList = node.getComponent(TalentCellList)
            let tiedcfg:tab.TalentTierTable = tab.Data.TalentTierTableByTier.getValue(floorIndex + 1)   //层级的索引是从0开始的
            if(celllist && tiedcfg){
                celllist.setView(talentItems[floorIndex] || {points:[0,0,0]}, tiedcfg, this._bchallenge)
            }
        }
    }

    /*  */
    getTalentEmlments(){
        let talentItems = null
        if(this._bchallenge){
            if(Role.Instance.challengeData){
                let talent = Role.Instance.challengeData.challengeData.talent || new proto.TalentData
                Role.Instance.challengeData.challengeData.talent = talent
                talent.talentItems =talent.talentItems || []
                talentItems = talent.talentItems
            }
        } else {
            let team: proto.IDeckData = Role.Instance.RoleData.decks[TalentLayer._teamIndex];
            if(team){
                team.talent = team.talent || new proto.TalentData
                team.talent.talentItems = team.talent.talentItems || []
                talentItems = team.talent.talentItems
            }
        }
        return talentItems
    }

    /*  */
    initExInfo(){
        let curLv          = Role.Instance.RoleData.level;
        let nextLv         = curLv + kOneNumber;
        let curExp         = Role.Instance.RoleData.exp;
        let molecularVal   = kZeroNumber;
        let denominatorVal = kOneNumber;
        let curLvExpTab    = tab.Data.RoleLevelTableByRoleLv.getValue(curLv);

        if(isValidObj(curLvExpTab)){
            molecularVal     = curExp - curLvExpTab.ExpLv;
            let nextLvExpTab = tab.Data.RoleLevelTableByRoleLv.getValue(nextLv);  
            if(isValidObj(nextLvExpTab)){
                denominatorVal = nextLvExpTab.ExpLv - curLvExpTab.ExpLv;
            } else {
                denominatorVal = curLvExpTab.ExpLv;
            }
        } else {
            throw new Error("当前等级都已经不在表中，赶紧给爷检查表去");
        }
        
        let diffVal = molecularVal / denominatorVal;
        this.curprogressbar.progress = (diffVal > kOneNumber) ? kOneNumber : diffVal;
        this.curprogresstxt.string = `${molecularVal}/${denominatorVal}`;
    }

    /*  */
    start () {
        this.initExInfo()

    }
}
