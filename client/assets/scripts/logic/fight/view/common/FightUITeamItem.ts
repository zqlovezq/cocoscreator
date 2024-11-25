import { _decorator, Component, js, Label, Node, Texture2D } from "cc";
import { EventMgr } from "../../../mgr/EventMgr";
import { CommonItem } from "../../../model/item/CommonItem";
import { RoleInfo } from "../../base/obj/role/role/RoleInfo";
import { FightEvent } from "../../define/FightEvent";
import { FightUITeamSkillItem } from "./FightUITeamSkillItem";
import { FightRoleTeamItem } from "./FightRoleTeamItem";
import { FightDamageRankItem } from "../damage/FightDamageRankItem";
import { FightData } from "../../data/FightData";
import { Role } from "../../base/obj/role/role/Role";
import { ShowTips, UIMgr } from "../../../mgr/UIMgr";
import { tab } from "../../../../Table/table_gen";
import { ItemData } from "../../../model/item/ItemData";
import { FightMsgControl } from "../../FightMsgControl";
import { PlatformMgr } from "../../../mgr/PlatformMgr";
import { AdMgr } from "../../../model/AdMgr";
import { FightRootControl } from "../../FightRootControl";
import { LangMgr } from "../../../mgr/LangMgr";

const { ccclass, property } = _decorator;


/** 角色头像（FightUI节点显示的) */
@ccclass('FightUITeamItem')
export class FightUITeamItem extends Component {
    roleInfo: RoleInfo = null

    @property(Node)
    deadNode: Node = null
    @property(Label)
    deadLab: Label = null

    @property(FightRoleTeamItem)
    item: FightRoleTeamItem = null

    @property(Node)
    skillNode: Node = null

    @property(FightUITeamSkillItem)
    skill1: FightUITeamSkillItem = null

    @property(FightUITeamSkillItem)
    skill2: FightUITeamSkillItem = null

    @property(Node)
    resurgenceBtnNode: Node = null;
    @property(Node)
    adBtnNode: Node = null;
    @property(Label)
    reviceContLab: Label = null;
    protected onLoad(): void {
        EventMgr.onFight(FightEvent.Fight_Role_Dead, this.onFight_Role_Dead, this)
        EventMgr.onFight(FightEvent.Fight_Initiative_Revive, this.onFight_Role_Revive, this)
        EventMgr.onFight(FightEvent.Role_Add_Weapon_SkillGroup, this.onRole_Add_Weapon_SkillGroup, this)
        EventMgr.onFight(FightEvent.Role_change_SkillGroup, this.onRole_change_SkillGroup, this)

        EventMgr.onFight(FightEvent.Change_Revice_Count, this.updateReviveShow, this)

        this.setDeadActive(false)
    }

    setDeadActive(isshow: boolean) {
        this.deadNode.active = isshow
        this.skillNode.active = !isshow
        this.updateReviveShow();


    }

    protected onDestroy(): void {
        EventMgr.unTarget(this)
    }

    setRoleInfo(info: RoleInfo) {
        this.roleInfo = info

        this.skill1.node.active = false
        this.skill2.node.active = false

        this.item.setData(info.heroFightInfo)

        this.skill1.setSkill(info.normalGroup)
        this.node.active = true
        if (info.weaponeGroup) {
            this.onRole_Add_Weapon_SkillGroup(this.roleInfo)
        }

    }

    onFight_Role_Dead(info: RoleInfo) {
        if (this.roleInfo == info) {
            this.deadLab.string = js.formatStr("%s/%s", FightData.ins.reviceCount, FightData.ins.maxReviceCount())
            this.setDeadActive(true)
        }
    }

    onFight_Role_Revive(role: Role) {
        if (this.roleInfo == (role && role.info)) {
            this.setDeadActive(false)
        }
    }

    onClickRevive() {
        if (FightRootControl.ins.isExitIng) {
            return
        }
        if (FightData.ins.reviceCount < FightData.ins.maxReviceCount()) {
            console.log("复活")
            // tab.CurrencyType
            let count = ItemData.ins.getCount(tab.CurrencyType.CurrencyType_ReviveCurrency);
            if (count >= 1) {
                this.showReviveCurrency()
            } else {
                //ShowTips('复活币不足');
                ShowTips(LangMgr.getLab("Tips_revive_1"));
            }

        } else {
            //ShowTips('复活次数不足');
            ShowTips(LangMgr.getLab("Tips_revive_2"));
        }

    }

    /**观看广告复活 */
    onClickADRevive() {
        if (FightRootControl.ins.isExitIng) {
            return
        }
        if (FightData.ins.maxReviceCount() - FightData.ins.reviceCount >1 && ItemData.ins.getCount(tab.CurrencyType.CurrencyType_ReviveCurrency) >= 1) {
            //弹窗
            UIMgr.ins.show({
                viewName: "ReviveTipsPop", data: {
                    callback: (type: number) => {
                        if (type == 1) {//广告
                            this.showAdRevive()
                        } else if (type == 2) {//复活币
                            this.showReviveCurrency()
                        }
                    }
                }
            })
        } else {
            this.showAdRevive()
        }
    }

    showReviveCurrency() {
        FightMsgControl.ins.requestReviveOnStage(() => {
            if (FightRootControl.ins.isExitIng) {
                return
            }
            FightData.ins.addReviceCount()
            this.roleInfo.abs.onRevive()
            EventMgr.emitFight(FightEvent.Fight_Initiative_Revive, this.roleInfo.abs)
        })
    }

    showAdRevive() {
        FightData.ins.pause = true
        AdMgr.ins.playVideoAd(tab.AdType.AdType_FightReviveByAdvert, () => {
            if (FightRootControl.ins.isExitIng) {
                return
            }
            FightData.ins.pause = false
            FightData.ins.addReviceCount(true)
            this.roleInfo.abs.onRevive()
            EventMgr.emitFight(FightEvent.Fight_Initiative_Revive, this.roleInfo.abs)
        }, true, () => {
            FightData.ins.pause = false
        })
    }


    onRole_Add_Weapon_SkillGroup(info: RoleInfo) {
        if (this.roleInfo != info) {
            return
        }

        this.skill2.setSkill(this.roleInfo.weaponeGroup)
    }
    onRole_change_SkillGroup(info: RoleInfo) {
        if (this.roleInfo != info) {
            return
        }
        this.skill1.setSkill(this.roleInfo.normalGroup)
    }
    updateReviveShow() {
        if (this.deadNode.active) {
            if (FightData.ins.advertReviceCount >= tab.getData().GetKeyValue_ConfigTable().FightReviveCountByAd) {
                this.resurgenceBtnNode.active = true;
                this.adBtnNode.active = false;
                let maxCout = FightData.ins.maxReviceCount();
                this.reviceContLab.string = (maxCout - FightData.ins.reviceCount) + "/" + maxCout;

            } else {
                this.resurgenceBtnNode.active = false;
                this.adBtnNode.active = true;
            }
        }


    }

}