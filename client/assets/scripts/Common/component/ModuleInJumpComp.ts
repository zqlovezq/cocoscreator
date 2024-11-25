import { Button, CCInteger, Component, Enum, Node, Toggle, _decorator } from "cc";
import { tab } from "../../Table/table_gen";
import RedEventComp from "./RedEventComp";
import { ModuleUtil } from "../ModuleUtil";
import { UIMgr } from "../../logic/mgr/UIMgr";
import { OpenFunctionMgr } from "./OpenFunctionMgr";
import { EventMgr } from "../../logic/mgr/EventMgr";
import { LocalEvent } from "../../logic/define/LocalEvent";
import { RoleData } from "../../logic/model/role/RoleData";
import { GuideController } from "../../logic/guide/GuideController";

const { ccclass, property } = _decorator;

/**
 * 功能入口 解锁、跳转
 */
@ccclass
export default class ModuleInJumpComp extends Component {
    @property({
        type: Enum(tab.Module),
        tooltip: "功能枚举"
    })
    opName: tab.Module = tab.Module.Module_Unknown;

    @property({
        type: Enum(tab.OpenFunctionName),
        tooltip: "功能枚举"
    })
    openFuncName:tab.OpenFunctionName = tab.OpenFunctionName.OpenFunctionName_None

    @property(Node)
    lockNode: Node = null

    @property({ type: 0, displayName: '点击是否跳转界面' })
    isJump: boolean = false;
    @property({type:0,displayName:"点击跳转界面的页签"})
    jumpTab:number = 0;
    @property([CCInteger])
    jumpDeepTab:Number[] = [];

    @property({
        type: Enum(tab.OpenFunctionName),
        displayName: "额外的显示条件"
    })
    extraOpenFunc:tab.OpenFunctionName = tab.OpenFunctionName.OpenFunctionName_None

    onLoad() {
        EventMgr.onLocal(LocalEvent.checkOpenFuncPop, this.checkVisible, this);
         this.checkVisible()
        if (this.isJump){
            let btn = this.node.getComponent(Button)
            if (btn.clickEvents.length == 0){
                this.node.on(Node.EventType.TOUCH_END, this.onClick, this)
            }
        }
        else{
            if(this.node.getComponent(Toggle)){
                const toggle = this.node.getComponent(Toggle);
                if(toggle.clickEvents.length===0){
                    this.node.on(Node.EventType.TOUCH_END, this.showTips, this)
                }
            }
        }
    }

    checkVisible() {
        let isVisible = OpenFunctionMgr.ins.checkFunctionIsOpen(this.openFuncName,this.extraOpenFunc)
        if (this.lockNode) {
            this.node.active = true
            this.lockNode.active = !isVisible
        } else {
            this.node.active = isVisible
        }
    }
    showTips():boolean{
        const isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(this.openFuncName,this.extraOpenFunc);
        if (!isOpen) {
            OpenFunctionMgr.ins.showFunctionTips(this.openFuncName);
        }
        return isOpen
    }
    onClick() {
        const isOpen = this.showTips();
        if (isOpen&&this.isJump && ModuleUtil.checkIsOpen(this.opName)) {
            const isGuideBlock = this.isGuideBlockClick();
            if(isGuideBlock){
                console.log("cocos 新手引导阶段点击屏蔽");
                return;
            }
            if(this.jumpTab>0){
                UIMgr.ins.jumpLayer(this.opName,this.jumpTab,null,this.openFuncName);
            }else{
                if(this.jumpDeepTab.length>0){
                    UIMgr.ins.jumpLayer(this.opName,0,null,this.openFuncName,this.jumpDeepTab);
                }else{
                    UIMgr.ins.jumpLayer(this.opName,0,null,this.openFuncName);
                }
            }
        }
    }
    protected onDestroy(): void {
        EventMgr.unTarget(this)
    }
    // 是否引导屏蔽按钮
    isGuideBlockClick(){
        const isGuiding = !RoleData.ins.IsGuideFinished();
        const isBlock = GuideController.ins.blockButton;
        return isGuiding&&isBlock
    }
}

