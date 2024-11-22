/**
 * 
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import charactor_four from "../Common/charactor_four";
import { CardNodeState, getCardSortTypeTxt, isValidObj, ITransCardInfo, kNegativeOneNumber, kNoneString, kOneNumber, kZeroNumber, sortCardStaticIDVec, sortCardUUIDVec, sortDevilCard } from "../Common/CommonInterface";
import DevilHeadPanel from "../Common/DevilHeadPanel";
import Role from "../Common/Role";
import SmallPortrait from "../Common/SmallPortrait";
import MainScene from "../Main/MainScene";
import { ShowTips } from "../Utils/GameUtils";
import ChallengeMain from "./ChallengeMain";

const kCardGroup: number = 5;

const {ccclass, property} = cc._decorator;

@ccclass
export default class ChallengeDeck extends cc.Component {

    @property(cc.Node)
    layout_own_area: cc.Node = null;

    @property(cc.Label)
    lbl_own_card_num: cc.Label = null;

    @property(cc.Node)
    lockNode: cc.Node = null

    @property(cc.Node)
    lock_area: cc.Node = null
   
    @property(cc.Node)
    node_use:cc.Node = null;

    @property(cc.Node)
    scroll_view:cc.Node = null;
    
    @property(cc.Node)
    node_own: cc.Node = null;

    @property(cc.Button)
    btn_sort: cc.Button = null;

    @property(cc.Label)
    lbl_sort_title: cc.Label = null;
    
    @property(cc.Node)
    node_portrait_area: cc.Node = null;

    @property(cc.Prefab)
    pfb_select_card:cc.Prefab = null;

    @property(cc.Node)
    node_temp: cc.Node = null;

    @property(cc.Sprite)
    spr_select_arrow_up: cc.Sprite = null;

    @property(cc.Sprite)
    spr_select_arrow_down: cc.Sprite = null;

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
    lbl_devil_card_num: cc.Label = null;

    @property(cc.Node)
    node_devil_info: cc.Node = null;

    @property(cc.Node)
    layout_devil_area: cc.Node = null;

    @property(cc.Node)
    node_devil_info_panel: cc.Node = null;

    @property(cc.Prefab)
    pfb_card_group: cc.Prefab = null

    @property(cc.Node)
    closeBtn: cc.Node = null

    @property(cc.Node)
    rightBtn: cc.Node = null

    private _teamMembersArry: SmallPortrait[]     = [];
    private _teamIndex: number                    = kZeroNumber;
    private _bTouch: boolean                      = false;
    private _card_sort_type: number               = tab.SortType.SortType_CardLevelIncrease;
    private _own_card_vec: string[]               = [];
    private _own_lock_card_vec: string[]               = [];

    private _total_can_used_cards: number         = kZeroNumber;
    private _bInit: boolean                       = false;
    private _devil_card_vec: number[]             = [];
    private _devil_card_locak_vec: number[]             = [];

    private _record_devil_total_count: number     = kZeroNumber; //记录下魔王的总和数量
    private _own_devil_card_count: number         = kZeroNumber; //已拥有的魔王卡牌数量
    private _in_teaming_devil_id: number; //当前阵容中的魔王uuid
   
    _own_card_node_map       = new tab.Dictionary<number, charactor_four>();
    _devil_card_node_map     = new tab.Dictionary<number, charactor_four>();

    movecardUUid: string;
    private _moveCardNode: cc.Node = null;
    private _touchTimes: number = kZeroNumber;
    private _select_card_uuid: string;
    private _bSelectCardIsDevil: boolean = false;
    private _touchCardPos: cc.Vec2;
    private _bCanWatchTime: boolean = true;
    private _bTouchCardArea: boolean = false;
    private _bCallbackEndedEvent: boolean = false;
    private _bInMoving: boolean = false;
    private _lockCardIdx: number = kZeroNumber;

    onLoad () {  
        this._card_sort_type = tab.SortType.SortType_CardLevelIncrease;
        this._teamMembersArry.push(this.node_card_1.getComponent(SmallPortrait));
        this._teamMembersArry.push(this.node_card_2.getComponent(SmallPortrait));
        this._teamMembersArry.push(this.node_card_3.getComponent(SmallPortrait));
        this._teamMembersArry.push(this.node_card_4.getComponent(SmallPortrait));
        this._teamMembersArry.push(this.node_card_5.getComponent(SmallPortrait));

    
        this.btn_sort.node.on("click", this.onSortClick, this);

        //注册触摸事件 onTouchBegan                                                                                                       
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this, true);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancelled, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
        
        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_ChallengeRefreshDevilInfo, (param:any)=>{
            this.refreshDevilsInfo((param as string));
        }, this);

        /* 挑战改变卡组 */
        Net.listenProtocol(proto.Ptl.ChallengeChangeDeckRsp, (buffer, ptl)=>{
            let msg = proto.Msg_ChallengeChangeDeckRsp.decode(buffer)
            cc.log("ChallengeChangeDeckRsp(挑战改变卡组) : msg " + JSON.stringify(msg));
            if (msg != null){
                if (msg.result == proto.Msg_ChallengeChangeDeckRsp.ErrorCode.Succeed){
                    this.closeBtn.active = true
                    this.rightBtn.active = true
                    let card = Role.Instance.RoleItemAtrr.getItemByUUID(msg.cardUuid)
                    Role.Instance.challengeData.challengeData.cards[msg.cardIndex].staticId = card.staticId
                    Role.Instance.challengeData.challengeData.cards[msg.cardIndex].level = card.level
                    this.refreshTeam() /* 重新刷新一遍界面 */
                }
            }
        }, this);

        this.scroll_view.on("scroll-began", ()=>{
            this._bCanWatchTime = false;
            this._touchTimes    = kZeroNumber;
            this.unschedule(this.listenWatchTime);
        }, this);

        this.scroll_view.on("scrolling", ()=>{
            this._bCanWatchTime = false;
            this._touchTimes    = kZeroNumber;
        }, this);

        this.scroll_view.on("scroll-ended", ()=>{
            this._bCanWatchTime = true;
        }, this);

        //监听通知选中的卡牌UUID消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifySelectCardUUID, (param: any)=>{
            if(!Role.Instance.IsGuideFinished() || !this.node.active || !this.node.activeInHierarchy){
                return;
            }

            let retData = (param as ITransCardInfo);
            this._select_card_uuid   = retData ? retData.uuid : kNoneString;
            this._bSelectCardIsDevil = retData && retData.bDevilCard;
            this._bTouchCardArea     = true;
        }, this);

        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyCleanWatchTime, (param: any)=>{
            if(!Role.Instance.IsGuideFinished() || !this.node.active || !this.node.activeInHierarchy){return;}
            this.resetWatchTime();
        }, this);

        /*  */
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyOverMoveArea, (param: any)=>{
            if(!Role.Instance.IsGuideFinished() || !this.node.active || !this.node.activeInHierarchy){return;}
            this.cleanTouchInfo();
            this.resetWatchTime();
        }, this);

        this.initMoveCardNode(); /*  */
    }

    /*  */
    start () {
        this._moveCardNode && this.node.addChild(this._moveCardNode);
        this._moveCardNode && (this._moveCardNode.on("position-changed", ()=>{
            this._bInMoving = true;
        }, this));
    }

    /*  */
    onDestroy(){
        this._teamMembersArry      = [];
        this._own_card_vec         = [];
        this.clearCardGroups(this._own_card_node_map);
        this.clearCardGroups(this._devil_card_node_map);
    }

    /* 初始化拖动的卡牌头像
     */
    private initMoveCardNode(){
        this._moveCardNode        = cc.instantiate(this.pfb_select_card);
        this._moveCardNode.active = false;
    }
 
    /*  */
    private clearCardGroups(cardGroupsMap: tab.Dictionary<number, charactor_four>){
        if(cardGroupsMap !== undefined) {
            for(let elem of cardGroupsMap.values()) {
                if(elem && elem.node){
                    elem.node.removeFromParent();
                    elem.node.destroy();
                }
            }
            cardGroupsMap.clear();
        }
    }
    
    public setView(){
        if(this._bInit){
            return;
        }
        
        this.initTeam();
        this._bInit = true;
    }

    /*  */
    private setAllCardCount(){
        let team: proto.IDeckData = Role.Instance.RoleData.decks[this._teamIndex];
        let membersCount          = team.deckItems.length;
        let ownCardCount = this._own_card_vec.length + membersCount;
     
        this.lbl_own_card_num.string = ""  //`${ownCardCount}`;

        let unownCount = this._total_can_used_cards - ownCardCount;
        unownCount     = unownCount > kZeroNumber ? unownCount : kZeroNumber;

        //魔王数量标签
        this.lbl_devil_card_num.string = ""  // `${this._own_devil_card_count}/${this._record_devil_total_count}`
    }

    /*  */
    private clearCardAndDevilData(bResetUnown: boolean){
        this._own_card_vec             = [];
        this._devil_card_vec           = [];
        this._own_lock_card_vec         = []
        this._own_devil_card_count     = kZeroNumber;
        this._record_devil_total_count = kZeroNumber;
    }
    
    /*  */
    private recordCardData(bResetUnown: boolean = true){
        //保存下当前阵容中的魔王uuid
        this._in_teaming_devil_id = Role.Instance.challengeData.challengeData.lord && Role.Instance.challengeData.challengeData.lord.staticId || 0

        //取得当前阵容卡组数据
        let curTeamData: proto.IFightCardData[]    = Role.Instance.challengeData.challengeData.cards
        if(curTeamData && curTeamData.length > kZeroNumber){
            this.clearCardAndDevilData(bResetUnown);
        }

        //获得禁用的卡牌数组
        let cfg = tab.Data.ChallengeTableByID.getValue(Role.Instance.challengeData.challengeData.challengeId)
        let lockvec:number[] = []
        let length = 0
        if(cfg){
            if(cfg.Type.includes(tab.ChallengeType.ChallengeType_ForbidSpecifiedQualityCard)){
                lockvec = cfg.TypeParam
                length = cfg.TypeParam.length
            }
        }

        let includes = function(num){
            for(let i = 0; i < length; i++){
                if(lockvec[i] == num){
                    return true
                }
            }
            return false
        }

        //遍历物品表，组织拥有卡牌、未拥有卡牌、拥有的魔王和未拥有的魔王
        for (let data of tab.Data.ItemTableByID.values()){
            let cardTabData  = tab.Data.CardTableByID.getValue(data.ID);
            //不是卡牌就pass
            if(!isValidObj(cardTabData)){
                continue;
            }

            // //是特殊卡牌【变成不能攻击的树桩等等】不作为正常卡牌显示在卡库中需要pass
            // if(cardTabData.Type == tab.CardType.CardType_Special){
            //     continue;
            // }

            //根据物品ID从玩家自身物品库中取数据
            let ownItemData = Role.Instance.RoleItemAtrr.getItemByStaticID(data.ID);

            // //魔王卡牌
            // if(cardTabData.Type == tab.CardType.CardType_Lord){
            //     this._record_devil_total_count++;
            //     //玩家拥有该物品，且当前阵容中的魔王存在
            //     if(ownItemData && this._in_teaming_devil_id > 0){
            //         //排除在当前阵容上的魔王
            //         if(this._in_teaming_devil_id == Number(ownItemData.staticId)){
            //             continue;
            //         }
            //         this._own_devil_card_count++;
            //     }
            //     if(ownItemData) {
            //         if(includes(data.Quality)) {
            //             this._devil_card_locak_vec.push(data.ID)
            //         }
            //         this._devil_card_vec.push(data.ID);
            //     }
            //     continue;
            // }

            //禁用的卡牌
            if(ownItemData && includes(data.Quality)){
                this._own_lock_card_vec.push(ownItemData.id)
                continue;
            }
            
            //是正常的英雄卡牌
            if(ownItemData && curTeamData && curTeamData.length > kZeroNumber){
                //在阵容中就pass
                let bfind:boolean = false;
                for(let i= 0; i < curTeamData.length; i++){
                    if(curTeamData[i].staticId == Number( ownItemData.staticId)){
                        bfind = true
                        break
                    }
                }
                if(bfind){
                    continue;
                }
            }

            //未拥有该物品
            if(!isValidObj(ownItemData)){
              
            } else {
                this._own_card_vec.push(ownItemData.id);
            }
        }
        this.setAllCardCount();
    }

    /*  */
    private refreshOwnLayoutCardData(){
        this.refreshOwnCardOrDevilCard(this._own_card_vec, false);
    }

    /*  */
    private refreshDevilLayoutData(){
        this.setDevilInfoPanel();
        this.refreshOwnCardOrDevilCard(this._devil_card_vec, true);
    }

    /*  */
    private refreshOwnCardOrDevilCard(cardIDArr: string[] | number[], bDevilCard: boolean){
        let tempCardIDArr = [];
        let idx = kZeroNumber;
        for(let data of cardIDArr){
            tempCardIDArr.push(data);
            if(kCardGroup == tempCardIDArr.length){
                bDevilCard ? this.loadDevilCardData(tempCardIDArr, idx) : this.loadOwnCardData(tempCardIDArr, idx);
                tempCardIDArr = [];
                idx++;
            }
        }

        //检测剩余部分
        tempCardIDArr.length > kZeroNumber && (bDevilCard ? this.loadDevilCardData(tempCardIDArr, idx++) : this.loadOwnCardData(tempCardIDArr, idx++));

        if(!bDevilCard){
            //隐藏剩余部分的卡牌
            for(let j=idx; j<this._own_card_node_map.size(); j++){
                let node = this._own_card_node_map.getValue(j)
                if(node.isValid){
                    node.node.active = false
                }
            }
        }
        
        if(bDevilCard){
            for (let i = idx; i < this._devil_card_node_map.size(); i++) {
                let node = this._devil_card_node_map.getValue(i)                
                if(node.isValid){
                    node.node.active = false
                }
            }
        }
    }

    /*  */
    private setDevilInfoPanel(){
        if(!Role.Instance.challengeData) return

        let evilinfo = Role.Instance.challengeData.challengeData.lord || {}
        let talent = Role.Instance.challengeData.challengeData.talent || {}
        let devihead:DevilHeadPanel = this.node_devil_info_panel.getComponent(DevilHeadPanel)
        if(devihead){
            let lv = 1
            let card = Role.Instance.RoleItemAtrr.getItemByStaticID(evilinfo.staticId)
            if(card){
                lv = Math.max(card.level, evilinfo.level)                    //取得真实的等级
                evilinfo.level = lv
            }
            devihead.initDevilDataOfStaticID(evilinfo.staticId || 0, lv || 0, talent.talentItems, true)                            
            devihead.setTalentTotalInfo(false)
        }
    }

    /*  */
    private initTeamMembers(){
        if(!Role.Instance.challengeData){
            return
        }

        let team: proto.IFightCardData[] = Role.Instance.challengeData.challengeData.cards
        let membersCount          = team.length
        let cfg = tab.Data.ChallengeTableByID.getValue(Role.Instance.challengeData.challengeData.challengeId)
        let lockidvec = []
        if(cfg){
            if(cfg.Type.includes(tab.ChallengeType.ChallengeType_OutSpecifiedCard)){
                lockidvec = cfg.TypeParam
            }
        } else {
            cc.log("挑战活动的id配置错误" + Role.Instance.challengeData.challengeData.challengeId)
        }

        let includes = function(num){
            for(let i = 0; i<lockidvec.length; i++){
                if(lockidvec[i] == num){
                    return true
                }
            }
            return false
        }

        for(let i = kZeroNumber; i < this._teamMembersArry.length; ++i){
            if(i < membersCount && team[i].staticId > 0){
                this._teamMembersArry[i].node.active = true;

                let lv = 1;
                let card = Role.Instance.RoleItemAtrr.getItemByStaticID(team[i].staticId)
                if(card){
                    lv = Math.max(card.level, team[i].level) //取得真实的等级
                    team[i].level = lv
                }

                if( includes(team[i].staticId)){
                    this._teamMembersArry[i].initWithStaticId(team[i].staticId,false, CardNodeState.CARD_NODE_STATE_LOCKED, lv, cfg.HeroLv);
                } else {
                    this._teamMembersArry[i].initWithStaticId(team[i].staticId,false, CardNodeState.CARD_NODE_STATE_IN_TEAM, lv, cfg.HeroLv);
                }
            } else {
                this._teamMembersArry[i].setEmptyInfo()
            }
        }
    }

    protected initTeam(){
        this.initTeamMembers();
        this.recordCardData();
        this.refreshSortLabelText();

        //分别排序下吧
        sortCardUUIDVec(this._own_card_vec, this._card_sort_type);
        sortDevilCard(this._devil_card_vec, this._card_sort_type);

        //刷新
        this.refreshOwnLayoutCardData();
        this.refreshDevilLayoutData();
        this.refreshLockLayoutData();
    }

    public refreshTeam(){
        this.initTeamMembers();
        this.recordCardData(false);
        sortCardUUIDVec(this._own_card_vec, this._card_sort_type);
        sortDevilCard(this._devil_card_vec, this._card_sort_type);
        this.refreshOwnLayoutCardData();
        this.refreshDevilLayoutData();
        this.refreshLockLayoutData();
    }

    /*  */
    refreshLockLayoutData() {
        if(this._own_lock_card_vec.length > kZeroNumber){
            let tempCardIDArr = [];
            let idx = kZeroNumber;
            for(let data of this._own_lock_card_vec){
                tempCardIDArr.push(data);
                if(kCardGroup == tempCardIDArr.length){
                    this.loadLockCardData(tempCardIDArr, idx);
                    tempCardIDArr = [];
                    idx++;
                }
            }
    
            //检测剩余部分
            tempCardIDArr.length > kZeroNumber && this.loadLockCardData(tempCardIDArr, idx)

            idx++;
            //隐藏剩余部分的卡牌
            
            for(let j=idx; j<this.lock_area.childrenCount; j++){
                let node = this.lock_area.children[idx]
                if(node){
                    node.active = false
                }
            }
        }
    }

    /*  */
    private refreshDevilsInfo(newDevilUUID: string){
        let newDevilInfo: proto.IItemData = Role.Instance.RoleItemAtrr.getItemByUUID(newDevilUUID);
        if(isValidObj(newDevilInfo)){
            let idx = this._devil_card_vec.indexOf(newDevilInfo.staticId);
            idx > kNegativeOneNumber && this._devil_card_vec.splice(idx, 1);
        }

        let oldDevilInfo: proto.IItemData = Role.Instance.RoleItemAtrr.getItemByStaticID(this._in_teaming_devil_id);
        if(isValidObj(oldDevilInfo) && oldDevilInfo.staticId !== newDevilInfo.staticId){
            this._devil_card_vec.push(oldDevilInfo.staticId);
        }

        sortDevilCard(this._devil_card_vec, this._card_sort_type);
        this._in_teaming_devil_id = newDevilInfo.staticId
        Role.Instance.challengeData.challengeData.lord.staticId = newDevilInfo.staticId
        Role.Instance.challengeData.challengeData.lord.level = Math.min(ChallengeMain.getLimitLv(), newDevilInfo.level)
        this.refreshDevilLayoutData();
    }

    /*  */
    private loadLockCardData(cardIDArr: string[], idx: number){
        if(cardIDArr.length > kZeroNumber){
            let cardGroup = this.lock_area.children[idx]
            if(!cardGroup){
                cardGroup = cc.instantiate(this.pfb_card_group)
                this.lock_area.addChild(cardGroup);
            }
            cardGroup.active = true            
            cardGroup.getComponent(charactor_four).initData(cardIDArr, CardNodeState.CARD_NODE_STATE_LOCKED, ChallengeMain.getLimitLv(), true );
        }
    }

    /*  */
    private loadOwnCardData(cardIDArr: string[], idx: number){
        if(cardIDArr.length > kZeroNumber){
            let cardGroup = this._own_card_node_map.getValue(idx);
            if(!cardGroup){
                cardGroup = cc.instantiate(this.pfb_card_group).getComponent(charactor_four);
                this._own_card_node_map.setValue(idx, cardGroup);
                this.layout_own_area.addChild(cardGroup.node);
            }
            cardGroup.node.active = true
            cardGroup.initData(cardIDArr, CardNodeState.CARD_NODE_STATE_OWN, ChallengeMain.getLimitLv(), true );
        }
    }

    /*  */
    private loadDevilCardData(devilCardIDArr: number[], idx: number){
        if(devilCardIDArr.length > kZeroNumber){
            let cardGroup = this._devil_card_node_map.getValue(idx);
            if(!cardGroup){
                cardGroup = cc.instantiate(this.pfb_card_group).getComponent(charactor_four);
                this._devil_card_node_map.setValue(idx, cardGroup);
                this.layout_devil_area.addChild(cardGroup.node);
            }
            cardGroup.node.active = true
            cardGroup.initDevilData(devilCardIDArr,CardNodeState.CARD_NODE_STATE_OWN,ChallengeMain.getLimitLv(), true, this._devil_card_locak_vec);
        }
    }

    /*  */
    private resetOwnCardOrDevilCard(cardVec: string[] | number[], cardMap: tab.Dictionary<number, charactor_four>){
        let cardGroupNode = null;
        if(cardVec.length < kCardGroup){
            cardGroupNode = cardMap.getValue(kZeroNumber);
            cardGroupNode && cardGroupNode.resetCardData(cardVec);
            return;
        }

        let idx              = kZeroNumber;
        let cardGroupListLen = cardMap.size();
        let tempCardIdVec    = [];
        for(let data of this._own_card_vec){
            tempCardIdVec.push(data);
            if(kCardGroup == tempCardIdVec.length){
                if(idx >= cardGroupListLen){
                    throw "idx out of range**";
                }
                cardGroupNode = cardMap.getValue(idx);
                cardGroupNode && cardGroupNode.resetCardData(tempCardIdVec);
                tempCardIdVec = [];
                idx += kOneNumber;
            }
        }

        if(tempCardIdVec.length > kZeroNumber){
            if(idx >= cardGroupListLen){
                throw "idx out of range==";
            }

            cardGroupNode = cardMap.getValue(idx);
            cardGroupNode && cardGroupNode.resetCardData(tempCardIdVec);
            tempCardIdVec = [];
        }
    }

    /*  */
    public onSelectCard(uuid: string){
        let card = Role.Instance.RoleItemAtrr.getItemByUUID(uuid);
        if (!isValidObj(card)){
            return;
        }

        this.node_use.active  = true;
        if(Role.Instance.challengeData){
            let cfg = tab.Data.ChallengeTableByID.getValue(Role.Instance.challengeData.challengeData.challengeId);
            //锁定卡牌模式下，第一个卡牌不允许更换
            if(cfg && cfg.Type.indexOf(tab.ChallengeType.ChallengeType_OutSpecifiedCard) >= kZeroNumber){   
                this._lockCardIdx = kOneNumber;
            }
        }

        this.closeBtn.active       = false;
        this.rightBtn.active       = false;
        this.scroll_view.active    = false;
        this.movecardUUid          = uuid;
        this._moveCardNode.opacity = 255;
        this._bTouch               = true;
        this._bCanWatchTime        = false;

        this.checkIsDevilCard(card.staticId);
        this.exchangeCardPreLogic(uuid, this.node_temp.getPosition());
    }

    /* 检测选中的卡牌是不是魔王
     */
    private checkIsDevilCard(cardID: number){
        // let cardTabData:tab.CardTable = tab.Data.CardTableByID.getValue(cardID);
        // if(!isValidObj(cardTabData)){
        //     return;
        // }
        // this._bSelectCardIsDevil = cardTabData.Type === tab.CardType.CardType_Lord;
        return false;
    }

    /* 拖动选择的卡牌
     */
     private dragSelectCard(uuid: string){
        let card = Role.Instance.RoleItemAtrr.getItemByUUID(uuid);
        if (!isValidObj(card)){
            return;
        }

        this._moveCardNode.opacity = 128;
        this.exchangeCardPreLogic(uuid, this._touchCardPos);
    }

    /* 交换卡牌前置处理逻辑
     */
     private exchangeCardPreLogic(uuid: string, pos: cc.Vec2){
        if(!this._bSelectCardIsDevil){
            for(let i = this._lockCardIdx; i < this._teamMembersArry.length; i++){
                this._teamMembersArry[i].playExchangeAni();
            }
        } else {
            this.node_devil_info_panel.getComponent(DevilHeadPanel).playExchangeAni(true);
        }
        this._moveCardNode && this._moveCardNode.getComponent(SmallPortrait).initData(uuid,false, null);
        this._moveCardNode.setPosition(pos);
        this._moveCardNode.active = true;
        this.setAllTeamToggleState(false);
    }

    /*  */
    protected exchangeTeamMember(upIndex:number, uuidUp:string){
        if(!Role.Instance.challengeData) 
            return false

        let cfg = tab.Data.ChallengeTableByID.getValue(Role.Instance.challengeData.challengeData.challengeId)
        if(isValidObj(cfg)){   
            //锁定卡牌模式下，第一个卡牌不允许更换
            if(cfg.Type.indexOf(tab.ChallengeType.ChallengeType_OutSpecifiedCard) >= kZeroNumber && upIndex == kZeroNumber){
                ShowTips("ChallengeLockCard")
                return false;
            }
        }
        if (upIndex > kNegativeOneNumber){
            let msg       = new proto.Msg_ChallengeChangeDeckReq();
            msg.cardIndex = upIndex;
            msg.cardUuid  = uuidUp;
            Net.Send(proto.Ptl.ChallengeChangeDeckReq, msg);
        }
        return true;
    }

    protected cleanTouchInfo(): void{
        this._bTouch            = false;
        this.node_use.active    = false;
        this.scroll_view.active = true;
        this.closeBtn.active    = true;
        this.rightBtn.active    = true;
        isValidObj(this._moveCardNode) && (this._moveCardNode.active = false);
        if(!this._bSelectCardIsDevil) {
            for(let i = this._lockCardIdx; i < this._teamMembersArry.length; i++){
                this._teamMembersArry[i].playExchangeAni(false);
            }
        } else {
            this.node_devil_info_panel.getComponent(DevilHeadPanel).playExchangeAni(false);
        }
        this.setAllTeamToggleState(true);
    }

    /*  */
    protected async onTouchBegan(event: cc.Event.EventTouch){
        /*
        if(this.node_use.active == false){
            return;
        }

        this._bTouch = true;
        */
        if(tab.Data.GetKeyValue_ConfigTable().IsOpenDragExChangeCard == kZeroNumber){
            return;
        }

        this._bCallbackEndedEvent = false;
        this._touchCardPos        = this.node.convertToNodeSpaceAR(event.getLocation());
        this._bTouchCardArea && this.startWatchTime();
    }

    /*  */
    protected onTouchMoved(event: cc.Event.EventTouch){
        if(!this._bTouch || !this.getDragExchangeCardState()){
            return;
        }

        this._bInMoving    = true;
        this._touchCardPos = this.node.convertToNodeSpaceAR(event.getLocation());
        this._moveCardNode.setPosition(this.node.convertToNodeSpaceAR(event.getLocation()));
    }

    protected onTouchEnded(event: cc.Event.EventTouch){
        /*
        if(!this._bTouch){
            return;
        }
        for (let j = 0; j < this._teamMembersArry.length; j++) {
            if(this._teamMembersArry[j].node.getBoundingBoxToWorld().contains(event.getLocation())){
                this.exchangeTeamMember(j,this.movecardUUid);
                break;
            }     
        }
        this.cleanTouchInfo();
        */
        if(!this._bTouch){
            return;
        }

        if(this.getDragExchangeCardState() || this._moveCardNode.active){
            event.stopPropagation();
        }

        this._bCallbackEndedEvent = true;
        this._bSelectCardIsDevil ? this.confirmExchangeDevil(event) : this.confirmExchangeCard(event);
    }

    /*  */
    protected onTouchCancelled(event: cc.Event.EventTouch){
        /*
        if(this._bTouch){
            this.cleanTouchInfo();
        }
        */
        if(!this._bTouch || !this.getDragExchangeCardState()){
            return;
        }
        
        this._bInMoving = false;
        this._bSelectCardIsDevil ? this.confirmExchangeDevil(event, true) : this.confirmExchangeCard(event, true);
    }

    /* 检测有没有系统触摸结束事件调用
     */
     private checkFinishEndedEvent(){
        if(!this._bCallbackEndedEvent && !this._bInMoving){
            this.cleanTouchInfo();
            this.resetWatchTime();
        }
    }

    /* 确认能不能交换普通卡牌
     */
     private confirmExchangeCard(event: cc.Event.EventTouch, bCancelTouch: boolean = false){
        let bCanExchange = false;
        for(let idx = 0; idx < this._teamMembersArry.length; idx++){
            if(this._teamMembersArry[idx].node.getBoundingBoxToWorld().contains(event.getLocation())){
                bCanExchange = this.exchangeTeamMember(idx, this._moveCardNode.getComponent(SmallPortrait).getUUID());
                break;
            }
        }
        this.finalConfirmExchange(bCanExchange, bCancelTouch);
    }

    /* 确认能不能交换魔王
     */
     private confirmExchangeDevil(event: cc.Event.EventTouch, bCancelTouch: boolean = false){
        let bCanExchange = false;
        if(this.node_devil_info_panel.getBoundingBoxToWorld().contains(event.getLocation())){
            let msg       = new proto.Msg_ChallengeSetLordReq();
            msg.cardUuid  = this._select_card_uuid;
            Net.Send(proto.Ptl.ChallengeSetLordReq, msg);
            bCanExchange = true;
        }
        this.finalConfirmExchange(bCanExchange, bCancelTouch);
    }

    /* 最终确认能不能交换
     */
    private finalConfirmExchange(bCanExchange: boolean, bCancelTouch: boolean){
        if(!bCanExchange && bCancelTouch){
            this.schedule(this.checkFinishEndedEvent, 0.2);
            return;
        }
        this.cleanTouchInfo();
        this.resetWatchTime();
    }
    
    /*  */
    private setAllTeamToggleState(bEnable: boolean){
        this.refreshCardNodeState(!bEnable ? CardNodeState.CARD_NODE_STATE_READY_CHANGE :CardNodeState.CARD_NODE_STATE_IN_TEAM);
    }
  
    /*  */
    private onSortClick(btn: cc.Button){
        this._card_sort_type += kOneNumber;
        this._card_sort_type = (this._card_sort_type >= Number(tab.SortType.SortType_AthleticsLevelDecrease)) ? 
                                tab.SortType.SortType_CardLevelIncrease : this._card_sort_type;
        this.refreshSortLabelText();
        sortCardUUIDVec(this._own_card_vec, this._card_sort_type);
        sortDevilCard(this._devil_card_vec, this._card_sort_type);
        this.refreshOwnLayoutCardData();
        this.refreshDevilLayoutData();
    }

    /*  */
    private refreshSortLabelText(){
        this.lbl_sort_title.string = getCardSortTypeTxt(this._card_sort_type);
        this.setSortArrowForward();
    }

    /*  */
    private setSortArrowForward(){
        switch(this._card_sort_type){
            case tab.SortType.SortType_CardLevelIncrease: 
            case tab.SortType.SortType_CardQualityIncrease:
            case tab.SortType.SortType_AthleticsLevelIncrease:
                this.spr_select_arrow_down.node.active = false;
                this.spr_select_arrow_up.node.active   = true;
                break;

            case tab.SortType.SortType_CardLevelDecrease:
            case tab.SortType.SortType_CardQualityDecrease:
            case tab.SortType.SortType_AthleticsLevelDecrease:
                this.spr_select_arrow_down.node.active = true;
                this.spr_select_arrow_up.node.active   = false;
                break;
        }
    }

    /*  */
    private refreshCardNodeState(state: CardNodeState){
        if(!Role.Instance.challengeData) 
            return

        if(Role.Instance.challengeData.challengeData){
            let teamData = Role.Instance.challengeData.challengeData.cards
            if(teamData){
                let teamMembers = teamData.length
                for(let i = 0; i < this._teamMembersArry.length; ++i){
                    if(i < teamMembers){
                        this._teamMembersArry[i].setCardNodeState(state);
                    }
                }
            }
        }
    }

    /**     
     * Description: 开启秒表计时
     */
     private startWatchTime(){
        if(!Role.Instance.IsGuideFinished() || !this._bCanWatchTime || this.getDragExchangeCardState()){
            return;
        }
        this.schedule(this.listenWatchTime, 0.01);
    }

    /* 监听秒表计时
     */
     private listenWatchTime(dt: number){
        this._bCanWatchTime  && (this._touchTimes += dt);
        this.getDragExchangeCardState() && this._bCanWatchTime && this.stopWatchTime();
    }

    /* 停止秒表计时
     */
    private stopWatchTime(){
        this._bTouch = true;
        this.unschedule(this.listenWatchTime);
        MainScene.Instance.setPageViewScroll(false);
        this.dragSelectCard(this._select_card_uuid);
    }

    /* 重置秒表计时
     */
     private resetWatchTime(){
        this._touchTimes     = kZeroNumber;
        this._bCanWatchTime  = true;
        this._bTouchCardArea = false;
        this.unschedule(this.listenWatchTime);
        this.unschedule(this.checkFinishEndedEvent);
        MainScene.Instance.setPageViewScroll(true);
    }

    /* 是否处于拖动切换卡牌状态中
     */
    public getDragExchangeCardState(){
        return this._touchTimes > tab.Data.GetKeyValue_ConfigTable().DragExChangeCardIntervalTime;
    }
}
