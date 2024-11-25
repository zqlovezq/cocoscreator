import { _decorator, Component } from "cc";
import { RoleInfo } from "../obj/role/role/RoleInfo";
import { SkillGroupTab } from "../../power/powerTab/SkillGroupTab";
import { CDTime } from "../cd/CDTime";
import { tab } from "../../../../Table/table_gen";
import { FightMacro } from "../../define/FightDefine";
import { EventMgr } from "../../../mgr/EventMgr";
import { FightEvent } from "../../define/FightEvent";


const { ccclass, property } = _decorator;

/** 技能组CD 
*/
@ccclass('SkillGroupCd')
export class SkillGroupCd {

    absInfo: RoleInfo
    skillGroup: SkillGroupTab
    cd: CDTime = new CDTime()
    isCDing: boolean = false
    cdCb: Function
    setAbsInfo(info: RoleInfo) {
        this.absInfo = info
    }


    inCd(skillGroup: SkillGroupTab, cb: Function) {
        this.skillGroup = skillGroup
        this.cdCb = cb
        this.isCDing = true

        this.cd.reset()

        let breathTime = this.absInfo.normalGroup.BreathTime
        let breathTimePercent = ((FightMacro.PERCENT - this.absInfo.attrData.getAttr(tab.AttrType.AttrType_BreathTimePercent)) / FightMacro.PERCENT)
        let breathPer = ((FightMacro.PERCENT + this.absInfo.attrData.getAttr(tab.AttrType.AttrType_BreathPer)) / FightMacro.PERCENT)
        let time = breathTime * breathTimePercent / breathPer

        this.cd.setLiftTime(Math.floor(time), this.onCdEnd.bind(this))
        this.cd.setSpeed(1)
        this.updateProgress(this.getProgress())
    }

    updateFrame(dt: number) {
        this.cd.updateFrame(dt)
        this.updateProgress(this.getProgress())
    }

    onCdEnd() {
        this.updateProgress(1)
        this.isCDing = false
        this.cdCb && this.cdCb()
    }

    getProgress() {
        return this.cd.getProgress()
    }

    updateProgress(per: number) {
        EventMgr.emitFight(FightEvent.Fight_Skill_Cd_Progress, this.skillGroup.configId, per)
    }
}