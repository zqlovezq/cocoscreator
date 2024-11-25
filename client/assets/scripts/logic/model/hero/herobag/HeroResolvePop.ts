/*
 * @Date: 2024-05-07 15:03:58
 * @LastEditors: wzq
 * @LastEditTime: 2024-11-14 17:29:31
 */

import { _decorator, Node, Prefab, Toggle } from 'cc';
import { proto } from 'client_protocol';
import { Net } from '../../../net/Net';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { HeroDataControl } from './HeroDataControl';
import { ItemPoolMgr } from '../../item/ItemPoolMgr';
import { HeroItem } from '../../item/HeroItem';
import { HeroInfo } from '../HeroInfo';
import { tab } from '../../../../Table/table_gen';
import { ItemInfo } from '../../item/ItemInfo';
import { RoleData } from '../../role/RoleData';
import { EventMgr } from '../../../mgr/EventMgr';
const { ccclass, property } = _decorator;

@ccclass('HeroResolvePop')
export class HeroResolvePop extends ViewPop {
    @property(Prefab)
    pfb_hero_item:Prefab = null;
    @property(Prefab)
    pfb_material_item:Prefab = null;
    
    @property(Node)
    node_content: Node = null;
    @property(Node)
    node_resolve_content: Node = null;

    @property(Toggle)
    toggle_auto:Toggle = null;
    @property(Node)
    node_toggle_label:Node = null;
    
    private _ResolveHeros: Map<number, HeroInfo> = new Map();
    private _totalNum:number = 0;
    private _isCheck:boolean = true;
    private _canClick:boolean = true;
    register(): void {
        EventMgr.onMsg(proto.Ptl.SetAutoDisbandRsp, this.on_s2c_SetAutoDisbandRsp, this)
    }
   
    onShow(): void {
        /* 获取可以遣散的所有英雄 */
        this._canClick = true;
        this._isCheck = RoleData.ins.autoDisband;
        this.toggle_auto.isChecked = RoleData.ins.autoDisband;
        this.node_toggle_label.active = RoleData.ins.autoDisband;

        let herosMap = HeroDataControl.ins.getAllResolveHeros();
        this._totalNum = herosMap.size;
        this.node_content.destroyAllChildren()
        herosMap.forEach((value,key)=>{
            let heroInfo = value;
            let item = ItemPoolMgr.ins.createHeroItem(heroInfo,this.node_content);
            // item.parent = this.node_content;
            let ts: HeroItem = item.getComponent(HeroItem)
            ts.UpdateContent(heroInfo);

            ts.setTouchCallBack(() => {
                if(this._ResolveHeros.get(Number(heroInfo.id))){
                    this._ResolveHeros.delete(Number(heroInfo.id))
                }else{
                    this._ResolveHeros.set(Number(heroInfo.id),heroInfo)
                }
                this.setAllHerosSelect();
            })
        })
        this.setAllHerosSelect();
    }
    /* 遣散英雄 */
    sendMsg() {
        let msg = new proto.Msg_DisbandHeroesReq()
        const heroIds = [];
        this._ResolveHeros.forEach((value,key)=>{
            heroIds.push(key);
        })
        if(heroIds.length===0){
            return;
        }
        msg.heroIds = heroIds;
        HeroDataControl.ins.refreshBagData(0);
        Net.Send(proto.Ptl.DisbandHeroesReq, msg)
    }
    /* 一键选择所有遣散的英雄 */
    clickAllResolve() {
        if (this._ResolveHeros.size >= this._totalNum) {
            this._ResolveHeros.clear();
        } else {
            this._ResolveHeros = HeroDataControl.ins.getAllResolveHeros();
        }
        this.setAllHerosSelect();
    }
    setAllHerosSelect(){
        this.node_resolve_content.removeAllChildren();
        for(let i=0;i<this.node_content.children.length;i++){
            let item = this.node_content.children[i];
            let ts: HeroItem = item.getComponent(HeroItem)
            let heroInfo = this._ResolveHeros.get(Number(ts.heroInfo.id))
            ts.setSelect(heroInfo?true:false);
        }
        let data = new ItemInfo();
        let item = tab.getData().GetKeyValue_ConfigTable().HeroRecycleReward;
        data.itemId = item[0]
        data.num =item[1]*this._ResolveHeros.size;
        let node = ItemPoolMgr.ins.createItem(data,this.node_resolve_content);
        node.active = data.num>0;
    }
    /* 点击自动遣散 */
    clickAutoResolve(){
        if(this._canClick){
            this._canClick = false;
            let msg = new proto.Msg_SetAutoDisbandReq();
            msg.autoDisband = !RoleData.ins.autoDisband;
            Net.Send(proto.Ptl.SetAutoDisbandReq , msg)
        }
    }
    on_s2c_SetAutoDisbandRsp(msg:proto.Msg_SetAutoDisbandRsp){
        this._canClick = true;
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        RoleData.ins.autoDisband = msg.autoDisband;
        this._isCheck = RoleData.ins.autoDisband;
        this.toggle_auto.isChecked = RoleData.ins.autoDisband;
        this.node_toggle_label.active = RoleData.ins.autoDisband;
    }
}


