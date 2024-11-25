/*
 * @Date: 2024-10-09 10:34:05
 * @LastEditors: wzq
 * @pragram:漫画控制组件
 * @LastEditTime: 2024-10-25 14:53:57
 */

import { _decorator, Component, director, Animation, instantiate, Node, Prefab, EventTouch } from 'cc';
import { AbsControl } from '../../framework/base/IAbs';
import { LoadResAsync, ResMgr } from '../../logic/mgr/ResMgr';
import { tab } from '../../Table/table_gen';
import { UIMgr } from '../../logic/mgr/UIMgr';
import { BattleMainDataControl } from '../../logic/model/home/battle/BattleMainDataControl';
import { Func } from '../../logic/utils/Func';
import Sound from '../../logic/utils/Sound';
const { ccclass, property } = _decorator;

@ccclass('ComicControl')
export class ComicControl extends AbsControl {
    private comicData: tab.Comic = null;
    private comicNode: Node = null;
    private comicIndex: number = -1;
    private comicAnimState = null;
    private comicCanTouch: boolean = true;
    private clickEnd = false;
    private comicOvercallback: Function = null;
    private waitEnd: any = null;
    private static _instance: ComicControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new ComicControl();
        }
        return this._instance;
    }
    getComicCondition(stageId: number) {
        let id = 0;
        const isPass = BattleMainDataControl.ins.getIsPasstStageByStageId(stageId);
        if(!isPass){
            return id;
        }
        for (let i = 0; i < tab.getData().Comic.length; i++) {
            const comicTab: tab.Comic = tab.getData().Comic[i];
            if (comicTab.ComicUnlock === stageId) {
                id = comicTab.ComicID;
            }
        }
        return id;
    }
    /* 当前场景添加漫画节点 播放完之后再场景中删除 */
    async addComic(id: number, parenNode: Node, cb?: Function) {
        console.log("cocos 当前播放的漫画id=", id);
        this.comicOvercallback = null;
        if (cb) {
            this.comicOvercallback = cb;
        }
        this.comicCanTouch = true;
        this.comicIndex = 0;
        this.comicData = tab.getData().ComicByComicID.getValue(id);
        let pfb: Prefab = await LoadResAsync(this.comicData.prefabName, Prefab);
        const comic_prefab = instantiate(pfb);
        comic_prefab.name = "comic"
        Func.cocosNodeZIndex(comic_prefab, 9999);
        this.comicNode = comic_prefab;
        parenNode.addChild(comic_prefab);
        
        this.comicNode.on(Node.EventType.TOUCH_START, this.touchComic, this);
        this.playAnim();
    }
    touchComic() {
        if (this.clickEnd) {
            const comic_anim_node = this.comicNode.getChildByName(this.comicData.NodeName[this.comicIndex - 1]);
            if (this.comicIndex === this.comicData.NodeName.length) {
                clearTimeout(this.waitEnd);
                this.releaseComic();
            } else {
                clearTimeout(this.waitEnd);
                comic_anim_node.active = false;
                this.playAnim();
            }
        } else {
            if (this.comicAnimState && this.comicCanTouch) {
                this.comicCanTouch = false;
                // 将当前时间设为动画的时长，这样就跳到了最后一帧
                this.comicAnimState.time = this.comicAnimState.duration;
                this.comicAnimState.sample();  // 强制更新动画到当前帧
            }
        }
    }
    // 播放动画
    playAnim() {
        if (this.comicIndex == 0){
            Sound.ins.pause()
        }
        // 节点名字
        var self = this;
        this.clickEnd = false;
        this.waitEnd = null;
        this.comicCanTouch = true;
        const comic_anim_node = this.comicNode.getChildByName(this.comicData.NodeName[this.comicIndex]);
        // 动画名字
        const comic_anim_name = this.comicData.AnimationName[this.comicIndex];
        const anim: Animation = comic_anim_node.getComponent(Animation)
        anim.play(comic_anim_name);
        this.comicAnimState = anim.getState(comic_anim_name);
        anim.on(Animation.EventType.FINISHED, e => {
            console.log("cocos 动画播放完---", comic_anim_name);
            self.comicIndex++;
            self.comicCanTouch = false;
            self.clickEnd = true;
            if (self.comicIndex === self.comicData.NodeName.length) {
                // 漫画结束结束
                console.log("cocos 漫画结束结束--- 释放资源");
                self.waitEnd = setTimeout(() => {
                    self.releaseComic();
                }, 3000)
            } else {
                self.waitEnd = setTimeout(() => {
                    comic_anim_node.active = false;
                    self.playAnim();
                }, 3000)
            }
        })
    }
    releaseComic() {
        Sound.ins.resume()
        this.comicNode.off(Node.EventType.TOUCH_START, this.touchComic, this);
        this.comicNode.destroy();
        this.comicNode = null;
        ResMgr.release(this.comicData.prefabName, Prefab);
        if (this.comicOvercallback) {
            this.comicOvercallback();
        }
    }
}


