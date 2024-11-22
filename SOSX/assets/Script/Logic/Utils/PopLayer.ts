import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import MainScene from "../Main/MainScene";
import { LoadResAsync } from "./GameUtils";
import PopBase from "./PopBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PopLayer extends PopBase {
    @property({type:0, displayName:'点击空白处不关闭 0:关闭 1:不关闭'})
    notCloseWhenClickEmpty:number = 0

    private mClosedCallBack: Function = null;

    private mGrayNode: cc.Node = null;
    private showAction: boolean = true;
    private showGrayMas: boolean = true;
    private murl: string = "";

    set ShowAction(b: boolean) { 
        this.showAction = b; 
    }

    hide(){
        this.hideNotifyLocalMsg();
        if (this.mGrayNode){
            this.mGrayNode.destroy();
        }

        if(this.showAction) {
            this.node.runAction(cc.sequence(
                cc.scaleTo(0.06, 1.1), 
                cc.scaleTo(0.03, 0.5), 
                cc.callFunc(() => {
                    this.destroyNode()
                }, this)
            ));
        } else {
            this.destroyNode()
        }
    }

    destroyNode() {
        this.node.destroy();
        if (this.isQueue){
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_QueueUI_deleteUI)
        }
    }

    hideNotifyLocalMsg(){
        //需要用到子类重写
    }

    setVisible(visible: boolean) {
        if (visible && !this.node.active){
            this.node.active = visible;
        } else if (!visible && this.node.active) {
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedBoxTips);
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosedItemTips);
            this.hide();
        }
    }

    onLoad() {

    }

    public onClickClosed(){
        this.setVisible(false);
    }
    
    show(url: string, isBlockInputEvents: boolean = true, showMask: boolean=true) {
        let realThis = this;
        this.murl = url;

        console.log(url,isBlockInputEvents,showMask)

        this.showAction ? this.node.runAction(
            cc.sequence(
                cc.scaleTo(0.12, 1.1),
                cc.scaleTo(0.06, 1.),
                cc.callFunc(() =>{
                    realThis.addMask(showMask);
                })))
            : this.addMask(showMask);
        if (isBlockInputEvents){
            this.addComponent(cc.BlockInputEvents); // 防止点穿弹出层
        }
        if(this.notCloseWhenClickEmpty == 0){
            this.setClickHide()
        }
    }

    reshowAction(){
        this.node.runAction(
            cc.sequence(
                cc.scaleTo(0.12, 1.1),
                cc.scaleTo(0.06, 1.)
            ))
    }

    protected addMask(showMask : boolean = true){
        if (this.showGrayMas && this.node.isValid){
            this.mGrayNode = new cc.Node();
            let sprite = this.mGrayNode.addComponent(cc.Sprite);
            this.node.addChild(sprite.node);
            let self = this;
            sprite.node.zIndex = -1; // 提到外边，防止层级不对

            LoadResAsync("Chess/UI/Common/bg_1", cc.SpriteFrame).then((frame: cc.SpriteFrame) =>{
                if(cc.isValid(sprite.node) && cc.isValid(this.node)) {
                    sprite.spriteFrame = frame;
                    sprite.node.zIndex = -1;
                    sprite.node.color = cc.Color.BLACK;
                    sprite.node.opacity = showMask ? 153 : 0; /* 提供完全透明的Mask */
                    // let size = new cc.Size(cc.winSize.width * 2, cc.winSize.height * 2);
                    sprite.node.setContentSize(cc.view.getDesignResolutionSize());
                   // sprite.addComponent(cc.BlockInputEvents);
                    self.showFinish();
                }
            });
        }
    }

    setGrayVisible(bshow: boolean){
        this.showGrayMas = bshow;
        this.mGrayNode.active = bshow;
    }

    onDestroy() {
        if (this.mClosedCallBack && typeof this.mClosedCallBack == 'function') {
            this.mClosedCallBack();
            this.mClosedCallBack = null;
        }
        Net.pushLoaclMessage(LOCAL_MESSAGE.DestroyPopLayer, this.node.name)
    }

    setCloseCallBack(closeFunc: Function){
        this.mClosedCallBack = closeFunc;
    }

    // 完成show动画之后的回调，子类重写
    showFinish(){

    }

    /*  */
    setClickHide(){
        let slf = this;
        this.node.on(cc.Node.EventType.TOUCH_END, function (){
            if (this.mClosedCallBack && typeof this.mClosedCallBack == 'function'){
                this.mClosedCallBack();
                this.mClosedCallBack = null;
            }
            slf.hide();
        }, this);
    }

    /* 是否播放弹窗动画,默认true */
    IsShowAction(show: boolean = true){
        this.showAction = show;
    }
}

