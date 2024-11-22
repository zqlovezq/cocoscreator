/**
 *  周广告宝箱
*/

import PopLayer from "../Utils/PopLayer";
import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { popRewardLayer_Ex, showItemTips, ShowTips } from "../Utils/GameUtils";
import WeekBoxItem from "./WeekBoxItem";
import { tab } from "../../Table/table_gen";
import BattleLayer from "../Main/BattleLayer";

const {ccclass, property} = cc._decorator;
const enum STATE {
    NONE,
    SELECT,
    GET,
    GOT
} 
@ccclass
export default class WeekBox extends PopLayer {
    @property(cc.Prefab)
    weekItem:cc.Prefab = null;
    @property(cc.Node)
    boxLayout:cc.Node = null;
    @property(cc.Button)
    close_btn:cc.Button = null;
    @property(cc.ProgressBar)
    adProgress:cc.ProgressBar = null;
    private _boxId:number = 0;
    private _unlockCount:number = 0;
    private _rewardList:number[] = [];
    private _acquireList:number[] = [];
    private _adWatchedCount:number[] = [];
    onLoad () {
        this.close_btn.node.on("click", () => { this.setVisible(false); }, this);
        /* 领取周宝箱 */
        Net.listenProtocol(proto.Ptl.WeeklyAdBoxGetAwardRsp, async (buffer, ptl) => {
            let msg = proto.Msg_WeeklyAdBoxGetAwardRsp.decode(buffer)
            cc.log("WeeklyAdBoxGetAwardRsp (领取周广告宝箱) msg: " + JSON.stringify(msg));
            if (msg != null) {
                if(msg.result == proto.Msg_WeeklyAdBoxGetAwardRsp.ErrorCode.Succeed){
                    this.hide();
                    popRewardLayer_Ex(msg.Awards, null, true);
                    // 刷新一下红点
                    BattleLayer.openWeekBox = false;
                    let _msg = new proto.Msg_WeeklyAdBoxInfoReq();
                    Net.Send(proto.Ptl.WeeklyAdBoxInfoReq, _msg);
                } else {
                    this.hide();
                    ShowTips("LeftTimesNotEnough");
                }
            }
        }, this);
    }
    public setWeekLayer(data:proto.IMsg_WeeklyAdBoxInfoRsp){
        console.log("周广告宝箱信息---",data);
        this._boxId = data.BoxID;
        this._rewardList = data.RewardList;
        this._acquireList = data.AcquireList;
        this._adWatchedCount = data.AdWatchedCount;
        this._unlockCount = data.UnlockCount;
        //创建weekBoxitem
        let posArr = [{x:-223.5,y:91},{x:-74.5,y:91},{x:74.5,y:91},{x:223.5,y:91},{x:-150.5,y:-119},{x:0,y:-119},{x:150,y:-119}]
        // 刷新进度条
        let cnt = 0
        for(let i = 0; i < this._adWatchedCount.length; ++i) {
            cnt += this._adWatchedCount[i]
        }
        this.adProgress.progress = cnt/10;

        for(let i=0;i<this._rewardList.length;i++){
            let item = null;
            if(!this.boxLayout.children[i]){
                item = cc.instantiate(this.weekItem);
                this.boxLayout.addChild(item);
            }else{
                item = this.boxLayout.children[i];
            }
            let itemTs:WeekBoxItem = item.getComponent(WeekBoxItem);
            itemTs.setItem(this._rewardList[i]);

            //当前进度条的state
            let state:number = this.caleBoxState(i,cnt);
            itemTs.setItemState(state,this._unlockCount===i);

            item.setPosition(posArr[i].x,posArr[i].y);
        }
    }
    // 计算每个宝箱当前的状态
    private caleBoxState(index:number,adCount:number):number{
        let cfg = tab.Data.AdSevenDayTableByID.getValue(this._boxId);
        if(this._unlockCount===index){
            if(this._acquireList.indexOf(index+1)>-1){
                // 领过了
                return STATE.GOT;
            }else{
                if(adCount>=cfg.DemandCount){
                    return STATE.GET
                }
                return STATE.SELECT
            }
        }else if(this._unlockCount>index){
            // 判断是否领取
            if(this._acquireList.indexOf(index+1)>-1){
                // 领过了
                return STATE.GOT;
            }else{
                return STATE.GET;
            }
        }else{
            return STATE.NONE
        }
    }
    // /* 更新奖品的ICON */
    // private updateRewardIcon(){
    //     for (let i=0; i<7; i++){
    //         let Reward = tab.Data.AdSevenDayTable[i];
    //         if(Reward && Reward.RewardID){
    //             let itemData: tab.BoxTable = tab.Data.BoxTableByBoxID.getValue(Reward.RewardID);
    //             //cc.log("itemData: " + JSON.stringify(itemData));
    //             let boxIcon = this.daysArray[i].getChildByName("box_icon");
    //             if(boxIcon){
    //                 let sp = boxIcon.getComponent("cc.Sprite")
    //                 if(sp){
    //                     sp.setTexture(itemData.ItemIcon)
    //                 }
    //             }
    //         }
    //         //cc.log("Reward: " + JSON.stringify(Reward));
    //     }
    // }

    // /* 更新数据 */
    // private updateData(msg: any){
    //     this._storeIDArray      = msg.StoreIDArray;
    //     this._watchCnt          = msg.TodayCount;
    //     this._curIndex          = msg.CurrentID;
    //     this._todayBoxIsGot     = msg.TodayBoxIsGot;
    //     this._todayBoxCanReward = msg.TodayBoxCanReward;
    // }

    // /* TODO: */
    // private setRewardInfo(index:number, canGetVisible:boolean, alreadyGotVisible:boolean=!canGetVisible) {
    //     let idx = index-1
    //     if(0 <= idx &&  idx<= this.alreadyGotNodes.length){
    //         this.canGetNodes[idx].active     = canGetVisible;
    //         this.alreadyGotNodes[idx].active = alreadyGotVisible;
    //     }
    // }

    // /* 更新奖品是否被激活(就是显示外面的光圈是否显示) */
    // private setRewardActive(index: number, bVisible:boolean){
    //     let idx = index
    //     if(0 <= idx && idx<= this.alreadyGotNodes.length){
    //         this.activeNodes[idx].active = bVisible;
    //     }
    //     if(bVisible){
    //         this.updateScrollBar(this._watchCnt/10);
    //         this.updateRewardBtnStatus(this._curIndex);
    //     }
    // }

    // /* 更新奖品 已领取/可领取/ */
    // private updateRewardUI(){
    //     let a = this.alreadyGotNodes.length
    //     let b = this.canGetNodes.length
    //     //let tempA = [1]; /* 模拟已经领取的数据 */
    //     //let aLen = tempA.length;

    //     let unRewardLen = this._storeIDArray.length; /* 尚未领取的数组的长度 */
    //     let lastDay = 0; /*  */
    //     if(unRewardLen>0){
    //         lastDay = this._storeIDArray[unRewardLen-1]; /* 最后没领取的天 */
    //     }
    //     if(lastDay < this._curIndex){ /* 没有跨周 */
    //         if(a==b){
    //             for(let i=1; i<=a; i++){ /* 遍历所有节点(服务器是从1开始循环的，所以前后端对应，都从1开始循环) */
    //                 if (i < this._curIndex){ /* 今天之前的所有节点 */
    //                     if(-1 != this._storeIDArray.indexOf(i)){ /* 往日未领取数组中找，找到了 */ 
    //                         this.setRewardInfo(i, true);// 还没领取呢
    //                     } else { // 已经领取了
    //                         this.setRewardInfo(i, false);
    //                     }
    //                 } else if (i==this._curIndex){ /* 今天 */
    //                     if(this._todayBoxIsGot){ /* 已经领取 */
    //                         this.setRewardInfo(i, false);
    //                     } else { /* 还没领取 */
    //                         if(this._todayBoxCanReward){ /* 可以领取 */
    //                             this.setRewardInfo(i, true);
    //                         } else { /* 不可以领取 */
    //                             this.setRewardInfo(i, false, false);
    //                         }
    //                     }
    //                     this.setHightLight(this._curIndex);
    //                 } else { /* 还没到的天数的节点 */
    //                     this.setRewardInfo(i, false, false);
    //                 }
    //             }
    //         } else {
    //             cc.error("WeekBox.ts对应的prefab上UI有错误");
    //         }
    //     } else { /* 跨周了 */
    //         this.setHightLight(lastDay);
    //         for(let i=1; i<=a; i++){
    //             if(-1 != this._storeIDArray.indexOf(i)){ /* 往日未领取数组中找，找到了 */ 
    //                 this.setRewardInfo(i, true);// 还没领取呢
    //             } else { // 已经领取了
    //                 this.setRewardInfo(i, false);
    //             }
    //         }
    //     }
    // }

    // /* 更新领取按钮状态 */
    // private updateRewardBtnStatus(i:number){
    //     // 看下是哪天
    //     if (i < this._curIndex){ /* 今天之前的所有节点 */
    //         if(-1 != this._storeIDArray.indexOf(i)){ /* 往日未领取数组中找，找到了 */
    //             this.canRewardNode.active = true;
    //             this.allreadyGotRewardNode.active = false;
    //         } else { // 已经领取了
    //             this.canRewardNode.active = false;
    //             this.allreadyGotRewardNode.active = true;
    //         }
    //     } else if (i==this._curIndex){ /* 今天 */
    //         if(this._todayBoxIsGot){ /* 已经领取 */
    //             this.canRewardNode.active = false;
    //             this.allreadyGotRewardNode.active = true;
    //         } else { /* 还没领取 */
    //             if(this._todayBoxCanReward){ /* 可以领取 */
    //                 this.canRewardNode.active = true;
    //                 this.allreadyGotRewardNode.active = false;
    //             } else { /* 不可以领取 */
    //                 this.canRewardNode.active = false;
    //                 this.allreadyGotRewardNode.active = false;
    //             }
    //         }
    //     } else { /* 还没到的天数的节点 */
    //         this.canRewardNode.active = false;
    //         this.allreadyGotRewardNode.active = false;
    //     }
    // }

    // /* 更新进度条 */
    // private updateScrollBar(cnt:number){
    //     if(this.progressBar){
    //         this.progressBar.progress = cnt;///10; /* TODO: 10应该是读表 */
    //     }
    // }

    // /* 已领取 */
    // private setAllGotNodeVisible(bVisible:boolean) {
    //     let len = this.alreadyGotNodes.length
    //     for (let i=0; i<len; i++){
    //         this.alreadyGotNodes[i].active = bVisible;
    //     }
    // }

    // /* 可领取 */
    // private setAllCanGetNodeVisible(bVisible:boolean) {
    //     let len = this.canGetNodes.length
    //     for (let i=0; i<len; i++){
    //         this.canGetNodes[i].active = bVisible;
    //     }
    // }

    // onStart(){

    // }

    // /* 更新UI */
    // private updateWatchedCount(){
    //     this.lbl_watchedCnt.string = `${this._watchCnt}/10`
    // }

    // /* 关闭 */
    // onClickClosed(){
    //     cc.log("WeekBox.ts : onCLoseBtnClicked()");
    //     //this.hide()
    //     this.setVisible(false)
    // }

    // /* 领取奖励 */
    // onGetBtnClicked(){
    //     cc.log("WeekBox.ts : onGetBtnClicked()");
    //     if(this._todayBoxCanReward && !this._todayBoxIsGot){
    //         let msg = new proto.Msg_WeeklyAdBoxGetAwardReq();
    //         msg.DayIndex = this._curIndex;
    //         Net.Send(proto.Ptl.WeeklyAdBoxGetAwardReq, msg);
    //     } else {
    //         //TODO:
    //         cc.log("这里应该有一个Tips")
    //     }
    // }

    // /*  */
    // getWeekBoxConfigInfoByIndex(idx:number){
    //     let cfg = tab.Data.AdSevenDayTableByID.getValue(idx)
    //     cc.log("cfg: " + JSON.stringify(cfg))
    //     let reward = new proto.RewardSimpleInfo()
    //     reward.rewardCount  = cfg.RewardCount
    //     reward.rewardType   = cfg.RewardType
    //     reward.rewardId     = cfg.RewardID
    //     showItemTips(reward, this.canGetNodes[idx-1], true);
    // }

    // private getWeeklyAdBoxReward(index : number) {
    //     cc.log("getWeeklyAdBoxReward() index: "+ index);
    //     let msg = new proto.Msg_WeeklyAdBoxGetAwardReq();
    //     msg.DayIndex = index;
    //     Net.Send(proto.Ptl.WeeklyAdBoxGetAwardReq, msg);
    // }

    // /*  */
    // onDayItemClicked(event, customEventData){
    //     cc.log("onDayItemClicked() idx: ", customEventData)
    //     /* 检查今天是否可以领取 */
    //     let idx = Number(customEventData)+1;

    //     let unRewardLen = this._storeIDArray.length; /* 尚未领取的数组的长度 */
    //     let lastDay     = this._storeIDArray[unRewardLen-1]; /* 最后没领取的天 */

    //     if(lastDay < this._curIndex){ /* 没有跨周 */
    //         if( idx > this._curIndex){ /* 明天们 */
    //             this.getWeekBoxConfigInfoByIndex(idx) //showTips
    //         } else if (idx == this._curIndex){ /* 今天 */
    //             this.setHightLight(idx); /* 终于不改了，只高亮今天 */
    //         } else { /* 往天们 */
    //             if(-1 != this._storeIDArray.indexOf(idx)){ /* 往日未领取数组中找，找到了,发送领取消息 */
    //                 // 设置高亮图标
    //                 //this.setHightLight(idx);
    //                 // let msg = new proto.Msg_WeeklyAdBoxGetAwardReq();
    //                 // msg.DayIndex = idx;
    //                 // Net.Send(proto.Ptl.WeeklyAdBoxGetAwardReq, msg);
    //                 this.getWeeklyAdBoxReward(idx)
    //             } else { // 已经领取了
    //                 // 应策划的说法，只有领取过的不弹Tips
    //             }
    //         }
    //     } else { /* 跨周了 */
    //         if(-1 != this._storeIDArray.indexOf(idx)){ /* 往日未领取数组中找，找到了 */ 
    //             // this.setHightLight(idx); /* 终于不改了，只高亮今天 */
    //             // let msg = new proto.Msg_WeeklyAdBoxGetAwardReq();
    //             // msg.DayIndex = idx;
    //             // Net.Send(proto.Ptl.WeeklyAdBoxGetAwardReq, msg);
    //             this.getWeeklyAdBoxReward(idx)
    //         }
    //     }
    // }

    // /* 设置高亮 (经过和策划同仁的沟通，高亮永远只显示今天, */
    // /* 20230511+ 跨周的情况下，高亮也可能显示之前没有领取的天数中 */
    // private setHightLight(index:number){
    //     cc.log("setHightLight() index: " + index);
    //     let idx=index-1;
        
    //     let unRewardLen = this._storeIDArray.length; /* 尚未领取的数组的长度 */
    //     let lastDay = 0; /*  */
    //     if(unRewardLen>0){
    //         lastDay = this._storeIDArray[unRewardLen-1]; /* 最后没领取的天 */
    //     }
    //     if(lastDay < this._curIndex){ /* 没有跨周 */
    //         if(0<=idx && idx<=this.activeNodes.length){
    //             if(idx != this._curCursor){
    //                 this._curCursor = idx;
    //                 for(let i=0; i<this.activeNodes.length; i++){
    //                     if(this._curCursor != i){
    //                         this.activeNodes[i].active = false;
    //                     } else {
    //                         this.activeNodes[i].active = true;
    //                     }
    //                 }
    //             }
    //             this.setRewardActive(this._curCursor, true);
    //         }
    //     } else { /* 跨周了 */
    //         // if(0<=idx && idx<=this.activeNodes.length){
    //         //     for(let i=0; i<this.activeNodes.length; i++){
    //         //         if(idx != i){
    //         //             this.activeNodes[i].active = false;
    //         //         } else {
    //         //             this.activeNodes[i].active = true;
    //         //         }
    //         //     }
    //         //     this.setRewardActive(idx, true);
    //         // }
    //     }
    // }
}
