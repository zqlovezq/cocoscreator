import { _decorator, Button, Color, Component, Label, Node, Prefab, ProgressBar, Sprite } from "cc";
import { ComponentBase } from "../../../../framework/base/ComponentBase";


const { ccclass, property } = _decorator;
/** 战斗倍速按钮*/
@ccclass('FightSpeedBtn')
export class FightSpeedBtn extends ComponentBase {
    @property(Node)
    speedNodeParent: Node = null
    
}