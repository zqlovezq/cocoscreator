import { _decorator } from "cc";
import { IClear } from "../../../framework/base/IAbs";
import { HeroInfo } from "../../model/hero/HeroInfo";
import { proto } from "client_protocol";
import { tab } from "../../../Table/table_gen";
import { Func } from "../../utils/Func";

const { ccclass, property } = _decorator;

/** 战斗角色数据 */
export class HeroFightInfo {
    //-----------服务器字段-------------
    id: number
    itemId: number
    star: number
    noFightLevel: number
    attrList: proto.FightAttrData[] = []
    skillList: number[] = []

    //-----------客户端字段-------------
    level: number = 0;//战斗内等级
    intoIndex: number = 0

    setServerData(dd: proto.IHeroFightData) {
        this.id = dd.id
        this.itemId = dd.itemId
        this.noFightLevel = dd.level
        this.star = dd.star
        this.attrList = dd.attrList as proto.FightAttrData[]
        this.skillList = [].concat(dd.skillList)

        // let heroTab = tab.getData().HeroTableById.getValue(this.itemId)
        // let heroStarTab: tab.HeroStarUpTable
        // //添加表内的被动技能
        // for (let index = heroTab.DefaultStar; index <= this.star; index++) {
        //     heroStarTab = Func.forBy2(tab.getData().HeroStarUpTable, "HeroId", this.itemId, "HeroStar", index) as tab.HeroStarUpTable
        //     if (heroStarTab) {
        //         for (let j = 0; j < heroStarTab.SkillId.length; j++) {
        //             if (this.skillList.indexOf(heroStarTab.SkillId[j]) == -1) {
        //                 this.skillList.push(heroStarTab.SkillId[j])
        //             }
        //         }
        //     }
        // }

        this.level = 0
        this.intoIndex = 0
    }


    isIntoFight() {
        return this.intoIndex > 0
    }
}