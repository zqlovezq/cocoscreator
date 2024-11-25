import { _decorator } from "cc";
import { tab } from "../../../Table/table_gen";
import { BuffTab } from "./powerTab/BuffTab";
import { BulletTab } from "./powerTab/BulletTab";
import { EffectTab } from "./powerTab/EffectTab";
import { SkillGroupTab } from "./powerTab/SkillGroupTab";
import { SkillTab } from "./powerTab/SkillTab";
import { SkillTriggerTab } from "./powerTab/SkillTriggerTab";

const { ccclass, property } = _decorator;

/**技能增强配置 */
@ccclass('PowerTabFactory')
export class PowerTabFactory {

    static createType(type: tab.PowerType) {
        switch (type) {
            case tab.PowerType.PowerType_SkillGroupTable:
                return new SkillGroupTab()
            case tab.PowerType.PowerType_SkillTable:
                return new SkillTab()
            case tab.PowerType.PowerType_BuffTable:
                return new BuffTab()
            case tab.PowerType.PowerType_EffectTable:
                return new EffectTab()
            case tab.PowerType.PowerType_BulletTable:
                return new BulletTab()
            case tab.PowerType.PowerType_TriggerTable:
                return new SkillTriggerTab()
        }
    }

}