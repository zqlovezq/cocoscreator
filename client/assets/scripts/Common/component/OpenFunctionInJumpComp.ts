import { Component, Enum, Node, _decorator } from "cc";
import { tab } from "../../Table/table_gen";
import RedEventComp from "./RedEventComp";

const { ccclass, property } = _decorator;

/**
 * 功能入口 解锁、跳转
 */
@ccclass
export default class OpenFunctionInJumpComp extends Component {
    // @property({
    //     type: Enum(tab.OpenFunctionName),
    //     tooltip: "功能枚举"
    // })
    // opName: tab.OpenFunctionName = tab.OpenFunctionName.OpenFunctionName_ErrorUse;

    @property(Node)
    lockNode: Node = null

    @property({ type: 0, displayName: '点击是否跳转界面' })
    isJump: boolean = false;

    onLoad() {
        this.checkVisible()
    }

    checkVisible() {
        // let isVisible = checkFunctionIsOpen(this.opName)
        // if (this.lockNode) {
        //     this.node.active = true
        //     this.lockNode.active = !isVisible
        // } else {
        //     this.node.active = isVisible
        // }
    }

    onClick() {
        // if (!Role.Instance.IsGuideFinished() && this.opName === tab.OpenFunctionName.OpenFunctionName_EndingMaster) {
        //     return;
        // }
        // if (this.isJump && checkFunctionIsOpen(this.opName)) {
        //     Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosePopupLayer) /* 关闭Popup */
        //     UiMgr.ins.jumpLayer(this.opName)
        // }
    }
}

