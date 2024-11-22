/*
 * @Descripttion: 战场地图红点管理类
 */

import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { isValidObj } from "../Common/CommonInterface";
import RedDotManager, { RedDotType } from "../Common/ReddotManager";
import Role from "../Common/Role";

export default class ManagerNewBattleMap{

    private _map_state_map: Map<number, boolean> = new Map<number, boolean>();
    private _bPreNewMap: boolean = false;
    
    private static _instance: ManagerNewBattleMap = null;
    public static getInstance(): ManagerNewBattleMap {
        if (!ManagerNewBattleMap._instance){
            ManagerNewBattleMap._instance = new ManagerNewBattleMap();
            ManagerNewBattleMap._instance.saveMapState(Role.Instance.RoleData.usedBattleMapID, false);
        }
        return ManagerNewBattleMap._instance;
    }

    /* 检测是否是已经装备的地图
     */
    private checkIsUsedMapID(mapID: number){
        return Role.Instance.RoleData.usedBattleMapID == mapID;
    }

    /* 标记地图状态
     */
    public signMapState(mapID: number, bNewMap: boolean){
        if(!Role.Instance.IsGuideFinished() || this.checkIsUsedMapID(mapID)) {return;}
        
        this._map_state_map.has(mapID) && this._map_state_map.delete(mapID);
        this._map_state_map.set(mapID, bNewMap);
        this.saveMapState(mapID, bNewMap);

        let bFindNewMap = false;
        !bNewMap && (bFindNewMap = this.findHasNewMap());
        RedDotManager.getInstance().UpdateRedDot(RedDotType.HasNewMap, bFindNewMap || bNewMap);
        /*
        if(bNewMap != bFindNewMap){
            this._bPreNewMap !== (bFindNewMap || bNewMap) && 
                RedDotManager.getInstance().UpdateRedDot(RedDotType.HasNewMap, bFindNewMap || bNewMap);    
        } else {
            this._bPreNewMap !== bFindNewMap && 
                RedDotManager.getInstance().UpdateRedDot(RedDotType.HasNewMap, bFindNewMap);
        }
        this._bPreNewMap = bFindNewMap || bNewMap;
        */
    }

    /* 检测该地图是否是新地图
     */
    public checkIsNewMap(mapID: number){
        if(!Role.Instance.IsGuideFinished() || this.checkIsUsedMapID(mapID)) {return false;}

        if(this._map_state_map.has(mapID)){
            return this._map_state_map.get(mapID);
        }

        let key       = `${Role.Instance.RoleData.id}_${mapID}_` + "battle_map";
        let localData = cc.sys.localStorage.getItem(key);
        if(!isValidObj(localData)){ //本地找不到该地图，就是新的【玩家换设备也是这样】
            this.signMapState(mapID, true);
            return true;
        }
        
        let bNewMap = localData === "true";
        this.signMapState(mapID, bNewMap);
        return bNewMap;
    }

    /* 查找有木有新表情
     */
    public findHasNewMap(){
        if(!Role.Instance.IsGuideFinished()) {return false;}
        
        for(let bNewMap of this._map_state_map.values()){
            if(bNewMap){
                return true;
            }
        }
        
        return false;
    }

    /* 保存地图状态在本地
     */
    private saveMapState(mapID: number, bNewMap: boolean){
        if(!Role.Instance.IsGuideFinished()) {return;}
        
        let key = `${Role.Instance.RoleData.id}_${mapID}_` + "battle_map";
        cc.sys.localStorage.setItem(key, bNewMap.toString());
    }

    public refreshNewBattleMapInfo(){
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_RefreshGetNewBattleMap);
    }

    public destroy(){
        this._map_state_map.clear();
        ManagerNewBattleMap._instance = null;
    }
}
