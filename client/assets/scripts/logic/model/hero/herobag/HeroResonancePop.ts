/*
 * @Date: 2024-05-14 17:48:33
 * @LastEditors: wzq
 * @等级|星级共鸣
 * @LastEditTime: 2024-08-12 10:08:35
 */

import { _decorator, Component, EventTouch, instantiate, Label, Node, Prefab } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { HeroInfo } from '../HeroInfo';
import { ItemPoolMgr } from '../../item/ItemPoolMgr';
import { HeroItem } from '../../item/HeroItem';
import { HeroTeamControl } from '../HeroTeamControl';
import { HeroData } from '../HeroData';
import { HeroStar } from '../HeroStar';
import { HeroAttrItem } from './HeroAttrItem';
import { tab } from '../../../../Table/table_gen';
import { proto } from 'client_protocol';
import { Net } from '../../../net/Net';
import { RedMgr } from '../../../mgr/RedMgr';
import { RedDotType } from '../../../red/RedDotType';
import { EventMgr } from '../../../mgr/EventMgr';
import { LangMgr } from '../../../mgr/LangMgr';
const { ccclass, property } = _decorator;
enum VIEW_TYPE {
    LEVEL = 1,
    STAR
}
@ccclass('HeroResonancePop')
export class HeroResonancePop extends ViewPop {
    @property(Node)
    node_level: Node = null;
    @property(Node)
    node_star: Node = null;
    @property(Node)
    node_heros: Node = null;
    @property(Node)
    node_attr_layout: Node = null;
    @property(Node)
    node_red_level: Node = null;
    @property(Node)
    node_red_star: Node = null;
    @property(Node)
    node_red_btn: Node = null;
    @property(Node)
    node_no_attr: Node = null;

    @property(Label)
    lbl_resonance_level: Label = null;

    @property(Label)
    lbl_resonance_value: Label = null;//共鸣之力12级
    @property(Label)
    lbl_resonance_value_next: Label = null;//共鸣等级达到12级激活共鸣之力5级

    @property(Prefab)
    pfb_attr_item: Prefab = null;
    @property(Node)
    node_lv_up_btn:Node = null;
    @property(Node)
    node_star_resonace_layout:Node = null;

    @property(HeroStar)
    HeroStar_cur_resonance_star: HeroStar = null;
    @property(HeroStar)
    HeroStar_next_resonance_star: HeroStar = null;

    private _view_type: VIEW_TYPE = VIEW_TYPE.LEVEL;
    register(): void {
        EventMgr.onMsg(proto.Ptl.UpLevelResonanceRsp, this.on_s2c_UpLevelResonanceRsp, this);
        EventMgr.onMsg(proto.Ptl.UpStarResonanceRsp, this.on_s2c_UpStarResonanceRsp, this);
    }
   
    /* 等级共鸣 */
    on_s2c_UpLevelResonanceRsp(msg: proto.Msg_UpLevelResonanceRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        HeroTeamControl.ins.setTeamResonanceLevel(msg.levelResonance);
        /* 更新等级共鸣红点 */
        RedMgr.refreshEvent(RedDotType.HeroResonanceLevel);
        this.switchView(null, String(this._view_type));
    }
    /* 星级共鸣 */
    on_s2c_UpStarResonanceRsp(msg: proto.Msg_UpStarResonanceRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        HeroTeamControl.ins.setTeamResonanceStar(msg.starResonance);
        /* 更新等级共鸣红点 */
        RedMgr.refreshEvent(RedDotType.HeroresonanceStar);
        this.switchView(null, String(this._view_type));
    }
    onShow(): void {
        this._view_type = VIEW_TYPE.LEVEL;
        /* 开始默认是等级 */
        this.switchView(null, String(this._view_type));
    }
    switchView(e: EventTouch, type: String) {
        let view_type = Number(type);
        this._view_type = view_type;
        this.node_level.active = view_type === VIEW_TYPE.LEVEL;
        this.node_star.active = view_type === VIEW_TYPE.STAR;
        let parentNode = this.node_heros;
        for (let i = 0; i < 5; i++) {
            let node = parentNode.children[i];
            let heroClass = Number(node.name);
            let teamSlot: proto.ITeamSlot = HeroTeamControl.ins.getClassTeamData(heroClass);
            let heroInfo = HeroData.ins.getById(teamSlot.heroId);
            this.createItem(heroInfo, parentNode.children[i], view_type == VIEW_TYPE.LEVEL);
        }
        this.HeroStar_cur_resonance_star.showStar(HeroTeamControl.ins.getMinTeamStar());
        let startab = HeroTeamControl.ins.getResonanceStarTab();
        if(startab.NeedStar){
            this.HeroStar_next_resonance_star.showStar(startab.NeedStar);
        }
        this.node_red_level.active = RedMgr.ins.isRed(RedDotType.HeroResonanceLevel);
        this.node_red_star.active = RedMgr.ins.isRed(RedDotType.HeroresonanceStar);
        if (view_type == VIEW_TYPE.LEVEL) {
            this.showLevelView();
            this.node_red_btn.active = RedMgr.ins.isRed(RedDotType.HeroResonanceLevel);
        } else {
            this.showStarView();
            this.node_red_btn.active = RedMgr.ins.isRed(RedDotType.HeroresonanceStar);
        }
    }
    showLevelView() {
        // this.node_attr_layout.destroyAllChildren();
        this.node_lv_up_btn.active = true;
        let Leveltab = HeroTeamControl.ins.getResonanceLevelTab();
        if(Leveltab.NeedLv===0){
            this.node_lv_up_btn.active = false;
            this.lbl_resonance_value_next.node.active = false;
        }
        this.node_no_attr.active = Leveltab.Id === 0;
        this.node_attr_layout.active = Leveltab.Id > 0;
        for (let i = 0; i < Leveltab.AttrTypes.length; i++) {
            let type = Leveltab.AttrTypes[i];
            let value = Leveltab.AttrValue[i];
            if (value === 0) {
                continue;
            }
            let node = this.node_attr_layout.children[i];
            if (!node) {
                node = instantiate(this.pfb_attr_item);
                node.parent = this.node_attr_layout;
            }
            let ts: HeroAttrItem = node.getComponent(HeroAttrItem);
            ts.initView(type, value);
        }
        this.lbl_resonance_level.string = LangMgr.getCombineString("ui_heroresonancepop_3", [HeroTeamControl.ins.getMinTeamLevel()]);
        this.lbl_resonance_value.string = LangMgr.getCombineString("ui_heroresonancepop_1", [Leveltab.Id]);
        if (Leveltab.NeedLv) {
            let nextLeveltab = tab.getData().HeroLevelResonanceTable[Leveltab.Id + 1];
            this.lbl_resonance_value_next.string = LangMgr.getCombineString("ui_heroresonancepop_2", [Leveltab.NeedLv, nextLeveltab.Id]);
        }
    }
    showStarView() {
        this.node_lv_up_btn.active = true;
        let startab = HeroTeamControl.ins.getResonanceStarTab();
        if(startab.NeedStar===0){
            this.node_lv_up_btn.active = false;
            this.node_star_resonace_layout.active = false;
        }
        this.node_no_attr.active = startab.Id === 0;
        this.node_attr_layout.active = startab.Id > 0;
        for (let i = 0; i < startab.AttrTypes.length; i++) {
            let type = startab.AttrTypes[i];
            let value = startab.AttrValue[i];
            if (value === 0) {
                continue;
            }
            let node = this.node_attr_layout.children[i];
            if (!node) {
                node = instantiate(this.pfb_attr_item);
                node.parent = this.node_attr_layout;
            }
            let ts: HeroAttrItem = node.getComponent(HeroAttrItem);
            ts.initView(type, value);
        }
        this.lbl_resonance_value.string = LangMgr.getCombineString("ui_heroresonancepop_1", [startab.Id]);
    }
   
    createItem(heroInfo: HeroInfo, node: Node, isLevel: boolean) {
        let item = null;
        if (node.children[0]) {
            item = node.children[0];
        } else {
            item = ItemPoolMgr.ins.createHeroItem(heroInfo,node);
            // item.parent = node;
        }
        let ts: HeroItem = item.getComponent(HeroItem)
        ts.UpdateContent(heroInfo);
        // ts.setHeroActive(false, !isLevel);
        ts.setHeroActive(false);
    }
    /* 点击共鸣升级 */
    clickUp() {
        if (this._view_type == VIEW_TYPE.LEVEL) {
            if (HeroTeamControl.ins.getMinTeamLevel() >= HeroTeamControl.ins.getResonanceLevelTab().NeedLv) {
                let msg = new proto.Msg_UpLevelResonanceReq()
                Net.Send(proto.Ptl.UpLevelResonanceReq, msg)
            }
        } else {
            if (HeroTeamControl.ins.getMinTeamStar() >= HeroTeamControl.ins.getResonanceStarTab().NeedStar) {
                let msg = new proto.Msg_UpStarResonanceReq()
                Net.Send(proto.Ptl.UpStarResonanceReq, msg)
            }
        }
    }
    protected onDisable(): void {
        this.HeroStar_next_resonance_star.onDisable();
        this.HeroStar_cur_resonance_star.onDisable();
    }
}


