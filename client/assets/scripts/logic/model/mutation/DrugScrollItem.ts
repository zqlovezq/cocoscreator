import { _decorator, Component, Label, Node, ProgressBar, Sprite } from 'cc';
import { tab } from '../../../Table/table_gen';
import { CommonItem } from '../item/CommonItem';
import { ItemInfo } from '../item/ItemInfo';
import { ItemData } from '../item/ItemData';
import { RoleData } from '../role/RoleData';
import { HeroTeamControl } from '../hero/HeroTeamControl';
import { LangMgr } from '../../mgr/LangMgr';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
const { ccclass, property } = _decorator;

@ccclass('DrugScrollItem')
export class DrugScrollItem extends Component {
    @property(CommonItem)
    item:CommonItem = null;
    @property(Label)
    lbl_name:Label = null;
    @property(Label)
    lbl_attr_0:Label;
    @property(Label)
    lbl_attr_1:Label;
    @property(Sprite)
    sp_attr_0:Sprite;
    @property(Sprite)
    sp_attr_1:Sprite;
    @property(ProgressBar)
    bar_progress:ProgressBar = null;
    @property(Label)
    lbl_progress:Label = null;
    setData(data:tab.ElixirTable){
        const itemData = tab.getData().ItemTableById.getValue(data.Id)
        let itemInfo = new ItemInfo();
        itemInfo.itemId = data.Id;
        itemInfo.num = ItemData.ins.getCount(data.Id);
        this.item.initData(itemInfo);
        this.item.setSelectState(false);
        this.item.setTouchCallBack(()=>{
            UIMgr.ins.show({ viewName: ViewName.ItemInfoPop, data: {
                itemId:data.Id
            } })
        })

        this.lbl_name.string = LangMgr.getLab(itemData.Name);
        const playLevel = RoleData.ins.level;
        let maxCount = 0;
        for(let k=data.PlayerLv.length-1;k>=0;k--){
            const level = data.PlayerLv[k];
            if(playLevel>level){
                maxCount = data.MaxCount[k+1]? data.MaxCount[k+1]:data.MaxCount[k];
                break;
            }
        }
        const usedItemCount = HeroTeamControl.ins.getElixirCountById(data.Id)
        this.lbl_progress.string = usedItemCount+"/"+maxCount;

        let useCount = 0;
        if(usedItemCount+itemInfo.num>maxCount){
            useCount = maxCount-usedItemCount>0?maxCount-usedItemCount:0;
        }else{
            useCount = itemInfo.num
        }
        for(let i=0;i<data.AttrType.length;i++){
            const attrType = data.AttrType[i];
            const iconPath=tab.getData().HeroAttrClientTableByType.getValue(attrType).Icon;
            this["sp_attr_"+i].setTexture(iconPath);
            this["lbl_attr_"+i].string = data.AttrValue[i]* usedItemCount;
        }

        this.bar_progress.progress = usedItemCount/maxCount>1?1:usedItemCount/maxCount;
    }
}


