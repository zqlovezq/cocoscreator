import { Node, _decorator, js, sys } from "cc";
import { AbsControl } from "../../../framework/base/IAbs";
import { proto } from "client_protocol";
import { Net } from "../../net/Net";
import { tab } from "../../../Table/table_gen";
import { EventMgr } from "../../mgr/EventMgr";
import { ItemData } from "./ItemData";
import { HeroData } from "../hero/HeroData";
import { EquipData } from "../equip/EquipData";
import { RareBookData } from "../rareBook/RareBookData";
import { HeroRed } from "../hero/herobag/HeroRed";
import { RedMgr } from "../../mgr/RedMgr";
import { RedDotType } from "../../red/RedDotType";
import { OpenFunctionMgr } from "../../../Common/component/OpenFunctionMgr";
import { RoleData } from "../role/RoleData";

const { ccclass, property } = _decorator;

/** 道具 */
export class ItemControl extends AbsControl {

    private static _instance: ItemControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new ItemControl();
        }
        return this._instance;
    }

    register(): void {
        // EventMgr.onMsg(proto.Ptl.GetItemsByTypeRsp, this.on_s2c_GetItemsByTypeRsp, this)
        EventMgr.onMsg(proto.Ptl.ItemChangePush, this.on_s2c_Msg_ItemChangePush, this)
        // this.addTestData();
        RedMgr.ins.registerCalculateFb(RedDotType.Bag_Compose, this.on_Red_BagCompose, this);
        RedMgr.ins.registerCalculateFb(RedDotType.HeroBagRed, this.red_hero_Bag, this);
    }

    requestItems() {
        // let msg = new proto.Msg_GetItemsByTypeReq()
        // msg.types = [
        //     tab.ItemType.ItemType_Currency,
        //     tab.ItemType.ItemType_IdleReward,
        //     tab.ItemType.ItemType_Piece,
        //     tab.ItemType.ItemType_Material,
        //     tab.ItemType.ItemType_Gift
        // ]
        // Net.Send(proto.Ptl.GetItemsByTypeReq, msg)
    }



    // on_s2c_GetItemsByTypeRsp(msg: proto.Msg_GetItemsByTypeRsp) {
    //     ItemData.ins.purge()
    //     ItemData.ins.adds(msg.items as proto.Item[])
    //     /* 增加一些简单道具 */
    //     let items = RoleData.ins.simpleItems;
    //     ItemData.ins.adds(items as proto.Item[]);
    // }

    on_s2c_Msg_ItemChangePush(msg: proto.Msg_ItemChangePush) {
        //道具变更
        ItemData.ins.adds(msg.updatedItems as proto.Item[])
        //英雄变更
        HeroData.ins.adds(msg.updatedHeroes as proto.Hero[])
        //装备变更
        EquipData.ins.adds(msg.updatedEquipments as proto.EquipData[])
        RareBookData.ins.addBooks(msg.updatedBooks as proto.BookData[])
        // 材料变化刷新红点数据
        HeroRed.ins.refreshHeroRedData();
        //英雄、装备 删除  （道具数量为0不删除）
        for (let index = 0; index < msg.removedItems.length; index++) {
            const v = msg.removedItems[index];
            let itemType = tab.getData().ItemTableById.getValue(v.itemId).Type;
            switch (itemType) {
                case tab.ItemType.ItemType_Hero:
                    //英雄删除
                    HeroData.ins.remove(v.id)
                    break
                case tab.ItemType.ItemType_Equip:
                    //装备删除
                    EquipData.ins.remove(v.id)
                    break

            }
        }
        /* 道具更新头像等道具 */
        if(msg.updatedSingleItems.length>0){
            for(let i=0;i<msg.updatedSingleItems.length;i++){
                const itemId = msg.updatedSingleItems[i].itemId;
                const itemTab = tab.getData().ItemTableById.getValue(itemId);
                if(itemTab.Type===tab.ItemType.ItemType_Head){
                    RoleData.ins.avatarInfo.headIcons.push(msg.updatedSingleItems[i]);
                    const clientData = RoleData.ins.clientData["newHeadIcon"];
                    if(clientData){
                        if(clientData.indexOf(""+itemId)===-1){
                            RoleData.ins.setClientData("newHeadIcon",clientData+","+itemId)
                        }
                    }else{
                        RoleData.ins.setClientData("newHeadIcon",","+itemId)
                    }
                }else if(itemTab.Type===tab.ItemType.ItemType_HeadFrame){
                    RoleData.ins.avatarInfo.headFrames.push(msg.updatedSingleItems[i]);
                    const clientData = RoleData.ins.clientData["newHeadFrame"];
                    if(clientData){
                        if(clientData.indexOf(""+itemId)===-1){
                            RoleData.ins.setClientData("newHeadFrame",clientData+","+itemId)
                        }
                    }else{
                        RoleData.ins.setClientData("newHeadFrame",","+itemId)
                    }
                }else if(itemTab.Type===tab.ItemType.ItemType_ChatBubble){
                    RoleData.ins.avatarInfo.chatBubbles.push(msg.updatedSingleItems[i]);
                }else if(itemTab.Type===tab.ItemType.ItemType_MainScene){
                    RoleData.ins.avatarInfo.mainScenes.push(msg.updatedSingleItems[i]);
                }
            }
            RedMgr.refreshEvent(RedDotType.Head_Icon_Red);
        }
    }

    addTestData() {
        let tests: proto.Item[] = [];
        let item = new proto.Item();
        item.itemId = 20001;
        item.num = 20;

        tests.push(item)
        let item2 = new proto.Item();
        item2.itemId = 20002;
        item2.num = 20;

        tests.push(item2);
        let item3 = new proto.Item();
        item3.itemId = 20003;
        item3.num = 5;

        tests.push(item3);
        let item4 = new proto.Item();
        item4.itemId = 20004;
        item4.num = 1;

        tests.push(item4);
        let item5 = new proto.Item();
        item5.itemId = 20009;
        item5.num = 1;

        tests.push(item5)
        let item6 = new proto.Item();
        item6.itemId = 20008;
        item6.num = 1;

        tests.push(item6)
        let item7 = new proto.Item();
        item7.itemId = 20010;
        item7.num = 1;

        tests.push(item7)

        ItemData.ins.adds(tests)
        // let item8=new proto.Item();
        // item8.itemId=20012;
        // item8.num=1;
        // item8.type=7;
        // tests.push(item8)
    }

    on_Red_BagCompose(){
   
        let itemList = ItemData.ins.getItems();
        for (let value of itemList) {
            let bagType = value.itemTable.BagType;
            if (bagType == tab.BagType.BagType_Fragment) {
                let needNum=value.itemTable.DropId[0];
                if(Number(value.num)>=needNum){
                    return true;
                }
            }
        }
        return false;
    }
    red_hero_Bag() {
        // 只有碎片跟道具有红点 --- 道具红点->有随机宝箱 碎片红点->可以一件合成
        let stateToChange = {};
        let itemList = ItemData.ins.getItems();
        for (let value of itemList) {
            let bagType = value.itemTable.BagType;
            let itemType = value.itemTable.Type
            if (bagType === tab.BagType.BagType_Goods&&value.num>0) {
                if (itemType == tab.ItemType.ItemType_Box) {
                    stateToChange[value.itemId] = true
                }
            }
        }
        return stateToChange;
    }
}