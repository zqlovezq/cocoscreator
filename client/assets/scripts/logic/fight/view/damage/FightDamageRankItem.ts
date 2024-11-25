import { _decorator, Component, js, Label, Node, Prefab, ProgressBar, Sprite } from "cc";
import { PlayerControl } from "../../base/obj/role/role/PlayerControl";
import { ComponentBase } from "../../../../framework/base/ComponentBase";
import { tab } from "../../../../Table/table_gen";
import { HeroFightInfo } from "../../data/HeroFightInfo";
import { LangMgr } from "../../../mgr/LangMgr";
import { FightRootControl } from "../../FightRootControl";
import { HeroDataControl } from "../../../model/hero/herobag/HeroDataControl";

const { ccclass, property } = _decorator;

@ccclass('FightDamageRankItem')
export class FightDamageRankItem extends ComponentBase {
    @property(Sprite)
    qualityImg: Sprite = null;
    @property(Sprite)
    iconImg: Sprite = null;

    @property(Label)
    nameLab: Label = null

    @property(ProgressBar)
    bar: ProgressBar = null

    @property(Label)
    barLab: Label = null

    @property(Label)
    testLab: Label = null

    info: HeroFightInfo = null
    register(): void {

    }
    setData(info: HeroFightInfo) {
        this.info = info

        let itemTab = tab.getData().ItemTableById.getValue(info.itemId)

        this.iconImg.setTexture(itemTab.Icon)

        let itemQualityTab = HeroDataControl.ins.getItemQualityTableByStar(info.star);
        this.qualityImg.setTexture(itemQualityTab.QualityFrame)
        
        this.nameLab.string = LangMgr.getLab(itemTab.Name)

    }

    setDamage(damage: number, total: number,secDamage:number) {
        let pro = Math.floor(damage * 100 / total)
        this.bar.progress = Math.floor(damage * 100 / total) / 100
        this.barLab.string = js.formatStr("%s%", pro.toString())


        if (FightRootControl.ins.damageToggle){
            this.testLab.string = js.formatStr("total:%s sec:%s",damage,secDamage)
        }
    }
}