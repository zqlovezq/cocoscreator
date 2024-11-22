/**
 * 
 */

import { proto } from "../../../Protocol/client_protocol";
import { Net } from "../../../Protocol/Net";
import { tab } from "../../../Table/table_gen";
import RewardPfb from "../../Common/RewardPfb";

const { ccclass, property } = cc._decorator;
@ccclass
export default class DrawShow extends cc.Component {

    @property(cc.Node)
    card_ten_node: cc.Node = null;

    @property(cc.Node)
    card_one_node: cc.Node = null;

    @property(cc.Prefab)
    reward_prefab: cc.Prefab = null;
    @property(cc.Button)
    private close_btn: cc.Button = null;
    @property(cc.Node)
    desLbl: cc.Node = null;
    @property(sp.Skeleton)
    effect: sp.Skeleton = null;

    private content: cc.Node = null;
    private rewardData: Array<proto.IRewardSimpleInfo> = [];
    private isGacha = false;
    private _cellPools: cc.NodePool = null;
    private _destroyCallback: Function = null;
    private playCompleteCall: Function = null;
    
    private drawScheduleFunc:Function = null;
    onLoad(): void {
        this.close_btn.node.on("click", this.clickCloseBtn, this);
        this._cellPools = new cc.NodePool();
        let initCount = 10;
        for (let i = 0; i < initCount; ++i) {
            let cell = cc.instantiate(this.reward_prefab); // 创建节点
            this._cellPools.put(cell); // 通过 put 接口放入对象池
        }
    }

    start() {

    }
    clickCloseBtn() {
        if (this.isGacha) {
            if (this.content.children.length > 1) {
                console.log("加速")
                cc.director.getScheduler().setTimeScale(4);
            }
        } else {
            this.setVisible(false)
        }
    }
    setVisible(visible: boolean) {
        this._destroyPool();
        this._destroyCallback && this._destroyCallback()
        this.node.removeFromParent();
        this.node.destroy();
    }

    onDestroy() {
        console.log("抽卡显示界面销毁");
    }

    private _destroyPool() {
        this._cellPools.clear();
    }

    saveGetCardState(){
        let list = this.content.getComponentsInChildren(RewardPfb)
        list.forEach(element => {
            element.checkTransformReward()
        });
    }

    public initData(data: proto.IRewardSimpleInfo[], destroyCallback: Function,playCompleteCall:Function) {
        this._destroyCallback = destroyCallback
        this.playCompleteCall = playCompleteCall
        this.desLbl.active = false;
        this.rewardData = data;
        this.isGacha = true;
        this.card_one_node.active = data.length === 1;
        this.card_ten_node.active = data.length === 10;
        this.content = data.length === 1 ? this.card_one_node : this.card_ten_node
        this.clearContent();
        let len = this.content.children.length;
        // len === 1 ? this.more_gacha_number.string = "一" : this.more_gacha_number.string = "十"
        // len === 1 ? this.more_gacha_diamond.string = `${tab.Data.GetKeyValue_ConfigTable().GachaCostCountOnce}` : this.more_gacha_diamond.string = `${tab.Data.GetKeyValue_ConfigTable().GachaCostCountTen}`
        this.draw3(len,0.5)
    }
    draw3(len: number,time:number) {
        let radmonArr = [-269.5, -135.5, -1.5, 132.5, 266.5];
        let animNameArr = ["bai", "lan", "zi", "jin"];
        let index = 0;
        let endIndex = 0;
        this.drawScheduleFunc = ()=>{
            let ect: cc.Node = cc.instantiate(this.effect.node);
            let effectAnim = ect.getComponent(sp.Skeleton);
            this.node.addChild(ect);
            ect.active = true;
            if (index < 5) {
                ect.y = 122;
                ect.x = radmonArr[index];
            } else {
                ect.y = -144;
                ect.x = radmonArr[index-5];
            }
            if (len === 1) {
                ect.y = -50;
                ect.x = 0;
            }
            let info = this.rewardData[index];
            let itemData: tab.ItemTable = tab.Data.ItemTableByID.getValue(info.rewardId);
            let animName = "luo" + animNameArr[itemData.Quality];
            effectAnim.setAnimation(0, animName, false);
            effectAnim.setCompleteListener(() => {
                if (effectAnim && effectAnim.node && cc.isValid(effectAnim) && cc.isValid(effectAnim.node)) {
                    effectAnim.node.destroy();
                }
            })
            this.scheduleOnce(()=>{
                let parent = this.content.children[endIndex];
                let prefab = null;
                if (this._cellPools.size() > 0) {
                    prefab = this._cellPools.get();
                } else {
                    prefab = cc.instantiate(this.reward_prefab);
                }
                parent.addChild(prefab);
                let ts = prefab.getComponent(RewardPfb);
                ts.setRewardInfo(info.rewardId, tab.RewardType.RewardType_SelectCardBySelf, info.rewardCount, true);
                ts.setTransformedRewards(info.transformedRewards)
                // ts.setTransformedRewards([{rewardType:tab.RewardType.RewardType_ItemType,rewardId:1,rewardCount:11},{rewardType:tab.RewardType.RewardType_SelectCardBySelf,rewardId:info.rewardId,rewardCount:0}])
                endIndex++;
                if (endIndex === len) {
                    cc.director.getScheduler().setTimeScale(1);
                    this.playCompleteCall && this.playCompleteCall()
                    this.playCompleteCall = null
                    this.drawScheduleFunc = null;
                    this.desLbl.active = true;
                    this.isGacha = false;
                    this.saveGetCardState()
                }
            },0.3)
            index++;
        }
        this.schedule(this.drawScheduleFunc, time, len - 1)
    }
    /* 先清空content里面的内容 */
    private clearContent() {
        let len = this.content.children.length;
        for (let i = 0; i < len; i++) {
            let node = this.content.children[i];
            let cell = node.children[0];
            // 将节点放进对象池，这个方法会同时调用节点的 removeFromParent
            if (cell) {
                this._cellPools.put(cell);
            }
        }
    }
}
