/*
 * @Descripttion: 跳转到获取新的战场地图相应界面中
 */

import { tab } from "../../Table/table_gen";
import BossBoxLayer from "../BossBox/BossBoxLayer";
import { isValidObj, kNegativeOneNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import { showPopLayerV2 } from "../Utils/GameUtils";

export default class JumpGetNewBattleMap{
    private _jump_func_map: Map<string, Function> = new Map<string, Function>();

    private static _instance: JumpGetNewBattleMap   = null;
    public static getInstance(): JumpGetNewBattleMap {
        if (!JumpGetNewBattleMap._instance){
            JumpGetNewBattleMap._instance = new JumpGetNewBattleMap();
            JumpGetNewBattleMap._instance.init();
        }
        return JumpGetNewBattleMap._instance;
    }

    public Jump(mapID: number){
        
        let mapData = tab.Data.BattleMapCycleTableBySeasonID.getValue(Role.Instance.seasonID);
        if(isValidObj(mapData)){
            this.selectJumpFunc(mapData.JumpUIName, mapData.Position);
        }
    }

    /* 选择要跳转的功能函数
     */
    private selectJumpFunc(funcName: string, position: number){
        /*
        let uiName = "prefab/" + funcName;
        showPopLayerV2(uiName, BossBoxLayer).then(func =>{
            func.jumpToPosition(position);
        });
        */
        this._jump_func_map.get(funcName)(position);
    }

    private init(){
        this._jump_func_map.set("BossBoxLayer", this.funcBossBoxLayer.bind(this));
    }

    /* 恶魔宝箱页面函数
     */
    private funcBossBoxLayer(position: number){
        let uiName = "prefab/BossBoxLayer";
            showPopLayerV2(uiName, BossBoxLayer).then(func =>{
                if(kNegativeOneNumber == position){
                    return;
                }
                func.jumpToPosition(position);
        });
    }
}
