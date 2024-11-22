/*
 * @Descripttion: 战场地图组
 */

import { proto } from "../../Protocol/client_protocol";
import { kZeroNumber } from "../Common/CommonInterface";
import BattleMapSmallNode from "./BattleMapSmallNode";
import { IBattleMapData } from "./BattleMapStore";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BattleMapGroup extends cc.Component {

    @property(cc.Node)
    node_map_1: cc.Node = null;

    @property(cc.Node)
    node_map_2: cc.Node = null;

    @property(cc.Node)
    node_map_3: cc.Node = null;

    @property(cc.Node)
    node_map_4: cc.Node = null;

    private _map_list: BattleMapSmallNode[] = [];

    onLoad () {
        this._map_list.push(this.node_map_1.getComponent(BattleMapSmallNode));
        this._map_list.push(this.node_map_2.getComponent(BattleMapSmallNode));
        this._map_list.push(this.node_map_3.getComponent(BattleMapSmallNode));
        this._map_list.push(this.node_map_4.getComponent(BattleMapSmallNode));
    }

    onDestroy(){
        this._map_list = [];
    }

    public initData(mapList: IBattleMapData[]){
        this.onFocusInEditor();
        
        let mapListLen = mapList.length;
        for(let idx = kZeroNumber; idx < mapListLen; idx++){
            this._map_list[idx].node.active = true;
            this._map_list[idx].initData(mapList[idx].mapID, mapList[idx].state);
        }
    }

    protected onFocusInEditor(){
        this.node_map_1.active = false;
        this.node_map_2.active = false;
        this.node_map_3.active = false;
        this.node_map_4.active = false;
    }
}
