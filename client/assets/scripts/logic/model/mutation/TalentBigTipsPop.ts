import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
import { proto } from 'client_protocol';
import { Net } from '../../net/Net';
import { ShowItemNotEnoughTips, ShowTips } from '../../mgr/UIMgr';
import { ItemData } from '../item/ItemData';
import { RoleData } from '../role/RoleData';
import { GameUtil } from '../../utils/GameUtil';
const { ccclass, property } = _decorator;

@ccclass('TalentBigTipsPop')
export class TalentBigTipsPop extends Component {
    @property(Label)
    lbl_name:Label = null;
    @property(Label)
    lbl_value:Label = null;
    @property(Label)
    lbl_lock_level:Label = null;
    @property(Label)
    lbl_gold:Label = null;
    @property(Sprite)
    sp_gold:Sprite = null;


    @property(Node)
    node_learn:Node = null;
    @property(Node)
    lock_node:Node = null;
    @property(Node)
    lock_before_node:Node = null;
    @property(Node)
    unlock_node:Node = null;
    private _talentData:tab.GeneLevelTable = null;
    setData(data:tab.GeneLevelTable){
        this._talentData = data;
        this.node.active = true;
        const equipSkillTab = tab.getData().EquipSkillTableById.getValue(data.AttrValue);
        const ItemData = tab.getData().ItemTableById.getValue(data.MaterialIdList[0])
        this.lbl_name.string=LangMgr.getLab(equipSkillTab.SkillName);
        this.lbl_value.string = LangMgr.getLab(equipSkillTab.SkillDesc);
        this.lbl_gold.string = GameUtil.convertNumber(data.MaterialCountList[0],true);
        this.sp_gold.setTexture(ItemData.Icon);
        this.node_learn.active = false;
        this.lock_before_node.active = false;
        this.lock_node.active = false;
        this.unlock_node.active = false;
        // 获取当前的level
        const bigLevel = 10000+RoleData.ins.gene.bigGeneLevel;
        const smallLevel = RoleData.ins.gene.smallGeneLevel;
        if(smallLevel>=this._talentData.UnlockArgs){
            if(this._talentData.Id==bigLevel+1){
                this.node_learn.active = true;
            }else if(this._talentData.Id<bigLevel+1){
                this.unlock_node.active = true;
            }else{
                this.lock_before_node.active = true;
            }
        }else{
            this.lock_node.active = true;
        }
    }
    clickBtn(){
        const needGeneRes = this._talentData.MaterialCountList[0];
        const haveCount = ItemData.ins.getCount(this._talentData.MaterialIdList[0]);
        if(haveCount<needGeneRes){
            ShowItemNotEnoughTips(this._talentData.MaterialIdList[0]);
            return 
        }
        this.node.active = false;
        let msg = new proto.Msg_UpgradeGeneLevelReq();
        msg.type = this._talentData.Type;
        Net.Send(proto.Ptl.UpgradeGeneLevelReq , msg)
    }
}


