import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { HeroAttrPopItem } from './HeroAttrPopItem';
import { tab } from '../../../../Table/table_gen';
import { HeroAttr, HeroAttrMgr } from '../../../../Common/script/HeroAttrMgr';
const { ccclass, property } = _decorator;

@ccclass('HeroAttrPop')
export class HeroAttrPop extends ViewPop {
    @property(Node)
    baseNode: Node = null;
    @property(Node)
    extraNode: Node = null;
    @property(Prefab)
    itemPrefab: Prefab = null;

    private attrMap: Map<tab.AttrType, number>
    register(): void {

    }
    onShow(): void {
        this.attrMap = this.openData["attrMap"];
        this.initView();
    }
    initView() {
        if (!this.attrMap) {
            return;
        }

        let heroAttr = new HeroAttr;
        heroAttr.attr = this.attrMap;

        let map = tab.getData().HeroAttrClientTableByType;
        map.forEach((key, value) => {
            if(value.ShowHeroAttr){
                let node: Node = instantiate(this.itemPrefab);
                let com = node.getComponent(HeroAttrPopItem);
                if (value.IsBase) {
                    node.parent = this.baseNode;
                } else {
                    node.parent = this.extraNode;
                }
                // let num=this.attrMap.has(key)?this.attrMap.get(key):0;
                let num = 0;
                num = this.attrMap.has(key) ? this.attrMap.get(key) : 0;
                // if (key === tab.AttrType.AttrType_Attack) {
                //     num = this.attrMap.get(tab.AttrType.AttrType_TotalAttack) ?? num;
                // } else if (key == tab.AttrType.AttrType_Defence) {
                //     num = this.attrMap.get(tab.AttrType.AttrType_TotalDefence) ?? num;
                // } else if (key == tab.AttrType.AttrType_Hp) {
                //     num = this.attrMap.get(tab.AttrType.AttrType_TotalHp) ?? num;
                // } else if (key == tab.AttrType.AttrType_CriticalDamage) {
                //     num = Math.floor(num / 100);
                // }

                if (key === tab.AttrType.AttrType_Attack) {
                    num = HeroAttrMgr.getHeroTotalAttack(heroAttr) ?? num;
                } else if (key == tab.AttrType.AttrType_Defence) {
                    num = HeroAttrMgr.getHeroTotalDefence(heroAttr)?? num;
                } else if (key == tab.AttrType.AttrType_Hp) {
                    num = HeroAttrMgr.getHeroTotalHp(heroAttr)?? num;
                } 
                // else if (key == tab.AttrType.AttrType_CriticalDamage) {
                //     num = Math.floor(num / 100);
                // }

                com.initData(value, num);
            }
           
        })
        // if(this.attrMap){
        //     this.attrMap.forEach((value,key)=>{
        //         let node:Node=instantiate(this.itemPrefab);
        //         let com= node.getComponent(HeroAttrPopItem);
        //         let t=tab.getData().HeroAttrClientTableByType.getValue(key);
        //         if(t.IsBase){
        //             node.parent=this.baseNode;
        //         }else{
        //             node.parent=this.extraNode;
        //         }
        //         com.initData(t,value);
        //     })

        // }
    }
    protected onDestroy(): void {
        super.onDestroy()
    }
}


