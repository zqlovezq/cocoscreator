import { _decorator, Component } from "cc";
import { tab } from "../../../../Table/table_gen";
import { SkillPowers } from "../../power/SkillPowers";
import { SkillTab } from "../../power/powerTab/SkillTab";
import { SkillGroupTab } from "../../power/powerTab/SkillGroupTab";
import { RareBookData } from "../../../model/rareBook/RareBookData";

const { ccclass, property } = _decorator;
const Math_RATIO = 10000;

@ccclass('RogueInfo')
export class RogueInfo {
    Id: number
    skillPowers: SkillPowers //增强存储



    private _config: tab.RogueTable

    /** 放回次数 */
    backCount: number = 0
    heroItemId: number = 0
    /** 是否升级 ToDo英雄通过属性直接升级 */
    isHeroLevel: boolean = false
    level: number = 0

    skills: SkillTab[] = []
    skillGroup: SkillGroupTab = null
    constructor(itemId: number) {
        this.Id = itemId
        this.rogueTab
    }

    get rogueTab() {
        if (this._config == null) {
            this._config = tab.getData().RogueTableById.getValue(this.Id)
            if (this._config == null) {
                console.error("未找到rogueid", this.Id)
            }
            if (this.heroItemId != 0) {
                this.level = this._config.Level
            }
        }
        return this._config
    }

    addCount() {
        this.backCount += 1
    }

    ifFullId(){
        return this.Id == tab.getData().GetKeyValue_ConfigTable().RogueFullBackupOption
    }

    isRemove() {
        if (this.rogueTab.Backlimit == 0){
            return this.backCount > this.rogueTab.Backlimit
        }
        return this.backCount >= this.rogueTab.Backlimit
    }

    setParentPowers(powers: SkillPowers) {
        this.skillPowers = powers
        if (powers) {
            if (this.rogueTab.Skill) {
                for (let index = 0; index < this.rogueTab.Skill.length; index++) {
                    const element = this.rogueTab.Skill[index];
                    this.skills.push(this.skillPowers.createTypeAnyId(tab.PowerType.PowerType_SkillTable, this.rogueTab.Skill[index]) as SkillTab)
                }
            }
            if (this.rogueTab.BookId) {
                let bookInfo = RareBookData.ins.getBookInfoByItemId(this.rogueTab.BookId)
                if (bookInfo.bookStarTable.SkillId) {
                    for (let index = 0; index < bookInfo.bookStarTable.SkillId.length; index++) {
                        this.skills.push(this.skillPowers.createTypeAnyId(tab.PowerType.PowerType_SkillTable, bookInfo.bookStarTable.SkillId[index]) as SkillTab)
                    }
                }
            }


            if (this.rogueTab.SkillGroup) {
                this.skillGroup = this.skillPowers.createTypeAnyId(tab.PowerType.PowerType_SkillGroupTable, this.rogueTab.SkillGroup) as SkillGroupTab
            }
        }
    }
}