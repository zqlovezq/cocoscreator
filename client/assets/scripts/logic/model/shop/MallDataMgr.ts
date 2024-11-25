import { _decorator, Component, log, Node } from 'cc';
import { AbsControl } from '../../../framework/base/IAbs';
import { proto } from 'client_protocol';
import { tab } from '../../../Table/table_gen';
import { MALLNAME } from '../../../Common/script/EnumTypeMgr';
import { RoleData } from '../role/RoleData';
const { ccclass, property } = _decorator;

@ccclass('MallDataMgr')
export class MallDataMgr extends AbsControl {
    private _daily_shop_data: proto.Msg_GetDailyShopInfoRsp = null;//每日商店数据
    private _fixed_shop_map:Map<number,Map<number,number>> = new Map();
    private _shopMap = null;
    private static _instance: MallDataMgr;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new MallDataMgr();
        }
        return this._instance;
    }
    // 设置每日商店信息
    initDailyShop(msg: proto.Msg_GetDailyShopInfoRsp){
        this._daily_shop_data = msg;
        this._daily_shop_data.slots.sort((slot1,slot2)=>{
            return slot1.index-slot2.index;
        })
    }
    initFixedShop(msg:proto.Msg_GetFixedShopInfoMapRsp){
        this._shopMap = msg.shopInfoMap;
        const shopMap = msg.shopInfoMap;
        Object.keys(shopMap).forEach(key=>{
            const name = shopMap[key].name;
            const commodityMap = shopMap[key].commodityMap;
            let map:Map<number,number> = new Map()
            Object.keys(commodityMap).forEach(key=>{
                map.set(commodityMap[key].id,commodityMap[key].boughtCount)
            })
            this._fixed_shop_map.set(name,map);
        })
    }
    // 根据
    getDailyShopData(){
        return this._daily_shop_data;
    }
    // 设置固定商店信息
    getFixedShopData(name:MALLNAME){
        return this._fixed_shop_map.get(name);
    }
    // 固定商店是否过期
    getFixedShopExpireTime(name:MALLNAME){
        const info:proto.IFixedShopInfo = this._shopMap[name]
        const clientTime = RoleData.ins.getServerUtcTime()
        if(info&&clientTime<info.expireTime){
            return info.expireTime-clientTime
        }
        return -1;
    }
}


