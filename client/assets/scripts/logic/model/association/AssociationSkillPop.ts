import { _decorator, Button, Color, Component, EventTouch, Label, log, Node, Prefab, ProgressBar, Sprite, SpriteFrame } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { ShowItemNotEnoughTips, UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { AssociationData } from './AssociationData';
import { AssociationControl } from './AssociationControl';
import { EventMgr } from '../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
import { ItemData } from '../item/ItemData';
import { GameUtil } from '../../utils/GameUtil';
const { ccclass, property } = _decorator;

@ccclass('AssociationSkillPop')
export class AssociationSkillPop extends ViewPop {
    @property([Node])
    node_skills: Node[] = [];
    @property([SpriteFrame])
    frames_icon: SpriteFrame[] = [];
    @property(Node)
    node_attr_layout: Node = null;
    @property(Node)
    node_cost_layout: Node = null;
    @property(Node)
    node_toggle: Node = null;
    @property(Sprite)
    sp_common_info_icon: Sprite = null;
    @property(Sprite)
    sp_info_icon: Sprite = null;
    @property(Label)
    lbl_info_icon: Label = null;
    @property(Node)
    node_lv_up: Node = null;
    @property(ProgressBar)
    progress_bar_skill: ProgressBar = null;
    @property(Node)
    node_final_img: Node = null;
    private curClass: tab.HeroClass = tab.HeroClass.HeroClass_Assassin;
    onShow(): void {
        this.curClass = tab.HeroClass.HeroClass_Assassin;
        this.setView();
    }
    setView() {
        this.setSkillInfo();
        this.setCurInfo();
    }
    protected onDestroy(): void {
        super.onDestroy();
    }
    register(): void {
        EventMgr.onMsg(proto.Ptl.ResetGuildSkillRsp, this.on_s2c_ResetGuildSkillRsp, this);
        EventMgr.onMsg(proto.Ptl.UpgradeGuildSkillRsp, this.on_s2c_UpgradeGuildSkillRsp, this);
    }
    unRegister(): void {
        super.unRegister();
    }
    /* 重置技能 */
    resetGuildSkill() {
        const lv = AssociationData.ins.getSkillLvByClass(this.curClass);
        if (lv > 0) {
            UIMgr.ins.show({ viewName: ViewName.AssociationSkillResetPop, data: this.curClass })
        }
    }
    /* 点击显示全体属性 */
    showAllSkillAttr() {
        UIMgr.ins.show({ viewName: ViewName.AssociationAttrPop, data: { "attrMap": AssociationData.ins.getGuildAttr(this.curClass) } })
    }
    /* 升级属性 */
    onClickLvUp() {
        // 是否资源充足
        const config = AssociationData.ins.isMaterialEnough(this.curClass);
        if (!config.isEnough) {
            ShowItemNotEnoughTips(config.itemid);
            return
        }
        // 是否达到等级上限
        const isLevelMax = AssociationData.ins.isSkillLevelMax(this.curClass)
        if (isLevelMax) {
            console.log("等级上限")
            return;
        }
        AssociationControl.ins.reqUpgradeGuildSkill(this.curClass);
    }
    switchClass(e: EventTouch, heroClass: string) {
        if (this.curClass == Number(heroClass)) {
            return;
        }
        this.curClass = Number(heroClass);
        this.setView();
    }
    on_s2c_ResetGuildSkillRsp(msg: proto.Msg_ResetGuildSkillRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        log("cocos 重置公会技能成功");
        this.setView();
    }
    on_s2c_UpgradeGuildSkillRsp(msg: proto.Msg_UpgradeGuildSkillRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        log("cocos 升级公会技能成功")
        this.setView()
    }
    setSkillInfo() {
        const heroClassTab = tab.getData().HeroClassTableByHeroClass.getValue(this.curClass);
        const lv = AssociationData.ins.getSkillLvByClass(this.curClass);
        const showLv = Math.ceil((lv + 1) / 6);
        const tabs = AssociationData.ins.getSkillTabsByClass(this.curClass);
        const arrTabs = [];
        for (let i = 0; i < tabs.length; i++) {
            const _tab = tabs[i];
            if (showLv === _tab.ShowLevel) {
                arrTabs.push(_tab);
            }
        }
        if (lv % 6 === 5) {
            this.progress_bar_skill.progress = 1;
            this.node_final_img.active = true;
        } else {
            this.progress_bar_skill.progress = (lv % 6) / 5;
            this.node_final_img.active = false;
        }
        for (let k = 0; k < 6; k++) {
            const item = this.node_skills[k];
            const info_node = item.getChildByName("info_node");
            const lock_node = item.getChildByName("lock_node");
            const lock_node_img = lock_node.getChildByName("img");
            const select_img = item.getChildByName("select_img");
            const lv_txt = info_node.getChildByName("lv_txt").getComponent(Label);
            const att_txt = info_node.getChildByName("attr_txt").getComponent(Label)
            const tabData: tab.GuildAttrTable = arrTabs[k];
            select_img.active = k === lv % 6;
            lock_node.active = k >= lv % 6;
            lock_node_img.active = k > lv % 6;
            if (tabData) {
                item.active = true;
                lv_txt.string = String(showLv);
                if (k !== 5) {
                    att_txt.string = LangMgr.getLab(tab.AttrType[tabData.AttrTypes[0]]) + "+" + tabData.AttrValue[0];
                } else {
                    att_txt.node.active = false
                }
            } else {
                lv_txt.string = String(showLv);
                lock_node.active = false;
                // att_txt.node.active = false;
            }
            if (k === 5) {
                item.getChildByName("icon").getComponent(Sprite).setTexture(heroClassTab.Icon);
            }
        }
        for (let j = tab.HeroClass.HeroClass_Assassin; j <= tab.HeroClass.HeroClass_Warrior; j++) {
            const toggle_lv = Math.floor(AssociationData.ins.getSkillLvByClass(j) / 6);
            const toggle_node = this.node_toggle.children[j - 1];
            const toggle_node_lv = toggle_node.getChildByName("lv_txt").getComponent(Label);
            toggle_node_lv.string = String(toggle_lv);
        }
    }
    setCurInfo() {
        // 当前属性
        const heroClassTab = tab.getData().HeroClassTableByHeroClass.getValue(this.curClass);
        const tabData = AssociationData.ins.getCurSkillTabByClass(this.curClass);
        const _lv = tabData.Level % 6;
        this.sp_common_info_icon.node.parent.active = false;
        this.sp_info_icon.node.parent.active = false;
        if (_lv == 0) {
            this.sp_info_icon.node.parent.active = true;
            this.sp_info_icon.setTexture(heroClassTab.Icon)
            this.lbl_info_icon.string = LangMgr.getCombineString("Tips_guildattr_6", [LangMgr.getLab(tab.HeroClass[this.curClass]), tabData.ShowLevel])
        } else {
            this.sp_common_info_icon.node.parent.active = true;
            this.sp_common_info_icon.spriteFrame = this.frames_icon[(tabData.Level - 1) % 6];
            this.lbl_info_icon.string = LangMgr.getCombineString("Tips_guildattr_" + _lv, [LangMgr.getLab(tab.HeroClass[this.curClass]), tabData.ShowLevel])
        }
        for (let i = 0; i < this.node_attr_layout.children.length; i++) {
            const attr_node = this.node_attr_layout.children[i];
            if (tabData.AttrTypes[i]) {
                const attrTabData = tab.getData().HeroAttrClientTableByType.getValue(tabData.AttrTypes[i])
                attr_node.active = true;
                const attr_icon = attr_node.getChildByName("icon").getComponent(Sprite);
                const attr_value = attr_node.getChildByName("now_txt").getComponent(Label);
                attr_icon.setTexture(attrTabData.Icon);
                // attr_value.string = String(tabData.AttrValue[i]);
                let _tabData:tab.HeroAttrClientTable = tab.getData().HeroAttrClientTableByType.getValue(tabData.AttrTypes[i])
                attr_value.string=_tabData.ShowPercent?(tabData.AttrValue[i]/100)+"%":GameUtil.convertNumber(tabData.AttrValue[i])+""
            } else {
                attr_node.active = false;
            }
        }
        // 当前消耗
        for (let k = 0; k < this.node_cost_layout.children.length; k++) {
            const cost_node = this.node_cost_layout.children[k];
            if (tabData.CostItemIds[k]) {
                cost_node.active = true;
                const cost_icon = cost_node.getChildByName("icon").getComponent(Sprite);
                const cost_need_value = cost_node.getChildByName("need_txt").getComponent(Label);
                const cost_have_value = cost_node.getChildByName("have_txt").getComponent(Label);
                const costId = tabData.CostItemIds[k];
                const itemData = tab.getData().ItemTableById.getValue(costId);
                const costCount = tabData.CostItemCount[k];
                const costHaveCount = ItemData.ins.getCount(costId);
                cost_icon.setTexture(itemData.Icon);
                cost_need_value.string = GameUtil.convertNumber(costCount);
                cost_have_value.string = GameUtil.convertNumber(costHaveCount);

                if(costCount>costHaveCount){
                    cost_have_value.color = new Color().fromHEX(tab.getData().GetKeyValue_ConfigTable().InterfaceTxtRed);
                }else{
                    cost_have_value.color = new Color().fromHEX("#FFFFFF");
                }

            } else {
                cost_node.active = false;
            }
        }
        const isLevelMax = AssociationData.ins.isSkillLevelMax(this.curClass);
        this.node_lv_up.getComponent(Button).interactable = !isLevelMax;
        this.node_lv_up.getComponent(Sprite).grayscale = isLevelMax;
    }
    clickAttrBtn(event:EventTouch,args:string){
        let node:Node=event.currentTarget;
        const tabData = AssociationData.ins.getCurSkillTabByClass(this.curClass);
        UIMgr.ins.show({ viewName: ViewName.CommonBlackTipsPop,data:{"worldPos":node.worldPosition,"WordTableKey":tab.AttrType[tabData.AttrTypes[args]] }});
    }
}


