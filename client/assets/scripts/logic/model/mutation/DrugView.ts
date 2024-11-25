import { _decorator, Component, instantiate, Label, Node, Prefab, sp, Sprite } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { tab } from '../../../Table/table_gen';
import { DrugScrollItem } from './DrugScrollItem';
import { RoleData } from '../role/RoleData';
import { HeroTeamControl } from '../hero/HeroTeamControl';
import { proto } from 'client_protocol';
import { Net } from '../../net/Net';
import { ItemData } from '../item/ItemData';
import { EventMgr } from '../../mgr/EventMgr';
import { RedMgr } from '../../mgr/RedMgr';
import { RedDotType } from '../../red/RedDotType';
import { ShowTips } from '../../mgr/UIMgr';
import { LangMgr } from '../../mgr/LangMgr';
const { ccclass, property } = _decorator;

@ccclass('DrugView')
export class DrugView extends ViewPop {
    @property(sp.Skeleton)
    spine_hero:sp.Skeleton = null;
    @property(Node)
    node_content: Node = null;
    @property(Prefab)
    pfb_item: Prefab = null;
    @property(Node)
    node_attr: Node = null;
    @property(Node)
    node_nothing: Node = null;
    private elixirArrData = [];
    onShow(): void {
        // 设置丹药列表
        const playLevel = RoleData.ins.level;
        this.node_content.destroyAllChildren();
        for (let i = 0; i < tab.getData().ElixirTable.length; i++) {
            const elixirTab = tab.getData().ElixirTable[i];
            const item = instantiate(this.pfb_item);
            item.parent = this.node_content;
            const itemTs = item.getComponent(DrugScrollItem);
            itemTs.setData(elixirTab);

            const usedItemCount = HeroTeamControl.ins.getElixirCountById(elixirTab.Id)
            const elixirId = elixirTab.Id;
            const elixirCount = ItemData.ins.getCount(elixirId);
            let maxCount = 0;
            for(let k=elixirTab.PlayerLv.length-1;k>=0;k--){
                const level = elixirTab.PlayerLv[k];
                if(playLevel>level){
                    maxCount = elixirTab.MaxCount[k+1]? elixirTab.MaxCount[k+1]:elixirTab.MaxCount[k];
                    break;
                }
            }
            let useCount = 0;
            if(usedItemCount+elixirCount>maxCount){
                useCount = maxCount-usedItemCount>0?maxCount-usedItemCount:0;
            }else{
                useCount = elixirCount
            }
            
            if(elixirCount>0){
                let obj:proto.IElixirItem = {
                    id:elixirId,
                    count:useCount
                }
                if(useCount>0){
                    this.elixirArrData.push(obj);
                }
            }
        }

        const attrDatas = HeroTeamControl.ins.getElixirAttr();
        this.node_nothing.active = attrDatas.size === 0
        this.node_attr.active = attrDatas.size !== 0
        if (attrDatas.size !== 0) {
            this.node_attr.active = true;
            const children = this.node_attr.children;
            for (let k = 0; k < children.length; k++) {
                const attrItem = children[k];
                attrItem.active = false;
            }
            let count = 0;
            for (const [key, value] of attrDatas.entries()) {
                console.log(`entries: ${key}: ${value}`);
                const attrItem = children[count];
                attrItem.active = true;
                const attrType = key;
                const iconPath = tab.getData().HeroAttrClientTableByType.getValue(attrType).Icon;
                const icon_img = attrItem.getChildByName("icon_img").getComponent(Sprite);
                icon_img.setTexture(iconPath);
                const num_txt = attrItem.getChildByName("num_txt").getComponent(Label);
                num_txt.string = String(value);
                count++;
            }
        }

        let spineAction = this.getRandomValue();
        this.spine_hero.setAnimation(0, spineAction, false);
        this.spine_hero.setCompleteListener((listener) => {
            let spineAction = this.getRandomValue();
            this.spine_hero.setAnimation(0, spineAction, false);
        })

    }
    register(): void {
        EventMgr.onMsg(proto.Ptl.UseElixirRsp, this.on_s2c_UseElixirRsp, this)
    }
    on_s2c_UseElixirRsp(msg:proto.Msg_UseElixirRsp){
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        RoleData.ins.elixir.data = RoleData.ins.elixir.data .concat(msg.data);
        HeroTeamControl.ins.initElixirData();
        this.elixirArrData = [];
        this.onShow();
    }
    unRegister(): void {
        super.unRegister()
    }
    protected onDestroy(): void {
        super.onDestroy()
    }
    clickAutoUse(){
        if(this.elixirArrData.length>0){
            let msg = new proto.Msg_UseElixirReq();
            msg.items = this.elixirArrData
            Net.Send(proto.Ptl.UseElixirReq , msg)
        }else{
            ShowTips(LangMgr.getLab("Tips_drug_1"));
        }
    }
    getRandomValue(): string {
        const randomNumber = Math.random(); // 生成一个 [0, 1) 之间的随机数
        if (randomNumber < 0.5) {
            return "action_attack3"; // 50%的概率返回1
        } else {
            return "action_move"; // 50%的概率返回2
        }
    }
}


