/*
 * @Descripttion: 微信排行榜试图模块
 */

import { kNegativeOneNumber, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import Wx from "./WxDeclare";

const {ccclass, property} = cc._decorator;

@ccclass
export default class WxRankView extends cc.Component {

    @property(cc.Button)
    btn_pre: cc.Button = null;

    @property(cc.Button)
    btn_next: cc.Button = null;
    
    @property({displayName: "用于表示当前子域需要绘制哪个view"})
    view_name: string = "";
    
    @property({displayName: "用于获取哪个排行榜数据"})
    key: string = "";

    private spr_view: cc.Sprite = null;
    private texture: cc.Texture2D = null;

    onLoad () {
        this.texture = new cc.Texture2D();
        this.spr_view = this.getComponent(cc.Sprite);
        if(!this.spr_view){
            this.spr_view = this.addComponent(cc.Sprite);
        }

        this.btn_next.node.on("click", this.pageDown, this);
        this.btn_pre.node.on("click",  this.pageUp,   this);
    }

    onEnable(){
        if(!Wx.isWeChatEnv()){
            return;
        }

        if(this.view_name.length <= kZeroNumber){
            console.error("SubContextView 未设置子域viewName和key，无法显示子域");
            return;
        }

        const shareCanvas  = Wx.getShareCanvas();
        shareCanvas.width  = this.node.width;
        shareCanvas.height = this.node.height;
        Wx.sendMsgToContext("action_init_context", {view: this.view_name, bound: this.node.getContentSize()});
        //this.updateView();
        //this.setPage(kZeroNumber);
    }

    lateUpdate(){
        this.render();
    }

    public initData(eventKey: string){
        this.key = eventKey;
        this.updateView();
        this.setPage(kZeroNumber);
    }

    public updateView(){
        Wx.sendMsgToContext(this.view_name, {key: this.key});
    }

    public setPage(page: number){
        Wx.sendMsgToContext("action_paging", {page: page, view: this.view_name});
    }

    public pageUp(){
        Wx.sendMsgToContext("action_paging", {offset: kNegativeOneNumber, view: this.view_name});
    }

    public pageDown(){
        Wx.sendMsgToContext("action_paging", {offset: kOneNumber, view: this.view_name});
    }

    private render() {
        if (!Wx.isWeChatEnv()) {
            return;
        }
        
        const shareCanvas = Wx.getShareCanvas();
        this.texture.initWithElement(shareCanvas);

        if (!this.spr_view.spriteFrame) {
            this.spr_view.spriteFrame = new cc.SpriteFrame(this.texture);
        } else {
            this.spr_view.spriteFrame.setTexture(this.texture);
        }
    }
}
