import { _decorator, Component, Label, Sprite } from "cc";
import { EventMgr } from "../../../mgr/EventMgr";
import { SkillGroupTab } from "../../power/powerTab/SkillGroupTab";
import { FightEvent } from "../../define/FightEvent";

const { ccclass, property } = _decorator;


@ccclass('FightUITeamSkillItem')
export class FightUITeamSkillItem extends Component {
    @property(Sprite)
    spr: Sprite = null

    @property(Label)
    lab: Label = null

    @property(Sprite)
    cdBar: Sprite = null

    skillGroup: SkillGroupTab

    protected onLoad(): void {
        this.cdBar.fillRange = 0
        EventMgr.onFight(FightEvent.Fight_Skill_Cd_Progress, this.on_fight_Fight_Skill_Cd_Progress, this)
        EventMgr.onFight(FightEvent.Skill_Attack_Count_Change, this.on_fight_Skill_Attack_Count_Change, this)
    }

    setSkill(skillGroup: SkillGroupTab) {
        this.skillGroup = skillGroup
        this.spr.setTexture(this.skillGroup.Icon)
        this.updateCount()
        this.node.active = true
    }

    updateCount() {
        this.lab.string = this.skillGroup.getCanAttackCount().toString()
    }

    on_fight_Skill_Attack_Count_Change(skillGroupId: number) {
        if (this.skillGroup && this.skillGroup.configId == skillGroupId) {
            this.updateCount()
        }
    }

    on_fight_Fight_Skill_Cd_Progress(skillGroupId: number, progress: number) {
        if (this.skillGroup && this.skillGroup.configId == skillGroupId) {
            this.cdBar.node.active = progress != 1
            this.cdBar.fillRange = 1 - progress
        }
    }
}