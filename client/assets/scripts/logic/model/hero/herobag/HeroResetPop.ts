/*
 * @Date: 2024-05-14 09:50:32
 * @LastEditors: wzq
 * @LastEditTime: 2024-11-22 15:49:37
 */

import { _decorator, Button, EventTouch, instantiate, Label, Node, Prefab, Sprite, Toggle } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { proto } from 'client_protocol';
import { Net } from '../../../net/Net';
import { HeroDataControl } from './HeroDataControl';
import { HeroBagItem } from './HeroBagItem';
import { HeroTeamControl } from '../HeroTeamControl';
import { HeroData } from '../HeroData';
import { ItemPoolMgr } from '../../item/ItemPoolMgr';
import { ItemInfo } from '../../item/ItemInfo';
import { tab } from '../../../../Table/table_gen';
import { HeroInfo } from '../HeroInfo';
import { CommonItem } from '../../item/CommonItem';
import { HeroItem } from '../../item/HeroItem';
import { ShowTips } from '../../../mgr/UIMgr';
import { ItemData } from '../../item/ItemData';
import { LangMgr } from '../../../mgr/LangMgr';
const { ccclass, property } = _decorator;
enum VIEW_TYPE {
    LEVEL = 1,
    STAR
}
@ccclass('HeroResetPop')
export class HeroResetPop extends ViewPop {
    @property(Node)
    node_level_reset: Node = null;
    @property(Node)
    node_star_reset: Node = null;

    @property(Node)
    node_level_title: Node = null;
    @property(Node)
    node_star_title: Node = null;

    @property(Node)
    node_material: Node = null;
    @property(Node)
    node_hero: Node = null;
    @property(Node)
    node_material_content: Node = null;

    @property(Prefab)
    pfb_item: Prefab = null;
    @property(Prefab)
    pfb_material: Prefab = null;

    @property(Toggle)
    toggle_level: Toggle = null;
    @property(Toggle)
    toggle_star: Toggle = null;

    @property(Button)
    btn_reset: Button = null;
    @property(Node)
    node_res_node: Node = null;

    @property(Sprite)
    node_res_sp: Sprite = null;
    @property(Label)
    node_res_lbl: Label = null;

    private _heroId: number = 0;
    private _view_type: VIEW_TYPE = VIEW_TYPE.LEVEL;
    register(): void {

    }
   
    onShow(): void {
        this._view_type = VIEW_TYPE.LEVEL;
        this._heroId = HeroDataControl.ins.heroId;
        let node = instantiate(this.pfb_item);
        let itemTs = node.getComponent(HeroBagItem);
        itemTs.UpdateContent(HeroData.ins.getById(this._heroId));
        itemTs.setRed(false);
        node.parent = this.node_hero;

        this.switchView(null, String(this._view_type));
        this.toggle_level.isChecked = true;
    }
    switchView(e: EventTouch, type: String) {
        let view_type = Number(type);
        this._view_type = view_type;
        /* 是否在队伍中 */
        let inTeam: boolean = Boolean(HeroTeamControl.ins.heroInTeam(this._heroId))
        this.node_star_reset.active = !inTeam && view_type === VIEW_TYPE.STAR;
        this.node_level_reset.active = !inTeam && view_type === VIEW_TYPE.LEVEL;
        this.node_level_title.active = view_type === VIEW_TYPE.LEVEL;
        this.node_star_title.active = view_type === VIEW_TYPE.STAR;
        this.node_res_node.active = view_type === VIEW_TYPE.STAR;
        this.node_material.active = !inTeam
        this.node_material_content.destroyAllChildren();
        let heroInfo = HeroData.ins.getById(this._heroId);
        switch (view_type) {
            case VIEW_TYPE.LEVEL:
                /* 显示英雄等级重置之后的材料 */
                let showBtn = inTeam && heroInfo.getHeroLevel() > 1;
                this.btn_reset.node.active = showBtn
                if (inTeam) {
                    this.node_material.active = true;
                    this.toggle_level.isChecked = true;
                    const materiaLevellMap = heroInfo.getMaterialByLevel(1, heroInfo.getHeroLevel()).map;
                    materiaLevellMap.forEach((value, itemId) => {
                        /* 创建材料 */
                        let itemInfo = new ItemInfo();
                        itemInfo.itemId = itemId;
                        itemInfo.num = value;
                        let node = ItemPoolMgr.ins.createItem(itemInfo,this.node_material_content);
                    })
                }
                break;
            case VIEW_TYPE.STAR:
                /* 6星以上才可以重置 */
                this.toggle_star.isChecked = true;
                let star = heroInfo.star;
                this.node_star_reset.active = false;
                this.node_material.active = false;
                let _showBtn = star >= 6;
                this.btn_reset.node.active = _showBtn

                if (star < 6) {
                    this.node_star_reset.active = true;
                    this.node_material.active = false;
                } else {
                    this.node_material.active = true;
                    // 显示星级重置之后的材料
                    this.node_res_node.active = heroInfo.heroStarUpTable.ResetCostItem>0
                    if (heroInfo.heroStarUpTable.ResetCostItem) {
                        const resetItemData = tab.getData().ItemTableById.getValue(heroInfo.heroStarUpTable.ResetCostItem);
                        this.node_res_sp.setTexture(resetItemData.Icon);
                        const itemInfo = ItemData.ins.getByItemId(heroInfo.heroStarUpTable.ResetCostItem);
                        this.node_res_lbl.string = (itemInfo?itemInfo.num:0) + "/" + heroInfo.heroStarUpTable.ResetCostNum
                    }
                    const materialStarMap = heroInfo.getMaterialByStar();
                    materialStarMap.forEach((value, id) => {
                        /* 创建材料 */
                        /* 判断是否是英雄 */
                        let itemTab = tab.getData().ItemTableById.getValue(id);
                        if (itemTab) {
                            let itemInfo = new ItemInfo();
                            itemInfo.itemId = id;
                            itemInfo.num = value;
                            let node = ItemPoolMgr.ins.createItem(itemInfo,this.node_material_content);
                            let commonTs: CommonItem = node.getComponent(CommonItem);
                            /* 蛋仔星级 */
                            // let commonCostTab = tab.getData().HeroCommonCostTableById.getValue(id);
                            // commonTs.setStar(commonCostTab.HeroStar);
                        } else {
                            let StarUpTab = tab.getData().HeroStarUpTableById.getValue(id)
                            heroInfo = new HeroInfo();
                            heroInfo.itemId = StarUpTab.HeroId;
                            heroInfo.id = 0;
                            heroInfo.star = StarUpTab.HeroStar;
                            heroInfo.level = 1;
                            let item = ItemPoolMgr.ins.createHeroItem(heroInfo, this.node_material_content);
                            let heroTs: HeroItem = item.getComponent(HeroItem);
                            heroTs.setLevel(value);
                            heroTs.setSelect(false);
                        }
                    })
                }
                break;
            default:
                break;
        }
    }
    sendMsg() {
        if (this._view_type === VIEW_TYPE.LEVEL) {
            let msg = new proto.Msg_ResetTeamSlotLevelReq()
            msg.heroClass = HeroData.ins.getById(this._heroId).heroTable.Class;
            Net.Send(proto.Ptl.ResetTeamSlotLevelReq, msg)
        } else {
            /* 重置需要消耗道具 */
            this._heroId = HeroDataControl.ins.heroId;
            let starUpTab = HeroData.ins.getById(this._heroId).heroStarUpTable;
            let materialItem = starUpTab.ResetCostItem;
            let MaterialNum = starUpTab.ResetCostNum;
            let ItemTabData = tab.getData().ItemTableById.getValue(materialItem)
            if(materialItem&&ItemData.ins.getCount(materialItem)<MaterialNum){
                //let str = `重置需要消耗的材料为 ${LangMgr.getLab(ItemTabData.Name)} 当前拥有的数量不足`
                //ShowTips(str);
                ShowTips(LangMgr.getCombineString("Tips_itemshortage", [LangMgr.getLab(ItemTabData.Name)]));
                return;
            }
            let msg = new proto.Msg_ResetHeroStarReq()
            msg.heroId = HeroDataControl.ins.heroId;
            Net.Send(proto.Ptl.ResetHeroStarReq, msg)
        }
    }
}


