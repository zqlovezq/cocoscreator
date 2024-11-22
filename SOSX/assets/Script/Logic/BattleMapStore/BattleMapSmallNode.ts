/*
 *  战场地图小图节点
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { isValidObj } from "../Common/CommonInterface";
import Role from "../Common/Role";
import { LoadResAsync, setGray } from "../Utils/GameUtils";
import JumpGetNewBattleMap from "./JumpGetNewBattleMap";
import ManagerNewBattleMap from "./ManagerNewBattleMap";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BattleMapSmallNode extends cc.Component {

    @property(cc.Sprite)
    spr_bg: cc.Sprite = null;

    @property(cc.Sprite)
    spr_item: cc.Sprite = null;

    @property(cc.Sprite)
    spr_frame: cc.Sprite = null;

    @property(cc.Sprite)
    spr_equipment: cc.Sprite = null;

    @property(cc.Sprite)
    spr_non_equipment: cc.Sprite = null;

    @property(cc.Node)
    node_red_dot: cc.Node = null;

    private _map_state: proto.BattleMapState;
    private _map_id: number;

    onLoad () {
        this.node_red_dot.active = false;
        //监听刷新装备的战场地图消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_RefreshEquipmentBattleMap, (param: any)=>{
            if( Role.Instance.RoleData.usedBattleMapID != this._map_id && 
                proto.BattleMapState.Equipment == this._map_state){
                this._map_state = proto.BattleMapState.AlreadyHold;
                this.setMapState();
                return;
            }

            if( Role.Instance.RoleData.usedBattleMapID == this._map_id){
                this._map_state = proto.BattleMapState.Equipment;
                this.setMapState();
            }
        }, this);
    }

    public initData(id: number, state: proto.BattleMapState){
        this._map_id    = id;
        this._map_state = state;
        (Role.Instance.RoleData.usedBattleMapID == this._map_id) && 
            (this._map_state = proto.BattleMapState.Equipment);
        this.displayPage();
    }

    /* 显示页面 */
    private displayPage(){
        this.setMapState();
        this.setMapIcon();
        this.setMapGray();
    }

    /* 设置地图ICON */
    private async setMapIcon(){
        let mapData: tab.BattleMapTable = tab.Data.BattleMapTableByID.getValue(this._map_id);
        if (!isValidObj(mapData)){
            return;
        }

        let sf = await LoadResAsync(mapData.SmallIcon, cc.SpriteFrame);
        if(sf) {
            if(this.spr_item){
                this.spr_item.spriteFrame = sf;
            }
        }
    }

    /* 设置地图状态 */
    private setMapState(){
        let bUsed = this._map_state == proto.BattleMapState.Equipment;
        this.spr_equipment.node.active     = bUsed;
        this.spr_non_equipment.node.active = !bUsed && (proto.BattleMapState.NonHold != this._map_state);
        this._map_state == proto.BattleMapState.AlreadyHold && this.checkMapRedDot();
    }

    /* 地图置灰 */
    private setMapGray(){
        let  bSetGray = this._map_state == proto.BattleMapState.NonHold;
        setGray(this.spr_item, bSetGray);
    }

    /* 地图状态机 */
    private mapStateFSM(){
        switch(this._map_state){
            case proto.BattleMapState.NonHold:
                JumpGetNewBattleMap.getInstance().Jump(this._map_id);
                break;

            case proto.BattleMapState.Equipment:
                break;

            case proto.BattleMapState.AlreadyHold:
                this.notifyNonNewMap();
                this.sendReplaceMap();
                break;
        }
    }

    /* 检测地图红点 */
    private checkMapRedDot(){
        if(Role.Instance.IsGuideFinished()) { 
            let bNewEmotion = ManagerNewBattleMap.getInstance().checkIsNewMap(this._map_id);
            this.node_red_dot.active = bNewEmotion;
        }
    }

    /* 通知关闭红点 */
    private notifyNonNewMap(){
        if(Role.Instance.IsGuideFinished() && this.node_red_dot.active) { 
            ManagerNewBattleMap.getInstance().signMapState(this._map_id, false);
            this.node_red_dot.active = false;
        }
    }

    /* 发送替换战场地图消息 */
    private sendReplaceMap(){
        let param   = new proto.Msg_ReplaceBattleMapReq();
        param.mapID = this._map_id;
        Net.Send(proto.Ptl.ReplaceBattleMapReq, param);
    }

    public onClickMap(){
        this.mapStateFSM();
    }
}
