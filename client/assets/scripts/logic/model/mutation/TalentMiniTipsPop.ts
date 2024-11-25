import { _decorator, Color, Component, Label, Node, Sprite } from 'cc';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
import { proto } from 'client_protocol';
import { Net } from '../../net/Net';
import { RoleData } from '../role/RoleData';
import { ShowItemNotEnoughTips, ShowTips, UIMgr } from '../../mgr/UIMgr';
import { ItemData } from '../item/ItemData';
import { GameUtil } from '../../utils/GameUtil';
import { ViewName } from '../../define/ViewDefine';
const { ccclass, property } = _decorator;

@ccclass('TalentMiniTipsPop')
export class TalentMiniTipsPop extends Component {
    @property(Label)
    lbl_name: Label = null;
    @property(Label)
    lbl_value: Label = null;
    @property(Label)
    lbl_lock_level: Label = null;
    @property(Label)
    lbl_gold: Label = null;
    @property(Sprite)
    sp_gold: Sprite = null;
    @property(Node)
    node_learn:Node = null;
    @property(Node)
    lock_node:Node = null;
    @property(Node)
    lock_before_node:Node = null;
    @property(Node)
    unlock_node:Node = null;
    private _talentData: tab.GeneLevelTable = null;
    setData(data: tab.GeneLevelTable) {
        this._talentData = data;
        this.node.active = true;
        const needGeneRes = this._talentData.MaterialCountList[0];
        const haveCount = ItemData.ins.getCount(this._talentData.MaterialIdList[0]);
        const itemData = tab.getData().ItemTableById.getValue(data.MaterialIdList[0]);
        if(haveCount<needGeneRes){
            this.lbl_gold.color = new Color().fromHEX(tab.getData().GetKeyValue_ConfigTable().InterfaceTxtRed);
        }else{
            this.lbl_gold.color = new Color().fromHEX("#FFFFFF");
        }
        this.lbl_name.string = LangMgr.getLab(tab.AttrType[data.AttrType]);
        this.lbl_value.string = LangMgr.getCombineString("ui_gene_1", [this.lbl_name.string, data.AttrValue]);
        this.lbl_lock_level.string = LangMgr.getCombineString("ui_gene_2", [data.UnlockArgs]);
        this.lbl_gold.string =GameUtil.convertNumber(needGeneRes,true);
        this.sp_gold.setTexture(itemData.Icon);

        this.node_learn.active = false;
        this.lock_before_node.active = false;
        this.lock_node.active = false;
        this.unlock_node.active = false;
        // 获取当前的level
        const level = RoleData.ins.gene.smallGeneLevel;
        const playerLv = RoleData.ins.level;
        if(this._talentData.Id==level+1){
            if(playerLv>=this._talentData.UnlockArgs){
                this.node_learn.active = true;
            }else{
                this.lock_node.active = true;
            }
        }else if(this._talentData.Id<level+1){
            this.unlock_node.active = true
        }else{
            if(playerLv>=this._talentData.UnlockArgs){
                this.lock_before_node.active = true;
            }else{
                this.lock_node.active = true;
            }
        }
    }
    clickBtn() {
        // 升级需要资源
        const needGeneRes = this._talentData.MaterialCountList[0];
        const haveCount = ItemData.ins.getCount(this._talentData.MaterialIdList[0]);
        if(haveCount<needGeneRes){
            ShowItemNotEnoughTips(this._talentData.MaterialIdList[0]);
            // 金币不足
            UIMgr.ins.show({ viewName: ViewName.ResourceBuyPop, data: { "itemId": tab.CurrencyType.CurrencyType_Gold } })
            return 
        }
        this.node.active = false;
        let msg = new proto.Msg_UpgradeGeneLevelReq();
        msg.type = this._talentData.Type;
        Net.Send(proto.Ptl.UpgradeGeneLevelReq, msg)
    }
}


