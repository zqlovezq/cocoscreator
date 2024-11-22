/*
 * @Descripttion: 新表情小红点管理类
 */

import { tab } from "../../Table/table_gen";
import { isValidObj } from "../Common/CommonInterface";
import RedDotManager, { RedDotType } from "../Common/ReddotManager";
import Role from "../Common/Role";

export default class ManagerNewEmotionRedDot{
    private _emotion_state_map: Map<number, boolean> = new Map<number, boolean>();
    private _bPreNewEmotion: boolean = false;
    private _default_emotion_set: Set<number> = new Set<number>();
    private static _instance: ManagerNewEmotionRedDot = null;
    public static getInstance(): ManagerNewEmotionRedDot {
        if (!ManagerNewEmotionRedDot._instance){
            ManagerNewEmotionRedDot._instance = new ManagerNewEmotionRedDot();
            ManagerNewEmotionRedDot._instance.init();
        }
        return ManagerNewEmotionRedDot._instance;
    }

    private init(){
        let emotionList = tab.Data.GetKeyValue_ConfigTable().DefaultEmotionID;
        for(let id of emotionList){
            this.saveEmotionState(id, false);
            this._default_emotion_set.add(id);
        }
    }

    /* 检测是否是默认给予的表情
     */
    private checkIsDefaultEmotionID(emotionID: number){
        return this._default_emotion_set.has(emotionID);
    }

    /* 标记表情状态
     */
    public signEmotionState(emotionID: number, bNewEmotion: boolean){
        if(!Role.Instance.IsGuideFinished() || this.checkIsDefaultEmotionID(emotionID)) {return;}
        
        this._emotion_state_map.set(emotionID, bNewEmotion);
        this.saveEmotionState(emotionID, bNewEmotion);

        let bFindNewEmotion = false;
        !bNewEmotion && (bFindNewEmotion = this.findHasNewEmotion());
    
        RedDotManager.getInstance().UpdateRedDot(RedDotType.HasNewEmotion, bFindNewEmotion || bNewEmotion);
        /*if(bNewEmotion != bFindNewEmotion){
            this._bPreNewEmotion !== (bFindNewEmotion || bNewEmotion) && 
                RedDotManager.getInstance().UpdateRedDot(RedDotType.HasNewEmotion, bFindNewEmotion || bNewEmotion);
            
        }else{
            this._bPreNewEmotion !== bFindNewEmotion && 
                RedDotManager.getInstance().UpdateRedDot(RedDotType.HasNewEmotion, bFindNewEmotion);
        }
        this._bPreNewEmotion = bFindNewEmotion || bNewEmotion;*/
    }

    /* 添加新表情
     */
    public setNewEmotion(emotionID: number){
        if(!Role.Instance.IsGuideFinished() || this.checkIsDefaultEmotionID(emotionID)) {return;}
        this._emotion_state_map.set(emotionID, true);
        this.saveEmotionState(emotionID, true);
        RedDotManager.getInstance().UpdateRedDot(RedDotType.HasNewEmotion, true);
    }

    /* 检测该表情是否是新表情
     */
    public checkIsNewEmotion(emotionID: number){
        if(!Role.Instance.IsGuideFinished() || this.checkIsDefaultEmotionID(emotionID)) {return false;}

        if(this._emotion_state_map.has(emotionID)){
            return this._emotion_state_map.get(emotionID);
        }

        let key = `${Role.Instance.RoleData.id}_${emotionID}_` + "emotion";
        let localData = cc.sys.localStorage.getItem(key);
        if(!isValidObj(localData)){ //本地找不到该表情，就是新的【玩家换设备也是这样】
            this.signEmotionState(emotionID, true);
            return true;
        }
        
        let bNewEmotion = localData === "true";
        this.signEmotionState(emotionID, bNewEmotion);
        return bNewEmotion;
    }

    /**
     
     * Description: 查找有木有新表情
     
     */
    public findHasNewEmotion(){
        if(!Role.Instance.IsGuideFinished()) {return false;}
        
        for(let bNewEmotion of this._emotion_state_map.values()){
            if(bNewEmotion){
                return true;
            }
        }
        
        return false;
    }

    /**
     
     * Description: 保存表情状态在本地
     
     * @param emotionID 
     * @param bNewEmotion 
     */
    private saveEmotionState(emotionID: number, bNewEmotion: boolean){
        if(!Role.Instance.IsGuideFinished()) {return;}
        
        let key = `${Role.Instance.RoleData.id}_${emotionID}_` + "emotion";
        cc.sys.localStorage.setItem(key, bNewEmotion.toString());
    }

    public destroy(){
        this._emotion_state_map.clear();
        ManagerNewEmotionRedDot._instance = null;
    }

}
