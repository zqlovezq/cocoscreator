import { Enum, _decorator } from "cc";
import { RedDotType } from "../../logic/red/RedDotType";

const { ccclass, property } = _decorator;


/**
 * 红点组件
 */
@ccclass("RedEventComp")
export default class RedEventComp {
    @property({
        type: Enum(RedDotType),
        tooltip: "红点枚举"
    })
    event: RedDotType = RedDotType.empty;

    @property({ tooltip: "子类型,填完通知程序" })
    child: string = "all"
    @property({ tooltip: "子类型,填完通知程序" })
    child1?: string = "all"

}

