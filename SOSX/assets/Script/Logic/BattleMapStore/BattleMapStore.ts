/*
 * @Descripttion: 战场地图仓库
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { isValidObj, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import { LoadResAsync, ShowTips } from "../Utils/GameUtils";
import BattleMapGroup from "./BattleMapGroup";

/**
 * 战场地图数据接口
 */
export interface IBattleMapData{
    mapID: number;
    state: proto.BattleMapState;
}

const kBattleMapsMaxGroup = 4;
const {ccclass, property} = cc._decorator;

@ccclass
export default class BattleMapStore extends cc.Component {

    @property(cc.Label)
    lbl_map_name: cc.Label = null;

    @property(cc.Sprite)
    spr_map: cc.Sprite = null;

    @property(cc.ScrollView)
    scroll_view: cc.ScrollView = null;
    
    @property(cc.Node)
    node_map_container: cc.Node = null;

    @property(cc.Prefab)
    pfb_map_group: cc.Prefab = null;

    private _battle_map_list: IBattleMapData[] = [];
    private _map_node_group_dict: tab.Dictionary<number, BattleMapGroup> = new tab.Dictionary<number, BattleMapGroup>();

    onLoad () {
        /* 监听替换战场地图消息 */
        Net.listenProtocol(proto.Ptl.ReplaceBattleMapRsp, (buffer, ptl)=>{
            let msg = proto.Msg_ReplaceBattleMapRsp.decode(buffer);
            cc.log("ReplaceBattleMapRsp(监听替换战场地图消息) : msg " + JSON.stringify(msg));
            if(msg && msg.result === proto.Msg_ReplaceBattleMapRsp.ErrorCode.Succeed){
                Role.Instance.RoleData.usedBattleMapID = msg.curUsedMapID;
                this.displayPage();
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_RefreshEquipmentBattleMap);
                return;
            }

            proto.Msg_ReplaceBattleMapRsp.ErrorCode.NonBattleMapID       && ShowTips("NonBattleMap");
            proto.Msg_ReplaceBattleMapRsp.ErrorCode.BattleMapAlreadyUsed && ShowTips("BattleMapAlreadyUsed");

        }, this);
    }

    start () {
        this.displayPage();
    }

    onDestroy(){
        this._battle_map_list = [];
        this.clearMapGroups(this._map_node_group_dict);
    }

    public initData(holdMapList: number[], nonHoldMapList: number[]){
        this._battle_map_list = [];
        for(let id of holdMapList){
            this._battle_map_list.push({mapID: id, state: proto.BattleMapState.AlreadyHold});
        }

        for(let id of nonHoldMapList){
            this._battle_map_list.push({mapID: id, state: proto.BattleMapState.NonHold});
        }

        this.loadBattleMaps();
    }

    /* 显示页面
     */
    private displayPage(){
        this.setEquipmentMapName();
        this.setEquipmentMapIcon();
    }
    
    /* 设置地图ICON
     */
    private async setEquipmentMapIcon(){
        let usedMapId = Role.Instance.RoleData.usedBattleMapID;
        let mapData: tab.BattleMapTable = tab.Data.BattleMapTableByID.getValue(usedMapId);
        if (!isValidObj(mapData)){
            return;
        }

        let sf = await LoadResAsync(mapData.BigIcon, cc.SpriteFrame);
        if(sf) {
            if(this.spr_map){
                this.spr_map.spriteFrame = sf;
            }
        }
    }

    /* 设置地图名称
     */
    private setEquipmentMapName(){
        let usedMapId = Role.Instance.RoleData.usedBattleMapID;
        let mapData = tab.Data.BattleMapTableByID.getValue(usedMapId);
        if(isValidObj(mapData)){
            this.lbl_map_name.string = mapData.Name;
        }
    }

    /* 清空地图组
     */
     private clearMapGroups(battleMaps: tab.Dictionary<number, BattleMapGroup>){
        if(battleMaps !== undefined){
            for(let elem of battleMaps.values()){
                if(elem && elem.node){
                    elem.node.removeFromParent();
                    elem.node.destroy();
                }
            }
            battleMaps.clear();
        }
    }

    /* 加载战场地图列表
     */
    private async loadBattleMaps(){
        await this.execute(this.generatorMapGroup(), kOneNumber);
        
        /*let tempMapIDArr: IBattleMapData[] = [];
        let idx = kZeroNumber;
        for(let data of this._battle_map_list){
            tempMapIDArr.push(data);
            if(kBattleMapsMaxGroup == tempMapIDArr.length){
                this.createMapGroupNode(tempMapIDArr, idx);
                tempMapIDArr = [];
                idx++;
            }
        }

        //检测剩余部分
        tempMapIDArr.length > kZeroNumber && this.createMapGroupNode(tempMapIDArr, idx);*/
    }

    /* 创建地图组节点
     */
    private createMapGroupNode(mapList: IBattleMapData[], idx: number){
        if(mapList.length > kZeroNumber){
            let mapGroup = this._map_node_group_dict.getValue(idx);
            if(!mapGroup){
                mapGroup = cc.instantiate(this.pfb_map_group).getComponent(BattleMapGroup);
                this._map_node_group_dict.setValue(idx, mapGroup);
                this.node_map_container.addChild(mapGroup.node);
            }

            mapGroup.initData(mapList);
        }
    }

    /* 战场地图组节点生成器
     */
    private* generatorMapGroup(){
        let tempMapIDArr: IBattleMapData[] = [];
        let mapListLen = this._battle_map_list.length;
        let idx = kZeroNumber;

        for(; idx < mapListLen; idx++){
            tempMapIDArr.push(this._battle_map_list[idx]);
            if(kBattleMapsMaxGroup == tempMapIDArr.length){
                yield this.createMapGroupNode(tempMapIDArr, idx);
                tempMapIDArr = [];
            }
        }
        tempMapIDArr.length > kZeroNumber && this.createMapGroupNode(tempMapIDArr, idx); //检测剩余部分
    }

    /* 创建BattleMapGroup节点的执行函数
     */
     private execute(generator: Generator, duration: number){
        return new Promise<void>(resolve => {
            let gen = generator;
            // 创建执行函数
            let func = () => {
                // 执行之前，先记录开始时间戳
                let startTime = new Date().getTime();
                // 然后一直从 Generator 中获取已经拆分好的代码段出来执行
                for (let iter = gen.next(); ; iter = gen.next()) {
                    // 判断是否已经执行完所有 Generator 的小代码段
                    // 如果是的话，那么就表示任务完成
                    if (iter == null || iter.done) {
                        resolve();
                        return;
                    }
    
                    // 每执行完一段小代码段，都检查一下是否
                    // 已经超过我们分配给本帧，这些小代码端的最大可执行时间
                    if (new Date().getTime() - startTime > duration) {
                        // 如果超过了，那么本帧就不在执行，开定时器，让下一帧再执行
                        this.scheduleOnce(() => {
                            func();
                        });
                        return;
                    }
                }
            };
            func(); // 运行执行函数
        });
    }
}
