/*
 * @Descripttion: 新卡牌小红点管理类
 */

import { isValidObj} from "./CommonInterface";
import RedDotManager, { RedDotType } from "./ReddotManager";
import Role from "./Role";

export default class ManagerNewCardRedDot{
    private _card_state_map: Map<number, boolean> = new Map<number, boolean>();
    private _team_talent_map: Map<number, boolean> = new Map<number, boolean>();
    private _bPreNewCard: boolean = false;
    private static _instance: ManagerNewCardRedDot = null;
    public static getInstance(): ManagerNewCardRedDot {
        if (!ManagerNewCardRedDot._instance){
            ManagerNewCardRedDot._instance = new ManagerNewCardRedDot();
        }
        return ManagerNewCardRedDot._instance;
    }

    /* 标记卡牌状态
     * @param cardID 
     * @param bNewCard 
     */
    public signCardState(cardID: number, bNewCard: boolean){
        //if(!Role.Instance.IsGuideFinished()) {return;}
        
        this._card_state_map.has(cardID) && this._card_state_map.delete(cardID);
        this._card_state_map.set(cardID, bNewCard);
        this.saveCardState(cardID, bNewCard);

        let bFindNewCard = false;
        !bNewCard && (bFindNewCard = this.findHasNewCard());
    
        if(bNewCard != bFindNewCard){
            this._bPreNewCard !== (bFindNewCard || bNewCard) && 
                RedDotManager.getInstance().UpdateRedDot(RedDotType.HasNewCard, bFindNewCard || bNewCard);
            
        }else{
            this._bPreNewCard !== bFindNewCard && 
                RedDotManager.getInstance().UpdateRedDot(RedDotType.HasNewCard, bFindNewCard);
        }
        this._bPreNewCard = bFindNewCard || bNewCard;
    }

    /* 检测该卡牌是否是新卡牌
     * @param cardID 
     */
    public checkIsNewCard(cardID: number){
        //if(!Role.Instance.IsGuideFinished()) {return false;}

        if(this._card_state_map.has(cardID)){
            return this._card_state_map.get(cardID);
        }

        let key = `${Role.Instance.RoleData.id}_${cardID}`;
        let localData = cc.sys.localStorage.getItem(key);
        if(!isValidObj(localData)){ //本地找不到该卡牌，就是新的【玩家换设备也是这样】
            this.signCardState(cardID, true);
            return true;
        }
        
        let bNewCard = localData === "true";
        this.signCardState(cardID, bNewCard);
        return bNewCard;
    }

    /* 查找有木有新卡牌
     */
    public findHasNewCard(){
        //if(!Role.Instance.IsGuideFinished()) {return false;}
        
        for(let bNewCard of this._card_state_map.values()){
            if(bNewCard){
                //RedDotManager.getInstance().UpdateRedDot(RedDotType.HasNewCard, bNewCard);
                return true;
            }
        }
        
        return false;
    }

    /* 查找当前阵容有没有剩余天赋点
     */
    public findHasLeftTalent(){
        if(this._team_talent_map.has(Role.Instance.DeckIndex)){
            return this._team_talent_map.get(Role.Instance.DeckIndex);
        }
        
        return false;
    }

    public saveTeamTalent(teamIdx: number, bHaveLeftTalent: boolean){
        this._team_talent_map.has(teamIdx) && this._team_talent_map.delete(teamIdx);
        this._team_talent_map.set(teamIdx, bHaveLeftTalent);
    }

    /* 保存卡牌状态在本地
     */
    private saveCardState(cardID: number, bNewCard: boolean){
        //if(!Role.Instance.IsGuideFinished()) {return;}
        
        let key = `${Role.Instance.RoleData.id}_${cardID}`;
        cc.sys.localStorage.setItem(key, bNewCard.toString());
    }

    public destroy(){
        this._card_state_map.clear();
        this._team_talent_map.clear();
        ManagerNewCardRedDot._instance = null;
    }

}
