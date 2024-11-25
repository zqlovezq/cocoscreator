import { Node, Prefab, _decorator } from "cc";
import { tab } from "../../../Table/table_gen";
import { PREVIEW } from "cc/env";
import { IClear } from "../../../framework/base/IAbs";
import { proto } from "client_protocol";
import { HeroInfo } from "./HeroInfo";
import { Func } from "../../utils/Func";
import { Long } from "protobufjs";
import { HeroDataControl } from "./herobag/HeroDataControl";

const { ccclass, property } = _decorator;

/** 英雄数据 */
export class HeroData implements IClear {

    private static _instance: HeroData;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new HeroData();
        }
        return this._instance;
    }

    private heros: HeroInfo[] = [];
    purge(): void {
        this.heros.length = 0
    }
    getHeros(){
        return this.heros;
    }
    adds(list: proto.Hero[]) {
        for (let index = 0; index < list.length; index++) {
            const v = list[index];
            let heroinfo = this.getById(v.id)
            if (heroinfo == null) {
                heroinfo = new HeroInfo()
                this.heros.push(heroinfo)
            }
            this.merge(heroinfo, v)
        }
        if(this.heros.length>0){
            HeroDataControl.ins.initBagHeros();
        }
    }

    merge(heroInfo: HeroInfo, hero: proto.Hero) {
        heroInfo.merge(hero)
    }

    removes(ids: number[]) {
        for(let i=0;i<ids.length;i++){
            this.remove(ids[i]);
        }
    }

    getById(id: number|Long): HeroInfo {
        if(id==0){
            return null;
        }
        id = Number(id);
        return Func.forBy(this.heros, "id", id)
    }

    getByItemId(itemId: number) :HeroInfo{
        return Func.forBy(this.heros, "itemId", itemId)
    }

    remove(id: number|Long) {
        const removeId = Number(id);
        Func.removeBy(this.heros, "id", removeId)
        HeroDataControl.ins.initBagHeros();
    }
}