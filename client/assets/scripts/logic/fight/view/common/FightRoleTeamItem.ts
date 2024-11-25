import { _decorator, Button, Color, Component, Label, Node, Prefab, Sprite } from "cc";
import { tab } from "../../../../Table/table_gen";
import { HeroFightInfo } from "../../data/HeroFightInfo";
import { EventMgr } from "../../../mgr/EventMgr";
import { FightEvent } from "../../define/FightEvent";
import { UIMgr } from "../../../mgr/UIMgr";
import { ViewName } from "../../../define/ViewDefine";
import { HeroInfo } from "../../../model/hero/HeroInfo";
import { HeroDataControl } from "../../../model/hero/herobag/HeroDataControl";
import { HeroStar } from "../../../model/hero/HeroStar";

const { ccclass, property } = _decorator;

@ccclass('FightRoleTeamItem')
export class FightRoleTeamItem extends Component {
    @property(Node)
    baseNode: Node = null
    @property(Node)
    blackNode: Node = null

    @property(Sprite)
    qualityImg: Sprite = null;
    @property(Sprite)
    iconImg: Sprite = null;
    @property(Label)
    lv_txt: Label = null;
    @property(Sprite)
    sp_vocation: Sprite = null;//职业

    @property(Node)
    leader: Node = null;//职业

    @property(Button)
    btn: Button = null;
    @property(Sprite)
    starbgImg: Sprite = null;

    @property(HeroStar)
    heroStar: HeroStar = null;

    info: HeroFightInfo = null
    protected onLoad(): void {
        EventMgr.onFight(FightEvent.Role_Level_Up, this.onLevelUp, this)

    }

    onLevelUp(heroItemId: number, lastLv: number, lv: number) {
        if (this.info == null) {
            return
        }

        if (this.info.itemId != heroItemId) {
            return
        }
        this.lv_txt.string = this.info.level.toString()
    }

    protected onDestroy(): void {
        EventMgr.unTarget(this)
    }

    callback: Function
    setCallback(fb: Function) {
        this.callback = fb
    }

    setData(info: HeroFightInfo, isTouch = false) {
        this.info = info
        this.btn.enabled = isTouch;
        if (info == null) {
            this.blackNode.active = true
            this.baseNode.active = !this.blackNode.active
            return
        }
        this.blackNode.active = false
        this.baseNode.active = !this.blackNode.active


        let itemTab = tab.getData().ItemTableById.getValue(info.itemId)
        let heroTab = tab.getData().HeroTableById.getValue(info.itemId)

        let heroClassTab = tab.getData().HeroClassTableByHeroClass.getValue(heroTab.Class)

        this.sp_vocation.setTexture(heroClassTab.Icon);

        this.iconImg.setTexture(itemTab.Icon)
        // this.qualityImg.setTexture("textrue/quality/qualityBg_" + itemTab.Quality);

        this.lv_txt.string = info.level.toString()
        this.leader.active = info.intoIndex == 1
        let itemQualityTab = HeroDataControl.ins.getItemQualityTableByStar(info.star);
        this.starbgImg.setTexture(itemQualityTab.HeroStarBg);
        this.qualityImg.setTexture(itemQualityTab.QualityFrame)
        this.heroStar.showStar(info.star);
    }
    onClickItem() {
        if (this.callback) {
            return this.callback(this.info)
            return
        }
        let heroInfo = new HeroInfo();
        heroInfo.id = this.info.id;
        heroInfo.itemId = this.info.itemId
        heroInfo.level = this.info.level;
        heroInfo.star = this.info.star;
        UIMgr.ins.show({
            viewName: ViewName.HeroSkillPop, data: {
                type: tab.HeroStarDescType.HeroStarDescType_First,
                heroInfo: heroInfo
            }, zIndex: 300
        })
    }
}