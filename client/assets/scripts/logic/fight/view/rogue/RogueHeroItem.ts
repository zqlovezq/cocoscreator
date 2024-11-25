import { _decorator, Component, Label, Node, sp, Sprite } from "cc";
import { RogueInfo } from "./RogueInfo";
import { tab } from "../../../../Table/table_gen";
import { LoadResAsync, ResMgr } from "../../../mgr/ResMgr";
import { LangMgr } from "../../../mgr/LangMgr";
import { RogueBaseItem } from "./RogueBaseItem";
import { PlayerControl } from "../../base/obj/role/role/PlayerControl";

const { ccclass, property } = _decorator;


@ccclass('RogueHeroItem')
export class RogueHeroItem extends RogueBaseItem {
    @property(sp.Skeleton)
    hero_spine: sp.Skeleton = null

    @property(Sprite)
    pro_img: Sprite = null

    @property(Node)
    pronames: Node = null

    @property(Label)
    heroname_txt: Label = null
    @property(Label)
    speciality_txt:Label = null;


    setData(info: RogueInfo) {
        super.setData(info)

        let role = PlayerControl.ins.getRole(this.rogueInfo.heroItemId)

        if (role) {
            let upLv = role.info.attrData.getAttr(tab.AttrType.AttrType_RogueLevel)
            if (upLv) {
                this.rogueInfo.isHeroLevel = true
                this.rogueInfo.level = this.rogueInfo.rogueTab.Level + upLv
                role.info.attrData.clearAttrByType(tab.AttrType.AttrType_RogueLevel)
            }
        }

        let heroTab = tab.getData().HeroTableById.getValue(info.heroItemId)

        let itemTab = tab.getData().ItemTableById.getValue(info.heroItemId);
        this.heroname_txt.string = LangMgr.getLab(itemTab.Name)
        this.speciality_txt.string = LangMgr.getLab(heroTab.Speciality);

        let heroClassTab = tab.getData().HeroClassTableByHeroClass.getValue(heroTab.Class)
        for (let index = 0; index < this.pronames.children.length; index++) {
            const element = this.pronames.children[index];
            element.active = false
        }
        const proNode = this.pronames.getChildByName("pro" + heroTab.Class)
        proNode.active = true;
        this.pro_img.setTexture(heroClassTab.Icon);

        this.setAnimId(heroTab.Idle)
    }

    async setAnimId(animId: number) {
        let tempTab: tab.AnimationTable = tab.getData().AnimationTableById.getValue(animId)
        let spData = await LoadResAsync(tempTab.Path, sp.SkeletonData)
        this.hero_spine.skeletonData = spData
        this.hero_spine.setAnimation(0, tempTab.AnimationName, true)
    }


}