import { _decorator, Component, director, EditBox, EventTouch, game, instantiate, js, Label, Layers, Node, Size, Sprite, SpriteFrame, Toggle, Tween, tween, UIOpacity, UITransform, v2, v3, Vec3, view } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { FightRootControl, FightState } from '../../FightRootControl';
import { UIMgr } from '../../../mgr/UIMgr';
import { FightRoleTeam } from '../common/FightRoleTeam';
import { HeroFightInfo } from '../../data/HeroFightInfo';
import { tab } from '../../../../Table/table_gen';
import { LangMgr } from '../../../mgr/LangMgr';
import { PlayerControl } from '../../base/obj/role/role/PlayerControl';
import { FightData } from '../../data/FightData';
import { SkillTab } from '../../power/powerTab/SkillTab';

const { ccclass, property } = _decorator;

@ccclass('FightTestAttr')
export class FightTestAttr extends ViewPop {
    static async create() {
        FightData.ins.pause = true
        await UIMgr.ins.show({ viewName: "FightTestAttr" })
    }

    static hide() {
        FightData.ins.pause = false
        UIMgr.ins.hideView("FightTestAttr")
    }


    @property(FightRoleTeam)
    fightTeam: FightRoleTeam = null
    @property(Label)
    nameLab: Label = null

    @property(Node)
    attrNode: Node = null

    @property(Node)
    skillGroupNode: Node = null

    @property(Node)
    skillGroupItem: Node = null

    @property(Node)
    skillLayoutItem: Node = null

    @property(Node)
    skillItem: Node = null

    @property(Node)
    takeSkillNode: Node = null

    @property(Node)
    triggerNode: Node = null
    @property(Node)
    GlobleNode: Node = null



    @property(Node)
    attrLab: Node = null

    register(): void {

    }

    onShow(): void {
        this.fightTeam.refresh()

        let inTest = true
        for (let index = 0; index < this.fightTeam.items.length; index++) {
            const element = this.fightTeam.items[index];
            let nn = element.node
            nn.on(Node.EventType.TOUCH_START, () => {
                this.showInfo(element.info)
            })
            if (element.info && inTest) {
                inTest = false
                this.showInfo(element.info)
            }
        }
        this.globleAttr(this.GlobleNode, [tab.AttrType.AttrType_InitialScroll, tab.AttrType.AttrType_AddScroll, tab.AttrType.AttrType_RefreshCount])
    }

    onCloseClick() {
        FightTestAttr.hide()
    }

    showInfo(info: HeroFightInfo) {
        this.nameLab.string = ""
        this.attrNode.destroyAllChildren()
        if (info == null) {
            return
        }

        let role = PlayerControl.ins.getRole(info.itemId)
        if (role == null) {
            return
        }
        let itemTab = tab.getData().ItemTableById.getValue(info.itemId)
        this.nameLab.string = LangMgr.getLab(itemTab.Name)

        let attrList = [
            ["当前血量", role.info.attrData.hp],
            ["最大血量", role.info.attrData.maxHp],
            ["当前护盾", role.info.attrData.shield],
        ]
        for (const iterator of role.info.attrData.attr) {
            attrList.push([tab.AttrType[iterator[0]], iterator[1]])
        }

        for (let index = 0; index < attrList.length; index++) {
            const iterator = attrList[index];
            let nn = instantiate(this.attrLab)
            nn.active = true
            nn.position = v3(150-  ((7-iterator[1].toString().length)*15),0,0)
            this.attrNode.addChild(nn)
            console.log(iterator[0], js.formatStr("%s：%s", iterator[0], iterator[1]))


            nn.getComponent(Label).string = js.formatStr("%s %s：%s ", iterator[0], tab.AttrType[iterator[0]] || 0, iterator[1])
        }

        this.triggerNode.destroyAllChildren()

        this.skillGroupNode.destroyAllChildren()
        let skillGroups = [role.info.normalGroup, role.info.weaponeGroup]
        for (let index = 0; index < skillGroups.length; index++) {
            const v = skillGroups[index];
            if (v == null) {
                continue
            }
            let nn = instantiate(this.skillGroupItem)
            nn.active = true
            nn.position = v3()
            this.skillGroupNode.addChild(nn)
            nn.getChildByName("Label").getComponent(Label).string = "技能组ID:" + v.Id

            let nn1 = instantiate(this.skillLayoutItem)
            nn1.active = true
            nn1.position = v3()
            nn.getChildByName("skillLayoutItem").addChild(nn1)
            this.createSkill(nn1, v.skills)
        }

        //携带的技能
        this.createSkill(this.takeSkillNode, role.info.takeSkills)

      
    }

    createSkill(layout: Node, skills: SkillTab[]) {
        layout.destroyAllChildren()
        for (let index = 0; index < skills.length; index++) {
            const v = skills[index];
            let nn = instantiate(this.skillItem)
            nn.active = true
            nn.position = v3()
            layout.addChild(nn)
            nn.getChildByName("Label").getComponent(Label).string = "ID:" + v.Id
            this.addtTrigger(v)
        }
    }

    addtTrigger(skill:SkillTab){
        for (let index = 0; index < skill.triggerTabs.length; index++) {
            const v = skill.triggerTabs[index];
            let nn = instantiate(this.skillItem)
            nn.active = true
            nn.position = v3()
            this.triggerNode.addChild(nn)
            nn.getChildByName("Label").getComponent(Label).string = "ID:" + v.Id
        }
    }

    globleAttr(layout: Node, attrs: tab.AttrType[]) {
        layout.destroyAllChildren()
        for (let index = 0; index < attrs.length; index++) {

            let nn = instantiate(this.skillItem)
            nn.active = true
            nn.position = v3()
            layout.addChild(nn)

            let key = attrs[index]
            let value = this.getRoleAttr(key)
            nn.getChildByName("Label").getComponent(Label).string = js.formatStr("%s：%s", LangMgr.getLab(tab.AttrType[key]), value)

            // console.log(js.formatStr("%s：%s", iterator[0], iterator[1]))
        }
    }

    getRoleAttr(attr: tab.AttrType) {
        let value = 0
        PlayerControl.ins.roles.forEach((role) => {
            value += role.info.attrData.getAttr(attr)
        })
        return value
    }
}
