import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import Role from "./Role";

export default class ItemAttr {

    protected itemTypeMap:tab.Dictionary<tab.ItemType, proto.IItemData[] > = new tab.Dictionary<tab.ItemType, proto.IItemData[] >();
    protected itemIdMap:tab.Dictionary<string, proto.IItemData> = new tab.Dictionary<string, proto.IItemData>();
    protected itemStaticIdMap:tab.Dictionary<number, proto.IItemData> = new tab.Dictionary<number, proto.IItemData>();
    protected itemArry:proto.IItemData[] = [];

    public init(items:proto.IItemData[])
    {
        this.itemTypeMap = new tab.Dictionary<tab.ItemType, proto.IItemData[] >();
        this.itemIdMap = new tab.Dictionary<string, proto.IItemData>();
        this.itemStaticIdMap = new tab.Dictionary<number, proto.IItemData>();
        this.itemArry = items;

        for(let i of items)
        {
            let itemTab:tab.ItemTable = tab.Data.ItemTableByID.getValue(i.staticId);
            if(itemTab == null)
            {
                continue;
            }

            let typeItem = this.itemTypeMap.getValue(itemTab.Type);
            if (typeItem == null)
            {
                this.itemTypeMap.setValue(itemTab.Type, []);
            }
            this.itemTypeMap.getValue(itemTab.Type).push(i);
            this.itemIdMap.setValue(i.id, i);
            this.itemStaticIdMap.setValue(i.staticId, i);
        }
    }

    public getItemByType(type:tab.ItemType):proto.IItemData[] | undefined
    {
        let res = this.itemTypeMap.getValue(type);
        return res;
    }

    public getItemByUUID(type:string):proto.IItemData | undefined
    {
        let res = this.itemIdMap.getValue(type);
        return res;``
    }

    public getItemByStaticID(id:number):proto.IItemData | undefined
    {
        let res = this.itemStaticIdMap.getValue(id);
        return res;
    }

    public getIconFram(itemId:number):string 
    {
        let res = "";
        let itemTab = tab.Data.ItemTableByID.getValue(itemId);
        if (itemTab == null)
        {
            return res;
        }
        let quTab = tab.Data.QualityTableByQuality.getValue(itemTab.Quality);
        if (quTab == null)
        {
            return res;
        }
        if(itemTab.Type == tab.ItemType.ItemType_Tower)
        {
            res = quTab.QualityFrame;
        }
        else if (itemTab.Type = tab.ItemType.ItemType_GiftBag)
        {
            res = quTab.ItemBg;
        }
        
        return res;
    }

    public updataItem(items:proto.IItemData[])
    {
        for (let v of items)
        {
            let idx = this.itemArry.findIndex(tmpObj=>tmpObj.id == v.id);
            if(idx != -1){
                this.itemArry[idx] = v;
            }
            else
            {
                this.itemArry.push(v);
            }
        }

        this.init(this.itemArry);        
    }

    private findObjIndex(obj, objIdx, objs){
        return 
    }

    /*  */
    public removeItem(uuids:string[]){
        for (let v of uuids){
            for (let index = 0; index < this.itemArry.length; ++index){
                if (this.itemArry[index].id == v){
                    this.itemArry.splice(index, 1);
                    break;
                }
            }
        }
        this.init(this.itemArry);  
    }

    public getRankModleFrame(){
        let rankScore = Role.Instance.RoleData.rankData.score;
        let ret = "";
        // for (let v of tab.Data.RankScoreRewardTable) {
        //     if(rankScore >= v.Score) {
        //         if (v.Model.length > 0) {
        //             ret = v.Model;
        //         }
        //     } else {
        //         break;
        //     }
        // }
        cc.log("getRankModleFrame :" + ret);
        return ret;
    }
}
