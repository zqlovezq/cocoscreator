/*
 * @Descripttion: 
 */

import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import { ShowTips } from "../Utils/GameUtils";
import FightEmoji from "./FightEmoji";
import ChessFightScene from "./ChessFightScene";

const {ccclass, property} = cc._decorator;
const kEmotionGroupMaxNum = 8;

@ccclass
export default class FightEmojiSelector extends cc.Component {

    @property(cc.Prefab)
    preFightEmoji:cc.Prefab = null;
    
    @property(cc.Node)
    emojiContainer:cc.Node = null;

    @property(cc.Node)
    root:cc.Node = null;

    @property(cc.Button)
    btn_chan: cc.Button = null;

    @property(cc.Button)
    btnDisable: cc.Button = null;

    @property(cc.Button)
    btn_pre: cc.Button = null;

    @property(cc.Button)
    btn_next: cc.Button = null;

    private _callback: Function = null;
    private _bSilent: boolean = false;
    private _bVisibleSilent: boolean = true;
    private _total_pages: number = kZeroNumber;
    private _cur_page: number = kOneNumber;
    private _fight_scene: ChessFightScene = null;

    onLoad () {

        this.btn_chan.node.on("click", this.onClickSilent,   this);
        this.btnDisable.node.on("click", this.onClickSilent, this);
        this.btn_pre.node.on("click", this.onClickPre,       this);
        this.btn_next.node.on("click", this.onClickNext,     this);

        this.loadIsSilent();

        this.node.on(cc.Node.EventType.TOUCH_START, (event:cc.Event.EventTouch)=>{
            if(!this.root.getBoundingBoxToWorld().contains(event.getStartLocation())) {
                this.node.active = false;
            }
        }, this)

        //加载表情
        this.loadEmotion();

        //监听关闭页面消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyCloseEmotionSelector, (param: any)=>{
            this.node.active = false;
        }, this);

        this._cur_page = kOneNumber;
        this._total_pages = Math.ceil(Role.Instance.RoleData.emotions.length / kEmotionGroupMaxNum);
        this.btn_pre.node.active = false;
        this.btn_next.node.active = this._total_pages > kOneNumber;
    }

    // 设置战斗场景
    seFightScene(fight_scene:ChessFightScene) {
        this._fight_scene = fight_scene
    }

    onClickDisable() {
        this.node.active = false;
    }

    onClickEnable() {
        this.node.active = false;
    }

    public setEmotionCallback(cb: Function){
        this._callback = cb;
    }

    private saveIsSilent(){
        if(!this._bVisibleSilent){return;}
        let key = `${Role.Instance.RoleData.id}_silent`;
        cc.sys.localStorage.setItem(key, this._bSilent);
    }

    private loadIsSilent(){
        if(!this._bVisibleSilent){return;}

        let key       = `${Role.Instance.RoleData.id}_silent`;
        let localData = cc.sys.localStorage.getItem(key);
        this._bSilent = localData === "true";
        this.setSilentBtnVisible();
    }

    private setSilentBtnVisible(){
        this.btnDisable.node.active = this._bSilent;
        this.btn_chan.node.active   = !this._bSilent;
    }
    
    private onClickSilent(){
        this._bSilent = !this._bSilent;
        let tipsStr   = this._bSilent ? "SilentEmotion" : "UnlockSilentEmotion";
        this.saveIsSilent();
        this.setSilentBtnVisible();
        ShowTips(tipsStr);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyUpdateSilentState, this._bSilent);
    }

    public setSilentVisible(bVisible: boolean){
        this._bVisibleSilent        = bVisible;
        this.btnDisable.node.active = bVisible;
        this.btn_chan.node.active   = bVisible;
    }

    /* 加载表情列表
     */
    private async loadEmotion(){
        await this.execute(this.generatorEmotion(), kOneNumber);
    }

	/* 表情节点生成器
     */
    private* generatorEmotion(){
        let emotionList = Role.Instance.RoleData.emotions;
        let createNum = kZeroNumber;
        for(    let idx = (this._cur_page - kOneNumber) * kEmotionGroupMaxNum; 
                idx < emotionList.length && createNum < kEmotionGroupMaxNum; 
                idx++, createNum++) {
            yield this.createEmotionPfb(emotionList[idx]);
        }
    }

    /* 创建表情节点
     */
    private createEmotionPfb(emotionID: number){
        let emoji = cc.instantiate(this.preFightEmoji).getComponent(FightEmoji);
        if(emoji) {
            emoji.setData(emotionID, this._callback ? this._callback : id =>{
                this.node.active = false;
                if(this._fight_scene) {
                    this._fight_scene.PlayEmoji(id, true);
                }
            });

            this.emojiContainer.addChild(emoji.node);
        }
    }

    /* 创建emotion节点的执行函数
     */
    private execute(generator: Generator, duration: number){
        return new Promise<void>(resolve => {
            let gen = generator;
            // 创建执行函数
            let func = () => {
                // 执行之前，先记录开始时间戳
                let startTime = new Date().getTime();
                // 然后一直从 Generator 中获取已经拆分好的代码段出来执行
                for (let iter = gen.next(); ; iter = gen.next()) {
                    // 判断是否已经执行完所有 Generator 的小代码段
                    // 如果是的话，那么就表示任务完成
                    if (iter == null || iter.done) {
                        resolve();
                        return;
                    }
    
                    // 每执行完一段小代码段，都检查一下是否
                    // 已经超过我们分配给本帧，这些小代码端的最大可执行时间
                    if (new Date().getTime() - startTime > duration) {
                        // 如果超过了，那么本帧就不在执行，开定时器，让下一帧再执行
                        this.scheduleOnce(() => {
                            func();
                        });
                        return;
                    }
                }
            };
    
            func(); // 运行执行函数
        });
    }

    /* 切换表情页
     */
    private switchEmotionPage(){
        this.btn_pre.node.active = this._cur_page > kOneNumber;
        this.btn_next.node.active = this._cur_page < this._total_pages && this._total_pages > kOneNumber;
        this.emojiContainer.removeAllChildren();
        this.loadEmotion();
    }

    private onClickPre(){
        if(this._cur_page > kOneNumber){
            this._cur_page--;
            this.switchEmotionPage();
        }
    }

    private onClickNext(){
        if(this._cur_page < this._total_pages){
            this._cur_page++;
            this.switchEmotionPage();
        }
    }
}
