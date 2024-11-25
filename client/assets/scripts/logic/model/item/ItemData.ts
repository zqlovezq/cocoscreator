import { Node, Prefab, _decorator } from "cc";
import { IClear } from "../../../framework/base/IAbs";
import { proto } from "client_protocol";
import { Func } from "../../utils/Func";
import { RoleData } from "../role/RoleData";
import { EventMgr } from "../../mgr/EventMgr";
import { ItemInfo } from "./ItemInfo";
import { LocalEvent } from "../../define/LocalEvent";
import { tab } from "../../../Table/table_gen";
import { ItemControl } from "./ItemControl";
import { RoleControl } from "../role/RoleControl";
import { RedMgr } from "../../mgr/RedMgr";
import { RedDotType } from "../../red/RedDotType";
import { RareBookControl } from "../rareBook/RareBookControl";
import { RareBookData } from "../rareBook/RareBookData";
import { ChannelMgr } from "../../../channel/ChannelMgr";
import { P8PostEventName } from "../../../channel/ChannelDefine";
import { AssociationData } from "../association/AssociationData";


const { ccclass, property } = _decorator;

//配置表内货币id
const DiamondId = 1
const GoldId = 2

/** 道具数据 */
export class ItemData implements IClear {
    private static _instance: ItemData;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new ItemData();
        }
        return this._instance;
    }

    private items: ItemInfo[] = [];
    purge(): void {
        this.items.length = 0
    }
    initData() {
        // let items=RoleData.ins.simpleItems;
        this.adds(RoleData.ins.simpleItems as proto.Item[])
         RedMgr.refreshEvent(RedDotType.Bag_Compose);
         RedMgr.refreshEvent(RedDotType.HeroBagRed);

    }


    adds(list: proto.Item[]) {
        if (list.length == 0) {
            return
        }
        let updateItemIds = [];
        let isHaveStamina = false;
        let isHaveChip=false;
        let isUpdateBookRed=false;
        let isBox = false
        
        for (let index = 0; index < list.length; index++) {
            const v = list[index];
            let iteminfo = this.getByItemId(v.itemId)
            if(v.itemId==tab.CurrencyType.CurrencyType_DailyActivity){
                let count=iteminfo?iteminfo.num:0
                if(count<40&&v.num>=40){
                    ChannelMgr.postEvent(P8PostEventName.daily_40)
                }
                if(count<100&&v.num>=100){
                    ChannelMgr.postEvent(P8PostEventName.daily_100)
                }
            }
            if(v.itemId===84){
                const guildData: proto.SimpleGuild = AssociationData.ins.getAssocitionSimpleInfo();
                if(guildData){
                    if(iteminfo){
                        guildData.exp+=(v.num-iteminfo.num);
                    }else{
                        guildData.exp+=v.num;
                    }
                }
            }
            if (iteminfo == null) {
                iteminfo = new ItemInfo();
                iteminfo.merge(v);
                this.items.push(iteminfo)

            }
            this.merge(iteminfo, v)
            updateItemIds.push(iteminfo.itemId)
            if (iteminfo.itemTable.BagType == tab.BagType.BagType_Fragment) {
                isHaveChip = true;
            }
            if(!isUpdateBookRed){
                isUpdateBookRed=(iteminfo.itemId>=25000&&iteminfo.itemId<30000)||iteminfo.itemId==tab.CurrencyType.CurrencyType_Gold||iteminfo.itemId===tab.getData().GetKeyValue_ConfigTable().BookStarUniversalMaterial;
            }
            if(v.itemId==tab.CurrencyType.CurrencyType_Stamina){
                isHaveStamina=true;
            }
            if(iteminfo.itemTable.Type===tab.ItemType.ItemType_Box){
                isBox = true;
            }

        }

        EventMgr.emitLocal(LocalEvent.Item_Update, updateItemIds)
        if(isHaveChip){
            RedMgr.refreshEvent(RedDotType.Bag_Compose);
        }
        if(isUpdateBookRed){
            RareBookData.ins.updateBookCanUpLevelAndStar();
        }
        if(isHaveStamina){
            RoleControl.ins.requestStaminaInfo();
        }
        if(isBox){
            RedMgr.refreshEvent(RedDotType.HeroBagRed);
        }

    }

    merge(itemInfo: ItemInfo, item: proto.Item) {
        //目前只需要同步数量
        itemInfo.num = item.num

        /** 同步角色身上常用货币数量 */
        if (item.itemId == DiamondId) {
            RoleData.ins.diamond = Number(item.num)

        } else if (item.itemId == GoldId) {
            RoleData.ins.gold = Number(item.num)

        }
    }

    removes(ids: string[]) {

    }


    getByItemId(id: number): ItemInfo {
        return Func.forBy(this.items, "itemId", id)
    }
    getItemInfosByType() {

    }

    remove(id: string) {
        Func.removeBy(this.items, "itemId", id)
    }

    /** 道具数量 包含货币 */
    getCount(id: number) {
        let item = this.getByItemId(id)
        return Number(item && item.num || 0)
    }
    getItems() {
        return this.items;
    }
    /**
     * 判断道具是否充足
     * @param items 
     */
    isItemsEnough(items: ItemInfo[]) {
        for (let key in items) {
            let currItem = this.getByItemId(items[key].itemId);
            if (!currItem || currItem.num < items[key].num) {
                return false;
            }
        }
        return true;
    }
    /**
     * 判断道具是否充足
     * @param items 
     */
    isItemsEnoughByList(itemIds: Array<number>, counts: Array<number>) {
        for (let key in itemIds) {
            let currNum = this.getCount(itemIds[key]);
            if (currNum < counts[key]) {
                return itemIds[key];
            }
        }
        return 0;
    }
}