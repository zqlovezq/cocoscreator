/*
 *  分享类型管理类
 */

import { proto } from "../../Protocol/client_protocol";

export default class ManagerShareType {

    private _share_type_map : Map<number, boolean> = new Map<number, boolean>();
    private _share_count_map: Map<number, number>  = new Map<number, number>();

    private static _instance: ManagerShareType = null;

    public static getInstance(): ManagerShareType {
        if (!ManagerShareType._instance){
            ManagerShareType._instance = new ManagerShareType();
        }
        return ManagerShareType._instance;
    }

    public initShareTypeData(dataList: proto.ISharedOfTodayObj[]){
        for(let data of dataList){
            this._share_type_map.set(Number(data.type), data.bSharedOfToday);
        }
    }

    public initShareCountData(dataList: proto.ISharedOfTodayObj[]){
        for(let data of dataList){
            this._share_count_map.set(Number(data.type), Number(data.sharedCntOfToday));
        }
    }

    /* 有没有分享过
     * @param type  分享类型
    */
    public getIsShared(type: number){
        if(this._share_type_map.has(type)){
            return this._share_type_map.get(type);
        }

        return false;
    }

    /* 分享过次数
     * @param type  分享类型
     * @param count 分享次数
    */
    public getSharedCount(type: number) {
        if(this._share_count_map.has(type)){
            let ret = this._share_count_map.get(type);
            if("undefined" == typeof ret){
                return 0;
            }else {
                return ret;
            }
        }
    }

    /* 保存分享类型的次数【分享过多少次】*/
    public saveShareCount(type: number, count: number){
        this._share_count_map.set(type, count);
    }

    /* 保存分享类型的状态【有无分享过】*/
    public saveShareState(type: number, bShared: boolean){
        this._share_type_map.set(type, bShared);
    }
}
