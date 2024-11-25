import { _decorator, Component, Label, Node, RichText, sp, Sprite } from "cc";
import { RogueInfo } from "./RogueInfo";
import { tab } from "../../../../Table/table_gen";
import { ResMgr } from "../../../mgr/ResMgr";
import { LangMgr } from "../../../mgr/LangMgr";
import { RoguePop } from "./RoguePop";
import { RogueControl } from "./RogueControl";

const { ccclass, property } = _decorator;


@ccclass('RogueWeaponHeroItem')
export class RogueWeaponHeroItem extends Component {

    @property(Label)
    heroname_txt: Label = null

    @property(Label)
    lvv_txt: Label = null

    @property(Label)
    next_lv_txt: Label = null

    @property(RichText)
    descRich: RichText = null

    @property(Sprite)
    head: Sprite = null

    @property(Node)
    probg_node: Node = null
    @property(Node)
    lv_layout: Node = null;

    @property(Node)
    awaken_node: Node = null;

    owner: RoguePop
    rogueInfo: RogueInfo

    setData(info: RogueInfo) {
        this.rogueInfo = info

        let itemTab = tab.getData().ItemTableById.getValue(info.heroItemId);
        this.heroname_txt.string = LangMgr.getLab(itemTab.Name) + LangMgr.getCombineString("ui_heroresonancepop_3", [info.rogueTab.Level]);
        this.head.setTexture(itemTab.Icon)

        this.lvv_txt.string = (info.rogueTab.Level - 1).toString()
        this.next_lv_txt.string = info.rogueTab.Level.toString()
        let heroTab = tab.getData().HeroTableById.getValue(info.heroItemId)
        for (let index = 0; index < this.probg_node.children.length; index++) {
            const element = this.probg_node.children[index];
            element.active = false
        }
        this.probg_node.getChildByName("pro" + heroTab.Class).active = true
        this.descRich.string = LangMgr.getLab(info.rogueTab.Description)

        let heroClassTable = tab.getData().HeroClassTableByHeroClass.getValue(heroTab.Class);
        const maxLevel = this.getMaxSkillLevel(info)
        for (let i = 0; i < this.lv_layout.children.length; i++) {
            const lvNode = this.lv_layout.children[i];
            const index = i + 1;
            const pro_img = lvNode.getChildByName("pro_img").getComponent(Sprite);
            const select_img = lvNode.getChildByName("select_img");
            const select_pro_img = select_img.getChildByName("pro_img").getComponent(Sprite);
            const bg = lvNode.getChildByName("bg");
            select_img.active = index === info.rogueTab.Level;
            bg.active = index <= info.rogueTab.Level&&!select_img.active;
            pro_img.setTexture(heroClassTable.Icon);
            select_pro_img.setTexture(heroClassTable.Icon);
            lvNode.active = index<=maxLevel;
        }

        this.awaken_node.active = info.rogueTab.Level >= 6
    }
    // 获取最大重数
    getMaxSkillLevel(rogueInfo: RogueInfo) :number{
        let level = 0;
        const validList = RogueControl.ins.validList;
        const rogueInfos = [rogueInfo];
        for (let i = 0; i < validList.length; i++) {
            const _rogueInfo = validList[i];
            if (_rogueInfo.Id === rogueInfo.Id) {
                continue;
            }
            if (_rogueInfo.heroItemId === rogueInfo.heroItemId) {
                rogueInfos.push(_rogueInfo);
            }
        }
        for(let k=0;k<rogueInfos.length;k++){
            const rogueInfo = rogueInfos[k];
            if(rogueInfo.rogueTab.Level>level){
                level = rogueInfo.rogueTab.Level;
            }
        }
        return level
    }
}