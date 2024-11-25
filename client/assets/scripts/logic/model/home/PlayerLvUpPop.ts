import { _decorator, Component, Label, Node } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { RoleData } from '../role/RoleData';
import { ItemInfo } from '../item/ItemInfo';
import { ItemPoolMgr } from '../item/ItemPoolMgr';
import { EventMgr } from '../../mgr/EventMgr';
import { LocalEvent } from '../../define/LocalEvent';
const { ccclass, property } = _decorator;

@ccclass('PlayerLvUpPop')
export class PlayerLvUpPop extends ViewPop {
    @property(Label)
    lbl_level:Label = null;
    @property(Node)
    node_content:Node = null;
    onShow(): void {
        this.lbl_level.string = this.openData;
        const map = RoleData.ins.getLevelUpAward();
        if(map){
            map.forEach((value,key)=>{
                // 创建奖励
                const itemInfo = new ItemInfo();
                itemInfo.itemId = key;
                itemInfo.num = value;
                ItemPoolMgr.ins.createItem(itemInfo,this.node_content);
            })
            map.clear();
        }
    }
    protected onDestroy(): void {
        super.onDestroy();
        EventMgr.emitLocal(LocalEvent.checkOpenFuncPop);
    }
    register(): void {
        
    }
    unRegister(): void {
        super.unRegister()
    }
}


